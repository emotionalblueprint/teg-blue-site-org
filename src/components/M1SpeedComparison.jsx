'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import {
  TEXT, BORDER, FONT, SPECTRUM, MODEL_COLORS, MAIN_ORG, RADIUS,
  hexToRgba, gradientCardBg, diagramContainer,
} from '../styles/tokens';

const MODEL_COLOR = MODEL_COLORS.M1;
const CHART_BLUE = MAIN_ORG.accent;
const COGNITIVE_COLOR = SPECTRUM.indigo;

// ─── Chart constants ─────────────────────────────────
const VW = 880, VH = 200;
const PL = 44, PT = 20, PR = 70, PB = 48;
const PW = VW - PL - PR;
const PH = VH - PT - PB;
const DURATION = 5000;

// ─── Timeline markers (ms) ──────────────────────────
const MARKERS = [
  { ms: 12,  label: 'Amygdala fires',        sub: '12 ms',  color: MODEL_COLOR },
  { ms: 80,  label: 'Physiological response', sub: '80 ms',  color: MODEL_COLOR },
  { ms: 150, label: 'NS state activated',     sub: '150 ms', color: MODEL_COLOR },
  { ms: 300, label: 'Reaches cortex',         sub: '300 ms', color: COGNITIVE_COLOR },
  { ms: 500, label: 'Evaluation complete',    sub: '500 ms', color: COGNITIVE_COLOR },
];

const TOTAL_MS = 500;

// ─── Info cards (synced to animation) ───────────────
const CARDS = [
  {
    t: 12 / TOTAL_MS,
    label: 'Subcortical detection',
    sub: '12 ms',
    body: 'The amygdala detects the stimulus and begins generating a physiological response before the signal reaches the cortex.',
    color: MODEL_COLOR,
  },
  {
    t: 150 / TOTAL_MS,
    label: 'Body already responding',
    sub: '150 ms',
    body: 'Heart rate has shifted, hormones are releasing, muscles are reorganizing. A full nervous system state is active. Cognition has not yet arrived.',
    color: MODEL_COLOR,
  },
  {
    t: 300 / TOTAL_MS,
    label: 'Cognition arrives',
    sub: '300 ms',
    body: 'The signal reaches the cortex. Conscious processing begins — but the body has been responding for nearly 300 milliseconds already.',
    color: COGNITIVE_COLOR,
  },
];

// ─── Waveform generation ────────────────────────────

function buildEmotionalPath() {
  const N = 400;
  const points = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N; // 0-1, maps to 0-500ms
    const ms = t * TOTAL_MS;
    let y;

    if (ms < 5) {
      y = 0;
    } else if (ms < 12) {
      // Sharp initial rise — amygdala fires
      const u = (ms - 5) / 7;
      y = 0.35 * u * u;
    } else if (ms < 80) {
      // Rapid rise through physiological response
      const u = (ms - 12) / 68;
      y = 0.35 + 0.45 * (1 - Math.exp(-5 * u));
    } else if (ms < 150) {
      // Reaching full NS state
      const u = (ms - 80) / 70;
      y = 0.80 + 0.15 * (1 - Math.exp(-4 * u));
      // Subtle tremor
      y += 0.008 * Math.sin(u * 40);
    } else {
      // Plateau — full state active, slight settling
      const u = (ms - 150) / 350;
      y = 0.95 - 0.04 * u;
      y += 0.006 * Math.sin(u * 30);
    }

    points.push({ t, y: Math.max(0, Math.min(1, y)) });
  }
  return points;
}

function buildCognitivePath() {
  const N = 400;
  const points = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const ms = t * TOTAL_MS;
    let y;

    if (ms < 280) {
      // Nothing — signal hasn't reached cortex yet
      y = 0;
    } else if (ms < 300) {
      // Just arriving
      const u = (ms - 280) / 20;
      y = 0.05 * u;
    } else if (ms < 450) {
      // Building — conscious processing
      const u = (ms - 300) / 150;
      y = 0.05 + 0.65 * (1 - Math.exp(-3.5 * u));
    } else {
      // Completing evaluation
      const u = (ms - 450) / 50;
      y = 0.70 + 0.22 * (1 - Math.exp(-6 * u));
    }

    points.push({ t, y: Math.max(0, Math.min(1, y)) });
  }
  return points;
}

