'use client';

import { useState, useEffect, useRef } from 'react';
import {
  TEXT, BORDER, FONT, SPECTRUM, RADIUS,
  hexToRgba, gradientCardBg, diagramContainer,
} from '../styles/tokens';

// ─── Constants ──────────────────────────────────────
const EVAL_COLOR = SPECTRUM.slate;     // #808493 — the scanner
const SAFETY_COLOR = SPECTRUM.azure;   // #76e2ff — open
const THREAT_COLOR = SPECTRUM.cobalt;  // #0590e5 — mobilised

// SVG
const SIZE = 300;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 115;
const SWEEP_DURATION = 3000; // one full rotation

// ─── Component ──────────────────────────────────────

export default function M2SafetyEvaluation() {
  const [mode, setMode] = useState(null);       // null | 'safety' | 'threat'
  const [sweepAngle, setSweepAngle] = useState(0);
  const [sweeping, setSweeping] = useState(false);
  const [result, setResult] = useState(null);    // null | 'safety' | 'threat'
  const rafRef = useRef(null);
  const t0Ref = useRef(null);

  function startSweep(type) {
    cancelAnimationFrame(rafRef.current);
    t0Ref.current = null;
    setMode(type);
    setSweepAngle(0);
    setSweeping(true);
    setResult(null);
  }

  // Sweep animation
  useEffect(() => {
    if (!sweeping) return;
    const tick = (ts) => {
      if (!t0Ref.current) t0Ref.current = ts;
      const elapsed = ts - t0Ref.current;
      const p = Math.min(elapsed / SWEEP_DURATION, 1);
      // Ease out — slows as it finishes
      const eased = 1 - Math.pow(1 - p, 2.5);
      setSweepAngle(eased * 360);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setSweeping(false);
        setResult(mode);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [sweeping, mode]);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  // Derived
  const sweepRad = (sweepAngle - 90) * Math.PI / 180;
  const sweepX = CX + R * Math.cos(sweepRad);
  const sweepY = CY + R * Math.sin(sweepRad);

  // Active color — shifts during sweep, lands on result
  const activeColor = result
    ? (result === 'safety' ? SAFETY_COLOR : THREAT_COLOR)
    : sweeping
      ? EVAL_COLOR
      : EVAL_COLOR;

  // Ring builds as sweep progresses
  const resultColor = mode === 'safety' ? SAFETY_COLOR : THREAT_COLOR;
  const ringSegments = [];
  if (sweeping || result) {
    const segCount = 60;
    const maxAngle = result ? 360 : sweepAngle;
    for (let i = 0; i < segCount; i++) {
      const a1 = (i / segCount) * 360;
      if (a1 > maxAngle) break;
      const a2 = Math.min(((i + 1) / segCount) * 360, maxAngle);
      const r1 = (a1 - 90) * Math.PI / 180;
      const r2 = (a2 - 90) * Math.PI / 180;
      const rInner = R - 5;
      const rOuter = R;
      ringSegments.push({
        key: i,
        d: `M${CX + rInner * Math.cos(r1)},${CY + rInner * Math.sin(r1)} L${CX + rOuter * Math.cos(r1)},${CY + rOuter * Math.sin(r1)} A${rOuter},${rOuter} 0 0,1 ${CX + rOuter * Math.cos(r2)},${CY + rOuter * Math.sin(r2)} L${CX + rInner * Math.cos(r2)},${CY + rInner * Math.sin(r2)} A${rInner},${rInner} 0 0,0 ${CX + rInner * Math.cos(r1)},${CY + rInner * Math.sin(r1)} Z`,
      });
    }
  }

  // Sweep trail
  const trailDeg = 30;
  const trailStart = sweepAngle - trailDeg;
  const trailRad = (trailStart - 90) * Math.PI / 180;
  const trailX = CX + R * Math.cos(trailRad);
  const trailY = CY + R * Math.sin(trailRad);

  // Card content depends on result
  const cardData = result === 'safety'
    ? {
        label: 'Safety detected → engage',
        body: 'The evaluation reads safety. Perception broadens, social engagement comes online, the body settles. Resources become available for connection, learning, and repair.',
        ref: 'Porges, 2011',
        color: SAFETY_COLOR,
      }
    : result === 'threat'
    ? {
        label: 'Threat detected → protect',
        body: 'The evaluation reads threat. Attention narrows, muscles tense, heart rate rises, cognition simplifies — the entire system reorganises before conscious awareness forms an interpretation.',
        ref: 'LeDoux, 1996',
        color: THREAT_COLOR,
      }
    : null;

  return (
    <section style={{ marginBottom: 32, ...diagramContainer() }}>
      <style>{`
        .m2-cse-layout {
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .m2-cse-right {
          flex: 1;
          min-width: 260px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        @media (max-width: 640px) {
          .m2-cse-layout {
            flex-direction: column;
          }
        }
      `}</style>

      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        marginBottom: 16, flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: EVAL_COLOR,
          letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
        }}>
          Neuroception
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: TEXT.hint,
          letterSpacing: '0.06em',
        }}>
          Is there enough safety to engage, or is protection needed?
        </span>
        {result && (
          <span style={{
            fontFamily: FONT.mono, fontSize: 10, fontWeight: 600,
            color: result === 'safety' ? SAFETY_COLOR : THREAT_COLOR,
            marginLeft: 'auto',
          }}>
            {result === 'safety' ? 'Engage' : 'Protect'}
          </span>
        )}
      </div>

      <div className="m2-cse-layout">
        {/* ─── Radar SVG ────────────────── */}
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} style={{
          width: 280, height: 280, flexShrink: 0,
        }}>
          {/* Background glow — appears on result */}
          {result && (
            <circle cx={CX} cy={CY} r={R * 0.8}
              fill={hexToRgba(resultColor, 0.06)}
              style={{ transition: 'fill 0.6s ease' }}
            />
          )}

          {/* Radar rings */}
          {[0.33, 0.66, 1].map(f => (
            <circle key={f} cx={CX} cy={CY} r={R * f}
              fill="none" stroke={hexToRgba(EVAL_COLOR, 0.08)}
              strokeWidth="1" />
          ))}

          {/* Cross hairs */}
          <line x1={CX} y1={CY - R} x2={CX} y2={CY + R}
            stroke={hexToRgba(EVAL_COLOR, 0.05)} strokeWidth="1" />
          <line x1={CX - R} y1={CY} x2={CX + R} y2={CY}
            stroke={hexToRgba(EVAL_COLOR, 0.05)} strokeWidth="1" />

          {/* Result ring — builds during sweep, stays on result */}
          {ringSegments.map(seg => (
            <path key={seg.key} d={seg.d}
              fill={resultColor} fillOpacity={result ? 0.35 : 0.2} />
          ))}

          {/* Sweep trail */}
          {sweeping && sweepAngle > 5 && (
            <>
              <defs>
                <radialGradient id="m2-cse-trail">
                  <stop offset="0%" stopColor={EVAL_COLOR} stopOpacity="0" />
                  <stop offset="100%" stopColor={EVAL_COLOR} stopOpacity="0.08" />
                </radialGradient>
              </defs>
              <path
                d={`M${CX},${CY} L${trailX.toFixed(1)},${trailY.toFixed(1)} A${R},${R} 0 0,1 ${sweepX.toFixed(1)},${sweepY.toFixed(1)} Z`}
                fill="url(#m2-cse-trail)"
              />
            </>
          )}

          {/* Sweep arm */}
          {sweeping && (
            <line x1={CX} y1={CY} x2={sweepX} y2={sweepY}
              stroke={EVAL_COLOR}
              strokeWidth="1.5" strokeOpacity="0.5" />
          )}

          {/* Center dot */}
          <circle cx={CX} cy={CY} r="6"
            fill={hexToRgba(activeColor, 0.25)}
            style={{ transition: 'fill 0.5s ease' }} />
          <circle cx={CX} cy={CY} r="3"
            fill={activeColor}
            style={{ transition: 'fill 0.5s ease' }} />

          {/* Result label in center */}
          {result && (
            <>
              <text x={CX} y={CY - 16} textAnchor="middle"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 8, fontWeight: 600,
                  letterSpacing: '0.14em',
                  fill: resultColor,
                  textTransform: 'uppercase',
                }}>
                {result === 'safety' ? 'Safety' : 'Threat'}
              </text>
              <text x={CX} y={CY + 24} textAnchor="middle"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 7,
                  letterSpacing: '0.08em',
                  fill: TEXT.hint,
                }}>
                {result === 'safety' ? 'System opens' : 'System mobilises'}
              </text>
            </>
          )}

          {/* Idle label */}
          {!sweeping && !result && (
            <text x={CX} y={CY + 4} textAnchor="middle"
              dominantBaseline="central"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 7,
                letterSpacing: '0.08em',
                fill: TEXT.hint,
              }}>
              Press to evaluate
            </text>
          )}
        </svg>

        {/* ─── Right side: buttons + card ── */}
        <div className="m2-cse-right">
          {/* Two buttons */}
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={() => startSweep('safety')}
              disabled={sweeping}
              style={{
                flex: 1,
                padding: '10px 16px',
                borderRadius: RADIUS.md,
                border: `1.5px solid ${result === 'safety' ? SAFETY_COLOR : hexToRgba(SAFETY_COLOR, 0.3)}`,
                background: result === 'safety' ? hexToRgba(SAFETY_COLOR, 0.12) : 'transparent',
                cursor: sweeping ? 'default' : 'pointer',
                opacity: sweeping ? 0.5 : 1,
                transition: 'all 0.3s ease',
                textAlign: 'left',
              }}
            >
              <div style={{
                fontFamily: FONT.mono, fontSize: 9, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: SAFETY_COLOR, marginBottom: 3,
              }}>
                Safety
              </div>
              <div style={{
                fontFamily: FONT.mono, fontSize: 7.5,
                color: TEXT.hint, letterSpacing: '0.04em',
              }}>
                Engage
              </div>
            </button>

            <button
              onClick={() => startSweep('threat')}
              disabled={sweeping}
              style={{
                flex: 1,
                padding: '10px 16px',
                borderRadius: RADIUS.md,
                border: `1.5px solid ${result === 'threat' ? THREAT_COLOR : hexToRgba(THREAT_COLOR, 0.3)}`,
                background: result === 'threat' ? hexToRgba(THREAT_COLOR, 0.12) : 'transparent',
                cursor: sweeping ? 'default' : 'pointer',
                opacity: sweeping ? 0.5 : 1,
                transition: 'all 0.3s ease',
                textAlign: 'left',
              }}
            >
              <div style={{
                fontFamily: FONT.mono, fontSize: 9, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: THREAT_COLOR, marginBottom: 3,
              }}>
                Threat
              </div>
              <div style={{
                fontFamily: FONT.mono, fontSize: 7.5,
                color: TEXT.hint, letterSpacing: '0.04em',
              }}>
                Protect
              </div>
            </button>
          </div>

          {/* Evaluation description — always visible */}
          <div style={{
            padding: '14px 14px 16px',
            borderRadius: RADIUS.lg,
            border: `1px solid ${hexToRgba(EVAL_COLOR, 0.2)}`,
            borderLeft: `3px solid ${EVAL_COLOR}`,
            background: gradientCardBg(EVAL_COLOR, 0.04),
          }}>
            <div style={{
              fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: EVAL_COLOR, marginBottom: 6,
            }}>
              Continuous evaluation
            </div>
            <p style={{
              fontSize: 13, lineHeight: 1.65,
              color: TEXT.secondary, margin: 0, marginBottom: 6,
            }}>
              The nervous system monitors safety and threat below conscious awareness — automatic, rapid, and based on experienced safety, not objective conditions.
            </p>
            <span style={{
              fontFamily: FONT.mono, fontSize: 7.5,
              color: TEXT.hint, letterSpacing: '0.04em',
            }}>
              Porges, 2011
            </span>
          </div>

          {/* Result card — appears after sweep */}
          {cardData && (
            <div style={{
              padding: '14px 14px 16px',
              borderRadius: RADIUS.lg,
              border: `1px solid ${hexToRgba(cardData.color, 0.25)}`,
              borderLeft: `3px solid ${cardData.color}`,
              background: gradientCardBg(cardData.color, 0.06),
              animation: 'm2CseCardIn 0.4s ease',
            }}>
              <style>{`
                @keyframes m2CseCardIn {
                  from { opacity: 0; transform: translateY(6px); }
                  to { opacity: 1; transform: translateY(0); }
                }
              `}</style>
              <div style={{
                fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: cardData.color, marginBottom: 6,
              }}>
                {cardData.label}
              </div>
              <p style={{
                fontSize: 13, lineHeight: 1.65,
                color: TEXT.secondary, margin: 0, marginBottom: 6,
              }}>
                {cardData.body}
              </p>
              <span style={{
                fontFamily: FONT.mono, fontSize: 7.5,
                color: TEXT.hint, letterSpacing: '0.04em',
              }}>
                {cardData.ref}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
