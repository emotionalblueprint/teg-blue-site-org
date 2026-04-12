'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  TEXT, BORDER, FONT, SPECTRUM, MODEL_COLORS, MAIN_ORG, RADIUS,
  hexToRgba, gradientCardBg, diagramContainer,
} from '../styles/tokens';

const MODEL_COLOR = MODEL_COLORS.M1;
const CHART_BLUE = MAIN_ORG.accent;

// ─── Chart constants ─────────────────────────────────
const VW = 880, VH = 200;
const PL = 44, PT = 20, PR = 80, PB = 48;
const PW = VW - PL - PR;
const PH = VH - PT - PB;
const DRAW_MS = 3800;

// ─── Phase markers on the timeline ──────────────────
const PHASES = [
  { t: 0.08, label: 'Evaluating', sub: 'Continuous monitoring', color: SPECTRUM.azure, ref: 'Porges, 2011' },
  { t: 0.35, label: 'Detected', sub: 'Condition identified', color: SPECTRUM.blue, ref: 'LeDoux, 1996' },
  { t: 0.65, label: 'Signal', sub: 'Body responds', color: SPECTRUM.cobalt, ref: 'Damasio, 1994' },
];

// ─── Signal examples ────────────────────────────────
const SIGNALS = [
  { condition: 'Threat detected', emotion: 'Fear', body: 'Sympathetic activation — heart rate rises, muscles tense, sensory acuity sharpens' },
  { condition: 'Boundary violated', emotion: 'Anger', body: 'Blood pressure rises, jaw and fists clench, energy mobilises toward the source' },
  { condition: 'Demand exceeds resources', emotion: 'Stress', body: 'Cortisol sustained, tension chronic, system braces without discharge' },
  { condition: 'Threat anticipated', emotion: 'Anxiety', body: 'Sympathetic activation without a located source — scanning, restlessness, shallow breathing' },
  { condition: 'Contamination detected', emotion: 'Disgust', body: 'Nausea, throat constriction, physical recoil — expulsion readiness' },
  { condition: 'Loss', emotion: 'Sadness', body: 'Energy withdraws, tears, slowing — system conserves and turns inward' },
  { condition: 'Belonging at risk', emotion: 'Shame', body: 'Heat, shrinking, gaze aversion — the body pulls inward and hides' },
  { condition: 'Harm done', emotion: 'Guilt', body: 'Weight in the chest, restlessness, pull toward repair — sustained discomfort orienting toward the affected person' },
  { condition: 'Safety confirmed', emotion: 'Joy', body: 'Parasympathetic ease, lightness, expansive movement, energy available for exploration' },
  { condition: 'Sustained positive condition', emotion: 'Happiness', body: 'Serotonergic tone rises — settled openness, positive affect sustained without urgency' },
  { condition: 'Value detected in another', emotion: 'Admiration', body: 'Warmth, openness, orientation toward — the body approaches what it recognises' },
  { condition: 'Own value recognised', emotion: 'Pride', body: 'Expansion, warmth, upward energy — chest lifts, posture shifts, the body opens from the inside' },
  { condition: 'Bond', emotion: 'Love', body: 'Oxytocin, warmth, orientation toward the other — the body moves closer' },
  { condition: 'Safety confirmed in a specific person', emotion: 'Trust', body: 'Guard-dropping — vagal tone shifts, muscles around eyes and throat soften, body opens to contact' },
  { condition: 'Something needed was received', emotion: 'Gratitude', body: 'Warmth, orientation toward the other, brief vulnerability in receiving — the body settles' },
  { condition: 'Other\'s state resonates', emotion: 'Compassion', body: 'Movement toward the other — resonance with the other\'s state while maintaining boundary' },
];

// ─── Wave shape varies by signal ────────────────────

