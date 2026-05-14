import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, hexToRgba } from "../styles/tokens";

/**
 * AuthorBlock — Condensed author credibility signal for high-intent pages.
 * Appears as a compact block linking to the full /about page.
 */
export default function AuthorBlock() {
  return (
    <div
      style={{
        padding: "16px 20px",
        background: BG.card,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${hexToRgba(SPECTRUM.indigo, 0.5)}`,
      }}
    >
      <p
        style={{
          fontSize: 13,
          color: TEXT.secondary,
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        <strong style={{ color: TEXT.primary }}>Anna Paretas-Artacho</strong>
        {" — "}
        Founder and creator of TEG-Blue, working independently from Barcelona. 25+ years of professional practice in systems thinking. TEG-Blue developed over two years as an integrative architecture synthesizing 145+ theoretical contributions from 41 research traditions across 24 scientific domains.{" "}
        <Link
          href="/about"
          style={{ color: SPECTRUM.blue, textDecoration: "none", fontWeight: 500 }}
        >
          Full background →
        </Link>
      </p>
    </div>
  );
}
