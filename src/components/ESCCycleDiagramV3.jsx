"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { BG, TEXT, BORDER, FONT, SPECTRUM, ACCENT, hexToRgba } from "../styles/tokens";
import { EMOTIONS } from "../data/m1-data";

/**
 * ESCCycleDiagramV3 — The Emotional Somatic Cycle as an animated experience
 *
 * One circle. One story. The reader presses Start, watches the cycle animate
 * stage by stage, and at the bridge — they choose whether it opens or closes.
 * That choice determines everything that follows.
 *
 * Reference: ESC-PATH-A.png, ESC-PATH-B-*.png (Illustrator)
 */

// ─── LAYOUT ─────────────────────────────────────────────
const SIZE = 400;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 140;
const STROKE = 7;
const DOT_R = 6;
const DOT_R_ACTIVE = 9;
const DOT_R_BRIDGE = 12;

// ─── COLORS ─────────────────────────────────────────────
const PATH_A_COLOR = SPECTRUM.azure;    // #76e2ff — the cycle completes
const PATH_B_COLOR = ACCENT.orange;     // #e87b35 — stuck, unresolved
const STAGE_BLUE = '#a0cdfb';
const BG_RING = hexToRgba(SPECTRUM.slate, 0.1);

// ─── STAGES ─────────────────────────────────────────────
// Angles: 0° = 12 o'clock, clockwise
const STAGES = [
  {
    angle: 0,
    key: "baseline",
    label: "Physiological Baseline",
    short: "Baseline",
    model: null,
    description: "The nervous system at rest. Cortisol at resting level. Muscles at resting tension. The starting point.",
  },
  {
    angle: 55,
    key: "evaluation",
    label: "Safety-Threat Evaluation",
    short: "Evaluation",
    model: "M1",
    description: "The sensory periphery detects a change. The nervous system evaluates for safety or threat — below conscious awareness, at millisecond speed.",
  },
  {
    angle: 100,
    key: "signal",
    label: "Signal Generation",
    short: "Signal",
    model: "M1",
    description: null, // Filled dynamically with random emotion
  },
  {
    angle: 150,
    key: "state",
    label: "State Activation",
    short: "State",
    model: "M2",
    description: "The nervous system reorganises into a different physiological configuration along the safety-threat gradient.",
  },
  {
    angle: 195,
    key: "bridge",
    label: "The ESS → CLS Bridge",
    short: "Bridge",
    model: "M4",
    description: "Can the Cognitive-Logical System feel what the Emotional Somatic System is doing?",
  },
  {
    angle: 260,
    key: "restoration",
    label: "Mobilisation / Restoration",
    short: "Restoration",
    model: "M3",
    descriptionA: "The body completes its restoration sequence. Stress hormones metabolise. Muscles release. The nervous system returns to physiological baseline.",
    descriptionB: "The restoration sequence does not complete. Cognitive override. Activation remains unresolved.",
  },
];

// Map angles to 0-1 progress values
const STAGE_PROGRESS = STAGES.map(s => s.angle / 360);
// Progress for "cycle complete" (Path A closes at 360°)
const PROGRESS_COMPLETE = 1.0;
// Progress where Path B's arc stops (gap from ~320° to 360°)
const PROGRESS_B_STOP = 320 / 360;

// ─── ANIMATION TIMING ───────────────────────────────────
const ARC_DEGREES_PER_MS = 0.06; // Smooth arc speed
const STAGE_PAUSE_MS = 2200;

// ─── SVG HELPERS ────────────────────────────────────────
function toXY(angleDeg, r = R) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

