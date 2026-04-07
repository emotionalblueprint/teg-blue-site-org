"use client";

import { useState, useRef, useCallback } from "react";
import {
  FONT, TEXT, BG, BORDER,
  PATTERN, hexToRgba,
  ACCENT,
} from "@/src/styles/tokens";
import { COMPASS_CONDITIONS, MODES } from "@/src/data/m2-data";

// ─── CONSTANTS ──────────────────────────────────────────

const BAR_GRADIENT = `linear-gradient(90deg, ${PATTERN.A.primary} 0%, ${PATTERN.A.primary} 20%, ${PATTERN.B.primary} 35%, ${PATTERN.B.primary} 45%, ${PATTERN.C.primary} 55%, ${PATTERN.C.primary} 70%, ${PATTERN.D.primary} 85%, ${PATTERN.D.primary} 100%)`;

const MAGNET_RADIUS = 0.04;

function getActiveMode(pos) {
  if (pos < 0.25) return MODES[0];
  if (pos < 0.5) return MODES[1];
  if (pos < 0.75) return MODES[2];
  return MODES[3];
}

function snapToCenter(pos) {
  for (const mode of MODES) {
    if (Math.abs(pos - mode.center) < MAGNET_RADIUS) return mode.center;
  }
  return pos;
}

// ─── COMPONENT ──────────────────────────────────────────

