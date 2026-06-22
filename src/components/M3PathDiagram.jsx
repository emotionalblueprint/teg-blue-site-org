'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import {
  TEXT, FONT, SPECTRUM, RADIUS, MODEL_COLORS, ACCENT,
  hexToRgba, diagramContainer,
} from '@/src/styles/tokens';

// ─── Constants ──────────────────────────────────────
const MODEL_COLOR = MODEL_COLORS.M3;
const ORANGE = ACCENT.orange;    // override / debris / accumulation

const STATES = [
  { name: 'CONNECTION',     mode: 'Connection',  hex: '#93CFFF', pos: 0.125 },
  { name: 'PROTECTION',      mode: 'Protection',  hex: '#5BADFF', pos: 0.375 },
  { name: 'STRATEGIC MANAGEMENT', mode: 'Control',     hex: '#346AEC', pos: 0.625 },
  { name: 'DOMINATION',     mode: 'Domination',  hex: '#2563eb', pos: 0.875 },
];

const LIVE_GRADIENT = 'linear-gradient(90deg, #93CFFF 0%, #93CFFF 20%, #5BADFF 35%, #5BADFF 45%, #346AEC 55%, #346AEC 70%, #2563eb 85%, #2563eb 100%)';
const SNAP_RADIUS = 0.04;

function getActiveIdx(p) {
  if (p < 0.25) return 0;
  if (p < 0.5) return 1;
  if (p < 0.75) return 2;
  return 3;
}

// ─── Override thresholds (from CA data) ─────────────
// - Each override: amygdala sensitises, cortisol stays, floor rises
// - After 3 overrides: amygdala begins firing at smaller inputs → needle starts drifting
// - After 6: "smaller triggers, larger responses" → drift accelerates
// - After 10: chronic architecture — override is no longer an event, it's the default
// - Debris per override scales with state depth (deeper state = more debris)
const DEBRIS_PER_OVERRIDE = [4, 8, 14, 20]; // by state index
const DRIFT_THRESHOLD = 3;      // overrides before needle starts auto-moving
const DRIFT_ACCELERATE = 6;     // overrides before drift speeds up
const CHRONIC_THRESHOLD = 10;   // override becomes the architecture

// SVG dimensions for the debris mountain
const SVG_W = 600;
const SVG_H = 100;
const MAX_LOAD = 200;

// ─── Component ──────────────────────────────────────

