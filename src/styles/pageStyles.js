/**
 * Shared page style constants — extracted from 16 model + framework pages.
 * All functions take a color parameter so they work with any accent.
 */
import { TEXT, BORDER, FONT, hexToRgba } from "./tokens";

// ─── TEXT STYLES ─────────────────────────────────────────

export const proseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  marginBottom: 16,
};

export const expandedProseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  margin: "8px 0 0",
};

export const propositionItemStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  marginBottom: 8,
};

// ─── HEADING STYLES ──────────────────────────────────────

export function sectionHeadingStyle(color) {
  return {
    fontSize: 20,
    fontWeight: 700,
    color: color,
    letterSpacing: "-0.01em",
    marginBottom: 16,
    paddingBottom: 8,
    borderBottom: `2px solid ${hexToRgba(color, 0.2)}`,
  };
}

export const conceptHeadingStyle = {
  fontSize: 16,
  fontWeight: 600,
  color: TEXT.primary,
  marginBottom: 12,
};

// ─── LAYOUT STYLES ───────────────────────────────────────

export const expandableRowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: 6,
  marginTop: 4,
};

// ─── TABLE STYLES ────────────────────────────────────────

export function gridHeaderStyle(color) {
  return {
    padding: "10px 12px",
    background: hexToRgba(color, 0.1),
    borderBottom: `1px solid ${BORDER.default}`,
    fontSize: 12,
    fontWeight: 600,
    color: TEXT.primary,
    fontFamily: FONT.mono,
  };
}

export const gridCellStyle = {
  padding: "10px 12px",
  borderBottom: `1px solid ${BORDER.default}`,
  fontSize: 13,
  color: TEXT.secondary,
  lineHeight: 1.6,
};

export const navThStyle = {
  padding: "12px 16px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 600,
  color: TEXT.muted,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontFamily: FONT.mono,
};
