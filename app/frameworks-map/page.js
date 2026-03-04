"use client";

import { useState } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba, RESEARCHER, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero } from "@/src/components";

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
    displayName: "Awareness Teaches Awareness",
    title: "Awareness Calibration",
    subtitle: "How the Three Capacities Calibrate the Compass",
    arc: "Formation",
    purpose: "Explain how the three awareness capacities (RE, ER, SEA) develop through the relational environment — and what happens when the awareness passed is incomplete.",
    summary: "How the three awareness capacities develop through the relational environment, and what happens to the compass calibration, chronic mode position, and identity when the awareness passed is incomplete.",
    buildsOn: "Attachment theory, developmental neuroscience, interpersonal neurobiology, polyvagal theory, somatic experiencing, object relations, schema theory.",
    claims: [
      "Awareness teaches awareness: the adults' awareness configuration is the child's developmental environment",
      "Children calibrate to what caregivers embody, not what they say — the transmission channel is the nervous system",
      "Identity is a cognitive structure built around whichever awareness capacities had conditions to develop — there is no hidden self to find",
      "Healing is developing the capacities that never had conditions to form and learning Biological Restoration",
    ],
    testable: "Predictive links between caregiver awareness configuration and child capacity development. Measurable state signatures and repair signatures in parent-child interaction. Longitudinal shifts in awareness capacities with sustained safety provision.",
  },
  {
    id: "F3",
    displayName: "Adult Cognition and False Coherence",
    title: "False Coherence",
    subtitle: "Cognitive Regulation and Its Relational Consequences",
    arc: "Formation",
    purpose: "Explain how cognition maintains the identity structures built in childhood — actively replacing emotional signals with invented narratives — and what this system does to the people around it through emotional distortion and external regulation.",
    summary: "How cognition, still on threat duty from childhood, replaces emotional signals with invented narratives. False coherence is regulation at the cost of truth. When this system extends into relationships, it produces emotional distortion and external regulation.",
    buildsOn: "Psychoanalytic theory, cognitive dissonance theory, family systems, polyvagal-informed neuroscience, trauma studies, IFS, attachment theory, addiction research.",
    claims: [
      "False coherence is regulatory success at the cost of emotional truth — not deception, but cognition regulating what the body was never taught to regulate",
      "When SEA is structurally absent, internal discomfort becomes perceived external threat — emotional distortion is sincere misattribution, not manipulation",
      "External regulation uses others to manage what cannot be processed internally — fusion, distance, management, or subjugation depending on chronic mode",
      "Safety must precede truth — challenging false coherence directly increases threat because you are confronting the person's only regulatory system",
    ],
    testable: "Within-person state shifts and language feature shifts. Inter-rater reliability on coherence markers. Prediction of rationalization patterns from regulatory state. Boundary-evidence loop patterns in relational transcripts.",
  },
  {
    id: "F4",
    displayName: "Rules Regulate",
    title: "How Individual Patterns Scale to Collective Rule Systems",
    subtitle: "The First Collective Framework",
    arc: "Scaling",
    purpose: "Explain how individual nervous system patterns (F3's false coherence, emotional distortion, and external regulation) aggregate into collective rule systems when enough people run them in proximity. The first framework in the collective arc (F4–F7).",
    summary: "How individual nervous system patterns aggregate into collective rule systems — through false coherence absorbing rules as truth, emotional distortion making violations feel like attacks, and external regulation making compliance a nervous system need.",
    buildsOn: "Sociology (Bourdieu, Bernstein, Goffman), social psychology (Milgram, Asch, Cialdini), neuroscience (Porges, Siegel), attachment theory (Bowlby), systems theory (Bowen, Satir), trauma studies (van der Kolk, Herman), political psychology (Altemeyer), moral psychology (Haidt).",
    claims: [
      "Rule-following is often a nervous system regulation strategy, not a reasoning choice",
      "Six rule categories (roles, obedience, performance, dominance, punishment, entitlement) emerge from threat-based internalization, each defined by regulatory function",
      "Rule systems escalate under sustained threat through stages paralleling the four-mode gradient",
      "Ten research traditions independently describe the same mechanism — rule internalization as collective regulation under threat",
      "Questioning rules recreates threat, because rules are part of collective false coherence",
    ],
    testable: "Cross-cultural comparison of rule systems and their regulatory functions. Organizational communication analysis under hierarchy. Link between collective threat levels and rule escalation stages. Testing whether regulation-based intervention (restoring safety) is more effective than ideology-based intervention (challenging beliefs).",
  },
  {
    id: "F5",
    displayName: "Worth Hierarchies Regulate",
    title: "How Rules Become Sorting Systems",
    subtitle: "Safety Proxies, the Filter of Worth, and Structural Compass Lock",
    arc: "Scaling",
    purpose: "Explain how threat-stabilized rule systems (F4) produce worth hierarchies — distributing credibility, resources, and protection based on signal access rather than intrinsic worth.",
    summary: "How rule systems sort people by worth through safety proxies, producing self-reinforcing hierarchies maintained by double false coherence and structural compass lock.",
    buildsOn: "Capital theory (Bourdieu), social dominance (Sidanius & Pratto), system justification (Jost), signaling theory (Spence), network science (Bonacich), allostatic load (McEwen), intersectionality (Crenshaw), weathering hypothesis (Geronimus), Matthew effect (Merton).",
    claims: [
      "Worth-seeking is often a nervous system regulation strategy, not a character flaw — the compass orienting toward whatever reduces threat",
      "The Filter of Worth is a systemic mechanism: signal access mistaken for human value, signal deprivation internalized as inadequacy",
      "Chronic invisibility produces a structurally stuck compass — not cognitive distortion but accurate adaptation to filtering environments",
      "Outcome gaps are structural artifacts of proxy access, maintained by double false coherence operating in both directions",
    ],
    testable: "Measuring safety proxy access and its correlation with credibility allocation. Testing whether the five-step worth loop operates at both individual and institutional scales. Comparing chronic invisibility presentations with structural filtering metrics. Assessing whether addressing structural conditions improves compass flexibility.",
  },
  {
    id: "F6",
    displayName: "Bias Regulates",
    title: "How Perception Becomes Protection",
    subtitle: "Eight Constructs, Three Categories, and the Revision Pathway",
    arc: "Scaling",
    purpose: "Explain how worth-sorting (F5) becomes perceptual default — through bias operating as nervous system regulation rather than reasoning error — and why correction fails when safety is insufficient.",
    summary: "How perception becomes protection through a layered bias architecture. Certainty is physiological stability, not epistemic accuracy. Shame does not unlearn bias — safety does.",
    buildsOn: "Cognitive psychology (Kahneman & Tversky, Kunda), social psychology (Festinger, Tajfel & Turner, Jost), neuroscience (Friston, Porges, Damasio), clinical psychology (Beck, Young, Schwartz), implicit cognition (Greenwald & Banaji), terror management (Greenberg), psychological safety (Edmondson).",
    claims: [
      "Bias is pattern recognition in service of regulation, not a reasoning error — the regulatory equation determines what gets believed",
      "Eight interacting constructs form a layered architecture with a threshold equation: Identity Filter + Empathy Collapse = Update Failure",
      "Certainty is physiological stability, not epistemic accuracy — bias feels like truth because threat reduction produces relief mistaken for confirmation",
      "Bias-correction programs relying on education, shame, or moral argument are predicted to fail; safety-based approaches are predicted to succeed",
    ],
    testable: "Testing whether safety-based bias interventions outperform education-based ones. Measuring the threshold equation variables across regulatory states. Validating the six-step formation loop as self-reinforcing. Comparing revision outcomes across the three bias categories.",
  },
  {
    id: "F7",
    displayName: "Domination Regulates",
    title: "How Defense Becomes Strategy Becomes Domination",
    subtitle: "The Crossroads, Five-Stage Pathway, and Empathy Gating",
    arc: "Turning Point",
    purpose: "Explain how bias (F6) hardens into enforcement — through a five-stage escalation pathway driven by reinforcement, not character — producing identifiable markers and intervention windows at each stage. The final framework in the collective arc (F4–F7), completing the regulation thread.",
    summary: "How defense becomes strategy, strategy becomes domination, and domination becomes the nervous system's primary regulation source — built through reinforcement, not born. A five-stage pathway with a three-capacity empathy gating model and addiction logic explaining why escalation never stops.",
    buildsOn: "Behavioral reinforcement (Skinner), psychoanalytic theory (Kohut, Kernberg), organizational psychology (Argyris & Schön), neuroscience (Porges, Siegel, Schore), trauma psychology (Van der Kolk, Herman), abuse research (Bancroft), attachment theory (Bowlby), addiction research, systems theory.",
    claims: [
      "Domination is built through reinforcement, not born — the same learning mechanism that shapes all behavior, interruptible at specific stages",
      "The Crossroads is a named critical turning point where defense becomes strategy, recognizable through ten early escalation markers",
      "Empathy gating follows a three-capacity model: RE redirects, ER collapses, SEA was never there — the most harmful configuration has the least visibility",
      "External regulation through subjugation builds tolerance with no natural stopping point — addiction logic applied to relational domination",
    ],
    testable: "Behavioral outcome prediction under stress and power asymmetry. Coding Crossroads markers and five-stage progression in language. Testing whether stage-appropriate intervention outperforms generic approaches. Validating the three-capacity empathy gating model.",
  },
  {
    id: "F8",
    displayName: "Repairing Awareness",
    title: "How the Three Capacities Develop and Why Difference Is Strength",
    subtitle: "From Assessment Through Repair to Collective Intelligence",
    arc: "Healing",
    purpose: "Explain how the three awareness capacities can be assessed, why repair is difficult, what conditions enable it, and what the process looks like — then show why different configurations make the collective stronger than conformity allows.",
    summary: "How awareness configurations can be assessed, what conditions enable capacity development, and why different configurations make the collective stronger than conformity.",
    buildsOn: "Winnicott's True/False Self, Rogers' organismic valuing, IFS, mentalization theory, Polyvagal Theory, corrective emotional experience research.",
    claims: [
      "Awareness capacities can be assessed across five distinct states — from fully disconnected to reliably available under pressure",
      "Repair requires five specific conditions (felt safety, accurate mirroring, discomfort tolerance, permission, time) and proceeds through five identifiable phases",
      "Oscillation between old and new patterns is not failure but the nervous system's natural consolidation process",
      "Different awareness configurations see different things — collective intelligence requires diversity, not conformity",
    ],
    testable: "Five-state capacity assessment validated against clinical observation. Five-condition model tested in therapeutic settings. Oscillation frequency as repair progress indicator. Diverse-configuration teams outperforming uniform teams on complex problems.",
  },
  {
    id: "F9",
    displayName: "Neurodivergence as Nervous System Variation",
    title: "When the Environment Is the Mismatch",
    subtitle: "From System Mismatch Through Masking to Variation-Inclusive Design",
    arc: "Healing",
    purpose: "Explain how neurodivergent nervous systems run the same compass with a different configuration, why System Mismatch — not individual deficit — drives masking and burnout, and what variation-inclusive design looks like.",
    summary: "How the same compass runs on different configurations, why system mismatch produces masking and burnout, and what genuine inclusion requires.",
    buildsOn: "Neurodiversity paradigm (Singer, Walker, Silberman), Social Model of Disability (Oliver, Shakespeare), Polyvagal Theory, Intense World Theory, masking research (Price, Rose, Maté), Universal Design for Learning.",
    claims: [
      "Neurodivergence is a difference in nervous system configuration — the compass is the same, the configuration is different",
      "System Mismatch — the gap between what an environment requires and what a nervous system can sustainably provide — is the named mechanism that produces masking and burnout",
      "Masking has cumulative, compounding costs across six domains (energetic, cognitive, emotional, somatic, developmental, identity)",
      "Variation-inclusive design is not accommodation but structural intelligence — different configurations see different things",
    ],
    testable: "Threshold equation predicting regulatory collapse under mismatch conditions. Six-domain masking cost measurement. Comparative outcomes across accommodation vs. design model environments. Configuration-diverse teams outperforming uniform teams.",
  },
  {
    id: "F10",
    displayName: "Rebuilding Generational Bridges",
    title: "How Patterns Transmit and How Repair Changes What the Next Generation Inherits",
    subtitle: "From Transmission Through Processing to Generational Change",
    arc: "Healing",
    purpose: "Explain how emotional patterns transmit across generations through five simultaneous pathways, why single interventions often fail, and how adult repair genuinely changes the conditions the next generation develops within.",
    summary: "How patterns transmit through five pathways, why processing changes what transmits, and how enough repair shifts the generational baseline.",
    buildsOn: "Family Systems (Bowen, Satir, Minuchin), Attachment Theory (Main, Hesse), intergenerational trauma research (van der Kolk, Herman), epigenetics (Yehuda, Meaney), Narrative Therapy (White, Epston), interpersonal neurobiology (Porges, Siegel, Schore).",
    claims: [
      "Patterns transmit through five simultaneous pathways — single interventions fail because they address one while four continue",
      "What the adult embodies, the child absorbs — the child reads the nervous system, not the intention or knowledge",
      "What isn't processed gets passed on — but processing develops awareness capacities that change what transmits",
      "Repair does not require perfection — enough capacity development shifts the generational baseline",
    ],
    testable: "Earned security replication with three-capacity assessment. Five-pathway intervention compared to single-pathway. Compass mobility in parent predicting capacity development in child. Compound effect across three generations.",
  },
  {
    id: "F11",
    displayName: "The Emotional Logic Behind Paradoxes",
    title: "Multi-Rationality and Holding Capacity",
    subtitle: "Why Contradictions Are Logical When the Full Picture Becomes Visible",
    arc: "Integration",
    purpose: "Map the contradictions that become visible when the system starts working as designed — showing that every apparent paradox is the predictable outcome of a system pursuing multiple valid needs simultaneously.",
    summary: "Paradoxical behavior is multi-rational — it serves multiple valid needs simultaneously. Every framework (F1–F10) generates characteristic paradoxes. The capacity to hold paradox depends on compass position. True coherence is holding contradiction, not eliminating it.",
    buildsOn: "Cognitive dissonance (Festinger), analytical psychology (Jung), systems theory (Bateson), Internal Family Systems (Schwartz), dialectics (Hegel), affective neuroscience (Damasio, Porges).",
    claims: [
      "Paradoxical behavior is multi-rational — serving multiple valid needs simultaneously, not a failure of consistency",
      "Every framework (F1–F10) generates characteristic paradoxes that follow predictably from each mechanism's specific logic",
      "The capacity to hold paradox depends on compass position — Connection enables holding, Domination erases",
      "Integration means holding, not resolving — true coherence is the capacity to contain contradiction without collapsing",
    ],
    testable: "Paradox-holding capacity correlated with compass flexibility. Paradox expression as diagnostic of compass position. Multi-rationality framework applied to predict which paradoxes emerge from which framework mechanisms.",
  },
  {
    id: "F12",
    displayName: "Our Two Information Systems",
    title: "The Architecture Underneath",
    subtitle: "Why Insight Alone Doesn't Change Behavior and What Actually Does",
    arc: "Architecture",
    purpose: "Reveal the architecture underneath all twelve frameworks: two parallel information systems — emotional-somatic and cognitive-logical — running simultaneously at different speeds, explaining why insight alone doesn't produce change and what actually does.",
    summary: "Two parallel information systems run simultaneously at different speeds. The emotional-somatic system arrives first (milliseconds); cognition narrates afterward (seconds). This explains why insight doesn't change behavior, what actually does, and why TEG-Blue is one mechanism described from twelve angles.",
    buildsOn: "Dual-process theory (Kahneman, Stanovich), Polyvagal Theory (Porges), somatic markers (Damasio), trauma research (van der Kolk, Levine, Ogden), interpersonal neurobiology (Siegel, Schore), situational psychology (Milgram, Zimbardo).",
    claims: [
      "The emotional-somatic system determines what rational behavior is available — state precedes capacity",
      "Insight alone doesn't change behavior because the cognitive system narrates a process already underway — it does not direct it",
      "Patterns change through experience, not explanation: sustained safety, somatic awareness, co-regulation, corrective experience, titrated exposure, time",
      "All twelve frameworks describe the same mechanism (state-dependent nervous system organization) from different angles — the scale changes, the mechanism doesn't",
    ],
    testable: "Timing studies of emotional vs. cognitive processing. Intervention effectiveness comparing insight-based vs. somatic/relational approaches. Gradient-matched intervention outcomes by compass position. Cross-framework coherence as unified architecture.",
  },
];

