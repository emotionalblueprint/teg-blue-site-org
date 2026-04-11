"use client";

import { useState, useEffect } from "react";
import { FONT } from "../styles/tokens";

/**
 * ESCCycleDiagram — The Emotional Somatic Cycle (animated)
 *
 * Single-circle stage-by-stage walkthrough of the cycle with Path A (complete
 * restoration) and Path B (override → cascade → elevated baseline) toggles.
 *
 * Design reference: teg-blue-vault/_animations/ESC-animation.html
 * Hardcoded design values preserved from the prototype — the "diagram
 * palette" will be formalised into tokens.js in a follow-up pass.
 */

// ─── HARDCODED DESIGN CONSTANTS ───────────────────────
const BG     = "#000";
const WHITE  = "#fff";
const BLUE   = "#4062eb";
const ORANGE = "#e05e2e";
const MUTED  = "rgba(160,205,251,0.55)";
const BORDER = "rgba(160,205,251,0.18)";

const R = 176;
const C = 2 * Math.PI * R; // circumference ≈ 1106.0

// ─── SCENE DATA ───────────────────────────────────────

const PATH_A = [
  {
    ey: "",
    ti: "Physiological Baseline",
    de: "The nervous system at rest. Cortisol at resting level. Muscles at resting tension. The body's resources available, not deployed. The state the nervous system is designed to return to after activation.",
    arc: 0,
    fillB: 0,
    dots: ["d0"],
    lines: ["ln0"],
    lbls: ["lbl0"],
    arrs: [],
  },
  {
    ey: "Stage 1 · M1 · Emotions as Signals",
    ti: "Safety-Threat Evaluation",
    de: "Five sensory channels feed in simultaneously below conscious awareness. The amygdala fires in 12ms. A full evaluation completes before the CLS has assembled a single thought.",
    arc: 55,
    fillB: 0,
    dots: ["d0", "d1"],
    lines: ["ln0", "ln1"],
    lbls: ["lbl0", "lbl1"],
    arrs: [],
  },
  {
    ey: "Stage 2 · M1 · Emotions as Signals",
    ti: "Signal Generation",
    de: "The nervous system generates a physiological response pattern — hormonal, neurochemical, muscular — encoding a finding about what was detected. Each pattern is distinct. This is what the nervous system produces as an emotion.",
    arc: 100,
    fillB: 0,
    dots: ["d0", "d1", "d2"],
    lines: ["ln0", "ln1", "ln2"],
    lbls: ["lbl0", "lbl1", "lbl2"],
    arrs: [],
  },
  {
    ey: "Stage 3 · M2 · Nervous System States",
    ti: "State Activation",
    de: "The nervous system reorganises into a different physiological configuration. Perception narrows or widens. Cognitive flexibility shifts. The body configures itself for what the evaluation determined the situation requires.",
    arc: 145,
    fillB: 0,
    dots: ["d0", "d1", "d2", "d3"],
    lines: ["ln0", "ln1", "ln2", "ln3"],
    lbls: ["lbl0", "lbl1", "lbl2", "lbl3"],
    arrs: [],
  },
  {
    ey: "Branching Point · M4 · Awareness Capacities",
    ti: "The Branching Point",
    de: "The CLS catches up. Whether the interoceptive channel is open — whether it can feel what the ESS is doing — determines everything that follows. This is the fork between Path A and Path B.",
    arc: 180,
    fillB: 0,
    dots: ["d0", "d1", "d2", "d3", "d4r", "d4f"],
    lines: ["ln0", "ln1", "ln2", "ln3", "ln4", "ln4b"],
    lbls: ["lbl0", "lbl1", "lbl2", "lbl3", "lbl-ba"],
    arrs: ["arr-a"],
  },
  {
    ey: "Stage 4 · M3 · Regulation Capacities · Path A",
    ti: "Mobilisation Response",
    de: "The mobilised physiological resources are expended — through movement, action, expression, or holding. The body does what the activation mobilised it to do. Stress hormones deployed are used. Muscle tension discharged.",
    arc: 232,
    fillB: 0,
    dots: ["d0", "d1", "d2", "d3", "d4r", "d4f", "d5"],
    lines: ["ln0", "ln1", "ln2", "ln3", "ln4", "ln4b", "ln5"],
    lbls: ["lbl0", "lbl1", "lbl2", "lbl3", "lbl-ba", "lbl5"],
    arrs: ["arr-a"],
  },
  {
    ey: "Stage 5 · M3 · Regulation Capacities · Path A",
    ti: "Biological Restoration",
    de: "The restoration sequence runs to its endpoint. Stress hormones metabolise. Muscles release. The HPA axis stands down. Neural circuits recover. The nervous system returns toward physiological baseline.",
    arc: 290,
    fillB: 0,
    dots: ["d0", "d1", "d2", "d3", "d4r", "d4f", "d5", "d6"],
    lines: ["ln0", "ln1", "ln2", "ln3", "ln4", "ln4b", "ln5", "ln6"],
    lbls: ["lbl0", "lbl1", "lbl2", "lbl3", "lbl-ba", "lbl5", "lbl6"],
    arrs: ["arr-a"],
  },
  {
    ey: "Completion · Path A",
    ti: "Return to Physiological Baseline",
    de: "The activation resolves. The signal's information has landed. The person knows what fired, why it fired, what it needed. The cycle does not need to repeat. The body completed what it started.",
    arc: 360,
    fillB: 0,
    dots: ["d0", "d1", "d2", "d3", "d4r", "d4f", "d5", "d6"],
    lines: ["ln0", "ln1", "ln2", "ln3", "ln4", "ln4b", "ln5", "ln6"],
    lbls: ["lbl0", "lbl1", "lbl2", "lbl3", "lbl-ba", "lbl5", "lbl6"],
    arrs: ["arr-a"],
  },
];

