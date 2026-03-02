import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba, RADIUS, PRIMARY } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

// Researcher pattern colors (blue spectrum variant)
// Intentionally different from MODE_COLORS (teal/yellow/orange/pink).
// This page uses a blue-only gradient for research-neutral presentation.
const PATTERN = {
  a: { color: "#60a5fa", name: "Connection" },  // blue-400
  b: { color: "#3b82f6", name: "Protection" },  // blue-500
  c: { color: "#2563eb", name: "Control" },     // blue-600
  d: { color: "#1d4ed8", name: "Domination" },  // blue-700
};

const MODES = [
  {
    id: "a",
    pattern: "A",
    name: "Connection",
    pathway: "SAFETY → EMPATHY → REPAIR",
    subtitle: "Social engagement system online. Autonomic flexibility enabling rapid, proportionate response to environmental signals.",
    color: PATTERN.a.color,
  },
  {
    id: "b",
    pattern: "B",
    name: "Protection",
    pathway: "ALERT → THREAT SCANNING → DEFENSE",
    subtitle: "Mobilization or immobilization in response to perceived threat. Fight, flight, freeze, or fawn responses activated.",
    color: PATTERN.b.color,
  },
  {
    id: "c",
    pattern: "C",
    name: "Control",
    pathway: "ANTICIPATE → MANAGE → OVERRIDE",
    subtitle: "Safety sought through environmental and relational control rather than connection. Strategic cognitive organization overrides emotional-somatic signals.",
    color: PATTERN.c.color,
  },
  {
    id: "d",
    pattern: "D",
    name: "Domination",
    pathway: "OVERRIDE → ELIMINATE → SURVIVE",
    subtitle: "Safety exclusively through power, dominance, and control of others. Empathy offline or weaponized. Dominance circuitry active.",
    color: PATTERN.d.color,
  },
];

