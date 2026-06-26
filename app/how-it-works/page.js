import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero, PageLayout, AuthorBlock, ExpandableSection } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const SIDEBAR_SECTIONS = [
  { label: "The Data System", href: "#the-data-system", description: "Five layers from established science to published tools. How each layer feeds the next." },
  { label: "Established Science", href: "#established-science", description: "145+ peer-reviewed theoretical contributions from 41 research traditions from neuroscience, psychology, attachment, and trauma research." },
  { label: "Concept Architectures", href: "#concept-architectures", description: "How 12 frameworks and 4 models connect established theories into testable structures." },
  { label: "Root Data", href: "#root-data", description: "Five files organized by biological function. The operational consolidation layer." },
  { label: "From Root to Output", href: "#from-root-to-output", description: "How root data becomes JavaScript libraries, interactive tools, diagrams, and research pages." },
  { label: "Traceability", href: "#traceability", description: "Every claim traces to its source. Provenance as architectural constraint." },
  { label: "Design Principles", href: "#design-principles", description: "Five constraints governing the data system." },
];

const FAQ_ITEMS = [
  {
    question: "How is TEG-Blue data organized?",
    answer: "TEG-Blue organizes data by biological function across five root data files: Emotions as Signals (what fires), Awareness Capacities (what receives), Mode Positions (what state enters), Biological Restoration (whether the cycle completes), and a Master Table that compresses all four layers into two tables plus nine structural rules.",
  },
  {
    question: "What are Concept Architectures?",
    answer: "Each of the 12 frameworks (F1-F12) and 4 models (M1-M4) has a Concept Architecture — a formal working document that maps which established theories it draws from, the cross-disciplinary connections it proposes, the mechanisms it describes, and the testable predictions it generates. These are the intellectual origin of all downstream data.",
  },
  {
    question: "How does root data reach the public sites?",
    answer: "Root data exports to JavaScript data libraries which feed 20+ interactive tools on teg-blue.com. On teg-blue.org, root data is verified against inline content in framework pages, model pages, and the glossary.",
  },
  {
    question: "How does TEG-Blue trace claims to their source?",
    answer: "Every claim follows a three-layer provenance chain: Concept Architecture (intellectual origin) → root data file (operational consolidation by biological function) → published output (site page, tool, or diagram). Each root file section has a provenance table mapping it back to its originating CA.",
  },
];

export const metadata = {
  title: "How TEG-Blue Works | TEG-Blue Research",
  description: "The data system behind TEG-Blue. How 145+ theoretical contributions from 41 research traditions connect through Concept Architectures, consolidate into root data files organized by biological function, and distribute to research pages and interactive tools.",
  keywords: [
    "TEG-Blue data system",
    "concept architectures",
    "root data files",
    "data provenance",
    "biological organization",
    "emotional regulation data",
    "cross-disciplinary integration",
    "data pipeline",
    "open science",
    "traceability",
  ],
  alternates: {
    canonical: "https://teg-blue.org/how-it-works",
  },
  openGraph: {
    title: "How TEG-Blue Works — TEG-Blue Research",
    description: "The data system: from 145+ theoretical contributions from 41 research traditions through Concept Architectures to root data files to published tools and research. Traceable, auditable, open.",
    url: "https://teg-blue.org/how-it-works",
    siteName: "TEG-Blue Research",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "How TEG-Blue Works — TEG-Blue Research",
    description: "The data system: established theories → Concept Architectures → root data → published outputs. Every claim traceable.",
  },
};

