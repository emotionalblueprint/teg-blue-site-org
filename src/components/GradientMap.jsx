'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { positions } from '../lib/gradient-data'
import { TEXT, BORDER, ACCENT, BLUE, RADIUS, hexToRgba } from '../styles/tokens'

// Position hues are tuned bright for a dark surface; on a light surface we darken
// them (cap lightness) so structural lines and labels remain legible.
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
const positionById = Object.fromEntries(positions.map((position) => [position.id, position]))
const baseline = positionById.baseline
const shutdown = positionById.shutdown
const activePositions = ['connection', 'calibration', 'protection', 'strategic', 'domination'].map(
  (id) => positionById[id],
)

const regionFor = {
  connection: 'Available safety',
  calibration: 'Safety–defence threshold',
  protection: 'Defensive organisation',
  strategic: 'Defensive organisation',
  domination: 'Defensive organisation',
}

function PositionCard({ position, isLight, kind = 'active' }) {
  const isBaseline = position.id === 'baseline'
  const color = isBaseline ? (isLight ? BLUE[600] : BLUE[100]) : (isLight ? swatch(position.acuteColor) : position.acuteColor)

  return (
    <article
      className={`topology-card topology-card-${kind}`}
      style={{
        '--position-color': color,
        '--position-wash': hexToRgba(color, kind === 'shutdown' ? 0.12 : 0.06),
        '--position-border': hexToRgba(color, kind === 'shutdown' ? 0.38 : 0.28),
      }}
    >
      {kind === 'active' && <p className="topology-card-region">{regionFor[position.id]}</p>}
      <div className="topology-card-heading">
        <span className="topology-code">{position.code}</span>
        <span className="topology-dot" aria-hidden="true" />
        <h3>{position.mode}</h3>
      </div>
      <p className="topology-state-line">{position.atlasLabel} · {position.reality}</p>
      <p className="topology-mechanism">{position.mechanism}</p>
      <p className="topology-chronic">
        <strong style={{ color: WARM }}>Chronic</strong> — {position.mechanismChronic}
      </p>
    </article>
  )
}

