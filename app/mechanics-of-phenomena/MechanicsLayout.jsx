import Link from "next/link";
import { BG, TEXT, FONT, BORDER, EDITORIAL, SPACING, hexToRgba } from "@/src/styles/tokens";
import MechanicsSidebar from "./MechanicsSidebar";
import { findPiece, parseConnection } from "./mechanics-config";

const px = SPACING.pagePadding;

/**
 * Responsive CSS for two-column layout.
 * Injected as style tag — follows SiteHeader pattern.
 */
const RESPONSIVE_CSS = `
  .mop-columns {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 48px;
    align-items: start;
  }
  .mop-sidebar {
    position: sticky;
    top: 80px;
    align-self: start;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
  }
  .mop-mobile-index {
    display: none;
  }

  @media (max-width: 900px) {
    .mop-columns {
      display: block;
    }
    .mop-sidebar {
      display: none;
    }
    .mop-mobile-index {
      display: block;
    }
  }
`;

/**
 * MechanicsLayout — Two-column layout for the editorial section.
 *
 * Props:
 *   showSectionHeader: boolean — show h1 + stance text (main page only)
 *   activePiece: string — slug of the active piece for sidebar highlighting
 *   showBackLink: boolean — show back link in sidebar (individual pages)
 *   children: React node — the piece content for the reading column
 */