function toPath(points, upTo) {
  const filtered = upTo != null ? points.filter(p => p.t <= upTo + 0.003) : points;
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

export default function M1SpeedComparison() {
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [done, setDone] = useState(false);
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const t0Ref = useRef(null);
  const runRef = useRef(0);

  const emotional = useMemo(() => buildEmotionalPath(), []);
  const cognitive = useMemo(() => buildCognitivePath(), []);

  function play() {
    cancelAnimationFrame(rafRef.current);
    t0Ref.current = null;
    setProgress(0);
    setDone(false);
    setHasStarted(true);
    runRef.current += 1;
  }

  // Scroll trigger
  useEffect(() => {
    if (hasStarted) return;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { play(); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasStarted]);

  // Animation loop
  useEffect(() => {
    if (!hasStarted) return;
    const thisRun = runRef.current;
    const tick = (ts) => {
      if (thisRun !== runRef.current) return;
      if (!t0Ref.current) t0Ref.current = ts;
      const p = Math.min((ts - t0Ref.current) / DURATION, 1);
      setProgress(p);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setDone(true);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hasStarted, runRef.current]);

  // Derived values
  const cx = PL + progress * PW;
  const eY = PT + (1 - yAt(emotional, progress)) * PH;
  const cY = PT + (1 - yAt(cognitive, progress)) * PH;
  const currentMs = Math.round(progress * TOTAL_MS);
  const showCognitive = progress > 280 / TOTAL_MS;

  const emotionalReveal = toPath(emotional, progress);
  const cognitiveReveal = toPath(cognitive, progress);
  const emotionalGhost = toPath(emotional);
  const cognitiveGhost = toPath(cognitive);

  return (
    <section ref={sectionRef} style={{ marginBottom: 32, ...diagramContainer() }}>
      <style>{`
        .m1-speed-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 16px;
        }
        .m1-speed-card {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .m1-speed-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .m1-speed-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Legend + timer */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16,
        marginBottom: 8, flexWrap: 'wrap',
      }}>
        {[
          [MODEL_COLOR, 'Emotional pathway', 'Subcortical'],
          [COGNITIVE_COLOR, 'Cognitive pathway', 'Cortical'],
        ].map(([color, label, sub]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <svg width="22" height="8">
              <line x1="0" y1="4" x2="22" y2="4" stroke={color} strokeWidth="1.5" />
            </svg>
            <span style={{
              fontFamily: FONT.mono, fontSize: 8, color,
              letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              {label}
            </span>
            <span style={{
              fontFamily: FONT.mono, fontSize: 7, color: TEXT.hint,
              letterSpacing: '0.06em',
            }}>
              {sub}
            </span>
          </div>
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
          {progress > 0.01 && (
            <span style={{
              fontFamily: FONT.mono, fontSize: 14, fontWeight: 700,
              color: TEXT.secondary,
            }}>
              {currentMs} ms
            </span>
          )}
          {done && (
            <button
              onClick={play}
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
        <svg viewBox={`0 0 ${VW} ${VH}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
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
            PROCESSING
          </text>

          {/* Timeline markers */}
          {MARKERS.map(m => {
            const mx = PL + (m.ms / TOTAL_MS) * PW;
            const reached = currentMs >= m.ms;
            return (
              <g key={m.ms}>
                <line x1={mx} y1={PT + PH} x2={mx} y2={PT + PH + 6}
                  stroke={reached ? m.color : hexToRgba(CHART_BLUE, 0.12)} strokeWidth="1" />
                <text x={mx} y={PT + PH + 18} textAnchor="middle"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 7.5,
                    fill: reached ? m.color : TEXT.hint,
                    letterSpacing: '0.04em',
                    transition: 'fill 0.3s ease',
                  }}>
                  {m.sub}
                </text>
                {reached && (
                  <text x={mx} y={PT + PH + 30} textAnchor="middle"
                    style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: 6,
                      fill: hexToRgba(m.color, 0.6),
                      letterSpacing: '0.04em',
                    }}>
                    {m.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Ghost paths */}
          <path d={emotionalGhost} fill="none"
            stroke={MODEL_COLOR} strokeWidth="1" strokeOpacity="0.08" />
          <path d={cognitiveGhost} fill="none"
            stroke={COGNITIVE_COLOR} strokeWidth="1" strokeOpacity="0.08" />

          {/* Revealed paths */}
          {hasStarted && (
            <>
              <path d={emotionalReveal} fill="none"
                stroke={MODEL_COLOR} strokeWidth="2.2" strokeOpacity="0.9" />
              {showCognitive && (
                <path d={cognitiveReveal} fill="none"
                  stroke={COGNITIVE_COLOR} strokeWidth="2" strokeOpacity="0.85" />
              )}
            </>
          )}

          {/* Cursor line */}
          {progress > 0.01 && (
            <line x1={cx} y1={PT - 4} x2={cx} y2={PT + PH}
              stroke={hexToRgba('#94a3b8', 0.08)} strokeWidth="1" />
          )}

          {/* Cursor dots */}
          {progress > 0.02 && (
            <>
              <circle cx={cx} cy={eY} r="5" fill={MODEL_COLOR} fillOpacity="0.15" />
              <circle cx={cx} cy={eY} r="2.5" fill={MODEL_COLOR} />
            </>
          )}
          {showCognitive && (
            <>
              <circle cx={cx} cy={cY} r="5" fill={COGNITIVE_COLOR} fillOpacity="0.15" />
              <circle cx={cx} cy={cY} r="2.5" fill={COGNITIVE_COLOR} />
            </>
          )}

          {/* End labels */}
          {done && (
            <>
              <text x={PL + PW + 8} y={eY + 4}
                style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 8,
                  fill: MODEL_COLOR,
                }}>
                complete
              </text>
              <text x={PL + PW + 8} y={cY + 4}
                style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 8,
                  fill: COGNITIVE_COLOR,
                }}>
                arriving
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Three info cards */}
      <div className="m1-speed-cards">
        {CARDS.map(card => {
          const reached = progress >= card.t;
          return (
            <div key={card.label}
              className={`m1-speed-card${reached ? ' visible' : ''}`}
              style={{
                background: gradientCardBg(card.color, reached ? 0.06 : 0.02),
                padding: '14px 14px 16px',
                borderRadius: RADIUS.lg,
                border: `1px solid ${reached ? hexToRgba(card.color, 0.25) : BORDER.default}`,
                borderTop: `2px solid ${reached ? card.color : BORDER.default}`,
                transition: 'border-color 0.4s ease, background 0.4s ease',
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                marginBottom: 8,
              }}>
                <span style={{
                  fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: reached ? card.color : TEXT.hint,
                  transition: 'color 0.3s ease',
                }}>
                  {card.label}
                </span>
                <span style={{
                  fontFamily: FONT.mono, fontSize: 7,
                  color: reached ? card.color : TEXT.hint,
                  opacity: 0.7,
                }}>
                  {card.sub}
                </span>
              </div>
              <p style={{
                fontSize: 13, lineHeight: 1.65,
                color: reached ? TEXT.secondary : TEXT.hint,
                transition: 'color 0.4s ease',
                margin: 0,
              }}>
                {card.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
