"use client";

import { SPECTRUM, BG, TEXT, BORDER, FONT, TRANSITION, PRIMARY, hexToRgba } from "../styles/tokens";

// ─── SPECTRUM BAR ────────────────────────────────────
// Flat segmented bar showing all 6 spectrum colors.
// Used on hub page header and footer.

export function SpectrumBar({ height = 4 }) {
  const colors = Object.values(SPECTRUM);
  return (
    <div
      style={{
        display: "flex",
        height,
        borderRadius: height / 2,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      {colors.map((color) => (
        <span key={color} style={{ flex: 1, background: color }} />
      ))}
    </div>
  );
}

// ─── DEPTH BAR ───────────────────────────────────────
// Row of action links at bottom of every page.

export function DepthBar({ actions = [] }) {
  // actions: [{ label, href, external }]
  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
          className="depth-action"
          style={{
            padding: "8px 16px",
            borderRadius: 6,
            border: `1px solid ${BORDER.default}`,
            fontSize: 13,
            color: TEXT.tertiary,
            cursor: "pointer",
            fontWeight: 500,
            fontFamily: FONT.display,
            textDecoration: "none",
            transition: `all ${TRANSITION.normal}`,
          }}
        >
          {action.label}{action.external ? " ↗" : ""}
        </a>
      ))}
      <style jsx>{`
        .depth-action:hover {
          border-color: ${BORDER.hover};
          color: ${TEXT.primary};
          background: rgba(148, 163, 184, 0.04);
        }
      `}</style>
    </div>
  );
}

// ─── SEARCH INPUT ────────────────────────────────────
// For glossary and research hub search.

export function SearchInput({ 
  value, 
  onChange, 
  placeholder = "Search terms, theories, papers..." 
}) {
  return (
    <div style={{ position: "relative" }}>
      <span
        style={{
          position: "absolute",
          left: 14,
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: 16,
          color: TEXT.tertiary,
          pointerEvents: "none",
        }}
      >
        ⌕
      </span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "12px 16px 12px 38px",
          borderRadius: 8,
          background: BG.inset,
          border: `1px solid ${BORDER.default}`,
          fontSize: 14,
          fontFamily: FONT.display,
          color: TEXT.secondary,
          outline: "none",
          boxSizing: "border-box",
          transition: `border-color ${TRANSITION.normal}`,
        }}
        onFocus={(e) => {
          e.target.style.borderColor = hexToRgba(PRIMARY, 0.4);
        }}
        onBlur={(e) => {
          e.target.style.borderColor = BORDER.default;
        }}
      />
    </div>
  );
}
