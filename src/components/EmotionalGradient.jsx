'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import {
  BG,
  TEXT,
  BORDER,
  FONT,
  ACCENT,
  BLUE,
  hexToRgba,
} from '../styles/tokens'
import { positions, cards, content, autonomic } from '../lib/gradient-data'

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
const CHRONIC_TOGGLE_TONE = positions.find((position) => position.id === 'protection')?.chronicColor || WARM
const N = positions.length
const SHUT = N - 1
const GRAD = positions.slice(0, SHUT)
const cardById = Object.fromEntries(cards.map((c) => [c.id, c]))
const HOME_READOUT_IDS = ['perception', 'time', 'emotions', 'empathy', 'repair']
const EXTENDED_TRACK = GRAD.map((position, index) => ({
  id: position.id,
  positionIndex: index,
  code: position.code,
  mode: position.mode,
  atlasLabel: position.atlasLabel,
  readout: 'auto',
}))
const SHUTDOWN_ITEM = {
  id: positions[SHUT].id,
  positionIndex: SHUT,
  code: positions[SHUT].code,
  mode: positions[SHUT].mode,
  atlasLabel: positions[SHUT].atlasLabel,
  readout: 'auto',
}
const THREAT_START_INDEX = EXTENDED_TRACK.findIndex((item) => item.id === 'protection')
const SHUTDOWN_ENTRY_ITEMS = EXTENDED_TRACK.slice(THREAT_START_INDEX)

