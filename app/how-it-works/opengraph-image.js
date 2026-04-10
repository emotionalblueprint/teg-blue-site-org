import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'How TEG-Blue Works — From established science to organized data to published research and tools'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'System Architecture',
    badgeColor: 'indigo',
    title: 'How TEG-Blue Works',
    subtitle: 'From 41 research traditions and 145+ theoretical contributions to consolidated root data to published research and tools. The pipeline that makes TEG-Blue traceable, auditable, and open.',
    url: 'teg-blue.org/how-it-works',
    needle: 0.125,
  })
}