export default function HowItWorksPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/how-it-works" />

      <PageLayout
        header={
          <ResearcherHero
            badge="SYSTEM ARCHITECTURE"
            title="How TEG-Blue Works"
            description="The data system behind TEG-Blue. How established theories connect through frameworks, consolidate into root data organized by biological function, and distribute to research pages and interactive tools."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >

        {/* ─── SECTION 1: THE DATA SYSTEM ──────────────────── */}
        <section id="the-data-system" style={{ marginBottom: 40 }}>
          <h2 style={sectionHeadStyle}>The data system</h2>
          <p style={{ ...bodyStyle, marginBottom: 20 }}>
            TEG-Blue operates as a five-layer data pipeline. Each layer has a specific function and feeds the next.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              marginBottom: 20,
            }}
          >
            <PipelineLayer
              number={1}
              title="Established science"
              description="145+ peer-reviewed theoretical contributions from 41 research traditions from neuroscience, psychology, attachment research, and trauma studies. Every source credited."
              color={SPECTRUM.sky}
              arrow
            />
            <PipelineLayer
              number={2}
              title="Concept Architectures"
              description="12 framework CAs (F1–F12) and 4 model CAs (M1–M4). Each maps which theories connect, what mechanisms operate, and what predictions follow."
              color={SPECTRUM.azure}
              arrow
            />
            <PipelineLayer
              number={3}
              title="Root data files"
              description="Five files organized by biological function — emotions, capacities, modes, restoration, and a master integration table. Each section traces to its originating CA."
              color={SPECTRUM.cobalt}
              arrow
            />
            <PipelineLayer
              number={4}
              title="Data libraries"
              description="JavaScript exports that transform root data into structured objects consumed by interactive tools. Changes to root data propagate automatically through the libraries to every downstream tool."
              color={SPECTRUM.indigo}
              arrow
            />
            <PipelineLayer
              number={5}
              title="Published outputs"
              description="20+ interactive tools on teg-blue.com. Framework pages, model pages, glossary, and diagrams on teg-blue.org."
              color={SPECTRUM.slate}
            />
          </div>

          <div
            style={{
              padding: "16px 20px",
              background: hexToRgba(SPECTRUM.blue, 0.06),
              borderRadius: RADIUS.md,
              border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.15)}`,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.primary, lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
              Every published claim traces backward through this chain. Every tool traces to a data library, which traces to a root file, which traces to a Concept Architecture, which credits its source theories.
            </p>
          </div>
        </section>

        {/* ─── SECTION 2: ESTABLISHED SCIENCE ──────────────── */}
        <section id="established-science" style={{ marginBottom: 40 }}>
          <h2 style={sectionHeadStyle}>Established science</h2>
          <p style={{ ...bodyStyle, marginBottom: 16 }}>
            TEG-Blue synthesizes 145+ theoretical contributions across 41 research traditions that developed in separate disciplines, often without reference to each other. Every source theory is credited. The system does not replace these theories — it proposes specific connections between them.
          </p>

          <div
            style={{
              background: BG.card,
              borderRadius: RADIUS.md,
              border: `1px solid ${BORDER.default}`,
              overflow: "hidden",
              marginBottom: 16,
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: BG.surface }}>
                  <th style={tableHeaderStyle}>Discipline</th>
                  <th style={tableHeaderStyle}>What it contributes</th>
                  <th style={tableHeaderStyle}>Example theories</th>
                </tr>
              </thead>
              <tbody>
                <SourceRow
                  discipline="Neuroscience"
                  contributes="Nervous system signaling, autonomic regulation, neuroanatomical substrates"
                  examples="Polyvagal Theory (Porges), interoception research, amygdala-PFC pathways"
                />
                <SourceRow
                  discipline="Attachment research"
                  contributes="Developmental patterns, co-regulation, relational safety"
                  examples="Attachment Theory (Bowlby, Ainsworth), mentalization (Fonagy), developmental trauma"
                />
                <SourceRow
                  discipline="Emotion science"
                  contributes="Emotion as biological signal, appraisal mechanisms, regulation strategies"
                  examples="Appraisal Theory (Lazarus), emotion regulation (Gross), affect theory (Tomkins)"
                />
                <SourceRow
                  discipline="Psychology"
                  contributes="Defense mechanisms, cognitive distortion, identity development"
                  examples="Ego Development (Loevinger), cognitive dissonance (Festinger), moral development (Kohlberg)"
                />
                <SourceRow
                  discipline="Sociology"
                  contributes="Social stratification, bias formation, institutional dynamics"
                  examples="Social Identity Theory (Tajfel), Moral Foundations (Haidt), systems theory"
                  isLast
                />
              </tbody>
            </table>
          </div>

          <div style={labelStyle(SPECTRUM.azure)}>What TEG-Blue adds</div>
          <p style={{ ...bodyStyle, marginTop: 8, marginBottom: 0 }}>
            The originality is not in the individual theories — it is in the cross-disciplinary connections proposed between them. TEG-Blue connects nervous system regulation to moral perception, attachment patterns to social stratification, self-protection to domination as a continuous gradient, and linguistic complexity to regulatory capacity. These connections generate testable hypotheses that no single source discipline could produce alone.
          </p>
        </section>

        {/* ─── SECTION 3: CONCEPT ARCHITECTURES ────────────── */}
        <section id="concept-architectures" style={{ marginBottom: 40 }}>
          <h2 style={sectionHeadStyle}>Concept Architectures</h2>
          <p style={{ ...bodyStyle, marginBottom: 16 }}>
            Concept Architectures (CAs) are the intellectual origin layer. Each is a formal working document that maps how established theories connect within a specific scope.
          </p>

          <div style={{ marginBottom: 20 }}>
            <h3 style={subsectionHeadStyle}>What each CA contains</h3>
            <ul style={listStyle}>
              <li style={{ marginBottom: 6 }}>The specific claims the framework or model makes</li>
              <li style={{ marginBottom: 6 }}>Which established theories and researchers it draws from</li>
              <li style={{ marginBottom: 6 }}>The cross-disciplinary connections it proposes</li>
              <li style={{ marginBottom: 6 }}>The mechanisms it describes — inputs, processes, outputs</li>
              <li>The testable predictions it generates</li>
            </ul>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, marginBottom: 20 }}>
            <CAGroupCard
              title="12 Framework CAs (F1–F12)"
              description="One per framework, organized in three arcs. Each maps the complete intellectual structure: what it explains, what research supports it, what it predicts."
              color={SPECTRUM.cobalt}
              items={[
                { label: "Individual arc (F1–F3)", detail: "How the nervous system evaluates safety, calibrates through development, compensates through cognition" },
                { label: "Collective arc (F4–F7)", detail: "How individual patterns scale into rules, hierarchies, bias, and domination" },
                { label: "Repair arc (F8–F12)", detail: "How capacities rebuild, neurodivergent variation, generational patterns, paradox, and the two information systems" },
              ]}
              href="/scientific-foundations"
              linkText="See the research grounding →"
            />
            <CAGroupCard
              title="4 Model CAs (M1–M4)"
              description="One per model. Models describe how something works as a usable instrument. They draw from the framework CAs but serve a different, applied scope."
              color={SPECTRUM.azure}
              items={[
                { label: "M1 — Emotions as Signals", detail: "What the system delivers: sixteen emotions mapped as biological signals" },
                { label: "M2 — Nervous System States", detail: "What the system does: physiological reorganization, the modes, the observable compass" },
                { label: "M3 — Regulation Capacities", detail: "What enables return: restoration, substitutes, escalation, what genuine return requires" },
                { label: "M4 — Awareness Capacities", detail: "What can be perceived: Interpersonal Affect Perception (RE), Affective Resonance (ER), Interoceptive Self-Awareness (SEA)" },
              ]}
              href="/scientific-foundations"
              linkText="See the foundations →"
            />
          </div>

          <div
            style={{
              padding: "12px 16px",
              background: hexToRgba(SPECTRUM.slate, 0.08),
              borderRadius: 6,
              borderLeft: `3px solid ${SPECTRUM.slate}`,
            }}
          >
            <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: TEXT.secondary }}>Status note:</strong> Concept Architectures are working documents — designed to be testable, correctable, and open to scholarly review. The theoretical mapping is a working hypothesis, not a finished academic work.
            </p>
          </div>
        </section>

        {/* ─── SECTION 4: ROOT DATA ────────────────────────── */}
        <section id="root-data" style={{ marginBottom: 40 }}>
          <h2 style={sectionHeadStyle}>Root data</h2>
          <p style={{ ...bodyStyle, marginBottom: 8 }}>
            The Concept Architectures feed into five root data files — the operational consolidation layer. Content from the CAs is extracted and reorganized by biological function rather than by framework or discipline. Each section in a root file has a provenance table mapping it back to its originating CA.
          </p>
          <p style={{ ...bodyStyle, marginBottom: 20 }}>
            This is where the biological architecture becomes visible. The root layer reveals four independent layers that map the nervous system&apos;s response cycle.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
            <RootFileCard
              number={1}
              title="Emotions as Signals"
              role="The input — what fires the system"
              details="Sixteen emotions (nine somatic, seven relational), each mapped across four modes in fluid and chronic states. How each emotion signals, what it requires to complete, and how it reroutes under different regulatory conditions."
              color={SPECTRUM.sky}
            />
            <RootFileCard
              number={2}
              title="Awareness Capacities"
              role="The receiver — determines if the signal lands"
              details="Interpersonal Affect Perception (RE), Affective Resonance (ER), Interoceptive Self-Awareness (SEA). How the three capacities interact, what happens when each is absent or suppressed, and how they recover."
              color={SPECTRUM.azure}
            />
            <RootFileCard
              number={3}
              title="Mode Positions"
              role="The state — what configuration the system enters"
              details="Four fluid and four chronic positions. Each mapped across multiple dimensions — how the system activates, perceives, behaves, and what repair looks like from each position."
              color={SPECTRUM.cobalt}
            />
            <RootFileCard
              number={4}
              title="Biological Restoration"
              role="The return — whether the cycle completes"
              details="What genuine return looks like from each mode. What substitutes step in when return fails. Why substitutes escalate. The mechanics of the regulation thread."
              color={SPECTRUM.indigo}
            />
            <RootFileCard
              number={5}
              title="Master Table"
              role="All four layers compressed into integration tables and structural rules"
              details="The complete compass in tabular form — fluid and chronic states across all dimensions. Structural rules governing how consolidated data derives into published content. Every cell traceable to one of the four mechanism files."
              color={SPECTRUM.slate}
            />
          </div>

          <div
            style={{
              padding: "16px 20px",
              background: hexToRgba(SPECTRUM.cobalt, 0.06),
              borderRadius: RADIUS.md,
              border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
            }}
          >
            <div style={labelStyle(SPECTRUM.cobalt)}>The causal chain</div>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: "8px 0 0" }}>
              Emotion fires → Capacities determine if it lands → Mode configures the system state → Restoration completes or fails. When restoration fails, a regulation substitute steps in. This is the Regulation Thread — the mechanism that runs through all twelve frameworks.
            </p>
          </div>
        </section>

        {/* ─── SECTION 5: FROM ROOT TO OUTPUT ──────────────── */}
        <section id="from-root-to-output" style={{ marginBottom: 40 }}>
          <h2 style={sectionHeadStyle}>From root to output</h2>
          <p style={{ ...bodyStyle, marginBottom: 20 }}>
            Root data distributes to two sites through different mechanisms. On teg-blue.com, root data is exported as JavaScript data libraries that feed interactive tools. On teg-blue.org, root data is verified against inline content in research pages.
          </p>

          {/* .com export chain */}
          <div style={{ marginBottom: 24 }}>
            <h3 style={subsectionHeadStyle}>teg-blue.com — Data libraries to tools</h3>
            <div
              style={{
                background: BG.card,
                borderRadius: RADIUS.md,
                border: `1px solid ${BORDER.default}`,
                overflow: "hidden",
                marginBottom: 12,
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: BG.surface }}>
                    <th style={tableHeaderStyle}>Data library</th>
                    <th style={tableHeaderStyle}>Root source</th>
                    <th style={tableHeaderStyle}>What it exports</th>
                  </tr>
                </thead>
                <tbody>
                  <ExportRow
                    library="Compass data library"
                    source="Master Table + Mode Positions + Awareness Capacities"
                    exports="Mode data across fluid and chronic states, capacity profiles, structural rules, emotion data"
                  />
                  <ExportRow
                    library="Emotions data library"
                    source="Emotions as Signals"
                    exports="All sixteen emotions mapped across modes and states"
                  />
                  <ExportRow
                    library="Tool query engine"
                    source="All data libraries"
                    exports="The query layer that all 20+ interactive tools consume — gradients, capacity views, mode summaries"
                    isLast
                  />
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.6 }}>
              Each of the 20+ interactive tools on teg-blue.com has its own data file that draws from these libraries. Changes to root data propagate through the libraries to every tool.
            </p>
          </div>

          {/* .org distribution */}
          <div style={{ marginBottom: 24 }}>
            <h3 style={subsectionHeadStyle}>teg-blue.org — Root data to research pages</h3>
            <div
              style={{
                background: BG.card,
                borderRadius: RADIUS.md,
                border: `1px solid ${BORDER.default}`,
                overflow: "hidden",
                marginBottom: 12,
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: BG.surface }}>
                    <th style={tableHeaderStyle}>Page type</th>
                    <th style={tableHeaderStyle}>Root files to verify against</th>
                  </tr>
                </thead>
                <tbody>
                  <VerifyRow
                    pageType="Framework pages (F1–F12)"
                    rootFiles="Mode Positions, Awareness Capacities, Biological Restoration, Emotions as Signals"
                  />
                  <VerifyRow
                    pageType="Model pages (M1–M4)"
                    rootFiles="M1 → Emotions as Signals; M2 → Mode Positions; M3 → Biological Restoration; M4 → Awareness Capacities"
                  />
                  <VerifyRow
                    pageType="Compass diagram"
                    rootFiles="All 5 root files — modes, emotions, curves, capacities, restoration, structural rules"
                  />
                  <VerifyRow
                    pageType="Glossary (185 terms)"
                    rootFiles="All root files (spot-checked for consistency)"
                    isLast
                  />
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.6 }}>
              The .org site has no JavaScript imports from vault data. All content is inline in page files. Root data serves as the verification source — content on the research site must be consistent with root data.
            </p>
          </div>

          {/* Two-site comparison */}
          <div
            style={{
              background: BG.card,
              borderRadius: RADIUS.md,
              border: `1px solid ${BORDER.default}`,
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: BG.surface }}>
                  <th style={tableHeaderStyle}>Aspect</th>
                  <th style={tableHeaderStyle}>teg-blue.org</th>
                  <th style={tableHeaderStyle}>teg-blue.com</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow aspect="Purpose" orgValue="Open science and research" comValue="Interactive tools and application" />
                <ComparisonRow aspect="Audience" orgValue="Researchers, academics, practitioners" comValue="Anyone seeking clarity about patterns" />
                <ComparisonRow aspect="How root data arrives" orgValue="Inline content verified against root" comValue="JS data libraries imported from root" />
                <ComparisonRow aspect="Data source" orgValue="Same consolidated root data" comValue="Same consolidated root data" isLast />
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── SECTION 6: TRACEABILITY ─────────────────────── */}
        <section id="traceability" style={{ marginBottom: 40 }}>
          <h2 style={sectionHeadStyle}>Traceability</h2>
          <p style={{ ...bodyStyle, marginBottom: 20 }}>
            Provenance is an architectural constraint — every claim traces backward through the data system. Each root file section has a provenance table classifying its relationship to its originating CA.
          </p>

          <div style={{ marginBottom: 16 }}>
            <div style={labelStyle(SPECTRUM.indigo)}>Provenance classifications</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}>
              <ProvenanceLevel
                code="FULL"
                description="The CA contains the complete intellectual architecture. The root file consolidates it operationally."
                color={SPECTRUM.azure}
              />
              <ProvenanceLevel
                code="PARTIAL"
                description="The CA covers the concept. The root file adds systematic detail or per-mode precision."
                color={SPECTRUM.cobalt}
              />
              <ProvenanceLevel
                code="ROOT-ONLY"
                description="Operational detail that correctly lives at root level — systematic tables, neuroanatomical specificity, per-mode × per-emotion data matrices. Not a gap."
                color={SPECTRUM.indigo}
              />
            </div>
          </div>

          <p style={{ ...bodyStyle, marginBottom: 20 }}>
            <strong style={{ color: TEXT.primary }}>The full traceability chain:</strong> a tool on teg-blue.com → its data file → the data library it imports → the root file section → the provenance table → the originating Concept Architecture → the established theories it credits. Any claim can be audited by following this chain.
          </p>

          <ExpandableSection title="Why provenance matters for integrative work" type="theory">
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              Integrative work — work that connects findings across disciplines — faces a specific challenge: the more connections a system proposes, the harder it becomes to verify any single one. Without structural traceability, integrative frameworks risk becoming unfalsifiable.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              TEG-Blue addresses this by making provenance part of the architecture itself. Each cross-disciplinary connection is documented at its intellectual origin, consolidated with its biological context, and published with its traceability intact. A researcher who questions a specific connection can follow it backward to the exact document where it was first proposed, see the reasoning, and evaluate the evidence independently.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
              This does not make the connections correct. It makes them auditable. That is the minimum requirement for integrative work to be taken seriously as science.
            </p>
          </ExpandableSection>
        </section>

        {/* ─── SECTION 7: DESIGN PRINCIPLES ────────────────── */}
        <section id="design-principles" style={{ marginBottom: 40 }}>
          <h2 style={sectionHeadStyle}>Design principles</h2>
          <p style={{ ...bodyStyle, marginBottom: 20 }}>
            Five constraints govern the data system.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <PrincipleCard
              number={1}
              title="Biological organization"
              description="Data is organized by what the body does, not by academic discipline. Emotions, capacities, modes, and restoration each map to a step in the nervous system's response cycle."
            />
            <PrincipleCard
              number={2}
              title="Provenance as architecture"
              description="Every root file section traces to its originating Concept Architecture. Every CA credits its source theories. Traceability is structural, not aspirational."
            />
            <PrincipleCard
              number={3}
              title="Separation of layers"
              description="Intellectual origin (CAs), operational consolidation (root data), and published output (sites) are independently verifiable. Each layer can be audited without depending on the others."
            />
            <PrincipleCard
              number={4}
              title="Single data source"
              description="Both sites draw from the same root data. Changes propagate through the export chain. Research pages and interactive tools always reflect the same underlying data."
            />
            <PrincipleCard
              number={5}
              title="Open by default"
              description="Methods, data structures, and reasoning are published openly. The system is designed to be audited, tested, corrected, and replicated."
            />
          </div>
        </section>

        {/* ─── AUTHOR ──────────────────────────────────────── */}
        <section style={{ marginBottom: 32 }}>
          <AuthorBlock />
        </section>

        {/* ─── WHERE TO GO NEXT ────────────────────────────── */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ ...sectionHeadStyle, marginBottom: 16 }}>Where to go next</h2>
          <div
            style={{
              background: BG.card,
              borderRadius: RADIUS.md,
              border: `1px solid ${BORDER.default}`,
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: BG.surface }}>
                  <th style={tableHeaderStyle}>If you want to…</th>
                  <th style={tableHeaderStyle}>Go here</th>
                </tr>
              </thead>
              <tbody>
                <NavRow label="See what the system contains" href="/scientific-foundations" linkText="Scientific Foundations →" />
                <NavRow label="Explore the research grounding" href="/scientific-foundations" linkText="Research Foundations →" />
                <NavRow label="Understand the open proof layer" href="/about" linkText="About TEG-Blue →" />
                <NavRow label="Review research methods" href="/methodology" linkText="Methodology →" />
                <NavRow label="Read the evidence" href="/publications" linkText="Publications →" />
                <NavRow label="Try the interactive tools" href="https://teg-blue.com/emotional-tools" linkText="teg-blue.com →" external />
                <NavRow label="Collaborate or validate" href="mailto:research@teg-blue.org" linkText="Research contact →" external />
              </tbody>
            </table>
          </div>
        </section>

      </PageLayout>

      <SiteFooter />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "How TEG-Blue Works", url: "/how-it-works" },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd(FAQ_ITEMS)) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "How TEG-Blue Works | TEG-Blue Research",
              url: "https://teg-blue.org/how-it-works",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

// ─── HELPER COMPONENTS ──────────────────────────────────

function PipelineLayer({ number, title, description, color, arrow }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 12,
          padding: 16,
          background: gradientCardBg(color),
          borderRadius: RADIUS.md,
          border: `1px solid ${hexToRgba(color, 0.2)}`,
          borderLeft: `3px solid ${color}`,
        }}
      >
        <span
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: hexToRgba(color, 0.15),
            color: color,
            fontFamily: FONT.mono,
            fontSize: 12,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginTop: 1,
          }}
        >
          {number}
        </span>
        <div>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, margin: "0 0 4px" }}>
            {title}
          </h3>
          <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
            {description}
          </p>
        </div>
      </div>
      {arrow && (
        <div style={{ textAlign: "center", color: TEXT.micro, fontSize: 16, lineHeight: 1, padding: "2px 0" }}>
          ↓
        </div>
      )}
    </>
  );
}

function RootFileCard({ number, title, role, details, color }) {
  return (
    <div
      style={{
        padding: 20,
        background: gradientCardBg(color),
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(color, 0.2)}`,
        borderLeft: `3px solid ${color}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <span
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: hexToRgba(color, 0.15),
            color: color,
            fontFamily: FONT.mono,
            fontSize: 11,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {number}
        </span>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, margin: 0 }}>
          {title}
        </h3>
      </div>
      <p style={{ fontSize: 14, fontWeight: 500, color: color, marginBottom: 8, fontStyle: "italic" }}>
        {role}
      </p>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
        {details}
      </p>
    </div>
  );
}

function CAGroupCard({ title, description, color, items, href, linkText }) {
  return (
    <div
      style={{
        padding: 20,
        background: gradientCardBg(color),
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(color, 0.2)}`,
        borderTop: `3px solid ${color}`,
      }}
    >
      <h3 style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
        {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, marginBottom: 12 }}>
        {description}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
        {items.map((item) => (
          <div key={item.label}>
            <p style={{ fontSize: 13, fontWeight: 600, color: TEXT.primary, margin: "0 0 2px" }}>
              {item.href ? (
                <Link href={item.href} style={{ color: SPECTRUM.blue, textDecoration: "none" }}>{item.label}</Link>
              ) : item.label}
            </p>
            <p style={{ fontSize: 12, color: TEXT.muted, lineHeight: 1.5, margin: 0 }}>
              {item.detail}
            </p>
          </div>
        ))}
      </div>
      <Link href={href} style={{ fontSize: 13, color: SPECTRUM.blue, textDecoration: "none", fontWeight: 500 }}>
        {linkText}
      </Link>
    </div>
  );
}

