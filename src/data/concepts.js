/**
 * TEG-Blue Foundational Concepts Data — Single Source of Truth
 *
 * All 13 foundational concepts with metadata, hooks, key lines,
 * and source mappings. Concept pages and the concepts hub import
 * from this file.
 *
 * Reorganised with Self-Emotional Awareness as the entry point (C1).
 * All other concepts radiate outward from SEA across 6 groups.
 */

// ─── GROUP COLORS ─────────────────────────────────────────
// Blue tones for each concept group
export const GROUP_COLORS = {
  "Entry Point": "#7EC8F0",
  "The Foundation It Reads": "#5AA8F0",
  "The System It Navigates": "#3B88F0",
  "What Breaks Without It": "#3B4CF0",
  "How It Develops and Returns": "#4E7EFF",
  "SEA's Sibling Capacities": "#6878FF",
};

// ─── CONCEPT COLORS ───────────────────────────────────────
// 13 bright blues: sky → azure → electric → indigo
export const CONCEPT_COLORS = [
  "#7EC8F0", // C1  — Entry Point
  "#6BB8F0", // C2  — The Foundation It Reads
  "#5AA8F0", // C3  — The Foundation It Reads
  "#4A98F0", // C4  — The System It Navigates
  "#3B88F0", // C5  — The System It Navigates
  "#2E78F0", // C6  — The System It Navigates
  "#3B4CF0", // C7  — What Breaks Without It
  "#3050F0", // C8  — What Breaks Without It
  "#2A5CFF", // C9  — What Breaks Without It
  "#4E7EFF", // C10 — How It Develops and Returns
  "#3C6EFF", // C11 — How It Develops and Returns
  "#5E8EFF", // C12 — SEA's Sibling Capacities
  "#6878FF", // C13 — SEA's Sibling Capacities
];

export const CONCEPT_GROUPS = [
  {
    key: "Entry Point",
    concepts: ["C1"],
    description:
      "Self-Emotional Awareness is where the framework begins — the capacity to notice that what we feel is a feeling, not the truth of the situation. Every other concept radiates outward from this one distinction.",
  },
  {
    key: "The Foundation It Reads",
    concepts: ["C2", "C3"],
    description:
      "SEA reads signals. These two concepts establish what those signals are — the nervous system's biological language and the single orientation question that generates all emotional diversity.",
  },
  {
    key: "The System It Navigates",
    concepts: ["C4", "C5", "C6"],
    description:
      "SEA navigates a system. These three concepts map the instrument it navigates — the compass, the way state shapes what is possible, and how the same emotion transforms depending on compass position.",
  },
  {
    key: "What Breaks Without It",
    concepts: ["C7", "C8", "C9"],
    description:
      "When SEA is absent, specific consequences follow — internal discomfort gets misattributed as external attack, cognition replaces emotional truth with narrative stability, and the nervous system calibrates to endure what it cannot recognise as harmful.",
  },
  {
    key: "How It Develops and Returns",
    concepts: ["C10", "C11"],
    description:
      "SEA develops through conditions, not instruction. These two concepts describe how awareness transmits through relationship and how the biological return mechanism restores what was missing.",
  },
  {
    key: "SEA's Sibling Capacities",
    concepts: ["C12", "C13"],
    description:
      "SEA does not work alone. Reading Emotions tracks what others feel. Emotional Resonance feels with them. Together with SEA, the three awareness capacities form a complete system — each shaped by conditions, each capable of recalibration.",
  },
];

