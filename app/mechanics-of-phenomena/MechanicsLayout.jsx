import { BG, TEXT, FONT, BORDER, EDITORIAL, SPACING, hexToRgba } from "@/src/styles/tokens";
import MechanicsSidebar from "./MechanicsSidebar";

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
  children,
}) {
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
        {/* Section header (main page only) */}
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
          </div>
        )}

        {/* Two-column layout */}
        <div className="mop-columns" style={{ paddingBottom: 80 }}>
          <MechanicsSidebar activePiece={activePiece} showBackLink={showBackLink} />

          <div className="mop-reading" style={{ maxWidth: "70ch", minWidth: 0 }}>
            {children}
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
          <MechanicsSidebar activePiece={activePiece} showBackLink={false} />
        </div>
      </main>
    </>
  );
}
