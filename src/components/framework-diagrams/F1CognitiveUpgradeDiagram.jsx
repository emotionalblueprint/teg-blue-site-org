'use client';

import { useState, useRef, useCallback } from "react";
import { FONT, TEXT, SPECTRUM, BORDER, BG, hexToRgba } from "@/src/styles/tokens";

// ─── Mode Data ──────────────────────────────────────────
const MODES = [
  {
    key: "A", name: "Connection", conditionShort: "Safety & Openness", center: 0.125,
    type: "Body-first",
    fluid: "Enough safety to engage, relate, and repair. The needle\u2019s baseline.",
  },
  {
    key: "B", name: "Protection", conditionShort: "Threat & Defence", center: 0.375,
    type: "Body-first",
    fluid: "The system mobilizes. Attention narrows, emotions amplify. Fight or flight.",
  },
  {
    key: "C", name: "Control", conditionShort: "Strategy & Management", center: 0.625,
    type: "Cognition-first",
    fluid: "Cognition recruited deliberately. Structure, strategy, released when done.",
  },
  {
    key: "D", name: "Domination", conditionShort: "Power & Dominance", center: 0.875,
    type: "Cognition-first",
    fluid: "Last resort. Entered deliberately, used briefly. The cost is felt and processed.",
  },
];

const COLORS = [SPECTRUM.sky, SPECTRUM.azure, SPECTRUM.blue, SPECTRUM.cobalt];

const BAR_GRADIENT = `linear-gradient(90deg, ${SPECTRUM.sky} 0%, ${SPECTRUM.sky} 15%, ${SPECTRUM.azure} 30%, ${SPECTRUM.azure} 40%, ${SPECTRUM.blue} 55%, ${SPECTRUM.blue} 70%, ${SPECTRUM.cobalt} 85%, ${SPECTRUM.cobalt} 100%)`;

const MAGNET = 0.04;

function getActiveIdx(pos) {
  if (pos < 0.25) return 0;
  if (pos < 0.5) return 1;
  if (pos < 0.75) return 2;
  return 3;
}

function snap(pos) {
  for (const m of MODES) {
    if (Math.abs(pos - m.center) < MAGNET) return m.center;
  }
  return pos;
}

