"use client";

import { useState, useEffect, useRef } from "react";
import { BG, TEXT, FONT, BORDER, SPACING, hexToRgba } from "../styles/tokens";

const px = SPACING.pagePadding;

/**
 * ModelAnchorStrip — Sticky horizontal nav for model pages.
 * Replaces the sidebar. Tracks active section via IntersectionObserver.
 *
 * @param {Array<{label: string, href: string}>} sections - Anchor sections
 * @param {string} color - Model identity color (hex)
 */
export default function ModelAnchorStrip({ sections, color }) {
  const [activeId, setActiveId] = useState("");
  const observerRef = useRef(null);

  useEffect(() => {
    const ids = sections.map((s) => s.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, [sections]);

  const handleClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="Page sections"
      style={{
        position: "sticky",
        top: 48,
        zIndex: 40,
        background: BG.surface,
        borderBottom: `1px solid ${BORDER.default}`,
        marginBottom: 32,
      }}
    >
      <div
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `0 ${px}`,
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {sections.map(({ label, href }) => {
          const id = href.replace("#", "");
          const isActive = activeId === id;
          return (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "10px 14px",
                fontSize: 11,
                fontWeight: 600,
                fontFamily: FONT.mono,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: isActive ? color : TEXT.muted,
                background: isActive ? hexToRgba(color, 0.08) : "transparent",
                borderBottom: isActive
                  ? `2px solid ${color}`
                  : "2px solid transparent",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition:
                  "color 150ms ease, background 150ms ease, border-color 150ms ease",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              {label}
            </a>
          );
        })}
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `nav[aria-label="Page sections"] > div::-webkit-scrollbar { display: none; }`,
        }}
      />
    </nav>
  );
}
