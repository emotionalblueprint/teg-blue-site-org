"use client";

import { getContentTypeColor, getContentTypeLabel, hexToRgba, FONT, OPACITY } from "../styles/tokens";

/**
 * TypeTag — Content type identifier
 * 
 * The primary visual signal for what kind of content this is.
 * Uses Blue Spectrum colors. Three sizes: default, small, micro.
 * 
 * @param {string} type - Content type key (publication, theory, glossary, etc.)
 * @param {string} size - "default" | "small" | "micro"
 */

const SIZES = {
  default: { px: "5px 12px", dot: 6, font: 10, gap: 6 },
  small:   { px: "4px 8px",  dot: 5, font: 9,  gap: 5 },
  micro:   { px: "3px 6px",  dot: 4, font: 8,  gap: 4 },
};

export default function TypeTag({ type, size = "default" }) {
  const color = getContentTypeColor(type);
  const label = getContentTypeLabel(type);
  const s = SIZES[size] || SIZES.default;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: s.gap,
        padding: s.px,
        borderRadius: 6,
        background: hexToRgba(color, OPACITY.badgeBg),
        border: `1px solid ${hexToRgba(color, OPACITY.border)}`,
      }}
    >
      <span
        style={{
          width: s.dot,
          height: s.dot,
          borderRadius: "50%",
          background: color,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: FONT.mono,
          fontSize: s.font,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color,
          lineHeight: 1.3,
        }}
      >
        {label}
      </span>
    </span>
  );
}
