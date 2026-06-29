/**
 * TEG-Blue — Design Tokens
 * Blue Spectrum · System Theme · Dark Default
 *
 * Single source of truth for all visual decisions.
 * Import this everywhere. Never hardcode colors.
 *
 * BG, TEXT, and BORDER reference CSS custom properties
 * defined in globals.css — they auto-switch with theme.
 *
 * Updated session 123: canonical palette contract from the TEG-Blue SVG assets.
 */

// ─── PALETTE SOURCES ─────────────────────────────────
// These files define the canonical color families and their meanings.

export const PALETTE_SOURCES = {
  formation: "color-palette-teg-blue-org-pages-7-mode-gradient.svg",
  blueScale: "Tailwind-color-palette.svg",
  chronic: "Color-palete+tailwind-blue-colors-palette-chronic.svg",
};

// ─── BLUE DEPTH SCALE ────────────────────────────────
// Use dark blues for large surfaces; use light blues for titles, notes,
// controls, and small text that sits on dark surfaces.

export const BLUE = {
  50:  "#E5F0FF",
  100: "#CCE0FF",
  200: "#99C2FF",
  300: "#66A3FF",
  400: "#4A83F7",
  500: "#0066FF",
  600: "#0052CC",
  700: "#003D99",
  800: "#002966",
  900: "#001433",
  950: "#000E24",
};

export const BLUE_ROLES = {
  50:  "near-white blue: primary text on dark, light-page background",
  100: "pale blue: secondary text, quiet labels, light fills",
  200: "soft blue: notes, dividers, muted data labels",
  300: "active light blue: small titles, active controls, focus accents",
  400: "bright bridge blue: model accents and mid-scale highlights",
  500: "core TEG-Blue: primary actions and brand signal",
  600: "structural cobalt: rails, chart structure, strong links on light",
  700: "deep annotation blue: secondary dark surfaces and labels",
  800: "deep fallback blue: shutdown fallback surfaces and high-depth blocks",
  900: "near-black blue: diagram panels and raised dark cards",
  950: "deepest page blue: page background and header depth",
};

// ─── ACUTE FORMATION / REALITY-CHECK PALETTE ─────────
// Source: color-palette-teg-blue-org-pages-7-mode-gradient.svg
// X-D are the active reality-check gradient. Z is body shutdown, a detached
// fallback state rather than another step inside the active gradient.

export const FORMATION = {
  X: "#ffffff",
  A: "#6eeafb",
  AB: "#76faa1",
  B: "#b6fc50",
  C: "#e3fd54",
  D: "#f7d448",
  Z: "#a1adbf",
};

export const FORMATION_META = {
  X: {
    id: "baseline",
    code: "X",
    label: "Safe & at rest",
    mode: "Baseline Rest",
    reality: "Safety",
    color: FORMATION.X,
    ink: BLUE[800],
    activeGradient: true,
  },
  A: {
    id: "connection",
    code: "A",
    label: "Safe with others",
    mode: "Connection / Belonging",
    reality: "Safety with others",
    color: FORMATION.A,
    ink: BLUE[900],
    activeGradient: true,
  },
  AB: {
    id: "calibration",
    code: "A↔B",
    label: "Is it still safe?",
    mode: "Safety Checking",
    reality: "Uncertainty",
    color: FORMATION.AB,
    ink: BLUE[900],
    activeGradient: true,
  },
  B: {
    id: "protection",
    code: "B",
    label: "Threat",
    mode: "Protection / Defence",
    reality: "Threat",
    color: FORMATION.B,
    ink: BLUE[900],
    activeGradient: true,
  },
  C: {
    id: "strategic",
    code: "C",
    label: "Bigger threat",
    mode: "Control / Management",
    reality: "Bigger threat",
    color: FORMATION.C,
    ink: BLUE[900],
    activeGradient: true,
  },
  D: {
    id: "domination",
    code: "D",
    label: "Life threat",
    mode: "Domination",
    reality: "Life threat",
    color: FORMATION.D,
    ink: BLUE[900],
    activeGradient: true,
  },
  Z: {
    id: "shutdown",
    code: "Z",
    label: "Overwhelm Shutdown",
    mode: "Body Shutdown",
    reality: "Overwhelm",
    color: FORMATION.Z,
    ink: BLUE[900],
    activeGradient: false,
  },
};

export const REALITY_CHECK_STATES = [
  FORMATION_META.X,
  FORMATION_META.A,
  FORMATION_META.AB,
  FORMATION_META.B,
  FORMATION_META.C,
  FORMATION_META.D,
  FORMATION_META.Z,
];

