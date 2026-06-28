'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import {
  TEXT, FONT, SPECTRUM, RADIUS,
  hexToRgba, diagramContainer,
} from '../styles/tokens';

// ─── Constants ──────────────────────────────────────
const STATES = [
  {
    name: 'CONNECTION', mode: 'Connection', hex: '#93CFFF', pos: 0.125,
    branch: 'parasympathetic', system: 'Emotional-Somatic',
    biology: 'Ventral vagal dominant. Heart rate settles. Vagal tone high. Social engagement system activates — face, voice, middle ear orient toward connection.',
    activation: 'Automatic — safety perceived',
    enables: 'Perception broadens. Empathy fully online. Cognition holds complexity, tolerates ambiguity. Learning, repair, and vulnerability available.',
    duration: 'Temporary — returns to baseline',
    evolutionary: 'Belonging, caring, cooperating, relating',
  },
  {
    name: 'PROTECTION', mode: 'Protection', hex: '#5BADFF', pos: 0.375,
    branch: 'sympathetic', system: 'Emotional-Somatic',
    biology: 'Sympathetic activation. Heart rate rises, muscles tense, cortisol and adrenaline release. The body prepares for action.',
    activation: 'Automatic — threat perceived',
    enables: 'Attention narrows to threat. Emotions amplify. Cognition simplifies — binary, speed over accuracy. Time horizon collapses to the immediate.',
    duration: 'Minutes to hours — emergency system',
    evolutionary: 'Defending, fleeing, hunting, surviving',
  },
  {
    name: 'CONTROL / MANAGEMENT', mode: 'Control / Management', hex: '#346AEC', pos: 0.625,
    branch: 'sympathetic', system: 'Cognitive-Logical',
    biology: 'Sympathetic activation continues. Prefrontal cortex recruited — not for exploration but for threat-management.',
    activation: 'Deliberate — cognition recruited into threat service',
    enables: 'Strategic thinking about threat. The future is a threat landscape to map. Anticipation, management, override of impulses. Can appear highly functional.',
    duration: 'Time-limited — a tool, not a residence',
    evolutionary: 'Coordinating hunts, planning migration, navigating social hierarchies',
  },
  {
    name: 'DOMINATION', mode: 'Domination', hex: '#2563eb', pos: 0.875,
    branch: 'sympathetic', system: 'Cognitive-Logical',
    biology: 'Sympathetic at maximum. The vmPFC — guilt, care, empathy, consequence — is suppressed. Cognitive resources fully redirected to threat elimination.',
    activation: 'Deliberate — cognition at maximum threat response',
    enables: 'Control, suppression of resistance, elimination of obstacle. Others processed as threat, utility, or obstacle. Relational inhibition strongest.',
    duration: 'Temporary — extreme situations only',
    evolutionary: 'Rapid action where hesitation could be catastrophic',
  },
];

const LIVE_GRADIENT = 'linear-gradient(90deg, #93CFFF 0%, #93CFFF 20%, #5BADFF 35%, #5BADFF 45%, #346AEC 55%, #346AEC 70%, #2563eb 85%, #2563eb 100%)';

const SNAP_RADIUS = 0.04;

function getActiveIdx(p) {
  if (p < 0.25) return 0;
  if (p < 0.5) return 1;
  if (p < 0.75) return 2;
  return 3;
}

const DETAIL_ROWS = [
  { key: 'biology',      label: 'Biology' },
  { key: 'activation',   label: 'Activation' },
  { key: 'enables',      label: 'What it produces' },
  { key: 'duration',     label: 'Design duration' },
  { key: 'evolutionary', label: 'Evolutionary basis' },
];

