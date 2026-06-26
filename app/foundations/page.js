import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, hexToRgba, MAIN_ORG, gradientCardBg } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ResearcherHero, PageLayout } from "@/src/components";
import { generateSystemOverviewJsonLd, generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "How is TEG-Blue organized?",
    answer: "TEG-Blue is currently organized across distinct surfaces: the public framework and research-grounding home on teg-blue.org, practical public tools on teg-blue.com, and separate applied Engine logic for bounded institutional or partner tools.",
  },
  {
    question: "What problem does TEG-Blue address?",
    answer: "TEG-Blue addresses the ambiguity between nervous system protection and intentional manipulation. Both look similar on the surface but require very different responses. The framework makes emotional behavior legible by treating emotions as structured biological signals.",
  },
  {
    question: "What is the Regulation Thread?",
    answer: "The Regulation Thread is one mechanism running through all twelve frameworks: when the body's natural return path (Biological Restoration) is missing, something else steps in — cognition, rules, hierarchies, bias, domination. Each substitute works at a cost. F8-F12 reverse the thread.",
  },
];

const SIDEBAR_SECTIONS = [
  { label: "The Problem", href: "#the-problem", description: "What problem does TEG-Blue address? Ambiguity between nervous system protection and intentional manipulation." },
  { label: "Part 1 — Measurement", href: "#part-1-measurement", description: "Four Foundational Models: Emotions as Signals, Nervous System States, Regulation Capacities, and Awareness Capacities." },
  { label: "Part 2 — Frameworks", href: "#part-2-frameworks", description: "12 explanatory frameworks across three arcs. The Regulation Thread." },
  { label: "Part 3 — Emotional Tools", href: "#part-3-emotional-tools", description: "Applied instruments for practitioners, researchers, and individuals." },
  { label: "Part 4 — Applied Context", href: "#part-4-ai-safety", description: "Structured context for bounded applied and computational uses." },
  { label: "Core Functions", href: "#core-functions", description: "What are the four core functions of TEG-Blue and how the parts interact." },
  { label: "Ethical Constraint", href: "#ethical-constraint", description: "Pattern-aware data architecture. Intent–Impact–Pattern logic." },
];

export const metadata = {
  title: "System Overview | TEG-Blue",
  description: "How the public framework, research grounding, practical tools, and applied Engine logic relate inside TEG-Blue.",
  keywords: [
    "TEG-Blue architecture",
    "emotional regulation system",
    "nervous system gradient",
    "12 frameworks",
    "emotional tools",
    "nervous system regulation",
    "research grounding",
    "source traces",
    "integrative architecture",
    "pattern-aware architecture",
    "polyvagal theory",
    "attachment theory",
  ],
  alternates: {
    canonical: "https://teg-blue.org/foundations",
  },
  openGraph: {
    title: "System Overview — TEG-Blue",
    description: "How the public framework, research grounding, practical tools, and applied Engine logic relate inside TEG-Blue.",
    url: "https://teg-blue.org/foundations",
    type: "article",
    siteName: "TEG-Blue",
  },
  twitter: {
    card: "summary_large_image",
    title: "System Overview — TEG-Blue",
    description: "How the public framework, research grounding, practical tools, and applied Engine logic relate inside TEG-Blue.",
  },
};

