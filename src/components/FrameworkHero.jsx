import Link from "next/link";
import { TEXT, FONT, SPECTRUM, ORG_TITLE_GRADIENT, hexToRgba } from "../styles/tokens";
import BadgePill from "./BadgePill";

/**
 * Group color mapping — regulation thread groups.
 * Individual (F1-F3) and Collective (F4-F7): cobalt, The Reversal (F8-F12): blue
 */
const GROUP_COLORS = {
  Individual: SPECTRUM.cobalt,
  Collective: SPECTRUM.cobalt,
  "The Reversal": SPECTRUM.blue,
};

/** Model color mapping for "Informs Model" pills */
const MODEL_COLORS = {
  M1: SPECTRUM.azure,
  M2: SPECTRUM.cobalt,
  M3: SPECTRUM.indigo,
};

/**
 * FrameworkHero — Hero section for individual framework pages.
 * Left border band colored by thread group, regulation thread callout,
 * and related model pills.
 *
 * @param {string} badge - Badge text (e.g., "FRAMEWORK F1")
 * @param {string} title - Main title
 * @param {string} subtitle - Italic subtitle
 * @param {string} description - Body description
 * @param {string} group - Thread group: "Individual", "Collective", or "The Reversal"
 * @param {string} groupLabel - Display label (e.g., "Individual · F1–F3")
 * @param {string} threadLine - Regulation thread statement (e.g., "Biological Restoration — Cost: None")
 * @param {string} threadLabel - Label for the thread callout (default: "Regulation Thread")
 * @param {Array<{label: string, href: string}>} informsModels - Model pills this framework feeds into
 * @param {{prev?: {label: string, href: string}, next?: {label: string, href: string}}} adjacent - Prev/next framework links
 */
export default function FrameworkHero({
  badge,
  title,
  subtitle,
  description,
  group,
  groupLabel,
  threadLine,
  threadLabel = "Regulation Thread",
  informsModels = [],
  adjacent,
}) {
  const color = GROUP_COLORS[group] || SPECTRUM.cobalt;

  return (
    <div
      style={{
        padding: "28px 0 28px 20px",
        borderLeft: `4px solid ${color}`,
      }}
    >
      {/* Badge pill + Arc label */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        {badge && (
          <BadgePill color={color}>{badge}</BadgePill>
        )}
        {groupLabel && (
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              fontFamily: FONT.mono,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: TEXT.muted,
            }}
          >
            {groupLabel}
          </span>
        )}
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: 24,
          fontWeight: 700,
          margin: "0 0 8px",
          lineHeight: 1.2,
          letterSpacing: 0,
          color,
          background: ORG_TITLE_GRADIENT,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
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

      {/* Regulation Thread callout */}
      {threadLine && (
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
            {threadLabel}
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: TEXT.primary,
              lineHeight: 1.5,
            }}
          >
            {threadLine}
          </div>
        </div>
      )}

      {/* Informs Model pills */}
      {informsModels.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", marginBottom: 16 }}>
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
            Informs
          </span>
          {informsModels.map(({ label, href }) => {
            const mColor = MODEL_COLORS[label] || SPECTRUM.cobalt;
            return (
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
                  color: mColor,
                  backgroundColor: hexToRgba(mColor, 0.1),
                  border: `1px solid ${hexToRgba(mColor, 0.2)}`,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}

      {/* Adjacent framework navigation */}
      {adjacent && (adjacent.prev || adjacent.next) && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          {adjacent.prev && (
            <Link
              href={adjacent.prev.href}
              style={{
                display: "inline-block",
                padding: "2px 10px",
                borderRadius: 4,
                fontSize: 10,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: TEXT.muted,
                backgroundColor: hexToRgba(color, 0.08),
                border: `1px solid ${hexToRgba(color, 0.15)}`,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              ← {adjacent.prev.label}
            </Link>
          )}
          {adjacent.next && (
            <Link
              href={adjacent.next.href}
              style={{
                display: "inline-block",
                padding: "2px 10px",
                borderRadius: 4,
                fontSize: 10,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: TEXT.muted,
                backgroundColor: hexToRgba(color, 0.08),
                border: `1px solid ${hexToRgba(color, 0.15)}`,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              {adjacent.next.label} →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
