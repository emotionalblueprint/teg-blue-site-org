import { BG, TEXT, FONT, BORDER, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";

const px = SPACING.pagePadding;

const RESPONSIVE_CSS = `
  .page-layout-columns {
    display: grid;
    grid-template-columns: 1fr 240px;
    gap: 48px;
    align-items: start;
  }
  .page-layout-sidebar {
    position: sticky;
    top: 80px;
    align-self: start;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
  }

  @media (max-width: 900px) {
    .page-layout-columns {
      display: block;
    }
    .page-layout-sidebar {
      display: none;
    }
  }
`;

/**
 * PageLayout — Site-wide layout wrapper.
 *
 * Provides 1100px max-width container with optional sticky right sidebar.
 * The `header` prop renders full-width above the two-column grid (for heroes).
 *
 * Props:
 *   header: React node — full-width content above the grid (hero, badges, etc.)
 *   children: React node — the page content (goes into left column when sidebar present)
 *   sidebarSections: array of { label, description } — right sidebar content
 *     If empty or undefined, renders without sidebar column
 */
export default function PageLayout({ header, children, sidebarSections }) {
  const hasSidebar = sidebarSections && sidebarSections.length > 0;

  return (
    <>
      {hasSidebar && <style dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS }} />}

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `32px ${px} 60px`,
        }}
      >
        {header}

        {hasSidebar ? (
          <div className="page-layout-columns">
            <div style={{ minWidth: 0 }}>
              {children}
            </div>
            <aside className="page-layout-sidebar">
              <nav style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}>
                {sidebarSections.map((section, i) => (
                  <div key={i} style={{
                    paddingBottom: i < sidebarSections.length - 1 ? 20 : 0,
                    borderBottom: i < sidebarSections.length - 1
                      ? `1px solid ${BORDER.default}`
                      : "none",
                  }}>
                    <div style={{
                      fontSize: 11,
                      fontWeight: 600,
                      fontFamily: FONT.mono,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: SPECTRUM.cobalt,
                      marginBottom: 6,
                    }}>
                      {section.label}
                    </div>
                    <div style={{
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: TEXT.secondary,
                    }}>
                      {section.description}
                    </div>
                  </div>
                ))}
              </nav>
            </aside>
          </div>
        ) : (
          children
        )}
      </main>
    </>
  );
}
