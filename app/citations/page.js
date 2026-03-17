import Link from "next/link";
import { loadAllNodes } from "@/src/lib/content";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RESEARCHER, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, TypeTag, ResearcherHero } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "How do I cite TEG-Blue in academic work?",
    answer: "Use APA 7th Edition format: Paretas-Artacho, A. (2026). TEG-Blue: The Emotional Gradient Framework. https://teg-blue.org. BibTeX format is also available on the citations page. For specific publications, cite the individual paper with its DOI.",
  },
  {
    question: "What license does TEG-Blue use?",
    answer: "TEG-Blue is published under CC-BY-NC-SA-4.0 (Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International). Independent research building on TEG-Blue should cite the framework as the originating architecture.",
  },
  {
    question: "How should I attribute independent work that builds on TEG-Blue?",
    answer: "Independent research should cite the TEG-Blue framework as the originating architecture. If you are unsure how to attribute, contact research@teg-blue.org for guidance.",
  },
];

const SIDEBAR_SECTIONS = [
  { label: "How to Cite", description: "How do I cite TEG-Blue? Full citation format for the framework, the validation study, and the theoretical architecture.", href: "#citing-teg-blue" },
  { label: "Attribution", description: "How should I attribute independent work that builds on TEG-Blue?", href: "#attribution" },
];

export const metadata = {
  title: "How to Cite | TEG-Blue Research",
  description: "Citation formats for TEG-Blue research publications. APA 7th Edition and BibTeX formats available.",
  keywords: [
    "cite TEG-Blue",
    "TEG-Blue citation",
    "APA citation format",
    "emotional technology citation",
    "research attribution",
  ],
  alternates: {
    canonical: "https://teg-blue.org/citations",
  },
  openGraph: {
    title: "How to Cite TEG-Blue | TEG-Blue Research",
    description: "Citation formats for TEG-Blue research publications. APA 7th Edition and BibTeX formats for the Four-Mode Gradient validation study and Theoretical Architecture.",
    url: "https://teg-blue.org/citations",
    siteName: "TEG-Blue Research",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "How to Cite TEG-Blue",
    description: "APA 7th Edition and BibTeX citation formats for TEG-Blue research publications.",
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
            description="Citation formats for TEG-Blue research publications."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
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
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
            }}
          >
            No publications available yet.
          </div>
        )}

        {/* General Citation */}
        <div
          id="citing-teg-blue"
          style={{
            marginTop: 40,
            padding: 24,
            background: BG.card,
            borderRadius: 8,
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
            When referencing the TEG-Blue framework in general (not a specific publication):
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
              Paretas-Artacho, A. (2026). TEG-Blue: The Emotional Gradient Framework.
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
  title = {TEG-Blue: The Emotional Gradient Framework},
  year = {2026},
  url = {https://teg-blue.org}
}`}</pre>
          </div>
        </div>

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
            How should I attribute independent work that builds on TEG-Blue?
          </h2>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Independent research that builds on TEG-Blue should cite the framework as the originating architecture.
            If you are unsure how to attribute, contact{" "}
            <a href="mailto:research@teg-blue.org" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              research@teg-blue.org
            </a>
          </p>
        </div>

        {/* Cross-site link */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
          <Link href="/publications" style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}>
            Publications →
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
            description: "Citation formats for TEG-Blue research publications. APA 7th Edition and BibTeX formats available.",
            inLanguage: "en",
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
