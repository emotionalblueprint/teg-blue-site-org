import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'AI Safety Applications — TEG-Blue Emotional Technology'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Mode colors from the Nervous System Gradient
const MODES = {
  connection: '#14b8a6',
  protection: '#eab308',
  control: '#f97316',
  domination: '#ec4899',
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0f1a',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Spectrum bar at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            display: 'flex',
          }}
        >
          <div style={{ flex: 1, backgroundColor: '#7ABAEB' }} />
          <div style={{ flex: 1, backgroundColor: '#4A9BE8' }} />
          <div style={{ flex: 1, backgroundColor: '#3B7DE5' }} />
          <div style={{ flex: 1, backgroundColor: '#3560CC' }} />
          <div style={{ flex: 1, backgroundColor: '#4A50B0' }} />
          <div style={{ flex: 1, backgroundColor: '#6B7A99' }} />
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 60px',
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: '#6B7A99',
              marginBottom: 16,
              textTransform: 'uppercase',
            }}
          >
            TEG-Blue · AI Safety
          </div>

          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: 20,
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            AI Safety Applications
          </div>

          <div
            style={{
              fontSize: 22,
              color: '#8892a6',
              textAlign: 'center',
              maxWidth: 800,
              lineHeight: 1.5,
              marginBottom: 32,
            }}
          >
            Structured emotional intelligence infrastructure for safer AI systems
          </div>

          {/* Nervous System Gradient strip */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                backgroundColor: 'rgba(20, 184, 166, 0.1)',
                borderRadius: 8,
                border: '1px solid rgba(20, 184, 166, 0.25)',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: MODES.connection }} />
              <div style={{ fontSize: 14, color: MODES.connection }}>Connection</div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                backgroundColor: 'rgba(234, 179, 8, 0.1)',
                borderRadius: 8,
                border: '1px solid rgba(234, 179, 8, 0.25)',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: MODES.protection }} />
              <div style={{ fontSize: 14, color: MODES.protection }}>Protection</div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                borderRadius: 8,
                border: '1px solid rgba(249, 115, 22, 0.25)',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: MODES.control }} />
              <div style={{ fontSize: 14, color: MODES.control }}>Control</div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                backgroundColor: 'rgba(236, 72, 153, 0.1)',
                borderRadius: 8,
                border: '1px solid rgba(236, 72, 153, 0.25)',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: MODES.domination }} />
              <div style={{ fontSize: 14, color: MODES.domination }}>Domination</div>
            </div>
          </div>

          <div
            style={{
              fontSize: 14,
              color: '#6B7A99',
            }}
          >
            TEG-Code · EMLU Benchmark · Nervous System Gradient
          </div>
        </div>

        {/* URL at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 16,
            color: '#4A9BE8',
            fontFamily: 'monospace',
          }}
        >
          teg-blue.org/ai-safety
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
