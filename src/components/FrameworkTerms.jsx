"use client";

import { TEXT, SPECTRUM, FONT, hexToRgba } from "@/src/styles/tokens";

export default function FrameworkTerms({
  title = "Terms Used in This Framework",
  terms = [],
  children,
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <span
          style={{
            fontFamily: FONT.mono,
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: SPECTRUM.cobalt,
            background: hexToRgba(SPECTRUM.cobalt, 0.08),
            border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
            borderRadius: 4,
            padding: "2px 7px",
          }}
        >
          Legend
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: TEXT.muted,
          }}
        >
          {title}
        </span>
      </div>

      <dl style={{ margin: 0 }}>
        {terms.map((item, i) => (
          <div
            key={item.term}
            style={{
              display: "flex",
              flexWrap: "wrap",
              padding: "7px 0",
              borderTop:
                i > 0
                  ? `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.08)}`
                  : "none",
              gap: "2px 0",
            }}
          >
            <dt
              style={{
                width: 130,
                minWidth: 130,
                fontSize: 11,
                fontWeight: 600,
                fontFamily: FONT.mono,
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
                fontSize: 11,
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

      {children && (
        <div
          style={{
            borderTop: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.08)}`,
            paddingTop: 10,
            marginTop: 4,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
