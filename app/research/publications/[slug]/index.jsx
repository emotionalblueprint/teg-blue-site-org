/**
 * /research/publications/[slug] — Dynamic publication page
 * 
 * Renders any publication using the PublicationPage template.
 * Generates JSON-LD structured data at build time.
 */

import Head from "next/head";
import ResearchLayout from "../../../src/components/ResearchLayout";
import PublicationPage from "../../../src/templates/PublicationPage";
import { loadNode, resolveConnections, getAllSlugs } from "../../../src/lib/content";
import { generateJsonLd, generateBreadcrumbJsonLd, generateMetaTags } from "../../../src/lib/jsonld";

export default function PublicationRoute({ node }) {
  if (!node) return <div>Publication not found</div>;

  const jsonLd = generateJsonLd(node);
  const meta = generateMetaTags(node);
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Research", url: "/research" },
    { name: "Publications", url: "/research/publications" },
    { name: node.title, url: `/research/publications/${node.slug}` },
  ]);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={meta.openGraph.title} />
        <meta property="og:description" content={meta.openGraph.description} />
        <meta property="og:url" content={meta.openGraph.url} />
        <meta property="og:type" content={meta.openGraph.type} />
        <meta property="og:site_name" content={meta.openGraph.siteName} />

        {/* Dublin Core */}
        {Object.entries(meta.dublinCore).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}

        {/* JSON-LD */}
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        />
      </Head>

      <ResearchLayout currentPath={`/research/publications/${node.slug}`}>
        <PublicationPage node={node} />
      </ResearchLayout>
    </>
  );
}

// ─── BUILD-TIME DATA FETCHING ────────────────────────

export async function getStaticPaths() {
  const slugs = getAllSlugs("publication");
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let node = loadNode("publication", params.slug);
  if (!node) node = loadNode("working-paper", params.slug);
  if (!node) return { notFound: true };

  node = resolveConnections(node);

  return {
    props: { node },
  };
}
