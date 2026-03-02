import { getConceptBySlug } from "@/src/data/concepts";
import ConceptPage from "@/src/components/ConceptPage";
import { generateConceptJsonLd, generateBreadcrumbJsonLd } from "@/src/lib/jsonld";
import * as content from "@/src/content/concepts/c9-content";

const concept = getConceptBySlug("tolerance-thresholds");

export const metadata = {
  title: `${concept.title || concept.name} — TEG-Blue Open Knowledge`,
  description: concept.seoDescription || concept.hook,
  keywords: concept.seoKeywords || [
    "TEG-Blue",
    "foundational concepts",
    concept.name.toLowerCase(),
    "emotional technology",
    "nervous system",
  ],
  alternates: {
    canonical: `https://teg-blue.org/concepts/${concept.slug}`,
  },
  openGraph: {
    title: `${concept.title || concept.name} — TEG-Blue`,
    description: concept.seoDescription || concept.hook,
    url: `https://teg-blue.org/concepts/${concept.slug}`,
    siteName: "TEG-Blue Open Knowledge",
    type: "article",
  },
};

export default function ToleranceThresholdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateConceptJsonLd(concept)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Concepts", url: "/concepts" },
          { name: concept.name, url: `/concepts/${concept.slug}` },
        ])) }}
      />
      <ConceptPage concept={concept} content={content} />
    </>
  );
}
