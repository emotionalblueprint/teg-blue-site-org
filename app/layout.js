import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { ThemeScript } from '@/src/components/theme/ThemeScript'
import { ThemeProvider } from '@/src/components/theme/ThemeProvider'

export const metadata = {
  title: {
    default: 'TEG-Blue Research',
    template: '%s | TEG-Blue Research',
  },
  description: 'Open science platform for TEG-Blue research. An integrative emotional intelligence framework connecting 139+ theories into computationally legible gradients for AI safety, alignment research, and human emotional understanding.',
  keywords: ['emotional regulation', 'nervous system', 'polyvagal theory', 'attachment theory', 'trauma research', 'AI safety', 'AI alignment', 'emotional intelligence', 'four-mode gradient', 'machine learning', 'NLP', 'computational social science', 'harm detection', 'moral reasoning', 'regulatory states', 'complexity markers', 'open science'],
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
    description: 'Open science platform connecting 139+ established theories into testable hypotheses about emotional regulation. The building blocks are validated; the connections need verification.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEG-Blue Research Platform',
    description: 'Open science platform connecting 139+ established theories into testable hypotheses about emotional regulation.',
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
    background: #3B82F6;
    color: white;
    z-index: 9999;
    font-weight: 600;
    text-decoration: none;
    outline: 2px solid white;
    outline-offset: 2px;
  }
`

// Research Organization structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "TEG-Blue Research Consortium",
  url: "https://teg-blue.org",
  logo: "https://teg-blue.org/teg-blue_logo_blue.png",
  description: "Open science research consortium developing TEG-Blue, an integrative architecture connecting 139+ established theories from neuroscience, psychology, and sociology. The building blocks (Polyvagal Theory, Attachment Theory, Trauma Research) are validated; the connections between them are hypotheses requiring scientific verification.",
  sameAs: [
    "https://teg-blue.com",
    "https://orcid.org/0009-0005-2394-7162",
    "https://doi.org/10.5281/zenodo.18428907",
    "https://github.com/emotionalblueprint",
    "https://zenodo.org/communities/teg-blue",
  ],
  foundingDate: "2024",
  inLanguage: "en",
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
    "Regulatory state classification",
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
  description: "Open science platform providing structured emotional intelligence frameworks for AI safety research. The Four-Mode Gradient offers computationally legible representations of human regulatory states (Connection, Protection, Control, Domination) detectable in natural language. Designed for AI/ML researchers, safety practitioners, and computational social scientists.",
  publisher: {
    "@type": "Organization",
    name: "TEG-Blue Research Consortium",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://teg-blue.org/?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  about: [
    {
      "@type": "Thing",
      name: "AI Safety",
      description: "Structured gradients for emotional pattern detection in AI systems"
    },
    {
      "@type": "Thing",
      name: "Four-Mode Gradient",
      description: "Measurement system mapping nervous system regulatory states: Connection, Protection, Control, Domination"
    }
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
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

        {/* RSS feed autodiscovery */}
        <link rel="alternate" type="application/rss+xml" title="TEG-Blue Research Publications" href="/feed.xml" />
        {/* Cross-site alternate for application platform */}
        <link rel="alternate" href="https://teg-blue.com" hrefLang="en" title="TEG-Blue Interactive Tools" />

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
        {/* Skip-to-content link focus styles */}
        <style dangerouslySetInnerHTML={{ __html: skipLinkFocusStyles }} />
      </head>
      <body>
        {/* Skip-to-content link for accessibility */}
        <a href="#main-content" className="skip-link" style={skipLinkStyles}>
          Skip to main content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