// ─── Component ──────────────────────────────────────────
export default function F1CognitiveUpgradeDiagram() {
  const [position, setPosition] = useState(0.125);
  const barRef = useRef(null);
  const dragging = useRef(false);

  const idx = getActiveIdx(position);
  const mode = MODES[idx];
  const color = COLORS[idx];

  const updatePos = useCallback((clientX) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const raw = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setPosition(snap(raw));
  }, []);

  const onDown = useCallback((e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  }, [updatePos]);

  const onMove = useCallback((e) => {
    if (dragging.current) updatePos(e.clientX);
  }, [updatePos]);

  const onUp = useCallback(() => { dragging.current = false; }, []);

  const onKey = useCallback((e) => {
    const step = 0.05;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setPosition(p => snap(Math.min(1, p + step)));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setPosition(p => snap(Math.max(0, p - step)));
    } else if (e.key === "Home") {
      e.preventDefault(); setPosition(0.125);
    } else if (e.key === "End") {
      e.preventDefault(); setPosition(0.875);
    }
  }, []);

  return (
    <div>
      {/* ─── Header ─── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        marginBottom: 14,
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 10, fontWeight: 600,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: TEXT.muted,
        }}>
          Inner Compass + Four-Mode Gradient
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 10, color: TEXT.hint,
          letterSpacing: "0.06em",
        }}>
          Drag to explore
        </span>
      </div>

      {/* ─── Body-first / Cognition-first Annotation ─── */}
      <div style={{
        display: "flex", justifyContent: "space-around", marginBottom: 6,
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, fontWeight: 500,
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: hexToRgba(SPECTRUM.sky, 0.6),
        }}>
          body-first
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, fontWeight: 500,
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: hexToRgba(SPECTRUM.cobalt, 0.6),
        }}>
          cognition-first
        </span>
      </div>

      {/* ─── Gradient Bar ─── */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Four-mode gradient position"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position * 100)}
        aria-valuetext={`${mode.name} mode`}
        style={{
          padding: "12px 0", cursor: "pointer",
          touchAction: "none", userSelect: "none",
        }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onKeyDown={onKey}
      >
        <div ref={barRef} style={{
          position: "relative", height: 14, borderRadius: 7,
          background: BAR_GRADIENT, pointerEvents: "none",
        }}>
          {/* Zone dividers */}
          {[0.25, 0.75].map(p => (
            <div key={p} style={{
              position: "absolute", top: 0, bottom: 0, width: 2,
              left: `${p * 100}%`, transform: "translateX(-50%)",
              background: hexToRgba(SPECTRUM.slate, 0.55),
            }} />
          ))}

          {/* Architectural break (stronger divider at 50%) */}
          <div style={{
            position: "absolute", top: -3, bottom: -3, width: 3,
            left: "50%", transform: "translateX(-50%)",
            background: hexToRgba(SPECTRUM.slate, 0.8),
            borderRadius: 1.5,
          }} />

          {/* Thumb */}
          <div style={{
            position: "absolute", top: "50%",
            left: `${position * 100}%`,
            transform: "translate(-50%, -50%)",
            width: 26, height: 26, borderRadius: "50%",
            background: BG.primary,
            border: `3px solid ${color}`,
            boxShadow: `0 0 14px ${hexToRgba(color, 0.4)}`,
            transition: "border-color 200ms ease, box-shadow 200ms ease",
          }} />
        </div>
      </div>

      {/* ─── Mode Labels ─── */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        marginBottom: 14, padding: "0 2px",
      }}>
        {MODES.map((m, i) => (
          <span key={m.key} style={{
            width: "25%", textAlign: "center",
            fontFamily: FONT.mono, fontSize: 10,
            fontWeight: idx === i ? 700 : 400,
            color: COLORS[i],
            opacity: idx === i ? 1 : 0.35,
            transition: "opacity 200ms ease",
          }}>
            {m.name}
            <br />
            <span style={{ fontSize: 8, fontWeight: 400, opacity: 0.7 }}>mode</span>
          </span>
        ))}
      </div>

      {/* ─── Active Mode Card ─── */}
      <div style={{
        padding: "14px 16px", borderRadius: 8,
        background: hexToRgba(color, 0.05),
        border: `1px solid ${hexToRgba(color, 0.2)}`,
        transition: "border-color 300ms ease, background 300ms ease",
      }}>
        {/* Mode header */}
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          marginBottom: 8, flexWrap: "wrap",
        }}>
          <span style={{
            fontFamily: FONT.mono, fontSize: 14, fontWeight: 700,
            color,
            transition: "color 300ms ease",
          }}>
            {mode.name}
          </span>
          <span style={{
            fontFamily: FONT.display, fontSize: 10,
            fontStyle: "italic",
            color: hexToRgba(color, 0.6),
          }}>
            {mode.conditionShort}
          </span>
          <span style={{
            fontFamily: FONT.mono, fontSize: 10, fontWeight: 600,
            letterSpacing: "0.06em",
            color: TEXT.muted,
            padding: "2px 8px", borderRadius: 100,
            background: BG.surface,
            border: `1px solid ${BORDER.default}`,
          }}>
            Pattern {mode.key}
          </span>
          <span style={{
            fontFamily: FONT.mono, fontSize: 9, fontWeight: 500,
            letterSpacing: "0.06em", textTransform: "uppercase",
            color: idx < 2
              ? hexToRgba(SPECTRUM.sky, 0.7)
              : hexToRgba(SPECTRUM.cobalt, 0.7),
          }}>
            {mode.type}
          </span>
        </div>

        {/* Description */}
        <p style={{
          fontSize: 13, color: TEXT.secondary, lineHeight: 1.65,
          margin: 0,
        }}>
          {mode.fluid}
        </p>
      </div>
    </div>
  );
}
