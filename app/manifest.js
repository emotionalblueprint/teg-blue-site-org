export default function manifest() {
  return {
    name: 'TEG-Blue.org',
    short_name: 'TEG-Blue',
    description: 'A research-grounded map for reading body state, emotion, relationship, protection, shutdown, regulation, and repair',
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
