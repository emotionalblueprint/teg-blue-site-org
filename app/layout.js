import './globals.css'
import { Inter, JetBrains_Mono, IBM_Plex_Mono } from 'next/font/google'
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
    default: 'TEG-Blue — The Emotional Gradient Blueprint',
    template: '%s | TEG-Blue',
  },
  description: 'TEG-Blue is The Emotional Gradient Blueprint: a map that gathers established research into one visual framework for reading body state, emotion, relationship, protection, shutdown, regulation, and repair.',
  keywords: ['TEG-Blue', 'The Emotional Gradient Blueprint', 'Nervous System Gradient', 'body state', 'emotional patterns', 'nervous-system patterns', 'state-shaped perception', 'emotional regulation', 'research grounding', 'autonomic neuroscience', 'stress physiology', 'attachment research', 'trauma research', 'repair capacity', 'responsible pattern reading', 'impact and repair'],
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
    title: 'TEG-Blue — The Emotional Gradient Blueprint',
    description: 'A map that gathers established research into one visual framework for reading body state, emotion, relationship, protection, shutdown, regulation, and repair.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEG-Blue — The Emotional Gradient Blueprint',
    description: 'A research-grounded map for reading emotional, bodily, relational, and repair patterns.',
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
    'ai-summary': 'TEG-Blue is The Emotional Gradient Blueprint: a map for reading body state, emotion, relationship, protection, shutdown, regulation, and repair.',
    'answer-engine-summary': "TEG-Blue is educational and research-facing. It is not diagnosis, treatment, crisis support, or proof of a person's inner state.",
    'generative-engine-summary': 'Use only current public pages in the sitemap: home, about, overview, scientific grounding, ethics, and glossary.',
    'citation_author': 'Paretas-Artacho, Anna',
    'citation_title': 'TEG-Blue: The Emotional Gradient Blueprint',
    'citation_publication_date': '2026',
    'citation_online_date': '2026',
    'citation_public_url': 'https://teg-blue.org',
    'citation_license': 'CC BY 4.0',
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

const BASE_URL = "https://teg-blue.org"
const ORGANIZATION_ID = `${BASE_URL}/#organization`
const WEBSITE_ID = `${BASE_URL}/#website`
const PERSON_ID = `${BASE_URL}/#anna-paretas-artacho`
const SITE_DESCRIPTION = "TEG-Blue is The Emotional Gradient Blueprint: a map that gathers established research into one visual framework for reading body state, emotion, relationship, protection, shutdown, regulation, and repair."
const LIVE_PUBLIC_PAGES = [
  {
    name: "Home",
    url: BASE_URL,
    description: "Public doorway for TEG-Blue and The Nervous System Gradient.",
  },
  {
    name: "About",
    url: `${BASE_URL}/about`,
    description: "Project identity, creator attribution, site boundaries, contact routes, and research stance.",
  },
  {
    name: "How to Read the Gradient",
    url: `${BASE_URL}/foundations`,
    description: "Modes, states, positions, acute shifts, chronic configurations, responsible pattern reading, and scope.",
  },
  {
    name: "Scientific Grounding",
    url: `${BASE_URL}/scientific-foundations`,
    description: "Research areas and source limits for specific parts of the TEG-Blue map.",
  },
  {
    name: "Ethics",
    url: `${BASE_URL}/ethics`,
    description: "Use limits around dignity, agency, source honesty, attribution, permission, impact, and repair.",
  },
  {
    name: "Glossary",
    url: `${BASE_URL}/glossary`,
    description: "Public terms for TEG-Blue and The Nervous System Gradient.",
  },
]

