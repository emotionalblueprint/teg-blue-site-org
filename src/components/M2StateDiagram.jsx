'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  TEXT, BORDER, FONT, SPECTRUM, RADIUS, PATTERN, ACCENT,
  hexToRgba, diagramContainer,
} from '@/src/styles/tokens';
import { MODES } from '@/src/data/m2-data';

// ─── Constants ──────────────────────────────────────────
const MODEL_COLOR = PATTERN.B.primary;

// Capacity dimensions — values at each state position (0–1, where 1 = full capacity)
const CAPACITIES = [
  {
    label: 'Perception',
    values: [1, 0.55, 0.35, 0.15],
    descriptions: ['Broad — sees the full field', 'Narrowed — threat-relevant signals', 'Strategic — what needs managing', 'Tunnel — obstacles and resources'],
  },
  {
    label: 'Cognition',
    values: [1, 0.5, 0.4, 0.12],
    descriptions: ['Flexible — holds complexity', 'Simplified — binary thinking', 'Strategic — planning, anticipation', 'Locked — rigid, self-confirming'],
  },
  {
    label: 'Empathy',
    values: [1, 0.4, 0.25, 0.05],
    descriptions: ['Full — resonance with others online', 'Filtered — resonance decreases', 'Redirected — reading for strategy', 'Collapsed — resonance offline'],
  },
  {
    label: 'Learning',
    values: [1, 0.45, 0.3, 0.05],
    descriptions: ['Available — new information integrates', 'Reduced — threat info only', 'Selective — serves strategy only', 'Unavailable — system closed'],
  },
  {
    label: 'Repair',
    values: [1, 0.35, 0.2, 0.0],
    descriptions: ['Available — vulnerability and trust open', 'Limited — vulnerability dangerous', 'Managed — strategic, not felt', 'Absent — relational system overridden'],
  },
];

// Animation timing
const SWEEP_MS = 6000;
const HOLD_MS = 1500;
const PAUSE_PER_STATE = 800;

// Interpolate capacity value for a position (0–1 across 4 states)
function interpolateCapacity(values, position) {
  const idx = position * 3; // 0–3
  const lower = Math.floor(idx);
  const upper = Math.min(lower + 1, 3);
  const t = idx - lower;
  return values[lower] * (1 - t) + values[upper] * t;
}

// Get mode color at a position
function getColorAtPosition(position) {
  if (position < 0.25) return MODES[0].hex;
  if (position < 0.5) return MODES[1].hex;
  if (position < 0.75) return MODES[2].hex;
  return MODES[3].hex;
}

function getModeAtPosition(position) {
  if (position < 0.25) return MODES[0];
  if (position < 0.5) return MODES[1];
  if (position < 0.75) return MODES[2];
  return MODES[3];
}

// ─── Component ──────────────────────────────────────────

