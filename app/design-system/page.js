import {
  BG, TEXT, BORDER, FONT, SPACING, RADIUS, TRANSITION, OPACITY,
  SPECTRUM, PATTERN, PATTERN_GRADIENT, AWARENESS, STATUS,
  MODE_ORANGE, MODE_PINK, RESEARCHER,
  TYPE_SCALE, hexToRgba,
} from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout } from "@/src/components";
import CompassBar from "./CompassBar";

const SIDEBAR_SECTIONS = [
  { label: "Design Tokens", description: "The visual language: spectrum colors, typography, spacing, and component patterns.", href: "#design-tokens" },
  { label: "Section Separators", description: "Three divider styles for different content contexts.", href: "#section-separators" },
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

        {/* ─── 12. SECTION SEPARATORS ────────────────────── */}
        <section id="section-separators" style={{ marginBottom: SPACING.sectionGap.desktop }}>
          <SectionTitle>Section Separators</SectionTitle>
          <p style={{
            fontSize: TYPE_SCALE.body.size,
            lineHeight: TYPE_SCALE.body.lineHeight,
            color: TEXT.secondary,
            marginBottom: 40,
          }}>
            Three divider styles for separating content at different scales.
          </p>

          {/* ── Separator 1: Line ── */}
          <div style={{ marginBottom: 48 }}>
            <p style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.tagLabel.size,
              fontWeight: TYPE_SCALE.tagLabel.weight,
              letterSpacing: TYPE_SCALE.tagLabel.tracking,
              color: TEXT.muted,
              textTransform: "uppercase",
              marginBottom: 6,
            }}>
              Line
            </p>
            <p style={{
              fontSize: TYPE_SCALE.summary.size,
              color: TEXT.hint,
              marginBottom: 20,
            }}>
              Subtle 1px rule. Use between items within the same section — list entries, card groups, table rows.
            </p>
            <div style={{ padding: "24px 0" }}>
              <div style={{
                height: 1,
                background: BORDER.default,
              }} />
            </div>
            <p style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.micro.size,
              color: TEXT.micro,
              letterSpacing: TYPE_SCALE.micro.tracking,
              marginTop: 8,
            }}>
              height: 1px · background: BORDER.default · no margin (parent controls spacing)
            </p>
          </div>

          {/* ── Separator 2: Spectrum ── */}
          <div style={{ marginBottom: 48 }}>
            <p style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.tagLabel.size,
              fontWeight: TYPE_SCALE.tagLabel.weight,
              letterSpacing: TYPE_SCALE.tagLabel.tracking,
              color: TEXT.muted,
              textTransform: "uppercase",
              marginBottom: 6,
            }}>
              Spectrum
            </p>
            <p style={{
              fontSize: TYPE_SCALE.summary.size,
              color: TEXT.hint,
              marginBottom: 20,
            }}>
              Gradient bar using the blue spectrum. Use between major page sections — a visual signal that the topic is shifting.
            </p>
            <div style={{ padding: "24px 0" }}>
              <div style={{
                height: 2,
                borderRadius: 1,
                background: `linear-gradient(90deg, ${hexToRgba(SPECTRUM.sky, 0)}, ${SPECTRUM.sky}, ${SPECTRUM.azure}, ${SPECTRUM.cobalt}, ${SPECTRUM.indigo}, ${hexToRgba(SPECTRUM.indigo, 0)})`,
              }} />
            </div>
            <p style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.micro.size,
              color: TEXT.micro,
              letterSpacing: TYPE_SCALE.micro.tracking,
              marginTop: 8,
            }}>
              height: 2px · border-radius: 1px · linear-gradient through SPECTRUM (sky → indigo, faded edges)
            </p>
          </div>

          {/* ── Separator 3: Breathing ── */}
          <div style={{ marginBottom: 0 }}>
            <p style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.tagLabel.size,
              fontWeight: TYPE_SCALE.tagLabel.weight,
              letterSpacing: TYPE_SCALE.tagLabel.tracking,
              color: TEXT.muted,
              textTransform: "uppercase",
              marginBottom: 6,
            }}>
              Breathing
            </p>
            <p style={{
              fontSize: TYPE_SCALE.summary.size,
              color: TEXT.hint,
              marginBottom: 20,
            }}>
              Centered dot cluster with generous whitespace. Use between thematic blocks — when content shifts in register, not just topic.
            </p>
            <div style={{
              padding: "32px 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
            }}>
              {[0.2, 0.45, 0.7, 0.45, 0.2].map((opacity, i) => (
                <div
                  key={i}
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: hexToRgba(SPECTRUM.cobalt, opacity),
                  }}
                />
              ))}
            </div>
            <p style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.micro.size,
              color: TEXT.micro,
              letterSpacing: TYPE_SCALE.micro.tracking,
              marginTop: 8,
            }}>
              5 dots · 4px circles · SPECTRUM.cobalt at 0.2→0.45→0.7→0.45→0.2 · gap: 12px · 32px vertical padding
            </p>
          </div>
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
