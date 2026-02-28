import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'TEG-Blue Research Platform - Open Science for Emotional Regulation'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

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
          fontFamily: 'Inter, system-ui',
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
            TEG-Blue
          </div>

          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: 16,
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            Research Platform
          </div>

          <div
            style={{
              fontSize: 24,
              color: '#8892a6',
              textAlign: 'center',
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Open science publishing for emotional regulation research
          </div>

          <div
            style={{
              marginTop: 40,
              display: 'flex',
              gap: 24,
              fontSize: 14,
              color: '#4A9BE8',
            }}
          >
            <span>Publications</span>
            <span style={{ color: '#3B7DE5' }}>·</span>
            <span>Foundations</span>
            <span style={{ color: '#3B7DE5' }}>·</span>
            <span>Methodology</span>
            <span style={{ color: '#3B7DE5' }}>·</span>
            <span>Glossary</span>
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
          teg-blue.org
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
