import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'TEG-Blue Overview — The Emotional Gradient Blueprint'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'TEG-Blue Overview',
    badgeColor: 'azure',
    title: 'TEG-Blue Overview',
    subtitle: 'The Blueprint · The Gradient · Pattern reading · Repair',
    url: 'teg-blue.org/foundations',
    needle: 0.125,
  })
}
