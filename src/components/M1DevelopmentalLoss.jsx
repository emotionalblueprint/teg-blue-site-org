'use client';

import { useState, useEffect, useRef } from 'react';
import {
  TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba,
} from '@/src/styles/tokens';

// ─── Constants ──────────────────────────────────────────
const MODEL_COLOR = SPECTRUM.azure;
const ACCENT = '#2563eb';
const WARNING_COLOR = '#f97316';

// SVG dimensions
const VW = 880, VH = 240;
const PL = 60, PT = 24, PR = 30, PB = 50;
const PW = VW - PL - PR;
const PH = VH - PT - PB;

// Stage labels along the x-axis
const STAGES = [
  { t: 0.0, label: 'Early development' },
  { t: 0.3, label: 'No co-regulation' },
  { t: 0.6, label: 'Pathways don\'t build' },
  { t: 0.9, label: 'Accumulation' },
];

// ─── Path generation ────────────────────────────────────

function buildBaselinePath() {
  // Resting activation rises over developmental time
  const N = 200;
  const points = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    // Starts low, rises exponentially as pathways fail to build
    let y = 0.08 + 0.55 * (1 - Math.exp(-3.2 * t));
    // Add subtle biological noise
    y += 0.012 * Math.sin(t * 45) * (0.3 + t * 0.7);
    points.push({ t, y: Math.max(0, Math.min(1, y)) });
  }
  return points;
}

function buildShutdownLine() {
  // Shutdown threshold — roughly constant, slight natural variation
  const N = 200;
  const points = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    let y = 0.82 - 0.04 * Math.sin(t * 8 + 0.5);
    points.push({ t, y: Math.max(0, Math.min(1, y)) });
  }
  return points;
}

function toSvgPath(points) {
  return points.map(({ t, y }, i) => {
    const x = (PL + t * PW).toFixed(1);
    const yy = (PT + (1 - y) * PH).toFixed(1);
    return `${i === 0 ? 'M' : 'L'}${x},${yy}`;
  }).join('');
}

function toSvgPathUpTo(points, upTo) {
  const filtered = points.filter(p => p.t <= upTo + 0.006);
  return toSvgPath(filtered);
}

// ─── Component ──────────────────────────────────────────

