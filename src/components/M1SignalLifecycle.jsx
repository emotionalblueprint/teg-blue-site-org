'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { TEXT, BORDER, FONT, SPECTRUM, MODEL_COLORS, hexToRgba } from '../styles/tokens';

const COLOR = MODEL_COLORS.M1;

// ─── SIGNAL EXAMPLES ─────────────────────────────────────
// Each maps a condition the NS evaluates → the signal it generates → the body's response
const SIGNALS = [
  {
    condition: 'Threat detected',
    emotion: 'Fear',
    body: 'Sympathetic activation — heart rate rises, muscles tense, sensory acuity sharpens',
  },
  {
    condition: 'Boundary violated',
    emotion: 'Anger',
    body: 'Blood pressure rises, jaw and fists clench, energy mobilises toward the source',
  },
  {
    condition: 'Demand exceeds resources',
    emotion: 'Stress',
    body: 'Cortisol sustained, tension chronic, system braces without discharge',
  },
  {
    condition: 'Threat anticipated',
    emotion: 'Anxiety',
    body: 'Sympathetic activation without a located source — scanning, restlessness, shallow breathing',
  },
  {
    condition: 'Contamination detected',
    emotion: 'Disgust',
    body: 'Nausea, throat constriction, physical recoil — expulsion readiness',
  },
  {
    condition: 'Loss',
    emotion: 'Sadness',
    body: 'Energy withdraws, tears, slowing — system conserves and turns inward',
  },
  {
    condition: 'Belonging at risk',
    emotion: 'Shame',
    body: 'Heat, shrinking, gaze aversion — the body pulls inward and hides',
  },
  {
    condition: 'Safety confirmed',
    emotion: 'Joy',
    body: 'Parasympathetic ease, lightness, expansive movement, energy available for exploration',
  },
  {
    condition: 'Value detected in another',
    emotion: 'Admiration',
    body: 'Warmth, openness, orientation toward — the body approaches what it recognises',
  },
  {
    condition: 'Bond',
    emotion: 'Love',
    body: 'Oxytocin, warmth, orientation toward the other — the body moves closer',
  },
];

// ─── ANIMATION ───────────────────────────────────────────
const PHASE_DURATION = 1000;

