import Link from "next/link";
import { TEXT, FONT, EDITORIAL } from "@/src/styles/tokens";
import { SERIES } from "./mechanics-config";

/**
 * MechanicsSidebar — Sticky sidebar with series list and piece links.
 *
 * Props:
 *   activePiece: string — slug of the currently displayed piece
 *   showBackLink: boolean — show "← Back" link (true for individual piece pages)
 */
export default function MechanicsSidebar({ activePiece, showBackLink = false }) {
  return (
    <aside className="mop-sidebar">
      {showBackLink && (
        <Link
          href="/mechanics-of-phenomena"
          style={{
            display: "block",
            fontSize: 12,
            fontFamily: FONT.mono,
            color: EDITORIAL.accent,
            textDecoration: "none",
            marginBottom: 20,
            letterSpacing: "0.02em",
          }}
        >
          {"\u2190 The Mechanics of Phenomena"}
        </Link>
      )}

      <p
        style={{
          fontSize: 11,
          fontFamily: FONT.mono,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: TEXT.hint,
          marginBottom: 20,
        }}
      >
        In this section
      </p>

      {SERIES.map((series) => (
        <div key={series.slug} style={{ marginBottom: 28 }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 4,
            }}
          >
            {series.name}
          </p>
          <p
            style={{
              fontSize: 11,
              fontStyle: "italic",
              color: TEXT.hint,
              marginBottom: 12,
              lineHeight: 1.5,
            }}
          >
            {series.description}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {series.pieces.map((piece) => {
              const isActive = activePiece === piece.slug;
              const href = `/mechanics-of-phenomena/${series.slug}/${piece.slug}`;

              return (
                <Link
                  key={piece.slug}
                  href={href}
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: isActive ? EDITORIAL.accent : TEXT.muted,
                    fontWeight: isActive ? 500 : 400,
                    textDecoration: "none",
                    lineHeight: 1.5,
                    paddingLeft: isActive ? 10 : 0,
                    borderLeft: isActive
                      ? `2px solid ${EDITORIAL.accent}`
                      : "2px solid transparent",
                    transition: "all 150ms ease",
                  }}
                >
                  No. {String(piece.number).padStart(2, "0")} {"\u2014"} {piece.title}
                  {piece.featured && (
                    <span
                      style={{
                        fontSize: 9,
                        fontFamily: FONT.mono,
                        color: TEXT.hint,
                        marginLeft: 6,
                        letterSpacing: "0.04em",
                      }}
                    >
                      featured
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      <p style={{ fontSize: 11, fontStyle: "italic", color: TEXT.micro, marginTop: 8 }}>
        More coming.
      </p>
    </aside>
  );
}
