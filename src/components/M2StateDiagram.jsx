'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  TEXT, FONT, SPECTRUM, RADIUS, ACCENT,
  hexToRgba, diagramContainer,
} from '@/src/styles/tokens';
import { MODES } from '@/src/data/m2-data';

// ─── Constants ──────────────────────────────────────────
const LIVE_GRADIENT = 'linear-gradient(90deg, #93CFFF 0%, #93CFFF 20%, #5BADFF 35%, #5BADFF 45%, #346AEC 55%, #346AEC 70%, #2563eb 85%, #2563eb 100%)';
const GREY_GRADIENT = 'linear-gradient(90deg, #b2b5bf 0%, #b2b5bf 100%)';
const BASELINE_COLOR = SPECTRUM.slate;

// Capacity dimensions — values at each state position (0–1, where 1 = full capacity)
const CAPACITIES = [
  {
    label: 'Perception',
    values: [1, 0.55, 0.35, 0.15],
    baselineValue: 0.75,
    descriptions: ['Broad — sees the full field', 'Narrowed — threat-relevant signals', 'Control — what needs managing', 'Tunnel — obstacles and resources'],
    baselineDesc: 'Open — available but not directed',
  },
  {
    label: 'Cognition',
    values: [1, 0.5, 0.4, 0.12],
    baselineValue: 0.75,
    descriptions: ['Flexible — holds complexity', 'Simplified — binary thinking', 'Control — planning, anticipation', 'Locked — rigid, self-confirming'],
    baselineDesc: 'Resting — capable but not mobilised',
  },
  {
    label: 'Empathy',
    values: [1, 0.4, 0.25, 0.05],
    baselineValue: 0.65,
    descriptions: ['Full — resonance with others online', 'Filtered — resonance decreases', 'Redirected — reading for strategy', 'Collapsed — resonance offline'],
    baselineDesc: 'Available — channels exist, not engaged',
  },
  {
    label: 'Learning',
    values: [1, 0.45, 0.3, 0.05],
    baselineValue: 0.7,
    descriptions: ['Available — new information integrates', 'Reduced — threat info only', 'Selective — serves strategy only', 'Unavailable — system closed'],
    baselineDesc: 'Receptive — open, no active integration',
  },
  {
    label: 'Repair',
    values: [1, 0.35, 0.2, 0.0],
    baselineValue: 0.6,
    descriptions: ['Available — vulnerability and trust open', 'Limited — vulnerability dangerous', 'Managed — strategic, not felt', 'Absent — relational system overridden'],
    baselineDesc: 'Present — capacity exists, not deployed',
  },
];

