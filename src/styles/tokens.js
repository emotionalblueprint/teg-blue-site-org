/**
 * TEG-Blue Research Platform — Design Tokens
 * Blue Spectrum · System Theme · Dark Default
 *
 * Single source of truth for all visual decisions.
 * Import this everywhere. Never hardcode colors.
 *
 * BG, TEXT, and BORDER reference CSS custom properties
 * defined in globals.css — they auto-switch with theme.
 */

// ─── BACKGROUNDS ─────────────────────────────────────

export const BG = {
  page:    "var(--bg-page)",
  primary: "var(--bg-primary)",
  card:    "var(--bg-card)",
  surface: "var(--bg-surface)",
  inset:   "var(--bg-inset)",
};

// ─── TEXT ────────────────────────────────────────────

export const TEXT = {
  primary:   "var(--text-primary)",
  secondary: "var(--text-secondary)",
  muted:     "var(--text-muted)",
  hint:      "var(--text-hint)",
  micro:     "var(--text-micro)",
};

// ─── BORDERS ─────────────────────────────────────────

export const BORDER = {
  default:    "var(--border-default)",
  hover:      "var(--border-hover)",
  active:     "var(--border-active)",
  brightBlue: "#4B8FFF",   // emphasis — callouts, focus rings
  glowBlue:   "#93CFFF",   // high-visibility accent, sky spectrum
  accentBlue: "#5BADFF",   // mid-tone bright accent, azure spectrum
};

// ─── THE BLUE SPECTRUM ───────────────────────────────
// Six flat tones. No gradients. Each maps to a content type.

export const SPECTRUM = {
  sky:    "#93CFFF",   // Glossary — light, accessible
  azure:  "#5BADFF",   // Open Data — clear, transparent
  blue:   "#4B8FFF",   // Publications — core, authoritative
  cobalt: "#4472EE",   // Frameworks (F1-F12) — structured
  indigo: "#5B62D4",   // Foundations & Theory — deep
  slate:  "#7B8BB0",   // Methodology & Meta — neutral
};

// ─── CONTENT TYPE → COLOR MAPPING ────────────────────

export const CONTENT_TYPE_COLORS = {
  publication:  SPECTRUM.blue,
  "working-paper": SPECTRUM.blue,
  theory:       SPECTRUM.indigo,
  glossary:     SPECTRUM.sky,
  framework:    SPECTRUM.cobalt,
  methodology:  SPECTRUM.slate,
  opendata:     SPECTRUM.azure,
  collaboration: SPECTRUM.azure,
  citation:     SPECTRUM.slate,
  reframe:      SPECTRUM.slate,
};

// ─── CONTENT TYPE LABELS ─────────────────────────────

export const CONTENT_TYPE_LABELS = {
  publication:   "Publication",
  "working-paper": "Working Paper",
  theory:        "Theory",
  glossary:      "Glossary",
  framework:     "Framework",
  methodology:   "Methodology",
  opendata:      "Open Data",
  collaboration: "Collaborate",
  citation:      "Citation",
  reframe:       "Reframe",
};

// ─── TYPOGRAPHY ──────────────────────────────────────

export const FONT = {
  display: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono:    "'JetBrains Mono', 'SF Mono', 'Consolas', monospace",
};

export const TYPE_SCALE = {
  pageTitle:       { size: 28, weight: 700, tracking: "-0.02em", lineHeight: 1.2 },
  sectionHead:     { size: 18, weight: 600, tracking: "-0.01em", lineHeight: 1.2, color: "var(--text-primary)" },
  expandableTitle: { size: 15, weight: 600, tracking: "normal",  lineHeight: 1.4, color: "rgba(168, 180, 200, 0.75)" },
  body:            { size: 15, weight: 400, tracking: "normal",  lineHeight: 1.75 },
  summary:         { size: 13, weight: 400, tracking: "normal",  lineHeight: 1.72 },
  doi:             { size: 12, weight: 400, tracking: "0.01em",  lineHeight: 1.4, font: "mono" },
  tagLabel:        { size: 10, weight: 600, tracking: "0.06em",  lineHeight: 1.3, font: "mono" },
  connectionType:  { size: 10, weight: 500, tracking: "0.04em",  lineHeight: 1.3, font: "mono" },
  tagMicro:        { size: 8,   weight: 600, tracking: "0.16em", lineHeight: 1.3, font: "mono" },
  chartLabel:      { size: 7.5, weight: 400, tracking: "0.12em", lineHeight: 1.3, font: "mono" },
  micro:           { size: 8.5, weight: 400, tracking: "0.12em", lineHeight: 1.3, font: "mono" },
};

