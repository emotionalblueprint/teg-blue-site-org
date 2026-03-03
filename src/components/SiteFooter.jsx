"use client";

import Link from "next/link";
import { TEXT, SPACING, FONT, SPECTRUM } from "../styles/tokens";
import { SpectrumBar } from "./SharedComponents";

/**
 * SiteFooter — Footer for teg-blue.org
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
        TEG-Blue · Emotional Technology Research · Open Science
      </p>

      <p style={{ fontSize: 10, color: TEXT.micro, marginTop: 8, lineHeight: 1.8 }}>
        <span style={{ color: TEXT.hint, marginRight: 4 }}>Concepts:</span>
        <Link href="/emotional-technology" style={{ color: TEXT.hint, textDecoration: "none" }}>
          Emotional Technology
        </Link>
      </p>

      <p style={{ fontSize: 10, color: TEXT.micro, marginTop: 8, lineHeight: 1.8 }}>
        <Link href="/citations" style={{ color: TEXT.hint, textDecoration: "none" }}>
          How to cite
        </Link>
        {" · "}
        <Link href="/collaborate" style={{ color: TEXT.hint, textDecoration: "none" }}>
          Collaborate
        </Link>
        {" · "}
        <Link href="/methodology" style={{ color: TEXT.hint, textDecoration: "none" }}>
          Methodology
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
          background: "rgba(74, 155, 232, 0.08)",
          borderRadius: 8,
          border: "1px solid rgba(74, 155, 232, 0.15)",
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

      <p
        style={{
          marginTop: 16,
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
