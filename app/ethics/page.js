import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, ResearcherHero } from "@/src/components";

const SIDEBAR_SECTIONS = [
  { label: "Position", href: "#position", description: "Emotional development is contextual. This is not a theoretical assumption — it is an empirical foundation." },
  { label: "Context Shapes Everything", href: "#context-shapes-everything", description: "Systemic awareness as scientific prerequisite, not political position." },
  { label: "Non-Pathologisation", href: "#non-pathologisation", description: "Adaptive responses are not deficits. The framework honours what survival required." },
  { label: "Rigour & Compassion", href: "#rigour-and-compassion", description: "Grounded in peer-reviewed research. Built for human understanding." },
  { label: "Accessibility & Equity", href: "#accessibility-and-equity", description: "Designed for everyone. Open science. No knowledge behind paywalls." },
  { label: "Transparency", href: "#transparency", description: "Methodology is visible. Claims are testable. Limitations are stated." },
  { label: "Responsible Technology", href: "#responsible-technology", description: "Safeguards, human oversight, and transparency in AI-assisted tools." },
  { label: "Collaboration", href: "#collaboration", description: "What we expect from research collaborators and consortium members." },
  { label: "Attribution & Licensing", href: "#attribution-and-licensing", description: "CC-BY-NC-SA-4.0. How to cite. What collaborators should know." },
];

export const metadata = {
  title: "Ethical & Epistemological Framework | TEG-Blue Research",
  description: "TEG-Blue's foundational ethical commitments. How emotional development is understood, how research is conducted, and what collaborators are expected to uphold.",
  keywords: [
    "research ethics",
    "open science",
    "emotional technology ethics",
    "epistemological framework",
    "non-pathologisation",
    "intersectional research",
    "contextual embeddedness",
    "CC-BY-NC-SA-4.0",
    "TEG-Blue",
  ],
  alternates: {
    canonical: "https://teg-blue.org/ethics",
  },
  openGraph: {
    title: "Ethical & Epistemological Framework — TEG-Blue Research",
    description: "Foundational commitments guiding TEG-Blue research and development.",
    url: "https://teg-blue.org/ethics",
    siteName: "TEG-Blue Research",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Ethical & Epistemological Framework — TEG-Blue Research",
    description: "Foundational commitments guiding TEG-Blue research and development.",
  },
};

