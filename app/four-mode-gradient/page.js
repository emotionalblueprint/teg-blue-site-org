import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba, RADIUS } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import { generateFourModeGradientJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "The Four-Mode Gradient — TEG-Blue Research Platform",
  description: "The measurement system at the heart of TEG-Blue: four nervous system regulatory states that shape perception, behavior, and relational capacity. Connection, Protection, Control, Domination.",
  alternates: {
    canonical: "https://teg-blue.org/four-mode-gradient",
  },
};

// Canonical Four-Mode colors from .com
const MODE = {
  connection: { color: "#14b8a6", name: "Connection" },
  protection: { color: "#eab308", name: "Protection" },
  control: { color: "#f97316", name: "Control" },
  domination: { color: "#ec4899", name: "Domination" },
};

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
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {/* Hero Section */}
        <header style={{ marginBottom: 56 }}>
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
              marginBottom: 24,
            }}
          >
            The observable, testable backbone of TEG-Blue. Four nervous system regulatory states
            that shape what we can perceive, feel, think, and do — detectable in natural language.
          </p>

          {/* Gradient bar */}
          <div
            style={{
              height: 6,
              borderRadius: 3,
              background: `linear-gradient(90deg, ${MODE.connection.color}, ${MODE.protection.color}, ${MODE.control.color}, ${MODE.domination.color})`,
              maxWidth: 400,
            }}
          />
        </header>

        {/* Core Insight */}
        <section style={{ marginBottom: 56 }}>
          <blockquote
            style={{
              margin: 0,
              padding: "20px 24px",
              borderLeft: `4px solid ${MODE.connection.color}`,
              background: hexToRgba(MODE.connection.color, 0.08),
              borderRadius: "0 8px 8px 0",
              fontSize: 18,
              fontWeight: 500,
              color: TEXT.primary,
              lineHeight: 1.6,
            }}
          >
            State determines capacity — what someone can perceive, feel, think, and do depends on
            where their nervous system lands, not on their character or intelligence.
          </blockquote>
        </section>

        {/* The Four Modes */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="01" title="The Four Regulatory States" />

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 24 }}>
            These are not personality types or diagnostic categories. They are{" "}
            <strong style={{ color: TEXT.primary }}>nervous system states</strong> — regulatory
            positions that shift in response to perceived threat, shaped by attachment history,
            social context, and current capacity.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <ModeCard
              mode="Connection"
              color={MODE.connection.color}
              subtitle="Safety perceived"
              description="The nervous system perceives safety. Not forced calm or performed wellness — real safety that the body believes, not just the mind."
              characteristics={[
                "Empathy is fully online",
                "Perspective-taking is possible",
                "Flexibility is high",
                "Repair is available",
                "Curiosity about others' experience",
              ]}
              empathy="Full"
              flexibility="High"
            />

            <ModeCard
              mode="Protection"
              color={MODE.protection.color}
              subtitle="Threat perceived"
              description="The nervous system detects potential threat. Walls go up, but they can come down. This is a normal, healthy response — everyone visits Protection mode."
              characteristics={[
                "Empathy is still available, but narrowed",
                "Focus shifts to self-protection",
                "Flexibility decreases",
                "Withdrawal, quietness, guardedness",
                "Recovery is possible with time and safety",
              ]}
              empathy="Partial"
              flexibility="Reduced"
            />

            <ModeCard
              mode="Control"
              color={MODE.control.color}
              subtitle="Safety sought through controlling others"
              description="Protection isn't enough — the nervous system decides that managing others is the only way to feel safe. This isn't necessarily conscious or malicious. It's a survival adaptation."
              characteristics={[
                "Empathy becomes strategic (predict/manage, not connect)",
                "Others become objects to manage",
                "Flexibility limited to what serves control",
                "Accountability is performed, not genuine",
                "Focus on managing perception",
              ]}
              empathy="Strategic"
              flexibility="Limited"
            />

            <ModeCard
              mode="Domination"
              color={MODE.domination.color}
              subtitle="Power as only safety"
              description="Control becomes entrenched — power over others becomes the primary way of feeling safe. Empathy doesn't just narrow; it goes offline."
              characteristics={[
                "Others exist only in relation to one's needs",
                "Vulnerability is weakness",
                "Harm is rationalized or invisible",
                "Truth is whatever maintains power",
                "Repair is structurally impossible",
              ]}
              empathy="Offline"
              flexibility="Minimal"
            />
          </div>
        </section>

        {/* Key Principles */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="02" title="Key Principles" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            <PrincipleCard
              title="Gradient, Not Categories"
              description="The modes exist on a continuum. People don't jump from one to another — they slide. The gradient nature is essential: someone in late Protection looks different from early Protection."
            />
            <PrincipleCard
              title="Health Is Mobility"
              description="A well-regulated nervous system moves fluidly through states. Getting stuck is the problem — not visiting Protection or even Control temporarily."
            />
            <PrincipleCard
              title="States, Not Traits"
              description="These are positions anyone can occupy, not fixed personality types. The same person can operate from Connection in one context and Control in another."
            />
            <PrincipleCard
              title="Biology, Not Morality"
              description="Moving toward Control or Domination under threat isn't a character flaw — it's how nervous systems respond to perceived danger. Understanding this changes everything."
            />
          </div>
        </section>

        {/* The Core Claim */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="03" title="The Core Testable Claim" />

          <div
            style={{
              padding: 24,
              background: BG.card,
              borderRadius: RADIUS.lg,
              border: `1px solid ${BORDER.default}`,
              marginBottom: 20,
            }}
          >
            <p style={{ fontSize: 16, color: TEXT.primary, lineHeight: 1.7, marginBottom: 16 }}>
              The key variable that predicts relational and behavioral outcomes is not a person's
              current regulatory state, but their{" "}
              <strong
                style={{
                  background: `linear-gradient(90deg, ${MODE.connection.color}, ${SPECTRUM.azure})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                capacity to return to Connection when challenged
              </strong>.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
              Someone in Protection who can move back toward Connection when the threat passes is
              fundamentally different from someone who escalates toward Control. Current state
              matters less than trajectory.
            </p>
          </div>

          <p style={{ fontSize: 14, color: TEXT.muted, lineHeight: 1.7 }}>
            This capacity is measurable through{" "}
            <strong style={{ color: TEXT.secondary }}>complexity markers</strong> — signs of
            self-awareness, perspective-taking, and emotional differentiation detectable in natural
            language.
          </p>
        </section>

        {/* How It's Measured */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="04" title="Detection in Natural Language" />

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 24 }}>
            The four modes produce distinct patterns in how people speak and write. A validation
            study analyzing 10,000+ natural conflict narratives identified reliable markers:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <MarkerCard
              title="Polyvagal Markers"
              description="Physiological regulation signals: safety cues, withdrawal patterns, fight/flight language"
              color={SPECTRUM.azure}
            />
            <MarkerCard
              title="Contempt Markers"
              description="Dismissiveness, superiority, disgust — signals of Control/Domination positioning"
              color={SPECTRUM.cobalt}
            />
            <MarkerCard
              title="Moral Disengagement"
              description="Rationalization, diffusion of responsibility, dehumanization of others"
              color={SPECTRUM.indigo}
            />
            <MarkerCard
              title="Complexity Markers"
              description="Self-awareness, perspective-taking, emotional differentiation — predict return to Connection"
              color={MODE.connection.color}
            />
          </div>

          <div
            style={{
              padding: 20,
              background: BG.surface,
              borderRadius: RADIUS.md,
              border: `1px solid ${BORDER.default}`,
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontFamily: FONT.mono,
                color: TEXT.hint,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: 12,
              }}
            >
              Validation Finding
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
              De-escalators (those who moved toward Connection when challenged) showed{" "}
              <strong style={{ color: MODE.connection.color }}>78% higher rates</strong> of
              complexity markers than escalators. Mode classifications correlated with independent
              community moral judgments.
            </p>
          </div>
        </section>

        {/* Relationship to 12 Frameworks */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="05" title="Layer 1 of Two" />

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            The Four-Mode Gradient is the{" "}
            <strong style={{ color: TEXT.primary }}>measurement system</strong> — it tells you{" "}
            <em>where</em> someone is. It answers: "Where am I? Where are they?"
          </p>

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 24 }}>
            The{" "}
            <Link
              href="/theoretical-foundations"
              style={{ color: SPECTRUM.azure, textDecoration: "none" }}
            >
              12 Frameworks
            </Link>{" "}
            are the <strong style={{ color: TEXT.primary }}>explanatory architecture</strong> — they
            explain <em>why</em> the modes exist, <em>how</em> patterns scale from individual to
            systemic, and <em>what</em> makes change possible.
          </p>

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
                Layer 1
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
                Observable measurement. Empirically validated. Detectable in natural language.
              </p>
            </div>

            <Link
              href="/theoretical-foundations"
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
                12 Frameworks
              </p>
              <p style={{ fontSize: 13, color: TEXT.muted, margin: 0, lineHeight: 1.6 }}>
                Explanatory architecture. Integrates 139+ theories. Maps individual to systemic.
              </p>
            </Link>
          </div>
        </section>

        {/* Applications */}
        <section style={{ marginBottom: 56 }}>
          <SectionHeader number="06" title="Applications" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 12,
            }}
          >
            <ApplicationCard
              title="Clinical Assessment"
              description="Therapists and clinicians can use the gradient to assess client regulatory states and track movement over time."
            />
            <ApplicationCard
              title="Relational Intelligence"
              description="Individuals can recognize their own patterns and understand others' behavior as nervous system responses, not character."
            />
            <ApplicationCard
              title="Conflict Analysis"
              description="The framework provides language for understanding escalation and de-escalation dynamics in interpersonal and group conflict."
            />
            <ApplicationCard
              title="AI Safety"
              description="Structured gradients give AI systems vocabulary for patterns that binary safe/unsafe cannot capture."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            padding: 32,
            background: hexToRgba(SPECTRUM.blue, 0.08),
            borderRadius: RADIUS.lg,
            border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.2)}`,
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 12,
            }}
          >
            Explore the Gradient
          </h2>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              marginBottom: 24,
              maxWidth: 520,
              margin: "0 auto 24px",
              lineHeight: 1.7,
            }}
          >
            The Four-Mode Gradient is available as an interactive tool on teg-blue.com, with both
            Explorer (accessible) and Deep Diver (clinical) versions.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://teg-blue.com/inner-compass"
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
              Interactive Tool →
            </a>
            <Link
              href="/publications/validation-study"
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
              Validation Study
            </Link>
            <Link
              href="/theoretical-foundations"
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
              12 Frameworks
            </Link>
          </div>
        </section>

        {/* Footer note */}
        <footer style={{ marginTop: 48, textAlign: "center" }}>
          <p style={{ fontSize: 11, color: TEXT.micro, fontFamily: FONT.mono }}>
            TEG-Blue Research Consortium · Open Science · CC BY-NC-SA 4.0
          </p>
        </footer>
      </main>

      <SiteFooter />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFourModeGradientJsonLd()) }}
      />
    </div>
  );
}

