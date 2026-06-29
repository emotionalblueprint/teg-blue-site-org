import Link from "next/link";
import { loadAllNodes } from "@/src/lib/content";
import { BG, TEXT, BORDER, FONT, SPECTRUM, MAIN_ORG, getContentTypeColor, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, TypeTag, StatusBadge, ResearcherHero, AuthorBlock } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What does this page collect?",
    answer: "This page collects TEG-Blue research records: DOI publications, working papers, dataset notes, and citation context. Across the site, TEG-Blue explains the work through the Nervous System Gradient, the TEG-Blue Engine, and gradient-based tools; individual records preserve their own titles and version history.",
  },
  {
    question: "What did the initial natural-language study report?",
    answer: "The study reported detectable regulatory-state patterns using markers drawn from polyvagal theory, contempt research, and moral disengagement theory. In the sample, 33.8% of individuals escalated toward Strategic Management/Domination when challenged, 22.2% de-escalated toward Connection, and de-escalators showed 78% higher rates of complexity markers than escalators.",
  },
  {
    question: "Are TEG-Blue datasets publicly available?",
    answer: "TEG-Blue aims to publish methods, code, and replication-ready descriptions where appropriate. Dataset access depends on privacy, licensing, platform terms, and study-specific constraints.",
  },
];

export const metadata = {
  title: "Publications & Research Records",
  description: "TEG-Blue research records: DOI publications, working papers, dataset notes, citation context, and research context for the Nervous System Gradient.",
  keywords: [
    "TEG-Blue publications",
    "emotional regulation research papers",
    "nervous system gradient research",
    "computational linguistics emotions",
    "natural language processing psychology",
    "source traces",
    "Zenodo research data",
    "research grounding",
    "Reddit AITA analysis",
    "conflict narrative analysis",
    "polyvagal markers",
    "moral disengagement markers"
  ],
  alternates: {
    canonical: "https://teg-blue.org/publications",
  },
  openGraph: {
    title: "Publications & Research Records — TEG-Blue",
    description: "DOI records, working papers, dataset notes, and citation context for TEG-Blue.",
    url: "https://teg-blue.org/publications",
    siteName: "TEG-Blue",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Publications & Research Records — TEG-Blue",
    description: "Research records and citation context for TEG-Blue.",
  },
};

// JSON-LD schemas for datasets and publications
const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "TEG-Blue Natural-Language Regulatory-State Study Dataset",
  "description": "10,000+ anonymized conflict narratives from Reddit AITA, annotated with nervous-system state markers, complexity markers, and community moral judgments for the initial TEG-Blue natural-language study.",
  "url": "https://doi.org/10.5281/zenodo.19472342",
  "identifier": "10.5281/zenodo.19472342",
  "keywords": [
    "emotional regulation",
    "natural language processing",
    "conflict narratives",
    "polyvagal theory",
    "moral psychology",
    "computational linguistics"
  ],
  "creator": {
    "@type": "Person",
    "name": "Anna Paretas-Artacho",
    "identifier": "https://orcid.org/0009-0005-2394-7162"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TEG-Blue"
  },
  "datePublished": "2026-04",
  "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  "isAccessibleForFree": true,
  "includedInDataCatalog": {
    "@type": "DataCatalog",
    "name": "Zenodo"
  },
  "distribution": {
    "@type": "DataDownload",
    "encodingFormat": "application/pdf",
    "contentUrl": "https://doi.org/10.5281/zenodo.19472342"
  },
  "measurementTechnique": "Computational linguistic analysis with polyvagal markers, contempt markers, and moral disengagement markers",
  "variableMeasured": [
    "Nervous system state classification (Connection, Protection, Strategic Management, Domination)",
    "Complexity markers in language",
    "Escalation/de-escalation trajectories",
    "Community moral judgments"
  ]
};

const getPublicationsCollectionSchema = (publications) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "TEG-Blue Publications and Research Records",
  "description": "DOI publications, working papers, dataset notes, and citation context for TEG-Blue.",
  "url": "https://teg-blue.org/publications",
  "about": [
    {
      "@type": "Thing",
      "name": "Nervous System Gradient"
    },
    {
      "@type": "Thing",
      "name": "TEG-Blue Engine"
    },
    {
      "@type": "Thing",
      "name": "Gradient-based tools"
    }
  ],
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": publications.map((publication, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://teg-blue.org/publications/${publication.slug}`,
      "name": publication.publicTitle || publication.title,
      "description": publication.publicSummary || publication.summary
    }))
  }
});

