import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ExpandableSection } from "@/src/components";

export const metadata = {
  title: "Research Entry Point",
  description: "Entry point for researchers interested in TEG-Blue. Explains the measurement system (Four-Mode Gradient), explanatory architecture (12 frameworks), validation findings, and open research questions.",
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
            From Measurement System to Explanatory Architecture. This document describes
            what TEG-Blue has found, what questions remain open, and where different areas
            of expertise connect to the work.
          </p>
        </header>

        {/* How TEG-Blue Is Organized */}
        <section style={{ marginBottom: 24 }}>
          <ExpandableSection
            title="How TEG-Blue Is Organized"
            type="methodology"
            defaultOpen={true}
            id="organization"
          >
            <div style={{ paddingTop: 12, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 16 }}>
                TEG-Blue has two layers. The distinction between them is central to understanding
                the architecture and identifying where specific research contributions connect.
              </p>

              <h4 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                The Measurement System: The Four-Mode Gradient
              </h4>
              <p style={{ marginBottom: 12 }}>
                The Four-Mode Gradient is the measurable backbone of TEG-Blue. It proposes that
                emotional regulation operates on a gradient with four observable positions:
              </p>
              <p
                style={{
                  padding: "12px 16px",
                  background: hexToRgba(SPECTRUM.blue, 0.08),
                  borderRadius: 8,
                  fontWeight: 600,
                  color: TEXT.primary,
                  marginBottom: 16,
                  textAlign: "center",
                }}
              >
                Connection → Protection → Control → Domination
              </p>
              <p style={{ marginBottom: 16 }}>
                These are not personality types or diagnostic categories. They are{" "}
                <strong style={{ color: TEXT.primary }}>nervous system states</strong> — regulatory
                positions that shift in response to perceived threat, shaped by attachment history,
                social context, and current capacity. They can be detected in natural language.
                They have been empirically validated. They are where research begins.
              </p>

              <h4 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                The Explanatory Architecture: 12 Frameworks
              </h4>
              <p style={{ marginBottom: 16 }}>
                Behind the gradient sit 12 interconnected frameworks that explain <em>why</em> these
                four modes exist, <em>how</em> individual regulation patterns scale into social
                structures, <em>where</em> protection tips into domination, and <em>what</em> makes
                change possible. These frameworks integrate 139+ established theories across
                neuroscience, psychology, sociology, and trauma studies.
              </p>

              <h4 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                The Core Testable Claim
              </h4>
              <blockquote
                style={{
                  margin: 0,
                  padding: "16px 20px",
                  borderLeft: `3px solid ${SPECTRUM.indigo}`,
                  background: hexToRgba(SPECTRUM.indigo, 0.05),
                  borderRadius: "0 8px 8px 0",
                  fontStyle: "italic",
                  color: TEXT.primary,
                }}
              >
                The key variable that predicts relational and behavioral outcomes is not a person's
                current regulatory state, but their <strong>capacity to return to Connection when challenged</strong>.
              </blockquote>
              <p style={{ marginTop: 12 }}>
                This capacity is measurable. It shows up in language. And it appears to be predicted
                by specific linguistic markers we call <strong style={{ color: TEXT.primary }}>complexity markers</strong> —
                signs of self-awareness, perspective-taking, and emotional differentiation.
              </p>
            </div>
          </ExpandableSection>
        </section>

        {/* What Is Original */}
        <section style={{ marginBottom: 24 }}>
          <ExpandableSection
            title="What Is Original in TEG-Blue"
            type="publication"
            defaultOpen={false}
            id="originality"
          >
            <div style={{ paddingTop: 12, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 16 }}>
                TEG-Blue is built on established science. Every source theory is credited, and the{" "}
                <Link href="/theoretical-foundations" style={{ color: SPECTRUM.azure }}>
                  theoretical foundations page
                </Link>{" "}
                names 135+ researchers whose work informs the architecture. The originality is not in
                the individual theories. It is in how they are connected, and in what those connections reveal.
              </p>

              <h4 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                What TEG-Blue uses (established, credited)
              </h4>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                <li><strong>Polyvagal Theory</strong> (Porges) — nervous system states as regulatory responses</li>
                <li><strong>Attachment Theory</strong> (Bowlby, Ainsworth, Main) — early relational patterns as templates</li>
                <li><strong>Moral Disengagement</strong> (Bandura) — cognitive mechanisms that allow harmful behavior</li>
                <li><strong>Social Dominance Theory</strong> (Sidanius, Pratto) — how hierarchies reproduce</li>
                <li><strong>Cognitive Bias Research</strong> (Kahneman, Tversky) — systematic distortions in perception</li>
                <li><strong>Conflict Escalation Models</strong> (Glasl, Gottman) — how relational rupture progresses</li>
              </ul>

              <h4 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                What TEG-Blue connects (the integrative architecture)
              </h4>
              <p style={{ marginBottom: 12 }}>
                These research traditions developed independently, often without reference to each other.
                TEG-Blue proposes specific cross-disciplinary connections:
              </p>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                <li style={{ marginBottom: 8 }}>
                  <strong>Nervous system regulation → moral perception.</strong> Regulatory state
                  systematically shapes which moral judgments a person makes.
                </li>
                <li style={{ marginBottom: 8 }}>
                  <strong>Attachment patterns → social stratification.</strong> The same protective
                  mechanisms that organize individual identity also organize social hierarchies.
                </li>
                <li style={{ marginBottom: 8 }}>
                  <strong>Self-protection → domination as a continuous gradient.</strong> A single
                  continuous trajectory from legitimate self-protection through to domination.
                </li>
                <li style={{ marginBottom: 8 }}>
                  <strong>Linguistic complexity → regulatory capacity.</strong> Specific linguistic
                  markers are measurable indicators of the capacity to return to Connection.
                </li>
              </ul>
              <p>
                No single source theory makes any of these connections. They become visible only when
                the theories are placed in relation to each other.
              </p>
            </div>
          </ExpandableSection>
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
            title="Open Research Questions"
            type="theory"
            defaultOpen={true}
            id="questions"
          >
            <div style={{ paddingTop: 12, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 20 }}>
                The validation study opened more questions than it answered. Below are specific research
                questions that remain open. Each stands as an independent research project.
              </p>

              {/* Question 1 */}
              <QuestionCard
                number={1}
                title="What exactly are the complexity markers, and can they be standardized?"
                gap="Self-awareness is discussed everywhere in psychology but rarely operationalized as a measurable linguistic construct."
                expertise="Computational linguistics, NLP, psycholinguistics, quantitative psychology"
                frameworks="F1 (Emotional Gradient), F3 (Cognitive Coherence), F6 (State-Dependent Perception)"
              />

              {/* Question 2 */}
              <QuestionCard
                number={2}
                title="What do escalation and de-escalation pathways look like in natural language?"
                gap="Escalation models exist in conflict research, but none map the specific linguistic trajectory from protective responses through to controlling or dominating ones."
                expertise="Conflict studies, discourse analysis, social psychology, clinical psychology"
                frameworks="F1 (Emotional Gradient), F7 (Anatomy of Tyranny), F4 (Threat-Based Rule Internalization)"
              />

              {/* Question 3 */}
              <QuestionCard
                number={3}
                title="Can the four-mode classification be reproduced by independent researchers?"
                gap="The validation study demonstrated detection computationally. For the framework to become a research tool, it needs formalized criteria and inter-rater reliability testing."
                expertise="Research methodology, psychometrics, content analysis, behavioral coding"
                frameworks="F1 (Emotional Gradient), F12 (Two Information Systems)"
              />

              {/* Question 4 */}
              <QuestionCard
                number={4}
                title="Does regulatory state shape moral perception?"
                gap="Moral psychology has not examined whether nervous system regulatory state systematically shifts which moral judgments people make."
                expertise="Moral psychology, social cognition, cognitive bias research"
                frameworks="F5 (Threat-Driven Worth Sorting), F6 (State-Dependent Perception)"
              />

              {/* Question 5 */}
              <QuestionCard
                number={5}
                title="Can the Emotional Tools be validated as psychometric instruments?"
                gap="TEG-Blue includes 16 assessment instruments (gradient scales) that are designed but not yet psychometrically validated."
                expertise="Psychometrics, clinical psychology, personality assessment, scale development"
                frameworks="All frameworks; F1 and F8–F10 most directly tested"
              />
            </div>
          </ExpandableSection>
        </section>

        {/* 12 Frameworks Summary */}
        <section style={{ marginBottom: 24 }}>
          <ExpandableSection
            title="How the 12 Frameworks Fit"
            type="theory"
            defaultOpen={false}
            id="frameworks"
          >
            <div style={{ paddingTop: 12, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 16 }}>
                The research questions above all test the <strong>measurement system</strong> — the
                Four-Mode Gradient. The 12 frameworks are the <strong>explanatory architecture</strong>{" "}
                that sits behind it.
              </p>

              <div style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: 13,
                    marginBottom: 16,
                  }}
                >
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
                      <th style={{ textAlign: "left", padding: "8px 12px", color: TEXT.muted, fontWeight: 600 }}>Layer</th>
                      <th style={{ textAlign: "left", padding: "8px 12px", color: TEXT.muted, fontWeight: 600 }}>Frameworks</th>
                      <th style={{ textAlign: "left", padding: "8px 12px", color: TEXT.muted, fontWeight: 600 }}>What They Explain</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
                      <td style={{ padding: "10px 12px", color: SPECTRUM.azure, fontWeight: 500 }}>Formation</td>
                      <td style={{ padding: "10px 12px" }}>F1, F2, F3</td>
                      <td style={{ padding: "10px 12px", color: TEXT.secondary }}>How nervous system states form and how identity organizes around them</td>
                    </tr>
                    <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
                      <td style={{ padding: "10px 12px", color: SPECTRUM.blue, fontWeight: 500 }}>Scaling</td>
                      <td style={{ padding: "10px 12px" }}>F4, F5, F6</td>
                      <td style={{ padding: "10px 12px", color: TEXT.secondary }}>How individual regulation patterns become social structures</td>
                    </tr>
                    <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
                      <td style={{ padding: "10px 12px", color: SPECTRUM.cobalt, fontWeight: 500 }}>Turning Point</td>
                      <td style={{ padding: "10px 12px" }}>F7</td>
                      <td style={{ padding: "10px 12px", color: TEXT.secondary }}>How protection escalates into domination — and where intervention is possible</td>
                    </tr>
                    <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
                      <td style={{ padding: "10px 12px", color: SPECTRUM.indigo, fontWeight: 500 }}>Healing</td>
                      <td style={{ padding: "10px 12px" }}>F8, F9, F10</td>
                      <td style={{ padding: "10px 12px", color: TEXT.secondary }}>How patterns shift, including neurodivergent pathways</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "10px 12px", color: SPECTRUM.slate, fontWeight: 500 }}>Integration</td>
                      <td style={{ padding: "10px 12px" }}>F11, F12</td>
                      <td style={{ padding: "10px 12px", color: TEXT.secondary }}>The complete architecture and its internal logic</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                The full theoretical mapping — including 139+ source theories across 47 domains — is
                documented at{" "}
                <Link href="/theoretical-foundations" style={{ color: SPECTRUM.azure }}>
                  teg-blue.org/theoretical-foundations
                </Link>.
              </p>
            </div>
          </ExpandableSection>
        </section>

        {/* Collaboration */}
        <section style={{ marginBottom: 24 }}>
          <ExpandableSection
            title="Collaboration Structure"
            type="methodology"
            defaultOpen={false}
            id="collaboration"
          >
            <div style={{ paddingTop: 12, lineHeight: 1.8 }}>
              <h4 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                Available Resources
              </h4>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                <li>A validated theoretical framework with published empirical support</li>
                <li>A dataset of 10,000+ analyzed conflict narratives ready for further extraction</li>
                <li>16 designed assessment instruments ready for psychometric validation</li>
                <li>A clinical assessment methodology (Deep Diver Framework) ready for testing</li>
                <li>Full theoretical documentation across 12 frameworks</li>
                <li>Open science infrastructure (Zenodo, OSF, GitHub)</li>
              </ul>

              <h4 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                Expertise Needed
              </h4>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                <li>Domain expertise in computational linguistics, NLP, psycholinguistics, conflict studies, moral psychology, psychometrics, or clinical psychology</li>
                <li>Access to participant samples for instrument validation</li>
                <li>Computational linguistics / NLP expertise for automating complexity marker detection</li>
                <li>Clinical psychology expertise for testing the Deep Diver assessment framework</li>
              </ul>

              <h4 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
                Collaboration Formats
              </h4>
              <p style={{ marginBottom: 12 }}>
                Collaboration ranges from consulting on a specific question to co-authoring a publication.
                All collaborations operate under clear agreements on authorship, attribution, and
                intellectual property from the start.
              </p>
              <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
                <li><strong>Specific question review</strong> — Data and documentation available for any research question</li>
                <li><strong>Co-authorship</strong> — Several publication-ready projects outlined in the Research Development Roadmap</li>
                <li><strong>Instrument validation</strong> — Emotional Tools are designed and documented, ready for testing</li>
                <li><strong>Methodological review</strong> — Critical feedback on methodology and findings welcomed</li>
              </ul>
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
function QuestionCard({ number, title, gap, expertise, frameworks }) {
  return (
    <div
      style={{
        padding: 16,
        background: BG.surface,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${SPECTRUM.indigo}`,
        marginBottom: 16,
      }}
    >
      <h5
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: TEXT.primary,
          marginBottom: 8,
        }}
      >
        Question {number}: {title}
      </h5>
      <p style={{ fontSize: 13, color: TEXT.secondary, marginBottom: 12 }}>
        <strong style={{ color: TEXT.muted }}>The gap:</strong> {gap}
      </p>
      <div style={{ fontSize: 12, color: TEXT.muted }}>
        <p style={{ marginBottom: 4 }}>
          <strong>Relevant expertise:</strong> {expertise}
        </p>
        <p style={{ margin: 0 }}>
          <strong>Related frameworks:</strong> {frameworks}
        </p>
      </div>
    </div>
  );
}
