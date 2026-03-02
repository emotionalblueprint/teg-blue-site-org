/**
 * TEG-Blue Foundational Concepts Data — Single Source of Truth
 *
 * All 13 foundational concepts with metadata, hooks, key lines,
 * and source mappings. Concept pages and the concepts hub import
 * from this file.
 */

// ─── GROUP COLORS ─────────────────────────────────────────
// Blue tones for each concept group
export const GROUP_COLORS = {
  "How the System Works": "#5AA8F0",
  "The Three Awareness Capacities": "#4E7EFF",
  "What Happens When It Breaks": "#3B4CF0",
};

// ─── CONCEPT COLORS ───────────────────────────────────────
// 13 bright blues: sky → azure → electric → indigo
export const CONCEPT_COLORS = [
  "#7EC8F0", // C1
  "#6BB8F0", // C2
  "#5AA8F0", // C3
  "#4A98F0", // C4
  "#3B88F0", // C5
  "#2E78F0", // C6
  "#4E7EFF", // C7
  "#3C6EFF", // C8
  "#5E8EFF", // C9
  "#2A5CFF", // C10
  "#3B4CF0", // C11
  "#5060FF", // C12
  "#6878FF", // C13
];

export const CONCEPT_GROUPS = [
  {
    key: "How the System Works",
    concepts: ["C1", "C2", "C3", "C4", "C5", "C6"],
    description:
      "The first six concepts establish the instrument — the nervous system's signalling language, the question it answers, the compass that tracks its orientation, the way state shapes capacity, the return mechanism that keeps the system moving, and how the same emotion transforms depending on where the compass is pointing.",
  },
  {
    key: "The Three Awareness Capacities",
    concepts: ["C7", "C8", "C9"],
    description:
      "The next three introduce the three awareness capacities — what we read in others, what we feel with others, and what we know as our own. These are not personality traits. They are biological capacities, present at birth, shaped by conditions.",
  },
  {
    key: "What Happens When It Breaks",
    concepts: ["C10", "C11", "C12", "C13"],
    description:
      "The final four establish the human consequences — what happens when internal discomfort cannot be located as one's own, what happens when cognition replaces emotional truth with narrative stability, how awareness transmits through relationship, and what determines how much a person can recognise as harmful.",
  },
];

