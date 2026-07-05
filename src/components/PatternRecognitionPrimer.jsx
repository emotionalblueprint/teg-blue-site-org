'use client'

import { useState } from 'react'
import { BG, TEXT, BORDER, FONT, RADIUS, BLUE, hexToRgba } from '../styles/tokens'
import { positions } from '../lib/gradient-data'

const ROWS = [
  {
    id: 'baseline',
    label: 'Baseline: Safe & at rest',
    acute: 'Resting available, rest-and-digest',
    chronic: 'Rest that never fully arrives.',
  },
  {
    id: 'connection',
    label: 'Safe with others',
    acute: 'Social engagement and co-regulation are available.',
    chronic: 'Connection without settled safety.',
  },
  {
    id: 'calibration',
    label: 'Relational uncertainty',
    acute: 'The system checks whether safety still holds.',
    chronic: 'The safety question stuck open.',
  },
  {
    id: 'protection',
    label: 'Threat',
    acute: 'Defence for immediate threat; fight, flight, or fawn',
    chronic: 'Defence as the resting state.',
  },
  {
    id: 'strategic',
    label: 'Persistent threat',
    acute: 'Strategic management for persistent threat',
    chronic: 'Strategic management becomes the held response to persistent threat.',
  },
  {
    id: 'domination',
    label: 'Life threat',
    acute: 'Power Mobilisation for life threat',
    chronic: 'Power and force stay available as substitute protection.',
  },
  {
    id: 'shutdown',
    label: 'Capacity exceeded',
    acute: 'The system conserves energy when mobilisation can no longer hold.',
    chronic: 'Shutdown repeats when demand keeps exceeding capacity.',
  },
]

const byId = Object.fromEntries(positions.map((position) => [position.id, position]))

function colorFor(item, chronic) {
  const position = byId[item.id]
  if (item.id === 'shutdown') return position.acuteColor
  return chronic ? position.chronicColor : position.acuteColor
}

function inkFor(item) {
  return byId[item.id]?.ink || BLUE[900]
}

