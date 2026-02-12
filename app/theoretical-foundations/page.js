import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

export const metadata = {
  title: "Theoretical Foundations",
  description: "The 12 frameworks behind the Four-Mode Gradient, integrating established research from neuroscience, psychology, sociology, and trauma studies.",
};

// Framework data - simplified for display
const frameworks = [
  { id: 1, name: "The Emotional Gradient", question: "How does the emotional compass work?" },
  { id: 2, name: "Identity as Adaptive System", question: "How does identity form as protection?" },
  { id: 3, name: "Cognitive Coherence & False Coherence", question: "How does cognition maintain the mask?" },
  { id: 4, name: "Threat-Based Rule Internalization", question: "Where do the social stories come from?" },
  { id: 5, name: "Threat-Driven Worth Sorting", question: "How does following rules become sorting?" },
  { id: 6, name: "State-Dependent Perception", question: "How does sorting become 'truth'?" },
  { id: 7, name: "The Anatomy of Tyranny", question: "How does protection escalate to domination?" },
  { id: 8, name: "Self-Reconnection & Role Mask Loosening", question: "How does the mask loosen?" },
  { id: 9, name: "Nervous System Variation", question: "How do different systems navigate?" },
  { id: 10, name: "Generational Transmission", question: "How do patterns pass and interrupt?" },
  { id: 11, name: "Emotional Logic of Paradoxes", question: "Why do contradictions emerge?" },
  { id: 12, name: "Our Two Information Systems", question: "What is the complete architecture?" },
];

const arcs = [
  { name: "Formation", color: SPECTRUM.azure, frameworks: [1, 2, 3], description: "How patterns form in the individual" },
  { name: "Scaling", color: SPECTRUM.blue, frameworks: [4, 5, 6], description: "How patterns become collective" },
  { name: "Turning Point", color: SPECTRUM.cobalt, frameworks: [7], description: "How protection becomes harm" },
  { name: "Healing", color: SPECTRUM.indigo, frameworks: [8, 9, 10], description: "How change becomes possible" },
  { name: "Integration", color: SPECTRUM.slate, frameworks: [11, 12], description: "The complete architecture" },
];

