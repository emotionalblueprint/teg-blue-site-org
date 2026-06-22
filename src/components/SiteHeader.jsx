"use client";

import Link from "next/link";
import { BG, BORDER, FONT, SPACING, TEXT, TRANSITION } from "../styles/tokens";
import { ThemeToggle } from "./theme/ThemeToggle";
import { SpectrumBar } from "./SharedComponents";

export default function SiteHeader() {
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
