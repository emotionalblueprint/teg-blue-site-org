'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { BLUE, BG, TEXT, BORDER, FONT, ACCENT, RADIUS, hexToRgba } from '../styles/tokens'
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
const N = positions.length
const SHUT = N - 1
const GRAD = positions.slice(0, SHUT)
const cardById = Object.fromEntries(cards.map((c) => [c.id, c]))
const HOME_READOUT_IDS = ['perception', 'cognition', 'time', 'selfAwareness', 'empathy']
const VERSION_FOUR = 'four'
const VERSION_EXTENDED = 'extended'
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
const FOUR_MODE_TRACK = [
  {
    id: 'acute-connection',
    positionIndex: 1,
    code: 'A',
    mode: 'Acute Connection',
    atlasLabel: 'Connection / Belonging',
    readout: 'acute',
    pattern: 'State A · acute',
    sub: 'safety → reciprocity',
    mechanism: positions[1].mechanism,
    familiar: positions[1].familiar,
    autonomic: autonomic.connection,
  },
  {
    id: 'chronic-defence',
    positionIndex: 3,
    code: 'A↔B + B',
    mode: 'Chronic Defence',
    atlasLabel: 'Safety Checking + Protection',
    readout: 'chronic',
    pattern: 'States A↔B + B · chronic',
    sub: 'safety question unresolved + mobilisation held',
    mechanism: `${positions[2].mechanismChronic}. ${positions[3].mechanismChronic}.`,
    familiar: 'safety checking · fight / flight / fawn',
    autonomic: 'parasympathetic → sympathetic / sympathetic',
  },
  {
    id: 'chronic-control',
    positionIndex: 4,
    code: 'C',
    mode: 'Chronic Control',
    atlasLabel: 'Control / Management',
    readout: 'chronic',
    pattern: 'State C · chronic',
    sub: positions[4].sub,
    mechanism: positions[4].mechanismChronic,
    familiar: positions[4].familiar,
    autonomic: autonomic.strategic,
  },
  {
    id: 'chronic-domination',
    positionIndex: 5,
    code: 'D',
    mode: 'Chronic Domination',
    atlasLabel: 'Domination',
    readout: 'chronic',
    pattern: 'State D · chronic',
    sub: positions[5].sub,
    mechanism: positions[5].mechanismChronic,
    familiar: positions[5].familiarChronic || positions[5].familiar,
    autonomic: autonomic.domination,
  },
]

function fourModeIndexForExtended(positionIndex) {
  if (positionIndex <= 1) return 0
  if (positionIndex <= 3) return 1
  if (positionIndex === 4) return 2
  return 3
}

function Badge({ color, light, children }) {
  const dot = light ? swatch(color) : color
  const txt = light ? ink(color) : color
  return (
    <span
      className="state-pill"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        maxWidth: '100%',
        gap: 8,
        padding: '6px 12px',
        borderRadius: RADIUS.md,
        background: hexToRgba(dot, 0.12),
        border: `1px solid ${hexToRgba(dot, 0.3)}`,
      }}
    >
      <span className="state-pill-dot" style={{ width: 10, height: 10, borderRadius: '50%', flexShrink: 0, background: dot }} />
      <span className="state-pill-text" style={{ minWidth: 0, fontFamily: FONT.mono, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0, lineHeight: 1.2, color: txt }}>
        {children}
      </span>
    </span>
  )
}

