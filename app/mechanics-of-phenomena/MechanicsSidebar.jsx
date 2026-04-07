"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TEXT, FONT, BORDER, ACCENT } from "@/src/styles/tokens";
import { SERIES } from "./mechanics-config";

/**
 * MechanicsSidebar — Sticky sidebar with series list and piece links.
 *
 * Props:
 *   activePiece: string — slug of the currently displayed piece
 *   showBackLink: boolean — show "← Back" link (true for individual piece pages)
 *   articleSections: array of { id, label } — anchor links for the current article
 */
export default function MechanicsSidebar({ activePiece, showBackLink = false, articleSections }) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (!articleSections || articleSections.length === 0) return;

    // Respect reduced motion preference — skip observer
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    for (const section of articleSections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [articleSections]);

  return (
    <aside className="mop-sidebar">
      {showBackLink && (
        <Link
          href="/mechanics-of-phenomena"
          style={{
            display: "block",
            fontSize: 12,
            fontFamily: FONT.mono,
            color: ACCENT.amber,
            textDecoration: "none",
            marginBottom: 20,
            letterSpacing: "0.02em",
          }}
        >
          {"\u2190 The Mechanics of Phenomena"}
        </Link>
      )}

      <p
        style={{
          fontSize: 11,
          fontFamily: FONT.mono,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: TEXT.hint,
          marginBottom: 20,
        }}
      >
        In this section
      </p>

      {SERIES.map((series) => (
        <div key={series.slug} style={{ marginBottom: 28 }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 4,
            }}
          >
            {series.name}
          </p>
          <p
            style={{
              fontSize: 11,
              fontStyle: "italic",
              color: TEXT.hint,
              marginBottom: 12,
              lineHeight: 1.5,
            }}
          >
            {series.description}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {series.pieces.map((piece) => {
              const isActive = activePiece === piece.slug;
              const href = `/mechanics-of-phenomena/${series.slug}/${piece.slug}`;

              return (
                <Link
                  key={piece.slug}
                  href={href}
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: isActive ? ACCENT.amber : TEXT.muted,
                    fontWeight: isActive ? 500 : 400,
                    textDecoration: "none",
                    lineHeight: 1.5,
                    paddingLeft: isActive ? 10 : 0,
                    borderLeft: isActive
                      ? `2px solid ${ACCENT.amber}`
                      : "2px solid transparent",
                    transition: "all 150ms ease",
                  }}
                >
                  No. {String(piece.number).padStart(2, "0")} {"\u2014"} {piece.title}
                  {piece.featured && (
                    <span
                      style={{
                        fontSize: 9,
                        fontFamily: FONT.mono,
                        color: TEXT.hint,
                        marginLeft: 6,
                        letterSpacing: "0.04em",
                      }}
                    >
                      featured
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      <p style={{ fontSize: 11, fontStyle: "italic", color: TEXT.micro, marginTop: 8 }}>
        More coming.
      </p>

      {articleSections && articleSections.length > 0 && (
        <>
          <div
            style={{
              height: 1,
              background: BORDER.default,
              margin: "24px 0",
            }}
          />
          <p
            style={{
              fontSize: 11,
              fontFamily: FONT.mono,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: TEXT.hint,
              marginBottom: 16,
            }}
          >
            This article
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {articleSections.map((section) => {
              const isActiveSection = activeSection === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: isActiveSection ? ACCENT.amberLight : ACCENT.amber,
                    fontWeight: isActiveSection ? 500 : 400,
                    textDecoration: "none",
                    lineHeight: 1.5,
                    paddingLeft: isActiveSection ? 10 : 0,
                    borderLeft: isActiveSection
                      ? `2px solid ${ACCENT.amberLight}`
                      : "2px solid transparent",
                    transition: "all 150ms ease",
                  }}
                >
                  {section.label}
                </a>
              );
            })}
          </div>
        </>
      )}
    </aside>
  );
}
