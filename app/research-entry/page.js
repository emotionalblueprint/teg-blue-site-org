import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, hexToRgba, MAIN_ORG, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, ResearcherHero, PropositionBox, AuthorBlock } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What is original about TEG-Blue?",
    answer: "TEG-Blue does not invent its building blocks — those come from established theories like Polyvagal Theory and Attachment Theory. The originality is in the specific cross-disciplinary connections between them, such as nervous system regulation shaping moral perception, and attachment patterns driving social stratification.",
  },
  {
    question: "What is the core testable claim of TEG-Blue?",
    answer: "The key variable that predicts relational and behavioral outcomes is not a person's current nervous system state, but their State Flexibility — capacity to return to physiological baseline when challenged. This capacity is measurable through complexity markers in natural language.",
  },
  {
    question: "How can researchers collaborate with TEG-Blue?",
    answer: "Researchers can independently use the framework, data, and methodology. Five open research questions span biological mechanism, clinical, developmental, collective, and AI domains. Contact research@teg-blue.org to discuss specific directions.",
  },
];

const SIDEBAR_SECTIONS = [
  { label: "What TEG-Blue Is", href: "#what-is-original", description: "The architecture is the contribution — established findings held in one frame to show the pattern that only appears together." },
  { label: "What's Been Built", href: "#whats-been-built", description: "A developed, openly published body of work: 12 frameworks, 4 models, an integrated corpus, and a first validation study." },
  { label: "Core Testable Claim", href: "#core-testable-claim", description: "The key variable is not current nervous system state but State Flexibility — capacity to return to baseline when challenged." },
  { label: "Open Research Questions", href: "#open-research-directions", description: "Research questions across biological mechanism, clinical, developmental, collective, and AI domains." },
  { label: "Where to Go From Here", href: "#where-to-go-from-here", description: "Navigation paths into the framework depending on your research interest." },
];

export const metadata = {
  title: "Start Here | TEG-Blue Research",
  description: "Entry point for researchers and academics. TEG-Blue is an integrative architecture grounded in nervous system science — a pattern recognition system connecting 145+ theoretical contributions from 41 research traditions. Open access, open questions, open to validation.",
  keywords: [
    "TEG-Blue research",
    "emotional technology",
    "emotional regulation research",
    "open science psychology",
    "research collaboration",
    "state flexibility",
    "emotional intelligence measurement",
    "AI safety research",
    "computational social science",
    "nervous system regulation research",
    "attachment research",
  ],
  alternates: {
    canonical: "https://teg-blue.org/research-entry",
  },
  openGraph: {
    title: "Start Here — TEG-Blue Open Science Platform",
    description: "Entry point for academics. Open research questions, clear methodology, everything open access. The building blocks are validated; the connections need verification.",
    url: "https://teg-blue.org/research-entry",
    siteName: "TEG-Blue Research",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Here — TEG-Blue",
    description: "Open science platform connecting 145+ theoretical contributions. Open research questions, everything open access.",
  },
};

