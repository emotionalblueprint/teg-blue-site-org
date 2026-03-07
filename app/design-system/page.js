import {
  BG, TEXT, BORDER, FONT, SPACING, RADIUS, TRANSITION, OPACITY,
  SPECTRUM, PATTERN, PATTERN_GRADIENT, AWARENESS, STATUS,
  MODE_ORANGE, MODE_PINK, RESEARCHER,
  TYPE_SCALE, hexToRgba,
} from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import CompassBar from "./CompassBar";

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
            <Swatch color={PATTERN.A.primary} label="Pattern A" sublabel="Connection Mode" />
            <Swatch color={PATTERN.B.primary} label="Pattern B" sublabel="Protection Mode" />
            <Swatch color={PATTERN.C.primary} label="Pattern C" sublabel="Control Mode" />
            <Swatch color={PATTERN.D.primary} label="Pattern D" sublabel="Domination Mode" />
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

          <SwatchRow label="Researcher">
            <Swatch color={RESEARCHER.accent} label="accent" sublabel={RESEARCHER.accent} />
            <Swatch color={RESEARCHER.accentLight} label="light" sublabel={RESEARCHER.accentLight} />
            <Swatch color={RESEARCHER.accentLighter} label="lighter" sublabel={RESEARCHER.accentLighter} />
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
          <SectionTitle>Borders</SectionTitle>
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
                  color: TEXT.primary,
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
              { name: "containerMax", value: `${SPACING.containerMax}px`, width: "100%" },
              { name: "sectionGap (desktop)", value: `${SPACING.sectionGap.desktop}px`, width: `${(SPACING.sectionGap.desktop / SPACING.containerMax) * 100}%` },
              { name: "sectionGap (mobile)", value: `${SPACING.sectionGap.mobile}px`, width: `${(SPACING.sectionGap.mobile / SPACING.containerMax) * 100}%` },
              { name: "contentGap (desktop)", value: `${SPACING.contentGap.desktop}px`, width: `${(SPACING.contentGap.desktop / SPACING.containerMax) * 100}%` },
              { name: "cardPadding (desktop)", value: `${SPACING.cardPadding.desktop}px`, width: `${(SPACING.cardPadding.desktop / SPACING.containerMax) * 100}%` },
              { name: "gridGap", value: `${SPACING.gridGap}px`, width: `${(SPACING.gridGap / SPACING.containerMax) * 100}%` },
            ].map(({ name, value, width }) => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
      </main>

      <SiteFooter />
    </div>
  );
}
