"use client";

import { useState, useEffect, useRef } from "react";
import {
  FONT, TEXT, BG, BORDER, SPECTRUM,
  PATTERN, MODE_ORANGE, hexToRgba,
} from "@/src/styles/tokens";

// ─── Map PATTERN tokens to semantic names used in this component ──
const BLUE = {
  light:   PATTERN.A.primary,   // healthy return, completion
  medium:  PATTERN.B.primary,   // cascade, initial activation
  deep:    PATTERN.C.primary,   // peak activation
  darkest: PATTERN.D.primary,   // full survival mode
};
const ORANGE = MODE_ORANGE;

// ─── STAGE DATA ──────────────────────────────────────────────

const STAGES = [
  {
    id: "trigger",
    label: "Trigger",
    sub: "Perceived threat",
    color: BLUE.medium,
    description:
      "The nervous system perceives a threat — physical, relational, social, or emotional. This happens below conscious awareness. The amygdala fires within 12ms — faster than any thought.",
    biology: [
      "Amygdala fires (12ms)",
      "Thalamus → fast pathway activated",
      "Signal: threat detected",
    ],
    hormones: [],
  },
  {
    id: "cascade",
    label: "Cascade",
    sub: "HPA axis & SNS fire",
    color: BLUE.deep,
    description:
      "The hypothalamic-pituitary-adrenal axis fires a hormonal cascade. The entire body shifts to survival configuration. The entire body shifts to survival configuration — biology in motion.",
    biology: [
      "Cortisol released (1–3 min)",
      "Epinephrine & norepinephrine surge",
      "Heart rate ↑, digestion stops",
      "Muscles brace, pupils dilate",
      "PFC blood flow ↓",
    ],
    hormones: [
      "CRH → ACTH → Cortisol",
      "Epinephrine (adrenaline)",
      "Norepinephrine",
      "Glucagon → blood glucose ↑",
    ],
  },
  {
    id: "activation",
    label: "Full Activation",
    sub: "Body in survival mode",
    color: BLUE.darkest,
    description:
      "Every organ system is now oriented toward survival. The amygdala dominates. Cognition narrows. Emotional resonance filters. The body is doing exactly what it was designed to do.",
    biology: [
      "SNS fully dominant",
      "Serotonin ↓, GABA ↓",
      "Oxytocin ↓",
      "Amygdala sensitivity ↑",
      "Working memory ↓",
    ],
    hormones: [
      "Cortisol (peak)",
      "Epinephrine (sustained)",
      "Norepinephrine (sustained)",
      "Inflammatory cytokines",
    ],
  },
];

const RESOLUTION_PATH = [
  {
    id: "expression",
    label: "Expression",
    sub: "Signal discharged",
    color: BLUE.light,
    description:
      "The emotion is felt and expressed. Trembling, crying, movement, breath change, vocalisation. The body begins to discharge the mobilised energy.",
    biology: [
      "Motor discharge begins",
      "Exhale-dominant breathing",
      "Emotional tears (stress hormones released)",
      "Muscle release begins",
    ],
    hormones: [],
  },
  {
    id: "parasympathetic",
    label: "Vagal Return",
    sub: "PNS re-engages",
    color: BLUE.light,
    description:
      "The vagus nerve activates the parasympathetic system. Heart rate slows. The gut re-engages. The face softens. Social engagement opens again.",
    biology: [
      "Vagal brake activates",
      "Heart rate ↓",
      "Digestion resumes",
      "PFC blood flow returns",
      "Oxytocin begins recovering",
    ],
    hormones: [],
  },
  {
    id: "clearance",
    label: "Clearance",
    sub: "Cortisol metabolised",
    color: BLUE.light,
    description:
      "The hippocampus receives the feedback signal that completes the HPA loop. Cortisol is metabolised by the liver. Neurotransmitters rebalance. The cycle closes.",
    biology: [
      "Hippocampal feedback loop closes",
      "Liver metabolises cortisol (20min–hrs)",
      "Serotonin, GABA, oxytocin normalise",
      "Memory encoded with context",
    ],
    hormones: [],
  },
  {
    id: "baseline",
    label: "Baseline",
    sub: "Cycle complete",
    color: BLUE.light,
    description:
      "The body returns to full baseline. Digestion, immune function, cognition, and emotional capacity all restored. The needle returns. This is what the body was designed to do.",
    biology: [
      "All systems normalised",
      "Allostatic load: zero added",
      "Regulation: available",
      "Capacity: full",
    ],
    hormones: [],
  },
];

