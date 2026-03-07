"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba, RADIUS, gradientCardBg,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ResearcherHero, PageLayout,
} from "@/src/components";

const SIDEBAR_SECTIONS = [
  { label: "M1 — Inner Compass", description: "The four-mode gradient as a continuous compass. How the needle moves, what each position means." },
  { label: "M2 — Three Capacities", description: "Reading Emotions, Emotional Resonance, Self-Emotional Awareness. The calibration system." },
  { label: "M3 — The Open Cycle", description: "What happens in the body when the emotional cycle completes — and what happens when it doesn't." },
  { label: "Integration", description: "How the three models connect: the instrument, its calibration, and its biological mechanism." },
];

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
  {
    id: "M3",
    title: "The Open Cycle",
    subtitle: "The Physiology",
    coreQuestion: "What happens to the body when the emotional cycle is not allowed to complete — and what would completion require?",
    summary:
      "The physiological sequence that runs when the nervous system perceives a threat, what the body does when that sequence is allowed to complete, and what happens when cognition overrides it instead. Why the body cannot receive a philosophical decision. Why the signal does not stop when access to it does.",
    purpose:
      "Map the biological cascade from threat perception through activation. Show what completion requires and why cognition cannot provide it. Trace the system-by-system cost of each unfinished cycle. Connect allostatic load to gradient position.",
    concepts: [
      "The threat cascade — amygdala to HPA axis",
      "What completion requires — the return sequence",
      "The override mechanism — signal submersion",
      "What stays active — system-by-system residue",
      "The accumulation effect — allostatic load",
      "Why cognition cannot close the cycle",
      "The open cycle and the gradient",
    ],
    drawsFrom: "F1 (primary), F2, F3, F8, F12",
    pairedWith: "M1 — Inner Compass & M2 — Three Awareness Capacities",
    color: SPECTRUM.indigo,
    href: "/model/m3-the-open-cycle",
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

      <PageLayout
        header={
          <ResearcherHero
            badge="3 FOUNDATIONAL MODELS"
            title="The Three Core Models"
            subtitle="Instrument + Calibration + Biological Foundation = Complete System"
            description="The three core models synthesize the 12 frameworks into visual instruments — each one making a different layer of the emotional system visible: where the nervous system is oriented, what calibrated it, and what the body is doing underneath."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* Intro */}
        <section style={{ marginTop: 32, marginBottom: 32 }}>
          <p style={{ ...proseStyle, marginBottom: 0 }}>
            Each model makes a different question answerable — and together, they map how emotional patterns form, persist, and change.
          </p>
        </section>

        {/* Model Cards */}
        <section style={{ marginBottom: 32 }}>
          {MODELS.map((model) => (
            <ExpandableModelCard key={model.id} model={model} />
          ))}
        </section>

        {/* Integration note */}
        <section style={{ marginBottom: 32 }}>
          <p style={{ ...proseStyle, marginBottom: 0 }}>
            The three models are not independent. They are three dimensions of the same reality. A compass position (M1) without a capacity configuration (M2) is a reading without an explanation. A capacity configuration without a compass position is an architecture without a location. And both without the physiological foundation (M3) are a map drawn above ground with no account of what is running underneath. Complete understanding requires all three: where is the needle, what is holding it there, and what is the body doing while it stays stuck?
          </p>
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

      </PageLayout>

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

        {/* Always-visible link + expand indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 12 }}>
          <Link
            href={model.href}
            onClick={(e) => e.stopPropagation()}
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: model.color,
              textDecoration: "none",
            }}
          >
            Read full model →
          </Link>
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
            <h4 style={expandLabelStyle(model.color)}>{model.concepts.length} Concepts</h4>
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
