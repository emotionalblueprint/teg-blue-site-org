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
      style={{ marginBottom: 6 }}
    >
      <summary
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 18px",
          cursor: "pointer",
          fontFamily: FONT.mono,
          fontSize: 11,
          fontWeight: 600,
          color: TEXT.muted,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          background: BG.card,
          border: `1px solid ${BORDER.default}`,
          borderRadius: 6,
          transition: `all ${TRANSITION.normal}`,
          listStyle: "none",
        }}
        className="expandable-summary"
      >
        <span>{title}</span>
        <span
          className="expandable-chevron"
          style={{
            fontSize: 9,
            color: hexToRgba(color, 0.6),
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
          padding: "14px 18px 16px",
          fontSize: 14,
          lineHeight: 1.7,
          color: TEXT.secondary,
          background: `linear-gradient(135deg, ${hexToRgba(color, 0.06)}, ${hexToRgba(color, 0.03)}, transparent)`,
          border: `1px solid ${hexToRgba(color, 0.15)}`,
          borderTop: "none",
          borderRadius: "0 0 6px 6px",
        }}
      >
        {children}
      </div>

      {/* CSS for states — no JavaScript animations needed */}
      <style jsx>{`
        details summary::-webkit-details-marker { display: none; }
        details summary::marker { display: none; }

        details summary:hover {
          border-color: ${hexToRgba(color, 0.35)};
          color: ${TEXT.primary};
        }

        details[open] > summary {
          background: ${BG.surface};
          border-color: ${hexToRgba(color, 0.25)};
          border-radius: 6px 6px 0 0;
          color: ${TEXT.primary};
        }

        details[open] > summary .expandable-chevron {
          transform: rotate(90deg);
          color: ${color};
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
