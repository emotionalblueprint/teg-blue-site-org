import { TEXT, FONT, BORDER, SPACING, SPECTRUM } from "@/src/styles/tokens";

const px = SPACING.pagePadding;

const RESPONSIVE_CSS = `
  .page-layout-columns {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 250px;
    gap: clamp(32px, 5vw, 64px);
    align-items: start;
  }
  .page-layout-sidebar {
    position: sticky;
    top: 80px;
    align-self: start;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
    scrollbar-width: thin;
  }
  .page-layout-sidebar::-webkit-scrollbar {
    width: 4px;
  }
  .page-layout-sidebar::-webkit-scrollbar-thumb {
    border-radius: 2px;
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
 *   sidebarSections: array of { label, description, href? } — right sidebar content
 *     If item has `href`, label renders as an anchor link; else renders as static text
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
          position: "relative",
          zIndex: 1,
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `24px ${px} 72px`,
        }}
      >
        {header}

        {hasSidebar ? (
          <div className="page-layout-columns">
            <div style={{ minWidth: 0 }}>
              {children}
            </div>
            <aside className="page-layout-sidebar">
              <div
                style={{
                  padding: "14px 0 0 16px",
                  borderLeft: `1px solid ${BORDER.default}`,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: FONT.mono,
                    textTransform: "uppercase",
                    letterSpacing: 0,
                    color: TEXT.hint,
                    marginBottom: 16,
                  }}
                >
                  On this page
                </div>
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
                      {section.href ? (
                        <a
                          href={section.href}
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            fontFamily: FONT.mono,
                            textTransform: "uppercase",
                            letterSpacing: 0,
                            color: SPECTRUM.cobalt,
                            textDecoration: "none",
                            marginBottom: 6,
                            display: "block",
                          }}
                        >
                          {section.label}
                        </a>
                      ) : (
                        <div style={{
                          fontSize: 11,
                          fontWeight: 600,
                          fontFamily: FONT.mono,
                          textTransform: "uppercase",
                          letterSpacing: 0,
                          color: SPECTRUM.cobalt,
                          marginBottom: 6,
                        }}>
                          {section.label}
                        </div>
                      )}
                      <div style={{
                        fontSize: 12,
                        lineHeight: 1.5,
                        color: TEXT.muted,
                      }}>
                        {section.description}
                      </div>
                    </div>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        ) : (
          children
        )}
      </main>
    </>
  );
}
