"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BLUE, FONT, SPACING, TRANSITION, hexToRgba } from "../styles/tokens";
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
    description: "Gradient, Engine, public tools, and research questions.",
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
        background: `linear-gradient(180deg, ${hexToRgba(BLUE[950], 0.96)} 0%, ${hexToRgba(BLUE[900], 0.94)} 100%)`,
        borderBottom: `1px solid ${hexToRgba(BLUE[200], 0.18)}`,
        boxShadow: `0 12px 34px ${hexToRgba(BLUE[950], 0.30)}`,
        backdropFilter: "blur(14px)",
      }}
    >
      <div style={{ maxWidth: SPACING.containerMax, margin: "0 auto", padding: `12px ${SPACING.pagePadding}` }}>
        <nav className="site-header-nav" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Link
            href="/"
            className="site-brand"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: BLUE[50],
              fontFamily: FONT.mono,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              transition: `color ${TRANSITION.normal}`,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 26,
                height: 26,
                display: "inline-grid",
                placeItems: "center",
                borderRadius: 6,
                color: BLUE[200],
                border: `1px solid ${hexToRgba(BLUE[200], 0.30)}`,
                background: hexToRgba(BLUE[300], 0.10),
                fontSize: 11,
                lineHeight: 1,
              }}
            >
              TB
            </span>
            <span>TEG-Blue.org</span>
          </Link>
          <div className="site-header-actions" style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {exploreLinks.length > 0 && (
              <details
                className="site-explore-menu"
                style={{
                  position: "relative",
                  background: "transparent",
                  border: "none",
                  borderRadius: 0,
                }}
              >
                <summary
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: 0,
                    cursor: "pointer",
                    color: BLUE[100],
                    fontFamily: FONT.mono,
                    fontSize: 13,
                    fontWeight: 650,
                    listStyle: "none",
                    userSelect: "none",
                    transition: `color ${TRANSITION.normal}`,
                  }}
                >
                  Explore
                  <span aria-hidden="true" style={{ fontSize: 11, color: BLUE[300] }}>
                    ▾
                  </span>
                </summary>
                <div
                  className="site-explore-panel"
                  style={{
                    position: "absolute",
                    top: "calc(100% + 14px)",
                    right: 0,
                    zIndex: 120,
                    width: "min(86vw, 360px)",
                    padding: 8,
                    background: `linear-gradient(180deg, ${BLUE[900]} 0%, ${BLUE[950]} 100%)`,
                    border: `1px solid ${hexToRgba(BLUE[200], 0.18)}`,
                    borderRadius: 8,
                    boxShadow: `0 24px 60px ${hexToRgba(BLUE[950], 0.48)}`,
                  }}
                >
                  {showStagedNav && (
                    <div
                      style={{
                        padding: "9px 10px 10px",
                        marginBottom: 4,
                        color: BLUE[200],
                        fontFamily: FONT.mono,
                        fontSize: 10,
                        lineHeight: 1.5,
                        borderBottom: `1px solid ${hexToRgba(BLUE[200], 0.18)}`,
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
                          borderRadius: 6,
                          color: active ? BLUE[50] : BLUE[100],
                          background: active ? hexToRgba(BLUE[300], 0.12) : "transparent",
                          textDecoration: "none",
                          transition: `background ${TRANSITION.normal}, color ${TRANSITION.normal}`,
                        }}
                      >
                        <span style={{ display: "block", fontSize: 13, fontWeight: 600, lineHeight: 1.25 }}>
                          {link.label}
                        </span>
                        <span style={{ display: "block", marginTop: 3, fontSize: 11.5, lineHeight: 1.45, color: BLUE[200] }}>
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
                  border: `1px solid ${hexToRgba(BLUE[200], 0.18)}`,
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
                      color: locale.active ? BLUE[50] : BLUE[100],
                      background: locale.active ? hexToRgba(BLUE[300], 0.12) : "transparent",
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
              className="site-tools-link"
              style={{
                color: BLUE[100],
                fontFamily: FONT.mono,
                fontSize: 13,
                fontWeight: 650,
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
      <SpectrumBar height={4} variant="pattern" />
      <style>{`
        .site-explore-menu summary::-webkit-details-marker { display: none; }
        .site-explore-menu summary::after { display: none; }
        .site-explore-menu summary:hover { color: ${BLUE[50]}; }
        .site-explore-menu a:hover { color: ${BLUE[50]} !important; background: ${hexToRgba(BLUE[300], 0.12)} !important; }
        .site-brand:hover,
        .site-tools-link:hover { color: ${BLUE[300]} !important; }
        @media (max-width: 720px) {
          .site-header-nav { align-items: flex-start !important; }
          .site-header-actions { gap: 10px !important; flex-wrap: wrap; justify-content: flex-end; }
        }
        @media (max-width: 480px) {
          .site-explore-panel {
            position: fixed !important;
            top: 62px !important;
            left: 12px !important;
            right: 12px !important;
            width: auto !important;
            max-height: calc(100vh - 82px);
            overflow: auto;
          }
        }
      `}</style>
    </header>
  );
}
