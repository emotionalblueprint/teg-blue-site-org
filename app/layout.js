import './globals.css'

export const metadata = {
  title: {
    default: 'TEG-Blue Research',
    template: '%s | TEG-Blue Research',
  },
  description: 'Open science publishing platform for TEG-Blue emotional regulation research. Publications, theories, frameworks, and methodology.',
  keywords: ['emotional regulation', 'nervous system', 'polyvagal theory', 'attachment theory', 'trauma research', 'research', 'open science', 'emotional intelligence', 'four-mode gradient'],
  authors: [{ name: 'TEG-Blue Research Consortium', url: 'https://teg-blue.org' }],
  creator: 'TEG-Blue Research Consortium',
  publisher: 'TEG-Blue Research Consortium',
  metadataBase: new URL('https://teg-blue.org'),
  alternates: {
    canonical: 'https://teg-blue.org',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://teg-blue.org',
    siteName: 'TEG-Blue Research',
    title: 'TEG-Blue Research Platform',
    description: 'Open science publishing for emotional regulation research. Publications, theories, frameworks, and methodology.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEG-Blue Research Platform',
    description: 'Open science publishing for emotional regulation research.',
    creator: '@tegblue',
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
  verification: {
    // Add when you have these
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'science',
}

// Research Organization structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "TEG-Blue Research Consortium",
  url: "https://teg-blue.org",
  logo: "https://teg-blue.org/teg-blue_logo_blue.png",
  description: "Open science research consortium studying emotional regulation through nervous system understanding. Integrating polyvagal theory, attachment research, and trauma-informed approaches.",
  sameAs: [
    "https://teg-blue.com",
    "https://orcid.org/0009-0005-2394-7162",
  ],
  foundingDate: "2024",
  knowsAbout: [
    "Emotional regulation",
    "Polyvagal theory",
    "Attachment theory",
    "Nervous system",
    "Trauma research",
    "Emotional intelligence"
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TEG-Blue Research Platform",
  url: "https://teg-blue.org",
  description: "Open science publishing platform for emotional regulation research",
  publisher: {
    "@type": "Organization",
    name: "TEG-Blue Research Consortium",
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

        {/* Favicons */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/teg-blue_logo_blue.png" />

        {/* Dublin Core metadata for academic crawlers */}
        <meta name="DC.publisher" content="TEG-Blue Research Consortium" />
        <meta name="DC.language" content="en" />
        <meta name="DC.rights" content="CC-BY-NC-SA-4.0" />
        <meta name="DC.type" content="Collection" />

        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
