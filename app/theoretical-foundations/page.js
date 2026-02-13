import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

export const metadata = {
  title: "Frameworks | TEG-Blue Research",
  description: "The 12 explanatory frameworks behind TEG-Blue. Purpose, theoretical foundations, proposed claims, and testable directions for each framework.",
  alternates: {
    canonical: "https://teg-blue.org/theoretical-foundations",
  },
};

// The 12 Frameworks with structured content
const FRAMEWORKS = [
  {
    id: "F1",
    title: "Emotions as a Biological Information System",
    arc: "Formation",
    purpose: "Explain emotions as regulatory signals, not personality traits.",
    buildsOn: "Affective neuroscience, autonomic regulation research, emotion construction and appraisal lines, stress physiology, regulation and coping literature.",
    researchers: ["Jaak Panksepp", "Antonio Damasio", "Lisa Feldman Barrett", "Joseph LeDoux", "Stephen Porges", "Deb Dana", "James Gross", "Daniel Siegel", "Barbara Fredrickson", "Paul Ekman", "Bessel van der Kolk", "Peter Levine", "Pat Ogden", "Judith Herman", "John Bowlby", "Mary Ainsworth", "Allan Schore"],
    claims: [
      "Emotional signals track needs, safety, and constraint",
      "State shifts change what information is available to cognition",
      "Language and behavior carry state signatures",
    ],
    testable: "Annotation reliability of state markers in text. Convergent validity with established regulation measures. Generalization across contexts (conflict, therapy, workplace).",
  },
  {
    id: "F2",
    title: "Identity as an Adaptive Cognitive System",
    arc: "Formation",
    purpose: "Describe identity as an adaptation shaped by safety conditions, not a stable essence.",
    buildsOn: "Attachment research, developmental psychology, self-models, schema theory, social identity, trauma adaptation.",
    researchers: ["John Bowlby", "Mary Ainsworth", "Mary Main", "Donald Winnicott", "Heinz Kohut", "Otto Kernberg", "Daniel Stern", "Daniel Siegel", "Allan Schore", "Edward Tronick", "Richard Schwartz", "Janina Fisher"],
    claims: [
      "Identity forms around what kept connection possible",
      "Under threat, identity shifts toward protection logic",
      '"Self-beliefs" often function as stability strategies',
    ],
    testable: "Predictive links between attachment insecurity, stress load, and identity rigidity. Language indicators of self-worth rules and threat sensitivity. Longitudinal shifts with intervention and repair.",
  },
  {
    id: "F3",
    title: "Our Three Inner Layers",
    arc: "Formation",
    purpose: "Model the inner system as layered, with different layers activating under different states.",
    buildsOn: "Parts-oriented clinical frameworks, state-dependent learning, trauma and dissociation research, developmental timing models.",
    researchers: ["Sigmund Freud", "Donald Winnicott", "Carl Rogers", "Carl Jung", "Leon Festinger", "Erving Goffman", "Pierre Bourdieu", "Richard Schwartz", "Janina Fisher"],
    claims: [
      'Humans can show different "selves" across states without pathology',
      "Some contradictions are layer activation, not deceit",
      "Repair requires integration, not suppression",
    ],
    testable: "Within-person state shifts and language feature shifts. Inter-rater reliability on \"layer signals\" in narrative text. Clinical usefulness as a psychoeducation model.",
  },
  {
    id: "F4",
    title: "The Invisible Models of Our Society",
    arc: "Scaling",
    purpose: "Explain how unspoken social rules shape emotional survival strategies.",
    buildsOn: "Sociology of norms, cultural psychology, status dynamics, moral foundations and norm enforcement research.",
    researchers: ["Pierre Bourdieu", "Erving Goffman", "John Bowlby", "Jeffrey Young", "Richard Schwartz", "Stephen Porges", "Judith Herman", "Pete Walker"],
    claims: [
      "People adapt not only to caregivers, but to norm environments",
      "Norm pressure can reward protection and control patterns",
      '"Social goodness" can be performed while harm persists',
    ],
    testable: "Cross-cultural comparison of worth rules and conflict scripts. Organizational communication analysis under stress and hierarchy. Link between norm climates and escalation patterns.",
  },
  {
    id: "F5",
    title: "The Filter of Worth",
    arc: "Scaling",
    purpose: "Describe how \"worth rules\" determine what feels safe, lovable, or allowed.",
    buildsOn: "Shame research, self-esteem literature, social evaluation threat, internalized stigma, conditional regard.",
    researchers: ["Pierre Bourdieu", "Basil Bernstein", "Erving Goffman", "Annette Lareau", "Joseph Berger", "Jim Sidanius", "Felicia Pratto", "John Jost", "Mahzarin Banaji", "Kimberlé Crenshaw", "Patricia Hill Collins", "Amartya Sen", "Stephen Porges", "Bruce McEwen", "Robert Sapolsky", "Paul Gilbert", "Richard Wilkinson", "Kate Pickett"],
    claims: [
      "Worth rules drive protection, control, and domination behaviors",
      "Many conflicts are worth-threat conflicts in disguise",
      "Repair often fails when worth rules stay untouched",
    ],
    testable: "Measurement design for worth-threat sensitivity. Predicting defensiveness patterns from worth-rule profiles. Intervention studies targeting worth-rule flexibility.",
  },
  {
    id: "F6",
    title: "The Emotional Architecture of Bias",
    arc: "Scaling",
    purpose: "Explain bias as a regulatory pattern, not only an ideology.",
    buildsOn: "Social cognition, threat perception research, intergroup emotion, motivated reasoning, dehumanization literature.",
    researchers: ["Daniel Kahneman", "Amos Tversky", "Leon Festinger", "Ziva Kunda", "Henri Tajfel", "John Turner", "Jonathan Haidt", "Sheldon Solomon", "Karl Friston", "Anthony Greenwald", "Mahzarin Banaji", "Brian Nosek", "Patricia Devine", "Aaron Beck", "Jeffrey Young"],
    claims: [
      "Bias intensifies under threat states",
      "Some bias is maintained by safety narratives, not facts",
      "Domination logic uses bias as a stabilizer",
    ],
    testable: "State manipulation studies and bias expression shifts. Linguistic markers of dehumanization across modes. Fairness evaluation for any automated classification use.",
  },
  {
    id: "F7",
    title: "From Emotional Defense to Domination",
    arc: "Turning Point",
    purpose: "Map how protection patterns can escalate into coercion and oppression.",
    buildsOn: "Power and dominance research, coercive control, aggression and entitlement models, moral disengagement, authoritarian psychology.",
    researchers: ["Dacher Keltner", "Adam Galinsky", "Paul Frick", "Essi Viding", "Terrie Moffitt", "Adrian Raine", "Mary Main", "Karlen Lyons-Ruth", "Evan Stark", "Michael Johnson", "Lundy Bancroft", "Albert Bandura", "Nick Haslam", "Helen Block Lewis", "James Gilligan", "Ervin Staub", "Roy Baumeister", "Philip Zimbardo"],
    claims: [
      "Domination is often threat regulation plus power access",
      "Control strategies are transitional, domination is stabilizing",
      "Accountability is resisted when it triggers collapse or worth threat",
    ],
    testable: "Behavioral outcome prediction under stress and power asymmetry. Coding domination markers in language with reliability. Intervention design focusing on accountability capacity.",
  },
  {
    id: "F8",
    title: "Self-Awareness Under Stress",
    arc: "Healing",
    purpose: "Explain the skills and conditions that reopen perception during dysregulation.",
    buildsOn: "Metacognition, mindfulness research, emotion differentiation, reflective functioning, mentalization.",
    researchers: ["Donald Winnicott", "Erik Erikson", "James Marcia", "John Bowlby", "Patricia Crittenden", "Stephen Porges", "Peter Levine", "Daniel Siegel", "Antonio Damasio", "Bessel van der Kolk", "Janina Fisher", "Kristin Neff", "Tara Brach", "Richard Schwartz", "Franz Alexander", "Diana Fosha", "Leslie Greenberg", "Sue Johnson"],
    claims: [
      "Self-awareness is state-dependent",
      'Higher self-awareness predicts better "return capacity"',
      "Repair requires the ability to tolerate discomfort without control moves",
    ],
    testable: "Links between emotional granularity and conflict outcomes. Markers of reflective functioning in language under pressure. Training effects on return capacity.",
  },
  {
    id: "F9",
    title: "Our True Self",
    arc: "Healing",
    purpose: "Describe reconnection with the original self signals that existed before adaptation.",
    buildsOn: "Developmental needs models, authenticity research, trauma recovery, compassion-focused and attachment repair approaches.",
    researchers: ["Judy Singer", "Nick Walker", "Steve Silberman", "Stephen Porges", "Henry & Kamila Markram", "Karl Friston", "Mike Oliver", "Tom Shakespeare", "Gabor Maté", "Devon Price", "Thomas Armstrong"],
    claims: [
      'The "true self" is not a story, it is a signal layer',
      "Many symptoms are protective adaptations that outlived their context",
      "Healing involves recovering signal trust and relational safety",
    ],
    testable: "Measures of authenticity, safety, and symptom reduction over time. Narrative markers of self-trust and self-protection balance. Comparative outcomes across therapeutic modalities.",
  },
  {
    id: "F10",
    title: "Repair and Relational Return",
    arc: "Healing",
    purpose: "Explain what makes repair succeed or fail after rupture.",
    buildsOn: "Rupture and repair research, apology and accountability work, couple and family systems research, conflict resolution.",
    researchers: ["Murray Bowen", "Salvador Minuchin", "Ivan Boszormenyi-Nagy", "Felitti & Anda", "Judith Herman", "Patricia Crittenden", "Erik Erikson", "Daniel Siegel", "Michael White", "David Epston", "Rachel Yehuda"],
    claims: [
      "The strongest predictor is not the absence of rupture — it is capacity to return to connection",
      "Accountability is a regulated-state behavior, not a trait",
      "Repair fails when protection and control stay rewarded",
    ],
    testable: "Coding repair attempts and outcomes in transcripts. Predictive models of conflict outcome from return markers. Replication across cultures and relationship types.",
  },
  {
    id: "F11",
    title: "Human Paradoxes",
    arc: "Integration",
    purpose: "Explain why humans look contradictory until state logic is included.",
    buildsOn: "State-dependent cognition, dual-process work, trauma adaptation, motivated reasoning, self-justification research.",
    researchers: [],
    claims: [
      'People can be caring in Connection and coercive in Control without "changing personality"',
      "Some lying is conscious, some is state-protective distortion",
      "Moral reasoning shifts with threat and worth rules",
    ],
    testable: "Within-person contradiction mapping across contexts. Marker sets for moral reasoning shifts in language. Links between shame activation and distortion patterns.",
  },
  {
    id: "F12",
    title: "The Four-Mode Gradient as Integrative Lens",
    arc: "Integration",
    purpose: "Make the full arc readable as one system: inner regulation → identity adaptation → social escalation → return path.",
    buildsOn: "All foundations above, plus systems thinking and modeling traditions.",
    researchers: ["Daniel Kahneman", "Keith Stanovich", "Jonathan Evans", "Stephen Porges", "Antonio Damasio", "Joseph LeDoux", "Lisa Feldman Barrett", "John Bowlby", "Mary Main", "Bessel van der Kolk", "James Gross", "Marsha Linehan", "Stanley Milgram", "Philip Zimbardo"],
    claims: [
      "The four modes describe a state-gradient, not personality types",
      "Control and domination emerge from regulatory collapse plus learned power strategies",
      "The model becomes useful when it generates clear, testable predictions",
    ],
    testable: "Benchmarking against existing emotion and regulation instruments. Robustness and fairness evaluations across demographics and cultures. Safe schema design for AI use, with misuse prevention.",
  },
];

