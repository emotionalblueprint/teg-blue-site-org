import { loadAllNodes } from "@/src/lib/content";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RESEARCHER, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, TypeTag, ResearcherHero } from "@/src/components";

const SIDEBAR_SECTIONS = [
  { label: "Citing TEG-Blue", description: "Full citation format for the framework, the validation study, and the theoretical architecture.", href: "#citing-teg-blue" },
  { label: "Attribution", description: "Guidelines for independent work building on TEG-Blue — proper attribution and licensing.", href: "#attribution" },
];

export const metadata = {
  title: "How to Cite | TEG-Blue Research",
  description: "Citation formats for TEG-Blue research publications. APA 7th Edition and BibTeX formats available.",
  alternates: {
    canonical: "https://teg-blue.org/citations",
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
            Citing the TEG-Blue Framework
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
            Attribution for independent work
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

      </PageLayout>

      <SiteFooter />
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
