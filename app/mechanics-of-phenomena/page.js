import Link from "next/link";
import { BG, TEXT, FONT, BORDER, EDITORIAL, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import MechanicsLayout from "./MechanicsLayout";
import { SERIES } from "./mechanics-config";

export const metadata = {
  title: "The Mechanics of Phenomena | TEG-Blue Research",
  description:
    "A growing collection where observable phenomena — from science, nature, and human behavior — reveal the structure underneath. Long-form essays by Anna Paretas-Artacho.",
  keywords: [
    "mechanics of phenomena",
    "emotional regulation",
    "pattern recognition",
    "human behavior",
    "systems thinking",
    "TEG-Blue",
    "nervous system",
    "regulatory systems",
  ],
  alternates: {
    canonical: "https://teg-blue.org/mechanics-of-phenomena",
  },
  openGraph: {
    title: "The Mechanics of Phenomena | TEG-Blue",
    description:
      "Observable phenomena reveal the structure underneath. Long-form essays on patterns in human behavior, nature, and systems.",
    url: "https://teg-blue.org/mechanics-of-phenomena",
    type: "website",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mechanics of Phenomena | TEG-Blue",
    description:
      "Observable phenomena reveal the structure underneath. Long-form essays by Anna Paretas-Artacho.",
  },
};

export default function MechanicsOfPhenomenaPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/mechanics-of-phenomena" />

      <MechanicsLayout showSectionHeader={true}>
        {/* Series index — cards grouped by series */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {SERIES.map((series) => (
            <section key={series.slug}>
              {/* Series header */}
              <div style={{ marginBottom: 16 }}>
                <h2
                  style={{
                    fontSize: 11,
                    fontFamily: FONT.mono,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: EDITORIAL.accent,
                    marginBottom: 6,
                  }}
                >
                  {series.name}
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    color: TEXT.muted,
                    lineHeight: 1.65,
                  }}
                >
                  {series.description}
                </p>
              </div>

              {/* Piece cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {series.pieces.map((piece) => {
                  const href = `/mechanics-of-phenomena/${series.slug}/${piece.slug}`;
                  return (
                    <Link
                      key={piece.slug}
                      href={href}
                      style={{
                        display: "block",
                        padding: "20px 24px",
                        background: BG.card,
                        borderRadius: 10,
                        border: `1px solid ${BORDER.default}`,
                        borderLeft: `3px solid ${piece.featured ? EDITORIAL.accent : hexToRgba(EDITORIAL.accent, 0.3)}`,
                        textDecoration: "none",
                        transition: "border-color 0.2s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <span
                          style={{
                            fontFamily: FONT.mono,
                            fontSize: 11,
                            fontWeight: 600,
                            color: EDITORIAL.accent,
                            letterSpacing: "0.04em",
                          }}
                        >
                          No. {String(piece.number).padStart(2, "0")}
                        </span>
                        {piece.featured && (
                          <span
                            style={{
                              fontFamily: FONT.mono,
                              fontSize: 9,
                              fontWeight: 500,
                              color: TEXT.hint,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              padding: "2px 8px",
                              borderRadius: 4,
                              border: `1px solid ${BORDER.default}`,
                            }}
                          >
                            featured
                          </span>
                        )}
                      </div>
                      <h3
                        style={{
                          fontSize: 17,
                          fontWeight: 600,
                          color: piece.featured ? EDITORIAL.accent : TEXT.primary,
                          lineHeight: 1.3,
                          marginBottom: 8,
                        }}
                      >
                        {piece.title}
                      </h3>
                      {piece.subtitle && (
                        <p
                          style={{
                            fontSize: 13,
                            fontStyle: "italic",
                            color: TEXT.secondary,
                            lineHeight: 1.6,
                            marginBottom: 10,
                          }}
                        >
                          {piece.subtitle}
                        </p>
                      )}
                      {piece.connection && (
                        <p
                          style={{
                            fontFamily: FONT.mono,
                            fontSize: 10,
                            color: TEXT.hint,
                            letterSpacing: "0.02em",
                          }}
                        >
                          {piece.connection}
                        </p>
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </MechanicsLayout>

      <SiteFooter />
    </div>
  );
}
