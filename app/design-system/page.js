import {
  BG, TEXT, BORDER, FONT, SPACING, RADIUS, TRANSITION, OPACITY,
  SPECTRUM, PATTERN, PATTERN_GRADIENT, AWARENESS, STATUS,
  MODE_ORANGE, MODE_PINK, RESEARCHER,
  TYPE_SCALE, hexToRgba,
} from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

export const metadata = {
  title: "Design System | TEG-Blue Research",
  description: "Internal design token reference for teg-blue.org.",
  robots: { index: false, follow: false },
};

export default function DesignSystemPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/design-system" />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `32px ${SPACING.pagePadding} 60px`,
        }}
      >
        <h1
          style={{
            fontSize: TYPE_SCALE.pageTitle.size,
            fontWeight: TYPE_SCALE.pageTitle.weight,
            letterSpacing: TYPE_SCALE.pageTitle.tracking,
            lineHeight: TYPE_SCALE.pageTitle.lineHeight,
            color: TEXT.primary,
            marginBottom: 8,
          }}
        >
          Design System
        </h1>

        <p
          style={{
            fontFamily: FONT.mono,
            fontSize: TYPE_SCALE.doi.size,
            color: TEXT.muted,
            marginBottom: SPACING.sectionGap.desktop,
          }}
        >
          Core tokens — teg-blue.org
        </p>

        {/* Sections will be added in subsequent tasks */}
      </main>

      <SiteFooter />
    </div>
  );
}
