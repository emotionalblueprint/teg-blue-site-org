import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'TEG-Blue Publications - Research & Validation Studies'
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
            TEG-Blue Research
          </div>

          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: 20,
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            Publications
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
            Validation studies, research papers, and open datasets
          </div>

          {/* Featured study highlight */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '16px 24px',
              backgroundColor: 'rgba(74, 155, 232, 0.1)',
              borderRadius: 12,
              border: '1px solid rgba(74, 155, 232, 0.2)',
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#4A9BE8',
              }}
            />
            <div
              style={{
                fontSize: 16,
                color: '#4A9BE8',
              }}
            >
              Nervous System Gradient validated on 10,000+ conflict narratives
            </div>
          </div>

          <div
            style={{
              marginTop: 24,
              fontSize: 13,
              color: '#6B7A99',
              fontFamily: 'monospace',
            }}
          >
            DOI: 10.5281/zenodo.18428907
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
          teg-blue.org/publications
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
