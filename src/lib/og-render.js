// src/lib/og-render.js
// Shared OG image renderer — polished design with Four-Mode Compass
//
// Usage in any opengraph-image.js:
//   import { renderOG } from '@/src/lib/og-render'
//   export default function Image() {
//     return renderOG({ badge: '...', title: '...', subtitle: '...', url: '...' })
//   }

import { ImageResponse } from 'next/og'
import { loadOgFonts } from './og-fonts'

// ─── Design tokens (hardcoded for edge runtime — no token imports) ───────────

const SPECTRUM = {
  sky:    '#E5F0FF',
  azure:  '#66A3FF',
  blue:   '#0066FF',
  cobalt: '#4A83F7',
  indigo: '#99C2FF',
}

const MODES = {
  connection:  '#6eeafb',
  protection:  '#b6fc50',
  control:     '#e3fd54',
  domination:  '#f7d448',
}

const PATTERN_GRADIENT =
  'linear-gradient(90deg, #6eeafb 0%, #76faa1 25%, #b6fc50 50%, #e3fd54 75%, #f7d448 100%)'

// ─── Font loading ────────────────────────────────────────────────────────────

// ─── Helpers ─────────────────────────────────────────────────────────────────

function needleColorForPos(pos) {
  if (pos < 0.25)  return MODES.connection
  if (pos < 0.5)   return MODES.protection
  if (pos < 0.75)  return MODES.control
  return MODES.domination
}

function resolveColor(name) {
  return SPECTRUM[name] || name || SPECTRUM.azure
}

// ─── Main render ─────────────────────────────────────────────────────────────

/**
 * @param {Object} config
 * @param {string} config.badge       - Badge text (e.g. "About", "Glossary")
 * @param {string} [config.badgeColor] - Spectrum key ('azure','sky','cobalt','indigo') or hex
 * @param {string} config.title       - Main title
 * @param {string} config.subtitle    - Subtitle text
 * @param {string} config.url         - Display URL (e.g. "teg-blue.org/about")
 * @param {number} [config.needle]    - Compass needle position 0–1 (default 0.125)
 */
export async function renderOG({ badge, badgeColor, title, subtitle, url, needle = 0.125 }) {
  const color = resolveColor(badgeColor)
  const needleLeft = `${needle * 100}%`
  const nc = needleColorForPos(needle)
  const fonts = await loadOgFonts()

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          background: '#0e1624',
          position: 'relative',
          fontFamily: 'Inter',
          overflow: 'hidden',
        }}
      >
        {/* Top gradient accent bar */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, height: 4,
          background: PATTERN_GRADIENT,
          display: 'flex',
        }} />

        {/* Background glows */}
        <div style={{
          position: 'absolute', top: -80, left: -100,
          width: 500, height: 500,
          background: 'radial-gradient(ellipse, rgba(0,102,255,0.08) 0%, transparent 65%)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: -100, right: -60,
          width: 420, height: 360,
          background: 'radial-gradient(ellipse, rgba(74,131,247,0.07) 0%, transparent 65%)',
          display: 'flex',
        }} />

        {/* Content area */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '52px 64px 44px 64px',
          flex: 1, position: 'relative',
        }}>

          {/* TOP: badge + title + subtitle */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Badge */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '6px 14px',
              border: `1px solid ${color}44`,
              borderRadius: 100,
              background: `${color}14`,
              marginBottom: 28,
            }}>
              <div style={{
                width: 6, height: 6, borderRadius: '50%',
                background: color,
                boxShadow: `0 0 8px ${color}`,
                display: 'flex',
              }} />
              <span style={{
                fontFamily: 'JetBrains Mono',
                fontSize: 12, fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: color,
              }}>
                {badge}
              </span>
            </div>

            {/* Title */}
            <div style={{
              fontSize: 52, fontWeight: 400,
              letterSpacing: 0, lineHeight: 1.12,
              color: SPECTRUM.sky, marginBottom: 16, maxWidth: 700,
              display: 'flex',
            }}>
              {title}
            </div>

            {/* Subtitle */}
            <div style={{
              fontSize: 18, fontWeight: 400,
              color: 'rgba(168,180,200,0.65)',
              lineHeight: 1.5, maxWidth: 620, letterSpacing: '0.01em',
              display: 'flex',
            }}>
              {subtitle}
            </div>
          </div>

          {/* BOTTOM: separator + url + brand */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
              height: 2, borderRadius: 1, marginBottom: 20, opacity: 0.5,
              background: PATTERN_GRADIENT,
              display: 'flex',
            }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                fontFamily: 'JetBrains Mono',
                fontSize: 13, letterSpacing: '0.06em',
                color: 'rgba(168,180,200,0.35)',
              }}>
                {url}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 28, height: 4, borderRadius: 2,
                  background: PATTERN_GRADIENT,
                  display: 'flex',
                }} />
                <span style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: 14, fontWeight: 500, letterSpacing: '0.06em',
                  color: SPECTRUM.azure,
                }}>
                  TEG-Blue Research
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Mini Four-Mode Compass */}
        <div style={{
          position: 'absolute',
          right: 64, top: '50%',
          transform: 'translateY(-56%)',
          width: 180, opacity: 0.6,
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{
            position: 'relative', height: 14, borderRadius: 100,
            background: PATTERN_GRADIENT,
            boxShadow: 'rgba(0,102,255,0.35) 0 0 24px',
            display: 'flex', alignItems: 'center',
          }}>
            {/* Dividers */}
            <div style={{
              position: 'absolute', left: '25%',
              top: -1, bottom: -1, width: 1.5,
              background: 'rgba(0,0,0,0.45)', borderRadius: 1,
              display: 'flex',
            }} />
            <div style={{
              position: 'absolute', left: '50%',
              top: -1, bottom: -1, width: 1.5,
              background: 'rgba(0,0,0,0.45)', borderRadius: 1,
              display: 'flex',
            }} />
            <div style={{
              position: 'absolute', left: '75%',
              top: -1, bottom: -1, width: 1.5,
              background: 'rgba(0,0,0,0.45)', borderRadius: 1,
              display: 'flex',
            }} />
            {/* Needle */}
            <div style={{
              position: 'absolute', left: needleLeft, top: '50%',
              width: 24, height: 24, borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(255,255,255,0.8))',
              border: `3px solid ${nc}`,
              boxShadow: `rgba(0,0,0,0.4) 0 2px 8px, ${nc}80 0 0 14px`,
              transform: 'translate(-50%, -50%)',
              display: 'flex',
            }} />
          </div>
          {/* Mode labels */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            <span style={{
              fontFamily: 'JetBrains Mono',
              fontSize: 8, fontWeight: 500, letterSpacing: '0.1em',
              color: MODES.connection, flex: 1, textAlign: 'center',
            }}>CNX</span>
            <span style={{
              fontFamily: 'JetBrains Mono',
              fontSize: 8, fontWeight: 500, letterSpacing: '0.1em',
              color: MODES.protection, flex: 1, textAlign: 'center',
            }}>PRO</span>
            <span style={{
              fontFamily: 'JetBrains Mono',
              fontSize: 8, fontWeight: 500, letterSpacing: '0.1em',
              color: MODES.control, flex: 1, textAlign: 'center',
            }}>CTR</span>
            <span style={{
              fontFamily: 'JetBrains Mono',
              fontSize: 8, fontWeight: 500, letterSpacing: '0.1em',
              color: MODES.domination, flex: 1, textAlign: 'center',
            }}>DOM</span>
          </div>
        </div>

      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts,
    }
  )
}
