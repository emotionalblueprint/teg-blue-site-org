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
      className="state-pill"
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
      <span className="state-pill-dot" style={{ width: 10, height: 10, borderRadius: '50%', flexShrink: 0, background: dot }} />
      <span className="state-pill-text" style={{ fontFamily: FONT.mono, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: txt }}>
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
  const [compactSticky, setCompactSticky] = useState(false)
  const barRef = useRef(null)
  const readoutRef = useRef(null)
  const dragging = useRef(false)

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    let raf = null
    const updateCompact = () => {
      raf = null
      const readout = readoutRef.current
      if (!readout) return
      const mobile = window.matchMedia('(max-width: 720px)').matches
      const readoutTop = readout.getBoundingClientRect().top
      setCompactSticky(mobile && readoutTop < 320)
    }
    const schedule = () => {
      if (raf == null) raf = window.requestAnimationFrame(updateCompact)
    }
    updateCompact()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      if (raf != null) window.cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  const position = positions[posIndex]
  const isShutdown = posIndex === SHUT
  const colorOf = (i) => (chronic ? positions[i].chronicColor : positions[i].acuteColor)
  const accent = colorOf(posIndex)

  const isDark = mounted ? resolvedTheme !== 'light' : true
  const panelLight = !isDark
  const isAcuteBaseline = position.id === 'baseline' && !chronic
  const restingText = panelLight ? '#475569' : '#e2e8f0'
  const restingDot = panelLight ? '#94a3b8' : '#cbd5e1'
  const tileLight = panelLight

  // panel = the instrument surface (follows theme via CSS-var tokens)
  const panel = {
    ink: TEXT.primary,
    soft: TEXT.secondary,
    faint: TEXT.muted,
    line: BORDER.default,
    cText: isAcuteBaseline ? restingText : (panelLight ? ink(accent) : accent),
    cDot: isAcuteBaseline ? restingDot : (panelLight ? swatch(accent) : accent),
  }
  // tile = the readout groups
  const tileCDot = isAcuteBaseline ? restingDot : (tileLight ? swatch(accent) : accent)
  const tileCText = isAcuteBaseline ? restingText : (tileLight ? ink(accent) : accent)
  const tile = {
    cardBg: hexToRgba(tileCDot, 0.06),
    ink: tileLight ? '#1c1917' : '#f1f5f9',
    soft: tileLight ? 'rgba(28,25,23,0.6)' : 'rgba(241,245,249,0.6)',
    cText: tileCText,
    cDot: tileCDot,
    line: hexToRgba(tileCDot, 0.2),
    divider: hexToRgba(tileCDot, tileLight ? 0.16 : 0.14),
    detailBg: hexToRgba(tileCDot, isDark ? 0.09 : 0.08),
    detailBorder: hexToRgba(tileCDot, 0.22),
  }

  const labelColor = (i) => {
    const selectedAcuteBaseline = i === 0 && !chronic
    if (selectedAcuteBaseline) return restingText
    return panelLight ? ink(colorOf(i)) : colorOf(i)
  }
  const barStop = (i) => (panelLight ? swatch(colorOf(i)) : colorOf(i))
  const shutColor = panelLight ? swatch(colorOf(SHUT)) : colorOf(SHUT)
  const barGradient = `linear-gradient(90deg, ${barStop(0)} 0%, ${GRAD.map(
    (_, i) => `${barStop(i)} ${(((i + 0.5) / G) * 100).toFixed(2)}%`,
  ).join(', ')}, ${barStop(G - 1)} 100%)`
  const barBg = barGradient
  const modeCaption = chronic
    ? 'Chronic — the gradient has become rigid: the nervous system gets stuck in protective patterns, reacting from threat even when the present moment is safe.'
    : 'Fluid — the nervous system can move flexibly between safety, threat, and rest, depending on what is happening around it.'

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
  const stateText = chronic ? content.state[position.id].c : content.state[position.id].a
  const familiarLabel = chronic && position.familiarChronic ? position.familiarChronic : position.familiar

  const renderRow = (id) => {
    const card = cardById[id]
    const reading = content[id][position.id]
    const text = chronic ? reading.c : reading.a
    const description = card.descriptions?.[position.id]?.[chronic ? 'c' : 'a'] || card.description
    return (
      <div key={id} className="readout-row">
        <div className="readout-row-main">
          <span className="readout-label">
            {card.label}
          </span>
          <p className="readout-value">{text}</p>
        </div>
        <p className="readout-description">{description}</p>
        <details className="readout-science">
          <summary>
            <span>Grounding science</span>
            <span className="readout-science-icon" aria-hidden="true">▸</span>
          </summary>
          <p>{card.science}</p>
        </details>
      </div>
    )
  }

  const renderBlock = (g) => (
    <section key={g.label} className="readout-group">
      <div className="readout-group-head">
        <span className="readout-group-dot" aria-hidden="true" />
        <span className="readout-group-title">{g.label}</span>
        <span className="readout-group-count">{g.ids.length} dimensions</span>
      </div>
      <div className="readout-row-list">{g.ids.map(renderRow)}</div>
    </section>
  )

  return (
    <section
      tabIndex={0}
      onKeyDown={onTrackKey}
      aria-label="The Nervous System Gradient"
      style={{
        overflow: 'visible',
        borderRadius: 20,
        outline: 'none',
        background: BG.diagram,
        border: `1px solid ${hexToRgba(panel.cDot, 0.22)}`,
        fontFamily: FONT.display,
        boxShadow: `0 18px 48px ${hexToRgba('#000000', isDark ? 0.16 : 0.08)}`,
        '--gradient-sticky-bg': panelLight ? '#f4f4f2' : '#131a2f',
        '--gradient-line': panel.line,
        '--gradient-accent': panel.cDot,
        '--gradient-accent-text': panel.cText,
        '--readout-bg': tile.cardBg,
        '--readout-ink': tile.ink,
        '--readout-soft': tile.soft,
        '--readout-accent': tile.cText,
        '--readout-dot': tile.cDot,
        '--readout-line': tile.divider,
        '--readout-detail-bg': tile.detailBg,
        '--readout-detail-border': tile.detailBorder,
      }}
    >
      <div className={`gradient-sticky${compactSticky ? ' is-compact' : ''}`}>
        {/* state ribbon — current position stays in view while reading */}
        <div className="gradient-toolbar">
          <div className="sticky-state-title">
            <Badge color={chronic ? WARM : (isAcuteBaseline ? panel.cDot : accent)} light={panelLight}>{chronic ? 'Chronic' : 'Fluid'} · State {position.code}</Badge>
            <p className="sticky-autonomic-line">
              autonomic state — <span>{autonomic[position.id]}</span>
            </p>
          </div>
          <ChronicToggle chronic={chronic} onChange={setChronic} />
        </div>

        <p className="mode-caption">{modeCaption}</p>

        {/* gradient bar + detached Shutdown */}
        <div className="gradient-track-shell">
        <div className="gradient-track-row" style={{ display: 'flex', alignItems: 'stretch', gap: 12 }}>
          <div
            className="gradient-bar-hitbox"
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
            <div ref={barRef} className="gradient-bar" style={{ position: 'relative', height: 14, borderRadius: 999, background: barBg, boxShadow: panelLight ? 'inset 0 0 0 1px rgba(0,0,0,0.06)' : 'none' }}>
              {Array.from({ length: G - 1 }, (_, i) => (
                <div key={i} style={{ position: 'absolute', top: 0, bottom: 0, width: chronic ? 2 : 1, transform: 'translateX(-50%)', left: `${((i + 1) / G) * 100}%`, background: chronic ? (panelLight ? 'rgba(255,255,255,0.72)' : 'rgba(10,13,20,0.42)') : (panelLight ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.3)') }} />
              ))}
              {chronic && GRAD.map((_, i) => (
                <div
                  key={`fixed-${i}`}
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: `${((i + 0.5) / G) * 100}%`,
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: panelLight ? 'rgba(255,255,255,0.82)' : 'rgba(10,13,20,0.58)',
                    boxShadow: `0 0 0 1px ${hexToRgba(barStop(i), 0.55)}`,
                    pointerEvents: 'none',
                  }}
                />
              ))}
              {!isShutdown && (
                <div
                  className="gradient-needle"
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

          <div className="gradient-shutdown-track" style={{ display: 'flex', flexShrink: 0, alignItems: 'center', gap: 12, alignSelf: 'center' }}>
            <div className="gradient-shutdown-divider" style={{ height: 20, borderLeft: `1px dashed ${panel.line}` }} />
            <button className="gradient-shutdown-button" onClick={() => setPosIndex(SHUT)} aria-label="Shutdown — off-gradient" style={{ padding: '12px 0', background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <div
                className="gradient-shutdown-pill"
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

        <div
          className="gradient-bar-name"
          style={{
            '--gradient-bar-name-color': panel.cText,
            '--gradient-bar-name-bg': hexToRgba(panel.cDot, panelLight ? 0.1 : 0.14),
            '--gradient-bar-name-border': hexToRgba(panel.cDot, panelLight ? 0.34 : 0.4),
          }}
        >
          <span className="gradient-bar-name-code">{position.code}</span>
          <span className="gradient-bar-name-label">{position.atlasLabel}</span>
        </div>

        {/* labels */}
        <div className="gradient-track-labels" style={{ display: 'flex', gap: 12, marginTop: 10 }}>
          <div style={{ display: 'flex', flex: 1 }}>
            {GRAD.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setPosIndex(i)}
                aria-label={`State ${p.code}: ${p.mode}`}
                title={`State ${p.code}: ${p.mode}`}
                style={{ flex: 1, minHeight: 34, padding: '0 2px', textAlign: 'center', background: 'transparent', border: 'none', cursor: 'pointer', color: i === posIndex ? labelColor(i) : panel.faint }}
              >
                <span className="gradient-track-code" style={{ display: 'block', fontFamily: FONT.diagram, fontSize: 10, lineHeight: 1.2, fontWeight: i === posIndex ? 700 : 500, letterSpacing: '0.08em' }}>{p.code}</span>
                <span className="gradient-track-label" style={{ display: 'block', marginTop: 3, fontSize: 10, lineHeight: 1.2, fontWeight: i === posIndex ? 700 : 500, fontFamily: FONT.display }}>{p.mode}</span>
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flexShrink: 0, alignItems: 'center', gap: 12 }}>
            <div style={{ height: 20, borderLeft: '1px solid transparent' }} />
            <button onClick={() => setPosIndex(SHUT)} aria-label={`State ${positions[SHUT].code}: Shutdown`} title={`State ${positions[SHUT].code}: Shutdown`} style={{ width: 48, minHeight: 34, textAlign: 'center', background: 'transparent', border: 'none', cursor: 'pointer', color: isShutdown ? (panelLight ? ink(colorOf(SHUT)) : colorOf(SHUT)) : panel.faint }}>
              <span className="gradient-track-code" style={{ display: 'block', fontFamily: FONT.diagram, fontSize: 10, lineHeight: 1.2, fontWeight: isShutdown ? 700 : 500, letterSpacing: '0.08em' }}>{positions[SHUT].code}</span>
              <span className="gradient-track-label" style={{ display: 'block', marginTop: 3, fontSize: 10, lineHeight: 1.2, fontWeight: isShutdown ? 700 : 500, fontFamily: FONT.display }}>Shutdown</span>
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* selected position */}
      <div className="selected-state">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 14, height: 14, borderRadius: '50%', background: panel.cDot }} />
          <span style={{ fontSize: 'clamp(22px, 3vw, 29px)', fontWeight: 800, letterSpacing: '-0.02em', color: panel.cText }}>{position.mode}</span>
        </div>

        {familiarLabel && (
          <p style={{ margin: '8px 0 0', fontSize: 13, color: panel.soft }}>
            also known as <span style={{ fontWeight: 600, color: panel.cText }}>{familiarLabel}</span>
          </p>
        )}

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
        <div ref={readoutRef} className="state-readout">
          <div className="readout-head">
            <span className="readout-kicker">State</span>
            <span className="readout-rule" aria-hidden="true" />
            <span className="readout-note">the configuration</span>
          </div>
          <p className="state-reading">{stateText}</p>

          <div className="readout-grid">
            {groups.map(renderBlock)}
          </div>
        </div>
      </div>
      <style>{`
        .gradient-sticky {
          position: sticky;
          top: 68px;
          z-index: 30;
          border-radius: 20px 20px 0 0;
          border-bottom: 1px solid var(--gradient-line);
          background: var(--gradient-sticky-bg);
          backdrop-filter: blur(14px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.16);
          transition: border-radius 180ms ease, box-shadow 180ms ease, margin-bottom 180ms ease;
        }

        .gradient-toolbar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 18px 24px 0;
        }

        .sticky-state-title {
          display: flex;
          flex: 1 1 auto;
          min-width: 0;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 12px;
        }

        .sticky-autonomic-line {
          margin: 0;
          color: var(--readout-soft);
          font-size: 12.5px;
          line-height: 1.45;
        }

        .sticky-autonomic-line span {
          color: var(--gradient-accent-text);
          font-weight: 650;
        }

        .mode-caption {
          margin: 0;
          padding: 12px 24px 0;
          color: var(--readout-soft);
          font-size: 12.5px;
          line-height: 1.6;
        }

        .gradient-track-shell {
          padding: 16px 24px 18px;
        }

        .gradient-bar-name {
          display: none;
        }

        .selected-state {
          padding: 48px 24px 32px;
        }

        .state-readout {
          margin-top: 30px;
          border-top: 1px solid var(--readout-line);
        }

        .readout-head {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 18px;
        }

        .readout-kicker {
          color: var(--gradient-accent-text);
          font-family: var(--font-diagram), monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .readout-rule {
          height: 1px;
          flex: 1;
          background: color-mix(in srgb, var(--gradient-accent) 26%, transparent);
        }

        .readout-note {
          color: var(--readout-soft);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .state-reading {
          margin: 10px 0 0;
          max-width: 760px;
          color: var(--readout-ink);
          font-size: clamp(16px, 2.2vw, 18px);
          font-weight: 560;
          line-height: 1.45;
        }

        .readout-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 34px;
          margin-top: 8px;
        }

        .readout-group {
          padding: 22px 0;
          border-bottom: 1px solid var(--readout-line);
        }

        .readout-group-head {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 2px;
        }

        .readout-group-dot {
          width: 8px;
          height: 8px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: var(--readout-dot);
        }

        .readout-group-title {
          color: var(--readout-accent);
          font-family: var(--font-diagram), monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .readout-group-count {
          margin-left: auto;
          color: var(--readout-soft);
          font-size: 11px;
          opacity: 0.72;
        }

        .readout-row {
          padding: 16px 0;
          border-top: 1px solid var(--readout-line);
        }

        .readout-row:first-child {
          border-top: 0;
        }

        .readout-row-main {
          display: grid;
          grid-template-columns: 1fr;
          gap: 6px;
          align-items: start;
        }

        .readout-label {
          display: inline-flex;
          align-items: center;
          color: var(--readout-accent);
          font-size: 12px;
          font-weight: 700;
          line-height: 1.35;
        }

        .readout-value {
          margin: 0;
          color: var(--readout-ink);
          font-size: 14px;
          font-weight: 620;
          line-height: 1.42;
        }

        .readout-description {
          margin: 7px 0 0;
          color: var(--readout-soft);
          font-size: 12.75px;
          line-height: 1.62;
        }

        .readout-science {
          margin: 9px 0 0;
          border: 0 !important;
          background: transparent !important;
        }

        .readout-science summary {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          padding: 0;
          color: var(--readout-accent);
          font-family: var(--font-diagram), monospace;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.14em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .readout-science summary::after {
          display: none !important;
        }

        .readout-science-icon {
          display: inline-block;
          color: var(--readout-accent);
          font-size: 10px;
          line-height: 1;
          transform: translateY(-1px);
          transition: transform 150ms ease;
        }

        .readout-science[open] .readout-science-icon {
          transform: translateY(-1px) rotate(90deg);
        }

        .readout-science p {
          margin: 8px 0 0;
          padding: 0 0 0 12px;
          border-left: 2px solid var(--readout-detail-border);
          color: var(--readout-soft);
          font-size: 12px;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .readout-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .gradient-sticky {
            top: 66px;
          }

          .gradient-toolbar {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            align-items: start;
            padding: 12px 18px 0;
            gap: 8px;
          }

          .sticky-state-title {
            display: flex;
            min-width: 0;
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }

          .state-pill {
            gap: 6px !important;
            padding: 5px 9px !important;
          }

          .state-pill-dot {
            width: 8px !important;
            height: 8px !important;
          }

          .state-pill-text {
            font-size: 9.5px !important;
            letter-spacing: 0.055em !important;
          }

          .mode-caption {
            padding: 10px 18px 0;
          }

          .sticky-autonomic-line {
            font-size: 11.5px;
            line-height: 1.4;
          }

          .gradient-track-shell {
            padding: 10px 18px 12px;
          }

          .gradient-track-labels {
            display: none !important;
          }

          .gradient-bar-name {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            max-width: 100%;
            margin-top: 9px;
            border: 1px solid var(--gradient-bar-name-border);
            border-radius: 999px;
            background: var(--gradient-bar-name-bg);
            color: var(--gradient-bar-name-color);
            padding: 6px 10px;
            font-size: 12px;
            font-weight: 650;
            line-height: 1.2;
          }

          .gradient-bar-name-code {
            flex: 0 0 auto;
            font-family: var(--font-diagram), monospace;
            font-size: 10.5px;
            font-weight: 700;
            letter-spacing: 0.08em;
            line-height: 1;
          }

          .gradient-bar-name-label {
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .selected-state {
            padding: 42px 18px 28px;
          }

          .gradient-track-label {
            display: none !important;
          }

          .gradient-track-code {
            font-size: 11px !important;
          }

          .readout-head {
            align-items: flex-start;
          }

          .readout-note {
            display: none;
          }

          .readout-description,
          .readout-science {
            margin-left: 0;
          }

          .gradient-sticky.is-compact {
            border-radius: 0;
            margin-bottom: 12px;
            box-shadow:
              0 10px 24px rgba(0, 0, 0, 0.2),
              0 16px 0 var(--gradient-sticky-bg);
          }

          .gradient-sticky.is-compact .gradient-toolbar {
            align-items: center;
            padding: 8px 12px 0;
            gap: 6px;
          }

          .gradient-sticky.is-compact .sticky-state-title {
            flex-direction: row;
            align-items: center;
            gap: 8px;
          }

          .gradient-sticky.is-compact .sticky-autonomic-line {
            display: none;
          }

          .gradient-sticky.is-compact .state-pill {
            padding: 4px 7px !important;
          }

          .gradient-sticky.is-compact .state-pill-dot {
            width: 7px !important;
            height: 7px !important;
          }

          .gradient-sticky.is-compact .state-pill-text {
            font-size: 8.5px !important;
            letter-spacing: 0.045em !important;
          }

          .gradient-sticky.is-compact .chronic-toggle {
            gap: 6px !important;
            padding: 4px 8px !important;
            font-size: 11px !important;
          }

          .gradient-sticky.is-compact .mode-caption {
            display: none;
          }

          .gradient-sticky.is-compact .gradient-track-shell {
            padding: 7px 12px 8px;
          }

          .gradient-sticky.is-compact .gradient-track-row {
            gap: 8px !important;
          }

          .gradient-sticky.is-compact .gradient-bar-hitbox {
            padding: 5px 0 !important;
          }

          .gradient-sticky.is-compact .gradient-bar {
            height: 8px !important;
          }

          .gradient-sticky.is-compact .gradient-needle {
            width: 18px !important;
            height: 18px !important;
            border-width: 2px !important;
          }

          .gradient-sticky.is-compact .gradient-shutdown-track {
            gap: 8px !important;
          }

          .gradient-sticky.is-compact .gradient-shutdown-divider {
            height: 14px !important;
          }

          .gradient-sticky.is-compact .gradient-shutdown-button {
            padding: 5px 0 !important;
          }

          .gradient-sticky.is-compact .gradient-shutdown-pill {
            width: 32px !important;
            height: 8px !important;
            border-width: 1px !important;
          }

          .gradient-sticky.is-compact .gradient-track-labels {
            display: none !important;
          }

          .gradient-sticky.is-compact .gradient-bar-name {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}

function ChronicToggle({ chronic, onChange }) {
  return (
    <button
      className="chronic-toggle"
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
