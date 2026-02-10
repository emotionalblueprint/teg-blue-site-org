import { SPECTRUM, TEXT } from '@/src/styles/tokens'

export default function ResearchHub() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border-default">
        <div className="container py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm"
              style={{
                background: `${SPECTRUM.blue}15`,
                color: SPECTRUM.blue,
                border: `1px solid ${SPECTRUM.blue}30`
              }}
            >
              T
            </div>
            <span className="font-semibold text-text-primary">TEG-Blue Research</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-text-muted">
            <a href="/" className="text-text-primary">Hub</a>
            <a href="/publications" className="hover:text-text-secondary transition-colors">Publications</a>
            <a href="/foundations" className="hover:text-text-secondary transition-colors">Foundations</a>
            <a href="/glossary" className="hover:text-text-secondary transition-colors">Glossary</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container py-20">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-tag uppercase mb-6 font-mono"
            style={{
              background: `${SPECTRUM.blue}12`,
              color: SPECTRUM.blue,
              border: `1px solid ${SPECTRUM.blue}25`
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: SPECTRUM.blue }} />
            Open Science
          </div>

          <h1 className="text-page-title text-text-primary mb-4">
            TEG-Blue Research Platform
          </h1>

          <p className="text-lg text-text-secondary mb-8" style={{ lineHeight: 1.7 }}>
            Peer-reviewed publications, foundational theories, and open methodology
            for understanding emotional regulation through the nervous system.
          </p>

          {/* Spectrum Bar */}
          <div className="flex gap-1 mb-12">
            {Object.entries(SPECTRUM).map(([name, color]) => (
              <div
                key={name}
                className="h-1.5 flex-1 rounded-full"
                style={{ background: color }}
                title={name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid Placeholder */}
      <section className="container pb-20">
        <h2 className="text-section-head text-text-primary mb-6">
          All Research
        </h2>

        <div className="grid gap-3">
          {/* Placeholder cards */}
          {['Publication', 'Theory', 'Glossary'].map((type) => (
            <details key={type} className="group">
              <summary className="flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: SPECTRUM.blue }}
                />
                <span>Sample {type} Entry</span>
              </summary>
              <div className="text-text-muted">
                Content will be loaded from JSON files in the content/ directory.
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-default mt-auto">
        <div className="container py-8 flex items-center justify-between text-sm text-text-hint">
          <span>TEG-Blue Research Platform</span>
          <span className="font-mono">CC-BY-NC-SA-4.0</span>
        </div>
      </footer>
    </main>
  )
}
