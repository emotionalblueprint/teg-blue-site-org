"use client";

import { useState } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

// The 12 Frameworks with structured content
const FRAMEWORKS = [
  {
    id: "F1",
    displayName: "Emotions as a Biological Information",
    title: "How the Nervous System Orients Between Safety and Threat",
    subtitle: "The Instrument",
    arc: "Foundation",
    symbol: "◉",
    purpose: "Establish emotions as the nervous system's signalling language — the medium through which the body's continuous safety/threat evaluation reaches the organism. Introduce the Inner Compass, the four-mode gradient, state-dependent capacity, and regulation as the return mechanism.",
    summary: "How the nervous system evaluates safety and threat, how emotions carry that evaluation, how this shapes experience and capacity, and how the system returns. Introduces the Inner Compass as the instrument, the four-mode gradient (Connection, Protection, Control, Domination), and regulation as the biological return mechanism.",
    buildsOn: "Polyvagal Theory (Porges), approach/avoidance motivation (Elliot, Carver & Scheier), broaden-and-build (Fredrickson), window of tolerance (Siegel), secure base (Bowlby), fight-flight-freeze-fawn.",
    claims: [
      "Emotions are the nervous system's signalling language — the body's first language; cognition is the second",
      "State determines capacity — what can be perceived, thought, and done varies with compass position",
      "The same emotion has two expressions depending on mode position (safety vs. threat)",
      "Health is not a position — it is the needle's capacity to move. Regulation is the mechanism of coming back",
    ],
    testable: "Annotation reliability of state markers in text. Convergent validity with established regulation measures. State manipulation studies and capacity shifts. Generalization across contexts.",
  },
  {
    id: "F2",
    displayName: "Awareness Teaches Awareness",
    title: "How the Three Capacities Calibrate the Compass",
    subtitle: "The Calibration",
    arc: "Foundation",
    symbol: "◐",
    purpose: "Describe how the three awareness capacities (Reading Emotions, Emotional Resonance, Self-Emotional Awareness) develop through relational conditions — and how their absence determines chronic mode position and identity formation.",
    summary: "How the three awareness capacities develop when conditions are met — and what happens to compass calibration, chronic mode position, and identity when they are not. The adults' awareness configuration is the child's developmental environment.",
    buildsOn: "Attachment theory (Bowlby, Ainsworth), polyvagal theory (Porges), developmental neuroscience (Schore), Internal Family Systems (Schwartz), relational neurobiology (Siegel).",
    claims: [
      "Awareness teaches awareness — the adults' capacity configuration IS the child's developmental environment",
      "The child learns to regulate through being regulated with, not through instruction",
      "Personality is not a type — it is a record of which capacities had conditions to develop and which didn't",
      "What didn't develop then can develop now — given the right conditions",
    ],
    testable: "Predictive links between caregiver capacity configuration and child attachment. Language indicators of capacity configuration. Longitudinal shifts with sustained safety provision.",
  },
  {
    id: "F3",
    displayName: "Adult Cognition & False Coherence",
    title: "How Cognition Maintains Identity Under Pressure",
    subtitle: "The Cognitive Replacement",
    arc: "Foundation",
    symbol: "⬡",
    purpose: "Explain how cognition maintains identity coherence in adulthood by replacing emotional signals with invented narratives — and what this system does to the people around it.",
    summary: "How cognition tells the emotional system 'you're not needed here' — replacing the return that was never learned with false coherence, emotional distortion, and external regulation. The critical turn from biological regulation to cognitive substitutes.",
    buildsOn: "Cognitive dissonance theory (Festinger), dual-process cognition (Kahneman), motivated reasoning (Kunda), self-justification (Tavris & Aronson), state-dependent learning.",
    claims: [
      "False coherence is not deception — it is regulatory success at the cost of emotional truth",
      "Beliefs feel true because they restore nervous system stability, not because they are accurate",
      "Emotional distortion: internal discomfort → misread as external attack → retaliation feels like self-defence",
      "Chronic Control mimics healthy Connection — making harm invisible",
    ],
    testable: "Within-person state shifts and language feature shifts. Inter-rater reliability on coherence markers. Prediction of rationalization patterns from regulatory state.",
  },
  {
    id: "F4",
    displayName: "Rules Regulate",
    title: "How Individual Patterns Scale to Collective Systems",
    subtitle: "Collective Substitutes — Scale 1: Rules",
    arc: "Collective Scaling",
    symbol: "▦",
    purpose: "Explain how individual nervous system regulation patterns scale into collective rule systems — and why people follow harmful rules even when they can see the harm.",
    summary: "How false coherence absorbs rules as truth, emotional distortion makes rule-violation feel like personal attack, and external regulation makes rule-compliance a nervous system need. Rule-following is a regulation strategy, not a reasoning choice.",
    buildsOn: "Sociology of norms, cultural psychology, status dynamics, moral foundations research (Haidt), norm enforcement literature.",
    claims: [
      "Rule-following is a nervous system regulation strategy, not a reasoning choice",
      "Questioning rules activates the same threat response that created them",
      "Rule internalization operates at the nervous system level, not just cognitive belief",
      "Punishment aims to cause suffering — accountability aims to create understanding",
    ],
    testable: "Cross-cultural comparison of worth rules and conflict scripts. Organizational communication analysis under hierarchy. Link between norm climates and escalation patterns.",
  },
  {
    id: "F5",
    displayName: "Worth Hierarchies Regulate",
    title: "How Rules Become Sorting Systems",
    subtitle: "Collective Substitutes — Scale 2: Hierarchies",
    arc: "Collective Scaling",
    symbol: "◈",
    purpose: "Describe how nervous system regulation patterns scale into worth hierarchies — signal access mistaken for human value, signal deprivation internalised as inadequacy.",
    summary: "How worth-seeking becomes nervous system regulation at systemic scale. The Filter of Worth: who gets heard, believed, resourced, protected. Three safety proxies (economic, social, cultural capital) operate as nervous system stabilisers.",
    buildsOn: "Shame research (Brown, Tangney), social evaluation threat (Dickerson & Kemeny), internalized stigma, conditional regard (Rogers), social stratification theory.",
    claims: [
      "Worth-seeking is a nervous system regulation strategy, not a character flaw",
      "Signal access mistaken for human value; signal deprivation internalised as inadequacy",
      "Worth hierarchies are maintained through nervous system enforcement, not just ideology",
      "Both narratives are regulation: the insider's 'I earned this' and the outsider's 'something is wrong with me'",
    ],
    testable: "Measurement design for worth-threat sensitivity. Predicting defensiveness from worth-rule profiles. Intervention studies targeting worth-rule flexibility.",
  },
  {
    id: "F6",
    displayName: "Bias as Regulation",
    title: "How Perception Becomes Protection",
    subtitle: "Collective Substitutes — Scale 3: Perception",
    arc: "Collective Scaling",
    symbol: "◔",
    purpose: "Explain how perception becomes a state-dependent protective system — why bias resists correction even in intelligent, well-intentioned people, and what conditions enable revision.",
    summary: "How worth-sorting gets absorbed into the perceptual system. Bias is pattern recognition in service of regulation, not a reasoning error. Certainty is physiological stability, not epistemic accuracy. Shame does not unlearn bias — safety does.",
    buildsOn: "Social cognition, threat perception research, intergroup emotion theory, motivated reasoning (Kunda), dehumanization literature (Haslam).",
    claims: [
      "Bias is pattern recognition in service of regulation, not a reasoning error",
      "If believing something reduces threat, the nervous system keeps believing it — below conscious awareness",
      "Certainty is physiological stability, not epistemic accuracy",
      "Update capacity = (Internal safety + Relational safety) − (Identity threat + Belonging threat)",
    ],
    testable: "State manipulation studies and bias expression shifts. Linguistic markers of dehumanization across modes. Fairness evaluation for any automated classification.",
  },
  {
    id: "F7",
    displayName: "Domination Regulates",
    title: "How Defence Becomes Strategy Becomes Domination",
    subtitle: "Collective Substitutes — Scale 4: Domination",
    arc: "Collective Scaling",
    symbol: "△",
    purpose: "Map how self-protection becomes harm — the pathway from defence through strategy to domination, with identifiable transition markers and intervention windows.",
    summary: "How the Crossroads operates: 'I am trying to feel safe' becomes 'I will make you behave so I can feel safe.' Five-stage escalation pathway with empathy gating as the critical mechanism. Domination is built through reinforcement, not born.",
    buildsOn: "Power and dominance research, coercive control literature (Stark), moral disengagement (Bandura), narcissism research, perpetrator psychology.",
    claims: [
      "Domination is threat regulation plus power access — mechanism, not character",
      "The Crossroads (defence → strategy) has recognizable signals: repair disappears, reality gets reframed, accountability triggers escalation",
      "Empathy is state-dependent, not character-dependent — it narrows, then goes offline entirely",
      "Causality and accountability are separable — understanding the mechanism does not reduce responsibility",
    ],
    testable: "Behavioral outcome prediction under stress and power asymmetry. Coding domination markers in language with reliability. Intervention design focusing on Crossroads identification.",
  },
  {
    id: "F8",
    displayName: "Repairing Awareness & The Power of Difference",
    title: "How to Develop What Was Missing",
    subtitle: "Repair — Individual + Collective",
    arc: "Repair",
    symbol: "↺",
    purpose: "Explain how awareness capacities are rebuilt in adulthood — and why different awareness configurations strengthen collectives rather than weakening them.",
    summary: "Every substitute (F3–F7) was built because the original was missing. Repair means building the original, not undoing the past. Five conditions for repair: safety, readiness, relational support, time, and structural conditions. The collective compass is more accurate when it has more sensors.",
    buildsOn: "Metacognition, mindfulness research, emotion differentiation (Barrett), reflective functioning (Fonagy), mentalization theory.",
    claims: [
      "Every substitute was built because the original was missing — repair means building the original",
      "The system is not resisting repair — it is assessing whether repair is safe",
      "The back-and-forth between old patterns and new capacity is not the problem — it is the process",
      "The collective compass is more accurate when it has more sensors — safety through sameness is false coherence at collective scale",
    ],
    testable: "Links between emotional granularity and conflict outcomes. Markers of reflective functioning in language under pressure. Training effects on return capacity.",
  },
  {
    id: "F9",
    displayName: "Neurodivergence as Nervous System Variation",
    title: "System Mismatch & Structural Inclusion",
    subtitle: "Repair — Structural Dimension",
    arc: "Repair",
    symbol: "∿",
    purpose: "Explain what happens when systems are designed for one nervous system configuration — creating chronic structural regulatory cost for all others. The most visible case of the universal pattern F8 describes.",
    summary: "When environments are designed around one neurological configuration, they create chronic system mismatch for everyone else. Structural masking is architectural, not interpersonal. Burnout is a mismatch outcome, not individual failure. Genuine inclusion is structural intelligence, not accommodation.",
    buildsOn: "Neurodiversity paradigm, sensory processing research, autism and ADHD research, masking cost literature, developmental needs models.",
    claims: [
      "Neurodivergent nervous systems have different baseline configurations — not deficits",
      "Structural masking has measurable costs: regulatory depletion, identity confusion, delayed burnout",
      "You cannot develop your capacities while suppressing the system those capacities run on",
      "Genuine inclusion is not accommodation or charity — it is structural intelligence",
    ],
    testable: "Measures of masking cost and regulatory depletion. Comparative outcomes across accommodation levels. Narrative markers of authentic self-expression.",
  },
  {
    id: "F10",
    displayName: "Rebuilding Generational Bridges",
    title: "Generational Transmission & The Conditions for Change",
    subtitle: "Repair — Generational Transmission",
    arc: "Repair",
    symbol: "⧗",
    purpose: "Explain how patterns transmit across generations through five pathways — and what changes when adults repair their own awareness capacities.",
    summary: "What the adult embodies, the child absorbs. What the adult has repaired, the child doesn't need to. Five transmission pathways all transmitting the same underlying content. Coherence, not content, is what matters — whether the adult's narrative aligns with their felt experience.",
    buildsOn: "Intergenerational trauma research, family systems theory, epigenetics, rupture and repair research (Tronick), ACEs literature (Felitti).",
    claims: [
      "Patterns transmit through regulatory modeling, not just explicit teaching — love does not override what the nervous system embodies",
      "You don't have to heal everything — you have to heal enough that the next generation starts from a different place",
      "The child doesn't need a perfect parent — the child needs a parent whose compass moves and who comes back",
      "Accountability is a regulated-state behavior — it requires sufficient safety to tolerate",
    ],
    testable: "Coding repair attempts and outcomes in transcripts. Predictive models from return markers. Intergenerational comparison of regulatory patterns.",
  },
  {
    id: "F11",
    displayName: "The Emotional Paradoxes",
    title: "Multi-Rationality and Holding Capacity",
    subtitle: "Meta-Integration — Complexity Emergence",
    arc: "Meta-Integration",
    symbol: "∞",
    purpose: "Map the contradictions that become visible when false coherence loosens — and explain why paradox is not confusion but clarity.",
    summary: "Paradoxical behaviour is not irrational — it is multi-rational, serving several valid needs simultaneously. Each framework (F1–F10) generates characteristic contradictions. False coherence hides them. Repair reveals them. True coherence is the capacity to hold contradiction without collapsing.",
    buildsOn: "State-dependent cognition, dual-process work, trauma adaptation literature, motivated reasoning, self-justification research.",
    claims: [
      "Apparent contradictions are often state shifts, not hypocrisy or pathology",
      "Paradox tolerance increases with regulatory flexibility; decreases under threat",
      "How a person relates to their own contradictions reveals their compass position",
      "True coherence is not the absence of contradiction — it is the capacity to hold contradiction without collapsing",
    ],
    testable: "Within-person contradiction mapping across contexts. Marker sets for moral reasoning shifts in language. Links between shame activation and distortion patterns.",
  },
  {
    id: "F12",
    displayName: "The Two Information Systems",
    title: "State-Dependent Organisation — The Architecture Underneath Everything",
    subtitle: "Meta-Integration — System Architecture",
    arc: "Meta-Integration",
    symbol: "⊜",
    purpose: "Reveal the unified architecture underneath all twelve frameworks — why understanding does not automatically produce change, and what does.",
    summary: "Two parallel information systems: emotional-somatic (milliseconds, unconscious, experience-based) and cognitive-logical (hundreds of milliseconds, conscious, explanation-based). The emotional-somatic system arrives first. Cognition narrates a process already underway. Change requires conditions, not instructions.",
    buildsOn: "Dual-process theory (Kahneman, Stanovich), Polyvagal Theory (Porges), somatic markers (Damasio), trauma and body-based approaches (van der Kolk, Levine), attachment as regulatory system (Bowlby, Schore, Siegel).",
    claims: [
      "The emotional-somatic system determines what rational behavior is available — state precedes capacity",
      "Insight alone doesn't change behavior because the emotional-somatic system organises response before cognition arrives",
      "Patterns change through experience, not explanation: sustained safety, somatic awareness, co-regulation, corrective experience",
      "Every framework is the same architecture — the scale changes, the mechanism doesn't",
    ],
    testable: "Timing studies of emotional vs. cognitive processing. Intervention effectiveness comparing insight-based vs. somatic/relational approaches. Cross-theoretical validation with dual-process research.",
  },
];

// Arc colors — 4 phases
const arcColors = {
  "Foundation": "#26C6DA",
  "Collective Scaling": SPECTRUM.blue,
  "Repair": SPECTRUM.indigo,
  "Meta-Integration": "#5C6BC0",
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

        {/* Framework Arc Overview — 4 phases */}
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
                minWidth: 200,
                paddingTop: 2,
              }}>
                F1–F3 (Foundation)
              </span>
              <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6 }}>
                The instrument, its calibration, and what cognition does in their place
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: arcColors["Collective Scaling"],
                minWidth: 200,
                paddingTop: 2,
              }}>
                F4–F7 (Collective Scaling)
              </span>
              <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6 }}>
                How individual regulation patterns become rules, worth hierarchies, perception biases, and domination
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: arcColors["Repair"],
                minWidth: 200,
                paddingTop: 2,
              }}>
                F8–F10 (Repair)
              </span>
              <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6 }}>
                Individual capacity repair, structural inclusion, generational transmission
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: arcColors["Meta-Integration"],
                minWidth: 200,
                paddingTop: 2,
              }}>
                F11–F12 (Meta-Integration)
              </span>
              <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6 }}>
                Paradox as clarity, and the two information systems underneath everything
              </span>
            </div>
          </div>
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
