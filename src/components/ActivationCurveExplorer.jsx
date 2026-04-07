'use client';

import { useState, useRef, useCallback, useMemo } from 'react';
import {
  FONT, TEXT, BG, BORDER, RADIUS,
  PATTERN, ACCENT, hexToRgba,
} from '@/src/styles/tokens';
import { MODES, FLUID_CURVES, CHRONIC_CURVES } from '@/src/data/m2-data';
import { RESTORATION } from '@/src/data/m3-data';

// ─── CONSTANTS ───────────────────────────────────────────────────

const PATTERN_KEYS = ['A', 'B', 'C', 'D'];
const MAGNET_RADIUS = 0.04;

// 4-tone orange spectrum (light → dark) — mirrors blue PATTERN
const CHRONIC_TONES = ['#FFCB94', '#FFA85C', '#FF8530', '#F97316'];

const BAR_GRADIENT = `linear-gradient(90deg, ${PATTERN.A.primary} 0%, ${PATTERN.A.primary} 20%, ${PATTERN.B.primary} 35%, ${PATTERN.B.primary} 45%, ${PATTERN.C.primary} 55%, ${PATTERN.C.primary} 70%, ${PATTERN.D.primary} 85%, ${PATTERN.D.primary} 100%)`;
const CHRONIC_BAR_GRADIENT = `linear-gradient(90deg, ${CHRONIC_TONES[0]} 0%, ${CHRONIC_TONES[0]} 20%, ${CHRONIC_TONES[1]} 35%, ${CHRONIC_TONES[1]} 45%, ${CHRONIC_TONES[2]} 55%, ${CHRONIC_TONES[2]} 70%, ${CHRONIC_TONES[3]} 85%, ${CHRONIC_TONES[3]} 100%)`;

const SVG_W = 600;
const SVG_H = 220;
const CURVE_TOP = 10;
const CURVE_BOTTOM = 170;
const ZONE_BOUNDARIES = [0.25, 0.50, 0.75];

// ─── CURVE SHAPE DESCRIPTIONS ───────────────────────────────────
// Derived from compass-diagram-data.js curve parameter comments + root data

const CURVE_DESCRIPTIONS = {
  fluid: [
    'Lowest activation — settled, ventral vagal. Symmetric bell contained within its zone. The nervous system at functional baseline.',
    'Sympathetic spike — proportional, temporary. Symmetric bell. Activation rises fast, returns fast when threat passes.',
    'PFC override engages after sympathetic activation. The left tail extending into Protection zone shows cognition building on the body\'s alert state.',
    'Maximum sustained activation. Extends far left through Protection and Control zones — the entire system mobilised for decisive action.',
  ],
  chronic: [
    'Activation runs continuously. The long right tail shows over-giving spreading diffusely across the gradient — energy dispersed without returning.',
    'Elevated baseline — alarm never stands down. Wider than fluid. The system has no signal for \'threat resolved.\'',
    'Habitual override — higher and wider than fluid, extending back through Protection. Suppression is expensive. The cognitive load never lifts.',
    'Massive — extends from Connection zone to the end. The system organised to prevent return. Accumulated activation at maximum.',
  ],
};

// ─── HELPERS ────────────────────────────────────────────────────

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

// ─── CURVE MATH ──────────────────────────────────────────────────
// Same skewed gaussian as CompassDiagram.jsx — { peak, height, spread, skew }