export default function ResearchEntryPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/research-entry" />

      <PageLayout
        header={
          <header style={{ marginBottom: 32 }}>
            <ResearcherHero
              badge="ENTRY POINT"
              title="Start Here"
              subtitle="An integrative architecture of how the nervous system organizes — from one body to whole societies"
              description="TEG-Blue synthesizes 41 research traditions into one coherent, testable system: how the nervous system organizes around safety and threat, and how the same mechanism scales from individual regulation to identity, relationships, and social structure. Openly published, grounded in established science, and examined in a first validation study against 10,000+ real-world conflict narratives."
            />
            <div style={{ marginTop: 20 }}>
              <Link
                href="/foundations"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  color: SPECTRUM.blue,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                If you want the full system map first: System Overview →
              </Link>
            </div>
            <div style={{ marginTop: 16, fontSize: 13, color: TEXT.muted }}>
              Open access · CC BY-NC-SA 4.0 · <Link href="/publications#how-to-cite" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>How to cite →</Link>
            </div>
          </header>
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* What is original */}
        <section id="what-is-original" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            What TEG-Blue is
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
            TEG-Blue&apos;s contribution is the architecture. The findings it draws on are established — what no single field had done is hold them in one frame and show the pattern that only appears when they sit together: the nervous system&apos;s organization around safety and threat, running through emotion, identity, relationships, and social structure as one mechanism, at every scale.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
            The integration is the work — the sequence, the cross-scale structure, the map that makes those findings legible as one system. What it makes visible:
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8 }}>
            <li style={{ marginBottom: 6 }}>Nervous system regulation and moral perception</li>
            <li style={{ marginBottom: 6 }}>Attachment patterns and social stratification</li>
            <li style={{ marginBottom: 6 }}>Protection-to-domination as one continuous gradient</li>
            <li>Linguistic complexity as a marker of regulatory capacity</li>
          </ul>
          <p style={{ fontSize: 14, color: TEXT.primary, fontWeight: 500, margin: 0 }}>
            The findings it integrates are established. The architecture that connects them is TEG-Blue&apos;s contribution — and its specific predictions are open to testing.
          </p>

          {/* The Regulation Thread — the through-line across the frameworks */}
          <div
            style={{
              marginTop: 20,
              padding: "12px 16px",
              background: hexToRgba(SPECTRUM.cobalt, 0.06),
              borderRadius: 8,
              border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
            }}
          >
            <div
              style={{
                fontSize: 9,
                fontWeight: 700,
                fontFamily: FONT.mono,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: SPECTRUM.cobalt,
                marginBottom: 6,
              }}
            >
              The Regulation Thread
            </div>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: "0 0 8px" }}>
              The through-line: a single mechanism — restoration substitutes — runs through all 12 frameworks. When the body&apos;s natural return path is missing, something else steps in: cognition, rules, hierarchies, bias, domination. Each substitute works. Each comes at a cost. F8–F12 reverse the thread.
            </p>
            <Link
              href="/frameworks-map#the-regulation-thread"
              style={{
                fontSize: 13,
                color: SPECTRUM.cobalt,
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              See the full thread →
            </Link>
          </div>
        </section>

        {/* What's been built */}
        <section id="whats-been-built" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            What&apos;s been built
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16, maxWidth: 640 }}>
            TEG-Blue is not a proposal in search of a foundation. It is a developed body of work, openly published and inspectable.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <StatusCard
              label="The architecture"
              color={SPECTRUM.indigo}
              description="12 frameworks and 4 models tracing one mechanism from the individual nervous system to collective structure."
            />
            <StatusCard
              label="An integrated corpus"
              color={SPECTRUM.azure}
              description={
                <>145+ theoretical contributions from 41 research traditions, cross-referenced to where each underwrites the architecture. See <Link href="/scientific-foundations" style={{ color: SPECTRUM.blue }}>Established Research</Link>.</>
              }
            />
            <StatusCard
              label="A first validation study"
              color={SPECTRUM.blue}
              description={
                <>A computational analysis of 10,000+ conflict narratives testing Nervous System Gradient detection, published (DOI 10.5281/zenodo.19472342). More in <Link href="/publications" style={{ color: SPECTRUM.blue }}>Publications</Link>.</>
              }
            />
            <StatusCard
              label="Fully open"
              color={SPECTRUM.slate}
              description="Methods, data, and frameworks published under CC BY-NC-SA 4.0 — for independent use, testing, and replication."
            />
          </div>
        </section>

        {/* Core hypothesis */}
        <section id="core-testable-claim" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            Core testable claim
          </h2>
          <PropositionBox
            label="CORE HYPOTHESIS"
            title="Return capacity predicts relational outcomes"
          >
            <p style={{ margin: 0, fontStyle: "italic" }}>
              The key variable that predicts relational and behavioral outcomes is not a person&apos;s current nervous system state, but their <strong>State Flexibility — capacity to return to physiological baseline when challenged</strong>.
            </p>
          </PropositionBox>
          <div
            style={{
              marginTop: 16,
              padding: 16,
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 8 }}>
              <strong style={{ color: TEXT.primary }}>Operationalization:</strong> Measurable in language via complexity markers — accountability without collapse, perspective-taking, repair attempts, emotional differentiation, reduced coercion under stress.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 0 }}>
              <strong style={{ color: TEXT.primary }}>Research need:</strong> Replication and cross-context validation. Which markers are reliable? Which are context-dependent? How do they shift across stress load, power dynamics, and attachment history?
            </p>
          </div>
          <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 12 }}>
            Related frameworks: <Link href="/framework/f8-repairing-awareness" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>F8 (Repairing Awareness)</Link>, <Link href="/framework/f9-neurodivergence-variation" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>F9 (Neurodivergence as Nervous System Variation)</Link>, <Link href="/framework/f10-generational-bridges" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>F10 (Rebuilding Generational Bridges)</Link>.
          </p>
        </section>

        {/* Open research directions */}
        <section id="open-research-directions" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
            Open research questions
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 8, maxWidth: 640 }}>
            These questions emerged from building the integration. I don&apos;t have answers to most of them. Some point to gaps in existing literature. Some point to claims TEG-Blue makes that need external testing. Some I couldn&apos;t find addressed anywhere — which is either a gap worth filling or a sign I looked in the wrong places.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20, maxWidth: 640 }}>
            Each can be pursued independently. If one matches your work, that&apos;s the relevant entry point.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <ResearchDomainCard
              title="On the biological mechanism"
              questions={[
                "If Biological Restoration is a learnable capacity and not just an automatic function, what are the developmental windows during which co-regulatory experience most determines whether the return path forms?",
                "Can the absence of a learned restoration path be distinguished from dysregulation caused by acute overwhelm using existing neurobiological markers — and if so, what would that distinction require clinically?",
                "Does a Chronic State Organisation produce different physiological signatures than a slowly returning nervous system — and does that distinction predict different intervention needs?",
              ]}
              refLinks={[
                { href: "/framework/f1-emotional-gradient", label: "F1" },
                { href: "/model/m2-nervous-system-states", label: "Nervous System States (M2)" },
              ]}
            />
            <ResearchDomainCard
              title="On individual and clinical questions"
              questions={[
                "False coherence is proposed as a cognitive regulation strategy. Does it produce measurable physiological stabilisation — and what is the cost of removing it without first building the restoration capacity it replaced?",
                "The three awareness capacities — Interpersonal Affect Perception (RE), Affective Resonance (ER), Interoceptive Self-Awareness (SEA) — are proposed as developmentally distinct. Do they dissociate independently — and can high Interpersonal Affect Perception (RE) and Affective Resonance (ER) with absent Interoceptive Self-Awareness (SEA) be distinguished from existing clinical categories?",
                "If mode position determines what an emotion produces — not the emotion itself — what would a mode-position assessment look like in practice, and how does it differ from existing affect regulation measures?",
              ]}
              refLinks={[
                { href: "/framework/f2-awareness-calibration", label: "F2" },
                { href: "/framework/f3-false-coherence", label: "F3" },
                { href: "/methodology", label: "Methodology" },
              ]}
            />
            <ResearchDomainCard
              title="On development and generational transmission"
              questions={[
                "The transmission mechanism proposed is specific: adult awareness configuration → child awareness configuration — not environment in the generic sense. Can this causal chain be measured with enough precision to distinguish it from broader environmental stress models?",
                "Is there a measurable threshold of adult restoration capacity below which co-regulation cannot function as a developmental transmission mechanism, regardless of relational warmth or intention?",
                "If what the adult embodies — not says, not intends — is the determining variable, what does intervention need to target in caregivers to change developmental outcomes in the next generation?",
              ]}
              refLinks={[
                { href: "/framework/f2-awareness-calibration", label: "F2" },
                { href: "/framework/f10-generational-bridges", label: "F10" },
              ]}
            />
            <ResearchDomainCard
              title="On collective scale"
              questions={[
                "Is what we call emotional dysregulation at the individual level and social dysfunction at the collective level the same missing mechanism — Biological Restoration never learned — operating at different scales?",
                "If collective rule systems, worth hierarchies, and bias all function as regulation substitutes, do they show the same escalation pattern under threat that individual compensatory strategies show — and can that escalation be interrupted at the same points?",
                "Domination is proposed as the end state of a pathway driven by reinforcement, not personality. Does this model make predictions about which organisational and cultural conditions accelerate or interrupt that pathway — and are those predictions testable?",
              ]}
              refLinks={[
                { href: "/frameworks-map", label: "Frameworks F4–F7" },
              ]}
            />
            <ResearchDomainCard
              title="On AI and language systems"
              questions={[
                "If the emotional-somatic system produces its output before language exists — and language belongs exclusively to the cognitive system — what does language-based AI training miss that a TEG-Blue-informed framework would need to account for?",
                "Is emotional pattern recognition across contexts — individual, relational, institutional — sufficiently consistent to be mapped and tested in AI systems, and what would the framework need to specify for that to be possible?",
              ]}
              refLinks={[
                { href: "/ai-safety", label: "AI Safety" },
                { href: "https://github.com/TEG-Blue/ai-safety", label: "GitHub" },
              ]}
            />
          </div>
        </section>

        {/* Next steps table */}
        <section id="where-to-go-from-here" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Where to go from here
          </h2>
          <div
            style={{
              background: BG.card,
              borderRadius: 8,
              border: `1px solid ${BORDER.default}`,
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: BG.surface }}>
                  <th style={{ ...tableHeaderStyle }}>To</th>
                  <th style={{ ...tableHeaderStyle }}>Go to</th>
                </tr>
              </thead>
              <tbody>
                <NextStepRow step="Understand the full system" href="/foundations" label="System Overview →" />
                <NextStepRow step="See how the system is built" href="/how-it-works" label="How It Works →" />
                <NextStepRow step="See the applied models" href="/emotional-somatic-cycle" label="Core Models →" />
                <NextStepRow step="See the explanatory architecture" href="/frameworks-map" label="Frameworks →" />
                <NextStepRow step="See the mechanics in action" href="/mechanics-of-phenomena" label="Mechanics →" />
                <NextStepRow step="Review evidence and methods" href="/publications" label="Publications" extra={<> · <Link href="/methodology" style={{ color: SPECTRUM.blue }}>Methodology</Link></>} />
                <NextStepRow step="Use this work" href="/collaborate" label="Collaborate →" />
              </tbody>
            </table>
          </div>
        </section>

        {/* Contact */}
        <section
          style={{
            padding: 24,
            background: BG.card,
            borderRadius: 8,
            border: `1px solid ${BORDER.default}`,
            borderLeft: `3px solid ${SPECTRUM.azure}`,
          }}
        >
          <h2 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            Contact
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, marginBottom: 16 }}>
            If any of these directions match your work, reach out with a short note — your background, which direction interests you, and what you&apos;d want to test or critique first.
          </p>
          <a
            href="mailto:research@teg-blue.org"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              background: SPECTRUM.blue,
              color: "#fff",
              borderRadius: 8,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            research@teg-blue.org
          </a>
        </section>

        {/* Author */}
        <section style={{ marginBottom: 32 }}>
          <AuthorBlock />
        </section>

      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Start Here", url: "/research-entry" },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Start Here — TEG-Blue Research",
            url: "https://teg-blue.org/research-entry",
            description: "Entry point for researchers and academics. TEG-Blue is an integrative architecture grounded in nervous system science — connecting 145+ theoretical contributions from 41 research traditions into testable claims.",
            inLanguage: "en",
            isPartOf: {
              "@type": "ResearchProject",
              name: "TEG-Blue: The Emotional Gradient Blueprint",
              url: "https://teg-blue.org",
            },
            about: [
              { "@type": "Thing", name: "Open Research Questions", description: "Five priority research directions across biological mechanism, clinical, developmental, collective, and AI domains" },
              { "@type": "Thing", name: "Core Testable Claim", description: "The key variable is not current nervous system state but State Flexibility — capacity to return to physiological baseline when challenged" },
            ],
          }),
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
              name: "Start Here | TEG-Blue Research",
              url: "https://teg-blue.org/research-entry",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

