import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'How TEG-Blue Works - Gradient, Engine, tools, and research questions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'How It Works',
    badgeColor: 'indigo',
    title: 'How TEG-Blue Works',
    subtitle: 'The Nervous System Gradient is the map. The TEG-Blue Engine is the logic. Tools are the public interfaces generated from that logic.',
    url: 'teg-blue.org/how-it-works',
    needle: 0.125,
  })
}
