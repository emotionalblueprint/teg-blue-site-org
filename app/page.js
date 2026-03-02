import Link from "next/link";
import { generateResearchHubJsonLd } from "@/src/lib/jsonld";
import {
  BG,
  SPACING,
  FONT,
  TEXT,
  BORDER,
  SPECTRUM,
  PRIMARY,
  ACCENT,
  hexToRgba,
  RADIUS,
} from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import { CONCEPTS, CONCEPT_GROUPS, GROUP_COLORS, CONCEPT_COLORS } from "@/src/data/concepts";
import { MODELS } from "@/src/data/frameworks";
import { PHASES } from "@/src/data/frameworks";

export const metadata = {
  title: "TEG-Blue | Open Knowledge — Emotional Technology",
  description:
    "Understanding how the nervous system shapes everything — from a single emotion to a whole system. Thirteen foundational concepts, two models, twelve frameworks. Open science, open access.",
  alternates: {
    canonical: "https://teg-blue.org",
  },
};

export default function HomePage() {
  const jsonLd = generateResearchHubJsonLd();

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: BG.page,
          fontFamily: FONT.display,
        }}
      >
        <SiteHeader currentPath="/" />

        <main
          id="main-content"
          style={{
            maxWidth: SPACING.containerMax,
            margin: "0 auto",
            padding: "48px 24px 80px",
          }}
        >
          {/* ─── Hero Section ─── */}
          <section style={{ marginBottom: 56 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: SPECTRUM.cobalt,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 16,
                fontFamily: FONT.mono,
              }}
            >
              Open Knowledge
            </p>

            <h1
              style={{
                fontSize: 26,
                fontWeight: 600,
                color: TEXT.primary,
                marginBottom: 16,
                lineHeight: 1.4,
                maxWidth: 620,
              }}
            >
              Understanding how the nervous system shapes everything — from a
              single emotion to a whole system
            </h1>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: TEXT.secondary,
                maxWidth: 620,
                marginBottom: 16,
              }}
            >
              TEG-Blue traces a single thread — from the individual nervous
              system through relationships, identity, development, collective
              systems, and repair — showing that the same mechanism operates at
              every scale.
            </p>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: TEXT.secondary,
                maxWidth: 620,
                marginBottom: 24,
              }}
            >
              All research transparent. All sources credited. All claims open to
              testing.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <Link
                href="/concepts"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  background: SPECTRUM.cobalt,
                  color: TEXT.primary,
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                Start Here &rarr;
              </Link>
              <Link
                href="/research-entry"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  background: hexToRgba(PRIMARY, 0.1),
                  color: PRIMARY,
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: 14,
                  textDecoration: "none",
                  border: `1px solid ${hexToRgba(PRIMARY, 0.2)}`,
                }}
              >
                For Researchers
              </Link>
            </div>
          </section>

          {/* ─── 10 Foundational Concepts ─── */}
          <section style={{ marginBottom: 56 }}>
            <SectionHeader
              label="Start Here"
              title="13 Foundational Concepts"
              description="Each concept reframes something you already experience. Each can be read on its own. Together, they build a complete picture."
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 32,
                marginBottom: 16,
              }}
            >
              {CONCEPT_GROUPS.map((group) => {
                const concepts = CONCEPTS.filter(
                  (c) => c.group === group.key
                );
                const groupColor = GROUP_COLORS[group.key];
                const isCapacities = group.key === "The Three Awareness Capacities";
                const capacitiesGradient = "linear-gradient(90deg, #a080ff, #22d3ee, #a0e85a)";
                return (
                  <div key={group.key}>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        fontFamily: FONT.mono,
                        marginBottom: 12,
                        ...(isCapacities
                          ? {
                              background: capacitiesGradient,
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }
                          : { color: groupColor }),
                      }}
                    >
                      {group.key}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      {concepts.map((c) => (
                        <ConceptRow key={c.id} concept={c} conceptColor={CONCEPT_COLORS[c.number - 1]} groupColor={groupColor} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/concepts"
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
              Explore all concepts &rarr;
            </Link>
          </section>

          {/* ─── The Two Models ─── */}
          <section className="section-break" style={{ marginBottom: 56 }}>
            <SectionHeader
              label="The Instruments"
              title="Two Models"
              description="The concepts above describe what the nervous system does. The models make it visible and usable."
              labelColor={ACCENT.yellow}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 16,
              }}
            >
              {MODELS.map((model, i) => (
                <Link
                  key={model.id}
                  href={model.url}
                  className="hover-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "24px 22px",
                    background: BG.card,
                    borderRadius: RADIUS.lg,
                    border: `1px solid ${BORDER.default}`,
                    borderTop: `3px solid ${hexToRgba(ACCENT.yellow, 0.6)}`,
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: 32,
                      fontWeight: 800,
                      fontFamily: FONT.mono,
                      color: hexToRgba(ACCENT.yellow, 0.2),
                      lineHeight: 1,
                      marginBottom: 12,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      fontFamily: FONT.mono,
                      color: ACCENT.yellow,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 8,
                    }}
                  >
                    {model.subtitle}
                  </span>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: TEXT.primary,
                      margin: "0 0 10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {model.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: TEXT.secondary,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {model.description}
                  </p>
                </Link>
              ))}
            </div>

            <Link
              href="/models"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 14,
                color: ACCENT.yellow,
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              See all models &rarr;
            </Link>
          </section>

          {/* ─── The 12 Frameworks ─── */}
          <section className="section-break" style={{ marginBottom: 56 }}>
            <SectionHeader
              label="The Architecture"
              title="12 Frameworks"
              description="The frameworks explain why — the full theoretical architecture behind the concepts and models."
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginBottom: 16,
              }}
            >
              {PHASES.map((phase) => (
                <div
                  key={phase.key}
                  style={{
                    padding: "14px 18px",
                    background: BG.card,
                    borderRadius: RADIUS.md,
                    border: `1px solid ${BORDER.default}`,
                    borderLeft: `3px solid ${phase.color}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 4,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        fontFamily: FONT.mono,
                        color: phase.color,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {phase.key}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        color: TEXT.tertiary,
                        fontFamily: FONT.mono,
                      }}
                    >
                      {phase.frameworks.join(" · ")}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: TEXT.secondary,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/frameworks-map"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 14,
                color: SPECTRUM.cobalt,
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Explore all 12 frameworks &rarr;
            </Link>
          </section>

          {/* ─── The Evidence ─── */}
          <section className="section-break" style={{ marginBottom: 56 }}>
            <SectionHeader
              label="The Foundation"
              title="Evidence & Research"
              description="Built on established research from polyvagal theory, affective neuroscience, attachment theory, and more."
            />

            <div
              style={{
                padding: "20px 24px",
                background: BG.card,
                borderRadius: RADIUS.lg,
                border: `1px solid ${BORDER.default}`,
                borderLeft: `3px solid ${PRIMARY}`,
                marginBottom: 16,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.blue,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 8,
                  fontFamily: FONT.mono,
                }}
              >
                Validation Study
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: TEXT.primary,
                  marginBottom: 8,
                }}
              >
                Computational analysis of 10,000+ natural conflict narratives
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: TEXT.secondary,
                  lineHeight: 1.7,
                  marginBottom: 12,
                }}
              >
                De-escalators showed{" "}
                <span style={{ color: ACCENT.mint, fontWeight: 700 }}>
                  78% higher rates of complexity markers
                </span>{" "}
                than escalators — signs of self-awareness, perspective-taking,
                and emotional differentiation in natural language.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <StatBadge label="Source theories" value="139+" />
                <StatBadge label="Narratives analyzed" value="10,000+" />
                <StatBadge label="Frameworks" value="12" />
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link
                href="/publications"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  color: PRIMARY,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Publications &rarr;
              </Link>
              <Link
                href="/scientific-foundations"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  color: PRIMARY,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                139+ Source Theories &rarr;
              </Link>
              <Link
                href="/methodology"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  color: PRIMARY,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Methodology &rarr;
              </Link>
            </div>
          </section>

          {/* ─── Bridge to .com ─── */}
          <section
            style={{
              padding: 24,
              background: hexToRgba(SPECTRUM.azure, 0.08),
              borderRadius: RADIUS.lg,
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.22)}`,
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: SPECTRUM.azure,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 12,
                fontFamily: FONT.mono,
              }}
            >
              Interactive Tools
            </p>
            <p
              style={{
                fontSize: 15,
                color: TEXT.secondary,
                lineHeight: 1.7,
                marginBottom: 16,
                maxWidth: 440,
                margin: "0 auto 16px",
              }}
            >
              Want to use these ideas? Interactive tools built from these models
              are available on teg-blue.com.
            </p>
            <a
              href="https://teg-blue.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                background: SPECTRUM.azure,
                color: TEXT.primary,
                borderRadius: 8,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Visit teg-blue.com &rarr;
            </a>
          </section>

          {/* Footer note */}
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <p
              style={{
                fontSize: 11,
                color: TEXT.tertiary,
                fontFamily: FONT.mono,
              }}
            >
              TEG-Blue Open Knowledge &middot; CC BY-NC-SA 4.0
            </p>
          </div>
        </main>

        <SiteFooter />
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

// ─── HELPER COMPONENTS ──────────────────────────────────────

function SectionHeader({ label, title, description, labelColor }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: labelColor || SPECTRUM.cobalt,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontFamily: FONT.mono,
          marginBottom: 8,
        }}
      >
        {label}
      </p>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: TEXT.primary,
          marginBottom: 8,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: 14,
          color: TEXT.secondary,
          lineHeight: 1.7,
          maxWidth: 600,
        }}
      >
        {description}
      </p>
    </div>
  );
}

