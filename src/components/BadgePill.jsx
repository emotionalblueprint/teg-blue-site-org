import { FONT, hexToRgba } from "../styles/tokens";

/**
 * BadgePill — Single badge style used across all pages.
 * Pill shape, mono, uppercase. Color prop controls text, bg, and border.
 *
 * @param {string} color - Hex color for the badge
 * @param {React.ReactNode} children - Badge text
 */
export default function BadgePill({ color, children }) {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "4px 9px",
        borderRadius: 4,
        fontSize: 10,
        fontWeight: 700,
        fontFamily: FONT.mono,
        textTransform: "uppercase",
        letterSpacing: 0,
        color: color,
        backgroundColor: hexToRgba(color, 0.08),
        border: `1px solid ${hexToRgba(color, 0.26)}`,
      }}
    >
      {children}
    </div>
  );
}
