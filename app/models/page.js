"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPACING, SPECTRUM,
  hexToRgba, RADIUS, PATTERN_GRADIENT, gradientCardBg,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ResearcherHero,
  PatternGradientBar, PropositionBox,
} from "@/src/components";

// ─── MODEL DATA ─────────────────────────────────────────────

const MODELS = [
  {
    id: "M1",
    title: "Inner Compass & Four-Mode Gradient",
    subtitle: "The Instrument",
    coreQuestion: "Where is the needle, can it move, and what does the person have access to from where they are?",
    summary:
      "The complete architecture of how the nervous system orients between safety and threat — made visible, clinically usable, and personally recognisable. A compass with a moving needle that orients across four modes on a continuous gradient.",
    purpose:
      "Map the full range of the nervous system's safety-threat orientation. Describe what each mode enables and restricts. Show how the compass gets stuck and how the return restores it.",
    concepts: [
      "Emotions as the nervous system's signalling language",
      "The safety orientation question",
      "The Inner Compass — a moving needle",
      "The four modes: Connection, Protection, Control, Domination",
      "The gradient — continuous, not categorical",
      "State determines capacity",
      "Same emotion, two expressions",
      "Regulation — the return",
      "The stuck compass",
      "The two information systems",
    ],
    drawsFrom: "F1 (primary), F3, F7, F12",
    pairedWith: "M2 — Three Awareness Capacities",
    color: SPECTRUM.azure,
    href: "/model/m1-inner-compass",
  },
  {
    id: "M2",
    title: "Three Awareness Capacities",
    subtitle: "The Calibration",
    coreQuestion: "What is the current configuration — which capacities had conditions to develop, and which didn't?",
    summary:
      "The three specific awarenesses — Reading Emotions (RE), Emotional Resonance (ER), and Self-Emotional Awareness (SEA) — that determine what data the compass receives, how that data is processed, and whether the person has access to their own internal state.",
    purpose:
      "Describe the three awareness capacities, their design function, adaptive variants, and how they develop. Show how configurations predict chronic mode, identity, and relational patterns. Map the repair pathway.",
    concepts: [
      "Three capacities connected at birth",
      "The pre-SEA condition — feeling = being",
      "Awareness teaches awareness",
      "Three capacities — online and offline (with variant tables)",
      "Capacity configuration — the pattern that becomes personality",
      "Co-regulation and the return path",
      "True coherence and false coherence",
      "Tolerance thresholds",
      "Generational replication",
      "Repair — developing what was missing",
    ],
    drawsFrom: "F2 (primary), F3, F8, F10",
    pairedWith: "M1 — Inner Compass & Four-Mode Gradient",
    color: SPECTRUM.cobalt,
    href: "/model/m2-three-awareness-capacities",
  },
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

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: `32px ${SPACING.pagePadding} 60px`,
        }}
      >
        {/* Hero */}
        <ResearcherHero
          badge="2 FOUNDATIONAL MODELS"
          title="The Two Core Models"
          subtitle="Instrument + Calibration = Complete System"
          description="TEG-Blue's architecture has two layers. Layer 2 (the 12 frameworks) explains why — the theoretical architecture, the research foundations, the mechanisms, the evidence. Layer 1 (the two models) provides what — the visual-conceptual structures that practitioners, researchers, and individuals actually use."
        />

        <PatternGradientBar style={{ marginTop: 20, maxWidth: 500 }} />

        {/* Intro */}
        <section style={{ marginTop: 32, marginBottom: 32 }}>
          <p style={proseStyle}>
            A model is not a framework. The twelve frameworks explain{" "}
            <em>why</em> — the theoretical architecture, the research
            foundations, the mechanisms. The models provide{" "}
            <em>what</em> — the visual-conceptual structures that
            practitioners, researchers, and individuals actually use to
            understand and navigate human experience.
          </p>
          <p style={proseStyle}>
            A therapist uses these models with a client. A researcher
            operationalises their components for measurement. A person uses
            them to understand their own experience. Each uses the same model.
            The depth changes. The architecture doesn{"'"}t.
          </p>
          <p style={{ ...proseStyle, marginBottom: 0 }}>
            The two models are inseparable in practice. A person{"'"}s compass
            position (M1) and their capacity configuration (M2) are two
            dimensions of the same reality. The configuration explains{" "}
            <em>why</em> the compass is where it is. The compass explains{" "}
            <em>what</em> the configuration produces. Together, they provide a
            complete assessment: where is the needle, what configuration is
            holding it there, and what would need to develop for it to move?
          </p>
        </section>

        {/* Models vs Frameworks distinction */}
        <section style={{ marginBottom: 32 }}>
          <PropositionBox label="CORE DISTINCTION" title="Models vs. Frameworks">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, color: SPECTRUM.azure, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: FONT.mono, marginBottom: 6 }}>
                  Layer 1 — Models (Applied)
                </p>
                <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: TEXT.primary }}>What</strong> the system
                  does. Visual-conceptual tools for understanding and navigating
                  experience. The instrument and the calibration.
                </p>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, color: SPECTRUM.cobalt, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: FONT.mono, marginBottom: 6 }}>
                  Layer 2 — Frameworks (Theoretical)
                </p>
                <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: TEXT.primary }}>Why</strong> the system
                  works this way. The theoretical architecture, the research
                  foundations, the mechanisms, the evidence.
                </p>
              </div>
            </div>
          </PropositionBox>
        </section>

        {/* Two Model Cards */}
        <section style={{ marginBottom: 32 }}>
          {MODELS.map((model) => (
            <ExpandableModelCard key={model.id} model={model} />
          ))}
        </section>

        {/* Two-Layer Architecture */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 16,
            }}
          >
            Two-Layer Architecture
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 16,
            }}
          >
            <div
              style={{
                padding: 20,
                background: gradientCardBg(SPECTRUM.azure),
                borderRadius: RADIUS.md,
                border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.2)}`,
                borderTop: `3px solid ${SPECTRUM.azure}`,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.azure,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontFamily: FONT.mono,
                  marginBottom: 8,
                }}
              >
                Layer 1 — You are here
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: TEXT.primary,
                  marginBottom: 6,
                }}
              >
                Two Core Models
              </p>
              <p style={{ fontSize: 13, color: TEXT.muted, margin: 0, lineHeight: 1.6 }}>
                Applied tools. The instrument (M1) and the calibration (M2).
              </p>
            </div>

            <Link
              href="/frameworks-map"
              style={{
                padding: 20,
                background: gradientCardBg(SPECTRUM.cobalt),
                borderRadius: RADIUS.md,
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
                borderTop: `3px solid ${SPECTRUM.cobalt}`,
                textDecoration: "none",
                display: "block",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.cobalt,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontFamily: FONT.mono,
                  marginBottom: 8,
                }}
              >
                Layer 2
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: TEXT.primary,
                  marginBottom: 6,
                }}
              >
                12 Frameworks →
              </p>
              <p style={{ fontSize: 13, color: TEXT.muted, margin: 0, lineHeight: 1.6 }}>
                Explanatory architecture. Why do modes exist? How do patterns scale?
              </p>
            </Link>
          </div>
        </section>

        {/* CTA to .com */}
        <section style={{ marginBottom: 48 }}>
          <div
            style={{
              padding: 28,
              background: hexToRgba(SPECTRUM.blue, 0.08),
              borderRadius: RADIUS.lg,
              border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.2)}`,
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: TEXT.primary,
                marginBottom: 12,
              }}
            >
              Explore the Interactive Tools
            </h2>
            <p
              style={{
                fontSize: 15,
                color: TEXT.secondary,
                marginBottom: 20,
                maxWidth: 480,
                margin: "0 auto 20px",
                lineHeight: 1.7,
              }}
            >
              The interactive tools on teg-blue.com include the Emotional Periodic
              Table, Inner Compass visualisations, assessment tools, and the
              full mapping system across 12 levels.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://teg-blue.com/start-here"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "12px 24px",
                  background: SPECTRUM.blue,
                  color: "#fff",
                  borderRadius: RADIUS.md,
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                Start Here →
              </a>
              <a
                href="https://teg-blue.com/compass-researcher"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "12px 24px",
                  background: "transparent",
                  color: TEXT.secondary,
                  border: `1px solid ${BORDER.default}`,
                  borderRadius: RADIUS.md,
                  fontWeight: 500,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                Researcher Framework
              </a>
            </div>
          </div>
        </section>

        {/* Footer Links */}
        <section
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/publications/validation-study"
            style={{
              padding: "10px 20px",
              background: "transparent",
              color: TEXT.muted,
              border: `1px solid ${BORDER.default}`,
              borderRadius: RADIUS.md,
              fontWeight: 500,
              fontSize: 13,
              textDecoration: "none",
            }}
          >
            Validation Study
          </Link>
          <Link
            href="/frameworks-map"
            style={{
              padding: "10px 20px",
              background: "transparent",
              color: TEXT.muted,
              border: `1px solid ${BORDER.default}`,
              borderRadius: RADIUS.md,
              fontWeight: 500,
              fontSize: 13,
              textDecoration: "none",
            }}
          >
            12 Frameworks
          </Link>
          <Link
            href="/collaborate"
            style={{
              padding: "10px 20px",
              background: "transparent",
              color: TEXT.muted,
              border: `1px solid ${BORDER.default}`,
              borderRadius: RADIUS.md,
              fontWeight: 500,
              fontSize: 13,
              textDecoration: "none",
            }}
          >
            Collaborate
          </Link>
        </section>

        {/* Footer note */}
        <footer style={{ marginTop: 48, textAlign: "center" }}>
          <p style={{ fontSize: 11, color: TEXT.micro, fontFamily: FONT.mono }}>
            TEG-Blue Research Consortium · Open Science · CC BY-NC-SA 4.0
          </p>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}