export const CONCEPTS = [
  {
    id: "C1",
    number: 1,
    name: "Emotions as Biological Information",
    subtitle: "The Nervous System's Signalling Language",
    slug: "emotions-as-biological-information",
    group: "How the System Works",
    hook: "Emotions are the nervous system's signalling language — the body's first language. Interpret, do not suppress.",
    seoDescription: "Emotions are not irrational impulses — they are the nervous system's signalling language, carrying information about safety and threat. TEG-Blue's foundational reframe: interpret emotional signals, don't suppress them.",
    seoKeywords: ["emotions as biological information", "nervous system signalling", "emotional signals", "safety threat detection", "neuroception", "polyvagal theory", "emotional intelligence", "TEG-Blue"],
    keyLine:
      "The question is not 'how do I manage this emotion?' but 'what is this signal telling me?'",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
    goDeeper: { framework: "F1", label: "Understand how the Inner Compass works" },
  },
  {
    id: "C2",
    number: 2,
    name: "The Safety Orientation Question",
    subtitle: "One Question Generates All Emotional Diversity",
    slug: "the-safety-orientation-question",
    group: "How the System Works",
    hook: "One question generates all emotional diversity: 'Is there enough safety to engage, or is protection needed?'",
    seoDescription: "Every emotion is a variation on one question the nervous system asks: 'Is there enough safety to engage, or is protection needed?' This single orientation generates the full spectrum of emotional experience.",
    seoKeywords: ["safety orientation", "emotional diversity", "nervous system safety", "threat detection", "emotional regulation", "neuroception", "safety vs threat", "TEG-Blue"],
    keyLine: "Every emotion is a variation on: safe enough, or not yet.",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
    goDeeper: { framework: "F1", label: "Understand how the Inner Compass works" },
  },
  {
    id: "C3",
    number: 3,
    name: "The Inner Compass",
    subtitle: "A Moving Needle",
    slug: "the-inner-compass",
    group: "How the System Works",
    hook: "The nervous system orients between Connection and threat modes. Health is not a position — it is the needle moving freely.",
    seoDescription: "The Inner Compass is TEG-Blue's core instrument — a moving needle that tracks where the nervous system sits on the four-mode gradient (Connection, Protection, Control, Domination). Health is mobility, not position.",
    seoKeywords: ["inner compass", "four-mode gradient", "nervous system regulation", "connection protection control domination", "emotional health", "regulatory mobility", "TEG-Blue model"],
    keyLine:
      "Health is not staying in Connection permanently — health is the ability to move through the gradient and come back.",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
    goDeeper: { framework: "F1", label: "Understand how the Inner Compass works" },
  },
  {
    id: "C4",
    number: 4,
    name: "State Determines Capacity",
    subtitle: "What You Can Do Depends on Where You Are",
    slug: "state-determines-capacity",
    group: "How the System Works",
    hook: "What you can perceive, think, feel, and do depends on your current compass position. Restore safety first, then expect capacity.",
    seoDescription: "What someone can perceive, think, feel, and do depends on their nervous system regulatory state — not their character or intelligence. State determines capacity: restore safety first, then expect capability.",
    seoKeywords: ["state determines capacity", "regulatory state", "nervous system capacity", "emotional capability", "safety first", "polyvagal theory", "window of tolerance", "TEG-Blue"],
    keyLine: "Restore safety first, then expect capacity.",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
    goDeeper: { framework: "F1", label: "Understand how the Inner Compass works" },
  },
  {
    id: "C5",
    number: 5,
    name: "Regulation — The Return Mechanism",
    subtitle: "The Return Journey",
    slug: "regulation-the-return-mechanism",
    group: "How the System Works",
    hook: "The body moves into threat and comes back. Health is the full cycle. Regulation is the mechanism of coming back.",
    seoDescription: "Emotional regulation is the biological return mechanism — the capacity to move through threat states and come back to Connection. Health is not avoiding threat but completing the full cycle.",
    seoKeywords: ["emotional regulation", "return mechanism", "nervous system regulation", "self-regulation", "co-regulation", "regulatory capacity", "emotional recovery", "TEG-Blue"],
    keyLine: "Regulation is the mechanism of coming back.",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
    goDeeper: { framework: "F1", label: "Understand how the Inner Compass works" },
  },
  {
    id: "C6",
    number: 6,
    name: "Same Emotion, Two Expressions",
    subtitle: "Mode Position Determines What an Emotion Does",
    slug: "same-emotion-two-expressions",
    group: "How the System Works",
    hook: "Mode position determines whether an emotion serves connection or defence. Assess mode position, not the emotion.",
    seoDescription: "The same emotion expresses differently depending on nervous system mode position — anger in Connection serves boundaries, anger in Control serves domination. Assess the mode, not just the emotion.",
    seoKeywords: ["emotional expression", "mode-dependent emotion", "anger connection vs control", "emotional context", "nervous system state", "emotional assessment", "dual expression", "TEG-Blue"],
    keyLine: "Assess mode position, not the emotion.",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
    goDeeper: { framework: "F1", label: "Understand how the Inner Compass works" },
  },
  {
    id: "C7",
    number: 7,
    name: "Reading Emotions",
    subtitle: "The Outward-Facing Channel",
    slug: "reading-emotions",
    group: "The Three Awareness Capacities",
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
  },
  {
    id: "C8",
    number: 8,
    name: "Emotional Resonance",
    subtitle: "The Capacity to Feel With",
    slug: "emotional-resonance",
    group: "The Three Awareness Capacities",
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
  },
  {
    id: "C9",
    number: 9,
    name: "Self-Emotional Awareness",
    subtitle: "The Capacity to Know What Is Ours",
    slug: "self-emotional-awareness",
    group: "The Three Awareness Capacities",
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
  },
  {
    id: "C10",
    number: 10,
    name: "Emotional Distortion",
    subtitle: "How Internal Discomfort Becomes Perceived External Threat",
    slug: "emotional-distortion",
    group: "What Happens When It Breaks",
    hook: "Internal discomfort, without SEA, gets reclassified as external attack. Retaliation feels like self-defence.",
    seoDescription: "Emotional distortion occurs when internal discomfort gets reclassified as external attack — making retaliation feel like self-defence. Without self-emotional awareness, your boundaries become their evidence of threat.",
    seoKeywords: ["emotional distortion", "projection", "perceived threat", "retaliation as self-defence", "internal discomfort", "boundary violation", "cognitive distortion", "TEG-Blue"],
    keyLine: "Your boundaries become their evidence.",
    drawsFrom: { frameworks: ["F3"], models: ["three-awareness-capacities"] },
    goDeeper: { framework: "F3", label: "Understand how Adult Cognition & False Coherence works" },
  },
  {
    id: "C11",
    number: 11,
    name: "False Coherence",
    subtitle: "Regulatory Success at the Cost of Emotional Truth",
    slug: "false-coherence",
    group: "What Happens When It Breaks",
    hook: "Beliefs feel true because they calm the nervous system, not because they match reality. Safety must precede truth.",
    seoDescription: "False coherence is regulatory success at the cost of emotional truth — beliefs feel true because they calm the nervous system, not because they match reality. Understanding why people defend beliefs that cause harm.",
    seoKeywords: ["false coherence", "cognitive dissonance", "motivated reasoning", "belief persistence", "nervous system regulation", "self-deception", "emotional truth", "TEG-Blue"],
    keyLine:
      "You cannot out-think a regulatory response. You can only create conditions safe enough for the system to let truth in.",
    drawsFrom: { frameworks: ["F3"], models: ["three-awareness-capacities"] },
    goDeeper: { framework: "F3", label: "Understand how Adult Cognition & False Coherence works" },
  },
  {
    id: "C12",
    number: 12,
    name: "Awareness Teaches Awareness",
    subtitle: "How the Instrument Gets Calibrated",
    slug: "awareness-teaches-awareness",
    group: "What Happens When It Breaks",
    hook: "The adults' awareness configuration is the child's developmental environment. Children calibrate to what adults embody, not what adults say.",
    seoDescription: "Awareness teaches awareness: children calibrate their emotional capacities to what adults embody, not what adults say. The adults' awareness configuration IS the child's developmental environment.",
    seoKeywords: ["awareness teaches awareness", "emotional development", "child development", "attachment theory", "co-regulation", "intergenerational patterns", "developmental environment", "TEG-Blue"],
    keyLine: "Love does not override what the nervous system embodies.",
    drawsFrom: { frameworks: ["F2"], models: ["three-awareness-capacities"] },
    goDeeper: { framework: "F2", label: "Explore how awareness transmits through relationship" },
  },
  {
    id: "C13",
    number: 13,
    name: "Tolerance Thresholds",
    subtitle: "What the Nervous System Was Calibrated to Endure",
    slug: "tolerance-thresholds",
    group: "What Happens When It Breaks",
    hook: "The nervous system calibrates what to endure based on early conditions. Familiar can feel normal even when it is costly.",
    seoDescription: "Tolerance thresholds determine what the nervous system was calibrated to endure — shaped by early relational conditions. Why familiar can feel normal even when harmful, and how thresholds can shift.",
    seoKeywords: ["tolerance thresholds", "nervous system calibration", "trauma tolerance", "normalised harm", "early conditions", "attachment patterns", "boundary recognition", "TEG-Blue"],
    keyLine: "Familiar can feel 'normal' even when it is costly.",
    drawsFrom: { frameworks: ["F2"], models: ["three-awareness-capacities"] },
    goDeeper: { framework: "F2", label: "Explore what shapes tolerance thresholds" },
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
