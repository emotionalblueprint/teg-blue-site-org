import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'The TEG-Blue Engine — from framework to public tools'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'Tool-building system',
    badgeColor: 'azure',
    title: 'The TEG-Blue Engine',
    subtitle: 'How the framework becomes a traceable public tool',
    url: 'teg-blue.org/engine',
    needle: 0.36,
  })
}