export default function M2FourStates() {
  const [pos, setPos] = useState(0.125);
  const barRef = useRef(null);
  const dragging = useRef(false);
  const activeIdx = getActiveIdx(pos);
  const active = STATES[activeIdx];

  const handleMove = useCallback((clientX) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    let raw = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    for (const s of STATES) {
      if (Math.abs(raw - s.pos) < SNAP_RADIUS) { raw = s.pos; break; }
    }
    setPos(raw);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (dragging.current) handleMove(e.touches ? e.touches[0].clientX : e.clientX);
    };
    const onUp = () => { dragging.current = false; };
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
  }, [handleMove]);

  const onDown = useCallback((e) => {
    dragging.current = true;
    handleMove(e.touches ? e.touches[0].clientX : e.clientX);
  }, [handleMove]);

  // Architectural break: ESS-led (0,1) vs CLS-recruited (2,3)
  const isESSled = activeIdx < 2;

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
          Two Branches
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: TEXT.hint,
          letterSpacing: '0.06em',
        }}>
          Four Nervous System States
        </span>
      </div>

      {/* ─── Branches wrapper: labels + bar + state labels inside highlights ─── */}
      <div style={{ position: 'relative', padding: '10px 0' }}>
        {/* Background: parasympathetic branch (left 25%) */}
        <div style={{
          position: 'absolute',
          left: 0, width: '25%',
          top: 0, bottom: 0,
          borderRadius: `${RADIUS.md}px 0 0 ${RADIUS.md}px`,
          background: hexToRgba(STATES[0].hex, activeIdx === 0 ? 0.07 : 0.03),
          border: `1px solid ${hexToRgba(STATES[0].hex, activeIdx === 0 ? 0.12 : 0.06)}`,
          borderRight: 'none',
          transition: 'all 0.4s ease',
        }} />
        {/* Background: sympathetic branch (right 75%) */}
        <div style={{
          position: 'absolute',
          left: '25%', right: 0,
          top: 0, bottom: 0,
          borderRadius: `0 ${RADIUS.md}px ${RADIUS.md}px 0`,
          background: hexToRgba(active.hex, activeIdx > 0 ? 0.07 : 0.03),
          border: `1px solid ${hexToRgba(active.hex, activeIdx > 0 ? 0.12 : 0.06)}`,
          borderLeft: 'none',
          transition: 'all 0.4s ease',
        }} />

        {/* Branch labels (inside highlights) */}
        <div style={{ display: 'flex', marginBottom: 6, position: 'relative', zIndex: 1 }}>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
              letterSpacing: '0.10em', textTransform: 'uppercase',
              color: activeIdx === 0 ? hexToRgba(STATES[0].hex, 0.8) : TEXT.hint,
              textAlign: 'center',
              transition: 'color 0.4s ease',
            }}>
              Parasympathetic
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
              letterSpacing: '0.10em', textTransform: 'uppercase',
              color: activeIdx >= 1 ? hexToRgba(STATES[1].hex, 0.8) : TEXT.hint,
              textAlign: 'center',
              transition: 'color 0.4s ease',
            }}>
              Sympathetic
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <div style={{
              fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
              letterSpacing: '0.10em', textTransform: 'uppercase',
              color: activeIdx >= 2 ? hexToRgba(active.hex, 0.8) : TEXT.hint,
              textAlign: 'center',
              transition: 'color 0.4s ease',
            }}>
              CLS extends the threat branch
            </div>
          </div>
        </div>

        {/* The gradient bar */}
        <div
          ref={barRef}
          style={{ position: 'relative', height: 42, paddingTop: 7, cursor: 'pointer', zIndex: 1 }}
          onMouseDown={onDown}
          onTouchStart={onDown}
        >
          <div style={{
            height: 14, borderRadius: 100,
            background: LIVE_GRADIENT,
            position: 'relative',
            overflow: 'visible',
            boxShadow: `0 0 20px ${hexToRgba(active.hex, 0.3)}`,
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
            {/* Architectural break line (between state 2 and 3) */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: -6, bottom: -6,
              width: 0,
              borderLeft: `1.5px dashed ${hexToRgba('#ffffff', 0.25)}`,
              transform: 'translateX(-50%)',
              zIndex: 3,
            }} />
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
              cursor: 'grab',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              zIndex: 10,
            }} />
          </div>
        </div>

        {/* State labels (inside highlights) */}
        <div style={{ display: 'flex', marginTop: 6, position: 'relative', zIndex: 1 }}>
          {STATES.map((s, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={s.name}
                onClick={() => setPos(s.pos)}
                style={{
                  flex: 1, textAlign: 'center',
                  opacity: isActive ? 1 : 0.35,
                  transition: 'opacity 0.3s ease',
                  background: 'none', border: 'none',
                  cursor: 'pointer', padding: '4px 0 0',
                }}
              >
                <div style={{
                  fontFamily: FONT.mono, fontSize: 9, fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: isActive ? s.hex : TEXT.hint,
                  transition: 'color 0.3s ease',
                }}>
                  {s.name}
                </div>
                <div style={{
                  fontFamily: FONT.mono, fontSize: 8, fontWeight: 500,
                  letterSpacing: '0.06em',
                  color: isActive ? hexToRgba(s.hex, 0.6) : TEXT.micro,
                  transition: 'color 0.3s ease',
                  marginTop: 2,
                }}>
                  {s.mode}
                </div>
                {isActive && (
                  <div style={{
                    width: 4, height: 4, borderRadius: '50%',
                    background: s.hex,
                    boxShadow: `0 0 8px ${s.hex}`,
                    margin: '4px auto 0',
                  }} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Detail panel ─── */}
      <div style={{
        marginTop: 16,
        padding: '14px 16px',
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(active.hex, 0.2)}`,
        background: hexToRgba(active.hex, 0.04),
        transition: 'border-color 0.4s ease, background 0.4s ease',
      }}>
        {DETAIL_ROWS.map(({ key, label }) => (
          <div key={key} style={{
            display: 'flex', gap: 12, marginBottom: key === 'evolutionary' ? 0 : 10,
            alignItems: 'baseline',
          }}>
            <span style={{
              fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
              letterSpacing: '0.10em', textTransform: 'uppercase',
              color: hexToRgba(active.hex, 0.7),
              minWidth: 100, flexShrink: 0,
              transition: 'color 0.4s ease',
            }}>
              {label}
            </span>
            <span style={{
              fontSize: 12, color: TEXT.muted, lineHeight: 1.55,
            }}>
              {active[key]}
            </span>
          </div>
        ))}
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
          {isESSled
            ? 'The Emotional-Somatic System (ESS) leads — the body\u2019s detection and response architecture sets the state before conscious processing arrives.'
            : 'The Cognitive-Logical System (CLS) extends the threat branch. This is not greater intensity — it is a shift in which system organises the response.'
          }
        </p>
      </div>
    </section>
  );
}
