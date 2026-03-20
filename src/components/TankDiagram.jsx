"use client";

import { useReducer, useRef, useCallback, useEffect, useState } from "react";
import {
  FONT, TEXT, BG, BORDER, hexToRgba,
} from "@/src/styles/tokens";

// ─── CANONICAL MODE COLORS (not PATTERN blues) ──────────────
const TANK_MODES = [
  { key: "A", name: "Connection",  hex: "#14b8a6", center: 0.125 },
  { key: "B", name: "Protection",  hex: "#eab308", center: 0.375 },
  { key: "C", name: "Control",     hex: "#f97316", center: 0.625 },
  { key: "D", name: "Domination",  hex: "#ec4899", center: 0.875 },
];

const BAR_GRADIENT = `linear-gradient(90deg, ${TANK_MODES[0].hex} 0%, ${TANK_MODES[0].hex} 20%, ${TANK_MODES[1].hex} 35%, ${TANK_MODES[1].hex} 45%, ${TANK_MODES[2].hex} 55%, ${TANK_MODES[2].hex} 70%, ${TANK_MODES[3].hex} 85%, ${TANK_MODES[3].hex} 100%)`;

const MAGNET_RADIUS = 0.04;
const TANK_HEIGHT = 220;
const TANK_HEIGHT_MOBILE = 160;
const FILL_RATE = 0.0008;
const DRAIN_RATE = 0.0004;
const DEBRIS_RATE = 0.00008;
const CEILING = 0.92;

// ─── RETURN PANEL DATA ──────────────────────────────────────
const RETURN_DATA = [
  {
    returns: "The moment completing. Contact ending naturally. The resonance settling.",
    stuck: "The absorption continues. No natural ending point. The world is other people\u2019s states.",
  },
  {
    returns: "The threat passing. The somatic cycle completing. The body discharging what it mobilised.",
    stuck: "The threat never passes. The alarm stays on. The cycle never completes.",
  },
  {
    returns: "The situation resolving. Cognition standing down. The gut coming back online.",
    stuck: "The situation never fully resolves. Management becomes identity.",
  },
  {
    returns: "Cannot return from inside. Requires the external environment to change.",
    stuck: "The fill reaches the ceiling. The stopping mechanism is closed. The next thing in the field becomes the next threat.",
  },
];

// ─── DRAIN WIDTHS (Connection widest, Domination narrowest) ─
const DRAIN_WIDTHS = [0.6, 0.45, 0.3, 0.15];

// ─── HELPERS ────────────────────────────────────────────────

function getModeIndex(pos) {
  if (pos < 0.25) return 0;
  if (pos < 0.5) return 1;
  if (pos < 0.75) return 2;
  return 3;
}

function snapToCenter(pos) {
  for (const mode of TANK_MODES) {
    if (Math.abs(pos - mode.center) < MAGNET_RADIUS) return mode.center;
  }
  return pos;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

// ─── REDUCER ────────────────────────────────────────────────

const initialState = {
  isStuck: false,
  needlePosition: 0.125,
  activeMode: 0,
  fills: [0, 0, 0, 0],
  debris: [0, 0, 0, 0],
  lockedTanks: [false, false, false, false],
  selfRegPresses: [0, 0, 0, 0],
  involvingOthersPresses: [0, 0, 0, 0],
  washoutActive: null, // null | { mode, type, phase, startTime }
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_STUCK":
      return { ...state, isStuck: action.value };
    case "SET_NEEDLE": {
      const pos = snapToCenter(clamp(action.value, 0, 1));
      return { ...state, needlePosition: pos, activeMode: getModeIndex(pos) };
    }
    case "SET_FILLS":
      return { ...state, fills: action.value };
    case "SET_DEBRIS":
      return { ...state, debris: action.value };
    case "LOCK_TANK":
      return {
        ...state,
        lockedTanks: state.lockedTanks.map((v, i) => i === action.index ? true : v),
      };
    case "ESCALATE": {
      const nextMode = action.nextMode;
      const nextCenter = TANK_MODES[nextMode].center;
      return {
        ...state,
        activeMode: nextMode,
        needlePosition: nextCenter,
      };
    }
    case "START_WASHOUT":
      return { ...state, washoutActive: action.value };
    case "END_WASHOUT":
      return { ...state, washoutActive: null };
    case "INC_SELF_REG":
      return {
        ...state,
        selfRegPresses: state.selfRegPresses.map((v, i) =>
          i === action.index ? v + 1 : v
        ),
      };
    case "INC_INVOLVING_OTHERS":
      return {
        ...state,
        involvingOthersPresses: state.involvingOthersPresses.map((v, i) =>
          i === action.index ? v + 1 : v
        ),
      };
    case "RESET":
      return { ...initialState, isStuck: state.isStuck };
    default:
      return state;
  }
}

