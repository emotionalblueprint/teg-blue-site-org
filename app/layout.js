import './globals.css'

export const metadata = {
  title: {
    default: 'TEG-Blue Research',
    template: '%s | TEG-Blue Research',
  },
  description: 'Open science publishing platform for TEG-Blue emotional regulation research. Publications, theories, frameworks, and methodology.',
  keywords: ['emotional regulation', 'nervous system', 'polyvagal theory', 'attachment', 'research', 'open science'],
  authors: [{ name: 'Anna Paretas-Artacho' }],
  creator: 'TEG-Blue',
  publisher: 'TEG-Blue',
  metadataBase: new URL('https://teg-blue.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://teg-blue.org',
    siteName: 'TEG-Blue Research',
    title: 'TEG-Blue Research',
    description: 'Open science publishing platform for TEG-Blue emotional regulation research.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEG-Blue Research',
    description: 'Open science publishing platform for TEG-Blue emotional regulation research.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to font providers */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Inter + JetBrains Mono */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Dublin Core metadata for academic crawlers */}
        <meta name="DC.publisher" content="TEG-Blue" />
        <meta name="DC.language" content="en" />
        <meta name="DC.rights" content="CC-BY-NC-SA-4.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
