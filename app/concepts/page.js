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
import { CONCEPTS, CONCEPT_GROUPS, GROUP_COLORS, CONCEPT_COLORS } from "@/src/data/concepts";

export const metadata = {
  title: "Foundational Concepts — TEG-Blue Open Knowledge",
  description:
    "Thirteen foundational concepts that introduce the TEG-Blue framework system. Each reframes something you already experience. Together, they provide the conceptual foundation for the complete system.",
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
      "Thirteen foundational concepts, drawn from across the full framework system, written for anyone. Each reframes something you already experience.",
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

      {/* Concept spectrum bar */}
      <nav
        aria-label="Concept overview"
        style={{
          display: "flex",
          gap: 3,
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "12px 24px 0",
        }}
      >
        {CONCEPTS.map((c, i) => (
          <Link
            key={c.id}
            href={`/concepts/${c.slug}`}
            title={`${c.number}. ${c.name}`}
            style={{
              flex: 1,
              height: 4,
              borderRadius: 2,
              background: CONCEPT_COLORS[i],
              opacity: 0.7,
              textDecoration: "none",
              display: "block",
            }}
          />
        ))}
      </nav>

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 56 }}>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 20,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            13 Foundational Concepts
          </h1>
          <p
            style={{
              fontSize: 16,
              color: TEXT.secondary,
              lineHeight: 1.8,
              maxWidth: 640,
              marginBottom: 12,
            }}
          >
            Written for any curious mind. Each concept reframes something you
            already experience — a feeling, a pattern, a moment you recognise
            but may not have had words for. Together, they build a complete
            picture of how the nervous system shapes everything.
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.tertiary,
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Three groups move from the instrument itself, through the awareness
            capacities, to the human consequences.
          </p>
        </header>

        {/* Concept Groups */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 56,
            marginBottom: 64,
          }}
        >
          {CONCEPT_GROUPS.map((group, groupIdx) => {
            const concepts = CONCEPTS.filter((c) => c.group === group.key);
            const groupColor = GROUP_COLORS[group.key];
            const isCapacities = group.key === "The Three Awareness Capacities";
            const capacitiesGradient = "linear-gradient(90deg, #a080ff, #22d3ee, #a0e85a)";
            return (
              <section key={group.key}>
                {/* Group header with accent bar */}
                <div
                  style={{
                    padding: "24px 28px",
                    background: hexToRgba(groupColor, 0.08),
                    borderRadius: `${RADIUS.lg}px ${RADIUS.lg}px 0 0`,
                    borderTop: isCapacities ? "none" : `3px solid ${groupColor}`,
                    borderImage: isCapacities ? `${capacitiesGradient} 1` : undefined,
                    borderTopWidth: isCapacities ? 3 : undefined,
                    borderTopStyle: isCapacities ? "solid" : undefined,
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      fontFamily: FONT.mono,
                      color: groupColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: 8,
                    }}
                  >
                    Part {groupIdx + 1} of 3
                  </p>
                  <h2
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      marginBottom: 10,
                      ...(isCapacities
                        ? {
                            background: capacitiesGradient,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }
                        : { color: TEXT.primary }),
                    }}
                  >
                    {group.key}
                  </h2>
                  <p
                    style={{
                      fontSize: 14,
                      color: TEXT.secondary,
                      lineHeight: 1.7,
                      maxWidth: 600,
                    }}
                  >
                    {group.description}
                  </p>
                </div>

                {/* Concept cards */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  {concepts.map((concept, i) => (
                    <ConceptCard
                      key={concept.id}
                      concept={concept}
                      conceptColor={CONCEPT_COLORS[concept.number - 1]}
                      groupColor={groupColor}
                      isLast={i === concepts.length - 1}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Go Deeper */}
        <section
          style={{
            padding: 28,
            background: hexToRgba(SPECTRUM.cobalt, 0.08),
            borderRadius: RADIUS.lg,
            border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
            marginBottom: 40,
          }}
        >
          <h3
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 12,
            }}
          >
            Go Deeper
          </h3>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            These thirteen concepts open the door. The models and frameworks
            take you further.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link
              href="/models"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "12px 22px",
                background: SPECTRUM.cobalt,
                color: TEXT.primary,
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
                padding: "12px 22px",
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
            className="hover-ghost"
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
            className="hover-ghost"
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
            className="hover-ghost"
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

function ConceptCard({ concept, conceptColor, groupColor, isLast }) {
  return (
    <Link
      href={`/concepts/${concept.slug}`}
      className="hover-card"
      style={{
        display: "flex",
        gap: 20,
        padding: "22px 28px",
        background: BG.card,
        borderBottom: isLast ? "none" : `1px solid ${BORDER.default}`,
        borderRadius: isLast ? `0 0 ${RADIUS.lg}px ${RADIUS.lg}px` : 0,
        textDecoration: "none",
        alignItems: "flex-start",
      }}
    >
      {/* Large decorative number */}
      <span
        style={{
          fontSize: 36,
          fontWeight: 800,
          fontFamily: FONT.mono,
          color: hexToRgba(conceptColor, 0.3),
          lineHeight: 1,
          flexShrink: 0,
          minWidth: 44,
          paddingTop: 2,
        }}
      >
        {String(concept.number).padStart(2, "0")}
      </span>

      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Concept name */}
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: TEXT.primary,
            margin: "0 0 10px",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}
        >
          {concept.name}
        </h3>

        {/* Key line as pull quote */}
        <div
          style={{
            borderLeft: `3px solid ${hexToRgba(conceptColor, 0.5)}`,
            paddingLeft: 14,
            marginBottom: 10,
          }}
        >
          <p
            style={{
              fontSize: 14,
              fontWeight: 500,
              fontStyle: "italic",
              color: conceptColor,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            &ldquo;{concept.keyLine}&rdquo;
          </p>
        </div>

        {/* Hook as body */}
        <p
          style={{
            fontSize: 14,
            color: TEXT.secondary,
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {concept.hook}
        </p>
      </div>
    </Link>
  );
}
