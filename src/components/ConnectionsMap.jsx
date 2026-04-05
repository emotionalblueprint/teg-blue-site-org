import Link from "next/link";
import { TEXT, FONT, hexToRgba } from "@/src/styles/tokens";
import { sectionHeadingStyle } from "@/src/styles/pageStyles";

export default function ConnectionsMap({ color, connections }) {
  return (
    <section
      id="connections"
      aria-labelledby="heading-connections"
      style={{ marginBottom: 32 }}
    >
      <h2 id="heading-connections" style={sectionHeadingStyle(color)}>
        Connections Map
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {connections.map((conn, i) => (
          <div
            key={i}
            style={{
              padding: "12px 16px",
              background: hexToRgba(color, 0.04),
              borderRadius: 6,
              borderLeft: `3px solid ${hexToRgba(color, 0.3)}`,
            }}
          >
            <Link
              href={conn.href}
              style={{
                fontSize: 13,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: color,
                textDecoration: "none",
              }}
            >
              {conn.id}
            </Link>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: "4px 0 0" }}>
              {conn.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
