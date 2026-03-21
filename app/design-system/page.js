import {
  BG, TEXT, BORDER, FONT, SPACING, RADIUS, TRANSITION, OPACITY,
  SPECTRUM, PATTERN, PATTERN_GRADIENT, AWARENESS, STATUS,
  MODE_ORANGE, MODE_PINK,
  TYPE_SCALE, hexToRgba,
} from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, FluidCompassExplorer } from "@/src/components";
import CompassBar from "@/src/components/CompassBar";

const SIDEBAR_SECTIONS = [
  { label: "Design Tokens", description: "The visual language: spectrum colors, typography, spacing, and component patterns.", href: "#design-tokens" },
  { label: "Fluid Compass Explorer", description: "Interactive explorer pattern — gradient bar with mode-reactive content panel.", href: "#fluid-compass-explorer" },
  { label: "Section Separators", description: "One gradient style in three thicknesses.", href: "#section-separators" },
  { label: "Page Navigator", description: "Sticky sidebar with anchor links and section descriptions.", href: "#page-navigator" },
];

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

      <PageLayout sidebarSections={SIDEBAR_SECTIONS}>
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
        <section id="design-tokens" style={{ marginBottom: SPACING.sectionGap.desktop }}>
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

          <SwatchRow label="Four-Mode Gradient">
            <Swatch color={PATTERN.A.primary} label="Connection" sublabel={PATTERN.A.primary} />
            <Swatch color={PATTERN.B.primary} label="Protection" sublabel={PATTERN.B.primary} />
            <Swatch color={PATTERN.C.primary} label="Control" sublabel={PATTERN.C.primary} />
            <Swatch color={PATTERN.D.primary} label="Domination" sublabel={PATTERN.D.primary} />
          </SwatchRow>
          {/* Pattern gradient bar */}
          <div style={{
            height: 8,
            borderRadius: RADIUS.sm,
            background: `linear-gradient(90deg, ${PATTERN.A.primary}, ${PATTERN.B.primary}, ${PATTERN.C.primary}, ${PATTERN.D.primary})`,
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

        </section>

        {/* ─── 3. BACKGROUNDS ──────────────────────────── */}
        <section style={{ marginBottom: SPACING.sectionGap.desktop }}>
          <SectionTitle>Backgrounds</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {Object.entries(BG).map(([name, cssVar]) => (
              <div
                key={name}
                style={{
                  background: cssVar,
                  padding: "14px 18px",
                  borderRadius: name === "page" ? `${RADIUS.md}px ${RADIUS.md}px 0 0`
                    : name === "inset" ? `0 0 ${RADIUS.md}px ${RADIUS.md}px`
                    : 0,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: `1px solid ${BORDER.default}`,
                }}
              >
                <span style={{
                  fontFamily: FONT.mono,
                  fontSize: TYPE_SCALE.tagLabel.size,
                  fontWeight: TYPE_SCALE.tagLabel.weight,
                  letterSpacing: TYPE_SCALE.tagLabel.tracking,
                  color: TEXT.secondary,
                  textTransform: "uppercase",
                }}>
                  BG.{name}
                </span>
                <span style={{
                  fontFamily: FONT.mono,
                  fontSize: TYPE_SCALE.micro.size,
                  color: TEXT.hint,
                  letterSpacing: TYPE_SCALE.micro.tracking,
                }}>
                  {cssVar}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 4. TEXT ──────────────────────────────────── */}
        <section style={{ marginBottom: SPACING.sectionGap.desktop }}>
          <SectionTitle>Text</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { name: "primary", sample: "Primary text — headings, emphasis" },
              { name: "secondary", sample: "Secondary text — body copy" },
              { name: "muted", sample: "Muted text — supporting content" },
              { name: "hint", sample: "Hint text — placeholders, labels" },
              { name: "micro", sample: "Micro text — footnotes, timestamps" },
            ].map(({ name, sample }) => (
              <div key={name} style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                <span style={{
                  fontFamily: FONT.mono,
                  fontSize: TYPE_SCALE.tagLabel.size,
                  fontWeight: TYPE_SCALE.tagLabel.weight,
                  letterSpacing: TYPE_SCALE.tagLabel.tracking,
                  color: TEXT.muted,
                  textTransform: "uppercase",
                  minWidth: 80,
                  flexShrink: 0,
                }}>
                  {name}
                </span>
                <span style={{
                  color: TEXT[name],
                  fontSize: TYPE_SCALE.body.size,
                  lineHeight: TYPE_SCALE.body.lineHeight,
                }}>
                  {sample}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 5. BORDERS ──────────────────────────────── */}
        <section style={{ marginBottom: SPACING.sectionGap.desktop }}>
          <SectionTitle>Border Colors</SectionTitle>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {Object.entries(BORDER).map(([name, cssVar]) => (
              <div
                key={name}
                style={{
                  width: 160,
                  height: 80,
                  border: `1px solid ${cssVar}`,
                  borderRadius: RADIUS.md,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  background: BG.card,
                }}
              >
                <span style={{
                  fontFamily: FONT.mono,
                  fontSize: TYPE_SCALE.tagLabel.size,
                  fontWeight: TYPE_SCALE.tagLabel.weight,
                  letterSpacing: TYPE_SCALE.tagLabel.tracking,
                  color: TEXT.secondary,
                  textTransform: "uppercase",
                }}>
                  {name}
                </span>
                <span style={{
                  fontFamily: FONT.mono,
                  fontSize: TYPE_SCALE.micro.size,
                  color: TEXT.hint,
                  letterSpacing: TYPE_SCALE.micro.tracking,
                }}>
                  {cssVar}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 6. TYPOGRAPHY ───────────────────────────── */}
        <section style={{ marginBottom: SPACING.sectionGap.desktop }}>
          <SectionTitle>Typography</SectionTitle>

          {/* Font families */}
          <div style={{ marginBottom: 32 }}>
            <p style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.tagLabel.size,
              fontWeight: TYPE_SCALE.tagLabel.weight,
              letterSpacing: TYPE_SCALE.tagLabel.tracking,
              color: TEXT.muted,
              textTransform: "uppercase",
              marginBottom: 12,
            }}>
              Font Families
            </p>
            <p style={{
              fontFamily: FONT.display,
              fontSize: TYPE_SCALE.body.size,
              color: TEXT.primary,
              marginBottom: 8,
            }}>
              Inter — The quick brown fox jumps over the lazy dog
            </p>
            <p style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.body.size,
              color: TEXT.primary,
            }}>
              JetBrains Mono — const emotion = &apos;biological information&apos;
            </p>
          </div>

          {/* Type scale */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.tagLabel.size,
              fontWeight: TYPE_SCALE.tagLabel.weight,
              letterSpacing: TYPE_SCALE.tagLabel.tracking,
              color: TEXT.muted,
              textTransform: "uppercase",
            }}>
              Type Scale
            </p>
            {Object.entries(TYPE_SCALE).map(([role, spec]) => (
              <div key={role} style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                paddingBottom: 16,
                borderBottom: `1px solid ${BORDER.default}`,
              }}>
                <span style={{
                  fontFamily: spec.font === "mono" ? FONT.mono : FONT.display,
                  fontSize: spec.size,
                  fontWeight: spec.weight,
                  letterSpacing: spec.tracking,
                  lineHeight: spec.lineHeight,
                  color: spec.color || TEXT.primary,
                }}>
                  {role} — Sample text for this scale
                </span>
                <span style={{
                  fontFamily: FONT.mono,
                  fontSize: TYPE_SCALE.micro.size,
                  color: TEXT.hint,
                  letterSpacing: TYPE_SCALE.micro.tracking,
                }}>
                  {spec.size}px · {spec.weight} · {spec.tracking} tracking · {spec.lineHeight} line-height
                  {spec.font === "mono" ? " · mono" : ""}
                  {spec.color ? ` · color: ${spec.color}` : ""}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 7. BORDER RADIUS ────────────────────────── */}
        <section style={{ marginBottom: SPACING.sectionGap.desktop }}>
          <SectionTitle>Border Radius</SectionTitle>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {Object.entries(RADIUS).map(([name, px]) => (
              <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: px,
                  border: `1px solid ${BORDER.hover}`,
                  background: BG.card,
                }} />
                <span style={{
                  fontFamily: FONT.mono,
                  fontSize: TYPE_SCALE.tagLabel.size,
                  fontWeight: TYPE_SCALE.tagLabel.weight,
                  letterSpacing: TYPE_SCALE.tagLabel.tracking,
                  color: TEXT.secondary,
                  textTransform: "uppercase",
                }}>
                  {name}
                </span>
                <span style={{
                  fontFamily: FONT.mono,
                  fontSize: TYPE_SCALE.micro.size,
                  color: TEXT.hint,
                  letterSpacing: TYPE_SCALE.micro.tracking,
                }}>
                  {px}px
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 8. SPACING ──────────────────────────────── */}
        <section style={{ marginBottom: SPACING.sectionGap.desktop }}>
          <SectionTitle>Spacing</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { name: "containerMax", value: `${SPACING.containerMax}px`, width: "100%", desc: "Maximum width of the main content column. Beyond this the page stops growing and centers itself." },
              { name: "sectionGap (desktop)", value: `${SPACING.sectionGap.desktop}px`, width: `${(SPACING.sectionGap.desktop / SPACING.containerMax) * 100}%`, desc: "Vertical space between major page sections on desktop." },
              { name: "sectionGap (mobile)", value: `${SPACING.sectionGap.mobile}px`, width: `${(SPACING.sectionGap.mobile / SPACING.containerMax) * 100}%`, desc: "Same gap on mobile — tighter because the screen is smaller." },
              { name: "contentGap (desktop)", value: `${SPACING.contentGap.desktop}px`, width: `${(SPACING.contentGap.desktop / SPACING.containerMax) * 100}%`, desc: "Space between items within a section." },
              { name: "cardPadding (desktop)", value: `${SPACING.cardPadding.desktop}px`, width: `${(SPACING.cardPadding.desktop / SPACING.containerMax) * 100}%`, desc: "Internal padding inside a card or panel." },
              { name: "gridGap", value: `${SPACING.gridGap}px`, width: `${(SPACING.gridGap / SPACING.containerMax) * 100}%`, desc: "Gap between items in a grid layout." },
            ].map(({ name, value, width, desc }) => (
              <div key={name} style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{
                    fontFamily: FONT.mono,
                    fontSize: TYPE_SCALE.tagLabel.size,
                    fontWeight: TYPE_SCALE.tagLabel.weight,
                    letterSpacing: TYPE_SCALE.tagLabel.tracking,
                    color: TEXT.muted,
                    textTransform: "uppercase",
                    minWidth: 180,
                    flexShrink: 0,
                  }}>
                    {name}
                  </span>
                  <div style={{
                    height: 12,
                    width,
                    minWidth: 12,
                    background: hexToRgba(SPECTRUM.cobalt, 0.3),
                    borderRadius: RADIUS.sm,
                    border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.5)}`,
                  }} />
                  <span style={{
                    fontFamily: FONT.mono,
                    fontSize: TYPE_SCALE.micro.size,
                    color: TEXT.hint,
                    letterSpacing: TYPE_SCALE.micro.tracking,
                    flexShrink: 0,
                  }}>
                    {value}
                  </span>
                </div>
                <span style={{
                  fontSize: TYPE_SCALE.summary.size,
                  color: TEXT.hint,
                  paddingLeft: 180 + 12,
                }}>
                  {desc}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 9. OPACITY ──────────────────────────────── */}
        <section style={{ marginBottom: SPACING.sectionGap.desktop }}>
          <SectionTitle>Opacity Scale</SectionTitle>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {Object.entries(OPACITY).map(([name, value]) => (
              <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{
                  width: SWATCH_SIZE,
                  height: SWATCH_SIZE,
                  borderRadius: RADIUS.sm,
                  backgroundColor: hexToRgba(SPECTRUM.cobalt, value),
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
                  {name}
                </span>
                <span style={{
                  fontFamily: FONT.mono,
                  fontSize: TYPE_SCALE.micro.size,
                  color: TEXT.hint,
                  letterSpacing: TYPE_SCALE.micro.tracking,
                }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 10. TRANSITIONS ─────────────────────────── */}
        <section style={{ marginBottom: SPACING.sectionGap.desktop }}>
          <SectionTitle>Transitions</SectionTitle>
          <style dangerouslySetInnerHTML={{ __html: `
            .ds-transition-box { cursor: pointer; }
            .ds-transition-box:hover { background: ${hexToRgba(SPECTRUM.cobalt, 0.2)} !important; }
          `}} />
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {Object.entries(TRANSITION).map(([name, value]) => (
              <div
                key={name}
                className="ds-transition-box"
                style={{
                  width: 160,
                  height: 80,
                  borderRadius: RADIUS.md,
                  border: `1px solid ${BORDER.default}`,
                  background: BG.card,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  transition: `background ${value}`,
                }}
              >
                <span style={{
                  fontFamily: FONT.mono,
                  fontSize: TYPE_SCALE.tagLabel.size,
                  fontWeight: TYPE_SCALE.tagLabel.weight,
                  letterSpacing: TYPE_SCALE.tagLabel.tracking,
                  color: TEXT.secondary,
                  textTransform: "uppercase",
                }}>
                  {name}
                </span>
                <span style={{
                  fontFamily: FONT.mono,
                  fontSize: TYPE_SCALE.micro.size,
                  color: TEXT.hint,
                  letterSpacing: TYPE_SCALE.micro.tracking,
                }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 11. INNER COMPASS + FOUR-MODE GRADIENT ──── */}
        <section style={{ marginBottom: SPACING.sectionGap.desktop }}>
          <SectionTitle>Inner Compass + Four-Mode Gradient</SectionTitle>
          <p style={{
            fontFamily: FONT.mono,
            fontSize: TYPE_SCALE.tagLabel.size,
            fontWeight: TYPE_SCALE.tagLabel.weight,
            letterSpacing: TYPE_SCALE.tagLabel.tracking,
            color: TEXT.muted,
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Drag the Needle to explore modes
          </p>
          <CompassBar />
        </section>

        {/* ─── 12. FLUID COMPASS EXPLORER ────────────────── */}
        <section id="fluid-compass-explorer" style={{ marginBottom: SPACING.sectionGap.desktop }}>
          <SectionTitle>Fluid Compass Explorer</SectionTitle>
          <p style={{
            fontSize: TYPE_SCALE.body.size,
            lineHeight: TYPE_SCALE.body.lineHeight,
            color: TEXT.secondary,
            marginBottom: 32,
          }}>
            The full interactive explorer pattern — gradient bar with mode-reactive content panel.
            Used on model pages (M1). Combines a draggable slider with a dynamic content area
            that updates based on position and fluid/stuck state.
          </p>

          {/* Live example */}
          <div style={{
            padding: 20,
            background: BG.card,
            borderRadius: RADIUS.md,
            border: `1px solid ${BORDER.default}`,
            marginBottom: 24,
          }}>
            <p style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.tagLabel.size,
              fontWeight: TYPE_SCALE.tagLabel.weight,
              letterSpacing: TYPE_SCALE.tagLabel.tracking,
              color: TEXT.muted,
              textTransform: "uppercase",
              marginBottom: 16,
            }}>
              Live Component
            </p>
            <FluidCompassExplorer />
          </div>

          {/* Pattern structure */}
          <div style={{
            padding: 20,
            background: BG.card,
            borderRadius: RADIUS.md,
            border: `1px solid ${BORDER.default}`,
            marginBottom: 24,
          }}>
            <p style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.tagLabel.size,
              fontWeight: TYPE_SCALE.tagLabel.weight,
              letterSpacing: TYPE_SCALE.tagLabel.tracking,
              color: TEXT.muted,
              textTransform: "uppercase",
              marginBottom: 12,
            }}>
              Pattern Structure
            </p>
            <pre style={{
              fontFamily: FONT.mono,
              fontSize: 12,
              lineHeight: 1.6,
              color: TEXT.secondary,
              whiteSpace: "pre-wrap",
            }}>
{`┌─────────────────────────────────────────────────┐
│  WRAPPER — rounded container, mode-colored      │
│  border (20% opacity) + tinted bg (3% opacity)  │
│                                                   │
│  ┌─── HEADER ──────────────────────────────────┐ │
│  │  [Badge Pill]          [Toggle] [Hint text] │ │
│  └─────────────────────────────────────────────┘ │
│                                                   │
│  ┌─── GRADIENT BAR ───────────────────────────┐  │
│  │  ●━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │  │
│  │  Connection  Protection  Control  Domination│  │
│  └─────────────────────────────────────────────┘  │
│                                                   │
│  ┌─── CONTENT AREA ───────────────────────────┐  │
│  │  Mode Title  [Type Pill]                    │  │
│  │  Pattern A · Duration text                  │  │
│  │                                             │  │
│  │  Description paragraph (max-width 640)      │  │
│  │                                             │  │
│  │  ┃ Insight quote (left border)              │  │
│  │                                             │  │
│  │  SEQUENCE  Engage → Relate → Repair → Learn │  │
│  │                                             │  │
│  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │  │
│  │  │ Cap1 │ │ Cap2 │ │ Cap3 │ │ Cap4 │       │  │
│  │  └──────┘ └──────┘ └──────┘ └──────┘       │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘`}
            </pre>
          </div>

          {/* Token specs */}
          <div style={{
            padding: 20,
            background: BG.card,
            borderRadius: RADIUS.md,
            border: `1px solid ${BORDER.default}`,
          }}>
            <p style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.tagLabel.size,
              fontWeight: TYPE_SCALE.tagLabel.weight,
              letterSpacing: TYPE_SCALE.tagLabel.tracking,
              color: TEXT.muted,
              textTransform: "uppercase",
              marginBottom: 12,
            }}>
              Token Specs
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                ["Wrapper", "border-radius: 12px · border: 1px mode hex at 20% · bg: mode hex at 3%"],
                ["Badge pill", "10px mono 700 uppercase · mode-colored · 12% bg + 25% border · border-radius: 100"],
                ["Toggle", "10px mono 600 · pill shape · active: 15% bg + mode color · inactive: transparent + TEXT.muted"],
                ["Hint text", "11px mono · TEXT.muted"],
                ["Bar", "14px height · rounded 7px · 4-color gradient · 15px touch padding"],
                ["Needle", "28px circle · BG.primary fill · 3px mode-colored border · 16px glow at 50% opacity"],
                ["Zone dividers", "3px wide · rgba(0,0,0,0.6) · at 25%, 50%, 75%"],
                ["Mode labels", "11px mono · active: 700 weight + mode color · inactive: 400 weight + 35% opacity"],
                ["Mode title", "18px 700 · mode-colored"],
                ["Type pill", "10px mono 600 uppercase · BG.surface bg · BORDER.default · stuck: MODE_ORANGE + 10% bg + 25% border"],
                ["Metadata", "12px mono · TEXT.muted · items separated by dot"],
                ["Description", "14px · TEXT.secondary · line-height 1.7 · max-width 640px"],
                ["Insight quote", "13px 500 italic · TEXT.primary · 3px left border in mode color · 6% bg · radius: 0 6px 6px 0"],
                ["Sequence label", "10px mono 600 uppercase · TEXT.muted (fluid) or MODE_ORANGE (stuck)"],
                ["Sequence value", "12px mono 600 · mode-colored (fluid) or italic TEXT.secondary (stuck)"],
                ["Capacity cards", "grid auto-fit minmax(150px, 1fr) · gap: 8px · 10px 12px padding · 8px radius"],
                ["Card title", "11px mono 700 uppercase · mode-colored · 0.04em tracking"],
                ["Card value", "12px · TEXT.secondary · line-height 1.5"],
                ["Transitions", "200ms (thumb, labels) · 300ms (wrapper, content, colors)"],
                ["Snap magnet", "4% radius at each mode center (12.5%, 37.5%, 62.5%, 87.5%)"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                  <span style={{
                    fontFamily: FONT.mono,
                    fontSize: TYPE_SCALE.micro.size,
                    color: TEXT.hint,
                    letterSpacing: TYPE_SCALE.micro.tracking,
                    minWidth: 120,
                    flexShrink: 0,
                  }}>
                    {label}
                  </span>
                  <span style={{
                    fontFamily: FONT.mono,
                    fontSize: TYPE_SCALE.micro.size,
                    color: TEXT.muted,
                    letterSpacing: TYPE_SCALE.micro.tracking,
                  }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 13. SECTION SEPARATORS ────────────────────── */}
        <section id="section-separators" style={{ marginBottom: SPACING.sectionGap.desktop }}>
          <SectionTitle>Section Separators</SectionTitle>
          <p style={{
            fontSize: TYPE_SCALE.body.size,
            lineHeight: TYPE_SCALE.body.lineHeight,
            color: TEXT.secondary,
            marginBottom: 40,
          }}>
            One gradient style in three thicknesses. Full width, no fade at the edges.
          </p>

          {[
            { name: "Heavy", height: 3, desc: "Between major page sections." },
            { name: "Medium", height: 2, desc: "Between content blocks." },
            { name: "Thin", height: 1, desc: "Subtle break within the same section." },
          ].map(({ name, height, desc }, i, arr) => (
            <div key={name} style={{ marginBottom: i < arr.length - 1 ? 48 : 0 }}>
              <p style={{
                fontFamily: FONT.mono,
                fontSize: TYPE_SCALE.tagLabel.size,
                fontWeight: TYPE_SCALE.tagLabel.weight,
                letterSpacing: TYPE_SCALE.tagLabel.tracking,
                color: TEXT.muted,
                textTransform: "uppercase",
                marginBottom: 6,
              }}>
                {name}
              </p>
              <p style={{
                fontSize: TYPE_SCALE.summary.size,
                color: TEXT.hint,
                marginBottom: 20,
              }}>
                {desc}
              </p>
              <div style={{ padding: "24px 0" }}>
                <div style={{
                  height,
                  borderRadius: 1,
                  background: "linear-gradient(to right, #93CFFF, #5BADFF, #4B8FFF, #346AEC, #2563eb)",
                }} />
              </div>
              <p style={{
                fontFamily: FONT.mono,
                fontSize: TYPE_SCALE.micro.size,
                color: TEXT.micro,
                letterSpacing: TYPE_SCALE.micro.tracking,
                marginTop: 8,
              }}>
                height: {height}px · border-radius: 1px · gradient: #93CFFF → #5BADFF → #4B8FFF → #346AEC → #2563eb
              </p>
            </div>
          ))}
        </section>

        {/* ─── 13. PAGE NAVIGATOR ────────────────────────── */}
        <section id="page-navigator" style={{ marginBottom: SPACING.sectionGap.desktop }}>
          <SectionTitle>Page Navigator</SectionTitle>
          <p style={{
            fontSize: TYPE_SCALE.body.size,
            lineHeight: TYPE_SCALE.body.lineHeight,
            color: TEXT.secondary,
            marginBottom: 32,
          }}>
            Sticky right sidebar that doubles as a page table of contents. Visible above 900px.
            Each item can optionally include an <code style={{ fontFamily: FONT.mono, fontSize: 13, color: SPECTRUM.azure }}>href</code> to
            become a clickable anchor link that scrolls to the target section.
          </p>

          {/* Live example */}
          <div style={{
            padding: 20,
            background: BG.card,
            borderRadius: RADIUS.md,
            border: `1px solid ${BORDER.default}`,
            marginBottom: 24,
          }}>
            <p style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.tagLabel.size,
              fontWeight: TYPE_SCALE.tagLabel.weight,
              letterSpacing: TYPE_SCALE.tagLabel.tracking,
              color: TEXT.muted,
              textTransform: "uppercase",
              marginBottom: 16,
            }}>
              Live Example
            </p>

            <div style={{
              maxWidth: 240,
              padding: 16,
              background: BG.primary,
              borderRadius: RADIUS.sm,
              border: `1px solid ${BORDER.default}`,
            }}>
              <div style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: FONT.mono,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: TEXT.hint,
                marginBottom: 16,
              }}>
                On this page
              </div>
              {[
                { label: "Overview", description: "Introduction and key concepts.", href: "#" },
                { label: "Core Claims", description: "The foundational propositions.", href: "#" },
                { label: "Research", description: "Supporting literature." },
              ].map((item, i, arr) => (
                <div key={i} style={{
                  paddingBottom: i < arr.length - 1 ? 16 : 0,
                  borderBottom: i < arr.length - 1 ? `1px solid ${BORDER.default}` : "none",
                  marginBottom: i < arr.length - 1 ? 16 : 0,
                }}>
                  {item.href ? (
                    <span style={{
                      fontSize: 11,
                      fontWeight: 600,
                      fontFamily: FONT.mono,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: SPECTRUM.cobalt,
                      marginBottom: 6,
                      display: "block",
                    }}>
                      {item.label}
                    </span>
                  ) : (
                    <div style={{
                      fontSize: 11,
                      fontWeight: 600,
                      fontFamily: FONT.mono,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: SPECTRUM.cobalt,
                      marginBottom: 6,
                    }}>
                      {item.label}
                    </div>
                  )}
                  <div style={{
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: TEXT.muted,
                  }}>
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data shape */}
          <div style={{
            padding: 20,
            background: BG.card,
            borderRadius: RADIUS.md,
            border: `1px solid ${BORDER.default}`,
            marginBottom: 24,
          }}>
            <p style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.tagLabel.size,
              fontWeight: TYPE_SCALE.tagLabel.weight,
              letterSpacing: TYPE_SCALE.tagLabel.tracking,
              color: TEXT.muted,
              textTransform: "uppercase",
              marginBottom: 12,
            }}>
              Data Shape
            </p>
            <pre style={{
              fontFamily: FONT.mono,
              fontSize: 12,
              lineHeight: 1.6,
              color: TEXT.secondary,
              whiteSpace: "pre-wrap",
            }}>
{`sidebarSections = [
  {
    label: "Section Name",       // 11px mono uppercase
    description: "Description",  // 12px muted text
    href: "#section-id",         // optional — makes label clickable
  },
]`}
            </pre>
          </div>

          {/* Token specs */}
          <div style={{
            padding: 20,
            background: BG.card,
            borderRadius: RADIUS.md,
            border: `1px solid ${BORDER.default}`,
          }}>
            <p style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.tagLabel.size,
              fontWeight: TYPE_SCALE.tagLabel.weight,
              letterSpacing: TYPE_SCALE.tagLabel.tracking,
              color: TEXT.muted,
              textTransform: "uppercase",
              marginBottom: 12,
            }}>
              Token Specs
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                ["Heading", "11px · FONT.mono · TEXT.hint · uppercase"],
                ["Label", "11px · FONT.mono · SPECTRUM.cobalt · uppercase"],
                ["Description", "12px · TEXT.muted · 1.5 line-height"],
                ["Sidebar width", "240px · sticky top: 80px"],
                ["Scrollbar", "4px width · 2px border-radius"],
                ["Breakpoint", "hidden below 900px"],
                ["Scroll offset", "96px (scroll-margin-top on [id])"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                  <span style={{
                    fontFamily: FONT.mono,
                    fontSize: TYPE_SCALE.micro.size,
                    color: TEXT.hint,
                    letterSpacing: TYPE_SCALE.micro.tracking,
                    minWidth: 100,
                    flexShrink: 0,
                  }}>
                    {label}
                  </span>
                  <span style={{
                    fontFamily: FONT.mono,
                    fontSize: TYPE_SCALE.micro.size,
                    color: TEXT.micro,
                    letterSpacing: TYPE_SCALE.micro.tracking,
                  }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageLayout>

      <SiteFooter />
    </div>
  );
}
