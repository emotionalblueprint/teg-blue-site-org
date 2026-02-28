import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'For Researchers - TEG-Blue Open Science Platform'
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
              fontSize: 52,
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: 20,
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            For Researchers
          </div>

          <div
            style={{
              fontSize: 22,
              color: '#8892a6',
              textAlign: 'center',
              maxWidth: 800,
              lineHeight: 1.5,
              marginBottom: 36,
            }}
          >
            Open science platform connecting 139+ theories into testable propositions
          </div>

          {/* Research questions highlight */}
          <div
            style={{
              display: 'flex',
              gap: 24,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 20px',
                backgroundColor: 'rgba(74, 155, 232, 0.1)',
                borderRadius: 8,
                border: '1px solid rgba(74, 155, 232, 0.2)',
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#4A9BE8',
                }}
              >
                5
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: '#8892a6',
                }}
              >
                Open Questions
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 20px',
                backgroundColor: 'rgba(59, 125, 229, 0.1)',
                borderRadius: 8,
                border: '1px solid rgba(59, 125, 229, 0.2)',
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#3B7DE5',
                }}
              >
                12
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: '#8892a6',
                }}
              >
                Frameworks
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 20px',
                backgroundColor: 'rgba(53, 96, 204, 0.1)',
                borderRadius: 8,
                border: '1px solid rgba(53, 96, 204, 0.2)',
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#3560CC',
                }}
              >
                139+
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: '#8892a6',
                }}
              >
                Source Theories
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: 15,
              color: '#6B7A99',
              textAlign: 'center',
            }}
          >
            The building blocks are validated. The connections need verification.
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
          teg-blue.org/research-entry
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