export const ACTIVE_REALITY_CHECK_STATES = REALITY_CHECK_STATES.filter((state) => state.activeGradient);

export const REALITY_CHECK_GRADIENT = `linear-gradient(90deg, ${FORMATION.X}, ${FORMATION.A}, ${FORMATION.AB}, ${FORMATION.B}, ${FORMATION.C}, ${FORMATION.D})`;

// ─── CHRONIC FORMATION PALETTE ───────────────────────
// Source: Color-palete+tailwind-blue-colors-palette-chronic.svg plus the
// current Deep Engine chronic sequence. These colors mean "held / persistent",
// not acute state.

export const CHRONIC_FORMATION = {
  X: "#ffe680",
  A: "#ffce00",
  AB: "#ffa300",
  B: "#ff7e1d",
  C: "#ff5a05",
  D: "#ff404a",
  Z: BLUE[800],
};

export const CHRONIC_FORMATION_META = {
  X: { label: "Elevated baseline", color: CHRONIC_FORMATION.X },
  A: { label: "Chronic Connection / Belonging", color: CHRONIC_FORMATION.A },
  AB: { label: "Chronic Safety Checking", color: CHRONIC_FORMATION.AB },
  B: { label: "Chronic Protection / Defence", color: CHRONIC_FORMATION.B },
  C: { label: "Chronic Control / Management", color: CHRONIC_FORMATION.C },
  D: { label: "Chronic Domination", color: CHRONIC_FORMATION.D },
  Z: { label: "Persistent Shutdown", color: CHRONIC_FORMATION.Z },
};

// ─── BACKGROUNDS ─────────────────────────────────────

