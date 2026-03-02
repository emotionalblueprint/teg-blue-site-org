import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, PRIMARY, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import { generateBreadcrumbJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "Epistemological Foundations | TEG-Blue Research",
  description: "Why emotions are valid data: The philosophical and methodological foundations of TEG-Blue. Emotions function as biological information systems carrying meaningful data about safety, meaning, and connection.",
  keywords: [
    "emotions as data",
    "emotional intelligence",
    "epistemology",
    "emotional validity",
    "information theory",
    "nervous system",
    "relational intelligence",
    "emotional regulation",
    "biological information",
    "pattern recognition",
    "TEG-Blue foundations",
    "emotional science"
  ],
  alternates: {
    canonical: "https://teg-blue.org/epistemological-foundations",
  },
  openGraph: {
    title: "Epistemological Foundations — TEG-Blue Research",
    description: "Why emotions are valid data: The philosophical foundations of TEG-Blue's approach to emotional intelligence.",
    url: "https://teg-blue.org/epistemological-foundations",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epistemological Foundations — TEG-Blue Research",
    description: "Why emotions are valid data: The philosophical foundations of TEG-Blue.",
  },
};

export default function EpistemologicalFoundationsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/epistemological-foundations" />

      <main
        id="main-content"
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 32 }}>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: TEXT.primary,
              marginBottom: 12,
              letterSpacing: "-0.02em",
            }}
          >
            Epistemological Foundations
          </h1>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              lineHeight: 1.8,
              maxWidth: 640,
            }}
          >
            Why emotions are valid data.
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              maxWidth: 640,
              marginTop: 12,
            }}
          >
            This page establishes the philosophical foundation for the entire TEG-Blue system. By reframing emotions from irrational disturbances to intelligent data, it justifies the enterprise of emotional measurement, removes shame from emotional experience, and provides the framework for integrating emotional and logical intelligence.
          </p>
        </header>

        {/* Core Thesis */}
        <section style={{ marginBottom: 40 }}>
          <div
            style={{
              padding: 24,
              background: hexToRgba(SPECTRUM.indigo, 0.08),
              borderRadius: 10,
              border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.2)}`,
              borderLeft: `4px solid ${SPECTRUM.indigo}`,
            }}
          >
            <p
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: TEXT.primary,
                lineHeight: 1.6,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              "Emotions are biological information about safety and threat, not irrational impulses to be managed or overcome."
            </p>
          </div>
        </section>

        {/* Primary Core Concepts */}
        <section style={{ marginBottom: 40 }}>
          <SectionHeader color={SPECTRUM.blue}>Primary Core Concepts</SectionHeader>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <ConceptCard
              number={1}
              title="Emotion ≠ Irrational"
              subtitle="False Binary Rejection"
              color={SPECTRUM.blue}
            >
              <ConceptDetail label="What it explains">
                The fundamental cultural misconception that emotion and rationality are opposites.
              </ConceptDetail>
              <ConceptDetail label="What it reveals">
                Society has created an artificial divide between emotional and logical thinking that impoverishes both.
              </ConceptDetail>
              <ConceptDetail label="Why it matters">
                This false binary forces people to choose between feeling and thinking, when both are essential forms of intelligence.
              </ConceptDetail>
            </ConceptCard>

            <ConceptCard
              number={2}
              title="Emotion = Data"
              subtitle="Information Theory"
              color={SPECTRUM.blue}
            >
              <ConceptDetail label="What it explains">
                Emotions function as information systems that carry meaningful data about our environment and relationships.
              </ConceptDetail>
              <ConceptDetail label="What it reveals">
                What we dismiss as "just feelings" actually contains sophisticated intelligence about safety, meaning, and connection.
              </ConceptDetail>
              <ConceptDetail label="Why it matters">
                Reframes emotional responses from noise to signal, from problem to resource.
              </ConceptDetail>
            </ConceptCard>

            <ConceptCard
              number={3}
              title="Emotion is Relational, Not Irrational"
              subtitle="Contextual Intelligence"
              color={SPECTRUM.blue}
            >
              <ConceptDetail label="What it explains">
                The key distinction that emotions aren't random but are responses to relational and environmental conditions.
              </ConceptDetail>
              <ConceptDetail label="What it reveals">
                Emotions follow logical patterns when viewed through the lens of relationships and safety assessment.
              </ConceptDetail>
              <ConceptDetail label="Why it matters">
                Validates emotional responses as intelligent rather than chaotic, providing foundation for systematic understanding.
              </ConceptDetail>
            </ConceptCard>
          </div>
        </section>

        {/* Secondary Core Concepts */}
        <section style={{ marginBottom: 40 }}>
          <SectionHeader color={SPECTRUM.cobalt}>Secondary Core Concepts</SectionHeader>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <ConceptCard
              number={4}
              title="Emotion = Survival Signal"
              subtitle="Biological Intelligence"
              color={SPECTRUM.cobalt}
            >
              <ConceptDetail label="What it explains">
                Emotions serve as your nervous system's interpretation and communication system about reality.
              </ConceptDetail>
              <ConceptDetail label="What it reveals">
                Fear, anger, guilt, shame, love, empathy all carry specific survival-relevant information.
              </ConceptDetail>
              <ConceptDetail label="Why it matters">
                Positions emotions as essential biological intelligence rather than evolutionary baggage.
              </ConceptDetail>
            </ConceptCard>

            <ConceptCard
              number={5}
              title="Ignoring Emotions = Less Information"
              subtitle="Cognitive Limitation"
              color={SPECTRUM.cobalt}
            >
              <ConceptDetail label="What it explains">
                Suppressing emotional input doesn't make decisions more logical — it makes them less informed.
              </ConceptDetail>
              <ConceptDetail label="What it reveals">
                "Pure rationality" is actually a form of cognitive limitation, not cognitive superiority.
              </ConceptDetail>
              <ConceptDetail label="Why it matters">
                Challenges the cultural ideal of emotion-free decision making as superior.
              </ConceptDetail>
            </ConceptCard>

            <ConceptCard
              number={6}
              title="Pattern Recognition, Not Self-Help"
              subtitle="Systematic Understanding"
              color={SPECTRUM.cobalt}
            >
              <ConceptDetail label="What it explains">
                TEG-Blue is positioned as a mapping system for tracking emotional patterns, not a belief system for fixing emotions.
              </ConceptDetail>
              <ConceptDetail label="What it reveals">
                The difference between understanding emotional systems versus trying to change emotional experiences.
              </ConceptDetail>
              <ConceptDetail label="Why it matters">
                Removes pressure to "fix" emotions and instead focuses on understanding their logic and patterns.
              </ConceptDetail>
            </ConceptCard>
          </div>
        </section>

        {/* Sub-Core Concepts */}
        <section style={{ marginBottom: 40 }}>
          <SectionHeader color={SPECTRUM.azure}>Sub-Core Concepts</SectionHeader>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <ConceptCard
              number={7}
              title="Emotional Clarity Through Integration"
              subtitle="Optimal Decision-Making"
              color={SPECTRUM.azure}
            >
              <ConceptDetail label="What it explains">
                The combination of emotion (tracking meaning, safety, connection) and logic (sense-making and action planning) creates optimal decision-making.
              </ConceptDetail>
              <ConceptDetail label="What it reveals">
                Neither pure emotion nor pure logic is sufficient — integration is required.
              </ConceptDetail>
              <ConceptDetail label="Why it matters">
                Provides framework for using both emotional and logical intelligence together.
              </ConceptDetail>
            </ConceptCard>

            <ConceptCard
              number={8}
              title="Emotions as Moral-Neutral Signals"
              subtitle="Removing Judgment"
              color={SPECTRUM.azure}
            >
              <ConceptDetail label="What it explains">
                Emotions themselves don't have moral value — they're neither good nor bad, just information.
              </ConceptDetail>
              <ConceptDetail label="What it reveals">
                The moral judgment of emotions (anger = bad, sadness = weakness) is cultural overlay, not inherent truth.
              </ConceptDetail>
              <ConceptDetail label="Why it matters">
                Removes shame and moral judgment from emotional experience, allowing for clearer perception.
              </ConceptDetail>
            </ConceptCard>

            <ConceptCard
              number={9}
              title="Response vs. Signal Distinction"
              subtitle="Conscious Choice"
              color={SPECTRUM.azure}
            >
              <ConceptDetail label="What it explains">
                The difference between having an emotional signal and choosing how to respond to it.
              </ConceptDetail>
              <ConceptDetail label="What it reveals">
                Emotional experience and emotional behavior are separate — you can feel without acting.
              </ConceptDetail>
              <ConceptDetail label="Why it matters">
                Creates space for conscious choice in emotional situations rather than automatic reactivity.
              </ConceptDetail>
            </ConceptCard>
          </div>
        </section>

        {/* What This Framework Explains */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            What This Framework Explains
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            <ExplanationCard
              title="Cultural Emotional Suppression"
              description="Why societies that prioritize 'rationality' over emotion create emotionally dysregulated populations — they're systematically ignoring essential survival information."
            />
            <ExplanationCard
              title="Decision-Making Failures"
              description="Why 'purely logical' decisions often backfire — they lack crucial information about meaning, relationships, and safety that emotions provide."
            />
            <ExplanationCard
              title="Therapeutic Limitations"
              description="Why approaches that try to eliminate or control emotions are less effective than those that understand and integrate them."
            />
            <ExplanationCard
              title="Emotional Overwhelm"
              description="Why people feel flooded by emotions — they haven't been taught to read them as information, so they experience them as chaos."
            />
            <ExplanationCard
              title="Relationship Dysfunction"
              description="Why relationships fail when people can't access or communicate emotional information — essential relational data is missing."
            />
          </div>
        </section>

        {/* What This Framework Reveals */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            What This Framework Reveals
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            <ExplanationCard
              title="Intelligence Diversity"
              description="That there are multiple forms of intelligence, and emotional intelligence provides information that cognitive intelligence cannot access."
            />
            <ExplanationCard
              title="Biological Sophistication"
              description="That the emotional system is highly sophisticated survival technology, not primitive evolutionary remnant."
            />
            <ExplanationCard
              title="Cultural Programming"
              description="How societies systematically train people to disconnect from essential biological intelligence through emotion-phobic messaging."
            />
            <ExplanationCard
              title="Integration Necessity"
              description="That optimal human functioning requires integration of multiple intelligence systems, not dominance of one over others."
            />
            <ExplanationCard
              title="Information Loss"
              description="How much crucial life information is lost when emotional signals are dismissed or suppressed."
            />
          </div>
        </section>

        {/* Why This Matters — Implications Grid */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Why This Matters
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 20, maxWidth: 640 }}>
            The implications of treating emotions as valid data ripple through every aspect of human experience.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <ImplicationSection
              title="For Individual Functioning"
              color={SPECTRUM.sky}
              items={[
                { label: "Decision-Making Enhancement", text: "Access to fuller range of information for life choices" },
                { label: "Self-Understanding", text: "Framework for interpreting internal experiences as meaningful rather than chaotic" },
                { label: "Emotional Regulation", text: "Understanding emotions as information enables better regulation than suppression" },
                { label: "Authenticity", text: "Permission to experience full range of human responses without shame" },
              ]}
            />

            <ImplicationSection
              title="For Relationships"
              color={SPECTRUM.azure}
              items={[
                { label: "Communication Improvement", text: "Emotional information becomes shareable data rather than personal weakness" },
                { label: "Conflict Resolution", text: "Understanding emotional logic behind conflicts enables more effective resolution" },
                { label: "Intimacy Deepening", text: "Emotional sharing becomes information exchange rather than burden" },
                { label: "Safety Creation", text: "Recognition of emotional signals enables better safety assessment in relationships" },
              ]}
            />

            <ImplicationSection
              title="For Society and Culture"
              color={SPECTRUM.cobalt}
              items={[
                { label: "Educational Revolution", text: "Emotional literacy becomes as important as traditional academic subjects" },
                { label: "Workplace Transformation", text: "Organizations that integrate emotional intelligence become more effective" },
                { label: "Mental Health Reframing", text: "Emotional distress understood as information about environmental conditions rather than personal pathology" },
                { label: "Policy Development", text: "Social policies that account for emotional as well as economic factors" },
              ]}
            />

            <ImplicationSection
              title="For Technology and AI"
              color={SPECTRUM.indigo}
              items={[
                { label: "AI Development", text: "Creating artificial intelligence that can recognize and respond appropriately to emotional information" },
                { label: "System Design", text: "Designing technologies and systems that support rather than undermine emotional intelligence" },
                { label: "Data Integration", text: "Including emotional data as legitimate input for decision-making systems" },
                { label: "Human-AI Collaboration", text: "Enabling AI systems to work with human emotional intelligence rather than against it" },
              ]}
            />

            <ImplicationSection
              title="For Scientific and Academic Fields"
              color={SPECTRUM.slate}
              items={[
                { label: "Research Integration", text: "Including emotional factors as legitimate variables in research across disciplines" },
                { label: "Methodology Development", text: "Creating research methods that can study emotional patterns systematically" },
                { label: "Interdisciplinary Bridge", text: "Connecting emotional understanding with neuroscience, sociology, economics, and other fields" },
                { label: "Evidence Base", text: "Building scientific foundation for emotional intelligence as measurable, meaningful phenomenon" },
              ]}
            />
          </div>
        </section>

        {/* Foundational Significance */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Foundational Significance
          </h2>
          <div
            style={{
              padding: 24,
              background: BG.card,
              borderRadius: 10,
              border: `1px solid ${BORDER.default}`,
              borderLeft: `4px solid ${SPECTRUM.indigo}`,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              This page establishes the <strong style={{ color: TEXT.primary }}>epistemological foundation</strong> for the entire TEG-Blue system. By reframing emotions from irrational disturbances to intelligent data, it:
            </p>
            <ol style={{ paddingLeft: 20, fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 }}>
              <li style={{ marginBottom: 8 }}><strong style={{ color: TEXT.primary }}>Justifies the entire enterprise</strong> of emotional measurement and mapping</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: TEXT.primary }}>Removes shame</strong> from emotional experience and emotional work</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: TEXT.primary }}>Establishes scientific credibility</strong> for systematic emotional study</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: TEXT.primary }}>Creates permission</strong> for taking emotions seriously in academic, professional, and personal contexts</li>
              <li><strong style={{ color: TEXT.primary }}>Provides philosophical foundation</strong> for integrating emotional and logical intelligence</li>
            </ol>
            <p style={{ fontSize: 14, color: TEXT.primary, fontWeight: 500, margin: 0 }}>
              Without this foundational reframe, all the subsequent frameworks and tools would be built on the assumption that emotions are problems to be solved rather than information to be understood.
            </p>
          </div>
        </section>

        {/* Connection to TEG-Blue Framework */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Connection to TEG-Blue Framework
          </h2>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16, maxWidth: 640 }}>
            This epistemological foundation directly supports the TEG-Blue measurement and explanatory architecture:
          </p>
          <div
            style={{
              padding: 16,
              background: hexToRgba(SPECTRUM.azure, 0.06),
              borderRadius: 8,
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
            }}
          >
            <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: SPECTRUM.azure }}>Framework reference:</strong> This content maps to the <em>Emotional Gradient</em> framework — the proposition that emotions are a biological data collection and communication system, equally valid and necessary as logical/cognitive processing.
            </p>
          </div>
        </section>

        {/* Where to go next */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Where to go next
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
                  <th style={{ ...tableHeaderStyle }}>If you want to…</th>
                  <th style={{ ...tableHeaderStyle }}>Go here</th>
                </tr>
              </thead>
              <tbody>
                <NavRow label="See how the system is organized" href="/foundations" linkText="System Overview →" />
                <NavRow label="See the two core models" href="/models" linkText="Models →" />
                <NavRow label="Explore the 12 frameworks" href="/frameworks-map" linkText="Frameworks →" />
                <NavRow label="Review the source theories" href="/scientific-foundations" linkText="Scientific Foundations →" />
                <NavRow label="See published research" href="/publications" linkText="Publications →" />
                <NavRow label="Experience the tools" href="https://teg-blue.com/emotional-tools" linkText="Emotional Tools (teg-blue.com) →" external />
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer note */}
        <footer style={{ textAlign: "center" }}>
          <p style={{ fontSize: 11, color: TEXT.tertiary, fontFamily: FONT.mono }}>
            TEG-Blue Research Consortium · Open Science · CC BY-NC-SA 4.0
          </p>
        </footer>
      </main>

      <SiteFooter />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": "https://teg-blue.org/epistemological-foundations#article",
            headline: "Epistemological Foundations: Why Emotions Are Valid Data",
            description: "The philosophical and methodological foundations of TEG-Blue. Emotions function as biological information systems carrying meaningful data about safety, meaning, and connection.",
            author: {
              "@type": "Person",
              name: "Anna Paretas-Artacho",
              url: "https://teg-blue.org/about"
            },
            publisher: {
              "@type": "Organization",
              name: "TEG-Blue Research Consortium",
              url: "https://teg-blue.org"
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://teg-blue.org/epistemological-foundations"
            },
            about: [
              { "@type": "Thing", name: "Emotional Intelligence" },
              { "@type": "Thing", name: "Epistemology" },
              { "@type": "Thing", name: "Information Theory" },
              { "@type": "Thing", name: "Nervous System Regulation" }
            ],
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://teg-blue.org/#website",
              name: "TEG-Blue Research Platform"
            }
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Epistemological Foundations", url: "/epistemological-foundations" },
            ])
          ),
        }}
      />
    </div>
  );
}

// Helper components
function SectionHeader({ color, children }) {
  return (
    <h2
      style={{
        fontSize: 16,
        fontWeight: 600,
        color: color,
        marginBottom: 16,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        fontFamily: FONT.mono,
      }}
    >
      {children}
    </h2>
  );
}

function ConceptCard({ number, title, subtitle, color, children }) {
  return (
    <div
      style={{
        padding: 20,
        background: BG.card,
        borderRadius: 10,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${color}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
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
            flexShrink: 0,
          }}
        >
          {number}
        </span>
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 600, color: TEXT.primary, margin: 0 }}>
            {title}
          </h3>
          <p style={{ fontSize: 12, color: TEXT.tertiary, margin: "4px 0 0", fontFamily: FONT.mono }}>
            {subtitle}
          </p>
        </div>
      </div>
      <div style={{ paddingLeft: 40 }}>
        {children}
      </div>
    </div>
  );
}

function ConceptDetail({ label, children }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: TEXT.tertiary,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          fontFamily: FONT.mono,
        }}
      >
        {label}
      </span>
      <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6, margin: "4px 0 0" }}>
        {children}
      </p>
    </div>
  );
}

function ExplanationCard({ title, description }) {
  return (
    <div
      style={{
        padding: 16,
        background: BG.card,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
      }}
    >
      <h3 style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 8 }}>
        {title}
      </h3>
      <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>
    </div>
  );
}

function ImplicationSection({ title, color, items }) {
  return (
    <div
      style={{
        padding: 20,
        background: hexToRgba(color, 0.04),
        borderRadius: 10,
        border: `1px solid ${hexToRgba(color, 0.12)}`,
      }}
    >
      <h3
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: color,
          marginBottom: 16,
        }}
      >
        {title}
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
        {items.map((item, idx) => (
          <div key={idx}>
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: TEXT.primary,
              }}
            >
              {item.label}
            </span>
            <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.5, margin: "4px 0 0" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function NavRow({ label, href, linkText, external }) {
  const linkStyle = {
    color: PRIMARY,
    textDecoration: "none",
    fontWeight: 500,
  };

  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ ...tableCellStyle, color: TEXT.secondary }}>{label}</td>
      <td style={{ ...tableCellStyle }}>
        {external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            {linkText}
          </a>
        ) : (
          <Link href={href} style={linkStyle}>
            {linkText}
          </Link>
        )}
      </td>
    </tr>
  );
}

const tableHeaderStyle = {
  padding: "12px 16px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 600,
  color: TEXT.tertiary,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontFamily: FONT.mono,
};

const tableCellStyle = {
  padding: "12px 16px",
  fontSize: 14,
};
