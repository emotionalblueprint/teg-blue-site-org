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
