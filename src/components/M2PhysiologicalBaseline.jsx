'use client';

import { useState, useEffect, useRef } from 'react';
import {
  TEXT, FONT, SPECTRUM, RADIUS,
  hexToRgba, diagramContainer,
} from '../styles/tokens';

// ─── Constants ──────────────────────────────────────
const BASELINE_COLOR = SPECTRUM.silver;  // grey — at rest
const RESTORE_COLOR  = SPECTRUM.azure;   // Path A
const CHRONIC_COLOR  = SPECTRUM.cobalt;  // Path B

const GREY_GRADIENT  = `linear-gradient(90deg, ${hexToRgba(SPECTRUM.slate, 0.35)} 0%, ${hexToRgba(SPECTRUM.slate, 0.25)} 50%, ${hexToRgba(SPECTRUM.slate, 0.35)} 100%)`;
const LIVE_GRADIENT  = 'linear-gradient(90deg, #93CFFF 0%, #93CFFF 20%, #5BADFF 35%, #5BADFF 45%, #346AEC 55%, #346AEC 70%, #2563eb 85%, #2563eb 100%)';

const STATES = [
  { name: 'SAFETY & OPENNESS',  mode: 'Connection',  hex: '#93CFFF', pos: 0.125 },
  { name: 'THREAT & DEFENCE',   mode: 'Protection',  hex: '#5BADFF', pos: 0.375 },
  { name: 'STRATEGY & MANAGEMENT', mode: 'Control',  hex: '#346AEC', pos: 0.625 },
  { name: 'POWER & DOMINANCE',  mode: 'Domination',  hex: '#2563eb', pos: 0.875 },
];

// Phases: rest → activated → pathA (restoring) → rest  OR  → pathB (chronic)
// rest: grey bar, no needle
// activated: gradient bar, needle at target
// pathA: gradient fades back to grey, needle fades
// pathB: gradient stays, "chronic" label

const MARKERS = [
  { label: 'Cortisol',        rest: 'Resting level',       active: 'Elevated',           chronic: 'Chronically elevated' },
  { label: 'Muscle tension',  rest: 'Resting tension',     active: 'Braced',             chronic: 'Chronically braced' },
  { label: 'Heart rate',      rest: 'Resting pace',        active: 'Accelerated',        chronic: 'Chronically accelerated' },
  { label: 'HPA axis',        rest: 'Standing down',       active: 'Activated',          chronic: 'Cannot stand down' },
];