// Framework page paths — all 12 complete
const FRAMEWORK_PATHS = {
  F1: "/framework/f1-emotional-gradient",
  F2: "/framework/f2-awareness-calibration",
  F3: "/framework/f3-false-coherence",
  F4: "/framework/f4-rules-regulate",
  F5: "/framework/f5-worth-hierarchies",
  F6: "/framework/f6-bias-regulates",
  F7: "/framework/f7-domination-regulates",
  F8: "/framework/f8-repairing-awareness",
  F9: "/framework/f9-neurodivergence-variation",
  F10: "/framework/f10-generational-bridges",
  F11: "/framework/f11-emotional-paradoxes",
  F12: "/framework/f12-two-information-systems",
};

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
          padding: `32px ${SPACING.pagePadding} 60px`,
        }}
      >
        {/* Header */}
        <ResearcherHero
          badge="12 EXPLANATORY FRAMEWORKS"
          title="A Framework Mapping System with 12 Levels"
          subtitle="A unified model linking regulation, identity, social systems, escalation, and repair"
          description="Most models describe either the inner world or the social world. TEG-Blue connects them as one system. The frameworks are interdependent because humans do not experience life in separate categories."
        />

        <div style={{ marginBottom: 32 }}>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            A nervous system state shapes perception. Perception shapes meaning. Meaning shapes identity. Identity shapes behavior. Behavior shapes what gets rewarded. And reward shapes the nervous system again.
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
        </div>

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
                Why contradictions are logical when the full picture becomes visible — and why holding, not resolving, is the achievement
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
        background: gradientCardBg(arcColor),
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
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${BORDER.default}`, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link
              href={FRAMEWORK_PATHS[framework.id]}
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
              Read full framework →
            </Link>
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
              View on teg-blue.com →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