const OVERRIDE_PATH = [
  {
    id: "intercept",
    label: "Cognition Intercepts",
    sub: "Override activated",
    color: ORANGE,
    description:
      "The mind labels the emotion as irrelevant, weak, inappropriate, or dangerous. Attention redirects to analysis or narrative. The body hears nothing — it is already mid-cascade.",
    biology: [
      "PFC suppresses emotional signal",
      "Discharge phase never begins",
      "Muscles stay braced",
      "Cortisol keeps releasing",
      "HPA receives no 'all clear'",
    ],
    hormones: [],
  },
  {
    id: "submersion",
    label: "Signal Submerged",
    sub: "Access lost, signal runs",
    color: ORANGE,
    description:
      "The person loses access to the signal — but the signal continues generating. The body holds everything the mind refuses to see. The cycle is open. The signal persists.",
    biology: [
      "Self-awareness collapses",
      "Emotional distortion activates",
      "Internal discomfort misread as external threat",
      "Somatic holding increases",
    ],
    hormones: [],
  },
  {
    id: "accumulation",
    label: "Load Accumulates",
    sub: "Allostatic debt builds",
    color: ORANGE,
    description:
      "With each unprocessed cycle, the baseline rises. The amygdala sensitises. The threshold for the next activation lowers. The system escalates on an already-elevated foundation.",
    biology: [
      "★ Cortisol chronically elevated",
      "★ Amygdala increasingly sensitised",
      "★ Serotonin depleted",
      "★ Oxytocin suppressed",
      "★ Immune dysregulation",
      "Allostatic load: growing",
    ],
    hormones: [],
  },
  {
    id: "stuck",
    label: "Chronic State",
    sub: "Emergency becomes default",
    color: ORANGE,
    description:
      "The nervous system reorganises around the unresolved state. What was a temporary emergency response becomes permanent. External regulation substitutes multiply. The shift becomes structural.",
    biology: [
      "Default state: sustained activation",
      "External regulation required",
      "Substitutes multiply",
      "Identity forms around the state",
      "Return pathway blocked",
    ],
    hormones: [],
  },
];

const TABS = [
  { id: "overview", label: "The Cascade", color: BLUE.medium },
  { id: "resolution", label: "Cycle Completes", color: BLUE.light },
  { id: "override", label: "Cognition Overrides", color: ORANGE },
];

const PHASE_INTROS = {
  overview:
    "A perceived threat sets off a precise biological cascade. The amygdala fires before any thought forms. The HPA axis releases cortisol. The SNS shifts every organ to survival mode. This is the body doing what it was designed to do.",
  resolution:
    "When the emotion is felt, expressed, and allowed to complete — the body runs its built-in return sequence. This is not a technique. It is a biological process the nervous system was designed to execute. It only requires one thing: space to run.",
  override:
    "When cognition decides the emotion is irrelevant, inappropriate, or dangerous — it overrides the person's access to the signal. But the signal continues. The cortisol keeps releasing. The cycle stays open. The body has no mechanism for receiving a philosophical decision.",
};

// ─── COMPONENT ───────────────────────────────────────────────

