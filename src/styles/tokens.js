/**
 * TEG-Blue Research Platform — Design Tokens
 * Blue Spectrum · No Gradients · Dark First
 * 
 * Single source of truth for all visual decisions.
 * Import this everywhere. Never hardcode colors.
 */

// ─── PRIMARY ────────────────────────────────────────
// Single primary blue — used for all interactive elements, active states, links

export const PRIMARY = "#2563EB";

// ─── SIGNAL COLORS ──────────────────────────────────
// Accent colors for interactive moments and feedback

export const SIGNAL = {
  info:    "#2563EB",   // Same as PRIMARY — informational highlights
  success: "#10B981",   // Confirmation, positive feedback
  warning: "#F59E0B",   // Caution, attention needed
  error:   "#EF4444",   // Errors, destructive actions
  new:     "#8B5CF6",   // New content, updates
  link:    "#60A5FA",   // External links, lighter for contrast
};

// ─── BACKGROUNDS ─────────────────────────────────────

export const BG = {
  page:    "#080C18",   // Deepest — page body
  primary: "#0C1222",   // Main content area
  card:    "#131B2E",   // Cards, panels
  surface: "#1A2234",   // Elevated surfaces, expanded sections
  inset:   "#0A0E1A",   // Recessed content, code blocks
};

// ─── TEXT ────────────────────────────────────────────

export const TEXT = {
  primary:   "#F1F5F9",   // Headings, titles (~93% brightness)
  secondary: "#D1D9E3",   // Body text, descriptions (~85% brightness)
  tertiary:  "#C4D0DC",   // Labels, metadata, captions (~81% brightness)
  inverse:   "#FFFFFF",   // White text on colored button backgrounds
};

// ─── BORDERS ─────────────────────────────────────────

export const BORDER = {
  default: "rgba(148, 163, 184, 0.18)",
  hover:   "rgba(148, 163, 184, 0.28)",
  active:  "rgba(148, 163, 184, 0.40)",
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

// ─── ACCENT COLORS ─────────────────────────────────────
// High-energy accents for small, intentional use (max 5-10% coverage).
// Never decorative. Each accent has ONE fixed semantic role, used consistently:
//
//   mint    → Evidence / Key data      (stat values, key percentages, data highlights)
//   violet  → New / Planned            (planned badges, in-progress states, upcoming content)
//   acid    → Available / Live          (dataset availability, active resources)
//   yellow  → Highlight / Attention     (section dividers, featured markers)
//   pink    → Key emphasis              (single critical phrase per page — max 1–2 uses)
//   soft    → Open / Invitation         (collaboration signals, "open to…" indicators)

export const ACCENT = {
  violet:  "#4B4BFF",   // Electric Violet
  mint:    "#00FFC8",   // Mint
  acid:    "#AFFC41",   // Acid Green
  yellow:  "#FFFF3F",   // Signal Yellow
  pink:    "#FF0C9E",   // Hot Pink
  soft:    "#FFD0F2",   // Soft Pink
};

// ─── MODE COLORS (Four-Mode Gradient) ──────────────────
// Canonical nervous system regulatory state colors, shared with .com

export const MODE_COLORS = {
  connection:  "#14b8a6",   // Teal
  protection:  "#eab308",   // Yellow
  control:     "#f97316",   // Orange
  domination:  "#ec4899",   // Pink
};

// ─── PHASE COLORS (Framework Phases) ───────────────────
// Colors for the four framework phases (F1-F12)

export const PHASE = {
  foundation:  "#26C6DA",
  collective:  "#3B82F6",
  repair:      "#4F46E5",
  meta:        "#5C6BC0",
};

// ─── TYPOGRAPHY ──────────────────────────────────────

export const FONT = {
  display: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI'",
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
  // Blueprint mono scales
  navItem:         { size: 13, weight: 500, tracking: "0.02em",  lineHeight: 1.2, font: "mono" },
  sectionLabel:    { size: 11, weight: 600, tracking: "0.04em",  lineHeight: 1.3, font: "mono" },
  breadcrumb:      { size: 11, weight: 500, tracking: "0.02em",  lineHeight: 1.3, font: "mono" },
  cardHeader:      { size: 13, weight: 600, tracking: "0.01em",  lineHeight: 1.3, font: "mono" },
  metadata:        { size: 11, weight: 400, tracking: "0.01em",  lineHeight: 1.4, font: "mono" },
  dataLabel:       { size: 10, weight: 600, tracking: "0.06em",  lineHeight: 1.3, font: "mono" },
  timestamp:       { size: 10, weight: 400, tracking: "0.02em",  lineHeight: 1.3, font: "mono" },
};

// ─── SPACING ─────────────────────────────────────────

export const SPACING = {
  containerMax: 820,
  containerPadding: { desktop: "0 24px", mobile: "0 16px" },
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
