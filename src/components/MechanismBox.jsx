import { TEXT, FONT, RESEARCHER, hexToRgba, gradientCardBg } from "../styles/tokens";

/**
 * MechanismBox — Left-border accent box for key insights/mechanisms
 *
 * @param {string} label - Uppercase label (e.g., "KEY MECHANISM")
 * @param {ReactNode} children - Body content
 */
export default function MechanismBox({ label, children }) {
  return (
    <div
      style={{
        borderRadius: 12,
        padding: 20,
        background: gradientCardBg(RESEARCHER.accent),
        border: `1px solid ${hexToRgba(RESEARCHER.accent, 0.2)}`,
        borderLeft: `3px solid ${RESEARCHER.accent}`,
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
