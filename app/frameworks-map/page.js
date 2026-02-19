"use client";

import { useState } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import InterdependencyMatrix from "@/src/components/InterdependencyMatrix";

// The 12 Frameworks with structured content
const FRAMEWORKS = [
  {
    id: "F1",
    displayName: "Emotions as a Biological Information System",
    title: "The Emotional Gradient",
    subtitle: "Foundation of Emotional Experience",
    arc: "Foundation",
    purpose: "Explain how the nervous system continuously orients between safety and threat, determining perception, capacity, and behavior.",
    summary: "How the nervous system continuously orients between safety and threat, determining perception, capacity, and behavior.",
    buildsOn: "Polyvagal Theory and autonomic neuroscience, affective neuroscience, trauma research, attachment theory, emotion science.",
    claims: [
      "Emotional signals track needs, safety, and constraint — they are data, not dysfunction",
      "State-dependent capacity is neurobiological: what can be perceived, thought, and done varies with regulatory state",
      "The same emotion has two expressions depending on pattern position (safety vs. threat)",
      "Calibration through early experience shapes the neuroceptive template",
    ],
    testable: "Annotation reliability of state markers in text. Convergent validity with established regulation measures. State manipulation studies and capacity shifts. Generalization across contexts.",
  },
  {
    id: "F2",
    displayName: "Identity as an Adaptive Cognitive System",
    title: "The Ego-Persona Construct",
    subtitle: "Attachment-Calibrated Identity Formation",
    arc: "Formation",
    purpose: "Describe how identity crystallizes around a default mode when environments require adaptation, creating the Real Self / Role Mask structure.",
    summary: "How identity crystallizes around a default mode when environments require adaptation, creating the Real Self / Role Mask structure.",
    buildsOn: "Object relations theory, attachment research, developmental psychology, self-models, schema theory, trauma adaptation.",
    claims: [
      "Identity forms around what kept connection possible in early environments",
      "The Real Self precedes identity; the Role Mask is functional adaptation, not pathology",
      "Feeling = Being before cognition develops: external feedback becomes internal belief",
      "Healing requires building what was never built, not fixing something broken",
    ],
    testable: "Predictive links between attachment patterns and identity rigidity. Language indicators of Real Self vs. Role Mask activation. Longitudinal shifts with sustained safety provision.",
  },
  {
    id: "F3",
    displayName: "Adult Cognition and False Coherence",
    title: "Our Three Inner Layers",
    subtitle: "Dissonance and Contradiction Management",
    arc: "Formation",
    purpose: "Explain how state-dependent cognition operates to maintain identity coherence under nervous system pressure, producing systematic self-deception.",
    summary: "How cognition maintains identity coherence under nervous system pressure, producing rationalization and motivated reasoning.",
    buildsOn: "Cognitive dissonance theory, dual-process cognition, motivated reasoning research, self-justification literature, state-dependent learning.",
    claims: [
      "Humans can show different 'selves' across states without pathology — these are layer activations",
      "Some contradictions are state-protective distortion, not conscious deceit",
      "The Logic Layer maintains the Role Mask through coherence-seeking under threat",
      "Repair requires integration and increased tolerance for truth, not suppression",
    ],
    testable: "Within-person state shifts and language feature shifts. Inter-rater reliability on coherence markers. Prediction of rationalization patterns from regulatory state.",
  },
  {
    id: "F4",
    displayName: "Threat-Based Rule Internalization",
    title: "The Invisible Models",
    subtitle: "Rule Adherence and Defensive Coordination",
    arc: "Scaling",
    purpose: "Explain how unspoken social rules (role, obedience, performance, dominance, punishment, entitlement) form and govern emotional and relational life.",
    summary: "How unspoken social rules form and govern emotional and relational life at the nervous system level.",
    buildsOn: "Sociology of norms, cultural psychology, status dynamics, moral foundations research, norm enforcement.",
    claims: [
      "Norm pressure can reward protection and control patterns at scale",
      "Rule internalization is nervous-system level, not just cognitive belief",
      "'Social goodness' can be performed while harm persists — compliance ≠ safety",
      "Cultural conditions enable or constrain individual escalation pathways",
    ],
    testable: "Cross-cultural comparison of worth rules and conflict scripts. Organizational communication analysis under hierarchy. Link between norm climates and escalation patterns.",
  },
  {
    id: "F5",
    displayName: "Threat-Driven External Validation",
    title: "The Filter of Worth",
    subtitle: "Status, Power, and Worth Hierarchies",
    arc: "Scaling",
    purpose: "Describe how threat-organized systems convert safety signals into systematic worth hierarchies, producing credibility and resource filtering.",
    summary: "How threat-organized systems convert safety signals into worth hierarchies that determine what feels safe, lovable, or allowed.",
    buildsOn: "Shame research, social evaluation threat, internalized stigma, conditional regard, social stratification theory.",
    claims: [
      "Worth rules drive protection, control, and domination behaviors — they are the hidden variable",
      "Many conflicts are worth-threat conflicts in disguise",
      "Worth hierarchies are maintained through nervous system enforcement, not just ideology",
      "Repair often fails when worth rules stay untouched",
    ],
    testable: "Measurement design for worth-threat sensitivity. Predicting defensiveness from worth-rule profiles. Intervention studies targeting worth-rule flexibility.",
  },
  {
    id: "F6",
    displayName: "State-Dependent Perception",
    title: "The Bias Architecture",
    subtitle: "Threat-Based Meaning and Perception",
    arc: "Scaling",
    purpose: "Explain how perception becomes a state-dependent protective system, producing perceptual defaults that feel like truth but function as nervous system regulation.",
    summary: "How perception becomes state-dependent, producing perceptual defaults that feel like truth but function as regulation.",
    buildsOn: "Social cognition, threat perception research, intergroup emotion, motivated reasoning, dehumanization literature.",
    claims: [
      "Bias intensifies under threat states — it is state-dependent, not fixed",
      "Some bias is maintained by safety narratives, not facts",
      "Dehumanization follows a predictable gradient tied to mode position",
      "Domination logic uses bias as a stabilizer for power asymmetry",
    ],
    testable: "State manipulation studies and bias expression shifts. Linguistic markers of dehumanization across modes. Fairness evaluation for any automated classification.",
  },
  {
    id: "F7",
    displayName: "Defense-to-Domination Escalation",
    title: "The Anatomy of Tyranny",
    subtitle: "Escalation Markers and Intervention Windows",
    arc: "Turning Point",
    purpose: "Map the specific conditions and mechanisms that allow Protection to escalate through Control into Domination — the crossroads where kind children become tyrannical adults.",
    summary: "How protection escalates through control into domination — the crossroads where defense becomes strategy.",
    buildsOn: "Power and dominance research, coercive control literature, moral disengagement, narcissism research, perpetrator psychology.",
    claims: [
      "Domination is threat regulation plus power access — mechanism, not character",
      "The crossroads (defense → strategy) has recognizable signals: repair disappears, reality gets reframed, accountability triggers escalation",
      "Empathy collapse is state-dependent — it narrows, then goes offline entirely",
      "Intervention windows close as escalation proceeds; stage-appropriate response is essential",
    ],
    testable: "Behavioral outcome prediction under stress and power asymmetry. Coding domination markers in language with reliability. Intervention design focusing on crossroads identification.",
  },
  {
    id: "F8",
    displayName: "Self-Reconnection and Role Mask Loosening",
    title: "Our True Self",
    subtitle: "From Survival Identity to Truth Tolerance",
    arc: "Healing",
    purpose: "Explain the mechanisms of self-reconnection: how sustained safety allows the Role Mask to loosen without destabilizing, enabling gradual return to the Real Self.",
    summary: "How sustained safety allows the Role Mask to loosen, enabling gradual return to the Real Self.",
    buildsOn: "Metacognition, mindfulness research, emotion differentiation, reflective functioning, mentalization theory.",
    claims: [
      "Self-awareness is state-dependent — it cannot be willed into existence without sufficient safety",
      "Higher self-awareness predicts better return capacity and repair outcomes",
      "The Role Mask loosens when safety is sustained, not when insight is achieved",
      "Repair requires building tolerance for truth, not just understanding patterns",
    ],
    testable: "Links between emotional granularity and conflict outcomes. Markers of reflective functioning in language under pressure. Training effects on return capacity.",
  },
  {
    id: "F9",
    displayName: "The Costs of Forced Masking",
    title: "The Costs of Forced Masking",
    subtitle: "Honoring Differences",
    arc: "Healing",
    purpose: "Explain how neurodivergent nervous systems process the emotional gradient differently, the costs of forced neurotypical masking, and design principles for variation-inclusive environments.",
    summary: "How neurodivergent nervous systems process the emotional gradient differently, and the costs of forced masking.",
    buildsOn: "Neurodiversity paradigm, sensory processing research, autism and ADHD research, masking cost literature, developmental needs models.",
    claims: [
      "Neurodivergent nervous systems have different baseline configurations — not deficits",
      "Masking has measurable costs: regulatory depletion, identity confusion, delayed burnout",
      "Many 'symptoms' are adaptive responses to environments that didn't accommodate variation",
      "Healing requires signal trust recovery, not normalization",
    ],
    testable: "Measures of masking cost and regulatory depletion. Comparative outcomes across accommodation levels. Narrative markers of authentic self-expression.",
  },
  {
    id: "F10",
    displayName: "Intergenerational Transmission and Repair",
    title: "Rebuilding Generational Bridges",
    subtitle: "Family-Scale Safety and Lineage Repair",
    arc: "Healing",
    purpose: "Explain how emotional patterns, Role Masks, and regulatory strategies pass from one generation to the next, and the specific conditions that enable interruption and lineage repair.",
    summary: "How emotional patterns pass across generations, and the conditions that enable interruption and repair.",
    buildsOn: "Intergenerational trauma research, family systems theory, epigenetics, rupture and repair research, ACEs literature.",
    claims: [
      "Patterns transmit through regulatory modeling, not just explicit teaching",
      "Intergenerational repair requires one generation to build capacity the previous couldn't",
      "Accountability is a regulated-state behavior — it requires sufficient safety to tolerate",
      "Repair fails when protection and control stay rewarded; succeeds when return capacity increases",
    ],
    testable: "Coding repair attempts and outcomes in transcripts. Predictive models from return markers. Intergenerational comparison of regulatory patterns.",
  },
  {
    id: "F11",
    displayName: "Making Sense of Contradiction",
    title: "Making Sense of Contradiction",
    subtitle: "Making Sense of Contradiction",
    arc: "Integration",
    purpose: "Explain how contradictions emerge predictably when emotional survival structures meet healing — serving as the integration lens that applies Frameworks 1–10 to paradoxical behavior.",
    summary: "How contradictions emerge predictably when emotional survival structures meet healing — and resolve when state logic is included.",
    buildsOn: "State-dependent cognition, dual-process work, trauma adaptation, motivated reasoning, self-justification research.",
    claims: [
      "Apparent contradictions are often state shifts, not hypocrisy or pathology",
      "Some distortion is conscious (strategic), some is state-protective (invisible to self)",
      "Moral reasoning is state-dependent — it shifts with threat and worth pressure",
      "Paradox tolerance increases with regulatory flexibility; decreases under threat",
    ],
    testable: "Within-person contradiction mapping across contexts. Marker sets for moral reasoning shifts in language. Links between shame activation and distortion patterns.",
  },
  {
    id: "F12",
    displayName: "Two Information Systems",
    title: "State-Dependent Coherence",
    subtitle: "How Two Parallel Systems Generate All Behavior",
    arc: "Architecture",
    purpose: "Provide the integrative architecture underlying all previous frameworks — demonstrating how a single mechanism (state-dependent nervous system organization) creates the full diversity of human behavior.",
    summary: "Human behavior is organized by the interaction of two parallel information systems: the Cognitive-Logical System (language, reasoning, planning — conscious, slow) and the Emotional-Somatic System (safety/threat detection, relational cues — unconscious, fast). State precedes capacity.",
    buildsOn: "Dual-process theory (Kahneman, Stanovich), Polyvagal Theory (Porges), somatic markers (Damasio), trauma and body-based approaches (van der Kolk, Levine), attachment as regulatory system (Bowlby, Schore, Siegel).",
    claims: [
      "The emotional-somatic system determines what rational behavior is available — state precedes capacity",
      "Insight alone doesn't change behavior because the emotional-somatic system organizes response before cognition arrives (milliseconds vs. seconds)",
      "Patterns change through experience, not explanation: sustained safety, somatic awareness, co-regulation, corrective experience",
      "The four modes describe a continuous gradient; all frameworks (F1-F11) map onto this two-system architecture",
    ],
    testable: "Timing studies of emotional vs. cognitive processing. Intervention effectiveness comparing insight-based vs. somatic/relational approaches. Cross-theoretical validation with dual-process research.",
  },
];

