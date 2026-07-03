import Link from "next/link";
import { BG, BORDER, FONT, RADIUS, SPECTRUM, TEXT, hexToRgba } from "@/src/styles/tokens";

export function SectionKicker({ children, color = SPECTRUM.azure }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 8,
        color,
        fontFamily: FONT.diagram,
        fontSize: 10,
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: 0,
        textTransform: "uppercase",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 18,
          height: 1,
          background: color,
        }}
      />
      {children}
    </div>
  );
}

export function EditorialSection({ id, kicker, title, lead, color = SPECTRUM.azure, children }) {
  return (
    <section id={id} style={{ marginBottom: 42 }}>
      {kicker && <SectionKicker color={color}>{kicker}</SectionKicker>}
      {title && <h2 style={sectionTitleStyle}>{title}</h2>}
      {lead && <p style={leadStyle}>{lead}</p>}
      {children}
    </section>
  );
}

export function EditorialGrid({ children, min = 240, gap = 12, style }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))`,
        gap,
        marginTop: 18,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function InstrumentCard({ label, title, body, color = SPECTRUM.azure, children, minHeight = 156, rail = "left" }) {
  const railKey = rail === "top" ? "borderTop" : "borderLeft";

  return (
    <article
      style={{
        minHeight,
        padding: 16,
        background: `linear-gradient(135deg, ${hexToRgba(color, 0.055)}, transparent 76%), ${BG.card}`,
        border: `1px solid ${hexToRgba(color, 0.16)}`,
        [railKey]: `3px solid ${color}`,
        borderRadius: RADIUS.md,
      }}
    >
      {label && <SectionKicker color={color}>{label}</SectionKicker>}
      {title && <h3 style={cardTitleStyle}>{title}</h3>}
      {body && <p style={cardBodyStyle}>{body}</p>}
      {children}
    </article>
  );
}

export function PlainPanel({ title, body, children }) {
  return (
    <article style={plainPanelStyle}>
      {title && <h3 style={cardTitleStyle}>{title}</h3>}
      {body && <p style={cardBodyStyle}>{body}</p>}
      {children}
    </article>
  );
}

export function CalloutPanel({ title, body, color = SPECTRUM.azure, children }) {
  return (
    <div
      style={{
        marginTop: 18,
        padding: 18,
        background: `linear-gradient(135deg, ${hexToRgba(color, 0.065)}, transparent 78%), ${BG.card}`,
        border: `1px solid ${hexToRgba(color, 0.18)}`,
        borderLeft: `3px solid ${color}`,
        borderRadius: RADIUS.md,
      }}
    >
      {title && (
        <p style={{ ...bodyStyle, color: TEXT.primary, fontWeight: 650, marginBottom: body ? 8 : 0 }}>
          {title}
        </p>
      )}
      {body && <p style={bodyStyle}>{body}</p>}
      {children}
    </div>
  );
}

export function PillCluster({ items, color = SPECTRUM.azure }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
      {items.map((item) => (
        <span
          key={item}
          style={{
            padding: "7px 10px",
            borderRadius: RADIUS.sm,
            border: `1px solid ${hexToRgba(color, 0.20)}`,
            background: hexToRgba(color, 0.06),
            color: TEXT.secondary,
            fontSize: 12,
            lineHeight: 1.3,
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function ReferenceTable({ rows, headers = ["For", "Visit"] }) {
  return (
    <div style={tableWrapStyle}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: BG.surface }}>
            {headers.map((header) => (
              <th key={header} style={tableHeaderStyle}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.label}-${row.href}`} style={{ borderTop: `1px solid ${BORDER.default}` }}>
              <td style={{ ...tableCellStyle, color: TEXT.secondary }}>{row.label}</td>
              <td style={tableCellStyle}>
                <ReferenceLink row={row} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ReferenceLink({ row }) {
  const isExternal = row.external || row.href.startsWith("http") || row.href.startsWith("mailto:");
  const style = {
    color: row.color || SPECTRUM.azure,
    textDecoration: "none",
    fontWeight: 600,
  };

  if (isExternal) {
    return (
      <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined} style={style}>
        {row.text}
      </a>
    );
  }

  return (
    <Link href={row.href} style={style}>
      {row.text}
    </Link>
  );
}

const sectionTitleStyle = {
  fontSize: 22,
  fontWeight: 720,
  color: TEXT.primary,
  lineHeight: 1.22,
  margin: "0 0 10px",
  letterSpacing: 0,
};

const leadStyle = {
  fontSize: 15,
  color: TEXT.secondary,
  lineHeight: 1.8,
  margin: 0,
  maxWidth: 790,
};

const bodyStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.75,
  margin: 0,
};

const cardTitleStyle = {
  fontSize: 15,
  fontWeight: 650,
  color: TEXT.primary,
  lineHeight: 1.35,
  margin: "0 0 8px",
  letterSpacing: 0,
};

const cardBodyStyle = {
  fontSize: 13,
  color: TEXT.secondary,
  lineHeight: 1.65,
  margin: 0,
};

const plainPanelStyle = {
  padding: 16,
  background: BG.card,
  border: `1px solid ${BORDER.default}`,
  borderRadius: RADIUS.md,
};

const tableWrapStyle = {
  background: BG.card,
  borderRadius: RADIUS.md,
  border: `1px solid ${BORDER.default}`,
  overflowX: "auto",
  marginTop: 16,
};

const tableHeaderStyle = {
  padding: "12px 16px",
  textAlign: "left",
  fontSize: 11,
  fontFamily: FONT.mono,
  textTransform: "uppercase",
  letterSpacing: 0,
  color: TEXT.muted,
};

const tableCellStyle = {
  padding: "13px 16px",
  fontSize: 13,
  lineHeight: 1.5,
};