// ─── COMPONENT ──────────────────────────────────────────────

export default function TankDiagram() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isMobile, setIsMobile] = useState(false);
  const barRef = useRef(null);
  const isDragging = useRef(false);
  const rafRef = useRef(null);
  const prevTimeRef = useRef(null);
  const fillTargetsRef = useRef([0, 0, 0, 0]);
  const fillsRef = useRef([0, 0, 0, 0]);
  const debrisRef = useRef([0, 0, 0, 0]);
  const tankDivsRef = useRef([null, null, null, null]);
  const debrisDivsRef = useRef([null, null, null, null]);
  const lockedRef = useRef([false, false, false, false]);
  const washoutRef = useRef(null);
  const washoutOpacityRef = useRef([1, 1, 1, 1]);
  const tankContainerRef = useRef(null);

  // Mobile check
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Sync refs from state
  useEffect(() => {
    lockedRef.current = state.lockedTanks;
  }, [state.lockedTanks]);

  useEffect(() => {
    washoutRef.current = state.washoutActive;
  }, [state.washoutActive]);

  // ─── Fill targets based on needle position ────────────
  useEffect(() => {
    const targets = [0, 0, 0, 0];
    if (!state.isStuck) {
      // Fluid: only active mode fills
      targets[state.activeMode] = 0.6;
    } else {
      // Stuck: active mode fills toward ceiling
      if (!lockedRef.current[state.activeMode]) {
        targets[state.activeMode] = CEILING;
      }
    }
    fillTargetsRef.current = targets;
  }, [state.activeMode, state.isStuck]);

  // ─── RAF animation loop ───────────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tick = (time) => {
      if (prevTimeRef.current === null) {
        prevTimeRef.current = time;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const dt = Math.min(time - prevTimeRef.current, 50); // cap at 50ms
      prevTimeRef.current = time;

      const targets = fillTargetsRef.current;
      const fills = fillsRef.current;
      const debris = debrisRef.current;
      const locked = lockedRef.current;
      const washout = washoutRef.current;
      let needsStateUpdate = false;
      let escalateMode = -1;

      for (let i = 0; i < 4; i++) {
        if (locked[i]) continue;

        const target = targets[i];
        const current = fills[i];
        const floor = debris[i];

        if (prefersReduced) {
          fills[i] = target;
        } else {
          if (current < target) {
            // Fill rising
            const rate = FILL_RATE * dt;
            const noise = 1 + (Math.random() - 0.5) * 0.15;
            fills[i] = Math.min(target, current + rate * noise);
          } else if (current > Math.max(target, floor)) {
            // Draining (fluid mode only)
            if (!state.isStuck) {
              const rate = DRAIN_RATE * dt * DRAIN_WIDTHS[i] * 2;
              fills[i] = Math.max(floor, current - rate);
            }
          }
        }

        // Debris accumulation in stuck mode
        if (state.isStuck && fills[i] > 0.05) {
          debris[i] = Math.min(fills[i] * 0.8, debris[i] + DEBRIS_RATE * dt);
        }

        // Check ceiling hit for escalation
        if (state.isStuck && fills[i] >= CEILING && i < 3) {
          escalateMode = i;
        }
      }

      // Update DOM directly (avoid React re-renders per frame)
      const tankH = isMobile ? TANK_HEIGHT_MOBILE : TANK_HEIGHT;
      for (let i = 0; i < 4; i++) {
        const fillDiv = tankDivsRef.current[i];
        const debrisDiv = debrisDivsRef.current[i];
        if (fillDiv) {
          const h = fills[i] * tankH;
          fillDiv.style.height = `${h}px`;
          // Washout opacity
          const wo = washout;
          if (wo && wo.mode === i && wo.phase === "transparent") {
            // Handled by washout animation
          } else {
            fillDiv.style.opacity = washoutOpacityRef.current[i];
          }
        }
        if (debrisDiv) {
          debrisDiv.style.height = `${debris[i] * tankH}px`;
        }
      }

      // Handle escalation
      if (escalateMode >= 0 && !locked[escalateMode]) {
        dispatch({ type: "LOCK_TANK", index: escalateMode });
        fills[escalateMode] = CEILING;
        // Flash effect
        const container = tankContainerRef.current;
        if (container) {
          const tankEls = container.children;
          if (tankEls[escalateMode]) {
            tankEls[escalateMode].style.outline = `2px solid ${TANK_MODES[escalateMode].hex}`;
            setTimeout(() => {
              if (tankEls[escalateMode]) {
                tankEls[escalateMode].style.outline = "none";
              }
            }, 300);
          }
        }
        setTimeout(() => {
          dispatch({ type: "ESCALATE", nextMode: escalateMode + 1 });
        }, 300);
      }

      fillsRef.current = fills;
      debrisRef.current = debris;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      prevTimeRef.current = null;
    };
  }, [state.isStuck, isMobile]);

  // ─── Washout animation ────────────────────────────────
  const runWashout = useCallback((mode, type) => {
    if (state.washoutActive) return;

    const isSelf = type === "self";
    const pressCount = isSelf
      ? state.selfRegPresses[mode]
      : state.involvingOthersPresses[mode];

    // Tolerance: each press is less effective
    const toleranceFactor = Math.max(0.2, 1 - pressCount * 0.2);

    const fadeOutDuration = isSelf ? 400 : 300;
    const holdDuration = isSelf ? 800 : 1200;
    const fadeInDuration = isSelf ? 2500 : 3000;

    const minOpacity = isSelf
      ? Math.max(0.15, 0.05 / toleranceFactor)
      : Math.max(0.05, 0.02 / toleranceFactor);

    const fillBefore = fillsRef.current[mode];

    dispatch({
      type: "START_WASHOUT",
      value: { mode, type, phase: "transparent", startTime: performance.now() },
    });

    if (isSelf) {
      dispatch({ type: "INC_SELF_REG", index: mode });
    } else {
      dispatch({ type: "INC_INVOLVING_OTHERS", index: mode });
    }

    // Phase 1: Fade out
    const fadeOut = (start) => {
      const elapsed = performance.now() - start;
      const progress = Math.min(elapsed / fadeOutDuration, 1);
      washoutOpacityRef.current[mode] = 1 - (1 - minOpacity) * progress;
      if (progress < 1) {
        requestAnimationFrame(() => fadeOut(start));
      } else {
        // Phase 2: Hold
        setTimeout(() => {
          // Phase 3: Fade back in
          const fadeIn = (start2) => {
            const elapsed2 = performance.now() - start2;
            const progress2 = Math.min(elapsed2 / fadeInDuration, 1);
            washoutOpacityRef.current[mode] = minOpacity + (1 - minOpacity) * progress2;

            if (progress2 < 1) {
              requestAnimationFrame(() => fadeIn(start2));
            } else {
              washoutOpacityRef.current[mode] = 1;
              // After involving others: fill returns higher
              if (!isSelf) {
                const shameDebris = 0.04 * (1 + pressCount * 0.3);
                debrisRef.current[mode] = Math.min(
                  CEILING * 0.85,
                  debrisRef.current[mode] + shameDebris
                );
                fillsRef.current[mode] = Math.min(
                  CEILING,
                  fillBefore + shameDebris
                );
              }
              dispatch({ type: "END_WASHOUT" });
            }
          };
          fadeIn(performance.now());
        }, holdDuration);
      }
    };
    fadeOut(performance.now());
  }, [state.washoutActive, state.selfRegPresses, state.involvingOthersPresses]);

  // ─── Pointer handlers ─────────────────────────────────
  const updatePosition = useCallback((clientX) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const raw = clamp((clientX - rect.left) / rect.width, 0, 1);
    dispatch({ type: "SET_NEEDLE", value: raw });
  }, []);

  const handlePointerDown = useCallback(
    (e) => {
      isDragging.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e) => {
      if (isDragging.current) updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleSliderKeyDown = useCallback((e) => {
    const step = 0.05;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      dispatch({
        type: "SET_NEEDLE",
        value: state.needlePosition + step,
      });
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      dispatch({
        type: "SET_NEEDLE",
        value: state.needlePosition - step,
      });
    } else if (e.key === "Home") {
      e.preventDefault();
      dispatch({ type: "SET_NEEDLE", value: 0.125 });
    } else if (e.key === "End") {
      e.preventDefault();
      dispatch({ type: "SET_NEEDLE", value: 0.875 });
    }
  }, [state.needlePosition]);

  const activeMode = TANK_MODES[state.activeMode];
  const tankH = isMobile ? TANK_HEIGHT_MOBILE : TANK_HEIGHT;
  const buttonsAvailable = state.isStuck && fillsRef.current[state.activeMode] > 0.3 && !state.washoutActive && !state.lockedTanks[state.activeMode];

  return (
    <div
      style={{
        margin: "32px 0",
        borderRadius: 12,
        border: `1px solid ${hexToRgba(activeMode.hex, 0.2)}`,
        background: state.isStuck
          ? hexToRgba(activeMode.hex, 0.02)
          : hexToRgba(activeMode.hex, 0.03),
        overflow: "hidden",
        transition: "border-color 300ms ease, background 300ms ease",
      }}
    >
      {/* ─── Header ────────────────────────────── */}
      <div
        style={{
          padding: "16px 20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {/* Badge */}
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            fontFamily: FONT.mono,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: activeMode.hex,
            padding: "3px 8px",
            borderRadius: 100,
            background: hexToRgba(activeMode.hex, 0.12),
            border: `1px solid ${hexToRgba(activeMode.hex, 0.25)}`,
            transition: "all 300ms ease",
          }}
        >
          {state.isStuck ? "Stuck Compass" : "Fluid Compass"}
        </span>

        {/* Toggle + Reset */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Fluid / Stuck toggle */}
          <div
            style={{
              display: "flex",
              borderRadius: 100,
              border: `1px solid ${BORDER.default}`,
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => dispatch({ type: "SET_STUCK", value: false })}
              aria-label="Show fluid compass"
              aria-pressed={!state.isStuck}
              style={{
                padding: "4px 12px",
                fontSize: 10,
                fontFamily: FONT.mono,
                fontWeight: 600,
                letterSpacing: "0.04em",
                border: "none",
                cursor: "pointer",
                transition: "all 200ms ease",
                background: !state.isStuck
                  ? hexToRgba(activeMode.hex, 0.15)
                  : "transparent",
                color: !state.isStuck ? activeMode.hex : TEXT.muted,
              }}
            >
              Fluid
            </button>
            <button
              onClick={() => dispatch({ type: "SET_STUCK", value: true })}
              aria-label="Show stuck compass"
              aria-pressed={state.isStuck}
              style={{
                padding: "4px 12px",
                fontSize: 10,
                fontFamily: FONT.mono,
                fontWeight: 600,
                letterSpacing: "0.04em",
                border: "none",
                borderLeft: `1px solid ${BORDER.default}`,
                cursor: "pointer",
                transition: "all 200ms ease",
                background: state.isStuck
                  ? hexToRgba(activeMode.hex, 0.15)
                  : "transparent",
                color: state.isStuck ? activeMode.hex : TEXT.muted,
              }}
            >
              Stuck
            </button>
          </div>

          {/* Reset */}
          <button
            onClick={() => {
              fillsRef.current = [0, 0, 0, 0];
              debrisRef.current = [0, 0, 0, 0];
              washoutOpacityRef.current = [1, 1, 1, 1];
              dispatch({ type: "RESET" });
            }}
            aria-label="Reset diagram"
            style={{
              padding: "4px 10px",
              fontSize: 10,
              fontFamily: FONT.mono,
              fontWeight: 500,
              letterSpacing: "0.04em",
              border: `1px solid ${BORDER.default}`,
              borderRadius: 6,
              background: "transparent",
              color: TEXT.muted,
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* ─── Tank Sections ────────────────────── */}
      <div style={{ padding: "16px 20px 0" }}>
        <div
          ref={tankContainerRef}
          style={{
            display: "flex",
            gap: 3,
            marginBottom: 4,
          }}
        >
          {TANK_MODES.map((mode, i) => {
            const isActive = state.activeMode === i;
            const isLocked = state.lockedTanks[i];
            return (
              <div
                key={mode.key}
                style={{
                  flex: 1,
                  height: tankH,
                  position: "relative",
                  borderRadius: "8px 8px 0 0",
                  border: `1px solid ${hexToRgba(
                    mode.hex,
                    isActive ? 0.4 : isLocked ? 0.3 : 0.12
                  )}`,
                  background: hexToRgba(mode.hex, isActive ? 0.06 : 0.02),
                  overflow: "hidden",
                  transition: "border-color 300ms ease, background 300ms ease",
                  opacity: isActive || isLocked ? 1 : 0.35,
                }}
              >
                {/* Ceiling line */}
                <div
                  style={{
                    position: "absolute",
                    top: `${(1 - CEILING) * 100}%`,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: hexToRgba(mode.hex, state.isStuck ? 0.4 : 0.12),
                    transition: "background 300ms ease",
                  }}
                />

                {/* Debris layer (darker, at bottom) */}
                <div
                  ref={(el) => { debrisDivsRef.current[i] = el; }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 0,
                    background: hexToRgba(mode.hex, 0.35),
                    transition: "none",
                    zIndex: 1,
                  }}
                />

                {/* Fill level */}
                <div
                  ref={(el) => { tankDivsRef.current[i] = el; }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 0,
                    background: hexToRgba(mode.hex, 0.2),
                    transition: "none",
                    zIndex: 2,
                  }}
                />

                {/* Locked overlay */}
                {isLocked && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: hexToRgba(mode.hex, 0.08),
                      zIndex: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 9,
                        fontFamily: FONT.mono,
                        fontWeight: 600,
                        color: hexToRgba(mode.hex, 0.5),
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      Locked
                    </span>
                  </div>
                )}

                {/* Drain indicator at bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 4,
                  }}
                >
                  <svg
                    width={Math.round(DRAIN_WIDTHS[i] * 40)}
                    height="10"
                    viewBox={`0 0 ${Math.round(DRAIN_WIDTHS[i] * 40)} 10`}
                  >
                    <polygon
                      points={`0,0 ${Math.round(DRAIN_WIDTHS[i] * 40)},0 ${Math.round(DRAIN_WIDTHS[i] * 20)},8`}
                      fill={hexToRgba(
                        mode.hex,
                        state.isStuck ? 0.08 : 0.3
                      )}
                    />
                    {/* Drain "door" line when stuck */}
                    {state.isStuck && (
                      <line
                        x1="0"
                        y1="0"
                        x2={Math.round(DRAIN_WIDTHS[i] * 40)}
                        y2="0"
                        stroke={hexToRgba(mode.hex, 0.5)}
                        strokeWidth="2"
                      />
                    )}
                  </svg>
                </div>

                {/* Mode label at top */}
                <div
                  style={{
                    position: "absolute",
                    top: 6,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    fontSize: 9,
                    fontFamily: FONT.mono,
                    fontWeight: 600,
                    color: hexToRgba(mode.hex, isActive ? 0.8 : 0.4),
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    zIndex: 5,
                    transition: "color 300ms ease",
                  }}
                >
                  {mode.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Gradient Bar (below tanks) ──────── */}
        <div
          role="slider"
          tabIndex={0}
          aria-label="Four-mode gradient position"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(state.needlePosition * 100)}
          aria-valuetext={`${activeMode.name} mode`}
          style={{
            padding: "15px 0",
            margin: "-15px 0",
            cursor: "pointer",
            touchAction: "none",
            userSelect: "none",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onKeyDown={handleSliderKeyDown}
        >
          <div
            ref={barRef}
            style={{
              position: "relative",
              height: 14,
              borderRadius: 7,
              background: BAR_GRADIENT,
              pointerEvents: "none",
            }}
          >
            {/* Zone dividers */}
            {[0.25, 0.5, 0.75].map((pos) => (
              <div
                key={pos}
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  width: 3,
                  left: `${pos * 100}%`,
                  transform: "translateX(-50%)",
                  backgroundColor: hexToRgba("#000000", 0.6),
                }}
              />
            ))}
            {/* Needle */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: `${state.needlePosition * 100}%`,
                transform: "translate(-50%, -50%)",
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: BG.primary,
                border: `3px solid ${activeMode.hex}`,
                boxShadow: state.isStuck
                  ? "none"
                  : `0 0 16px ${activeMode.hex}80`,
                transition:
                  "border-color 200ms ease, box-shadow 200ms ease",
              }}
            />
          </div>
        </div>

        {/* Mode labels below bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 6,
            padding: "0 2px",
          }}
        >
          {TANK_MODES.map((mode, i) => (
            <span
              key={mode.key}
              style={{
                width: "25%",
                textAlign: "center",
                fontSize: 11,
                fontFamily: FONT.mono,
                fontWeight: state.activeMode === i ? 700 : 400,
                color: mode.hex,
                opacity: state.activeMode === i ? 1 : 0.35,
                transition: "opacity 200ms ease",
              }}
            >
              {mode.name}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Regulation Buttons ───────────────── */}
      {buttonsAvailable && (
        <div
          style={{
            padding: "12px 20px 0",
            display: "flex",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <RegulationButton
            label="Self Regulation"
            color={activeMode.hex}
            pressCount={state.selfRegPresses[state.activeMode]}
            onPress={() => runWashout(state.activeMode, "self")}
          />
          <RegulationButton
            label="Involving Others"
            color={activeMode.hex}
            pressCount={state.involvingOthersPresses[state.activeMode]}
            onPress={() => runWashout(state.activeMode, "others")}
          />
        </div>
      )}

      {/* ─── Return Panel ─────────────────────── */}
      <div style={{ padding: "16px 20px 20px" }}>
        <ReturnPanel
          mode={state.activeMode}
          isStuck={state.isStuck}
          color={activeMode.hex}
        />
      </div>
    </div>
  );
}

// ─── REGULATION BUTTON ──────────────────────────────────────

function RegulationButton({ label, color, pressCount, onPress }) {
  const effectiveness = Math.max(0.3, 1 - pressCount * 0.15);
  return (
    <button
      onClick={onPress}
      aria-label={`${label} (press ${pressCount + 1})`}
      style={{
        padding: "6px 14px",
        fontSize: 10,
        fontFamily: FONT.mono,
        fontWeight: 600,
        letterSpacing: "0.04em",
        border: `1px solid ${hexToRgba(color, 0.35)}`,
        borderRadius: 6,
        background: hexToRgba(color, 0.08),
        color: color,
        cursor: "pointer",
        opacity: effectiveness,
        transition: "all 200ms ease",
      }}
    >
      {label}
    </button>
  );
}

// ─── RETURN PANEL ───────────────────────────────────────────

function ReturnPanel({ mode, isStuck, color }) {
  const data = RETURN_DATA[mode];
  const modeName = TANK_MODES[mode].name;

  return (
    <div
      style={{
        background: hexToRgba(color, 0.04),
        border: `1px solid ${hexToRgba(color, 0.15)}`,
        borderRadius: 8,
        padding: "14px 16px",
        transition: "all 300ms ease",
      }}
    >
      {/* Returns to baseline */}
      <div style={{ marginBottom: isStuck ? 12 : 0 }}>
        <div
          style={{
            fontSize: 9,
            fontFamily: FONT.mono,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: color,
            marginBottom: 4,
            transition: "color 300ms ease",
          }}
        >
          {modeName} — Returns to baseline through
        </div>
        <p
          style={{
            fontSize: 13,
            color: TEXT.secondary,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {data.returns}
        </p>
      </div>

      {/* In a stuck compass */}
      {isStuck && (
        <div>
          <div
            style={{
              fontSize: 9,
              fontFamily: FONT.mono,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: hexToRgba(color, 0.6),
              marginBottom: 4,
            }}
          >
            In a stuck compass
          </div>
          <p
            style={{
              fontSize: 13,
              color: TEXT.muted,
              lineHeight: 1.6,
              margin: 0,
              fontStyle: "italic",
            }}
          >
            {data.stuck}
          </p>
        </div>
      )}
    </div>
  );
}
