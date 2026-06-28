'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { FONT, TEXT, BORDER, RADIUS, TYPE_SCALE, hexToRgba } from '@/src/styles/tokens'

const MODES = [
  { name: 'Connection',  hex: '#93CFFF', center: 0.125, signal: 'Safety',     conditionShort: 'CONNECTION' },
  { name: 'Protection',  hex: '#5BADFF', center: 0.375, signal: 'Threat',     conditionShort: 'PROTECTION' },
  { name: 'Control / Management', hex: '#346AEC', center: 0.625, signal: 'Danger',     conditionShort: 'CONTROL / MANAGEMENT' },
  { name: 'Domination',  hex: '#2563eb', center: 0.875, signal: 'Life peril', conditionShort: 'DOMINATION' },
]

const BAR_GRADIENT = 'linear-gradient(90deg, #93CFFF 0%, #93CFFF 20%, #5BADFF 35%, #5BADFF 45%, #346AEC 55%, #346AEC 70%, #2563eb 85%, #2563eb 100%)'

const SNAP_RADIUS = 0.04

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
  const toggleHex = isStuck ? MODES[3].hex : MODES[0].hex

  const handleMove = useCallback((clientX) => {
    if (!barRef.current) return
    const rect = barRef.current.getBoundingClientRect()
    let raw = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    for (const m of MODES) {
      if (Math.abs(raw - m.center) < SNAP_RADIUS) { raw = m.center; break }
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

      {/* State + mode labels (bottom) */}
      <div style={{ display: 'flex', marginTop: 6 }}>
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
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: isActive ? m.hex : TEXT.hint,
                transition: 'color 200ms',
              }}>
                {m.conditionShort}
              </div>
              <div style={{
                fontFamily: FONT.mono,
                fontSize: 8,
                fontWeight: 500,
                letterSpacing: '0.06em',
                color: isActive ? hexToRgba(m.hex, 0.6) : TEXT.micro,
                transition: 'color 200ms',
                marginTop: 2,
              }}>
                {m.name}
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

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <button
          onClick={() => setIsStuck(!isStuck)}
          style={{
            fontFamily: FONT.mono,
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: hexToRgba(toggleHex, 0.8),
            background: hexToRgba(toggleHex, 0.08),
            border: `1px solid ${hexToRgba(toggleHex, 0.25)}`,
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
        background: hexToRgba(MODES[0].hex, 0.04),
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
          ['States', 'Connection · Protection · Control / Management · Domination'],
          ['Modes', 'Connection #93CFFF · Protection #5BADFF · Control / Management #346AEC · Domination #2563eb'],
          ['Fluid', 'Temporary activation — returnable'],
          ['Stuck', 'Chronic — fixed position, lost mobility'],
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
