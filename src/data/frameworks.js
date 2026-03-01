/**
 * TEG-Blue Framework Data — Single Source of Truth
 *
 * All framework metadata lives here. Both the frameworks-map index
 * and individual framework pages import from this file.
 */

// ─── PHASES ─────────────────────────────────────────────────

export const PHASES = [
  {
    key: "Foundation",
    frameworks: ["F1", "F2", "F3"],
    color: "#26C6DA",
    description: "The instrument, its calibration, and what cognition does in their place",
  },
  {
    key: "Collective Scaling",
    frameworks: ["F4", "F5", "F6", "F7"],
    color: "#3B82F6",
    description: "How individual regulation patterns become rules, worth hierarchies, perception biases, and domination",
  },
  {
    key: "Repair",
    frameworks: ["F8", "F9", "F10"],
    color: "#4F46E5",
    description: "Individual capacity repair, structural inclusion, generational transmission",
  },
  {
    key: "Meta-Integration",
    frameworks: ["F11", "F12"],
    color: "#5C6BC0",
    description: "Paradox as clarity, and the two information systems underneath everything",
  },
];

// ─── FRAMEWORKS ─────────────────────────────────────────────

export const FRAMEWORKS = [
  {
    id: "F1",
    number: 1,
    symbol: "\u25C9",
    name: "Emotions as a Biological Information",
    researcherTitle: "How the Nervous System Orients Between Safety and Threat",
    subtitle: "The Instrument",
    phase: "Foundation",
    slug: "f1",
    coreQuestion: "How does the nervous system evaluate safety and threat, how do emotions carry that evaluation, how does this shape experience and capacity, and how does the system return?",
    summary: "How the nervous system evaluates safety and threat, how emotions carry that evaluation, how this shapes experience and capacity, and how the system returns. Introduces the Inner Compass as the instrument, the four-mode gradient (Connection, Protection, Control, Domination), and regulation as the biological return mechanism.",
    claims: [
      "Emotions are the nervous system's signalling language \u2014 the body's first language; cognition is the second",
      "State determines capacity \u2014 what can be perceived, thought, and done varies with compass position",
      "The same emotion has two expressions depending on mode position (safety vs. threat)",
      "Health is not a position \u2014 it is the needle's capacity to move. Regulation is the mechanism of coming back",
    ],
    buildsOn: "Polyvagal Theory (Porges), approach/avoidance motivation (Elliot, Carver & Scheier), broaden-and-build (Fredrickson), window of tolerance (Siegel), secure base (Bowlby), fight-flight-freeze-fawn.",
    testable: "Annotation reliability of state markers in text. Convergent validity with established regulation measures. State manipulation studies and capacity shifts. Generalization across contexts.",
    connections: {
      buildsFrom: [],
      feedsInto: ["F2", "F3", "F5", "F12"],
      relatedModels: ["inner-compass"],
    },
    regulationThread: {
      whatRegulates: "The biological return \u2014 the body completing the cycle",
      scale: "Individual biology",
      cost: "No cost \u2014 the system working as designed",
    },
  },
  {
    id: "F2",
    number: 2,
    symbol: "\u25D0",
    name: "Awareness Teaches Awareness",
    researcherTitle: "How the Three Capacities Calibrate the Compass",
    subtitle: "The Calibration",
    phase: "Foundation",
    slug: "f2",
    coreQuestion: "How do the three awareness capacities develop when conditions are met \u2014 and what happens to compass calibration, chronic mode position, and identity when they are not?",
    summary: "How the three awareness capacities develop when conditions are met \u2014 and what happens to compass calibration, chronic mode position, and identity when they are not. The adults' awareness configuration is the child's developmental environment.",
    claims: [
      "Awareness teaches awareness \u2014 the adults' capacity configuration IS the child's developmental environment",
      "The child learns to regulate through being regulated with, not through instruction",
      "Personality is not a type \u2014 it is a record of which capacities had conditions to develop and which didn't",
      "What didn't develop then can develop now \u2014 given the right conditions",
    ],
    buildsOn: "Attachment theory (Bowlby, Ainsworth), polyvagal theory (Porges), developmental neuroscience (Schore), Internal Family Systems (Schwartz), relational neurobiology (Siegel).",
    testable: "Predictive links between caregiver capacity configuration and child attachment. Language indicators of capacity configuration. Longitudinal shifts with sustained safety provision.",
    connections: {
      buildsFrom: ["F1"],
      feedsInto: ["F3", "F8", "F10"],
      relatedModels: ["three-awareness-capacities"],
    },
    regulationThread: {
      whatRegulates: "(Return never learned)",
      scale: "Developmental / relational",
      cost: "Capacity gaps",
    },
  },
  {
    id: "F3",
    number: 3,
    symbol: "\u2B21",
    name: "Adult Cognition & False Coherence",
    researcherTitle: "How Cognition Maintains Identity Under Pressure",
    subtitle: "The Cognitive Replacement",
    phase: "Foundation",
    slug: "f3",
    coreQuestion: "How does cognition maintain identity coherence in adulthood by replacing emotional signals with invented narratives \u2014 and what does this system do to the people around it?",
    summary: "How cognition tells the emotional system 'you're not needed here' \u2014 replacing the return that was never learned with false coherence, emotional distortion, and external regulation. The critical turn from biological regulation to cognitive substitutes.",
    claims: [
      "False coherence is not deception \u2014 it is regulatory success at the cost of emotional truth",
      "Beliefs feel true because they restore nervous system stability, not because they are accurate",
      "Emotional distortion: internal discomfort \u2192 misread as external attack \u2192 retaliation feels like self-defence",
      "Chronic Control mimics healthy Connection \u2014 making harm invisible",
    ],
    buildsOn: "Cognitive dissonance theory (Festinger), dual-process cognition (Kahneman), motivated reasoning (Kunda), self-justification (Tavris & Aronson), state-dependent learning.",
    testable: "Within-person state shifts and language feature shifts. Inter-rater reliability on coherence markers. Prediction of rationalization patterns from regulatory state.",
    connections: {
      buildsFrom: ["F1", "F2"],
      feedsInto: ["F4", "F7"],
      relatedModels: [],
    },
    regulationThread: {
      whatRegulates: "Cognitive replacement (false coherence)",
      scale: "Individual adult cognition",
      cost: "Truth",
    },
  },
  {
    id: "F4",
    number: 4,
    symbol: "\u25A6",
    name: "Rules Regulate",
    researcherTitle: "How Individual Patterns Scale to Collective Systems",
    subtitle: "Collective Substitutes \u2014 Scale 1: Rules",
    phase: "Collective Scaling",
    slug: "f4",
    coreQuestion: "How do individual nervous system regulation patterns scale into collective rule systems \u2014 and why do people follow harmful rules even when they can see the harm?",
    summary: "How false coherence absorbs rules as truth, emotional distortion makes rule-violation feel like personal attack, and external regulation makes rule-compliance a nervous system need. Rule-following is a regulation strategy, not a reasoning choice.",
    claims: [
      "Rule-following is a nervous system regulation strategy, not a reasoning choice",
      "Questioning rules activates the same threat response that created them",
      "Rule internalization operates at the nervous system level, not just cognitive belief",
      "Punishment aims to cause suffering \u2014 accountability aims to create understanding",
    ],
    buildsOn: "Sociology of norms, cultural psychology, status dynamics, moral foundations research (Haidt), norm enforcement literature.",
    testable: "Cross-cultural comparison of worth rules and conflict scripts. Organizational communication analysis under hierarchy. Link between norm climates and escalation patterns.",
    connections: {
      buildsFrom: ["F3"],
      feedsInto: ["F5"],
      relatedModels: [],
    },
    regulationThread: {
      whatRegulates: "Rules",
      scale: "Collective \u2014 social systems",
      cost: "Flexibility",
    },
  },
  {
    id: "F5",
    number: 5,
    symbol: "\u25C8",
    name: "Worth Hierarchies Regulate",
    researcherTitle: "How Rules Become Sorting Systems",
    subtitle: "Collective Substitutes \u2014 Scale 2: Hierarchies",
    phase: "Collective Scaling",
    slug: "f5",
    coreQuestion: "How does worth-seeking become nervous system regulation at systemic scale \u2014 and what does the Filter of Worth do to who gets heard, believed, resourced, and protected?",
    summary: "How worth-seeking becomes nervous system regulation at systemic scale. The Filter of Worth: who gets heard, believed, resourced, protected. Three safety proxies (economic, social, cultural capital) operate as nervous system stabilisers.",
    claims: [
      "Worth-seeking is a nervous system regulation strategy, not a character flaw",
      "Signal access mistaken for human value; signal deprivation internalised as inadequacy",
      "Worth hierarchies are maintained through nervous system enforcement, not just ideology",
      "Both narratives are regulation: the insider's 'I earned this' and the outsider's 'something is wrong with me'",
    ],
    buildsOn: "Shame research (Brown, Tangney), social evaluation threat (Dickerson & Kemeny), internalized stigma, conditional regard (Rogers), social stratification theory.",
    testable: "Measurement design for worth-threat sensitivity. Predicting defensiveness from worth-rule profiles. Intervention studies targeting worth-rule flexibility.",
    connections: {
      buildsFrom: ["F4"],
      feedsInto: ["F6"],
      relatedModels: [],
    },
    regulationThread: {
      whatRegulates: "Worth hierarchies",
      scale: "Collective \u2014 value systems",
      cost: "Equity",
    },
  },
  {
    id: "F6",
    number: 6,
    symbol: "\u25D4",
    name: "Bias as Regulation",
    researcherTitle: "How Perception Becomes Protection",
    subtitle: "Collective Substitutes \u2014 Scale 3: Perception",
    phase: "Collective Scaling",
    slug: "f6",
    coreQuestion: "How does worth-sorting get absorbed into the perceptual system \u2014 and why does bias resist correction even in intelligent, well-intentioned people?",
    summary: "How worth-sorting gets absorbed into the perceptual system. Bias is pattern recognition in service of regulation, not a reasoning error. Certainty is physiological stability, not epistemic accuracy. Shame does not unlearn bias \u2014 safety does.",
    claims: [
      "Bias is pattern recognition in service of regulation, not a reasoning error",
      "If believing something reduces threat, the nervous system keeps believing it \u2014 below conscious awareness",
      "Certainty is physiological stability, not epistemic accuracy",
      "Update capacity = (Internal safety + Relational safety) \u2212 (Identity threat + Belonging threat)",
    ],
    buildsOn: "Social cognition, threat perception research, intergroup emotion theory, motivated reasoning (Kunda), dehumanization literature (Haslam).",
    testable: "State manipulation studies and bias expression shifts. Linguistic markers of dehumanization across modes. Fairness evaluation for any automated classification.",
    connections: {
      buildsFrom: ["F5", "F1"],
      feedsInto: ["F7"],
      relatedModels: [],
    },
    regulationThread: {
      whatRegulates: "Bias (perceptual certainty)",
      scale: "Collective \u2014 perceptual systems",
      cost: "Accuracy",
    },
  },
  {
    id: "F7",
    number: 7,
    symbol: "\u25B3",
    name: "Domination Regulates",
    researcherTitle: "How Defence Becomes Strategy Becomes Domination",
    subtitle: "Collective Substitutes \u2014 Scale 4: Domination",
    phase: "Collective Scaling",
    slug: "f7",
    coreQuestion: "How does self-protection become harm \u2014 what is the pathway from defence through strategy to domination, and where are the intervention windows?",
    summary: "How the Crossroads operates: 'I am trying to feel safe' becomes 'I will make you behave so I can feel safe.' Five-stage escalation pathway with empathy gating as the critical mechanism. Domination is built through reinforcement, not born.",
    claims: [
      "Domination is threat regulation plus power access \u2014 mechanism, not character",
      "The Crossroads (defence \u2192 strategy) has recognizable signals: repair disappears, reality gets reframed, accountability triggers escalation",
      "Empathy is state-dependent, not character-dependent \u2014 it narrows, then goes offline entirely",
      "Causality and accountability are separable \u2014 understanding the mechanism does not reduce responsibility",
    ],
    buildsOn: "Power and dominance research, coercive control literature (Stark), moral disengagement (Bandura), narcissism research, perpetrator psychology.",
    testable: "Behavioral outcome prediction under stress and power asymmetry. Coding domination markers in language with reliability. Intervention design focusing on Crossroads identification.",
    connections: {
      buildsFrom: ["F1", "F2", "F3", "F4", "F5", "F6"],
      feedsInto: ["F8"],
      relatedModels: [],
    },
    regulationThread: {
      whatRegulates: "Domination",
      scale: "Collective \u2014 power systems",
      cost: "Everything",
    },
  },
  {
    id: "F8",
    number: 8,
    symbol: "\u21BA",
    name: "Repairing Awareness & The Power of Difference",
    researcherTitle: "How to Develop What Was Missing",
    subtitle: "Repair \u2014 Individual + Collective",
    phase: "Repair",
    slug: "f8",
    coreQuestion: "How are awareness capacities rebuilt in adulthood \u2014 and why do different awareness configurations strengthen collectives rather than weakening them?",
    summary: "Every substitute (F3\u2013F7) was built because the original was missing. Repair means building the original, not undoing the past. Five conditions for repair: safety, readiness, relational support, time, and structural conditions. The collective compass is more accurate when it has more sensors.",
    claims: [
      "Every substitute was built because the original was missing \u2014 repair means building the original",
      "The system is not resisting repair \u2014 it is assessing whether repair is safe",
      "The back-and-forth between old patterns and new capacity is not the problem \u2014 it is the process",
      "The collective compass is more accurate when it has more sensors \u2014 safety through sameness is false coherence at collective scale",
    ],
    buildsOn: "Metacognition, mindfulness research, emotion differentiation (Barrett), reflective functioning (Fonagy), mentalization theory.",
    testable: "Links between emotional granularity and conflict outcomes. Markers of reflective functioning in language under pressure. Training effects on return capacity.",
    connections: {
      buildsFrom: ["F1", "F2", "F3", "F4", "F5", "F6", "F7"],
      feedsInto: ["F9"],
      relatedModels: [],
    },
    regulationThread: {
      whatRegulates: "Building the original",
      scale: "Individual + collective repair",
      cost: "\u2014 (reversal begins)",
    },
  },
  {
    id: "F9",
    number: 9,
    symbol: "\u223F",
    name: "Neurodivergence as Nervous System Variation",
    researcherTitle: "System Mismatch & Structural Inclusion",
    subtitle: "Repair \u2014 Structural Dimension",
    phase: "Repair",
    slug: "f9",
    coreQuestion: "What happens when systems are designed for one nervous system configuration \u2014 and what does genuine inclusion look like when it is structural intelligence rather than accommodation?",
    summary: "When environments are designed around one neurological configuration, they create chronic system mismatch for everyone else. Structural masking is architectural, not interpersonal. Burnout is a mismatch outcome, not individual failure. Genuine inclusion is structural intelligence, not accommodation.",
    claims: [
      "Neurodivergent nervous systems have different baseline configurations \u2014 not deficits",
      "Structural masking has measurable costs: regulatory depletion, identity confusion, delayed burnout",
      "You cannot develop your capacities while suppressing the system those capacities run on",
      "Genuine inclusion is not accommodation or charity \u2014 it is structural intelligence",
    ],
    buildsOn: "Neurodiversity paradigm, sensory processing research, autism and ADHD research, masking cost literature, developmental needs models.",
    testable: "Measures of masking cost and regulatory depletion. Comparative outcomes across accommodation levels. Narrative markers of authentic self-expression.",
    connections: {
      buildsFrom: ["F8", "F2"],
      feedsInto: ["F10"],
      relatedModels: [],
    },
    regulationThread: {
      whatRegulates: "Structural redesign",
      scale: "Structural / environmental",
      cost: "\u2014",
    },
  },
  {
    id: "F10",
    number: 10,
    symbol: "\u29D7",
    name: "Rebuilding Generational Bridges",
    researcherTitle: "Generational Transmission & The Conditions for Change",
    subtitle: "Repair \u2014 Generational Transmission",
    phase: "Repair",
    slug: "f10",
    coreQuestion: "How do patterns transmit across generations through five pathways \u2014 and what changes when adults repair their own awareness capacities?",
    summary: "What the adult embodies, the child absorbs. What the adult has repaired, the child doesn't need to. Five transmission pathways all transmitting the same underlying content. Coherence, not content, is what matters \u2014 whether the adult's narrative aligns with their felt experience.",
    claims: [
      "Patterns transmit through regulatory modeling, not just explicit teaching \u2014 love does not override what the nervous system embodies",
      "You don't have to heal everything \u2014 you have to heal enough that the next generation starts from a different place",
      "The child doesn't need a perfect parent \u2014 the child needs a parent whose compass moves and who comes back",
      "Accountability is a regulated-state behavior \u2014 it requires sufficient safety to tolerate",
    ],
    buildsOn: "Intergenerational trauma research, family systems theory, epigenetics, rupture and repair research (Tronick), ACEs literature (Felitti).",
    testable: "Coding repair attempts and outcomes in transcripts. Predictive models from return markers. Intergenerational comparison of regulatory patterns.",
    connections: {
      buildsFrom: ["F2", "F8", "F9"],
      feedsInto: ["F11"],
      relatedModels: [],
    },
    regulationThread: {
      whatRegulates: "Generational transmission of repair",
      scale: "Generational",
      cost: "\u2014",
    },
  },
  {
    id: "F11",
    number: 11,
    symbol: "\u221E",
    name: "The Emotional Paradoxes",
    researcherTitle: "Multi-Rationality and Holding Capacity",
    subtitle: "Meta-Integration \u2014 Complexity Emergence",
    phase: "Meta-Integration",
    slug: "f11",
    coreQuestion: "What contradictions become visible when false coherence loosens \u2014 and why is paradox not confusion but clarity?",
    summary: "Paradoxical behaviour is not irrational \u2014 it is multi-rational, serving several valid needs simultaneously. Each framework (F1\u2013F10) generates characteristic contradictions. False coherence hides them. Repair reveals them. True coherence is the capacity to hold contradiction without collapsing.",
    claims: [
      "Apparent contradictions are often state shifts, not hypocrisy or pathology",
      "Paradox tolerance increases with regulatory flexibility; decreases under threat",
      "How a person relates to their own contradictions reveals their compass position",
      "True coherence is not the absence of contradiction \u2014 it is the capacity to hold contradiction without collapsing",
    ],
    buildsOn: "State-dependent cognition, dual-process work, trauma adaptation literature, motivated reasoning, self-justification research.",
    testable: "Within-person contradiction mapping across contexts. Marker sets for moral reasoning shifts in language. Links between shame activation and distortion patterns.",
    connections: {
      buildsFrom: ["F3", "F8", "F9", "F10"],
      feedsInto: ["F12"],
      relatedModels: [],
    },
    regulationThread: {
      whatRegulates: "Holding paradox",
      scale: "Meta \u2014 complexity",
      cost: "\u2014",
    },
  },
  {
    id: "F12",
    number: 12,
    symbol: "\u229C",
    name: "The Two Information Systems",
    researcherTitle: "State-Dependent Organisation \u2014 The Architecture Underneath Everything",
    subtitle: "Meta-Integration \u2014 System Architecture",
    phase: "Meta-Integration",
    slug: "f12",
    coreQuestion: "What is the unified architecture underneath all twelve frameworks \u2014 why does understanding not automatically produce change, and what does?",
    summary: "Two parallel information systems: emotional-somatic (milliseconds, unconscious, experience-based) and cognitive-logical (hundreds of milliseconds, conscious, explanation-based). The emotional-somatic system arrives first. Cognition narrates a process already underway. Change requires conditions, not instructions.",
    claims: [
      "The emotional-somatic system determines what rational behavior is available \u2014 state precedes capacity",
      "Insight alone doesn't change behavior because the emotional-somatic system organises response before cognition arrives",
      "Patterns change through experience, not explanation: sustained safety, somatic awareness, co-regulation, corrective experience",
      "Every framework is the same architecture \u2014 the scale changes, the mechanism doesn't",
    ],
    buildsOn: "Dual-process theory (Kahneman, Stanovich), Polyvagal Theory (Porges), somatic markers (Damasio), trauma and body-based approaches (van der Kolk, Levine), attachment as regulatory system (Bowlby, Schore, Siegel).",
    testable: "Timing studies of emotional vs. cognitive processing. Intervention effectiveness comparing insight-based vs. somatic/relational approaches. Cross-theoretical validation with dual-process research.",
    connections: {
      buildsFrom: ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11"],
      feedsInto: [],
      relatedModels: [],
    },
    regulationThread: {
      whatRegulates: "Conditions, not instructions",
      scale: "Meta \u2014 architecture",
      cost: "\u2014",
    },
  },
];

