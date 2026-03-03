"use client";

import { BG, TEXT, FONT, getContentTypeColor, hexToRgba, gradientCardBg } from "../styles/tokens";

/**
 * ContextBlock — Summary + Key Finding
 * 
 * The "why this matters" zone below the identity bar.
 * Shows a plain-language summary and optional key finding callout.
 * 
 * @param {string} type - Content type (for accent color)
 * @param {ReactNode} children - Summary content (can include GlossaryInline)
 * @param {string} keyFinding - Optional key finding text
 * @param {string} keyFindingLabel - Label for the callout (default: "Key Finding")
 */

export default function ContextBlock({
  type = "publication",
  children,
  keyFinding,
  keyFindingLabel = "Key Finding",
}) {
  const color = getContentTypeColor(type);

  return (
    <div
      style={{
        background: BG.surface,
        borderRadius: 12,
        padding: "18px 22px",
      }}
    >
      <div style={{ fontSize: 14, lineHeight: 1.7, color: TEXT.secondary }}>
        {children}
      </div>

      {keyFinding && (
        <div
          style={{
            marginTop: 14,
            padding: "10px 14px",
            borderRadius: 6,
            background: `linear-gradient(135deg, ${hexToRgba(color, 0.08)}, transparent)`,
            borderLeft: `3px solid ${color}`,
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color,
            }}
          >
            {keyFindingLabel}
          </span>
          <p
            style={{
              margin: "4px 0 0",
              fontSize: 13,
              fontWeight: 500,
              color: TEXT.primary,
              lineHeight: 1.5,
            }}
          >
            {keyFinding}
          </p>
        </div>
      )}
    </div>
  );
}
