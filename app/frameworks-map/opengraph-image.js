import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'The 12 Frameworks - TEG-Blue Theoretical Architecture'
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
            TEG-Blue Architecture
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
            The 12 Frameworks
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
            Explanatory architecture connecting 139+ theories
          </div>

          {/* Framework phases */}
          <div
            style={{
              display: 'flex',
              gap: 20,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px 24px',
                backgroundColor: 'rgba(122, 186, 235, 0.1)',
                borderRadius: 8,
                border: '1px solid rgba(122, 186, 235, 0.2)',
              }}
            >
              <div style={{ fontSize: 13, color: '#7ABAEB', marginBottom: 4 }}>Formation</div>
              <div style={{ fontSize: 20, fontWeight: 600, color: '#fff' }}>F1-F3</div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px 24px',
                backgroundColor: 'rgba(74, 155, 232, 0.1)',
                borderRadius: 8,
                border: '1px solid rgba(74, 155, 232, 0.2)',
              }}
            >
              <div style={{ fontSize: 13, color: '#4A9BE8', marginBottom: 4 }}>Scaling</div>
              <div style={{ fontSize: 20, fontWeight: 600, color: '#fff' }}>F4-F6</div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px 24px',
                backgroundColor: 'rgba(59, 125, 229, 0.1)',
                borderRadius: 8,
                border: '1px solid rgba(59, 125, 229, 0.2)',
              }}
            >
              <div style={{ fontSize: 13, color: '#3B7DE5', marginBottom: 4 }}>Turning Point</div>
              <div style={{ fontSize: 20, fontWeight: 600, color: '#fff' }}>F7</div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px 24px',
                backgroundColor: 'rgba(53, 96, 204, 0.1)',
                borderRadius: 8,
                border: '1px solid rgba(53, 96, 204, 0.2)',
              }}
            >
              <div style={{ fontSize: 13, color: '#3560CC', marginBottom: 4 }}>Healing</div>
              <div style={{ fontSize: 20, fontWeight: 600, color: '#fff' }}>F8-F10</div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px 24px',
                backgroundColor: 'rgba(74, 80, 176, 0.1)',
                borderRadius: 8,
                border: '1px solid rgba(74, 80, 176, 0.2)',
              }}
            >
              <div style={{ fontSize: 13, color: '#4A50B0', marginBottom: 4 }}>Integration</div>
              <div style={{ fontSize: 20, fontWeight: 600, color: '#fff' }}>F11-F12</div>
            </div>
          </div>

          <div
            style={{
              fontSize: 14,
              color: '#6B7A99',
            }}
          >
            From individual formation to social scaling to healing pathways
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
          teg-blue.org/frameworks-map
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
