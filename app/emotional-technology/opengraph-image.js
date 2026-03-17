import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'What Is Emotional Technology? — Architecture, wiring, infrastructure, precision'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'Concept',
    badgeColor: 'indigo',
    title: 'What Is Emotional Technology?',
    subtitle: 'Architecture \u00b7 Wiring \u00b7 Infrastructure \u00b7 Precision like physical technology',
    url: 'teg-blue.org/emotional-technology',
    needle: 0.125,
  })
}
