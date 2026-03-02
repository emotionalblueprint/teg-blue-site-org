"use client";

import { useState } from "react";
import { BG, TEXT, BORDER, FONT, TRANSITION, getContentTypeColor, hexToRgba } from "../styles/tokens";

/**
 * ExpandableSection — Core content unit
 * 
 * Uses native <details>/<summary> for AI crawlability.
 * All content is in the DOM regardless of expand state.
 * Border-left color matches content type.
 * 
 * @param {string} title - Section heading
 * @param {string} type - Content type (for color)
 * @param {boolean} defaultOpen - Whether to start expanded
 * @param {string} id - HTML id for deep linking
 * @param {ReactNode} children - Section content
 */

export default function ExpandableSection({ 
  title, 
  children, 
  type = "publication", 
  defaultOpen = false,
  id,
}) {
  const color = getContentTypeColor(type);

  return (
    <details
      open={defaultOpen || undefined}
      id={id}
      style={{ marginBottom: 2 }}
    >
      <summary
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 18px",
          cursor: "pointer",
          fontFamily: FONT.display,
          fontSize: 15,
          fontWeight: 600,
          color: TEXT.primary,
          borderLeft: `3px solid ${BORDER.default}`,
          borderRadius: "0 8px 8px 0",
          background: "transparent",
          transition: `all ${TRANSITION.normal}`,
          listStyle: "none",
        }}
        className="expandable-summary"
      >
        <span>{title}</span>
        <span
          className="expandable-chevron"
          style={{
            fontSize: 10,
            color: TEXT.tertiary,
            transition: `transform ${TRANSITION.fast}`,
            display: "inline-block",
          }}
          aria-hidden="true"
        >
          ▶
        </span>
      </summary>

      <div
        className="expandable-content"
        style={{
          padding: "0 18px 16px 16px",
          fontSize: 14,
          lineHeight: 1.7,
          color: TEXT.secondary,
          borderLeft: `3px solid ${color}`,
          borderTop: `1px solid ${hexToRgba(color, 0.08)}`,
          borderRadius: "0 0 8px 0",
          background: BG.surface,
        }}
      >
        {children}
      </div>

      {/* CSS for states — no JavaScript animations needed */}
      <style jsx>{`
        details summary::-webkit-details-marker { display: none; }
        details summary::marker { display: none; }
        
        details summary:hover {
          border-left-color: ${hexToRgba(color, 0.35)};
          background: rgba(255, 255, 255, 0.02);
        }
        
        details[open] > summary {
          border-left-color: ${color};
          background: ${BG.surface};
          border-radius: 0 8px 0 0;
        }
        
        details[open] > summary .expandable-chevron {
          transform: rotate(90deg);
        }
        
        details[open] > .expandable-content {
          animation: expandIn 200ms ease-out;
        }
        
        @keyframes expandIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          details[open] > .expandable-content {
            animation: none;
          }
        }
      `}</style>
    </details>
  );
}