function buildWave(idx) {
  const N = 300;
  const points = [];
  // Different peak heights and rise rates per signal type
  // Fear, Anger, Stress, Anxiety, Disgust, Sadness, Shame, Guilt, Joy, Happiness, Admiration, Pride, Love, Trust, Gratitude, Compassion
  const peaks = [0.92, 0.88, 0.78, 0.82, 0.90, 0.62, 0.70, 0.68, 0.75, 0.65, 0.72, 0.70, 0.68, 0.60, 0.58, 0.64];
  const rates = [8, 7, 5, 6, 9, 3.5, 4, 4, 5, 3, 4, 4.5, 3.5, 3, 3, 3.5];
  const peak = peaks[idx] || 0.78;
  const rate = rates[idx] || 5;

  for (let i = 0; i <= N; i++) {
    const t = i / N;
    let y;

    if (t < 0.06) {
      // Phase 1: Low-level monitoring — subtle baseline activity
      y = 0.03 + 0.015 * Math.sin(t * 80);
    } else if (t < 0.32) {
      // Phase 1→2 transition: Detection building
      const u = (t - 0.06) / 0.26;
      y = 0.03 + 0.12 * (1 - Math.exp(-3 * u));
      y += 0.01 * Math.sin(u * 40);
    } else if (t < 0.40) {
      // Phase 2: Condition identified — sharp recognition spike
      const u = (t - 0.32) / 0.08;
      y = 0.15 + (peak - 0.15) * (1 - Math.exp(-rate * u));
    } else if (t < 0.55) {
      // Phase 3: Peak — signal + body response
      const u = (t - 0.40) / 0.15;
      y = peak - 0.02 * Math.sin(u * Math.PI * 2);
    } else {
      // Phase 3 continued: body response stabilises
      const u = (t - 0.55) / 0.45;
      y = peak * (0.85 + 0.15 * Math.exp(-2 * u));
      y += 0.008 * Math.sin(u * 25);
    }

    points.push({ t, y: Math.max(0, Math.min(1, y)) });
  }
  return points;
}

function toPath(points, upTo) {
  const filtered = upTo != null ? points.filter(p => p.t <= upTo + 0.004) : points;
  return filtered.map(({ t, y }, i) => {
    const x = (PL + t * PW).toFixed(1);
    const yy = (PT + (1 - y) * PH).toFixed(1);
    return `${i === 0 ? 'M' : 'L'}${x},${yy}`;
  }).join('');
}

function yAt(points, t) {
  const idx = Math.min(Math.round(t * (points.length - 1)), points.length - 1);
  return points[Math.max(0, idx)]?.y ?? 0;
}

// ─── Component ──────────────────────────────────────

