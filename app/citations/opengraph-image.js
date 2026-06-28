import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'How to Cite TEG-Blue - citation, attribution, and reuse guidance'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'Citations',
    badgeColor: 'azure',
    title: 'How to Cite TEG-Blue',
    subtitle: 'Cite the Nervous System Gradient, cite specific publications, and preserve creator and license attribution.',
    url: 'teg-blue.org/citations',
    needle: 0.125,
  })
}