export default function FoundationsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/foundations" />

      <PageLayout
        header={
          <ResearcherHero
            badge="SYSTEM ARCHITECTURE"
            title="System Overview"
            subtitle="How the parts fit together"
            description="TEG-Blue is a layered framework with distinct public, practical, and applied surfaces. The current public center is the Nervous System Gradient."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >

        {/* ─── THE PROBLEM & SOLUTION ─────────────────────── */}
        <section id="the-problem" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            What problem does TEG-Blue address?
          </h2>
          <div
            style={{
              padding: 24,
              background: BG.card,
              borderRadius: RADIUS.lg,
              border: `1px solid ${BORDER.default}`,
              marginBottom: 20,
            }}
          >
            <p style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
              The problem is ambiguity.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              Emotional misunderstanding fuels conflict, manipulation, and harm across individuals, organizations, and systems. Many existing models struggle to distinguish between nervous system protection — defensive patterns that developed for survival — and intentional emotional manipulation — strategic control of others. Both look similar on the surface. Yet they require very different responses.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              As digital platforms and AI systems increasingly mediate communication, this ambiguity is amplified. Emotional dynamics scale faster than our ability to interpret them.
            </p>
            <p style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
              What&apos;s missing is legibility.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              The science exists — decades of research across neuroscience, attachment theory, developmental psychology, and social psychology. But this knowledge is fragmented across disciplines, published in specialist language, inaccessible to those who need it most.
            </p>
            <p style={{ fontSize: 14, color: TEXT.primary, lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
              TEG-Blue makes emotional behavior legible. It treats emotions not as noise or subjective chaos, but as structured biological and relational signals that organize behavior in predictable ways.
            </p>
          </div>

          {/* Core Insight + Testable Claim */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            <div
              style={{
                padding: 20,
                background: gradientCardBg(SPECTRUM.cobalt),
                borderRadius: RADIUS.md,
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
                borderLeft: `3px solid ${SPECTRUM.cobalt}`,
              }}
            >
              <div style={labelStyle(SPECTRUM.cobalt)}>Core Insight</div>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
                <strong style={{ color: TEXT.primary }}>State determines capacity</strong> — what someone can perceive, feel, think, and do depends on their nervous system state.
              </p>
            </div>
            <div
              style={{
                padding: 20,
                background: gradientCardBg(SPECTRUM.indigo),
                borderRadius: RADIUS.md,
                border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.2)}`,
                borderLeft: `3px solid ${SPECTRUM.indigo}`,
              }}
            >
              <div style={labelStyle(SPECTRUM.indigo)}>The Core Testable Claim</div>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
                The key variable that may help explain relational and behavioral outcomes is not only a person&apos;s current nervous system state, but their <strong style={{ color: TEXT.primary }}>capacity to return to baseline when challenged</strong>. This capacity can be studied through &ldquo;complexity markers&rdquo; — signs of self-awareness, perspective-taking, and emotional differentiation in natural language.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FOUR PART CARDS ────────────────────────────── */}
        <section style={{ marginBottom: 40 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(45%, 160px), 1fr))",
              gap: 12,
            }}
          >
            <PartIntroCard number={1} title="Measurement" subtitle="Four Foundational Models" color={SPECTRUM.azure} href="/emotional-somatic-cycle" />
            <PartIntroCard number={2} title="Explanatory" subtitle="12 Frameworks" color={SPECTRUM.cobalt} href="/frameworks-map" />
            <PartIntroCard number={3} title="Emotional Tools" subtitle="Applied Instruments" color={SPECTRUM.indigo} href="https://teg-blue.com/emotional-tools" external />
            <PartIntroCard number={4} title="Applied Context" subtitle="Structured Schemas" color={SPECTRUM.slate} href="/ai-safety" />
          </div>
        </section>

        {/* ─── PART 1: MEASUREMENT ────────────────────────── */}
        <section id="part-1-measurement" style={{ marginBottom: 40 }}>
          <PartCard number={1} title="Measurement" color={SPECTRUM.azure}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              The Emotional Somatic System
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              The measurement part describes what is actually happening — in a body, in a relationship, in a conversation — and gives it a name that can be tracked. Four models make up this part. They work together.
            </p>
            <ul style={listStyle}>
              <li style={{ marginBottom: 8 }}><Link href="/model/m1-emotions-as-signals" style={{ color: SPECTRUM.blue, textDecoration: "none", fontWeight: 600 }}>M1 — Emotions as Signals</Link> <em style={{ color: TEXT.muted }}>(The nervous system language)</em> — What is the nervous system delivering? Sixteen emotions mapped as biological signals carrying specific information about needs, safety, and constraint.</li>
              <li style={{ marginBottom: 8 }}><Link href="/model/m2-nervous-system-states" style={{ color: SPECTRUM.blue, textDecoration: "none", fontWeight: 600 }}>M2 — Nervous System States</Link> <em style={{ color: TEXT.muted }}>(Physiological reorganization)</em> — Where is the needle? The nervous system&apos;s continuous orientation between safety and threat, mapped across four states.</li>
              <li style={{ marginBottom: 8 }}><Link href="/model/m3-regulation-capacities" style={{ color: SPECTRUM.blue, textDecoration: "none", fontWeight: 600 }}>M3 — Regulation Capacities</Link> <em style={{ color: TEXT.muted }}>(Biological restoration)</em> — What is the body doing underneath? The physiological sequence that runs when emotion doesn&apos;t complete — and the designed return path that can only be allowed, not forced.</li>
              <li><Link href="/model/m4-awareness-capacities" style={{ color: SPECTRUM.blue, textDecoration: "none", fontWeight: 600 }}>M4 — Awareness Capacities</Link> <em style={{ color: TEXT.muted }}>(ESS awareness of CLS)</em> — What is holding it there? The three awarenesses that determine what data the nervous system receives and whether the person has access to their own internal state.</li>
            </ul>
            <StatusBadge status="Proposed models with early evidence" color={SPECTRUM.azure} />
            <div style={{ marginTop: 16 }}>
              <Link href="/emotional-somatic-cycle" style={{ fontSize: 14, color: SPECTRUM.blue, textDecoration: "none", fontWeight: 500 }}>
                See all four models →
              </Link>
            </div>
          </PartCard>
        </section>

        {/* ─── PART 2: EXPLANATORY FRAMEWORKS ─────────────── */}
        <section id="part-2-frameworks" style={{ marginBottom: 40 }}>
          <PartCard number={2} title="Explanatory Frameworks" color={SPECTRUM.cobalt}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              12 Frameworks (F1–F12)
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              The twelve frameworks are the explanatory architecture. They do not describe a different system from the models — they explain why the models work the way they do, how patterns escalate, and how change becomes possible again.
            </p>

            {/* The Regulation Thread */}
            <div
              style={{
                padding: "16px 20px",
                background: hexToRgba(SPECTRUM.cobalt, 0.06),
                borderRadius: RADIUS.md,
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
                marginBottom: 16,
              }}
            >
              <div style={labelStyle(SPECTRUM.cobalt)}>The Regulation Thread</div>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: "8px 0 0" }}>
                One mechanism runs through every framework: <strong style={{ color: TEXT.primary }}>regulation substitutes</strong>. When the body&apos;s natural return path — Biological Restoration — is missing, something else steps in. Cognition. Rules. Hierarchies. Bias. Domination. Each substitute works. Each comes at a cost. The cost escalates as the substitute moves further from the body and into the social world.
              </p>
              <p style={{ fontSize: 14, color: TEXT.primary, lineHeight: 1.8, margin: "8px 0 0", fontWeight: 500 }}>
                F1–F7 trace the escalation. F8–F12 reverse the thread.
              </p>
            </div>

            <ul style={listStyle}>
              <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Individual arc (F1–F3)</strong> — How the nervous system evaluates safety, calibrates through development, and compensates through cognition when the return path is missing.</li>
              <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Collective arc (F4–F7)</strong> — How individual patterns scale into shared rules, worth hierarchies, perception biases, and systemic domination.</li>
              <li><strong style={{ color: TEXT.primary }}>Repair and complexity arc (F8–F12)</strong> — How the awareness capacities rebuild, neurodivergent variation, generational transmission, paradox, and the two-information-system architecture underneath.</li>
            </ul>

            <StatusBadge status="Proposed synthesis grounded in 145+ theoretical contributions from 41 research traditions" color={SPECTRUM.cobalt} />
            <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 8 }}>
              Each framework credits its sources. The connections between them are TEG-Blue&apos;s contribution, open to structured review and testing.
            </p>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
              <Link href="/frameworks-map" style={{ fontSize: 14, color: SPECTRUM.blue, textDecoration: "none", fontWeight: 500 }}>
                See all 12 Frameworks →
              </Link>
            </div>
          </PartCard>
        </section>

        {/* ─── PART 3: EMOTIONAL TOOLS ────────────────────── */}
        <section id="part-3-emotional-tools" style={{ marginBottom: 40 }}>
          <PartCard number={3} title="Emotional Tools" color={SPECTRUM.indigo}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              Applied Instruments
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              The emotional tools translate the architecture into practical instruments. Each tool maps one dimension of human behavior across the full Nervous System Gradient — from regulated to dysregulated — with observable markers at every point. The gradient structure means each tool shows not just where a pattern sits, but the direction of movement: toward safety or away from it.
            </p>

            <div style={labelStyle(SPECTRUM.indigo)}>Who the tools are for</div>
            <ul style={{ ...listStyle, marginTop: 8, marginBottom: 16 }}>
              <li style={{ marginBottom: 8 }}><strong style={{ color: TEXT.primary }}>For therapists and clinicians</strong> — <span style={{ color: TEXT.secondary }}>A shared language for patterns that are otherwise hard to name. Support for session work, supervision, and formulation — not as diagnostic instruments, but as structured maps for noticing and conversation.</span></li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: TEXT.primary }}>For coaches and organizational practitioners</strong> — <span style={{ color: TEXT.secondary }}>The tools apply to professional and institutional contexts: conflict patterns, leadership dynamics, communication under pressure, relational safety in teams.</span></li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: TEXT.primary }}>For researchers</strong> — <span style={{ color: TEXT.secondary }}>Designed instruments needing formal psychometric testing. An open research need: psychometric design, factor structure exploration, convergent and discriminant validity, cultural adaptation, and bias evaluation.</span></li>
              <li><strong style={{ color: TEXT.primary }}>For individuals</strong> — <span style={{ color: TEXT.secondary }}>Available for personal exploration and self-understanding. They are not diagnostic. They are maps.</span></li>
            </ul>

            <div style={labelStyle(SPECTRUM.indigo)}>Example tools</div>
            <p style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.6, marginTop: 8, marginBottom: 16 }}>
              Empathy Gradient (genuine → selective → performed → weaponised) · Accountability Gradient (genuine → performed → absent → protective) · Integrity Scale (value-aligned → conditional → performed → remorseless) · Boundary Dynamics (permeable → reactive → rigid → exploitative) · Emotional Resonance Scale (open → filtered → absent → weaponised)
            </p>

            <StatusBadge status="Designed, not yet psychometrically tested" color={SPECTRUM.indigo} />
            <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 8 }}>
              Available for exploration on{" "}
              <a href="https://teg-blue.com/emotional-tools" target="_blank" rel="noopener noreferrer" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>teg-blue.com</a>, awaiting formal psychometric testing.
            </p>
            <div
              style={{
                marginTop: 16,
                padding: 12,
                background: hexToRgba(SPECTRUM.indigo, 0.05),
                borderRadius: RADIUS.sm,
              }}
            >
              <p style={{ fontSize: 13, color: TEXT.secondary, margin: 0 }}>
                <strong style={{ color: TEXT.primary }}>Research need:</strong> Scale design support, factor structure exploration, convergent and discriminant validity plans, bias and fairness evaluation.
              </p>
            </div>
          </PartCard>
        </section>

        {/* ─── PART 4: AI SAFETY ──────────────────────────── */}
        <section id="part-4-ai-safety" style={{ marginBottom: 40 }}>
          <PartCard number={4} title="Applied Context" color={SPECTRUM.slate}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
              Structured Schemas for AI Systems
            </h3>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              As AI systems mediate more human interaction, the ambiguity that TEG-Blue addresses is amplified. Emotional dynamics scale faster than the ability to interpret them. Systems trained on human language inherit human emotional patterns — including the dysregulated ones — without the nervous system context that makes those patterns legible.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              This applied context translates emotional-pattern logic into structured forms that can support bounded tool-building, research review, and computational use. This includes JSON-LD structured data, consistent terminology, semantic HTML, and gradient-based classifications that avoid flattening complex states into simple labels.
            </p>
            <StatusBadge status="Proposed architecture with early implementation" color={SPECTRUM.slate} />
            <div
              style={{
                marginTop: 16,
                padding: 12,
                background: hexToRgba(SPECTRUM.slate, 0.05),
                borderRadius: RADIUS.sm,
              }}
            >
              <p style={{ fontSize: 13, color: TEXT.secondary, margin: 0 }}>
                <strong style={{ color: TEXT.primary }}>Research need:</strong> Schema design feedback, evaluation protocols, risk analysis, misuse prevention design, and alignment with existing computational safety research.
              </p>
            </div>
            <div style={{ marginTop: 16 }}>
              <Link href="/ai-safety" style={{ fontSize: 14, color: SPECTRUM.blue, textDecoration: "none", fontWeight: 500 }}>
                Computational Applications →
              </Link>
            </div>
          </PartCard>
        </section>

        {/* ─── CORE FUNCTIONS ─────────────────────────────── */}
        <section id="core-functions" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            What are the four core functions of TEG-Blue?
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20, maxWidth: 640 }}>
            The system is designed to serve four functions. Each represents a research lane where collaboration is needed.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            <FunctionCard
              number={1}
              title="Measurement and recognition"
              description="Turning subjective states into observable, trackable patterns using gradients, states, and markers."
            />
            <FunctionCard
              number={2}
              title="Prediction and prevention"
              description="Mapping how states shift and escalate across the gradient. Harm often follows predictable progressions from Protection into Strategic Management and Domination."
            />
            <FunctionCard
              number={3}
              title="Navigation and intervention"
              description="Identifying interventions that help systems move from Strategic Management back toward Protection and Connection. Routes back to safety exist."
            />
            <FunctionCard
              number={4}
              title="Pattern breaking"
              description="Understanding how entrenched patterns — individual, relational, institutional — can be interrupted and restructured."
            />
          </div>
        </section>

        {/* ─── ETHICAL CONSTRAINT ─────────────────────────── */}
        <section id="ethical-constraint" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            Ethical constraint: Pattern-aware data architecture
          </h2>
          <div
            style={{
              padding: 24,
              background: BG.card,
              borderRadius: RADIUS.lg,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `3px solid ${SPECTRUM.indigo}`,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.primary, fontWeight: 600, marginBottom: 12 }}>
              An architectural constraint that applies to every tool, schema, and classification derived from TEG-Blue.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              The system maps behavior as a function of nervous system state. When the nervous system learned that return was not safe, it organises around protection — and the patterns that follow reflect that organisation, not a fixed category. The data architecture tracks state, pattern, and position as independent dimensions, each of which can change when conditions change.
            </p>

            <div style={{ ...labelStyle(SPECTRUM.indigo), marginBottom: 8 }}>
              Intent–Impact–Pattern Logic
            </div>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 12 }}>
              TEG-Blue maps each behavior across three dimensions simultaneously:
            </p>
            <ul style={listStyle}>
              <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Intent</strong> — What the nervous system is trying to do (even when it cannot be seen from the outside)</li>
              <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Pattern</strong> — Which gradient position or tool dimension it belongs to</li>
              <li><strong style={{ color: TEXT.primary }}>Impact</strong> — What it actually does to safety, power, and connection in the other person</li>
            </ul>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginTop: 12, marginBottom: 0 }}>
              This prevents reducing behavior to &ldquo;good person&rdquo; or &ldquo;bad person.&rdquo; The same behavior can serve different functions depending on state, history, and context. The same behavior can also cause the same harm regardless of intent. Both are true. The architecture holds both.
            </p>
          </div>
        </section>

        {/* ─── WHERE TO GO NEXT ───────────────────────────── */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Where to go next
          </h2>
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
                <NavRow label="See how the system is built" href="/how-it-works" linkText="How It Works →" />
                <NavRow label="Go deeper into the four models" href="/emotional-somatic-cycle" linkText="The Emotional Somatic System →" />
                <NavRow label="See all twelve frameworks" href="/frameworks-map" linkText="Frameworks →" />
                <NavRow label="Review the evidence" href="/publications" linkText="Publications →" />
                <NavRow label="Understand the methodology" href="/methodology" linkText="Methodology →" />
                <NavRow label="Explore the emotional tools" href="https://teg-blue.com/emotional-tools" linkText="teg-blue.com →" external />
                <NavRow label="Explore computational applications" href="/ai-safety" linkText="Computational Applications →" />
                <NavRow label="Collaborate or validate" href="/collaborate" linkText="Collaborate →" />
              </tbody>
            </table>
          </div>
        </section>

      </PageLayout>

      <SiteFooter />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSystemOverviewJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "System Overview", url: "/foundations" },
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
              name: "System Overview | TEG-Blue Research",
              url: "https://teg-blue.org/foundations",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

// ─── HELPER COMPONENTS ──────────────────────────────────

function PartCard({ number, title, color, children }) {
  return (
    <div
      style={{
        padding: 24,
        background: gradientCardBg(color),
        borderRadius: RADIUS.lg,
        border: `1px solid ${BORDER.default}`,
        borderTop: `3px solid ${color}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: hexToRgba(color, 0.15),
            color: color,
            fontFamily: FONT.mono,
            fontSize: 13,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {number}
        </span>
        <h2
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: color,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            fontFamily: FONT.mono,
            margin: 0,
          }}
        >
          Part {number} — {title}
        </h2>
      </div>
      {children}
    </div>
  );
}


