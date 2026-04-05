'use client';

import { useState, useRef, useCallback } from 'react';
import {
  FONT, TEXT, BG, BORDER, RADIUS,
  PATTERN, AWARENESS, MODE_ORANGE, hexToRgba,
} from '@/src/styles/tokens';
import { COMPASS_CONDITIONS, MODES, FLUID_CURVES, CHRONIC_CURVES } from '@/src/data/m2-data';
import { RESTORATION } from '@/src/data/m3-data';
import { CAPACITIES } from '@/src/data/m4-data';

// ─── CONSTANTS ───────────────────────────────────────────────────

const BAR_GRADIENT = `linear-gradient(90deg, ${PATTERN.A.primary} 0%, ${PATTERN.A.primary} 20%, ${PATTERN.B.primary} 35%, ${PATTERN.B.primary} 45%, ${PATTERN.C.primary} 55%, ${PATTERN.C.primary} 70%, ${PATTERN.D.primary} 85%, ${PATTERN.D.primary} 100%)`;

const PATTERN_KEYS = ['A', 'B', 'C', 'D'];
const MAGNET_RADIUS = 0.04;

const SVG_W = 600;
const SVG_H = 180;
const CURVE_TOP = 10;
const CURVE_BOTTOM = SVG_H - 10;

const CAPACITY_COLORS = {
  re: AWARENESS.RE,
  er: AWARENESS.ER,
  sea: AWARENESS.SEA,
};

// ─── HELPERS ─────────────────────────────────────────────────────

function getModeIndex(pos) {
  if (pos < 0.25) return 0;
  if (pos < 0.5) return 1;
  if (pos < 0.75) return 2;
  return 3;
}

function snapToCenter(pos) {
  for (const mode of MODES) {
    if (Math.abs(pos - mode.center) < MAGNET_RADIUS) return mode.center;
  }
  return pos;
}

/**
 * Generate SVG path + peak point for a skewed gaussian activation curve.
 * Returns { path, peakX, peakY } — path is filled area, peakX/Y for the dot.
 */
