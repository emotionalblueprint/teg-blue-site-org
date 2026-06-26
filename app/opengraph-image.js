import { ImageResponse } from 'next/og'
import { OgImage, OG_SIZE } from '@/src/lib/og-template'
import { loadOgFonts } from '@/src/lib/og-fonts'

export const runtime = 'edge'

export const alt = "TEG-Blue — The Nervous System Gradient, a research-grounded map of nervous-system states"
export const size = OG_SIZE
export const contentType = 'image/png'

// Home / gradient hero card (OG Studio design). The generic sub-page cards still
// use src/lib/og-render.js; the per-page bespoke cards are untouched.
export default async function Image() {
  const fonts = await loadOgFonts()
  return new ImageResponse(
    OgImage({
      badge: 'TEG-Blue · The Emotional Gradient Blueprint',
      title: 'The Nervous System Gradient',
      subtitle: "The current public center of TEG-Blue: a research-grounded map of nervous-system states.",
      url: 'teg-blue.org',
      needle: 0.125,
    }),
    { ...OG_SIZE, fonts },
  )
}
