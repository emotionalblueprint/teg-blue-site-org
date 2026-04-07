"use client";

import { useState, useRef, useCallback } from "react";
import { BG, TEXT, BORDER, FONT, SPECTRUM, MODEL_COLORS, hexToRgba } from "../styles/tokens";

const MODEL_COLOR = MODEL_COLORS.M1;

// Neuroscience-based timing (milliseconds)
const EMOTIONAL_STEPS = [
  { label: "Stimulus", ms: 0 },
  { label: "Amygdala detection", ms: 12 },
  { label: "Physiological response", ms: 80 },
  { label: "NS state activated", ms: 150 },
];

const COGNITIVE_STEPS = [
  { label: "Stimulus", ms: 0 },
  { label: "Reaches cortex", ms: 300 },
  { label: "Conscious processing", ms: 450 },
  { label: "Evaluation complete", ms: 500 },
];

const TOTAL_MS = 500;

const SPEEDS = [
  { label: "Real-time", multiplier: 1 },
  { label: "5x Slower", multiplier: 5 },
  { label: "20x Slower", multiplier: 20 },
];

export default function M1SpeedComparison() {
  const [speedIndex, setSpeedIndex] = useState(1);
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const duration = TOTAL_MS * SPEEDS[speedIndex].multiplier;

  const fire = useCallback(() => {
    if (running) return;
    setRunning(true);
    setProgress(0);
    startRef.current = performance.now();

    const animate = (now) => {
      const elapsed = now - startRef.current;
      const t = Math.min(elapsed / duration, 1);
      setProgress(t);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setRunning(false);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
  }, [running, duration]);

  const reset = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setRunning(false);
    setProgress(0);
  }, []);

  const currentMs = progress * TOTAL_MS;

  return (
    <div style={{
      background: hexToRgba(MODEL_COLOR, 0.04),
      border: `1px solid ${hexToRgba(MODEL_COLOR, 0.15)}`,
      borderRadius: 10,
      padding: "24px 28px 20px",
    }}>
      {/* Header row */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24,
      }}>
        <div style={{
          fontFamily: FONT.mono,
          fontSize: 10,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: TEXT.hint,
        }}>
          Processing Speed Comparison
        </div>
        {progress > 0 && (
          <div style={{
            fontFamily: FONT.mono,
            fontSize: 14,
            fontWeight: 700,
            color: TEXT.secondary,
          }}>
            {Math.round(currentMs)}ms
          </div>
        )}
      </div>

      {/* Tracks */}
      <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 24 }}>
        <Track
          label="Emotional Pathway"
          sublabel="Subcortical"
          steps={EMOTIONAL_STEPS}
          currentMs={currentMs}
          color={MODEL_COLOR}
          totalMs={TOTAL_MS}
        />
        <Track
          label="Cognitive Pathway"
          sublabel="Cortical"
          steps={COGNITIVE_STEPS}
          currentMs={currentMs}
          color={SPECTRUM.indigo}
          totalMs={TOTAL_MS}
        />
      </div>

      {/* Controls */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          {SPEEDS.map((speed, i) => (
            <button
              key={speed.label}
              onClick={() => { setSpeedIndex(i); reset(); }}
              style={{
                fontFamily: FONT.mono,
                fontSize: 10,
                fontWeight: 600,
                padding: "5px 10px",
                borderRadius: 5,
                border: `1px solid ${i === speedIndex ? MODEL_COLOR : BORDER.default}`,
                background: i === speedIndex ? hexToRgba(MODEL_COLOR, 0.12) : "transparent",
                color: i === speedIndex ? MODEL_COLOR : TEXT.muted,
                cursor: "pointer",
                transition: "all 150ms ease",
                letterSpacing: "0.02em",
              }}
            >
              {speed.label}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: 6 }}>
          <button
            onClick={fire}
            disabled={running}
            style={{
              fontFamily: FONT.mono,
              fontSize: 11,
              fontWeight: 700,
              padding: "6px 16px",
              borderRadius: 5,
              border: "none",
              background: running ? hexToRgba(MODEL_COLOR, 0.3) : MODEL_COLOR,
              color: "#fff",
              cursor: running ? "default" : "pointer",
              transition: "all 150ms ease",
              letterSpacing: "0.02em",
            }}
          >
            {running ? "Running..." : "Fire"}
          </button>
          {progress > 0 && !running && (
            <button
              onClick={reset}
              style={{
                fontFamily: FONT.mono,
                fontSize: 10,
                fontWeight: 600,
                padding: "5px 10px",
                borderRadius: 5,
                border: `1px solid ${BORDER.default}`,
                background: "transparent",
                color: TEXT.muted,
                cursor: "pointer",
              }}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


function Track({ label, sublabel, steps, currentMs, color, totalMs }) {
  const lastStepMs = steps[steps.length - 1].ms;
  const fillPct = (Math.min(currentMs, lastStepMs) / totalMs) * 100;

  return (
    <div>
      {/* Label row */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 10 }}>
        <span style={{
          fontFamily: FONT.display,
          fontSize: 13,
          fontWeight: 600,
          color: color,
        }}>
          {label}
        </span>
        <span style={{
          fontFamily: FONT.mono,
          fontSize: 9,
          color: TEXT.hint,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}>
          {sublabel}
        </span>
      </div>

      {/* Rail + markers */}
      <div style={{ position: "relative", height: 20, marginBottom: 6 }}>
        {/* Background rail */}
        <div style={{
          position: "absolute",
          top: 8,
          left: 0,
          right: 0,
          height: 4,
          background: hexToRgba(color, 0.1),
          borderRadius: 2,
        }} />
        {/* Fill */}
        <div style={{
          position: "absolute",
          top: 8,
          left: 0,
          width: `${fillPct}%`,
          height: 4,
          background: hexToRgba(color, 0.4),
          borderRadius: 2,
        }} />
        {/* Dot markers */}
        {steps.map((step) => {
          const x = (step.ms / totalMs) * 100;
          const reached = currentMs >= step.ms;
          return (
            <div
              key={step.label}
              style={{
                position: "absolute",
                left: `${x}%`,
                top: 4,
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: reached ? color : hexToRgba(color, 0.15),
                border: `2px solid ${reached ? color : hexToRgba(color, 0.25)}`,
                transform: "translateX(-50%)",
                transition: "all 200ms ease",
              }}
            />
          );
        })}
      </div>

      {/* Step labels as a flex row — evenly spaced, no overlap */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        paddingRight: `${100 - (lastStepMs / totalMs) * 100}%`,
      }}>
        {steps.map((step) => {
          const reached = currentMs >= step.ms;
          return (
            <div key={step.label} style={{ textAlign: "center", minWidth: 0 }}>
              <div style={{
                fontFamily: FONT.mono,
                fontSize: 9,
                color: reached ? color : TEXT.hint,
                fontWeight: reached ? 600 : 400,
                transition: "color 200ms ease",
                lineHeight: 1.3,
              }}>
                {step.label}
              </div>
              <div style={{
                fontFamily: FONT.mono,
                fontSize: 8,
                color: TEXT.micro,
                marginTop: 1,
              }}>
                {step.ms}ms
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
