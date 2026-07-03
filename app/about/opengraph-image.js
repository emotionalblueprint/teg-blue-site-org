import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'About TEG-Blue — The Emotional Gradient Blueprint'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'About',
    badgeColor: 'azure',
    title: 'About TEG-Blue',
    subtitle: 'The project, creator, ecosystem boundaries, and research stance',
    url: 'teg-blue.org/about',
    needle: 0.125,
  })
}
