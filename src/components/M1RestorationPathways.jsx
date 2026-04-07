'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import {
  TEXT, BORDER, FONT, SPECTRUM, MODEL_COLORS, MAIN_ORG, RADIUS,
  hexToRgba, gradientCardBg, diagramContainer,
} from '../styles/tokens';

const MODEL_COLOR = MODEL_COLORS.M1;
const CHART_BLUE = MAIN_ORG.accent;
const SOMATIC_COLOR = SPECTRUM.sky;       // ice — body's own channels
const RELATIONAL_COLOR = SPECTRUM.indigo;  // violet — requires another person
const MISMATCH_COLOR = '#e87b35';          // orange — pathway doesn't match

// ─── Chart constants ─────────────────────────────────
const VW = 880, VH = 200;
const PL = 44, PT = 20, PR = 80, PB = 48;
const PW = VW - PL - PR;
const PH = VH - PT - PB;
const DURATION = 4500;

// ─── View data ──────────────────────────────────────
const VIEWS = {
  somatic: {
    label: 'Somatic',
    color: SOMATIC_COLOR,
    cards: [
      {
        t: 0.08,
        label: 'Signal fires',
        body: 'Threat, boundary, demand-resource mismatch — the nervous system detects a body-state condition.',
        ref: 'Frijda, 1986',
      },
      {
        t: 0.38,
        label: 'Somatic restoration',
        body: 'Breathing, movement, time, stillness, crying, sleep. The body runs the sequence — stress hormones metabolise, muscles release, HPA axis stands down.',
        ref: 'Levine, 1997',
      },
      {
        t: 0.72,
        label: 'Activation resolves',
        body: 'The nervous system returns toward physiological baseline. The signal has completed its arc.',
        ref: 'Porges, 2011',
      },
    ],
  },
  relational: {
    label: 'Relational',
    color: RELATIONAL_COLOR,
    cards: [
      {
        t: 0.08,
        label: 'Signal fires',
        body: 'Bond, connection, inclusion, recognition — the nervous system detects a belonging-state condition.',
        ref: 'Bowlby, 1969',
      },
      {
        t: 0.38,
        label: 'Relational restoration',
        body: 'Another person stays. Provides relational evidence. Co-regulation — the presence of another who provides what the signal content requires.',
        ref: 'Schore, 2003',
      },
      {
        t: 0.72,
        label: 'Activation resolves',
        body: 'The nervous system returns toward physiological baseline. The relational evidence completed the restoration sequence.',
        ref: 'Porges, 2011',
      },
    ],
  },
  mismatch: {
    label: 'Mismatch',
    color: MISMATCH_COLOR,
    cards: [
      {
        t: 0.08,
        label: 'Signal fires',
        body: 'Belonging at risk — a relational signal. The nervous system has detected something about the state of the bond.',
        ref: 'Bowlby, 1969',
      },
      {
        t: 0.38,
        label: 'Somatic techniques applied',
        body: 'Breathing, exercise, grounding. Discharge occurs — but does not match signal content. The body has moved but the question remains unanswered.',
        ref: 'Levine, 1997',
      },
      {
        t: 0.72,
        label: 'Activation remains',
        body: 'The signal is still active. The body carries it forward. The pathway must match the content.',
        ref: 'TEG-Blue',
      },
    ],
  },
};

// ─── Waveform generation ────────────────────────────