// ─── HELPER COMPONENTS ──────────────────────────────────────

function ExpandableModelCard({ model }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        marginBottom: 12,
        background: gradientCardBg(model.color),
        borderRadius: 10,
        border: `1px solid ${isOpen ? hexToRgba(model.color, 0.3) : BORDER.default}`,
        borderLeft: `3px solid ${model.color}`,
        overflow: "hidden",
        transition: "border-color 0.2s ease",
      }}
    >
      {/* Clickable Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          display: "block",
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
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
          <span style={{ fontSize: 13, color: TEXT.muted }}>–</span>
          <span style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary }}>
            {model.title}
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              fontFamily: FONT.mono,
              padding: "3px 8px",
              borderRadius: 4,
              background: hexToRgba(model.color, 0.15),
              color: model.color,
              marginLeft: "auto",
            }}
          >
            {model.subtitle}
          </span>
        </div>

        {/* Core question */}
        <p style={{ fontSize: 13, color: model.color, margin: "0 0 8px 0", fontStyle: "italic" }}>
          {model.coreQuestion}
        </p>

        {/* Summary */}
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
          {model.summary}
        </p>

        {/* Expand indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
          <span style={{ fontSize: 12, color: TEXT.muted }}>
            {isOpen ? "Hide details" : "Show details"}
          </span>
          <span
            style={{
              fontSize: 14,
              color: model.color,
              transition: "transform 0.2s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▼
          </span>
        </div>
      </button>

      {/* Expandable Content */}
      {isOpen && (
        <div
          style={{
            padding: "0 20px 20px",
            borderTop: `1px solid ${BORDER.default}`,
          }}
        >
          {/* Purpose */}
          <div style={{ marginTop: 16, marginBottom: 16 }}>
            <h4 style={expandLabelStyle(model.color)}>Purpose</h4>
            <p style={expandProseStyle}>{model.purpose}</p>
          </div>

          {/* 10 Concepts */}
          <div style={{ marginBottom: 16 }}>
            <h4 style={expandLabelStyle(model.color)}>10 Concepts</h4>
            <ol style={{ paddingLeft: 20, margin: 0 }}>
              {model.concepts.map((concept, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 14,
                    color: TEXT.secondary,
                    lineHeight: 1.7,
                    marginBottom: 4,
                    paddingLeft: 4,
                  }}
                >
                  {concept}
                </li>
              ))}
            </ol>
          </div>

          {/* Draws from */}
          <div style={{ marginBottom: 16 }}>
            <h4 style={expandLabelStyle(model.color)}>Draws from</h4>
            <p style={expandProseStyle}>{model.drawsFrom}</p>
          </div>

          {/* Paired with */}
          <div style={{ marginBottom: 16 }}>
            <h4 style={expandLabelStyle(model.color)}>Paired with</h4>
            <p style={expandProseStyle}>{model.pairedWith}</p>
          </div>

          {/* Link */}
          <div
            style={{
              marginTop: 16,
              paddingTop: 16,
              borderTop: `1px solid ${BORDER.default}`,
            }}
          >
            <Link
              href={model.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 500,
                color: model.color,
                textDecoration: "none",
              }}
            >
              Read full model →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── SHARED STYLES ──────────────────────────────────────────

const proseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  marginBottom: 16,
};

const expandProseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  margin: 0,
};

function expandLabelStyle(color) {
  return {
    fontSize: 11,
    fontWeight: 600,
    color: color,
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontFamily: FONT.mono,
  };
}