export default function FluidCompassExplorer() {
  const [position, setPosition] = useState(0.125);
  const [isStuck, setIsStuck] = useState(false);
  const containerRef = useRef(null);
  const barRef = useRef(null);
  const isDragging = useRef(false);
  const activeMode = getActiveMode(position);
  const data = isStuck ? activeMode.chronic : activeMode.fluid;
  const accentColor = isStuck ? ACCENT.orange : activeMode.hex;

  const updatePosition = useCallback((clientX) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const raw = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setPosition(snapToCenter(raw));
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
      setPosition((prev) => snapToCenter(Math.min(1, prev + step)));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setPosition((prev) => snapToCenter(Math.max(0, prev - step)));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPosition(0.125);
    } else if (e.key === "End") {
      e.preventDefault();
      setPosition(0.875);
    }
  }, []);

  const handleToggle = useCallback((stuck) => {
    setIsStuck(stuck);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        margin: "40px 0",
        borderRadius: 14,
        border: `1px solid ${hexToRgba(accentColor, 0.2)}`,
        background: hexToRgba(accentColor, 0.03),
        overflow: "hidden",
        transition: "border-color 300ms ease, background 300ms ease",
      }}
    >
      {/* ─── Header ────────────────────────────── */}
      <div style={{ padding: "28px 28px 0" }}>
        {/* Top row: badge + toggle */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            marginBottom: 16,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              fontFamily: FONT.mono,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: accentColor,
              padding: "3px 10px",
              borderRadius: 100,
              background: hexToRgba(accentColor, 0.12),
              border: `1px solid ${hexToRgba(accentColor, 0.25)}`,
              transition: "all 300ms ease",
              display: "inline-block",
            }}
          >
            {isStuck ? "Stuck Compass" : "Fluid Compass"}
          </span>

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
              onClick={() => handleToggle(false)}
              aria-label="Show fluid compass"
              aria-pressed={!isStuck}
              style={{
                padding: "5px 16px",
                fontSize: 10,
                fontFamily: FONT.mono,
                fontWeight: 600,
                letterSpacing: "0.04em",
                border: "none",
                cursor: "pointer",
                transition: "all 200ms ease",
                background: !isStuck
                  ? hexToRgba(activeMode.hex, 0.15)
                  : "transparent",
                color: !isStuck ? activeMode.hex : TEXT.muted,
              }}
            >
              Fluid
            </button>
            <button
              onClick={() => handleToggle(true)}
              aria-label="Show stuck compass"
              aria-pressed={isStuck}
              style={{
                padding: "5px 16px",
                fontSize: 10,
                fontFamily: FONT.mono,
                fontWeight: 600,
                letterSpacing: "0.04em",
                border: "none",
                borderLeft: `1px solid ${BORDER.default}`,
                cursor: "pointer",
                transition: "all 200ms ease",
                background: isStuck
                  ? hexToRgba(ACCENT.orange, 0.15)
                  : "transparent",
                color: isStuck ? ACCENT.orange : TEXT.muted,
              }}
            >
              Stuck
            </button>
          </div>
        </div>

        {/* Title + description */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: TEXT.primary,
            lineHeight: 1.2,
            marginBottom: 10,
          }}
        >
          The Four-Mode Gradient
        </div>
        <div
          style={{
            fontSize: 13,
            color: TEXT.secondary,
            lineHeight: 1.6,
            maxWidth: 540,
            marginBottom: 6,
          }}
        >
          Four modes on a continuous gradient, each corresponding to a distinct autonomic state. The nervous system selects the mode; cognition is recruited only at the after-awareness threshold.
        </div>
        <div
          style={{
            fontSize: 11,
            fontFamily: FONT.mono,
            color: TEXT.muted,
            marginBottom: 4,
          }}
        >
          Drag the needle to explore each mode
        </div>
      </div>

      {/* ─── Gradient Bar ──────────────────────── */}
      <div style={{ padding: "12px 28px 0" }}>
        <div
          role="slider"
          tabIndex={0}
          aria-label="Four-mode gradient position"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position * 100)}
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
                  backgroundColor: hexToRgba('#000000', 0.6),
                }}
              />
            ))}
            {/* Slider thumb */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: `${position * 100}%`,
                transform: "translate(-50%, -50%)",
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: BG.primary,
                border: `3px solid ${activeMode.hex}`,
                boxShadow: `0 0 16px ${activeMode.hex}80`,
                zIndex: 2,
                transition:
                  "border-color 200ms ease, box-shadow 200ms ease",
              }}
            />
          </div>
        </div>

        {/* Mode labels */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 14,
            padding: "0 2px",
          }}
        >
          {MODES.map((mode) => (
            <span
              key={mode.key}
              style={{
                width: "25%",
                textAlign: "center",
                fontSize: 11,
                fontFamily: FONT.mono,
                fontWeight: activeMode.key === mode.key ? 700 : 400,
                color: mode.hex,
                opacity: activeMode.key === mode.key ? 1 : 0.35,
                transition: "opacity 200ms ease",
              }}
            >
              {mode.name}
              {activeMode.key === mode.key && (
                <div style={{
                  fontSize: 8,
                  fontFamily: FONT.display,
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: hexToRgba(mode.hex, 0.7),
                  marginTop: 2,
                }}>
                  {mode.conditionShort}
                </div>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Divider ──────────────────────────── */}
      <div
        style={{
          height: 1,
          background: hexToRgba(accentColor, 0.12),
          margin: "20px 28px 0",
          transition: "background 300ms ease",
        }}
      />

      {/* ─── Content Area ──────────────────────── */}
      <div style={{ padding: "24px 28px 32px" }}>
        {/* Mode title + type pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 6,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: accentColor,
              transition: "color 300ms ease",
            }}
          >
            {data.fullName}
          </span>
          <span
            style={{
              fontSize: 10,
              fontFamily: FONT.mono,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: isStuck ? ACCENT.orange : TEXT.muted,
              padding: "2px 8px",
              borderRadius: 100,
              background: isStuck
                ? hexToRgba(ACCENT.orange, 0.1)
                : BG.surface,
              border: `1px solid ${
                isStuck
                  ? hexToRgba(ACCENT.orange, 0.25)
                  : BORDER.default
              }`,
              transition: "all 300ms ease",
            }}
          >
            {data.type}
          </span>
        </div>

        {/* Nervous system condition */}
        <p
          style={{
            fontSize: 14,
            color: TEXT.secondary,
            lineHeight: 1.6,
            margin: "0 0 16px",
            maxWidth: 640,
          }}
        >
          {activeMode.condition}
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: 14,
            color: TEXT.secondary,
            lineHeight: 1.7,
            margin: "0 0 16px",
            maxWidth: 640,
          }}
        >
          {data.description}
        </p>

        {/* Insight quote */}
        <div
          style={{
            padding: "12px 16px",
            borderLeft: `3px solid ${accentColor}`,
            background: hexToRgba(accentColor, 0.06),
            borderRadius: "0 8px 8px 0",
            marginBottom: 24,
            transition: "border-color 300ms ease, background 300ms ease",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              fontStyle: "italic",
              color: TEXT.primary,
              lineHeight: 1.5,
            }}
          >
            {data.insight}
          </span>
        </div>

        {/* Distortion (chronic only) */}
        {isStuck && data.distortion && (
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 12,
              marginBottom: 24,
              padding: "12px 16px",
              borderRadius: 8,
              background: hexToRgba(ACCENT.orange, 0.05),
              border: `1px solid ${hexToRgba(ACCENT.orange, 0.12)}`,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontFamily: FONT.mono,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: ACCENT.orange,
                flexShrink: 0,
              }}
            >
              Distortion
            </span>
            <span
              style={{
                fontSize: 13,
                fontStyle: "italic",
                color: TEXT.secondary,
                lineHeight: 1.6,
              }}
            >
              {data.distortion}
            </span>
          </div>
        )}

        {/* ─── Metadata strip ─────────────────── */}
        <div
          style={{
            display: "flex",
            gap: 20,
            marginBottom: 24,
            flexWrap: "wrap",
            alignItems: "baseline",
          }}
        >
          <div>
            <div style={{
              fontSize: 9,
              fontFamily: FONT.mono,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: TEXT.muted,
              marginBottom: 3,
            }}>
              Autonomic
            </div>
            <div style={{
              fontSize: 12,
              fontFamily: FONT.mono,
              color: TEXT.secondary,
              lineHeight: 1.4,
            }}>
              {activeMode.autonomic}
            </div>
          </div>
          <div>
            <div style={{
              fontSize: 9,
              fontFamily: FONT.mono,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: TEXT.muted,
              marginBottom: 3,
            }}>
              Duration
            </div>
            <div style={{
              fontSize: 12,
              fontFamily: FONT.mono,
              color: TEXT.secondary,
            }}>
              {data.duration}
            </div>
          </div>
          <div>
            <div style={{
              fontSize: 9,
              fontFamily: FONT.mono,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: TEXT.muted,
              marginBottom: 3,
            }}>
              Sequence
            </div>
            <div style={{
              fontSize: 12,
              fontFamily: FONT.mono,
              fontWeight: 600,
              color: accentColor,
              transition: "color 300ms ease",
            }}>
              {data.sequence}
            </div>
          </div>
        </div>

        {/* Capacity mini-cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 10,
          }}
        >
          {data.capacities.map((cap) => (
            <div
              key={cap.name}
              style={{
                padding: "12px 14px",
                borderRadius: 8,
                background: hexToRgba(accentColor, 0.05),
                border: `1px solid ${hexToRgba(accentColor, 0.12)}`,
                transition:
                  "background 300ms ease, border-color 300ms ease",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: FONT.mono,
                  color: accentColor,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: 5,
                  transition: "color 300ms ease",
                }}
              >
                {cap.name}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: TEXT.secondary,
                  lineHeight: 1.5,
                }}
              >
                {cap.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
