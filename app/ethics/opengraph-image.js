import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'Foundational Commitments — TEG-Blue ethics and open science principles'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'Ethics',
    badgeColor: 'indigo',
    title: 'Foundational Commitments',
    subtitle: 'Non-pathologisation \u00b7 Open science \u00b7 Transparency \u00b7 CC-BY-NC-SA-4.0',
    url: 'teg-blue.org/ethics',
    needle: 0.125,
  })
}
