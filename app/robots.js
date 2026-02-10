export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://teg-blue.org/sitemap.xml',
    host: 'https://teg-blue.org',
  }
}
