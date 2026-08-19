import { renderOG } from '@/src/lib/og-render'

export const runtime = 'edge'
export const alt = 'El TEG-Blue Engine — del marco a las herramientas públicas'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOG({
    badge: 'Sistema de herramientas',
    badgeColor: 'azure',
    title: 'El TEG-Blue Engine',
    subtitle: 'Cómo el marco se convierte en una herramienta pública trazable',
    url: 'teg-blue.org/es/engine',
    needle: 0.36,
  })
}