// Arc colors — 7 arcs matching the Interdependency Matrix
const arcColors = {
  "Foundation": "#26C6DA",
  "Formation": SPECTRUM.azure,
  "Scaling": SPECTRUM.blue,
  "Turning Point": SPECTRUM.cobalt,
  "Healing": SPECTRUM.indigo,
  "Integration": "#5C6BC0",
  "Architecture": "#1E88E5",
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
      <SiteHeader currentPath="/frameworks-map" />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12, flexWrap: "wrap" }}>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: TEXT.primary,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              A Framework Mapping System with 12 levels
            </h1>
          </div>
          <p
            style={{
              fontSize: 14,
              color: TEXT.muted,
              lineHeight: 1.6,
              marginBottom: 20,
            }}
          >
            A unified model linking regulation, identity, social systems, escalation, and repair.
          </p>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            <strong style={{ color: TEXT.primary }}>Most models describe either the inner world or the social world. TEG-Blue connects them as one system.</strong>
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            The frameworks are interdependent because <strong style={{ color: TEXT.primary }}>humans do not experience life in separate categories</strong>. A nervous system state shapes perception. Perception shapes meaning. Meaning shapes identity. Identity shapes behavior. Behavior shapes what gets rewarded. And reward shapes the nervous system again.
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            This loop is how trauma becomes culture, and how culture becomes trauma.
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            TEG-Blue is structured as a sequence so we can locate where a pattern is coming from, where it is being reinforced, and where repair is actually possible.
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            The mapping system makes visible that what people do is strongly shaped by the conditions their system is adapting to, and by their capacity to return to <strong style={{ color: TEXT.primary }}>connection</strong> under challenge.
          </p>
        </header>

        {/* Framework Arc Overview — 7 arcs */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 20 }}>
            The Framework Mapping Arc
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: arcColors["Foundation"],
                minWidth: 160,
                paddingTop: 2,
              }}>
                F1 (Foundation)
              </span>
              <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6 }}>
                Where emotion begins — how the nervous system orients between safety and threat
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: arcColors["Formation"],
                minWidth: 160,
                paddingTop: 2,
              }}>
                F2–F3 (Formation)
              </span>
              <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6 }}>
                How identity crystallizes and how cognition maintains coherence
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: arcColors["Scaling"],
                minWidth: 160,
                paddingTop: 2,
              }}>
                F4–F6 (Scaling)
              </span>
              <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6 }}>
                How individual patterns become social rules, worth hierarchies, and perception biases
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: arcColors["Turning Point"],
                minWidth: 160,
                paddingTop: 2,
              }}>
                F7 (Turning Point)
              </span>
              <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6 }}>
                How protection escalates through control into domination
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: arcColors["Healing"],
                minWidth: 160,
                paddingTop: 2,
              }}>
                F8–F10 (Healing)
              </span>
              <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6 }}>
                Self-reconnection, neurodivergent pathways, and intergenerational repair
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: arcColors["Integration"],
                minWidth: 160,
                paddingTop: 2,
              }}>
                F11 (Integration)
              </span>
              <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6 }}>
                How contradictions resolve when state logic is included
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: arcColors["Architecture"],
                minWidth: 160,
                paddingTop: 2,
              }}>
                F12 (Architecture)
              </span>
              <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6 }}>
                The operating system underneath — two parallel information systems generating all behavior
              </span>
            </div>
          </div>
        </section>

        {/* Interdependency Matrix — breaks out of container for full width */}
        <section
          style={{
            marginBottom: 40,
            marginLeft: -24,
            marginRight: -24,
            padding: "0 24px",
          }}
        >
          <InterdependencyMatrix />
        </section>

        {/* All Frameworks - Expandable */}
        <section style={{ marginBottom: 32 }}>
          {FRAMEWORKS.map((fw) => (
            <ExpandableFrameworkCard key={fw.id} framework={fw} />
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

function ExpandableFrameworkCard({ framework }) {
  const [isOpen, setIsOpen] = useState(false);
  const arcColor = arcColors[framework.arc];

  return (
    <div
      style={{
        marginBottom: 12,
        background: BG.card,
        borderRadius: 10,
        border: `1px solid ${isOpen ? hexToRgba(arcColor, 0.3) : BORDER.default}`,
        borderLeft: `3px solid ${arcColor}`,
        overflow: "hidden",
        transition: "border-color 0.2s ease",
      }}
    >
      {/* Clickable Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          display: "block",
        }}
      >
        {/* Top row: ID, Display Name (Title), Arc badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              fontFamily: FONT.mono,
              color: arcColor,
            }}
          >
            {framework.id}
          </span>
          <span style={{ fontSize: 13, color: TEXT.muted }}>–</span>
          <span style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary }}>
            {framework.displayName}
          </span>
          <span style={{ fontSize: 13, color: TEXT.muted }}>
            ({framework.title})
          </span>
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

        {/* Subtitle */}
        <p style={{ fontSize: 13, color: arcColor, margin: "0 0 8px 0" }}>
          {framework.subtitle}
        </p>

        {/* Summary */}
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
          {framework.summary}
        </p>

        {/* Expand indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
          <span
            style={{
              fontSize: 12,
              color: TEXT.muted,
              transition: "color 0.2s ease",
            }}
          >
            {isOpen ? "Hide details" : "Show details"}
          </span>
          <span
            style={{
              fontSize: 14,
              color: arcColor,
              transition: "transform 0.2s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▼
          </span>
        </div>
      </button>

      {/* Expandable Content */}
      {isOpen && (
        <div
          style={{
            padding: "0 20px 20px",
            borderTop: `1px solid ${BORDER.default}`,
            marginTop: 0,
          }}
        >
          {/* Purpose */}
          <div style={{ marginTop: 16, marginBottom: 16 }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: arcColor, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: FONT.mono }}>
              Purpose
            </h4>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
              {framework.purpose}
            </p>
          </div>

          {/* Builds On */}
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: arcColor, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: FONT.mono }}>
              Builds on
            </h4>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
              {framework.buildsOn}
            </p>
          </div>

          {/* Proposed Claims */}
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: arcColor, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: FONT.mono }}>
              Proposed claims
            </h4>
            <ul style={{ paddingLeft: 20, margin: 0, listStyleType: "disc" }}>
              {framework.claims.map((claim, i) => (
                <li key={i} style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 6, paddingLeft: 4 }}>
                  {claim}
                </li>
              ))}
            </ul>
          </div>

          {/* Testable Directions */}
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: arcColor, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: FONT.mono }}>
              Testable directions
            </h4>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
              {framework.testable}
            </p>
          </div>

          {/* Link to full framework */}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${BORDER.default}` }}>
            <a
              href={`https://teg-blue.com/mapping-system/following-nervous-system/${framework.id.toLowerCase()}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 500,
                color: arcColor,
                textDecoration: "none",
              }}
            >
              View framework →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