export default function EmotionalGradient() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [gradientVersion, setGradientVersion] = useState(VERSION_EXTENDED)
  const [posIndex, setPosIndex] = useState(1) // default: Connection / Belonging
  const [fourModeIndex, setFourModeIndex] = useState(0)
  const [chronic, setChronic] = useState(false)
  const [selectedReadoutId, setSelectedReadoutId] = useState(HOME_READOUT_IDS[0])
  const barRef = useRef(null)
  const dragging = useRef(false)

  useEffect(() => setMounted(true), [])

  const isFourMode = gradientVersion === VERSION_FOUR
  const trackItems = isFourMode ? FOUR_MODE_TRACK : EXTENDED_TRACK
  const trackCount = trackItems.length
  const activeTrackIndex = isFourMode ? fourModeIndex : Math.min(posIndex, trackCount - 1)
  const selectedItem = isFourMode
    ? FOUR_MODE_TRACK[fourModeIndex]
    : (posIndex === SHUT ? SHUTDOWN_ITEM : EXTENDED_TRACK[posIndex])
  const position = positions[selectedItem.positionIndex]
  const itemUsesChronic = (item) => item.readout === 'chronic' || (item.readout === 'auto' && chronic)
  const readingChronic = itemUsesChronic(selectedItem)
  const isShutdown = !isFourMode && selectedItem.positionIndex === SHUT
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
  const barStop = (i) => (panelLight ? swatch(colorForItem(trackItems[i])) : colorForItem(trackItems[i]))
  const shutColor = panelLight ? swatch(colorOf(SHUT)) : colorOf(SHUT)
  const barGradient = `linear-gradient(90deg, ${barStop(0)} 0%, ${trackItems.map(
    (_, i) => `${barStop(i)} ${(((i + 0.5) / trackCount) * 100).toFixed(2)}%`,
  ).join(', ')}, ${barStop(trackCount - 1)} 100%)`
  const barBg = barGradient
  const modeCaption = isFourMode
    ? '4-Mode Gradient — the same readout simplified to Acute Connection, then Chronic Defence, Chronic Control, and Chronic Domination.'
    : chronic
    ? 'Chronic — the gradient has become rigid: the nervous system gets stuck in protective patterns, reacting from threat even when the present moment is safe.'
    : 'Fluid — the nervous system can move flexibly between safety, threat, and rest, depending on what is happening around it.'
  const gradientBadgeLabel = isFourMode
    ? `4-Mode Gradient · ${selectedItem.mode}`
    : `${chronic ? 'Rigid Gradient' : 'Fluid Gradient'} · ${chronic ? 'Chronic' : 'Acute'} ${position.code} State`

  function setTrackIndex(index) {
    if (isFourMode) setFourModeIndex(index)
    else setPosIndex(index)
  }

  function moveTrackIndex(delta) {
    if (isFourMode) {
      setFourModeIndex((i) => Math.max(0, Math.min(i + delta, FOUR_MODE_TRACK.length - 1)))
    } else {
      setPosIndex((i) => Math.max(0, Math.min(i + delta, N - 1)))
    }
  }

  function toggleGradientVersion() {
    if (isFourMode) {
      setPosIndex(selectedItem.positionIndex)
      setChronic(selectedItem.readout === 'chronic')
      setGradientVersion(VERSION_EXTENDED)
    } else {
      setFourModeIndex(fourModeIndexForExtended(posIndex))
      setGradientVersion(VERSION_FOUR)
    }
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
  const selectedReadoutCard = cardById[selectedReadoutId]
  const selectedReadoutText = readoutText(selectedReadoutId)
  const selectedReadoutDescription =
    selectedItem.descriptionOverrides?.[selectedReadoutId] ||
    selectedReadoutCard.descriptions?.[position.id]?.[readingChronic ? 'c' : 'a'] ||
    selectedReadoutCard.description

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
      aria-label={isFourMode ? 'The Nervous System Gradient, 4-mode view' : 'The Nervous System Gradient, extended view'}
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
            <div className="sticky-state-title">
              <Badge color={readingChronic ? WARM : (isAcuteBaseline ? panel.cDot : accent)} light={panelLight}>{gradientBadgeLabel}</Badge>
            </div>
            <p className="mode-caption">{modeCaption}</p>
          </div>
          <div className="gradient-toolbar-controls">
            <VersionToggle extended={!isFourMode} onClick={toggleGradientVersion} />
            {!isFourMode && <ChronicToggle chronic={chronic} onChange={setChronic} />}
          </div>
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

          {!isFourMode && <div className="gradient-shutdown-track" style={{ display: 'flex', flexShrink: 0, alignItems: 'center', gap: 12, alignSelf: 'center' }}>
            <div className="gradient-shutdown-divider" style={{ height: 20, borderLeft: `1px dashed ${panel.line}` }} />
            <button type="button" className="gradient-shutdown-button" onClick={() => setPosIndex(SHUT)} aria-label="Shutdown — off-gradient" style={{ padding: '12px 0', background: 'transparent', border: 'none', cursor: 'pointer' }}>
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
          </div>}
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
        <div className="gradient-track-labels" style={{ display: 'flex', gap: 12, marginTop: 10 }}>
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
          {!isFourMode && <div style={{ display: 'flex', flexShrink: 0, alignItems: 'center', gap: 12 }}>
            <div style={{ height: 20, borderLeft: '1px solid transparent' }} />
            <button
              type="button"
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
              <span className="gradient-track-code" style={{ display: 'block', fontFamily: FONT.diagram, fontSize: 10, lineHeight: 1.2, fontWeight: isShutdown ? 700 : 500, letterSpacing: 0 }}>{positions[SHUT].code}</span>
              <span className="gradient-track-label" style={{ display: 'block', marginTop: 3, fontSize: 10, lineHeight: 1.2, fontWeight: isShutdown ? 700 : 500, fontFamily: FONT.display }}>Shutdown</span>
            </button>
          </div>}
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
            <p className="state-autonomic-line">
              autonomic state — <span>{selectedItem.autonomic || autonomic[position.id]}</span>
            </p>
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
                <span className="readout-detail-kicker">What this means</span>
                <p>{selectedReadoutDescription}</p>
              </div>
              <div className="readout-detail-block">
                <span className="readout-detail-kicker">Grounding science</span>
                <p>{selectedReadoutCard.science}</p>
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
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 16px 20px 0;
        }

        .gradient-toolbar-copy {
          display: flex;
          flex: 1 1 auto;
          min-width: 0;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px 14px;
        }

        .gradient-toolbar-controls {
          display: flex;
          flex: 0 0 auto;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
        }

        .version-toggle {
          appearance: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 30px;
          border: 1px solid color-mix(in srgb, var(--gradient-accent) 28%, var(--gradient-line));
          border-radius: 999px;
          background: color-mix(in srgb, var(--gradient-accent) 8%, transparent);
          color: var(--gradient-accent-text);
          cursor: pointer;
          font: inherit;
          font-size: 12px;
          font-weight: 650;
          line-height: 1.2;
          padding: 6px 12px;
          transition:
            background-color 160ms ease,
            border-color 160ms ease,
            color 160ms ease;
        }

        .version-toggle:hover {
          background: color-mix(in srgb, var(--gradient-accent) 13%, transparent);
          border-color: color-mix(in srgb, var(--gradient-accent) 42%, var(--gradient-line));
        }

        .version-toggle:focus-visible {
          outline: 1px solid color-mix(in srgb, var(--gradient-accent) 42%, transparent);
          outline-offset: 3px;
        }

        .sticky-state-title {
          display: flex;
          min-width: 0;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px 10px;
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
          font-size: clamp(20px, 2.5vw, 28px);
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

        .state-autonomic-line {
          margin: 0;
          color: var(--readout-soft);
          font-size: 12.5px;
          line-height: 1.45;
        }

        .state-autonomic-line span {
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
          font-size: clamp(17px, 2vw, 22px);
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
            letter-spacing: 0 !important;
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

function VersionToggle({ extended, onClick }) {
  return (
    <button
      type="button"
      className="version-toggle"
      onClick={onClick}
      aria-pressed={extended}
    >
      {extended ? 'Back to 4-Mode Gradient' : 'Full 7-Mode Gradient'}
    </button>
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
