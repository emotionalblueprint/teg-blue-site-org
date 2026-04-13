'use client';

import { useState } from 'react';
import {
  TEXT, FONT, SPECTRUM, RADIUS,
  hexToRgba, diagramContainer,
} from '../styles/tokens';

// ─── Constants ──────────────────────────────────────
const BASELINE_COLOR = SPECTRUM.silver;  // grey — at rest

const GREY_GRADIENT  = `linear-gradient(90deg, ${hexToRgba(SPECTRUM.slate, 0.35)} 0%, ${hexToRgba(SPECTRUM.slate, 0.25)} 50%, ${hexToRgba(SPECTRUM.slate, 0.35)} 100%)`;
const LIVE_GRADIENT  = 'linear-gradient(90deg, #93CFFF 0%, #93CFFF 20%, #5BADFF 35%, #5BADFF 45%, #346AEC 55%, #346AEC 70%, #2563eb 85%, #2563eb 100%)';

const STATES = [
  { name: 'SAFETY & OPENNESS',  mode: 'Connection',  hex: '#93CFFF', pos: 0.125 },
  { name: 'THREAT & DEFENCE',   mode: 'Protection',  hex: '#5BADFF', pos: 0.375 },
  { name: 'STRATEGY & MANAGEMENT', mode: 'Control',  hex: '#346AEC', pos: 0.625 },
  { name: 'POWER & DOMINANCE',  mode: 'Domination',  hex: '#2563eb', pos: 0.875 },
];

// Example signals — activation timing based on real nervous system speed
// Threat: amygdala fires in 12ms, full sympathetic snap ~200ms
// Safety: ventral vagal engagement is gradual ~800ms
// CLS-recruited states: cognitive recruitment is slower, not automatic
const SIGNALS = [
  { label: 'Joy',          stateIdx: 0, activationMs: 800  },
  { label: 'Gratitude',    stateIdx: 0, activationMs: 800  },
  { label: 'Fear',         stateIdx: 1, activationMs: 200  },
  { label: 'Anger',        stateIdx: 1, activationMs: 200  },
  { label: 'Resentment',   stateIdx: 2, activationMs: 1200 },
  { label: 'Contempt',     stateIdx: 3, activationMs: 1500 },
];

// Phases: rest → activated → rest
// rest: grey bar, no needle
// activated: gradient bar, needle at target

const MARKERS = [
  { label: 'Cortisol',        rest: 'Resting level',       active: 'Elevated' },
  { label: 'Muscle tension',  rest: 'Resting tension',     active: 'Braced' },
  { label: 'Heart rate',      rest: 'Resting pace',        active: 'Accelerated' },
  { label: 'HPA axis',        rest: 'Standing down',       active: 'Activated' },
];