function generateCurve({ peak, height, spread, skew }) {
  const range = CURVE_BOTTOM - CURVE_TOP;
  const samples = 120;
  const points = [];
  let peakX = peak * SVG_W;
  let peakY = CURVE_BOTTOM;

  for (let i = 0; i <= samples; i++) {
    const x01 = i / samples;
    const dx = x01 - peak;
    const sigma = spread * (1 + skew * Math.sign(dx));

    let y;
    if (sigma <= 0) {
      y = Math.abs(dx) < 0.001 ? CURVE_BOTTOM - height * range : CURVE_BOTTOM;
    } else {
      const gaussian = Math.exp(-(dx * dx) / (2 * sigma * sigma));
      y = CURVE_BOTTOM - gaussian * height * range;
    }

    points.push({ x: x01 * SVG_W, y });
    if (y < peakY) {
      peakY = y;
      peakX = x01 * SVG_W;
    }
  }

  // Stroke path (open line)
  let strokePath = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 1; i < points.length; i++) {
    strokePath += ` L ${points[i].x.toFixed(1)} ${points[i].y.toFixed(1)}`;
  }

  // Fill path (closed to baseline)
  let fillPath = `M 0 ${CURVE_BOTTOM}`;
  for (const pt of points) {
    fillPath += ` L ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
  }
  fillPath += ` L ${SVG_W} ${CURVE_BOTTOM} Z`;

  return { fillPath, strokePath, peakX, peakY };
}

// ─── COMPONENT ───────────────────────────────────────────────────

export default function ActivationCurveExplorer() {
  const [position, setPosition] = useState(0.125);
  const [isChronic, setIsChronic] = useState(false);
  const [showAllModes, setShowAllModes] = useState(false);
  const [compareFluidChronic, setCompareFluidChronic] = useState(false);
  const barRef = useRef(null);
  const isDragging = useRef(false);

  const selectedMode = getModeIndex(position);
  const modeColor = PATTERN[PATTERN_KEYS[selectedMode]].primary;
  const chronicModeColor = CHRONIC_TONES[selectedMode];
  const accentColor = isChronic ? chronicModeColor : modeColor;

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

  // ─── Active curves ────────────────────────────────────────────

  const activeCurves = useMemo(() => {
    const src = isChronic ? CHRONIC_CURVES : FLUID_CURVES;
    if (showAllModes) return src.map((c, i) => ({ ...c, idx: i }));
    return [{ ...src[selectedMode], idx: selectedMode }];
  }, [isChronic, selectedMode, showAllModes]);

  const comparisonCurves = useMemo(() => {
    if (!compareFluidChronic) return [];
    const other = isChronic ? FLUID_CURVES : CHRONIC_CURVES;
    if (showAllModes) return other.map((c, i) => ({ ...c, idx: i }));
    return [{ ...other[selectedMode], idx: selectedMode }];
  }, [compareFluidChronic, isChronic, selectedMode, showAllModes]);

  // ─── Pre-render SVG paths ─────────────────────────────────────

  const rendered = useMemo(
    () => activeCurves.map(c => ({ ...c, ...generateCurve(c) })),
    [activeCurves],
  );

  const renderedComparison = useMemo(
    () => comparisonCurves.map(c => ({ ...c, ...generateCurve(c) })),
    [comparisonCurves],
  );

  // ─── Helpers ──────────────────────────────────────────────────

  function curveColor(idx, chronic) {
    return chronic ? CHRONIC_TONES[idx] : PATTERN[PATTERN_KEYS[idx]].primary;
  }

  const needleColor = isChronic ? CHRONIC_TONES[selectedMode] : modeColor;
  const needleSvgX = position * SVG_W;

  // ─── Render ───────────────────────────────────────────────────

  return (
    <div
      style={{
        borderRadius: RADIUS.lg,
        border: `1px solid ${hexToRgba(accentColor, 0.2)}`,
        background: hexToRgba(accentColor, 0.02),
        overflow: 'hidden',
        transition: 'border-color 300ms ease, background 300ms ease',
      }}
    >
      {/* ─── Header ──────────────────────────────────────── */}
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
              color: accentColor,
              padding: '3px 8px',
              borderRadius: 100,
              background: hexToRgba(accentColor, 0.12),
              border: `1px solid ${hexToRgba(accentColor, 0.25)}`,
              transition: 'all 300ms ease',
            }}
          >
            {isChronic ? 'Stuck Compass' : 'Fluid Compass'}
          </span>
          <span style={{ fontSize: 11, fontFamily: FONT.mono, color: TEXT.muted }}>
            Activation-Restoration Curves
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
            onClick={() => setIsChronic(false)}
            aria-label="Show fluid compass"
            aria-pressed={!isChronic}
            style={{
              padding: '4px 14px',
              fontSize: 10,
              fontFamily: FONT.mono,
              fontWeight: 600,
              letterSpacing: '0.04em',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 200ms ease',
              background: !isChronic ? hexToRgba(modeColor, 0.15) : 'transparent',
              color: !isChronic ? modeColor : TEXT.muted,
            }}
          >
            Fluid
          </button>
          <button
            onClick={() => setIsChronic(true)}
            aria-label="Show chronic compass"
            aria-pressed={isChronic}
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
              background: isChronic ? hexToRgba(chronicModeColor, 0.15) : 'transparent',
              color: isChronic ? chronicModeColor : TEXT.muted,
            }}
          >
            Chronic
          </button>
        </div>
      </div>

      {/* ─── Mode Selector Pills ─────────────────────────── */}
      <div style={{ padding: '12px 20px 0', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {MODES.map((mode, i) => {
          const isActive = selectedMode === i;
          const pillColor = isChronic ? CHRONIC_TONES[i] : PATTERN[PATTERN_KEYS[i]].primary;
          return (
            <button
              key={mode.key}
              onClick={() => setPosition(mode.center)}
              aria-pressed={isActive}
              style={{
                padding: '5px 12px',
                fontSize: 10,
                fontWeight: 700,
                fontFamily: FONT.mono,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                border: `1px solid ${isActive ? pillColor : hexToRgba(pillColor, 0.25)}`,
                borderRadius: 100,
                cursor: 'pointer',
                transition: 'all 200ms ease',
                background: isActive ? hexToRgba(pillColor, 0.15) : 'transparent',
                color: isActive ? pillColor : TEXT.hint,
              }}
            >
              {isChronic ? `Chronic ${mode.label}` : mode.label}
            </button>
          );
        })}
      </div>

      {/* ─── Options Row ─────────────────────────────────── */}
      <div
        style={{
          padding: '10px 20px 0',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <label
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            cursor: 'pointer',
            fontSize: 11,
            fontFamily: FONT.mono,
            color: TEXT.secondary,
          }}
        >
          <input
            type="checkbox"
            checked={showAllModes}
            onChange={e => setShowAllModes(e.target.checked)}
            style={{ accentColor }}
          />
          Show all modes
        </label>

        <label
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            cursor: 'pointer',
            fontSize: 11,
            fontFamily: FONT.mono,
            color: TEXT.secondary,
          }}
        >
          <input
            type="checkbox"
            checked={compareFluidChronic}
            onChange={e => setCompareFluidChronic(e.target.checked)}
            style={{ accentColor }}
          />
          Compare Fluid vs Chronic
        </label>
      </div>

      {/* ─── Curve Label ─────────────────────────────────── */}
      <div
        style={{
          padding: '10px 20px 4px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          minHeight: 28,
        }}
      >
        {!showAllModes && (
          <>
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: curveColor(selectedMode, isChronic),
                transition: 'color 200ms',
              }}
            >
              {isChronic ? `Chronic ${MODES[selectedMode].label}` : MODES[selectedMode].label}
            </span>
            <span
              style={{
                fontSize: 10,
                fontFamily: FONT.display,
                fontStyle: 'italic',
                color: hexToRgba(curveColor(selectedMode, isChronic), 0.6),
              }}
            >
              {MODES[selectedMode].conditionShort}{isChronic ? ' (stuck)' : ''}
            </span>
          </>
        )}
        {showAllModes && (
          <span style={{ fontSize: 13, fontWeight: 600, color: TEXT.primary }}>
            All {isChronic ? 'Chronic' : 'Fluid'} Modes
          </span>
        )}
        {compareFluidChronic && (
          <span style={{ fontSize: 10, fontFamily: FONT.mono, color: TEXT.hint }}>
            (dashed = {isChronic ? 'fluid' : 'chronic'} comparison)
          </span>
        )}
      </div>

      {/* ─── SVG Chart ───────────────────────────────────── */}
      <div style={{ padding: '0 20px' }}>
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
          role="img"
          aria-label="Activation-restoration curve chart showing nervous system activation across the four-mode gradient"
        >
          <defs>
            {/* Fluid fill — blue spectrum */}
            <linearGradient id="ac-fill-fluid" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={PATTERN.A.primary} stopOpacity={0.2} />
              <stop offset="33%" stopColor={PATTERN.B.primary} stopOpacity={0.2} />
              <stop offset="66%" stopColor={PATTERN.C.primary} stopOpacity={0.2} />
              <stop offset="100%" stopColor={PATTERN.D.primary} stopOpacity={0.2} />
            </linearGradient>

            {/* Chronic fill — orange spectrum */}
            <linearGradient id="ac-fill-chronic" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={CHRONIC_TONES[0]} stopOpacity={0.15} />
              <stop offset="33%" stopColor={CHRONIC_TONES[1]} stopOpacity={0.2} />
              <stop offset="66%" stopColor={CHRONIC_TONES[2]} stopOpacity={0.25} />
              <stop offset="100%" stopColor={CHRONIC_TONES[3]} stopOpacity={0.3} />
            </linearGradient>
          </defs>

          {/* Baseline reference line */}
          <line
            x1={0} y1={CURVE_BOTTOM}
            x2={SVG_W} y2={CURVE_BOTTOM}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={1}
            strokeDasharray="4 4"
          />
          <text
            x={SVG_W - 4}
            y={CURVE_BOTTOM - 4}
            fill={TEXT.hint}
            fontSize={8}
            fontFamily={FONT.mono}
            textAnchor="end"
            letterSpacing="0.08em"
          >
            BASELINE
          </text>

          {/* Zone boundary dashed lines */}
          {ZONE_BOUNDARIES.map(p => (
            <line
              key={p}
              x1={p * SVG_W} y1={CURVE_TOP}
              x2={p * SVG_W} y2={CURVE_BOTTOM}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={1}
              strokeDasharray="4 4"
            />
          ))}

          {/* Y-axis labels */}
          <text
            x={4} y={CURVE_TOP + 10}
            fill={TEXT.hint}
            fontSize={8}
            fontFamily={FONT.mono}
            letterSpacing="0.08em"
          >
            HIGH
          </text>
          <text
            x={4} y={CURVE_BOTTOM - 8}
            fill={TEXT.hint}
            fontSize={8}
            fontFamily={FONT.mono}
            letterSpacing="0.08em"
          >
            LOW
          </text>

          {/* Vertical position indicator */}
          <line
            x1={needleSvgX} y1={CURVE_BOTTOM}
            x2={needleSvgX} y2={CURVE_TOP + 5}
            stroke={needleColor}
            strokeWidth={1}
            strokeDasharray="4 4"
            opacity={0.15}
          />

          {/* Comparison curves (faded, behind main curves) */}
          {renderedComparison.map(curve => {
            const color = curveColor(curve.idx, !isChronic);
            return (
              <g key={`compare-${curve.idx}`} opacity={0.25}>
                <path
                  d={curve.fillPath}
                  fill={color}
                  opacity={0.08}
                />
                <path
                  d={curve.strokePath}
                  fill="none"
                  stroke={color}
                  strokeWidth={1.5}
                  strokeDasharray="6 4"
                />
              </g>
            );
          })}

          {/* Main curves */}
          {rendered.map(curve => {
            const color = curveColor(curve.idx, isChronic);
            return (
              <g key={`curve-${curve.idx}`}>
                {/* Fill area */}
                <path
                  d={curve.fillPath}
                  fill={isChronic ? 'url(#ac-fill-chronic)' : 'url(#ac-fill-fluid)'}
                  style={{ transition: 'opacity 200ms ease' }}
                />

                {/* Stroke line */}
                <path
                  d={curve.strokePath}
                  fill="none"
                  stroke={color}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transition: 'all 200ms ease' }}
                />

                {/* Peak dot */}
                {!showAllModes && (
                  <circle
                    cx={curve.peakX}
                    cy={curve.peakY}
                    r={4}
                    fill={color}
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth={1.5}
                  />
                )}
              </g>
            );
          })}
        </svg>
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
          aria-valuetext={`${MODES[selectedMode].label} mode`}
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
              background: isChronic ? CHRONIC_BAR_GRADIENT : BAR_GRADIENT,
              pointerEvents: 'none',
            }}
          >
            {/* Zone dividers */}
            {ZONE_BOUNDARIES.map((p) => (
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
                border: `3px solid ${needleColor}`,
                boxShadow: `0 0 16px ${hexToRgba(needleColor, 0.5)}`,
                transition: 'border-color 200ms ease, box-shadow 200ms ease',
              }}
            />
          </div>
        </div>

        {/* Mode labels — clickable buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 6,
            padding: '0 2px',
          }}
        >
          {MODES.map((m, i) => {
            const isActive = i === selectedMode;
            const color = isChronic ? CHRONIC_TONES[i] : PATTERN[PATTERN_KEYS[i]].primary;
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
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Section A: Activation Pattern ────────────── */}
      <div style={{ padding: '12px 20px 0' }}>
        <div
          style={{
            padding: '12px 16px',
            borderRadius: RADIUS.sm,
            background: hexToRgba(accentColor, 0.04),
            border: `1px solid ${hexToRgba(accentColor, 0.12)}`,
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
              color: accentColor,
              marginBottom: 6,
              transition: 'color 300ms',
            }}
          >
            Activation Pattern
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
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
                background: hexToRgba(accentColor, 0.08),
              }}
            >
              {MODES[selectedMode].activation}
            </span>
          </div>
          <div style={{ fontSize: 12, color: TEXT.secondary, lineHeight: 1.6 }}>
            {isChronic
              ? CURVE_DESCRIPTIONS.chronic[selectedMode]
              : CURVE_DESCRIPTIONS.fluid[selectedMode]}
          </div>
        </div>
      </div>

      {/* ─── Section B: Restoration ───────────────────── */}
      <div style={{ padding: '12px 20px 0' }}>
        <div
          style={{
            padding: '12px 16px',
            borderRadius: RADIUS.sm,
            background: hexToRgba(accentColor, 0.04),
            border: `1px solid ${hexToRgba(accentColor, 0.12)}`,
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
              color: accentColor,
              marginBottom: 6,
              transition: 'color 300ms',
            }}
          >
            {isChronic ? 'Regulation Substitutes' : 'Biological Restoration'}
          </div>

          {isChronic ? (
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
                  {RESTORATION.chronic[selectedMode].nonRelational.join(' · ')}
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
                  {RESTORATION.chronic[selectedMode].relational.join(' · ')}
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
                Relief: {RESTORATION.chronic[selectedMode].relief} — debris does not clear
              </div>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary }}>
                  {RESTORATION.fluid[selectedMode].name}
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
                  {RESTORATION.fluid[selectedMode].type}
                </span>
              </div>
              <div style={{ fontSize: 12, color: TEXT.secondary, lineHeight: 1.6, marginBottom: 4 }}>
                {RESTORATION.fluid[selectedMode].description}
              </div>
              <div style={{ fontSize: 10, fontFamily: FONT.mono, color: TEXT.hint }}>
                Timescale: {RESTORATION.fluid[selectedMode].timescale}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ─── Section C: Arc / Loop ────────────────────── */}
      <div style={{ padding: '12px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              fontSize: 9,
              fontFamily: FONT.mono,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: isChronic ? chronicModeColor : TEXT.muted,
            }}
          >
            {isChronic ? 'Loop' : 'Arc'}
          </span>
          <span
            style={{
              fontSize: 11,
              fontFamily: FONT.mono,
              fontWeight: 600,
              color: accentColor,
              transition: 'color 300ms',
            }}
          >
            {isChronic ? MODES[selectedMode].chronicArc : MODES[selectedMode].arc}
          </span>
        </div>
      </div>

      {/* Bottom padding */}
      <div style={{ height: 16 }} />
    </div>
  );
}