// Arc colors
const arcColors = {
  "Formation": SPECTRUM.azure,
  "Scaling": SPECTRUM.blue,
  "Turning Point": SPECTRUM.cobalt,
  "Healing": SPECTRUM.indigo,
  "Integration": SPECTRUM.slate,
};

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
        <header style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: TEXT.primary,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Frameworks
            </h1>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: SPECTRUM.indigo,
                padding: "4px 10px",
                background: hexToRgba(SPECTRUM.indigo, 0.1),
                borderRadius: 4,
              }}
            >
              Status: Proposed synthesis, built on established research
            </span>
          </div>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            The explanatory hub behind TEG-Blue.
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 12,
            }}
          >
            If the{" "}
            <Link href="/four-mode-gradient" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              Four-Mode Gradient
            </Link>{" "}
            is the measurement layer, then these 12 frameworks are the explanatory layer that clarifies:
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}><strong>Why</strong> patterns emerge</li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}><strong>How</strong> they escalate</li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}><strong>Why</strong> they look paradoxical</li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}><strong>How</strong> repair becomes possible again</li>
          </ul>
          <p style={{ fontSize: 13, color: TEXT.muted }}>
            Full system view:{" "}
            <Link href="/foundations" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              System Overview →
            </Link>
          </p>
        </header>

        {/* How to Read This Page */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            How to read this page
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
            Each framework uses the same structure so it is easy to scan:
          </p>
          <ul style={{ paddingLeft: 24 }}>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}><strong>Purpose</strong> — what it explains</li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}><strong>Builds on</strong> — established foundations</li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}><strong>Proposed claims</strong> — what TEG-Blue adds</li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}><strong>Testable directions</strong> — what can be studied</li>
          </ul>
        </section>

        {/* Framework Arc Table */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            The framework arc in one view
          </h2>
          <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}><strong>F1–F3:</strong> Internal regulation, identity adaptation, inner organization</li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}><strong>F4–F7:</strong> How individual protection scales into social systems and harm</li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}><strong>F8–F10:</strong> The return path — self-awareness, repair, and re-integration</li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}><strong>F11:</strong> Why humans look contradictory until you see the full state logic</li>
            <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}><strong>F12:</strong> The integrative lens connecting inner biology to social outcomes</li>
          </ul>
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
                  <th style={{ ...tableHeaderStyle, width: 80 }}>Framework</th>
                  <th style={{ ...tableHeaderStyle }}>What it explains</th>
                  <th style={{ ...tableHeaderStyle, width: 120 }}>Arc</th>
                </tr>
              </thead>
              <tbody>
                {FRAMEWORKS.map((fw, i) => (
                  <tr key={fw.id} style={{ borderTop: i > 0 ? `1px solid ${BORDER.default}` : "none" }}>
                    <td style={{ padding: "10px 16px", fontSize: 13, fontWeight: 600, color: TEXT.primary, fontFamily: FONT.mono }}>{fw.id}</td>
                    <td style={{ padding: "10px 16px", fontSize: 13, color: TEXT.secondary }}>{fw.title}</td>
                    <td style={{ padding: "10px 16px" }}>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          fontFamily: FONT.mono,
                          padding: "3px 8px",
                          borderRadius: 4,
                          background: hexToRgba(arcColors[fw.arc], 0.15),
                          color: arcColors[fw.arc],
                        }}
                      >
                        {fw.arc}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Individual Frameworks */}
        <section style={{ marginBottom: 32 }}>
          {FRAMEWORKS.map((fw) => (
            <FrameworkCard key={fw.id} framework={fw} />
          ))}
        </section>

        {/* Help Us Validate */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Help us validate this mapping
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            We are explicitly inviting critique.
          </p>
          <div
            style={{
              padding: 20,
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              marginBottom: 20,
            }}
          >
            <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
              Ways to contribute:
            </h3>
            <ul style={{ paddingLeft: 20 }}>
              <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 4 }}>Identify errors in attribution or conceptual links</li>
              <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 4 }}>Suggest missing foundational theories that should be represented</li>
              <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 4 }}>Propose falsifiable predictions for any framework</li>
              <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 4 }}>Recommend measures that could test specific claims</li>
              <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>Run or advise on replication designs</li>
            </ul>
          </div>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
            <strong>How credit works:</strong> Contributors are acknowledged on the site. Significant contributions can receive per-section attribution. Research outputs follow clear authorship norms, agreed in advance.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/collaborate"
              style={{
                padding: "10px 20px",
                background: SPECTRUM.blue,
                color: "#fff",
                borderRadius: 6,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Collaborate →
            </Link>
            <Link
              href="/methodology"
              style={{
                padding: "10px 20px",
                background: "transparent",
                color: TEXT.secondary,
                border: `1px solid ${BORDER.default}`,
                borderRadius: 6,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Methodology →
            </Link>
          </div>
          <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 16 }}>
            Contact:{" "}
            <a href="mailto:research@teg-blue.org" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              research@teg-blue.org
            </a>
          </p>
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

// ─── HELPER COMPONENTS ─────────────────────────────────────────

const tableHeaderStyle = {
  padding: "10px 16px",
  fontSize: 11,
  fontWeight: 600,
  color: TEXT.muted,
  textAlign: "left",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  fontFamily: FONT.mono,
};

function FrameworkCard({ framework }) {
  const arcColor = arcColors[framework.arc];

  return (
    <div
      style={{
        marginBottom: 24,
        padding: 24,
        background: BG.card,
        borderRadius: 10,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${arcColor}`,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
        <span
          style={{
            fontSize: 14,
            fontWeight: 700,
            fontFamily: FONT.mono,
            color: arcColor,
          }}
        >
          {framework.id}
        </span>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, margin: 0 }}>
          {framework.title}
        </h3>
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            fontFamily: FONT.mono,
            padding: "3px 8px",
            borderRadius: 4,
            background: hexToRgba(arcColor, 0.15),
            color: arcColor,
            marginLeft: "auto",
          }}
        >
          {framework.arc}
        </span>
      </div>

      {/* Purpose */}
      <div style={{ marginBottom: 16 }}>
        <h4 style={{ fontSize: 12, fontWeight: 600, color: TEXT.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: FONT.mono }}>
          Purpose
        </h4>
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
          {framework.purpose}
        </p>
      </div>

      {/* Builds On */}
      <div style={{ marginBottom: 16 }}>
        <h4 style={{ fontSize: 12, fontWeight: 600, color: TEXT.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: FONT.mono }}>
          Builds on
        </h4>
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
          {framework.buildsOn}
        </p>
      </div>

      {/* Key Researchers */}
      {framework.researchers.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <h4 style={{ fontSize: 12, fontWeight: 600, color: TEXT.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: FONT.mono }}>
            Key researchers
          </h4>
          <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7, margin: 0, fontFamily: FONT.mono }}>
            {framework.researchers.join(", ")}
          </p>
        </div>
      )}

      {/* Proposed Claims */}
      <div style={{ marginBottom: 16 }}>
        <h4 style={{ fontSize: 12, fontWeight: 600, color: TEXT.muted, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: FONT.mono }}>
          Proposed claims
        </h4>
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          {framework.claims.map((claim, i) => (
            <li key={i} style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 4 }}>
              {claim}
            </li>
          ))}
        </ul>
      </div>

      {/* Testable Directions */}
      <div>
        <h4 style={{ fontSize: 12, fontWeight: 600, color: TEXT.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: FONT.mono }}>
          Testable directions
        </h4>
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
          {framework.testable}
        </p>
      </div>
    </div>
  );
}
