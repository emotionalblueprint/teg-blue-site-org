// src/lib/og-fonts.js
// Shared font loader for next/og cards on teg-blue.org. The edge runtime can't
// read the filesystem, and file-convention opengraph-image routes can't see the
// request origin, so we fetch the public fonts over HTTP from the site's own
// origin. Satori does NOT support woff2 — Inter is served as .woff and
// JetBrains Mono as .ttf (see /public/fonts).

const ORIGIN =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://teg-blue.org'

export async function loadOgFonts(base = ORIGIN) {
  const f = (file) => fetch(new URL(`/fonts/${file}`, base)).then((r) => r.arrayBuffer())

  const [inter400, inter600, inter800, mono400, mono500] = await Promise.all([
    f('inter-400.woff'),
    f('inter-600.woff'),
    f('inter-800.woff'),
    f('jetbrains-mono-400.ttf'),
    f('jetbrains-mono-500.ttf'),
  ])

  return [
    { name: 'Inter', data: inter400, weight: 400, style: 'normal' },
    { name: 'Inter', data: inter600, weight: 600, style: 'normal' },
    { name: 'Inter', data: inter800, weight: 800, style: 'normal' },
    { name: 'JetBrains Mono', data: mono400, weight: 400, style: 'normal' },
    { name: 'JetBrains Mono', data: mono500, weight: 500, style: 'normal' },
  ]
}
