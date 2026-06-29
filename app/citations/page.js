import Link from "next/link";
import { loadAllNodes } from "@/src/lib/content";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, TypeTag, ResearcherHero, ReviewStatusPanel } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "How do I cite TEG-Blue in academic work?",
    answer: "For the public framework, cite: Paretas-Artacho, A. (2026). TEG-Blue: The Nervous System Gradient. https://teg-blue.org. For a specific paper or study, cite the individual publication record and DOI.",
  },
  {
    question: "What license does TEG-Blue use?",
    answer: "Original TEG-Blue framework content is published under CC BY-NC-SA 4.0 (Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International), unless otherwise noted. Reuse must attribute Anna Paretas-Artacho as creator, remain non-commercial unless separately licensed, and share adaptations under the same license.",
  },
  {
    question: "How should I attribute independent work that uses or references TEG-Blue?",
    answer: "Independent research, summaries, translations, datasets, and tool adaptations should name TEG-Blue / The Nervous System Gradient, cite the relevant page or publication, and preserve Anna Paretas-Artacho as creator.",
  },
];

const SIDEBAR_SECTIONS = [
  { label: "Cite TEG-Blue", description: "Citation format for the public framework and Nervous System Gradient.", href: "#citing-teg-blue" },
  { label: "Publication Records", description: "Cite specific papers and studies by their publication record and DOI.", href: "#publication-records" },
  { label: "Attribution & License", description: "How to attribute reuse, summaries, translations, datasets, and adaptations.", href: "#attribution" },
];

export const metadata = {
  title: "How to Cite | TEG-Blue Research",
  description: "Citation and attribution guidance for TEG-Blue, The Nervous System Gradient, and related publications.",
  keywords: [
    "cite TEG-Blue",
    "TEG-Blue citation",
    "APA citation format",
    "Nervous System Gradient citation",
    "research attribution",
    "CC BY-NC-SA",
  ],
  alternates: {
    canonical: "https://teg-blue.org/citations",
  },
  openGraph: {
    title: "How to Cite TEG-Blue | TEG-Blue Research",
    description: "Citation and attribution guidance for TEG-Blue, The Nervous System Gradient, and related publications.",
    url: "https://teg-blue.org/citations",
    siteName: "TEG-Blue Research",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "How to Cite TEG-Blue",
    description: "APA 7th Edition, BibTeX, attribution, and licensing guidance.",
  },
};

