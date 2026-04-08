'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, MAIN_ORG,
  hexToRgba, gradientCardBg, diagramContainer,
} from '@/src/styles/tokens';
import { EMOTIONS, BODY_SIGNATURE_GROUPS } from '@/src/data/m1-data';

// ─── Constants ──────────────────────────────────────────
const CHART_BLUE = MAIN_ORG.accent;

// Chart
const VW = 880, VH = 190;
const PL = 44, PT = 20, PR = 80, PB = 36;
const PW = VW - PL - PR;
const PH = VH - PT - PB;

// Timing
const DRAW_MS = 3800;

// Step markers on the timeline (fractional positions)
// Each step uses a distinct blue from the SPECTRUM
const STEPS = [
  { t: 0.08, label: 'Signal', sub: 'What the nervous system detected', color: SPECTRUM.azure },
  { t: 0.35, label: 'Response', sub: 'How the body reorganizes', color: SPECTRUM.blue },
  { t: 0.72, label: 'Restoration', sub: 'What resolves the activation', color: SPECTRUM.cobalt },
];

// ─── Wave generation ────────────────────────────────────

function getGroupKey(emotionKey) {
  const g = BODY_SIGNATURE_GROUPS.find(gr => gr.emotions.includes(emotionKey));
  return g?.key || 'mobilization';
}

function generateWave(emotion) {
  const N = 300;
  const points = [];
  const gk = getGroupKey(emotion.key);
  const isRelational = emotion.type === 'relational' ||
    (emotion.restorationType && emotion.restorationType.includes('relational'));

  // Peak height varies by body signature group
  const peakMap = {
    'mobilization': 0.88, 'expulsion': 0.95, 'social-withdrawal': 0.72,
    'conservation': 0.62, 'approach': 0.78, 'bonding': 0.68,
  };
  const peak = peakMap[gk] || 0.75;

  // Rise speed varies
  const riseMap = {
    'mobilization': 7, 'expulsion': 10, 'social-withdrawal': 4.5,
    'conservation': 3, 'approach': 4, 'bonding': 3.5,
  };
  const riseRate = riseMap[gk] || 5;

  for (let i = 0; i <= N; i++) {
    const t = i / N;
    let y;

    if (t < 0.04) {
      // Baseline
      y = 0;
    } else if (t < 0.32) {
      // Rise phase
      const u = (t - 0.04) / 0.28;
      y = peak * (1 - Math.exp(-riseRate * u));
    } else if (t < 0.42) {
      // Peak plateau with micro-tremor
      const u = (t - 0.32) / 0.10;
      y = peak - 0.03 * Math.sin(u * Math.PI * 2);
    } else {
      // Descent phase
      const u = (t - 0.42) / 0.58;

      if (isRelational) {
        // Relational: slow partial descent, never reaches baseline
        const floor = peak * 0.42;
        y = floor + (peak - floor) * Math.exp(-1.8 * u);
        // Subtle oscillation showing unresolved state
        y += 0.025 * Math.sin(u * 35) * Math.exp(-1.5 * u);
      } else {
        // Somatic: clean return to baseline
        y = peak * Math.exp(-4.2 * u);
        // Tiny ripple during descent
        y += 0.012 * Math.sin(u * 25) * Math.exp(-3 * u);
      }
    }

    points.push({ t, y: Math.max(0, Math.min(1, y)) });
  }

  return points;
}

function buildPath(points, upTo) {
  const filtered = upTo != null ? points.filter(p => p.t <= upTo + 0.004) : points;
  return filtered.map(({ t, y }, i) => {
    const x = (PL + t * PW).toFixed(1);
    const yy = (PT + (1 - y) * PH).toFixed(1);
    return `${i === 0 ? 'M' : 'L'}${x},${yy}`;
  }).join('');
}

function yAtProgress(points, t) {
  const idx = Math.min(Math.round(t * (points.length - 1)), points.length - 1);
  return points[Math.max(0, idx)]?.y ?? 0;
}

// ─── Component ──────────────────────────────────────────