export default function OpenCycleExplorer() {
  const [activeStage, setActiveStage] = useState(STAGES[0]);
  const [view, setView] = useState("overview");
  const [loadCount, setLoadCount] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("resize", check);
    };
  }, []);

  const runAnimation = (stages) => {
    if (animating) return;
    setAnimating(true);
    stages.forEach((stage, i) => {
      timerRef.current = setTimeout(() => {
        setActiveStage(stage);
        if (i === stages.length - 1) setAnimating(false);
      }, i * 900);
    });
  };

  const handleViewChange = (v) => {
    setView(v);
    if (v === "overview") setActiveStage(STAGES[0]);
    if (v === "resolution") setActiveStage(RESOLUTION_PATH[0]);
    if (v === "override") setActiveStage(OVERRIDE_PATH[0]);
  };

  const currentPath =
    view === "resolution"
      ? RESOLUTION_PATH
      : view === "override"
        ? OVERRIDE_PATH
        : STAGES;

  const phaseColor =
    view === "resolution"
      ? BLUE.light
      : view === "override"
        ? ORANGE
        : BLUE.medium;

  return (
    <div
      style={{
        margin: "32px 0 0",
        background: BG.card,
        borderRadius: 12,
        border: `1px solid ${BORDER.default}`,
        overflow: "hidden",
      }}
    >
      {/* ── Tab selector ── */}
      <div
        role="tablist"
        aria-label="Open cycle phases"
        style={{
          display: "flex",
          gap: 0,
          borderBottom: `1px solid ${BORDER.default}`,
          padding: "0 20px",
        }}
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={view === tab.id}
            aria-label={`View ${tab.label} phase`}
            onClick={() => handleViewChange(tab.id)}
            style={{
              background: "transparent",
              border: "none",
              borderBottom: `3px solid ${view === tab.id ? tab.color : "transparent"}`,
              padding: "14px 20px",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              color: view === tab.id ? tab.color : TEXT.muted,
              fontFamily: FONT.mono,
              transition: "all 0.2s",
              outline: "none",
              letterSpacing: "0.01em",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px 24px 24px" }}>
        {/* ── Phase intro ── */}
        <div
          style={{
            background: hexToRgba(phaseColor, 0.06),
            border: `1px solid ${hexToRgba(phaseColor, 0.2)}`,
            borderRadius: 10,
            padding: "14px 18px",
            marginBottom: 20,
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: phaseColor,
              marginTop: 5,
              flexShrink: 0,
              boxShadow: `0 0 8px ${hexToRgba(phaseColor, 0.5)}`,
            }}
          />
          <p
            style={{
              margin: 0,
              fontSize: 13.5,
              color: TEXT.secondary,
              lineHeight: 1.65,
            }}
          >
            {PHASE_INTROS[view]}
          </p>
        </div>

        {/* ── Two column: stages + detail ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "240px 1fr",
            gap: 20,
            alignItems: "start",
          }}
        >
          {/* Stage list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {currentPath.map((stage, i) => (
              <div key={stage.id}>
                <StageNode
                  stage={stage}
                  active={activeStage?.id === stage.id}
                  onClick={() => setActiveStage(stage)}
                />
                {i < currentPath.length - 1 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "2px 0",
                    }}
                  >
                    <Arrow
                      color={phaseColor}
                      vertical
                      dashed={view === "override" && i >= 1}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Animate button */}
            <button
              aria-label={animating ? "Animation running" : "Play stage sequence"}
              onClick={() => runAnimation(currentPath)}
              disabled={animating}
              style={{
                marginTop: 12,
                background: "transparent",
                border: `1px solid ${hexToRgba(phaseColor, 0.4)}`,
                borderRadius: 8,
                padding: "8px 14px",
                color: phaseColor,
                fontSize: 11,
                cursor: animating ? "not-allowed" : "pointer",
                opacity: animating ? 0.5 : 1,
                fontFamily: FONT.mono,
                letterSpacing: "0.04em",
                transition: "all 0.2s",
                outline: "none",
              }}
            >
              {animating ? "▶ Running..." : "▶ Play sequence"}
            </button>
          </div>

          {/* Detail panel */}
          <div>
            <DetailPanel stage={activeStage} />

            {/* Allostatic load simulation — override view only */}
            {view === "override" && (
              <div
                style={{
                  marginTop: 16,
                  background: BG.surface,
                  border: `1px solid ${hexToRgba(ORANGE, 0.25)}`,
                  borderRadius: 10,
                  padding: "18px 22px",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: TEXT.muted,
                    marginBottom: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontFamily: FONT.mono,
                    fontWeight: 600,
                  }}
                >
                  Allostatic Load — Simulation
                </div>
                <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 6,
                        background:
                          i < loadCount
                            ? ORANGE
                            : hexToRgba(SPECTRUM.slate, 0.15),
                        border: `1px solid ${i < loadCount ? ORANGE : hexToRgba(SPECTRUM.slate, 0.3)}`,
                        transition: "all 0.3s",
                        boxShadow:
                          i < loadCount
                            ? `0 0 8px ${hexToRgba(ORANGE, 0.4)}`
                            : "none",
                      }}
                    />
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    aria-label={`Add override (current load: ${loadCount} of 10)`}
                    onClick={() => setLoadCount(Math.min(10, loadCount + 1))}
                    style={{
                      background: hexToRgba(ORANGE, 0.12),
                      border: `1px solid ${hexToRgba(ORANGE, 0.4)}`,
                      borderRadius: 6,
                      padding: "6px 14px",
                      color: ORANGE,
                      fontSize: 12,
                      cursor: "pointer",
                      fontFamily: FONT.mono,
                      outline: "none",
                    }}
                  >
                    + Override
                  </button>
                  <button
                    aria-label="Reset allostatic load to zero"
                    onClick={() => setLoadCount(0)}
                    style={{
                      background: "transparent",
                      border: `1px solid ${BORDER.default}`,
                      borderRadius: 6,
                      padding: "6px 14px",
                      color: TEXT.muted,
                      fontSize: 12,
                      cursor: "pointer",
                      fontFamily: FONT.mono,
                      outline: "none",
                    }}
                  >
                    Reset
                  </button>
                </div>
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 12,
                    color: TEXT.secondary,
                    fontStyle: "italic",
                  }}
                >
                  {loadCount === 0 &&
                    "Each unprocessed cycle adds to the load. Press override to see it build."}
                  {loadCount > 0 &&
                    loadCount < 4 &&
                    "The system is resilient. Early load is recoverable with rest, movement, co-regulation."}
                  {loadCount >= 4 &&
                    loadCount < 7 &&
                    "Baseline rising. The amygdala is sensitising. The next trigger will fire faster and harder."}
                  {loadCount >= 7 &&
                    loadCount < 10 &&
                    "HPA axis dysregulation. Chronic inflammation. Emotional blindness deepening. Serotonin depleted."}
                  {loadCount === 10 &&
                    "Structural capture. The body has reorganised around the unresolved state. Compass stuck."}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom comparison row — overview only */}
        {view === "overview" && (
          <div
            style={{
              marginTop: 24,
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 16,
            }}
          >
            <button
              onClick={() => handleViewChange("resolution")}
              style={{
                background: hexToRgba(BLUE.light, 0.06),
                border: `1px solid ${hexToRgba(BLUE.light, 0.25)}`,
                borderRadius: 10,
                padding: "18px 22px",
                cursor: "pointer",
                transition: "all 0.2s",
                textAlign: "left",
                outline: "none",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: BLUE.light,
                  marginBottom: 6,
                }}
              >
                → If the cycle completes
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 12.5,
                  color: TEXT.secondary,
                  lineHeight: 1.6,
                }}
              >
                Expression → vagal return → cortisol clearance → baseline
                restored. The compass moves back. Allostatic load: zero added.
              </p>
            </button>
            <button
              onClick={() => handleViewChange("override")}
              style={{
                background: hexToRgba(ORANGE, 0.06),
                border: `1px solid ${hexToRgba(ORANGE, 0.25)}`,
                borderRadius: 10,
                padding: "18px 22px",
                cursor: "pointer",
                transition: "all 0.2s",
                textAlign: "left",
                outline: "none",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: ORANGE,
                  marginBottom: 6,
                }}
              >
                → If cognition overrides
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 12.5,
                  color: TEXT.secondary,
                  lineHeight: 1.6,
                }}
              >
                Access lost. Cycle stays open. Cortisol keeps releasing. Body
                holds what the mind refuses to see. Load accumulates.
              </p>
            </button>
          </div>
        )}

        {/* Core insight callout */}
        <div
          style={{
            marginTop: 20,
            background: BG.surface,
            border: `1px solid ${hexToRgba(BLUE.light, 0.2)}`,
            borderLeft: `4px solid ${BLUE.light}`,
            borderRadius: "0 10px 10px 0",
            padding: "18px 22px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 13.5,
              color: TEXT.secondary,
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            "Deciding the emotion is not important does not change the cortisol
            level. The body has no mechanism for receiving philosophical
            decisions. It only responds to biological signals. The signal
            persists whether or not the person has access to it."
          </p>
          <div
            style={{
              marginTop: 8,
              fontSize: 11,
              color: TEXT.muted,
              fontFamily: FONT.mono,
            }}
          >
            M3 — The Biology of Unfinished Emotion
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── HELPER COMPONENTS ───────────────────────────────────────

function StageNode({ stage, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active
          ? hexToRgba(stage.color, 0.1)
          : "transparent",
        border: `1.5px solid ${active ? stage.color : BORDER.default}`,
        borderRadius: 10,
        padding: "10px 14px",
        cursor: "pointer",
        transition: "all 0.25s",
        textAlign: "left",
        width: "100%",
        outline: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: active ? stage.color : TEXT.muted,
            flexShrink: 0,
            boxShadow: active
              ? `0 0 8px ${hexToRgba(stage.color, 0.5)}`
              : "none",
            transition: "all 0.25s",
          }}
        />
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: active ? stage.color : TEXT.primary,
              fontFamily: FONT.mono,
              letterSpacing: "0.02em",
            }}
          >
            {stage.label}
          </div>
          <div style={{ fontSize: 11, color: TEXT.muted, marginTop: 1 }}>
            {stage.sub}
          </div>
        </div>
      </div>
    </button>
  );
}

