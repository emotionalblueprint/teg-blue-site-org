"use client";

import { useState } from "react";
import { BG, TEXT, BORDER, FONT, SPECTRUM, hexToRgba } from "../styles/tokens";

/**
 * ESSInformationSystems — Two parallel information systems diagram
 * Shows CLS and ESS as parallel processing pipelines:
 * Input → Processing → Output → Timeframe
 *
 * Design reference: ESS-Two-Information-Systems.png
 */

const ACCENT = SPECTRUM.azure;
const ACCENT_WARM = '#e9a23b';
const STAGE_BLUE = '#a0cdfb';

// ─── STAGE DATA ─────────────────────────────────────────

const STAGES = [
  {
    label: "Domain",
    sublabel: "What each system processes",
    cls: [
      "External facts, logical problems, causal relationships",
      "Abstract planning and sequential reasoning",
      "Language production and narrative construction",
      "Pattern matching against learned rules and models",
    ],
    ess: [
      "Safety-threat evaluation of the environment via neuroception",
      "Relational cues from other bodies — faces, voices, postures",
      "The body's own physiological state — visceral, hormonal, muscular",
      "What matters for survival, bonding, and biological integrity",
    ],
  },
  {
    label: "Mechanism",
    sublabel: "How each system operates",
    cls: [
      "Conscious deliberation requiring attention and effort",
      "Linguistic analysis and abstract reasoning",
      "Narrative construction — assembling causal stories from available data",
      "Builds coherence from whatever data reaches it, complete or not",
    ],
    ess: [
      "Neuroception — subconscious scanning of environment and relationships",
      "Autonomic nervous system activation and state reorganisation",
      "Hormonal and neurochemical cascades (cortisol, adrenaline, oxytocin)",
      "Muscular and visceral reorganisation — the body configures before thought",
    ],
  },
  {
    label: "Output",
    sublabel: "What each system produces",
    cls: [
      "Explanations, plans, and conscious decisions",
      "Narratives about what is happening and what it means",
      "Coherent accounts — which feel true whether data is complete or not",
    ],
    ess: [
      "Physiological response patterns — hormonal, neurochemical, muscular",
      "Nervous system state reconfiguration along the safety-threat gradient",
      "Behavioural impulses organised before conscious awareness arrives",
      "Biological information about what was detected and what it requires",
    ],
  },
  {
    label: "Timeframe",
    cls: null,
    ess: null,
    custom: true,
  },
];

// ─── COMPONENT ──────────────────────────────────────────

