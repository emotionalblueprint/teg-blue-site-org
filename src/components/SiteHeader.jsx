"use client";

import { useState } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, TRANSITION, SPECTRUM, hexToRgba } from "../styles/tokens";

/**
 * SiteHeader — Unified two-tier header for teg-blue.org
 *
 * Tier 1: Identity (TEG-Blue · Open Knowledge) + utility nav (Research▾, Glossary, About, .com)
 * Tier 2: Section nav (Concepts — Models — Frameworks) with active highlight
 */

const RESEARCH_DROPDOWN = [
  { label: "For Researchers", href: "/research-entry" },
  { label: "Scientific Foundations", href: "/scientific-foundations" },
  { label: "Publications", href: "/publications" },
  { label: "Methodology", href: "/methodology" },
  { label: "Collaborate", href: "/collaborate" },
  { label: "AI Safety", href: "/ai-safety" },
];

const SECTIONS = [
  { key: "concepts", label: "Concepts", href: "/concepts", color: SPECTRUM.sky },
  { key: "models", label: "Models", href: "/models", color: SPECTRUM.azure },
  { key: "frameworks", label: "Frameworks", href: "/frameworks-map", color: SPECTRUM.cobalt },
];

function getActiveSection(path) {
  if (path.startsWith("/concepts")) return "concepts";
  if (path.startsWith("/models")) return "models";
  if (path.startsWith("/frameworks-map") || path.startsWith("/frameworks/") || path.startsWith("/frameworks")) return "frameworks";
  return null;
}

export default function SiteHeader({ currentPath = "/" }) {
  const [researchOpen, setResearchOpen] = useState(false);
  const activeSection = getActiveSection(currentPath);

  const isResearchActive = RESEARCH_DROPDOWN.some(
    (item) => currentPath === item.href || currentPath.startsWith(item.href + "/")
  );

  return (
    <header
      style={{
        background: BG.primary,
        borderBottom: `1px solid ${BORDER.default}`,
      }}
    >
      {/* Tier 1: Identity + Utility */}
      <div
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        {/* Left: Identity */}
        <Link
          href="/"
          style={{
            fontFamily: FONT.mono,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.02em",
            color: TEXT.primary,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          TEG-Blue{" "}
          <span style={{ color: TEXT.tertiary, fontWeight: 400 }}>·</span>{" "}
          <span style={{ fontWeight: 400, color: TEXT.secondary }}>Open Knowledge</span>
        </Link>

        {/* Right: Utility nav */}
        <nav
          aria-label="Utility navigation"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
          }}
        >
          {/* Research dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setResearchOpen(true)}
            onMouseLeave={() => setResearchOpen(false)}
          >
            <button
              style={{
                padding: "6px 14px",
                fontFamily: FONT.mono,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: isResearchActive ? TEXT.primary : TEXT.tertiary,
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
                transition: `color ${TRANSITION.fast}`,
                whiteSpace: "nowrap",
              }}
              onClick={() => setResearchOpen(!researchOpen)}
            >
              Research
              <svg
                width="9"
                height="9"
                viewBox="0 0 10 10"
                fill="none"
                style={{
                  transform: researchOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: `transform ${TRANSITION.fast}`,
                }}
              >
                <path
                  d="M2 4L5 7L8 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {researchOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  minWidth: 200,
                  background: BG.primary,
                  border: `1px solid ${BORDER.default}`,
                  borderRadius: 6,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  zIndex: 100,
                  padding: "6px 0",
                }}
              >
                {RESEARCH_DROPDOWN.map((item) => {
                  const isActive = currentPath === item.href || currentPath.startsWith(item.href + "/");
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{
                        display: "block",
                        padding: "10px 16px",
                        fontFamily: FONT.mono,
                        fontSize: 12,
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? TEXT.primary : TEXT.secondary,
                        textDecoration: "none",
                        transition: `all ${TRANSITION.fast}`,
                        background: isActive ? hexToRgba(SPECTRUM.azure, 0.08) : "transparent",
                      }}
                      onClick={() => setResearchOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <UtilityLink href="/glossary" label="Glossary" currentPath={currentPath} />
          <UtilityLink href="/about" label="About" currentPath={currentPath} />

          <a
            href="https://teg-blue.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "6px 14px",
              fontFamily: FONT.mono,
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.02em",
              color: SPECTRUM.azure,
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: `color ${TRANSITION.fast}`,
            }}
          >
            .com &rarr;
          </a>
        </nav>
      </div>

      {/* Tier 2: Section Nav */}
      <nav
        aria-label="Section navigation"
        style={{
          borderTop: `1px solid ${BORDER.default}`,
        }}
      >
        <div
          style={{
            maxWidth: SPACING.containerMax,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0,
          }}
        >
          {SECTIONS.map((section, i) => {
            const isActive = section.key === activeSection;
            const inner = (
              <span
                style={{
                  display: "inline-block",
                  padding: "10px 0",
                  fontSize: 12,
                  fontWeight: isActive ? 700 : 400,
                  fontFamily: FONT.mono,
                  letterSpacing: "0.02em",
                  color: isActive ? section.color : TEXT.tertiary,
                  borderBottom: isActive
                    ? `2px solid ${section.color}`
                    : "2px solid transparent",
                  transition: `color ${TRANSITION.fast}, border-color ${TRANSITION.fast}`,
                }}
              >
                {section.label}
              </span>
            );

            return (
              <div
                key={section.key}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {i > 0 && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 32,
                      height: 1,
                      background: hexToRgba(TEXT.tertiary, 0.3),
                      margin: "0 16px",
                      flexShrink: 0,
                    }}
                  />
                )}
                {isActive ? (
                  <span style={{ cursor: "default" }}>{inner}</span>
                ) : (
                  <Link href={section.href} style={{ textDecoration: "none" }}>
                    {inner}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

function UtilityLink({ href, label, currentPath }) {
  const isActive = currentPath === href || currentPath.startsWith(href + "/");
  return (
    <Link
      href={href}
      style={{
        padding: "6px 14px",
        fontFamily: FONT.mono,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.02em",
        color: isActive ? TEXT.primary : TEXT.tertiary,
        textDecoration: "none",
        whiteSpace: "nowrap",
        transition: `color ${TRANSITION.fast}`,
      }}
    >
      {label}
    </Link>
  );
}