function StatusBadge({ status, color }) {
  return (
    <span
      style={{
        display: "inline-flex",
        fontSize: 11,
        fontWeight: 600,
        fontFamily: FONT.mono,
        color: color,
        padding: "4px 10px",
        background: hexToRgba(color, 0.1),
        borderRadius: 4,
        marginTop: 12,
      }}
    >
      Status: {status}
    </span>
  );
}

function FunctionCard({ number, title, description }) {
  return (
    <div
      style={{
        padding: 16,
        background: gradientCardBg(SPECTRUM.blue),
        borderRadius: RADIUS.md,
        border: `1px solid ${BORDER.default}`,
      }}
    >
      <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
        {number}. {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>
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

function PartIntroCard({ number, title, subtitle, color, href, external }) {
  const CardWrapper = external ? "a" : Link;
  const extraProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <CardWrapper
      href={href}
      {...extraProps}
      style={{
        display: "block",
        padding: 16,
        background: gradientCardBg(color),
        borderRadius: RADIUS.lg,
        border: `1px solid ${hexToRgba(color, 0.2)}`,
        borderTop: `3px solid ${color}`,
        textDecoration: "none",
        transition: "all 0.2s ease",
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
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: color,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            fontFamily: FONT.mono,
          }}
        >
          Part {number}
        </span>
      </div>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: TEXT.primary, marginBottom: 4 }}>
        {title}
      </h3>
      <p style={{ fontSize: 12, color: TEXT.muted, margin: 0 }}>
        {subtitle} →
      </p>
    </CardWrapper>
  );
}

// ─── SHARED STYLES ──────────────────────────────────────

const bodyStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  margin: 0,
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