function Arrow({ color = TEXT.muted, vertical = false, dashed = false }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: vertical ? "2px 0" : "0 2px",
      }}
    >
      <div
        style={{
          width: vertical ? 2 : 24,
          height: vertical ? 20 : 2,
          background: dashed ? "transparent" : color,
          borderLeft: dashed && vertical ? `2px dashed ${color}` : "none",
          borderTop: dashed && !vertical ? `2px dashed ${color}` : "none",
        }}
      />
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: vertical ? "4px solid transparent" : `6px solid ${color}`,
          borderRight: vertical ? "4px solid transparent" : "none",
          borderTop: vertical ? `6px solid ${color}` : "4px solid transparent",
          borderBottom: vertical ? "none" : "4px solid transparent",
        }}
      />
    </div>
  );
}

function DetailPanel({ stage }) {
  if (!stage) return null;
  return (
    <div
      style={{
        background: BG.surface,
        border: `1px solid ${hexToRgba(stage.color, 0.2)}`,
        borderRadius: 12,
        padding: "24px 28px",
        minHeight: 220,
        transition: "all 0.3s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: stage.color,
            flexShrink: 0,
            boxShadow: `0 0 10px ${hexToRgba(stage.color, 0.5)}`,
          }}
        />
        <span
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: stage.color,
            fontFamily: FONT.mono,
          }}
        >
          {stage.label}
        </span>
        <span style={{ fontSize: 12, color: TEXT.muted }}>— {stage.sub}</span>
      </div>

      <p
        style={{
          fontSize: 13.5,
          color: TEXT.secondary,
          lineHeight: 1.7,
          margin: "0 0 16px",
        }}
      >
        {stage.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {stage.biology.map((b, i) => {
          const isWarning = b.startsWith("★");
          const label = b.replace("★", "").trim();
          return (
            <span
              key={i}
              style={{
                background: isWarning
                  ? hexToRgba(ORANGE, 0.12)
                  : hexToRgba(stage.color, 0.08),
                border: `1px solid ${isWarning ? hexToRgba(ORANGE, 0.4) : hexToRgba(stage.color, 0.25)}`,
                borderRadius: 6,
                padding: "3px 9px",
                fontSize: 11,
                color: isWarning ? ORANGE : stage.color,
                fontFamily: FONT.mono,
                fontWeight: isWarning ? 700 : 400,
              }}
            >
              {isWarning ? "⚠ " : ""}
              {label}
            </span>
          );
        })}
      </div>

      {stage.hormones && stage.hormones.length > 0 && (
        <div
          style={{
            marginTop: 14,
            paddingTop: 14,
            borderTop: `1px solid ${BORDER.default}`,
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: TEXT.muted,
              marginBottom: 8,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: FONT.mono,
              fontWeight: 600,
            }}
          >
            Hormonal cascade
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {stage.hormones.map((h, i) => (
              <span
                key={i}
                style={{
                  background: hexToRgba(SPECTRUM.slate, 0.1),
                  border: `1px solid ${BORDER.default}`,
                  borderRadius: 6,
                  padding: "3px 9px",
                  fontSize: 11,
                  color: TEXT.secondary,
                  fontFamily: FONT.mono,
                }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