export const CONCEPTS = [
  {
    id: "C1",
    number: 1,
    title: "What Am I Actually Feeling?",
    name: "Self-Emotional Awareness",
    subtitle: "The capacity to notice that what we feel is a feeling — not the truth of the situation",
    slug: "self-emotional-awareness",
    group: "Entry Point",
    hook: "The capacity to notice that what we feel is a feeling — not the truth of the situation. That small separation changes everything.",
    seoDescription: "Self-Emotional Awareness is the keystone capacity — the ability to notice that what we feel is a feeling, not the truth of the situation. This small separation between feeling and fact changes how we relate to ourselves and others.",
    seoKeywords: ["self-emotional awareness", "emotional self-awareness", "metacognition", "feeling vs fact", "emotional differentiation", "self-knowledge", "keystone capacity", "TEG-Blue"],
    keyLine:
      "The wall is the same wall. We are just learning, finally, to notice where we are standing.",
    drawsFrom: {
      frameworks: ["F2"],
      models: ["three-awareness-capacities"],
    },
    goDeeper: { framework: "F2", label: "Explore the Awareness Teaches Awareness framework" },
    modelCard: {
      learn: "Meet the three awareness capacities — Reading Emotions, Emotional Resonance, and Self-Emotional Awareness — and understand how each one develops, redirects, or goes offline depending on early conditions.",
    },
    frameworkCard: {
      learn: "Understand how the three capacities develop through relationship, what the adults' awareness teaches the child's nervous system, and what happens to the compass when conditions were missing.",
    },
  },
  {
    id: "C2",
    number: 2,
    title: "What Are Emotions?",
    name: "Emotions as Biological Information",
    subtitle: "The nervous system's signalling language — the body's first language",
    slug: "emotions-as-biological-information",
    group: "The Foundation It Reads",
    hook: "Emotions are the nervous system's signalling language — the body's first language. Interpret, do not suppress.",
    seoDescription: "Emotions are not irrational impulses — they are the nervous system's signalling language, carrying information about safety and threat. TEG-Blue's foundational reframe: interpret emotional signals, don't suppress them.",
    seoKeywords: ["emotions as biological information", "nervous system signalling", "emotional signals", "safety threat detection", "neuroception", "polyvagal theory", "emotional intelligence", "TEG-Blue"],
    keyLine:
      "The question is not 'how do I manage this emotion?' but 'what is this signal telling me?'",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
    goDeeper: { framework: "F1", label: "Understand how the Inner Compass works" },
    modelCard: {
      learn: "See the instrument — the Inner Compass and the four-mode gradient (Connection → Protection → Control → Domination) — and understand how the compass tracks where your nervous system sits right now.",
    },
    frameworkCard: {
      learn: "Explore the full architecture of how the nervous system evaluates safety and threat, how emotions carry that evaluation, how state shapes what you can perceive and do, and how the system returns.",
    },
  },
  {
    id: "C3",
    number: 3,
    title: "The One Question Running Underneath Everything",
    name: "The Safety Orientation Question",
    subtitle: "One question generates all emotional diversity: safe enough, or not yet?",
    slug: "the-safety-orientation-question",
    group: "The Foundation It Reads",
    hook: "One question generates all emotional diversity: 'Is there enough safety to engage, or is protection needed?'",
    seoDescription: "Every emotion is a variation on one question the nervous system asks: 'Is there enough safety to engage, or is protection needed?' This single orientation generates the full spectrum of emotional experience.",
    seoKeywords: ["safety orientation", "emotional diversity", "nervous system safety", "threat detection", "emotional regulation", "neuroception", "safety vs threat", "TEG-Blue"],
    keyLine: "Every emotion is a variation on: safe enough, or not yet.",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
    goDeeper: { framework: "F1", label: "Understand how the Inner Compass works" },
    modelCard: {
      learn: "See the instrument — the Inner Compass and the four-mode gradient — and understand how this single question generates four distinct positions the nervous system can occupy.",
    },
    frameworkCard: {
      learn: "Explore how the nervous system evaluates safety and threat, how the orientation question drives the compass, and how regulation is the mechanism of coming back.",
    },
  },
  {
    id: "C4",
    number: 4,
    title: "The Compass Guiding Our Emotional World",
    name: "The Inner Compass",
    subtitle: "The nervous system orients between Connection and threat — health is the needle moving freely",
    slug: "the-inner-compass",
    group: "The System It Navigates",
    hook: "The nervous system orients between Connection and threat modes. Health is not a position — it is the needle moving freely.",
    seoDescription: "The Inner Compass is TEG-Blue's core instrument — a moving needle that tracks where the nervous system sits on the four-mode gradient (Connection, Protection, Control, Domination). Health is mobility, not position.",
    seoKeywords: ["inner compass", "four-mode gradient", "nervous system regulation", "connection protection control domination", "emotional health", "regulatory mobility", "TEG-Blue model"],
    keyLine:
      "Health is not staying in Connection permanently — health is the ability to move through the gradient and come back.",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
    goDeeper: { framework: "F1", label: "Understand how the Inner Compass works" },
    modelCard: {
      learn: "See the full instrument — the four-mode gradient (Connection, Protection, Control, Domination), how the needle moves, and what each position means for what you can feel, think, and do.",
    },
    frameworkCard: {
      learn: "Explore the architecture underneath the compass — how the nervous system evaluates safety and threat, how emotions carry that evaluation, and why health is mobility, not position.",
    },
  },
  {
    id: "C5",
    number: 5,
    title: "Why Can't I Always Be Who I Know I Am?",
    name: "State Determines Capacity",
    subtitle: "What you can perceive, think, feel, and do depends on your current compass position",
    slug: "state-determines-capacity",
    group: "The System It Navigates",
    hook: "What you can perceive, think, feel, and do depends on your current compass position. Restore safety first, then expect capacity.",
    seoDescription: "What someone can perceive, think, feel, and do depends on their nervous system regulatory state — not their character or intelligence. State determines capacity: restore safety first, then expect capability.",
    seoKeywords: ["state determines capacity", "regulatory state", "nervous system capacity", "emotional capability", "safety first", "polyvagal theory", "window of tolerance", "TEG-Blue"],
    keyLine: "Restore safety first, then expect capacity.",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
    goDeeper: { framework: "F1", label: "Understand how the Inner Compass works" },
    modelCard: {
      learn: "See how the four-mode gradient maps what each position makes available — and what it restricts. The compass shows why the same person can be wise in one moment and reactive in the next.",
    },
    frameworkCard: {
      learn: "Explore how the nervous system's evaluation of safety directly shapes cognitive, emotional, and relational capacity — and why restoring safety must come before expecting capability.",
    },
  },
  {
    id: "C6",
    number: 6,
    title: "Why Does the Same Feeling Do Different Things?",
    name: "Same Emotion, Two Expressions",
    subtitle: "Mode position transforms what an emotion does — the feeling is the same, the compass makes the difference",
    slug: "same-emotion-two-expressions",
    group: "The System It Navigates",
    hook: "Mode position determines whether an emotion serves connection or defence. Assess mode position, not the emotion.",
    seoDescription: "The same emotion expresses differently depending on nervous system mode position — anger in Connection serves boundaries, anger in Control serves domination. Assess the mode, not just the emotion.",
    seoKeywords: ["emotional expression", "mode-dependent emotion", "anger connection vs control", "emotional context", "nervous system state", "emotional assessment", "dual expression", "TEG-Blue"],
    keyLine: "Assess mode position, not the emotion.",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
    goDeeper: { framework: "F1", label: "Understand how the Inner Compass works" },
    modelCard: {
      learn: "See how the four-mode gradient transforms every emotion — anger in Connection sets boundaries, anger in Protection attacks. The compass shows why categorising emotions as 'good' or 'bad' collapses.",
    },
    frameworkCard: {
      learn: "Explore the architecture that explains why the same biological signal produces opposite outcomes — and why assessing the mode, not the emotion, changes everything.",
    },
  },
  {
    id: "C7",
    number: 7,
    title: "When Retaliation Feels Like Self-Defence",
    name: "Emotional Distortion",
    subtitle: "Internal discomfort, without self-emotional awareness, gets reclassified as external attack",
    slug: "emotional-distortion",
    group: "What Breaks Without It",
    hook: "Internal discomfort, without SEA, gets reclassified as external attack. Retaliation feels like self-defence.",
    seoDescription: "Emotional distortion occurs when internal discomfort gets reclassified as external attack — making retaliation feel like self-defence. Without self-emotional awareness, your boundaries become their evidence of threat.",
    seoKeywords: ["emotional distortion", "projection", "perceived threat", "retaliation as self-defence", "internal discomfort", "boundary violation", "cognitive distortion", "TEG-Blue"],
    keyLine: "Your boundaries become their evidence.",
    drawsFrom: { frameworks: ["F3"], models: ["three-awareness-capacities"] },
    goDeeper: { framework: "F3", label: "Understand how Adult Cognition & False Coherence works" },
    modelCard: {
      learn: "Understand which awareness capacities are offline when distortion happens — and why sharp emotional reading without self-awareness becomes an instrument without a conscience.",
    },
    frameworkCard: {
      learn: "Explore the full mechanism — how cognition takes over when the biological return was never learned, how internal discomfort becomes misattributed as external attack, and why insight alone doesn't break the pattern.",
    },
  },
  {
    id: "C8",
    number: 8,
    title: "When the Story Feels True — But Isn't",
    name: "False Coherence",
    subtitle: "Beliefs feel true because they calm the nervous system, not because they match reality",
    slug: "false-coherence",
    group: "What Breaks Without It",
    hook: "Beliefs feel true because they calm the nervous system, not because they match reality. Safety must precede truth.",
    seoDescription: "False coherence is regulatory success at the cost of emotional truth — beliefs feel true because they calm the nervous system, not because they match reality. Understanding why people defend beliefs that cause harm.",
    seoKeywords: ["false coherence", "cognitive dissonance", "motivated reasoning", "belief persistence", "nervous system regulation", "self-deception", "emotional truth", "TEG-Blue"],
    keyLine:
      "You cannot out-think a regulatory response. You can only create conditions safe enough for the system to let truth in.",
    drawsFrom: { frameworks: ["F3"], models: ["three-awareness-capacities"] },
    goDeeper: { framework: "F3", label: "Understand how Adult Cognition & False Coherence works" },
    modelCard: {
      learn: "Understand how the three awareness capacities interact with false coherence — why the most psychologically literate people can be the most stuck, and what configuration makes the pattern invisible from inside.",
    },
    frameworkCard: {
      learn: "Explore the full cognitive replacement mechanism — how cognition takes over the regulatory function, why understanding doesn't break the loop, and why safety must precede truth.",
    },
  },
  {
    id: "C9",
    number: 9,
    title: "Why Do We Stay?",
    name: "Tolerance Thresholds",
    subtitle: "The nervous system calibrates what to endure — familiar can feel normal even when it is costly",
    slug: "tolerance-thresholds",
    group: "What Breaks Without It",
    hook: "The nervous system calibrates what to endure based on early conditions. Familiar can feel normal even when it is costly.",
    seoDescription: "Tolerance thresholds determine what the nervous system was calibrated to endure — shaped by early relational conditions. Why familiar can feel normal even when harmful, and how thresholds can shift.",
    seoKeywords: ["tolerance thresholds", "nervous system calibration", "trauma tolerance", "normalised harm", "early conditions", "attachment patterns", "boundary recognition", "TEG-Blue"],
    keyLine: "Familiar can feel 'normal' even when it is costly.",
    drawsFrom: { frameworks: ["F2"], models: ["three-awareness-capacities"] },
    goDeeper: { framework: "F2", label: "Explore what shapes tolerance thresholds" },
    modelCard: {
      learn: "Understand the specific capacity configuration that makes thresholds invisible — when Emotional Resonance is flooded and Self-Emotional Awareness is absent, the person feels the harm but cannot name it.",
    },
    frameworkCard: {
      learn: "Explore how awareness calibrates through conditions — how the adults' thresholds become the child's normal, and how sustained different conditions can shift the baseline.",
    },
  },
  {
    id: "C10",
    number: 10,
    title: "What Did the Adults Around You Carry?",
    name: "Awareness Teaches Awareness",
    subtitle: "Children calibrate to what adults embody, not what adults say",
    slug: "awareness-teaches-awareness",
    group: "How It Develops and Returns",
    hook: "The adults' awareness configuration is the child's developmental environment. Children calibrate to what adults embody, not what adults say.",
    seoDescription: "Awareness teaches awareness: children calibrate their emotional capacities to what adults embody, not what adults say. The adults' awareness configuration IS the child's developmental environment.",
    seoKeywords: ["awareness teaches awareness", "emotional development", "child development", "attachment theory", "co-regulation", "intergenerational patterns", "developmental environment", "TEG-Blue"],
    keyLine: "Love does not override what the nervous system embodies.",
    drawsFrom: { frameworks: ["F2"], models: ["three-awareness-capacities"] },
    goDeeper: { framework: "F2", label: "Explore how awareness transmits through relationship" },
    modelCard: {
      learn: "See how all three awareness capacities develop — or don't — through conditions. What the adult can do with their own emotions creates the environment the child's system learns from.",
    },
    frameworkCard: {
      learn: "Explore the full transmission mechanism — how the adults' capacity configuration becomes the child's developmental environment, and why the same mechanism that calibrated us then can recalibrate us now.",
    },
  },
  {
    id: "C11",
    number: 11,
    title: "How Do We Come Back?",
    name: "Regulation — The Return Mechanism",
    subtitle: "The body moves into threat and comes back — health is the full cycle",
    slug: "regulation-the-return-mechanism",
    group: "How It Develops and Returns",
    hook: "The body moves into threat and comes back. Health is the full cycle. Regulation is the mechanism of coming back.",
    seoDescription: "Emotional regulation is the biological return mechanism — the capacity to move through threat states and come back to Connection. Health is not avoiding threat but completing the full cycle.",
    seoKeywords: ["emotional regulation", "return mechanism", "nervous system regulation", "self-regulation", "co-regulation", "regulatory capacity", "emotional recovery", "TEG-Blue"],
    keyLine: "Regulation is the mechanism of coming back.",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
    goDeeper: { framework: "F1", label: "Understand how the Inner Compass works" },
    modelCard: {
      learn: "See where regulation lives on the compass — the return from Protection, Control, or Domination back to Connection. The model shows why health is the full cycle, not a fixed position.",
    },
    frameworkCard: {
      learn: "Explore the biological architecture of the return — how the body completes the cycle, why the return must be experienced to be learned, and why conditions precede capacity.",
    },
  },
  {
    id: "C12",
    number: 12,
    title: "What Are You Reading For?",
    name: "Reading Emotions",
    subtitle: "Everyone reads the room — the question is what early conditions trained the reading for",
    slug: "reading-emotions",
    group: "SEA's Sibling Capacities",
    hook: "Before we could speak, we were reading emotions. The capacity to track what others feel is the first awareness channel. The question is not whether we read — it is what we learned to read for.",
    seoDescription: "Reading Emotions is the outward-facing awareness capacity — the ability to track what others feel through facial expression, tone, posture, and timing. Everyone reads. The question is what early conditions trained the reading for.",
    seoKeywords: ["reading emotions", "emotional awareness", "nonverbal communication", "facial expression reading", "empathy", "social cognition", "awareness capacity", "TEG-Blue"],
    keyLine:
      "We were all born reading. The question is what we learned to read for.",
    drawsFrom: {
      frameworks: ["F2"],
      models: ["three-awareness-capacities"],
    },
    goDeeper: { framework: "F2", label: "Explore the Awareness Teaches Awareness framework" },
    modelCard: {
      learn: "See where Reading Emotions sits alongside Emotional Resonance and Self-Emotional Awareness — and how the three capacities form a complete system, each shaped by conditions.",
    },
    frameworkCard: {
      learn: "Explore how awareness develops through relationship — how the reading calibrates to safety or threat depending on the adults' configuration, and what it takes for the reading to recalibrate.",
    },
  },
  {
    id: "C13",
    number: 13,
    title: "What Happens When Someone's Pain Lands in Your Body?",
    name: "Emotional Resonance",
    subtitle: "Resonance is not reading what someone feels — it is being moved by it",
    slug: "emotional-resonance",
    group: "SEA's Sibling Capacities",
    hook: "Resonance is not the same as reading emotions. Reading tracks what someone feels. Resonance is being moved by it. When someone we love is in pain and we feel heaviness in our chest — that is resonance.",
    seoDescription: "Emotional Resonance is the capacity to feel with another person — not just tracking what they feel, but being moved by it. A biological capacity shaped by relational conditions, distinct from empathy and emotional contagion.",
    seoKeywords: ["emotional resonance", "feeling with others", "empathy vs resonance", "emotional contagion", "co-regulation", "mirror neurons", "relational capacity", "TEG-Blue"],
    keyLine:
      "Resonance is not a gift or a flaw. It is a capacity — shaped by what was around us, and capable of finding its way back.",
    drawsFrom: {
      frameworks: ["F2"],
      models: ["three-awareness-capacities"],
    },
    goDeeper: { framework: "F2", label: "Explore the Awareness Teaches Awareness framework" },
    modelCard: {
      learn: "See how Emotional Resonance connects to Reading Emotions and Self-Emotional Awareness — why 'being an empath' is not a personality type but a specific capacity configuration, and what determines whether resonance floods or sustains.",
    },
    frameworkCard: {
      learn: "Explore the developmental mechanism that shapes resonance — how it overdevelops, shuts down, or becomes confused depending on the adults' configuration, and how it can recalibrate through conditions.",
    },
  },
];

// ─── HELPER FUNCTIONS ───────────────────────────────────────

export function getConcept(id) {
  return CONCEPTS.find((c) => c.id === id) || null;
}

export function getConceptBySlug(slug) {
  return CONCEPTS.find((c) => c.slug === slug) || null;
}

export function getNextConcept(id) {
  const idx = CONCEPTS.findIndex((c) => c.id === id);
  return idx >= 0 && idx < CONCEPTS.length - 1 ? CONCEPTS[idx + 1] : null;
}

export function getPrevConcept(id) {
  const idx = CONCEPTS.findIndex((c) => c.id === id);
  return idx > 0 ? CONCEPTS[idx - 1] : null;
}

export function getConceptsByGroup(groupKey) {
  return CONCEPTS.filter((c) => c.group === groupKey);
}
