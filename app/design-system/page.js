import { BG, BORDER, FONT, SPECTRUM, TEXT, RADIUS, hexToRgba } from "@/src/styles/tokens";
import SiteFooter from "@/src/components/SiteFooter";
import SiteHeader from "@/src/components/SiteHeader";
import PageLayout from "@/src/components/PageLayout";
import ResearcherHero from "@/src/components/ResearcherHero";
import { SignalTrace, StateBand } from "@/src/components/StateBand";
import {
  CalloutPanel,
  EditorialGrid,
  EditorialSection,
  InstrumentCard,
  PillCluster,
  PlainPanel,
  ReferenceTable,
  SectionKicker,
} from "@/src/components/EditorialPrimitives";

export const metadata = {
  title: "Design Studio",
  description: "Internal TEG-Blue.org design reference page.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const PAGE_PATTERNS = [
  {
    label: "Home",
    title: "Expressive map",
    body: "Colour, movement, and the full Gradient carry the first impression.",
    color: SPECTRUM.azure,
  },
  {
    label: "Supporting pages",
    title: "Research instrument",
    body: "Editorial hierarchy, state bands, contour lines, and labelled evidence modules carry the reading experience.",
    color: SPECTRUM.blue,
  },
  {
    label: "Guardrails",
    title: "Claim discipline",
    body: "Observation, interpretation, impact, and source status remain visible in the visual grammar.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Records",
    title: "Citable modules",
    body: "Publication, citation, reuse, and permission material should read like verifiable records, not decoration.",
    color: SPECTRUM.indigo,
  },
];

const STATE_WORDS = [
  "Safety",
  "Threat",
  "Control",
  "Shutdown",
  "Regulation",
  "Repair",
];

const TYPOGRAPHY_ROWS = [
  { label: "Hero title", value: "Inter 48 / 38 / 31, 760, line-height 1.03" },
  { label: "Section title", value: "Inter 22, 720, line-height 1.22" },
  { label: "Body", value: "Inter 15, line-height 1.8" },
  { label: "Instrument label", value: "IBM Plex Mono 10, uppercase, letter spacing 0" },
  { label: "Data and citation", value: "JetBrains Mono 13, line-height 1.7" },
];

const TERM_EXAMPLES = [
  {
    label: "Framework",
    title: "The Emotional Gradient Blueprint",
    body: "A layered visual framework for reading emotional, nervous-system, relational, and social patterns.",
    color: SPECTRUM.azure,
  },
  {
    label: "Central map",
    title: "The Nervous System Gradient",
    body: "The current public map inside the Blueprint, not the whole site identity.",
    color: SPECTRUM.blue,
  },
  {
    label: "Method",
    title: "Emotional-pattern legibility",
    body: "Shared language for patterns that are often felt before they are clearly understood.",
    color: SPECTRUM.cobalt,
  },
];

const TABLE_ROWS = [
  { label: "Framework overview", href: "/foundations", text: "TEG-Blue Overview" },
  { label: "Pattern-reading method", href: "/methodology", text: "Pattern reading" },
  { label: "Research boundaries", href: "/scientific-foundations", text: "Scientific Grounding" },
  { label: "Citation guidance", href: "/publications", text: "Publications" },
];