const PATH_B = [
  {
    ey: "",
    ti: "Physiological Baseline",
    de: "The nervous system at rest. The awareness architecture connecting the two systems may be absent or limited — but the cycle begins identically to Path A.",
    arc: 0,
    fillB: 0,
    dots: ["d0"],
    lines: ["ln0"],
    lbls: ["lbl0"],
    arrs: [],
  },
  {
    ey: "Stage 1 · M1 · Emotions as Signals",
    ti: "Safety-Threat Evaluation",
    de: "Five sensory channels feed in simultaneously. Identical to Path A at this stage. The amygdala fires in 12ms. The divergence has not yet happened.",
    arc: 55,
    fillB: 0,
    dots: ["d0", "d1"],
    lines: ["ln0", "ln1"],
    lbls: ["lbl0", "lbl1"],
    arrs: [],
  },
  {
    ey: "Stage 2 · M1 · Emotions as Signals",
    ti: "Signal Generation",
    de: "The nervous system generates the same physiological response pattern. The biological message is identical. The divergence comes later — at the point where the CLS tries to receive it.",
    arc: 100,
    fillB: 0,
    dots: ["d0", "d1", "d2"],
    lines: ["ln0", "ln1", "ln2"],
    lbls: ["lbl0", "lbl1", "lbl2"],
    arrs: [],
  },
  {
    ey: "Stage 3 · M2 · Nervous System States",
    ti: "State Activation",
    de: "The nervous system reorganises into a different physiological configuration. Identical to Path A. The CLS is about to catch up — and what it finds determines the path.",
    arc: 145,
    fillB: 0,
    dots: ["d0", "d1", "d2", "d3"],
    lines: ["ln0", "ln1", "ln2", "ln3"],
    lbls: ["lbl0", "lbl1", "lbl2", "lbl3"],
    arrs: [],
  },
  {
    ey: "Branching Point · M4 · Awareness Capacities",
    ti: "The Branching Point — No Bridge",
    de: "The CLS catches up and cannot feel what the ESS is doing. The interoceptive channel is absent. There is no bridge between the two information systems.",
    arc: 180,
    fillB: 0,
    dots: ["d0", "d1", "d2", "d3", "d4r", "d4f"],
    lines: ["ln0", "ln1", "ln2", "ln3", "ln4", "ln4b"],
    lbls: ["lbl0", "lbl1", "lbl2", "lbl3", "lbl-bb"],
    arrs: ["arr-b"],
  },
  {
    ey: "Stage 4 · M3 · Regulation Capacities · Path B",
    ti: "Cognitive Override",
    de: "The CLS overrides the ESS's physiological signals. It manages, plans, pushes through — without registering the physiological activation as information. The override runs without being experienced as override.",
    arc: 180,
    fillB: 0.2,
    dots: ["d0", "d1", "d2", "d3", "d4r", "d4f"],
    lines: ["ln0", "ln1", "ln2", "ln3", "ln4", "ln4b"],
    lbls: ["lbl0", "lbl1", "lbl2", "lbl3", "lbl-bb", "lbl-ov"],
    arrs: ["arr-b"],
  },
  {
    ey: "Stage 5 · M3 · Regulation Capacities · Path B",
    ti: "The Cascade",
    de: "The restoration sequence does not run. Debris accumulates. The baseline shifts upward. The nervous system searches for anything that produces the neurochemical shift that biological completion would have provided.",
    arc: 180,
    fillB: 0.68,
    dots: ["d0", "d1", "d2", "d3", "d4r", "d4f"],
    lines: [
      "ln0", "ln1", "ln2", "ln3", "ln4", "ln4b",
      "b-ln1", "b-ln2", "b-ln3", "b-ln4", "b-ln5",
    ],
    lbls: [
      "lbl0", "lbl1", "lbl2", "lbl3", "lbl-bb",
      "b-lb1", "b-lb2", "b-lb3", "b-lb4", "b-lb5",
    ],
    arrs: ["arr-b"],
  },
  {
    ey: "Path B · Elevated Baseline",
    ti: "Baseline Elevation",
    de: "The nervous system adapts its resting activation level upward to reflect the unresolved load. The floor rises. States requiring lower activation become physiologically inaccessible. The cycle repeats from a higher floor.",
    arc: 0,
    fillB: 1,
    dots: ["d0"],
    lines: [],
    lbls: ["lbl0b"],
    arrs: [],
  },
];

