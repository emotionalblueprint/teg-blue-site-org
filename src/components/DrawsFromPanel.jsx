import Link from "next/link";
import { TEXT, FONT, SPECTRUM, hexToRgba, gradientCardBg } from "../styles/tokens";

/**
 * DrawsFromPanel — Reusable grid of framework/model link cards.
 * Used at the bottom of model pages to show theoretical connections.
 *
 * @param {Array<{id: string, title: string, relation: string, description: string, href: string}>} items
 * @param {string} color - Model identity color for section heading (hex)
 */
export default function DrawsFromPanel({ items, color }) {
  return (
    <section
      id="relationship-to-frameworks"
      aria-labelledby="heading-draws-from"
      style={{ marginBottom: 48 }}
    >
      <h2
        id="heading-draws-from"
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: color,
          letterSpacing: "-0.01em",
          marginBottom: 16,
          paddingBottom: 8,
          borderBottom: `2px solid ${hexToRgba(color, 0.2)}`,
        }}
      >
        Draws From
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 12,
        }}
      >
        {items.map(({ id, title, relation, description, href }) => (
          <Link
            key={id}
            href={href}
            style={{
              display: "block",
              padding: 16,
              background: gradientCardBg(SPECTRUM.cobalt, 0.06),
              border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
              borderRadius: 10,
              textDecoration: "none",
              transition: "border-color 200ms ease",
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontFamily: FONT.mono,
                color: SPECTRUM.cobalt,
                marginBottom: 6,
              }}
            >
              {id}
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: TEXT.primary,
                marginBottom: 4,
              }}
            >
              {title}
            </div>
            {relation && (
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: SPECTRUM.cobalt,
                  fontFamily: FONT.mono,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: 8,
                }}
              >
                {relation}
              </div>
            )}
            <div
              style={{
                fontSize: 13,
                color: TEXT.secondary,
                lineHeight: 1.6,
              }}
            >
              {description}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
