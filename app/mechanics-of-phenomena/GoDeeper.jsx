import Link from "next/link";
import { TEXT, FONT, EDITORIAL, hexToRgba } from "@/src/styles/tokens";

/**
 * GoDeeper — Amber-tinted panel at the bottom of each piece.
 * Bridge into the rest of teg-blue.org.
 *
 * Props:
 *   items: Array of { description: string, label: string, href: string }
 */
export default function GoDeeper({ items }) {
  return (
    <div
      style={{
        marginTop: 48,
        padding: "32px 28px",
        background: hexToRgba(EDITORIAL.accentMuted, 0.25),
        border: `1px solid ${hexToRgba(EDITORIAL.accent, 0.2)}`,
        borderRadius: 8,
      }}
    >
      <h2
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: EDITORIAL.accent,
          marginBottom: 24,
          letterSpacing: "-0.01em",
        }}
      >
        Go deeper
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {items.map((item, i) => (
          <div key={i}>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: TEXT.primary,
                marginBottom: 6,
                lineHeight: 1.5,
              }}
            >
              {item.description}
            </p>
            <Link
              href={item.href}
              style={{
                fontSize: 14,
                color: EDITORIAL.accent,
                textDecoration: "none",
                fontFamily: FONT.mono,
                letterSpacing: "0.01em",
              }}
            >
              {"\u2192 "}{item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