export default function DesignSystemPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/design-system" />

      <PageLayout
        header={
          <ResearcherHero
            badge="INTERNAL STUDIO"
            title="TEG-Blue.org design direction"
            subtitle="Living gradient map as research instrument"
            description="A local reference for the calmer supporting-page language: state bands, labelled claims, contour structure, readable modules, and restrained colour."
          />
        }
      >
        <EditorialSection
          id="status"
          kicker="Route status"
          title="/design-system is an internal reference surface."
          lead="It is intentionally absent from live paths, public navigation, and the sitemap. Production middleware keeps non-live routes gated with noindex behavior."
          color={SPECTRUM.azure}
        >
          <CalloutPanel
            color={SPECTRUM.azure}
            title="Use this page to evaluate tone and components, not as public authority."
            body="The public route map remains home, about, overview, pattern reading, scientific grounding, ethics, publications, glossary, and collaborate."
          />
        </EditorialSection>

        <EditorialSection
          id="direction"
          kicker="Design direction"
          title="The public world is a living Gradient; the support pages read like calibrated instruments."
          lead="Home can carry the strongest colour and map energy. Supporting pages use the same state colours as labelled signals, not as atmospheric decoration."
          color={SPECTRUM.cobalt}
        >
          <EditorialGrid>
            {PAGE_PATTERNS.map((item) => (
              <InstrumentCard key={item.title} {...item} />
            ))}
          </EditorialGrid>
        </EditorialSection>

        <EditorialSection
          id="state-band"
          kicker="Signature element"
          title="State bands and traces replace generic gradient decoration."
          lead="The band is a compact reference to safety, threat, control, shutdown, regulation, and repair. It can sit in heroes, guardrail blocks, tables, and publication modules."
          color={SPECTRUM.blue}
        >
          <div style={instrumentSurfaceStyle}>
            <div>
              <SectionKicker color={SPECTRUM.azure}>State band</SectionKicker>
              <StateBand showLabels />
            </div>
            <div>
              <SectionKicker color={SPECTRUM.indigo}>Signal trace</SectionKicker>
              <SignalTrace />
            </div>
          </div>
          <PillCluster items={STATE_WORDS} color={SPECTRUM.azure} />
        </EditorialSection>

        <EditorialSection
          id="typography"
          kicker="Typography"
          title="Precise, humane, and data-capable."
          lead="Inter carries the editorial reading voice. Mono faces carry labels, state codes, citations, and instrument language. Letter spacing stays at zero."
          color={SPECTRUM.indigo}
        >
          <div style={typeSpecStyle}>
            {TYPOGRAPHY_ROWS.map((row) => (
              <div key={row.label} style={typeRowStyle}>
                <span style={typeLabelStyle}>{row.label}</span>
                <span style={typeValueStyle}>{row.value}</span>
              </div>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection
          id="terms"
          kicker="Glossary modules"
          title="Terms use coloured rails, not oversized cards."
          lead="The goal is a scan-friendly vocabulary surface where definitions and notes stay readable on mobile and desktop."
          color={SPECTRUM.azure}
        >
          <EditorialGrid>
            {TERM_EXAMPLES.map((item) => (
              <InstrumentCard key={item.title} {...item} minHeight={172} />
            ))}
          </EditorialGrid>
        </EditorialSection>

        <EditorialSection
          id="guardrails"
          kicker="Guardrail blocks"
          title="Ethics and methodology need firmness without visual alarm."
          lead="Use quiet panels for ordinary limits and signal callouts for claims that must stay visible across pages."
          color={SPECTRUM.cobalt}
        >
          <EditorialGrid>
            <PlainPanel
              title="A pattern read is not mind-reading."
              body="Visible behaviour can support interpretation, but it cannot prove motive, diagnosis, identity, or a person's true internal state."
            />
            <PlainPanel
              title="Mechanism and impact stay separate."
              body="A protective origin can coexist with harmful impact. Response still depends on pattern, power, capacity, accountability, and repair."
            />
          </EditorialGrid>
          <CalloutPanel
            color={SPECTRUM.indigo}
            title="The base read is effect over time."
            body="Can impact be named, can empathy stay present, can accountability land, can repair change the pattern, and can reality stay discussable?"
          />
        </EditorialSection>

        <EditorialSection
          id="records"
          kicker="Research tables"
          title="Tables and records should feel citable."
          lead="Research, publication, and collaboration pages use compact tables when a reader needs to compare routes or verify the next source."
          color={SPECTRUM.blue}
        >
          <ReferenceTable rows={TABLE_ROWS} />
          <div style={citationModuleStyle}>
            <SectionKicker color={SPECTRUM.azure}>Citation module</SectionKicker>
            <p style={citationTextStyle}>
              Paretas-Artacho, A. (2026). TEG-Blue: The Emotional Gradient Blueprint. https://teg-blue.org/
            </p>
            <p style={citationNoteStyle}>
              Cite the item actually used. A record makes something findable and attributable; it does not imply whole-framework validation.
            </p>
          </div>
        </EditorialSection>
      </PageLayout>

      <SiteFooter />
    </div>
  );
}

const instrumentSurfaceStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
  gap: 14,
  marginTop: 18,
  padding: 16,
  background: BG.card,
  border: `1px solid ${BORDER.default}`,
  borderRadius: RADIUS.lg,
};

const typeSpecStyle = {
  display: "grid",
  gap: 1,
  marginTop: 18,
  overflow: "hidden",
  background: BORDER.default,
  border: `1px solid ${BORDER.default}`,
  borderRadius: RADIUS.md,
};

const typeRowStyle = {
  display: "grid",
  gridTemplateColumns: "minmax(160px, 0.36fr) minmax(0, 1fr)",
  gap: 1,
  minHeight: 46,
  background: BORDER.default,
};

const typeLabelStyle = {
  minWidth: 0,
  padding: "12px 14px",
  background: BG.surface,
  color: TEXT.muted,
  fontFamily: FONT.diagram,
  fontSize: 10,
  fontWeight: 700,
  lineHeight: 1.3,
  textTransform: "uppercase",
  letterSpacing: 0,
};

const typeValueStyle = {
  minWidth: 0,
  padding: "12px 14px",
  background: BG.card,
  color: TEXT.secondary,
  fontFamily: FONT.mono,
  fontSize: 12,
  lineHeight: 1.55,
};

const citationModuleStyle = {
  marginTop: 18,
  padding: 18,
  background: `linear-gradient(135deg, ${hexToRgba(SPECTRUM.azure, 0.06)}, transparent 76%), ${BG.card}`,
  border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.18)}`,
  borderLeft: `3px solid ${SPECTRUM.azure}`,
  borderRadius: RADIUS.md,
};

const citationTextStyle = {
  margin: 0,
  color: TEXT.primary,
  fontFamily: FONT.mono,
  fontSize: 13,
  lineHeight: 1.7,
};

const citationNoteStyle = {
  margin: "12px 0 0",
  color: TEXT.secondary,
  fontSize: 13,
  lineHeight: 1.65,
};
