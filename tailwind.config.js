/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Blue Spectrum (Research Platform palette)
        'spectrum-sky':    '#7ABAEB',
        'spectrum-azure':  '#4A9BE8',
        'spectrum-blue':   '#3B7DE5',
        'spectrum-cobalt': '#3560CC',
        'spectrum-indigo': '#4A50B0',
        'spectrum-slate':  '#6B7A99',

        // Backgrounds (cooler/deeper than .com)
        'bg-page':    '#080C18',
        'bg-primary': '#0C1222',
        'bg-card':    '#111827',
        'bg-surface': '#1A2234',
        'bg-inset':   '#0A0E1A',

        // Text
        'text-primary':   '#F1F5F9',
        'text-secondary': '#CBD5E1',
        'text-muted':     '#94A3B8',
        'text-hint':      '#64748B',
        'text-micro':     '#475569',

        // Borders
        'border-default': 'rgba(148, 163, 184, 0.12)',
        'border-hover':   'rgba(148, 163, 184, 0.20)',
        'border-active':  'rgba(148, 163, 184, 0.30)',
      },
      fontFamily: {
        'sans':    ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont'],
        'display': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont'],
        'body':    ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont'],
        'mono':    ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'page-title':   ['28px', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }],
        'section-head': ['18px', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
        'expandable':   ['15px', { lineHeight: '1.4', fontWeight: '600' }],
        'body':         ['14px', { lineHeight: '1.7', fontWeight: '400' }],
        'doi':          ['12px', { lineHeight: '1.4', fontWeight: '400', letterSpacing: '0.01em' }],
        'tag':          ['10px', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '0.06em' }],
      },
      spacing: {
        'section': '80px',
        'content': '32px',
        'card': '24px',
      },
      maxWidth: {
        'container': '820px',
      },
      borderRadius: {
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
      },
    },
  },
  plugins: [],
}
