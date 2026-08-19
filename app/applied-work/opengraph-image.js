import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'Applied work with TEG-Blue — build for a particular human question'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'Applied work',
    badgeColor: 'indigo',
    title: 'Build for a Human Question',
    subtitle: 'Audience · Evidence · Experience · Safety and rights',
    url: 'teg-blue.org/applied-work',
    needle: 0.62,
  })
}
