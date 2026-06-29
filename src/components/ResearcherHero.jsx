import { TEXT, FONT, MAIN_ORG, PATTERN_GRADIENT, BORDER } from "../styles/tokens";
import BadgePill from "./BadgePill";

/**
 * ResearcherHero — Standardized hero section with badge pill,
 * gradient title, and accent bar.
 *
 * @param {string} badge - Badge pill text (e.g., "FOR RESEARCHERS")
 * @param {string} title - Main title (rendered with gradient text)
 * @param {string} subtitle - Optional italic subtitle
 * @param {string} description - Body description
 * @param {boolean} showAccentBar - Whether to show the gradient accent bar (default true)
 */
export default function ResearcherHero({
  badge,
  title,
  subtitle,
  description,
  showAccentBar = true,
}) {
  return (
    <div
      style={{
        padding: "clamp(28px, 5vw, 54px) 0 28px",
        marginBottom: 28,
        borderBottom: `1px solid ${BORDER.default}`,
      }}
    >
      {/* Badge pill */}
      {badge && (
        <div style={{ marginBottom: 16 }}>
          <BadgePill color={MAIN_ORG.accent}>{badge}</BadgePill>
        </div>
      )}

      {/* Title with gradient text */}
      <h1
        style={{
          maxWidth: 780,
          fontSize: "clamp(30px, 6vw, 54px)",
          fontWeight: 700,
          margin: "0 0 10px",
          lineHeight: 1.02,
          letterSpacing: 0,
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
            margin: "0 0 14px",
            fontFamily: FONT.diagram,
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
            margin: 0,
            maxWidth: 690,
            position: "relative",
          }}
        >
          {description}
        </p>
      )}

      {/* Accent bar */}
      {showAccentBar && (
        <div
          style={{
            marginTop: 20,
            width: "min(100%, 560px)",
            height: 5,
            borderRadius: 4,
            background: PATTERN_GRADIENT,
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
