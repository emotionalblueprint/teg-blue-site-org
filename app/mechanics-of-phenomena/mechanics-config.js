/**
 * Mechanics of Phenomena — Section Configuration
 *
 * Sidebar data, reading column styles, and Go Deeper URL mappings.
 * Update this file when adding new pieces.
 */

import { TEXT, FONT, EDITORIAL, hexToRgba } from "@/src/styles/tokens";

// ─── SIDEBAR DATA ────────────────────────────────────────

export const SERIES = [
  {
    slug: "why-humans-are-so-frustrating",
    name: "Why Humans Are So Frustrating",
    description:
      "Patterns behind behaviors that are hard to understand \u2014 the ones experts keep encountering and can\u2019t fully resolve with their own tools.",
    pieces: [
      {
        number: 2,
        slug: "02-why-people-change-by-context",
        title: "Why People Are Completely Different Depending on Who\u2019s Watching",
        featured: true,
      },
      {
        number: 1,
        slug: "01-why-evidence-fails",
        title: "Why Evidence Doesn\u2019t Work",
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
      },
    ],
  },
];

// ─── GO DEEPER URL MAPPING ───────────────────────────────

export const GO_DEEPER_URLS = {
  "m1": "/model/m1-inner-compass",
  "m2": "/model/m2-three-awareness-capacities",
  "f1": "/framework/f1-emotional-gradient",
  "f2": "/framework/f2-awareness-calibration",
  "f3": "/framework/f3-false-coherence",
  "f4": "/framework/f4-rules-regulate",
  "f5": "/framework/f5-worth-hierarchies",
  "f6": "/framework/f6-bias-regulates",
  "f8": "/framework/f8-repairing-awareness",
};

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
    borderTop: "1px solid var(--border-default)",
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
