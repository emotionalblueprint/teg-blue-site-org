import Link from "next/link";
import { loadAllNodes } from "@/src/lib/content";
import { BG, TEXT, BORDER, FONT, SPECTRUM, MAIN_ORG, getContentTypeColor, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, TypeTag, StatusBadge, ResearcherHero, AuthorBlock } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What has TEG-Blue published?",
    answer: "TEG-Blue has published an empirical validation study analyzing 10,000+ natural conflict narratives (Reddit AITA posts) to test whether the Nervous System Gradient can be reliably detected in unstructured text (DOI: 10.5281/zenodo.18428907), plus a Theoretical Architecture Contribution Record documenting the 145+ source theories across 12 frameworks.",
  },
  {
    question: "What did the Nervous System Gradient validation study find?",
    answer: "All four nervous system states (Safety & Openness, Threat & Defence, Strategy & Management, Power & Dominance) were successfully detected using polyvagal markers, contempt markers, and moral disengagement markers. 33.8% of individuals escalated toward Strategy & Management/Power & Dominance when challenged, 22.2% de-escalated toward Safety & Openness, and de-escalators showed 78% higher rates of complexity markers than escalators.",
  },
  {
    question: "Are TEG-Blue datasets publicly available?",
    answer: "Yes. TEG-Blue publishes all methods, data, and code openly under CC-BY-NC-SA-4.0. Datasets are available on Zenodo with DOIs for reproducibility and independent replication.",
  },
];

export const metadata = {
  title: "Research Publications & Validation Studies | TEG-Blue Research",
  description: "Research publications, validation studies, and datasets from TEG-Blue. Includes empirical validation of the Nervous System Gradient on 10,000+ narratives (DOI: 10.5281/zenodo.18428907).",
  keywords: [
    "TEG-Blue publications",
    "emotional regulation research papers",
    "nervous system gradient validation",
    "computational linguistics emotions",
    "natural language processing psychology",
    "open science datasets",
    "Zenodo research data",
    "emotional intelligence validation",
    "Reddit AITA analysis",
    "conflict narrative analysis",
    "polyvagal markers",
    "moral disengagement markers"
  ],
  alternates: {
    canonical: "https://teg-blue.org/publications",
  },
  openGraph: {
    title: "Publications — TEG-Blue Research",
    description: "Validation studies, research papers, and open datasets. Nervous System Gradient validated on 10,000+ conflict narratives.",
    url: "https://teg-blue.org/publications",
    siteName: "TEG-Blue Research",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Publications — TEG-Blue Research",
    description: "Research papers, validation studies, and open datasets for emotional regulation research.",
  },
  other: {
    'citation_title': 'Detecting Nervous System States in Natural Language: Empirical Validation of the Nervous System Gradient Framework',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_doi': '10.5281/zenodo.18428907',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// JSON-LD schemas for datasets and publications
const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "TEG-Blue Validation Study Dataset",
  "description": "10,000+ anonymized conflict narratives from Reddit AITA, annotated with nervous system state markers, complexity markers, and community moral judgments. Used to validate the Nervous System Gradient framework.",
  "url": "https://doi.org/10.5281/zenodo.18428907",
  "identifier": "10.5281/zenodo.18428907",
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
    "name": "TEG-Blue Research"
  },
  "datePublished": "2026-02",
  "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  "isAccessibleForFree": true,
  "includedInDataCatalog": {
    "@type": "DataCatalog",
    "name": "Zenodo"
  },
  "distribution": {
    "@type": "DataDownload",
    "encodingFormat": "application/pdf",
    "contentUrl": "https://doi.org/10.5281/zenodo.18428907"
  },
  "measurementTechnique": "Computational linguistic analysis with polyvagal markers, contempt markers, and moral disengagement markers",
  "variableMeasured": [
    "Nervous system state classification (Safety & Openness, Threat & Defence, Strategy & Management, Power & Dominance)",
    "Complexity markers in language",
    "Escalation/de-escalation trajectories",
    "Community moral judgments"
  ]
};

