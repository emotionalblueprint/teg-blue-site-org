'use client';

import { useState, useEffect, useRef } from 'react';
import {
  TEXT, BORDER, FONT, SPECTRUM, RADIUS, MAIN_ORG,
  hexToRgba, gradientCardBg, diagramContainer,
} from '../styles/tokens';
import { MODES } from '../data/m2-data';

// ─── Constants ──────────────────────────────────────
const MODEL_COLOR = '#4B8FFF';
const SAFETY_COLOR = MODES[0].hex;   // #93CFFF
const THREAT_COLOR = MODES[1].hex;   // #5BADFF
const WARNING_COLOR = '#e87b35';

// SVG
const SIZE = 300;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 115;           // radar radius
const SWEEP_SPEED = 4;   // seconds per revolution
const TOTAL_SWEEPS = 2.5;
const DURATION = SWEEP_SPEED * TOTAL_SWEEPS * 1000;

// ─── Blips around the radar ─────────────────────────
// angle in degrees (0=top, clockwise), distance from center as fraction of R
const BLIPS = [
  { angle: 35,  dist: 0.55, type: 'safety',  label: 'Familiar voice' },
  { angle: 80,  dist: 0.75, type: 'safety',  label: 'Warm tone' },
  { angle: 130, dist: 0.40, type: 'threat',  label: 'Sudden movement' },
  { angle: 170, dist: 0.85, type: 'safety',  label: 'Known space' },
  { angle: 210, dist: 0.60, type: 'threat',  label: 'Raised voice' },
  { angle: 260, dist: 0.48, type: 'ambiguous', label: 'Unfamiliar face' },
  { angle: 310, dist: 0.70, type: 'safety',  label: 'Eye contact' },
  { angle: 345, dist: 0.35, type: 'ambiguous', label: 'Silence' },
];

// Convert angle (degrees from top) + distance to SVG coords
function blipPos(angle, dist) {
  const rad = (angle - 90) * Math.PI / 180;
  return {
    x: CX + R * dist * Math.cos(rad),
    y: CY + R * dist * Math.sin(rad),
  };
}

// ─── Info cards ─────────────────────────────────────
const CARDS = [
  {
    phase: 0,
    label: 'Continuous scanning',
    body: 'The nervous system monitors safety and threat below conscious awareness — automatic, rapid, and based on experienced safety, not objective conditions.',
    ref: 'Porges, 2011',
    color: MODEL_COLOR,
  },
  {
    phase: 1,
    label: 'Detection → response',
    body: 'Each detection triggers a system-wide response. Safety signals open engagement. Threat signals mobilise protection. The body reorganises before conscious thought can form.',
    ref: 'LeDoux, 1996',
    color: THREAT_COLOR,
  },
  {
    phase: 2,
    label: 'Biased toward protection',
    body: 'Ambiguous signals read as threat. Failing to detect danger may be fatal — unnecessary protection is less costly. The system is biased toward defence under uncertainty.',
    ref: 'Damasio, 1994',
    color: WARNING_COLOR,
  },
];

// ─── Component ──────────────────────────────────────

