"use client";

import { useState, useEffect } from "react";
import { FONT, DIAGRAM, hexToRgba } from "../styles/tokens";

/**
 * ESCCycleDiagram — The Emotional Somatic Cycle (animated)
 *
 * Single-circle stage-by-stage walkthrough of the cycle with Path A (complete
 * restoration) and Path B (override → cascade → elevated baseline) toggles.
 *
 * Design reference: teg-blue-vault/_animations/ESC-animation.html
 * Style system: teg-blue-vault/_system/diagram-style.md
 * Consumes DIAGRAM tokens from tokens.js — no hardcoded colors.
 */

const BLUE   = DIAGRAM.primary;
const ORANGE = DIAGRAM.break;

const R = 140;
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
    ey: "Stage 1",
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
    ey: "Stage 2",
    ti: "Emotional Signal Generation",
    de: "The nervous system generates a physiological response pattern — hormonal, neurochemical, muscular — encoding a finding about what was detected. Each pattern is distinct. This is what the nervous system produces as an emotion.",
    arc: 100,
    fillB: 0,
    dots: ["d0", "d1", "d2"],
    lines: ["ln0", "ln1", "ln2"],
    lbls: ["lbl0", "lbl1", "lbl2"],
    arrs: [],
  },
  {
    ey: "Stage 3",
    ti: "Nervous System State Activation",
    de: "The nervous system reorganises into a different physiological configuration. Perception narrows or widens. Cognitive flexibility shifts. The body configures itself for what the evaluation determined the situation requires.",
    arc: 145,
    fillB: 0,
    dots: ["d0", "d1", "d2", "d3"],
    lines: ["ln0", "ln1", "ln2", "ln3"],
    lbls: ["lbl0", "lbl1", "lbl2", "lbl3"],
    arrs: [],
  },
  {
    ey: "Stage 4 · Branching Point",
    ti: "Interoceptive Access",
    de: "The CLS catches up. Whether the interoceptive channel is open — whether it can feel what the ESS is doing — determines everything that follows. This is the fork between Path A and Path B.",
    arc: 180,
    fillB: 0,
    dots: ["d0", "d1", "d2", "d3", "d4r", "d4f"],
    lines: ["ln0", "ln1", "ln2", "ln3", "ln4", "ln4b"],
    lbls: ["lbl0", "lbl1", "lbl2", "lbl3", "lbl-ba"],
    arrs: ["arr-a"],
  },
  {
    ey: "Stage 5 · Path A",
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
    ey: "Stage 6 · Path A",
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
    ey: "Stage 1",
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
    ey: "Stage 2",
    ti: "Emotional Signal Generation",
    de: "The nervous system generates the same physiological response pattern. The biological message is identical. The divergence comes later — at the point where the CLS tries to receive it.",
    arc: 100,
    fillB: 0,
    dots: ["d0", "d1", "d2"],
    lines: ["ln0", "ln1", "ln2"],
    lbls: ["lbl0", "lbl1", "lbl2"],
    arrs: [],
  },
  {
    ey: "Stage 3",
    ti: "Nervous System State Activation",
    de: "The nervous system reorganises into a different physiological configuration. Identical to Path A. The CLS is about to catch up — and what it finds determines the path.",
    arc: 145,
    fillB: 0,
    dots: ["d0", "d1", "d2", "d3"],
    lines: ["ln0", "ln1", "ln2", "ln3"],
    lbls: ["lbl0", "lbl1", "lbl2", "lbl3"],
    arrs: [],
  },
  {
    ey: "Stage 4 · Branching Point",
    ti: "No Interoceptive Access",
    de: "The CLS catches up and cannot feel what the ESS is doing. The interoceptive channel is absent. There is no bridge between the two information systems.",
    arc: 180,
    fillB: 0,
    dots: ["d0", "d1", "d2", "d3", "d4r", "d4f"],
    lines: ["ln0", "ln1", "ln2", "ln3", "ln4", "ln4b"],
    lbls: ["lbl0", "lbl1", "lbl2", "lbl3", "lbl-bb"],
    arrs: ["arr-b"],
  },
  {
    ey: "Stage 7 · Path B",
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
    ey: "Stages 8–11 · Path B",
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
    ey: "Stage 12 · Path B",
    ti: "Elevated Baseline",
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

// All element IDs that should be visible in the overview frame
const OVERVIEW_IDS = [
  "d0", "d1", "d2", "d3", "d4r", "d4f", "d5", "d6",
  "ln0", "ln1", "ln2", "ln3", "ln4", "ln4b", "ln5", "ln6",
  "lbl0", "lbl1", "lbl2", "lbl3", "lbl-ba", "lbl5", "lbl6",
  "arr-a",
];

export default function ESCCycleDiagram() {
  const [activePath, setActivePath] = useState("A");
  const [sceneIdx, setSceneIdx] = useState(0);
  const [started, setStarted] = useState(false);

  const scenes = activePath === "A" ? PATH_A : PATH_B;
  const scene = scenes[sceneIdx];
  const isOrange = started && activePath === "B" && sceneIdx >= 4;
  const arcLength = started ? (scene.arc / 360) * C : C;

  const switchPath = (p) => {
    setActivePath(p);
    setSceneIdx(0);
    setStarted(true);
  };

  const startCycle = () => {
    setStarted(true);
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
        if (!started) { startCycle(); return; }
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
  }, [activePath, scenes.length, started]);

  const visible = (id) => {
    if (!started) return OVERVIEW_IDS.includes(id) ? 1 : 0;
    if ((scene.dots || []).includes(id)) return 1;
    if ((scene.lines || []).includes(id)) return 1;
    if ((scene.lbls || []).includes(id)) return 1;
    if ((scene.arrs || []).includes(id)) return 1;
    return 0;
  };

  const arcColor = isOrange ? ORANGE : BLUE;
  const branchDotFill = isOrange ? ORANGE : DIAGRAM.white;

  return (
    <div
      style={{
        background: DIAGRAM.bg,
        color: DIAGRAM.white,
        fontFamily: FONT.diagram,
        border: `1px solid ${DIAGRAM.divider}`,
        padding: "22px 38px 18px",
        maxWidth: 1080,
        margin: "0 auto",
        height: 540,
        overflow: "hidden",
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
              color: DIAGRAM.textMuted,
              textTransform: "uppercase",
              fontWeight: 300,
              marginBottom: 3,
            }}
          >
            TEG-Blue
          </div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.03em",
              color: DIAGRAM.white,
            }}
          >
            The Emotional Somatic Cycle
          </div>
        </div>

        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {!started && (
            <button
              onClick={startCycle}
              style={{
                padding: "5px 14px",
                fontFamily: FONT.diagram,
                fontSize: 9,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: hexToRgba(BLUE, 0.15),
                color: BLUE,
                border: `1px solid ${hexToRgba(BLUE, 0.4)}`,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              Start Cycle
            </button>
          )}
          <div style={{ display: "flex", border: `1px solid ${DIAGRAM.divider}` }}>
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
        </div>
      </header>

      {/* ── SVG AREA ───────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px 0",
        }}
      >
        <svg
          viewBox="0 60 880 420"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: 380, maxWidth: 920 }}
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
            stroke={DIAGRAM.connector}
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

          {/* ── DOTS (R=140, center 440,255) ── */}
          <circle cx="440" cy="115" r="5.5" fill={DIAGRAM.white} opacity={visible("d0")} />
          <circle cx="555" cy="175" r="5" fill={DIAGRAM.white} opacity={visible("d1")} />
          <circle cx="578" cy="279" r="5" fill={DIAGRAM.white} opacity={visible("d2")} />
          <circle cx="520" cy="370" r="5" fill={DIAGRAM.white} opacity={visible("d3")} />
          <circle cx="440" cy="395" r="10" fill="none" stroke={branchDotFill} strokeWidth="2" opacity={visible("d4r")} />
          <circle cx="440" cy="395" r="5" fill={branchDotFill} opacity={visible("d4f")} />
          <circle cx="330" cy="341" r="5" fill={DIAGRAM.white} opacity={visible("d5")} />
          <circle cx="308" cy="207" r="5" fill={DIAGRAM.white} opacity={visible("d6")} />

          {/* ── CONNECTOR LINES ── */}
          <line x1="440" y1="109" x2="440" y2="93"  stroke={DIAGRAM.connector} strokeWidth="1" opacity={visible("ln0")} />
          <line x1="559" y1="173" x2="589" y2="170" stroke={DIAGRAM.connector} strokeWidth="1" opacity={visible("ln1")} />
          <line x1="582" y1="277" x2="614" y2="279" stroke={DIAGRAM.connector} strokeWidth="1" opacity={visible("ln2")} />
          <line x1="524" y1="372" x2="552" y2="382" stroke={DIAGRAM.connector} strokeWidth="1" opacity={visible("ln3")} />
          <line x1="440" y1="405" x2="440" y2="419" stroke={DIAGRAM.connector} strokeWidth="1" opacity={visible("ln4")} />
          <line x1="440" y1="433" x2="440" y2="446" stroke={DIAGRAM.connector} strokeWidth="1" opacity={visible("ln4b")} />
          <line x1="325" y1="341" x2="293" y2="345" stroke={DIAGRAM.connector} strokeWidth="1" opacity={visible("ln5")} />
          <line x1="303" y1="207" x2="270" y2="209" stroke={DIAGRAM.connector} strokeWidth="1" opacity={visible("ln6")} />
          <line x1="318" y1="170" x2="270" y2="170" stroke={DIAGRAM.connector} strokeWidth="1" opacity={visible("b-ln1")} />
          <line x1="305" y1="205" x2="270" y2="205" stroke={DIAGRAM.connector} strokeWidth="1" opacity={visible("b-ln2")} />
          <line x1="302" y1="252" x2="270" y2="252" stroke={DIAGRAM.connector} strokeWidth="1" opacity={visible("b-ln3")} />
          <line x1="310" y1="302" x2="270" y2="302" stroke={DIAGRAM.connector} strokeWidth="1" opacity={visible("b-ln4")} />
          <line x1="335" y1="352" x2="270" y2="352" stroke={DIAGRAM.connector} strokeWidth="1" opacity={visible("b-ln5")} />

          {/* ── LABELS ── */}
          <text x="440" y="86" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill={DIAGRAM.textStrong} opacity={visible("lbl0")}>
            Physiological Baseline
          </text>
          <text x="440" y="86" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill={hexToRgba(ORANGE, 0.95)} opacity={visible("lbl0b")}>
            Elevated Baseline
          </text>

          <text x="595" y="173" textAnchor="start" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill={DIAGRAM.textStrong} opacity={visible("lbl1")}>
            Safety-Threat Evaluation
          </text>
          <text x="620" y="283" textAnchor="start" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill={DIAGRAM.textStrong} opacity={visible("lbl2")}>
            Emotional Signal Generation
          </text>
          <text x="558" y="384" textAnchor="start" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill={DIAGRAM.textStrong} opacity={visible("lbl3")}>
            Nervous System State Activation
          </text>

          <text x="440" y="429" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fontWeight="500" fill={DIAGRAM.textBody} opacity={visible("lbl-ba")}>
            Interoceptive Access
          </text>
          <text x="440" y="429" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fontWeight="500" fill={hexToRgba(ORANGE, 0.9)} opacity={visible("lbl-bb")}>
            No Interoceptive Access
          </text>

          <polygon points="433,442 447,442 440,454" fill={hexToRgba(DIAGRAM.white, 0.7)} opacity={visible("arr-a")} />
          <polygon points="433,442 447,442 440,454" fill={hexToRgba(ORANGE, 0.8)} opacity={visible("arr-b")} />

          <text x="440" y="462" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="9.5" fontWeight="300" fill={DIAGRAM.breakDim} opacity={visible("lbl-ov")}>
            Cognitive Override
          </text>

          <text x="288" y="347" textAnchor="end" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill={DIAGRAM.textStrong} opacity={visible("lbl5")}>
            Mobilisation Response
          </text>
          <text x="264" y="211" textAnchor="end" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill={DIAGRAM.textStrong} opacity={visible("lbl6")}>
            Biological Restoration
          </text>

          <text x="265" y="172" textAnchor="end" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill={DIAGRAM.textStrong} opacity={visible("b-lb1")}>
            Temporary Relief
          </text>
          <text x="265" y="207" textAnchor="end" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill={DIAGRAM.textStrong} opacity={visible("b-lb2")}>
            Restoration Substitutes
          </text>
          <text x="265" y="254" textAnchor="end" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill={DIAGRAM.textStrong} opacity={visible("b-lb3")}>
            Load Accumulation (Debris)
          </text>
          <text x="265" y="304" textAnchor="end" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill={DIAGRAM.textStrong} opacity={visible("b-lb4")}>
            Unresolved Activation Load
          </text>
          <text x="265" y="354" textAnchor="end" fontFamily="'IBM Plex Mono',monospace" fontSize="10.5" fontWeight="300" fill={DIAGRAM.textStrong} opacity={visible("b-lb5")}>
            Elevated Baseline
          </text>
        </svg>
      </div>

      {/* ── BOTTOM PANEL ───────────────────────────────── */}
      <footer
        style={{
          flexShrink: 0,
          position: "relative",
          paddingTop: 5,
          height: 80,
          visibility: started ? "visible" : "hidden",
        }}
      >
        <div style={{ maxWidth: 490 }}>
          <div
            style={{
              fontSize: 9,
              letterSpacing: "0.16em",
              color: DIAGRAM.textMuted,
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            {scene.ey || "\u00A0"}
          </div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: "0.01em",
              marginBottom: 4,
              color: DIAGRAM.white,
            }}
          >
            {scene.ti}
          </div>
          <div
            style={{
              fontSize: 9.5,
              fontWeight: 300,
              color: DIAGRAM.textStrong,
              lineHeight: 1.65,
            }}
          >
            {scene.de}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 9,
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
                  background: i === sceneIdx ? hexToRgba(DIAGRAM.white, 0.88) : DIAGRAM.connector,
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
        color: active ? color : DIAGRAM.textMuted,
        border: "none",
        borderLeft: borderLeft ? `1px solid ${DIAGRAM.divider}` : "none",
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
        border: `1px solid ${DIAGRAM.divider}`,
        color: DIAGRAM.white,
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
        if (!disabled) e.currentTarget.style.borderColor = hexToRgba("#a0cdfb", 0.5);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = DIAGRAM.divider;
      }}
    >
      {children}
    </button>
  );
}
