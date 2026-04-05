// src/components/EstablishesSection.jsx
import { TEXT, FONT, BORDER, hexToRgba } from "@/src/styles/tokens";
import { sectionHeadingStyle } from "@/src/styles/pageStyles";

/**
 * EstablishesSection — Consolidated reference block.
 * Definitions and formulations, scannable. Placed after the argument.
 *
 * @param {string} color - Accent color
 * @param {string} title - Section title (default: "What This Framework Establishes")
 * @param {Array<{term: string, definition: string}>} items
 */
export default function EstablishesSection({ color, title = "What This Framework Establishes", items }) {
  if (!items || items.length === 0) return null;

  return (
    <section
      id="establishes"
      aria-labelledby="heading-establishes"
      style={{ marginBottom: 32 }}
    >
      <h2 id="heading-establishes" style={sectionHeadingStyle(color)}>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 1, background: BORDER.default, borderRadius: 6, overflow: "hidden" }}>
        {items.map((item, i) => (
          <div key={i} style={{ padding: "12px 16px", background: hexToRgba(color, 0.03) }}>
            <dt style={{
              fontSize: 13,
              fontWeight: 600,
              fontFamily: FONT.mono,
              color: TEXT.primary,
              marginBottom: 4,
            }}>
              {item.term}
            </dt>
            <dd style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.7,
              margin: 0,
            }}>
              {item.definition}
            </dd>
          </div>
        ))}
      </div>
    </section>
  );
}