function ConceptRow({ concept, conceptColor, groupColor }) {
  const color = conceptColor || groupColor || SPECTRUM.cobalt;
  return (
    <Link
      href={`/concepts/${concept.slug}`}
      className="hover-card"
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 12,
        padding: "12px 16px",
        background: BG.card,
        borderRadius: RADIUS.md,
        border: `1px solid ${BORDER.default}`,
        textDecoration: "none",
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          fontFamily: FONT.mono,
          color: color,
          background: hexToRgba(color, 0.12),
          padding: "2px 7px",
          borderRadius: 4,
          flexShrink: 0,
        }}
      >
        {concept.number}
      </span>
      <div style={{ flex: 1 }}>
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: TEXT.primary,
          }}
        >
          {concept.name}
        </span>
        <span
          style={{
            fontSize: 13,
            color: TEXT.tertiary,
            marginLeft: 8,
          }}
        >
          — {concept.subtitle}
        </span>
      </div>
    </Link>
  );
}

function StatBadge({ label, value }) {
  return (
    <div
      style={{
        background: hexToRgba(SPECTRUM.slate, 0.08),
        borderRadius: 6,
        padding: "6px 10px",
        display: "inline-block",
      }}
    >
      <p
        style={{
          fontSize: 10,
          fontWeight: 600,
          color: TEXT.tertiary,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: 2,
          fontFamily: FONT.mono,
        }}
      >
        {label}
      </p>
      <p style={{ fontSize: 14, fontWeight: 600, color: ACCENT.mint }}>
        {value}
      </p>
    </div>
  );
}
