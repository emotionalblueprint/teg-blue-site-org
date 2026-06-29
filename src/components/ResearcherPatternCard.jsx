import { TEXT, FONT, hexToRgba, gradientCardBg } from "../styles/tokens";

/**
 * ResearcherPatternCard — Pattern card with solid tinted background
 *
 * @param {string} id - Pattern identifier (A, B, C, D)
 * @param {string} name - Pattern name
 * @param {string} pathway - Signal pathway label
 * @param {string} description - Pattern description
 * @param {string} color - Hex color for this pattern
 */
export default function ResearcherPatternCard({
  id,
  name,
  pathway,
  description,
  color,
}) {
  return (
    <div
      style={{
        borderRadius: 14,
        padding: 20,
        borderLeft: `3px solid ${color}`,
        background: gradientCardBg(color),
        border: `1px solid ${hexToRgba(color, 0.12)}`,
        borderLeftWidth: 3,
        borderLeftStyle: "solid",
        borderLeftColor: color,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
        {/* ID Badge */}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            backgroundColor: hexToRgba(color, 0.25),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: FONT.mono,
            fontSize: 14,
            fontWeight: 700,
            color,
          }}
        >
          {id}
        </div>

        <div>
          {/* Label */}
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color,
            }}
          >
            Pattern {id}: {name}
          </div>
          {/* Sublabel */}
          <div
            style={{
              fontSize: 10,
              fontFamily: FONT.mono,
              color: TEXT.muted,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            {pathway}
          </div>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: 12,
          lineHeight: 1.6,
          color: TEXT.secondary,
          margin: "0 0 10px",
        }}
      >
        {description}
      </p>

      {/* Color swatch */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: 4,
            backgroundColor: color,
          }}
        />
        <span
          style={{
            fontSize: 10,
            fontFamily: FONT.mono,
            color: TEXT.muted,
          }}
        >
          {color}
        </span>
      </div>
    </div>
  );
}