export default function EthicsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/ethics" />

      <PageLayout
        header={
          <ResearcherHero
            badge="ETHICS"
            title="Ethical & Epistemological Framework"
            description="Foundational commitments guiding TEG-Blue research and development. These principles are not supplementary to the science — they emerge directly from it."
          />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* Position Statement */}
        <section id="position" style={{ marginBottom: 48 }}>
          <h2 style={sectionHeading}>Position statement</h2>
          <PrincipleQuote>
            Emotional development is fundamentally contextual. Individual emotional patterns emerge within and are shaped by intersecting systems of power, culture, socioeconomic conditions, and structural inequality.
          </PrincipleQuote>
          <p style={body}>
            This position is grounded in converging evidence from neuroscience, developmental psychology, epigenetics, and trauma studies.
          </p>
          <p style={{ ...body, marginTop: 14 }}>
            A model of emotional development that does not account for these systemic influences operates with incomplete variables. TEG-Blue&apos;s ethical commitments follow directly from this empirical foundation — they are methodological requirements, not supplementary values.
          </p>
        </section>

        {/* Context Shapes Everything */}
        <section id="context-shapes-everything" style={{ marginBottom: 48 }}>
          <SectionDivider />
          <h2 style={sectionHeading}>Context shapes everything</h2>
          <p style={body}>
            Emotional patterns emerge from the interaction between individual neurobiology and the social, cultural, and structural environments in which development occurs. Research in epigenetics, developmental neuroscience, and the neuroscience of adversity demonstrates that these influences are not secondary — they shape neural architecture, stress response calibration, and regulatory capacity at the biological level.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
            <EvidenceCard
              title="Contextual embeddedness"
              color={SPECTRUM.azure}
              description="Research in adverse childhood experiences, minority stress theory, allostatic load, and intergenerational trauma transmission provides robust evidence that systemic conditions exert measurable effects on neurological development, stress response systems, and emotional regulation capacities."
            />
            <EvidenceCard
              title="Intersectional analysis"
              color={SPECTRUM.cobalt}
              description="Emotional experience is shaped by the convergence of multiple identity dimensions including gender, ethnicity, neurodivergence, sexuality, socioeconomic status, disability, and cultural context. This ensures the framework's applicability across diverse populations rather than defaulting to normative assumptions."
            />
            <EvidenceCard
              title="Structural awareness as scientific prerequisite"
              color={SPECTRUM.indigo}
              description="Recognition of systemic inequalities and power dynamics is treated as a prerequisite for accurate emotional modelling, not as a political position. This commitment is grounded in neuroscience of adversity, epigenetic transmission, minority stress research, and cultural neuroscience."
            />
          </div>

          <ContextNote>
            Methodological consequence: any emotional assessment tool, model, or intervention that does not account for contextual and structural variables introduces systematic bias into its outputs. This is a measurement validity concern, not a political position.
          </ContextNote>
        </section>

        {/* Non-Pathologisation */}
        <section id="non-pathologisation" style={{ marginBottom: 48 }}>
          <SectionDivider />
          <h2 style={sectionHeading}>Non-pathologisation</h2>
          <PrincipleQuote>
            Emotional patterns shaped by adversity, systemic stress, or cultural difference are understood as functional adaptations — not deficits.
          </PrincipleQuote>
          <p style={body}>
            Research on stress adaptation — from Masten&apos;s work on resilience to Perry&apos;s neurosequential model — establishes that emotional responses developed under adversity represent functional adaptations to the conditions present during development. The nervous system calibrates its threat detection, regulatory strategies, and relational patterns to match the environment it encounters. TEG-Blue treats these adaptations accordingly: as evidence of what the nervous system needed to do, not as deficits requiring correction. Even when such patterns become maladaptive in changed circumstances, the framework preserves the distinction between the adaptation and the conditions that produced it.
          </p>
          <p style={{ ...body, marginTop: 14 }}>
            This is an architectural principle, not an aspiration. It shapes how the framework categorises emotional states, how tools are designed, and how data is structured.
          </p>
        </section>

        {/* Rigour and Compassion */}
        <section id="rigour-and-compassion" style={{ marginBottom: 48 }}>
          <SectionDivider />
          <h2 style={sectionHeading}>Rigour and compassion</h2>
          <PrincipleQuote>
            Accurate emotional modelling requires accounting for the systems in which emotional development occurs.
          </PrincipleQuote>
          <p style={body}>
            TEG-Blue is grounded in peer-reviewed research and built through systematic methodology. The purpose of that rigour is applied — to produce models and tools that help people understand their own patterns, interrupt cycles of harm, and build healthier relational dynamics.
          </p>
          <p style={{ ...body, marginTop: 14 }}>
            Individual emotional patterns cannot be fully understood without reference to the broader systems that shaped them. Clinical or educational work supporting others in understanding their patterns requires accounting for the different structural realities people navigate. The framework treats personal insight and systemic understanding as inseparable — not for ideological reasons, but because the neuroscience consistently supports that position.
          </p>
          <p style={{ ...body, marginTop: 14 }}>
            TEG-Blue integrates insights from multiple theoretical traditions and methodological approaches — quantitative neuroscience, qualitative phenomenological research, systems theory, and clinical practice. This pluralistic approach reflects the complexity of emotional experience and guards against reductionism.
          </p>
        </section>

        {/* Accessibility & Equity */}
        <section id="accessibility-and-equity" style={{ marginBottom: 48 }}>
          <SectionDivider />
          <h2 style={sectionHeading}>Accessibility and equity</h2>
          <PrincipleQuote>
            A framework&apos;s accuracy depends on its applicability across diverse populations and conditions.
          </PrincipleQuote>
          <p style={body}>
            Accessibility is a core design requirement, not an afterthought. The framework accounts for how gender, culture, neurodivergence, ethnicity, sexuality, socioeconomic status, and other dimensions of identity shape emotional experience. This intersectional grounding is what allows the framework to model emotional development accurately across diverse populations rather than defaulting to normative assumptions.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, marginTop: 20 }}>
            <CompactCard
              title="Open science"
              description="The framework — the maps, the models, the theoretical foundations — is public. This site makes it available to anyone who wants to read, test, critique, or build on it."
              color={SPECTRUM.azure}
            />
            <CompactCard
              title="Designed for difference"
              description="Attention to neurodivergent processing styles, varying levels of literacy, cultural diversity in emotional expression, and economic barriers to access."
              color={SPECTRUM.cobalt}
            />
          </div>

          <ContextNote>
            Paywalled tools on the application site fund ongoing development. The intellectual architecture of TEG-Blue is not behind a paywall. Researchers, educators, and clinicians can access everything they need to evaluate the framework here.
          </ContextNote>
        </section>

        {/* Transparency */}
        <section id="transparency" style={{ marginBottom: 48 }}>
          <SectionDivider />
          <h2 style={sectionHeading}>Transparency and intellectual integrity</h2>
          <PrincipleQuote>
            Methodology, limitations, and open questions are published for independent verification.
          </PrincipleQuote>
          <p style={body}>
            TEG-Blue maintains transparency about its theoretical foundations, limitations, and areas of ongoing development. Claims are grounded in evidence and clearly distinguished from hypotheses or emerging models. The framework is subject to ongoing empirical validation and revision.
          </p>
          <p style={{ ...body, marginTop: 14 }}>
            TEG-Blue is a working hypothesis — not a settled framework. The validation study, the theoretical mapping, the open research questions, and the framework architecture are all published for independent verification. The{" "}
            <Link href="/methodology" style={linkStyle}>
              methodology
            </Link>{" "}
            documents how the work was done, including the use of AI-assisted literature mapping. The{" "}
            <Link href="/research-entry" style={linkStyle}>
              research entry
            </Link>{" "}
            lists five priority questions still open.
          </p>
          <ContextNote>
            Independent verification, alternative interpretations, and direct critique are more useful to this research than acceptance. The framework is designed to be interrogated.
          </ContextNote>
        </section>

        {/* Responsible Technology */}
        <section id="responsible-technology" style={{ marginBottom: 48 }}>
          <SectionDivider />
          <h2 style={sectionHeading}>Responsible technology</h2>
          <p style={body}>
            Where TEG-Blue incorporates Large Language Model technologies in its tools and assessments, these are designed with explicit safeguards against bias reproduction, with human oversight at critical decision points, and with transparency about the role and limitations of automated systems in emotional assessment.
          </p>
          <p style={{ ...body, marginTop: 14 }}>
            All publications are designed for both human and AI consumption — structured JSON-LD metadata, semantic HTML, Dublin Core annotations, and consistent terminology throughout. The{" "}
            <Link href="/ai-safety" style={linkStyle}>
              AI safety
            </Link>{" "}
            page details how TEG-Blue approaches emotional technology in artificial intelligence.
          </p>
        </section>

        {/* Collaboration */}
        <section id="collaboration" style={{ marginBottom: 48 }}>
          <SectionDivider />
          <h2 style={sectionHeading}>What we expect from collaborators</h2>
          <p style={body}>
            Research collaborators, consortium members, and contributors to TEG-Blue are expected to share the foundational understanding that structural and systemic factors shape emotional development. This is a premise of the framework, established by the evidence base outlined above, and treated as a starting condition for collaborative work.
          </p>
          <p style={{ ...body, marginTop: 14 }}>
            This does not require ideological uniformity — healthy methodological and theoretical debate is encouraged.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12, marginTop: 20 }}>
            <CompactCard
              title="Shared premises"
              description="Collaborators recognise — not merely tolerate — that systemic injustice has real consequences for emotional and neurological development."
              color={SPECTRUM.cobalt}
            />
            <CompactCard
              title="Welcomed debate"
              description="Methodological approaches, theoretical weighting, intervention design, cross-cultural application, and the framework's limitations are all open for rigorous discussion."
              color={SPECTRUM.azure}
            />
          </div>

          <p style={{ ...body, marginTop: 20 }}>
            For full details, see the{" "}
            <Link href="/collaborate" style={linkStyle}>
              Collaborate
            </Link>{" "}
            page.
          </p>
        </section>

        {/* Attribution & Licensing */}
        <section id="attribution-and-licensing" style={{ marginBottom: 48 }}>
          <SectionDivider />
          <h2 style={sectionHeading}>Attribution and licensing</h2>
          <p style={body}>
            TEG-Blue is published under{" "}
            <strong style={{ color: TEXT.primary }}>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC-BY-NC-SA-4.0)</strong>.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
            <LicenseCard
              title="Attribution"
              color={SPECTRUM.azure}
              description={
                <>
                  Credit the source. Cite TEG-Blue and Anna Paretas-Artacho. Full citation formats are available on the{" "}
                  <Link href="/citations" style={linkStyle}>citations page</Link>.
                </>
              }
            />
            <LicenseCard
              title="Non-commercial"
              color={SPECTRUM.cobalt}
              description="The framework may not be used for commercial purposes without explicit permission. You cannot sell, license, or monetize TEG-Blue's frameworks, models, or content."
            />
            <LicenseCard
              title="Share-alike"
              color={SPECTRUM.indigo}
              description="Derivative works must use the same or a compatible license. Contributions that build on this work remain under the same open terms."
            />
          </div>

          <p style={{ ...body, marginTop: 20 }}>
            Engaging with TEG-Blue means accepting both the license terms and the ethical commitments on this page. The framework is open for testing, critique, extension, and independent use — within these boundaries.
          </p>
        </section>

        {/* References */}
        <section style={{ marginBottom: 48 }}>
          <SectionDivider />
          <h2 style={sectionHeading}>References</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Reference text="Chiao, J. Y., & Blizinsky, K. D. (2010). Culture–gene coevolution of individualism–collectivism and the serotonin transporter gene. Proceedings of the Royal Society B, 277(1681), 529–537." />
            <Reference text="Masten, A. S. (2001). Ordinary magic: Resilience processes in development. American Psychologist, 56(3), 227–238." />
            <Reference text="Lupien, S. J., McEwen, B. S., Gunnar, M. R., & Heim, C. (2009). Effects of stress throughout the lifespan on the brain, behaviour and cognition. Nature Reviews Neuroscience, 10(6), 434–445." />
            <Reference text="McEwen, B. S. (2017). Neurobiological and systemic effects of chronic stress. Chronic Stress, 1, 1–11." />
            <Reference text="Meyer, I. H. (2003). Prejudice, social stress, and mental health in lesbian, gay, and bisexual populations. Psychological Bulletin, 129(5), 674–697." />
            <Reference text="Perry, B. D. (2009). Examining child maltreatment through a neurodevelopmental lens: Clinical applications of the neurosequential model of therapeutics. Journal of Loss and Trauma, 14(4), 240–255." />
            <Reference text="Williams, D. R., & Mohammed, S. A. (2009). Discrimination and racial disparities in health. Health Psychology, 28(1), 20–30." />
            <Reference text="Yehuda, R., & Lehrner, A. (2018). Intergenerational transmission of trauma effects: putative role of epigenetic mechanisms. World Psychiatry, 17(3), 243–257." />
          </div>
        </section>

        {/* Cross-link to .com */}
        <section style={{ marginBottom: 32 }}>
          <div
            style={{
              padding: "20px 24px",
              background: hexToRgba(SPECTRUM.indigo, 0.06),
              borderRadius: 10,
              border: `1px solid ${hexToRgba(SPECTRUM.indigo, 0.15)}`,
            }}
          >
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.75, margin: 0 }}>
              These principles shape how our tools work. See how they apply at{" "}
              <a
                href="https://teg-blue.com"
                style={{ ...linkStyle, fontWeight: 500 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                teg-blue.com
              </a>.
            </p>
          </div>
        </section>
      </PageLayout>

      <SiteFooter />
    </div>
  );
}

