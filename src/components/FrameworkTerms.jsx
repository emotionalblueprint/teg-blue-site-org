"use client";

import { TEXT, SPECTRUM, FONT, hexToRgba } from "@/src/styles/tokens";

/**
 * FrameworkTerms — Definition-list layout for "Terms Used in This Framework"
 *
 * Usage:
 *   <FrameworkTerms
 *     title="Terms Used in This Framework"
 *     terms={[
 *       { term: "State", definition: "What the nervous system is doing biologically" },
 *       { term: "The Compass", definition: "The metaphor that makes the orientation mechanism visible" },
 *     ]}
 *   />
 */
export default function FrameworkTerms({
  title = "Terms Used in This Framework",
  terms = [],
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <h3
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: TEXT.primary,
          marginBottom: 12,
        }}
      >
        {title}
      </h3>

      <dl style={{ margin: 0 }}>
        {terms.map((item, i) => (
          <div
            key={item.term}
            style={{
              display: "flex",
              flexWrap: "wrap",
              padding: "10px 0",
              borderTop:
                i > 0
                  ? `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.08)}`
                  : "none",
              gap: "2px 0",
            }}
          >
            <dt
              style={{
                width: 140,
                minWidth: 140,
                fontSize: 13,
                fontWeight: 600,
                color: TEXT.primary,
                lineHeight: 1.7,
                flexShrink: 0,
              }}
            >
              {item.term}
            </dt>
            <dd
              style={{
                flex: 1,
                minWidth: 200,
                margin: 0,
                fontSize: 13,
                fontWeight: 400,
                color: TEXT.secondary,
                lineHeight: 1.7,
              }}
            >
              {item.definition}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
