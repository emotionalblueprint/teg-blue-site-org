import { SPACING } from "@/src/styles/tokens";

const px = SPACING.pagePadding;

const RESPONSIVE_CSS = `
  .page-layout-hover-nav {
    position: fixed;
    top: 92px;
    left: 0;
    z-index: 80;
    display: flex;
    width: min(318px, calc(100vw - 18px));
    max-height: calc(100vh - 116px);
    transform: translateX(calc(-100% + 38px));
    transition: transform 180ms ease, filter 180ms ease;
    filter: drop-shadow(0 18px 42px rgba(0, 14, 36, 0.22));
  }

  .page-layout-hover-nav:hover,
  .page-layout-hover-nav:focus-within {
    transform: translateX(0);
    filter: drop-shadow(0 24px 54px rgba(0, 14, 36, 0.34));
  }

  .page-layout-hover-panel {
    flex: 1;
    min-width: 0;
    max-height: calc(100vh - 116px);
    overflow-y: auto;
    padding: 14px;
    border: 1px solid var(--border-default);
    border-left: 0;
    border-radius: 0 8px 8px 0;
    background: linear-gradient(180deg, color-mix(in srgb, var(--blue-900) 94%, transparent) 0%, color-mix(in srgb, var(--blue-950) 98%, transparent) 100%);
    backdrop-filter: blur(14px);
    scrollbar-width: thin;
  }

  .page-layout-hover-panel::-webkit-scrollbar {
    width: 4px;
  }
  .page-layout-hover-panel::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: var(--border-hover);
  }

  .page-layout-hover-rail {
    appearance: none;
    width: 38px;
    flex: 0 0 38px;
    min-height: 176px;
    display: grid;
    place-items: center;
    padding: 0;
    border: 1px solid var(--border-default);
    border-left: 0;
    border-radius: 0 8px 8px 0;
    background: color-mix(in srgb, var(--blue-900) 88%, var(--blue-950));
    cursor: pointer;
  }

  .page-layout-hover-rail:focus-visible {
    outline: 2px solid var(--blue-300);
    outline-offset: -3px;
  }

  .page-layout-hover-rail span {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    color: var(--blue-200);
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .page-layout-hover-heading {
    margin: 0 0 12px;
    color: var(--text-hint);
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .page-layout-hover-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .page-layout-hover-item {
    display: block;
    padding: 10px 10px 11px;
    border: 1px solid transparent;
    border-radius: 6px;
    text-decoration: none;
  }

  .page-layout-hover-link {
    color: var(--blue-100);
    transition: background-color 160ms ease, border-color 160ms ease, color 160ms ease;
  }

  .page-layout-hover-link:hover,
  .page-layout-hover-link:focus-visible {
    color: var(--blue-50);
    background: color-mix(in srgb, var(--blue-300) 10%, transparent);
    border-color: color-mix(in srgb, var(--blue-200) 18%, transparent);
    outline: none;
  }

  .page-layout-hover-label {
    display: block;
    color: inherit;
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .page-layout-hover-description {
    display: block;
    margin-top: 5px;
    color: var(--text-muted);
    font-size: 12px;
    line-height: 1.45;
  }

  .page-layout-hover-static {
    color: var(--text-secondary);
  }

  @media (prefers-reduced-motion: reduce) {
    .page-layout-hover-nav,
    .page-layout-hover-link {
      transition: none;
    }
  }

  @media (max-width: 720px) {
    .page-layout-hover-nav {
      display: none;
    }
  }
`;

/**
 * PageLayout — Site-wide layout wrapper.
 *
 * Provides 1100px max-width container with optional hover navigation.
 * The `header` prop renders full-width above the page content (for heroes).
 *
 * Props:
 *   header: React node — full-width content above the grid (hero, badges, etc.)
 *   children: React node — the page content
 *   sidebarSections: array of { label, description, href? } — left hover navigation
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
        {hasSidebar && (
          <aside className="page-layout-hover-nav" aria-label="On this page">
            <div className="page-layout-hover-panel">
              <div className="page-layout-hover-heading">On this page</div>
              <nav className="page-layout-hover-list">
                {sidebarSections.map((section, i) => {
                  const content = (
                    <>
                      <span className="page-layout-hover-label">{section.label}</span>
                      <span className="page-layout-hover-description">{section.description}</span>
                    </>
                  );

                  return section.href ? (
                    <a key={`${section.href}-${i}`} href={section.href} className="page-layout-hover-item page-layout-hover-link">
                      {content}
                    </a>
                  ) : (
                    <div key={`${section.label}-${i}`} className="page-layout-hover-item page-layout-hover-static">
                      {content}
                    </div>
                  );
                })}
              </nav>
            </div>
            <button className="page-layout-hover-rail" type="button" aria-label="Open On this page navigation">
              <span>On this page</span>
            </button>
          </aside>
        )}

        {header}

        {children}
      </main>
    </>
  );
}
