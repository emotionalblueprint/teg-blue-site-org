"use client";

import { useState } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba, RADIUS } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

// Deep Diver pattern colors (blue spectrum)
const PATTERN = {
  a: { color: "#60a5fa", name: "Connection" },  // blue-400
  b: { color: "#3b82f6", name: "Protection" },  // blue-500
  c: { color: "#2563eb", name: "Control" },     // blue-600
  d: { color: "#1d4ed8", name: "Domination" },  // blue-700
};

// Mode data for expandable cards
const MODES = [
  {
    id: "a",
    pattern: "A",
    name: "Connection",
    scientificName: "Cooperative Regulation",
    subtitle: "Safety perceived (Connection)",
    color: PATTERN.a.color,
    coreInsight: "The nervous system perceives safety. Not forced calm — real safety that the body believes.",
    empathyState: "Full — others exist as full people with their own experience",
    nervousSystem: "Ventral vagal engagement, social engagement system active",
    keyMarker: "Curiosity about others' experience, capacity for repair",
    gradient: "Adaptive state",
  },
  {
    id: "b",
    pattern: "B",
    name: "Protection",
    scientificName: "Mobilization & Defense",
    subtitle: "Threat perceived (Protection)",
    color: PATTERN.b.color,
    coreInsight: "Walls go up, but they can come down. A normal response — everyone visits Protection mode.",
    empathyState: "Partial — focus narrows to self-protection",
    nervousSystem: "Sympathetic activation, fight/flight readiness",
    keyMarker: "Withdrawal, guardedness, but recovery is possible with time and safety",
    gradient: "Adaptive state",
  },
  {
    id: "c",
    pattern: "C",
    name: "Control",
    scientificName: "Strategy-Based Regulation",
    subtitle: "Safety sought through controlling others (Control)",
    color: PATTERN.c.color,
    coreInsight: "Protection isn't enough — managing others becomes the way to feel safe. Not necessarily conscious or malicious.",
    empathyState: "Strategic — empathy used to predict and manage, not connect",
    nervousSystem: "Chronic sympathetic activation with cognitive override",
    keyMarker: "Others become objects to manage; accountability is performed, not genuine",
    gradient: "Stuck state",
  },
  {
    id: "d",
    pattern: "D",
    name: "Domination",
    scientificName: "Power-Based Regulation",
    subtitle: "Power as only safety (Domination)",
    color: PATTERN.d.color,
    coreInsight: "Control becomes entrenched — power over others is the primary way of feeling safe. Empathy goes offline.",
    empathyState: "Offline — others exist only in relation to one's needs",
    nervousSystem: "Dorsal vagal collapse masked by power assertion",
    keyMarker: "Vulnerability is weakness; harm is rationalized; repair is structurally impossible",
    gradient: "Stuck state",
  },
];