// ─── MODELS (placeholder for Stage 6) ───────────────────────

export const MODELS = [
  {
    id: "inner-compass",
    name: "The Inner Compass",
    subtitle: "The visual-conceptual instrument",
    slug: "inner-compass",
    parentFramework: "F1",
    url: "/models/inner-compass",
  },
  {
    id: "three-awareness-capacities",
    name: "Three Awareness Capacities",
    subtitle: "The calibration system \u2014 RE, ER, SEA",
    slug: "three-awareness-capacities",
    parentFramework: "F2",
    url: "/models/three-awareness-capacities",
  },
];

// ─── HELPER FUNCTIONS ───────────────────────────────────────

export function getFramework(id) {
  return FRAMEWORKS.find((f) => f.id === id) || null;
}

export function getNextFramework(id) {
  const idx = FRAMEWORKS.findIndex((f) => f.id === id);
  return idx >= 0 && idx < FRAMEWORKS.length - 1 ? FRAMEWORKS[idx + 1] : null;
}

export function getPrevFramework(id) {
  const idx = FRAMEWORKS.findIndex((f) => f.id === id);
  return idx > 0 ? FRAMEWORKS[idx - 1] : null;
}

export function getFrameworksByPhase(phaseKey) {
  return FRAMEWORKS.filter((f) => f.phase === phaseKey);
}

export function getPhase(phaseKey) {
  return PHASES.find((p) => p.key === phaseKey) || null;
}

export function getPhaseColor(phaseKey) {
  const phase = getPhase(phaseKey);
  return phase ? phase.color : "#3B82F6";
}
