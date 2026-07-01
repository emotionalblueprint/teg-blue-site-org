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
    label: 'Is it still safe?',
    acute: 'Relational uncertainty',
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
    acute: 'Control / Management for sustained threat',
    chronic: 'Control as the only way to feel safe.',
  },
  {
    id: 'domination',
    label: 'Life threat',
    acute: 'Power mobilized for survival',
    chronic: 'Power becomes the default route to safety.',
  },
  {
    id: 'shutdown',
    label: 'Collapse Shutdown',
    acute: 'Conservation when mobilizing is too much',
    chronic: 'Any pattern can drop into shutdown when capacity can no longer hold.',
  },
]

const byId = Object.fromEntries(positions.map((position) => [position.id, position]))

function colorFor(item, chronic) {
  const position = byId[item.id]
  return chronic ? position.chronicColor : position.acuteColor
}

function inkFor(item, chronic) {
  if (item.id === 'shutdown' && chronic) return BLUE[50]
  return byId[item.id]?.ink || BLUE[900]
}

export default function PatternRecognitionPrimer() {
  const [chronic, setChronic] = useState(false)
  const modeLabel = chronic ? 'Chronic pattern' : 'Acute state'
  const switchTone = chronic ? byId.protection.chronicColor : BLUE[100]

  return (
    <section
      aria-labelledby="pattern-primer-heading"
      style={{
        background: BG.diagram,
        border: `1px solid ${BORDER.default}`,
        borderRadius: RADIUS.lg,
        overflow: 'hidden',
        boxShadow: `0 18px 50px ${hexToRgba(BLUE[800], 0.06)}`,
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
            fontSize: 'clamp(14px, 1.6vw, 17px)',
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
          aria-label="Chronic view"
          onClick={() => setChronic((value) => !value)}
          style={{
            display: 'inline-flex',
            minHeight: 40,
            alignItems: 'center',
            gap: 12,
            border: `1px solid ${hexToRgba(switchTone, chronic ? 0.42 : 0.22)}`,
            borderRadius: 999,
            background: hexToRgba(chronic ? byId.protection.chronicColor : BLUE[800], chronic ? 0.12 : 0.34),
            color: chronic ? byId.protection.chronicColor : TEXT.secondary,
            cursor: 'pointer',
            fontFamily: FONT.display,
            fontSize: 14,
            padding: '7px 12px 7px 18px',
          }}
        >
          <span style={{ fontWeight: chronic ? 680 : 500 }}>Chronic view</span>
          <span
            aria-hidden="true"
            style={{
              position: 'relative',
              width: 38,
              height: 22,
              borderRadius: 999,
              background: chronic ? byId.protection.chronicColor : hexToRgba(BLUE[100], 0.35),
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
        aria-label={`${modeLabel} reality read`}
        style={{
          display: 'grid',
          gap: 8,
          padding: '0 clamp(18px, 3vw, 28px) clamp(20px, 3vw, 28px)',
        }}
      >
        {ROWS.map((item) => {
          const tone = colorFor(item, chronic)
          const ink = inkFor(item, chronic)
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
                gap: '10px 18px',
                minHeight: 58,
                padding: '12px clamp(14px, 2.3vw, 22px)',
                border: `${isShutdown ? '1px dashed' : '1px solid'} ${hexToRgba(isShutdown && chronic ? BLUE[100] : BLUE[950], isShutdown && chronic ? 0.28 : 0.16)}`,
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
                  fontSize: 'clamp(13px, 1.5vw, 17px)',
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
                  fontSize: 'clamp(13px, 1.45vw, 16px)',
                  fontWeight: 520,
                  letterSpacing: 0,
                  lineHeight: 1.35,
                }}
              >
                {phrase}
              </span>
              <span
                style={{
                  justifySelf: 'end',
                  fontFamily: FONT.mono,
                  fontSize: 12,
                  fontWeight: 850,
                  letterSpacing: 0,
                  lineHeight: 1,
                  opacity: isShutdown && chronic ? 0.82 : 0.7,
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
            gap: 7px 10px !important;
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