export default function FourModeGradientPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/four-mode-gradient" />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {/* Hero Section */}
        <header style={{ marginBottom: 48 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: SPECTRUM.azure,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: FONT.mono,
              marginBottom: 12,
            }}
          >
            Measurement System
          </p>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 16,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            The Four-Mode Gradient
          </h1>
          <p
            style={{
              fontSize: 16,
              color: TEXT.secondary,
              lineHeight: 1.8,
              maxWidth: 640,
              marginBottom: 20,
            }}
          >
            Four nervous system regulatory states that shape what we can perceive, feel, think, and do —
            detectable in natural language, measurable through complexity markers.
          </p>

          {/* Gradient bar */}
          <div
            style={{
              height: 6,
              borderRadius: 3,
              background: `linear-gradient(90deg, ${PATTERN.a.color}, ${PATTERN.b.color}, ${PATTERN.c.color}, ${PATTERN.d.color})`,
              maxWidth: 400,
              marginBottom: 24,
            }}
          />

          <p
            style={{
              display: "inline-flex",
              fontSize: 11,
              fontWeight: 600,
              fontFamily: FONT.mono,
              color: SPECTRUM.azure,
              padding: "4px 10px",
              background: hexToRgba(SPECTRUM.azure, 0.1),
              borderRadius: 4,
            }}
          >
            Status: Proposed model with early evidence
          </p>
        </header>

        {/* Core Insight */}
        <section style={{ marginBottom: 48 }}>
          <blockquote
            style={{
              margin: 0,
              padding: "20px 24px",
              borderLeft: `4px solid ${PATTERN.a.color}`,
              background: hexToRgba(PATTERN.a.color, 0.08),
              borderRadius: "0 8px 8px 0",
              fontSize: 18,
              fontWeight: 500,
              color: TEXT.primary,
              lineHeight: 1.6,
            }}
          >
            State determines capacity — what someone can perceive, feel, think, and do depends on
            where their nervous system lands, not on their character or intelligence.
          </blockquote>
        </section>

        {/* The Four Modes - Expandable Cards */}
        <section style={{ marginBottom: 48 }}>
          <div style={{ marginBottom: 20 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: TEXT.primary,
                letterSpacing: "-0.01em",
                marginBottom: 8,
              }}
            >
              The Four Regulatory States
            </h2>
            <p style={{ fontSize: 14, color: TEXT.muted, margin: 0 }}>
              Not personality types — nervous system positions that shift in response to perceived threat.
              Each state has a pattern designation (A, B, C, D) used in clinical and research contexts.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {MODES.map((mode) => (
              <ExpandableModeCard key={mode.id} mode={mode} />
            ))}
          </div>
        </section>

        {/* Key Principle */}
        <section style={{ marginBottom: 48 }}>
          <div
            style={{
              padding: 24,
              background: BG.card,
              borderRadius: RADIUS.lg,
              border: `1px solid ${BORDER.default}`,
            }}
          >
            <h3 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
              The Core Testable Claim
            </h3>
            <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 0 }}>
              The key variable that predicts relational outcomes is not current state, but{" "}
              <strong
                style={{
                  background: `linear-gradient(90deg, ${PATTERN.a.color}, ${SPECTRUM.azure})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                capacity to return to Connection when challenged
              </strong>.
              Someone in Protection who can move back is fundamentally different from someone who escalates toward Control.
            </p>
          </div>
        </section>

        {/* What You'll Find - CTA to .com */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: TEXT.primary,
              letterSpacing: "-0.01em",
              marginBottom: 16,
            }}
          >
            Explore the Full Framework
          </h2>

          <p style={{ fontSize: 15, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 24 }}>
            The Four-Mode Gradient includes detailed pattern diagrams, assessment tools, and intervention
            principles available on teg-blue.com. Here's what you'll find:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <FeatureCard
              title="Five Structural Axes"
              description="Every pattern is mapped across the same five dimensions: nervous system state, biological activation, cognitive frame, empathy logic, and behavioral expression."
              color={SPECTRUM.azure}
            />
            <FeatureCard
              title="Transition Logic"
              description="How and why people move between states. The escalation pathways, the de-escalation markers, and what predicts each trajectory."
              color={SPECTRUM.blue}
            />
            <FeatureCard
              title="Intervention Principles"
              description="What actually helps at each position. Not generic advice — pattern-specific approaches based on nervous system logic."
              color={SPECTRUM.cobalt}
            />
            <FeatureCard
              title="Emotional Tools"
              description="Five gradient scales for real-time self-assessment: Hurt, Accountability, Control, Empathy, and Entitlement."
              color={SPECTRUM.indigo}
            />
          </div>

          {/* CTA Buttons */}
          <div
            style={{
              padding: 28,
              background: hexToRgba(SPECTRUM.blue, 0.08),
              borderRadius: RADIUS.lg,
              border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.2)}`,
              textAlign: "center",
            }}
          >
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
              The Deep Diver framework provides clinical-level detail for practitioners, researchers, and anyone who wants the complete picture.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://teg-blue.com/four-mode-gradient/deep-diver"
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
                Deep Diver Framework →
              </a>
              <a
                href="https://teg-blue.com/four-mode-gradient/deep-diver/introduction"
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
                Start with Introduction
              </a>
            </div>
          </div>
        </section>

        {/* Layer Navigation */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: TEXT.primary,
              letterSpacing: "-0.01em",
              marginBottom: 16,
            }}
          >
            Two-Layer Architecture
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            <div
              style={{
                padding: 20,
                background: hexToRgba(SPECTRUM.azure, 0.08),
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
                Four-Mode Gradient
              </p>
              <p style={{ fontSize: 13, color: TEXT.muted, margin: 0, lineHeight: 1.6 }}>
                Observable measurement. Where am I? Where are they?
              </p>
            </div>

            <Link
              href="/frameworks-map"
              style={{
                padding: 20,
                background: hexToRgba(SPECTRUM.cobalt, 0.08),
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

// ─── EXPANDABLE MODE CARD ─────────────────────────────────

function ExpandableModeCard({ mode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        background: BG.card,
        borderRadius: RADIUS.lg,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `4px solid ${mode.color}`,
        overflow: "hidden",
      }}
    >
      {/* Header - always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
          {/* Pattern letter */}
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              fontFamily: FONT.mono,
              color: mode.color,
              background: hexToRgba(mode.color, 0.12),
              padding: "4px 8px",
              borderRadius: 4,
            }}
          >
            {mode.pattern}
          </span>

          {/* Name and subtitle */}
          <div>
            <span
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: mode.color,
              }}
            >
              {mode.name}
            </span>
            <span
              style={{
                fontSize: 14,
                color: TEXT.muted,
                marginLeft: 12,
              }}
            >
              {mode.subtitle}
            </span>
          </div>
        </div>

        {/* Gradient tag */}
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            fontFamily: FONT.mono,
            color: mode.gradient === "Adaptive state" ? PATTERN.a.color : PATTERN.c.color,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            marginRight: 16,
          }}
        >
          {mode.gradient}
        </span>

        {/* Arrow */}
        <span
          style={{
            fontSize: 18,
            color: TEXT.muted,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          ▾
        </span>
      </button>

      {/* Expandable content */}
      {isOpen && (
        <div
          style={{
            padding: "0 20px 20px",
            borderTop: `1px solid ${BORDER.default}`,
            paddingTop: 16,
          }}
        >
          {/* Scientific name */}
          <p
            style={{
              fontSize: 12,
              fontFamily: FONT.mono,
              color: TEXT.hint,
              marginBottom: 16,
            }}
          >
            Scientific: {mode.scientificName}
          </p>

          {/* Core insight */}
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.7,
              marginBottom: 16,
              fontStyle: "italic",
            }}
          >
            "{mode.coreInsight}"
          </p>

          {/* Details grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <DetailRow label="NERVOUS SYSTEM" value={mode.nervousSystem} color={mode.color} />
            <DetailRow label="EMPATHY STATE" value={mode.empathyState} color={mode.color} />
            <DetailRow label="KEY MARKER" value={mode.keyMarker} color={mode.color} />
          </div>

          {/* Link to deep diver */}
          <div style={{ marginTop: 16 }}>
            <a
              href={`https://teg-blue.com/four-mode-gradient/deep-diver#pattern-${mode.pattern.toLowerCase()}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                color: mode.color,
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              View full pattern diagram on teg-blue.com →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function DetailRow({ label, value, color }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
      }}
    >
      <span
        style={{
          fontSize: 10,
          fontWeight: 600,
          fontFamily: FONT.mono,
          color: color,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          minWidth: 100,
          paddingTop: 2,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: 13,
          color: TEXT.secondary,
          lineHeight: 1.5,
        }}
      >
        {value}
      </span>
    </div>
  );
}

function FeatureCard({ title, description, color }) {
  return (
    <div
      style={{
        padding: 20,
        background: BG.card,
        borderRadius: RADIUS.md,
        border: `1px solid ${BORDER.default}`,
        borderTop: `3px solid ${color}`,
      }}
    >
      <h3
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: color,
          marginBottom: 8,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.muted, margin: 0, lineHeight: 1.6 }}>
        {description}
      </p>
    </div>
  );
}
