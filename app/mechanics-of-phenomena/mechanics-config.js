/**
 * Mechanics of Phenomena — Section Configuration
 *
 * Sidebar data, reading column styles, and Go Deeper URL mappings.
 * Update this file when adding new pieces.
 */

import { TEXT, FONT, BORDER, EDITORIAL } from "@/src/styles/tokens";

// ─── SIDEBAR DATA ────────────────────────────────────────

export const SERIES = [
  {
    slug: "why-humans-are-so-frustrating",
    name: "Why Humans Are So Frustrating",
    description:
      "Patterns behind behaviors that are hard to understand \u2014 the ones experts keep encountering and can\u2019t fully resolve with their own tools.",
    pieces: [
      {
        number: 1,
        slug: "01-why-humans-are-so-frustrating",
        title: "Why Are Humans So Frustrating?",
        subtitle: "A diagnostic for everyone who has ever watched a smart person do something baffling \u2014 including themselves",
        metaDescription: "Why the gap between what people know and what they do comes from a split architecture \u2014 cognitive system vs regulatory system. A diagnostic from TEG-Blue.",
        connection: "M1 Operating Modes / F3 Cognitive Replacement / F6 Bias as Protection / F2 Developmental Failure of Regulation / M2 Signal Function",
        readingTime: 14,
        featured: true,
        sections: [
          { id: "what-frustrating-means", label: "What do we actually mean?" },
          { id: "smart-bad-decisions", label: "Smart people, bad decisions" },
          { id: "same-mistake", label: "Same mistake, clearly seen" },
          { id: "believe-false", label: "Obviously false beliefs" },
          { id: "stay-bad-situations", label: "Staying in bad situations" },
          { id: "know-not-do", label: "Knowing but not doing" },
          { id: "bridges-the-gap", label: "Bridging the gap" },
          { id: "the-answer", label: "The answer" },
          { id: "framework-behind", label: "Framework behind these answers" },
        ],
      },
      {
        number: 2,
        slug: "01-why-evidence-fails",
        title: "Why Evidence Doesn\u2019t Work \u2014 And What Actually Does",
        subtitle: "A diagnostic for the frustrated, the rigorous, and the quietly losing hope",
        metaDescription: "Why presenting evidence to someone in a threat-management mode produces defensiveness, not updating. A diagnostic for the frustrated and the rigorous.",
        connection: "F3 Cognitive Replacement / M1 Operating Modes Under Pressure",
        readingTime: 12,
        sections: [
          { id: "why-doesnt-evidence-work", label: "Why doesn\u2019t evidence work?" },
          { id: "intelligence-education", label: "Intelligence or education?" },
          { id: "doing-this-consciously", label: "Doing this consciously?" },
          { id: "more-entrenched", label: "More entrenched when pushed" },
          { id: "pattern-of-belief", label: "Pattern of belief" },
          { id: "what-actually-works", label: "What actually works?" },
          { id: "should-i-keep-trying", label: "Should I keep trying?" },
          { id: "framework-behind", label: "Framework behind these answers" },
        ],
      },
      {
        number: 3,
        slug: "02-why-people-change-by-context",
        title: "Why People Are Completely Different Depending on Who\u2019s Watching",
        subtitle: "A diagnostic for the bewildered, the gaslit, and the ones who keep being told they must be exaggerating",
        metaDescription: "How regulatory systems produce context-dependent behavior \u2014 why the same person can be genuinely kind at work and genuinely harmful at home. A diagnostic from TEG-Blue.",
        connection: "M1 Operating Modes / F4 Collective Rules / F5 Worth Hierarchies",
        readingTime: 12,
        sections: [
          { id: "kind-and-terrible", label: "Genuinely kind, genuinely terrible" },
          { id: "one-version-fake", label: "Is one version fake?" },
          { id: "worst-in-closest", label: "Worst in closest relationships" },
          { id: "not-knowing", label: "Not knowing how they behave" },
          { id: "just-about-power", label: "Is this just about power?" },
          { id: "hard-to-convince", label: "Hard to convince" },
          { id: "can-this-change", label: "Can this change?" },
          { id: "framework-behind", label: "Framework behind these answers" },
        ],
      },
    ],
  },
  {
    slug: "proofs-by-nature",
    name: "Proofs by Nature",
    description:
      "Observable phenomena from the natural world that show TEG-Blue principles already running \u2014 in different hardware, long before we arrived to name them.",
    pieces: [
      {
        number: 1,
        slug: "01-octopus-chromatophores",
        title: "Octopuses Change Color With Their Emotions",
        subtitle: "The signal function of emotional states \u2014 running in completely different hardware",
        metaDescription: "The octopus chromatophore system as independent evidence that emotions function as information \u2014 not decoration. A Proof by Nature from TEG-Blue.",
        connection: "F1 Emotional Gradient / Signal function",
        readingTime: 3,
        sections: [
          { id: "teg-blue-connection", label: "TEG-Blue connection" },
        ],
      },
    ],
  },
];

// ─── FRAMEWORK & MODEL URL LOOKUP ───────────────────────

export const FRAMEWORK_URLS = {
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
  M1: "/model/m1-inner-compass",
  M2: "/model/m2-three-awareness-capacities",
  M3: "/model/m3-the-open-cycle",
};

/**
 * Parse a connection string like "M1 Operating Modes / F3 Cognitive Replacement"
 * into an array of { code, label, href } objects.
 */
export function parseConnection(connection) {
  if (!connection) return [];
  return connection.split(" / ").map((segment) => {
    const match = segment.match(/^([FM]\d{1,2})\b\s*(.*)/);
    if (!match) return { code: null, label: segment, href: null };
    const code = match[1];
    return { code, label: segment, href: FRAMEWORK_URLS[code] || null };
  });
}

// ─── PIECE LOOKUP ───────────────────────────────────────

/** Find a piece and its parent series by piece slug. */
export function findPiece(slug) {
  for (const series of SERIES) {
    const piece = series.pieces.find((p) => p.slug === slug);
    if (piece) return { piece, series };
  }
  return null;
}

// ─── READING COLUMN STYLES ──────────────────────────────

export const READING = {
  paragraph: {
    fontSize: 15,
    lineHeight: 1.8,
    color: TEXT.secondary,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 600,
    color: TEXT.primary,
    marginTop: 48,
    marginBottom: 16,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
  },
  sectionNumber: {
    fontWeight: 400,
    color: TEXT.muted,
    fontSize: 18,
    marginRight: 8,
  },
  seriesTag: {
    fontFamily: FONT.mono,
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.04em",
    color: EDITORIAL.accent,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    fontStyle: "italic",
    color: TEXT.muted,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: TEXT.primary,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    marginBottom: 8,
  },
  hr: {
    border: "none",
    borderTop: `1px solid ${BORDER.default}`,
    margin: "32px 0",
  },
  finePrint: {
    fontSize: 13,
    fontStyle: "italic",
    color: TEXT.muted,
    lineHeight: 1.7,
  },
  seriesFooter: {
    fontSize: 12,
    fontStyle: "italic",
    color: TEXT.hint,
    marginTop: 4,
  },
};
