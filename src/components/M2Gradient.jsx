'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  TEXT, FONT, SPECTRUM, RADIUS,
  hexToRgba, diagramContainer,
} from '../styles/tokens';

// ─── Constants ──────────────────────────────────────
const STATES = [
  { name: 'SAFETY & OPENNESS',     mode: 'Connection',  hex: '#93CFFF', pos: 0.125 },
  { name: 'THREAT & DEFENCE',      mode: 'Protection',  hex: '#5BADFF', pos: 0.375 },
  { name: 'STRATEGY & MANAGEMENT', mode: 'Control',     hex: '#346AEC', pos: 0.625 },
  { name: 'POWER & DOMINANCE',     mode: 'Domination',  hex: '#2563eb', pos: 0.875 },
];

const LIVE_GRADIENT = 'linear-gradient(90deg, #93CFFF 0%, #93CFFF 20%, #5BADFF 35%, #5BADFF 45%, #346AEC 55%, #346AEC 70%, #2563eb 85%, #2563eb 100%)';

function getActiveIdx(p) {
  if (p < 0.25) return 0;
  if (p < 0.5) return 1;
  if (p < 0.75) return 2;
  return 3;
}

// ─── Realistic movement sequence ────────────────────
// Based on real nervous system timing:
//   Activation: amygdala fires in 12ms, full evaluation in milliseconds → FAST snap toward threat
//   Restoration from Threat & Defence: 20 min – 2 hours → SLOW return
//   Restoration from Strategy & Management: 2–8 hours → SLOWER
//   Restoration from Power & Dominance: 24–72+ hours → VERY SLOW
//   In Safety & Openness: gentle drift, tending, settling — continuous
//   Cortisol half-life: 20–90 min — the body doesn't snap back
//
// Each step: [position, duration_ms]
//   Short duration = fast transition (activation snaps)
//   Long duration = slow transition (restoration takes time)

const SEQUENCE = [
  // ── Resting in connection: gentle drift, the system tends itself ──
  [0.125, 1200],    // at rest
  [0.10,  1000],    // slight drift
  [0.14,  1000],    // gentle movement
  [0.125, 1200],    // settles back
  [0.11,  1000],    // another drift
  [0.125, 800],     // returns

  // ── A signal fires: FAST activation to Threat & Defence ──
  [0.375, 200],     // amygdala fires — snap to threat (milliseconds)

  // ── Restoration from Threat: SLOW return (represents 20min–2hrs) ──
  [0.35,  800],     // body begins settling — cortisol still circulating
  [0.30,  1000],    // gradual descent — muscles starting to release
  [0.25,  1200],    // HPA axis standing down
  [0.20,  1000],    // approaching safety
  [0.15,  800],     // almost home
  [0.125, 1000],    // baseline restored

  // ── Settling in connection again ──
  [0.10,  1200],
  [0.13,  800],
  [0.125, 1000],

  // ── Bigger trigger: escalates to Strategy & Management ──
  [0.375, 200],     // fast snap to threat
  [0.50,  400],     // cognition recruited — escalation
  [0.625, 300],     // strategy engaged

  // ── Restoration from Strategy: VERY SLOW (represents 2–8 hours) ──
  // The cognitive override must release before the body can complete
  [0.60,  1200],    // still managing
  [0.55,  1400],    // beginning to release the override
  [0.50,  1200],    // override releasing — emotions surfacing
  [0.45,  1200],    // dropping through threat
  [0.375, 1000],    // back to sympathetic
  [0.30,  1200],    // cortisol metabolising
  [0.25,  1000],    // HPA standing down
  [0.20,  1000],    // muscles releasing
  [0.15,  800],     // approaching rest
  [0.125, 1200],    // baseline

  // ── Deep rest — the system resets ──
  [0.08,  1200],    // deep parasympathetic
  [0.10,  1000],
  [0.125, 1000],    // settled

  // ── Brief threat — quick activation and return ──
  [0.30,  200],     // fast snap
  [0.25,  600],     // brief — the threat passed
  [0.20,  800],     // returning
  [0.125, 800],     // home

  // ── Final rest ──
  [0.13,  1000],
  [0.125, 1200],
  [0.11,  1000],
  [0.125, 1500],    // pause
];

