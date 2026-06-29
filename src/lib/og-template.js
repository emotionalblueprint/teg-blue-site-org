// src/lib/og-template.js
// teg-blue.org home Open Graph card (1200x630), built as a compact share-image
// version of the current home hero: title left, nervous-system gradient rows
// right. Generic sub-page cards continue to use src/lib/og-render.js.

import { REALITY_CHECK_STATES } from '../styles/tokens'

export const OG_SIZE = { width: 1200, height: 630 }

const SURFACE = '#101729'
const HEADER = '#151c35'
const TEXT = '#f1f5f9'
const MUTED = '#cbd5e1'
const HINT = '#94a3b8'
const FAINT = '#64748b'
const CARD_BORDER = 'rgba(148,163,184,0.16)'
const BLUE_INK = '#08285c'

const TOP_SPECTRUM =
  'linear-gradient(90deg, #b6ebfc 0%, #76e2ff 22%, #00b1ff 45%, #0590e5 68%, #7b7bff 100%)'

const STATES = REALITY_CHECK_STATES.map(({ code, label, color, activeGradient }) => ({
  code,
  label,
  color,
  activeGradient,
}))

function GradientTitle() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.96 }}>
      <div style={{ display: 'flex', color: TEXT, fontSize: 66, fontWeight: 800, letterSpacing: 0 }}>
        A Visual Map of
      </div>
      <div style={{ display: 'flex', color: '#6eeafb', fontSize: 78, fontWeight: 800, letterSpacing: 0 }}>
        Nervous-
      </div>
      <div style={{ display: 'flex', color: '#7cfaa1', fontSize: 78, fontWeight: 800, letterSpacing: 0 }}>
        System
      </div>
      <div style={{ display: 'flex', color: '#b6fc50', fontSize: 78, fontWeight: 800, letterSpacing: 0 }}>
        Patterns
      </div>
    </div>
  )
}

function GradientRows() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 490,
        padding: 20,
        border: `1px solid ${CARD_BORDER}`,
        borderRadius: 10,
        background: 'rgba(17,23,41,0.86)',
      }}
    >
      <div
        style={{
          display: 'flex',
          color: TEXT,
          fontFamily: 'JetBrains Mono',
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 16,
          letterSpacing: 0,
        }}
      >
        The Safety → threat Gradient
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {STATES.map((state) => (
          <div
            key={state.code}
            style={{
              minHeight: 42,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              padding: '8px 13px',
              borderRadius: state.activeGradient ? 7 : 8,
              background: state.color,
              color: BLUE_INK,
              border: state.activeGradient
                ? '1px solid rgba(8,40,92,0.14)'
                : '1px dashed rgba(241,245,249,0.42)',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontFamily: 'JetBrains Mono',
                fontSize: 17,
                fontWeight: 500,
                lineHeight: 1.12,
                letterSpacing: 0,
              }}
            >
              {state.label}
            </div>
            <div
              style={{
                display: 'flex',
                fontFamily: 'JetBrains Mono',
                fontSize: 13,
                fontWeight: 500,
                lineHeight: 1,
                opacity: 0.68,
              }}
            >
              {state.code}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 13,
          color: HINT,
          fontFamily: 'JetBrains Mono',
          fontSize: 12,
          letterSpacing: 0,
        }}
      >
        <div style={{ display: 'flex' }}>Safe & at rest</div>
        <div style={{ display: 'flex' }}>Life threat · overwhelm shutdown</div>
      </div>
    </div>
  )
}

export function OgImage(params = {}) {
  const badge = params.badge || 'TEG-Blue · The Emotional Gradient Blueprint'
  const subtitle =
    params.subtitle ||
    'Look closely and the patterns are already visible: open and trusting one moment, guarded, managing, controlling, or shut down the next.'
  const url = params.url || 'teg-blue.org'
  const gridSvg = `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><path d="M80 0 L0 0 0 80" fill="none" stroke="rgba(148,163,184,0.07)" stroke-width="1"/></svg>`,
  )}`

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: SURFACE,
        color: TEXT,
        fontFamily: 'Inter',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${gridSvg}")`,
          backgroundSize: '80px 80px',
          display: 'flex',
        }}
      />

      <div
        style={{
          height: 70,
          background: HEADER,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 70px',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 7,
              border: '1px solid rgba(148,163,184,0.24)',
              alignItems: 'center',
              justifyContent: 'center',
              color: HINT,
              fontFamily: 'JetBrains Mono',
              fontSize: 10,
              fontWeight: 500,
              display: 'flex',
            }}
          >
            TB
          </div>
          <div style={{ display: 'flex', fontSize: 16, fontWeight: 800, color: TEXT }}>TEG-Blue.org</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, color: TEXT, fontFamily: 'JetBrains Mono', fontSize: 12, fontWeight: 500 }}>
          <div style={{ display: 'flex' }}>Explore</div>
          <div style={{ display: 'flex' }}>Tools ↗</div>
        </div>
      </div>
      <div style={{ height: 4, background: TOP_SPECTRUM, display: 'flex' }} />

      <div
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 42,
          padding: '42px 70px 34px',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: 552 }}>
          <div
            style={{
              display: 'flex',
              color: '#128dff',
              fontFamily: 'JetBrains Mono',
              fontSize: 12,
              fontWeight: 500,
              textTransform: 'uppercase',
              marginBottom: 22,
              letterSpacing: 0,
            }}
          >
            {badge}
          </div>

          <GradientTitle />

          <div
            style={{
              display: 'flex',
              color: MUTED,
              fontSize: 22,
              lineHeight: 1.52,
              marginTop: 28,
              maxWidth: 520,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16 }}>
          <GradientRows />
          <div
            style={{
              display: 'flex',
              color: FAINT,
              fontFamily: 'JetBrains Mono',
              fontSize: 12,
              letterSpacing: 0,
            }}
          >
            {url}
          </div>
        </div>
      </div>
    </div>
  )
}