// ── Shared Styles ──────────────────────────────────────

const sectionHeading = {
  fontSize: 20,
  fontWeight: 600,
  color: TEXT.primary,
  marginBottom: 16,
  letterSpacing: "-0.01em",
};

const body = {
  fontSize: 15,
  color: TEXT.secondary,
  lineHeight: 1.75,
  margin: 0,
};

const linkStyle = {
  color: SPECTRUM.blue,
  textDecoration: "none",
};

// ── Helper Components ──────────────────────────────────

function SectionDivider() {
  return (
    <div
      style={{
        height: 1,
        background: BORDER.default,
        marginBottom: 24,
      }}
    />
  );
}

function PrincipleQuote({ children }) {
  return (
    <div
      style={{
        padding: "14px 20px",
        marginBottom: 20,
        borderLeft: `3px solid ${SPECTRUM.cobalt}`,
        background: hexToRgba(SPECTRUM.cobalt, 0.05),
        borderRadius: "0 8px 8px 0",
      }}
    >
      <p style={{
        fontSize: 15,
        color: TEXT.primary,
        lineHeight: 1.7,
        margin: 0,
        fontWeight: 500,
      }}>
        {children}
      </p>
    </div>
  );
}

function ContextNote({ children }) {
  return (
    <div
      style={{
        padding: "14px 18px",
        marginTop: 20,
        background: hexToRgba(SPECTRUM.slate, 0.07),
        borderRadius: 8,
        borderLeft: `3px solid ${SPECTRUM.slate}`,
      }}
    >
      <p style={{
        fontSize: 13,
        color: TEXT.muted,
        lineHeight: 1.7,
        margin: 0,
      }}>
        {children}
      </p>
    </div>
  );
}

