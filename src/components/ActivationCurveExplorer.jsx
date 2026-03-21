'use client';

import { useState, useMemo } from 'react';
import {
  FONT, TEXT, BG, BORDER, RADIUS,
  PATTERN, MODE_ORANGE, hexToRgba,
} from '@/src/styles/tokens';
import { MODES } from '@/src/data/compass-diagram-data';
import {
  ACTIVATION_FLUID_CURVES,
  ACTIVATION_CHRONIC_CURVES,
  TIER_COLORS,
  TIERS,
  REGULATION_VARIANTS,
  getCurve,
  getCurvesByCompass,
  getRegulationVariant,
} from '@/src/data/activation-curve-data';

// ─── CONSTANTS ───────────────────────────────────────────────────

const PATTERN_KEYS = ['A', 'B', 'C', 'D'];

const SVG_W = 600;
const SVG_H = 220;
const CURVE_TOP = 10;
const CURVE_BOTTOM = 170;
const BAR_Y = 178;
const BAR_HEIGHT = 14;
const ZONE_BOUNDARIES = [0.25, 0.50, 0.75];

// ─── CURVE MATH ──────────────────────────────────────────────────
// Adapted from CompassDiagram.jsx generateCurve(), extended with
// floor, cutoffs, and secondaryBump support.