export default function M2SafetyEvaluation() {
  const [sweepAngle, setSweepAngle] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [done, setDone] = useState(false);
  const [revealedBlips, setRevealedBlips] = useState(new Set());
  const [lastDetection, setLastDetection] = useState(null); // 'safety' | 'threat' | 'ambiguous'
  const [pulses, setPulses] = useState([]); // { id, cx, cy, color, t }
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const t0Ref = useRef(null);
  const runRef = useRef(0);
  const pulseIdRef = useRef(0);

  function play() {
    cancelAnimationFrame(rafRef.current);
    t0Ref.current = null;
    setSweepAngle(0);
    setDone(false);
    setHasStarted(true);
    setRevealedBlips(new Set());
    setLastDetection(null);
    setPulses([]);
    runRef.current += 1;
  }

  // Scroll trigger
  useEffect(() => {
    if (hasStarted) return;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { play(); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasStarted]);

  // Animation loop
  useEffect(() => {
    if (!hasStarted) return;
    const thisRun = runRef.current;
    const tick = (ts) => {
      if (thisRun !== runRef.current) return;
      if (!t0Ref.current) t0Ref.current = ts;
      const elapsed = ts - t0Ref.current;
      const p = Math.min(elapsed / DURATION, 1);
      const currentAngle = (p * TOTAL_SWEEPS * 360) % 360;
      setSweepAngle(currentAngle);

      // Check if sweep passes a blip (within ±12 degrees)
      setRevealedBlips(prev => {
        const next = new Set(prev);
        let newDetection = null;
        BLIPS.forEach((blip, i) => {
          if (!next.has(i)) {
            const diff = ((currentAngle - blip.angle) % 360 + 360) % 360;
            if (diff < 12 || diff > 348) {
              next.add(i);
              newDetection = blip;
            }
          }
        });
        if (newDetection) {
          const pos = blipPos(newDetection.angle, newDetection.dist);
          const isThreaty = newDetection.type === 'threat' || newDetection.type === 'ambiguous';
          setLastDetection(isThreaty ? 'threat' : 'safety');
          setPulses(prev => [...prev.slice(-4), {
            id: ++pulseIdRef.current,
            cx: pos.x,
            cy: pos.y,
            color: isThreaty ? (newDetection.type === 'ambiguous' ? WARNING_COLOR : THREAT_COLOR) : SAFETY_COLOR,
          }]);
        }
        return next;
      });

      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setDone(true);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hasStarted, runRef.current]);

  // Cleanup
  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  // Sweep arm endpoint
  const sweepRad = (sweepAngle - 90) * Math.PI / 180;
  const sweepX = CX + R * Math.cos(sweepRad);
  const sweepY = CY + R * Math.sin(sweepRad);

  // Sweep trail (arc behind the arm)
  const trailAngle = 30;
  const trailStart = sweepAngle - trailAngle;

  // Current phase for cards
  const revealCount = revealedBlips.size;
  const currentPhase = revealCount >= 6 ? 2 : revealCount >= 2 ? 1 : revealCount >= 1 ? 0 : -1;

  return (
    <section ref={sectionRef} style={{ marginBottom: 32, ...diagramContainer() }}>
      <style>{`
        .m2-cse-layout {
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .m2-cse-cards {
          flex: 1;
          min-width: 260px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .m2-cse-card {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .m2-cse-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes m2Pulse {
          from { r: 4; opacity: 0.6; }
          to { r: 30; opacity: 0; }
        }
        @media (max-width: 640px) {
          .m2-cse-layout {
            flex-direction: column;
          }
        }
      `}</style>

      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        marginBottom: 16, flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: MODEL_COLOR,
          letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
        }}>
          Neuroception
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: TEXT.hint,
          letterSpacing: '0.06em',
        }}>
          Continuous safety/threat evaluation
        </span>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          {lastDetection && !done && (
            <span style={{
              fontFamily: FONT.mono, fontSize: 10, fontWeight: 600,
              color: lastDetection === 'threat' ? WARNING_COLOR : SAFETY_COLOR,
              transition: 'color 0.3s ease',
            }}>
              {lastDetection === 'threat' ? 'Protection required' : 'Safe to engage'}
            </span>
          )}
          {done && (
            <button
              onClick={play}
              aria-label="Replay animation"
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '4px 12px',
                border: `1px solid ${BORDER.default}`,
                background: 'transparent',
                color: TEXT.muted,
                borderRadius: 6,
                fontFamily: FONT.mono,
                fontSize: 9,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M1 1v4h4" stroke={TEXT.muted} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.5 5A5 5 0 1 1 2 8.5" stroke={TEXT.muted} strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              Replay
            </button>
          )}
        </div>
      </div>

      <div className="m2-cse-layout">
        {/* ─── Radar SVG ────────────────── */}
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} style={{
          width: 280, height: 280, flexShrink: 0,
        }}>
          {/* Radar rings */}
          {[0.33, 0.66, 1].map(f => (
            <circle key={f} cx={CX} cy={CY} r={R * f}
              fill="none" stroke={hexToRgba(MODEL_COLOR, 0.08)}
              strokeWidth="1" />
          ))}

          {/* Cross hairs */}
          <line x1={CX} y1={CY - R} x2={CX} y2={CY + R}
            stroke={hexToRgba(MODEL_COLOR, 0.06)} strokeWidth="1" />
          <line x1={CX - R} y1={CY} x2={CX + R} y2={CY}
            stroke={hexToRgba(MODEL_COLOR, 0.06)} strokeWidth="1" />

          {/* Sweep trail gradient */}
          {hasStarted && (
            <>
              <defs>
                <radialGradient id="m2-sweep-grad">
                  <stop offset="0%" stopColor={MODEL_COLOR} stopOpacity="0" />
                  <stop offset="100%" stopColor={MODEL_COLOR} stopOpacity="0.12" />
                </radialGradient>
              </defs>
              <path
                d={`M${CX},${CY} L${CX + R * Math.cos((trailStart - 90) * Math.PI / 180)},${CY + R * Math.sin((trailStart - 90) * Math.PI / 180)} A${R},${R} 0 0,1 ${sweepX},${sweepY} Z`}
                fill="url(#m2-sweep-grad)"
              />
            </>
          )}

          {/* Sweep arm */}
          {hasStarted && (
            <line x1={CX} y1={CY} x2={sweepX} y2={sweepY}
              stroke={MODEL_COLOR} strokeWidth="1.5" strokeOpacity="0.6" />
          )}

          {/* Blips */}
          {BLIPS.map((blip, i) => {
            const pos = blipPos(blip.angle, blip.dist);
            const revealed = revealedBlips.has(i);
            const isThreaty = blip.type === 'threat' || blip.type === 'ambiguous';
            const blipColor = blip.type === 'ambiguous' ? WARNING_COLOR
              : isThreaty ? THREAT_COLOR : SAFETY_COLOR;

            return (
              <g key={i} style={{
                opacity: revealed ? 1 : 0.08,
                transition: 'opacity 0.3s ease',
              }}>
                {/* Outer glow when revealed */}
                {revealed && (
                  <circle cx={pos.x} cy={pos.y} r="8"
                    fill={hexToRgba(blipColor, 0.12)} />
                )}
                {/* Blip dot */}
                <circle cx={pos.x} cy={pos.y}
                  r={revealed ? 4 : 2.5}
                  fill={revealed ? blipColor : hexToRgba(MODEL_COLOR, 0.2)}
                  style={{ transition: 'all 0.3s ease' }}
                />
                {/* Label */}
                {revealed && (
                  <text
                    x={pos.x}
                    y={pos.y + 14}
                    textAnchor="middle"
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 6.5,
                      fill: blipColor,
                      letterSpacing: '0.04em',
                      opacity: 0.8,
                    }}
                  >
                    {blip.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Detection pulses */}
          {pulses.map(pulse => (
            <circle key={pulse.id} cx={pulse.cx} cy={pulse.cy}
              fill="none" stroke={pulse.color} strokeWidth="1"
              style={{ animation: 'm2Pulse 1.2s ease-out forwards' }}
            />
          ))}

          {/* Center dot */}
          <circle cx={CX} cy={CY} r="4" fill={MODEL_COLOR} fillOpacity="0.3" />
          <circle cx={CX} cy={CY} r="2" fill={MODEL_COLOR} />
        </svg>

        {/* ─── Info cards ───────────────── */}
        <div className="m2-cse-cards">
          {CARDS.map((card, i) => {
            const reached = currentPhase >= card.phase;
            return (
              <div key={card.label}
                className={`m2-cse-card${reached ? ' visible' : ''}`}
                style={{
                  background: gradientCardBg(card.color, reached ? 0.06 : 0.02),
                  padding: '14px 14px 16px',
                  borderRadius: RADIUS.lg,
                  border: `1px solid ${reached ? hexToRgba(card.color, 0.25) : BORDER.default}`,
                  borderLeft: `3px solid ${reached ? card.color : BORDER.default}`,
                  transition: 'border-color 0.4s ease, background 0.4s ease',
                }}
              >
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  marginBottom: 6,
                }}>
                  <span style={{
                    fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: reached ? card.color : TEXT.hint,
                    transition: 'color 0.3s ease',
                  }}>
                    {card.label}
                  </span>
                </div>
                <p style={{
                  fontSize: 13, lineHeight: 1.65,
                  color: reached ? TEXT.secondary : TEXT.hint,
                  transition: 'color 0.4s ease',
                  margin: 0, marginBottom: 6,
                }}>
                  {card.body}
                </p>
                <span style={{
                  fontFamily: FONT.mono, fontSize: 7.5,
                  color: TEXT.hint, letterSpacing: '0.04em',
                }}>
                  {card.ref}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
