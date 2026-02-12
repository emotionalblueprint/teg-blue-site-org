"use client";

import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, TRANSITION, SPECTRUM, hexToRgba } from "../styles/tokens";
import { SpectrumBar } from "./SharedComponents";

/**
 * SiteHeader — Main navigation header for teg-blue.org
 */

const NAV_ITEMS = [
  { label: "Hub", href: "/" },
  { label: "For Researchers", href: "/research-entry" },
  { label: "Publications", href: "/publications" },
  { label: "Theory Map", href: "/theoretical-foundations" },
  { label: "Glossary", href: "/glossary" },
  { label: "About", href: "/about" },
  { label: "Collaborate", href: "/collaborate" },
];

export default function SiteHeader({ currentPath = "/" }) {
  return (
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

        {/* Logo + Title */}
        <div style={{ marginTop: 16, marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <Link
              href="https://teg-blue.com"
              style={{
                fontFamily: FONT.mono,
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: TEXT.hint,
                textDecoration: "none",
              }}
            >
              TEG-Blue
            </Link>
            <span style={{ color: TEXT.micro }}>·</span>
            <a
              href="https://teg-blue.com"
              style={{
                fontFamily: FONT.mono,
                fontSize: 9,
                color: SPECTRUM.azure,
                textDecoration: "none",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Interactive tools on .com →
            </a>
          </div>
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
          <p
            style={{
              fontSize: 13,
              color: TEXT.muted,
              marginTop: 4,
            }}
          >
            Open science publishing for emotional regulation research
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav
        aria-label="Main navigation"
        style={{
          background: BG.primary,
          borderTop: `1px solid ${BORDER.default}`,
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
              (item.href !== "/" && currentPath.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  padding: "12px 20px",
                  fontFamily: FONT.display,
                  fontSize: 13,
                  fontWeight: 600,
                  color: isActive ? TEXT.primary : TEXT.hint,
                  textDecoration: "none",
                  borderBottom: isActive
                    ? `2px solid ${SPECTRUM.blue}`
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
    </header>
  );
}
