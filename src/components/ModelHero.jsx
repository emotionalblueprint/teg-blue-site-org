import Link from "next/link";
import { TEXT, FONT, SPECTRUM, hexToRgba } from "../styles/tokens";

/**
 * ModelHero — Hero section for model pages.
 * Distinct from ResearcherHero: left border band, plain title,
 * core question callout, and framework-link pills.
 *
 * @param {string} badge - Badge text (e.g., "MODEL M1")
 * @param {string} title - Main title
 * @param {string} subtitle - Italic subtitle
 * @param {string} description - Body description
 * @param {string} coreQuestion - The model's defining question
 * @param {Array<{label: string, href: string}>} drawsFrom - Framework pills
 * @param {string} color - Model identity color (hex)
 */
export default function ModelHero({
  badge,
  title,
  subtitle,
  description,
  coreQuestion,
  drawsFrom = [],
  color,
}) {
  return (
    <div
      style={{
        padding: "28px 0 28px 20px",
        borderLeft: `4px solid ${color}`,
      }}
    >
      {/* Badge pill */}
      {badge && (
        <div
          style={{
            display: "inline-block",
            padding: "4px 12px",
            borderRadius: 100,
            fontSize: 10,
            fontWeight: 700,
            fontFamily: FONT.mono,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: color,
            backgroundColor: hexToRgba(color, 0.15),
            border: `1px solid ${hexToRgba(color, 0.3)}`,
            marginBottom: 16,
          }}
        >
          {badge}
        </div>
      )}

      {/* Title — plain white, not gradient */}
      <h1
        style={{
          fontSize: 24,
          fontWeight: 700,
          margin: "0 0 8px",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          color: TEXT.primary,
        }}
      >
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p
          style={{
            fontSize: 13,
            fontStyle: "italic",
            color: TEXT.muted,
            margin: "0 0 12px",
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Description */}
      {description && (
        <p
          style={{
            fontSize: 15,
            color: TEXT.secondary,
            lineHeight: 1.7,
            margin: "0 0 16px",
            maxWidth: 640,
          }}
        >
          {description}
        </p>
      )}

      {/* Core Question */}
      {coreQuestion && (
        <div
          style={{
            padding: "12px 16px",
            background: hexToRgba(color, 0.06),
            borderRadius: 8,
            border: `1px solid ${hexToRgba(color, 0.15)}`,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              fontFamily: FONT.mono,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: color,
              marginBottom: 6,
            }}
          >
            Core Question
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: TEXT.primary,
              lineHeight: 1.5,
              fontStyle: "italic",
            }}
          >
            {coreQuestion}
          </div>
        </div>
      )}

      {/* Draws From pills */}
      {drawsFrom.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              fontFamily: FONT.mono,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: TEXT.muted,
              marginRight: 2,
            }}
          >
            Draws from
          </span>
          {drawsFrom.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                display: "inline-block",
                padding: "2px 8px",
                borderRadius: 4,
                fontSize: 10,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: SPECTRUM.cobalt,
                backgroundColor: hexToRgba(SPECTRUM.cobalt, 0.1),
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