export default function M2Gradient() {
  const [pos, setPos] = useState(0.125);
  const [isPlaying, setIsPlaying] = useState(false);
  const [narrative, setNarrative] = useState('');
  const stepRef = useRef(0);
  const timeoutRef = useRef(null);

  const activeIdx = getActiveIdx(pos);
  const active = STATES[activeIdx];

  // Narrative text based on what's happening
  const getNarrative = useCallback((position, prevPos) => {
    const idx = getActiveIdx(position);
    const wasHigher = prevPos > position;
    const wasLower = prevPos < position;
    const speed = Math.abs(position - prevPos);

    if (position <= 0.15 && Math.abs(position - 0.125) < 0.05) {
      if (wasHigher && speed > 0.1) return 'Baseline restored';
      return 'Tending — the system at rest';
    }
    if (wasLower && speed > 0.15) return 'Signal fires — activation in milliseconds';
    if (idx === 1 && wasLower) return 'Sympathetic activation — heart rate rises, muscles tense';
    if (idx === 2 && wasLower) return 'Cognition recruited into threat — strategic override';
    if (idx === 1 && wasHigher) return 'Cortisol metabolising — HPA axis standing down';
    if (position < 0.25 && wasHigher) return 'Muscles releasing — approaching physiological baseline';
    if (wasHigher) return 'Restoration in progress — the body completing what it started';
    return '';
  }, []);

  const playStep = useCallback(() => {
    const idx = stepRef.current;
    if (idx >= SEQUENCE.length) {
      setIsPlaying(false);
      setNarrative('');
      return;
    }

    const [target, duration] = SEQUENCE[idx];
    const prev = idx > 0 ? SEQUENCE[idx - 1][0] : 0.125;

    setPos(target);
    setNarrative(getNarrative(target, prev));

    stepRef.current = idx + 1;
    timeoutRef.current = setTimeout(playStep, duration);
  }, [getNarrative]);

  const play = () => {
    stop();
    stepRef.current = 0;
    setIsPlaying(true);
    playStep();
  };

  const stop = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsPlaying(false);
    setNarrative('');
  };

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  // CSS transition duration matches the step timing
  // Fast activation = short transition, slow restoration = long transition
  const prevStep = stepRef.current > 0 ? SEQUENCE[Math.min(stepRef.current - 1, SEQUENCE.length - 1)] : null;
  const transitionDuration = prevStep ? Math.min(prevStep[1] * 0.8, 1200) : 600;

  return (
    <section style={{ marginBottom: 32, ...diagramContainer() }}>

      {/* ─── Header ─── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        marginBottom: 20, flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: SPECTRUM.slate,
          letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
        }}>
          The Gradient
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: TEXT.hint,
          letterSpacing: '0.06em',
        }}>
          A continuous range, not four boxes
        </span>
      </div>

      {/* ─── Current State Position ─── */}
      <div style={{
        padding: '10px 14px',
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(active.hex, 0.25)}`,
        background: hexToRgba(active.hex, 0.05),
        transition: 'all 0.5s ease',
        marginBottom: 16,
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
          letterSpacing: '0.10em', textTransform: 'uppercase',
          color: hexToRgba(active.hex, 0.7),
          marginBottom: 4,
          transition: 'color 0.5s ease',
        }}>
          Current State Position
        </div>
        <div style={{
          fontFamily: FONT.mono, fontSize: 12, fontWeight: 700,
          color: active.hex,
          transition: 'color 0.5s ease',
        }}>
          {active.name}
        </div>
        {narrative && (
          <div style={{
            fontSize: 11, color: TEXT.muted, marginTop: 4, lineHeight: 1.5,
            fontStyle: 'italic',
          }}>
            {narrative}
          </div>
        )}
      </div>

      {/* ─── The gradient bar ─── */}
      <div style={{ position: 'relative', height: 42, paddingTop: 7 }}>
        <div style={{
          height: 14, borderRadius: 100,
          background: LIVE_GRADIENT,
          position: 'relative',
          overflow: 'visible',
          boxShadow: `0 0 20px ${hexToRgba(active.hex, 0.3)}`,
          transition: 'box-shadow 0.5s ease',
        }}>
          {/* Mode boundary markers */}
          {[0.25, 0.5, 0.75].map(b => (
            <div key={b} style={{
              position: 'absolute',
              left: `${b * 100}%`,
              top: -1, bottom: -1,
              width: 1.5,
              background: 'rgba(0,0,0,0.45)',
              borderRadius: 1,
              transform: 'translateX(-50%)',
              boxShadow: '0 0 4px rgba(0,0,0,0.4)',
            }} />
          ))}
          {/* Needle */}
          <div style={{
            position: 'absolute',
            left: `${pos * 100}%`,
            top: '50%',
            width: 28, height: 28,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(255,255,255,0.8))',
            border: `3px solid ${active.hex}`,
            boxShadow: `0 2px 8px rgba(0,0,0,0.4), 0 0 16px ${hexToRgba(active.hex, 0.5)}`,
            transition: `left ${transitionDuration}ms ease-in-out, border-color 0.4s ease, box-shadow 0.4s ease`,
            zIndex: 10,
          }} />
        </div>
      </div>

      {/* ─── State labels below bar ─── */}
      <div style={{ display: 'flex', marginTop: 6 }}>
        {STATES.map((s, i) => {
          const isCurrent = i === activeIdx;
          return (
            <div key={s.name} style={{
              flex: 1, textAlign: 'center',
              opacity: isCurrent ? 1 : 0.3,
              transition: 'opacity 0.4s ease',
            }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 9, fontWeight: 700,
                letterSpacing: '0.08em',
                color: isCurrent ? s.hex : TEXT.hint,
                transition: 'color 0.4s ease',
              }}>
                {s.name}
              </div>
              <div style={{
                fontFamily: FONT.mono, fontSize: 8, fontWeight: 500,
                letterSpacing: '0.06em',
                color: isCurrent ? hexToRgba(s.hex, 0.6) : TEXT.micro,
                transition: 'color 0.4s ease',
                marginTop: 2,
              }}>
                {s.mode}
              </div>
              {isCurrent && (
                <div style={{
                  width: 4, height: 4, borderRadius: '50%',
                  background: s.hex,
                  boxShadow: `0 0 8px ${s.hex}`,
                  margin: '4px auto 0',
                }} />
              )}
            </div>
          );
        })}
      </div>

      {/* ─── Play control ─── */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <button
          onClick={isPlaying ? stop : play}
          style={{
            fontFamily: FONT.mono,
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: hexToRgba(active.hex, 0.8),
            background: hexToRgba(active.hex, 0.08),
            border: `1px solid ${hexToRgba(active.hex, 0.25)}`,
            borderRadius: RADIUS.sm,
            padding: '5px 16px',
            cursor: 'pointer',
            transition: 'all 300ms',
          }}
        >
          {isPlaying ? 'Stop' : 'Watch the nervous system respond'}
        </button>
      </div>

      {/* ─── Bottom note ─── */}
      <div style={{
        marginTop: 16,
        padding: '10px 16px',
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(SPECTRUM.slate, 0.15)}`,
        background: hexToRgba(SPECTRUM.slate, 0.04),
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: 12, lineHeight: 1.6,
          color: TEXT.muted, margin: 0,
        }}>
          Activation is fast — the amygdala fires in 12 milliseconds. Restoration is slow — 20 minutes to 2 hours from Threat & Defence, 2 to 8 hours from Strategy & Management. The body does not snap back. It completes.
        </p>
      </div>
    </section>
  );
}
