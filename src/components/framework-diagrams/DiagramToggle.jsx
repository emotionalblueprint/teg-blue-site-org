'use client';

import { useState, useEffect } from "react";
import { TEXT, FONT, SPECTRUM, hexToRgba } from "@/src/styles/tokens";

export default function DiagramToggle({ children, label = "diagram", defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const [hasOpened, setHasOpened] = useState(defaultOpen);

  useEffect(() => {
    if (open && !hasOpened) setHasOpened(true);
  }, [open, hasOpened]);

  return (
    <div style={{ marginBottom: 20 }}>
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
          outline: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = hexToRgba(SPECTRUM.cobalt, 0.4);
          e.currentTarget.style.borderColor = hexToRgba(SPECTRUM.azure, 0.55);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = hexToRgba(SPECTRUM.cobalt, 0.25);
          e.currentTarget.style.borderColor = hexToRgba(SPECTRUM.azure, 0.35);
        }}
        onFocus={(e) => {
          e.currentTarget.style.boxShadow = `0 0 0 2px ${hexToRgba(SPECTRUM.azure, 0.5)}`;
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = "none";
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

      {/* Diagram container — mounts on first open, then stays mounted */}
      {hasOpened && (
        <div
          style={{
            maxHeight: open ? 2000 : 0,
            overflow: "hidden",
            opacity: open ? 1 : 0,
            marginTop: open ? 16 : 0,
            padding: open ? "24px 20px 16px" : "0 20px",
            background: open ? hexToRgba(SPECTRUM.cobalt, 0.08) : "transparent",
            borderRadius: 10,
            border: open
              ? `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.18)}`
              : "1px solid transparent",
            transition: "max-height 0.3s ease, opacity 0.25s ease, margin-top 0.2s ease, padding 0.2s ease, background 0.2s ease, border-color 0.2s ease",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