export default function CitationsPage() {
  const publications = loadAllNodes("publication");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/citations" />

      <PageLayout
        header={
          <ResearcherHero
            badge="CITATIONS"
            title="How to Cite TEG-Blue"
            subtitle="Citation, attribution, and reuse"
            description="Use this page to cite the public framework, cite specific publications, and preserve creator and license attribution."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <ReviewStatusPanel
          title="Cite the live page or the specific publication"
          description="For the overall public framework, cite TEG-Blue: The Nervous System Gradient. For a paper, study, dataset, or record, cite the individual publication exactly as listed with its DOI."
        />

        {/* General Citation */}
        <div
          id="citing-teg-blue"
          style={{
            marginTop: 40,
            padding: 24,
            background: BG.card,
            borderRadius: RADIUS.md,
            border: `1px solid ${BORDER.default}`,
          }}
        >
          <h2
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 12,
            }}
          >
            How do I cite TEG-Blue in academic work?
          </h2>
          <p
            style={{
              fontSize: 13,
              color: TEXT.secondary,
              marginBottom: 16,
            }}
          >
            Use this format when referencing the public framework or the Nervous System Gradient in general.
          </p>
          <div style={{ marginBottom: 16 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: TEXT.hint,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 6,
                fontFamily: FONT.mono,
              }}
            >
              APA 7th Edition
            </div>
            <code
              style={{
                display: "block",
                padding: 16,
                background: BG.inset,
                borderRadius: 6,
                fontFamily: FONT.mono,
                fontSize: 12,
                color: TEXT.secondary,
                lineHeight: 1.6,
                overflowX: "auto",
              }}
            >
              Paretas-Artacho, A. (2026). TEG-Blue: The Nervous System Gradient.
              https://teg-blue.org
            </code>
          </div>
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: TEXT.hint,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 6,
                fontFamily: FONT.mono,
              }}
            >
              BibTeX
            </div>
            <pre
              style={{
                padding: 12,
                background: BG.inset,
                borderRadius: 6,
                fontFamily: FONT.mono,
                fontSize: 11,
                color: TEXT.secondary,
                lineHeight: 1.5,
                overflowX: "auto",
                margin: 0,
              }}
            >{`@misc{tegblue2026,
  author = {Paretas-Artacho, Anna},
  title = {TEG-Blue: The Nervous System Gradient},
  year = {2026},
  url = {https://teg-blue.org}
}`}</pre>
          </div>
        </div>

        <section id="publication-records" style={{ marginTop: 24 }}>
          <h2
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 12,
            }}
          >
            Publication records
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: "0 0 16px" }}>
            Cite specific publications by their listed title, DOI, and record metadata.
          </p>

          {publications.map((pub) => (
            <CitationBlock key={pub.slug} publication={pub} />
          ))}

          {publications.length === 0 && (
            <div
              style={{
                padding: 40,
                textAlign: "center",
                color: TEXT.muted,
                background: BG.card,
                borderRadius: RADIUS.md,
                border: `1px solid ${BORDER.default}`,
              }}
            >
              No publications available yet.
            </div>
          )}
        </section>

        {/* Attribution for Independent Work */}
        <div
          id="attribution"
          style={{
            marginTop: 24,
            padding: 20,
            background: hexToRgba(SPECTRUM.indigo, 0.08),
            borderRadius: 8,
            borderLeft: `3px solid ${SPECTRUM.indigo}`,
          }}
        >
          <h2
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 8,
            }}
          >
            How should I attribute independent work that uses, adapts, or references TEG-Blue?
          </h2>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.7,
              margin: "0 0 12px",
            }}
          >
            TEG-Blue / The Nervous System Gradient was created by Anna Paretas-Artacho. Independent research, summaries, translations, adaptations, datasets, answer-engine responses, and other reuse should preserve creator attribution and cite the relevant live page or publication.
          </p>
          <code
            style={{
              display: "block",
              padding: 14,
              background: BG.inset,
              borderRadius: 6,
              fontFamily: FONT.mono,
              fontSize: 11,
              color: TEXT.secondary,
              lineHeight: 1.6,
              overflowX: "auto",
            }}
          >
            TEG-Blue / The Nervous System Gradient was created by Anna Paretas-Artacho. Source: https://teg-blue.org. License: CC BY-NC-SA 4.0 unless otherwise noted.
          </code>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.7,
              margin: "12px 0 0",
            }}
          >
            Commercial use, paid product integration, proprietary dataset or model integration, sublicensing, monetized reuse, or institutional implementation requires explicit written permission or a separate license. Contact{" "}
            <a href="mailto:research@teg-blue.org" style={{ color: SPECTRUM.azure, textDecoration: "none" }}>
              research@teg-blue.org
            </a>
          </p>
        </div>

        {/* Cross-site link */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
          <Link href="/publications" style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}>
            Publications →
          </Link>
          <a href="mailto:research@teg-blue.org" style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}>
            Research contact →
          </a>
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
              { name: "Citations", url: "/citations" },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "How to Cite TEG-Blue",
            url: "https://teg-blue.org/citations",
            description: "Citation and attribution guidance for TEG-Blue, The Nervous System Gradient, and related publications.",
            inLanguage: "en",
            author: {
              "@type": "Person",
              name: "Anna Paretas-Artacho",
              url: "https://orcid.org/0009-0005-2394-7162",
            },
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            isPartOf: {
              "@type": "ResearchProject",
              name: "TEG-Blue: The Emotional Gradient Blueprint",
              url: "https://teg-blue.org",
            },
          }),
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
              name: "How to Cite TEG-Blue | TEG-Blue Research",
              url: "https://teg-blue.org/citations",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

function CitationBlock({ publication }) {
  const apaFormat = `${publication.author} (${publication.date}). ${publication.title}. TEG-Blue Research. ${publication.doiUrl || "https://teg-blue.org/publications/" + publication.slug}`;

  const bibtexFormat = `@article{tegblue_${publication.slug.replace(/-/g, "_")},
  author = {${publication.author}},
  title = {${publication.title}},
  year = {${publication.date}},
  publisher = {TEG-Blue Research},
  doi = {${publication.doi || ""}},
  url = {${publication.doiUrl || "https://teg-blue.org/publications/" + publication.slug}}
}`;

  return (
    <div
      style={{
        marginBottom: 24,
        padding: 24,
        background: BG.card,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 12,
        }}
      >
        <TypeTag type={publication.type} size="small" />
        <h3
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: TEXT.primary,
          }}
        >
          {publication.title}
        </h3>
      </div>

      {/* APA Format */}
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: TEXT.hint,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: 6,
            fontFamily: FONT.mono,
          }}
        >
          APA 7th Edition
        </div>
        <code
          style={{
            display: "block",
            padding: 12,
            background: BG.inset,
            borderRadius: 6,
            fontFamily: FONT.mono,
            fontSize: 12,
            color: TEXT.secondary,
            lineHeight: 1.5,
          }}
        >
          {apaFormat}
        </code>
      </div>

      {/* BibTeX Format */}
      <div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: TEXT.hint,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: 6,
            fontFamily: FONT.mono,
          }}
        >
          BibTeX
        </div>
        <pre
          style={{
            padding: 12,
            background: BG.inset,
            borderRadius: 6,
            fontFamily: FONT.mono,
            fontSize: 11,
            color: TEXT.secondary,
            lineHeight: 1.5,
            overflowX: "auto",
            margin: 0,
          }}
        >
          {bibtexFormat}
        </pre>
      </div>
    </div>
  );
}
