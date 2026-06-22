'use client';

import { useState } from 'react';
import {
  TEXT, BORDER, FONT, SPECTRUM, RADIUS, PATTERN, ACCENT,
  hexToRgba, gradientCardBg, diagramContainer,
} from '@/src/styles/tokens';

// ─── Constants ──────────────────────────────────────────
const MODEL_COLOR = PATTERN.C.primary;

const RESTORATIONS = [
  {
    mode: 'Connection',
    color: PATTERN.A.primary,
    type: 'Tending',
    subtitle: 'Preventive, not corrective',
    mechanism: 'Sensory engagement, creative or absorptive activity, walking, making, resting, gentle co-presence. Low demand on the system.',
    duration: 'Continuous',
    cannotReplace: 'Productivity, stimulation, and achievement are all activation states — substituting activity for tending creates a slow upward drift in baseline.',
    barWidth: 100,
  },
  {
    mode: 'Protection',
    color: PATTERN.B.primary,
    type: 'Completing the sequence',
    subtitle: 'Discharge, co-regulation, time',
    mechanism: 'Full exhale, physical movement that allows discharge — shaking, walking, swimming. Co-regulation with a safe other. Time without new demands arriving.',
    duration: '20 min – 2 hours',
    cannotReplace: 'Returning to demands too fast restarts the sequence before it completes. The discharge cannot be accelerated.',
    barWidth: 75,
  },
  {
    mode: 'Strategic Management',
    color: PATTERN.C.primary,
    type: 'Releasing the override',
    subtitle: 'Putting down the cognitive management',
    mechanism: 'Allowing the overridden emotions to surface. Not managing or steering what comes up. The emotional content that surfaces is not predictable.',
    duration: '2 – 8 hours (often overnight)',
    cannotReplace: 'Planning the restoration maintains the management state. The override does not release while cognition is still steering.',
    barWidth: 50,
  },
  {
    mode: 'Domination',
    color: PATTERN.D.primary,
    type: 'The full discharge arc',
    subtitle: 'Extended rest from maximum activation',
    mechanism: 'Extended rest, minimal demand, full somatic discharge over time, re-engagement with others at low intensity. Allows guilt, grief, relief, and physical exhaustion to move through in sequence.',
    duration: '24 – 72+ hours',
    cannotReplace: 'Returning to high engagement before full discharge restarts the sequence at an incomplete baseline. Resonance re-engagement arrives as readiness — a physiological state, not a decision.',
    barWidth: 25,
  },
];

// ─── Component ──────────────────────────────────────────

export default function M3RestorationByMode() {
  const [expandedIdx, setExpandedIdx] = useState(null);

  return (
    <section style={{
      marginBottom: 32,
      ...diagramContainer(),
    }}>
      <style>{`
        .m3-mode-card {
          padding: 14px 16px;
          border-radius: ${RADIUS.md}px;
          border: 1.5px solid ${BORDER.default};
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease;
          margin-bottom: 8px;
        }
        .m3-mode-card:hover {
          background: ${hexToRgba(MODEL_COLOR, 0.02)};
        }
        .m3-duration-bar {
          height: 4px;
          border-radius: 2px;
          margin-top: 8px;
          transition: width 0.4s ease;
        }
        .m3-mode-detail {
          animation: m3FadeIn 0.25s ease;
        }
        @keyframes m3FadeIn {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 300px; }
        }
      `}</style>

      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 10,
        marginBottom: 12,
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: TEXT.muted,
        }}>
          Four activation levels
        </span>
        <div style={{
          flex: 1, height: 1,
          background: `linear-gradient(90deg, ${hexToRgba(MODEL_COLOR, 0.2)}, transparent)`,
        }} />
        <span style={{
          fontFamily: FONT.mono, fontSize: 8, fontWeight: 600,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: TEXT.muted,
        }}>
          Four restoration requirements
        </span>
      </div>

      {/* Cards */}
      {RESTORATIONS.map((r, i) => {
        const isExpanded = expandedIdx === i;
        return (
          <div key={r.mode}
            className="m3-mode-card"
            onClick={() => setExpandedIdx(prev => prev === i ? null : i)}
            style={{
              borderColor: isExpanded ? hexToRgba(r.color, 0.4) : BORDER.default,
              borderLeft: `3px solid ${r.color}`,
              background: isExpanded ? gradientCardBg(r.color, 0.04) : 'transparent',
            }}
          >
            {/* Header row */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12,
              flexWrap: 'wrap',
            }}>
              <span style={{
                fontSize: 14, fontWeight: 600,
                color: TEXT.primary,
              }}>
                {r.type}
              </span>
              <span style={{
                fontFamily: FONT.mono, fontSize: 8,
                letterSpacing: '0.06em',
                color: r.color,
              }}>
                {r.mode}
              </span>
              <span style={{
                fontFamily: FONT.mono, fontSize: 8,
                letterSpacing: '0.06em',
                color: TEXT.hint,
                marginLeft: 'auto',
              }}>
                {r.duration}
              </span>
            </div>

            <p style={{
              fontSize: 12.5, lineHeight: 1.55,
              color: TEXT.muted, margin: '4px 0 0',
            }}>
              {r.subtitle}
            </p>

            {/* Duration bar — visual representation */}
            <div className="m3-duration-bar" style={{
              width: `${r.barWidth}%`,
              background: `linear-gradient(90deg, ${hexToRgba(r.color, 0.4)}, ${hexToRgba(r.color, 0.1)})`,
            }} />

            {/* Expanded detail */}
            {isExpanded && (
              <div className="m3-mode-detail" style={{ marginTop: 12 }}>
                <div style={{ marginBottom: 10 }}>
                  <span style={{
                    fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: MODEL_COLOR,
                  }}>
                    Mechanism
                  </span>
                  <p style={{
                    fontSize: 13, lineHeight: 1.6,
                    color: TEXT.secondary, margin: '4px 0 0',
                  }}>
                    {r.mechanism}
                  </p>
                </div>
                <div>
                  <span style={{
                    fontFamily: FONT.mono, fontSize: 7.5, fontWeight: 600,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: ACCENT.orange,
                  }}>
                    What cannot replace it
                  </span>
                  <p style={{
                    fontSize: 13, lineHeight: 1.6,
                    color: TEXT.muted, margin: '4px 0 0',
                    fontStyle: 'italic',
                  }}>
                    {r.cannotReplace}
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
