'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { FONT, TEXT, BORDER, RADIUS, TYPE_SCALE, hexToRgba } from '@/src/styles/tokens'

// ─── Four-Mode Gradient (canonical colors — matches .com) ────

const MODES = [
  { name: 'CONNECTION',  hex: '#93CFFF', center: 0.125, signal: 'Safety' },
  { name: 'PROTECTION',  hex: '#5BADFF', center: 0.375, signal: 'Threat' },
  { name: 'CONTROL',     hex: '#346AEC', center: 0.625, signal: 'Danger' },
  { name: 'DOMINATION',  hex: '#2563eb', center: 0.875, signal: 'Life peril' },
]

const BAR_GRADIENT = 'linear-gradient(90deg, #93CFFF 0%, #93CFFF 20%, #5BADFF 35%, #5BADFF 45%, #346AEC 55%, #346AEC 70%, #2563eb 85%, #2563eb 100%)'

function getActiveIdx(p) {
  if (p < 0.25) return 0
  if (p < 0.5) return 1
  if (p < 0.75) return 2
  return 3
}

export default function CompassBar({ showSpecs = true }) {
  const [pos, setPos] = useState(0.125)
  const [isStuck, setIsStuck] = useState(false)
  const barRef = useRef(null)
  const dragging = useRef(false)
  const activeIdx = getActiveIdx(pos)
  const activeMode = MODES[activeIdx]
  const stateDesc = isStuck ? 'chronic' : 'perceived'

  const handleMove = useCallback((clientX) => {
    if (!barRef.current) return
    const rect = barRef.current.getBoundingClientRect()
    let raw = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    for (const m of MODES) {
      if (Math.abs(raw - m.center) < 0.04) { raw = m.center; break }
    }
    setPos(raw)
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      if (dragging.current) handleMove(e.touches ? e.touches[0].clientX : e.clientX)
    }
    const onUp = () => { dragging.current = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [handleMove])

  const onDown = useCallback((e) => {
    dragging.current = true
    handleMove(e.touches ? e.touches[0].clientX : e.clientX)
  }, [handleMove])

  return (
    <div style={{ userSelect: 'none' }}>
      {/* Signal labels (top) */}
      <div style={{ display: 'flex', marginBottom: 6 }}>
        {MODES.map((m, i) => {
          const isActive = i === activeIdx
          return (
            <div key={`s${i}`} style={{
              flex: 1,
              textAlign: 'center',
              opacity: isActive ? 1 : 0.3,
              transition: 'opacity 200ms',
            }}>
              <div style={{
                fontFamily: FONT.mono,
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: isActive ? m.hex : TEXT.hint,
                transition: 'color 200ms',
              }}>
                {m.signal}
              </div>
              <div style={{
                fontFamily: FONT.mono,
                fontSize: 9,
                fontStyle: 'italic',
                letterSpacing: '0.04em',
                color: isActive ? hexToRgba(m.hex, 0.6) : TEXT.micro,
                transition: 'color 200ms',
              }}>
                {stateDesc}
              </div>
            </div>
          )
        })}
      </div>

      {/* Arrows ▼ */}
      <div style={{ display: 'flex', marginBottom: 4 }}>
        {MODES.map((m, i) => (
          <div key={`a${i}`} style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 9,
            opacity: i === activeIdx ? 0.7 : 0.1,
            color: i === activeIdx ? m.hex : TEXT.micro,
            transition: 'all 200ms',
          }}>
            {'\u25BC'}
          </div>
        ))}
      </div>

      {/* The gradient bar + needle */}
      <div
        ref={barRef}
        style={{ position: 'relative', height: 42, paddingTop: 7, cursor: 'pointer' }}
        onMouseDown={onDown}
        onTouchStart={onDown}
      >
        <div style={{
          height: 14,
          borderRadius: 100,
          background: BAR_GRADIENT,
          position: 'relative',
          overflow: 'visible',
          boxShadow: `0 0 20px ${hexToRgba(activeMode.hex, 0.3)}`,
        }}>
          {/* Mode boundary markers */}
          {[0.25, 0.5, 0.75].map(b => (
            <div key={b} style={{
              position: 'absolute',
              left: `${b * 100}%`,
              top: -1,
              bottom: -1,
              width: 1.5,
              background: 'rgba(0,0,0,0.45)',
              borderRadius: 1,
              transform: 'translateX(-50%)',
              boxShadow: '0 0 4px rgba(0,0,0,0.4)',
            }} />
          ))}
          {/* Mode center markers */}
          {MODES.map(m => (
            <div key={m.name} style={{
              position: 'absolute',
              left: `${m.center * 100}%`,
              top: '50%',
              width: 1,
              height: 6,
              background: 'rgba(255,255,255,0.12)',
              transform: 'translate(-50%, -50%)',
              borderRadius: 1,
            }} />
          ))}
          {/* Compass Needle */}
          <div style={{
            position: 'absolute',
            left: `${pos * 100}%`,
            top: '50%',
            width: 28,
            height: 28,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(255,255,255,0.8))',
            border: `3px solid ${activeMode.hex}`,
            boxShadow: `0 2px 8px rgba(0,0,0,0.4), 0 0 16px ${hexToRgba(activeMode.hex, 0.5)}`,
            cursor: 'grab',
            transition: 'border-color 200ms, box-shadow 200ms',
            zIndex: 10,
          }} />
        </div>
      </div>

      {/* Arrows ▲ */}
      <div style={{ display: 'flex', marginBottom: 4 }}>
        {MODES.map((m, i) => (
          <div key={`ab${i}`} style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 9,
            opacity: i === activeIdx ? 0.7 : 0.1,
            color: i === activeIdx ? m.hex : TEXT.micro,
            transition: 'all 200ms',
          }}>
            {'\u25B2'}
          </div>
        ))}
      </div>

      {/* Mode labels (bottom) */}
      <div style={{ display: 'flex' }}>
        {MODES.map((m, i) => {
          const isActive = i === activeIdx
          return (
            <div key={m.name} style={{
              flex: 1,
              textAlign: 'center',
              opacity: isActive ? 1 : 0.3,
              transition: 'opacity 200ms',
            }}>
              <div style={{
                fontFamily: FONT.mono,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: isActive ? m.hex : TEXT.hint,
                transition: 'color 200ms',
              }}>
                {m.name}
              </div>
              <div style={{
                fontFamily: FONT.mono,
                fontSize: 9,
                fontStyle: 'italic',
                letterSpacing: '0.04em',
                color: isActive ? hexToRgba(m.hex, 0.6) : TEXT.micro,
                transition: 'color 200ms',
              }}>
                MODE
              </div>
              {isActive && (
                <div style={{
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  background: m.hex,
                  boxShadow: `0 0 8px ${m.hex}`,
                  margin: '4px auto 0',
                }} />
              )}
            </div>
          )
        })}
      </div>

      {/* Fluid / Stuck toggle */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <button
          onClick={() => setIsStuck(!isStuck)}
          style={{
            fontFamily: FONT.mono,
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: isStuck ? hexToRgba('#2563eb', 0.8) : hexToRgba('#93CFFF', 0.8),
            background: isStuck ? hexToRgba('#2563eb', 0.08) : hexToRgba('#93CFFF', 0.08),
            border: `1px solid ${isStuck ? hexToRgba('#2563eb', 0.25) : hexToRgba('#93CFFF', 0.25)}`,
            borderRadius: RADIUS.sm,
            padding: '4px 12px',
            cursor: 'pointer',
            transition: 'all 200ms',
          }}
        >
          {isStuck ? 'Stuck Compass' : 'Fluid Compass'}
        </button>
      </div>

      {/* Specs */}
      {showSpecs && <div style={{
        marginTop: 20,
        padding: '12px 16px',
        background: hexToRgba('#93CFFF', 0.04),
        border: `1px solid ${BORDER.default}`,
        borderRadius: RADIUS.md,
      }}>
        <div style={{
          fontFamily: FONT.mono,
          fontSize: TYPE_SCALE.tagLabel.size,
          fontWeight: TYPE_SCALE.tagLabel.weight,
          letterSpacing: TYPE_SCALE.tagLabel.tracking,
          color: TEXT.muted,
          textTransform: 'uppercase',
          marginBottom: 8,
        }}>
          Specs
        </div>
        {[
          ['Bar', '14px height, rounded-full, 4-color gradient'],
          ['Needle', '28px circle, white, 3px colored border, glow'],
          ['Modes', 'Connection #93CFFF · Protection #5BADFF · Control #346AEC · Domination #2563eb'],
          ['Signals', 'Safety · Threat · Danger · Life peril'],
          ['Fluid', 'All signals show "perceived" — temporary, returnable'],
          ['Stuck', 'All signals show "chronic" — fixed position, lost mobility'],
          ['Snap', '4% magnet radius at each mode center (12.5%, 37.5%, 62.5%, 87.5%)'],
          ['Dividers', '1.5px at 25%, 50%, 75% — rgba(0,0,0,0.45)'],
        ].map(([label, value]) => (
          <div key={label} style={{ display: 'flex', gap: 12, marginBottom: 4 }}>
            <span style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.micro.size,
              color: TEXT.hint,
              letterSpacing: TYPE_SCALE.micro.tracking,
              minWidth: 60,
              flexShrink: 0,
            }}>
              {label}
            </span>
            <span style={{
              fontFamily: FONT.mono,
              fontSize: TYPE_SCALE.micro.size,
              color: TEXT.muted,
              letterSpacing: TYPE_SCALE.micro.tracking,
            }}>
              {value}
            </span>
          </div>
        ))}
      </div>}
    </div>
  )
}
