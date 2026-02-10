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
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <SpectrumBar />

      <p style={{ fontSize: 11, color: TEXT.micro, marginTop: 16 }}>
        TEG-Blue Research Consortium · Open Science
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
          href="https://teg-blue.com"
          style={{ color: TEXT.hint, textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          teg-blue.com ↗
        </a>
      </p>

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
