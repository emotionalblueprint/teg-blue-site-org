"use client";

import Link from "next/link";
import { BG, BORDER, FONT, SPACING, TEXT, TRANSITION } from "../styles/tokens";
import { ThemeToggle } from "./theme/ThemeToggle";
import { SpectrumBar } from "./SharedComponents";
import { getLiveLocaleLinks } from "../i18n/routing";

export default function SiteHeader({ currentPath = "/" }) {
  const localeLinks = getLiveLocaleLinks(currentPath);

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
    </header>
  );
}
