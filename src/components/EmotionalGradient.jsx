'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { BG, TEXT, BORDER, FONT, ACCENT, RADIUS, hexToRgba } from '../styles/tokens'
import { positions, cards, content, groups, autonomic } from '../lib/gradient-data'

// ── on-light colour helpers ──────────────────────────────────────────────────
// Position hues are tuned light for a dark surface. On a light surface we derive
// `swatch` (a visible mid-tone for dots / bar / marker) and `ink` (a dark, legible
// tone for coloured text).
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
const adjustL = (hex, l) => {
  const c = hexToHsl(hex)
  return hslToHex(c.h, c.s, l)
}
const swatch = (hex) => adjustL(hex, Math.min(hexToHsl(hex).l, 0.52))
const ink = (hex) => adjustL(hex, 0.3)

const WARM = ACCENT.orange // chronic accent — oranges signal chronic only
const N = positions.length
const SHUT = N - 1
const GRAD = positions.slice(0, SHUT)
const G = GRAD.length
const cardById = Object.fromEntries(cards.map((c) => [c.id, c]))

function Badge({ color, light, children }) {
  const dot = light ? swatch(color) : color
  const txt = light ? ink(color) : color
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 12px',
        borderRadius: RADIUS.md,
        background: hexToRgba(dot, 0.12),
        border: `1px solid ${hexToRgba(dot, 0.3)}`,
      }}
    >
      <span style={{ width: 10, height: 10, borderRadius: '50%', flexShrink: 0, background: dot }} />
      <span style={{ fontFamily: FONT.mono, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: txt }}>
        {children}
      </span>
    </span>
  )
}

