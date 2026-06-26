// src/lib/og-template.js
// teg-blue.org home / gradient OpenGraph card (1200×630), ported from the OG
// Studio (teg-blue-site-org-opengraph/lib/og-template.tsx). Pure JSX for
// next/og — edge-safe. Fonts are supplied by the caller (see og-fonts.js).
//
// This is the gradient HERO card: header band + centered title + the seven
// nervous-system states (X / A / A↔B / B / C / D / Z). It is the home card;
// it is intentionally NOT used as a generic sub-page template (the state strip
// is the gradient's signature and doesn't describe non-gradient pages).

export const OG_SIZE = { width: 1200, height: 630 }

const SURFACE = '#111729'
const HEADER = '#151c35'
const TEXT = '#f1f5f9'
const MUTED = '#cbd5e1'
const HINT = '#94a3b8'
const FAINT = '#64748b'

const TOP_SPECTRUM =
  'linear-gradient(90deg, #b6ebfc 0%, #76e2ff 22%, #00b1ff 45%, #0590e5 68%, #7b7bff 100%)'

const STATES = [
  { code: 'X', label: 'Safe & at rest', color: '#cce0ff' },
  { code: 'A', label: 'Safe with others', color: '#6eeafb' },
  { code: 'A↔B', label: 'Is it still safe?', color: '#76faa1' },
  { code: 'B', label: 'Threat', color: '#b6fc50' },
  { code: 'C', label: 'Bigger threat', color: '#e3fd54' },
  { code: 'D', label: 'Life threat', color: '#f7d448' },
  { code: 'Z', label: 'Shutdown', color: '#a1adbf' },
]

function tint(hex, alpha) {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function clampedNeedle(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) return 0.125
  return Math.min(0.95, Math.max(0.05, value))
}

function activeStateIndex(needle) {
  return Math.min(STATES.length - 1, Math.max(0, Math.round(needle * (STATES.length - 1))))
}

export function OgImage(params = {}) {
  const title = params.title || 'The Nervous System Gradient'
  const badge = params.badge || 'The Emotional Gradient Blueprint'
  const subtitle =
    params.subtitle ||
    'We do not stay the same in every situation — open and trusting one moment, guarded or controlling the next. The body keeps reading one question: is it safe, or is there danger?'
  const url = params.url || 'teg-blue.org'
  const footer = params.footer || 'Nervous System Gradient'
  const needle = clampedNeedle(params.needle)
  const active = activeStateIndex(needle)
  const gridSvg = `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><path d="M80 0 L0 0 0 80" fill="none" stroke="rgba(148,163,184,0.055)" stroke-width="1"/></svg>`,
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
          height: 68,
          background: HEADER,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 70px',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', fontSize: 16, fontWeight: 800, color: TEXT }}>TEG-Blue.org</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, color: MUTED, fontSize: 14 }}>
          <div style={{ display: 'flex' }}>Tools ↗</div>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: '1px solid rgba(148,163,184,0.16)',
              color: HINT,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              fontSize: 18,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                border: '1.5px solid #94a3b8',
                display: 'flex',
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ height: 4, background: TOP_SPECTRUM, display: 'flex' }} />

      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          padding: '82px 70px 0',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            color: HINT,
            fontFamily: 'JetBrains Mono',
            fontSize: 12,
            fontWeight: 500,
            textTransform: 'uppercase',
            marginBottom: 18,
            letterSpacing: 0,
          }}
        >
          {badge}
        </div>

        <div
          style={{
            display: 'flex',
            maxWidth: 850,
            textAlign: 'center',
            justifyContent: 'center',
            color: TEXT,
            fontSize: title.length > 48 ? 42 : 48,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: 0,
            marginBottom: 22,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: 'flex',
            maxWidth: 760,
            textAlign: 'center',
            justifyContent: 'center',
            color: MUTED,
            fontSize: subtitle.length > 120 ? 19 : 21,
            lineHeight: 1.48,
          }}
        >
          {subtitle}
        </div>

        <div
          style={{
            display: 'flex',
            gap: 9,
            marginTop: 38,
            padding: 2,
            width: 894,
          }}
        >
          {STATES.map((state, index) => (
            <div
              key={state.code}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 120,
                height: 76,
                padding: '11px 11px 10px',
                borderTop: `2px solid ${state.color}`,
                borderRight: '1px solid rgba(148,163,184,0.12)',
                borderBottom: '1px solid rgba(148,163,184,0.12)',
                borderLeft: '1px solid rgba(148,163,184,0.12)',
                borderRadius: 8,
                background: `linear-gradient(180deg, ${tint(state.color, index === active ? 0.19 : 0.12)} 0%, rgba(0,0,0,0) 100%)`,
                boxShadow: index === active ? `0 0 0 1px ${tint(state.color, 0.35)}` : 'none',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  color: state.color,
                  fontFamily: 'JetBrains Mono',
                  fontSize: 13,
                  fontWeight: 500,
                  lineHeight: 1.35,
                  letterSpacing: 0,
                }}
              >
                {state.code}
              </div>
              <div
                style={{
                  display: 'flex',
                  color: MUTED,
                  fontSize: 12,
                  lineHeight: 1.18,
                  marginTop: 5,
                }}
              >
                {state.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 28,
            left: 70,
            right: 70,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: FAINT,
            fontFamily: 'JetBrains Mono',
            fontSize: 13,
          }}
        >
          <div style={{ display: 'flex' }}>{url}</div>
          <div style={{ display: 'flex', color: HINT }}>{footer}</div>
        </div>
      </div>
    </div>
  )
}