// ─── COMPONENTS ─────────────────────────────────────────

function SectionHeader({ number, title }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: SPECTRUM.azure,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          fontFamily: FONT.mono,
          marginBottom: 6,
        }}
      >
        {number}
      </p>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: TEXT.primary,
          letterSpacing: "-0.01em",
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function ModeCard({ mode, color, subtitle, description, characteristics, empathy, flexibility }) {
  return (
    <div
      style={{
        background: BG.card,
        borderRadius: RADIUS.lg,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `4px solid ${color}`,
        padding: 24,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div>
          <h3
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: color,
              marginBottom: 4,
            }}
          >
            {mode}
          </h3>
          <p
            style={{
              fontSize: 13,
              color: TEXT.muted,
              fontStyle: "italic",
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div
            style={{
              padding: "4px 10px",
              background: hexToRgba(color, 0.12),
              borderRadius: 4,
              fontSize: 10,
              fontFamily: FONT.mono,
              color: color,
              fontWeight: 600,
            }}
          >
            Empathy: {empathy}
          </div>
          <div
            style={{
              padding: "4px 10px",
              background: hexToRgba(color, 0.12),
              borderRadius: 4,
              fontSize: 10,
              fontFamily: FONT.mono,
              color: color,
              fontWeight: 600,
            }}
          >
            Flexibility: {flexibility}
          </div>
        </div>
      </div>

      <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16 }}>
        {description}
      </p>

      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: TEXT.muted, lineHeight: 1.7 }}>
        {characteristics.map((char, i) => (
          <li key={i} style={{ marginBottom: 4 }}>
            {char}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PrincipleCard({ title, description }) {
  return (
    <div
      style={{
        padding: 20,
        background: BG.surface,
        borderRadius: RADIUS.md,
        border: `1px solid ${BORDER.default}`,
      }}
    >
      <h3
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: TEXT.primary,
          marginBottom: 8,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.muted, margin: 0, lineHeight: 1.6 }}>
        {description}
      </p>
    </div>
  );
}

function MarkerCard({ title, description, color }) {
  return (
    <div
      style={{
        padding: 16,
        background: hexToRgba(color, 0.08),
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(color, 0.15)}`,
        borderTop: `2px solid ${color}`,
      }}
    >
      <h3
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: color,
          marginBottom: 6,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 12, color: TEXT.muted, margin: 0, lineHeight: 1.5 }}>
        {description}
      </p>
    </div>
  );
}

function ApplicationCard({ title, description }) {
  return (
    <div
      style={{
        padding: 16,
        background: BG.card,
        borderRadius: RADIUS.md,
        border: `1px solid ${BORDER.default}`,
      }}
    >
      <h3
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: TEXT.primary,
          marginBottom: 6,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 12, color: TEXT.muted, margin: 0, lineHeight: 1.5 }}>
        {description}
      </p>
    </div>
  );
}
