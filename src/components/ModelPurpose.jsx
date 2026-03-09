import { TEXT, FONT, hexToRgba } from "../styles/tokens";

/**
 * ModelPurpose — Callout box for model pages.
 * Replaces PropositionBox. Label reads "WHAT THIS MODEL MAPS".
 * Left border in model's identity color.
 *
 * @param {string} label - Override label (default: "WHAT THIS MODEL MAPS")
 * @param {string} color - Model identity color (hex)
 * @param {ReactNode} children - Body content (typically a <ul>)
 */
export default function ModelPurpose({ label = "WHAT THIS MODEL MAPS", color, children }) {
  return (
    <div
      style={{
        borderRadius: 12,
        padding: 24,
        background: hexToRgba(color, 0.04),
        border: `1px solid ${hexToRgba(color, 0.15)}`,
        borderLeft: `4px solid ${color}`,
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
            color: color,
            marginBottom: 12,
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