const SIDEBAR_SECTIONS = [
  { label: "Language Study", href: "#initial-study", description: "Natural-language analysis of 10,000+ conflict narratives." },
  { label: "Research Records", href: "#all-publications", description: "Published records, working papers, and version history." },
  { label: "Dataset Notes", href: "#datasets", description: "Dataset status for the initial study and ongoing research." },
  { label: "Citation", href: "#how-to-cite", description: "How to cite specific records and public pages." },
  { label: "Author", href: "#author", description: "About the research team and collaboration opportunities." },
];

export default function PublicationsPage() {
  const publications = loadAllNodes("publication");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      {/* Structured data for search engines and AI systems */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPublicationsCollectionSchema(publications)) }}
      />

      <SiteHeader currentPath="/publications" />

      <PageLayout
        header={
          <ResearcherHero
            badge="RESEARCH RECORDS"
            title="Publications & Research Records"
            description="DOI publications, working papers, dataset notes, and citation context for the Nervous System Gradient and TEG-Blue tools."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* Initial study card */}
        <section id="initial-study" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Initial natural-language study
          </h2>
          <div
            style={{
              padding: 24,
              background: BG.card,
              borderRadius: 10,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.azure}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  fontFamily: FONT.mono,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: SPECTRUM.azure,
                  padding: "4px 8px",
                  background: hexToRgba(SPECTRUM.azure, 0.1),
                  borderRadius: 4,
                }}
              >
                Published
              </span>
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              Regulatory-state markers in conflict narratives
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16 }}>
              A computational study of 10,000+ natural conflict narratives asked whether language markers associated with regulatory state could be detected in unstructured text.
            </p>
            <div style={{ fontSize: 13, fontFamily: FONT.mono, color: TEXT.muted, marginBottom: 16 }}>
              Anna Paretas-Artacho · April 2026 · DOI: 10.5281/zenodo.19472342
            </div>
            <div
              style={{
                padding: 16,
                background: BG.surface,
                borderRadius: 8,
                marginBottom: 16,
              }}
            >
              <h4 style={{ fontSize: 13, fontWeight: 600, color: TEXT.primary, marginBottom: 10 }}>
                What the record reports
              </h4>
              <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13, color: TEXT.secondary, lineHeight: 1.7 }}>
                <li style={{ marginBottom: 4 }}>Regulatory-state marker patterns were detected in the sample</li>
                <li style={{ marginBottom: 4 }}><strong style={{ color: TEXT.primary }}>33.8%</strong> of individuals escalated toward Strategic Management/Domination when challenged</li>
                <li style={{ marginBottom: 4 }}><strong style={{ color: TEXT.primary }}>22.2%</strong> de-escalated toward Connection</li>
                <li style={{ marginBottom: 4 }}>De-escalators showed <strong style={{ color: TEXT.primary }}>78% higher rates of complexity markers</strong></li>
                <li>State classifications correlated with independent community moral judgments</li>
              </ul>
              <p style={{ marginTop: 12, fontSize: 11, color: TEXT.muted, lineHeight: 1.6 }}>
                State labels shown in current naming (Connection · Protection · Strategic Management · Domination). The published study on Zenodo used earlier labels for the corresponding constructs. Use this record as study-level evidence for marker detection and state-dependent language patterns; broader Gradient and tool claims are evaluated claim by claim.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="https://doi.org/10.5281/zenodo.19472342"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 16px",
                  background: SPECTRUM.blue,
                  color: "#fff",
                  borderRadius: 6,
                  fontWeight: 500,
                  fontSize: 13,
                  textDecoration: "none",
                }}
              >
                Open DOI Record →
              </a>
              <Link
                href="/publications/validation-study"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 16px",
                  background: "transparent",
                  color: TEXT.secondary,
                  border: `1px solid ${BORDER.default}`,
                  borderRadius: 6,
                  fontWeight: 500,
                  fontSize: 13,
                  textDecoration: "none",
                }}
              >
                Read Record Page
              </Link>
            </div>
          </div>
        </section>

        {/* Additional publications from content files */}
        {publications.length > 0 && (
          <section id="all-publications" style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
              Research records
            </h2>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16 }}>
              Cards use the site's current language. Each record page preserves the published title, DOI, and version history for citation.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {publications.map((pub) => (
                <PublicationCard key={pub.slug} publication={pub} />
              ))}
            </div>
          </section>
        )}

        {/* Datasets */}
        <section id="datasets" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Dataset notes
          </h2>
          <div
            style={{
              padding: 20,
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.cobalt}`,
            }}
          >
            <h3 style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              AITA conflict narrative sample
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 12 }}>
              10,000+ public conflict narratives were analyzed for state-marker patterns, complexity markers, and community judgment relationships in the initial natural-language study.
            </p>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: SPECTRUM.slate,
                padding: "4px 8px",
                background: hexToRgba(SPECTRUM.slate, 0.1),
                borderRadius: 4,
              }}
            >
              Status: Research access reviewed case by case
            </span>
          </div>
        </section>

        {/* How to cite */}
        <section id="how-to-cite" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            How to cite
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
            Use DOI records when citing a specific publication. Use the current public page title when citing a web overview, framework page, or source map.
          </p>
          <Link href="/citations" style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}>
            Citation guidance →
          </Link>
        </section>

        {/* Contact */}
        <section
          style={{
            padding: 24,
            background: BG.card,
            borderRadius: 8,
            border: `1px solid ${BORDER.default}`,
            borderLeft: `3px solid ${SPECTRUM.azure}`,
          }}
        >
          <h2 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            Request research access or collaborate
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16 }}>
            For replication questions, dataset access requests, and research collaboration.
          </p>
          <a
            href="mailto:research@teg-blue.org"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              background: hexToRgba(SPECTRUM.blue, 0.1),
              border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.3)}`,
              borderRadius: 6,
              color: SPECTRUM.blue,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            research@teg-blue.org
          </a>
        </section>

        {/* Author */}
        <section id="author" style={{ marginBottom: 32 }}>
          <AuthorBlock />
        </section>

        {/* Cross-site link */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <a
            href="https://teg-blue.com/emotional-tools"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}
          >
            Applied tools on teg-blue.com →
          </a>
        </div>

      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Publications", url: "/publications" },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd(FAQ_ITEMS)) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "Publications | TEG-Blue",
              url: "https://teg-blue.org/publications",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

function PublicationCard({ publication }) {
  const color = getContentTypeColor(publication.type);
  const displayTitle = publication.publicTitle || publication.title;
  const displaySummary = publication.publicSummary || publication.summary;
  const showRecordTitle = publication.publicTitle && publication.publicTitle !== publication.title;

  return (
    <Link
      href={`/publications/${publication.slug}`}
      style={{ textDecoration: "none" }}
    >
      <article
        style={{
          padding: "20px 24px",
          borderRadius: 8,
          background: BG.card,
          border: `1px solid ${BORDER.default}`,
          borderLeft: `3px solid ${color}`,
          transition: "all 200ms ease",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <TypeTag type={publication.type} size="small" />
          <StatusBadge status={publication.status} />
        </div>

        <h2
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: TEXT.primary,
            marginBottom: 6,
            lineHeight: 1.3,
          }}
        >
          {displayTitle}
        </h2>

        {showRecordTitle && (
          <p
            style={{
              fontSize: 11,
              fontFamily: FONT.mono,
              color: TEXT.hint,
              lineHeight: 1.5,
              marginBottom: 8,
            }}
          >
            Published record title: {publication.title}
          </p>
        )}

        <p
          style={{
            fontSize: 13,
            lineHeight: 1.6,
            color: TEXT.secondary,
            marginBottom: 10,
          }}
        >
          {displaySummary}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 11,
            fontFamily: FONT.mono,
            color: TEXT.hint,
          }}
        >
          <span>{publication.author}</span>
          {publication.date && <span>{publication.date}</span>}
          {publication.doi && (
            <span style={{ color: hexToRgba(color, 0.8) }}>
              DOI: {publication.doi}
            </span>
          )}
        </div>
      </article>
    </Link>
  );
}
