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
    subtitle: "The nervous system settles. Empathy comes online. Thinking becomes flexible. Repair is possible.",
    color: PATTERN.a.color,
    coreInsight: "The nervous system perceives safety. Not forced calm — real safety that the body believes.",
    axes: {
      perception: "Wide and open — we can see nuance, context, and others' perspectives.",
      emotions: "Full range available — we can feel without being overwhelmed.",
      empathy: "Fully online — we can sense and respond to others' experiences.",
      behaviors: "Flexible and adaptive — many options feel possible.",
      repair: "Available — we can acknowledge impact and reconnect.",
    },
    gradient: "Adaptive state",
  },
  {
    id: "b",
    pattern: "B",
    name: "Protection",
    scientificName: "Mobilization & Defense",
    pathway: "ALERT → THREAT SCANNING → DEFENSE",
    regulation: "Regulation through vigilance",
    subtitle: "The nervous system mobilizes. Attention narrows toward danger. The body prioritizes survival prediction.",
    color: PATTERN.b.color,
    coreInsight: "Walls go up, but they can come down. A normal response — everyone visits Protection mode.",
    axes: {
      perception: "Narrowed toward threat — neutral signals start looking unsafe.",
      emotions: "Amplified and fast — anxiety, irritation, fear rise quickly with less time between trigger and reaction.",
      empathy: "Reduced — other people's signals are filtered through a safety lens first.",
      behaviors: "Defensive — fight, flight, freeze, fawn. Fewer options feel available.",
      repair: "Hard but not impossible — feedback registers as threat. Downshifting arousal may be needed before reflection is possible.",
    },
    gradient: "Adaptive state",
  },
  {
    id: "c",
    pattern: "C",
    name: "Control",
    scientificName: "Strategy-Based Regulation",
    pathway: "ANTICIPATE → MANAGE → OVERRIDE",
    regulation: "Regulation through strategy",
    subtitle: "The system shifts from responding to threat toward controlling outcomes. Cognitive control increases, but emotional reality goes quiet.",
    color: PATTERN.c.color,
    coreInsight: "Protection isn't enough — managing others becomes the way to feel safe. Not necessarily conscious or malicious.",
    axes: {
      perception: "Strategic — scanning for variables, leverage points, and failure risks.",
      emotions: "Suppressed or redirected — feelings are treated as interference. What remains: pressure, urgency, restlessness.",
      empathy: "Low and instrumental — others' needs become constraints or data points.",
      behaviors: "Directive — take over, micromanage, correct, steer. Often looks like competence while functioning as anxiety regulation.",
      repair: "Resisted — owning impact feels like loss of control. Accountability gets reframed as unfair or dangerous.",
    },
    gradient: "Stuck state",
  },
  {
    id: "d",
    pattern: "D",
    name: "Domination",
    scientificName: "Power-Based Regulation",
    pathway: "OVERRIDE → ELIMINATE → SURVIVE",
    regulation: "Regulation through force",
    subtitle: "The system operates as if survival or rank is at stake. Empathy is offline. The primary aim becomes power, escape, or victory.",
    color: PATTERN.d.color,
    coreInsight: "Control becomes entrenched — power over others is the primary way of feeling safe. Empathy goes offline.",
    axes: {
      perception: "Binary — win/lose, strong/weak, threat/target. Nuance collapses.",
      emotions: "Blunted or weaponized — reduced access to guilt, remorse, care. What remains serves dominance: rage, contempt, cold resolve.",
      empathy: "Offline — other people's pain does not register. If 'empathy' appears, it is used for prediction and exploitation, not care.",
      behaviors: "Coercive — intimidate, degrade, punish, isolate, retaliate. High certainty, low restraint.",
      repair: "Unavailable — no stable framework for accountability. Harm is denied, minimized, justified, or converted into blame.",
    },
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
            Where is the nervous system landing? Not as a fixed type, but as a living gradient that shifts
            moment to moment based on how safe we feel. State determines capacity — detectable in natural
            language, measurable through complexity markers.
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
            How the gradient operates as a system — the rules that govern movement between states.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              {
                title: "The system is always on",
                text: "We are always in one of the four modes. There is in-between, there is fast and slow, but there is no off. The radar is always reading.",
              },
              {
                title: "Movement is continuous, not categorical",
                text: "The four modes are not boxes. We move through them in a smooth, continuous gradient. We can be between modes, shifting toward one or the other. The boundaries are zones, not walls.",
              },
              {
                title: "The return to safety takes time",
                text: "Protection, Control, and Domination are all extensions of threat. We cannot jump back to Connection. The body needs time to adjust to safety — just in case there is still danger. Escalation is fast, de-escalation is slow by design.",
              },
              {
                title: "Threat modes are temporary by design",
                text: "Protection, Control, and Domination are meant to last minutes to a few days at most. They are stress states. Staying in them longer than the system can afford has deep consequences — they were never designed to be a default operating mode.",
              },
              {
                title: "When safety was never learned",
                text: "When we have grown up in environments where Connection was not available, we may not recognize it or know how to access it. The system cannot default to a state it has never reliably experienced.",
              },
              {
                title: "Empathy drops across the gradient",
                text: "In Connection, empathy is high and accurate. In Protection, it starts decreasing. In Control, it becomes instrumental. In Domination, it is gone. This gradient is necessary when the danger is real. It is devastating when we are locked in a threat mode without knowing it — because we will not register the damage we cause.",
              },
              {
                title: "Hijacked in Connection is also damaging",
                text: "Connection is the only mode designed for sustained living. But without mode awareness, the compass can get locked here too — maintaining empathy for people who hurt us over and over, unable to activate protection when we need it. This is echoism. The goal is not permanent Connection. The goal is appropriate mode flexibility.",
              },
              {
                title: "Two types of awareness",
                text: "You can be aware of where others are on the gradient and still be locked in a threat mode yourself — which means you can use that reading to cause harm. Self-awareness means you can read the room. Emotional awareness means you understand your own emotions, know your own mode, and have enough empathy intact to care about your impact. The difference matters.",
              },
              {
                title: "The harm/hurt confusion",
                text: "When we are locked in threat modes, we confuse being hurt with being harmed. Discomfort feels like danger. That confusion sits at the base of most conflicts — personal, professional, political, systemic. Learning to distinguish between the two is one of the most consequential skills the Inner Compass can support.",
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
          {/* Scientific name + regulation */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <p
              style={{
                fontSize: 12,
                fontFamily: FONT.mono,
                color: TEXT.hint,
                margin: 0,
              }}
            >
              Scientific: {mode.scientificName}
            </p>
            <span style={{ fontSize: 11, color: TEXT.muted, fontStyle: "italic" }}>
              {mode.regulation}
            </span>
          </div>

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
            &ldquo;{mode.coreInsight}&rdquo;
          </p>

          {/* Five axes */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <DetailRow label="PERCEPTION" value={mode.axes.perception} color={mode.color} />
            <DetailRow label="EMOTIONS" value={mode.axes.emotions} color={mode.color} />
            <DetailRow label="EMPATHY" value={mode.axes.empathy} color={mode.color} />
            <DetailRow label="BEHAVIORS" value={mode.axes.behaviors} color={mode.color} />
            <DetailRow label="REPAIR" value={mode.axes.repair} color={mode.color} />
          </div>

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