export default function PatternRecognitionPrimer({ embedded = false }) {
  const [chronic, setChronic] = useState(false)
  const modeLabel = chronic ? 'Chronic pattern' : 'Acute state'
  const chronicTone = byId.protection.chronicColor

  return (
    <section
      aria-labelledby="pattern-primer-heading"
      style={{
        background: embedded ? 'transparent' : BG.diagram,
        border: embedded ? 0 : `1px solid ${BORDER.default}`,
        borderRadius: embedded ? 0 : RADIUS.lg,
        overflow: embedded ? 'visible' : 'hidden',
        boxShadow: embedded ? 'none' : `0 18px 50px ${hexToRgba(BLUE[800], 0.06)}`,
      }}
    >
      <div
        className="pattern-primer-header"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) auto',
          alignItems: 'center',
          gap: 16,
          padding: 'clamp(16px, 2.4vw, 22px) clamp(18px, 3vw, 28px)',
        }}
      >
        <h2
          id="pattern-primer-heading"
          style={{
            margin: 0,
            color: TEXT.primary,
            fontFamily: FONT.mono,
            fontSize: 17,
            fontWeight: 820,
            letterSpacing: 0,
            lineHeight: 1.2,
          }}
        >
          The Safety → threat Gradient
        </h2>

        <button
          type="button"
          role="switch"
          aria-checked={chronic}
          aria-label="Chronic Survival View"
          onClick={() => setChronic((value) => !value)}
          style={{
            display: 'inline-flex',
            minHeight: 40,
            alignItems: 'center',
            gap: 10,
            border: `1px solid ${hexToRgba(chronicTone, chronic ? 0.64 : 0.42)}`,
            borderRadius: 999,
            background: hexToRgba(chronicTone, chronic ? 0.2 : 0.1),
            color: chronicTone,
            cursor: 'pointer',
            fontFamily: FONT.display,
            fontSize: 13,
            lineHeight: 1.2,
            padding: '7px 10px 7px 16px',
            boxShadow: chronic ? `0 0 0 3px ${hexToRgba(chronicTone, 0.1)}` : 'none',
          }}
        >
          <span style={{ fontWeight: chronic ? 720 : 650, whiteSpace: 'nowrap' }}>Chronic Survival View</span>
          <span
            aria-hidden="true"
            style={{
              position: 'relative',
              width: 38,
              height: 22,
              borderRadius: 999,
              background: chronic ? chronicTone : hexToRgba(chronicTone, 0.28),
              transition: 'background 180ms ease',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: 4,
                left: chronic ? 20 : 4,
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: BG.primary,
                boxShadow: `0 1px 3px ${hexToRgba(BLUE[950], 0.22)}`,
                transition: 'left 180ms ease',
              }}
            />
          </span>
        </button>
      </div>

      <div
        role="list"
        aria-label={`${modeLabel} actual conditions and nervous-system response`}
        style={{
          display: 'grid',
          gap: 6,
          padding: '0 clamp(16px, 2.6vw, 24px) clamp(16px, 2.6vw, 24px)',
        }}
      >
        <div
          className="pattern-primer-column-header"
          aria-hidden="true"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 0.32fr) auto minmax(0, 1fr) auto',
            alignItems: 'center',
            gap: '8px 14px',
            minHeight: 34,
            padding: '7px clamp(12px, 2vw, 18px)',
            border: `1px solid ${hexToRgba(BLUE[100], 0.18)}`,
            borderRadius: 8,
            background: BLUE[800],
            color: BLUE[50],
            boxShadow: `0 1px 0 ${hexToRgba(BLUE[950], 0.16)}`,
          }}
        >
          <span
            style={{
              minWidth: 0,
              fontFamily: FONT.mono,
              fontSize: 11,
              fontWeight: 820,
              letterSpacing: 0,
              lineHeight: 1.2,
              textTransform: 'uppercase',
            }}
          >
            Actual Conditions
          </span>
          <span aria-hidden="true" style={{ fontFamily: FONT.mono, fontWeight: 800, opacity: 0.58 }}>
            |
          </span>
          <span
            className="pattern-primer-response-heading"
            style={{
              gridColumn: '3 / 5',
              minWidth: 0,
              fontFamily: FONT.mono,
              fontSize: 11,
              fontWeight: 820,
              letterSpacing: 0,
              lineHeight: 1.2,
              textTransform: 'uppercase',
            }}
          >
            Nervous-System Response
          </span>
        </div>

        {ROWS.map((item) => {
          const tone = colorFor(item, chronic)
          const ink = inkFor(item)
          const position = byId[item.id]
          const phrase = chronic ? item.chronic : item.acute
          const isShutdown = item.id === 'shutdown'

          return (
            <article
              key={item.id}
              className="pattern-primer-row"
              role="listitem"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(240px, 0.32fr) auto minmax(0, 1fr) auto',
                alignItems: 'center',
                gap: '8px 14px',
                minHeight: 46,
                padding: '8px clamp(12px, 2vw, 18px)',
                border: `${isShutdown ? '1px dashed' : '1px solid'} ${hexToRgba(BLUE[950], 0.16)}`,
                borderRadius: 8,
                background: tone,
                color: ink,
                boxShadow: `0 1px 0 ${hexToRgba(BLUE[950], 0.08)}`,
              }}
            >
              <span
                className="pattern-primer-label"
                style={{
                  minWidth: 0,
                  fontFamily: FONT.mono,
                  fontSize: 15,
                  fontWeight: 850,
                  letterSpacing: 0,
                  lineHeight: 1.1,
                  textTransform: 'uppercase',
                }}
              >
                {item.label}
              </span>
              <span className="pattern-primer-dash" aria-hidden="true" style={{ fontFamily: FONT.mono, fontWeight: 800 }}>
                —
              </span>
              <span
                className="pattern-primer-phrase"
                style={{
                  minWidth: 0,
                  fontFamily: FONT.mono,
                  fontSize: 14.5,
                  fontWeight: 520,
                  letterSpacing: 0,
                  lineHeight: 1.28,
                }}
              >
                {phrase}
              </span>
              <span
                style={{
                  justifySelf: 'end',
                  fontFamily: FONT.mono,
                  fontSize: 11,
                  fontWeight: 850,
                  letterSpacing: 0,
                  lineHeight: 1,
                  opacity: 0.7,
                }}
              >
                {position.code}
              </span>
            </article>
          )
        })}
      </div>

      <style jsx>{`
        @media (max-width: 760px) {
          .pattern-primer-header {
            grid-template-columns: 1fr !important;
            align-items: start !important;
          }

          .pattern-primer-row {
            grid-template-columns: minmax(0, 1fr) auto !important;
            gap: 5px 8px !important;
            min-height: 0 !important;
            padding: 7px 10px !important;
          }

          .pattern-primer-column-header {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
            gap: 8px !important;
            min-height: 0 !important;
            padding: 7px 10px !important;
          }

          .pattern-primer-column-header > span[aria-hidden='true'] {
            display: none !important;
          }

          .pattern-primer-response-heading {
            grid-column: auto !important;
          }

          .pattern-primer-dash {
            display: none !important;
          }

          .pattern-primer-phrase {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </section>
  )
}