export default function M1DevelopmentalLoss() {
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const t0Ref = useRef(null);

  const baseline = buildBaselinePath();
  const shutdown = buildShutdownLine();

  // Scroll trigger
  useEffect(() => {
    if (hasStarted) return;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasStarted]);

  // Animation
  useEffect(() => {
    if (!hasStarted) return;
    const DURATION = 4000;
    const tick = (ts) => {
      if (!t0Ref.current) t0Ref.current = ts;
      const p = Math.min((ts - t0Ref.current) / DURATION, 1);
      setProgress(p);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hasStarted]);

  const baselinePath = toSvgPathUpTo(baseline, progress);
  const shutdownPath = toSvgPath(shutdown);

  // Current y-values for the gap indicator
  const bIdx = Math.min(Math.round(progress * (baseline.length - 1)), baseline.length - 1);
  const sIdx = Math.min(Math.round(progress * (shutdown.length - 1)), shutdown.length - 1);
  const baselineY = baseline[bIdx]?.y ?? 0;
  const shutdownY = shutdown[sIdx]?.y ?? 0;
  const gap = shutdownY - baselineY;
  const gapPct = Math.max(0, Math.round(gap / shutdownY * 100));
  const cx = PL + progress * PW;

  // Fill area between baseline and shutdown (the narrowing window)
  const fillPath = hasStarted && progress > 0.02
    ? (() => {
        const bFiltered = baseline.filter(p => p.t <= progress + 0.006);
        const sFiltered = shutdown.filter(p => p.t <= progress + 0.006);
        const bPath = bFiltered.map(({ t, y }) =>
          `${(PL + t * PW).toFixed(1)},${(PT + (1 - y) * PH).toFixed(1)}`
        );
        const sReverse = [...sFiltered].reverse().map(({ t, y }) =>
          `${(PL + t * PW).toFixed(1)},${(PT + (1 - y) * PH).toFixed(1)}`
        );
        return `M${bPath.join('L')}L${sReverse.join('L')}Z`;
      })()
    : '';

  return (
    <section ref={sectionRef} style={{ marginBottom: 32 }}>
      {/* ─── Legend ─────────────────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16,
        marginBottom: 8, flexWrap: 'wrap',
      }}>
        {[
          [MODEL_COLOR, 'Resting activation', false],
          [WARNING_COLOR, 'Shutdown threshold', true],
        ].map(([color, label, dashed]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width="20" height="8">
              <line x1="0" y1="4" x2="20" y2="4"
                stroke={color} strokeWidth="1.5"
                strokeDasharray={dashed ? '4,3' : 'none'} />
            </svg>
            <span style={{
              fontFamily: FONT.mono, fontSize: 8, color,
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              {label}
            </span>
          </div>
        ))}
        {progress > 0.5 && (
          <span style={{
            fontFamily: FONT.mono, fontSize: 8,
            color: gap < 0.2 ? WARNING_COLOR : TEXT.hint,
            letterSpacing: '0.08em',
            marginLeft: 'auto',
            transition: 'color 0.3s ease',
          }}>
            Window: {gapPct}%
          </span>
        )}
      </div>

      {/* ─── SVG ───────────────────────────── */}
      <svg viewBox={`0 0 ${VW} ${VH}`} style={{
        width: '100%', height: 'auto', display: 'block',
      }}>
        {/* Grid */}
        {[0.25, 0.5, 0.75, 1].map(v => (
          <line key={v}
            x1={PL} y1={PT + (1 - v) * PH}
            x2={PL + PW} y2={PT + (1 - v) * PH}
            stroke={hexToRgba(ACCENT, 0.05)} strokeWidth="1" />
        ))}

        {/* Axes */}
        <line x1={PL} y1={PT + PH} x2={PL + PW} y2={PT + PH}
          stroke={hexToRgba(ACCENT, 0.12)} strokeWidth="1" />
        <line x1={PL} y1={PT} x2={PL} y2={PT + PH}
          stroke={hexToRgba(ACCENT, 0.12)} strokeWidth="1" />

        {/* Y-axis label */}
        <text x={16} y={PT + PH / 2} textAnchor="middle"
          transform={`rotate(-90,16,${PT + PH / 2})`}
          style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 7,
            fill: TEXT.hint, letterSpacing: '0.12em',
          }}>
          ACTIVATION LEVEL
        </text>

        {/* Stage markers */}
        {STAGES.map(stage => {
          const sx = PL + stage.t * PW;
          const reached = progress >= stage.t;
          return (
            <g key={stage.label}>
              <line x1={sx} y1={PT + PH} x2={sx} y2={PT + PH + 6}
                stroke={reached ? hexToRgba(MODEL_COLOR, 0.4) : hexToRgba(ACCENT, 0.1)}
                strokeWidth="1" />
              <text x={sx + 4} y={PT + PH + 18} textAnchor="start"
                style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 7.5,
                  fill: reached ? TEXT.muted : TEXT.hint,
                  letterSpacing: '0.04em',
                  transition: 'fill 0.3s ease',
                }}>
                {stage.label}
              </text>
            </g>
          );
        })}

        {/* Gap fill — the narrowing window */}
        {fillPath && (
          <path d={fillPath} fill={`url(#m1-gap-grad)`} />
        )}

        <defs>
          <linearGradient id="m1-gap-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={MODEL_COLOR} stopOpacity="0.08" />
            <stop offset="100%" stopColor={WARNING_COLOR} stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {/* Shutdown threshold — full ghost + revealed */}
        <path d={shutdownPath} fill="none"
          stroke={WARNING_COLOR} strokeWidth="1"
          strokeDasharray="5,4" strokeOpacity="0.25" />

        {/* Baseline — ghost + revealed */}
        <path d={toSvgPath(baseline)} fill="none"
          stroke={MODEL_COLOR} strokeWidth="1" strokeOpacity="0.08" />
        {hasStarted && (
          <path d={baselinePath} fill="none"
            stroke={MODEL_COLOR} strokeWidth="2.2" strokeOpacity="0.9" />
        )}

        {/* Cursor dots */}
        {progress > 0.03 && (
          <>
            <circle
              cx={cx}
              cy={PT + (1 - baselineY) * PH}
              r="3" fill={MODEL_COLOR} />
            <circle
              cx={cx}
              cy={PT + (1 - shutdownY) * PH}
              r="3" fill={WARNING_COLOR} fillOpacity="0.6" />

            {/* Gap line between dots */}
            <line
              x1={cx} y1={PT + (1 - baselineY) * PH}
              x2={cx} y2={PT + (1 - shutdownY) * PH}
              stroke={hexToRgba(MODEL_COLOR, 0.3)} strokeWidth="1"
              strokeDasharray="2,2" />
          </>
        )}

        {/* End labels */}
        {progress >= 0.98 && (
          <>
            <text
              x={PL + PW + 8}
              y={PT + (1 - baselineY) * PH + 4}
              style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 8,
                fill: MODEL_COLOR,
              }}>
              elevated
            </text>
            <text
              x={PL + PW + 8}
              y={PT + (1 - shutdownY) * PH + 4}
              style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 8,
                fill: WARNING_COLOR,
              }}>
              shutdown
            </text>
          </>
        )}
      </svg>

      {/* ─── Annotation ────────────────────── */}
      {progress >= 0.85 && (
        <div style={{
          marginTop: 12,
          padding: '12px 16px',
          borderRadius: 8,
          background: `linear-gradient(135deg, ${hexToRgba(WARNING_COLOR, 0.06)}, transparent)`,
          border: `1px solid ${hexToRgba(WARNING_COLOR, 0.15)}`,
          borderLeft: `3px solid ${WARNING_COLOR}`,
          animation: 'm1DevFadeIn 0.4s ease',
        }}>
          <style>{`
            @keyframes m1DevFadeIn {
              from { opacity: 0; transform: translateY(6px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <p style={{
            fontSize: 13, lineHeight: 1.65,
            color: TEXT.secondary, margin: 0,
          }}>
            When the pathways never build, the activation accumulates, the baseline elevates, and the window between resting activation and shutdown narrows. Any new activation triggers the only remaining response — <span style={{ color: WARNING_COLOR, fontWeight: 600 }}>dorsal shutdown</span>.
          </p>
        </div>
      )}
    </section>
  );
}