function EvidenceCard({ title, color, description }) {
  return (
    <div
      style={{
        padding: 20,
        background: BG.card,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${color}`,
      }}
    >
      <h3 style={{
        fontSize: 14,
        fontWeight: 600,
        color: TEXT.primary,
        marginBottom: 8,
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: 14,
        color: TEXT.secondary,
        lineHeight: 1.7,
        margin: 0,
      }}>
        {description}
      </p>
    </div>
  );
}

function CompactCard({ title, description, color }) {
  return (
    <div
      style={{
        padding: 16,
        background: BG.card,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
        borderTop: `2px solid ${color}`,
      }}
    >
      <h3 style={{
        fontSize: 13,
        fontWeight: 600,
        color: TEXT.primary,
        marginBottom: 6,
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: 13,
        color: TEXT.secondary,
        lineHeight: 1.65,
        margin: 0,
      }}>
        {description}
      </p>
    </div>
  );
}

function LicenseCard({ title, color, description }) {
  return (
    <div
      style={{
        padding: 20,
        background: BG.card,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
        borderLeft: `3px solid ${color}`,
      }}
    >
      <h3 style={{
        fontSize: 14,
        fontWeight: 600,
        color: TEXT.primary,
        marginBottom: 8,
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: 14,
        color: TEXT.secondary,
        lineHeight: 1.7,
        margin: 0,
      }}>
        {description}
      </p>
    </div>
  );
}

function Reference({ text }) {
  return (
    <p style={{
      fontSize: 13,
      color: TEXT.muted,
      lineHeight: 1.6,
      margin: 0,
      paddingLeft: 16,
      borderLeft: `2px solid ${BORDER.default}`,
    }}>
      {text}
    </p>
  );
}
