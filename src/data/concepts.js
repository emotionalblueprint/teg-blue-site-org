/**
 * TEG-Blue Foundational Concepts Data — Single Source of Truth
 *
 * All 10 foundational concepts with metadata, hooks, key lines,
 * and source mappings. Concept pages and the concepts hub import
 * from this file.
 */

export const CONCEPT_GROUPS = [
  {
    key: "The Instrument",
    concepts: ["C1", "C2", "C3", "C4", "C5"],
    description:
      "The first five concepts establish the instrument — the nervous system's signalling language, the question it answers, the compass that tracks its orientation, the way state shapes capacity, and the return mechanism that keeps the system moving.",
  },
  {
    key: "Human Consequences",
    concepts: ["C6", "C7", "C8", "C9", "C10"],
    description:
      "The second five establish the human consequences — what happens when the same emotion arrives in different states, what happens when internal discomfort cannot be located as one's own, what happens when cognition replaces emotional truth with narrative stability, how awareness transmits through relationship, and what determines how much a person can recognise as harmful.",
  },
];

export const CONCEPTS = [
  {
    id: "C1",
    number: 1,
    name: "Emotions as Biological Information",
    subtitle: "The Nervous System's Signalling Language",
    slug: "emotions-as-biological-information",
    group: "The Instrument",
    hook: "Emotions are the nervous system's signalling language — the body's first language. Interpret, do not suppress.",
    keyLine:
      "The question is not 'how do I manage this emotion?' but 'what is this signal telling me?'",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
  },
  {
    id: "C2",
    number: 2,
    name: "The Safety Orientation Question",
    subtitle: "One Question Generates All Emotional Diversity",
    slug: "the-safety-orientation-question",
    group: "The Instrument",
    hook: "One question generates all emotional diversity: 'Is there enough safety to engage, or is protection needed?'",
    keyLine: "Every emotion is a variation on: safe enough, or not yet.",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
  },
  {
    id: "C3",
    number: 3,
    name: "The Inner Compass",
    subtitle: "A Moving Needle",
    slug: "the-inner-compass",
    group: "The Instrument",
    hook: "The nervous system orients between Connection and threat modes. Health is not a position — it is the needle moving freely.",
    keyLine:
      "Health is not staying in Connection permanently — health is the ability to move through the gradient and come back.",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
  },
  {
    id: "C4",
    number: 4,
    name: "State Determines Capacity",
    subtitle: "What You Can Do Depends on Where You Are",
    slug: "state-determines-capacity",
    group: "The Instrument",
    hook: "What you can perceive, think, feel, and do depends on your current compass position. Restore safety first, then expect capacity.",
    keyLine: "Restore safety first, then expect capacity.",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
  },
  {
    id: "C5",
    number: 5,
    name: "Regulation — The Return Mechanism",
    subtitle: "The Return Journey",
    slug: "regulation-the-return-mechanism",
    group: "The Instrument",
    hook: "The body moves into threat and comes back. Health is the full cycle. Regulation is the mechanism of coming back.",
    keyLine: "Regulation is the mechanism of coming back.",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
  },
  {
    id: "C6",
    number: 6,
    name: "Same Emotion, Two Expressions",
    subtitle: "Mode Position Determines What an Emotion Does",
    slug: "same-emotion-two-expressions",
    group: "Human Consequences",
    hook: "Mode position determines whether an emotion serves connection or defence. Assess mode position, not the emotion.",
    keyLine: "Assess mode position, not the emotion.",
    drawsFrom: { frameworks: ["F1"], models: ["inner-compass"] },
  },
  {
    id: "C7",
    number: 7,
    name: "Emotional Distortion",
    subtitle: "How Internal Discomfort Becomes Perceived External Threat",
    slug: "emotional-distortion",
    group: "Human Consequences",
    hook: "Internal discomfort, without SEA, gets reclassified as external attack. Retaliation feels like self-defence.",
    keyLine: "Your boundaries become their evidence.",
    drawsFrom: { frameworks: ["F3"], models: ["three-awareness-capacities"] },
  },
  {
    id: "C8",
    number: 8,
    name: "False Coherence",
    subtitle: "Regulatory Success at the Cost of Emotional Truth",
    slug: "false-coherence",
    group: "Human Consequences",
    hook: "Beliefs feel true because they calm the nervous system, not because they match reality. Safety must precede truth.",
    keyLine:
      "You cannot out-think a regulatory response. You can only create conditions safe enough for the system to let truth in.",
    drawsFrom: { frameworks: ["F3"], models: ["three-awareness-capacities"] },
  },
  {
    id: "C9",
    number: 9,
    name: "Awareness Teaches Awareness",
    subtitle: "How the Instrument Gets Calibrated",
    slug: "awareness-teaches-awareness",
    group: "Human Consequences",
    hook: "The adults' awareness configuration is the child's developmental environment. Children calibrate to what adults embody, not what adults say.",
    keyLine: "Love does not override what the nervous system embodies.",
    drawsFrom: { frameworks: ["F2"], models: ["three-awareness-capacities"] },
  },
  {
    id: "C10",
    number: 10,
    name: "Tolerance Thresholds",
    subtitle: "What the Nervous System Was Calibrated to Endure",
    slug: "tolerance-thresholds",
    group: "Human Consequences",
    hook: "The nervous system calibrates what to endure based on early conditions. Familiar can feel normal even when it is costly.",
    keyLine: "Familiar can feel 'normal' even when it is costly.",
    drawsFrom: { frameworks: ["F2"], models: ["three-awareness-capacities"] },
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