export const BG = {
  page:    "var(--bg-page)",
  diagram: "var(--bg-diagram)",   // Raised instrument surface — lift from page, base for all .org diagrams
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
  sky:      BLUE[100],   // pale research blue
  azure:    BLUE[300],   // active light blue
  blue:     BLUE[500],   // core TEG-Blue
  cobalt:   BLUE[600],   // structural blue
  lavender: BLUE[400],   // legacy key, now bright scale step
  indigo:   BLUE[700],   // deep annotation blue
  silver:   BLUE[200],   // pale structural line
  slate:    BLUE[700],   // neutral structural blue
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
  diagram: "var(--font-diagram, 'IBM Plex Mono'), 'Courier New', monospace",
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
  sm:   4,    // Tags, small elements
  md:   6,    // Cards, connection cards
  lg:   8,    // Panels, content blocks
  xl:   8,    // Large panels, page cards
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

// ─── PATTERN COLORS (Nervous System Gradient) ─────────────

export const PATTERN = {
  A: { primary: FORMATION.A, bg: 'rgba(110,234,251,0.12)', border: 'rgba(110,234,251,0.32)' },
  B: { primary: FORMATION.B, bg: 'rgba(182,252,80,0.12)',  border: 'rgba(182,252,80,0.32)' },
  C: { primary: FORMATION.C, bg: 'rgba(227,253,84,0.12)',  border: 'rgba(227,253,84,0.32)' },
  D: { primary: FORMATION.D, bg: 'rgba(247,212,72,0.12)',  border: 'rgba(247,212,72,0.32)' },
};

export const PATTERN_GRADIENT = `linear-gradient(90deg, ${FORMATION.A}, ${FORMATION.AB}, ${FORMATION.B}, ${FORMATION.C}, ${FORMATION.D})`;

// ─── MODEL PAGE COLORS (one muted academic blue per model) ──

export const MODEL_COLORS = {
  M1: BLUE[300],  // azure — Emotions as Signals
  M2: BLUE[500],  // blue — Nervous System States
  M3: BLUE[700],  // indigo — Regulation Capacities
  M4: BLUE[600],  // cobalt — Awareness Capacities
};

// ─── MAIN_ORG (primary action color — badges, CTAs, links) ──
export const MAIN_ORG = {
  accent: BLUE[500],
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
  green:      FORMATION.AB, // positive indicators, diagrams
  amber:      FORMATION.D,  // editorial, warm highlights
  amberLight: FORMATION.C,  // hover/active states
  amberMuted: '#8d6f12',    // subtle dark backgrounds
  orange:     '#d8762f',    // "stuck" state, external regulation
  pink:       '#d94f86',    // domination emphasis, diagrams
};

// ─── STATUS COLORS (derives from accent + spectrum) ──

export const STATUS = {
  draft:     ACCENT.amber,
  published: SPECTRUM.blue,
  reviewed:  ACCENT.green,
};

// ─── DIAGRAM SYSTEM (.org instrument style) ──────────
// Canonical palette for .org instrument-style diagrams (ESS, ESC, and future).
// Full style guide: teg-blue-vault/_system/diagram-style.md
//
// This system is SEPARATE from the M1–M4 model-page diagrams, which consume
// diagramContainer() below and are visually locked to their model pages.
// The DIAGRAM tokens govern the newer instrument aesthetic: single-voice blue,
// orange-for-break, IBM Plex Mono, near-black page background, very light weights.

export const DIAGRAM = {
  // ── Frame ──────────────────────────────────────────
  bg:             BG.diagram,                       // raised instrument surface — lifted from page
  frame:          'rgba(160,205,251,0.14)',         // optional 1px container border
  divider:        'rgba(160,205,251,0.18)',         // internal dividers, card strokes
  surface:        'rgba(160,205,251,0.05)',         // pill/card surfaces on dark bg

  // ── Voice (the one saturated color — "follow this line") ──
  primary:        '#4062eb',
  primaryDim:     'rgba(64,98,235,0.60)',
  primaryGhost:   'rgba(64,98,235,0.10)',

  // ── Break (only for override / chronic / stuck / Path B / unprocessed) ──
  break:          '#e05e2e',
  breakDim:       'rgba(224,94,46,0.78)',
  breakGhost:     'rgba(224,94,46,0.10)',

  // ── Text inside diagrams ──────────────────────────
  white:          '#ffffff',                        // highest emphasis (rare)
  textStrong:     'rgba(255,255,255,0.90)',         // primary label text
  textBody:       'rgba(255,255,255,0.85)',         // body sentences in pills
  textMuted:      'rgba(160,205,251,0.55)',         // eyebrows, axis labels
  textMicro:      'rgba(160,205,251,0.35)',         // tick labels, dashes, footnotes

  // ── Structure lines ───────────────────────────────
  gridSoft:       'rgba(160,205,251,0.06)',         // baseline grid (barely there)
  gridLine:       'rgba(160,205,251,0.15)',         // axis lines
  connector:      'rgba(160,205,251,0.22)',         // arc baseline, circle outlines
  connectorFine:  'rgba(160,205,251,0.28)',         // thin connector lines to labels
};

// Stroke widths — 5-tier ladder matching ESS/ESC prototypes
export const DIAGRAM_STROKE = {
  hairline: 0.5,   // connector lines to labels, dotted guides
  fine:     1,     // default structure, grid lines
  medium:   1.5,   // standard lines, CLS track, tick marks, base circle outline
  primary:  2,     // main data paths (EmotionWave processed line)
  voice:    2.5,   // the active arc / primary voice line (ESC arc)
};

// Opacity ladder — 6 tiers
export const DIAGRAM_OPACITY = {
  ghost:    0.10,  // pre-reveal state, faintest ghost paths
  micro:    0.15,  // baseline grid, faintest structural lines
  muted:    0.35,  // muted secondary, inactive ticks
  support:  0.55,  // eyebrow text, supporting lines
  body:     0.85,  // body text in pills
  strong:   0.90,  // primary label text (near-white)
};

// Typography scale for diagrams — all use FONT.diagram (IBM Plex Mono)
export const DIAGRAM_TYPE = {
  eyebrow:    { size: 9,    weight: 300, tracking: '0.18em', upper: true },  // "TEG-Blue · ESS + CLS"
  eyebrowSm:  { size: 8,    weight: 300, tracking: '0.20em', upper: true },  // footnote eyebrows
  title:      { size: 20,   weight: 500, tracking: '0.01em' },               // diagram title
  titleSm:    { size: 13,   weight: 500, tracking: '0.03em' },               // compact title (ESC header)
  subtitle:   { size: 10.5, weight: 300, tracking: '0.04em', italic: true }, // italic descriptor under title
  sectionTag: { size: 8.5,  weight: 300, tracking: '0.18em', upper: true },  // "Emotional Somatic System · Domain"
  body:       { size: 10,   weight: 300, lineHeight: 1.72 },                 // list items, pill body
  bodySm:     { size: 9.5,  weight: 300, lineHeight: 1.65 },                 // compact body
  label:      { size: 10.5, weight: 300 },                                   // SVG text labels
  labelBold:  { size: 10,   weight: 500 },                                   // emphasis inside labels
  tick:       { size: 8.5,  weight: 400 },                                   // tick labels inside SVG
  tickMicro:  { size: 7.5,  weight: 300 },                                   // smallest annotations
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
