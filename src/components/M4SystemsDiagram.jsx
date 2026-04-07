'use client';

import { useState, useEffect, useRef } from 'react';
import {
  TEXT, BORDER, FONT, SPECTRUM, RADIUS, PATTERN, AWARENESS, ACCENT,
  hexToRgba, gradientCardBg, diagramContainer,
} from '@/src/styles/tokens';

// ─── Constants ──────────────────────────────────────────
const MODEL_COLOR = PATTERN.D.primary;
const ESS_COLOR = AWARENESS.SEA;   // green — the body's system
const CLS_COLOR = AWARENESS.RE;    // violet — the thinking system
const BRIDGE_COLOR = AWARENESS.ER; // cyan — the bridge

// Animation steps
const STEPS = [
  { id: 'both-running', phase: 'setup' },
  { id: 'bridge-open', phase: 'open' },
  { id: 'bridge-closing', phase: 'closing' },
  { id: 'bridge-closed', phase: 'closed' },
  { id: 'cls-builds', phase: 'builds' },
];
const STEP_MS = 2000;

// ─── Component ──────────────────────────────────────────

export default function M4SystemsDiagram() {
  const [step, setStep] = useState(-1);
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
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasStarted]);

  // Sequential animation
  useEffect(() => {
    if (!hasStarted) return;
    let current = 0;
    const advance = () => {
      setStep(current);
      current++;
      if (current < STEPS.length) {
        timerRef.current = setTimeout(advance, STEP_MS);
      }
    };
    timerRef.current = setTimeout(advance, 400);
    return () => clearTimeout(timerRef.current);
  }, [hasStarted]);

  const phase = step >= 0 && step < STEPS.length ? STEPS[step].phase : 'setup';
  const bridgeOpen = phase === 'setup' || phase === 'open';
  const bridgeClosed = phase === 'closed' || phase === 'builds';
  const bridgeClosing = phase === 'closing';
  const clsBuilds = phase === 'builds';

  return (
    <section ref={sectionRef} style={{
      marginBottom: 32,
      ...diagramContainer(),
    }}>
      <style>{`
        .m4s-system {
          padding: 20px;
          border-radius: ${RADIUS.lg}px;
          border: 1.5px solid ${BORDER.default};
          transition: border-color 0.5s ease, background 0.5s ease;
          position: relative;
        }
        .m4s-bridge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 12px 0;
          position: relative;
        }
        .m4s-bridge-line {
          height: 3px;
          border-radius: 2px;
          transition: width 0.8s ease, background 0.5s ease, opacity 0.5s ease;
        }
        .m4s-data-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: absolute;
          transition: opacity 0.4s ease;
        }
        .m4s-signal {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 12px;
          font-family: ${FONT.mono};
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.06em;
        }
        @keyframes m4sPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes m4sDotFlow {
          0% { top: 0; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>

      <div style={{ maxWidth: 560, margin: '0 auto' }}>

        {/* ─── CLS: The Thinking System ──── */}
        <div className="m4s-system" style={{
          borderColor: clsBuilds
            ? hexToRgba(CLS_COLOR, 0.4)
            : hexToRgba(CLS_COLOR, 0.2),
          background: clsBuilds
            ? hexToRgba(CLS_COLOR, 0.06)
            : 'transparent',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            marginBottom: 10,
          }}>
            <div style={{
              width: 10, height: 10, borderRadius: '50%',
              background: CLS_COLOR,
              animation: step >= 0 ? 'm4sPulse 2s ease infinite' : 'none',
            }} />
            <span style={{
              fontFamily: FONT.mono, fontSize: 9, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: CLS_COLOR,
            }}>
              Cognitive-Logical System
            </span>
            <span style={{
              fontFamily: FONT.mono, fontSize: 7.5,
              color: TEXT.hint,
            }}>
              Language, reasoning, narrative
            </span>
          </div>

          <div style={{
            display: 'flex', gap: 8, flexWrap: 'wrap',
          }}>
            <span className="m4s-signal" style={{
              background: hexToRgba(CLS_COLOR, 0.1),
              color: CLS_COLOR,
            }}>
              Builds coherence from available data
            </span>
            {!bridgeOpen && (
              <span className="m4s-signal" style={{
                background: hexToRgba(ACCENT.orange, 0.1),
                color: ACCENT.orange,
                animation: 'm4sPulse 1.5s ease infinite',
              }}>
                {bridgeClosing ? 'Data source narrowing...' : 'Does not know what it\'s missing'}
              </span>
            )}
          </div>

          {/* What CLS has access to */}
          <div style={{
            marginTop: 12,
            display: 'flex', gap: 6, flexWrap: 'wrap',
          }}>
            {[
              { label: 'Own reasoning', always: true },
              { label: 'External observation (RE)', always: true },
              { label: 'Somatic resonance (ER)', lost: bridgeClosed || bridgeClosing },
              { label: 'Body\'s signals (SEA)', lost: bridgeClosed },
            ].map(d => (
              <span key={d.label} style={{
                fontFamily: FONT.mono, fontSize: 7, letterSpacing: '0.04em',
                padding: '3px 8px', borderRadius: 10,
                background: d.lost
                  ? hexToRgba(ACCENT.orange, 0.08)
                  : hexToRgba(CLS_COLOR, 0.08),
                color: d.lost ? ACCENT.orange : TEXT.muted,
                textDecoration: d.lost ? 'line-through' : 'none',
                transition: 'all 0.5s ease',
              }}>
                {d.label}
              </span>
            ))}
          </div>
        </div>

        {/* ─── Bridge ────────────────────── */}
        <div className="m4s-bridge" style={{ height: 60 }}>
          <div style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 4,
            position: 'relative',
          }}>
            {/* Bridge visual */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <div className="m4s-bridge-line" style={{
                width: bridgeClosed ? 0 : bridgeClosing ? 40 : 80,
                background: bridgeClosed
                  ? 'transparent'
                  : BRIDGE_COLOR,
                opacity: bridgeClosed ? 0 : bridgeClosing ? 0.4 : 0.7,
              }} />
              <span style={{
                fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: bridgeClosed ? ACCENT.orange : BRIDGE_COLOR,
                transition: 'color 0.5s ease',
                whiteSpace: 'nowrap',
              }}>
                {bridgeClosed ? 'Bridge closed' : bridgeClosing ? 'Closing...' : 'Interoceptive access'}
              </span>
              <div className="m4s-bridge-line" style={{
                width: bridgeClosed ? 0 : bridgeClosing ? 40 : 80,
                background: bridgeClosed
                  ? 'transparent'
                  : BRIDGE_COLOR,
                opacity: bridgeClosed ? 0 : bridgeClosing ? 0.4 : 0.7,
              }} />
            </div>

            <span style={{
              fontFamily: FONT.mono, fontSize: 7,
              color: TEXT.hint,
              transition: 'opacity 0.5s ease',
              opacity: bridgeClosed ? 1 : 0.6,
            }}>
              {bridgeClosed
                ? 'The ESS is still running. The CLS does not know.'
                : bridgeOpen
                  ? 'Signals flow up — the CLS knows what the body is doing'
                  : 'Under chronic activation, the substrate degrades'
              }
            </span>
          </div>
        </div>

        {/* ─── ESS: The Body's System ────── */}
        <div className="m4s-system" style={{
          borderColor: hexToRgba(ESS_COLOR, 0.25),
          background: hexToRgba(ESS_COLOR, 0.03),
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            marginBottom: 10,
          }}>
            <div style={{
              width: 10, height: 10, borderRadius: '50%',
              background: ESS_COLOR,
              animation: step >= 0 ? 'm4sPulse 1.8s ease infinite' : 'none',
            }} />
            <span style={{
              fontFamily: FONT.mono, fontSize: 9, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: ESS_COLOR,
            }}>
              Emotional Somatic System
            </span>
            <span style={{
              fontFamily: FONT.mono, fontSize: 7.5,
              color: TEXT.hint,
            }}>
              Always running, below awareness
            </span>
          </div>

          <div style={{
            display: 'flex', gap: 8, flexWrap: 'wrap',
          }}>
            {['Signals firing', 'Hormones releasing', 'Muscles bracing', 'State shifting'].map(s => (
              <span key={s} className="m4s-signal" style={{
                background: hexToRgba(ESS_COLOR, 0.1),
                color: ESS_COLOR,
                animation: step >= 0 ? 'm4sPulse 2.5s ease infinite' : 'none',
              }}>
                {s}
              </span>
            ))}
          </div>

          <div style={{
            marginTop: 10,
            fontFamily: FONT.mono, fontSize: 7.5,
            color: TEXT.hint,
            fontStyle: 'italic',
          }}>
            Same signals. Same hormones. Same activation. Regardless of whether the CLS knows.
          </div>
        </div>

        {/* ─── Key Insight ───────────────── */}
        {clsBuilds && (
          <div style={{
            marginTop: 16,
            padding: '14px 16px',
            borderRadius: RADIUS.md,
            background: gradientCardBg(ACCENT.orange, 0.06),
            border: `1px solid ${hexToRgba(ACCENT.orange, 0.15)}`,
            borderLeft: `3px solid #f97316`,
            animation: 'm4sFadeIn 0.5s ease',
          }}>
            <style>{`
              @keyframes m4sFadeIn {
                from { opacity: 0; transform: translateY(6px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            <p style={{
              fontSize: 14, lineHeight: 1.65,
              color: TEXT.secondary, margin: 0,
            }}>
              Without the bridge, the CLS builds coherence from incomplete data — <strong style={{ color: TEXT.primary }}>and the coherence feels complete</strong>. The person is not aware of what they cannot perceive. The story the mind tells feels like the whole story.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
