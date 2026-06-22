import './globals.css'
import { Inter, JetBrains_Mono, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeScript } from '@/src/components/theme/ThemeScript'
import { ThemeProvider } from '@/src/components/theme/ThemeProvider'
import { BlueprintGrid } from '@/src/components'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-jetbrains',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-plex',
})

export const metadata = {
  title: {
    default: 'TEG-Blue — The Emotional Gradient Blueprint',
    template: '%s | TEG-Blue Research',
  },
  description: 'TEG-Blue maps how nervous-system states shape perception, feeling, and behaviour — a continuous gradient from safety through the defences to shutdown, grounded in established science.',
  keywords: ['emotional regulation', 'nervous system', 'polyvagal theory', 'attachment theory', 'trauma research', 'AI safety', 'AI alignment', 'emotional intelligence', 'nervous system gradient', 'machine learning', 'NLP', 'computational social science', 'harm detection', 'moral reasoning', 'nervous system states', 'complexity markers', 'open science'],
  authors: [{ name: 'TEG-Blue Research', url: 'https://teg-blue.org' }],
  creator: 'TEG-Blue Research',
  publisher: 'TEG-Blue Research',
  metadataBase: new URL('https://teg-blue.org'),
  alternates: {
    canonical: 'https://teg-blue.org',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://teg-blue.org',
    siteName: 'TEG-Blue Research',
    title: 'TEG-Blue — The Emotional Gradient',
    description: 'A map of the nervous system’s states — grounded in established science.',
  },
  twitter: {
    card: 'summary',
    title: 'TEG-Blue — The Emotional Gradient',
    description: 'A map of the nervous system’s states — grounded in established science.',
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
  // Verification: Using DNS domain verification (sc-domain:teg-blue.org)
  // No HTML meta tags needed - domain property covers all subdomains
  category: 'science',
  other: {
    'llms-txt': '/llms.txt',
  },
}

// Skip-to-content link styles (for accessibility)
const skipLinkStyles = {
  position: 'absolute',
  left: '-9999px',
  top: 'auto',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
}

const skipLinkFocusStyles = `
  .skip-link:focus {
    position: fixed;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    padding: 1rem 1.5rem;
    background: var(--spectrum-blue);
    color: var(--text-primary);
    z-index: 9999;
    font-weight: 600;
    text-decoration: none;
    outline: 2px solid var(--text-primary);
    outline-offset: 2px;
  }
`

// Research Organization structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "TEG-Blue Research",
  url: "https://teg-blue.org",
  logo: "https://teg-blue.org/teg-blue_logo_blue.png",
  description: "TEG-Blue maps how nervous-system states shape perception, feeling, and behaviour — a continuous gradient from safety through the defences to shutdown, grounded in established science.",
  sameAs: [
    "https://teg-blue.com",
    "https://orcid.org/0009-0005-2394-7162",
    "https://doi.org/10.5281/zenodo.19472342",
    "https://github.com/emotionalblueprint",
    "https://zenodo.org/communities/teg-blue",
    "https://x.com/tegblue",
  ],
  foundingDate: "2024",
  inLanguage: "en",
  founder: {
    "@type": "Person",
    name: "Anna Paretas-Artacho",
    url: "https://teg-blue.org/about",
    sameAs: [
      "https://orcid.org/0009-0005-2394-7162",
      "https://x.com/tegblue",
    ],
    jobTitle: "Founder & Lead Researcher",
    affiliation: {
      "@type": "Organization",
      name: "TEG-Blue Research",
    },
    knowsAbout: [
      "Emotional technology",
      "Pattern recognition",
      "Visual communication",
      "Integrative frameworks",
      "Nervous system regulation",
    ],
  },
  knowsAbout: [
    "Emotional regulation",
    "Polyvagal theory",
    "Attachment theory",
    "Nervous system",
    "Trauma research",
    "Emotional intelligence",
    "AI safety",
    "AI alignment",
    "Computational social science",
    "Natural language processing",
    "Harm detection",
    "Moral reasoning",
    "Nervous system state classification",
    "Structured emotional data",
    "Cross-disciplinary research",
    "Integrative frameworks"
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TEG-Blue Research Platform",
  url: "https://teg-blue.org",
  inLanguage: "en",
  description: "TEG-Blue maps how nervous-system states shape perception, feeling, and behaviour — a continuous gradient from safety through the defences to shutdown, grounded in established science.",
  publisher: {
    "@type": "Organization",
    name: "TEG-Blue Research",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />

        {/* Favicons */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/teg-blue_logo_blue.png" />

        {/* RSS feed autodiscovery */}
        <link rel="alternate" type="application/rss+xml" title="TEG-Blue Research Publications" href="/feed.xml" />
        {/* Cross-site alternate for application platform */}
        <link rel="alternate" href="https://teg-blue.com" hrefLang="en" title="TEG-Blue Interactive Tools" />

        {/* Dublin Core metadata for academic crawlers */}
        <meta name="DC.publisher" content="TEG-Blue Research" />
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
        {/* Skip-to-content link focus styles */}
        <style dangerouslySetInnerHTML={{ __html: skipLinkFocusStyles }} />
      </head>
      <body>
        {/* Skip-to-content link for accessibility */}
        <a href="#main-content" className="skip-link" style={skipLinkStyles}>
          Skip to main content
        </a>
        <BlueprintGrid size="lg" opacity={0.25} fade="subtle" />
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
