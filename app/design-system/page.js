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

        {/* Remaining sections will be added in subsequent tasks */}
      </main>

      <SiteFooter />
    </div>
  );
}
