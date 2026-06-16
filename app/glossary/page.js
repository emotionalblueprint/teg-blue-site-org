import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, MAIN_ORG, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, ResearcherHero } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What is the TEG-Blue glossary?",
    answer: "The TEG-Blue glossary defines canonical terms across 4 models (M1-M4) and 12 frameworks (F1-F12). It covers the Emotional-Somatic System, Cognitive-Logical System, the Emotional-Somatic Cycle, nervous system states, regulation capacities, awareness capacities, and every core concept — searchable and sorted by model or framework.",
  },
  {
    question: "What are the four nervous system states in TEG-Blue?",
    answer: "The four states are Safety & Openness (parasympathetic-dominant — engagement and broader perception), Threat & Defence (sympathetic activation — immediate defensive mobilisation), Strategy & Management (the CLS recruited into threat organisation — anticipation, planning, override), and Power & Dominance (the CLS at maximum threat response — control, suppression, relational constraint reduced). These are nervous system configurations along a continuous physiological gradient, not personality types.",
  },
  {
    question: "What is the difference between the ESS and the CLS?",
    answer: "The Emotional-Somatic System (ESS) is the biological detection-evaluation-response system — it detects cues below conscious awareness and organises physiological responses in milliseconds. The Cognitive-Logical System (CLS) is language, reasoning, and narrative construction — it arrives after the ESS has already responded. The ESS determines what state the person is in. The CLS operates within whatever state has been set.",
  },
];
import GlossaryList from "./GlossaryList";

export const metadata = {
  title: "Glossary — Canonical Terms | TEG-Blue Research",
  description: "Canonical terms across 4 models and 12 frameworks. Definitions for the Emotional-Somatic System, nervous system states, regulation capacities, awareness capacities, and every core TEG-Blue concept — searchable and sorted by source.",
  keywords: [
    "emotional-somatic system glossary",
    "nervous system regulation terms",
    "TEG-Blue glossary",
    "awareness capacities",
    "regulation capacities",
    "emotional-somatic cycle",
    "false coherence",
  ],
  alternates: {
    canonical: "https://teg-blue.org/glossary",
  },
  openGraph: {
    title: "Glossary — Canonical Terms | TEG-Blue Research",
    description: "Canonical terms across 4 models and 12 frameworks. The Emotional-Somatic System, nervous system states, regulation capacities, awareness capacities, and every core TEG-Blue concept.",
    url: "https://teg-blue.org/glossary",
    siteName: "TEG-Blue Research",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glossary — Canonical Terms | TEG-Blue Research",
    description: "Canonical terms across 4 models and 12 frameworks. The Emotional-Somatic System, nervous system states, regulation capacities, awareness capacities, and every core concept.",
  },
};

// ============================================================
// GLOSSARY TERMS — sourced from canonical-concepts.md (vault-2)
// ============================================================

