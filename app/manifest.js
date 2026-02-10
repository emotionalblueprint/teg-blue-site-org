export default function manifest() {
  return {
    name: 'TEG-Blue Research Platform',
    short_name: 'TEG-Blue Research',
    description: 'Open science publishing for emotional regulation research',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0f1a',
    theme_color: '#3B7DE5',
    icons: [
      {
        src: '/teg-blue_logo_blue.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/teg-blue_logo_blue.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