// ─── COMPONENT ────────────────────────────────────────

export default function ESCCycleDiagram() {
  const [activePath, setActivePath] = useState("A");
  const [sceneIdx, setSceneIdx] = useState(0);

  const scenes = activePath === "A" ? PATH_A : PATH_B;
  const scene = scenes[sceneIdx];
  const isOrange = activePath === "B" && sceneIdx >= 4;
  const arcLength = (scene.arc / 360) * C;

  const switchPath = (p) => {
    setActivePath(p);
    setSceneIdx(0);
  };

  const step = (dir) => {
    setSceneIdx((i) => Math.max(0, Math.min(scenes.length - 1, i + dir)));
  };

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      } else if (e.key === "a" || e.key === "A") {
        switchPath("A");
      } else if (e.key === "b" || e.key === "B") {
        switchPath("B");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePath, scenes.length]);

  const visible = (id) => {
    if ((scene.dots || []).includes(id)) return 1;
    if ((scene.lines || []).includes(id)) return 1;
    if ((scene.lbls || []).includes(id)) return 1;
    if ((scene.arrs || []).includes(id)) return 1;
    return 0;
  };

  const arcColor = isOrange ? ORANGE : BLUE;
  const branchDotFill = isOrange ? ORANGE : WHITE;

  return (
    <div
      style={{
        background: BG,
        color: WHITE,
        fontFamily: FONT.diagram,
        border: `1px solid ${BORDER}`,
        padding: "22px 38px 18px",
        maxWidth: 1080,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── HEADER ─────────────────────────────────────── */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexShrink: 0,
          marginBottom: 4,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 9,
              letterSpacing: "0.18em",
              color: MUTED,
              textTransform: "uppercase",
              fontWeight: 300,
              marginBottom: 3,
            }}
          >
            TEG-Blue · M1 + M2 + M3 + M4
          </div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.03em",
              color: WHITE,
            }}
          >
            Emotional Somatic Cycle
          </div>
        </div>

        <div style={{ display: "flex", border: `1px solid ${BORDER}` }}>
          <PathButton
            label="Path A"
            active={activePath === "A"}
            path="A"
            onClick={() => switchPath("A")}
          />
          <PathButton
            label="Path B"
            active={activePath === "B"}
            path="B"
            onClick={() => switchPath("B")}
            borderLeft
          />
        </div>
      </header>

      {/* ── SVG AREA ───────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 0",
          minHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 880 500"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "auto", maxWidth: 920 }}
        >
          {/* Orange fill — Path B cascade */}
          <circle
            cx="440"
            cy="255"
            r={R}
            fill={ORANGE}
            opacity={scene.fillB || 0}
            style={{ transition: "opacity 0.65s ease" }}
          />

          {/* Base circle outline */}
          <circle
            cx="440"
            cy="255"
            r={R}
            fill="none"
            stroke="rgba(160,205,251,.22)"
            strokeWidth="1.5"
          />

          {/* Animated arc */}
          <circle
            cx="440"
            cy="255"
            r={R}
            fill="none"
            stroke={arcColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            transform="rotate(-90,440,255)"
            strokeDasharray={`${arcLength.toFixed(1)} ${(C + 2).toFixed(1)}`}
            style={{ transition: "stroke-dasharray 0.88s cubic-bezier(.4,0,.2,1)" }}
          />

          {/* ── DOTS ── */}
          <circle cx="440" cy="79" r="4" fill={WHITE} opacity={visible("d0")} />
          <circle cx="584" cy="157" r="3.5" fill={WHITE} opacity={visible("d1")} />
          <circle cx="614" cy="285" r="3.5" fill={WHITE} opacity={visible("d2")} />
          <circle cx="540" cy="399" r="3.5" fill={WHITE} opacity={visible("d3")} />
          <circle cx="440" cy="431" r="8.5" fill="none" stroke={branchDotFill} strokeWidth="1.5" opacity={visible("d4r")} />
          <circle cx="440" cy="431" r="4" fill={branchDotFill} opacity={visible("d4f")} />
          <circle cx="302" cy="366" r="3.5" fill={WHITE} opacity={visible("d5")} />
          <circle cx="266" cy="218" r="3.5" fill={WHITE} opacity={visible("d6")} />

          {/* ── CONNECTOR LINES ── */}
          <line x1="440" y1="75"  x2="440" y2="53"  stroke="rgba(160,205,251,.28)" strokeWidth=".5" opacity={visible("ln0")} />
          <line x1="588" y1="157" x2="618" y2="152" stroke="rgba(160,205,251,.28)" strokeWidth=".5" opacity={visible("ln1")} />
          <line x1="618" y1="285" x2="650" y2="285" stroke="rgba(160,205,251,.28)" strokeWidth=".5" opacity={visible("ln2")} />
          <line x1="544" y1="399" x2="572" y2="411" stroke="rgba(160,205,251,.28)" strokeWidth=".5" opacity={visible("ln3")} />
          <line x1="440" y1="440" x2="440" y2="455" stroke="rgba(160,205,251,.28)" strokeWidth=".5" opacity={visible("ln4")} />
          <line x1="440" y1="469" x2="440" y2="482" stroke="rgba(160,205,251,.28)" strokeWidth=".5" opacity={visible("ln4b")} />
          <line x1="298" y1="366" x2="265" y2="370" stroke="rgba(160,205,251,.28)" strokeWidth=".5" opacity={visible("ln5")} />
          <line x1="262" y1="218" x2="228" y2="220" stroke="rgba(160,205,251,.28)" strokeWidth=".5" opacity={visible("ln6")} />
          <line x1="288" y1="157" x2="240" y2="157" stroke="rgba(160,205,251,.28)" strokeWidth=".5" opacity={visible("b-ln1")} />
          <line x1="263" y1="213" x2="240" y2="213" stroke="rgba(160,205,251,.28)" strokeWidth=".5" opacity={visible("b-ln2")} />
          <line x1="264" y1="270" x2="240" y2="270" stroke="rgba(160,205,251,.28)" strokeWidth=".5" opacity={visible("b-ln3")} />
          <line x1="273" y1="327" x2="240" y2="327" stroke="rgba(160,205,251,.28)" strokeWidth=".5" opacity={visible("b-ln4")} />
          <line x1="310" y1="384" x2="240" y2="384" stroke="rgba(160,205,251,.28)" strokeWidth=".5" opacity={visible("b-ln5")} />

          {/* ── LABELS ── */}
          <text x="440" y="46" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill="rgba(255,255,255,0.9)" opacity={visible("lbl0")}>
            Physiological Baseline
          </text>
          <text x="440" y="46" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill="rgba(224,94,46,.95)" opacity={visible("lbl0b")}>
            Baseline Elevation
          </text>

          <text x="625" y="155" textAnchor="start" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill="rgba(255,255,255,0.9)" opacity={visible("lbl1")}>
            Safety-Threat Evaluation (M1)
          </text>
          <text x="657" y="289" textAnchor="start" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill="rgba(255,255,255,0.9)" opacity={visible("lbl2")}>
            Signal Generation (M1)
          </text>
          <text x="578" y="413" textAnchor="start" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill="rgba(255,255,255,0.9)" opacity={visible("lbl3")}>
            State Activation (M2)
          </text>

          <text x="440" y="465" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fontWeight="500" fill="rgba(255,255,255,0.85)" opacity={visible("lbl-ba")}>
            ESS — CLS  Bridge
          </text>
          <text x="440" y="465" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fontWeight="500" fill="rgba(224,94,46,.9)" opacity={visible("lbl-bb")}>
            ESS — CLS  NO Bridge
          </text>

          <polygon points="435,480 445,480 440,488" fill="rgba(255,255,255,.55)" opacity={visible("arr-a")} />
          <polygon points="435,480 445,480 440,488" fill="rgba(224,94,46,.65)" opacity={visible("arr-b")} />

          <text x="440" y="494" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="9.5" fontWeight="300" fill="rgba(224,94,46,.78)" opacity={visible("lbl-ov")}>
            Cognitive Override
          </text>

          <text x="260" y="372" textAnchor="end" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill="rgba(255,255,255,0.9)" opacity={visible("lbl5")}>
            Mobilisation Response (M3)
          </text>
          <text x="222" y="222" textAnchor="end" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill="rgba(255,255,255,0.9)" opacity={visible("lbl6")}>
            Biological Restoration (M3)
          </text>

          <text x="235" y="160" textAnchor="end" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill="rgba(255,255,255,0.9)" opacity={visible("b-lb1")}>
            Temporary Relief
          </text>
          <text x="235" y="216" textAnchor="end" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill="rgba(255,255,255,0.9)" opacity={visible("b-lb2")}>
            Restoration Substitutes
          </text>
          <text x="235" y="273" textAnchor="end" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill="rgba(255,255,255,0.9)" opacity={visible("b-lb3")}>
            Debris Accumulation
          </text>
          <text x="235" y="330" textAnchor="end" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill="rgba(255,255,255,0.9)" opacity={visible("b-lb4")}>
            Unresolved Activation Load
          </text>
          <text x="235" y="387" textAnchor="end" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill="rgba(255,255,255,0.9)" opacity={visible("b-lb5")}>
            Incomplete Restoration
          </text>
        </svg>
      </div>

      {/* ── BOTTOM PANEL ───────────────────────────────── */}
      <footer
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 20,
          paddingTop: 5,
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 9,
              letterSpacing: "0.16em",
              color: MUTED,
              textTransform: "uppercase",
              marginBottom: 4,
              minHeight: 13,
            }}
          >
            {scene.ey || ""}
          </div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: "0.01em",
              marginBottom: 4,
              minHeight: 22,
              color: WHITE,
            }}
          >
            {scene.ti}
          </div>
          <div
            style={{
              fontSize: 9.5,
              fontWeight: 300,
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.65,
              maxWidth: 490,
              minHeight: 30,
            }}
          >
            {scene.de}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 9,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
              justifyContent: "flex-end",
              maxWidth: 160,
            }}
          >
            {scenes.map((_, i) => (
              <div
                key={i}
                onClick={() => setSceneIdx(i)}
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: i === sceneIdx ? "rgba(255,255,255,.88)" : "rgba(160,205,251,.22)",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              />
            ))}
          </div>

          <div style={{ display: "flex", gap: 5 }}>
            <NavButton onClick={() => step(-1)} disabled={sceneIdx === 0}>
              ←
            </NavButton>
            <NavButton onClick={() => step(1)} disabled={sceneIdx === scenes.length - 1}>
              →
            </NavButton>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── HELPERS ───────────────────────────────────────────

function PathButton({ label, active, path, onClick, borderLeft }) {
  const color = path === "A" ? BLUE : ORANGE;
  return (
    <button
      onClick={onClick}
      style={{
        padding: "5px 14px",
        fontFamily: FONT.diagram,
        fontSize: 9,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        background: active ? hexToRgba(color, 0.1) : "transparent",
        color: active ? color : MUTED,
        border: "none",
        borderLeft: borderLeft ? `1px solid ${BORDER}` : "none",
        cursor: "pointer",
        transition: "all 0.2s",
      }}
    >
      {label}
    </button>
  );
}

function NavButton({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 32,
        height: 32,
        background: "transparent",
        border: `1px solid ${BORDER}`,
        color: WHITE,
        fontFamily: FONT.diagram,
        fontSize: 12,
        cursor: disabled ? "default" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: disabled ? 0.2 : 1,
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.borderColor = "rgba(160,205,251,.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = BORDER;
      }}
    >
      {children}
    </button>
  );
}

function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
