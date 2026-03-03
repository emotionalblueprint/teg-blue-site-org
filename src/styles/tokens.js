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
  default: "var(--border-default)",
  hover:   "var(--border-hover)",
  active:  "var(--border-active)",
};

// ─── THE BLUE SPECTRUM ───────────────────────────────
// Six flat tones. No gradients. Each maps to a content type.

export const SPECTRUM = {
  sky:    "#7ABAEB",   // Glossary — light, accessible
  azure:  "#4A9BE8",   // Open Data — clear, transparent
  blue:   "#3B7DE5",   // Publications — core, authoritative
  cobalt: "#3560CC",   // Frameworks (F1-F12) — structured
  indigo: "#4A50B0",   // Foundations & Theory — deep
  slate:  "#6B7A99",   // Methodology & Meta — neutral
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
};

// ─── TYPOGRAPHY ──────────────────────────────────────

export const FONT = {
  display: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono:    "'JetBrains Mono', 'SF Mono', 'Consolas', monospace",
};

export const TYPE_SCALE = {
  pageTitle:       { size: 28, weight: 700, tracking: "-0.02em", lineHeight: 1.2 },
  sectionHead:     { size: 18, weight: 600, tracking: "-0.01em", lineHeight: 1.2 },
  expandableTitle: { size: 15, weight: 600, tracking: "normal",  lineHeight: 1.4 },
  body:            { size: 14, weight: 400, tracking: "normal",  lineHeight: 1.7 },
  summary:         { size: 14, weight: 400, tracking: "normal",  lineHeight: 1.7 },
  doi:             { size: 12, weight: 400, tracking: "0.01em",  lineHeight: 1.4, font: "mono" },
  tagLabel:        { size: 10, weight: 600, tracking: "0.06em",  lineHeight: 1.3, font: "mono" },
  connectionType:  { size: 10, weight: 500, tracking: "0.04em",  lineHeight: 1.3, font: "mono" },
};

// ─── SPACING ─────────────────────────────────────────

export const SPACING = {
  containerMax: 820,
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
  A: { primary: '#60a5fa', bg: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.25)' },
  B: { primary: '#3b82f6', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.25)' },
  C: { primary: '#2563eb', bg: 'rgba(37,99,235,0.08)', border: 'rgba(37,99,235,0.25)' },
  D: { primary: '#1d4ed8', bg: 'rgba(29,78,216,0.08)', border: 'rgba(29,78,216,0.25)' },
};

export const PATTERN_GRADIENT = 'linear-gradient(90deg, #60a5fa, #3b82f6, #2563eb, #1d4ed8)';

export const RESEARCHER = {
  accent: '#2563eb',
  accentLight: '#3b82f6',
  accentLighter: '#60a5fa',
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
