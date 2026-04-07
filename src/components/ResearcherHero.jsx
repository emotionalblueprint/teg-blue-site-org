import { TEXT, FONT, MAIN_ORG, PATTERN_GRADIENT } from "../styles/tokens";
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
        padding: "28px 0",
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
          fontSize: 24,
          fontWeight: 700,
          margin: "0 0 8px",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          background: PATTERN_GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
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
            margin: 0,
            maxWidth: 640,
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
            height: 3,
            borderRadius: 2,
            background: PATTERN_GRADIENT,
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
