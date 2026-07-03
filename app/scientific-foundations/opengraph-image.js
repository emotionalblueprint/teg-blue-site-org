import { ImageResponse } from 'next/og'
import { BLUE, SPECTRUM } from '@/src/styles/tokens'

export const runtime = 'edge'

export const alt = 'Scientific Grounding - Research areas and claim boundaries behind the TEG-Blue map'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

const AREAS = [
  { label: 'Biology', color: SPECTRUM.sky },
  { label: 'Physiology', color: SPECTRUM.azure },
  { label: 'Emotion', color: SPECTRUM.blue },
  { label: 'Psychology', color: SPECTRUM.cobalt },
  { label: 'Relationship', color: SPECTRUM.indigo },
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
            TEG-Blue Scientific Grounding
          </div>

          <div
            style={{
              fontSize: 54,
              fontWeight: 700,
              color: BLUE[50],
              marginBottom: 20,
              textAlign: 'center',
              lineHeight: 1.08,
            }}
          >
            Research areas and claim boundaries
          </div>

          <div
            style={{
              fontSize: 22,
              color: BLUE[100],
              textAlign: 'center',
              maxWidth: 840,
              lineHeight: 1.45,
              marginBottom: 34,
            }}
          >
            Fields support specific parts; TEG-Blue places the parts in relation.
          </div>

          <div
            style={{
              display: 'flex',
              gap: 10,
              alignItems: 'center',
            }}
          >
            {AREAS.map((area) => (
              <div
                key={area.label}
                style={{
                  padding: '11px 18px',
                  backgroundColor: `${area.color}1A`,
                  borderRadius: 8,
                  border: `1px solid ${area.color}40`,
                  color: BLUE[50],
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {area.label}
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
          teg-blue.org/scientific-foundations
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
