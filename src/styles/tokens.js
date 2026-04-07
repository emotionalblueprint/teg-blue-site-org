/**
 * TEG-Blue Research Platform — Design Tokens
 * Blue Spectrum · System Theme · Dark Default
 *
 * Single source of truth for all visual decisions.
 * Import this everywhere. Never hardcode colors.
 *
 * BG, TEXT, and BORDER reference CSS custom properties
 * defined in globals.css — they auto-switch with theme.
 *
 * Updated session 121: vault-2 color overhaul.
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
};

// ─── THE BLUE SPECTRUM ───────────────────────────────
// Six tones with full hue/lightness spread. Use freely — no color owns a page.

export const SPECTRUM = {
  sky:    "#b6ebfc",   // lightest — ice
  azure:  "#76e2ff",   // cyan, clear
  blue:   "#00b1ff",   // bright blue-cyan, core
  cobalt: "#0590e5",   // deep blue
  indigo: "#7b7bff",   // violet
  slate:  "#808493",   // neutral grey
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
  expandableTitle: { size: 15, weight: 600, tracking: "normal",  lineHeight: 1.4, color: "rgba(168, 180, 200, 0.88)" },
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
  containerMax: 850,
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

// ─── PATTERN COLORS (Four-Mode Gradient) ─────────────

export const PATTERN = {
  A: { primary: '#a0cdfb', bg: 'rgba(160,205,251,0.08)', border: 'rgba(160,205,251,0.25)' },
  B: { primary: '#6fabf8', bg: 'rgba(111,171,248,0.08)', border: 'rgba(111,171,248,0.25)' },
  C: { primary: '#4f80f7', bg: 'rgba(79,128,247,0.08)',  border: 'rgba(79,128,247,0.25)' },
  D: { primary: '#1255fc', bg: 'rgba(18,85,252,0.08)',   border: 'rgba(18,85,252,0.25)' },
};

export const PATTERN_GRADIENT = 'linear-gradient(90deg, #a0cdfb, #6fabf8, #4f80f7, #1255fc)';

// ─── MODEL PAGE COLORS (one muted academic blue per model) ──

export const MODEL_COLORS = {
  M1: '#5BADFF',  // azure — Emotions as Signals
  M2: '#4B8FFF',  // blue — Nervous System States
  M3: '#5B62D4',  // indigo — Regulation Capacities
  M4: '#4472EE',  // cobalt — Awareness Capacities
};

// ─── MAIN_ORG (primary action color — badges, CTAs, links) ──
export const MAIN_ORG = {
  accent: '#2563eb',
};

// ─── THREE AWARENESS CAPACITIES ──────────────────────

export const AWARENESS = {
  SEA: '#4129ff',   // deep violet — Interoceptive Self-Awareness
  RE:  '#00b1ff',   // bright cyan-blue — Interpersonal Affect Perception
  ER:  '#0d879b',   // dark teal — Affective Resonance
};

// Lighter tones for diagram backgrounds, borders, labels
export const AWARENESS_TONES = {
  SEA: ['#5850ff', '#7b7bff', '#a9a9ff'],
  RE:  ['#3bccff', '#76e2ff', '#bbf2ff'],
  ER:  ['#3eacb7', '#6bd1d6', '#91eded'],
};

// ─── ACCENT COLORS ───────────────────────────────────
// Four accents for diagrams, highlights, states, and editorial.

export const ACCENT = {
  green:      '#55b685',   // positive indicators, diagrams
  amber:      '#e9a23b',   // editorial, warm highlights
  amberLight: '#f2b856',   // hover/active states
  amberMuted: '#7d5418',   // subtle dark backgrounds
  orange:     '#e87b35',   // "stuck" state, external regulation
  pink:       '#da5597',   // domination emphasis, diagrams
};

// ─── STATUS COLORS (derives from accent + spectrum) ──

export const STATUS = {
  draft:     ACCENT.amber,
  published: SPECTRUM.blue,
  reviewed:  ACCENT.green,
};

// ─── DIAGRAM CONTAINERS ─────────────────────────────
// M diagrams use the four-mode gradient as their container atmosphere.
// F diagrams will use a different treatment (TBD).

export function diagramContainer() {
  return {
    padding: 'clamp(16px, 3vw, 24px)',
    background: `linear-gradient(135deg, ${hexToRgba(PATTERN.A.primary, 0.04)}, ${hexToRgba(PATTERN.D.primary, 0.03)})`,
    border: `1px solid ${hexToRgba(PATTERN.B.primary, 0.10)}`,
    borderRadius: 12,
  };
}

// ─── UTILITY ─────────────────────────────────────────

export function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Helper: gradient card background
export function gradientCardBg(color, startOpacity = 0.08) {
  return `linear-gradient(135deg, ${hexToRgba(color, startOpacity)}, transparent)`;
}

// Helper: card color set at standard opacities
export function cardColors(hex) {
  return {
    bg: hexToRgba(hex, 0.07),
    border: hexToRgba(hex, 0.22),
    borderHover: hexToRgba(hex, 0.35),
  };
}

export function getContentTypeColor(type) {
  return CONTENT_TYPE_COLORS[type] || SPECTRUM.blue;
}

export function getContentTypeLabel(type) {
  return CONTENT_TYPE_LABELS[type] || type;
}
