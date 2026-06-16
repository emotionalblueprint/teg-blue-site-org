"use client";

import Link from "next/link";
import { TEXT, SPACING, FONT, SPECTRUM, hexToRgba } from "../styles/tokens";
import { SpectrumBar } from "./SharedComponents";

/**
 * SiteFooter — Footer for teg-blue.org
 * Identity, license, the essential links not already in the top nav,
 * and the cross-link to the teg-blue.com application platform.
 */

export default function SiteFooter() {
  return (
    <footer
      style={{
        maxWidth: SPACING.containerMax,
        margin: "0 auto",
        padding: `32px ${SPACING.pagePadding}`,
        textAlign: "center",
      }}
    >
      <SpectrumBar variant="pattern" />

      <p style={{ fontSize: 11, color: TEXT.micro, marginTop: 16 }}>
        TEG-Blue · Created by Anna Paretas-Artacho
      </p>

      {/* Essential links not already in the top nav */}
      <p style={{ fontSize: 10, color: TEXT.micro, marginTop: 10, lineHeight: 1.8 }}>
        <Link href="/citations" style={{ color: TEXT.hint, textDecoration: "none" }}>
          How to cite
        </Link>
        {" · "}
        <Link href="/methodology" style={{ color: TEXT.hint, textDecoration: "none" }}>
          Methodology
        </Link>
        {" · "}
        <Link href="/ethics" style={{ color: TEXT.hint, textDecoration: "none" }}>
          Ethics
        </Link>
        {" · "}
        <a
          href="https://github.com/emotionalblueprint/ai-safety"
          style={{ color: TEXT.hint, textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>

      {/* Cross-link to the .com application platform */}
      <div
        style={{
          padding: "12px 16px",
          background: hexToRgba(SPECTRUM.azure, 0.08),
          borderRadius: 8,
          border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
          maxWidth: 360,
          margin: "20px auto 0",
        }}
      >
        <p style={{ fontSize: 11, color: TEXT.secondary, marginBottom: 8 }}>
          Looking for interactive tools?
        </p>
        <a
          href="https://teg-blue.com"
          style={{
            display: "block",
            fontSize: 12,
            fontFamily: FONT.mono,
            color: SPECTRUM.azure,
            textDecoration: "none",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore TEG-Blue.com →
        </a>
        <a
          href="https://teg-blue.com/for-therapists"
          style={{
            display: "block",
            marginTop: 6,
            fontSize: 12,
            fontFamily: FONT.mono,
            color: SPECTRUM.azure,
            textDecoration: "none",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          For therapists →
        </a>
      </div>

      <p
        style={{
          marginTop: 14,
          fontSize: 10,
          fontFamily: FONT.mono,
          color: TEXT.micro,
        }}
      >
        CC-BY-NC-SA-4.0
      </p>
    </footer>
  );
}