export default function M1SignalLifecycle() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [done, setDone] = useState(false);
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const t0Ref = useRef(null);
  const runRef = useRef(0);
  const playedRef = useRef(new Set());

  const signal = SIGNALS[selectedIdx];
  const wave = useMemo(() => buildWave(selectedIdx), [selectedIdx]);

  const startDraw = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    t0Ref.current = null;
    setProgress(0);
    setDone(false);
    setHasStarted(true);
    runRef.current += 1;
  }, []);

  // Scroll trigger
  useEffect(() => {
    if (hasStarted) return;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startDraw();
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasStarted, startDraw]);

  // On signal change
  useEffect(() => {
    if (!hasStarted) return;
    if (playedRef.current.has(selectedIdx)) {
      setProgress(1);
      setDone(true);
    } else {
      playedRef.current.add(selectedIdx);
      startDraw();
    }
  }, [selectedIdx, hasStarted, startDraw]);

  // Animation loop
  useEffect(() => {
    if (!hasStarted || done) return;
    const thisRun = runRef.current;
    const tick = (ts) => {
      if (thisRun !== runRef.current) return;
      if (!t0Ref.current) t0Ref.current = ts;
      const p = Math.min((ts - t0Ref.current) / DRAW_MS, 1);
      setProgress(p);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setDone(true);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hasStarted, done, runRef.current]);

  // Cleanup
  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  // Derived
  const cx = PL + progress * PW;
  const cursorY = PT + (1 - yAt(wave, progress)) * PH;
  const revealPath = toPath(wave, progress);
  const ghostPath = toPath(wave);

  // Cursor color follows phase
  const cursorColor = progress >= PHASES[2].t ? PHASES[2].color
    : progress >= PHASES[1].t ? PHASES[1].color
    : progress >= PHASES[0].t ? PHASES[0].color
    : SPECTRUM.slate;

  // Card content adapts to selected signal
  const cardContents = [
    {
      label: 'Continuous evaluation',
      body: 'The nervous system monitors conditions below conscious awareness — safety, threat, boundary, loss, connection, contamination.',
    },
    {
      label: signal.condition,
      body: `The nervous system has identified a specific condition. The finding is precise — ${signal.emotion.toLowerCase()} is the signal it generates.`,
    },
    {
      label: signal.emotion,
      body: signal.body,
    },
  ];

  return (
    <section ref={sectionRef} style={{ marginBottom: 32, ...diagramContainer() }}>
      <style>{`
        .m1-lc-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 16px;
        }
        .m1-lc-card {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .m1-lc-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .m1-lc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));
          gap: 6px;
        }
        @media (max-width: 768px) {
          .m1-lc-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Signal selector — top of diagram */}
      <div style={{ marginBottom: 16 }}>
        <div style={{
          fontFamily: FONT.mono, fontSize: 7.5, color: TEXT.hint,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          marginBottom: 10,
        }}>
          Select a condition to trace the signal
        </div>
        <div className="m1-lc-grid">
          {SIGNALS.map((s, i) => {
            const isActive = selectedIdx === i;
            return (
              <button
                key={s.emotion}
                onClick={() => setSelectedIdx(i)}
                style={{
                  padding: '8px 12px',
                  borderRadius: 6,
                  border: `1px solid ${isActive ? MODEL_COLOR : BORDER.default}`,
                  background: isActive ? hexToRgba(MODEL_COLOR, 0.1) : 'transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 200ms ease',
                }}
              >
                <div style={{
                  fontFamily: FONT.display,
                  fontSize: 12, fontWeight: 600,
                  color: isActive ? MODEL_COLOR : TEXT.primary,
                  transition: 'color 200ms ease',
                }}>
                  {s.emotion}
                </div>
                <div style={{
                  fontFamily: FONT.mono,
                  fontSize: 8, color: TEXT.hint, marginTop: 2,
                }}>
                  {s.condition}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16,
        marginBottom: 8, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="20" height="8">
            <defs>
              <linearGradient id="m1-lc-grad" x1="0" y1="0" x2="20" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={PHASES[0].color} />
                <stop offset="50%" stopColor={PHASES[1].color} />
                <stop offset="100%" stopColor={PHASES[2].color} />
              </linearGradient>
            </defs>
            <line x1="0" y1="4" x2="20" y2="4" stroke="url(#m1-lc-grad)" strokeWidth="1.5" />
          </svg>
          <span style={{
            fontFamily: FONT.mono, fontSize: 8, color: PHASES[1].color,
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            How an emotional signal forms
          </span>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{
            fontFamily: FONT.mono, fontSize: 8, color: TEXT.hint,
            letterSpacing: '0.06em',
          }}>
            {signal.emotion}
          </span>
          {done && (
            <button
              onClick={() => { playedRef.current.delete(selectedIdx); startDraw(); }}
              aria-label="Replay animation"
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '4px 12px',
                border: `1px solid ${BORDER.default}`,
                background: 'transparent',
                color: TEXT.muted,
                borderRadius: 6,
                fontFamily: FONT.mono,
                fontSize: 9,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M1 1v4h4" stroke={TEXT.muted} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.5 5A5 5 0 1 1 2 8.5" stroke={TEXT.muted} strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              Replay
            </button>
          )}
        </div>
      </div>

      {/* SVG Chart */}
      <div style={{ position: 'relative' }}>
        <svg viewBox={`0 0 ${VW} ${VH}`} role="img" aria-labelledby="m1-lifecycle-title m1-lifecycle-desc" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <title id="m1-lifecycle-title">Signal Lifecycle</title>
          <desc id="m1-lifecycle-desc">The three phases every emotional signal passes through: environmental evaluation, physiological detection, and conscious signal formation — complete in under 200 milliseconds.</desc>
          {/* Grid lines */}
          {[0.25, 0.5, 0.75, 1].map(v => (
            <line key={v}
              x1={PL} y1={PT + (1 - v) * PH}
              x2={PL + PW} y2={PT + (1 - v) * PH}
              stroke={hexToRgba(CHART_BLUE, 0.05)} strokeWidth="1" />
          ))}

          {/* Baseline */}
          <line x1={PL} y1={PT + PH} x2={PL + PW} y2={PT + PH}
            stroke={hexToRgba(CHART_BLUE, 0.12)} strokeWidth="1" />

          {/* Y axis */}
          <line x1={PL} y1={PT} x2={PL} y2={PT + PH}
            stroke={hexToRgba(CHART_BLUE, 0.12)} strokeWidth="1" />
          <text x={16} y={PT + PH / 2} textAnchor="middle"
            transform={`rotate(-90,16,${PT + PH / 2})`}
            style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 7,
              fill: TEXT.hint, letterSpacing: '0.12em',
            }}>
            ACTIVATION
          </text>

          {/* Gradient defs */}
          <defs>
            <linearGradient id="m1-lc-line-grad" x1={PL} y1="0" x2={PL + PW} y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={PHASES[0].color} />
              <stop offset="35%" stopColor={PHASES[1].color} />
              <stop offset="65%" stopColor={PHASES[2].color} />
              <stop offset="100%" stopColor={PHASES[2].color} />
            </linearGradient>
          </defs>

          {/* Phase markers */}
          {PHASES.map(phase => {
            const sx = PL + phase.t * PW;
            const reached = progress >= phase.t;
            return (
              <g key={phase.label}>
                <line x1={sx} y1={PT - 4} x2={sx} y2={PT + PH}
                  stroke={hexToRgba(phase.color, reached ? 0.3 : 0.06)}
                  strokeWidth="1" strokeDasharray="3,4" />
                <text x={sx} y={PT + PH + 14} textAnchor="middle"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 8,
                    fontWeight: 600, letterSpacing: '0.1em',
                    fill: reached ? phase.color : TEXT.hint,
                    transition: 'fill 0.3s ease',
                    textTransform: 'uppercase',
                  }}>
                  {phase.label}
                </text>
                <text x={sx} y={PT + PH + 26} textAnchor="middle"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 6.5,
                    letterSpacing: '0.06em',
                    fill: reached ? TEXT.muted : TEXT.hint,
                    transition: 'fill 0.3s ease',
                  }}>
                  {phase.sub}
                </text>
              </g>
            );
          })}

          {/* Ghost path */}
          <path d={ghostPath} fill="none"
            stroke="url(#m1-lc-line-grad)" strokeWidth="1" strokeOpacity="0.08" />

          {/* Revealed path */}
          {hasStarted && (
            <path d={revealPath} fill="none"
              stroke="url(#m1-lc-line-grad)" strokeWidth="2.2" strokeOpacity="0.9" />
          )}

          {/* Cursor */}
          {progress > 0.03 && (
            <>
              <circle cx={cx} cy={cursorY} r="5"
                fill={cursorColor} fillOpacity="0.15" />
              <circle cx={cx} cy={cursorY} r="2.5"
                fill={cursorColor} />
            </>
          )}

          {/* End label */}
          {done && (
            <text x={PL + PW + 8} y={cursorY + 4}
              style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 8.5,
                fill: PHASES[2].color,
              }}>
              active
            </text>
          )}
        </svg>
      </div>

      {/* Three info cards */}
      <div className="m1-lc-cards">
        {PHASES.map((phase, i) => {
          const reached = progress >= phase.t;
          const card = cardContents[i];
          return (
            <div key={phase.label}
              className={`m1-lc-card${reached ? ' visible' : ''}`}
              style={{
                background: gradientCardBg(phase.color, reached ? 0.06 : 0.02),
                padding: '14px 14px 16px',
                borderRadius: RADIUS.lg,
                border: `1px solid ${reached ? hexToRgba(phase.color, 0.25) : BORDER.default}`,
                borderTop: `2px solid ${reached ? phase.color : BORDER.default}`,
                transition: 'border-color 0.4s ease, background 0.4s ease',
                minHeight: 90,
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                marginBottom: 8,
              }}>
                <div style={{
                  width: 20, height: 20, borderRadius: '50%',
                  background: reached ? phase.color : hexToRgba(phase.color, 0.1),
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, transition: 'all 400ms ease',
                }}>
                  <span style={{
                    fontFamily: FONT.mono, fontSize: 9, fontWeight: 700,
                    color: reached ? '#fff' : TEXT.hint,
                    transition: 'color 400ms ease',
                  }}>
                    {i + 1}
                  </span>
                </div>
                <span style={{
                  fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: reached ? phase.color : TEXT.hint,
                  transition: 'color 0.3s ease',
                }}>
                  {card.label}
                </span>
              </div>
              <p style={{
                fontSize: 13, lineHeight: 1.65,
                color: reached ? TEXT.secondary : TEXT.hint,
                transition: 'color 0.4s ease',
                margin: 0, marginBottom: 8,
              }}>
                {card.body}
              </p>
              <span style={{
                fontFamily: FONT.mono, fontSize: 7.5,
                color: TEXT.hint, letterSpacing: '0.04em',
              }}>
                {phase.ref}
              </span>
            </div>
          );
        })}
      </div>

    </section>
  );
}
