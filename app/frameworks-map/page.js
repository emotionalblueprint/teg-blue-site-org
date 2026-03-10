"use client";

import { useState } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, hexToRgba, RESEARCHER, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero, PageLayout } from "@/src/components";

const SIDEBAR_SECTIONS = [
  { label: "The Regulation Thread", href: "#the-regulation-thread", description: "One mechanism running through all twelve frameworks — what regulates when the body can't, and how the original path rebuilds." },
  { label: "Individual · F1–F3", href: "#individual", description: "How the nervous system evaluates safety, calibrates through development, and compensates through cognition." },
  { label: "Collective · F4–F7", href: "#collective", description: "How individual patterns scale into shared rules, hierarchies, perception biases, and systemic domination." },
  { label: "The Reversal · F8–F12", href: "#the-reversal", description: "How the awareness capacities rebuild, and what makes change possible." },
  { label: "Three Core Models", href: "#three-core-models", description: "The measurement instruments: Inner Compass, Three Awareness Capacities, The Biology of Unfinished Emotion." },
];

// The 12 Frameworks with structured content
const FRAMEWORKS = [
  {
    id: "F1",
    displayName: "Emotions as Biological Information",
    title: "The Safety-Threat Orientation System",
    subtitle: "Scale: Biology",
    group: "Individual",
    summary: "The foundation. The nervous system evaluates safety and threat continuously — below awareness, before cognition. Emotions are how that evaluation gets delivered. They are the body's first language.",
    purpose: "F1 introduces the Inner Compass and its four modes — Connection, Protection, Control, Domination — and the mechanism that keeps the compass moving: Biological Restoration, the body's designed process for completing the activation cycle and returning to Connection. It cannot be forced. It can only be allowed.\n\nF1 also names the full trajectory the remaining eleven frameworks elaborate: Perception → Emotion → Action → Biological Restoration → Behaviour → Social Structure → Escalation or Repair.\n\nBiological Restoration is the hinge. Everything that follows depends on whether it happened.",
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
    title: "How the Three Capacities Calibrate the Compass",
    subtitle: "Scale: Developmental / Relational",
    group: "Individual",
    summary: "The calibration. The three awareness capacities — Reading Emotions (RE), Emotional Resonance (ER), and Self-Emotional Awareness (SEA) — develop through relationship. The adults' capacity configuration creates the environment in which the child's capacities either develop or don't.",
    purpose: "When co-regulation is available and consistent, the nervous system learns the return path: how to activate, complete the cycle, and come back to Connection. When it is not, the compass locks. The identity that forms around a locked position is the starting point for F3.",
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
    displayName: "Adult Cognition & False Coherence",
    title: "Cognitive Regulation and Its Relational Consequences",
    subtitle: "Scale: Individual adult cognition",
    group: "Individual",
    summary: "When Biological Restoration was never learned and co-regulation is not available, cognition steps in to manage what the body cannot complete. This is not a choice — it is what happens when the system runs out of other options. The result is false coherence. It works. The cost is truth.",
    purpose: "False coherence is a cognitively maintained version of reality that keeps the identity stable under nervous system pressure.\n\nIt also extends into relationships through two mechanisms: emotional distortion — where unidentified internal discomfort gets reclassified as external attack — and external regulation — where other people are recruited to manage what the system cannot process internally.\n\nF3 closes the individual arc. F4 begins the collective one: what happens when enough people in a system are running these same mechanisms at once?",
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
    subtitle: "Scale: Social systems · Cost: Flexibility",
    group: "Collective",
    summary: "The first collective framework. When enough people in a system are running the mechanisms F3 describes — false coherence, emotional distortion, external regulation — the group develops structures to stay stable: rules. Rules are not rational agreements. They are nervous system regulation at the group level.",
    purpose: "People do not follow harmful rules because they are unintelligent or immoral. They follow them because under threat, the nervous system prioritises predictability, belonging protection, and risk minimisation — and rules provide all three. Questioning a rule activates the same threat that created it.\n\nF4 explains six categories of rules that consistently emerge, and why they persist long after the original threat has passed.",
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
    subtitle: "Scale: Value systems · Cost: Equity",
    group: "Collective",
    summary: "Rules do not just organise behaviour — they organise value. When rule adherence becomes the definition of belonging and safety, the system begins to sort people. Those who comply receive belonging, protection, and credibility. Those who cannot receive less.",
    purpose: "F5 explains how this sorting happens: how threat-stabilised rule systems produce worth hierarchies, how those hierarchies formalise into institutions, and how the sorting becomes so deeply internalised that it feels like objective reality rather than collective nervous system regulation.",
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
    subtitle: "Scale: Perceptual systems · Cost: Accuracy",
    group: "Collective",
    summary: "Worth hierarchies do not just sort people — they shape what people can see. When the worth structure is internalised, perception becomes state-dependent: we see what confirms the hierarchy and miss what challenges it. Not through deliberate distortion, but because the nervous system treats hierarchy-confirming information as safe.",
    purpose: "F6 explains how bias functions as regulation — why it persists under evidence and why it feels like truth rather than defence.",
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
    title: "How Defence Becomes Strategy Becomes Domination",
    subtitle: "Scale: Power systems · Cost: Everything",
    group: "Collective",
    summary: "The escalation endpoint. F7 traces the pathway from Protection through Control into Domination — not as a character flaw, but as a predictable escalation when every earlier substitute (rules, worth, bias) proves insufficient to regulate a system under increasing threat.",
    purpose: "Domination is the regulation of last resort. It works — at maximum cost. The intervention principle is the same here as everywhere in the system: restore safety first, then expect capacity.\n\nF7 identifies the markers of each escalation stage and the windows where intervention remains possible.",
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
    displayName: "Repairing Awareness & The Power of Difference",
    title: "How the Three Capacities Develop and Why Difference Is Strength",
    subtitle: "Scale: Individual and collective repair",
    group: "The Reversal",
    summary: "F8 turns the system around. F1–F7 trace escalating substitutes. F8 asks: how do you go back? The answer is specific: by rebuilding the awareness capacities that never had conditions to develop.",
    purpose: "Not by finding a hidden self, not by removing a mask, but by creating the relational and experiential conditions that allow RE, ER, and SEA to come online.\n\nF8 operates in two movements. Part 1: individual repair — how to assess where your three capacities currently sit, why repair is difficult, and what conditions make it possible. Part 2: collective strength — why different awareness configurations make collectives more resilient, and why conformity, not difference, is the vulnerability.\n\nThe two movements are one argument: repairing your own capacities and accepting that everyone's capacities are different are the same act of moving toward safety.",
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
    subtitle: "Scale: Structural",
    group: "The Reversal",
    summary: "F9 reframes neurodivergence from deficit to variation. Different nervous systems process the emotional gradient differently. This is not disorder — it is configuration. The problem is not the compass — it is the mismatch between how a nervous system is built and what the environment demands.",
    purpose: "When environments are designed for one configuration, others are required to mask — to perform the expected configuration at the cost of authentic expression and chronic regulation.\n\nF9 explains the costs of structural mismatch, the mechanism of forced masking as it connects to F2–F3, and what genuine inclusion requires: not accommodation of deficit, but design that recognises variation as a feature of collective intelligence.",
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
    subtitle: "Scale: Intergenerational",
    group: "The Reversal",
    summary: "Emotional patterns do not begin with us. The compass calibrates in relationship — and the relational environment is shaped by the compass configurations of those who came before. F2's insight — awareness teaches awareness — applies across generations.",
    purpose: "Parents transmit not just genetics but regulatory patterns, emotional environments, and the specific capacity configurations their own conditions produced.\n\nF10 explains the transmission mechanism, the conditions that enable interruption, and what intergenerational repair actually requires. Understanding how you got here — and understanding how the people who shaped you got there — is not the same as being responsible for all of it.",
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
    displayName: "The Emotional Paradoxes",
    title: "Multi-Rationality and Holding Capacity",
    subtitle: "Scale: Multi-rational",
    group: "The Reversal",
    summary: "When people begin to heal, they encounter paradoxes: knowing and not yet being able to act differently. Feeling worse as awareness increases. F11 explains why these paradoxes are not signs of failure — they are the predictable result of two information systems producing different outputs at the same time.",
    purpose: "Five competing needs (connection, protection, authenticity, belonging, coherence) pull in different directions at once.\n\nThe framework introduces multi-rationality: the recognition that when multiple needs are simultaneously valid, behaviour serves more than one master. What looks contradictory from outside is perfectly logical from inside.",
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
    displayName: "The Two Information Systems",
    title: "The Architecture Underneath",
    subtitle: "Scale: Architectural",
    group: "The Reversal",
    summary: "F12 steps back and asks: what is the architecture underneath all of this? Two parallel information systems — the emotional-somatic and the cognitive-logical — running simultaneously at different speeds. The emotional-somatic arrives first. Cognition narrates a process already underway.",
    purpose: "This is why a person can read F1–F11, understand the entire architecture, see their own pattern clearly — and still do the thing. Understanding is cognitive. The compass is somatic. More cognition does not move a somatic compass. What moves the compass is experience.\n\nF12 is not another link in the regulation thread. It is the explanation of why the thread works the way it does. It unifies the entire system: TEG-Blue is not twelve frameworks. It is one mechanism — state-dependent nervous system organisation responding to perceived safety — described from twelve angles.",
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

// Group colors — matching the regulation thread
const groupColors = {
  "Individual": SPECTRUM.cobalt,
  "Collective": SPECTRUM.cobalt,
  "The Reversal": SPECTRUM.blue,
};

// Thread group definitions
const GROUPS = [
  {
    key: "Individual",
    slug: "individual",
    label: "Individual",
    range: "F1–F3",
    description: "The instrument. How the nervous system evaluates safety, how the compass calibrates through development, and how cognition steps in when the return path is missing.",
  },
  {
    key: "Collective",
    slug: "collective",
    label: "Collective",
    range: "F4–F7",
    description: "The scaling. How individual patterns become shared rules, how rules produce worth hierarchies, how hierarchies shape perception, and how protection escalates all the way to domination.",
  },
  {
    key: "The Reversal",
    slug: "the-reversal",
    label: "The Reversal",
    range: "F8–F12",
    description: "The return. Not by adding another substitute, but by building the original — rebuilding the awareness capacities, understanding variation, repairing generational patterns, holding paradox, and seeing the architecture underneath.",
  },
];

// Regulation thread data — all 12 frameworks
const REGULATION_THREAD = [
  { id: "F1", group: "Individual", regulator: "Biological Restoration — the body completing its own cycle", cost: "No cost — this is the design" },
  { id: "F2", group: "Individual", regulator: "Co-regulation → self-restoration (when learned). When not learned: the compass locks", cost: "The restoration path is never built" },
  { id: "F3", group: "Individual", regulator: "False coherence — cognition replacing restoration", cost: "Truth" },
  { id: "F4", group: "Collective", regulator: "Rules regulate", cost: "Flexibility" },
  { id: "F5", group: "Collective", regulator: "Worth hierarchies regulate", cost: "Equity" },
  { id: "F6", group: "Collective", regulator: "Bias regulates", cost: "Accuracy" },
  { id: "F7", group: "Collective", regulator: "Domination regulates", cost: "Everything" },
  { id: "F8", group: "The Reversal", regulator: "Awareness rebuilds — through safety, not instruction", restores: "The restoration path" },
  { id: "F9", group: "The Reversal", regulator: "Variation is design, not deficit", restores: "Accuracy" },
  { id: "F10", group: "The Reversal", regulator: "What the adult processes, the child doesn't inherit", restores: "The bridge" },
  { id: "F11", group: "The Reversal", regulator: "Paradox holds what logic cannot", restores: "Truth" },
  { id: "F12", group: "The Reversal", regulator: "Two information systems reunite — body and mind", restores: "The design" },
];

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

      <PageLayout
        header={
          <ResearcherHero
            badge="THE REGULATION THREAD"
            title="The 12 Frameworks"
            subtitle="Twelve concept architectures, one thread."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* The Regulation Thread — the page's organizing narrative */}
        <section id="the-regulation-thread" style={{ marginBottom: 32 }}>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            The nervous system was designed to complete a cycle. Detect threat, mobilise, respond — and then restore. Return to baseline. Come back.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            Six research traditions have independently mapped the mobilisation side of that cycle: polyvagal theory, affective neuroscience, attachment research, trauma science, stress physiology, developmental psychology. The evidence for what the body does under threat is substantial, cross-validated, and growing.
          </p>
          <p style={{ fontSize: 14, color: TEXT.primary, lineHeight: 1.8, marginBottom: 16, fontWeight: 500 }}>
            The restoration side is less studied.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            We know the parasympathetic system reasserts. We know cortisol clears. We know the vagal brake re-engages. But there is a prior question that the literature has not yet fully addressed:
          </p>
          <p style={{ fontSize: 15, color: TEXT.primary, lineHeight: 1.8, marginBottom: 16, fontWeight: 600 }}>
            What happens when the return path is never learned?
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            Not disrupted by a single event. Not dysregulated by acute trauma. Never built — because the co-regulatory conditions that teach a developing nervous system how to restore were simply not present. The mechanism exists. The capacity was always there. But the path from activation back to baseline requires experience to form — and for many people, in many ordinary environments that would not meet clinical thresholds, that experience never came.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            If that is true, several things follow that we do not yet have good answers to.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            How do individual nervous systems compensate when restoration is unavailable — and what does compensation cost across a lifetime? How do those compensations aggregate when enough nervous systems without restoration capacity share an environment, a family, an institution, a culture? Is what we call emotional dysregulation at the individual level, and what we call social dysfunction at the collective level, the same missing mechanism operating at different scales?
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            And if so — what does it take to build the return path after the developmental window has passed?
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 0 }}>
            These are the questions the TEG-Blue framework was built around. Twelve concept architectures, one thread. The frameworks are not answers. They are a map of where the questions lead — and an open invitation to investigate them together.
          </p>
        </section>

        {/* Framework Cards — Grouped by Thread */}
        <section style={{ marginBottom: 32 }}>
          {GROUPS.map((group) => {
            const groupFrameworks = FRAMEWORKS.filter((fw) => fw.group === group.key);
            const color = groupColors[group.key];
            return (
              <div key={group.key} id={group.slug} style={{ marginBottom: 32 }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 8,
                  paddingBottom: 8,
                  borderBottom: `2px solid ${hexToRgba(color, 0.3)}`,
                }}>
                  <span style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: color,
                    fontFamily: FONT.mono,
                  }}>
                    {group.label}
                  </span>
                  <span style={{ fontSize: 12, color: TEXT.muted }}>
                    {group.range}
                  </span>
                </div>
                <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16 }}>
                  {group.description}
                </p>
                {groupFrameworks.map((fw) => (
                  <ExpandableFrameworkCard key={fw.id} framework={fw} />
                ))}
              </div>
            );
          })}
        </section>

        {/* The Three Core Models */}
        <section id="three-core-models" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            The Three Core Models
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            The frameworks explain <em>why</em>. The models provide <em>what</em> — the applied tools that practitioners, researchers, and individuals actually use.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 16,
            }}
          >
            <Link
              href="/model/m1-inner-compass"
              style={{
                padding: 20,
                background: gradientCardBg(SPECTRUM.azure),
                borderRadius: 10,
                border: `1px solid ${BORDER.default}`,
                borderLeft: `3px solid ${SPECTRUM.azure}`,
                textDecoration: "none",
                display: "block",
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
                  marginBottom: 6,
                }}
              >
                M1 — The Instrument
              </p>
              <p style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
                Inner Compass & Four-Mode Gradient →
              </p>
              <p style={{ fontSize: 13, color: TEXT.muted, margin: 0, lineHeight: 1.6 }}>
                Where is the needle, can it move, and what does the person have access to from where they are?
              </p>
            </Link>
            <Link
              href="/model/m2-three-awareness-capacities"
              style={{
                padding: 20,
                background: gradientCardBg(SPECTRUM.cobalt),
                borderRadius: 10,
                border: `1px solid ${BORDER.default}`,
                borderLeft: `3px solid ${SPECTRUM.cobalt}`,
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
                  marginBottom: 6,
                }}
              >
                M2 — The Calibration
              </p>
              <p style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
                Three Awareness Capacities →
              </p>
              <p style={{ fontSize: 13, color: TEXT.muted, margin: 0, lineHeight: 1.6 }}>
                What is the current configuration — which capacities had conditions to develop, and which didn{"'"}t?
              </p>
            </Link>
            <Link
              href="/model/m3-the-open-cycle"
              style={{
                padding: 20,
                background: gradientCardBg(SPECTRUM.indigo),
                borderRadius: 10,
                border: `1px solid ${BORDER.default}`,
                borderLeft: `3px solid ${SPECTRUM.indigo}`,
                textDecoration: "none",
                display: "block",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.indigo,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontFamily: FONT.mono,
                  marginBottom: 6,
                }}
              >
                M3 — The Biological Foundation
              </p>
              <p style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
                The Biology of Unfinished Emotion →
              </p>
              <p style={{ fontSize: 13, color: TEXT.muted, margin: 0, lineHeight: 1.6 }}>
                What happens to the body when the emotional cycle is not allowed to complete — and what would completion require?
              </p>
            </Link>
          </div>
        </section>

      </PageLayout>

      <SiteFooter />
    </div>
  );
}