export default function M1SignalDiagram() {
  const [activeKey, setActiveKey] = useState('fear');
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [done, setDone] = useState(false);
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const t0Ref = useRef(null);
  const runRef = useRef(0);
  const hasPlayedRef = useRef(new Set());

  const emotion = EMOTIONS.find(e => e.key === activeKey) || EMOTIONS[0];
  const wave = useMemo(() => generateWave(emotion), [emotion]);
  const isRelational = emotion.type === 'relational' ||
    (emotion.restorationType && emotion.restorationType.includes('relational'));
  // ─── Animation ──────────────────────────────────────

  const startDraw = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    t0Ref.current = null;
    setProgress(0);
    setDone(false);
    runRef.current += 1;

    const thisRun = runRef.current;
    const tick = (ts) => {
      if (thisRun !== runRef.current) return;
      if (!t0Ref.current) t0Ref.current = ts;
      const p = Math.min((ts - t0Ref.current) / DRAW_MS, 1);
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  // Start on scroll into view
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

  // Trigger draw when hasStarted or activeKey changes
  useEffect(() => {
    if (!hasStarted) return;
    // Only animate once per emotion; after that, show the full wave instantly
    if (hasPlayedRef.current.has(activeKey)) {
      setProgress(1);
      setDone(true);
    } else {
      hasPlayedRef.current.add(activeKey);
      startDraw();
    }
  }, [hasStarted, activeKey, startDraw]);

  // Manual selection — no auto-cycle
  const selectEmotion = useCallback((key) => {
    setActiveKey(key);
  }, []);

  // Cleanup
  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ─── Derived values ─────────────────────────────────

  const cx = PL + progress * PW;
  const cursorY = PT + (1 - yAtProgress(wave, progress)) * PH;
  const revealPath = buildPath(wave, progress);
  const ghostPath = buildPath(wave);

  const groupLabel = BODY_SIGNATURE_GROUPS.find(
    g => g.emotions.includes(emotion.key)
  )?.label || '';

  // Cursor color follows the gradient — picks the step color for current position
  const cursorColor = progress >= STEPS[2].t ? STEPS[2].color
    : progress >= STEPS[1].t ? STEPS[1].color
    : progress >= STEPS[0].t ? STEPS[0].color
    : SPECTRUM.slate;

  // ─── Render ─────────────────────────────────────────

  return (
    <section ref={sectionRef} style={{
      marginBottom: 32,
      position: 'relative',
      ...diagramContainer(),
    }}>
      <style>{`
        .m1-info-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 16px;
        }
        .m1-emotion-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          align-items: center;
          justify-content: center;
        }
        .m1-pill {
          height: 26px;
          border-radius: 13px;
          border: 1.5px solid ${BORDER.default};
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: ${FONT.mono};
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: ${TEXT.hint};
          transition: border-color 0.25s ease, background 0.25s ease, color 0.25s ease;
          padding: 0 10px;
          white-space: nowrap;
        }
        .m1-pill:hover {
          color: ${TEXT.secondary};
        }
        @media (max-width: 768px) {
          .m1-info-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ─── Legend ─────────────────────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16,
        marginBottom: 8, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="20" height="8">
            <defs>
              <linearGradient id="m1-legend-grad" x1="0" y1="0" x2="20" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={SPECTRUM.slate} />
                <stop offset="20%" stopColor={STEPS[0].color} />
                <stop offset="60%" stopColor={STEPS[1].color} />
                <stop offset="100%" stopColor={STEPS[2].color} />
              </linearGradient>
            </defs>
            <line x1="0" y1="4" x2="20" y2="4" stroke="url(#m1-legend-grad)" strokeWidth="1.5" />
          </svg>
          <span style={{
            fontFamily: FONT.mono, fontSize: 8, color: STEPS[1].color,
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            Activation
          </span>
        </div>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: TEXT.hint,
          letterSpacing: '0.08em',
        }}>
          {emotion.name} · {isRelational ? 'Relational' : 'Somatic'}
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 7.5, color: TEXT.hint,
          letterSpacing: '0.08em', marginLeft: 'auto',
        }}>
          {groupLabel}
        </span>
      </div>

      {/* ─── SVG Waveform ─────────────────────── */}
      <div style={{ position: 'relative' }}>
        <svg viewBox={`0 0 ${VW} ${VH}`} role="img" aria-labelledby="m1-anatomy-title m1-anatomy-desc" style={{
          width: '100%', height: 'auto', display: 'block',
        }}>
          <title id="m1-anatomy-title">Anatomy of an Emotional Signal</title>
          <desc id="m1-anatomy-desc">The universal three-step anatomy: a signal fires, the body responds, and restoration begins. Each of the 16 emotions follows this same biological sequence.</desc>
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
                  stroke={hexToRgba(step.color, reached ? 0.3 : 0.08)}
                  strokeWidth="1" strokeDasharray="3,4" />
                <text x={sx} y={PT + PH + 14} textAnchor="middle"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 8,
                    fontWeight: 600, letterSpacing: '0.1em',
                    fill: reached ? step.color : TEXT.hint,
                    transition: 'fill 0.3s ease',
                    textTransform: 'uppercase',
                  }}>
                  {step.label}
                </text>
                <text x={sx} y={PT + PH + 26} textAnchor="middle"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 6.5,
                    letterSpacing: '0.06em',
                    fill: reached ? TEXT.muted : TEXT.hint,
                    transition: 'fill 0.3s ease',
                  }}>
                  {step.sub}
                </text>
              </g>
            );
          })}

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="m1-line-grad" x1={PL} y1="0" x2={PL + PW} y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={SPECTRUM.slate} />
              <stop offset="6%" stopColor={SPECTRUM.slate} />
              <stop offset="12%" stopColor={STEPS[0].color} />
              <stop offset="35%" stopColor={STEPS[1].color} />
              <stop offset="72%" stopColor={STEPS[2].color} />
              <stop offset="100%" stopColor={STEPS[2].color} />
            </linearGradient>
            <linearGradient id="m1-area-grad" x1={PL} y1="0" x2={PL + PW} y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={SPECTRUM.slate} stopOpacity="0.06" />
              <stop offset="12%" stopColor={STEPS[0].color} stopOpacity="0.10" />
              <stop offset="35%" stopColor={STEPS[1].color} stopOpacity="0.08" />
              <stop offset="72%" stopColor={STEPS[2].color} stopOpacity="0.03" />
              <stop offset="100%" stopColor={STEPS[2].color} stopOpacity="0.01" />
            </linearGradient>
          </defs>

          {/* Ghost path */}
          <path d={ghostPath} fill="none"
            stroke="url(#m1-line-grad)" strokeWidth="1" strokeOpacity="0.08" />

          {/* Revealed path */}
          {hasStarted && (
            <path d={revealPath} fill="none"
              stroke="url(#m1-line-grad)" strokeWidth="2.2" strokeOpacity="0.9" />
          )}

          {/* Area fill under revealed path */}
          {hasStarted && progress > 0.05 && (
            <path
              d={`${revealPath}L${cx.toFixed(1)},${PT + PH}L${PL},${PT + PH}Z`}
              fill="url(#m1-area-grad)"
            />
          )}

          {/* Cursor dot */}
          {progress > 0.03 && (
            <>
              <circle cx={cx} cy={cursorY} r="5"
                fill={cursorColor} fillOpacity="0.15" />
              <circle cx={cx} cy={cursorY} r="2.5"
                fill={cursorColor} />
            </>
          )}

          {/* End label */}
          {done && !isRelational && (
            <text x={PL + PW + 8} y={cursorY + 4}
              style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 8.5,
                fill: SPECTRUM.slate,
              }}>
              baseline
            </text>
          )}
          {done && isRelational && (
            <>
              <text x={PL + PW + 8} y={cursorY + 4}
                style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 8.5,
                  fill: STEPS[2].color,
                }}>
                needs
              </text>
              <text x={PL + PW + 8} y={cursorY + 16}
                style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 7.5,
                  fill: STEPS[2].color, opacity: 0.7,
                }}>
                co-regulation
              </text>
            </>
          )}
        </svg>
      </div>

      {/* ─── Three Info Cards ─────────────────── */}
      <div className="m1-info-cards">
        {[
          {
            step: '1',
            title: 'Signal',
            content: emotion.signal,
            reached: progress >= STEPS[0].t,
            color: STEPS[0].color,
          },
          {
            step: '2',
            title: 'Body Response',
            content: emotion.bodyResponse,
            reached: progress >= STEPS[1].t,
            color: STEPS[1].color,
          },
          {
            step: '3',
            title: 'Restoration',
            content: emotion.restorationNeeds,
            reached: progress >= STEPS[2].t,
            badge: isRelational ? 'Relational' : 'Somatic',
            color: STEPS[2].color,
          },
        ].map(card => (
          <div key={card.step} style={{
            background: gradientCardBg(card.color, card.reached ? 0.06 : 0.02),
            padding: '14px 14px 16px',
            borderRadius: RADIUS.lg,
            border: `1px solid ${card.reached ? hexToRgba(card.color, 0.25) : BORDER.default}`,
            borderTop: `2px solid ${card.reached ? card.color : BORDER.default}`,
            transition: 'border-color 0.4s ease, background 0.4s ease, opacity 0.4s ease',
            opacity: card.reached ? 1 : 0.4,
            minHeight: 90,
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              marginBottom: 8,
            }}>
              <span style={{
                fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: card.reached ? card.color : TEXT.hint,
                transition: 'color 0.3s ease',
              }}>
                {card.title}
              </span>
              {card.badge && card.reached && (
                <span style={{
                  fontFamily: FONT.mono, fontSize: 7, fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '2px 6px', borderRadius: 4,
                  background: hexToRgba(card.color, 0.1),
                  color: card.color,
                }}>
                  {card.badge}
                </span>
              )}
            </div>
            <p style={{
              fontSize: 13, lineHeight: 1.65,
              color: card.reached ? TEXT.secondary : TEXT.hint,
              transition: 'color 0.4s ease',
              margin: 0,
            }}>
              {card.content}
            </p>
          </div>
        ))}
      </div>

      {/* ─── Emotion Selector ─────────────────── */}
      <div style={{ marginTop: 20 }}>
        <div style={{
          fontFamily: FONT.mono, fontSize: 7.5, color: TEXT.hint,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          textAlign: 'center', marginBottom: 10,
        }}>
          Select a signal
        </div>
        {[
          { label: 'Somatic', color: SPECTRUM.sky, filter: (em) => em.type === 'somatic' && !(em.restorationType && em.restorationType.includes('relational')) },
          { label: 'Relational', color: SPECTRUM.indigo, filter: (em) => em.type === 'relational' || (em.restorationType && em.restorationType.includes('relational')) },
        ].map(group => (
          <div key={group.label} style={{ marginBottom: 8 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6,
              justifyContent: 'center',
            }}>
              <div style={{
                width: 6, height: 6, borderRadius: '50%',
                background: group.color,
              }} />
              <span style={{
                fontFamily: FONT.mono, fontSize: 7, color: group.color,
                letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600,
              }}>
                {group.label}
              </span>
            </div>
            <div className="m1-emotion-grid">
              {EMOTIONS.filter(group.filter).map(em => {
                const isActive = emotion.key === em.key;
                return (
                  <button
                    key={em.key}
                    className="m1-pill"
                    onClick={() => selectEmotion(em.key)}
                    title={em.signal}
                    aria-label={`${em.name} — ${em.signal}`}
                    style={{
                      borderColor: isActive ? group.color : hexToRgba(group.color, 0.25),
                      background: isActive ? hexToRgba(group.color, 0.12) : undefined,
                      color: isActive ? group.color : hexToRgba(group.color, 0.6),
                    }}
                  >
                    {em.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
