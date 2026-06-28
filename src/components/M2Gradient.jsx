'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  TEXT, FONT, SPECTRUM, RADIUS,
  hexToRgba, diagramContainer,
} from '../styles/tokens';

// ─── Constants ──────────────────────────────────────
const STATES = [
  { name: 'CONNECTION',     mode: 'Connection',  hex: '#93CFFF', pos: 0.125 },
  { name: 'PROTECTION',      mode: 'Protection',  hex: '#5BADFF', pos: 0.375 },
  { name: 'CONTROL / MANAGEMENT', mode: 'Control / Management',     hex: '#346AEC', pos: 0.625 },
  { name: 'DOMINATION',     mode: 'Domination',  hex: '#2563eb', pos: 0.875 },
];

const LIVE_GRADIENT = 'linear-gradient(90deg, #93CFFF 0%, #93CFFF 20%, #5BADFF 35%, #5BADFF 45%, #346AEC 55%, #346AEC 70%, #2563eb 85%, #2563eb 100%)';
const GREY_GRADIENT = 'linear-gradient(90deg, #b2b5bf 0%, #b2b5bf 100%)';
const BASELINE_COLOR = SPECTRUM.slate;

function getActiveIdx(p) {
  if (p < 0.25) return 0;
  if (p < 0.5) return 1;
  if (p < 0.75) return 2;
  return 3;
}

// ─── Component ──────────────────────────────────────

export default function M2Gradient() {
  const [pos, setPos] = useState(0.125);
  const [isBaseline, setIsBaseline] = useState(true);
  const [prevPos, setPrevPos] = useState(0.125);
  const isDragging = useRef(false);
  const barRef = useRef(null);

  const activeIdx = getActiveIdx(pos);
  const active = STATES[activeIdx];
  const activeColor = isBaseline ? BASELINE_COLOR : active.hex;

  // Movement direction and speed for asymmetric transitions
  const movingTowardThreat = pos > prevPos;
  // Fast toward threat (200ms), slow toward safety (800-1200ms)
  const transitionMs = isBaseline ? 300 : movingTowardThreat ? 200 : 800;

  // Drag interaction
  const updateFromPointer = useCallback((clientX) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const raw = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setPrevPos(pos);
    setPos(raw);
    setIsBaseline(false);
  }, [pos]);

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
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const raw = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setPrevPos(pos);
    setPos(raw);
  }, [pos]);

  // Narrative based on movement
  const getNarrative = () => {
    if (isBaseline) return 'The nervous system at rest — no state active. Drag the slider to activate.';
    if (movingTowardThreat && Math.abs(pos - prevPos) > 0.1) return 'Activation is fast — the amygdala fires in 12 milliseconds.';
    if (!movingTowardThreat && Math.abs(pos - prevPos) > 0.1) return 'Restoration is slow — stress hormones metabolise, muscles release, the HPA axis stands down.';
    if (activeIdx === 0) return 'Parasympathetic dominant — perception broad, empathy online, cognition flexible.';
    if (activeIdx === 1) return 'Sympathetic activation — attention narrows, heart rate rises, the system mobilises.';
    if (activeIdx === 2) return 'Cognition recruited into threat — strategic, anticipating, not automatic.';
    if (activeIdx === 3) return 'Maximum override — relational constraint suppressed, tunnel perception.';
    return '';
  };

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
          The Nervous System Gradient
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: TEXT.hint,
          letterSpacing: '0.06em',
        }}>
          A continuous range — drag to feel the asymmetry between activation and restoration
        </span>
      </div>

      {/* ─── Current State Position ─── */}
      <div style={{
        padding: '10px 14px',
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(activeColor, 0.25)}`,
        background: hexToRgba(activeColor, 0.05),
        transition: 'all 0.3s ease',
        marginBottom: 16,
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
          letterSpacing: '0.10em', textTransform: 'uppercase',
          color: hexToRgba(activeColor, 0.7),
          marginBottom: 4,
          transition: 'color 0.3s ease',
        }}>
          Current State Position
        </div>
        <div style={{
          fontFamily: FONT.mono, fontSize: 12, fontWeight: 700,
          color: activeColor,
          transition: 'color 0.3s ease',
        }}>
          {isBaseline ? 'PHYSIOLOGICAL BASELINE' : active.name}
        </div>
        <div style={{
          fontSize: 11, color: TEXT.muted, marginTop: 4, lineHeight: 1.5,
          fontStyle: 'italic',
          minHeight: 18,
        }}>
          {getNarrative()}
        </div>
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

      {/* ─── The gradient bar ─── */}
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
          boxShadow: isBaseline ? 'none' : `0 0 20px ${hexToRgba(active.hex, 0.3)}`,
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
              left: `${pos * 100}%`,
              top: '50%',
              width: 28, height: 28,
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(255,255,255,0.8))',
              border: `3px solid ${active.hex}`,
              boxShadow: `0 2px 8px rgba(0,0,0,0.4), 0 0 16px ${hexToRgba(active.hex, 0.5)}`,
              cursor: 'grab',
              transition: `border-color 0.2s ease, box-shadow 0.2s ease`,
              zIndex: 10,
            }} />
          )}
        </div>
      </div>

      {/* ─── State labels below bar ─── */}
      <div style={{ display: 'flex', marginTop: 6, marginBottom: 16 }}>
        {STATES.map((s, i) => {
          const isCurrent = !isBaseline && i === activeIdx;
          return (
            <div key={s.name} style={{
              flex: 1, textAlign: 'center',
              opacity: isBaseline ? 0.2 : isCurrent ? 1 : 0.3,
              transition: 'opacity 0.3s ease',
            }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 9, fontWeight: 700,
                letterSpacing: '0.08em',
                color: isCurrent ? s.hex : TEXT.hint,
                transition: 'color 0.3s ease',
              }}>
                {s.name}
              </div>
              <div style={{
                fontFamily: FONT.mono, fontSize: 8, fontWeight: 500,
                letterSpacing: '0.06em',
                color: isCurrent ? hexToRgba(s.hex, 0.6) : TEXT.micro,
                transition: 'color 0.3s ease',
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

      {/* ─── State Flexibility indicator ─── */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: 24,
        marginBottom: 16,
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
            letterSpacing: '0.10em', textTransform: 'uppercase',
            color: TEXT.micro, marginBottom: 2,
          }}>
            Activation speed
          </div>
          <div style={{
            fontFamily: FONT.mono, fontSize: 10, fontWeight: 600,
            color: isBaseline ? TEXT.hint : active.hex,
            transition: 'color 0.3s ease',
          }}>
            {isBaseline ? '—' : 'milliseconds'}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
            letterSpacing: '0.10em', textTransform: 'uppercase',
            color: TEXT.micro, marginBottom: 2,
          }}>
            Restoration speed
          </div>
          <div style={{
            fontFamily: FONT.mono, fontSize: 10, fontWeight: 600,
            color: isBaseline ? TEXT.hint : active.hex,
            transition: 'color 0.3s ease',
          }}>
            {isBaseline ? '—' : activeIdx === 0 ? '20 min – 2 hrs' : activeIdx === 1 ? '20 min – 2 hrs' : activeIdx === 2 ? '2 – 8 hrs' : '24 – 72+ hrs'}
          </div>
        </div>
      </div>

      {/* ─── Bottom note ─── */}
      <div style={{
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
          The key measure is not where the needle is. It is whether the needle can move. State Flexibility is the capacity to shift state and restore Physiological Baseline. When that capacity is lost, any state — including the safest — becomes chronic.
        </p>
      </div>
    </section>
  );
}
