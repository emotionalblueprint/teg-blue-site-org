import { TEXT, FONT, BORDER } from "@/src/styles/tokens";

export default function PartDivider({ label, title, color }) {
  return (
    <div
      style={{
        marginBottom: 32,
        marginTop: 16,
        paddingTop: 24,
        borderTop: `1px solid ${BORDER.default}`,
      }}
    >
      <span
        style={{
          fontFamily: FONT.mono,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: color,
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: TEXT.primary,
          margin: "4px 0 0",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