// ─── HELPER COMPONENTS ─────────────────────────────────────────

function ThreadDivider({ label, color }) {
  return (
    <div
      style={{
        padding: "10px 0 6px",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <div style={{ flex: 1, height: 1, background: hexToRgba(color, 0.25) }} />
      <span style={{ fontSize: 10, fontFamily: FONT.mono, color, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: hexToRgba(color, 0.25) }} />
    </div>
  );
}

function ExpandableFrameworkCard({ framework }) {
  const [isOpen, setIsOpen] = useState(false);
  const color = groupColors[framework.group];

  return (
    <div
      style={{
        marginBottom: 12,
        background: gradientCardBg(color),
        borderRadius: 10,
        border: `1px solid ${isOpen ? hexToRgba(color, 0.3) : BORDER.default}`,
        borderLeft: `3px solid ${color}`,
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
        {/* Top row: ID, Display Name, Title, Arc badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              fontFamily: FONT.mono,
              color: color,
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
        </div>

        {/* Subtitle */}
        <p style={{ fontSize: 13, color: color, margin: "0 0 8px 0" }}>
          {framework.subtitle}
        </p>

        {/* Summary */}
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
          {framework.summary}
        </p>

        {/* Always-visible link + expand indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 12 }}>
          <Link
            href={FRAMEWORK_PATHS[framework.id]}
            onClick={(e) => e.stopPropagation()}
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: color,
              textDecoration: "none",
            }}
          >
            Read full framework →
          </Link>
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
              color: color,
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
          {/* Extended Description */}
          <div style={{ marginTop: 16, marginBottom: 16 }}>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0, whiteSpace: "pre-line" }}>
              {framework.purpose}
            </p>
          </div>

          {/* Builds On */}
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: color, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: FONT.mono }}>
              Builds on
            </h4>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
              {framework.buildsOn}
            </p>
          </div>

          {/* Proposed Claims */}
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: color, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: FONT.mono }}>
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
            <h4 style={{ fontSize: 11, fontWeight: 600, color: color, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: FONT.mono }}>
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
                color: color,
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
                color: color,
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