const GLOSSARY_TERMS = [

  // ===== SYSTEM-LEVEL TERMS =====

  {
    slug: "emotional-somatic-system",
    title: "Emotional-Somatic System (ESS)",
    type: "concept",
    status: "established",
    definition: "The biological detection-evaluation-response system that runs continuously in every body. Detects changes in the environment through the sensory periphery, evaluates for safety or threat, and organises a physiological response before conscious awareness arrives. Cue detection begins at 10–50ms; pattern matching completes within 50–200ms; a full physiological response is organised within 200–500ms. Its language: sensation, impulse, gut feeling. Slow to update, slow to forget.",
    tags: ["ESC", "system-level"],
    framework: "ESC",
  },
  {
    slug: "cognitive-logical-system",
    title: "Cognitive-Logical System (CLS)",
    type: "concept",
    status: "established",
    definition: "The second information system operating alongside the ESS: language, reasoning, planning, abstraction, narrative construction. Conscious awareness arrives at 500ms+. The CLS does not direct the ESS's process — it arrives to find the body already in a different configuration. It operates within whatever state the ESS has set. Critically, the CLS can override the ESS's signals and replace them with invented narratives that produce regulatory stability.",
    tags: ["ESC", "system-level"],
    framework: "ESC",
  },
  {
    slug: "emotional-somatic-cycle",
    title: "Emotional-Somatic Cycle (ESC)",
    type: "concept",
    status: "established",
    definition: "The repeating biological sequence that the ESS and CLS run together. Begins at physiological baseline, the nervous system activates in response to what the environment requires, and either the restoration sequence runs to its endpoint (Path A) or the activation remains unresolved (Path B). Every concept in every model maps a part of this cycle. Every framework explains why the cycle runs the way it does.",
    tags: ["ESC", "system-level"],
    framework: "ESC",
  },

  // ===== M1: SIGNAL ARCHITECTURE =====

  {
    slug: "emotion-precedes-cognition",
    title: "Emotion Precedes Cognition",
    type: "concept",
    status: "established",
    definition: "Emotional signals are generated in milliseconds — a full physiological response is organised before conscious thought arrives. Cognition is the second information system, not the first.",
    tags: ["M1", "signal-architecture"],
    framework: "M1",
  },
  {
    slug: "anatomy-of-an-emotional-signal",
    title: "Anatomy of an Emotional Signal",
    type: "concept",
    status: "established",
    definition: "Every emotional signal follows three steps: finding (what the nervous system detected), physiological response (how the body reorganises), restoration pathway (the conditions required for resolution). The message varies. The sequence does not.",
    tags: ["M1", "signal-architecture"],
    framework: "M1",
  },
  {
    slug: "somatic-emotions",
    title: "Somatic Emotions",
    type: "concept",
    status: "established",
    definition: "Emotions whose signal content is about the body's own state — threat, boundary, demand, contamination, safety, value. Can complete through the body's own channels when conditions allow. In Path A: Somatic Restoration Pathway. In Path B: Non-Relational Restoration Substitutes.",
    tags: ["M1", "signal-architecture"],
    framework: "M1",
  },
  {
    slug: "relational-emotions",
    title: "Relational Emotions",
    type: "concept",
    status: "established",
    definition: "Emotions whose signal content is about belonging, connection, or the state of the bond. Cannot complete through the body's own channels. Require relational evidence from another person. In Path A: Relational Restoration Pathway. In Path B: Relational Restoration Substitutes.",
    tags: ["M1", "signal-architecture"],
    framework: "M1",
  },
  {
    slug: "safety-threat-evaluation",
    title: "Safety-Threat Evaluation",
    type: "concept",
    status: "established",
    definition: "The sensory periphery detects, the nervous system evaluates for safety or threat. This evaluation operates below conscious awareness and determines what physiological response the body organises.",
    tags: ["M1", "signal-architecture"],
    framework: "M1",
  },
  {
    slug: "signal-generation",
    title: "Signal Generation",
    type: "concept",
    status: "established",
    definition: "The nervous system generates a physiological response pattern — hormonal, neurochemical, muscular — encoding a finding about what was detected.",
    tags: ["M1", "signal-architecture"],
    framework: "M1",
  },
  {
    slug: "distorted-signal-reception",
    title: "Distorted Signal Reception",
    type: "concept",
    status: "established",
    definition: "When a signal cannot be received, it does not disappear — it distorts. The finding is the same. What changes is what the person experiences. Admiration distorts to Envy. Pride distorts to Arrogance.",
    tags: ["M1", "signal-architecture"],
    framework: "M1",
  },
  {
    slug: "developmental-loss-of-restoration-pathways",
    title: "Developmental Loss of Restoration Pathways",
    type: "concept",
    status: "established",
    definition: "When relational emotions are never co-regulated, the specific restoration pathways for those emotions never develop. The nervous system stops generating those signals.",
    tags: ["M1", "signal-architecture"],
    framework: "M1",
  },

  // ===== M2: NERVOUS SYSTEM STATES =====

  {
    slug: "safety-and-openness",
    title: "Safety & Openness",
    type: "concept",
    status: "established",
    aliases: ["Connection mode"],
    definition: "Parasympathetic-dominant nervous system state. The ESS sets a state of engagement and broader perception. Enables learning, curiosity, care, and full empathy access. One of the first two states, primarily led by the ESS.",
    tags: ["M2", "nervous-system-states"],
    framework: "M2",
  },
  {
    slug: "threat-and-defence",
    title: "Threat & Defence",
    type: "concept",
    status: "established",
    aliases: ["Protection mode"],
    definition: "Sympathetic activation — the ESS sets a state of immediate defensive mobilisation. Narrows perceptual field, reduces empathy access, increases cognitive rigidity. One of the first two states, primarily led by the ESS.",
    tags: ["M2", "nervous-system-states"],
    framework: "M2",
  },
  {
    slug: "strategy-and-management",
    title: "Strategy & Management",
    type: "concept",
    status: "established",
    aliases: ["Control mode"],
    definition: "The CLS is recruited into threat organisation — anticipation, planning, override. One of the latter two states, in which the CLS is increasingly recruited into survival organisation.",
    tags: ["M2", "nervous-system-states"],
    framework: "M2",
  },
  {
    slug: "power-and-dominance",
    title: "Power & Dominance",
    type: "concept",
    status: "established",
    aliases: ["Domination mode"],
    definition: "The CLS at maximum threat response — control, suppression of resistance, relational constraint reduced. One of the latter two states, in which the CLS is increasingly recruited into survival organisation.",
    tags: ["M2", "nervous-system-states"],
    framework: "M2",
  },
  {
    slug: "nervous-system-gradient",
    title: "The Nervous System Gradient",
    type: "concept",
    status: "established",
    definition: "The four states as positions along a continuous physiological range — not discrete categories. The gradient describes a spectrum of activation, not separate modes.",
    tags: ["M2", "state-architecture"],
    framework: "M2",
  },
  {
    slug: "current-state-position",
    title: "Current State Position",
    type: "concept",
    status: "established",
    definition: "The nervous system's current physiological configuration — continuously updated by Safety-Threat Evaluation.",
    tags: ["M2", "state-architecture"],
    framework: "M2",
  },
  {
    slug: "state-flexibility",
    title: "State Flexibility",
    type: "concept",
    status: "established",
    definition: "Whether the nervous system can shift configuration along the gradient — the key measure of nervous system function. A well-functioning system moves fluidly between states. Getting stuck is the problem.",
    tags: ["M2", "state-architecture"],
    framework: "M2",
  },
  {
    slug: "state-activation",
    title: "State Activation",
    type: "concept",
    status: "established",
    definition: "The nervous system reorganises into a different physiological configuration in response to the signal.",
    tags: ["M2", "state-architecture"],
    framework: "M2",
  },
  {
    slug: "state-determines-capacity",
    title: "State Determines Capacity",
    type: "concept",
    status: "established",
    definition: "The nervous system's current configuration determines what the person can perceive, think, feel, and learn — resource allocation, not choice.",
    tags: ["M2", "state-architecture"],
    framework: "M2",
  },
  {
    slug: "chronic-state-organisation",
    title: "Chronic State Organisation",
    type: "concept",
    status: "established",
    definition: "When a temporary physiological configuration becomes the nervous system's persistent organisation. The state that was a response becomes the resting position.",
    tags: ["M2", "state-architecture"],
    framework: "M2",
  },
  {
    slug: "state-dependent-sensory-filtering",
    title: "State-Dependent Sensory Filtering",
    type: "concept",
    status: "established",
    definition: "The physiological configuration shapes what sensory input reaches the person before conscious thought begins.",
    tags: ["M2", "state-architecture"],
    framework: "M2",
  },
  {
    slug: "state-reinforcing-loop",
    title: "The State-Reinforcing Loop",
    type: "concept",
    status: "established",
    definition: "Physiological state → sensory filter → biased input → confirmation of state. A self-reinforcing cycle where the state produces the evidence that maintains it.",
    tags: ["M2", "state-architecture"],
    framework: "M2",
  },

  // ===== M3: REGULATION CAPACITIES =====

  {
    slug: "physiological-baseline",
    title: "Physiological Baseline",
    type: "concept",
    status: "established",
    definition: "The nervous system at rest — resources available, not deployed. Cortisol at resting level, muscles at resting tension, heart rate at resting pace. The start and endpoint of Path A. In Path B, the baseline shifts upward.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "activation-load",
    title: "Activation Load",
    type: "concept",
    status: "established",
    definition: "The total physiological activation the body is carrying at any point during the cycle.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "path-a",
    title: "Path A",
    type: "concept",
    status: "established",
    definition: "The completed biological regulation pathway — from signal through state through restoration to baseline. The cycle runs to its endpoint. The body returns toward physiological baseline.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "path-b",
    title: "Path B",
    type: "concept",
    status: "established",
    definition: "The incomplete biological regulation pathway — override, incomplete restoration, accumulation, substitution. The cycle does not reach its endpoint. The activation remains unresolved.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "biological-restoration",
    title: "Biological Restoration",
    type: "concept",
    status: "established",
    definition: "The restoration sequence runs to its endpoint — stress hormones metabolise, muscles release, the nervous system returns toward physiological baseline. The body's designed process for completing the activation sequence.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "cognitive-override",
    title: "Cognitive Override",
    type: "concept",
    status: "established",
    definition: "The CLS overrides the ESS's physiological signals — the branching point between Path A and Path B. When the CLS intercepts the ESS's output, the restoration sequence cannot run to its endpoint.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "mobilisation-response",
    title: "Mobilisation Response",
    type: "concept",
    status: "established",
    definition: "The mobilised physiological resources are expended — through movement, action, expression, or holding.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "incomplete-biological-restoration",
    title: "Incomplete Biological Restoration",
    type: "concept",
    status: "established",
    definition: "The restoration sequence runs partially or not at all — hormone metabolism, muscle release, neural recovery stall.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "unresolved-activation-load",
    title: "Unresolved Activation Load",
    type: "concept",
    status: "established",
    definition: "The physiological activation that remains when the restoration sequence does not reach its endpoint.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "debris-accumulation",
    title: "Debris Accumulation",
    type: "concept",
    status: "established",
    definition: "Cortisol, muscle tension, sensitised circuits, inflammatory compounds — the physical residue that accumulates across incomplete cycles.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "baseline-elevation",
    title: "Baseline Elevation",
    type: "concept",
    status: "established",
    definition: "The nervous system adapts its resting activation level upward to reflect the unresolved load. The state that was a response becomes the new resting position.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "restoration-substitutes",
    title: "Restoration Substitutes",
    type: "concept",
    status: "established",
    definition: "The nervous system searches for anything that produces the neurochemical shift that biological restoration would have provided. Substitutes suppress felt intensity without running the restoration sequence — the activation rebounds.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "somatic-restoration-pathway",
    title: "Somatic Restoration Pathway",
    type: "concept",
    status: "established",
    definition: "The body's own channels for completing the restoration sequence — somatic signals complete through somatic discharge.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "relational-restoration-pathway",
    title: "Relational Restoration Pathway",
    type: "concept",
    status: "established",
    definition: "Restoration that requires another person — relational signals complete through relational evidence. A biological requirement built into the signal architecture.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "non-relational-restoration-substitutes",
    title: "Non-Relational Restoration Substitutes",
    type: "concept",
    status: "established",
    definition: "Produce physiological relief by altering internal state. Result: slow upward drift of the resting activation level.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "relational-restoration-substitutes",
    title: "Relational Restoration Substitutes",
    type: "concept",
    status: "established",
    definition: "Produce physiological relief by acting through another nervous system. Result: accelerated rise of the resting activation level.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "relational-substitute-escalation",
    title: "Relational Substitute Escalation",
    type: "concept",
    status: "established",
    definition: "The harm generates physiological signals (shame, guilt, remorse) that cannot be processed — they become new activation, driving escalation.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "self-sealing-property",
    title: "The Self-Sealing Property",
    type: "concept",
    status: "established",
    definition: "The Restoration Substitute destroys the conditions genuine restoration would require — the strategy forecloses the pathway it imitates.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },
  {
    slug: "somatic-debt",
    title: "Somatic Debt",
    type: "concept",
    status: "established",
    definition: "The metabolic cost of sustaining cognitive override — the physiological resources consumed by the CLS outcompeting the ESS's signals.",
    tags: ["M3", "regulation"],
    framework: "M3",
  },

  // ===== M4: AWARENESS ARCHITECTURE =====

  {
    slug: "awareness-architecture",
    title: "The Awareness Architecture",
    type: "concept",
    status: "established",
    definition: "The ESS and CLS as two information systems operating through two separate biological substrates — interoceptive (anterior insula, ventral vagal, visceral afferents) and external observation (amygdala, prefrontal cortex). What data reaches the CLS depends on which substrate is available.",
    tags: ["M4", "awareness"],
    framework: "M4",
  },
  {
    slug: "interoceptive-substrate",
    title: "Interoceptive Substrate",
    type: "concept",
    status: "established",
    definition: "The biological hardware that reads the body from the inside — anterior insula, ventral vagal pathways, visceral afferents. Serves Affective Resonance (ER) and Interoceptive Self-Awareness (SEA).",
    tags: ["M4", "awareness"],
    framework: "M4",
  },
  {
    slug: "external-observation-substrate",
    title: "External Observation Substrate",
    type: "concept",
    status: "established",
    definition: "The biological hardware that reads other bodies from the outside — amygdala, prefrontal cortex. Serves Interpersonal Affect Perception (RE).",
    tags: ["M4", "awareness"],
    framework: "M4",
  },
  {
    slug: "interoceptive-access",
    title: "Interoceptive Access",
    type: "concept",
    status: "established",
    definition: "The state of the interoceptive substrate — whether it is generating readable signals. Three states: fully available, absent, partial (flooded or contradicted). The single upstream variable that determines the entire downstream architecture.",
    tags: ["M4", "awareness"],
    framework: "M4",
  },
  {
    slug: "interpersonal-affect-perception",
    title: "Interpersonal Affect Perception (RE)",
    type: "concept",
    status: "established",
    definition: "A CLS capacity on the external observation substrate. Identifies what others are feeling through observable signals. Two-stage: rapid automatic (amygdala) + deliberate integration (prefrontal). Survives and sharpens under chronic activation.",
    tags: ["M4", "awareness"],
    framework: "M4",
  },
  {
    slug: "affective-resonance",
    title: "Affective Resonance (ER)",
    type: "concept",
    status: "established",
    definition: "An ESS capacity on the interoceptive substrate. Feels what others are feeling in one's own body — somatic, not cognitive. The most fragile capacity — degrades first because it places the greatest demands on the substrate (cross-body translation).",
    tags: ["M4", "awareness"],
    framework: "M4",
  },
  {
    slug: "interoceptive-self-awareness",
    title: "Interoceptive Self-Awareness (SEA)",
    type: "concept",
    status: "established",
    definition: "The capacity that connects the two systems, on the interoceptive substrate. Knows what you yourself feel. The developmental entry point — building the inward channel activates the substrate for outward use.",
    tags: ["M4", "awareness"],
    framework: "M4",
  },
  {
    slug: "interoceptive-channel",
    title: "The Interoceptive Channel",
    type: "concept",
    status: "established",
    definition: "The function SEA provides when it is present — the pathway through which the CLS receives the ESS's physiological signals. SEA is the capacity. The Interoceptive Channel is the function.",
    tags: ["M4", "awareness"],
    framework: "M4",
  },
  {
    slug: "coherence-from-available-data",
    title: "Coherence From Available Data",
    type: "concept",
    status: "established",
    definition: "What the CLS builds from available data. Coherence aligned with the body (full channel access). Coherence without the body (clean, clear, false). Coherence contested by the body (bridge active but flooded or contradicted — the clinical entry point).",
    tags: ["M4", "awareness"],
    framework: "M4",
  },
  {
    slug: "feeling-identity-fusion",
    title: "Feeling-Identity Fusion",
    type: "concept",
    status: "established",
    definition: "When SEA has never been built or has closed, feeling is experienced as identity. 'I feel scared' becomes 'I am scared.' Feedback becomes identity. Treatment becomes identity. Every human begins here.",
    tags: ["M4", "awareness"],
    framework: "M4",
  },
  {
    slug: "awareness-degradation-pattern",
    title: "The Awareness Degradation Pattern",
    type: "concept",
    status: "established",
    definition: "How each capacity changes under chronic activation. RE redirects (accurate → hypervigilant → surface-calibrated → instrumental → weaponised). ER degrades (sustainable → flooded → confused → shut-down → absent). SEA closes (available → narrative-filtered → absent).",
    tags: ["M4", "awareness"],
    framework: "M4",
  },
  {
    slug: "capacity-configuration-profiles",
    title: "Capacity Configuration Profiles",
    type: "concept",
    status: "established",
    definition: "The specific combination of RE, ER, and SEA a person carries. Determines what data the CLS receives, what the ESS can feel, and whether the two systems are connected. Configuration → chronic state → identity.",
    tags: ["M4", "awareness"],
    framework: "M4",
  },
  {
    slug: "the-loop",
    title: "The Loop",
    type: "concept",
    status: "established",
    definition: "The chain feeds itself in both directions. Degradation amplifies degradation (chronic activation depletes the substrate). Restoration amplifies restoration (the sequence rebuilds the substrate). The architecture amplifies whichever direction it is running.",
    tags: ["M4", "awareness"],
    framework: "M4",
  },

  // ===== F1: BIOLOGICAL ORIGIN =====

  {
    slug: "biological-substrate",
    title: "The Biological Substrate",
    type: "concept",
    status: "established",
    definition: "Emotions are biological events — produced by specific neural, endocrine, autonomic, and neurochemical systems. Every mechanism in M1-M4 rests on this measurable substrate.",
    tags: ["F1", "biological-origin"],
    framework: 1,
  },
  {
    slug: "autonomic-architecture",
    title: "The Autonomic Architecture",
    type: "concept",
    status: "established",
    definition: "Two autonomic branches (parasympathetic + sympathetic) co-evolved with the CLS and produced the four nervous system states M2 maps. The ventral vagal system is the evolutionary innovation that made Safety & Openness possible.",
    tags: ["F1", "biological-origin"],
    framework: 1,
  },
  {
    slug: "biological-restoration-as-designed-process",
    title: "Biological Restoration as Designed Process",
    type: "concept",
    status: "established",
    definition: "The body's completion process operates at zero cost — the design specification, not an intervention. Every other framework describes what happens when this process is unavailable. The pivot around which all twelve frameworks are organised.",
    tags: ["F1", "biological-origin"],
    framework: 1,
  },
  {
    slug: "two-completion-pathways",
    title: "The Two Completion Pathways",
    type: "concept",
    status: "established",
    definition: "The body has two designed routes for completing the restoration sequence: somatic (body's own channels) and relational (requires another person). Relational completion is a biological requirement built into the signal architecture.",
    tags: ["F1", "biological-origin"],
    framework: 1,
  },
  {
    slug: "regulatory-architecture",
    title: "The Regulatory Architecture",
    type: "concept",
    status: "established",
    definition: "The governing architecture connecting all twelve frameworks. Two views: The Regulation Thread (across frameworks — escalating substitution and reversal) and The Signal-to-System Sequence (across time — seven steps from individual signal to collective pattern).",
    tags: ["F1", "biological-origin"],
    framework: 1,
  },
  {
    slug: "regulation-thread",
    title: "The Regulation Thread",
    type: "concept",
    status: "established",
    definition: "View 1 of The Regulatory Architecture. When biological restoration is unavailable, the nervous system substitutes — at escalating scales, at escalating costs. F8–F12 reverse the thread by building the original. Sits above both Path A and Path B.",
    tags: ["F1", "biological-origin"],
    framework: 1,
  },
  {
    slug: "signal-to-system-sequence",
    title: "The Signal-to-System Sequence",
    type: "concept",
    status: "established",
    definition: "View 2 of The Regulatory Architecture. The biological sequence by which a single activation event scales from individual biology through relational dynamics to collective conditions. Seven steps, biological restoration at Step 4 as the pivot.",
    tags: ["F1", "biological-origin"],
    framework: 1,
  },

  // ===== F2: DEVELOPMENTAL CALIBRATION =====

  {
    slug: "pre-reflective-starting-condition",
    title: "The Pre-Reflective Starting Condition",
    type: "concept",
    status: "established",
    definition: "Before self-observation matures, experience is identity. The self-referential attribution default: 'something is wrong' registers as 'something is wrong with me.' Every infant begins here.",
    tags: ["F2", "developmental-calibration"],
    framework: 2,
  },
  {
    slug: "signal-specific-restoration-learning",
    title: "Signal-Specific Restoration Learning",
    type: "concept",
    status: "established",
    definition: "What the caregiver could hold is what the child learns to complete. Restoration is learned per-signal — a caregiver who can hold anger but withdraws from grief produces a child who can complete anger but not grief.",
    tags: ["F2", "developmental-calibration"],
    framework: 2,
  },
  {
    slug: "three-developmental-disruption-conditions",
    title: "Three Developmental Disruption Conditions",
    type: "concept",
    status: "established",
    definition: "Three caregiver capacity profiles that disrupt the relational completion pathway: Unpredictable (Condition 1 → unstable interoceptive access), Incongruent (Condition 2 → contested access — signals arrive but the CLS distrusts them), Invalidating (Condition 3 → absent access — substrate never built).",
    tags: ["F2", "developmental-calibration"],
    framework: 2,
  },
  {
    slug: "chronic-state-invisibility-principle",
    title: "The Chronic State Invisibility Principle",
    type: "concept",
    status: "established",
    definition: "A person inside a chronic nervous system state cannot perceive it as a state. Each configuration is experienced as identity, rationality, or competence. The capacity that would reveal the state (SEA) is the capacity the state suppresses.",
    tags: ["F2", "developmental-calibration"],
    framework: 2,
  },
  {
    slug: "safety-threat-thresholds",
    title: "Safety-Threat Thresholds",
    type: "concept",
    status: "established",
    definition: "Physiological settings calibrated by the developmental environment — the activation level at which the nervous system shifts from safety to threat evaluation. A physiological setting, not a value judgment.",
    tags: ["F2", "developmental-calibration"],
    framework: 2,
  },
  {
    slug: "intergenerational-state-transmission",
    title: "Intergenerational State Transmission",
    type: "concept",
    status: "established",
    definition: "The four nervous system states as the transmission mechanism across generations. The caregiver's capacity profile IS the child's developmental environment. Each link invisible to the person carrying it.",
    tags: ["F2", "developmental-calibration"],
    framework: 2,
  },
  {
    slug: "co-regulation",
    title: "Co-regulation",
    type: "concept",
    status: "established",
    definition: "The mechanism through which biological restoration is learned — a regulated nervous system entraining an activated one toward completion. What co-regulation builds at the substrate level is the interoceptive hardware. Co-regulation becomes self-regulation through thousands of repetitions.",
    tags: ["F2", "developmental-calibration"],
    framework: 2,
  },
  {
    slug: "somatic-cognitive-alignment",
    title: "Somatic-Cognitive Alignment",
    type: "concept",
    status: "established",
    definition: "What the CLS produces when all three awareness channels deliver data — narrative reflects the ESS's biological state. The developmental product of co-regulation.",
    tags: ["F2", "developmental-calibration"],
    framework: 2,
  },

  // ===== F3: FALSE COHERENCE =====

  {
    slug: "false-coherence",
    title: "False Coherence",
    type: "concept",
    status: "established",
    definition: "The enduring narrative structure produced by repeated override — cognition replacing physiological signals with invented narratives. The CLS builds a coherent account from the data available to it. When the interoceptive channel is absent, the account feels complete but is constructed without the body's data.",
    tags: ["F3", "false-coherence"],
    framework: 3,
  },
  {
    slug: "signal-replacement",
    title: "Signal Replacement",
    type: "concept",
    status: "established",
    definition: "The core operation inside Cognitive Override — the CLS generates a substitute narrative that takes the place of the ESS's physiological signal.",
    tags: ["F3", "false-coherence"],
    framework: 3,
  },
  {
    slug: "emotional-distortion",
    title: "Emotional Distortion",
    type: "concept",
    status: "established",
    definition: "Internal physiological activation misattributed as external threat when interoceptive access is offline. The activation is real. The source attribution is wrong.",
    tags: ["F3", "false-coherence"],
    framework: 3,
  },
  {
    slug: "external-regulation",
    title: "External Regulation",
    type: "concept",
    status: "established",
    definition: "The nervous system recruits other people's emotional states to perform the regulatory function that cannot be processed internally.",
    tags: ["F3", "false-coherence"],
    framework: 3,
  },
  {
    slug: "override-as-default-architecture",
    title: "Override as Default Architecture",
    type: "concept",
    status: "established",
    definition: "When the interoceptive channel was never built, Cognitive Override is not an event — it is the permanent structure the CLS was built with.",
    tags: ["F3", "false-coherence"],
    framework: 3,
  },

  // ===== F4: RULES REGULATE =====

  {
    slug: "three-mechanism-scaling",
    title: "Three-Mechanism Scaling",
    type: "concept",
    status: "established",
    definition: "How individual patterns consolidate into collective rule systems: False Coherence absorbs rules as truth, emotional distortion makes rule-violation feel like attack, external regulation makes compliance a nervous system need. Collective patterns emerge from below — from enough individuals running the same regulatory strategies in proximity.",
    tags: ["F4", "rules-regulate"],
    framework: 4,
  },
  {
    slug: "rules-as-regulatory-material",
    title: "Rules as Regulatory Material",
    type: "concept",
    status: "established",
    definition: "At the biological level, a rule is material the CLS absorbs because it stabilises the chronic state — not because it is accurate. The CLS cannot distinguish between a rule that is accurate and a rule that regulates.",
    tags: ["F4", "rules-regulate"],
    framework: 4,
  },
  {
    slug: "internalisation-loop",
    title: "The Internalisation Loop",
    type: "concept",
    status: "established",
    definition: "Seven steps from external enforcement to invisible truth: attention narrows → ambiguity intolerance → deviation costly → conformity protective → compliance rewarded → self-policing → rules invisible. Self-sealing: questioning the rules activates the threat that created them.",
    tags: ["F4", "rules-regulate"],
    framework: 4,
  },
  {
    slug: "six-regulatory-functions",
    title: "Six Regulatory Functions",
    type: "concept",
    status: "established",
    definition: "Six rule categories defined by what the nervous system gets: Roles (identity stabilisation), Obedience (belonging protection), Performance (worth verification), Dominance (power establishment), Punishment (boundary enforcement), Entitlement (resource allocation).",
    tags: ["F4", "rules-regulate"],
    framework: 4,
  },
  {
    slug: "substrate-reproduction-through-rules",
    title: "Substrate Reproduction Through Rules",
    type: "concept",
    status: "established",
    definition: "Rule systems produce the caregiver profiles that produce the offspring substrate states — mapping the three developmental disruption conditions at population scale. The loop operates across generations.",
    tags: ["F4", "rules-regulate"],
    framework: 4,
  },
  {
    slug: "three-collective-coherence-forms",
    title: "Three Collective Coherence Forms",
    type: "concept",
    status: "established",
    definition: "How different populations relate to the same rule system depending on substrate state. Absent access: rules feel like reality. Contested access: something feels wrong but the group says otherwise. Full access: rules held as constructions.",
    tags: ["F4", "rules-regulate"],
    framework: 4,
  },
  {
    slug: "re-only-institutions",
    title: "RE-Only Institutions",
    type: "concept",
    status: "established",
    definition: "When the collective operates through cognitive data alone (sharp RE, absent ER, absent SEA), institutional logic is rational and not biologically accurate. The institution reads the room but does not feel the impact.",
    tags: ["F4", "rules-regulate"],
    framework: 4,
  },
  {
    slug: "rule-escalation",
    title: "Rule Escalation",
    type: "concept",
    status: "established",
    definition: "Four stages paralleling the nervous system gradient at collective scale: informal (Safety & Openness) → proliferating (Threat & Defence) → managed (Strategy & Management) → absolute (Power & Dominance). Predictable and interruptible.",
    tags: ["F4", "rules-regulate"],
    framework: 4,
  },

  // ===== F5: WORTH HIERARCHIES REGULATE =====

  {
    slug: "worth-seeking-as-regulation",
    title: "Worth-Seeking as Regulation",
    type: "concept",
    status: "established",
    definition: "The nervous system orients toward worth signals because the developmental environment calibrated worth as safety. Worth-seeking is a regulatory strategy — the nervous system that learned worth is conditional seeks performance as regulation.",
    tags: ["F5", "worth-hierarchies"],
    framework: 5,
  },
  {
    slug: "three-capitals",
    title: "Three Capitals as Nervous System Stabilisers",
    type: "concept",
    status: "established",
    definition: "Economic, social, and cultural capital reduce specific forms of activation — each capital settles a different part of the nervous system's threat equation.",
    tags: ["F5", "worth-hierarchies"],
    framework: 5,
  },
  {
    slug: "substrate-distribution-through-hierarchy",
    title: "Substrate Distribution Through Hierarchy",
    type: "concept",
    status: "established",
    definition: "Worth hierarchies determine which caregivers have the conditions (safety, time, co-regulatory capacity) to build the interoceptive substrate in their children — sorting who gets the developmental conditions that build the substrate.",
    tags: ["F5", "worth-hierarchies"],
    framework: 5,
  },
  {
    slug: "filter-of-worth",
    title: "The Filter of Worth",
    type: "concept",
    status: "established",
    definition: "Signal access mistaken for human value. Signal deprivation internalised as inadequacy. Maintained by double False Coherence — those at the top and those at the bottom both absorb the filter as truth.",
    tags: ["F5", "worth-hierarchies"],
    framework: 5,
  },
  {
    slug: "worth-loop",
    title: "The Worth Loop",
    type: "concept",
    status: "established",
    definition: "Five-step self-reinforcing mechanism: position → conditions → substrate → capacity → position confirmed. Scale-invariant architecture.",
    tags: ["F5", "worth-hierarchies"],
    framework: 5,
  },
  {
    slug: "structural-compass-lock",
    title: "Structural Compass Lock",
    type: "concept",
    status: "established",
    definition: "The filter produces chronic social threat that holds the nervous system in a protective configuration — measurable physiological effects of hierarchy position.",
    tags: ["F5", "worth-hierarchies"],
    framework: 5,
  },

  // ===== F6: BIAS REGULATES =====

  {
    slug: "bias-as-regulation",
    title: "Bias as Regulation",
    type: "concept",
    status: "established",
    definition: "The regulatory equation: beliefs maintained because they settle the nervous system, not because they are accurate. Bias is a regulatory strategy, not a reasoning error.",
    tags: ["F6", "bias-regulates"],
    framework: 6,
  },
  {
    slug: "eight-constructs",
    title: "Eight Constructs",
    type: "concept",
    status: "established",
    definition: "The layered architecture maintaining perceptual filtering. Interaction model: Identity Filter + Empathy Collapse = Update Failure. Threshold equation for revision conditions.",
    tags: ["F6", "bias-regulates"],
    framework: 6,
  },
  {
    slug: "felt-certainty",
    title: "Felt Certainty as Physiological Relief",
    type: "concept",
    status: "established",
    definition: "Threat reduction → relief → 'rightness' → mistaken for accuracy. The mechanism that makes bias invisible to the person running it.",
    tags: ["F6", "bias-regulates"],
    framework: 6,
  },
  {
    slug: "collective-state-locked-perception",
    title: "Collective State-Locked Perception",
    type: "concept",
    status: "established",
    definition: "When enough nervous systems share the same chronic state, collective perception locks — pre-cognitive in each individual, self-reinforcing across the group.",
    tags: ["F6", "bias-regulates"],
    framework: 6,
  },
  {
    slug: "revision-requires-safety",
    title: "Revision Requires Safety",
    type: "concept",
    status: "established",
    definition: "Five conditions for bias revision. The deepest biases require relational, not cognitive, revision — because the bias is maintained at the substrate level, not the narrative level.",
    tags: ["F6", "bias-regulates"],
    framework: 6,
  },

  // ===== F7: DOMINATION REGULATES =====

  {
    slug: "five-stage-pathway",
    title: "Five-Stage Pathway",
    type: "concept",
    status: "established",
    definition: "Fear → Strategy → Entitlement → Empathy Collapse → Power Preservation. Each stage interruptible. Earlier stages are more accessible to intervention.",
    tags: ["F7", "domination-regulates"],
    framework: 7,
  },
  {
    slug: "power-interoception-inverse",
    title: "Power-Interoception Inverse",
    type: "concept",
    status: "established",
    definition: "As power increases, interoceptive access decreases — power replaces the need for internal regulation. Access to power is itself a restoration substitute.",
    tags: ["F7", "domination-regulates"],
    framework: 7,
  },
  {
    slug: "three-capacity-divergence",
    title: "Three-Capacity Divergence",
    type: "concept",
    status: "established",
    definition: "RE redirects (toward strategy), ER collapses (absent), SEA was never built — the configuration that produces the most harm with the least visibility.",
    tags: ["F7", "domination-regulates"],
    framework: 7,
  },
  {
    slug: "escalation-without-a-brake",
    title: "Escalation Without a Brake",
    type: "concept",
    status: "established",
    definition: "The harm generates signals (shame, guilt, remorse) that cannot be processed — ER absent, SEA absent, no channel. Escalation is structurally required, not chosen.",
    tags: ["F7", "domination-regulates"],
    framework: 7,
  },
  {
    slug: "addiction-logic",
    title: "Addiction Logic of Domination",
    type: "concept",
    status: "established",
    definition: "Subjugation builds tolerance. No natural stopping point. Power amplifies access. The mechanism parallels substance addiction.",
    tags: ["F7", "domination-regulates"],
    framework: 7,
  },
  {
    slug: "causality-accountability-coexist",
    title: "Causality and Accountability Coexist",
    type: "concept",
    status: "established",
    definition: "The mechanism is traceable. The harm is real. Both are true simultaneously. Understanding the system that shaped the behaviour does not cancel accountability for its effects.",
    tags: ["F7", "domination-regulates"],
    framework: 7,
  },
  {
    slug: "regulation-thread-complete",
    title: "The Regulation Thread Complete (F1-F7)",
    type: "concept",
    status: "established",
    definition: "Seven restoration substitutes at escalating scale and escalating cost: biological (F1) → developmental (F2) → cognitive (F3) → rules (F4) → worth (F5) → bias (F6) → domination (F7).",
    tags: ["F7", "domination-regulates"],
    framework: 7,
  },

  // ===== F8: AWARENESS REBUILDS THROUGH SAFETY =====

  {
    slug: "regulation-thread-reversed",
    title: "The Regulation Thread Reversed",
    type: "concept",
    status: "established",
    definition: "The thread runs in both directions. Every substitute was built because the original was missing. Building the original is repair.",
    tags: ["F8", "awareness-rebuilds"],
    framework: 8,
  },
  {
    slug: "two-routes-to-same-condition",
    title: "Two Routes to the Same Condition",
    type: "concept",
    status: "established",
    definition: "Chronic suppression (unblocking — the substrate was built then closed) vs developmental absence (building — the substrate was never built). Both require safety. The second requires more.",
    tags: ["F8", "awareness-rebuilds"],
    framework: 8,
  },
  {
    slug: "safety-before-capacity",
    title: "Safety Before Capacity",
    type: "concept",
    status: "established",
    definition: "Felt safety (ESS), not understood safety (CLS). Five conditions: felt safety, accurate mirroring, discomfort tolerance, permission, time. The organising principle of repair.",
    tags: ["F8", "awareness-rebuilds"],
    framework: 8,
  },
  {
    slug: "sea-as-developmental-entry-point",
    title: "SEA as the Developmental Entry Point",
    type: "concept",
    status: "established",
    definition: "The multiplicative system: SEA's return shifts what RE serves and whether ER can function with boundaries. The inward channel must come online before outward capacities function sustainably.",
    tags: ["F8", "awareness-rebuilds"],
    framework: 8,
  },
  {
    slug: "five-oscillating-phases",
    title: "Five Oscillating Phases",
    type: "concept",
    status: "established",
    definition: "Unawareness → Recognition → Oscillation → Active Development → Integration. The oscillation IS the process, not a failure of it. Each oscillation that does not produce catastrophe is a data point.",
    tags: ["F8", "awareness-rebuilds"],
    framework: 8,
  },
  {
    slug: "experience-changes-the-system",
    title: "Experience Changes the System, Insight Does Not",
    type: "concept",
    status: "established",
    definition: "Two systems, two substrates, different speeds. The CLS updates through information. The ESS updates through experience. Understanding does not produce change — the interoceptive substrate changes through conditions the ESS assesses, not conclusions the CLS reaches.",
    tags: ["F8", "awareness-rebuilds"],
    framework: 8,
  },
  {
    slug: "universal-masking",
    title: "Universal Masking",
    type: "concept",
    status: "established",
    definition: "Every configuration masks aspects of itself because authenticity was punished → mask formed → False Coherence absorbed it → authentic configuration offline. A universal pattern, not specific to neurodivergence.",
    tags: ["F8", "awareness-rebuilds"],
    framework: 8,
  },

  // ===== F9: VARIATION IS CONFIGURATION =====

  {
    slug: "same-instrument-different-inputs",
    title: "Same Instrument, Different Inputs",
    type: "concept",
    status: "established",
    definition: "The ESC is universal. What varies is the sensory input arriving at it — different thresholds, different processing speeds, different sensory channels. The instrument is the same. The match between inputs and environment varies.",
    tags: ["F9", "variation-configuration"],
    framework: 9,
  },
  {
    slug: "system-mismatch",
    title: "System Mismatch",
    type: "concept",
    status: "established",
    definition: "The gap between what an environment requires and what a nervous system can sustainably provide. Structural and testable — change the environment and the mismatch changes.",
    tags: ["F9", "variation-configuration"],
    framework: 9,
  },
  {
    slug: "structural-masking",
    title: "Structural Masking",
    type: "concept",
    status: "established",
    definition: "Each masked expression is an incomplete restoration sequence. Every suppressed stim, every hidden reaction, every performed normalcy generates debris accumulation and baseline elevation.",
    tags: ["F9", "variation-configuration"],
    framework: 9,
  },
  {
    slug: "threshold-dynamics",
    title: "Threshold Dynamics",
    type: "concept",
    status: "established",
    definition: "Threshold equation under chronic mismatch. Three crossing presentations: activation, withdrawal, mixed. Regulatory collapse, not behavioural choice.",
    tags: ["F9", "variation-configuration"],
    framework: 9,
  },
  {
    slug: "neurodivergent-burnout",
    title: "Neurodivergent Burnout as Baseline Elevation",
    type: "concept",
    status: "established",
    definition: "Distinct from general burnout — the nervous system reorganises its resting state upward from accumulated masking. Requires sustained different conditions, not rest.",
    tags: ["F9", "variation-configuration"],
    framework: 9,
  },
  {
    slug: "unmasking-not-restoration",
    title: "Unmasking Is Not Restoration",
    type: "concept",
    status: "established",
    definition: "Dropping performance is not the same as the ESS receiving evidence that authenticity is safe. The environment must be ready before the mask comes off.",
    tags: ["F9", "variation-configuration"],
    framework: 9,
  },

  // ===== F10: WHAT THE ADULT PROCESSES =====

  {
    slug: "configuration-teaches-configuration",
    title: "Configuration Teaches Configuration",
    type: "concept",
    status: "established",
    definition: "The adult's capacity configuration IS the child's developmental environment. What the adult embodies, the child absorbs. What the adult has processed, the child does not need to carry.",
    tags: ["F10", "intergenerational"],
    framework: 10,
  },
  {
    slug: "five-transmission-pathways",
    title: "Five Simultaneous Transmission Pathways",
    type: "concept",
    status: "established",
    definition: "Implicit learning, co-regulation, environmental design, epigenetic, narrative — all five run simultaneously. Why single interventions fail.",
    tags: ["F10", "intergenerational"],
    framework: 10,
  },
  {
    slug: "earned-security",
    title: "Earned Security",
    type: "concept",
    status: "established",
    definition: "Processing changes the transmission. Content → coherence. Love does not override what the nervous system embodies — but the adult's ESS processing (not just CLS understanding) changes what the child's nervous system reads.",
    tags: ["F10", "intergenerational"],
    framework: 10,
  },
  {
    slug: "compound-interest",
    title: "Compound Interest",
    type: "concept",
    status: "established",
    definition: "One generation of partial repair shifts the baseline the next generation develops within. Small, sustained shifts accumulate across generations. The compound effect accumulates from the shift, not from completion.",
    tags: ["F10", "intergenerational"],
    framework: 10,
  },
  {
    slug: "enough-not-perfect",
    title: "Enough, Not Perfect",
    type: "concept",
    status: "established",
    definition: "The demand for perfection recreates the regulation thread. The child needs a parent whose nervous system moves — and who comes back. State Flexibility, not permanent Safety & Openness.",
    tags: ["F10", "intergenerational"],
    framework: 10,
  },

  // ===== F11: PARADOX HOLDS WHAT LOGIC CANNOT =====

  {
    slug: "multi-rationality",
    title: "Multi-Rationality",
    type: "concept",
    status: "established",
    definition: "Human contradictions are predictable outcomes of multi-need systems — five competing regulatory needs (safety, belonging, worth, control, coherence) generate paradoxes. The behaviour is not irrational — it serves multiple valid goals simultaneously.",
    tags: ["F11", "paradox"],
    framework: 11,
  },
  {
    slug: "paradox-cascade",
    title: "The Paradox Cascade",
    type: "concept",
    status: "established",
    definition: "Six levels through which contradictions become invisible: initial contradiction → False Coherence → identity → social reinforcement → generational → invisible normal.",
    tags: ["F11", "paradox"],
    framework: 11,
  },
  {
    slug: "state-determines-holding",
    title: "State Determines Holding Capacity",
    type: "concept",
    status: "established",
    definition: "Safety: holds both sides. Threat: simplifies. Control: manages through narrative. Domination: one truth imposed. Paradox tolerance is a physiological resource, not a cognitive skill.",
    tags: ["F11", "paradox"],
    framework: 11,
  },
  {
    slug: "integration-as-holding",
    title: "Integration as Holding",
    type: "concept",
    status: "established",
    definition: "False Coherence eliminates complexity. Somatic-cognitive alignment holds complexity. Integration is the capacity to hold contradiction without collapsing into either side.",
    tags: ["F11", "paradox"],
    framework: 11,
  },

  // ===== F12: TWO INFORMATION SYSTEMS =====

  {
    slug: "two-systems-one-sequence",
    title: "Two Systems, One Sequence",
    type: "concept",
    status: "established",
    definition: "ESS and CLS running in parallel — fixed temporal sequence (ESS first, CLS second). The cognitive system does not direct the process. It narrates a process already underway.",
    tags: ["F12", "two-information-systems"],
    framework: 12,
  },
  {
    slug: "capacity-gap",
    title: "The Capacity Gap",
    type: "concept",
    status: "established",
    definition: "Cognitive system scaled rapidly (neocortex expansion). Emotional system stayed largely the same (conserved mammalian circuitry). Culture sped up faster than biology.",
    tags: ["F12", "two-information-systems"],
    framework: 12,
  },
  {
    slug: "agricultural-override",
    title: "The Agricultural Override",
    type: "concept",
    status: "established",
    definition: "Agriculture created conditions that rewarded cognitive override — surplus, storage, hierarchy, settlement. The signal is accurate. Acting on it is no longer possible. That is the condition agriculture created.",
    tags: ["F12", "two-information-systems"],
    framework: 12,
  },
  {
    slug: "four-stage-invisibility",
    title: "Four-Stage Invisibility",
    type: "concept",
    status: "established",
    definition: "How cognitive override became invisible through generational inheritance: override as adaptation → transmission through development → cultural reinforcement → perceived identity. After enough generations, override does not feel like override.",
    tags: ["F12", "two-information-systems"],
    framework: 12,
  },
  {
    slug: "one-mechanism-twelve-frameworks",
    title: "One Mechanism, Twelve Frameworks",
    type: "concept",
    status: "established",
    definition: "Every framework describes the same mechanism — behaviour organised by nervous system state in a species that has largely lost access to the system that produces the state. The scale changes. The mechanism does not.",
    tags: ["F12", "two-information-systems"],
    framework: 12,
  },
];

const SIDEBAR_SECTIONS = [
  { label: `${GLOSSARY_TERMS.length} Terms`, href: "#glossary-terms", description: "Canonical terms across all 4 models and 12 frameworks, sourced from the concept architectures." },
  { label: "Model Tags", href: "#glossary-search", description: "M1 (Signals), M2 (States), M3 (Regulation), M4 (Awareness) — the mechanism as it operates." },
  { label: "Framework Tags", href: "#glossary-search", description: "F1–F12 across three arcs: Individual (F1-F3), Collective (F4-F7), Repair (F8-F12)." },
  { label: "Regulation Thread", href: "#glossary-list", description: "The thread from biological restoration through escalating substitution to reversal and repair." },
];

export default function GlossaryPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/glossary" />

      <PageLayout
        header={
          <ResearcherHero
            badge="GLOSSARY"
            title="Canonical Terms"
            description={<>Definitions for the Emotional-Somatic System, nervous system states, regulation capacities, awareness capacities, and every core concept across four models and twelve frameworks. Each term sourced from the concept architectures.</>}
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
          What terms does TEG-Blue define?
        </h2>
        <GlossaryList terms={GLOSSARY_TERMS} />

        {/* Cross-site link */}
        <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 16 }}>
          <Link href="/emotional-somatic-cycle" style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}>
            The Emotional-Somatic Cycle →
          </Link>
          <Link href="/frameworks-map" style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}>
            12 Frameworks →
          </Link>
          <a
            href="https://teg-blue.com/glossary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 13, fontFamily: FONT.mono, color: SPECTRUM.azure, textDecoration: "none" }}
          >
            Applied Glossary (teg-blue.com) →
          </a>
        </div>

      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Glossary", url: "/glossary" },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: "TEG-Blue Canonical Terms Glossary",
            url: "https://teg-blue.org/glossary",
            description: `${GLOSSARY_TERMS.length} canonical terms across 4 models and 12 frameworks. Definitions for the Emotional-Somatic System, nervous system states, regulation capacities, awareness capacities, and every core TEG-Blue concept.`,
            inLanguage: "en",
            hasDefinedTerm: [
              { "@type": "DefinedTerm", name: "Emotional-Somatic System (ESS)", description: "The biological detection-evaluation-response system that runs continuously in every body." },
              { "@type": "DefinedTerm", name: "Cognitive-Logical System (CLS)", description: "Language, reasoning, planning, abstraction, narrative construction — the second information system." },
              { "@type": "DefinedTerm", name: "Emotional-Somatic Cycle (ESC)", description: "The repeating biological sequence the ESS and CLS run together." },
              { "@type": "DefinedTerm", name: "Path A", description: "The completed biological regulation pathway — from signal through state through restoration to baseline." },
              { "@type": "DefinedTerm", name: "Path B", description: "The incomplete biological regulation pathway — override, incomplete restoration, accumulation, substitution." },
              { "@type": "DefinedTerm", name: "False Coherence", description: "The enduring narrative structure produced by repeated override — cognition replacing physiological signals with invented narratives." },
              { "@type": "DefinedTerm", name: "Cognitive Override", description: "The CLS overrides the ESS's physiological signals — the branching point between Path A and Path B." },
              { "@type": "DefinedTerm", name: "The Regulation Thread", description: "When biological restoration is unavailable, the nervous system substitutes — at escalating scales, at escalating costs." },
              { "@type": "DefinedTerm", name: "Interoceptive Self-Awareness (SEA)", description: "The capacity that connects the two systems — knows what you yourself feel." },
              { "@type": "DefinedTerm", name: "The Loop", description: "The architecture amplifies whichever direction it is running — degradation or restoration." },
            ],
            isPartOf: {
              "@type": "ResearchProject",
              name: "TEG-Blue: The Emotional Gradient Blueprint",
              url: "https://teg-blue.org",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd(FAQ_ITEMS)) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "Glossary — Canonical Terms | TEG-Blue Research",
              url: "https://teg-blue.org/glossary",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}
