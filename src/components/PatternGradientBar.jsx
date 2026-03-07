"use client";

import { useState, useRef, useCallback } from "react";
import { FONT, PATTERN, PATTERN_GRADIENT, BG, hexToRgba } from "../styles/tokens";

const MODES = [
  { key: 'A', label: 'Connection', hex: PATTERN.A.primary, center: 0.125 },
  { key: 'B', label: 'Protection', hex: PATTERN.B.primary, center: 0.375 },
  { key: 'C', label: 'Control',    hex: PATTERN.C.primary, center: 0.625 },
  { key: 'D', label: 'Domination', hex: PATTERN.D.primary, center: 0.875 },
];

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
    if (Math.abs(pos - mode.center) < MAGNET_RADIUS) {
      return mode.center;
    }
  }
  return pos;
}

/**
 * PatternGradientBar — Interactive draggable gradient bar
 * Ported from .com GradientBar (deepDiver variant only)
 *
 * @param {number} initialPosition - Starting position (0-1, default 0.125)
 * @param {function} onChange - Callback with { position, mode }
 * @param {object} style - Additional container styles
 */
export default function PatternGradientBar({
  initialPosition = 0.125,
  onChange,
  style,
}) {
  const [position, setPosition] = useState(initialPosition);
  const barRef = useRef(null);
  const isDragging = useRef(false);
  const activeMode = getActiveMode(position);

  const updatePosition = useCallback(
    (clientX) => {
      if (!barRef.current) return;
      const rect = barRef.current.getBoundingClientRect();
      const raw = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const snapped = snapToCenter(raw);
      setPosition(snapped);
      onChange?.({ position: snapped, mode: getActiveMode(snapped) });
    },
    [onChange]
  );

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

  return (
    <div style={style}>
      {/* Bar — outer div adds invisible touch padding (44px total height) */}
      <div
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
        {/* Zone dividers at 25%, 50%, 75% */}
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

        {/* Magnet center markers */}
        {MODES.map((mode) => (
          <div
            key={mode.key}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: 1,
              left: `${mode.center * 100}%`,
              transform: "translateX(-50%)",
              backgroundColor: hexToRgba('#ffffff', 0.12),
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
            transition: "border-color 200ms ease, box-shadow 200ms ease",
          }}
        />
      </div>
      </div>

    </div>
  );
}