export default function M2StateDiagram() {
  const [position, setPosition] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [phase, setPhase] = useState('sweep'); // 'sweep' | 'done'
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const t0Ref = useRef(null);
  const isDragging = useRef(false);
  const barRef = useRef(null);

  const activeMode = getModeAtPosition(position);
  const activeColor = activeMode.hex;

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

  // Auto-sweep animation
  useEffect(() => {
    if (!hasStarted || phase !== 'sweep') return;

    // Eased sweep with pauses at each state center
    const stateCenters = [0.125, 0.375, 0.625, 0.875];
    const totalDuration = SWEEP_MS;

    const tick = (ts) => {
      if (!t0Ref.current) t0Ref.current = ts;
      const elapsed = ts - t0Ref.current;
      const raw = Math.min(elapsed / totalDuration, 1);

      // Ease-in-out with slight pauses at state centers
      const eased = raw < 0.5
        ? 2 * raw * raw
        : 1 - Math.pow(-2 * raw + 2, 2) / 2;

      setPosition(eased);

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setPhase('done');
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hasStarted, phase]);

  // Drag interaction
  const updateFromPointer = useCallback((clientX) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const raw = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setPosition(raw);
  }, []);

  const handlePointerDown = useCallback((e) => {
    isDragging.current = true;
    setPhase('done'); // stop auto-sweep
    cancelAnimationFrame(rafRef.current);
    updateFromPointer(e.clientX);

    const onMove = (ev) => {
      if (isDragging.current) updateFromPointer(ev.clientX);
    };
    const onUp = () => {
      isDragging.current = false;
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  }, [updateFromPointer]);

  // Cleanup
  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const gradientBar = `linear-gradient(90deg, ${MODES.map(m => m.hex).join(', ')})`;

  return (
    <section ref={sectionRef} style={{
      marginBottom: 32,
      ...diagramContainer(),
    }}>
      <style>{`
        .m2-cap-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        .m2-cap-label {
          width: 80px;
          flex-shrink: 0;
          font-family: ${FONT.mono};
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-align: right;
        }
        .m2-cap-track {
          flex: 1;
          height: 20px;
          background: ${hexToRgba(MODEL_COLOR, 0.04)};
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }
        .m2-cap-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.15s ease, background 0.3s ease;
          display: flex;
          align-items: center;
          padding-left: 8px;
          min-width: 0;
        }
        .m2-cap-text {
          font-family: ${FONT.mono};
          font-size: 7px;
          letter-spacing: 0.04em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .m2-gradient-bar {
          height: 12px;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          touch-action: none;
        }
        .m2-needle {
          position: absolute;
          top: -6px;
          width: 3px;
          height: 24px;
          border-radius: 2px;
          transform: translateX(-1.5px);
          pointer-events: none;
          transition: background 0.2s ease;
        }
        @media (max-width: 640px) {
          .m2-cap-label {
            width: 60px;
            font-size: 7px;
          }
          .m2-cap-text {
            font-size: 6px;
          }
        }
      `}</style>

      {/* ─── State indicator ─────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        marginBottom: 12,
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 10, fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: activeColor,
          transition: 'color 0.2s ease',
        }}>
          {activeMode.conditionShort}
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8,
          letterSpacing: '0.06em',
          color: TEXT.hint,
        }}>
          {activeMode.condition}
        </span>
        {phase === 'done' && (
          <span style={{
            fontFamily: FONT.mono, fontSize: 7.5,
            letterSpacing: '0.08em',
            color: TEXT.hint,
            marginLeft: 'auto',
          }}>
            Drag to explore
          </span>
        )}
      </div>

      {/* ─── Gradient bar ────────────────── */}
      <div style={{ marginBottom: 20 }}>
        <div
          ref={barRef}
          className="m2-gradient-bar"
          style={{ background: gradientBar }}
          onPointerDown={handlePointerDown}
        >
          <div
            className="m2-needle"
            style={{
              left: `${position * 100}%`,
              background: 'white',
              boxShadow: `0 0 6px ${hexToRgba(activeColor, 0.5)}`,
            }}
          />
        </div>

        {/* State labels below bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          marginTop: 6,
          padding: '0 2px',
        }}>
          {MODES.map(mode => (
            <span key={mode.key} style={{
              fontFamily: FONT.mono, fontSize: 7,
              letterSpacing: '0.06em',
              color: activeMode.key === mode.key ? mode.hex : TEXT.hint,
              transition: 'color 0.2s ease',
              textAlign: 'center',
              flex: 1,
            }}>
              {mode.label}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Capacity bars ───────────────── */}
      <div>
        {CAPACITIES.map(cap => {
          const value = interpolateCapacity(cap.values, position);
          const pct = Math.max(3, value * 100);
          // Get description for current state
          const stateIdx = position < 0.25 ? 0 : position < 0.5 ? 1 : position < 0.75 ? 2 : 3;
          const desc = cap.descriptions[stateIdx];

          return (
            <div key={cap.label} className="m2-cap-row">
              <span className="m2-cap-label" style={{
                color: value > 0.5 ? TEXT.muted : value > 0.2 ? TEXT.hint : hexToRgba(ACCENT.orange, 0.7),
                transition: 'color 0.3s ease',
              }}>
                {cap.label}
              </span>
              <div className="m2-cap-track">
                <div
                  className="m2-cap-fill"
                  style={{
                    width: `${pct}%`,
                    background: hexToRgba(activeColor, 0.2 + value * 0.25),
                  }}
                >
                  {pct > 25 && (
                    <span className="m2-cap-text" style={{
                      color: value > 0.4 ? TEXT.muted : TEXT.hint,
                    }}>
                      {desc}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Key insight ─────────────────── */}
      <div style={{
        marginTop: 16,
        padding: '10px 14px',
        borderRadius: RADIUS.md,
        background: hexToRgba(activeColor, 0.04),
        border: `1px solid ${hexToRgba(activeColor, 0.12)}`,
        transition: 'border-color 0.3s ease, background 0.3s ease',
      }}>
        <p style={{
          fontSize: 13, lineHeight: 1.6,
          color: TEXT.muted, margin: 0,
          fontStyle: 'italic',
        }}>
          {activeMode.autonomic}. Design duration: {activeMode.fluid.duration.toLowerCase()}.
          {position > 0.6 && ' Cognitive resources redirect from understanding to strategy.'}
          {position > 0.8 && ' Empathic constraint suppressed.'}
        </p>
      </div>
    </section>
  );
}
