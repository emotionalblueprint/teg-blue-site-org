"use client";

import { useState } from "react";
import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import { FRAMEWORKS as FRAMEWORK_DATA, PHASES, getPhaseColor } from "@/src/data/frameworks";

// Map shared data to the display format used by this page
const FRAMEWORKS = FRAMEWORK_DATA.map((fw) => ({
  id: fw.id,
  displayName: fw.name,
  title: fw.researcherTitle,
  subtitle: fw.subtitle,
  arc: fw.phase,
  symbol: fw.symbol,
  slug: fw.slug,
  purpose: fw.summary,
  summary: fw.summary,
  buildsOn: fw.buildsOn,
  claims: fw.claims,
  testable: fw.testable,
}));

// Phase colors from shared data
const arcColors = Object.fromEntries(PHASES.map((p) => [p.key, p.color]));

export default function TheoreticalFoundationsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/frameworks-map" />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12, flexWrap: "wrap" }}>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: TEXT.primary,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              A Framework Mapping System with 12 levels
            </h1>
          </div>
          <p
            style={{
              fontSize: 14,
              color: TEXT.muted,
              lineHeight: 1.6,
              marginBottom: 20,
            }}
          >
            A unified model linking regulation, identity, social systems, escalation, and repair.
          </p>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            <strong style={{ color: TEXT.primary }}>Most models describe either the inner world or the social world. TEG-Blue connects them as one system.</strong>
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            The frameworks are interdependent because <strong style={{ color: TEXT.primary }}>humans do not experience life in separate categories</strong>. A nervous system state shapes perception. Perception shapes meaning. Meaning shapes identity. Identity shapes behavior. Behavior shapes what gets rewarded. And reward shapes the nervous system again.
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            This loop is how trauma becomes culture, and how culture becomes trauma.
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            TEG-Blue is structured as a sequence so we can locate where a pattern is coming from, where it is being reinforced, and where repair is actually possible.
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            The mapping system makes visible that what people do is strongly shaped by the conditions their system is adapting to, and by their capacity to return to <strong style={{ color: TEXT.primary }}>connection</strong> under challenge.
          </p>
        </header>

        {/* Framework Arc Overview — 4 phases */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 20 }}>
            The Framework Mapping Arc
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: arcColors["Foundation"],
                minWidth: 200,
                paddingTop: 2,
              }}>
                F1–F3 (Foundation)
              </span>
              <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6 }}>
                The instrument, its calibration, and what cognition does in their place
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: arcColors["Collective Scaling"],
                minWidth: 200,
                paddingTop: 2,
              }}>
                F4–F7 (Collective Scaling)
              </span>
              <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6 }}>
                How individual regulation patterns become rules, worth hierarchies, perception biases, and domination
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: arcColors["Repair"],
                minWidth: 200,
                paddingTop: 2,
              }}>
                F8–F10 (Repair)
              </span>
              <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6 }}>
                Individual capacity repair, structural inclusion, generational transmission
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                color: arcColors["Meta-Integration"],
                minWidth: 200,
                paddingTop: 2,
              }}>
                F11–F12 (Meta-Integration)
              </span>
              <span style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6 }}>
                Paradox as clarity, and the two information systems underneath everything
              </span>
            </div>
          </div>
        </section>

        {/* All Frameworks - Expandable */}
        <section style={{ marginBottom: 32 }}>
          {FRAMEWORKS.map((fw) => (
            <ExpandableFrameworkCard key={fw.id} framework={fw} />
          ))}
        </section>

        {/* Help Us Validate */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Help us validate this mapping
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            We are explicitly inviting critique.
          </p>
          <div
            style={{
              padding: 20,
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              marginBottom: 20,
            }}
          >
            <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
              Ways to contribute:
            </h3>
            <ul style={{ paddingLeft: 20 }}>
              <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 4 }}>Identify errors in attribution or conceptual links</li>
              <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 4 }}>Suggest missing foundational theories that should be represented</li>
              <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 4 }}>Propose falsifiable predictions for any framework</li>
              <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 4 }}>Recommend measures that could test specific claims</li>
              <li style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>Run or advise on replication designs</li>
            </ul>
          </div>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20 }}>
            <strong>How credit works:</strong> Contributors are acknowledged on the site. Significant contributions can receive per-section attribution. Research outputs follow clear authorship norms, agreed in advance.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/collaborate"
              style={{
                padding: "10px 20px",
                background: SPECTRUM.blue,
                color: "#fff",
                borderRadius: 6,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Collaborate →
            </Link>
            <Link
              href="/methodology"
              style={{
                padding: "10px 20px",
                background: "transparent",
                color: TEXT.secondary,
                border: `1px solid ${BORDER.default}`,
                borderRadius: 6,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Methodology →
            </Link>
          </div>
          <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 16 }}>
            Contact:{" "}
            <a href="mailto:research@teg-blue.org" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>
              research@teg-blue.org
            </a>
          </p>
        </section>

        {/* Footer note */}
        <footer style={{ textAlign: "center" }}>
          <p style={{ fontSize: 11, color: TEXT.micro, fontFamily: FONT.mono }}>
            TEG-Blue Research Consortium · Open Science · CC BY-NC-SA 4.0
          </p>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}

// ─── HELPER COMPONENTS ─────────────────────────────────────────

function ExpandableFrameworkCard({ framework }) {
  const [isOpen, setIsOpen] = useState(false);
  const arcColor = arcColors[framework.arc];

  return (
    <div
      style={{
        marginBottom: 12,
        background: BG.card,
        borderRadius: 10,
        border: `1px solid ${isOpen ? hexToRgba(arcColor, 0.3) : BORDER.default}`,
        borderLeft: `3px solid ${arcColor}`,
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
        {/* Top row: ID, Display Name (Title), Arc badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              fontFamily: FONT.mono,
              color: arcColor,
            }}
          >
            {framework.id}
          </span>
          <span style={{ fontSize: 13, color: TEXT.muted }}>–</span>
          <span style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary }}>
            {framework.displayName}
          </span>
          <span style={{ fontSize: 13, color: TEXT.muted }}>
            ({framework.title})
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              fontFamily: FONT.mono,
              padding: "3px 8px",
              borderRadius: 4,
              background: hexToRgba(arcColor, 0.15),
              color: arcColor,
              marginLeft: "auto",
            }}
          >
            {framework.arc}
          </span>
        </div>

        {/* Subtitle */}
        <p style={{ fontSize: 13, color: arcColor, margin: "0 0 8px 0" }}>
          {framework.subtitle}
        </p>

        {/* Summary */}
        <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
          {framework.summary}
        </p>

        {/* Expand indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
          <span
            style={{
              fontSize: 12,
              color: TEXT.muted,
              transition: "color 0.2s ease",
            }}
          >
            {isOpen ? "Hide details" : "Show details"}
          </span>
          <span
            style={{
              fontSize: 14,
              color: arcColor,
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
            marginTop: 0,
          }}
        >
          {/* Purpose */}
          <div style={{ marginTop: 16, marginBottom: 16 }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: arcColor, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: FONT.mono }}>
              Purpose
            </h4>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
              {framework.purpose}
            </p>
          </div>

          {/* Builds On */}
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: arcColor, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: FONT.mono }}>
              Builds on
            </h4>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
              {framework.buildsOn}
            </p>
          </div>

          {/* Proposed Claims */}
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: arcColor, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: FONT.mono }}>
              Proposed claims
            </h4>
            <ul style={{ paddingLeft: 20, margin: 0, listStyleType: "disc" }}>
              {framework.claims.map((claim, i) => (
                <li key={i} style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 6, paddingLeft: 4 }}>
                  {claim}
                </li>
              ))}
            </ul>
          </div>

          {/* Testable Directions */}
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: arcColor, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: FONT.mono }}>
              Testable directions
            </h4>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
              {framework.testable}
            </p>
          </div>

          {/* Link to full framework */}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${BORDER.default}` }}>
            <Link
              href={`/frameworks/${framework.slug}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 500,
                color: arcColor,
                textDecoration: "none",
              }}
            >
              View framework →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
