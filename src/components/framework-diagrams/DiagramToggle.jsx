'use client';

import { useState } from "react";
import { TEXT, FONT, SPECTRUM, hexToRgba } from "@/src/styles/tokens";

export default function DiagramToggle({ children, label = "diagram", defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

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
          gap: 7,
          padding: "7px 16px",
          background: hexToRgba(SPECTRUM.cobalt, 0.25),
          border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.35)}`,
          borderRadius: 6,
          color: SPECTRUM.sky,
          fontFamily: FONT.mono,
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "background 0.2s ease, border-color 0.2s ease",
        }}
      >
        <svg
          width="8" height="8" viewBox="0 0 8 8"
          style={{
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <path d="M2 1l4 3-4 3" stroke={SPECTRUM.sky} strokeWidth="1.3" fill="none" strokeLinecap="round" />
        </svg>
        {open ? "Hide diagram" : "Show diagram"}
      </button>

      {/* Diagram container */}
      {open && (
        <div
          style={{
            marginTop: 16,
            padding: "24px 20px 8px",
            background: hexToRgba(SPECTRUM.cobalt, 0.08),
            borderRadius: 10,
            border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.18)}`,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
