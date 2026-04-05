// src/components/BridgeSection.jsx
import Link from "next/link";
import { TEXT, FONT, hexToRgba } from "@/src/styles/tokens";

/**
 * BridgeSection — Closes this F's argument and opens the next.
 * 2-3 sentences: what was established, the question this F can't answer, link to next F.
 *
 * @param {string} color - Accent color
 * @param {string} established - What this F established (one sentence)
 * @param {string} question - The question this F cannot answer (one sentence)
 * @param {string} nextFramework - Next F identifier (e.g., "F2")
 * @param {string} nextTitle - Next F title (e.g., "Developmental Calibration")
 * @param {string} nextHref - Next F URL path
 */
export default function BridgeSection({ color, established, question, nextFramework, nextTitle, nextHref }) {
  return (
    <section
      id="bridge"
      aria-labelledby="heading-bridge"
      style={{ marginBottom: 32 }}
    >
      <h2
        id="heading-bridge"
        style={{
          fontSize: 11,
          fontWeight: 700,
          fontFamily: FONT.mono,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: TEXT.muted,
          marginBottom: 12,
        }}
      >
        Bridge to {nextFramework}
      </h2>
      <div
        style={{
          padding: "20px 24px",
          background: hexToRgba(color, 0.04),
          borderRadius: 8,
          borderLeft: `3px solid ${hexToRgba(color, 0.3)}`,
        }}
      >
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: "0 0 8px" }}>
          {established}
        </p>
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: "0 0 12px" }}>
          {question}
        </p>
        <Link
          href={nextHref}
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: color,
            textDecoration: "none",
          }}
        >
          {nextFramework}: {nextTitle} →
        </Link>
      </div>
    </section>
  );
}
