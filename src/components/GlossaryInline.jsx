"use client";

import { useState, useRef, useEffect } from "react";
import { BG, TEXT, SPECTRUM, FONT, hexToRgba } from "../styles/tokens";

/**
 * GlossaryInline — Inline glossary term with tooltip
 * 
 * Renders as a dashed-underlined link. Click to show definition tooltip.
 * For AI: wraps in <abbr> with title attribute (always in DOM).
 * 
 * @param {string} term - Display term
 * @param {string} definition - Short definition
 * @param {string} href - Optional link to full glossary entry
 */

export default function GlossaryInline({ term, definition, href }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    if (!show) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setShow(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [show]);

  return (
    <span ref={ref} style={{ position: "relative", display: "inline" }}>
      <abbr
        title={definition}
        onClick={(e) => { e.stopPropagation(); setShow(!show); }}
        style={{
          borderBottom: `1px dashed ${hexToRgba(SPECTRUM.sky, 0.4)}`,
          color: SPECTRUM.sky,
          cursor: "pointer",
          fontWeight: 500,
          textDecoration: "none",
        }}
      >
        {term}
      </abbr>

      {show && (
        <span
          role="tooltip"
          style={{
            position: "absolute",
            bottom: "calc(100% + 8px)",
            left: "50%",
            transform: "translateX(-50%)",
            background: BG.surface,
            border: `1px solid ${hexToRgba(SPECTRUM.sky, 0.2)}`,
            padding: "12px 16px",
            borderRadius: 8,
            fontSize: 12,
            lineHeight: 1.5,
            width: 280,
            zIndex: 10,
            boxShadow: `0 8px 24px ${hexToRgba('#000000', 0.3)}`,
            color: TEXT.secondary,
            animation: "tooltipIn 150ms ease-out",
          }}
        >
          <strong
            style={{
              display: "block",
              marginBottom: 4,
              color: SPECTRUM.sky,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {term}
          </strong>
          {definition}
          {href && (
            <a
              href={href}
              style={{
                display: "block",
                marginTop: 8,
                fontSize: 11,
                color: SPECTRUM.azure,
                textDecoration: "none",
              }}
            >
              View full entry →
            </a>
          )}
          {/* Arrow */}
          <span
            style={{
              position: "absolute",
              bottom: -5,
              left: "50%",
              transform: "translateX(-50%) rotate(45deg)",
              width: 10,
              height: 10,
              background: BG.surface,
              borderRight: `1px solid ${hexToRgba(SPECTRUM.sky, 0.2)}`,
              borderBottom: `1px solid ${hexToRgba(SPECTRUM.sky, 0.2)}`,
            }}
          />
        </span>
      )}

      <style jsx>{`
        @keyframes tooltipIn {
          from { opacity: 0; transform: translateX(-50%) translateY(4px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </span>
  );
}
