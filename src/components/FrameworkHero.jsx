import Link from "next/link";
import { TEXT, FONT, SPECTRUM, hexToRgba } from "../styles/tokens";

/**
 * Arc color mapping — three arcs of the 12-framework system.
 * Individual (F1-F3): cyan, Collective (F4-F7): cobalt, Repair (F8-F12): indigo
 */
const ARC_COLORS = {
  Individual: "#26C6DA",
  Collective: SPECTRUM.cobalt,
  "Repair and Complexity": SPECTRUM.indigo,
};

/** Model color mapping for "Informs Model" pills */
const MODEL_COLORS = {
  M1: SPECTRUM.azure,
  M2: SPECTRUM.cobalt,
  M3: SPECTRUM.indigo,
};

/**
 * FrameworkHero — Hero section for individual framework pages.
 * Distinct from ResearcherHero: arc-colored left border band,
 * plain title, arc position badge, regulation thread callout,
 * and related model pills.
 *
 * @param {string} badge - Badge text (e.g., "FRAMEWORK F1")
 * @param {string} title - Main title
 * @param {string} subtitle - Italic subtitle
 * @param {string} description - Body description
 * @param {string} arc - Arc name: "Individual", "Collective", or "Repair and Complexity"
 * @param {string} arcLabel - Display label (e.g., "Arc 1: Individual · F1–F3")
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
  arc,
  arcLabel,
  threadLine,
  threadLabel = "Regulation Thread",
  informsModels = [],
  adjacent,
}) {
  const color = ARC_COLORS[arc] || SPECTRUM.cobalt;

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
            }}
          >
            {badge}
          </div>
        )}
        {arcLabel && (
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
            {arcLabel}
          </span>
        )}
      </div>

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