function generateCurve({ peak, height, spread, skew }, svgWidth, curveTop, curveBottom) {
  const range = curveBottom - curveTop;
  const samples = 80;
  const points = [];
  let peakX = peak * svgWidth;
  let peakY = curveBottom;

  for (let i = 0; i <= samples; i++) {
    const x01 = i / samples;
    const dx = x01 - peak;
    const sigma = spread * (1 + skew * Math.sign(dx));
    if (sigma <= 0) {
      points.push({ x: x01 * svgWidth, y: curveBottom });
      continue;
    }
    const gaussian = Math.exp(-(dx * dx) / (2 * sigma * sigma));
    const y = curveBottom - gaussian * height * range;
    points.push({ x: x01 * svgWidth, y });
    if (y < peakY) {
      peakY = y;
      peakX = x01 * svgWidth;
    }
  }

  let d = `M 0 ${curveBottom}`;
  for (const pt of points) {
    d += ` L ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
  }
  d += ` L ${svgWidth} ${curveBottom} Z`;
  return { path: d, peakX, peakY };
}

/**
 * Which lower-mode trace curves to show for a given active mode.
 * Control includes Protection trace; Domination includes Protection + Control traces.
 */
function getTraceModes(activeModeIdx) {
  if (activeModeIdx === 2) return [1];      // Control → show Protection trace
  if (activeModeIdx === 3) return [1, 2];   // Domination → show Protection + Control traces
  return [];
}

// ─── COMPONENT ───────────────────────────────────────────────────

// ─── LOAD SCALING ───────────────────────────────────────────────
// Load level 0–5. Each step grows the curve upward (taller + wider).
// Baseline stays pinned to the gradient bar — only the peak rises.

const MAX_LOAD = 5;

function applyLoad(curve, load) {
  if (load === 0) return curve;
  const factor = load / MAX_LOAD;
  return {
    ...curve,
    height: Math.min(0.98, curve.height + factor * 0.25),
    spread: curve.spread + factor * 0.06,
  };
}

export default function CompassDiagram() {
  const [position, setPosition] = useState(0.125);
  const [isStuck, setIsStuck] = useState(false);
  const [load, setLoad] = useState(0);
  const barRef = useRef(null);
  const isDragging = useRef(false);

  const modeIdx = getModeIndex(position);
  const mode = MODES[modeIdx];
  const patternKey = PATTERN_KEYS[modeIdx];
  const modeColor = PATTERN[patternKey].primary;
  const curves = isStuck ? CHRONIC_CURVES : FLUID_CURVES;
  const caps = isStuck ? CAPACITIES.chronic[modeIdx] : CAPACITIES.fluid[modeIdx];
  const restoration = isStuck ? RESTORATION.chronic[modeIdx] : RESTORATION.fluid[modeIdx];

  // Chronic uses orange accent for curves
  const curveStrokeColor = isStuck ? MODE_ORANGE : modeColor;

  // ─── Pointer handling ──────────────────────────────────────────

  const updatePosition = useCallback((clientX) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const raw = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setPosition(snapToCenter(raw));
  }, []);

  const handlePointerDown = useCallback((e) => {
    isDragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e) => {
    if (isDragging.current) updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleKeyDown = useCallback((e) => {
    const step = 0.05;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      setPosition((prev) => snapToCenter(Math.min(1, prev + step)));
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      setPosition((prev) => snapToCenter(Math.max(0, prev - step)));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPosition(0.125);
    } else if (e.key === 'End') {
      e.preventDefault();
      setPosition(0.875);
    }
  }, []);

  // ─── Curve data ────────────────────────────────────────────────

  // Apply load to curves — grows upward only, baseline stays pinned
  const loadedCurve = applyLoad(curves[modeIdx], load);
  const activeCurve = generateCurve(loadedCurve, SVG_W, CURVE_TOP, CURVE_BOTTOM);
  const traceModes = getTraceModes(modeIdx);
  const traceCurves = traceModes.map((i) => ({
    idx: i,
    ...generateCurve(applyLoad(curves[i], load), SVG_W, CURVE_TOP, CURVE_BOTTOM),
  }));

  const needleSvgX = position * SVG_W;

  // ─── Render ────────────────────────────────────────────────────

  return (
    <div
      style={{
        borderRadius: RADIUS.lg,
        border: `1px solid ${hexToRgba(modeColor, 0.2)}`,
        background: hexToRgba(modeColor, 0.02),
        overflow: 'hidden',
        transition: 'border-color 300ms ease, background 300ms ease',
      }}
    >
      {/* ─── Header ─────────────────────────────────────── */}
      <div
        style={{
          padding: '16px 20px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              fontFamily: FONT.mono,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: isStuck ? MODE_ORANGE : modeColor,
              padding: '3px 8px',
              borderRadius: 100,
              background: hexToRgba(isStuck ? MODE_ORANGE : modeColor, 0.12),
              border: `1px solid ${hexToRgba(isStuck ? MODE_ORANGE : modeColor, 0.25)}`,
              transition: 'all 300ms ease',
            }}
          >
            {isStuck ? 'Stuck Compass' : 'Fluid Compass'}
          </span>
          <span style={{ fontSize: 10, fontFamily: FONT.display, color: TEXT.muted, fontStyle: 'italic' }}>
            {isStuck ? COMPASS_CONDITIONS.stuck : COMPASS_CONDITIONS.fluid}
          </span>
        </div>

        {/* Fluid / Chronic toggle */}
        <div
          style={{
            display: 'flex',
            borderRadius: 100,
            border: `1px solid ${BORDER.default}`,
            overflow: 'hidden',
          }}
        >
          <button
            onClick={() => setIsStuck(false)}
            aria-label="Show fluid compass"
            aria-pressed={!isStuck}
            style={{
              padding: '4px 14px',
              fontSize: 10,
              fontFamily: FONT.mono,
              fontWeight: 600,
              letterSpacing: '0.04em',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 200ms ease',
              background: !isStuck ? hexToRgba(modeColor, 0.15) : 'transparent',
              color: !isStuck ? modeColor : TEXT.muted,
            }}
          >
            Fluid
          </button>
          <button
            onClick={() => setIsStuck(true)}
            aria-label="Show chronic compass"
            aria-pressed={isStuck}
            style={{
              padding: '4px 14px',
              fontSize: 10,
              fontFamily: FONT.mono,
              fontWeight: 600,
              letterSpacing: '0.04em',
              border: 'none',
              borderLeft: `1px solid ${BORDER.default}`,
              cursor: 'pointer',
              transition: 'all 200ms ease',
              background: isStuck ? hexToRgba(MODE_ORANGE, 0.15) : 'transparent',
              color: isStuck ? MODE_ORANGE : TEXT.muted,
            }}
          >
            Chronic
          </button>
        </div>
      </div>

      {/* ─── Perception labels ──────────────────────────── */}
      <div style={{ display: 'flex', padding: '14px 20px 0' }}>
        {MODES.map((m, i) => {
          const isActive = i === modeIdx;
          const color = PATTERN[PATTERN_KEYS[i]].primary;
          return (
            <div
              key={m.key}
              style={{
                flex: 1,
                textAlign: 'center',
                transition: 'opacity 200ms',
              }}
            >
              <div
                style={{
                  fontFamily: FONT.mono,
                  fontSize: isActive ? 11 : 9,
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: isActive ? color : TEXT.hint,
                  opacity: isActive ? 1 : 0.15,
                  transition: 'all 200ms',
                }}
              >
                {m.perception}
              </div>
              <div
                style={{
                  fontFamily: FONT.mono,
                  fontSize: 8.5,
                  fontStyle: 'italic',
                  letterSpacing: '0.04em',
                  color: isActive ? hexToRgba(color, 0.5) : TEXT.micro,
                  opacity: isActive ? 1 : 0.15,
                  transition: 'all 200ms',
                }}
              >
                {isStuck ? 'chronic' : 'perceived'}
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── SVG Activation Curve + Load Controls ──────── */}
      <div style={{ padding: '4px 20px 0', display: 'flex', alignItems: 'stretch', gap: 0 }}>
        {/* SVG canvas */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
            aria-hidden="true"
          >
            <defs>
              {/* Fluid gradient fill: blue spectrum */}
              <linearGradient id="curve-grad-fluid" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={PATTERN.A.primary} stopOpacity={0.25} />
                <stop offset="33%" stopColor={PATTERN.B.primary} stopOpacity={0.25} />
                <stop offset="66%" stopColor={PATTERN.C.primary} stopOpacity={0.25} />
                <stop offset="100%" stopColor={PATTERN.D.primary} stopOpacity={0.25} />
              </linearGradient>
              {/* Chronic gradient fill: orange-based */}
              <linearGradient id="curve-grad-chronic" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={MODE_ORANGE} stopOpacity={0.12} />
                <stop offset="50%" stopColor={MODE_ORANGE} stopOpacity={0.25} />
                <stop offset="100%" stopColor={MODE_ORANGE} stopOpacity={0.35} />
              </linearGradient>
              {/* Trace fill: very subtle */}
              <linearGradient id="curve-grad-trace" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={PATTERN.A.primary} stopOpacity={0.08} />
                <stop offset="100%" stopColor={PATTERN.D.primary} stopOpacity={0.08} />
              </linearGradient>
            </defs>

            {/* Baseline */}
            <line
              x1={0} y1={CURVE_BOTTOM}
              x2={SVG_W} y2={CURVE_BOTTOM}
              stroke={hexToRgba(modeColor, 0.15)}
              strokeWidth={1}
            />

            {/* Zone dividers */}
            {[0.25, 0.5, 0.75].map((p) => (
              <line
                key={p}
                x1={p * SVG_W} y1={CURVE_TOP}
                x2={p * SVG_W} y2={CURVE_BOTTOM}
                stroke={hexToRgba('#ffffff', 0.06)}
                strokeWidth={1}
                strokeDasharray="4 4"
              />
            ))}

            {/* Protection / Control trace curves (behind the active curve) */}
            {traceCurves.map(({ idx, path }) => {
              const traceColor = isStuck
                ? MODE_ORANGE
                : PATTERN[PATTERN_KEYS[idx]].primary;
              return (
                <path
                  key={`trace-${idx}`}
                  d={path}
                  fill={isStuck ? 'url(#curve-grad-chronic)' : 'url(#curve-grad-trace)'}
                  stroke={hexToRgba(traceColor, 0.25)}
                  strokeWidth={1}
                  strokeDasharray="6 3"
                />
              );
            })}

            {/* Active curve — filled area */}
            <path
              d={activeCurve.path}
              fill={isStuck ? 'url(#curve-grad-chronic)' : 'url(#curve-grad-fluid)'}
              stroke="none"
            />
            {/* Active curve — outline stroke */}
            <path
              d={activeCurve.path}
              fill="none"
              stroke={hexToRgba(curveStrokeColor, 0.7)}
              strokeWidth={1.5}
            />

            {/* Peak dot */}
            <circle
              cx={activeCurve.peakX}
              cy={activeCurve.peakY}
              r={5}
              fill={curveStrokeColor}
              stroke={hexToRgba('#ffffff', 0.8)}
              strokeWidth={1.5}
            />

            {/* Mode Activation arrow (up) */}
            <line
              x1={needleSvgX} y1={CURVE_BOTTOM - 8}
              x2={needleSvgX} y2={CURVE_BOTTOM - 30}
              stroke={hexToRgba(curveStrokeColor, 0.5)}
              strokeWidth={1.5}
            />
            <polygon
              points={`${needleSvgX},${CURVE_BOTTOM - 36} ${needleSvgX - 4},${CURVE_BOTTOM - 28} ${needleSvgX + 4},${CURVE_BOTTOM - 28}`}
              fill={hexToRgba(curveStrokeColor, 0.5)}
            />
            <text
              x={needleSvgX + 8}
              y={CURVE_BOTTOM - 26}
              fill={hexToRgba(curveStrokeColor, 0.4)}
              fontSize={8}
              fontFamily="'JetBrains Mono', monospace"
            >
              activation
            </text>

            {/* Biological Restoration arrow (down) — fluid only */}
            {!isStuck && (
              <>
                <line
                  x1={needleSvgX} y1={CURVE_BOTTOM + 4}
                  x2={needleSvgX} y2={CURVE_BOTTOM + 22}
                  stroke={hexToRgba(modeColor, 0.35)}
                  strokeWidth={1.5}
                  strokeDasharray="3 3"
                />
                <polygon
                  points={`${needleSvgX},${CURVE_BOTTOM + 28} ${needleSvgX - 4},${CURVE_BOTTOM + 20} ${needleSvgX + 4},${CURVE_BOTTOM + 20}`}
                  fill={hexToRgba(modeColor, 0.35)}
                />
                <text
                  x={needleSvgX + 8}
                  y={CURVE_BOTTOM + 20}
                  fill={hexToRgba(modeColor, 0.3)}
                  fontSize={8}
                  fontFamily="'JetBrains Mono', monospace"
                >
                  restoration
                </text>
              </>
            )}

            {/* Baseline marker */}
            <rect
              x={0.125 * SVG_W - 1} y={CURVE_BOTTOM - 3}
              width={2} height={6} rx={1}
              fill={hexToRgba(PATTERN.A.primary, 0.3)}
            />
            <text
              x={0.125 * SVG_W} y={CURVE_BOTTOM + 14}
              textAnchor="middle"
              fill={hexToRgba(PATTERN.A.primary, 0.2)}
              fontSize={7}
              fontFamily="'JetBrains Mono', monospace"
            >
              baseline
            </text>
          </svg>
        </div>

        {/* ─── Load Controls ──────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            padding: '0 4px 0 10px',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontSize: 8,
              fontFamily: FONT.mono,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: TEXT.hint,
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              marginBottom: 2,
            }}
          >
            Load
          </div>
          <button
            onClick={() => setLoad((prev) => Math.min(MAX_LOAD, prev + 1))}
            disabled={load >= MAX_LOAD}
            aria-label="Increase activation load"
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              border: `1.5px solid ${hexToRgba(load >= MAX_LOAD ? TEXT.hint : curveStrokeColor, load >= MAX_LOAD ? 0.2 : 0.5)}`,
              background: hexToRgba(curveStrokeColor, load >= MAX_LOAD ? 0.03 : 0.08),
              color: load >= MAX_LOAD ? TEXT.hint : curveStrokeColor,
              fontSize: 16,
              fontWeight: 700,
              fontFamily: FONT.mono,
              cursor: load >= MAX_LOAD ? 'default' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 200ms ease',
              opacity: load >= MAX_LOAD ? 0.4 : 1,
              lineHeight: 1,
            }}
          >
            +
          </button>
          {/* Load level indicator — vertical dots */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              padding: '2px 0',
            }}
          >
            {Array.from({ length: MAX_LOAD }, (_, i) => {
              const filled = i < load;
              const dotColor = isStuck ? MODE_ORANGE : modeColor;
              return (
                <div
                  key={i}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: filled ? dotColor : 'transparent',
                    border: `1px solid ${hexToRgba(dotColor, filled ? 0.8 : 0.2)}`,
                    transition: 'all 200ms ease',
                    boxShadow: filled ? `0 0 6px ${hexToRgba(dotColor, 0.4)}` : 'none',
                  }}
                />
              );
            }).reverse()}
          </div>
          <button
            onClick={() => setLoad((prev) => Math.max(0, prev - 1))}
            disabled={load <= 0}
            aria-label="Decrease activation load"
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              border: `1.5px solid ${hexToRgba(load <= 0 ? TEXT.hint : curveStrokeColor, load <= 0 ? 0.2 : 0.5)}`,
              background: hexToRgba(curveStrokeColor, load <= 0 ? 0.03 : 0.08),
              color: load <= 0 ? TEXT.hint : curveStrokeColor,
              fontSize: 16,
              fontWeight: 700,
              fontFamily: FONT.mono,
              cursor: load <= 0 ? 'default' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 200ms ease',
              opacity: load <= 0 ? 0.4 : 1,
              lineHeight: 1,
            }}
          >
            −
          </button>
        </div>
      </div>

      {/* ─── Gradient Bar + Needle ──────────────────────── */}
      <div style={{ padding: '0 20px' }}>
        <div
          role="slider"
          tabIndex={0}
          aria-label="Four-mode gradient position"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position * 100)}
          aria-valuetext={`${mode.label} mode`}
          style={{
            padding: '15px 0',
            margin: '-15px 0',
            cursor: 'pointer',
            touchAction: 'none',
            userSelect: 'none',
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onKeyDown={handleKeyDown}
        >
          <div
            ref={barRef}
            style={{
              position: 'relative',
              height: 14,
              borderRadius: 7,
              background: BAR_GRADIENT,
              pointerEvents: 'none',
            }}
          >
            {/* Zone dividers */}
            {[0.25, 0.5, 0.75].map((p) => (
              <div
                key={p}
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  width: 3,
                  left: `${p * 100}%`,
                  transform: 'translateX(-50%)',
                  backgroundColor: hexToRgba('#000000', 0.6),
                }}
              />
            ))}
            {/* Needle */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: `${position * 100}%`,
                transform: 'translate(-50%, -50%)',
                width: 28,
                height: 28,
                borderRadius: '50%',
                backgroundColor: BG.primary,
                border: `3px solid ${modeColor}`,
                boxShadow: `0 0 16px ${hexToRgba(modeColor, 0.5)}`,
                transition: 'border-color 200ms ease, box-shadow 200ms ease',
              }}
            />
          </div>
        </div>

        {/* Mode labels — strong active/inactive contrast */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 6,
            padding: '0 2px',
          }}
        >
          {MODES.map((m, i) => {
            const isActive = i === modeIdx;
            const color = PATTERN[PATTERN_KEYS[i]].primary;
            return (
              <button
                key={m.key}
                onClick={() => setPosition(m.center)}
                style={{
                  width: '25%',
                  textAlign: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 0 6px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontSize: isActive ? 12 : 10,
                    fontFamily: FONT.mono,
                    fontWeight: isActive ? 700 : 400,
                    color: color,
                    opacity: isActive ? 1 : 0.2,
                    transition: 'all 200ms ease',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {m.label}
                </div>
                {isActive && (
                  <>
                    <div
                      style={{
                        fontSize: 8,
                        fontFamily: FONT.display,
                        fontStyle: 'italic',
                        color: hexToRgba(color, 0.7),
                        marginTop: 2,
                        transition: 'all 200ms ease',
                      }}
                    >
                      {m.conditionShort}
                    </div>
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: color,
                        boxShadow: `0 0 8px ${color}`,
                        margin: '4px auto 0',
                      }}
                    />
                  </>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Capacity Bars ──────────────────────────────── */}
      <div style={{ padding: '16px 20px 0' }}>
        <div
          style={{
            fontSize: 9,
            fontWeight: 700,
            fontFamily: FONT.mono,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: TEXT.muted,
            marginBottom: 10,
          }}
        >
          Awareness Capacities (M2)
        </div>
        {[
          { key: 're', fullName: 'Reading Emotions (RE)' },
          { key: 'er', fullName: 'Emotional Resonance (ER)' },
          { key: 'sea', fullName: 'Self-Emotional Awareness (SEA)' },
        ].map(({ key, fullName }) => {
          const cap = caps[key];
          const color = CAPACITY_COLORS[key];
          const isZero = cap.level === 0;
          const isFlooded = key === 'er' && isStuck && modeIdx === 0;
          return (
            <div key={key} style={{ marginBottom: 10 }}>
              {/* Name + state label row */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: FONT.mono,
                    letterSpacing: '0.02em',
                    color: isZero ? TEXT.hint : color,
                    transition: 'color 200ms',
                  }}
                >
                  {fullName}
                </span>
                <span
                  style={{
                    fontSize: 9,
                    fontFamily: FONT.mono,
                    letterSpacing: '0.02em',
                    color: isZero ? TEXT.hint : TEXT.muted,
                    transition: 'color 200ms',
                    flexShrink: 0,
                    marginLeft: 8,
                  }}
                >
                  {cap.label}
                </span>
              </div>
              {/* Bar */}
              <div
                style={{
                  height: 10,
                  borderRadius: 5,
                  background: hexToRgba(color, 0.08),
                  border: `1px solid ${hexToRgba(color, isZero ? 0.06 : 0.15)}`,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 200ms',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: `${cap.level * 100}%`,
                    borderRadius: 5,
                    background: isFlooded
                      ? `repeating-linear-gradient(90deg, ${hexToRgba(color, 0.5)} 0px, ${hexToRgba(color, 0.5)} 3px, ${hexToRgba(color, 0.25)} 3px, ${hexToRgba(color, 0.25)} 6px)`
                      : hexToRgba(color, 0.5),
                    transition: 'width 300ms ease, background 300ms ease',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Restoration Panel ──────────────────────────── */}
      <div style={{ padding: '12px 20px 20px' }}>
        <div
          style={{
            padding: '12px 16px',
            borderRadius: RADIUS.sm,
            background: hexToRgba(isStuck ? MODE_ORANGE : modeColor, 0.04),
            border: `1px solid ${hexToRgba(isStuck ? MODE_ORANGE : modeColor, 0.12)}`,
            transition: 'border-color 300ms, background 300ms',
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              fontFamily: FONT.mono,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: isStuck ? MODE_ORANGE : modeColor,
              marginBottom: 6,
              transition: 'color 300ms',
            }}
          >
            {isStuck ? 'Regulation Substitutes' : 'Biological Restoration'}
          </div>

          {isStuck ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div>
                <span
                  style={{
                    fontSize: 9,
                    fontFamily: FONT.mono,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: TEXT.muted,
                    textTransform: 'uppercase',
                  }}
                >
                  Non-relational
                </span>
                <div style={{ fontSize: 12, color: TEXT.secondary, lineHeight: 1.6, marginTop: 2 }}>
                  {restoration.nonRelational.join(' · ')}
                </div>
              </div>
              <div>
                <span
                  style={{
                    fontSize: 9,
                    fontFamily: FONT.mono,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: TEXT.muted,
                    textTransform: 'uppercase',
                  }}
                >
                  Relational
                </span>
                <div style={{ fontSize: 12, color: TEXT.secondary, lineHeight: 1.6, marginTop: 2 }}>
                  {restoration.relational.join(' · ')}
                </div>
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontFamily: FONT.mono,
                  color: TEXT.hint,
                  marginTop: 2,
                }}
              >
                Relief: {restoration.relief} — debris does not clear
              </div>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary }}>
                  {restoration.name}
                </span>
                <span
                  style={{
                    fontSize: 9,
                    fontFamily: FONT.mono,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: TEXT.muted,
                    textTransform: 'uppercase',
                    padding: '2px 6px',
                    borderRadius: 3,
                    background: hexToRgba(modeColor, 0.08),
                  }}
                >
                  {restoration.type}
                </span>
              </div>
              <div style={{ fontSize: 12, color: TEXT.secondary, lineHeight: 1.6, marginBottom: 4 }}>
                {restoration.description}
              </div>
              <div style={{ fontSize: 10, fontFamily: FONT.mono, color: TEXT.hint }}>
                Timescale: {restoration.timescale}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ─── Mode Arc ───────────────────────────────────── */}
      <div style={{ padding: '0 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              fontSize: 9,
              fontFamily: FONT.mono,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: isStuck ? MODE_ORANGE : TEXT.muted,
            }}
          >
            {isStuck ? 'Loop' : 'Arc'}
          </span>
          <span
            style={{
              fontSize: 11,
              fontFamily: FONT.mono,
              fontWeight: 600,
              color: isStuck ? MODE_ORANGE : modeColor,
              transition: 'color 300ms',
            }}
          >
            {isStuck ? mode.chronicArc : mode.arc}
          </span>
        </div>
      </div>
    </div>
  );
}
