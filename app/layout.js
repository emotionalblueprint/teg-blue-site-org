import './globals.css'
import { Inter, JetBrains_Mono, IBM_Plex_Mono } from 'next/font/google'
import { headers } from 'next/headers'
import { Analytics } from '@vercel/analytics/next'
import { ThemeScript } from '@/src/components/theme/ThemeScript'
import { ThemeProvider } from '@/src/components/theme/ThemeProvider'
import BlueprintGrid from '@/src/components/BlueprintGrid'

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
    default: 'TEG-Blue — A Visual Map of Nervous-System Patterns',
    template: '%s | TEG-Blue',
  },
  description: 'TEG-Blue is a visual map for patterns we can already see: how emotion, survival, identity, social patterns, and repair organise across safety, threat, control, and shutdown.',
  keywords: ['emotional regulation', 'nervous system', 'polyvagal theory', 'attachment theory', 'trauma research', 'emotional patterns', 'nervous system gradient', 'visual map', 'research grounding', 'state-shaped capacity', 'repair', 'survival strategies', 'identity', 'social patterns'],
  authors: [{ name: 'Anna Paretas-Artacho', url: 'https://orcid.org/0009-0005-2394-7162' }],
  creator: 'Anna Paretas-Artacho',
  publisher: 'TEG-Blue Research',
  metadataBase: new URL('https://teg-blue.org'),
  alternates: {
    canonical: 'https://teg-blue.org',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://teg-blue.org',
    siteName: 'TEG-Blue',
    title: 'TEG-Blue — A Visual Map of Nervous-System Patterns',
    description: 'A visual map for patterns we can already see across safety, threat, control, shutdown, accountability, and repair.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEG-Blue — A Visual Map of Nervous-System Patterns',
    description: 'A visual map for patterns we can already see across safety, threat, control, shutdown, accountability, and repair.',
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
    'citation_author': 'Paretas-Artacho, Anna',
    'citation_title': 'TEG-Blue: The Nervous System Gradient',
    'citation_publication_date': '2026',
    'citation_online_date': '2026',
    'citation_public_url': 'https://teg-blue.org',
    'citation_license': 'CC BY-NC-SA 4.0',
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
  name: "TEG-Blue",
  url: "https://teg-blue.org",
  logo: "https://teg-blue.org/teg-blue_logo_blue.png",
  description: "TEG-Blue is a visual map for patterns we can already see: how emotion, survival, identity, social patterns, and repair organise across safety, threat, control, and shutdown.",
  sameAs: [
    "https://teg-blue.com",
    "https://orcid.org/0009-0005-2394-7162",
    "https://doi.org/10.5281/zenodo.19472342",
    "https://github.com/emotionalblueprint",
    "https://zenodo.org/communities/teg-blue",
    "https://www.tiktok.com/@emotionalblueprint",
    "https://www.linkedin.com/company/teg-blue/",
    "https://annaparetas.substack.com",
  ],
  foundingDate: "2024",
  inLanguage: "en",
  license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  copyrightHolder: {
    "@type": "Person",
    name: "Anna Paretas-Artacho",
  },
  copyrightNotice: "Copyright Anna Paretas-Artacho / TEG-Blue Research. Licensed under CC BY-NC-SA 4.0.",
  founder: {
    "@type": "Person",
    name: "Anna Paretas-Artacho",
    url: "https://orcid.org/0009-0005-2394-7162",
    sameAs: [
      "https://orcid.org/0009-0005-2394-7162",
      "https://www.linkedin.com/in/annaparetas/",
      "https://annaparetas.substack.com",
    ],
    jobTitle: "Founder & Lead Researcher",
    affiliation: {
      "@type": "Organization",
      name: "TEG-Blue",
    },
    knowsAbout: [
      "The Emotional Gradient Blueprint",
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
    "Emotional patterns",
    "Nervous system state classification",
    "Structured emotional patterns",
    "Cross-disciplinary research",
    "Integrative frameworks"
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TEG-Blue.org",
  url: "https://teg-blue.org",
  inLanguage: "en",
  description: "Public framework home for TEG-Blue: a visual map of nervous-system patterns across safety, threat, control, shutdown, accountability, and repair.",
  publisher: {
    "@type": "Organization",
    name: "TEG-Blue",
  },
  creator: {
    "@type": "Person",
    name: "Anna Paretas-Artacho",
    url: "https://orcid.org/0009-0005-2394-7162",
  },
  license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  copyrightHolder: {
    "@type": "Person",
    name: "Anna Paretas-Artacho",
  },
  copyrightNotice: "Copyright Anna Paretas-Artacho / TEG-Blue Research. Attribution required under CC BY-NC-SA 4.0.",
}

export default function RootLayout({ children }) {
  const documentLanguage = headers().get('x-teg-blue-language') === 'es' ? 'es' : 'en'

  return (
    <html lang={documentLanguage} className={`${inter.variable} ${jetbrainsMono.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />

        {/* Favicons */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/teg-blue_logo_blue.png" />
        <link rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" />

        {/* Cross-site alternate for application platform */}
        <link rel="alternate" href="https://teg-blue.com" hrefLang="en" title="TEG-Blue Interactive Tools" />

        {/* Dublin Core metadata for academic crawlers */}
        <meta name="DC.creator" content="Anna Paretas-Artacho" />
        <meta name="DC.publisher" content="TEG-Blue Research" />
        <meta name="DC.language" content={documentLanguage} />
        <meta name="DC.rights" content="Copyright Anna Paretas-Artacho / TEG-Blue Research. Licensed under CC BY-NC-SA 4.0; attribution required; commercial use requires permission." />
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
        <BlueprintGrid size="lg" opacity={0.38} fade="subtle" />
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