export default function ESSInformationSystems() {
  const [hoveredSystem, setHoveredSystem] = useState(null);

  const containerStyle = {
    background: BG.primary,
    border: `1px solid ${BORDER.default}`,
    borderRadius: 12,
    padding: "40px 24px",
    maxWidth: 720,
    margin: "0 auto",
    fontFamily: FONT.display,
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: 32,
  };

  const titleStyle = {
    fontSize: 18,
    fontWeight: 700,
    color: TEXT.primary,
    letterSpacing: "-0.01em",
    marginBottom: 12,
    textTransform: "uppercase",
  };

  const subtitleStyle = {
    fontSize: 14,
    color: TEXT.secondary,
    lineHeight: 1.7,
    maxWidth: 500,
    margin: "0 auto",
  };

  const systemLabelContainer = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginBottom: 32,
  };

  const systemLabelStyle = (isESS) => ({
    padding: "10px 16px",
    borderRadius: 8,
    border: `1px solid ${hexToRgba(isESS ? ACCENT : ACCENT_WARM, 0.3)}`,
    background: hexToRgba(isESS ? ACCENT : ACCENT_WARM, 0.06),
    textAlign: "center",
    fontFamily: FONT.mono,
    fontSize: 13,
    fontWeight: 600,
    color: isESS ? ACCENT : ACCENT_WARM,
    letterSpacing: "0.01em",
    cursor: "default",
    transition: "all 0.2s ease",
    ...(hoveredSystem === (isESS ? "ess" : "cls") ? {
      background: hexToRgba(isESS ? ACCENT : ACCENT_WARM, 0.12),
      border: `1px solid ${hexToRgba(isESS ? ACCENT : ACCENT_WARM, 0.45)}`,
      boxShadow: `0 0 12px ${hexToRgba(isESS ? ACCENT : ACCENT_WARM, 0.15)}`,
    } : {}),
  });

  const stageContainer = {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  };

  const stageLabelStyle = {
    textAlign: "center",
    padding: "8px 16px",
    margin: "0 auto 20px",
    fontSize: 11,
    fontWeight: 600,
    color: TEXT.muted,
    fontFamily: FONT.mono,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    borderRadius: 4,
    background: hexToRgba(STAGE_BLUE, 0.08),
    border: `1px solid ${hexToRgba(STAGE_BLUE, 0.15)}`,
  };

  const stageRowStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 40px 1fr",
    gap: 0,
    alignItems: "start",
    marginBottom: 4,
  };

  const columnStyle = (isESS) => ({
    padding: "12px 16px",
    borderRadius: 8,
    transition: "all 0.2s ease",
    ...(hoveredSystem === (isESS ? "ess" : "cls") ? {
      background: hexToRgba(isESS ? ACCENT : ACCENT_WARM, 0.05),
    } : {}),
  });

  const itemStyle = {
    fontSize: 13,
    color: TEXT.secondary,
    lineHeight: 1.7,
    padding: "2px 0",
  };

  const arrowStyle = (isESS) => ({
    color: isESS ? ACCENT : ACCENT_WARM,
    marginRight: 6,
    fontSize: 12,
    fontWeight: 600,
  });

  const dividerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 4,
  };

  const connectorLine = {
    width: 1,
    height: 20,
    background: hexToRgba(SPECTRUM.slate, 0.3),
    margin: "8px auto",
  };

  const footerStyle = {
    textAlign: "center",
    marginTop: 24,
    padding: "16px 24px",
    borderRadius: 8,
    background: hexToRgba(STAGE_BLUE, 0.04),
    border: `1px solid ${hexToRgba(STAGE_BLUE, 0.1)}`,
  };

  const footerTextStyle = {
    fontSize: 13,
    color: TEXT.secondary,
    lineHeight: 1.7,
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h3 style={titleStyle}>Two Information Systems</h3>
        <p style={subtitleStyle}>
          Two parallel information systems operate in every human body,
          each processing different domains through different biological mechanisms.
        </p>
      </div>

      {/* System Labels */}
      <div style={systemLabelContainer}>
        <div
          style={systemLabelStyle(false)}
          onMouseEnter={() => setHoveredSystem("cls")}
          onMouseLeave={() => setHoveredSystem(null)}
        >
          The Cognitive-Logical System
        </div>
        <div
          style={systemLabelStyle(true)}
          onMouseEnter={() => setHoveredSystem("ess")}
          onMouseLeave={() => setHoveredSystem(null)}
        >
          The Emotional Somatic System
        </div>
      </div>

      {/* Stages */}
      <div style={stageContainer}>
        {STAGES.map((stage, i) => (
          <div key={i}>
            {/* Stage label */}
            <div style={stageLabelStyle}>
              {stage.label}
              {stage.sublabel && (
                <span style={{ display: "block", fontSize: 10, fontWeight: 400, marginTop: 2, color: TEXT.hint }}>
                  {stage.sublabel}
                </span>
              )}
            </div>

            {stage.custom ? (
              /* Timeframe — special layout */
              <div style={stageRowStyle}>
                <div
                  style={columnStyle(false)}
                  onMouseEnter={() => setHoveredSystem("cls")}
                  onMouseLeave={() => setHoveredSystem(null)}
                >
                  <div style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
                    Slow and effortful
                  </div>
                  <div style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.6, marginBottom: 3 }}>
                    Conscious awareness: 500ms+
                  </div>
                  <div style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.6, marginBottom: 3 }}>
                    Analysis and planning: seconds
                  </div>
                  <div style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.6 }}>
                    Narrative construction: minutes to hours
                  </div>
                </div>

                <div style={dividerStyle}>
                  <div style={{ width: 1, height: 60, background: hexToRgba(SPECTRUM.slate, 0.2) }} />
                </div>

                <div
                  style={columnStyle(true)}
                  onMouseEnter={() => setHoveredSystem("ess")}
                  onMouseLeave={() => setHoveredSystem(null)}
                >
                  <div style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
                    Before conscious thought begins
                  </div>
                  <div style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.6, marginBottom: 3 }}>
                    Cue detection: 10–50ms
                  </div>
                  <div style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.6, marginBottom: 3 }}>
                    Pattern matching: 50–200ms
                  </div>
                  <div style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.6 }}>
                    Full physiological response: 200–500ms
                  </div>
                </div>
              </div>
            ) : (
              /* Regular stages — bullet lists */
              <div style={stageRowStyle}>
                <div
                  style={columnStyle(false)}
                  onMouseEnter={() => setHoveredSystem("cls")}
                  onMouseLeave={() => setHoveredSystem(null)}
                >
                  {stage.cls.map((item, j) => (
                    <div key={j} style={itemStyle}>
                      <span style={arrowStyle(false)}>→</span>{item}
                    </div>
                  ))}
                </div>

                <div style={dividerStyle}>
                  <div style={{ width: 1, height: 80, background: hexToRgba(SPECTRUM.slate, 0.2) }} />
                </div>

                <div
                  style={columnStyle(true)}
                  onMouseEnter={() => setHoveredSystem("ess")}
                  onMouseLeave={() => setHoveredSystem(null)}
                >
                  {stage.ess.map((item, j) => (
                    <div key={j} style={itemStyle}>
                      <span style={arrowStyle(true)}>→</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Connector between stages */}
            {i < STAGES.length - 1 && <div style={connectorLine} />}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={footerStyle}>
        <p style={footerTextStyle}>
          These systems are <strong style={{ color: TEXT.primary }}>not in competition</strong>.
          They are <strong style={{ color: TEXT.primary }}>interdependent</strong> partners
          serving different functions.
        </p>
      </div>
    </div>
  );
}
