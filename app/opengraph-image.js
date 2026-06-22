import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = "The Emotional Gradient — a map of the nervous system's states, grounded in established science"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Acute Formation ramp (Baseline → Domination) + detached Shutdown — mirrors src/lib/gradient-data.js.
// The gradient lives in ONE place only (the bar); flat surface, opaque hard-ring marker (per DESIGN-HANDOFF).
const RAMP = ['#cce0ff', '#6eeafb', '#76faa1', '#b6fc50', '#e3fd54', '#f7d448']
const SHUT = '#a1adbf'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#0b1020',
          fontFamily: 'Inter, sans-serif',
          padding: '0 90px',
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#7f9bc9',
            marginBottom: 18,
          }}
        >
          The Emotional Gradient Blueprint
        </div>

        <div style={{ fontSize: 74, fontWeight: 800, color: '#ffffff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 20 }}>
          The Emotional Gradient
        </div>

        <div style={{ fontSize: 27, color: '#9fb0cc', lineHeight: 1.4, maxWidth: 940, marginBottom: 50 }}>
          A map of the nervous system’s states — grounded in established science.
        </div>

        {/* the single gradient — the signature bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              position: 'relative',
              flex: 1,
              height: 18,
              borderRadius: 9,
              background: `linear-gradient(90deg, ${RAMP.join(', ')})`,
              display: 'flex',
            }}
          >
            {/* marker at Connection — opaque hard ring, zero blur */}
            <div
              style={{
                position: 'absolute',
                left: '25%',
                top: -7,
                marginLeft: -16,
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: '#0b1020',
                border: '4px solid #e5f0ff',
                display: 'flex',
              }}
            />
          </div>
          {/* detached Shutdown — off the gradient */}
          <div style={{ width: 64, height: 18, borderRadius: 9, backgroundColor: SHUT, display: 'flex' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 42,
            left: 90,
            fontSize: 18,
            color: '#5f9bd8',
            fontFamily: 'monospace',
          }}
        >
          teg-blue.org
        </div>
      </div>
    ),
    { ...size },
  )
}
