import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba, RESEARCHER, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero, PropositionBox, MechanismBox } from "@/src/components";

export const metadata = {
  title: "For Researchers | TEG-Blue Emotional Technology",
  description: "Entry point for researchers and academics. TEG-Blue is the first complete emotional technology system — making emotional safety and accountability measurable, testable, and usable. Five open research questions for collaboration.",
  keywords: [
    "TEG-Blue research",
    "emotional technology",
    "emotional regulation research",
    "open science psychology",
    "research collaboration",
    "complexity markers",
    "emotional intelligence measurement",
    "AI safety research",
    "computational social science",
    "trauma research",
    "attachment research",
    "academic collaboration"
  ],
  alternates: {
    canonical: "https://teg-blue.org/research-entry",
  },
  openGraph: {
    title: "For Researchers — TEG-Blue Open Science Platform",
    description: "Entry point for academics. Five open research questions, clear methodology, invitation to collaborate. The building blocks are validated; the connections need verification.",
    url: "https://teg-blue.org/research-entry",
    siteName: "TEG-Blue Research",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Researchers — TEG-Blue",
    description: "Open science platform connecting 139+ theories. Five priority research questions for collaboration.",
  },
};

export default function ResearchEntryPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/research-entry" />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `32px ${SPACING.pagePadding} 60px`,
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 32 }}>
          <ResearcherHero
            badge="FOR RESEARCHERS"
            title="Start Here"
            subtitle="Prototype emotional data system — measurable, testable, usable"
            description="TEG-Blue is a prototype emotional data system, built to make emotional safety and accountability measurable, testable, and usable across humans and AI. It treats emotions as valid, structured data."
          />
          <div style={{ marginTop: 20 }}>
            <Link
              href="/foundations"
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
              If you want the full system map first: System Overview →
            </Link>
          </div>
        </header>

        {/* What TEG-Blue is */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            What TEG-Blue is
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12, maxWidth: 640 }}>
            TEG-Blue is a visual mapping system designed to make emotional patterns measurable, testable, and usable across individuals, relationships, institutions, and AI systems.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12, maxWidth: 640 }}>
            It builds on existing research across nervous system regulation, attachment, development, trauma, social psychology, and language.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, maxWidth: 640 }}>
            The originality is not in claiming a new theory for each domain. It is in building an integrated structure that makes the connections explicit, operational, and testable.
          </p>
        </section>

        {/* What is original */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            What is original: the &quot;1 + 2 = 3&quot; principle
          </h2>
          <MechanismBox label="THE 1 + 2 = 3 PRINCIPLE">
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              TEG-Blue doesn&apos;t invent the building blocks. Polyvagal Theory, Attachment Theory, Affective Neuroscience, Trauma Research — these are established. They are the{" "}
              <strong style={{ color: TEXT.primary }}>&quot;1&quot; and the &quot;2&quot;</strong>.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              <strong style={{ color: TEXT.primary }}>What TEG-Blue proposes is the &quot;3&quot;</strong> — specific connections between these established theories:
            </p>
            <ul style={{ paddingLeft: 20, marginBottom: 16, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
              <li style={{ marginBottom: 6 }}>Nervous system regulation → moral perception</li>
              <li style={{ marginBottom: 6 }}>Attachment patterns → social stratification</li>
              <li style={{ marginBottom: 6 }}>Protection → domination as a continuous gradient</li>
              <li>Linguistic complexity → regulatory capacity</li>
            </ul>
            <p style={{ fontSize: 14, color: TEXT.primary, fontWeight: 500, margin: 0 }}>
              The individual theories are validated. The connections are our hypothesis. We need the scientific community to help us see if &quot;3&quot; makes sense.
            </p>
          </MechanismBox>
        </section>

        {/* Status snapshot */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            Status snapshot
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16, maxWidth: 640 }}>
            This project stays honest by separating what exists from what we are testing.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <StatusCard
              label="Established"
              color={SPECTRUM.indigo}
              description="Many underlying theories and measures in affective science, clinical psychology, neuroscience, trauma, social psychology, and linguistics."
            />
            <StatusCard
              label="Proposed synthesis"
              color={SPECTRUM.azure}
              description="The full cross-framework mapping. The 'return-to-connection' arc across Frameworks 8–10. The architecture that connects regulation, identity adaptation, and social escalation."
            />
            <StatusCard
              label="Preliminary evidence"
              color={SPECTRUM.blue}
              description={
                <>Initial studies and analyses listed in <Link href="/publications" style={{ color: SPECTRUM.blue }}>Publications</Link>.</>
              }
            />
            <StatusCard
              label="Open to validation"
              color={SPECTRUM.slate}
              description="Psychometric validation and replication. Construct validity across cultures, contexts, and modalities. External benchmarking against existing instruments."
            />
          </div>
        </section>

        {/* Core hypothesis */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            The core hypothesis we want help testing
          </h2>
          <PropositionBox
            label="CORE HYPOTHESIS"
            title="Return capacity predicts relational outcomes"
          >
            <p style={{ margin: 0, fontStyle: "italic" }}>
              The key variable that predicts relational and behavioral outcomes is not the person&apos;s state in a moment. It is their <strong>capacity to return to Connection when challenged</strong>.
            </p>
          </PropositionBox>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
            We treat this as a testable hypothesis, not a slogan.
          </p>
          <div
            style={{
              padding: 16,
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 8 }}>
              <strong style={{ color: TEXT.primary }}>Hypothesis:</strong> Return capacity predicts relational outcomes.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 8 }}>
              <strong style={{ color: TEXT.primary }}>Operationalization:</strong> Measurable in language via complexity markers — accountability without collapse, perspective-taking, repair attempts, emotional differentiation, reduced coercion under stress.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 0 }}>
              <strong style={{ color: TEXT.primary }}>Research need:</strong> Replication + cross-context validation. Which markers are reliable? Which are context-dependent? How do they shift across stress load, power dynamics, and attachment history?
            </p>
          </div>
          <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 12 }}>
            Related frameworks: F8 (Self-Awareness Under Stress), F9 (Our True Self), F10 (Repair and Relational Return).
          </p>
        </section>

        {/* Choose a lane */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
            Choose a lane
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
            You do not need to understand everything to contribute. Pick the lane that matches your expertise.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <LaneCard
              letter="A"
              title="Measurement and recognition"
              description="Help test whether the Four-Mode Gradient can be reliably detected in natural language, transcripts, therapy session excerpts, conflict dialogues, and organizational communication."
              needs="Inter-rater reliability designs, annotation schemas, construct validation, cross-domain generalization tests."
              link="/four-mode-gradient"
              linkText="Four-Mode Gradient →"
            />
            <LaneCard
              letter="B"
              title="Prediction and prevention"
              description="Help map how states shift and escalate across the gradient. Harm often follows predictable progressions from Protection into Control and Domination."
              needs="Escalation pathway coding, longitudinal tracking designs, behavioral outcome prediction under stress and power asymmetry."
              link="/frameworks-map"
              linkText="Frameworks → (especially F4–F7)"
            />
            <LaneCard
              letter="C"
              title="Navigation and intervention"
              description="Help identify interventions that support systems moving from Control back toward Protection and Connection. Routes back to safety exist — the question is which ones work, and when."
              needs="Scale design support, factor structure exploration, convergent and discriminant validity plans, bias and fairness evaluation."
              link="/methodology"
              linkText="Methodology →"
            />
            <LaneCard
              letter="D"
              title="AI alignment and structured schemas"
              description="Help translate emotional pattern logic into forms AI systems can read safely."
              needs="Schema design feedback, evaluation protocols, risk analysis, misuse prevention, alignment with existing safety research."
              link="/ai-safety"
              linkText="AI Safety →"
            />
          </div>
        </section>

        {/* What we are not asking for */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            What we are not asking for
          </h2>
          <ul style={{ paddingLeft: 20, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
            <li style={{ marginBottom: 6 }}>We are not asking researchers to &quot;believe in a new theory&quot;</li>
            <li style={{ marginBottom: 6 }}>We are not asking for endorsement before critique</li>
            <li>We are not presenting the full system as already proven</li>
          </ul>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginTop: 12 }}>
            We are inviting collaborative testing, including disagreement, replication, and revision.
          </p>
        </section>

        {/* Next steps table */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Next steps
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
                  <th style={{ ...tableHeaderStyle }}>Step</th>
                  <th style={{ ...tableHeaderStyle }}>Page</th>
                </tr>
              </thead>
              <tbody>
                <NextStepRow step="Understand the system" href="/foundations" label="System Overview →" />
                <NextStepRow step="See the measurement layer" href="/four-mode-gradient" label="Four-Mode Gradient →" />
                <NextStepRow step="See the explanatory layer" href="/frameworks-map" label="Frameworks →" />
                <NextStepRow step="Review evidence and methods" href="/publications" label="Publications" extra={<> · <Link href="/methodology" style={{ color: SPECTRUM.blue }}>Methodology</Link></>} />
                <NextStepRow step="Work with us" href="/collaborate" label="Collaborate →" />
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
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16 }}>
            If one lane fits your work, reach out with a short note: your background, which lane you are interested in, and what you would want to test or critique first.
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
function StatusCard({ label, color, description }) {
  return (
    <div
      style={{
        padding: 16,
        background: gradientCardBg(color),
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${color}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            fontFamily: FONT.mono,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            color: color,
            padding: "4px 8px",
            background: hexToRgba(color, 0.1),
            borderRadius: 4,
          }}
        >
          {label}
        </span>
      </div>
      <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
        {description}
      </p>
    </div>
  );
}

function LaneCard({ letter, title, description, needs, link, linkText }) {
  return (
    <div
      style={{
        padding: 20,
        background: gradientCardBg(SPECTRUM.azure),
        borderRadius: 10,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${SPECTRUM.azure}`,
      }}
    >
      <h3 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
        Lane {letter} — {title}
      </h3>
      <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 12 }}>
        {description}
      </p>
      <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.6, marginBottom: 12 }}>
        <strong style={{ color: TEXT.secondary }}>What we need:</strong> {needs}
      </p>
      <Link
        href={link}
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
        {linkText}
      </Link>
    </div>
  );
}

function NextStepRow({ step, href, label, extra }) {
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ ...tableCellStyle, color: TEXT.secondary }}>{step}</td>
      <td style={{ ...tableCellStyle }}>
        <Link
          href={href}
          style={{
            color: SPECTRUM.blue,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          {label}
        </Link>
        {extra}
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