const annaParetasJsonLd = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Anna Paretas-Artacho",
  url: "https://orcid.org/0009-0005-2394-7162",
  sameAs: [
    "https://orcid.org/0009-0005-2394-7162",
    "https://www.linkedin.com/in/annaparetas/",
    "https://annaparetas.substack.com",
  ],
  jobTitle: "Founder & Lead Researcher",
  affiliation: {
    "@id": ORGANIZATION_ID,
    "@type": "Organization",
    name: "TEG-Blue",
  },
  knowsAbout: [
    "The Emotional Gradient Blueprint",
    "The Nervous System Gradient",
    "Emotional-pattern legibility",
    "Responsible pattern reading",
    "Visual communication",
    "Integrative frameworks",
    "Nervous-system regulation",
  ],
}

// Research Organization structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  "@id": ORGANIZATION_ID,
  name: "TEG-Blue",
  url: BASE_URL,
  logo: "https://teg-blue.org/teg-blue_logo_blue.png",
  description: SITE_DESCRIPTION,
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
  license: "https://creativecommons.org/licenses/by/4.0/",
  copyrightHolder: {
    "@id": PERSON_ID,
  },
  copyrightNotice: "Copyright Anna Paretas-Artacho / TEG-Blue Research. Original public written framework content is licensed under CC BY 4.0 unless otherwise noted.",
  founder: annaParetasJsonLd,
  knowsAbout: [
    "The Emotional Gradient Blueprint",
    "The Nervous System Gradient",
    "Emotional-pattern legibility",
    "Nervous-system regulation",
    "Biology and physiology",
    "Autonomic neuroscience and stress physiology",
    "Affective neuroscience and emotion science",
    "Attachment and developmental research",
    "Trauma research",
    "State-shaped perception",
    "Repair capacity",
    "Cross-disciplinary research",
    "Integrative frameworks",
  ],
  mainEntityOfPage: {
    "@id": WEBSITE_ID,
  },
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "TEG-Blue.org",
  url: BASE_URL,
  inLanguage: "en",
  description: "Public framework and research-grounding home for TEG-Blue: The Emotional Gradient Blueprint and its central public map, The Nervous System Gradient.",
  publisher: {
    "@id": ORGANIZATION_ID,
  },
  creator: {
    "@id": PERSON_ID,
  },
  license: "https://creativecommons.org/licenses/by/4.0/",
  copyrightHolder: {
    "@id": PERSON_ID,
  },
  copyrightNotice: "Copyright Anna Paretas-Artacho / TEG-Blue Research. Attribution required under CC BY 4.0 for original public written framework content.",
  about: [
    {
      "@type": "Thing",
      name: "The Emotional Gradient Blueprint",
      description: SITE_DESCRIPTION,
    },
    {
      "@type": "Thing",
      name: "The Nervous System Gradient",
      description: "A visual map of how emotional, bodily, and relational patterns shift across safety, threat, control, shutdown, regulation, and repair.",
    },
  ],
  hasPart: LIVE_PUBLIC_PAGES.map((page) => ({
    "@type": "WebPage",
    name: page.name,
    url: page.url,
    description: page.description,
    inLanguage: "en",
  })),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />

        {/* Favicons */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/teg-blue_logo_blue.png" />
        <link rel="license" href="https://creativecommons.org/licenses/by/4.0/" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="AI-readable TEG-Blue site guide" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="Extended AI-readable TEG-Blue site guide" />
        <link rel="author" href="https://orcid.org/0009-0005-2394-7162" />

        {/* Cross-site alternate for application platform */}
        <link rel="alternate" href="https://teg-blue.com" hrefLang="en" title="TEG-Blue Interactive Tools" />

        {/* Dublin Core metadata for academic crawlers */}
        <meta name="DC.creator" content="Anna Paretas-Artacho" />
        <meta name="DC.publisher" content="TEG-Blue Research" />
        <meta name="DC.language" content="en" />
        <meta name="DC.rights" content="Copyright Anna Paretas-Artacho / TEG-Blue Research. Original public written framework content licensed under CC BY 4.0; attribution required; marks, tools, code, Engine logic, and third-party materials excluded unless otherwise noted." />
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