export default function M1SignalLifecycle() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [phase, setPhase] = useState(0); // 0=idle, 1=evaluating, 2=detected, 3=signal+body
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const timerRef = useRef([]);
  const containerRef = useRef(null);

  const clearTimers = useCallback(() => {
    timerRef.current.forEach(t => clearTimeout(t));
    timerRef.current = [];
  }, []);

  const animateSignal = useCallback((idx) => {
    clearTimers();
    setSelectedIdx(idx);
    setPhase(1);
    timerRef.current.push(setTimeout(() => setPhase(2), PHASE_DURATION));
    timerRef.current.push(setTimeout(() => setPhase(3), PHASE_DURATION * 2));
  }, [clearTimers]);

  // Auto-play first signal on scroll
  useEffect(() => {
    if (hasAutoPlayed) return;
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasAutoPlayed(true);
        animateSignal(0);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasAutoPlayed, animateSignal]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const signal = selectedIdx !== null ? SIGNALS[selectedIdx] : null;

  return (
    <div
      ref={containerRef}
      style={{
        background: hexToRgba(COLOR, 0.04),
        border: `1px solid ${hexToRgba(COLOR, 0.15)}`,
        borderRadius: 12,
        padding: '28px 32px 24px',
        marginBottom: 32,
      }}
    >
      {/* Title */}
      <div style={{
        fontFamily: FONT.mono,
        fontSize: 10,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: TEXT.hint,
        marginBottom: 24,
      }}>
        How an Emotional Signal Forms
      </div>

      {/* ── 3-phase pipeline ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 16,
        marginBottom: 24,
      }}>
        {/* Phase 1: Evaluation */}
        <PhaseCard
          number={1}
          title="Continuous Evaluation"
          active={phase >= 1}
          current={phase === 1}
          color={COLOR}
        >
          The nervous system monitors conditions below conscious awareness — safety, threat, boundary, loss, connection, contamination.
        </PhaseCard>

        {/* Phase 2: Detection */}
        <PhaseCard
          number={2}
          title="Condition Detected"
          active={phase >= 2}
          current={phase === 2}
          color={COLOR}
        >
          {signal && phase >= 2 ? (
            <>
              <strong style={{ color: COLOR }}>{signal.condition}</strong>
              {' — '}the finding is specific. The nervous system has identified what changed.
            </>
          ) : (
            'A specific condition is identified. The finding is precise — not a vague feeling but a specific detection.'
          )}
        </PhaseCard>

        {/* Phase 3: Signal generated */}
        <PhaseCard
          number={3}
          title="Signal Generated"
          active={phase >= 3}
          current={phase === 3}
          color={COLOR}
        >
          {signal && phase >= 3 ? (
            <>
              <strong style={{ color: COLOR }}>{signal.emotion}</strong>
              {' — '}
              {signal.body}
            </>
          ) : (
            'The body produces a physiological response specific to what was detected. Heart rate, hormones, muscles — all reorganise before cognition arrives.'
          )}
        </PhaseCard>
      </div>

      {/* ── Signal selector ── */}
      <div>
        <div style={{
          fontFamily: FONT.mono,
          fontSize: 9,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: TEXT.hint,
          marginBottom: 10,
        }}>
          Select a condition to trace the signal
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
          gap: 6,
        }}>
          {SIGNALS.map((s, i) => {
            const isActive = selectedIdx === i && phase === 3;
            return (
              <button
                key={s.emotion}
                onClick={() => animateSignal(i)}
                style={{
                  padding: '8px 12px',
                  borderRadius: 6,
                  border: `1px solid ${isActive ? COLOR : BORDER.default}`,
                  background: isActive ? hexToRgba(COLOR, 0.1) : 'transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 200ms ease',
                }}
              >
                <div style={{
                  fontFamily: FONT.display,
                  fontSize: 12,
                  fontWeight: 600,
                  color: isActive ? COLOR : TEXT.primary,
                  transition: 'color 200ms ease',
                }}>
                  {s.emotion}
                </div>
                <div style={{
                  fontFamily: FONT.mono,
                  fontSize: 8,
                  color: TEXT.hint,
                  marginTop: 2,
                }}>
                  {s.condition}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── PHASE CARD ──────────────────────────────────────────
function PhaseCard({ number, title, active, current, color, children }) {
  return (
    <div style={{
      padding: '16px 18px',
      borderRadius: 8,
      border: `1px solid ${active ? hexToRgba(color, current ? 0.5 : 0.25) : hexToRgba(color, 0.08)}`,
      background: active ? hexToRgba(color, current ? 0.08 : 0.04) : 'transparent',
      transition: 'all 400ms ease',
      minHeight: 120,
    }}>
      {/* Number + title */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
      }}>
        <div style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: active ? color : hexToRgba(color, 0.1),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 400ms ease',
        }}>
          <span style={{
            fontFamily: FONT.mono,
            fontSize: 10,
            fontWeight: 700,
            color: active ? '#fff' : TEXT.hint,
            transition: 'color 400ms ease',
          }}>
            {number}
          </span>
        </div>
        <span style={{
          fontFamily: FONT.display,
          fontSize: 12,
          fontWeight: 600,
          color: active ? TEXT.primary : TEXT.hint,
          transition: 'color 400ms ease',
        }}>
          {title}
        </span>
      </div>

      {/* Content */}
      <div style={{
        fontFamily: FONT.mono,
        fontSize: 10,
        lineHeight: 1.6,
        color: active ? TEXT.muted : TEXT.micro,
        transition: 'color 400ms ease',
      }}>
        {children}
      </div>
    </div>
  );
}
