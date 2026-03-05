import Link from "next/link";
import { loadAllNodes } from "@/src/lib/content";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, RESEARCHER, getContentTypeColor, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, TypeTag, StatusBadge, ResearcherHero, AuthorBlock } from "@/src/components";

export const metadata = {
  title: "Publications | TEG-Blue Research",
  description: "Research publications, validation studies, and datasets from TEG-Blue. Includes empirical validation of the Four-Mode Gradient on 10,000+ narratives (DOI: 10.5281/zenodo.18428907).",
  keywords: [
    "TEG-Blue publications",
    "emotional regulation research papers",
    "four mode gradient validation",
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
    description: "Validation studies, research papers, and open datasets. Four-Mode Gradient validated on 10,000+ conflict narratives.",
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
};

// JSON-LD schemas for datasets and publications
const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "TEG-Blue Validation Study Dataset",
  "description": "10,000+ anonymized conflict narratives from Reddit AITA, annotated with regulatory state markers, complexity markers, and community moral judgments. Used to validate the Four-Mode Gradient framework.",
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
    "name": "TEG-Blue Research Consortium"
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
    "Regulatory state classification (Connection, Protection, Control, Domination)",
    "Complexity markers in language",
    "Escalation/de-escalation trajectories",
    "Community moral judgments"
  ]
};

const scholarlyArticleSchema = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "Empirical validation of the Four-Mode Gradient framework",
  "alternativeHeadline": "Detecting Regulatory States in Natural Language",
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
    "Four-Mode Gradient"
  ],
  "abstract": "A computational analysis of 10,000+ natural conflict narratives testing whether the four-mode gradient can be reliably detected in unstructured text. Key findings: All four regulatory modes successfully detected; 33.8% of individuals escalated toward Control/Domination when challenged; 22.2% de-escalated toward Connection; De-escalators showed 78% higher rates of complexity markers."
};

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

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `32px ${SPACING.pagePadding} 60px`,
        }}
      >
        <ResearcherHero
          badge="PUBLICATIONS"
          title="Publications & Datasets"
          description="Research publications, validation studies, and datasets from TEG-Blue."
        />

        {/* Validation study card */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Validation Study
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
              Detecting Regulatory States in Natural Language
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16 }}>
              A computational analysis of 10,000+ natural conflict narratives testing whether the four-mode gradient can be reliably detected in unstructured text.
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
                <li style={{ marginBottom: 4 }}>All four regulatory modes successfully detected</li>
                <li style={{ marginBottom: 4 }}><strong style={{ color: TEXT.primary }}>33.8%</strong> of individuals escalated toward Control/Domination when challenged</li>
                <li style={{ marginBottom: 4 }}><strong style={{ color: TEXT.primary }}>22.2%</strong> de-escalated toward Connection</li>
                <li style={{ marginBottom: 4 }}>De-escalators showed <strong style={{ color: TEXT.primary }}>78% higher rates of complexity markers</strong></li>
                <li>Mode classifications correlated with independent community moral judgments</li>
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
          <section style={{ marginBottom: 32 }}>
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
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Datasets
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
              10,000+ anonymized conflict narratives from Reddit AITA, annotated with regulatory state markers, complexity markers, and community moral judgments.
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
        <section style={{ marginBottom: 32 }}>
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
        <section style={{ marginBottom: 32 }}>
          <AuthorBlock />
        </section>

        {/* Footer note */}
        <footer style={{ marginTop: 32, textAlign: "center" }}>
          <p style={{ fontSize: 11, color: TEXT.micro, fontFamily: FONT.mono }}>
            TEG-Blue Research Consortium · Open Science · CC BY-NC-SA 4.0
          </p>
        </footer>
      </main>

      <SiteFooter />
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
