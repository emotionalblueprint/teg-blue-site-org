"use client";

import Link from "next/link";
import { BG, BORDER, FONT, SPACING, SPECTRUM, TEXT, TONE, TRANSITION, hexToRgba } from "../styles/tokens";
import { ThemeToggle } from "./theme/ThemeToggle";
import { SpectrumBar } from "./SharedComponents";
import { getLiveLocaleLinks } from "../i18n/routing";
import { isLive } from "../lib/live-paths";

const EXPLORE_LINKS = [
  {
    label: "About",
    href: "/about",
    description: "Project background, founder, research stance, contact routes, and site distinction.",
  },
  {
    label: "TEG-Blue overview",
    href: "/foundations",
    description: "The Emotional Gradient Blueprint and the central Nervous System Gradient map.",
  },
  {
    label: "Pattern reading",
    href: "/methodology",
    description: "How TEG-Blue separates observation, interpretation, impact, and claim status.",
  },
  {
    label: "Scientific grounding",
    href: "/scientific-foundations",
    description: "Research areas, field boundaries, and claim discipline behind the map.",
  },
  {
    label: "Ethics",
    href: "/ethics",
    description: "Dignity, agency, source honesty, attribution, permission, impact, and repair.",
  },
  {
    label: "Publications",
    href: "/publications",
    description: "Public records, release pointers, citation guidance, and source posture.",
  },
  {
    label: "Glossary",
    href: "/glossary",
    description: "Current public terms for the Blueprint and the central map.",
  },
  {
    label: "Collaborate",
    href: "/collaborate",
    description: "Research review, applied builds, and licensing conversations.",
  },
];

export default function SiteHeader({ currentPath = "/" }) {
  const localeLinks = getLiveLocaleLinks(currentPath);
  const exploreLinks = EXPLORE_LINKS.filter((link) => isLive(link.href));

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: BG.primary,
        borderBottom: `1px solid ${BORDER.default}`,
        boxShadow: "0 12px 34px rgba(4, 8, 18, 0.22)",
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
              color: TEXT.primary,
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
                color: TONE.brandMark.text,
                border: `1px solid ${TONE.brandMark.border}`,
                background: TONE.brandMark.bg,
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
                    color: TEXT.secondary,
                    fontFamily: FONT.mono,
                    fontSize: 13,
                    fontWeight: 650,
                    listStyle: "none",
                    userSelect: "none",
                    transition: `color ${TRANSITION.normal}`,
                  }}
                >
                  Explore
                  <span aria-hidden="true" style={{ fontSize: 11, color: TONE.spectrum.azure }}>
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
                    background: BG.diagram,
                    border: `1px solid ${BORDER.default}`,
                    borderRadius: 8,
                    boxShadow: "0 24px 60px rgba(4, 8, 18, 0.42)",
                  }}
                >
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
                          color: active ? TEXT.primary : TEXT.secondary,
                          background: active ? hexToRgba(SPECTRUM.azure, 0.12) : "transparent",
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
                      background: locale.active ? hexToRgba(SPECTRUM.azure, 0.12) : "transparent",
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
                color: TEXT.secondary,
                fontFamily: FONT.mono,
                fontSize: 13,
                fontWeight: 650,
                textDecoration: "none",
                transition: `color ${TRANSITION.normal}`,
              }}
            >
              Practical tools ↗
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
      <SpectrumBar height={4} variant="pattern" />
      <style>{`
        .site-explore-menu summary::-webkit-details-marker { display: none; }
        .site-explore-menu summary::after { display: none; }
        .site-explore-menu summary:hover { color: ${TEXT.primary}; }
        .site-explore-menu a:hover { color: ${TEXT.primary} !important; background: ${hexToRgba(SPECTRUM.azure, 0.12)} !important; }
        .site-brand:hover,
        .site-tools-link:hover { color: ${TONE.spectrum.azure} !important; }
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
