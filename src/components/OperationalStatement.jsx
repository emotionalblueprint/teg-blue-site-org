import { TEXT, FONT, hexToRgba } from "../styles/tokens";

/**
 * OperationalStatement — Non-italic reference-card blockquote for model pages.
 * Replaces the local KeyStatement helper. Reads as "here's what to use"
 * rather than "here's a thought."
 *
 * @param {string} color - Model identity color (hex)
 * @param {ReactNode} children - Statement text
 */
export default function OperationalStatement({ color, children }) {
  return (
    <blockquote
      style={{
        padding: "16px 20px",
        margin: "0 0 20px",
        background: hexToRgba(color, 0.04),
        borderRadius: "0 8px 8px 0",
        borderLeft: `4px solid ${color}`,
        fontSize: 15,
        fontWeight: 500,
        color: TEXT.primary,
        lineHeight: 1.6,
        fontStyle: "normal",
      }}
    >
      <div
        style={{
          fontSize: 8,
          fontWeight: 700,
          fontFamily: FONT.mono,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: hexToRgba(color, 0.6),
          marginBottom: 8,
        }}
      >
        Operational Insight
      </div>
      {children}
    </blockquote>
  );
}
