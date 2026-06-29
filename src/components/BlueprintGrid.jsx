'use client'

import { useState, useEffect } from 'react'

const gridSizes = {
  xs: 24,
  sm: 40,
  md: 60,
  lg: 80,
  xl: 120,
}

const fadeMasks = {
  center: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 0%, transparent 70%)',
  top: 'linear-gradient(to bottom, black 0%, black 30%, transparent 80%)',
  edges: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)',
  subtle: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, rgba(0,0,0,0.3) 100%)',
  none: 'none',
}

const darkColors = {
  line: 'rgba(255,255,255,0.10)',
  dot: 'rgba(255,255,255,0.16)',
}

const lightColors = {
  line: 'rgba(0,82,204,0.10)',
  dot: 'rgba(0,82,204,0.18)',
}

export default function BlueprintGrid({
  size = 'lg',
  opacity = 0.45,
  fade = 'center',
  tint = null,
  fixed = true,
  dots = true,
}) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const check = () => {
      setIsDark(document.documentElement.getAttribute('data-theme') !== 'light')
    }
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  const gridSize = gridSizes[size] || gridSizes.lg
  const maskImage = fadeMasks[fade] || fadeMasks.center
  const { line: lineColor, dot: dotColor } = isDark ? darkColors : lightColors

  const layers = [
    `linear-gradient(${lineColor} 1px, transparent 1px)`,
    `linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
  ]
  if (dots) {
    layers.push(`radial-gradient(circle 1.5px at 0 0, ${dotColor} 0%, transparent 100%)`)
  }

  return (
    <div
      style={{
        position: fixed ? 'fixed' : 'absolute',
        inset: 0,
        backgroundImage: layers.join(', '),
        backgroundSize: `${gridSize}px ${gridSize}px`,
        opacity: opacity,
        pointerEvents: 'none',
        maskImage: maskImage,
        WebkitMaskImage: maskImage,
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {tint && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: tint,
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  )
}
