"use client";

import { useRef, useEffect } from "react";
import { BG, TEXT, BORDER, FONT, TRANSITION, getContentTypeColor, hexToRgba, gradientCardBg } from "../styles/tokens";

/**
 * ExpandableSection — Core content unit
 *
 * Uses native <details>/<summary> for AI crawlability.
 * All content is in the DOM regardless of expand state.
 * Card-style design matching tables and PropositionBox.
 * Paired sections (siblings in the same parent) sync open/close.
 */

export default function ExpandableSection({
  title,
  children,
  type = "publication",
  defaultOpen = false,
  id,
}) {
  const color = getContentTypeColor(type);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleToggle = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const siblings = parent.querySelectorAll(":scope > details");
      if (siblings.length < 2) return;
      siblings.forEach((s) => { if (s !== el) s.open = el.open; });
    };
    el.addEventListener("toggle", handleToggle);
    return () => el.removeEventListener("toggle", handleToggle);
  }, []);

  return (
    <details
      ref={ref}
      open={defaultOpen || undefined}
      id={id}
      style={{
        marginBottom: 2,
        border: "none",
        borderRadius: 0,
        background: "transparent",
      }}
    >
      <summary
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 0",
          cursor: "pointer",
          fontFamily: FONT.mono,
          fontSize: 11,
          fontWeight: 600,
          color: TEXT.hint,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          background: "transparent",
          border: "none",
          borderBottom: `1px solid ${BORDER.default}`,
          borderRadius: 0,
          transition: `all ${TRANSITION.normal}`,
          listStyle: "none",
        }}
        className="expandable-summary"
      >
        <span>{title}</span>
        <span
          className="expandable-chevron"
          style={{
            fontSize: 8,
            color: hexToRgba(color, 0.4),
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
          padding: "10px 0 12px 12px",
          fontSize: 13,
          lineHeight: 1.7,
          color: TEXT.muted,
          borderLeft: `2px solid ${hexToRgba(color, 0.2)}`,
          marginLeft: 0,
          marginTop: 4,
        }}
      >
        {children}
      </div>

      {/* CSS for states — no JavaScript animations needed */}
      <style jsx>{`
        details summary::-webkit-details-marker { display: none; }
        details summary::marker { display: none; }
        details summary::after { display: none; }

        details:hover { border-color: transparent; }
        details[open] { border-color: transparent; }

        details > div, details > section { padding: 0; }

        details summary:hover {
          color: ${TEXT.secondary};
          border-bottom-color: ${hexToRgba(color, 0.3)};
        }

        details[open] > summary {
          color: ${TEXT.secondary};
          border-bottom-color: ${hexToRgba(color, 0.3)};
          background: transparent;
          border-radius: 0;
        }

        details[open] > summary .expandable-chevron {
          transform: rotate(90deg);
          color: ${hexToRgba(color, 0.6)};
        }

        details[open] > .expandable-content {
          animation: expandIn 150ms ease-out;
        }

        @keyframes expandIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
