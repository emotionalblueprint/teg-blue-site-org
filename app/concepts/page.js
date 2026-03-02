import Link from "next/link";
import {
  BG,
  TEXT,
  BORDER,
  FONT,
  SPACING,
  SPECTRUM,
  hexToRgba,
  RADIUS,
} from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import { CONCEPTS, CONCEPT_GROUPS } from "@/src/data/concepts";

export const metadata = {
  title: "Foundational Concepts — TEG-Blue Open Knowledge",
  description:
    "Ten foundational concepts that introduce the TEG-Blue framework system. Each reframes something you already experience. Together, they provide the conceptual foundation for the complete system.",
  keywords: [
    "TEG-Blue",
    "foundational concepts",
    "emotional technology",
    "nervous system",
    "inner compass",
    "emotional distortion",
    "false coherence",
  ],
  alternates: { canonical: "https://teg-blue.org/concepts" },
  openGraph: {
    title: "Foundational Concepts — TEG-Blue Open Knowledge",
    description:
      "Ten foundational concepts, drawn from across the full framework system, written for anyone. Each reframes something you already experience.",
    url: "https://teg-blue.org/concepts",
    siteName: "TEG-Blue Open Knowledge",
    type: "website",
  },
};

export default function ConceptsHubPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/concepts" />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 40 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: SPECTRUM.cobalt,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: FONT.mono,
              marginBottom: 12,
            }}
          >
            Start Here
          </p>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 16,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            10 Foundational Concepts
          </h1>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.8,
              maxWidth: 640,
              marginBottom: 12,
            }}
          >
            Ten foundational concepts, drawn from across the full framework
            system, written for anyone. Each concept can be read independently.
            Each reframes something you already experience. Together, they
            provide the conceptual foundation from which the complete system
            becomes accessible.
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.muted,
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            The ordering is pedagogical — each builds naturally on the previous,
            though any can be read on its own.
          </p>
        </header>

        {/* Concept Groups */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {CONCEPT_GROUPS.map((group) => {
            const concepts = CONCEPTS.filter((c) => c.group === group.key);
            return (
              <section key={group.key}>
                <div style={{ marginBottom: 20 }}>
                  <h2
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: TEXT.primary,
                      marginBottom: 8,
                    }}
                  >
                    {group.key}
                  </h2>
                  <p
                    style={{
                      fontSize: 14,
                      color: TEXT.muted,
                      lineHeight: 1.7,
                      maxWidth: 640,
                    }}
                  >
                    {group.description}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {concepts.map((concept) => (
                    <ConceptCard key={concept.id} concept={concept} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Go Deeper */}
        <section
          style={{
            padding: 24,
            background: hexToRgba(SPECTRUM.cobalt, 0.06),
            borderRadius: RADIUS.lg,
            border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
            marginBottom: 40,
          }}
        >
          <h3
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 12,
            }}
          >
            Go Deeper
          </h3>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            These ten concepts open the door. The models and frameworks take you
            further.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link
              href="/models"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 18px",
                background: SPECTRUM.cobalt,
                color: "#fff",
                borderRadius: RADIUS.md,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Models &rarr;
            </Link>
            <Link
              href="/frameworks-map"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 18px",
                background: hexToRgba(SPECTRUM.cobalt, 0.1),
                color: SPECTRUM.cobalt,
                borderRadius: RADIUS.md,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
              }}
            >
              Frameworks &rarr;
            </Link>
          </div>
        </section>

        {/* Navigation footer */}
        <footer
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              padding: "10px 20px",
              background: "transparent",
              color: TEXT.secondary,
              border: `1px solid ${BORDER.default}`,
              borderRadius: RADIUS.md,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Home &rarr;
          </Link>
          <Link
            href="/models"
            style={{
              padding: "10px 20px",
              background: "transparent",
              color: TEXT.secondary,
              border: `1px solid ${BORDER.default}`,
              borderRadius: RADIUS.md,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Models &rarr;
          </Link>
          <Link
            href="/frameworks-map"
            style={{
              padding: "10px 20px",
              background: "transparent",
              color: TEXT.secondary,
              border: `1px solid ${BORDER.default}`,
              borderRadius: RADIUS.md,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Frameworks &rarr;
          </Link>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}

// ─── HELPER COMPONENTS ──────────────────────────────────────

function ConceptCard({ concept }) {
  const frameworkIds = concept.drawsFrom?.frameworks || [];
  const modelIds = concept.drawsFrom?.models || [];

  return (
    <Link
      href={`/concepts/${concept.slug}`}
      style={{
        display: "block",
        padding: "20px 24px",
        background: BG.card,
        borderRadius: RADIUS.lg,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `4px solid ${SPECTRUM.cobalt}`,
        textDecoration: "none",
      }}
    >
      {/* Number + title row */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 12,
          marginBottom: 8,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            fontFamily: FONT.mono,
            color: SPECTRUM.cobalt,
            background: hexToRgba(SPECTRUM.cobalt, 0.12),
            padding: "2px 8px",
            borderRadius: 4,
            flexShrink: 0,
          }}
        >
          {concept.number}
        </span>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: TEXT.primary,
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          {concept.name}
        </h3>
      </div>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 13,
          color: TEXT.muted,
          margin: "0 0 10px",
          paddingLeft: 32,
        }}
      >
        {concept.subtitle}
      </p>

      {/* Hook */}
      <p
        style={{
          fontSize: 14,
          color: TEXT.secondary,
          lineHeight: 1.7,
          margin: "0 0 10px",
          paddingLeft: 32,
        }}
      >
        {concept.hook}
      </p>

      {/* Key line */}
      <p
        style={{
          fontSize: 14,
          fontWeight: 600,
          fontStyle: "italic",
          color: TEXT.primary,
          margin: "0 0 10px",
          paddingLeft: 32,
        }}
      >
        "{concept.keyLine}"
      </p>

      {/* Source badges */}
      <div
        style={{
          display: "flex",
          gap: 6,
          paddingLeft: 32,
          flexWrap: "wrap",
        }}
      >
        {frameworkIds.map((id) => (
          <span
            key={id}
            style={{
              fontSize: 10,
              fontFamily: FONT.mono,
              color: TEXT.hint,
              padding: "1px 6px",
              borderRadius: 3,
              background: hexToRgba(SPECTRUM.slate, 0.1),
            }}
          >
            {id}
          </span>
        ))}
        {modelIds.map((id) => (
          <span
            key={id}
            style={{
              fontSize: 10,
              fontFamily: FONT.mono,
              color: TEXT.hint,
              padding: "1px 6px",
              borderRadius: 3,
              background: hexToRgba(SPECTRUM.slate, 0.1),
            }}
          >
            {id === "inner-compass"
              ? "Inner Compass"
              : "Three Awareness Capacities"}
          </span>
        ))}
      </div>
    </Link>
  );
}
