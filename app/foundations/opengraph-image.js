import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'How to Read the Nervous System Gradient — TEG-Blue'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'Reading guide',
    badgeColor: 'azure',
    title: 'How to Read the Gradient',
    subtitle: 'Modes · States · Positions · Patterns over time',
    url: 'teg-blue.org/foundations',
    needle: 0.125,
  })
}
