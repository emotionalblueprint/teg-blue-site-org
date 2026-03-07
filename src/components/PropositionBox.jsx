import { TEXT, FONT, RESEARCHER, PATTERN, hexToRgba } from "../styles/tokens";

/**
 * PropositionBox — Full-width callout for core claims/propositions
 *
 * @param {string} label - Uppercase label (e.g., "CORE PROPOSITION")
 * @param {string} title - Main title text
 * @param {ReactNode} children - Body content
 */
export default function PropositionBox({ label, title, children }) {
  return (
    <div
      style={{
        borderRadius: 20,
        padding: 24,
        background: `linear-gradient(135deg, ${hexToRgba(PATTERN.A.primary, 0.1)}, ${hexToRgba(RESEARCHER.accent, 0.08)}, ${hexToRgba(PATTERN.D.primary, 0.06)})`,
        border: `1px solid ${hexToRgba(RESEARCHER.accent, 0.25)}`,
      }}
    >
      {label && (
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontFamily: FONT.mono,
            color: RESEARCHER.accent,
            marginBottom: 8,
          }}
        >
          {label}
        </div>
      )}
      {title && (
        <h3
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: TEXT.primary,
            margin: "0 0 8px",
            lineHeight: 1.4,
          }}
        >
          {title}
        </h3>
      )}
      <div
        style={{
          fontSize: 14,
          color: TEXT.secondary,
          lineHeight: 1.7,
        }}
      >
        {children}
      </div>
    </div>
  );
}
