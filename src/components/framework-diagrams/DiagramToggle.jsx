'use client';

import { useState } from "react";
import { BG, TEXT, BORDER, FONT } from "@/src/styles/tokens";

export default function DiagramToggle({ children, label = "diagram" }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: 16 }}>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? `Hide ${label}` : `Show ${label}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 14px",
          background: "transparent",
          border: `1px solid ${BORDER.default}`,
          borderRadius: 6,
          color: TEXT.muted,
          fontFamily: FONT.mono,
          fontSize: "9px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "border-color 0.2s ease, color 0.2s ease",
        }}
      >
        <svg
          width="8" height="8" viewBox="0 0 8 8"
          style={{
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <path d="M2 1l4 3-4 3" stroke={TEXT.muted} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
        {open ? "Hide diagram" : "Show diagram"}
      </button>

      {/* Diagram container */}
      {open && (
        <div
          style={{
            marginTop: 16,
            padding: 16,
            background: BG.card,
            borderRadius: 8,
            border: `1px solid ${BORDER.default}`,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