function generateActivationCurve(curve) {
  const {
    peak, height, spread, skew,
    floor = 0,
    cutoffLeft,
    cutoffRight,
    secondaryBump,
  } = curve;

  const range = CURVE_BOTTOM - CURVE_TOP;
  const samples = 120;
  const points = [];
  let peakX = peak * SVG_W;
  let peakY = CURVE_BOTTOM;

  for (let i = 0; i <= samples; i++) {
    const x01 = i / samples;

    // Cutoff zones — force to floor
    if ((cutoffLeft !== undefined && x01 < cutoffLeft) ||
        (cutoffRight !== undefined && x01 > cutoffRight)) {
      const y = CURVE_BOTTOM - floor * range;
      points.push({ x: x01 * SVG_W, y });
      continue;
    }

    const dx = x01 - peak;
    const sigma = spread * (1 + skew * Math.sign(dx));
    let activation = floor;

    if (sigma > 0) {
      const gaussian = Math.exp(-(dx * dx) / (2 * sigma * sigma));
      activation = floor + gaussian * (height - floor);
    } else if (Math.abs(dx) < 0.001) {
      activation = height;
    }

    // Add secondary bump (regulation variant)
    if (secondaryBump) {
      const bDx = x01 - secondaryBump.peak;
      const bGaussian = Math.exp(-(bDx * bDx) / (2 * secondaryBump.sigma * secondaryBump.sigma));
      activation = Math.min(1, activation + bGaussian * secondaryBump.amplitude);
    }

    const y = CURVE_BOTTOM - activation * range;
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

// ─── HELPERS ─────────────────────────────────────────────────────

function getModeIndex(mode) {
  return MODES.findIndex(m => m.key === mode);
}

function getCurveColor(curve) {
  if (curve.compass === 'stuck') return TIER_COLORS[curve.tier];
  const idx = getModeIndex(curve.mode);
  return PATTERN[PATTERN_KEYS[idx]]?.primary || PATTERN.A.primary;
}

// ─── COMPONENT ───────────────────────────────────────────────────

export default function ActivationCurveExplorer() {
  const [compass, setCompass] = useState('fluid');
  const [selectedMode, setSelectedMode] = useState('connection');
  const [regulationVariant, setRegulationVariant] = useState(null);
  const [showAllModes, setShowAllModes] = useState(false);
  const [compareFluidChronic, setCompareFluidChronic] = useState(false);
  const [showParams, setShowParams] = useState(false);

  const isStuck = compass === 'stuck';
  const modeIdx = getModeIndex(selectedMode);
  const modeColor = PATTERN[PATTERN_KEYS[modeIdx]]?.primary || PATTERN.A.primary;
  const accentColor = isStuck ? MODE_ORANGE : modeColor;

  // ─── Compute active curves ────────────────────────────────────

  const activeCurves = useMemo(() => {
    if (showAllModes) return getCurvesByCompass(compass);
    if (isStuck && selectedMode === 'connection' && regulationVariant) {
      const variant = getRegulationVariant(regulationVariant);
      return variant ? [variant] : [getCurve(compass, selectedMode)];
    }
    const curve = getCurve(compass, selectedMode);
    return curve ? [curve] : [];
  }, [compass, selectedMode, showAllModes, regulationVariant, isStuck]);

  // Comparison curves (opposite compass state, faded)
  const compareCurves = useMemo(() => {
    if (!compareFluidChronic) return null;
    const other = isStuck ? 'fluid' : 'stuck';
    if (showAllModes) return getCurvesByCompass(other);
    const curve = getCurve(other, selectedMode);
    return curve ? [curve] : [];
  }, [compareFluidChronic, isStuck, selectedMode, showAllModes]);

  // ─── Generate SVG paths ───────────────────────────────────────

  const renderedCurves = useMemo(() => {
    return activeCurves.map(curve => ({
      ...curve,
      ...generateActivationCurve(curve),
    }));
  }, [activeCurves]);

  const renderedCompareCurves = useMemo(() => {
    if (!compareCurves) return [];
    return compareCurves.map(curve => ({
      ...curve,
      ...generateActivationCurve(curve),
    }));
  }, [compareCurves]);

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
            {isStuck ? 'Stuck Compass' : 'Fluid Compass'}
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
            onClick={() => setCompass('fluid')}
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
            onClick={() => setCompass('stuck')}
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

      {/* ─── Mode Selector Pills ─────────────────────────── */}
      <div style={{ padding: '12px 20px 0', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {MODES.map((mode, i) => {
          const isActive = selectedMode === mode.key;
          const pillColor = isStuck ? MODE_ORANGE : PATTERN[PATTERN_KEYS[i]].primary;
          return (
            <button
              key={mode.key}
              onClick={() => setSelectedMode(mode.key)}
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
              {isStuck ? `Chronic ${mode.label}` : mode.label}
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
            style={{ accentColor: accentColor }}
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
            style={{ accentColor: accentColor }}
          />
          Compare Fluid vs Chronic
        </label>

        {/* Regulation variant selector — only for Chronic Connection */}
        {isStuck && selectedMode === 'connection' && !showAllModes && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '4px 10px',
              borderRadius: RADIUS.sm,
              background: hexToRgba(MODE_ORANGE, 0.04),
              border: `1px solid ${hexToRgba(MODE_ORANGE, 0.15)}`,
            }}
          >
            <span
              style={{
                fontSize: 9,
                fontFamily: FONT.mono,
                color: TEXT.hint,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Regulation:
            </span>
            <select
              value={regulationVariant || ''}
              onChange={e => setRegulationVariant(e.target.value || null)}
              style={{
                padding: '3px 6px',
                fontSize: 10,
                fontFamily: FONT.mono,
                background: BG.inset,
                color: TEXT.secondary,
                border: `1px solid ${BORDER.default}`,
                borderRadius: RADIUS.sm,
                cursor: 'pointer',
              }}
            >
              <option value="">Base curve</option>
              {REGULATION_VARIANTS.map(v => (
                <option key={v.id} value={v.id}>{v.label}</option>
              ))}
            </select>
          </div>
        )}
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
        {!showAllModes && activeCurves[0] && (() => {
          const curve = activeCurves[0];
          const labelColor = getCurveColor(curve);
          return (
            <>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: labelColor,
                  transition: 'color 200ms',
                }}
              >
                {curve.label}
              </span>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  fontFamily: FONT.mono,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '2px 8px',
                  borderRadius: 100,
                  border: `1px solid ${hexToRgba(labelColor, 0.25)}`,
                  color: labelColor,
                }}
              >
                {TIERS[curve.tier]?.label}
              </span>
            </>
          );
        })()}
        {showAllModes && (
          <span style={{ fontSize: 13, fontWeight: 600, color: TEXT.primary }}>
            All {isStuck ? 'Chronic' : 'Fluid'} Modes
          </span>
        )}
        {compareFluidChronic && (
          <span style={{ fontSize: 10, fontFamily: FONT.mono, color: TEXT.hint }}>
            (dashed = {isStuck ? 'fluid' : 'chronic'} comparison)
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
            {/* Gradient bar — PATTERN (blue spectrum), same for both states */}
            <linearGradient id="ac-bar-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={PATTERN.A.primary} />
              <stop offset="20%" stopColor={PATTERN.A.primary} />
              <stop offset="35%" stopColor={PATTERN.B.primary} />
              <stop offset="45%" stopColor={PATTERN.B.primary} />
              <stop offset="55%" stopColor={PATTERN.C.primary} />
              <stop offset="70%" stopColor={PATTERN.C.primary} />
              <stop offset="85%" stopColor={PATTERN.D.primary} />
              <stop offset="100%" stopColor={PATTERN.D.primary} />
            </linearGradient>

            {/* Fluid fill — blue spectrum gradient */}
            <linearGradient id="ac-fill-fluid" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={PATTERN.A.primary} stopOpacity={0.2} />
              <stop offset="33%" stopColor={PATTERN.B.primary} stopOpacity={0.2} />
              <stop offset="66%" stopColor={PATTERN.C.primary} stopOpacity={0.2} />
              <stop offset="100%" stopColor={PATTERN.D.primary} stopOpacity={0.2} />
            </linearGradient>

            {/* Chronic fill — orange-based */}
            <linearGradient id="ac-fill-chronic" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={MODE_ORANGE} stopOpacity={0.1} />
              <stop offset="50%" stopColor={MODE_ORANGE} stopOpacity={0.2} />
              <stop offset="100%" stopColor={MODE_ORANGE} stopOpacity={0.3} />
            </linearGradient>

            {/* Diagonal hatch pattern for inaccessible zones */}
            <pattern
              id="ac-hatch"
              width="8"
              height="8"
              patternTransform="rotate(45)"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0" y1="0" x2="0" y2="8"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1.5"
              />
            </pattern>

            {/* Glow filter for weapon-tier curves */}
            <filter id="ac-weapon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
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

          {/* Inaccessible zone overlays */}
          {renderedCurves.map(curve =>
            (curve.inaccessibleZones || []).map((zone, zi) => (
              <g key={`${curve.id}-zone-${zi}`}>
                <rect
                  x={zone.from * SVG_W}
                  y={CURVE_TOP}
                  width={(zone.to - zone.from) * SVG_W}
                  height={CURVE_BOTTOM - CURVE_TOP}
                  fill="url(#ac-hatch)"
                  opacity={0.6}
                />
                <text
                  x={(zone.from + zone.to) / 2 * SVG_W}
                  y={CURVE_TOP + 16}
                  fill={TEXT.hint}
                  fontSize={8}
                  fontFamily={FONT.mono}
                  textAnchor="middle"
                  letterSpacing="0.08em"
                >
                  INACCESSIBLE
                </text>
              </g>
            ))
          )}

          {/* Comparison curves (faded, behind main curves) */}
          {renderedCompareCurves.map(curve => {
            const color = getCurveColor(curve);
            return (
              <g key={`compare-${curve.id}`} opacity={0.25}>
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
          {renderedCurves.map(curve => {
            const color = getCurveColor(curve);
            const tierConfig = TIERS[curve.tier];
            const curveOpacity = curve.opacity !== undefined ? curve.opacity : 1;
            const strokeDash = tierConfig.stroke === 'dashed' ? '8 4' : undefined;
            const useGlow = curve.tier === 'weapon';
            const range = CURVE_BOTTOM - CURVE_TOP;

            return (
              <g key={curve.id} opacity={curveOpacity}>
                {/* Fill area */}
                <path
                  d={curve.fillPath}
                  fill={curve.compass === 'stuck' ? 'url(#ac-fill-chronic)' : 'url(#ac-fill-fluid)'}
                  style={{ transition: 'opacity 200ms ease' }}
                />

                {/* Stroke line */}
                <path
                  d={curve.strokePath}
                  fill="none"
                  stroke={color}
                  strokeWidth={tierConfig.strokeWidth}
                  strokeDasharray={strokeDash}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter={useGlow ? 'url(#ac-weapon-glow)' : undefined}
                  style={{ transition: 'all 200ms ease' }}
                />

                {/* Floor reference line for chronic curves */}
                {curve.floor > 0 && (
                  <line
                    x1={0}
                    y1={CURVE_BOTTOM - curve.floor * range}
                    x2={SVG_W}
                    y2={CURVE_BOTTOM - curve.floor * range}
                    stroke={color}
                    strokeWidth={1}
                    strokeDasharray="2 4"
                    opacity={0.4}
                  />
                )}

                {/* Annotations */}
                {(curve.annotations || []).map((ann, ai) => {
                  if (ann.type === 'peak') {
                    return (
                      <g key={ai}>
                        <circle
                          cx={curve.peakX}
                          cy={curve.peakY}
                          r={4}
                          fill={color}
                          stroke="rgba(255,255,255,0.8)"
                          strokeWidth={1.5}
                        />
                        <text
                          x={curve.peakX}
                          y={curve.peakY - 10}
                          fill={color}
                          fontSize={8}
                          fontFamily={FONT.mono}
                          textAnchor="middle"
                          opacity={0.8}
                        >
                          {ann.label}
                        </text>
                      </g>
                    );
                  }
                  if (ann.type === 'floor' && curve.floor > 0) {
                    const floorY = CURVE_BOTTOM - curve.floor * range;
                    return (
                      <text
                        key={ai}
                        x={4}
                        y={floorY - 4}
                        fill={color}
                        fontSize={7}
                        fontFamily={FONT.mono}
                        opacity={0.6}
                        letterSpacing="0.04em"
                      >
                        {ann.label}
                      </text>
                    );
                  }
                  return null;
                })}
              </g>
            );
          })}

          {/* Gradient bar */}
          <rect
            x={0} y={BAR_Y}
            width={SVG_W} height={BAR_HEIGHT}
            rx={4}
            fill="url(#ac-bar-gradient)"
          />

          {/* Zone dividers on gradient bar */}
          {ZONE_BOUNDARIES.map(p => (
            <line
              key={`bar-${p}`}
              x1={p * SVG_W} y1={BAR_Y}
              x2={p * SVG_W} y2={BAR_Y + BAR_HEIGHT}
              stroke="rgba(0,0,0,0.5)"
              strokeWidth={2}
            />
          ))}

          {/* Mode labels below gradient bar */}
          {MODES.map((mode, i) => {
            const labelColor = isStuck
              ? MODE_ORANGE
              : PATTERN[PATTERN_KEYS[i]].primary;
            return (
              <text
                key={mode.key}
                x={mode.center * SVG_W}
                y={BAR_Y + BAR_HEIGHT + 14}
                fill={labelColor}
                fontSize={9}
                fontWeight={700}
                fontFamily={FONT.mono}
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                {mode.label}
              </text>
            );
          })}
        </svg>
      </div>

      {/* ─── Legend ───────────────────────────────────────── */}
      <div
        style={{
          padding: '12px 20px',
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        {[
          { tier: 'signal',  color: TIER_COLORS.signal,  subtitle: 'Activation completes, returns to baseline' },
          { tier: 'barrier', color: TIER_COLORS.barrier, subtitle: 'Extended activation — floor never reaches zero' },
          { tier: 'weapon',  color: TIER_COLORS.weapon,  subtitle: 'Permanent activation — mode locked as identity' },
        ].map(item => {
          const tierConfig = TIERS[item.tier];
          return (
            <div
              key={item.tier}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
                flex: '1 1 160px',
                padding: '8px 12px',
                borderRadius: RADIUS.sm,
                border: `1px solid ${BORDER.default}`,
              }}
            >
              {/* Stroke sample */}
              <svg width="36" height="20" viewBox="0 0 36 20" style={{ flexShrink: 0, marginTop: 2 }}>
                {item.tier === 'weapon' && (
                  <>
                    <defs>
                      <filter id={`legend-glow-${item.tier}`} x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" />
                      </filter>
                    </defs>
                    <line
                      x1="2" y1="10" x2="34" y2="10"
                      stroke={item.color}
                      strokeWidth={tierConfig.strokeWidth}
                      strokeLinecap="round"
                      opacity={0.3}
                      filter={`url(#legend-glow-${item.tier})`}
                    />
                  </>
                )}
                <line
                  x1="2" y1="10" x2="34" y2="10"
                  stroke={item.color}
                  strokeWidth={tierConfig.strokeWidth}
                  strokeDasharray={tierConfig.stroke === 'dashed' ? '6 4' : undefined}
                  strokeLinecap="round"
                />
              </svg>

              <div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    fontFamily: FONT.mono,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: item.color,
                    marginBottom: 2,
                  }}
                >
                  {tierConfig.label}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: TEXT.hint,
                    lineHeight: 1.4,
                  }}
                >
                  {item.subtitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Parameter Inspector (collapsible) ───────────── */}
      <div style={{ padding: '0 20px 16px' }}>
        <button
          onClick={() => setShowParams(!showParams)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 0',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 9,
            fontFamily: FONT.mono,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: TEXT.hint,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              transition: 'transform 200ms ease',
              transform: showParams ? 'rotate(90deg)' : 'rotate(0deg)',
              fontSize: 8,
            }}
          >
            &#9654;
          </span>
          Parameter Inspector
        </button>

        {showParams && (
          <div
            style={{
              padding: '12px 14px',
              borderRadius: RADIUS.sm,
              border: `1px solid ${BORDER.default}`,
              background: BG.inset,
              fontFamily: FONT.mono,
              fontSize: 10,
              color: TEXT.secondary,
              lineHeight: 1.8,
              overflowX: 'auto',
            }}
          >
            {activeCurves.map(curve => (
              <div key={curve.id} style={{ marginBottom: 10 }}>
                <div
                  style={{
                    fontWeight: 700,
                    color: getCurveColor(curve),
                    marginBottom: 4,
                  }}
                >
                  {curve.id}
                </div>
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    {['peak', 'height', 'spread', 'skew', 'floor', 'tier', 'compass'].map(key => (
                      <tr key={key}>
                        <td style={{ padding: '1px 12px 1px 0', color: TEXT.hint }}>{key}</td>
                        <td style={{ padding: '1px 0' }}>
                          {typeof curve[key] === 'number' ? curve[key].toFixed(3) : curve[key]}
                        </td>
                      </tr>
                    ))}
                    {curve.opacity !== undefined && (
                      <tr>
                        <td style={{ padding: '1px 12px 1px 0', color: TEXT.hint }}>opacity</td>
                        <td style={{ padding: '1px 0' }}>{curve.opacity}</td>
                      </tr>
                    )}
                    {curve.cutoffLeft !== undefined && (
                      <tr>
                        <td style={{ padding: '1px 12px 1px 0', color: TEXT.hint }}>cutoffLeft</td>
                        <td style={{ padding: '1px 0' }}>{curve.cutoffLeft}</td>
                      </tr>
                    )}
                    {curve.cutoffRight !== undefined && (
                      <tr>
                        <td style={{ padding: '1px 12px 1px 0', color: TEXT.hint }}>cutoffRight</td>
                        <td style={{ padding: '1px 0' }}>{curve.cutoffRight}</td>
                      </tr>
                    )}
                    {curve.secondaryBump && (
                      <tr>
                        <td style={{ padding: '1px 12px 1px 0', color: TEXT.hint }}>secondaryBump</td>
                        <td style={{ padding: '1px 0' }}>
                          peak={curve.secondaryBump.peak} amp={curve.secondaryBump.amplitude} sigma={curve.secondaryBump.sigma}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            ))}
            {activeCurves.length === 0 && (
              <div style={{ color: TEXT.hint }}>No active curves</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
