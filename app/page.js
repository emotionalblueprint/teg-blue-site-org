import Link from "next/link";
import { generateResearchHubJsonLd } from "@/src/lib/jsonld";
import {
  BG,
  SPACING,
  FONT,
  TEXT,
  BORDER,
  SPECTRUM,
  hexToRgba,
  RADIUS,
} from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import { CONCEPTS, CONCEPT_GROUPS } from "@/src/data/concepts";
import { MODELS } from "@/src/data/frameworks";
import { PHASES } from "@/src/data/frameworks";

export const metadata = {
  title: "TEG-Blue | Open Knowledge — Emotional Technology",
  description:
    "Understanding how the nervous system shapes everything — from a single emotion to a whole system. Ten foundational concepts, two models, twelve frameworks. Open science, open access.",
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
                color: TEXT.muted,
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
                  color: "#fff",
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
                  background: hexToRgba(SPECTRUM.blue, 0.1),
                  color: SPECTRUM.blue,
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: 14,
                  textDecoration: "none",
                  border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.2)}`,
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
              title="10 Foundational Concepts"
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
                return (
                  <div key={group.key}>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: SPECTRUM.cobalt,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        fontFamily: FONT.mono,
                        marginBottom: 12,
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
                        <ConceptRow key={c.id} concept={c} />
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
          <section style={{ marginBottom: 56 }}>
            <SectionHeader
              label="The Instruments"
              title="Two Models"
              description="The concepts above describe what the nervous system does. The models make it visible and usable."
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 16,
              }}
            >
              {MODELS.map((model) => (
                <Link
                  key={model.id}
                  href={model.url}
                  style={{
                    display: "block",
                    padding: "16px 20px",
                    background: BG.card,
                    borderRadius: RADIUS.md,
                    border: `1px solid ${BORDER.default}`,
                    borderLeft: `3px solid #26C6DA`,
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        fontFamily: FONT.mono,
                        color: "#26C6DA",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {model.subtitle}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: TEXT.primary,
                      margin: "0 0 4px",
                    }}
                  >
                    {model.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: TEXT.muted,
                      lineHeight: 1.6,
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
                color: "#26C6DA",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              See all models &rarr;
            </Link>
          </section>

          {/* ─── The 12 Frameworks ─── */}
          <section style={{ marginBottom: 56 }}>
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
                        color: TEXT.hint,
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
          <section style={{ marginBottom: 56 }}>
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
                borderLeft: `3px solid ${SPECTRUM.blue}`,
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
                <span style={{ color: SPECTRUM.azure, fontWeight: 700 }}>
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
                  color: SPECTRUM.blue,
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
                  color: SPECTRUM.blue,
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
                  color: SPECTRUM.blue,
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
              background: hexToRgba(SPECTRUM.azure, 0.05),
              borderRadius: RADIUS.lg,
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
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
                color: "#fff",
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
                color: TEXT.micro,
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

function SectionHeader({ label, title, description }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: SPECTRUM.cobalt,
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
          color: TEXT.muted,
          lineHeight: 1.7,
          maxWidth: 600,
        }}
      >
        {description}
      </p>
    </div>
  );
}

function ConceptRow({ concept }) {
  return (
    <Link
      href={`/concepts/${concept.slug}`}
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
          color: SPECTRUM.cobalt,
          background: hexToRgba(SPECTRUM.cobalt, 0.12),
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
            color: TEXT.muted,
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
          color: TEXT.muted,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: 2,
          fontFamily: FONT.mono,
        }}
      >
        {label}
      </p>
      <p style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary }}>
        {value}
      </p>
    </div>
  );
}