function ProvenanceLevel({ code, description, color }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        padding: 14,
        background: BG.card,
        borderRadius: RADIUS.md,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${color}`,
      }}
    >
      <span
        style={{
          fontFamily: FONT.mono,
          fontSize: 10,
          fontWeight: 700,
          color: color,
          letterSpacing: "0.04em",
          padding: "3px 8px",
          background: hexToRgba(color, 0.1),
          borderRadius: 4,
          flexShrink: 0,
          marginTop: 2,
        }}
      >
        {code}
      </span>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>
    </div>
  );
}

function PrincipleCard({ number, title, description }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        padding: 16,
        background: BG.card,
        borderRadius: RADIUS.md,
        border: `1px solid ${BORDER.default}`,
      }}
    >
      <span
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: hexToRgba(SPECTRUM.blue, 0.12),
          color: SPECTRUM.blue,
          fontFamily: FONT.mono,
          fontSize: 11,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginTop: 2,
        }}
      >
        {number}
      </span>
      <div>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, margin: "0 0 4px" }}>
          {title}
        </h3>
        <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

function NavRow({ label, href, linkText, external }) {
  const LinkEl = external ? "a" : Link;
  const extraProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ ...tableCellStyle, color: TEXT.secondary }}>{label}</td>
      <td style={tableCellStyle}>
        <LinkEl href={href} {...extraProps} style={{ color: SPECTRUM.blue, textDecoration: "none", fontWeight: 500 }}>
          {linkText}
        </LinkEl>
      </td>
    </tr>
  );
}

function SourceRow({ discipline, contributes, examples, isLast }) {
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ ...tableCellStyle, color: TEXT.primary, fontWeight: 500 }}>{discipline}</td>
      <td style={{ ...tableCellStyle, color: TEXT.secondary }}>{contributes}</td>
      <td style={{ ...tableCellStyle, color: TEXT.muted, fontSize: 13 }}>{examples}</td>
    </tr>
  );
}

function ExportRow({ library, source, exports: exp, isLast }) {
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ ...tableCellStyle, color: TEXT.primary, fontWeight: 500, fontFamily: FONT.mono, fontSize: 12 }}>{library}</td>
      <td style={{ ...tableCellStyle, color: TEXT.secondary, fontSize: 13 }}>{source}</td>
      <td style={{ ...tableCellStyle, color: TEXT.muted, fontSize: 13 }}>{exp}</td>
    </tr>
  );
}

function VerifyRow({ pageType, rootFiles, isLast }) {
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ ...tableCellStyle, color: TEXT.primary, fontWeight: 500 }}>{pageType}</td>
      <td style={{ ...tableCellStyle, color: TEXT.secondary, fontSize: 13 }}>{rootFiles}</td>
    </tr>
  );
}

function ComparisonRow({ aspect, orgValue, comValue, isLast }) {
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ ...tableCellStyle, color: TEXT.primary, fontWeight: 500 }}>{aspect}</td>
      <td style={{ ...tableCellStyle, color: TEXT.secondary }}>{orgValue}</td>
      <td style={{ ...tableCellStyle, color: TEXT.secondary }}>{comValue}</td>
    </tr>
  );
}

// ─── SHARED STYLES ──────────────────────────────────────

const sectionHeadStyle = {
  fontSize: 18,
  fontWeight: 600,
  color: TEXT.primary,
  marginBottom: 12,
};

const subsectionHeadStyle = {
  fontSize: 14,
  fontWeight: 600,
  color: TEXT.primary,
  marginBottom: 8,
};

const bodyStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
};

const listStyle = {
  paddingLeft: 20,
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  margin: 0,
};

function labelStyle(color) {
  return {
    fontSize: 9,
    fontWeight: 700,
    fontFamily: FONT.mono,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: color,
    marginBottom: 4,
  };
}

const tableHeaderStyle = {
  padding: "12px 16px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 600,
  color: TEXT.muted,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontFamily: FONT.mono,
};

const tableCellStyle = {
  padding: "12px 16px",
  fontSize: 14,
};
