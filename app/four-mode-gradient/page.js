"use client";

import { useState } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba, RADIUS } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";

// Researcher pattern colors (blue spectrum)
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
    pathway: "SAFETY → EMPATHY → REPAIR",
    regulation: "Regulation through connection",
    subtitle: "Social engagement system online. Autonomic flexibility enabling rapid, proportionate response to environmental signals.",
    color: PATTERN.a.color,
    coreInsight: "Ventral vagal dominant. Safety is perceived — not forced calm, but real safety that the body believes. The social engagement system comes fully online.",
    nervousSystem: "Ventral vagal activation; parasympathetic tone; threat-neutral state.",
    axes: {
      perception: "Broad and accurate — flexible appraisal with access to nuance, context, and others' perspectives.",
      emotions: "Full range available with proportionate intensity — emotions function as accurate data without overwhelming the system.",
      empathy: "High attunement — mutuality, co-regulation, and genuine curiosity about others' experience.",
      behaviors: "Collaboration, learning, curiosity, repair. Many behavioral options feel accessible.",
      repair: "Available — accountability without collapse. Impact can be acknowledged and reconnection initiated.",
    },
    enables: "Learning and neuroplasticity, relational repair, shared meaning-making, paradox tolerance.",
    gradient: "Emotional-Somatic",
  },
  {
    id: "b",
    pattern: "B",
    name: "Protection",
    scientificName: "Mobilization & Defense",
    pathway: "ALERT → THREAT SCANNING → DEFENSE",
    regulation: "Regulation through vigilance",
    subtitle: "Mobilization or immobilization in response to perceived threat. Fight, flight, freeze, or fawn responses activated.",
    color: PATTERN.b.color,
    coreInsight: "Sympathetic or partial dorsal activation. The nervous system mobilizes toward defense. A normal, adaptive response — everyone visits this state.",
    nervousSystem: "Sympathetic mobilization or partial dorsal withdrawal; elevated arousal; defense physiology active.",
    axes: {
      perception: "Narrowed toward threat — threat-biased interpretation where neutral signals start looking unsafe.",
      emotions: "Amplified and fast — anxiety, irritation, fear rise quickly with reduced time between trigger and reaction.",
      empathy: "Selective and self-protective — other people's signals are filtered through a safety lens before processing.",
      behaviors: "Vigilance, withdrawal, boundary defense, reactive control. Fight, flight, freeze, fawn. Fewer options feel available.",
      repair: "Hard but not impossible — feedback registers as threat. Downshifting arousal may be needed before reflection is possible.",
    },
    enables: "Hypervigilance, rule-following as safety strategy, people-pleasing to prevent rupture, conflict avoidance.",
    gradient: "Emotional-Somatic",
  },
  {
    id: "c",
    pattern: "C",
    name: "Control",
    scientificName: "Strategy-Based Regulation",
    pathway: "ANTICIPATE → MANAGE → OVERRIDE",
    regulation: "Regulation through strategy",
    subtitle: "Safety sought through environmental and relational control rather than connection. Strategic cognitive organization overrides emotional-somatic signals.",
    color: PATTERN.c.color,
    coreInsight: "Sustained threat organization with retained strategic capacity. The cognitive-logical system takes over from the emotional-somatic system. Not necessarily conscious or malicious.",
    nervousSystem: "Chronic sympathetic activation with cognitive override; reduced energy with functional activation.",
    axes: {
      perception: "Instrumental — risk-advantage appraisal, scanning for variables, leverage points, and failure risks.",
      emotions: "Suppressed or redirected — feelings are treated as interference. What remains: pressure, urgency, restlessness.",
      empathy: "Instrumental — others' needs become constraints or data points. Empathy used to predict and manage, not to connect.",
      behaviors: "Strategy, impression management, directive control. Often looks like competence while functioning as anxiety regulation.",
      repair: "Resisted — owning impact feels like loss of control. Accountability gets reframed as unfair or dangerous.",
    },
    enables: "Controlling communication, strategic vulnerability, boundary violations justified by necessity, blame externalization.",
    gradient: "Cognitive-Logical",
  },
  {
    id: "d",
    pattern: "D",
    name: "Domination",
    scientificName: "Power-Based Regulation",
    pathway: "OVERRIDE → ELIMINATE → SURVIVE",
    regulation: "Regulation through force",
    subtitle: "Safety exclusively through power, dominance, and control of others. Empathy offline or weaponized. Dominance circuitry active.",
    color: PATTERN.d.color,
    coreInsight: "Power-as-safety physiology. The system operates as if survival or rank is at stake. Sustained high arousal directed toward control. Empathy goes offline.",
    nervousSystem: "Sustained activation with empathy collapse; dominance circuitry active; dorsal vagal collapse masked by power assertion.",
    axes: {
      perception: "Hierarchical — binary win/lose, strong/weak, threat/target. Nuance collapses. Control-focused appraisal.",
      emotions: "Blunted or weaponized — reduced access to guilt, remorse, care. What remains serves dominance: rage, contempt, cold resolve.",
      empathy: "Suppressed or weaponized — other people's pain does not register. If empathy appears, it is used for prediction and exploitation, not care.",
      behaviors: "Coercion, intimidation, enforcement, suppression. High certainty, low restraint.",
      repair: "Structurally unavailable — no stable framework for accountability. Harm is denied, minimized, justified, or converted into blame.",
    },
    enables: "Safety requires supremacy. Threat must be suppressed or eliminated.",
    gradient: "Cognitive-Logical",
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
            Where is the autonomic nervous system on the regulatory continuum? Not a categorical
            classification — a continuous gradient reflecting real-time neuroception of safety and threat.
            Regulatory state determines functional capacity — detectable in natural language, quantifiable
            through complexity markers.
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
            Regulatory state determines functional capacity — perception, affect, cognition, and
            behavioral repertoire are constrained by autonomic positioning on the gradient.
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
              Each mode is mapped across five structural axes: perception, emotions, empathy, behaviors, and repair.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {MODES.map((mode) => (
              <ExpandableModeCard key={mode.id} mode={mode} />
            ))}
          </div>
        </section>

        {/* Properties of the System */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: TEXT.primary,
              letterSpacing: "-0.01em",
              marginBottom: 8,
            }}
          >
            Properties of the System
          </h2>
          <p style={{ fontSize: 14, color: TEXT.muted, marginBottom: 20 }}>
            Operational principles governing state transitions, regulatory constraints, and systemic dynamics.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              {
                title: "Continuous autonomic regulation",
                text: "The system holds a regulatory position at all times. No neutral state — only gradient positions. Neuroception scans continuously below conscious awareness.",
              },
              {
                title: "Dimensional, not categorical",
                text: "The four modes are regions on a continuous dimension, not discrete categories. Boundaries are probabilistic zones, not thresholds.",
              },
              {
                title: "Asymmetric state transitions",
                text: "Escalation is fast — threat detection prioritizes speed. De-escalation is slow — the system requires sustained safety signals before downregulating. This asymmetry biases toward sustained threat states.",
              },
              {
                title: "Allostatic load constraints",
                text: "Threat modes are acute stress responses — metabolically expensive, designed for minutes to hours. Chronic occupation produces allostatic overload and progressive erosion of regulatory capacity.",
              },
              {
                title: "Developmental calibration failure",
                text: "Without reliable early co-regulation, the ventral vagal system lacks a template for Connection. The system cannot default to a state it has never reliably encoded.",
              },
              {
                title: "Empathy attenuation across the gradient",
                text: "Empathic accuracy decreases systematically. Connection: full mentalization. Protection: self-referential bias. Control: instrumental theory of mind. Domination: empathy offline or weaponized.",
              },
              {
                title: "Connection mode dysregulation",
                text: "Without mode awareness, the system can lock in Connection — maintaining attunement toward sources of harm, failing to activate protection. This is echoism. The target is mode flexibility, not permanent Connection.",
              },
              {
                title: "Cognitive vs. affective self-monitoring",
                text: "Reading others' states and monitoring one's own regulatory position are dissociable. Accurate social cognition without self-regulation enables exploitation, not empathy.",
              },
              {
                title: "Threat-harm conflation",
                text: "In sustained threat states, discomfort registers as danger — a signal detection error. This false-positive bias underlies escalation across interpersonal, institutional, and political conflict.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "16px 20px",
                  background: BG.card,
                  borderRadius: RADIUS.md,
                  border: `1px solid ${BORDER.default}`,
                }}
              >
                <h4 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                  {item.text}
                </p>
              </div>
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
              description="Every pattern is mapped across the same five dimensions: perception, emotions, empathy, behaviors, and repair capacity."
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
              The Researcher framework provides clinical-level detail for practitioners, researchers, and anyone who wants the complete picture.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://teg-blue.com/compass-researcher"
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
                Researcher Framework →
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

          {/* Name and pathway */}
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
                fontSize: 11,
                fontFamily: FONT.mono,
                color: TEXT.hint,
                marginLeft: 12,
                letterSpacing: "0.04em",
              }}
            >
              {mode.pathway}
            </span>
          </div>
        </div>

        {/* Gradient tag */}
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            fontFamily: FONT.mono,
            color: mode.gradient === "Emotional-Somatic" ? PATTERN.a.color : PATTERN.c.color,
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
          {/* Scientific name + regulation */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
            <p
              style={{
                fontSize: 12,
                fontFamily: FONT.mono,
                color: TEXT.hint,
                margin: 0,
              }}
            >
              {mode.scientificName}
            </p>
            <span style={{ fontSize: 11, color: TEXT.muted, fontStyle: "italic" }}>
              {mode.regulation}
            </span>
          </div>

          {/* Nervous system state */}
          <p
            style={{
              fontSize: 12,
              color: mode.color,
              fontFamily: FONT.mono,
              marginBottom: 12,
              opacity: 0.8,
            }}
          >
            {mode.nervousSystem}
          </p>

          {/* Core insight */}
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            {mode.coreInsight}
          </p>

          {/* Five axes */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <DetailRow label="PERCEPTION" value={mode.axes.perception} color={mode.color} />
            <DetailRow label="EMOTIONS" value={mode.axes.emotions} color={mode.color} />
            <DetailRow label="EMPATHY" value={mode.axes.empathy} color={mode.color} />
            <DetailRow label="BEHAVIORS" value={mode.axes.behaviors} color={mode.color} />
            <DetailRow label="REPAIR" value={mode.axes.repair} color={mode.color} />
          </div>

          {/* Enables / Outputs */}
          <p
            style={{
              fontSize: 12,
              color: TEXT.muted,
              marginTop: 14,
              lineHeight: 1.6,
              paddingTop: 12,
              borderTop: `1px solid ${BORDER.default}`,
            }}
          >
            <span style={{ fontFamily: FONT.mono, fontSize: 10, fontWeight: 600, color: TEXT.hint, letterSpacing: "0.04em" }}>
              {mode.gradient === "Emotional-Somatic" ? "ENABLES" : "PRODUCES"}{" "}
            </span>
            {mode.enables}
          </p>

          {/* Link to researcher */}
          <div style={{ marginTop: 16 }}>
            <a
              href={`https://teg-blue.com/compass-researcher/gradient-pattern-${mode.pattern.toLowerCase()}`}
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
