"use client";

import Link from "next/link";
import { BG, BORDER, FONT, SPACING, SPECTRUM, TEXT, TONE, TRANSITION, hexToRgba } from "../styles/tokens";
import { ThemeToggle } from "./theme/ThemeToggle";
import { SpectrumBar } from "./SharedComponents";
import { getLiveLocaleLinks } from "../i18n/routing";
import { getLocaleFromPath } from "../i18n/config";
import { HEADER_COPY, getSiteCopy } from "../i18n/site-copy";

export default function SiteHeader({ currentPath = "/" }) {
  const locale = getLocaleFromPath(currentPath);
  const copy = getSiteCopy(HEADER_COPY, locale);
  const localeLinks = getLiveLocaleLinks(currentPath);

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
            {localeLinks.length > 1 && (
              <nav
                aria-label={copy.languageLabel}
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
              {copy.toolsLabel}
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
      <SpectrumBar height={4} variant="pattern" />
      <style>{`
        .site-brand:hover,
        .site-tools-link:hover { color: ${TONE.spectrum.azure} !important; }
        @media (max-width: 720px) {
          .site-header-nav { align-items: flex-start !important; }
          .site-header-actions { gap: 10px !important; flex-wrap: wrap; justify-content: flex-end; }
        }
      `}</style>
    </header>
  );
}
