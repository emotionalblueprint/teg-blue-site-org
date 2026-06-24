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
  const readoutColumns = [
    groups.filter((group) => group.label === 'Mind' || group.label === 'Feeling'),
    groups.filter((group) => group.label === 'Body' || group.label === 'Response'),
  ]

  const renderRow = (id) => {
    const card = cardById[id]
    const reading = content[id][position.id]
    const text = chronic ? reading.c : reading.a
    const description = card.descriptions?.[position.id]?.[chronic ? 'c' : 'a'] || card.description
    return (
      <div key={id} className="readout-row">
        <details className="readout-explanation">
          <summary className="readout-row-toggle">
            <span className="readout-row-main">
              <span className="readout-label">
                {card.label}
              </span>
              <span className="readout-value">{text}</span>
            </span>
          </summary>
          <p className="readout-description">{description}</p>
        </details>
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
      className="gradient-card"
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
          <div className="gradient-toolbar-copy">
            <div className="sticky-state-title">
              <Badge color={chronic ? WARM : (isAcuteBaseline ? panel.cDot : accent)} light={panelLight}>{chronic ? 'Chronic' : 'Fluid'} · State {position.code}</Badge>
              <p className="sticky-autonomic-line">
                autonomic state — <span>{autonomic[position.id]}</span>
              </p>
            </div>
            <p className="mode-caption">{modeCaption}</p>
          </div>
          <ChronicToggle chronic={chronic} onChange={setChronic} />
        </div>

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
                className={i === posIndex ? 'gradient-label-button is-active' : 'gradient-label-button'}
                style={{
                  flex: 1,
                  minHeight: 38,
                  padding: '5px 4px',
                  textAlign: 'center',
                  background: i === posIndex ? hexToRgba(colorOf(i), panelLight ? 0.08 : 0.12) : 'transparent',
                  border: `1px solid ${i === posIndex ? hexToRgba(colorOf(i), panelLight ? 0.24 : 0.28) : 'transparent'}`,
                  borderRadius: 8,
                  cursor: 'pointer',
                  color: i === posIndex ? labelColor(i) : panel.faint,
                }}
              >
                <span className="gradient-track-code" style={{ display: 'block', fontFamily: FONT.diagram, fontSize: 10, lineHeight: 1.2, fontWeight: i === posIndex ? 700 : 500, letterSpacing: '0.08em' }}>{p.code}</span>
                <span className="gradient-track-label" style={{ display: 'block', marginTop: 3, fontSize: 10, lineHeight: 1.2, fontWeight: i === posIndex ? 700 : 500, fontFamily: FONT.display }}>{p.mode}</span>
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flexShrink: 0, alignItems: 'center', gap: 12 }}>
            <div style={{ height: 20, borderLeft: '1px solid transparent' }} />
            <button
              onClick={() => setPosIndex(SHUT)}
              aria-label={`State ${positions[SHUT].code}: Shutdown`}
              title={`State ${positions[SHUT].code}: Shutdown`}
              className={isShutdown ? 'gradient-label-button is-active' : 'gradient-label-button'}
              style={{
                width: 58,
                minHeight: 38,
                padding: '5px 4px',
                textAlign: 'center',
                background: isShutdown ? hexToRgba(colorOf(SHUT), panelLight ? 0.08 : 0.12) : 'transparent',
                border: `1px solid ${isShutdown ? hexToRgba(colorOf(SHUT), panelLight ? 0.24 : 0.28) : 'transparent'}`,
                borderRadius: 8,
                cursor: 'pointer',
                color: isShutdown ? (panelLight ? ink(colorOf(SHUT)) : colorOf(SHUT)) : panel.faint,
              }}
            >
              <span className="gradient-track-code" style={{ display: 'block', fontFamily: FONT.diagram, fontSize: 10, lineHeight: 1.2, fontWeight: isShutdown ? 700 : 500, letterSpacing: '0.08em' }}>{positions[SHUT].code}</span>
              <span className="gradient-track-label" style={{ display: 'block', marginTop: 3, fontSize: 10, lineHeight: 1.2, fontWeight: isShutdown ? 700 : 500, fontFamily: FONT.display }}>Shutdown</span>
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* selected position */}
      <div className="selected-state">
        {/* configuration readout */}
        <div ref={readoutRef} className="state-readout">
          <div className="state-configuration-title">
            <span className="state-configuration-dot" aria-hidden="true" />
            <h2 className="state-configuration-name">{position.mode}</h2>
          </div>
          <div className="state-configuration-context">
            {familiarLabel && (
              <p className="state-alias">
                also known as <span>{familiarLabel}</span>
              </p>
            )}
            <div className="state-source-trace">
              <span>{position.pattern} · {position.sub}</span>
            </div>
            <p className="state-mechanism">
              {chronic ? position.mechanismChronic : position.mechanism}
            </p>
          </div>
          <p className="state-reading">{stateText}</p>

          <div className="readout-grid readout-grid-desktop">
            {readoutColumns.map((columnGroups, index) => (
              <div key={index} className="readout-column">
                {columnGroups.map(renderBlock)}
              </div>
            ))}
          </div>

          <div className="readout-mobile-stack">
            {groups.map(renderBlock)}
          </div>
        </div>
      </div>
      <style>{`
        .gradient-card {
          position: relative;
          isolation: isolate;
          --gradient-sticky-offset: 68px;
        }

        .gradient-sticky {
          position: sticky;
          top: 68px;
          z-index: 30;
          border-radius: 20px 20px 0 0;
          border-bottom: 1px solid var(--gradient-line);
          background:
            linear-gradient(180deg, var(--gradient-sticky-bg) 0%, color-mix(in srgb, var(--gradient-sticky-bg) 92%, var(--gradient-accent) 8%) 100%);
          backdrop-filter: blur(14px);
          box-shadow:
            inset 0 -1px 0 color-mix(in srgb, var(--gradient-accent) 18%, transparent),
            0 12px 28px rgba(0, 0, 0, 0.12);
          transition: border-radius 180ms ease, box-shadow 180ms ease, margin-bottom 180ms ease;
        }

        .gradient-toolbar {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 18px 24px 0;
        }

        .gradient-toolbar-copy {
          display: flex;
          flex: 1 1 auto;
          min-width: 0;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 16px;
        }

        .sticky-state-title {
          display: flex;
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
          max-width: 760px;
          color: var(--readout-soft);
          font-size: 12.5px;
          line-height: 1.6;
        }

        .gradient-track-shell {
          position: relative;
          margin: 16px 24px 0;
          padding: 16px 0 18px;
          border-top: 1px solid color-mix(in srgb, var(--gradient-accent) 18%, transparent);
        }

        .gradient-bar-name {
          display: none;
        }

        .gradient-label-button {
          transition:
            color 160ms ease,
            border-color 160ms ease,
            background-color 160ms ease;
        }

        .gradient-label-button:focus-visible {
          outline: 1px solid color-mix(in srgb, var(--gradient-accent) 42%, transparent);
          outline-offset: 3px;
        }

        .selected-state {
          position: relative;
          padding: calc(10px + var(--gradient-sticky-offset)) 24px 32px;
        }

        .state-readout {
          margin-top: 0;
        }

        .state-configuration-title {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 10px;
          min-width: 0;
        }

        .state-configuration-dot {
          width: 10px;
          height: 10px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: var(--gradient-accent);
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--gradient-accent) 12%, transparent);
        }

        .state-configuration-name {
          margin: 0;
          min-width: 0;
          color: var(--gradient-accent-text);
          font-size: clamp(21px, 2.8vw, 30px);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.08;
        }

        .state-configuration-context {
          display: grid;
          gap: 6px;
          max-width: 760px;
          margin: 0 0 18px;
        }

        .state-alias {
          margin: 0;
          color: var(--readout-soft);
          font-size: 13px;
          line-height: 1.45;
        }

        .state-alias span {
          color: var(--gradient-accent-text);
          font-weight: 650;
        }

        .state-source-trace {
          display: block;
          color: var(--readout-soft);
          font-family: var(--font-diagram), monospace;
          font-size: 11px;
          letter-spacing: 0.02em;
          line-height: 1.45;
          opacity: 0.82;
        }

        .state-mechanism {
          margin: 2px 0 0;
          max-width: 680px;
          padding-left: 12px;
          border-left: 2px solid color-mix(in srgb, var(--gradient-accent) 28%, transparent);
          color: var(--readout-ink);
          font-size: 14px;
          line-height: 1.55;
        }

        .readout-head {
          display: flex;
          align-items: center;
          gap: 12px;
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
          margin: 0;
          padding-bottom: 28px;
          border-bottom: 1px solid var(--readout-line);
          color: var(--readout-ink);
          font-size: clamp(18px, 2.2vw, 24px);
          font-weight: 650;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }

        .readout-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: clamp(26px, 4vw, 44px);
          margin-top: 0;
        }

        .readout-column {
          min-width: 0;
        }

        .readout-mobile-stack {
          display: none;
        }

        .readout-group {
          padding: 34px 0 28px;
          border-bottom: 1px solid var(--readout-line);
        }

        .readout-group-head {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 2px;
        }

        .readout-group-dot {
          width: 9px;
          height: 9px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: var(--readout-dot);
        }

        .readout-group-title {
          color: var(--readout-accent);
          font-family: var(--font-diagram), monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
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

        .readout-row-toggle {
          display: block;
          margin: 0;
          padding: 0;
          cursor: pointer;
          list-style: none;
          border-radius: 4px;
          outline: none;
        }

        .readout-row-toggle::after {
          display: none !important;
        }

        .readout-row-toggle::-webkit-details-marker {
          display: none;
        }

        .readout-row-main {
          display: grid;
          grid-template-columns: 1fr;
          gap: 7px;
          align-items: start;
          min-width: 0;
        }

        .readout-label {
          display: inline-flex;
          align-items: center;
          color: var(--readout-accent);
          font-size: 15px;
          font-weight: 760;
          line-height: 1.25;
        }

        .readout-value {
          display: inline;
          margin: 0;
          color: var(--readout-ink);
          font-size: 15px;
          font-weight: 620;
          line-height: 1.42;
          transition: color 150ms ease;
        }

        .readout-row-toggle:hover .readout-value,
        .readout-row-toggle:focus-visible .readout-value,
        .readout-explanation[open] .readout-value {
          color: var(--readout-accent);
        }

        .readout-row-toggle:focus-visible {
          outline: 1px solid color-mix(in srgb, var(--readout-accent) 34%, transparent);
          outline-offset: 3px;
        }

        .readout-explanation {
          margin: 0;
          border: 0 !important;
          background: transparent !important;
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
          color: color-mix(in srgb, var(--readout-accent) 54%, var(--readout-soft));
          font-family: var(--font-diagram), monospace;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.14em;
          line-height: 1.4;
          text-transform: uppercase;
          cursor: pointer;
          list-style: none;
          transition: color 150ms ease;
        }

        .readout-science summary:hover,
        .readout-science summary:focus-visible,
        .readout-science[open] summary {
          color: var(--readout-accent);
        }

        .readout-science summary::after {
          display: none !important;
        }

        .readout-science summary::-webkit-details-marker {
          display: none;
        }

        .readout-science-icon {
          display: inline-block;
          font-size: 10px;
          line-height: 1;
          transform: translateY(-1px);
          transition: transform 150ms ease;
        }

        .readout-science-icon {
          color: currentColor;
        }

        .readout-science[open] .readout-science-icon {
          transform: translateY(-1px) rotate(90deg);
        }

        .readout-description,
        .readout-science p {
          margin: 9px 0 0;
          padding: 0 0 0 12px;
          border-left: 2px solid var(--readout-detail-border);
          color: var(--readout-soft);
          font-size: 12px;
          line-height: 1.6;
        }

        .readout-description {
          font-size: 12.5px;
        }

        @media (max-width: 900px) {
          .readout-grid-desktop {
            display: none;
          }

          .readout-mobile-stack {
            display: block;
          }
        }

        @media (max-width: 720px) {
          .gradient-card {
            --gradient-sticky-offset: 66px;
          }

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

          .gradient-toolbar-copy {
            flex-direction: column;
            align-items: flex-start;
            gap: 7px;
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
            max-width: none;
            padding: 0;
            font-size: 12px;
            line-height: 1.55;
          }

          .sticky-autonomic-line {
            font-size: 11.5px;
            line-height: 1.4;
          }

          .gradient-track-shell {
            margin: 10px 18px 0;
            padding: 10px 0 12px;
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
            padding: calc(4px + var(--gradient-sticky-offset)) 18px 28px;
          }

          .state-configuration-title {
            gap: 10px;
            margin-bottom: 8px;
            align-items: flex-start;
          }

          .state-configuration-dot {
            width: 9px;
            height: 9px;
            margin-top: 7px;
            box-shadow: 0 0 0 4px color-mix(in srgb, var(--gradient-accent) 12%, transparent);
          }

          .state-configuration-name {
            font-size: clamp(22px, 7vw, 28px);
            overflow-wrap: anywhere;
          }

          .state-configuration-context {
            margin-bottom: 16px;
          }

          .state-mechanism {
            font-size: 13.5px;
            line-height: 1.55;
          }

          .state-reading {
            padding-bottom: 22px;
            font-size: 16px;
            line-height: 1.35;
          }

          .readout-group {
            padding: 24px 0 22px;
          }

          .readout-label {
            font-size: 15.5px;
          }

          .readout-value {
            font-size: 15.5px;
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

          .gradient-sticky.is-compact .gradient-toolbar-copy {
            flex-direction: row;
            align-items: center;
            gap: 8px;
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
            margin: 8px 12px 0;
            padding: 8px 0 9px;
          }

          .gradient-sticky.is-compact .gradient-track-row {
            gap: 8px !important;
          }

          .gradient-sticky.is-compact .gradient-bar-hitbox {
            padding: 7px 0 !important;
          }

          .gradient-sticky.is-compact .gradient-bar {
            height: 12px !important;
          }

          .gradient-sticky.is-compact .gradient-needle {
            width: 24px !important;
            height: 24px !important;
            border-width: 2px !important;
          }

          .gradient-sticky.is-compact .gradient-shutdown-track {
            gap: 8px !important;
          }

          .gradient-sticky.is-compact .gradient-shutdown-divider {
            height: 18px !important;
          }

          .gradient-sticky.is-compact .gradient-shutdown-button {
            padding: 7px 0 !important;
          }

          .gradient-sticky.is-compact .gradient-shutdown-pill {
            width: 34px !important;
            height: 12px !important;
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