export default function GradientMap({ sectionStyle, cardStyle, eyebrowStyle }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isLight = mounted && resolvedTheme === 'light'
  const shutdownColor = isLight ? swatch(shutdown.acuteColor) : shutdown.acuteColor

  return (
    <section style={sectionStyle} aria-labelledby="positions-heading">
      <div style={cardStyle}>
        <p style={eyebrowStyle}>The map</p>
        <h2 id="positions-heading" className="topology-title">
          Seven positions, three organising regions
        </h2>
        <p className="topology-intro">
          The positions are related, but they are not seven equal steps on one line. Baseline is the restorative
          ground, the active Gradient runs from Connection through Power Mobilisation, and Shutdown is a
          capacity-exceeded fallback that may become accessible from the threat positions.
        </p>

        <div className="topology-map">
          <section className="topology-region" aria-labelledby="restorative-region-heading">
            <div className="topology-region-heading">
              <p id="restorative-region-heading">Restorative ground</p>
              <span>Mobilisation is available without defence already organising the system.</span>
            </div>
            <div className="topology-baseline-row">
              <PositionCard position={baseline} isLight={isLight} kind="baseline" />
            </div>
            <div className="topology-connection-bridge" aria-hidden="true">
              <span />
              <p>through settled safety and connection</p>
              <span />
            </div>
          </section>

          <section className="topology-region topology-active-region" aria-labelledby="active-region-heading">
            <div className="topology-region-heading">
              <p id="active-region-heading">Active Gradient</p>
              <span>Orientation moves from connection toward increasing defensive organisation.</span>
            </div>
            <div className="topology-band-labels" aria-hidden="true">
              <span>Available safety</span>
              <span>Threshold</span>
              <span>Increasing defensive organisation</span>
            </div>
            <div className="topology-active-track">
              {activePositions.map((position, index) => (
                <div className="topology-active-node" key={position.id}>
                  <PositionCard position={position} isLight={isLight} />
                  {index < activePositions.length - 1 && <span className="topology-track-arrow" aria-hidden="true">→</span>}
                </div>
              ))}
            </div>
          </section>

          <section className="topology-region topology-shutdown-region" aria-labelledby="shutdown-region-heading">
            <div
              className="topology-fallback-network"
              aria-hidden="true"
              style={{ '--shutdown-line': hexToRgba(shutdownColor, 0.52) }}
            >
              <span className="topology-entry topology-entry-protection" />
              <span className="topology-entry topology-entry-strategic" />
              <span className="topology-entry topology-entry-power" />
              <span className="topology-shared-rail" />
              <span className="topology-shutdown-drop" />
            </div>
            <div className="topology-region-heading topology-shutdown-heading">
              <p id="shutdown-region-heading">Capacity-exceeded fallback</p>
              <span>Shutdown may be reached from Protection, Strategic Management, or Power Mobilisation.</span>
            </div>
            <div className="topology-shutdown-row">
              <PositionCard position={shutdown} isLight={isLight} kind="shutdown" />
            </div>
          </section>
        </div>
      </div>

      <style>{`
        .topology-title {
          margin: 0 0 8px;
          color: ${TEXT.primary};
          font-size: clamp(26px, 3vw, 32px);
          line-height: 1.12;
          letter-spacing: 0;
        }

        .topology-intro {
          max-width: 800px;
          margin: 0 0 28px;
          color: ${TEXT.secondary};
          font-size: 15px;
          line-height: 1.7;
        }

        .topology-map {
          display: grid;
          gap: 0;
        }

        .topology-region-heading {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 12px;
        }

        .topology-region-heading p {
          margin: 0;
          color: ${TEXT.primary};
          font-family: var(--font-diagram, monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .topology-region-heading span {
          max-width: 650px;
          color: ${TEXT.muted};
          font-size: 12px;
          line-height: 1.5;
          text-align: right;
        }

        .topology-baseline-row,
        .topology-shutdown-row {
          display: flex;
          justify-content: center;
        }

        .topology-baseline-row .topology-card,
        .topology-shutdown-row .topology-card {
          width: min(100%, 480px);
        }

        .topology-connection-bridge {
          display: grid;
          justify-items: center;
          min-height: 74px;
          color: ${TEXT.muted};
        }

        .topology-connection-bridge span {
          height: 18px;
          border-left: 1px dashed ${BORDER.default};
        }

        .topology-connection-bridge p {
          margin: 4px 0;
          font-family: var(--font-diagram, monospace);
          font-size: 10px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .topology-active-region {
          padding-top: 2px;
        }

        .topology-band-labels {
          display: grid;
          grid-template-columns: 1fr 1fr 3fr;
          gap: 10px;
          margin-bottom: 8px;
          color: ${TEXT.hint};
          font-family: var(--font-diagram, monospace);
          font-size: 9px;
          letter-spacing: 0.04em;
          text-align: center;
          text-transform: uppercase;
        }

        .topology-band-labels span {
          padding: 7px 8px;
          border-top: 1px solid ${BORDER.default};
        }

        .topology-active-track {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
        }

        .topology-active-node {
          position: relative;
          min-width: 0;
        }

        .topology-track-arrow {
          position: absolute;
          z-index: 2;
          top: 58px;
          right: -12px;
          width: 12px;
          color: ${TEXT.hint};
          font-family: var(--font-diagram, monospace);
          font-size: 13px;
          text-align: center;
        }

        .topology-card {
          box-sizing: border-box;
          height: 100%;
          padding: 14px;
          border: 1px solid var(--position-border);
          border-left: 3px solid var(--position-color);
          border-radius: ${RADIUS.lg}px;
          background: var(--position-wash);
        }

        .topology-card-shutdown {
          border-style: dashed;
          border-left-style: solid;
        }

        .topology-card-region {
          min-height: 22px;
          margin: 0 0 8px;
          color: ${TEXT.hint};
          font-family: var(--font-diagram, monospace);
          font-size: 9px;
          font-weight: 650;
          line-height: 1.35;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .topology-card-heading {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }

        .topology-card-heading h3 {
          min-width: 0;
          margin: 0;
          color: ${TEXT.primary};
          font-size: 14px;
          font-weight: 650;
          line-height: 1.25;
        }

        .topology-code {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          min-width: 34px;
          padding: 3px 6px;
          border: 1px solid var(--position-border);
          border-radius: ${RADIUS.sm}px;
          color: var(--position-color);
          font-family: var(--font-diagram, monospace);
          font-size: 10px;
          font-weight: 700;
        }

        .topology-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--position-color);
        }

        .topology-state-line {
          margin: 9px 0 0;
          color: ${TEXT.muted};
          font-family: var(--font-diagram, monospace);
          font-size: 10px;
          line-height: 1.45;
          letter-spacing: 0;
        }

        .topology-mechanism,
        .topology-chronic {
          color: ${TEXT.secondary};
          line-height: 1.55;
        }

        .topology-mechanism {
          margin: 8px 0 0;
          font-size: 13.5px;
        }

        .topology-chronic {
          margin: 6px 0 0;
          font-size: 12.5px;
        }

        .topology-fallback-network {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          grid-template-rows: 30px 28px;
          gap: 0 12px;
        }

        .topology-entry {
          grid-row: 1;
          justify-self: center;
          height: 30px;
          border-left: 1px dashed var(--shutdown-line);
        }

        .topology-entry-protection { grid-column: 3; }
        .topology-entry-strategic { grid-column: 4; }
        .topology-entry-power { grid-column: 5; }

        .topology-shared-rail {
          grid-column: 3 / 6;
          grid-row: 2;
          align-self: start;
          border-top: 1px dashed var(--shutdown-line);
        }

        .topology-shutdown-drop {
          grid-column: 4;
          grid-row: 2;
          justify-self: center;
          height: 28px;
          border-left: 1px dashed var(--shutdown-line);
        }

        .topology-shutdown-heading {
          margin-top: 2px;
        }

        @media (max-width: 900px) {
          .topology-active-track {
            grid-template-columns: 1fr;
          }

          .topology-active-node {
            display: grid;
            grid-template-columns: 1fr;
          }

          .topology-track-arrow {
            position: static;
            width: auto;
            padding: 4px 0;
            transform: rotate(90deg);
          }

          .topology-band-labels,
          .topology-fallback-network {
            display: none;
          }

          .topology-card-region {
            min-height: 0;
          }

          .topology-shutdown-region {
            margin-top: 30px;
            padding-top: 24px;
            border-top: 1px dashed ${BORDER.default};
          }
        }

        @media (max-width: 620px) {
          .topology-region-heading {
            display: block;
          }

          .topology-region-heading span {
            display: block;
            margin-top: 5px;
            text-align: left;
          }

          .topology-intro {
            margin-bottom: 24px;
          }

          .topology-card {
            padding: 13px;
          }

          .topology-connection-bridge p {
            max-width: 220px;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}
