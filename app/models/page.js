import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba, RADIUS, gradientCardBg,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, PageLayout,
} from "@/src/components";

// ─── MODEL DATA ─────────────────────────────────────────────

const MODELS = [
  {
    id: "M1",
    role: "The Instrument",
    title: "Inner Compass & Four-Mode Gradient",
    coreQuestion: "Where is the needle?",
    summary:
      "How the nervous system orients between safety and threat across four modes on a continuous gradient. What each mode enables and restricts. How the compass gets stuck and how the return restores it.",
    concepts: 10,
    drawsFrom: "F1, F3, F7, F12",
    color: SPECTRUM.azure,
    href: "/model/m1-inner-compass",
  },
  {
    id: "M2",
    role: "The Calibration",
    title: "Three Awareness Capacities",
    coreQuestion: "What is holding it there?",
    summary:
      "The three awarenesses — Reading Emotions, Emotional Resonance, and Self-Emotional Awareness — that determine what data the compass receives, how that data is processed, and whether the person has access to their own internal state.",
    concepts: 10,
    drawsFrom: "F2, F3, F8, F10",
    color: SPECTRUM.cobalt,
    href: "/model/m2-three-awareness-capacities",
  },
  {
    id: "M3",
    role: "The Biological Foundation",
    title: "The Biology of Unfinished Emotion",
    coreQuestion: "What is the body doing underneath?",
    summary:
      "The physiological sequence that runs when the nervous system perceives a threat, what the body does when that sequence is allowed to complete, and what happens when cognition overrides it instead.",
    concepts: 7,
    drawsFrom: "F1, F2, F3, F8, F12",
    color: SPECTRUM.indigo,
    href: "/model/m3-the-open-cycle",
  },
];

const CONNECTORS = [
  { label: "calibrates", description: "M2 determines how well the compass (M1) can read its own data" },
  { label: "runs underneath", description: "M3 maps the biology that M1 and M2 sit on top of" },
];

// ─── PAGE ───────────────────────────────────────────────────

export default function ModelsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/models" />

      <PageLayout
        header={
          <ModelHero
            badge="3 FOUNDATIONAL MODELS"
            title="The Three Core Models"
            subtitle="Instrument + Calibration + Biological Foundation"
            description="Each model makes a different layer of the emotional system visible. Together, they map how emotional patterns form, persist, and change — where the nervous system is oriented, what calibrated it, and what the body is doing underneath."
            color={SPECTRUM.cobalt}
          />
        }
      >
        {/* ─── VISUAL RELATIONSHIP MAP ────────────────────── */}
        <section style={{ marginTop: 8, marginBottom: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {MODELS.map((model, i) => (
              <div key={model.id}>
                {/* Model Layer */}
                <ModelLayer model={model} />

                {/* Connector between layers */}
                {i < MODELS.length - 1 && (
                  <Connector connector={CONNECTORS[i]} topColor={model.color} bottomColor={MODELS[i + 1].color} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── INTEGRATION ────────────────────────────────── */}
        <section
          id="integration"
          style={{
            marginBottom: 48,
            padding: "20px 24px",
            background: hexToRgba(SPECTRUM.cobalt, 0.04),
            borderRadius: RADIUS.md,
            border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.12)}`,
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              fontFamily: FONT.mono,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: SPECTRUM.cobalt,
              marginBottom: 10,
            }}
          >
            Three Dimensions of One Reality
          </div>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
            A compass position (M1) without a capacity configuration (M2) is a reading without an explanation. A capacity configuration without a compass position is an architecture without a location. And both without the physiological foundation (M3) are a map drawn above ground with no account of what is running underneath.
          </p>
          <p style={{ fontSize: 14, color: TEXT.primary, lineHeight: 1.8, margin: "12px 0 0", fontWeight: 500 }}>
            Complete understanding requires all three: where is the needle, what is holding it there, and what is the body doing while it stays stuck?
          </p>
        </section>

        {/* ─── FOOTER LINKS ───────────────────────────────── */}
        <section
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { href: "/publications/validation-study", label: "Validation Study" },
            { href: "/frameworks-map", label: "12 Frameworks" },
            { href: "/collaborate", label: "Collaborate" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                padding: "10px 20px",
                background: "transparent",
                color: TEXT.muted,
                border: `1px solid ${BORDER.default}`,
                borderRadius: RADIUS.md,
                fontWeight: 500,
                fontSize: 13,
                fontFamily: FONT.mono,
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              {label}
            </Link>
          ))}
        </section>

      </PageLayout>

      <SiteFooter />
    </div>
  );
}

// ─── HELPER COMPONENTS ──────────────────────────────────────

function ModelLayer({ model }) {
  return (
    <Link
      href={model.href}
      style={{
        display: "block",
        textDecoration: "none",
        padding: "20px 24px",
        background: gradientCardBg(model.color, 0.06),
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(model.color, 0.15)}`,
        borderLeft: `4px solid ${model.color}`,
        transition: "border-color 200ms ease, background 200ms ease",
      }}
    >
      {/* Top row: ID + Role badge */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            fontFamily: FONT.mono,
            color: model.color,
          }}
        >
          {model.id}
        </span>
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            fontFamily: FONT.mono,
            padding: "3px 10px",
            borderRadius: 100,
            background: hexToRgba(model.color, 0.12),
            color: model.color,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {model.role}
        </span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: 11,
            fontFamily: FONT.mono,
            color: TEXT.hint,
          }}
        >
          {model.concepts} concepts
        </span>
      </div>

      {/* Title */}
      <h2
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: TEXT.primary,
          margin: "0 0 6px",
          lineHeight: 1.3,
        }}
      >
        {model.title}
      </h2>

      {/* Core question */}
      <p
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: model.color,
          fontStyle: "italic",
          margin: "0 0 10px",
        }}
      >
        {model.coreQuestion}
      </p>

      {/* Summary */}
      <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: "0 0 12px" }}>
        {model.summary}
      </p>

      {/* Footer: draws from + read link */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              fontFamily: FONT.mono,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: TEXT.hint,
            }}
          >
            Draws from
          </span>
          <span
            style={{
              fontSize: 11,
              fontFamily: FONT.mono,
              color: TEXT.muted,
            }}
          >
            {model.drawsFrom}
          </span>
        </div>
        <span
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: model.color,
          }}
        >
          Read full model →
        </span>
      </div>
    </Link>
  );
}

function Connector({ connector, topColor, bottomColor }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px 0",
        position: "relative",
      }}
    >
      {/* Vertical gradient line */}
      <div
        style={{
          position: "absolute",
          left: 28,
          top: 0,
          bottom: 0,
          width: 2,
          background: `linear-gradient(to bottom, ${hexToRgba(topColor, 0.4)}, ${hexToRgba(bottomColor, 0.4)})`,
          borderRadius: 1,
        }}
        aria-hidden="true"
      />

      {/* Label */}
      <div
        style={{
          fontSize: 10,
          fontWeight: 600,
          fontFamily: FONT.mono,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: TEXT.muted,
          background: BG.page,
          padding: "2px 12px",
          zIndex: 1,
        }}
      >
        {connector.label}
      </div>
    </div>
  );
}