export default function M3PathDiagram() {
  const [pos, setPos] = useState(0.125);
  const [overrideCount, setOverrideCount] = useState(0);
  const [totalLoad, setTotalLoad] = useState(0);
  // Debris distributed across the gradient (40 bins)
  const [debrisBins, setDebrisBins] = useState(new Array(40).fill(0));
  const [narrative, setNarrative] = useState('');
  const [driftInterval, setDriftInterval] = useState(null);

  const barRef = useRef(null);
  const dragging = useRef(false);
  const driftRef = useRef(null);

  const activeIdx = getActiveIdx(pos);
  const active = STATES[activeIdx];

  // Orange intensity based on total load
  const orangeIntensity = Math.min(1, totalLoad / MAX_LOAD);
  const barTint = orangeIntensity > 0 ? hexToRgba(ORANGE, orangeIntensity * 0.25) : 'transparent';

  // ─── Drag interaction ─────────────────────────────
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

  // ─── Override action ──────────────────────────────
  const doOverride = () => {
    const stateIdx = getActiveIdx(pos);
    const debris = DEBRIS_PER_OVERRIDE[stateIdx];
    const newCount = overrideCount + 1;
    const newLoad = Math.min(MAX_LOAD, totalLoad + debris);

    // ── Debris distribution: cascading activation ──────
    // Override in any state loads the states underneath it too.
    // Connection override → also loads Protection (suppressed signal generates threat debris)
    // Protection override → loads Protection (primary)
    // Control override → loads Control + Protection underneath (sympathetic still running)
    // Domination override → loads Domination + Control + Protection (everything underneath)
    //
    // The activation is sympathetic — it doesn't stay in one box.
    // Deeper overrides carry more downstream debris.
    const binIdx = Math.floor(pos * 39);
    setDebrisBins(prev => {
      const next = [...prev];

      // Helper: add debris in a zone (center bin, spread, amount)
      const addZone = (centerBin, spread, amount) => {
        for (let i = -spread; i <= spread; i++) {
          const bi = centerBin + i;
          if (bi >= 0 && bi < 40) {
            const weight = 1 - Math.abs(i) / (spread + 1);
            next[bi] = Math.min(MAX_LOAD / 2, next[bi] + amount * weight);
          }
        }
      };

      // Primary debris at override position
      addZone(binIdx, 2, debris * 0.7);

      // Cascading debris into lower states:
      if (stateIdx === 0) {
        // Connection override → Protection also loads (the suppressed signal creates threat activation)
        addZone(15, 2, debris * 0.4);  // bin 15 ≈ Protection center (0.375)
      } else if (stateIdx === 1) {
        // Protection override → primary only (already at sympathetic base)
      } else if (stateIdx === 2) {
        // Control override → Protection underneath (sympathetic activation unresolved)
        addZone(15, 2, debris * 0.5);
      } else if (stateIdx === 3) {
        // Domination override → Control + Protection underneath
        addZone(25, 2, debris * 0.4);  // bin 25 ≈ Control center (0.625)
        addZone(15, 2, debris * 0.5);  // Protection
      }

      return next;
    });

    setOverrideCount(newCount);
    setTotalLoad(newLoad);

    // Narrative based on count
    if (newCount === 1) {
      setNarrative('"I don\u2019t have time for this." The restoration sequence stays open. Cortisol still circulating.');
    } else if (newCount === 2) {
      setNarrative('Another override. The body receives no biological resolution. Debris compounds.');
    } else if (newCount === DRIFT_THRESHOLD) {
      setNarrative('The amygdala has sensitised — threshold lowered, firing faster. The needle will start drifting on its own.');
    } else if (newCount === DRIFT_ACCELERATE) {
      setNarrative('Smaller triggers now produce larger responses. The window between floor and ceiling has narrowed.');
    } else if (newCount === CHRONIC_THRESHOLD) {
      setNarrative('The override is no longer an event. It is the architecture. The person does not register the activation as activation.');
    } else if (newCount > CHRONIC_THRESHOLD) {
      setNarrative('The system treats the elevated level as normal. The person may have no reference point for what rest feels like.');
    } else {
      const phrases = [
        'Cortisol still circulating. Muscles still braced.',
        'The HPA axis never received the all-clear.',
        'Somatic debt accumulates underneath what feels like stability.',
        'The floor rises. Each increment feels like the current normal.',
        'The override consumes physiological resources continuously.',
      ];
      setNarrative(phrases[(newCount - 1) % phrases.length]);
    }

    // Start drift after threshold
    if (newCount >= DRIFT_THRESHOLD && !driftRef.current) {
      startDrift(newCount);
    }
  };

  // ─── Auto-drift — the needle moves on its own ────
  const startDrift = useCallback((count) => {
    if (driftRef.current) clearInterval(driftRef.current);
    const speed = count >= DRIFT_ACCELERATE ? 0.008 : 0.004;
    driftRef.current = setInterval(() => {
      setPos(prev => {
        const next = Math.min(0.95, prev + speed);
        return next;
      });
    }, 300);
  }, []);

  // Update drift speed when override count changes
  useEffect(() => {
    if (overrideCount >= DRIFT_THRESHOLD && driftRef.current) {
      clearInterval(driftRef.current);
      const speed = overrideCount >= DRIFT_ACCELERATE ? 0.008 : 0.004;
      driftRef.current = setInterval(() => {
        setPos(prev => Math.min(0.95, prev + speed));
      }, 300);
    }
  }, [overrideCount]);

  // ─── Reset ────────────────────────────────────────
  const reset = () => {
    if (driftRef.current) { clearInterval(driftRef.current); driftRef.current = null; }
    setPos(0.125);
    setOverrideCount(0);
    setTotalLoad(0);
    setDebrisBins(new Array(40).fill(0));
    setNarrative('');
  };

  useEffect(() => () => {
    if (driftRef.current) clearInterval(driftRef.current);
  }, []);

  // ─── Build SVG mountain path ──────────────────────
  const maxBin = Math.max(...debrisBins, 1);
  const mountainPoints = debrisBins.map((val, i) => {
    const x = (i / 39) * SVG_W;
    const h = (val / (MAX_LOAD / 2)) * (SVG_H - 5);
    const y = SVG_H - h;
    return `${x},${y}`;
  }).join(' ');
  const mountainArea = `0,${SVG_H} ${mountainPoints} ${SVG_W},${SVG_H}`;

  return (
    <section style={{ marginBottom: 32, ...diagramContainer() }}>

      {/* ─── Header ─── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        marginBottom: 20, flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8,
          color: orangeIntensity > 0.3 ? ORANGE : MODEL_COLOR,
          letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
          transition: 'color 0.5s ease',
        }}>
          Path A / Path B
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: TEXT.hint,
          letterSpacing: '0.06em',
        }}>
          Whether the body completes — or the activation accumulates
        </span>
      </div>

      {/* ─── Status ─── */}
      <div style={{
        display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap',
      }}>
        <div style={{
          flex: 1, minWidth: 140,
          padding: '8px 12px',
          borderRadius: RADIUS.sm,
          border: `1px solid ${hexToRgba(overrideCount > 0 ? ORANGE : SPECTRUM.slate, 0.2)}`,
          background: hexToRgba(overrideCount > 0 ? ORANGE : SPECTRUM.slate, 0.05),
          transition: 'all 0.4s ease',
        }}>
          <div style={{
            fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
            letterSpacing: '0.10em', textTransform: 'uppercase',
            color: hexToRgba(overrideCount > 0 ? ORANGE : SPECTRUM.slate, 0.6),
            transition: 'color 0.4s ease',
          }}>
            Overrides
          </div>
          <div style={{
            fontFamily: FONT.mono, fontSize: 14, fontWeight: 700,
            color: overrideCount > 0 ? ORANGE : TEXT.hint,
            transition: 'color 0.4s ease',
          }}>
            {overrideCount}
          </div>
        </div>
        <div style={{
          flex: 1, minWidth: 140,
          padding: '8px 12px',
          borderRadius: RADIUS.sm,
          border: `1px solid ${hexToRgba(active.hex, 0.2)}`,
          background: hexToRgba(active.hex, 0.05),
          transition: 'all 0.4s ease',
        }}>
          <div style={{
            fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
            letterSpacing: '0.10em', textTransform: 'uppercase',
            color: hexToRgba(active.hex, 0.6),
            transition: 'color 0.4s ease',
          }}>
            Current State Position
          </div>
          <div style={{
            fontFamily: FONT.mono, fontSize: 11, fontWeight: 700,
            color: active.hex,
            transition: 'color 0.4s ease',
          }}>
            {active.name}
          </div>
        </div>
        {overrideCount >= DRIFT_THRESHOLD && (
          <div style={{
            flex: 1, minWidth: 140,
            padding: '8px 12px',
            borderRadius: RADIUS.sm,
            border: `1px solid ${hexToRgba(ORANGE, 0.3)}`,
            background: hexToRgba(ORANGE, 0.08),
          }}>
            <div style={{
              fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
              letterSpacing: '0.10em', textTransform: 'uppercase',
              color: hexToRgba(ORANGE, 0.7),
            }}>
              Amygdala
            </div>
            <div style={{
              fontFamily: FONT.mono, fontSize: 11, fontWeight: 700,
              color: ORANGE,
            }}>
              {overrideCount >= CHRONIC_THRESHOLD ? 'CHRONIC' : overrideCount >= DRIFT_ACCELERATE ? 'SENSITISED' : 'DRIFTING'}
            </div>
          </div>
        )}
      </div>

      {/* ─── Debris mountain (SVG above the bar) ─── */}
      <div style={{ position: 'relative' }}>
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          style={{
            width: '100%', height: 60, display: 'block',
            marginBottom: -1,
          }}
          preserveAspectRatio="none"
        >
          {/* Mountain fill */}
          {totalLoad > 0 && (
            <polygon
              points={mountainArea}
              fill={hexToRgba(ORANGE, 0.15 + orangeIntensity * 0.25)}
              style={{ transition: 'fill 0.4s ease' }}
            />
          )}
          {/* Mountain outline */}
          {totalLoad > 0 && (
            <polyline
              points={mountainPoints}
              fill="none"
              stroke={hexToRgba(ORANGE, 0.3 + orangeIntensity * 0.4)}
              strokeWidth="1.5"
              strokeLinejoin="round"
              style={{ transition: 'stroke 0.4s ease' }}
            />
          )}
          {/* Label */}
          {totalLoad > 20 && (
            <text x="10" y="16"
              fill={hexToRgba(ORANGE, 0.5 + orangeIntensity * 0.3)}
              fontSize="10"
              fontFamily={FONT.mono}
              fontWeight="600"
              letterSpacing="0.08em"
            >
              UNRESOLVED ACTIVATION LOAD
            </text>
          )}
        </svg>
      </div>

      {/* ─── The gradient bar ─── */}
      <div
        ref={barRef}
        style={{ position: 'relative', height: 42, paddingTop: 7, cursor: 'pointer' }}
        onMouseDown={onDown}
        onTouchStart={onDown}
      >
        {/* Orange tint overlay */}
        <div style={{
          position: 'absolute', top: 7, left: 0, right: 0,
          height: 14, borderRadius: 100,
          background: LIVE_GRADIENT,
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: barTint,
            transition: 'background 0.5s ease',
            borderRadius: 100,
          }} />
        </div>
        {/* Mode boundary markers */}
        {[0.25, 0.5, 0.75].map(b => (
          <div key={b} style={{
            position: 'absolute',
            left: `${b * 100}%`,
            top: 6, bottom: 21,
            width: 1.5,
            background: 'rgba(0,0,0,0.45)',
            borderRadius: 1,
            transform: 'translateX(-50%)',
            zIndex: 2,
          }} />
        ))}
        {/* Needle */}
        <div style={{
          position: 'absolute',
          left: `${pos * 100}%`,
          top: 14,
          width: 28, height: 28,
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: orangeIntensity > 0.5
            ? `radial-gradient(circle at 35% 35%, ${hexToRgba(ORANGE, 0.3)}, ${hexToRgba(ORANGE, 0.15)})`
            : 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(255,255,255,0.8))',
          border: `3px solid ${orangeIntensity > 0.4 ? ORANGE : active.hex}`,
          boxShadow: `0 2px 8px rgba(0,0,0,0.4), 0 0 16px ${hexToRgba(orangeIntensity > 0.4 ? ORANGE : active.hex, 0.5)}`,
          cursor: 'grab',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
          zIndex: 10,
        }} />
      </div>

      {/* ─── State labels ─── */}
      <div style={{ display: 'flex', marginTop: 6 }}>
        {STATES.map((s, i) => {
          const isCurrent = i === activeIdx;
          return (
            <div key={s.name} style={{
              flex: 1, textAlign: 'center',
              opacity: isCurrent ? 1 : 0.3,
              transition: 'opacity 0.3s ease',
            }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 9, fontWeight: 700,
                letterSpacing: '0.08em',
                color: isCurrent ? (orangeIntensity > 0.5 ? ORANGE : s.hex) : TEXT.hint,
                transition: 'color 0.3s ease',
              }}>
                {s.name}
              </div>
              <div style={{
                fontFamily: FONT.mono, fontSize: 8, fontWeight: 500,
                letterSpacing: '0.06em',
                color: isCurrent ? hexToRgba(orangeIntensity > 0.5 ? ORANGE : s.hex, 0.6) : TEXT.micro,
                transition: 'color 0.3s ease',
                marginTop: 2,
              }}>
                {s.mode}
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Narrative ─── */}
      {narrative && (
        <div style={{
          textAlign: 'center', marginTop: 16,
          fontSize: 12, color: TEXT.muted, lineHeight: 1.55,
          fontStyle: 'italic',
          minHeight: 36,
        }}>
          {narrative}
        </div>
      )}

      {/* ─── Controls ─── */}
      <div style={{
        display: 'flex', gap: 8, justifyContent: 'center',
        marginTop: 16, flexWrap: 'wrap',
      }}>
        <button
          onClick={doOverride}
          style={{
            padding: '6px 20px',
            borderRadius: 20,
            border: `1px solid ${hexToRgba(ORANGE, 0.4)}`,
            background: hexToRgba(ORANGE, 0.12),
            cursor: 'pointer',
            fontFamily: FONT.mono,
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            color: ORANGE,
            transition: 'all 0.3s ease',
          }}
        >
          Override +
        </button>
        {overrideCount > 0 && (
          <button
            onClick={reset}
            style={{
              padding: '6px 16px',
              borderRadius: 20,
              border: `1px solid ${hexToRgba(SPECTRUM.slate, 0.3)}`,
              background: hexToRgba(SPECTRUM.slate, 0.08),
              cursor: 'pointer',
              fontFamily: FONT.mono,
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: SPECTRUM.slate,
              transition: 'all 0.3s ease',
            }}
          >
            Reset
          </button>
        )}
      </div>

      {/* ─── Instructions ─── */}
      {overrideCount === 0 && (
        <div style={{
          textAlign: 'center', marginTop: 12,
          fontFamily: FONT.mono, fontSize: 8,
          color: TEXT.hint, letterSpacing: '0.06em',
        }}>
          Drag the slider to a state, then press Override + to see what accumulates
        </div>
      )}

      {/* ─── Bottom note ─── */}
      <div style={{
        marginTop: 16,
        padding: '10px 16px',
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(orangeIntensity > 0.3 ? ORANGE : SPECTRUM.slate, 0.15)}`,
        background: hexToRgba(orangeIntensity > 0.3 ? ORANGE : SPECTRUM.slate, 0.04),
        textAlign: 'center',
        transition: 'all 0.5s ease',
      }}>
        <p style={{
          fontSize: 12, lineHeight: 1.6,
          color: TEXT.muted, margin: 0,
        }}>
          {overrideCount >= CHRONIC_THRESHOLD
            ? 'The person in chronic activation cannot restore, operates from locked capacity restrictions experienced as normal, and has no awareness that any of this is happening.'
            : overrideCount >= DRIFT_THRESHOLD
            ? 'The amygdala has sensitised — it fires faster at smaller inputs. The needle drifts toward threat on its own. The person did not choose this. The nervous system recalibrated.'
            : 'Every override adds to what is already there. The restoration sequence stays open. The body carries the accumulation forward.'
          }
        </p>
      </div>
    </section>
  );
}