export default function FourModeGradientPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/four-mode-gradient" />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {/* Hero Section */}
        <header style={{ marginBottom: 48 }}>
          <p
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
          </p>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 16,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            The Four-Mode Gradient
          </h1>
          <p
            style={{
              fontSize: 16,
              color: TEXT.secondary,
              lineHeight: 1.8,
              maxWidth: 640,
              marginBottom: 20,
            }}
          >
            A continuous measurement of autonomic nervous system regulatory state — not a categorical
            classification. Where is someone on the gradient from safety to threat? Detectable in natural
            language, quantifiable through complexity markers.
          </p>

          {/* Gradient bar */}
          <div
            style={{
              height: 6,
              borderRadius: 3,
              background: `linear-gradient(90deg, ${PATTERN.a.color}, ${PATTERN.b.color}, ${PATTERN.c.color}, ${PATTERN.d.color})`,
              maxWidth: 400,
              marginBottom: 24,
            }}
          />

          <p
            style={{
              display: "inline-flex",
              fontSize: 11,
              fontWeight: 600,
              fontFamily: FONT.mono,
              color: SPECTRUM.azure,
              padding: "4px 10px",
              background: hexToRgba(SPECTRUM.azure, 0.1),
              borderRadius: 4,
            }}
          >
            Status: Proposed model with early evidence
          </p>
        </header>

        {/* Core Insight */}
        <section style={{ marginBottom: 48 }}>
          <blockquote
            style={{
              margin: 0,
              padding: "20px 24px",
              borderLeft: `4px solid ${PATTERN.a.color}`,
              background: hexToRgba(PATTERN.a.color, 0.08),
              borderRadius: "0 8px 8px 0",
              fontSize: 18,
              fontWeight: 500,
              color: TEXT.primary,
              lineHeight: 1.6,
            }}
          >
            Regulatory state determines functional capacity — perception, affect, cognition, and
            behavioral repertoire are constrained by autonomic positioning on the gradient.
          </blockquote>
        </section>

        {/* The Four Modes - Static Cards */}
        <section style={{ marginBottom: 48 }}>
          <div style={{ marginBottom: 20 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: TEXT.primary,
                letterSpacing: "-0.01em",
                marginBottom: 8,
              }}
            >
              The Four Regulatory States
            </h2>
            <p style={{ fontSize: 14, color: TEXT.secondary, margin: 0 }}>
              Not personality types — nervous system positions that shift in response to perceived threat.
              Each state has a pattern designation (A, B, C, D) used in clinical and research contexts.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {MODES.map((mode) => (
              <div
                key={mode.id}
                style={{
                  padding: "16px 20px",
                  background: BG.card,
                  borderRadius: RADIUS.lg,
                  border: `1px solid ${BORDER.default}`,
                  borderLeft: `4px solid ${mode.color}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      fontFamily: FONT.mono,
                      color: mode.color,
                      background: hexToRgba(mode.color, 0.12),
                      padding: "4px 8px",
                      borderRadius: 4,
                    }}
                  >
                    {mode.pattern}
                  </span>
                  <span style={{ fontSize: 16, fontWeight: 600, color: mode.color }}>
                    {mode.name}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: FONT.mono,
                      color: TEXT.tertiary,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {mode.pathway}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                  {mode.subtitle}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Testable Claim */}
        <section style={{ marginBottom: 48 }}>
          <div
            style={{
              padding: 24,
              background: BG.card,
              borderRadius: RADIUS.lg,
              border: `1px solid ${BORDER.default}`,
            }}
          >
            <h3 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
              The Core Testable Claim
            </h3>
            <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 0 }}>
              The key variable that predicts relational outcomes is not current state, but{" "}
              <strong
                style={{
                  background: `linear-gradient(90deg, ${PATTERN.a.color}, ${SPECTRUM.azure})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                capacity to return to Connection when challenged
              </strong>.
              Someone in Protection who can move back is fundamentally different from someone who escalates toward Control.
            </p>
          </div>
        </section>

        {/* CTA to .com */}
        <section style={{ marginBottom: 48 }}>
          <div
            style={{
              padding: 28,
              background: hexToRgba(PRIMARY, 0.08),
              borderRadius: RADIUS.lg,
              border: `1px solid ${hexToRgba(PRIMARY, 0.2)}`,
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: TEXT.primary,
                marginBottom: 12,
              }}
            >
              Explore the Full Framework
            </h2>
            <p
              style={{
                fontSize: 15,
                color: TEXT.secondary,
                marginBottom: 20,
                maxWidth: 480,
                margin: "0 auto 20px",
                lineHeight: 1.7,
              }}
            >
              The interactive tools on teg-blue.com include detailed pattern diagrams, five structural
              axes per mode, assessment tools, and intervention principles.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://teg-blue.com/start-here"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "12px 24px",
                  background: SPECTRUM.blue,
                  color: TEXT.primary,
                  borderRadius: RADIUS.md,
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                Start Here →
              </a>
              <a
                href="https://teg-blue.com/compass-researcher"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "12px 24px",
                  background: "transparent",
                  color: TEXT.secondary,
                  border: `1px solid ${BORDER.default}`,
                  borderRadius: RADIUS.md,
                  fontWeight: 500,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                Researcher Framework
              </a>
            </div>
          </div>
        </section>

        {/* Two-Layer Architecture */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: TEXT.primary,
              letterSpacing: "-0.01em",
              marginBottom: 16,
            }}
          >
            Two-Layer Architecture
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            <div
              style={{
                padding: 20,
                background: hexToRgba(SPECTRUM.azure, 0.08),
                borderRadius: RADIUS.md,
                border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.2)}`,
                borderTop: `3px solid ${SPECTRUM.azure}`,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.azure,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontFamily: FONT.mono,
                  marginBottom: 8,
                }}
              >
                Layer 1 — You are here
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: TEXT.primary,
                  marginBottom: 6,
                }}
              >
                Four-Mode Gradient
              </p>
              <p style={{ fontSize: 13, color: TEXT.secondary, margin: 0, lineHeight: 1.6 }}>
                Observable measurement. Where am I? Where are they?
              </p>
            </div>

            <Link
              href="/frameworks-map"
              style={{
                padding: 20,
                background: hexToRgba(SPECTRUM.cobalt, 0.08),
                borderRadius: RADIUS.md,
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
                borderTop: `3px solid ${SPECTRUM.cobalt}`,
                textDecoration: "none",
                display: "block",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.cobalt,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontFamily: FONT.mono,
                  marginBottom: 8,
                }}
              >
                Layer 2
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: TEXT.primary,
                  marginBottom: 6,
                }}
              >
                12 Frameworks →
              </p>
              <p style={{ fontSize: 13, color: TEXT.secondary, margin: 0, lineHeight: 1.6 }}>
                Explanatory architecture. Why do modes exist? How do patterns scale?
              </p>
            </Link>
          </div>
        </section>

        {/* Footer Links */}
        <section
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/publications/validation-study"
            style={{
              padding: "10px 20px",
              background: "transparent",
              color: TEXT.tertiary,
              border: `1px solid ${BORDER.default}`,
              borderRadius: RADIUS.md,
              fontWeight: 500,
              fontSize: 13,
              textDecoration: "none",
            }}
          >
            Validation Study
          </Link>
          <Link
            href="/collaborate"
            style={{
              padding: "10px 20px",
              background: "transparent",
              color: TEXT.tertiary,
              border: `1px solid ${BORDER.default}`,
              borderRadius: RADIUS.md,
              fontWeight: 500,
              fontSize: 13,
              textDecoration: "none",
            }}
          >
            Collaborate
          </Link>
        </section>

        {/* Footer note */}
        <footer style={{ marginTop: 48, textAlign: "center" }}>
          <p style={{ fontSize: 11, color: TEXT.tertiary, fontFamily: FONT.mono }}>
            TEG-Blue Research Consortium · Open Science · CC BY-NC-SA 4.0
          </p>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}
