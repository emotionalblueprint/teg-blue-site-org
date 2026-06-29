'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { positions, autonomic } from '../lib/gradient-data'
import { TEXT, BORDER, FONT, ACCENT, RADIUS, hexToRgba } from '../styles/tokens'

// Position hues are tuned bright for a dark surface; on a light surface we darken
// them (cap lightness) so the dot + left rule still read. Theme-aware → client.
function hexToHsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  const d = max - min
  let h = 0
  let s = 0
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1))
    if (max === r) h = ((g - b) / d) % 6
    else if (max === g) h = (b - r) / d + 2
    else h = (r - g) / d + 4
    h *= 60
    if (h < 0) h += 360
  }
  return { h, s, l }
}
function hslToHex(h, s, l) {
  const ch = (1 - Math.abs(2 * l - 1)) * s
  const x = ch * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - ch / 2
  let r = 0
  let g = 0
  let b = 0
  if (h < 60) [r, g] = [ch, x]
  else if (h < 120) [r, g] = [x, ch]
  else if (h < 180) [g, b] = [ch, x]
  else if (h < 240) [g, b] = [x, ch]
  else if (h < 300) [r, b] = [x, ch]
  else [r, b] = [ch, x]
  const to = (v) => Math.round((v + m) * 255).toString(16).padStart(2, '0')
  return `#${to(r)}${to(g)}${to(b)}`
}
const swatch = (hex) => {
  const c = hexToHsl(hex)
  return hslToHex(c.h, c.s, Math.min(c.l, 0.52))
}
const WARM = ACCENT.orange

export default function GradientMap({ sectionStyle, cardStyle, eyebrowStyle }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isLight = mounted && resolvedTheme === 'light'

  return (
    <section style={sectionStyle} aria-labelledby="positions-heading">
      <div style={cardStyle}>
        <p style={eyebrowStyle}>The map</p>
        <h2 id="positions-heading" style={{ margin: '0 0 8px', fontSize: 'clamp(22px, 3.4vw, 30px)', letterSpacing: 0, color: TEXT.primary }}>
          Gradient states and shutdown fallback
        </h2>
        <p style={{ margin: '0 0 20px', maxWidth: 720, fontSize: 15, lineHeight: 1.7, color: TEXT.secondary }}>
          The Gradient runs from physiological baseline through social engagement, protection, control, and domination.
          Shutdown is shown as a fallback outside the line: a conservation state that changes perception, cognition,
          awareness, empathy, action, and repair, but does not extend the gradient itself.
        </p>
        <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
          {positions.map((p) => {
            const isShutdownRow = p.id === 'shutdown'
            const c = isLight ? swatch(p.acuteColor) : p.acuteColor
            const meta = [p.familiar, autonomic[p.id]].filter(Boolean).join(' · ')
            return (
              <li
                key={p.id}
                style={{
                  borderRadius: RADIUS.lg,
                  padding: '14px 16px',
                  background: hexToRgba(c, isShutdownRow ? 0.12 : 0.05),
                  border: `1px solid ${BORDER.default}`,
                  borderStyle: isShutdownRow ? 'dashed' : 'solid',
                  borderLeftWidth: 3,
                  borderLeftColor: c,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 42,
                      borderRadius: RADIUS.md,
                      border: `1px solid ${hexToRgba(c, 0.38)}`,
                      background: hexToRgba(c, 0.1),
                      padding: '4px 7px',
                      fontFamily: FONT.diagram,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: 0,
                      color: c,
                    }}
                  >
                    {p.code}
                  </span>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', flexShrink: 0, background: c }} />
                  <span style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary }}>{p.mode}</span>
                  {isShutdownRow && (
                    <span
                      style={{
                        marginLeft: 'auto',
                        border: `1px dashed ${hexToRgba(c, 0.45)}`,
                        borderRadius: RADIUS.sm,
                        padding: '3px 7px',
                        color: TEXT.hint,
                        fontFamily: FONT.diagram,
                        fontSize: 10,
                        fontWeight: 650,
                        textTransform: 'uppercase',
                      }}
                    >
                      off-gradient
                    </span>
                  )}
                </div>
                <p style={{ margin: '6px 0 0', fontFamily: FONT.diagram, fontSize: 11, letterSpacing: 0, color: TEXT.muted }}>
                  {p.atlasLabel} · {p.reality}{meta ? ` · ${meta}` : ''}
                </p>
                <p style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.55, color: TEXT.secondary }}>{p.mechanism}</p>
                <p style={{ margin: '4px 0 0', fontSize: 13.5, lineHeight: 1.55, color: TEXT.secondary }}>
                  <strong style={{ fontWeight: 600, color: WARM }}>Chronic</strong> — {p.mechanismChronic}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