export default function TheoreticalFoundationsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/theoretical-foundations" />

      <main
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        {/* Header */}
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: TEXT.primary,
            marginBottom: 8,
            letterSpacing: "-0.02em",
          }}
        >
          Theoretical Foundations
        </h1>
        <p
          style={{
            fontSize: 14,
            color: TEXT.secondary,
            marginBottom: 32,
            maxWidth: 600,
            lineHeight: 1.7,
          }}
        >
          The 12 frameworks that explain why the Four-Mode Gradient exists, how patterns scale from individual to social, and what makes change possible.
        </p>

        {/* Two-layer explanation */}
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
          >
            {/* Measurement System Box */}
            <div
              style={{
                padding: 24,
                background: hexToRgba(SPECTRUM.azure, 0.08),
                borderRadius: 12,
                border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.2)}`,
                borderTop: `3px solid ${SPECTRUM.azure}`,
              }}
            >
              <h3
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.azure,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: FONT.mono,
                  marginBottom: 12,
                }}
              >
                Measurement System
              </h3>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: TEXT.primary,
                  marginBottom: 12,
                }}
              >
                The Four-Mode Gradient
              </p>
              <div
                style={{
                  fontSize: 12,
                  fontFamily: FONT.mono,
                  color: TEXT.secondary,
                  marginBottom: 16,
                  padding: "10px 12px",
                  background: hexToRgba(SPECTRUM.azure, 0.1),
                  borderRadius: 6,
                  textAlign: "center",
                }}
              >
                Connection → Protection → Control → Domination
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: TEXT.secondary,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                The observable, testable backbone. Nervous system regulatory states that can be detected in natural language.
              </p>
            </div>

            {/* Explanatory Architecture Box */}
            <div
              style={{
                padding: 24,
                background: hexToRgba(SPECTRUM.cobalt, 0.08),
                borderRadius: 12,
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
                borderTop: `3px solid ${SPECTRUM.cobalt}`,
              }}
            >
              <h3
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
                Explanatory Architecture
              </h3>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: TEXT.primary,
                  marginBottom: 12,
                }}
              >
                12 Frameworks
              </p>
              <div
                style={{
                  fontSize: 12,
                  fontFamily: FONT.mono,
                  color: TEXT.secondary,
                  marginBottom: 16,
                  padding: "10px 12px",
                  background: hexToRgba(SPECTRUM.cobalt, 0.1),
                  borderRadius: 6,
                  textAlign: "center",
                }}
              >
                Why · How · Where · What
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: TEXT.secondary,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Explains <em>why</em> the four modes exist, <em>how</em> patterns scale, <em>where</em> protection tips into domination, and <em>what</em> makes change possible.
              </p>
            </div>
          </div>
        </div>

        {/* The 12 Frameworks by Arc */}
        <section style={{ marginBottom: 40 }}>
          {arcs.map((arc) => (
            <div key={arc.name} style={{ marginBottom: 32 }}>
              {/* Arc Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: FONT.mono,
                    padding: "6px 12px",
                    borderRadius: 6,
                    background: hexToRgba(arc.color, 0.15),
                    color: arc.color,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {arc.name}
                </span>
                <span style={{ fontSize: 13, color: TEXT.muted }}>
                  {arc.description}
                </span>
              </div>

              {/* Frameworks in this arc */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {arc.frameworks.map((fId) => {
                  const f = frameworks.find((fw) => fw.id === fId);
                  return (
                    <div
                      key={f.id}
                      style={{
                        padding: "16px 20px",
                        background: BG.surface,
                        borderRadius: 8,
                        border: `1px solid ${BORDER.default}`,
                        borderLeft: `3px solid ${arc.color}`,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: 12,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 12,
                            fontFamily: FONT.mono,
                            color: arc.color,
                            fontWeight: 600,
                          }}
                        >
                          F{f.id}
                        </span>
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: TEXT.primary,
                          }}
                        >
                          {f.name}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: 13,
                          color: TEXT.muted,
                          fontStyle: "italic",
                          margin: "8px 0 0 0",
                          paddingLeft: 36,
                        }}
                      >
                        {f.question}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* What Is Original */}
        <section style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 16,
            }}
          >
            What Is Original
          </h2>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            The frameworks integrate established research from neuroscience, psychology, sociology, and trauma studies. The originality is not in the individual theories — it is in the connections between them.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                padding: "16px 20px",
                background: hexToRgba(SPECTRUM.azure, 0.06),
                borderRadius: 8,
                borderLeft: `3px solid ${SPECTRUM.azure}`,
              }}
            >
              <p style={{ fontSize: 14, fontWeight: 500, color: TEXT.primary, margin: 0 }}>
                Nervous system regulation → moral perception
              </p>
            </div>

            <div
              style={{
                padding: "16px 20px",
                background: hexToRgba(SPECTRUM.blue, 0.06),
                borderRadius: 8,
                borderLeft: `3px solid ${SPECTRUM.blue}`,
              }}
            >
              <p style={{ fontSize: 14, fontWeight: 500, color: TEXT.primary, margin: 0 }}>
                Attachment patterns → social stratification
              </p>
            </div>

            <div
              style={{
                padding: "16px 20px",
                background: hexToRgba(SPECTRUM.cobalt, 0.06),
                borderRadius: 8,
                borderLeft: `3px solid ${SPECTRUM.cobalt}`,
              }}
            >
              <p style={{ fontSize: 14, fontWeight: 500, color: TEXT.primary, margin: 0 }}>
                Self-protection → domination as a continuous gradient
              </p>
            </div>

            <div
              style={{
                padding: "16px 20px",
                background: hexToRgba(SPECTRUM.indigo, 0.06),
                borderRadius: 8,
                borderLeft: `3px solid ${SPECTRUM.indigo}`,
              }}
            >
              <p style={{ fontSize: 14, fontWeight: 500, color: TEXT.primary, margin: 0 }}>
                Linguistic complexity → regulatory capacity
              </p>
            </div>
          </div>
        </section>

        {/* Methodology Note */}
        <section
          style={{
            padding: 24,
            background: hexToRgba(SPECTRUM.slate, 0.08),
            borderRadius: 12,
            border: `1px solid ${hexToRgba(SPECTRUM.slate, 0.15)}`,
            borderLeft: `3px solid ${SPECTRUM.slate}`,
            marginBottom: 32,
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
            Methodology
          </h2>
          <p
            style={{
              fontSize: 13,
              color: TEXT.secondary,
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            The integrative architecture was developed through independent research, observation, and cross-disciplinary reading. AI research tools assisted with identifying corresponding academic literature. The theoretical mapping is a working hypothesis open for scholarly verification.
          </p>
        </section>

        {/* CTA */}
        <section
          style={{
            padding: 24,
            background: hexToRgba(SPECTRUM.blue, 0.08),
            borderRadius: 12,
            border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.2)}`,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              marginBottom: 16,
            }}
          >
            Questions about the theoretical foundations?
          </p>
          <a
            href="mailto:research@teg-blue.org"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: SPECTRUM.blue,
              color: "#fff",
              borderRadius: 8,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            research@teg-blue.org
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
