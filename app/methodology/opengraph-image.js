import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Methodology - TEG-Blue Research Methods'
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
            Methodology
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
            Transparent research methods and validation approaches
          </div>

          {/* Method steps */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 20px',
                backgroundColor: 'rgba(122, 186, 235, 0.1)',
                borderRadius: 8,
                border: '1px solid rgba(122, 186, 235, 0.2)',
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 600, color: '#7ABAEB' }}>1</div>
              <div style={{ fontSize: 14, color: '#8892a6' }}>Architecture Design</div>
            </div>
            <div style={{ color: '#4A9BE8', fontSize: 20 }}>→</div>
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
              <div style={{ fontSize: 16, fontWeight: 600, color: '#4A9BE8' }}>2</div>
              <div style={{ fontSize: 14, color: '#8892a6' }}>Literature Mapping</div>
            </div>
            <div style={{ color: '#4A9BE8', fontSize: 20 }}>→</div>
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
              <div style={{ fontSize: 16, fontWeight: 600, color: '#3B7DE5' }}>3</div>
              <div style={{ fontSize: 14, color: '#8892a6' }}>Empirical Validation</div>
            </div>
          </div>

          <div
            style={{
              marginTop: 28,
              padding: '12px 24px',
              backgroundColor: 'rgba(74, 155, 232, 0.08)',
              borderRadius: 8,
              border: '1px solid rgba(74, 155, 232, 0.15)',
              fontSize: 14,
              color: '#6B7A99',
            }}
          >
            AI-assisted literature mapping · Human-verified connections · Open science
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
          teg-blue.org/methodology
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
