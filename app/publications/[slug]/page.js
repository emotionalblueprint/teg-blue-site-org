import { notFound } from "next/navigation";
import { loadNode, resolveConnections, getAllSlugs } from "@/src/lib/content";
import { generateJsonLd, generateMetaTags } from "@/src/lib/jsonld";
import { BG, FONT } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout } from "@/src/components";
import PublicationPage from "@/src/templates/PublicationPage";

const SIDEBAR_SECTIONS = [];

// Generate static paths for all publications
export async function generateStaticParams() {
  const slugs = getAllSlugs("publication");
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each publication
export async function generateMetadata({ params }) {
  const { slug } = await params;
  let node = loadNode("publication", slug);
  if (!node) node = loadNode("working-paper", slug);

  if (!node) {
    return {
      title: "Publication Not Found",
    };
  }

  const meta = generateMetaTags(node);

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: meta.openGraph.url,
      type: meta.openGraph.type,
      siteName: meta.openGraph.siteName,
    },
    other: {
      ...meta.dublinCore,
      'citation_title': node.title,
      'citation_author': node.author || 'Anna Paretas-Artacho',
      'citation_publication_date': node.date ? node.date.replace(/-/g, '/') : '2026/02',
      ...(node.doi && { 'citation_doi': node.doi }),
      'citation_technical_report_institution': 'TEG-Blue Research',
    },
  };
}

export default async function PublicationRoute({ params }) {
  const { slug } = await params;

  // Load node data
  let node = loadNode("publication", slug);
  if (!node) node = loadNode("working-paper", slug);
  if (!node) notFound();

  // Resolve connections
  node = resolveConnections(node);

  // Generate JSON-LD
  const jsonLd = generateJsonLd(node);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath={`/publications/${slug}`} />

      <PageLayout sidebarSections={SIDEBAR_SECTIONS}>
        <PublicationPage node={node} />
      </PageLayout>

      <SiteFooter />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </div>
  );
}