// Interpolate capacity value for a position (0–1 across 4 states)
function interpolateCapacity(values, position) {
  const idx = position * 3;
  const lower = Math.floor(idx);
  const upper = Math.min(lower + 1, 3);
  const t = idx - lower;
  return values[lower] * (1 - t) + values[upper] * t;
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
  const [isBaseline, setIsBaseline] = useState(true);
  const isDragging = useRef(false);
  const barRef = useRef(null);

  const activeMode = getModeAtPosition(position);
  const activeColor = isBaseline ? BASELINE_COLOR : activeMode.hex;

  // Drag interaction
  const updateFromPointer = useCallback((clientX) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const raw = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setPosition(raw);
    setIsBaseline(false);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (isDragging.current) updateFromPointer(e.touches ? e.touches[0].clientX : e.clientX);
    };
    const onUp = () => { isDragging.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [updateFromPointer]);

  const onDown = useCallback((e) => {
    isDragging.current = true;
    setIsBaseline(false);
    updateFromPointer(e.touches ? e.touches[0].clientX : e.clientX);
  }, [updateFromPointer]);

  const stateIdx = position < 0.25 ? 0 : position < 0.5 ? 1 : position < 0.75 ? 2 : 3;

  return (
    <section style={{
      marginBottom: 32,
      ...diagramContainer(),
    }}>

      {/* ─── Header ─── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        marginBottom: 6, flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: SPECTRUM.slate,
          letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
        }}>
          4 Nervous System States Gradient
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: TEXT.hint,
          letterSpacing: '0.06em',
        }}>
          Drag the slider to explore how each state changes perception, cognition, and capacity
        </span>
      </div>

      {/* ─── State indicator ─── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        marginBottom: 16, flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 10, fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: activeColor,
          transition: 'color 0.2s ease',
        }}>
          {isBaseline ? 'Physiological Baseline' : activeMode.conditionShort}
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8,
          letterSpacing: '0.06em',
          color: TEXT.hint,
        }}>
          {isBaseline ? 'The nervous system at rest — no state active' : activeMode.condition}
        </span>
      </div>

      {/* ─── Physiological Baseline button ─── */}
      <div style={{ marginBottom: 12 }}>
        <button
          onClick={() => setIsBaseline(true)}
          style={{
            fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '5px 12px',
            borderRadius: RADIUS.sm,
            border: `1px solid ${isBaseline ? BASELINE_COLOR : hexToRgba(BASELINE_COLOR, 0.3)}`,
            background: isBaseline ? hexToRgba(BASELINE_COLOR, 0.12) : 'transparent',
            color: isBaseline ? BASELINE_COLOR : TEXT.hint,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          Physiological Baseline
        </button>
      </div>

      {/* ─── Gradient bar ─── */}
      <div
        ref={barRef}
        style={{ position: 'relative', height: 42, paddingTop: 7, cursor: isBaseline ? 'default' : 'pointer' }}
        onMouseDown={onDown}
        onTouchStart={onDown}
      >
        <div style={{
          height: 14, borderRadius: 100,
          background: isBaseline ? GREY_GRADIENT : LIVE_GRADIENT,
          position: 'relative',
          overflow: 'visible',
          boxShadow: isBaseline ? 'none' : `0 0 20px ${hexToRgba(activeColor, 0.3)}`,
          transition: 'box-shadow 0.3s ease, background 0.3s ease',
        }}>
          {/* Mode boundary markers */}
          {!isBaseline && [0.25, 0.5, 0.75].map(b => (
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
          {/* Needle — hidden at baseline */}
          {!isBaseline && (
            <div style={{
              position: 'absolute',
              left: `${position * 100}%`,
              top: '50%',
              width: 28, height: 28,
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(255,255,255,0.8))',
              border: `3px solid ${activeColor}`,
              boxShadow: `0 2px 8px rgba(0,0,0,0.4), 0 0 16px ${hexToRgba(activeColor, 0.5)}`,
              cursor: 'grab',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              zIndex: 10,
            }} />
          )}
        </div>
      </div>

      {/* ─── State labels below bar ─── */}
      <div style={{ display: 'flex', marginTop: 6, marginBottom: 16 }}>
        {MODES.map((mode, i) => {
          const isCurrent = !isBaseline && i === stateIdx;
          return (
            <div key={mode.key} style={{
              flex: 1, textAlign: 'center',
              opacity: isBaseline ? 0.2 : isCurrent ? 1 : 0.3,
              transition: 'opacity 0.3s ease',
            }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 9, fontWeight: 700,
                letterSpacing: '0.08em',
                color: isCurrent ? mode.hex : TEXT.hint,
                transition: 'color 0.3s ease',
              }}>
                {mode.conditionShort}
              </div>
              <div style={{
                fontFamily: FONT.mono, fontSize: 8, fontWeight: 500,
                letterSpacing: '0.06em',
                color: isCurrent ? hexToRgba(mode.hex, 0.6) : TEXT.micro,
                transition: 'color 0.3s ease',
                marginTop: 2,
              }}>
                {mode.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Capacity bars ─── */}
      <div>
        {CAPACITIES.map(cap => {
          const value = isBaseline ? cap.baselineValue : interpolateCapacity(cap.values, position);
          const pct = Math.max(3, value * 100);
          const desc = isBaseline ? cap.baselineDesc : cap.descriptions[stateIdx];
          const barColor = isBaseline ? BASELINE_COLOR : activeColor;

          return (
            <div key={cap.label} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              marginBottom: 8,
            }}>
              <span style={{
                width: 80, flexShrink: 0,
                fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                textAlign: 'right',
                color: isBaseline ? TEXT.muted : value > 0.5 ? TEXT.muted : value > 0.2 ? TEXT.hint : hexToRgba(ACCENT.orange, 0.7),
                transition: 'color 0.3s ease',
              }}>
                {cap.label}
              </span>
              <div style={{
                flex: 1, height: 20,
                background: hexToRgba(barColor, 0.04),
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
              }}>
                <div style={{
                  height: '100%',
                  width: `${pct}%`,
                  borderRadius: 4,
                  background: isBaseline
                    ? `linear-gradient(90deg, ${hexToRgba(barColor, 0.3)} 0%, ${hexToRgba(barColor, 0)} 100%)`
                    : hexToRgba(barColor, 0.2 + value * 0.25),
                  transition: 'width 0.3s ease, background 0.3s ease',
                  display: 'flex', alignItems: 'center',
                  paddingLeft: 8,
                }}>
                  {pct > 25 && (
                    <span style={{
                      fontFamily: FONT.mono, fontSize: 7,
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
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

      {/* ─── Key insight ─── */}
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
          {isBaseline
            ? 'The nervous system at rest. Resources available, not deployed. No state is organizing perception, cognition, or relational capacity. This is the condition the system is designed to return to after every activation.'
            : <>
                {activeMode.autonomic}. Design duration: {activeMode.fluid.duration.toLowerCase()}.
                {position > 0.6 && ' Cognitive resources redirect from understanding to strategy.'}
                {position > 0.8 && ' Empathic constraint suppressed.'}
              </>
          }
        </p>
      </div>
    </section>
  );
}
