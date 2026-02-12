import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ExpandableSection } from "@/src/components";

export const metadata = {
  title: "Research Entry Point",
  description: "Entry point for researchers interested in TEG-Blue. Validation findings, open research questions, and collaboration opportunities.",
  alternates: {
    canonical: "https://teg-blue.org/research-entry",
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
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 32 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: SPECTRUM.blue,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: FONT.mono,
              marginBottom: 8,
            }}
          >
            For Researchers
          </p>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 8,
              letterSpacing: "-0.02em",
            }}
          >
            Research Entry Point
          </h1>
          <p
            style={{
              fontSize: 13,
              color: TEXT.hint,
              fontFamily: FONT.mono,
              marginBottom: 16,
            }}
          >
            Anna Paretas-Artacho · TEG-Blue Research Consortium · February 2026
          </p>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.8,
              maxWidth: 640,
            }}
          >
            What TEG-Blue has found, what questions remain open, and where different areas
            of expertise connect to the work.
          </p>
        </header>

        {/* Architecture Overview */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            The Architecture
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {/* Four-Mode Gradient */}
            <div
              style={{
                padding: 16,
                background: hexToRgba(SPECTRUM.azure, 0.06),
                borderRadius: 10,
                border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
                borderTop: `3px solid ${SPECTRUM.azure}`,
              }}
            >
              <h3
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
                Measurement System
              </h3>
              <p style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
                Four-Mode Gradient
              </p>
              <p style={{ fontSize: 12, color: TEXT.secondary, lineHeight: 1.6, marginBottom: 8 }}>
                Nervous system states detectable in natural language. Empirically validated.
              </p>
              <p
                style={{
                  fontSize: 10,
                  fontFamily: FONT.mono,
                  color: TEXT.muted,
                  padding: "6px 8px",
                  background: hexToRgba(SPECTRUM.azure, 0.1),
                  borderRadius: 4,
                }}
              >
                Connection → Protection → Control → Domination
              </p>
            </div>

            {/* 12 Frameworks */}
            <Link
              href="/theoretical-foundations"
              style={{
                padding: 16,
                background: hexToRgba(SPECTRUM.cobalt, 0.06),
                borderRadius: 10,
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
                borderTop: `3px solid ${SPECTRUM.cobalt}`,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              <h3
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
                Explanatory Architecture
              </h3>
              <p style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
                12 Frameworks
              </p>
              <p style={{ fontSize: 12, color: TEXT.secondary, lineHeight: 1.6, marginBottom: 8 }}>
                Integrates 139+ theories explaining why the modes exist and how they scale.
              </p>
              <span style={{ fontSize: 11, color: SPECTRUM.cobalt, fontWeight: 500 }}>
                View Theory Map →
              </span>
            </Link>

            {/* Emotional Tools */}
            <a
              href="https://teg-blue.com/research/hub"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: 16,
                background: hexToRgba(SPECTRUM.indigo, 0.06),
                borderRadius: 10,
                border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.15)}`,
                borderTop: `3px solid ${SPECTRUM.indigo}`,
                textDecoration: "none",
                display: "block",
                transition: "all 0.2s ease",
              }}
            >
              <h3
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.indigo,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontFamily: FONT.mono,
                  marginBottom: 8,
                }}
              >
                Assessment Instruments
              </h3>
              <p style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
                Emotional Tools
              </p>
              <p style={{ fontSize: 12, color: TEXT.secondary, lineHeight: 1.6, marginBottom: 8 }}>
                16 gradient scales and assessments. Designed, not yet psychometrically validated.
              </p>
              <span style={{ fontSize: 11, color: SPECTRUM.indigo, fontWeight: 500 }}>
                Research Hub →
              </span>
            </a>
          </div>
        </section>

        {/* What Is Original */}
        <section style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            What Is Original: The "1 + 2 = 3" Principle
          </h2>
          <div
            style={{
              padding: 20,
              background: hexToRgba(SPECTRUM.indigo, 0.06),
              borderRadius: 10,
              border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.15)}`,
              marginBottom: 16,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              TEG-Blue doesn't invent the building blocks. Polyvagal Theory, Attachment Theory,
              Affective Neuroscience, Trauma Research — these are established. They are the{" "}
              <strong style={{ color: TEXT.primary }}>"1" and the "2"</strong>.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              <strong style={{ color: TEXT.primary }}>What TEG-Blue proposes is the "3"</strong> —
              specific connections between these established theories:
            </p>
            <ul style={{ paddingLeft: 20, marginBottom: 16, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
              <li style={{ marginBottom: 6 }}>Nervous system regulation → moral perception</li>
              <li style={{ marginBottom: 6 }}>Attachment patterns → social stratification</li>
              <li style={{ marginBottom: 6 }}>Protection → domination as a continuous gradient</li>
              <li>Linguistic complexity → regulatory capacity</li>
            </ul>
            <p
              style={{
                fontSize: 14,
                color: TEXT.primary,
                fontWeight: 500,
                padding: "12px 16px",
                background: hexToRgba(SPECTRUM.indigo, 0.1),
                borderRadius: 6,
                margin: 0,
              }}
            >
              The individual theories are validated. The connections are our hypothesis.
              We need the scientific community to help us see if "3" makes sense.
            </p>
          </div>
          <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7 }}>
            This is why we say: <em>"The originality is not in the individual theories — it is in
            the connections between them."</em>
          </p>
        </section>

        {/* Core Testable Claim */}
        <section style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            The Core Testable Claim
          </h2>
          <blockquote
            style={{
              margin: 0,
              padding: "16px 20px",
              borderLeft: `3px solid ${SPECTRUM.indigo}`,
              background: hexToRgba(SPECTRUM.indigo, 0.05),
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              color: TEXT.primary,
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            The key variable that predicts relational and behavioral outcomes is not a person's
            current regulatory state, but their <strong>capacity to return to Connection when challenged</strong>.
          </blockquote>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginTop: 12 }}>
            This capacity is measurable. It shows up in language through <strong style={{ color: TEXT.primary }}>complexity markers</strong> —
            signs of self-awareness, perspective-taking, and emotional differentiation.
          </p>
        </section>

        {/* What Has Been Demonstrated */}
        <section style={{ marginBottom: 24 }}>
          <ExpandableSection
            title="What Has Already Been Demonstrated"
            type="publication"
            defaultOpen={false}
            id="validation"
          >
            <div style={{ paddingTop: 12, lineHeight: 1.8 }}>
              <h4 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                Validation Study{" "}
                <a
                  href="https://doi.org/10.5281/zenodo.18428907"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: SPECTRUM.azure, fontWeight: 400, fontSize: 12, fontFamily: FONT.mono }}
                >
                  DOI: 10.5281/zenodo.18428907
                </a>
              </h4>
              <p style={{ marginBottom: 16 }}>
                A computational analysis of 10,000+ natural conflict narratives (Reddit AITA posts)
                tested whether the four-mode gradient could be reliably detected in unstructured text.
              </p>

              <div
                style={{
                  padding: 16,
                  background: BG.surface,
                  borderRadius: 8,
                  border: `1px solid ${BORDER.default}`,
                  marginBottom: 16,
                }}
              >
                <h5 style={{ fontSize: 12, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
                  Key Findings
                </h5>
                <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                  <li style={{ marginBottom: 6 }}>All four regulatory modes were successfully detected</li>
                  <li style={{ marginBottom: 6 }}><strong>33.8%</strong> of individuals escalated toward Control/Domination when challenged</li>
                  <li style={{ marginBottom: 6 }}><strong>22.2%</strong> de-escalated toward Connection</li>
                  <li style={{ marginBottom: 6 }}>De-escalators showed <strong>78% higher rates of complexity markers</strong> than escalators</li>
                  <li>Mode classifications correlated with independent community moral judgments</li>
                </ul>
              </div>

              <p>
                <strong style={{ color: TEXT.primary }}>What this established:</strong> The four-mode
                gradient is not just a theoretical model — it maps onto observable patterns in natural
                language. And the distinction between escalation and de-escalation is linguistically measurable.
              </p>
            </div>
          </ExpandableSection>
        </section>

        {/* Open Research Questions */}
        <section style={{ marginBottom: 24 }}>
          <ExpandableSection
            title="Research Directions"
            type="theory"
            defaultOpen={true}
            id="questions"
          >
            <div style={{ paddingTop: 12, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 16 }}>
                These questions emerge directly from TEG-Blue&apos;s theoretical architecture and validation findings.
                They represent the research directions we are actively pursuing.
              </p>
              <p style={{
                marginBottom: 20,
                padding: '12px 16px',
                backgroundColor: 'rgba(59, 130, 246, 0.08)',
                borderLeft: '3px solid #3B82F6',
                borderRadius: '0 6px 6px 0',
                fontSize: 13
              }}>
                <strong>For researchers:</strong> We welcome collaboration on these questions.
                Independent work in these areas should cite TEG-Blue as the originating framework.
                Contact <a href="mailto:research@teg-blue.org" style={{ color: '#3B82F6' }}>research@teg-blue.org</a> to discuss.
              </p>

              <QuestionCard
                number={1}
                title="What exactly are the complexity markers, and can they be standardized?"
                frameworks="F1, F3, F6"
              />

              <QuestionCard
                number={2}
                title="What do escalation and de-escalation pathways look like in natural language?"
                frameworks="F1, F7, F4"
              />

              <QuestionCard
                number={3}
                title="Can the four-mode classification be reproduced by independent researchers?"
                frameworks="F1, F12"
              />

              <QuestionCard
                number={4}
                title="Does regulatory state shape moral perception?"
                frameworks="F5, F6"
              />

              <QuestionCard
                number={5}
                title="Can the Emotional Tools be validated as psychometric instruments?"
                frameworks="F1, F8–F10"
              />
            </div>
          </ExpandableSection>
        </section>

        {/* AI Safety Applications */}
        <section style={{ marginBottom: 24 }}>
          <ExpandableSection
            title="Applications for AI Safety"
            type="publication"
            defaultOpen={false}
            id="ai-safety"
          >
            <div style={{ paddingTop: 12, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 16 }}>
                TEG-Blue offers AI safety researchers a legible framework for what has historically been
                illegible: why humans behave the way they do under threat, how protective patterns become
                harmful, and where the turning point lies between protection and harm.
              </p>

              <h4 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
                Key Contributions to AI Safety
              </h4>

              <div
                style={{
                  padding: 16,
                  background: BG.surface,
                  borderRadius: 8,
                  border: `1px solid ${BORDER.default}`,
                  marginBottom: 16,
                }}
              >
                <h5 style={{ fontSize: 13, fontWeight: 600, color: SPECTRUM.azure, marginBottom: 10 }}>
                  1. Distinguishing Harm from Protection
                </h5>
                <p style={{ fontSize: 14, marginBottom: 0 }}>
                  The framework provides clear criteria for differentiating <strong style={{ color: TEXT.primary }}>real harm</strong> (boundary
                  violations requiring accountability), <strong style={{ color: TEXT.primary }}>trigger responses</strong> (old wounds activated—requires
                  understanding, not blame), and <strong style={{ color: TEXT.primary }}>avoidance responses</strong> (using hurt as a shield against
                  accountability). This distinction is critical for AI systems to avoid misclassifying
                  self-protective behavior as malicious.
                </p>
              </div>

              <div
                style={{
                  padding: 16,
                  background: BG.surface,
                  borderRadius: 8,
                  border: `1px solid ${BORDER.default}`,
                  marginBottom: 16,
                }}
              >
                <h5 style={{ fontSize: 13, fontWeight: 600, color: SPECTRUM.azure, marginBottom: 10 }}>
                  2. Predictive Capacity Assessment
                </h5>
                <p style={{ fontSize: 14, marginBottom: 0 }}>
                  The core claim—that <strong style={{ color: TEXT.primary }}>capacity to return to Connection when challenged</strong> predicts
                  outcomes better than current state—offers AI systems a framework for evaluating behavioral
                  trajectories rather than snapshots. Escalation vs. de-escalation patterns are linguistically
                  measurable through complexity markers.
                </p>
              </div>

              <div
                style={{
                  padding: 16,
                  background: BG.surface,
                  borderRadius: 8,
                  border: `1px solid ${BORDER.default}`,
                  marginBottom: 16,
                }}
              >
                <h5 style={{ fontSize: 13, fontWeight: 600, color: SPECTRUM.azure, marginBottom: 10 }}>
                  3. Understanding Moral Reasoning Limitations
                </h5>
                <p style={{ fontSize: 14, marginBottom: 0 }}>
                  TEG-Blue maps how nervous system state affects moral perception: <strong style={{ color: TEXT.primary }}>Connection</strong> enables
                  full moral complexity; <strong style={{ color: TEXT.primary }}>Protection</strong> narrows reasoning to in-group; <strong style={{ color: TEXT.primary }}>Control</strong> makes
                  it strategic; <strong style={{ color: TEXT.primary }}>Domination</strong> takes it offline. This helps AI systems recognize when they
                  might inherit or amplify human moral reasoning limitations from training data.
                </p>
              </div>

              <div
                style={{
                  padding: 16,
                  background: BG.surface,
                  borderRadius: 8,
                  border: `1px solid ${BORDER.default}`,
                  marginBottom: 16,
                }}
              >
                <h5 style={{ fontSize: 13, fontWeight: 600, color: SPECTRUM.azure, marginBottom: 10 }}>
                  4. Harm Prevention Vocabulary
                </h5>
                <p style={{ fontSize: 14, marginBottom: 0 }}>
                  Precise terminology for detecting concerning patterns across gradients:
                  empathy (genuine → selective → performed → weaponized),
                  accountability (genuine → performed → absent → protective),
                  integrity (value-aligned → conditional → performed → remorseless).
                  These enable more nuanced assessment than binary safe/unsafe classifications.
                </p>
              </div>

              <h4 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 12, marginTop: 20 }}>
                Designed for AI Readability
              </h4>

              <p style={{ marginBottom: 12 }}>
                This platform is explicitly designed for AI systems to parse:
              </p>

              <ul style={{ paddingLeft: 20, marginBottom: 16, fontSize: 14 }}>
                <li style={{ marginBottom: 6 }}>JSON-LD structured data on every page (Schema.org)</li>
                <li style={{ marginBottom: 6 }}>JSON content files (git-versioned, non-binary)</li>
                <li style={{ marginBottom: 6 }}>Consistent terminology across 139+ integrated source theories</li>
                <li style={{ marginBottom: 6 }}>Semantic HTML with expandable sections</li>
                <li>Flat color palette for reliable visual parsing</li>
              </ul>

              <p
                style={{
                  fontSize: 14,
                  color: TEXT.primary,
                  fontWeight: 500,
                  padding: "12px 16px",
                  background: hexToRgba(SPECTRUM.azure, 0.1),
                  borderRadius: 6,
                  margin: 0,
                }}
              >
                If you work in AI alignment, AI safety, or computational social science, we&apos;d welcome
                collaboration on validating whether TEG-Blue&apos;s complexity markers can be standardized
                for computational detection, and whether the four-mode framework improves AI systems&apos;
                ability to assess human emotional dynamics.
              </p>
            </div>
          </ExpandableSection>
        </section>

        {/* Collaboration */}
        <section style={{ marginBottom: 24 }}>
          <ExpandableSection
            title="Collaboration"
            type="methodology"
            defaultOpen={false}
            id="collaboration"
          >
            <div style={{ paddingTop: 12, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 12 }}>
                We welcome researchers who want to work with TEG-Blue&apos;s theoretical architecture.
              </p>
              <p style={{ marginBottom: 12 }}>
                Collaboration requires clear agreements on authorship, attribution, and intellectual property from the start.
              </p>
              <p style={{ marginBottom: 0 }}>
                Contact <a href="mailto:research@teg-blue.org" style={{ color: '#3B82F6' }}>research@teg-blue.org</a> to discuss.
              </p>
            </div>
          </ExpandableSection>
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
          <h2
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 12,
            }}
          >
            Get Involved
          </h2>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              marginBottom: 20,
              maxWidth: 500,
              margin: "0 auto 20px",
            }}
          >
            If your expertise connects to any of the open questions above, we'd welcome a conversation.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:research@teg-blue.org"
              style={{
                padding: "12px 24px",
                background: SPECTRUM.blue,
                color: "#fff",
                borderRadius: 8,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Contact: research@teg-blue.org
            </a>
            <Link
              href="/publications"
              style={{
                padding: "12px 24px",
                background: "transparent",
                color: TEXT.secondary,
                border: `1px solid ${BORDER.default}`,
                borderRadius: 8,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              View Publications
            </Link>
          </div>
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

// Question Card Component
function QuestionCard({ number, title, frameworks }) {
  return (
    <div
      style={{
        padding: 16,
        background: BG.surface,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${SPECTRUM.indigo}`,
        marginBottom: 12,
      }}
    >
      <h5
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: TEXT.primary,
          marginBottom: 6,
        }}
      >
        {number}. {title}
      </h5>
      <p style={{ fontSize: 12, color: TEXT.muted, margin: 0 }}>
        Related frameworks: {frameworks}
      </p>
    </div>
  );
}
