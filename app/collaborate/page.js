import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

export const metadata = {
  title: "Collaborate | TEG-Blue Research",
  description: "How to work with us on TEG-Blue research. Clear attribution, clear authorship expectations, open science when possible.",
  alternates: {
    canonical: "https://teg-blue.org/collaborate",
  },
};

export default function CollaboratePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/collaborate" />

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
            Collaborate
          </h1>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.8,
              maxWidth: 640,
            }}
          >
            How to work with us.
          </p>
        </header>

        {/* Principles */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Principles
          </h2>
          <ul style={{ paddingLeft: 20, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
            <li style={{ marginBottom: 8 }}>Clear attribution from the start.</li>
            <li style={{ marginBottom: 8 }}>Authorship agreements before work begins.</li>
            <li style={{ marginBottom: 8 }}>Open science when possible. Data and methods shared unless privacy requires otherwise.</li>
            <li style={{ marginBottom: 8 }}>Disagreement is welcome. TEG-Blue is a hypothesis, not a creed.</li>
            <li>No collaboration requires belief. Only willingness to engage seriously.</li>
          </ul>
        </section>

        {/* How to start */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            How to start
          </h2>
          <ol style={{ paddingLeft: 20, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
            <li style={{ marginBottom: 8 }}>
              <strong style={{ color: TEXT.primary }}>Read the research entry page.</strong> Understand what TEG-Blue is and what is being tested.{" "}
              <Link href="/research-entry" style={{ color: SPECTRUM.blue }}>Start Here →</Link>
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong style={{ color: TEXT.primary }}>Identify which lane fits your expertise:</strong> Measurement, Prediction, Intervention, or AI Safety.
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong style={{ color: TEXT.primary }}>Send a short email</strong> with your background, which lane you want to contribute to, and what you would test or critique first.
            </li>
          </ol>
        </section>

        {/* The four research lanes */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            The four research lanes
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
            You do not need to validate the entire system. Pick the lane that matches your expertise.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <LaneCard
              letter="A"
              title="Measurement and recognition"
              description="Help test whether the Four-Mode Gradient can be reliably detected in natural language."
            />
            <LaneCard
              letter="B"
              title="Prediction and prevention"
              description="Help map escalation pathways and design prediction models for harm trajectories."
            />
            <LaneCard
              letter="C"
              title="Navigation and intervention"
              description="Help identify which interventions support movement from Control back toward Connection."
            />
            <LaneCard
              letter="D"
              title="AI alignment and structured schemas"
              description="Help translate emotional pattern logic into forms AI systems can read safely."
            />
          </div>
        </section>

        {/* What collaboration looks like */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            What collaboration looks like
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12, maxWidth: 640 }}>
            Most collaborations begin with a short conversation to clarify:
          </p>
          <ul style={{ paddingLeft: 20, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            <li style={{ marginBottom: 6 }}>What you want to study or test</li>
            <li style={{ marginBottom: 6 }}>What data, tools, or access you need</li>
            <li style={{ marginBottom: 6 }}>What authorship and attribution looks like</li>
            <li>What timeline and scope are realistic</li>
          </ul>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
            We respond to every serious inquiry.
          </p>
        </section>

        {/* What we can offer */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            What we can offer
          </h2>
          <ul style={{ paddingLeft: 20, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
            <li style={{ marginBottom: 6 }}>Access to existing datasets (anonymized conflict narratives, emotional gradient data)</li>
            <li style={{ marginBottom: 6 }}>Theoretical consultation on framework design and interpretation</li>
            <li style={{ marginBottom: 6 }}>Co-authorship opportunities on replication and extension studies</li>
            <li style={{ marginBottom: 6 }}>Acknowledgment and attribution for critique, corrections, and improvements</li>
            <li>Open access to all published materials (CC BY-NC-SA 4.0)</li>
          </ul>
        </section>

        {/* What we need */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            What we need
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16, maxWidth: 640 }}>
            See <Link href="/research-entry" style={{ color: SPECTRUM.blue }}>Start Here</Link> for detailed research needs. The short version:
          </p>
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
                  <th style={{ ...tableHeaderStyle }}>Lane</th>
                  <th style={{ ...tableHeaderStyle }}>What we need</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
                  <td style={{ ...tableCellStyle, color: TEXT.primary, fontWeight: 500 }}>A</td>
                  <td style={{ ...tableCellStyle, color: TEXT.secondary }}>Inter-rater reliability, annotation schemas, construct validation</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
                  <td style={{ ...tableCellStyle, color: TEXT.primary, fontWeight: 500 }}>B</td>
                  <td style={{ ...tableCellStyle, color: TEXT.secondary }}>Escalation pathway coding, longitudinal design, behavioral prediction</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
                  <td style={{ ...tableCellStyle, color: TEXT.primary, fontWeight: 500 }}>C</td>
                  <td style={{ ...tableCellStyle, color: TEXT.secondary }}>Scale design, factor structure, convergent/discriminant validity</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
                  <td style={{ ...tableCellStyle, color: TEXT.primary, fontWeight: 500 }}>D</td>
                  <td style={{ ...tableCellStyle, color: TEXT.secondary }}>Schema design feedback, evaluation protocols, misuse prevention</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Contact */}
        <section
          style={{
            padding: 24,
            background: BG.card,
            borderRadius: 8,
            border: `1px solid ${BORDER.default}`,
            borderLeft: `3px solid ${SPECTRUM.azure}`,
          }}
        >
          <h2 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            Contact
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16, maxWidth: 500 }}>
            Send a short message with your background, which lane you want to contribute to, and what you would test or critique first.
          </p>
          <a
            href="mailto:research@teg-blue.org"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
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

        {/* Footer note */}
        <footer style={{ marginTop: 32, textAlign: "center" }}>
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
function LaneCard({ letter, title, description }) {
  return (
    <div
      style={{
        padding: 16,
        background: BG.card,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${SPECTRUM.azure}`,
      }}
    >
      <h3 style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
        Lane {letter} — {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>
    </div>
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
