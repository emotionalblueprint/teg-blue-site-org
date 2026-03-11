"use client";

import Link from "next/link";
import { TEXT, SPACING, FONT, SPECTRUM, hexToRgba } from "../styles/tokens";
import { SpectrumBar } from "./SharedComponents";

/**
 * SiteFooter — Footer for teg-blue.org
 * Includes secondary navigation for pages not in the top nav
 */

export default function SiteFooter() {
  return (
    <footer
      style={{
        maxWidth: SPACING.containerMax,
        margin: "0 auto",
        padding: `40px ${SPACING.pagePadding}`,
        textAlign: "center",
      }}
    >
      <SpectrumBar variant="pattern" />

      <p style={{ fontSize: 11, color: TEXT.micro, marginTop: 16 }}>
        TEG-Blue · Created by Anna Paretas-Artacho · Open Science
      </p>

      {/* Secondary navigation — pages not in the top nav */}
      <p style={{ fontSize: 10, color: TEXT.micro, marginTop: 10, lineHeight: 1.8 }}>
        <Link href="/glossary" style={{ color: TEXT.hint, textDecoration: "none" }}>
          Glossary
        </Link>
        {" · "}
        <Link href="/scientific-foundations" style={{ color: TEXT.hint, textDecoration: "none" }}>
          Scientific Foundations
        </Link>
        {" · "}
        <Link href="/foundations" style={{ color: TEXT.hint, textDecoration: "none" }}>
          System Overview
        </Link>
        {" · "}
        <Link href="/methodology" style={{ color: TEXT.hint, textDecoration: "none" }}>
          Methodology
        </Link>
        {" · "}
        <Link href="/ai-safety" style={{ color: TEXT.hint, textDecoration: "none" }}>
          AI Safety
        </Link>
        {" · "}
        <Link href="/epistemological-foundations" style={{ color: TEXT.hint, textDecoration: "none" }}>
          Epistemology
        </Link>
        {" · "}
        <Link href="/ethics" style={{ color: TEXT.hint, textDecoration: "none" }}>
          Ethics
        </Link>
      </p>

      {/* Utility links */}
      <p style={{ fontSize: 10, color: TEXT.micro, marginTop: 8, lineHeight: 1.8 }}>
        <Link href="/citations" style={{ color: TEXT.hint, textDecoration: "none" }}>
          How to cite
        </Link>
        {" · "}
        <Link href="/emotional-technology" style={{ color: TEXT.hint, textDecoration: "none" }}>
          Emotional Technology
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

      {/* Link to .com application platform */}
      <div
        style={{
          marginTop: 20,
          padding: "12px 16px",
          background: hexToRgba(SPECTRUM.azure, 0.08),
          borderRadius: 8,
          border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
          maxWidth: 400,
          margin: "20px auto 0",
        }}
      >
        <p style={{ fontSize: 11, color: TEXT.secondary, marginBottom: 8 }}>
          Looking for interactive tools?
        </p>
        <a
          href="https://teg-blue.com"
          style={{
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
        <p style={{ fontSize: 10, color: TEXT.micro, marginTop: 6 }}>
          Circuit Board · Four-Mode Gradient · Emotional Tools
        </p>
      </div>

      <p style={{ fontSize: 10, color: TEXT.hint, marginTop: 14, lineHeight: 1.6, maxWidth: 340, margin: "14px auto 0" }}>
        Paid tiers on teg-blue.com fund the research. They do not create dependency or exploit vulnerability.{" "}
        <Link href="/ethics" style={{ color: TEXT.hint, textDecoration: "underline" }}>
          Ethics
        </Link>
      </p>

      <p
        style={{
          marginTop: 12,
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
