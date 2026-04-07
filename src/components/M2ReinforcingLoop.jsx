'use client';

import { useState, useEffect, useRef } from 'react';
import {
  TEXT, BORDER, FONT, SPECTRUM, RADIUS, PATTERN, ACCENT,
  hexToRgba, diagramContainer,
} from '@/src/styles/tokens';

// ─── Constants ──────────────────────────────────────────
const MODEL_COLOR = PATTERN.B.primary;
const WARNING = ACCENT.orange;

// Loop stages — the self-reinforcing cycle
const STAGES = [
  {
    label: 'State activates',
    description: 'The nervous system organises into a state — perception, cognition, and relational capacity reconfigure.',
  },
  {
    label: 'Perception filters',
    description: 'Sensory input is filtered before conscious thought. The state determines what reaches awareness.',
  },
  {
    label: 'Filtered world confirms',
    description: 'The filtered information confirms the state\'s assessment. The world looks exactly the way the state predicts.',
  },
  {
    label: 'State deepens',
    description: 'Confirmation strengthens the state. The nervous system has more evidence that its current organisation is correct.',
  },
];

// SVG dimensions
const SIZE = 320;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 110; // ring radius

// ─── Component ──────────────────────────────────────────

export default function M2ReinforcingLoop() {
  const [activeStage, setActiveStage] = useState(null);
  const [animStage, setAnimStage] = useState(-1);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

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

  // Sequential reveal animation
  useEffect(() => {
    if (!hasStarted) return;
    let stage = 0;
    const advance = () => {
      setAnimStage(stage);
      stage++;
      if (stage <= STAGES.length) {
        timerRef.current = setTimeout(advance, 700);
      }
    };
    timerRef.current = setTimeout(advance, 300);
    return () => clearTimeout(timerRef.current);
  }, [hasStarted]);

  // Position nodes evenly around the circle
  const nodePositions = STAGES.map((_, i) => {
    const angle = (i / STAGES.length) * Math.PI * 2 - Math.PI / 2; // start at top
    return {
      x: CX + R * Math.cos(angle),
      y: CY + R * Math.sin(angle),
      angle,
    };
  });

  // Build arrow arcs between adjacent nodes
  function arcPath(fromIdx, toIdx) {
    const from = nodePositions[fromIdx];
    const to = nodePositions[toIdx];
    // Offset start/end slightly toward center to leave room for nodes
    const offsetR = 22;
    const sx = from.x + offsetR * Math.cos(from.angle + Math.PI / STAGES.length);
    const sy = from.y + offsetR * Math.sin(from.angle + Math.PI / STAGES.length);
    const ex = to.x - offsetR * Math.cos(to.angle + Math.PI / STAGES.length);
    const ey = to.y - offsetR * Math.sin(to.angle + Math.PI / STAGES.length);
    return `M${sx.toFixed(1)},${sy.toFixed(1)} A${R},${R} 0 0,1 ${ex.toFixed(1)},${ey.toFixed(1)}`;
  }

  const displayStage = activeStage !== null ? activeStage : (animStage >= 0 && animStage < STAGES.length ? animStage : null);

  return (
    <section ref={sectionRef} style={{
      marginBottom: 32,
      ...diagramContainer(),
    }}>
      <style>{`
        .m2-loop-container {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .m2-loop-node {
          cursor: pointer;
          transition: opacity 0.3s ease;
        }
        .m2-loop-node:hover circle {
          stroke-width: 2.5;
        }
        .m2-loop-arc {
          transition: stroke-opacity 0.4s ease;
        }
        @media (max-width: 640px) {
          .m2-loop-container {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="m2-loop-container">
        {/* ─── SVG Ring ──────────────────── */}
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} style={{
          width: 280, height: 280, flexShrink: 0,
        }}>
          {/* Center label */}
          <text x={CX} y={CY - 6} textAnchor="middle"
            style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 7.5,
              fontWeight: 600, letterSpacing: '0.14em',
              fill: WARNING, textTransform: 'uppercase',
            }}>
            SELF-REINFORCING
          </text>
          <text x={CX} y={CX + 8} textAnchor="middle"
            style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 7,
              letterSpacing: '0.1em',
              fill: TEXT.hint,
            }}>
            The loop that locks
          </text>

          {/* Arcs between nodes */}
          {STAGES.map((_, i) => {
            const nextIdx = (i + 1) % STAGES.length;
            const revealed = animStage >= i;
            return (
              <path
                key={`arc-${i}`}
                className="m2-loop-arc"
                d={arcPath(i, nextIdx)}
                fill="none"
                stroke={MODEL_COLOR}
                strokeWidth="1.5"
                strokeOpacity={revealed ? 0.3 : 0.06}
                strokeDasharray="4,3"
                markerEnd={revealed ? 'url(#m2-arrow)' : undefined}
              />
            );
          })}

          {/* Arrow marker */}
          <defs>
            <marker id="m2-arrow" viewBox="0 0 8 8" refX="7" refY="4"
              markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,1 L7,4 L0,7" fill="none"
                stroke={MODEL_COLOR} strokeWidth="1.2" />
            </marker>
          </defs>

          {/* Nodes */}
          {STAGES.map((stage, i) => {
            const pos = nodePositions[i];
            const revealed = animStage >= i;
            const isActive = displayStage === i;
            const nodeR = 18;

            return (
              <g key={i}
                className="m2-loop-node"
                onClick={() => setActiveStage(prev => prev === i ? null : i)}
                style={{ opacity: revealed ? 1 : 0.15 }}
              >
                <circle cx={pos.x} cy={pos.y} r={nodeR}
                  fill={isActive ? hexToRgba(MODEL_COLOR, 0.15) : hexToRgba(MODEL_COLOR, 0.06)}
                  stroke={isActive ? MODEL_COLOR : hexToRgba(MODEL_COLOR, 0.3)}
                  strokeWidth="1.5"
                />
                <text x={pos.x} y={pos.y + 1} textAnchor="middle"
                  dominantBaseline="central"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 8.5, fontWeight: 700,
                    fill: isActive ? MODEL_COLOR : TEXT.muted,
                  }}>
                  {i + 1}
                </text>
              </g>
            );
          })}
        </svg>

        {/* ─── Stage detail ──────────────── */}
        <div style={{ flex: 1, minWidth: 220 }}>
          {STAGES.map((stage, i) => {
            const revealed = animStage >= i;
            const isActive = displayStage === i;

            return (
              <div key={i}
                onClick={() => setActiveStage(prev => prev === i ? null : i)}
                style={{
                  padding: '10px 14px',
                  marginBottom: 6,
                  borderRadius: RADIUS.md,
                  border: `1px solid ${isActive ? hexToRgba(MODEL_COLOR, 0.25) : 'transparent'}`,
                  background: isActive ? hexToRgba(MODEL_COLOR, 0.04) : 'transparent',
                  cursor: 'pointer',
                  opacity: revealed ? 1 : 0.2,
                  transition: 'opacity 0.4s ease, border-color 0.2s ease, background 0.2s ease',
                }}
              >
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  marginBottom: isActive ? 6 : 0,
                }}>
                  <span style={{
                    fontFamily: FONT.mono, fontSize: 8, fontWeight: 700,
                    color: isActive ? MODEL_COLOR : TEXT.hint,
                    width: 16,
                  }}>
                    {i + 1}
                  </span>
                  <span style={{
                    fontSize: 14, fontWeight: 600,
                    color: isActive ? TEXT.primary : TEXT.muted,
                    transition: 'color 0.2s ease',
                  }}>
                    {stage.label}
                  </span>
                </div>
                {isActive && (
                  <p style={{
                    fontSize: 13, lineHeight: 1.6,
                    color: TEXT.secondary, margin: 0,
                    paddingLeft: 24,
                    animation: 'm2LoopFadeIn 0.25s ease',
                  }}>
                    {stage.description}
                  </p>
                )}
              </div>
            );
          })}

          <style>{`
            @keyframes m2LoopFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `}</style>

          {/* Closing insight */}
          {animStage >= STAGES.length - 1 && (
            <div style={{
              marginTop: 8,
              padding: '10px 14px',
              borderRadius: RADIUS.md,
              background: hexToRgba(WARNING, 0.04),
              border: `1px solid ${hexToRgba(WARNING, 0.12)}`,
            }}>
              <p style={{
                fontSize: 12.5, lineHeight: 1.6,
                color: TEXT.muted, margin: 0,
                fontStyle: 'italic',
              }}>
                The loop is invisible from inside — the filtered world feels like the real world. Understanding the loop does not break it. The nervous system operates faster than insight.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
