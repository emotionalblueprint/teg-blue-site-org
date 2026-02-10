import { loadAllNodes } from "@/src/lib/content";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, TypeTag } from "@/src/components";

export const metadata = {
  title: "How to Cite",
  description: "Citation formats for TEG-Blue research publications. APA, MLA, Chicago, and BibTeX formats available.",
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

      <main
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        <h1
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: TEXT.primary,
            marginBottom: 8,
            letterSpacing: "-0.02em",
          }}
        >
          How to Cite
        </h1>
        <p
          style={{
            fontSize: 14,
            color: TEXT.secondary,
            marginBottom: 32,
            maxWidth: 600,
          }}
        >
          Please cite TEG-Blue research using the formats below.
          All publications are licensed under CC-BY-NC-SA-4.0.
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
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
            }}
          >
            No publications available yet.
          </div>
        )}

        {/* General Citation */}
        <div
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
      </main>

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
