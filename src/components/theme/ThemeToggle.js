'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { BG, TEXT, BORDER, TRANSITION } from '../../styles/tokens'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 6,
          background: BG.surface,
        }}
      />
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      style={{
        width: 36,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        background: BG.surface,
        border: `1px solid ${BORDER.default}`,
        cursor: 'pointer',
        transition: `all ${TRANSITION.normal}`,
        color: TEXT.secondary,
        padding: 0,
      }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <Sun size={18} strokeWidth={1.7} /> : <Moon size={18} strokeWidth={1.7} />}
    </button>
  )
}
