import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

export const metadata = {
  title: "System Overview | TEG-Blue Research",
  description: "How the parts fit together. TEG-Blue is organized as a layered system: measurement, explanatory frameworks, emotional tools, and AI safety layer.",
  alternates: {
    canonical: "https://teg-blue.org/foundations",
  },
};

export default function FoundationsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/foundations" />

      <main
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 32 }}>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 12,
              letterSpacing: "-0.02em",
            }}
          >
            System Overview
          </h1>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.8,
              maxWidth: 640,
            }}
          >
            How the parts fit together.
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.muted,
              lineHeight: 1.8,
              maxWidth: 640,
              marginTop: 12,
            }}
          >
            TEG-Blue is organized as a layered system. Each layer has a different job, a different evidence status, and a different kind of researcher who can help.
          </p>
        </header>

        {/* Quick Navigation Cards */}
        <section style={{ marginBottom: 40 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
            }}
          >
            <LayerIntroCard
              number={1}
              title="Measurement"
              subtitle="Four-Mode Gradient"
              color={SPECTRUM.azure}
              href="/four-mode-gradient"
            />
            <LayerIntroCard
              number={2}
              title="Explanatory"
              subtitle="12 Frameworks"
              color={SPECTRUM.cobalt}
              href="/theoretical-foundations"
            />
            <LayerIntroCard
              number={3}
              title="Tools"
              subtitle="Applied Instruments"
              color={SPECTRUM.indigo}
              href="https://teg-blue.com/emotional-tools"
              external
            />
            <LayerIntroCard
              number={4}
              title="AI Safety"
              subtitle="Structured Schemas"
              color={SPECTRUM.slate}
              href="/ai-safety"
            />
          </div>
        </section>

        {/* Layer 1 — Measurement */}
        <section style={{ marginBottom: 32 }}>
          <LayerCard
            number={1}
            title="The Measurement Layer"
            color={SPECTRUM.azure}
          >
            <h3 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              Four-Mode Gradient
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              A structured model of regulated and dysregulated states expressed through behavior and language.
            </p>
            <p
              style={{
                fontSize: 13,
                fontFamily: FONT.mono,
                color: TEXT.muted,
                padding: "8px 12px",
                background: hexToRgba(SPECTRUM.azure, 0.1),
                borderRadius: 6,
                marginBottom: 12,
              }}
            >
              Connection → Protection → Control → Domination
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              These are not personality types. They are nervous system states — regulatory positions that shift in response to perceived threat, shaped by attachment history, social context, and current capacity.
            </p>
            <StatusBadge status="Proposed model with early evidence" color={SPECTRUM.azure} />
            <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 12 }}>
              See <Link href="/publications" style={{ color: SPECTRUM.blue }}>Publications</Link> for what is currently tested and what still needs replication.
            </p>
            <div style={{ marginTop: 16 }}>
              <Link
                href="/four-mode-gradient"
                style={{
                  fontSize: 14,
                  color: SPECTRUM.blue,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Four-Mode Gradient →
              </Link>
            </div>
          </LayerCard>
        </section>

        {/* Layer 2 — Explanatory */}
        <section style={{ marginBottom: 32 }}>
          <LayerCard
            number={2}
            title="The Explanatory Layer"
            color={SPECTRUM.cobalt}
          >
            <h3 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              12 Frameworks (F1–F12)
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              A connected set of frameworks that explain why these patterns emerge, how they escalate, why they look paradoxical, and how repair becomes possible again.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              The frameworks are organized as a connected arc:
            </p>
            <ul style={{ paddingLeft: 20, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>F1–F3:</strong> Internal regulation, identity adaptation, inner organization</li>
              <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>F4–F7:</strong> How individual protection scales into social systems and harm</li>
              <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>F8–F10:</strong> The return path — self-awareness, repair, and re-integration</li>
              <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>F11:</strong> Why humans look contradictory until you see the full state logic</li>
              <li><strong style={{ color: TEXT.primary }}>F12:</strong> The integrative lens connecting inner biology to social outcomes</li>
            </ul>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              Each framework draws on established theories. The originality is in the connections between them.
            </p>
            <StatusBadge status="Proposed synthesis" color={SPECTRUM.cobalt} />
            <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 8 }}>
              Grounded in established theories, with connections that need structured review and testing.
            </p>
            <div style={{ marginTop: 16 }}>
              <Link
                href="/theoretical-foundations"
                style={{
                  fontSize: 14,
                  color: SPECTRUM.blue,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Frameworks →
              </Link>
            </div>
          </LayerCard>
        </section>

        {/* Layer 3 — Emotional Tools */}
        <section style={{ marginBottom: 32 }}>
          <LayerCard
            number={3}
            title="The Emotional Tools"
            color={SPECTRUM.indigo}
          >
            <h3 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              Applied Instruments
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              16 gradient-based scales and assessments derived from the frameworks. They translate the system into practical instruments for individuals, practitioners, and clinical settings.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              Each tool maps a dimension of human behavior across the gradient — from healthy to harmful — with clear markers at every point.
            </p>
            <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.6, marginBottom: 12 }}>
              Examples: Empathy Gradient (genuine → selective → performed → weaponized), Accountability Gradient (genuine → performed → absent → protective), Integrity Scale (value-aligned → conditional → performed → remorseless).
            </p>
            <StatusBadge status="Designed, not yet psychometrically validated" color={SPECTRUM.indigo} />
            <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 8 }}>
              Available for exploration on <a href="https://teg-blue.com" target="_blank" rel="noopener noreferrer" style={{ color: SPECTRUM.blue }}>teg-blue.com</a>, awaiting formal validation studies.
            </p>
            <div
              style={{
                marginTop: 16,
                padding: 12,
                background: hexToRgba(SPECTRUM.indigo, 0.05),
                borderRadius: 6,
              }}
            >
              <p style={{ fontSize: 13, color: TEXT.secondary, margin: 0 }}>
                <strong style={{ color: TEXT.primary }}>Research need:</strong> Scale design support, factor structure exploration, convergent and discriminant validity plans, bias and fairness evaluation.
              </p>
            </div>
          </LayerCard>
        </section>

        {/* Layer 4 — AI Safety */}
        <section style={{ marginBottom: 32 }}>
          <LayerCard
            number={4}
            title="The AI Safety Layer"
            color={SPECTRUM.slate}
          >
            <h3 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              Structured Schemas for AI Systems
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              A structured, computationally legible schema layer that translates the emotional pattern logic into formats AI systems can consume.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              This includes JSON-LD structured data, consistent terminology, semantic HTML, and gradient-based classifications designed to replace binary safe/unsafe models with nuanced assessments.
            </p>
            <StatusBadge status="Proposed architecture with early implementation" color={SPECTRUM.slate} />
            <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 8 }}>
              See <Link href="/ai-safety" style={{ color: SPECTRUM.blue }}>AI Safety</Link> for the full application case.
            </p>
            <div
              style={{
                marginTop: 16,
                padding: 12,
                background: hexToRgba(SPECTRUM.slate, 0.05),
                borderRadius: 6,
              }}
            >
              <p style={{ fontSize: 13, color: TEXT.secondary, margin: 0 }}>
                <strong style={{ color: TEXT.primary }}>Research need:</strong> Schema design feedback, evaluation protocols, risk analysis, misuse prevention, alignment with existing safety research.
              </p>
            </div>
          </LayerCard>
        </section>

        {/* The four core functions */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            The four core functions
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20, maxWidth: 640 }}>
            The system is designed to serve four functions. Each represents a research lane where collaboration is needed.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            <FunctionCard
              number={1}
              title="Measurement and recognition"
              description="Turning subjective states into observable, trackable patterns using gradients, modes, and markers."
            />
            <FunctionCard
              number={2}
              title="Prediction and prevention"
              description="Mapping how states shift and escalate across the gradient. Harm often follows predictable progressions from Protection into Control and Domination."
            />
            <FunctionCard
              number={3}
              title="Navigation and intervention"
              description="Identifying interventions that help systems move from Control back toward Protection and Connection. Routes back to safety exist."
            />
            <FunctionCard
              number={4}
              title="Pattern breaking"
              description="Understanding how entrenched patterns — individual, relational, institutional — can be interrupted and restructured."
            />
          </div>
        </section>

        {/* Ethical constraint */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            Ethical constraint: Trauma-informed data architecture
          </h2>
          <div
            style={{
              padding: 20,
              background: BG.card,
              borderRadius: 10,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.indigo}`,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              The system assumes many difficult behaviors started as Protection Mode survival responses. Data systems built on this framework should not be designed to shame, profile, or exploit.
            </p>
            <p style={{ fontSize: 14, color: TEXT.primary, fontWeight: 500, margin: 0 }}>
              This is not a tagline. It is an architectural constraint that applies to every tool, schema, and classification derived from TEG-Blue.
            </p>
          </div>
        </section>

        {/* Intent–Impact–Pattern logic */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            Intent–Impact–Pattern logic
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16, maxWidth: 640 }}>
            TEG-Blue maps each behavior across three dimensions:
          </p>
          <ul style={{ paddingLeft: 20, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Intent:</strong> What the nervous system is trying to do</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Pattern:</strong> Which gradient pattern or tool family it belongs to</li>
            <li><strong style={{ color: TEXT.primary }}>Impact:</strong> What it does to safety, power, and connection</li>
          </ul>
          <p style={{ fontSize: 14, color: TEXT.muted, lineHeight: 1.8 }}>
            This prevents reducing behavior to either &quot;good person&quot; or &quot;bad person&quot; — the same behavior can serve different functions depending on state and context.
          </p>
        </section>

        {/* Where to go next */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Where to go next
          </h2>
          <div
            style={{
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: BG.surface }}>
                  <th style={{ ...tableHeaderStyle }}>If you want to…</th>
                  <th style={{ ...tableHeaderStyle }}>Go here</th>
                </tr>
              </thead>
              <tbody>
                <NavRow label="See the measurement layer in detail" href="/four-mode-gradient" linkText="Four-Mode Gradient →" />
                <NavRow label="See the 12 frameworks" href="/theoretical-foundations" linkText="Frameworks →" />
                <NavRow label="Review evidence" href="/publications" linkText="Publications →" />
                <NavRow label="Understand methods" href="/methodology" linkText="Methodology →" />
                <NavRow label="Explore AI applications" href="/ai-safety" linkText="AI Safety →" />
                <NavRow label="Collaborate" href="/collaborate" linkText="Collaborate →" />
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer note */}
        <footer style={{ textAlign: "center" }}>
          <p style={{ fontSize: 11, color: TEXT.micro, fontFamily: FONT.mono }}>
            TEG-Blue Research Consortium · Open Science · CC BY-NC-SA 4.0
          </p>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}

// Helper components
function LayerCard({ number, title, color, children }) {
  return (
    <div
      style={{
        padding: 24,
        background: BG.card,
        borderRadius: 10,
        border: `1px solid ${BORDER.default}`,
        borderTop: `3px solid ${color}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: hexToRgba(color, 0.15),
            color: color,
            fontFamily: FONT.mono,
            fontSize: 13,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {number}
        </span>
        <h2
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: color,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            fontFamily: FONT.mono,
            margin: 0,
          }}
        >
          Layer {number} — {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

function StatusBadge({ status, color }) {
  return (
    <span
      style={{
        display: "inline-flex",
        fontSize: 11,
        fontWeight: 600,
        fontFamily: FONT.mono,
        color: color,
        padding: "4px 10px",
        background: hexToRgba(color, 0.1),
        borderRadius: 4,
      }}
    >
      Status: {status}
    </span>
  );
}

function FunctionCard({ number, title, description }) {
  return (
    <div
      style={{
        padding: 16,
        background: BG.card,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
      }}
    >
      <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
        {number}. {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>
    </div>
  );
}

function NavRow({ label, href, linkText }) {
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ ...tableCellStyle, color: TEXT.secondary }}>{label}</td>
      <td style={{ ...tableCellStyle }}>
        <Link
          href={href}
          style={{
            color: SPECTRUM.blue,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          {linkText}
        </Link>
      </td>
    </tr>
  );
}

const tableHeaderStyle = {
  padding: "12px 16px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 600,
  color: TEXT.muted,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontFamily: FONT.mono,
};

const tableCellStyle = {
  padding: "12px 16px",
  fontSize: 14,
};

function LayerIntroCard({ number, title, subtitle, color, href, external }) {
  const CardWrapper = external ? "a" : Link;
  const extraProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <CardWrapper
      href={href}
      {...extraProps}
      style={{
        display: "block",
        padding: 16,
        background: hexToRgba(color, 0.06),
        borderRadius: 10,
        border: `1px solid ${hexToRgba(color, 0.2)}`,
        borderTop: `3px solid ${color}`,
        textDecoration: "none",
        transition: "all 0.2s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <span
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: hexToRgba(color, 0.15),
            color: color,
            fontFamily: FONT.mono,
            fontSize: 11,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {number}
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: color,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            fontFamily: FONT.mono,
          }}
        >
          Layer {number}
        </span>
      </div>
      <h3
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: TEXT.primary,
          marginBottom: 4,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 12,
          color: TEXT.muted,
          margin: 0,
        }}
      >
        {subtitle} →
      </p>
    </CardWrapper>
  );
}
