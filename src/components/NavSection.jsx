import Link from "next/link";
import { BG, TEXT, BORDER } from "@/src/styles/tokens";
import { sectionHeadingStyle, navThStyle } from "@/src/styles/pageStyles";

export default function NavSection({ color, items }) {
  return (
    <section
      id="where-to-go-next"
      aria-labelledby="heading-where-to-go-next"
      style={{ marginBottom: 32 }}
    >
      <h2 id="heading-where-to-go-next" style={sectionHeadingStyle(color)}>
        Where to Go Next
      </h2>
      <div
        style={{
          background: BG.card,
          borderRadius: 8,
          border: `1px solid ${BORDER.default}`,
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: BG.surface }}>
              <th style={navThStyle}>If you want to...</th>
              <th style={navThStyle}>Go here</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} style={{ borderTop: `1px solid ${BORDER.default}` }}>
                <td style={{ padding: "12px 16px", fontSize: 14, color: TEXT.secondary }}>
                  {item.label}
                </td>
                <td style={{ padding: "12px 16px", fontSize: 14 }}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: color, textDecoration: "none", fontWeight: 500 }}
                    >
                      {item.linkText}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      style={{ color: color, textDecoration: "none", fontWeight: 500 }}
                    >
                      {item.linkText}
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
