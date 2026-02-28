import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Scientific Foundations - TEG-Blue Research Platform'
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
            TEG-Blue Research
          </div>

          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: 20,
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            Scientific Foundations
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
            How TEG-Blue builds on and extends established emotional science
          </div>

          {/* Models grid */}
          <div
            style={{
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap',
              justifyContent: 'center',
              maxWidth: 900,
            }}
          >
            {['Plutchik', 'NVC', 'CBT', 'Attachment', 'Polyvagal', 'IFS'].map((model, i) => (
              <div
                key={model}
                style={{
                  padding: '10px 18px',
                  backgroundColor: `rgba(74, 155, 232, ${0.08 + i * 0.02})`,
                  borderRadius: 6,
                  border: '1px solid rgba(74, 155, 232, 0.2)',
                  fontSize: 14,
                  color: '#8892a6',
                }}
              >
                {model}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 15,
              color: '#4A9BE8',
              textAlign: 'center',
            }}
          >
            Comparing 10+ established models with TEG-Blue integration
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
          teg-blue.org/scientific-foundations
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
