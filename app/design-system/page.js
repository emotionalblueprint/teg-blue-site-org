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

const SWATCH_SIZE = 56;

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontSize: TYPE_SCALE.sectionHead.size,
      fontWeight: TYPE_SCALE.sectionHead.weight,
      letterSpacing: TYPE_SCALE.sectionHead.tracking,
      color: TEXT.primary,
      marginBottom: 20,
      paddingBottom: 10,
      borderBottom: `1px solid ${BORDER.default}`,
    }}>
      {children}
    </h2>
  );
}

function Swatch({ color, label, sublabel, size = SWATCH_SIZE }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div style={{
        width: size,
        height: size,
        borderRadius: RADIUS.sm,
        backgroundColor: color,
        border: `1px solid ${BORDER.default}`,
      }} />
      <span style={{
        fontFamily: FONT.mono,
        fontSize: TYPE_SCALE.tagLabel.size,
        fontWeight: TYPE_SCALE.tagLabel.weight,
        letterSpacing: TYPE_SCALE.tagLabel.tracking,
        color: TEXT.secondary,
        textTransform: "uppercase",
      }}>
        {label}
      </span>
      {sublabel && (
        <span style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.micro.size,
          color: TEXT.hint,
          letterSpacing: TYPE_SCALE.micro.tracking,
        }}>
          {sublabel}
        </span>
      )}
    </div>
  );
}

function SwatchRow({ children, label }) {
  return (
    <div style={{ marginBottom: 32 }}>
      {label && (
        <p style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.tagLabel.size,
          fontWeight: TYPE_SCALE.tagLabel.weight,
          letterSpacing: TYPE_SCALE.tagLabel.tracking,
          color: TEXT.muted,
          textTransform: "uppercase",
          marginBottom: 12,
        }}>
          {label}
        </p>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {children}
      </div>
    </div>
  );
}

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

        {/* ─── 1. THE BLUE SPECTRUM ────────────────────── */}
        <section style={{ marginBottom: SPACING.sectionGap.desktop }}>
          <SectionTitle>The Blue Spectrum</SectionTitle>
          <SwatchRow>
            {Object.entries(SPECTRUM).map(([name, hex]) => (
              <Swatch key={name} color={hex} label={name} sublabel={hex} />
            ))}
          </SwatchRow>
        </section>

        {/* ─── 2. SEMANTIC COLOR GROUPS ────────────────── */}
        <section style={{ marginBottom: SPACING.sectionGap.desktop }}>
          <SectionTitle>Semantic Colors</SectionTitle>

          <SwatchRow label="Pattern (Four-Mode Blue Gradient)">
            {Object.entries(PATTERN).map(([name, { primary }]) => (
              <Swatch key={name} color={primary} label={name} sublabel={primary} />
            ))}
          </SwatchRow>
          {/* Pattern gradient bar */}
          <div style={{
            height: 8,
            borderRadius: RADIUS.sm,
            background: PATTERN_GRADIENT,
            marginTop: -20,
            marginBottom: 32,
          }} />

          <SwatchRow label="Awareness Capacities">
            <Swatch color={AWARENESS.RE} label="RE" sublabel={AWARENESS.RE} />
            <Swatch color={AWARENESS.ER} label="ER" sublabel={AWARENESS.ER} />
            <Swatch color={AWARENESS.SEA} label="SEA" sublabel={AWARENESS.SEA} />
          </SwatchRow>

          <SwatchRow label="Mode Accents">
            <Swatch color={MODE_ORANGE} label="Orange" sublabel={MODE_ORANGE} />
            <Swatch color={MODE_PINK} label="Pink" sublabel={MODE_PINK} />
          </SwatchRow>

          <SwatchRow label="Status">
            {Object.entries(STATUS).map(([name, hex]) => (
              <Swatch key={name} color={hex} label={name} sublabel={hex} />
            ))}
          </SwatchRow>

          <SwatchRow label="Researcher">
            <Swatch color={RESEARCHER.accent} label="accent" sublabel={RESEARCHER.accent} />
            <Swatch color={RESEARCHER.accentLight} label="light" sublabel={RESEARCHER.accentLight} />
            <Swatch color={RESEARCHER.accentLighter} label="lighter" sublabel={RESEARCHER.accentLighter} />
          </SwatchRow>
        </section>

        {/* Remaining sections will be added in subsequent tasks */}
      </main>

      <SiteFooter />
    </div>
  );
}