export default function M2PhysiologicalBaseline() {
  const [phase, setPhase] = useState('rest');       // rest | activated
  const [targetIdx, setTargetIdx] = useState(1);    // which state the signal activates
  const [needlePos, setNeedlePos] = useState(-1);   // -1 = hidden
  const [barOpacity, setBarOpacity] = useState(0);  // 0 = grey, 1 = gradient
  const [transitionMs, setTransitionMs] = useState(600); // needle movement speed

  // Reset everything
  const goToRest = () => {
    setPhase('rest');
    setNeedlePos(-1);
    setBarOpacity(0);
  };

  // Fire signal → activate
  const fireSignal = () => {
    setPhase('activated');
    setBarOpacity(1);
    // needle moves to target after a brief delay
    setTimeout(() => setNeedlePos(STATES[targetIdx].pos), 80);
  };

  const isActive = phase === 'activated';
  const isResting = phase === 'rest';
  const showNeedle = needlePos >= 0;
  const activeState = STATES[targetIdx];

  return (
    <section style={{ marginBottom: 32, ...diagramContainer() }}>

      {/* ─── Header ─── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        marginBottom: 20, flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: BASELINE_COLOR,
          letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
        }}>
          Physiological Baseline
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: TEXT.hint,
          letterSpacing: '0.06em',
        }}>
          The Neutral Ground
        </span>
      </div>

      {/* ─── Status line ─── */}
      <div style={{
        textAlign: 'center', marginBottom: 16,
        minHeight: 36,
      }}>
        <div style={{
          fontFamily: FONT.mono, fontSize: 11, fontWeight: 600,
          letterSpacing: '0.06em',
          color: isResting ? TEXT.primary : activeState.hex,
          transition: 'color 0.4s ease',
        }}>
          {isResting && 'PHYSIOLOGICAL BASELINE'}
          {isActive && `STATE ACTIVATED — ${activeState.name}`}
        </div>
        <div style={{
          fontSize: 12, color: TEXT.muted, lineHeight: 1.5, marginTop: 4,
        }}>
          {isResting && 'Resources available, not deployed. Not a state — the neutral ground.'}
          {isActive && transitionMs <= 200 && 'Activation in milliseconds — the amygdala fires before conscious thought arrives.'}
          {isActive && transitionMs > 200 && transitionMs <= 800 && 'Ventral vagal engagement — parasympathetic settling is gradual, not instant.'}
          {isActive && transitionMs > 800 && transitionMs <= 1200 && 'Cognitive recruitment — the CLS is recruited into the threat response. Slower, not automatic.'}
          {isActive && transitionMs > 1200 && 'Maximum cognitive override — full CLS recruitment into threat elimination.'}
        </div>
      </div>

      {/* ─── The gradient bar ─── */}
      <div style={{ position: 'relative', height: 42, paddingTop: 7 }}>
        {/* Grey base (always visible) */}
        <div style={{
          position: 'absolute', top: 7, left: 0, right: 0,
          height: 14, borderRadius: 100,
          background: GREY_GRADIENT,
        }} />

        {/* Live gradient (fades in/out) */}
        <div style={{
          position: 'absolute', top: 7, left: 0, right: 0,
          height: 14, borderRadius: 100,
          background: LIVE_GRADIENT,
          opacity: barOpacity,
          transition: 'opacity 1.2s ease',
          boxShadow: barOpacity > 0 ? `0 0 20px ${hexToRgba(activeState.hex, 0.3 * barOpacity)}` : 'none',
        }} />

        {/* Mode boundary markers */}
        {[0.25, 0.5, 0.75].map(b => (
          <div key={b} style={{
            position: 'absolute',
            left: `${b * 100}%`,
            top: 6, bottom: 21,
            width: 1.5,
            background: isActive ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.06)',
            borderRadius: 1,
            transform: 'translateX(-50%)',
            transition: 'background 0.8s ease',
            zIndex: 2,
          }} />
        ))}

        {/* Needle */}
        <div style={{
          position: 'absolute',
          left: showNeedle ? `${needlePos * 100}%` : '50%',
          top: 14,
          width: 28,
          height: 28,
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(255,255,255,0.8))',
          border: `3px solid ${showNeedle ? activeState.hex : BASELINE_COLOR}`,
          boxShadow: showNeedle
            ? `0 2px 8px rgba(0,0,0,0.4), 0 0 16px ${hexToRgba(activeState.hex, 0.5)}`
            : '0 2px 8px rgba(0,0,0,0.2)',
          opacity: showNeedle ? 1 : 0,
          transition: `left ${transitionMs}ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease, border-color 0.4s ease, box-shadow 0.4s ease`,
          zIndex: 10,
        }} />
      </div>

      {/* ─── Labels below bar ─── */}
      <div style={{ position: 'relative', marginTop: 6, minHeight: 30 }}>
        {/* State labels (when active) */}
        <div style={{
          display: 'flex',
          opacity: isActive ? 1 : 0,
          transition: 'opacity 0.8s ease',
          position: isActive ? 'relative' : 'absolute',
          top: 0, left: 0, right: 0,
        }}>
          {STATES.map((s, i) => {
            const isTarget = i === targetIdx && isActive;
            return (
              <div key={s.name} style={{
                flex: 1, textAlign: 'center',
                opacity: isTarget ? 1 : 0.3,
                transition: 'opacity 0.4s ease',
              }}>
                <div style={{
                  fontFamily: FONT.mono, fontSize: 9, fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: isTarget ? s.hex : TEXT.hint,
                  transition: 'color 0.4s ease',
                }}>
                  {s.name}
                </div>
                <div style={{
                  fontFamily: FONT.mono, fontSize: 8, fontWeight: 500,
                  letterSpacing: '0.06em',
                  color: isTarget ? hexToRgba(s.hex, 0.6) : TEXT.micro,
                  transition: 'color 0.4s ease',
                  marginTop: 2,
                }}>
                  {s.mode}
                </div>
              </div>
            );
          })}
        </div>

        {/* Baseline label (when at rest) */}
        <div style={{
          textAlign: 'center',
          opacity: isResting ? 1 : 0,
          transition: 'opacity 0.8s ease',
          position: isResting ? 'relative' : 'absolute',
          top: 0, left: 0, right: 0,
        }}>
          <span style={{
            fontFamily: FONT.mono, fontSize: 9, fontWeight: 600,
            letterSpacing: '0.10em', textTransform: 'uppercase',
            color: TEXT.primary,
          }}>
            The system at rest
          </span>
        </div>
      </div>

      {/* ─── Physiological markers ─── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 8,
        marginTop: 20,
      }}>
        {MARKERS.map(m => {
          const value = isActive ? m.active : m.rest;
          const color = isActive ? activeState.hex : BASELINE_COLOR;
          return (
            <div key={m.label} style={{
              padding: '8px 10px',
              borderRadius: RADIUS.sm,
              border: `1px solid ${hexToRgba(color, 0.2)}`,
              background: hexToRgba(color, 0.05),
              transition: 'all 0.8s ease',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
                letterSpacing: '0.10em', textTransform: 'uppercase',
                color: hexToRgba(color, 0.7),
                marginBottom: 3,
                transition: 'color 0.8s ease',
              }}>
                {m.label}
              </div>
              <div style={{
                fontSize: 11, color: TEXT.muted,
                lineHeight: 1.4,
                transition: 'color 0.8s ease',
              }}>
                {value}
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Controls ─── */}
      <div style={{
        display: 'flex', gap: 8, justifyContent: 'center',
        marginTop: 20, flexWrap: 'wrap',
      }}>
        {isResting && SIGNALS.map(sig => {
          const state = STATES[sig.stateIdx];
          return (
            <button
              key={sig.label}
              onClick={() => { setTargetIdx(sig.stateIdx); setTransitionMs(sig.activationMs); setTimeout(() => { setPhase('activated'); setBarOpacity(1); setTimeout(() => setNeedlePos(state.pos), 80); }, 0); }}
              style={{
                padding: '5px 14px',
                borderRadius: 20,
                border: `1px solid ${hexToRgba(state.hex, 0.35)}`,
                background: hexToRgba(state.hex, 0.08),
                cursor: 'pointer',
                fontFamily: FONT.mono,
                fontSize: 8,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: state.hex,
                transition: 'all 0.2s ease',
              }}
            >
              {sig.label}
            </button>
          );
        })}

        {isActive && (
          <button
            onClick={goToRest}
            style={{
              padding: '5px 16px',
              borderRadius: 20,
              border: `1px solid ${hexToRgba(BASELINE_COLOR, 0.35)}`,
              background: hexToRgba(BASELINE_COLOR, 0.1),
              cursor: 'pointer',
              fontFamily: FONT.mono,
              fontSize: 8,
              fontWeight: 600,
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: BASELINE_COLOR,
              transition: 'all 0.3s ease',
            }}
          >
            Physiological Baseline
          </button>
        )}
      </div>

      {/* ─── Timing note ─── */}
      <div style={{ textAlign: 'center', marginTop: 10 }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 7.5,
          letterSpacing: '0.06em',
          color: TEXT.micro,
        }}>
          Activation speeds are proportional to real nervous system timing — threat in milliseconds (LeDoux, 1996), safety settling in seconds (Porges, 2011), cognitive recruitment slower still (Arnsten, 2009)
        </span>
      </div>

      {/* ─── Bottom note ─── */}
      <div style={{
        marginTop: 20,
        padding: '10px 16px',
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(BASELINE_COLOR, 0.15)}`,
        background: hexToRgba(BASELINE_COLOR, 0.04),
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: 12, lineHeight: 1.6,
          color: TEXT.muted, margin: 0,
        }}>
          The nervous system is designed to restore Physiological Baseline after every activation. When it does, the state was temporary. When it does not, any state — including the safest — can become chronic.
        </p>
      </div>
    </section>
  );
}
