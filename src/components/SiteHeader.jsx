"use client";

import { useState } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, TRANSITION, SPECTRUM, PRIMARY, hexToRgba } from "../styles/tokens";
import { SpectrumBar } from "./SharedComponents";

/**
 * SiteHeader — Main navigation header for teg-blue.org
 */

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Start Here", href: "/concepts" },
  {
    label: "Explore",
    dropdown: [
      { label: "Foundational Concepts", href: "/concepts" },
      { label: "Models", href: "/models" },
      { label: "Frameworks", href: "/frameworks-map" },
      { label: "System Overview", href: "/foundations" },
    ],
  },
  {
    label: "Research",
    dropdown: [
      { label: "For Researchers", href: "/research-entry" },
      { label: "Scientific Foundations", href: "/scientific-foundations" },
      { label: "Publications", href: "/publications" },
      { label: "Methodology", href: "/methodology" },
    ],
  },
  {
    label: "Engage",
    dropdown: [
      { label: "AI Safety", href: "/ai-safety" },
      { label: "Collaborate", href: "/collaborate" },
      { label: "About", href: "/about" },
    ],
  },
  { label: "Glossary", href: "/glossary" },
];

export default function SiteHeader({ currentPath = "/" }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const matchesPath = (href, path) => {
    if (path === href) return true;
    if (href !== "/" && path.startsWith(href)) return true;
    // Individual framework pages also highlight the frameworks-map nav item
    if (href === "/frameworks-map" && path.startsWith("/frameworks/")) return true;
    // Individual model pages also highlight the models nav item
    if (href === "/models" && path.startsWith("/models/")) return true;
    // Individual concept pages also highlight the concepts nav item
    if (href === "/concepts" && path.startsWith("/concepts/")) return true;
    return false;
  };

  const isItemActive = (item) => {
    if (item.href) return matchesPath(item.href, currentPath);
    if (item.dropdown) {
      return item.dropdown.some((sub) => matchesPath(sub.href, currentPath));
    }
    return false;
  };

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
                color: TEXT.tertiary,
                textDecoration: "none",
              }}
            >
              TEG-Blue
            </Link>
            <span style={{ color: TEXT.tertiary }}>·</span>
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
            Open Knowledge
          </h1>
          <p
            style={{
              fontSize: 13,
              color: TEXT.secondary,
              marginTop: 4,
            }}
          >
            Understanding how the nervous system shapes everything
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
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = isItemActive(item);

            // Simple link item
            if (item.href) {
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
            }

            // Dropdown item
            return (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  style={{
                    padding: "12px 20px",
                    fontFamily: FONT.mono,
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                    color: isActive ? TEXT.primary : TEXT.tertiary,
                    background: "none",
                    border: "none",
                    borderBottom: isActive
                      ? `2px solid ${PRIMARY}`
                      : "2px solid transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    transition: `all ${TRANSITION.normal}`,
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    style={{
                      transform: openDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)",
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

                {/* Dropdown menu */}
                {openDropdown === item.label && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      minWidth: 180,
                      background: BG.primary,
                      border: `1px solid ${BORDER.default}`,
                      borderRadius: 6,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                      zIndex: 100,
                      padding: "6px 0",
                    }}
                  >
                    {item.dropdown.map((subItem) => {
                      const subActive = matchesPath(subItem.href, currentPath);
                      return (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          style={{
                            display: "block",
                            padding: "10px 16px",
                            fontFamily: FONT.mono,
                            fontSize: 13,
                            fontWeight: subActive ? 600 : 500,
                            color: subActive ? TEXT.primary : TEXT.secondary,
                            textDecoration: "none",
                            transition: `all ${TRANSITION.fast}`,
                            background: subActive ? hexToRgba(PRIMARY, 0.08) : "transparent",
                          }}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