export default function EmotionalGradient() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [posIndex, setPosIndex] = useState(1) // default: Connection / Belonging
  const [chronic, setChronic] = useState(false)
  const [selectedReadoutId, setSelectedReadoutId] = useState(HOME_READOUT_IDS[0])
  const barRef = useRef(null)
  const dragging = useRef(false)

  useEffect(() => setMounted(true), [])

  const trackItems = EXTENDED_TRACK
  const trackCount = trackItems.length
  const activeTrackIndex = Math.min(posIndex, trackCount - 1)
  const selectedItem = posIndex === SHUT ? SHUTDOWN_ITEM : EXTENDED_TRACK[posIndex]
  const position = positions[selectedItem.positionIndex]
  const itemUsesChronic = (item) => item.readout === 'chronic' || (item.readout === 'auto' && chronic)
  const readingChronic = itemUsesChronic(selectedItem)
  const isShutdown = selectedItem.positionIndex === SHUT
  const colorForItem = (item) => {
    const itemPosition = positions[item.positionIndex]
    return itemUsesChronic(item) ? itemPosition.chronicColor : itemPosition.acuteColor
  }
  const colorOf = (i) => (chronic ? positions[i].chronicColor : positions[i].acuteColor)
  const accent = colorForItem(selectedItem)

  const isDark = mounted ? resolvedTheme !== 'light' : true
  const panelLight = !isDark
  const isAcuteBaseline = position.id === 'baseline' && !readingChronic
  const restingText = panelLight ? '#002966' : '#e5f0ff'
  const restingDot = panelLight ? '#0052CC' : '#cce0ff'
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
  // tile = the simplified capacity readout
  const tileCDot = isAcuteBaseline ? restingDot : (tileLight ? swatch(accent) : accent)
  const tileCText = isAcuteBaseline ? restingText : (tileLight ? ink(accent) : accent)
  const tile = {
    ink: tileLight ? '#001433' : '#f1f5f9',
    soft: tileLight ? 'rgba(0,41,102,0.66)' : 'rgba(241,245,249,0.6)',
    cText: tileCText,
    cDot: tileCDot,
    divider: hexToRgba(tileCDot, tileLight ? 0.16 : 0.14),
  }

  const labelColor = (i) => {
    const item = trackItems[i]
    const itemPosition = positions[item.positionIndex]
    const selectedAcuteBaseline = itemPosition.id === 'baseline' && !itemUsesChronic(item)
    if (selectedAcuteBaseline) return restingText
    return panelLight ? ink(colorForItem(item)) : colorForItem(item)
  }
  const barStop = (i) => {
    const color = colorForItem(trackItems[i])
    return panelLight ? swatch(color) : color
  }
  const shutColor = panelLight ? swatch(colorOf(SHUT)) : colorOf(SHUT)
  const barGradient = `linear-gradient(90deg, ${barStop(0)} 0%, ${trackItems.map(
    (_, i) => `${barStop(i)} ${(((i + 0.5) / trackCount) * 100).toFixed(2)}%`,
  ).join(', ')}, ${barStop(trackCount - 1)} 100%)`
  const gradientTypeLabel = readingChronic ? 'Rigid Gradient' : 'Fluid Gradient'
  const gradientDescription = readingChronic
    ? 'Pattern is held; chronic pressure keeps it active.'
    : 'State is moving; capacity shifts with conditions.'

  function setTrackIndex(index) {
    setPosIndex(index)
  }

  function moveTrackIndex(delta) {
    setPosIndex((i) => {
      if (i === SHUT) return trackCount - 1
      return Math.max(0, Math.min(i + delta, trackCount - 1))
    })
  }

  function setFromClientX(clientX) {
    const el = barRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const raw = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    setTrackIndex(Math.min(Math.floor(raw * trackCount), trackCount - 1))
  }
  function onTrackKey(e) {
    if (e.target.closest?.('.readout-row')) return
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      moveTrackIndex(1)
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      moveTrackIndex(-1)
    }
  }
  const readoutText = (id) => {
    const reading = content[id][position.id]
    return selectedItem.readoutOverrides?.[id] || (readingChronic ? reading.c : reading.a)
  }
  const stateText = readoutText('state')
  const familiarLabel = selectedItem.familiar ?? (readingChronic && position.familiarChronic ? position.familiarChronic : position.familiar)
  const nervousSystemBranch = selectedItem.autonomic ?? autonomic[position.id]
  const selectedReadoutCard = cardById[selectedReadoutId]
  const selectedReadoutText = readoutText(selectedReadoutId)
  const selectedReadoutDescription =
    selectedItem.descriptionOverrides?.[selectedReadoutId] ||
    selectedReadoutCard.descriptions?.[position.id]?.[readingChronic ? 'c' : 'a'] ||
    selectedReadoutText ||
    selectedReadoutCard.description
  const selectedScienceText =
    selectedReadoutCard.scienceGrounding?.[position.id]?.[readingChronic ? 'c' : 'a'] ||
    selectedReadoutCard.science

  const renderRow = (id) => {
    const card = cardById[id]
    const text = readoutText(id)
    const selected = selectedReadoutId === id
    return (
      <button
        key={id}
        type="button"
        className={selected ? 'readout-row is-selected' : 'readout-row'}
        aria-pressed={selected}
        aria-controls="gradient-readout-detail"
        onClick={() => setSelectedReadoutId(id)}
      >
        <span className="readout-label">{card.label}</span>
        <span className="readout-value">{text}</span>
      </button>
    )
  }

  return (
    <section
      className="gradient-card"
      tabIndex={0}
      onKeyDown={onTrackKey}
      aria-label="The Nervous System Gradient"
      style={{
        overflow: 'visible',
        borderRadius: 8,
        outline: 'none',
        background: BG.diagram,
        border: `1px solid ${BORDER.default}`,
        fontFamily: FONT.display,
        boxShadow: 'none',
        '--gradient-sticky-bg': BG.diagram,
        '--gradient-line': panel.line,
        '--gradient-accent': panel.cDot,
        '--gradient-accent-text': panel.cText,
        '--readout-ink': tile.ink,
        '--readout-soft': tile.soft,
        '--readout-accent': tile.cText,
        '--readout-dot': tile.cDot,
        '--readout-line': tile.divider,
      }}
    >
      <div className="gradient-sticky">
        {/* state ribbon — current position and mode controls */}
        <div className="gradient-toolbar">
          <div className="gradient-toolbar-copy">
            <div className="gradient-type-lockup">
              <p className="gradient-type-label">{gradientTypeLabel}</p>
              <p className="mode-caption">{gradientDescription}</p>
            </div>
          </div>
          <div className="gradient-toolbar-controls">
            <div className="chronic-toggle-slot">
              <ChronicToggle chronic={chronic} onChange={setChronic} />
            </div>
          </div>
        </div>

        {/* active Gradient + capacity-exceeded fallback rail */}
        <div className="gradient-track-shell">
        <div className="gradient-track-row">
          <div
            className="gradient-bar-hitbox"
            style={{ position: 'relative', cursor: 'pointer', userSelect: 'none', padding: '12px 0', touchAction: 'none' }}
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
            <div ref={barRef} className="gradient-bar" style={{ position: 'relative', height: 14, borderRadius: 999, background: barGradient, boxShadow: panelLight ? 'inset 0 0 0 1px rgba(0,0,0,0.06)' : 'none' }}>
              {Array.from({ length: trackCount - 1 }, (_, i) => (
                <div key={i} style={{ position: 'absolute', top: 0, bottom: 0, width: readingChronic ? 2 : 1, transform: 'translateX(-50%)', left: `${((i + 1) / trackCount) * 100}%`, background: readingChronic ? (panelLight ? 'rgba(255,255,255,0.72)' : 'rgba(10,13,20,0.42)') : (panelLight ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.3)') }} />
              ))}
              {trackItems.map((item, i) => itemUsesChronic(item) && (
                <div
                  key={`fixed-${i}`}
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: `${((i + 0.5) / trackCount) * 100}%`,
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
                    left: `${((activeTrackIndex + 0.5) / trackCount) * 100}%`,
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
        </div>

        <div
          className="gradient-shutdown-network"
          style={{
            '--shutdown-start': `${(THREAT_START_INDEX / trackCount) * 100}%`,
            '--shutdown-width': `${(SHUTDOWN_ENTRY_ITEMS.length / trackCount) * 100}%`,
            '--shutdown-color': shutColor,
            '--shutdown-line': hexToRgba(shutColor, panelLight ? 0.42 : 0.5),
            '--shutdown-fill': hexToRgba(shutColor, isShutdown ? (panelLight ? 0.32 : 0.4) : (panelLight ? 0.12 : 0.16)),
            '--shutdown-label': isShutdown ? (panelLight ? ink(colorOf(SHUT)) : colorOf(SHUT)) : panel.faint,
          }}
        >
          <button
            type="button"
            className={isShutdown ? 'gradient-shutdown-button is-active' : 'gradient-shutdown-button'}
            onClick={() => setPosIndex(SHUT)}
            aria-label="Shutdown — capacity-exceeded fallback from Protection, Strategic Management, or Power Mobilisation"
            aria-pressed={isShutdown}
          >
            <span className="gradient-shutdown-stems" aria-hidden="true">
              {SHUTDOWN_ENTRY_ITEMS.map((item, index) => (
                <span
                  key={item.id}
                  className="gradient-shutdown-stem"
                  style={{ left: `${((index + 0.5) / SHUTDOWN_ENTRY_ITEMS.length) * 100}%` }}
                />
              ))}
            </span>
            <span className="gradient-shutdown-rail" aria-hidden="true" />
            <span className="gradient-shutdown-copy">
              <strong>{positions[SHUT].code} · Shutdown</strong>
              <span>Capacity-exceeded fallback from {SHUTDOWN_ENTRY_ITEMS.map((item) => item.code).join(' · ')}</span>
            </span>
          </button>
        </div>

        <div
          className="gradient-bar-name"
          style={{
            '--gradient-bar-name-color': panel.cText,
            '--gradient-bar-name-bg': hexToRgba(panel.cDot, panelLight ? 0.1 : 0.14),
            '--gradient-bar-name-border': hexToRgba(panel.cDot, panelLight ? 0.34 : 0.4),
          }}
        >
          <span className="gradient-bar-name-code">{selectedItem.code}</span>
          <span className="gradient-bar-name-label">{selectedItem.atlasLabel}</span>
        </div>

        {/* labels */}
        <div className="gradient-track-labels" style={{ display: 'flex', marginTop: 10 }}>
          <div style={{ display: 'flex', flex: 1 }}>
            {trackItems.map((item, i) => {
              const itemColor = colorForItem(item)
              const selected = i === activeTrackIndex && !isShutdown
              return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTrackIndex(i)}
                aria-label={`${item.code}: ${item.mode}`}
                title={`${item.code}: ${item.mode}`}
                className={selected ? 'gradient-label-button is-active' : 'gradient-label-button'}
                style={{
                  flex: 1,
                  minHeight: 38,
                  padding: '5px 4px',
                  textAlign: 'center',
                  background: selected ? hexToRgba(itemColor, panelLight ? 0.08 : 0.12) : 'transparent',
                  border: `1px solid ${selected ? hexToRgba(itemColor, panelLight ? 0.24 : 0.28) : 'transparent'}`,
                  borderRadius: 8,
                  cursor: 'pointer',
                  color: selected ? labelColor(i) : panel.faint,
                }}
              >
              <span className="gradient-track-code" style={{ display: 'block', fontFamily: FONT.diagram, fontSize: 10, lineHeight: 1.2, fontWeight: selected ? 700 : 500, letterSpacing: 0 }}>{item.code}</span>
                <span className="gradient-track-label" style={{ display: 'block', marginTop: 3, fontSize: 10, lineHeight: 1.2, fontWeight: selected ? 700 : 500, fontFamily: FONT.display }}>{item.mode}</span>
              </button>
              )
            })}
          </div>
        </div>
      </div>
      </div>

      {/* selected position */}
      <div className="selected-state">
        {/* configuration readout */}
        <div className="state-readout">
          <div className="state-configuration-title">
            <span className="state-configuration-dot" aria-hidden="true" />
            <h2 className="state-configuration-name">{selectedItem.mode}</h2>
          </div>
          <div className="state-configuration-context">
            {familiarLabel && (
              <p className="state-alias">
                also known as <span>{familiarLabel}</span>
              </p>
            )}
            {nervousSystemBranch && (
              <p className="state-ns-branch">
                Autonomic pathway <span>{nervousSystemBranch}</span>
              </p>
            )}
            <div className="state-source-trace">
              <span>{selectedItem.pattern || position.pattern} · {selectedItem.sub || position.sub}</span>
            </div>
            <p className="state-mechanism">
              {selectedItem.mechanism || (readingChronic ? position.mechanismChronic : position.mechanism)}
            </p>
          </div>
          <p className="state-reading">{stateText}</p>

          <div className="readout-list">
            {HOME_READOUT_IDS.map(renderRow)}
          </div>
          <div id="gradient-readout-detail" className="readout-detail">
            <div className="readout-detail-header">
              <span className="readout-detail-label">{selectedReadoutCard.label}</span>
              <span className="readout-detail-value">{selectedReadoutText}</span>
            </div>
            <div className="readout-detail-grid">
              <div className="readout-detail-block">
                <span className="readout-detail-kicker">{selectedReadoutCard.label} in this pattern</span>
                <p>{selectedReadoutDescription}</p>
              </div>
              <div className="readout-detail-block">
                <span className="readout-detail-kicker">Grounding science</span>
                <p>{selectedScienceText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .gradient-card {
          position: relative;
          isolation: isolate;
        }

        .gradient-sticky {
          position: relative;
          z-index: 30;
          border-radius: 8px 8px 0 0;
          border-bottom: 1px solid var(--gradient-line);
          background: var(--gradient-sticky-bg);
          box-shadow: none;
          transition: border-radius 180ms ease, box-shadow 180ms ease, margin-bottom 180ms ease;
        }

        .gradient-toolbar {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: start;
          justify-content: space-between;
          gap: 18px;
          padding: 16px 20px 0;
        }

        .gradient-toolbar-copy {
          display: flex;
          flex: 1 1 auto;
          min-width: 0;
          flex-direction: column;
          align-items: flex-start;
          gap: 7px;
        }

        .gradient-toolbar-controls {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: flex-end;
          gap: 26px;
        }

        .chronic-toggle-slot {
          display: flex;
          justify-content: flex-end;
        }

        .gradient-type-lockup {
          display: flex;
          min-width: 0;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
        }

        .gradient-type-label {
          margin: 0;
          color: var(--gradient-accent-text);
          font-family: var(--font-diagram), monospace;
          font-size: 12px;
          font-weight: 760;
          letter-spacing: 0;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .mode-caption {
          margin: 0;
          max-width: 720px;
          color: var(--readout-soft);
          font-size: 12px;
          line-height: 1.6;
        }

        .gradient-track-shell {
          position: relative;
          margin: 12px 20px 0;
          padding: 12px 0 12px;
          border-top: 1px solid color-mix(in srgb, var(--gradient-accent) 18%, transparent);
        }

        .gradient-track-row {
          display: block;
        }

        .gradient-shutdown-network {
          width: 100%;
        }

        .gradient-shutdown-button {
          display: block;
          width: var(--shutdown-width);
          margin: 0 0 0 var(--shutdown-start);
          padding: 0 0 4px;
          border: 0;
          background: transparent;
          color: var(--shutdown-label);
          cursor: pointer;
          font-family: inherit;
          text-align: left;
        }

        .gradient-shutdown-stems {
          position: relative;
          display: block;
          height: 12px;
        }

        .gradient-shutdown-stem {
          position: absolute;
          top: 0;
          height: 12px;
          border-left: 1px dashed var(--shutdown-line);
          transform: translateX(-50%);
        }

        .gradient-shutdown-rail {
          display: block;
          box-sizing: border-box;
          width: 100%;
          height: 9px;
          border: 1px solid var(--shutdown-line);
          border-radius: 999px;
          background: var(--shutdown-fill);
          transition:
            background-color 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .gradient-shutdown-button:hover .gradient-shutdown-rail,
        .gradient-shutdown-button:focus-visible .gradient-shutdown-rail,
        .gradient-shutdown-button.is-active .gradient-shutdown-rail {
          box-shadow: 0 0 0 2px color-mix(in srgb, var(--shutdown-color) 18%, transparent);
        }

        .gradient-shutdown-button:focus-visible {
          outline: none;
        }

        .gradient-shutdown-copy {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 12px;
          margin-top: 6px;
          line-height: 1.35;
        }

        .gradient-shutdown-copy strong {
          flex: 0 0 auto;
          color: var(--shutdown-label);
          font-family: var(--font-diagram), monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        .gradient-shutdown-copy span {
          color: var(--readout-soft);
          font-size: 10.5px;
          text-align: right;
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
          padding: 24px 20px 28px;
        }

        .state-readout {
          margin-top: 0;
        }

        .state-configuration-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 8px;
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
          font-size: 28px;
          font-weight: 760;
          letter-spacing: 0;
          line-height: 1.12;
        }

        .state-configuration-context {
          display: grid;
          gap: 5px;
          max-width: 720px;
          margin: 0 0 16px;
        }

        .state-alias {
          margin: 0;
          color: var(--readout-soft);
          font-size: 12.5px;
          line-height: 1.45;
        }

        .state-alias span {
          color: var(--gradient-accent-text);
          font-weight: 650;
        }

        .state-ns-branch {
          margin: 0;
          color: var(--readout-ink);
          font-size: 12.5px;
          line-height: 1.45;
        }

        .state-ns-branch span {
          color: var(--gradient-accent-text);
          font-weight: 650;
        }

        .state-source-trace {
          display: block;
          color: var(--readout-soft);
          font-family: var(--font-diagram), monospace;
          font-size: 10.5px;
          letter-spacing: 0;
          line-height: 1.45;
          opacity: 0.82;
        }

        .state-mechanism {
          margin: 2px 0 0;
          max-width: 680px;
          padding-left: 10px;
          border-left: 2px solid color-mix(in srgb, var(--gradient-accent) 28%, transparent);
          color: var(--readout-ink);
          font-size: 13.5px;
          line-height: 1.6;
        }

        .state-reading {
          margin: 0;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--readout-line);
          color: var(--readout-ink);
          font-size: 22px;
          font-weight: 620;
          line-height: 1.3;
          letter-spacing: 0;
        }

        .readout-list {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0;
          border-bottom: 1px solid var(--readout-line);
        }

        .readout-row {
          appearance: none;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          min-width: 0;
          padding: 16px 14px 13px;
          border: 0;
          border-left: 1px solid var(--readout-line);
          border-radius: 0;
          background: transparent;
          color: inherit;
          cursor: pointer;
          font: inherit;
          text-align: left;
          transition:
            background-color 150ms ease,
            box-shadow 150ms ease,
            color 150ms ease;
        }

        .readout-row:first-child {
          padding-left: 0;
          border-left: 0;
        }

        .readout-row:hover,
        .readout-row:focus-visible {
          color: var(--readout-accent);
        }

        .readout-row.is-selected {
          box-shadow: inset 0 -2px 0 var(--readout-dot);
        }

        .readout-row:focus-visible {
          outline: 1px solid color-mix(in srgb, var(--readout-dot) 45%, transparent);
          outline-offset: 3px;
        }

        .readout-label {
          display: block;
          min-width: 0;
          margin-bottom: 6px;
          color: var(--readout-accent);
          font-family: var(--font-diagram), monospace;
          font-size: 10px;
          font-weight: 650;
          letter-spacing: 0;
          line-height: 1.25;
          text-transform: uppercase;
        }

        .readout-value {
          display: block;
          margin: 0;
          color: var(--readout-ink);
          font-size: 13.5px;
          font-weight: 740;
          line-height: 1.5;
        }

        .readout-row.is-selected .readout-value {
          color: var(--readout-accent);
        }

        .readout-detail {
          margin-top: 18px;
          padding-top: 18px;
          border-top: 1px solid var(--readout-line);
          background: transparent;
        }

        .readout-detail-header {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 8px 12px;
          margin-bottom: 14px;
        }

        .readout-detail-label {
          color: var(--readout-accent);
          font-size: 15.5px;
          font-weight: 720;
          line-height: 1.25;
        }

        .readout-detail-value {
          color: var(--readout-ink);
          font-size: 13.5px;
          font-weight: 620;
          line-height: 1.4;
        }

        .readout-detail-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
          gap: 22px;
        }

        .readout-detail-kicker {
          display: block;
          margin-bottom: 6px;
          color: var(--readout-accent);
          font-family: var(--font-diagram), monospace;
          font-size: 9px;
          font-weight: 650;
          letter-spacing: 0;
          line-height: 1.35;
          text-transform: uppercase;
        }

        .readout-detail-block p {
          margin: 0;
          color: var(--readout-soft);
          font-size: 13.5px;
          line-height: 1.62;
        }

        @media (max-width: 720px) {
          .gradient-toolbar {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            align-items: start;
            padding: 12px 18px 0;
            gap: 8px;
          }

          .gradient-toolbar-copy {
            flex-direction: column;
            align-items: flex-start;
            gap: 7px;
          }

          .gradient-toolbar-controls {
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 10px;
          }

          .chronic-toggle-slot {
            min-width: 0;
            justify-content: flex-start;
          }

          .mode-caption {
            max-width: none;
            padding: 0;
            font-size: 12px;
            line-height: 1.55;
          }

          .gradient-track-shell {
            margin: 10px 18px 0;
            padding: 10px 0 12px;
          }

          .gradient-shutdown-copy {
            display: block;
            margin-top: 6px;
          }

          .gradient-shutdown-copy span {
            display: block;
            margin-top: 3px;
            text-align: left;
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
            letter-spacing: 0;
            line-height: 1;
          }

          .gradient-bar-name-label {
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .selected-state {
            padding: 22px 16px 26px;
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
            font-size: 24px;
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
            padding-bottom: 20px;
            font-size: 16px;
            line-height: 1.35;
          }

          .readout-list {
            grid-template-columns: 1fr;
          }

          .readout-row {
            padding: 13px 0;
            border-left: 0;
            border-top: 1px solid var(--readout-line);
            border-radius: 0;
          }

          .readout-row.is-selected {
            box-shadow: inset 3px 0 0 var(--readout-dot);
          }

          .readout-label {
            margin-bottom: 5px;
            font-size: 10px;
          }

          .readout-value {
            font-size: 15px;
          }

          .readout-detail {
            margin-top: 12px;
            padding-top: 14px;
          }

          .readout-detail-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .readout-detail-label {
            font-size: 15px;
          }

          .gradient-track-label {
            display: none !important;
          }

          .gradient-track-code {
            font-size: 11px !important;
          }

        }
      `}</style>
    </section>
  )
}

function ChronicToggle({ chronic, onChange }) {
  return (
    <button
      type="button"
      className="chronic-toggle"
      onClick={() => onChange(!chronic)}
      role="switch"
      aria-checked={chronic}
      aria-label="Chronic Survival View"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        minHeight: 46,
        borderRadius: 999,
        border: `1px solid ${hexToRgba(CHRONIC_TOGGLE_TONE, chronic ? 0.64 : 0.42)}`,
        background: hexToRgba(CHRONIC_TOGGLE_TONE, chronic ? 0.2 : 0.1),
        padding: '5px 10px 5px 16px',
        fontSize: 13,
        fontFamily: FONT.display,
        lineHeight: 1.2,
        cursor: 'pointer',
        color: CHRONIC_TOGGLE_TONE,
        boxShadow: chronic ? `0 0 0 3px ${hexToRgba(CHRONIC_TOGGLE_TONE, 0.1)}` : 'none',
      }}
    >
      <span style={{ fontWeight: chronic ? 720 : 650, whiteSpace: 'nowrap' }}>Chronic Survival View</span>
      <span aria-hidden="true" style={{ position: 'relative', height: 22, width: 38, borderRadius: 999, flex: '0 0 auto', background: chronic ? CHRONIC_TOGGLE_TONE : hexToRgba(CHRONIC_TOGGLE_TONE, 0.28), transition: 'background 200ms' }}>
        <span style={{ position: 'absolute', top: 4, left: chronic ? 20 : 4, height: 14, width: 14, borderRadius: '50%', background: BG.primary, boxShadow: `0 1px 2px ${hexToRgba(BLUE[950], 0.2)}`, transition: 'left 200ms' }} />
      </span>
    </button>
  )
}