export default function M2PhysiologicalBaseline() {
  const [phase, setPhase] = useState('rest');       // rest | activated | pathA | pathB
  const [targetIdx, setTargetIdx] = useState(1);    // which state the signal activates
  const [needlePos, setNeedlePos] = useState(-1);   // -1 = hidden
  const [barOpacity, setBarOpacity] = useState(0);  // 0 = grey, 1 = gradient
  const timeoutRef = useRef(null);

  const clear = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };

  // Reset everything
  const goToRest = () => {
    clear();
    setPhase('rest');
    setNeedlePos(-1);
    setBarOpacity(0);
  };

  // Fire signal → activate
  const fireSignal = () => {
    clear();
    setPhase('activated');
    setBarOpacity(1);
    // needle moves to target after a brief delay
    setTimeout(() => setNeedlePos(STATES[targetIdx].pos), 80);
  };

  // Path A: restoration → return to baseline
  const triggerPathA = () => {
    clear();
    setPhase('pathA');
    // fade bar and needle over 1.5s
    setBarOpacity(0);
    setNeedlePos(-1);
    timeoutRef.current = setTimeout(() => setPhase('rest'), 1600);
  };

  // Path B: no restoration → chronic
  const triggerPathB = () => {
    clear();
    setPhase('pathB');
  };

  useEffect(() => () => clear(), []);

  const isActive = phase === 'activated' || phase === 'pathB';
  const isChronic = phase === 'pathB';
  const isResting = phase === 'rest' || phase === 'pathA';
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
          color: phase === 'rest' ? TEXT.primary
            : phase === 'pathA' ? RESTORE_COLOR
            : phase === 'pathB' ? CHRONIC_COLOR
            : activeState.hex,
          transition: 'color 0.4s ease',
        }}>
          {phase === 'rest' && 'PHYSIOLOGICAL BASELINE'}
          {phase === 'activated' && `STATE ACTIVATED — ${activeState.name}`}
          {phase === 'pathA' && 'PATH A — RESTORATION'}
          {phase === 'pathB' && 'PATH B — BASELINE ELEVATION'}
        </div>
        <div style={{
          fontSize: 12, color: TEXT.muted, lineHeight: 1.5, marginTop: 4,
        }}>
          {phase === 'rest' && 'Resources available, not deployed. Not a state — the neutral ground.'}
          {phase === 'activated' && 'The nervous system has reorganised. Resources deployed.'}
          {phase === 'pathA' && 'Activation resolves. The system returns to physiological baseline.'}
          {phase === 'pathB' && 'Restoration does not complete. The elevated state becomes the new resting condition.'}
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
          transition: 'left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease, border-color 0.4s ease, box-shadow 0.4s ease',
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
          const value = isChronic ? m.chronic : isActive ? m.active : m.rest;
          const color = isChronic ? CHRONIC_COLOR : isActive ? activeState.hex : BASELINE_COLOR;
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
        {phase === 'rest' && (
          <>
            {/* State selector */}
            <div style={{
              display: 'flex', gap: 4, alignItems: 'center',
              marginRight: 8,
            }}>
              {STATES.map((s, i) => (
                <button
                  key={s.name}
                  onClick={() => setTargetIdx(i)}
                  style={{
                    width: 8, height: 8,
                    borderRadius: '50%',
                    border: `1.5px solid ${i === targetIdx ? s.hex : hexToRgba(BASELINE_COLOR, 0.3)}`,
                    background: i === targetIdx ? hexToRgba(s.hex, 0.4) : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    padding: 0,
                  }}
                  title={s.name}
                />
              ))}
            </div>
            <button
              onClick={fireSignal}
              style={{
                padding: '5px 16px',
                borderRadius: 20,
                border: `1px solid ${hexToRgba(activeState.hex, 0.35)}`,
                background: hexToRgba(activeState.hex, 0.1),
                cursor: 'pointer',
                fontFamily: FONT.mono,
                fontSize: 8,
                fontWeight: 600,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: activeState.hex,
                transition: 'all 0.3s ease',
              }}
            >
              Fire signal
            </button>
          </>
        )}

        {phase === 'activated' && (
          <>
            <button
              onClick={triggerPathA}
              style={{
                padding: '5px 16px',
                borderRadius: 20,
                border: `1px solid ${hexToRgba(RESTORE_COLOR, 0.35)}`,
                background: hexToRgba(RESTORE_COLOR, 0.1),
                cursor: 'pointer',
                fontFamily: FONT.mono,
                fontSize: 8,
                fontWeight: 600,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: RESTORE_COLOR,
                transition: 'all 0.3s ease',
              }}
            >
              Path A — Restoration completes
            </button>
            <button
              onClick={triggerPathB}
              style={{
                padding: '5px 16px',
                borderRadius: 20,
                border: `1px solid ${hexToRgba(CHRONIC_COLOR, 0.35)}`,
                background: hexToRgba(CHRONIC_COLOR, 0.1),
                cursor: 'pointer',
                fontFamily: FONT.mono,
                fontSize: 8,
                fontWeight: 600,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: CHRONIC_COLOR,
                transition: 'all 0.3s ease',
              }}
            >
              Path B — Restoration fails
            </button>
          </>
        )}

        {phase !== 'rest' && (
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
            Reset
          </button>
        )}
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
          {isChronic
            ? 'The system treats the elevated level as its new resting state. The person may have no reference point for what rest actually feels like.'
            : 'Safety & Openness — the state closest to baseline — is still a state. A person at physiological baseline is at rest. A person in Safety & Openness is engaged.'
          }
        </p>
      </div>
    </section>
  );
}