export default function MechanicsLayout({
  showSectionHeader = false,
  activePiece,
  showBackLink = false,
  articleSections,
  children,
}) {
  // Look up piece data for hero when on an individual piece page
  const found = activePiece ? findPiece(activePiece) : null;
  const showPieceHero = !showSectionHeader && found;

  // Compute prev/next pieces within the same series
  let prevPiece = null;
  let nextPiece = null;
  if (found) {
    const { series, piece } = found;
    const sorted = [...series.pieces].sort((a, b) => a.number - b.number);
    const idx = sorted.findIndex((p) => p.slug === piece.slug);
    if (idx > 0) prevPiece = { piece: sorted[idx - 1], seriesSlug: series.slug };
    if (idx < sorted.length - 1) nextPiece = { piece: sorted[idx + 1], seriesSlug: series.slug };
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS }} />

      <main
        id="main-content"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: `0 ${px}`,
        }}
      >
        {/* Section header (main/index page only) */}
        {showSectionHeader && (
          <div
            style={{
              paddingTop: 48,
              paddingBottom: 32,
              borderBottom: `1px solid ${hexToRgba(EDITORIAL.accent, 0.12)}`,
              marginBottom: 40,
            }}
          >
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: TEXT.primary,
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}
            >
              The Mechanics of Phenomena
            </h1>
            <p
              style={{
                fontSize: 15,
                fontStyle: "italic",
                color: TEXT.muted,
                lineHeight: 1.7,
                maxWidth: "70ch",
              }}
            >
              I keep finding the same architecture running in different systems {"\u2014"} different
              fields, different hardware, different centuries. This is where I log it.
            </p>
            <p
              style={{
                fontSize: 13,
                color: TEXT.hint,
                lineHeight: 1.7,
                maxWidth: "70ch",
                marginTop: 14,
              }}
            >
              A note on format: the rest of this site is written as structured research
              documentation. This section is not. These are long-form essays written in plain
              language, starting from observable problems {"\u2014"} not from the framework. TEG-Blue
              appears when the explanation calls for it, not before.
            </p>
          </div>
        )}

        {/* Piece hero (individual piece pages) */}
        {showPieceHero && (
          <div
            style={{
              paddingTop: 48,
              paddingBottom: 32,
              borderBottom: `1px solid ${hexToRgba(EDITORIAL.accent, 0.12)}`,
              marginBottom: 40,
            }}
          >
            <p
              style={{
                fontFamily: FONT.mono,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: EDITORIAL.accent,
                marginBottom: 14,
              }}
            >
              {found.series.name} {"\u2014"} No. {String(found.piece.number).padStart(2, "0")}
            </p>
            <h1
              style={{
                fontSize: "clamp(24px, 4vw, 32px)",
                fontWeight: 700,
                color: TEXT.primary,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              {found.piece.title}
            </h1>
            {found.piece.subtitle && (
              <p
                style={{
                  fontSize: 15,
                  fontStyle: "italic",
                  color: TEXT.muted,
                  lineHeight: 1.7,
                  maxWidth: "70ch",
                }}
              >
                {found.piece.subtitle}
              </p>
            )}
            {found.piece.readingTime && (
              <p
                style={{
                  fontFamily: FONT.mono,
                  fontSize: 11,
                  color: TEXT.hint,
                  letterSpacing: "0.02em",
                  marginTop: 12,
                }}
              >
                {found.piece.readingTime} min read
              </p>
            )}
            {found.piece.connection && (
              <p
                style={{
                  fontFamily: FONT.mono,
                  fontSize: 11,
                  letterSpacing: "0.02em",
                  marginTop: 8,
                }}
              >
                <span style={{ color: TEXT.hint }}>TEG-Blue connection: </span>
                {parseConnection(found.piece.connection).map((seg, i, arr) => (
                  <span key={i}>
                    {seg.href ? (
                      <Link href={seg.href} style={{ color: TEXT.muted, textDecoration: "none" }}>
                        {seg.label}
                      </Link>
                    ) : (
                      <span style={{ color: TEXT.hint }}>{seg.label}</span>
                    )}
                    {i < arr.length - 1 && <span style={{ color: TEXT.hint }}> / </span>}
                  </span>
                ))}
              </p>
            )}
          </div>
        )}

        {/* Two-column layout */}
        <div className="mop-columns" style={{ paddingBottom: 80 }}>
          <MechanicsSidebar activePiece={activePiece} showBackLink={showBackLink} articleSections={articleSections} />

          <div className="mop-reading" style={{ maxWidth: "70ch", minWidth: 0 }}>
            {children}

            {/* Prev / Next navigation */}
            {(prevPiece || nextPiece) && (
              <nav
                style={{
                  display: "flex",
                  justifyContent: prevPiece && nextPiece ? "space-between" : nextPiece ? "flex-end" : "flex-start",
                  gap: 16,
                  marginTop: 48,
                  paddingTop: 32,
                  borderTop: `1px solid ${BORDER.default}`,
                }}
              >
                {prevPiece && (
                  <Link
                    href={`/mechanics-of-phenomena/${prevPiece.seriesSlug}/${prevPiece.piece.slug}`}
                    style={{
                      textDecoration: "none",
                      maxWidth: nextPiece ? "48%" : "100%",
                    }}
                  >
                    <span style={{ fontFamily: FONT.mono, fontSize: 10, color: TEXT.hint, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                      {"\u2190"} Previous
                    </span>
                    <p style={{ fontSize: 14, fontWeight: 600, color: EDITORIAL.accent, lineHeight: 1.4, marginTop: 4 }}>
                      {prevPiece.piece.title}
                    </p>
                  </Link>
                )}
                {nextPiece && (
                  <Link
                    href={`/mechanics-of-phenomena/${nextPiece.seriesSlug}/${nextPiece.piece.slug}`}
                    style={{
                      textDecoration: "none",
                      textAlign: "right",
                      maxWidth: prevPiece ? "48%" : "100%",
                      marginLeft: "auto",
                    }}
                  >
                    <span style={{ fontFamily: FONT.mono, fontSize: 10, color: TEXT.hint, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                      Next {"\u2192"}
                    </span>
                    <p style={{ fontSize: 14, fontWeight: 600, color: EDITORIAL.accent, lineHeight: 1.4, marginTop: 4 }}>
                      {nextPiece.piece.title}
                    </p>
                  </Link>
                )}
              </nav>
            )}
          </div>
        </div>

        {/* Mobile: Section index below piece */}
        <div
          className="mop-mobile-index"
          style={{
            borderTop: `1px solid ${BORDER.default}`,
            paddingTop: 32,
            paddingBottom: 48,
          }}
        >
          <MechanicsSidebar activePiece={activePiece} showBackLink={false} articleSections={articleSections} />
        </div>
      </main>
    </>
  );
}
