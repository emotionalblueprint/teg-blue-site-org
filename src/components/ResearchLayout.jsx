"use client";

import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, TRANSITION, SPECTRUM, PRIMARY, hexToRgba } from "../styles/tokens";
import { SpectrumBar } from "./SharedComponents";

/**
 * ResearchLayout — Wrapper for all /research/* pages
 * 
 * Provides: header, navigation, content container, footer.
 * Uses the Research Platform background colors (cooler than main site).
 */

const NAV_ITEMS = [
  { label: "Research",      href: "/research" },
  { label: "Publications",  href: "/research/publications" },
  { label: "Foundations",    href: "/research/foundations" },
  { label: "Glossary",      href: "/research/glossary" },
  { label: "Methodology",   href: "/research/methodology" },
  { label: "Collaborate",   href: "/research/collaborate" },
];

export default function ResearchLayout({ children, currentPath = "" }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
        color: TEXT.secondary,
      }}
    >
      {/* ─── HEADER ──────────────────────────────── */}
      <header
        style={{
          background: BG.primary,
          borderBottom: `1px solid ${BORDER.default}`,
        }}
      >
        <div
          style={{
            maxWidth: SPACING.containerMax,
            margin: "0 auto",
            padding: "20px 24px 0",
          }}
        >
          <SpectrumBar />
          <div style={{ marginTop: 16, marginBottom: 16 }}>
            <Link
              href="/"
              style={{
                fontFamily: FONT.mono,
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: TEXT.tertiary,
                textDecoration: "none",
              }}
            >
              TEG-Blue
            </Link>
            <h1
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: TEXT.primary,
                margin: "4px 0 0",
                letterSpacing: "-0.02em",
              }}
            >
              Research Platform
            </h1>
          </div>
        </div>
      </header>

      {/* ─── NAVIGATION ──────────────────────────── */}
      <nav
        aria-label="Research sections"
        style={{
          background: BG.primary,
          borderBottom: `1px solid ${BORDER.default}`,
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <div
          style={{
            maxWidth: SPACING.containerMax,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            gap: 0,
            overflowX: "auto",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.href || 
              (item.href !== "/research" && currentPath.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  padding: "12px 20px",
                  fontFamily: FONT.mono,
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  color: isActive ? TEXT.primary : TEXT.tertiary,
                  textDecoration: "none",
                  borderBottom: isActive
                    ? `2px solid ${PRIMARY}`
                    : "2px solid transparent",
                  transition: `all ${TRANSITION.normal}`,
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ─── CONTENT ─────────────────────────────── */}
      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        {children}
      </main>

      {/* ─── FOOTER ──────────────────────────────── */}
      <footer
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "0 24px 40px",
          textAlign: "center",
        }}
      >
        <SpectrumBar />
        <p style={{ fontSize: 11, color: TEXT.tertiary, marginTop: 16 }}>
          TEG-Blue Research Consortium · Open Science
        </p>
        <p style={{ fontSize: 10, color: TEXT.tertiary, marginTop: 4 }}>
          <Link href="/research/citations" style={{ color: TEXT.tertiary, textDecoration: "none" }}>
            How to cite
          </Link>
          {" · "}
          <Link href="/research/collaborate" style={{ color: TEXT.tertiary, textDecoration: "none" }}>
            Collaborate
          </Link>
          {" · "}
          <Link href="/legal/copyright" style={{ color: TEXT.tertiary, textDecoration: "none" }}>
            Rights
          </Link>
        </p>
      </footer>
    </div>
  );
}