export default function EmotionalGradient() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [posIndex, setPosIndex] = useState(1) // default: Connection / Belonging
  const [chronic, setChronic] = useState(false)
  const [openCard, setOpenCard] = useState(null)
  const barRef = useRef(null)
  const dragging = useRef(false)

  useEffect(() => setMounted(true), [])

  const position = positions[posIndex]
  const isShutdown = posIndex === SHUT
  const colorOf = (i) => (chronic ? positions[i].chronicColor : positions[i].acuteColor)
  const accent = colorOf(posIndex)

  const isDark = mounted ? resolvedTheme !== 'light' : true
  const baselineWhite = position.id === 'baseline' && !chronic
  const panelLight = !isDark
  const tileLight = panelLight || baselineWhite

  // panel = the instrument surface (follows theme via CSS-var tokens)
  const panel = {
    ink: TEXT.primary,
    soft: TEXT.secondary,
    faint: TEXT.muted,
    line: BORDER.default,
    cText: panelLight ? ink(accent) : accent,
    cDot: panelLight ? swatch(accent) : accent,
  }
  // tile = the readout group cards (Baseline forces white even in dark mode)
  const tileCDot = tileLight ? swatch(accent) : accent
  const tileCText = tileLight ? ink(accent) : accent
  const tile = {
    cardBg: baselineWhite ? '#ffffff' : hexToRgba(tileCDot, 0.06),
    ink: tileLight ? '#1c1917' : '#f1f5f9',
    soft: tileLight ? 'rgba(28,25,23,0.6)' : 'rgba(241,245,249,0.6)',
    cText: tileCText,
    cDot: tileCDot,
    line: hexToRgba(tileCDot, 0.2),
    divider: hexToRgba(tileCDot, tileLight ? 0.16 : 0.14),
    detailBg: baselineWhite ? hexToRgba(tileCDot, 0.06) : hexToRgba(tileCDot, isDark ? 0.09 : 0.08),
    detailBorder: hexToRgba(tileCDot, 0.22),
  }

  const barStop = (i) => (panelLight ? swatch(colorOf(i)) : colorOf(i))
  const shutColor = panelLight ? swatch(colorOf(SHUT)) : colorOf(SHUT)
  const barGradient = `linear-gradient(90deg, ${barStop(0)} 0%, ${GRAD.map(
    (_, i) => `${barStop(i)} ${(((i + 0.5) / G) * 100).toFixed(2)}%`,
  ).join(', ')}, ${barStop(G - 1)} 100%)`
  const barBg = chronic ? (panelLight ? '#e7e5e4' : '#1e2742') : barGradient

  function setFromClientX(clientX) {
    const el = barRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const raw = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    setPosIndex(Math.min(Math.floor(raw * G), G - 1))
  }
  function onTrackKey(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      setPosIndex((i) => Math.min(i + 1, N - 1))
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      setPosIndex((i) => Math.max(i - 1, 0))
    }
  }
  useEffect(() => {
    if (!openCard) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenCard(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openCard])

  const stateText = chronic ? content.state[position.id].c : content.state[position.id].a
  const familiarLabel = chronic && position.familiarChronic ? position.familiarChronic : position.familiar

  const renderRow = (id) => {
    const card = cardById[id]
    const reading = content[id][position.id]
    const text = chronic ? reading.c : reading.a
    const open = openCard === id
    return (
      <div key={id} style={{ borderTop: `1px solid ${tile.divider}` }}>
        <button
          onClick={() => setOpenCard(open ? null : id)}
          aria-expanded={open}
          style={{
            display: 'flex',
            width: '100%',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            gap: 14,
            padding: '10px 0',
            textAlign: 'left',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontFamily: FONT.display,
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 500, width: 112, flexShrink: 0, color: tile.soft }}>{card.label}</span>
          <span style={{ flex: 1, minWidth: 160, fontSize: 14, lineHeight: 1.4, color: tile.ink }}>{text}</span>
          <span style={{ fontSize: 10, color: tile.cText, opacity: 0.7, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms' }}>▾</span>
        </button>
        {open && (
          <div style={{ paddingBottom: 12 }}>
            <div style={{ borderRadius: RADIUS.md, padding: 12, background: tile.detailBg, border: `1px solid ${tile.detailBorder}` }}>
              <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6, color: tile.soft }}>{card.description}</p>
              <div style={{ marginTop: 10, paddingTop: 10, borderTop: `1px solid ${tile.detailBorder}` }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                  <p style={{ margin: 0, fontFamily: FONT.diagram, fontSize: 9, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.2em', color: tile.cText }}>Convergent science</p>
                  <span style={{ fontFamily: FONT.diagram, fontSize: 9, letterSpacing: '0.06em', color: tile.soft, opacity: 0.85 }}>{card.source}</span>
                </div>
                <p style={{ margin: '6px 0 0', paddingLeft: 10, borderLeft: `2px solid ${tile.detailBorder}`, fontSize: 12.5, lineHeight: 1.6, color: tile.ink }}>{card.science}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderBlock = (g) => (
    <div style={{ borderRadius: RADIUS.lg, padding: '14px 16px', background: tile.cardBg, border: `1px solid ${tile.line}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: tile.cDot }} />
        <span style={{ fontFamily: FONT.diagram, fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: tile.cText }}>{g.label}</span>
      </div>
      <div>{g.ids.map(renderRow)}</div>
    </div>
  )

  return (
    <section
      tabIndex={0}
      onKeyDown={onTrackKey}
      aria-label="The Emotional Gradient"
      style={{
        overflow: 'hidden',
        borderRadius: 20,
        outline: 'none',
        background: BG.diagram,
        border: `1px solid ${hexToRgba(panel.cDot, 0.22)}`,
        fontFamily: FONT.display,
      }}
    >
      {/* header — status badge + chronic toggle */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '20px 24px 0' }}>
        <Badge color={chronic ? WARM : accent} light={panelLight}>{chronic ? 'Stuck · chronic' : 'Fluid · gradient'}</Badge>
        <ChronicToggle chronic={chronic} onChange={setChronic} />
      </div>

      {/* chronic caption — only when on */}
      {chronic && (
        <p style={{ margin: 0, padding: '12px 24px 0', fontSize: 12.5, lineHeight: 1.6, color: panel.soft }}>
          Chronic — each mode read as one the system can’t leave, not one it moves through. The gradient stops flowing and snaps between fixed points.
        </p>
      )}

      {/* gradient bar + detached Shutdown */}
      <div style={{ padding: '20px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 12 }}>
          <div
            style={{ position: 'relative', flex: 1, cursor: 'pointer', userSelect: 'none', padding: '12px 0', touchAction: 'none' }}
            onPointerDown={(e) => {
              dragging.current = true
              e.currentTarget.setPointerCapture(e.pointerId)
              setFromClientX(e.clientX)
            }}
            onPointerMove={(e) => {
              if (dragging.current) setFromClientX(e.clientX)
            }}
            onPointerUp={() => {
              dragging.current = false
            }}
          >
            <div ref={barRef} style={{ position: 'relative', height: 14, borderRadius: 999, background: barBg, boxShadow: panelLight ? 'inset 0 0 0 1px rgba(0,0,0,0.06)' : 'none' }}>
              {Array.from({ length: G - 1 }, (_, i) => (
                <div key={i} style={{ position: 'absolute', top: 0, bottom: 0, width: 1, transform: 'translateX(-50%)', left: `${((i + 1) / G) * 100}%`, background: panelLight ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.3)' }} />
              ))}
              {!isShutdown && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: `${((posIndex + 0.5) / G) * 100}%`,
                    width: 28,
                    height: 28,
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    background: panelLight ? '#ffffff' : '#0b1020',
                    border: `3px solid ${panelLight ? swatch(accent) : '#e5f0ff'}`,
                    boxShadow: panelLight ? '0 1px 3px rgba(0,0,0,0.25)' : '0 0 0 2px #0b1020',
                    transition: 'left 200ms',
                  }}
                />
              )}
            </div>
          </div>

          <div style={{ display: 'flex', flexShrink: 0, alignItems: 'center', gap: 12, alignSelf: 'center' }}>
            <div style={{ height: 20, borderLeft: `1px dashed ${panel.line}` }} />
            <button onClick={() => setPosIndex(SHUT)} aria-label="Shutdown — off-gradient" style={{ padding: '12px 0', background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <div
                style={{
                  height: 14,
                  width: 48,
                  borderRadius: 999,
                  background: isShutdown ? shutColor : hexToRgba(shutColor, 0.3),
                  border: isShutdown ? `2px solid ${shutColor}` : `1px solid ${hexToRgba(shutColor, 0.5)}`,
                  transition: 'all 200ms',
                }}
              />
            </button>
          </div>
        </div>

        {/* labels */}
        <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
          <div style={{ display: 'flex', flex: 1 }}>
            {GRAD.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setPosIndex(i)}
                style={{ flex: 1, padding: '0 2px', textAlign: 'center', background: 'transparent', border: 'none', cursor: 'pointer', color: i === posIndex ? (panelLight ? ink(colorOf(i)) : colorOf(i)) : panel.faint }}
              >
                <span style={{ display: 'block', fontSize: 10, lineHeight: 1.2, fontWeight: i === posIndex ? 700 : 500, fontFamily: FONT.display }}>{p.mode}</span>
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flexShrink: 0, alignItems: 'center', gap: 12 }}>
            <div style={{ height: 20, borderLeft: '1px solid transparent' }} />
            <button onClick={() => setPosIndex(SHUT)} style={{ width: 48, textAlign: 'center', background: 'transparent', border: 'none', cursor: 'pointer', color: isShutdown ? (panelLight ? ink(colorOf(SHUT)) : colorOf(SHUT)) : panel.faint }}>
              <span style={{ display: 'block', fontSize: 10, lineHeight: 1.2, fontWeight: isShutdown ? 700 : 500, fontFamily: FONT.display }}>Shutdown</span>
            </button>
          </div>
        </div>
      </div>

      {/* selected position */}
      <div style={{ padding: '28px 24px 32px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 14, height: 14, borderRadius: '50%', background: panel.cDot }} />
          <span style={{ fontSize: 'clamp(22px, 3vw, 29px)', fontWeight: 800, letterSpacing: '-0.02em', color: panel.cText }}>{position.mode}</span>
        </div>

        {familiarLabel && (
          <p style={{ margin: '8px 0 0', fontSize: 13, color: panel.soft }}>
            also known as <span style={{ fontWeight: 600, color: panel.cText }}>{familiarLabel}</span>
          </p>
        )}

        {/* recognisable autonomic branch — convergent grounding */}
        <p style={{ margin: '4px 0 0', fontSize: 13, color: panel.soft }}>
          autonomic state — <span style={{ fontWeight: 600, color: panel.cText }}>{autonomic[position.id]}</span>
        </p>

        {/* source-trace — internal Pattern code + converging science (quiet, never leads) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 6, fontFamily: FONT.diagram, fontSize: 11, letterSpacing: '0.02em', color: panel.faint }}>
          <span>{position.pattern}</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>{position.sub}</span>
        </div>

        <p style={{ margin: '12px 0 0', maxWidth: 720, fontSize: 15, lineHeight: 1.6, color: panel.ink }}>
          {chronic ? position.mechanismChronic : position.mechanism}
        </p>

        {/* configuration readout */}
        <div style={{ marginTop: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontFamily: FONT.diagram, fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.22em', color: panel.cText }}>State</span>
            <span style={{ height: 1, flex: 1, background: hexToRgba(panel.cDot, 0.25) }} />
            <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: panel.faint }}>the configuration</span>
          </div>
          <p style={{ margin: '10px 0 0', maxWidth: 720, fontSize: 'clamp(16px, 2.2vw, 18px)', fontWeight: 500, lineHeight: 1.4, color: panel.ink }}>{stateText}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 20 }}>
            <div style={{ flex: '1 1 280px' }}>{renderBlock(groups[0])}</div>
            <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {renderBlock(groups[1])}
              {renderBlock(groups[2])}
              {renderBlock(groups[3])}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChronicToggle({ chronic, onChange }) {
  return (
    <button
      onClick={() => onChange(!chronic)}
      role="switch"
      aria-checked={chronic}
      aria-label="Chronic"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        borderRadius: 999,
        border: `1px solid ${BORDER.default}`,
        background: BG.surface,
        padding: '6px 12px',
        fontSize: 12,
        fontFamily: FONT.display,
        cursor: 'pointer',
        color: chronic ? WARM : TEXT.secondary,
      }}
    >
      <span style={{ fontWeight: chronic ? 600 : 400 }}>Chronic</span>
      <span style={{ position: 'relative', height: 16, width: 28, borderRadius: 999, background: chronic ? WARM : hexToRgba('#94a3b8', 0.35), transition: 'background 200ms' }}>
        <span style={{ position: 'absolute', top: 2, left: chronic ? 14 : 2, height: 12, width: 12, borderRadius: '50%', background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.2)', transition: 'left 200ms' }} />
      </span>
    </button>
  )
}