const scholarlyArticleSchema = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "Empirical validation of the Nervous System Gradient framework",
  "alternativeHeadline": "Detecting Nervous System States in Natural Language",
  "author": {
    "@type": "Person",
    "name": "Anna Paretas-Artacho",
    "identifier": "https://orcid.org/0009-0005-2394-7162"
  },
  "datePublished": "2026-02",
  "publisher": {
    "@type": "Organization",
    "name": "Zenodo"
  },
  "identifier": "10.5281/zenodo.18428907",
  "url": "https://doi.org/10.5281/zenodo.18428907",
  "about": [
    "Emotional regulation",
    "Natural language processing",
    "Polyvagal theory",
    "Nervous System Gradient"
  ],
  "abstract": "A computational analysis of 10,000+ natural conflict narratives testing whether the nervous system gradient can be reliably detected in unstructured text. Key findings: All four nervous system states successfully detected; 33.8% of individuals escalated toward Strategy & Management/Power & Dominance when challenged; 22.2% de-escalated toward Safety & Openness; De-escalators showed 78% higher rates of complexity markers."
};

const SIDEBAR_SECTIONS = [
  { label: "Validation Study", href: "#validation-study", description: "Computational analysis of 10,000+ natural conflict narratives. The empirical backbone of the nervous system gradient." },
  { label: "All Publications", href: "#all-publications", description: "Published research papers, working papers, and theoretical architecture documents." },
  { label: "Datasets", href: "#datasets", description: "Open datasets supporting the validation study and ongoing research." },
  { label: "How to Cite", href: "#how-to-cite", description: "Citation format and examples for academic use." },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticleSchema) }}
      />

      <SiteHeader currentPath="/publications" />

      <PageLayout
        header={
          <ResearcherHero
            badge="PUBLICATIONS"
            title="Publications & Datasets"
            description="Research publications, validation studies, and datasets from TEG-Blue."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* Validation study card */}
        <section id="validation-study" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            What did the TEG-Blue validation study find?
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
              Detecting Nervous System States in Natural Language
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16 }}>
              A computational analysis of 10,000+ natural conflict narratives testing whether the nervous system gradient can be reliably detected in unstructured text.
            </p>
            <div style={{ fontSize: 13, fontFamily: FONT.mono, color: TEXT.muted, marginBottom: 16 }}>
              Anna Paretas-Artacho · February 2026 · DOI: 10.5281/zenodo.18428907
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
                Key Findings
              </h4>
              <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13, color: TEXT.secondary, lineHeight: 1.7 }}>
                <li style={{ marginBottom: 4 }}>All four nervous system states successfully detected</li>
                <li style={{ marginBottom: 4 }}><strong style={{ color: TEXT.primary }}>33.8%</strong> of individuals escalated toward Strategy & Management/Power & Dominance when challenged</li>
                <li style={{ marginBottom: 4 }}><strong style={{ color: TEXT.primary }}>22.2%</strong> de-escalated toward Safety & Openness</li>
                <li style={{ marginBottom: 4 }}>De-escalators showed <strong style={{ color: TEXT.primary }}>78% higher rates of complexity markers</strong></li>
                <li>State classifications correlated with independent community moral judgments</li>
              </ul>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="https://doi.org/10.5281/zenodo.18428907"
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
                View on Zenodo →
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
                Full Details
              </Link>
            </div>
          </div>
        </section>

        {/* Additional publications from content files */}
        {publications.length > 0 && (
          <section id="all-publications" style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
              All Publications
            </h2>
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
            Are TEG-Blue datasets publicly available?
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
              AITA Conflict Narratives Dataset
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 12 }}>
              10,000+ anonymized conflict narratives from Reddit AITA, annotated with nervous system state markers, complexity markers, and community moral judgments.
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
              Status: Available on request for research purposes
            </span>
          </div>
        </section>

        {/* How to cite */}
        <section id="how-to-cite" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            How to cite
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
            See the <Link href="/citations" style={{ color: SPECTRUM.blue }}>Citations page</Link> for full citation formats and guidelines.
          </p>
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
            Request access or collaborate
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16 }}>
            For dataset access, replication support, or collaboration inquiries.
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
          <Link href="/citations" style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}>
            How to Cite →
          </Link>
          <Link href="/collaborate" style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}>
            Collaborate →
          </Link>
          <a
            href="https://teg-blue.com/emotional-tools"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}
          >
            Emotional Tools (teg-blue.com) →
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
              name: "Publications | TEG-Blue Research",
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
          {publication.title}
        </h2>

        <p
          style={{
            fontSize: 13,
            lineHeight: 1.6,
            color: TEXT.secondary,
            marginBottom: 10,
          }}
        >
          {publication.summary}
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