// ─── SPACING ─────────────────────────────────────────

export const SPACING = {
  containerMax: 1100,
  containerPadding: { desktop: "0 24px", mobile: "0 16px" },
  // Responsive side padding — use in inline styles (no media queries needed)
  pagePadding: "clamp(16px, 4vw, 24px)",
  sectionGap: { desktop: 80, mobile: 48 },
  contentGap: { desktop: 32, mobile: 24 },
  cardPadding: { desktop: 24, mobile: 16 },
  gridGap: 12,
  expandableGap: 2,
};

// ─── BORDER RADIUS ───────────────────────────────────

export const RADIUS = {
  sm:   6,    // Tags, small elements
  md:   8,    // Cards, connection cards
  lg:   12,   // Panels, content blocks
  xl:   16,   // Large panels, page cards
};

// ─── TRANSITIONS ─────────────────────────────────────

export const TRANSITION = {
  fast:   "150ms ease",
  normal: "200ms ease",
  slow:   "300ms ease",
};

// ─── OPACITY SCALE (for spectrum colors) ─────────────

export const OPACITY = {
  tint:       0.02,   // Page-level tint
  cardBg:     0.07,   // Card background
  badgeBg:    0.12,   // Badge/tag background
  borderSoft: 0.15,   // Subtle border
  border:     0.22,   // Default border
  borderHover: 0.35,  // Hover border
  borderActive: 0.45, // Active/expanded border
};

// ─── PATTERN COLORS (Four-Mode Gradient — monochromatic blue) ───

export const PATTERN = {
  A: { primary: '#93CFFF', bg: 'rgba(147,207,255,0.08)', border: 'rgba(147,207,255,0.25)' },
  B: { primary: '#5BADFF', bg: 'rgba(91,173,255,0.08)',  border: 'rgba(91,173,255,0.25)' },
  C: { primary: '#346AEC', bg: 'rgba(52,106,236,0.08)',  border: 'rgba(52,106,236,0.25)' },
  D: { primary: '#2563eb', bg: 'rgba(37,99,235,0.08)',   border: 'rgba(37,99,235,0.25)' },
};

export const PATTERN_GRADIENT = 'linear-gradient(90deg, #93CFFF, #5BADFF, #346AEC, #2563eb)';

// ─── RESEARCHER ACCENT (legacy — used across 36+ files) ────
export const RESEARCHER = {
  accent: '#2563eb',
  accentLight: '#3b82f6',
  accentLighter: '#60a5fa',
};

// ─── THREE AWARENESS CAPACITIES (cross-site canonical — matches .com) ───

export const AWARENESS = {
  RE:  '#a080ff',   // violet — Reading Emotions
  ER:  '#22d3ee',   // cyan — Emotional Resonance
  SEA: '#a0e85a',   // green — Self-Emotional Awareness
};

// ─── STATUS COLORS ──────────────────────────────────────

export const STATUS = {
  draft:    '#f59e0b',      // amber
  published: SPECTRUM.blue,
  reviewed: '#10b981',      // emerald
};

// ─── MODE ACCENT COLORS (surgical signal colors — matches .com) ──

export const MODE_ORANGE = '#f97316'; // unprocessed / protection / SEA offline
export const MODE_PINK   = '#ec4899'; // domination / chronic RE / precision without feedback

// ─── EDITORIAL ACCENT (Mechanics of Phenomena section) ──

export const EDITORIAL = {
  accent:      '#f59e0b',  // amber-500 — primary editorial accent
  accentLight: '#fbbf24',  // amber-400 — hover/active
  accentMuted: '#92400e',  // amber-900 — subtle backgrounds
};

// Helper: gradient card background
export function gradientCardBg(color, startOpacity = 0.08) {
  return `linear-gradient(135deg, ${hexToRgba(color, startOpacity)}, transparent)`;
}

// ─── UTILITY ─────────────────────────────────────────

export function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function getContentTypeColor(type) {
  return CONTENT_TYPE_COLORS[type] || SPECTRUM.blue;
}

export function getContentTypeLabel(type) {
  return CONTENT_TYPE_LABELS[type] || type;
}