function arcPath(startDeg, endDeg, r = R) {
  if (endDeg - startDeg < 0.1) return "";
  const start = toXY(startDeg, r);
  const end = toXY(endDeg, r);
  const sweep = endDeg - startDeg;
  const largeArc = sweep > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

// ─── COMPONENT ──────────────────────────────────────────
export default function ESCCycleDiagramV3() {
  // State machine
  const [phase, setPhase] = useState("idle");
  // idle | animating | paused | bridge | completing-a | completing-b | done-a | done-b
  const [currentAngle, setCurrentAngle] = useState(0);
  const [activeStageIdx, setActiveStageIdx] = useState(-1);
  const [bridgeChoice, setBridgeChoice] = useState(null); // "open" | "closed"
  const [randomEmotion, setRandomEmotion] = useState(null);
  const [incompleteCount, setIncompleteCount] = useState(0); // How many Path B cycles
  const [showEmotionFlash, setShowEmotionFlash] = useState(false);

  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const pauseTimerRef = useRef(null);
  const targetAngleRef = useRef(0);

  // Pick random emotion
  const pickEmotion = useCallback(() => {
    const e = EMOTIONS[Math.floor(Math.random() * EMOTIONS.length)];
    setRandomEmotion(e);
    return e;
  }, []);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  // ─── Animation loop ─────────────────────────────────
  const animate = useCallback((timestamp) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const dt = timestamp - lastTimeRef.current;
    lastTimeRef.current = timestamp;

    setCurrentAngle(prev => {
      const target = targetAngleRef.current;
      const increment = ARC_DEGREES_PER_MS * dt;
      const next = Math.min(prev + increment, target);

      // Check if we've reached the target
      if (next >= target) {
        return target;
      }
      return next;
    });

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  // Watch currentAngle to detect when we reach targets
  useEffect(() => {
    const target = targetAngleRef.current;
    if (phase === "animating" && currentAngle >= target) {
      // We reached the next stage target — pause
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;

      // Find which stage we just reached
      const stageIdx = STAGES.findIndex(s => s.angle === target);
      if (stageIdx >= 0) {
        setActiveStageIdx(stageIdx);
        const stage = STAGES[stageIdx];

        if (stage.key === "bridge") {
          // Bridge — wait for user decision
          setPhase("bridge");
        } else if (stage.key === "signal") {
          // Signal — flash emotion
          const emotion = pickEmotion();
          setShowEmotionFlash(true);
          setPhase("paused");
          pauseTimerRef.current = setTimeout(() => {
            setShowEmotionFlash(false);
            advanceToNextStage(stageIdx);
          }, STAGE_PAUSE_MS + 500); // Extra time for emotion flash
        } else {
          // Normal stage — pause then auto-advance
          setPhase("paused");
          pauseTimerRef.current = setTimeout(() => {
            advanceToNextStage(stageIdx);
          }, STAGE_PAUSE_MS);
        }
      }
    }
  }, [currentAngle, phase]);

  // Watch for completion phases
  useEffect(() => {
    if (phase === "completing-a" && currentAngle >= 359.5) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
      setPhase("done-a");
      setActiveStageIdx(-1);
    }
    if (phase === "completing-b" && currentAngle >= PROGRESS_B_STOP * 360) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
      setPhase("done-b");
      setIncompleteCount(prev => prev + 1);
      setActiveStageIdx(-1);
    }
  }, [currentAngle, phase]);

  const advanceToNextStage = useCallback((currentIdx) => {
    const nextIdx = currentIdx + 1;
    if (nextIdx < STAGES.length) {
      targetAngleRef.current = STAGES[nextIdx].angle;
      setPhase("animating");
      lastTimeRef.current = null;
      rafRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  // ─── User actions ───────────────────────────────────
  const handleStart = () => {
    setPhase("animating");
    setCurrentAngle(0);
    setActiveStageIdx(0);
    setBridgeChoice(null);
    setRandomEmotion(null);
    setShowEmotionFlash(false);

    // Animate to first real stage (Evaluation)
    targetAngleRef.current = STAGES[1].angle;
    lastTimeRef.current = null;

    // Brief pause at baseline first
    pauseTimerRef.current = setTimeout(() => {
      rafRef.current = requestAnimationFrame(animate);
    }, 800);
  };

  const handleBridgeChoice = (choice) => {
    setBridgeChoice(choice);

    if (choice === "open") {
      // Path A: continue through restoration to completion
      setPhase("completing-a");
      targetAngleRef.current = 359.5;
      lastTimeRef.current = null;
      rafRef.current = requestAnimationFrame(animate);
    } else {
      // Path B: continue to 320° in orange, then stop (gap)
      setPhase("completing-b");
      targetAngleRef.current = PROGRESS_B_STOP * 360;
      lastTimeRef.current = null;
      rafRef.current = requestAnimationFrame(animate);
    }
  };

  const handleReset = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    setPhase("idle");
    setCurrentAngle(0);
    setActiveStageIdx(-1);
    setBridgeChoice(null);
    setRandomEmotion(null);
    setShowEmotionFlash(false);
    // incompleteCount persists — the damage accumulates
  };

  const handleFullReset = () => {
    handleReset();
    setIncompleteCount(0);
  };

  // ─── Derived state ──────────────────────────────────
  const isRunning = phase !== "idle" && phase !== "done-a" && phase !== "done-b";
  const bridgeAngle = STAGES.find(s => s.key === "bridge").angle;

  // Which stages have been reached
  const reachedStages = STAGES.filter(s => currentAngle >= s.angle);

  // Current stage info text
  const getInfoText = () => {
    if (phase === "idle") {
      if (incompleteCount > 0) {
        return {
          title: "Elevated Baseline",
          subtitle: `${incompleteCount} incomplete cycle${incompleteCount > 1 ? "s" : ""}. The floor has risen.`,
        };
      }
      return { title: null, subtitle: "Press Start to begin the cycle." };
    }
    if (phase === "done-a") {
      return {
        title: "The cycle completes.",
        subtitle: "The body returns to physiological baseline. Stress hormones metabolise. Muscles release.",
      };
    }
    if (phase === "done-b") {
      return {
        title: "The cycle does not complete.",
        subtitle: "Activation remains unresolved. The baseline elevates. The floor rises.",
      };
    }
    if (phase === "bridge") {
      return {
        title: "The ESS → CLS Bridge",
        subtitle: "Can the Cognitive-Logical System feel what the Emotional Somatic System is doing?",
      };
    }

    const stage = STAGES[activeStageIdx];
    if (!stage) return { title: null, subtitle: null };

    if (stage.key === "signal" && randomEmotion) {
      return {
        title: `Signal: ${randomEmotion.name}`,
        subtitle: `${randomEmotion.signal} — ${randomEmotion.bodyResponse.split('—')[0].trim().toLowerCase()}`,
      };
    }

    if (stage.key === "restoration") {
      return {
        title: stage.label,
        subtitle: bridgeChoice === "open" ? stage.descriptionA : stage.descriptionB,
      };
    }

    return {
      title: stage.label,
      subtitle: stage.description,
    };
  };

  const info = getInfoText();

  // ─── Render ─────────────────────────────────────────
  const containerStyle = {
    background: BG.primary,
    border: `1px solid ${BORDER.default}`,
    borderRadius: 12,
    padding: "32px 24px",
    fontFamily: FONT.display,
    maxWidth: 540,
    margin: "0 auto",
  };

  // Elevated baseline ring thickness
  const elevatedRingWidth = Math.min(incompleteCount * 12, 60);
  const elevatedRingR = R - 8 - elevatedRingWidth / 2;

  return (
    <div style={containerStyle}>
      {/* Inline keyframes */}
      <style>{`
        @keyframes esc-pulse {
          0%, 100% { r: ${DOT_R_ACTIVE}; opacity: 1; }
          50% { r: ${DOT_R_ACTIVE + 3}; opacity: 0.7; }
        }
        @keyframes esc-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes esc-ring-appear {
          from { opacity: 0; stroke-width: 0; }
          to { opacity: 0.2; stroke-width: ${elevatedRingWidth}; }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <h3 style={{
          fontSize: 16, fontWeight: 700, color: TEXT.primary,
          letterSpacing: "-0.01em", marginBottom: 6,
          textTransform: "uppercase", fontFamily: FONT.mono,
        }}>
          The Cycle
        </h3>
        <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.6, maxWidth: 400, margin: "0 auto" }}>
          The same biological sequence runs in every human body. Whether it completes determines everything that follows.
        </p>
      </div>

      {/* SVG Circle */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
        <svg
          width={SIZE}
          height={SIZE + 50}
          viewBox={`0 0 ${SIZE} ${SIZE + 50}`}
          style={{ overflow: "visible" }}
        >
          {/* Background circle */}
          <circle cx={CX} cy={CY} r={R} fill="none" stroke={BG_RING} strokeWidth={STROKE} />

          {/* Elevated baseline ring (from previous incomplete cycles) */}
          {incompleteCount > 0 && (
            <circle
              cx={CX} cy={CY}
              r={elevatedRingR}
              fill="none"
              stroke={PATH_B_COLOR}
              strokeWidth={elevatedRingWidth}
              opacity={Math.min(0.12 + incompleteCount * 0.06, 0.35)}
            />
          )}

          {/* Animated arc — Path A portion (blue, from 0 to bridge or full) */}
          {currentAngle > 0 && (
            <path
              d={arcPath(0, Math.min(currentAngle, bridgeChoice === "closed" ? bridgeAngle : 360))}
              fill="none"
              stroke={PATH_A_COLOR}
              strokeWidth={STROKE}
              strokeLinecap="round"
              opacity={0.85}
            />
          )}

          {/* Animated arc — Path B portion (orange, from bridge onward if closed) */}
          {bridgeChoice === "closed" && currentAngle > bridgeAngle && (
            <path
              d={arcPath(bridgeAngle, currentAngle)}
              fill="none"
              stroke={PATH_B_COLOR}
              strokeWidth={STROKE}
              strokeLinecap="round"
              opacity={0.85}
            />
          )}

          {/* Path B gap indicator (dashed) */}
          {phase === "done-b" && (
            <path
              d={arcPath(PROGRESS_B_STOP * 360, 358)}
              fill="none"
              stroke={PATH_B_COLOR}
              strokeWidth={2}
              strokeDasharray="5,8"
              opacity={0.35}
            />
          )}

          {/* Done-A glow */}
          {phase === "done-a" && (
            <circle
              cx={CX} cy={CY} r={R}
              fill="none"
              stroke={PATH_A_COLOR}
              strokeWidth={2}
              opacity={0.3}
              style={{ filter: `drop-shadow(0 0 8px ${PATH_A_COLOR})` }}
            />
          )}

          {/* Stage dots */}
          {STAGES.map((s, i) => {
            const p = toXY(s.angle);
            const reached = currentAngle >= s.angle;
            const isActive = activeStageIdx === i && isRunning;
            const isBridge = s.key === "bridge";
            const dotSize = isBridge ? DOT_R_BRIDGE : (isActive ? DOT_R_ACTIVE : DOT_R);

            // Color logic
            let fillColor = "#fff";
            let strokeColor = PATH_A_COLOR;
            if (!reached && phase !== "idle") {
              // Not yet reached — grey
              fillColor = "transparent";
              strokeColor = hexToRgba(SPECTRUM.slate, 0.2);
            } else if (reached && bridgeChoice === "closed" && s.angle >= bridgeAngle) {
              // Past bridge on Path B
              strokeColor = PATH_B_COLOR;
              if (isBridge) fillColor = PATH_B_COLOR;
            } else if (isBridge && bridgeChoice === "open") {
              fillColor = PATH_A_COLOR;
              strokeColor = PATH_A_COLOR;
            } else if (isBridge && phase === "bridge") {
              fillColor = hexToRgba(SPECTRUM.slate, 0.3);
              strokeColor = TEXT.muted;
            }

            // In idle state, show all dots as outline
            if (phase === "idle") {
              fillColor = i === 0 ? "#fff" : "transparent";
              strokeColor = hexToRgba(SPECTRUM.slate, 0.25);
            }

            return (
              <g key={i}>
                {/* Pulse ring for active stage */}
                {isActive && (
                  <circle
                    cx={p.x} cy={p.y}
                    r={dotSize + 4}
                    fill="none"
                    stroke={bridgeChoice === "closed" && s.angle >= bridgeAngle ? PATH_B_COLOR : PATH_A_COLOR}
                    strokeWidth={1.5}
                    opacity={0.4}
                    style={{ animation: "esc-pulse 1.2s ease-in-out infinite" }}
                  />
                )}
                <circle
                  cx={p.x} cy={p.y}
                  r={dotSize}
                  fill={fillColor}
                  stroke={strokeColor}
                  strokeWidth={2}
                  style={{ transition: "all 0.3s ease" }}
                />
              </g>
            );
          })}

          {/* Stage labels (only for reached stages) */}
          {STAGES.map((s, i) => {
            const reached = currentAngle >= s.angle || phase === "idle";
            if (!reached) return null;

            const labelR = R + 28;
            const p = toXY(s.angle, labelR);
            const isRight = s.angle > 10 && s.angle < 180;
            const isLeft = s.angle > 180 && s.angle < 350;
            const isActive = activeStageIdx === i && isRunning;

            return (
              <text
                key={i}
                x={p.x}
                y={p.y}
                textAnchor={isRight ? "start" : isLeft ? "end" : "middle"}
                fontSize={11}
                fill={isActive ? TEXT.primary : TEXT.muted}
                fontFamily={FONT.mono}
                opacity={phase === "idle" ? 0.4 : 1}
                style={{ transition: "all 0.4s ease" }}
              >
                {s.short}
                {s.model && (
                  <tspan
                    fontSize={9}
                    fill={hexToRgba(
                      bridgeChoice === "closed" && s.angle >= bridgeAngle ? PATH_B_COLOR : PATH_A_COLOR,
                      0.7
                    )}
                  >
                    {` (${s.model})`}
                  </tspan>
                )}
              </text>
            );
          })}

          {/* ESS → CLS Bridge label below circle */}
          {(phase !== "idle" && activeStageIdx >= 4) && (
            <g>
              <line
                x1={CX} y1={CY + R + 14}
                x2={CX} y2={CY + R + 30}
                stroke={bridgeChoice === "closed" ? PATH_B_COLOR : bridgeChoice === "open" ? PATH_A_COLOR : TEXT.hint}
                strokeWidth={1.5}
                opacity={0.5}
              />
              <text
                x={CX} y={CY + R + 44}
                textAnchor="middle"
                fontSize={10}
                fill={TEXT.muted}
                fontFamily={FONT.mono}
              >
                {bridgeChoice === "open" ? "ESS → CLS Bridge" :
                 bridgeChoice === "closed" ? "Bridge unavailable" :
                 "ESS → CLS Bridge"}
              </text>
            </g>
          )}

          {/* Direction arrow */}
          {currentAngle > 10 && currentAngle < 350 && (
            (() => {
              const arrowAngle = Math.min(currentAngle + 8, 358);
              const ap = toXY(arrowAngle);
              const rad = ((arrowAngle - 90) * Math.PI) / 180;
              const tx = Math.cos(rad);
              const ty = Math.sin(rad);
              const nx = -ty;
              const ny = tx;
              return (
                <polygon
                  points={`${ap.x + tx * 5},${ap.y + ty * 5} ${ap.x + nx * 3},${ap.y + ny * 3} ${ap.x - nx * 3},${ap.y - ny * 3}`}
                  fill={currentAngle > bridgeAngle && bridgeChoice === "closed" ? PATH_B_COLOR : PATH_A_COLOR}
                  opacity={0.7}
                />
              );
            })()
          )}
        </svg>
      </div>

      {/* Emotion flash overlay */}
      {showEmotionFlash && randomEmotion && (
        <div style={{
          textAlign: "center",
          marginBottom: 12,
          animation: "esc-glow 0.8s ease-in-out infinite",
        }}>
          <span style={{
            fontFamily: FONT.mono,
            fontSize: 18,
            fontWeight: 700,
            color: PATH_A_COLOR,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textShadow: `0 0 16px ${hexToRgba(PATH_A_COLOR, 0.4)}`,
          }}>
            {randomEmotion.name}
          </span>
          <div style={{ fontSize: 11, color: TEXT.muted, marginTop: 2, fontFamily: FONT.mono }}>
            {randomEmotion.signal}
          </div>
        </div>
      )}

      {/* Info panel */}
      <div style={{
        minHeight: 80,
        padding: "16px 20px",
        borderRadius: 8,
        background: hexToRgba(STAGE_BLUE, 0.04),
        border: `1px solid ${hexToRgba(STAGE_BLUE, 0.1)}`,
        textAlign: "center",
        transition: "all 0.3s ease",
        marginBottom: 16,
      }}>
        {info.title && (
          <div style={{
            fontSize: 14, fontWeight: 600,
            color: phase === "done-b" ? PATH_B_COLOR : phase === "done-a" ? PATH_A_COLOR : TEXT.primary,
            marginBottom: 6, fontFamily: FONT.mono,
          }}>
            {info.title}
          </div>
        )}
        {info.subtitle && (
          <div style={{ fontSize: 12, color: TEXT.secondary, lineHeight: 1.65 }}>
            {info.subtitle}
          </div>
        )}

        {/* Bridge choice buttons */}
        {phase === "bridge" && (
          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 14 }}>
            <button
              onClick={() => handleBridgeChoice("open")}
              style={{
                padding: "8px 20px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                cursor: "pointer",
                border: `1px solid ${hexToRgba(PATH_A_COLOR, 0.5)}`,
                background: hexToRgba(PATH_A_COLOR, 0.1),
                color: PATH_A_COLOR,
                transition: "all 0.2s ease",
                letterSpacing: "0.02em",
              }}
            >
              Bridge Open
            </button>
            <button
              onClick={() => handleBridgeChoice("closed")}
              style={{
                padding: "8px 20px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                cursor: "pointer",
                border: `1px solid ${hexToRgba(PATH_B_COLOR, 0.5)}`,
                background: hexToRgba(PATH_B_COLOR, 0.1),
                color: PATH_B_COLOR,
                transition: "all 0.2s ease",
                letterSpacing: "0.02em",
              }}
            >
              Bridge Closed
            </button>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div style={{ textAlign: "center" }}>
        {phase === "idle" && (
          <button
            onClick={handleStart}
            style={{
              padding: "10px 32px",
              borderRadius: 24,
              fontSize: 13,
              fontWeight: 600,
              fontFamily: FONT.mono,
              cursor: "pointer",
              border: `1px solid ${hexToRgba(incompleteCount > 0 ? PATH_B_COLOR : PATH_A_COLOR, 0.4)}`,
              background: hexToRgba(incompleteCount > 0 ? PATH_B_COLOR : PATH_A_COLOR, 0.1),
              color: incompleteCount > 0 ? PATH_B_COLOR : PATH_A_COLOR,
              letterSpacing: "0.04em",
              transition: "all 0.2s ease",
            }}
          >
            {incompleteCount > 0 ? "Run the cycle again" : "Start"}
          </button>
        )}

        {(phase === "done-a" || phase === "done-b") && (
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            <button
              onClick={handleReset}
              style={{
                padding: "8px 24px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
                fontFamily: FONT.mono,
                cursor: "pointer",
                border: `1px solid ${hexToRgba(SPECTRUM.slate, 0.3)}`,
                background: "transparent",
                color: TEXT.muted,
                letterSpacing: "0.02em",
              }}
            >
              {phase === "done-b" ? "Run again" : "Reset"}
            </button>
            {incompleteCount > 0 && (
              <button
                onClick={handleFullReset}
                style={{
                  padding: "8px 24px",
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: FONT.mono,
                  cursor: "pointer",
                  border: `1px solid ${hexToRgba(PATH_A_COLOR, 0.3)}`,
                  background: "transparent",
                  color: PATH_A_COLOR,
                  letterSpacing: "0.02em",
                }}
              >
                Return to baseline
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