function buildWave(viewKey) {
  const N = 400;
  const points = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    let y;

    if (t < 0.05) {
      // Baseline
      y = 0;
    } else if (t < 0.30) {
      // Rise — signal activates
      const u = (t - 0.05) / 0.25;
      y = 0.88 * (1 - Math.exp(-6 * u));
    } else if (t < 0.42) {
      // Peak plateau
      const u = (t - 0.30) / 0.12;
      y = 0.88 - 0.02 * Math.sin(u * Math.PI * 2);
    } else {
      // Descent phase — depends on view
      const u = (t - 0.42) / 0.58;

      if (viewKey === 'somatic') {
        // Clean return to baseline
        y = 0.86 * Math.exp(-4.5 * u);
        y += 0.01 * Math.sin(u * 30) * Math.exp(-3 * u);
      } else if (viewKey === 'relational') {
        // Also returns, but slower — co-regulation takes time
        y = 0.86 * Math.exp(-3 * u);
        y += 0.015 * Math.sin(u * 20) * Math.exp(-2 * u);
      } else {
        // Mismatch: partial drop then plateau at elevated level
        const drop = 0.86 * Math.exp(-2 * u);
        const floor = 0.52;
        y = Math.max(floor, drop);
        // Restless oscillation — unresolved
        y += 0.025 * Math.sin(u * 35) * Math.exp(-0.8 * u);
      }
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

// ─── Step markers on the timeline ───────────────────
const STEPS = [
  { t: 0.08, label: 'Signal' },
  { t: 0.38, label: 'Pathway' },
  { t: 0.72, label: 'Outcome' },
];

// ─── Component ──────────────────────────────────────

export default function M1RestorationPathways() {
  const [activeView, setActiveView] = useState('somatic');
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [done, setDone] = useState(false);
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const t0Ref = useRef(null);
  const runRef = useRef(0);
  const playedViews = useRef(new Set());

  const view = VIEWS[activeView];
  const wave = useMemo(() => buildWave(activeView), [activeView]);

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

  // Animate on view change
  useEffect(() => {
    if (!hasStarted) return;
    if (playedViews.current.has(activeView)) {
      setProgress(1);
      setDone(true);
    } else {
      playedViews.current.add(activeView);
      play();
    }
  }, [activeView]);

  // Animation loop
  useEffect(() => {
    if (!hasStarted || done) return;
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
  }, [hasStarted, done, runRef.current]);

  // Derived
  const cx = PL + progress * PW;
  const cursorY = PT + (1 - yAt(wave, progress)) * PH;
  const revealPath = toPath(wave, progress);
  const ghostPath = toPath(wave);
  const isMismatch = activeView === 'mismatch';

  return (
    <section ref={sectionRef} style={{ marginBottom: 32, ...diagramContainer() }}>
      <style>{`
        .m1-rest-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 16px;
        }
        .m1-rest-card {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .m1-rest-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .m1-rest-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Legend + view toggle */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        marginBottom: 8, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <svg width="22" height="8">
            <line x1="0" y1="4" x2="22" y2="4" stroke={view.color} strokeWidth="1.5" />
          </svg>
          <span style={{
            fontFamily: FONT.mono, fontSize: 8, color: view.color,
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            Activation
          </span>
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          {done && (
            <button
              onClick={() => { playedViews.current.delete(activeView); play(); }}
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
          {Object.entries(VIEWS).map(([key, v]) => (
            <button
              key={key}
              onClick={() => setActiveView(key)}
              style={{
                fontFamily: FONT.mono,
                fontSize: 10,
                fontWeight: 600,
                padding: '5px 10px',
                borderRadius: 5,
                border: `1px solid ${activeView === key ? v.color : BORDER.default}`,
                background: activeView === key ? hexToRgba(v.color, 0.12) : 'transparent',
                color: activeView === key ? v.color : TEXT.muted,
                cursor: 'pointer',
                transition: 'all 150ms ease',
                letterSpacing: '0.02em',
              }}
            >
              {v.label}
            </button>
          ))}
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
            ACTIVATION
          </text>

          {/* Step markers */}
          {STEPS.map((step, i) => {
            const sx = PL + step.t * PW;
            const reached = progress >= step.t;
            return (
              <g key={step.label}>
                <line x1={sx} y1={PT - 4} x2={sx} y2={PT + PH}
                  stroke={hexToRgba(view.color, reached ? 0.25 : 0.06)}
                  strokeWidth="1" strokeDasharray="3,4" />
                <text x={sx} y={PT + PH + 14} textAnchor="middle"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 8,
                    fontWeight: 600, letterSpacing: '0.1em',
                    fill: reached ? view.color : TEXT.hint,
                    transition: 'fill 0.3s ease',
                    textTransform: 'uppercase',
                  }}>
                  {step.label}
                </text>
              </g>
            );
          })}

          {/* Ghost path */}
          <path d={ghostPath} fill="none"
            stroke={view.color} strokeWidth="1" strokeOpacity="0.08" />

          {/* Revealed path */}
          {hasStarted && (
            <path d={revealPath} fill="none"
              stroke={view.color} strokeWidth="2.2" strokeOpacity="0.9" />
          )}

          {/* Cursor */}
          {progress > 0.02 && (
            <>
              <line x1={cx} y1={PT - 4} x2={cx} y2={PT + PH}
                stroke={hexToRgba('#94a3b8', 0.08)} strokeWidth="1" />
              <circle cx={cx} cy={cursorY} r="5" fill={view.color} fillOpacity="0.15" />
              <circle cx={cx} cy={cursorY} r="2.5" fill={view.color} />
            </>
          )}

          {/* End label */}
          {done && (
            <text x={PL + PW + 8} y={cursorY + 4}
              style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 8.5,
                fill: view.color,
              }}>
              {isMismatch ? 'elevated' : 'baseline'}
            </text>
          )}
        </svg>
      </div>

      {/* Three info cards */}
      <div className="m1-rest-cards">
        {view.cards.map(card => {
          const reached = progress >= card.t;
          return (
            <div key={card.label}
              className={`m1-rest-card${reached ? ' visible' : ''}`}
              style={{
                background: gradientCardBg(view.color, reached ? 0.06 : 0.02),
                padding: '14px 14px 16px',
                borderRadius: RADIUS.lg,
                border: `1px solid ${reached ? hexToRgba(view.color, 0.25) : BORDER.default}`,
                borderTop: `2px solid ${reached ? view.color : BORDER.default}`,
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
                  color: reached ? view.color : TEXT.hint,
                  transition: 'color 0.3s ease',
                }}>
                  {card.label}
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
              <span style={{
                fontFamily: FONT.mono, fontSize: 7.5,
                color: TEXT.hint, letterSpacing: '0.04em',
              }}>
                {card.ref}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mismatch principle note */}
      {isMismatch && done && (
        <div style={{
          marginTop: 12,
          padding: '12px 16px',
          borderRadius: 8,
          background: gradientCardBg(MISMATCH_COLOR, 0.06),
          border: `1px solid ${hexToRgba(MISMATCH_COLOR, 0.15)}`,
          borderLeft: `3px solid ${MISMATCH_COLOR}`,
          animation: 'm1RestNote 0.4s ease',
        }}>
          <style>{`
            @keyframes m1RestNote {
              from { opacity: 0; transform: translateY(6px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <p style={{
            fontSize: 13, lineHeight: 1.65,
            color: TEXT.secondary, margin: 0,
            fontStyle: 'italic',
          }}>
            The pathway must match the content. Somatic techniques discharge energy but do not answer the relational question the signal is carrying.
          </p>
        </div>
      )}
    </section>
  );
}
