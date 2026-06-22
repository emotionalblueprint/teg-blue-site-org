'use client';

import { useState } from 'react';
import {
  TEXT, FONT, SPECTRUM, RADIUS,
  hexToRgba, diagramContainer,
} from '../styles/tokens';

// ─── Constants ──────────────────────────────────────
const EVAL_COLOR  = SPECTRUM.slate;    // #808493 — neutral evaluation
const SAFETY_COLOR = SPECTRUM.azure;   // #76e2ff — safety path
const THREAT_COLOR = SPECTRUM.cobalt;  // #0590e5 — threat path

// ─── Component ──────────────────────────────────────

export default function M2SafetyEvaluation() {
  const [active, setActive] = useState(null); // null | 'safety' | 'threat'

  // Path-dependent styling helpers
  const isSafety = active === 'safety';
  const isThreat = active === 'threat';

  return (
    <section style={{ marginBottom: 32, ...diagramContainer() }}>
      <style>{`
        .m2-cse-flow {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          position: relative;
        }

        /* ─── Node base ─── */
        .m2-cse-node {
          position: relative;
          z-index: 1;
          text-align: center;
          transition: opacity 0.4s ease, transform 0.3s ease;
        }
        .m2-cse-node.faded {
          opacity: 0.25;
        }

        /* ─── Arrow connector ─── */
        .m2-cse-arrow {
          width: 1px;
          height: 28px;
          position: relative;
          z-index: 0;
          transition: background 0.4s ease, opacity 0.4s ease;
        }
        .m2-cse-arrow::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          transition: border-top-color 0.4s ease;
        }
        .m2-cse-arrow.faded {
          opacity: 0.15;
        }

        /* ─── Branch container ─── */
        .m2-cse-branches {
          display: flex;
          gap: 24px;
          width: 100%;
          max-width: 520px;
          justify-content: center;
        }
        @media (max-width: 500px) {
          .m2-cse-branches {
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
        }

        /* ─── Branch column ─── */
        .m2-cse-branch {
          flex: 1;
          max-width: 240px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          transition: opacity 0.4s ease;
        }
        .m2-cse-branch.faded {
          opacity: 0.2;
        }

        /* ─── Fork SVG ─── */
        .m2-cse-fork-svg {
          width: 100%;
          max-width: 520px;
          height: 40px;
          overflow: visible;
        }
      `}</style>

      {/* ─── Header ─── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        marginBottom: 20, flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: EVAL_COLOR,
          letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
        }}>
          Neuroception
        </span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, color: TEXT.hint,
          letterSpacing: '0.06em',
        }}>
          The Safety-Threat Evaluation
        </span>
      </div>

      <div className="m2-cse-flow">

        {/* ── STAGE 1: Environmental Cues ── */}
        <div className="m2-cse-node" style={{
          padding: '10px 24px',
          borderRadius: RADIUS.md,
          border: `1px solid ${hexToRgba(EVAL_COLOR, 0.25)}`,
          background: hexToRgba(EVAL_COLOR, 0.06),
        }}>
          <div style={{
            fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: EVAL_COLOR, marginBottom: 3,
          }}>
            Environmental Cues
          </div>
          <div style={{
            fontSize: 12, color: TEXT.muted, lineHeight: 1.5,
          }}>
            Face, voice, posture, context
          </div>
        </div>

        {/* Arrow down */}
        <div className="m2-cse-arrow" style={{
          background: hexToRgba(EVAL_COLOR, 0.3),
        }}>
          <div style={{
            position: 'absolute', bottom: -3, left: '50%', transform: 'translateX(-50%)',
            width: 0, height: 0,
            borderLeft: '4px solid transparent',
            borderRight: '4px solid transparent',
            borderTop: `5px solid ${hexToRgba(EVAL_COLOR, 0.3)}`,
          }} />
        </div>

        {/* ── STAGE 2: The Evaluation ── */}
        <div className="m2-cse-node" style={{
          padding: '14px 28px 16px',
          borderRadius: RADIUS.lg,
          border: `1.5px solid ${hexToRgba(EVAL_COLOR, 0.35)}`,
          background: hexToRgba(EVAL_COLOR, 0.08),
          maxWidth: 340,
        }}>
          <div style={{
            fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: EVAL_COLOR, marginBottom: 5,
          }}>
            Neuroception
          </div>
          <div style={{
            fontSize: 13, color: TEXT.secondary, lineHeight: 1.6,
            fontStyle: 'italic',
          }}>
            Is there sufficient safety to engage, or is protection required?
          </div>
          <div style={{
            fontFamily: FONT.mono, fontSize: 7, color: TEXT.hint,
            letterSpacing: '0.06em', marginTop: 6, marginBottom: 10,
          }}>
            Below conscious awareness · Continuous · Automatic
          </div>

          {/* ── Small detection buttons ── */}
          <div style={{
            display: 'flex', gap: 8, justifyContent: 'center',
          }}>
            <button
              onClick={() => setActive(isSafety ? null : 'safety')}
              style={{
                padding: '4px 14px',
                borderRadius: 20,
                border: `1px solid ${hexToRgba(SAFETY_COLOR, isSafety ? 0.6 : 0.25)}`,
                background: isSafety ? hexToRgba(SAFETY_COLOR, 0.15) : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: FONT.mono,
                fontSize: 7.5,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: isSafety ? SAFETY_COLOR : hexToRgba(SAFETY_COLOR, 0.6),
              }}
            >
              Detect safety
            </button>
            <button
              onClick={() => setActive(isThreat ? null : 'threat')}
              style={{
                padding: '4px 14px',
                borderRadius: 20,
                border: `1px solid ${hexToRgba(THREAT_COLOR, isThreat ? 0.6 : 0.25)}`,
                background: isThreat ? hexToRgba(THREAT_COLOR, 0.15) : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: FONT.mono,
                fontSize: 7.5,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: isThreat ? THREAT_COLOR : hexToRgba(THREAT_COLOR, 0.6),
              }}
            >
              Detect threat
            </button>
          </div>
        </div>

        {/* ── Fork: the branching point ── */}
        <svg className="m2-cse-fork-svg" viewBox="0 0 520 40" preserveAspectRatio="xMidYMid meet">
          {/* Center stem down */}
          <line x1="260" y1="0" x2="260" y2="14"
            stroke={hexToRgba(EVAL_COLOR, 0.3)} strokeWidth="1" />
          {/* Horizontal bar */}
          <line x1="130" y1="14" x2="390" y2="14"
            stroke={hexToRgba(EVAL_COLOR, 0.3)} strokeWidth="1" />
          {/* Left branch down (safety) */}
          <line x1="130" y1="14" x2="130" y2="36"
            stroke={isSafety ? hexToRgba(SAFETY_COLOR, 0.6) : hexToRgba(EVAL_COLOR, 0.3)}
            strokeWidth="1"
            style={{ transition: 'stroke 0.4s ease' }} />
          <polygon
            points="126,34 134,34 130,40"
            fill={isSafety ? hexToRgba(SAFETY_COLOR, 0.6) : hexToRgba(EVAL_COLOR, 0.3)}
            style={{ transition: 'fill 0.4s ease' }} />
          {/* Right branch down (threat) */}
          <line x1="390" y1="14" x2="390" y2="36"
            stroke={isThreat ? hexToRgba(THREAT_COLOR, 0.6) : hexToRgba(EVAL_COLOR, 0.3)}
            strokeWidth="1"
            style={{ transition: 'stroke 0.4s ease' }} />
          <polygon
            points="386,34 394,34 390,40"
            fill={isThreat ? hexToRgba(THREAT_COLOR, 0.6) : hexToRgba(EVAL_COLOR, 0.3)}
            style={{ transition: 'fill 0.4s ease' }} />
        </svg>

        {/* ── STAGE 3 + 4: Two branches ── */}
        <div className="m2-cse-branches">

          {/* ─── SAFETY PATH ─── */}
          <div className={`m2-cse-branch ${isThreat ? 'faded' : ''}`}>
            {/* Signal Generation */}
            <div className="m2-cse-node" style={{
              padding: '10px 20px',
              borderRadius: RADIUS.md,
              border: `1px solid ${hexToRgba(SAFETY_COLOR, isSafety ? 0.4 : 0.2)}`,
              background: hexToRgba(SAFETY_COLOR, isSafety ? 0.1 : 0.04),
              width: '100%',
              transition: 'all 0.4s ease',
            }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: SAFETY_COLOR, marginBottom: 3,
              }}>
                Safety Signal
              </div>
              <div style={{
                fontSize: 12, color: TEXT.muted, lineHeight: 1.5,
              }}>
                Evaluation reads safety
              </div>
            </div>

            {/* Arrow */}
            <div style={{
              width: 1, height: 20,
              background: hexToRgba(SAFETY_COLOR, isSafety ? 0.4 : 0.15),
              transition: 'background 0.4s ease',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', bottom: -3, left: '50%', transform: 'translateX(-50%)',
                width: 0, height: 0,
                borderLeft: '3px solid transparent',
                borderRight: '3px solid transparent',
                borderTop: `4px solid ${hexToRgba(SAFETY_COLOR, isSafety ? 0.4 : 0.15)}`,
                transition: 'border-top-color 0.4s ease',
              }} />
            </div>

            {/* NS State Outcome */}
            <div className="m2-cse-node" style={{
              padding: '12px 16px',
              borderRadius: RADIUS.lg,
              border: `1.5px solid ${hexToRgba(SAFETY_COLOR, isSafety ? 0.45 : 0.18)}`,
              background: hexToRgba(SAFETY_COLOR, isSafety ? 0.12 : 0.04),
              width: '100%',
              transition: 'all 0.4s ease',
            }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: SAFETY_COLOR, marginBottom: 4,
              }}>
                Connection
              </div>
              <div style={{
                fontSize: 12, color: isSafety ? TEXT.secondary : TEXT.muted,
                lineHeight: 1.55,
                transition: 'color 0.4s ease',
              }}>
                Perception broadens, social engagement activates, body settles
              </div>
              <div style={{
                fontFamily: FONT.mono, fontSize: 7, color: TEXT.hint,
                letterSpacing: '0.06em', marginTop: 5,
              }}>
                Ventral vagal · Engage
              </div>
            </div>
          </div>

          {/* ─── THREAT PATH ─── */}
          <div className={`m2-cse-branch ${isSafety ? 'faded' : ''}`}>
            {/* Signal Generation */}
            <div className="m2-cse-node" style={{
              padding: '10px 20px',
              borderRadius: RADIUS.md,
              border: `1px solid ${hexToRgba(THREAT_COLOR, isThreat ? 0.4 : 0.2)}`,
              background: hexToRgba(THREAT_COLOR, isThreat ? 0.1 : 0.04),
              width: '100%',
              transition: 'all 0.4s ease',
            }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: THREAT_COLOR, marginBottom: 3,
              }}>
                Threat Signal
              </div>
              <div style={{
                fontSize: 12, color: TEXT.muted, lineHeight: 1.5,
              }}>
                Evaluation reads threat
              </div>
            </div>

            {/* Arrow */}
            <div style={{
              width: 1, height: 20,
              background: hexToRgba(THREAT_COLOR, isThreat ? 0.4 : 0.15),
              transition: 'background 0.4s ease',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', bottom: -3, left: '50%', transform: 'translateX(-50%)',
                width: 0, height: 0,
                borderLeft: '3px solid transparent',
                borderRight: '3px solid transparent',
                borderTop: `4px solid ${hexToRgba(THREAT_COLOR, isThreat ? 0.4 : 0.15)}`,
                transition: 'border-top-color 0.4s ease',
              }} />
            </div>

            {/* NS State Outcome */}
            <div className="m2-cse-node" style={{
              padding: '12px 16px',
              borderRadius: RADIUS.lg,
              border: `1.5px solid ${hexToRgba(THREAT_COLOR, isThreat ? 0.45 : 0.18)}`,
              background: hexToRgba(THREAT_COLOR, isThreat ? 0.12 : 0.04),
              width: '100%',
              transition: 'all 0.4s ease',
            }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: THREAT_COLOR, marginBottom: 4,
              }}>
                Protection
              </div>
              <div style={{
                fontSize: 12, color: isThreat ? TEXT.secondary : TEXT.muted,
                lineHeight: 1.55,
                transition: 'color 0.4s ease',
              }}>
                Attention narrows, muscles tense, cognition simplifies, system mobilises
              </div>
              <div style={{
                fontFamily: FONT.mono, fontSize: 7, color: TEXT.hint,
                letterSpacing: '0.06em', marginTop: 5,
              }}>
                Sympathetic · Protect
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom note ── */}
        <div style={{
          marginTop: 20,
          padding: '10px 16px',
          borderRadius: RADIUS.md,
          border: `1px solid ${hexToRgba(EVAL_COLOR, 0.15)}`,
          background: hexToRgba(EVAL_COLOR, 0.04),
          maxWidth: 420,
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: 12, lineHeight: 1.6,
            color: TEXT.muted, margin: 0,
          }}>
            The system is biased toward protection under uncertainty. False negatives (missing a threat) are more costly than false positives (unnecessary defense).
          </p>
          <span style={{
            fontFamily: FONT.mono, fontSize: 7,
            color: TEXT.hint, letterSpacing: '0.06em',
          }}>
            Porges, 2011 · LeDoux, 1996
          </span>
        </div>

      </div>
    </section>
  );
}
