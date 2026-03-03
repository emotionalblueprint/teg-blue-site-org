import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba, RADIUS, RESEARCHER, PATTERN, PATTERN_GRADIENT, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero, PatternGradientBar, ResearcherPatternCard, PropositionBox } from "@/src/components";

const MODES = [
  {
    id: "a",
    pattern: "A",
    name: "Connection",
    pathway: "SAFETY → EMPATHY → REPAIR",
    subtitle: "Social engagement system online. Autonomic flexibility enabling rapid, proportionate response to environmental signals.",
    color: PATTERN.A.primary,
  },
  {
    id: "b",
    pattern: "B",
    name: "Protection",
    pathway: "ALERT → THREAT SCANNING → DEFENSE",
    subtitle: "Mobilization or immobilization in response to perceived threat. Fight, flight, freeze, or fawn responses activated.",
    color: PATTERN.B.primary,
  },
  {
    id: "c",
    pattern: "C",
    name: "Control",
    pathway: "ANTICIPATE → MANAGE → OVERRIDE",
    subtitle: "Safety sought through environmental and relational control rather than connection. Strategic cognitive organization overrides emotional-somatic signals.",
    color: PATTERN.C.primary,
  },
  {
    id: "d",
    pattern: "D",
    name: "Domination",
    pathway: "OVERRIDE → ELIMINATE → SURVIVE",
    subtitle: "Safety exclusively through power, dominance, and control of others. Empathy offline or weaponized. Dominance circuitry active.",
    color: PATTERN.D.primary,
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
          padding: `48px ${SPACING.pagePadding} 80px`,
        }}
      >
        {/* Hero Section */}
        <ResearcherHero
          badge="FOUR-MODE GRADIENT"
          title="The Four-Mode Gradient"
          subtitle="Measurement system — proposed model with early evidence"
          description="A continuous measurement of autonomic nervous system regulatory state — not a categorical classification. Where is someone on the gradient from safety to threat? Detectable in natural language, quantifiable through complexity markers."
        />
        <PatternGradientBar style={{ marginTop: 20, maxWidth: 500 }} />

        {/* Core Insight */}
        <section style={{ marginBottom: 48 }}>
          <blockquote
            style={{
              margin: 0,
              padding: "20px 24px",
              borderLeft: `4px solid ${PATTERN.A.primary}`,
              background: hexToRgba(PATTERN.A.primary, 0.08),
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
            <p style={{ fontSize: 14, color: TEXT.muted, margin: 0 }}>
              Not personality types — nervous system positions that shift in response to perceived threat.
              Each state has a pattern designation (A, B, C, D) used in clinical and research contexts.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {MODES.map((mode) => (
              <ResearcherPatternCard
                key={mode.id}
                id={mode.pattern}
                name={mode.name}
                pathway={mode.pathway}
                description={mode.subtitle}
                color={mode.color}
              />
            ))}
          </div>
        </section>

        {/* Core Testable Claim */}
        <section style={{ marginBottom: 48 }}>
          <PropositionBox
            label="CORE TESTABLE CLAIM"
            title="Return capacity predicts relational outcomes"
          >
            <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 0 }}>
              The key variable that predicts relational outcomes is not current state, but{" "}
              <strong
                style={{
                  background: `linear-gradient(90deg, ${PATTERN.A.primary}, ${SPECTRUM.azure})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                capacity to return to Connection when challenged
              </strong>.
              Someone in Protection who can move back is fundamentally different from someone who escalates toward Control.
            </p>
          </PropositionBox>
        </section>

        {/* CTA to .com */}
        <section style={{ marginBottom: 48 }}>
          <div
            style={{
              padding: 28,
              background: hexToRgba(SPECTRUM.blue, 0.08),
              borderRadius: RADIUS.lg,
              border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.2)}`,
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
                  color: "#fff",
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
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 16,
            }}
          >
            <div
              style={{
                padding: 20,
                background: gradientCardBg(SPECTRUM.azure),
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
              <p style={{ fontSize: 13, color: TEXT.muted, margin: 0, lineHeight: 1.6 }}>
                Observable measurement. Where am I? Where are they?
              </p>
            </div>

            <Link
              href="/frameworks-map"
              style={{
                padding: 20,
                background: gradientCardBg(SPECTRUM.cobalt),
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
              <p style={{ fontSize: 13, color: TEXT.muted, margin: 0, lineHeight: 1.6 }}>
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
              color: TEXT.muted,
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
              color: TEXT.muted,
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
          <p style={{ fontSize: 11, color: TEXT.micro, fontFamily: FONT.mono }}>
            TEG-Blue Research Consortium · Open Science · CC BY-NC-SA 4.0
          </p>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}
