import { ImageResponse } from 'next/og'
import { BLUE, SPECTRUM } from '@/src/styles/tokens'

export const runtime = 'edge'

export const alt = 'Methodology - How to read visible patterns responsibly'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

const STEPS = [
  { number: '1', label: 'Observation', color: SPECTRUM.sky },
  { number: '2', label: 'Pattern', color: SPECTRUM.azure },
  { number: '3', label: 'Impact', color: SPECTRUM.blue },
  { number: '4', label: 'Claim Status', color: SPECTRUM.indigo },
]

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
          backgroundColor: BLUE[950],
          fontFamily: 'Inter, sans-serif',
        }}
      >
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
          <div style={{ flex: 1, backgroundColor: SPECTRUM.sky }} />
          <div style={{ flex: 1, backgroundColor: SPECTRUM.azure }} />
          <div style={{ flex: 1, backgroundColor: SPECTRUM.blue }} />
          <div style={{ flex: 1, backgroundColor: SPECTRUM.cobalt }} />
          <div style={{ flex: 1, backgroundColor: SPECTRUM.indigo }} />
          <div style={{ flex: 1, backgroundColor: SPECTRUM.slate }} />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 64px',
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: SPECTRUM.azure,
              marginBottom: 16,
              textTransform: 'uppercase',
            }}
          >
            TEG-Blue Methodology
          </div>

          <div
            style={{
              fontSize: 54,
              fontWeight: 700,
              color: BLUE[50],
              marginBottom: 20,
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            How to read patterns responsibly
          </div>

          <div
            style={{
              fontSize: 22,
              color: BLUE[100],
              textAlign: 'center',
              maxWidth: 830,
              lineHeight: 1.45,
              marginBottom: 34,
            }}
          >
            Keep observation, pattern, impact, and claim status separate.
          </div>

          <div
            style={{
              display: 'flex',
              gap: 10,
              alignItems: 'center',
            }}
          >
            {STEPS.map((step) => (
              <div
                key={step.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 18px',
                  backgroundColor: `${step.color}1A`,
                  borderRadius: 8,
                  border: `1px solid ${step.color}40`,
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 700, color: step.color }}>{step.number}</div>
                <div style={{ fontSize: 14, color: BLUE[50] }}>{step.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 16,
            color: SPECTRUM.azure,
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