// Helper components
function StatusCard({ label, color, description }) {
  return (
    <div
      style={{
        padding: 16,
        background: gradientCardBg(color),
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${color}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            fontFamily: FONT.mono,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            color: color,
            padding: "4px 8px",
            background: hexToRgba(color, 0.1),
            borderRadius: 4,
          }}
        >
          {label}
        </span>
      </div>
      <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
        {description}
      </p>
    </div>
  );
}

function ResearchDomainCard({ title, questions, refLinks }) {
  return (
    <div
      style={{
        padding: 20,
        background: gradientCardBg(SPECTRUM.azure),
        borderRadius: 10,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${SPECTRUM.azure}`,
      }}
    >
      <h3 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
        {title}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
        {questions.map((q, i) => (
          <p key={i} style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
            {q}
          </p>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
        <span style={{ fontSize: 13, color: TEXT.muted }}>→</span>
        {refLinks.map(({ href, label }, i) => (
          <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            {i > 0 && <span style={{ fontSize: 13, color: TEXT.muted }}>·</span>}
            <Link
              href={href}
              style={{
                fontSize: 13,
                color: SPECTRUM.blue,
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {label}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}

function NextStepRow({ step, href, label, extra }) {
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ ...tableCellStyle, color: TEXT.secondary }}>{step}</td>
      <td style={{ ...tableCellStyle }}>
        <Link
          href={href}
          style={{
            color: SPECTRUM.blue,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          {label}
        </Link>
        {extra}
      </td>
    </tr>
  );
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
