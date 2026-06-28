"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BG, BORDER, FONT, SPACING, TEXT, TRANSITION } from "../styles/tokens";
import { ThemeToggle } from "./theme/ThemeToggle";
import { SpectrumBar } from "./SharedComponents";
import { getLiveLocaleLinks } from "../i18n/routing";
import { isLive } from "../lib/live-paths";

const EXPLORE_LINKS = [
  {
    label: "TEG-Blue overview",
    href: "/foundations",
    description: "The Nervous System Gradient, research status, and applied tools.",
  },
  {
    label: "Scientific foundations",
    href: "/scientific-foundations",
    description: "Cited source fields that ground the Gradient and wider synthesis.",
  },
  {
    label: "Methodology",
    href: "/methodology",
    description: "Review status, claim calibration, testing roadmap, and limitations.",
  },
  {
    label: "Publications",
    href: "/publications",
    description: "Initial computational study, working papers, and source records.",
  },
  {
    label: "How it works",
    href: "/how-it-works",
    description: "Reviewer architecture: Engine, root data, and traceability.",
  },
  {
    label: "Citations",
    href: "/citations",
    description: "How to cite TEG-Blue, publications, and attribution language.",
  },
];

export default function SiteHeader({ currentPath = "/" }) {
  const [showStagedNav, setShowStagedNav] = useState(false);
  const localeLinks = getLiveLocaleLinks(currentPath);
  const exploreLinks = EXPLORE_LINKS.filter((link) => showStagedNav || isLive(link.href));

  useEffect(() => {
    setShowStagedNav(["localhost", "127.0.0.1", "::1"].includes(window.location.hostname));
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: BG.primary,
        borderBottom: `1px solid ${BORDER.default}`,
      }}
    >
      <div style={{ maxWidth: SPACING.containerMax, margin: "0 auto", padding: `14px ${SPACING.pagePadding}` }}>
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Link
            href="/"
            style={{
              color: TEXT.primary,
              fontFamily: FONT.display,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              transition: `color ${TRANSITION.normal}`,
            }}
          >
            TEG-Blue.org
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {exploreLinks.length > 0 && (
              <details
                className="site-explore-menu"
                style={{
                  position: "relative",
                }}
              >
                <summary
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    cursor: "pointer",
                    color: TEXT.secondary,
                    fontFamily: FONT.display,
                    fontSize: 13,
                    fontWeight: 500,
                    listStyle: "none",
                    userSelect: "none",
                    transition: `color ${TRANSITION.normal}`,
                  }}
                >
                  Explore
                  <span aria-hidden="true" style={{ fontSize: 11, color: TEXT.muted }}>
                    ▾
                  </span>
                </summary>
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 14px)",
                    right: 0,
                    zIndex: 120,
                    width: "min(86vw, 360px)",
                    padding: 8,
                    background: BG.primary,
                    border: `1px solid ${BORDER.default}`,
                    borderRadius: 10,
                    boxShadow: "0 18px 48px rgba(0, 0, 0, 0.28)",
                  }}
                >
                  {showStagedNav && (
                    <div
                      style={{
                        padding: "9px 10px 10px",
                        marginBottom: 4,
                        color: TEXT.muted,
                        fontFamily: FONT.mono,
                        fontSize: 10,
                        lineHeight: 1.5,
                        borderBottom: `1px solid ${BORDER.default}`,
                      }}
                    >
                      Local preview. These routes stay unpublished until added to the live allowlist.
                    </div>
                  )}
                  {exploreLinks.map((link) => {
                    const active = currentPath === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        style={{
                          display: "block",
                          padding: "10px 10px",
                          borderRadius: 7,
                          color: active ? TEXT.primary : TEXT.secondary,
                          background: active ? "var(--bg-elevated, rgba(148, 163, 184, 0.12))" : "transparent",
                          textDecoration: "none",
                          transition: `background ${TRANSITION.normal}, color ${TRANSITION.normal}`,
                        }}
                      >
                        <span style={{ display: "block", fontSize: 13, fontWeight: 600, lineHeight: 1.25 }}>
                          {link.label}
                        </span>
                        <span style={{ display: "block", marginTop: 3, fontSize: 11.5, lineHeight: 1.45, color: TEXT.muted }}>
                          {link.description}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </details>
            )}
            {localeLinks.length > 1 && (
              <nav
                aria-label="Language"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                  padding: 2,
                  border: `1px solid ${BORDER.default}`,
                  borderRadius: 8,
                }}
              >
                {localeLinks.map((locale) => (
                  <Link
                    key={locale.code}
                    href={locale.href}
                    aria-current={locale.active ? "page" : undefined}
                    title={locale.name}
                    style={{
                      minWidth: 28,
                      padding: "5px 7px",
                      borderRadius: 6,
                      color: locale.active ? TEXT.primary : TEXT.secondary,
                      background: locale.active ? "var(--bg-elevated, rgba(148, 163, 184, 0.12))" : "transparent",
                      fontFamily: FONT.mono,
                      fontSize: 11,
                      fontWeight: 600,
                      lineHeight: 1,
                      textAlign: "center",
                      textDecoration: "none",
                      transition: `color ${TRANSITION.normal}, background ${TRANSITION.normal}`,
                    }}
                  >
                    {locale.label}
                  </Link>
                ))}
              </nav>
            )}
            <a
              href="https://teg-blue.com/"
              style={{
                color: TEXT.secondary,
                fontFamily: FONT.display,
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
                transition: `color ${TRANSITION.normal}`,
              }}
            >
              Tools ↗
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
      <SpectrumBar height={3} variant="pattern" />
      <style>{`
        .site-explore-menu summary::-webkit-details-marker { display: none; }
        .site-explore-menu summary:hover { color: var(--text-primary); }
        .site-explore-menu a:hover { color: var(--text-primary) !important; background: var(--bg-elevated, rgba(148, 163, 184, 0.12)) !important; }
      `}</style>
    </header>
  );
}
