import { notFound } from "next/navigation";
import { BG, FONT } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import MechanicsLayout from "../../MechanicsLayout";
import { SERIES, findPiece } from "../../mechanics-config";
import { PIECE_COMPONENTS } from "../../_pieces";
import { generateBreadcrumbJsonLd } from "@/src/lib/jsonld";

const BASE_URL = "https://teg-blue.org";

// ─── STATIC PARAMS ──────────────────────────────────

export function generateStaticParams() {
  const params = [];
  for (const series of SERIES) {
    for (const piece of series.pieces) {
      params.push({
        seriesSlug: series.slug,
        pieceSlug: piece.slug,
      });
    }
  }
  return params;
}

// ─── METADATA ───────────────────────────────────────

export async function generateMetadata({ params }) {
  const { seriesSlug, pieceSlug } = await params;
  const found = findPiece(pieceSlug);
  if (!found || found.series.slug !== seriesSlug) return { title: "Not Found" };

  const { piece, series } = found;
  const url = `${BASE_URL}/mechanics-of-phenomena/${seriesSlug}/${pieceSlug}`;

  return {
    title: `${piece.title} | TEG-Blue`,
    description: piece.metaDescription || piece.subtitle,
    alternates: { canonical: url },
    openGraph: {
      title: `${piece.title} | ${series.name}`,
      description: piece.metaDescription || piece.subtitle,
      url,
      type: "article",
      siteName: "TEG-Blue Research",
    },
  };
}

// ─── PAGE ───────────────────────────────────────────

export default async function MechanicsPiecePage({ params }) {
  const { seriesSlug, pieceSlug } = await params;
  const found = findPiece(pieceSlug);
  if (!found || found.series.slug !== seriesSlug) notFound();

  const { piece, series } = found;
  const PieceComponent = PIECE_COMPONENTS[pieceSlug];
  if (!PieceComponent) notFound();

  // JSON-LD: Article
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: piece.title,
    description: piece.metaDescription || piece.subtitle,
    author: {
      "@type": "Person",
      name: "Anna Paretas-Artacho",
    },
    publisher: {
      "@type": "Organization",
      name: "TEG-Blue Research Consortium",
      url: BASE_URL,
    },
    url: `${BASE_URL}/mechanics-of-phenomena/${seriesSlug}/${pieceSlug}`,
    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: series.name,
      url: `${BASE_URL}/mechanics-of-phenomena`,
    },
  };

  // JSON-LD: Breadcrumbs
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Research", url: "/" },
    { name: "Mechanics of Phenomena", url: "/mechanics-of-phenomena" },
    { name: series.name, url: `/mechanics-of-phenomena#${seriesSlug}` },
    { name: piece.title, url: `/mechanics-of-phenomena/${seriesSlug}/${pieceSlug}` },
  ]);

  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/mechanics-of-phenomena" />

      <MechanicsLayout
        activePiece={pieceSlug}
        showBackLink={true}
        articleSections={piece.sections}
      >
        <PieceComponent />
      </MechanicsLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </div>
  );
}
