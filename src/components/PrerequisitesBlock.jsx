// src/components/PrerequisitesBlock.jsx
import Link from "next/link";
import { TEXT, FONT, SPECTRUM, hexToRgba } from "@/src/styles/tokens";

/**
 * PrerequisitesBlock — "What you need to know before reading this."
 * One sentence per concept from earlier Fs that this argument depends on.
 *
 * @param {Array<{concept: string, framework: string, description: string, href: string}>} items
 */
export default function PrerequisitesBlock({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <section
      id="prerequisites"
      aria-labelledby="heading-prerequisites"
      style={{ marginBottom: 36 }}
    >
      <h3
        id="heading-prerequisites"
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
        Before reading this framework
      </h3>
      <div
        style={{
          padding: "16px 20px",
          background: hexToRgba(SPECTRUM.slate, 0.05),
          borderRadius: 8,
          borderLeft: `3px solid ${hexToRgba(SPECTRUM.slate, 0.25)}`,
        }}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: 14,
                color: TEXT.secondary,
                lineHeight: 1.7,
                marginBottom: i < items.length - 1 ? 10 : 0,
              }}
            >
              <strong style={{ color: TEXT.primary }}>{item.concept}</strong>
              {" "}({item.framework}) — {item.description}{" "}
              <Link
                href={item.href}
                style={{
                  color: SPECTRUM.cobalt,
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                Read in {item.framework} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
