import Link from "next/link";
import dynamic from "next/dynamic";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM, PATTERN, RADIUS,
  hexToRgba,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, PageLayout,
  ExpandableSection,
} from "@/src/components";
import {
  proseStyle, expandedProseStyle, expandableRowStyle,
  conceptHeadingStyle,
} from "@/src/styles/pageStyles";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

// ─── DYNAMIC IMPORTS ────────────────────────────────────

const ESSInformationSystems = dynamic(
  () => import("@/src/components/ESSInformationSystems"),
  { ssr: false }
);

// ─── CONSTANTS ──────────────────────────────────────────

const PAGE_COLOR = SPECTRUM.azure;
const P = { A: PATTERN.A.primary, B: PATTERN.B.primary, C: PATTERN.C.primary, D: PATTERN.D.primary };
const linkStyle = { color: SPECTRUM.azure, textDecoration: "none" };

// ─── METADATA ───────────────────────────────────────────

export const metadata = {
  title: "The Emotional Somatic System | TEG-Blue Research",
  description:
    "Two parallel information systems operate in every human body — the Emotional Somatic System (ESS) and the Cognitive-Logical System (CLS). The ESS detects, evaluates, and generates physiological responses before conscious awareness arrives. The CLS produces language, reasoning, and narrative. These systems are interdependent, not in competition.",
  keywords: [
    "emotional somatic system",
    "ESS",
    "cognitive logical system",
    "CLS",
    "two information systems",
    "neuroception",
    "interoception",
    "nervous system",
    "physiological response",
    "somatic processing",
  ],
  alternates: {
    canonical: "https://teg-blue.org/emotional-somatic-system",
  },
  openGraph: {
    title: "The Emotional Somatic System | TEG-Blue Research",
    description:
      "Two parallel information systems — the ESS and the CLS — operating at different speeds, in different domains, through different mechanisms.",
    url: "https://teg-blue.org/emotional-somatic-system",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Emotional Somatic System | TEG-Blue Research",
    description:
      "Two parallel information systems — the ESS and the CLS — operating at different speeds, in different domains, through different mechanisms.",
  },
  other: {
    "citation_title": "Two Information Systems: The Emotional Somatic System and the Cognitive-Logical System",
    "citation_author": "Anna Paretas-Artacho",
    "citation_publication_date": "2026/02",
    "citation_technical_report_institution": "TEG-Blue Research",
  },
};

const FAQ_ITEMS = [
  {
    question: "What is the Emotional Somatic System (ESS)?",
    answer: "The Emotional Somatic System (ESS) is a biological information system that runs continuously in every human body. It detects changes in the environment through the sensory periphery — eyes, ears, nose, gut, skin — evaluates them for safety or threat, and organises a physiological response before conscious awareness arrives. Cue detection begins at 10–50ms, pattern matching completes within 50–200ms, and a full physiological response is organised within 200–500ms.",
  },
  {
    question: "What is the Cognitive-Logical System (CLS)?",
    answer: "The Cognitive-Logical System (CLS) is the second information system — language, reasoning, planning, abstraction, narrative construction. It operates consciously and deliberately, arriving at 500ms+. Its learning comes through explanation, insight, and language, and it builds coherence from whatever data reaches it.",
  },
  {
    question: "How do the ESS and CLS relate to each other?",
    answer: "The ESS and CLS are not competitors. They are interdependent capacities running in one organism, operating at different speeds, in different domains, through different mechanisms. By the time the CLS registers that something has happened, the ESS has already detected, evaluated, and shifted the nervous system's configuration. The CLS operates within whatever state the ESS has set — state precedes capacity.",
  },
  {
    question: "What is the Emotional Somatic Cycle?",
    answer: "The Emotional Somatic Cycle (ESC) is the repeating biological sequence that the ESS and CLS run together — from detection through signal generation through state activation to restoration or incompletion. Whether the CLS can feel what the ESS is doing determines whether the cycle completes.",
  },
];

// ─── HELPER COMPONENTS ──────────────────────────────────

function StageStep({ number, title, children }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "32px 1fr",
      gap: 12,
      marginBottom: 16,
    }}>
      <div style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: hexToRgba(PAGE_COLOR, 0.12),
        border: `1px solid ${hexToRgba(PAGE_COLOR, 0.25)}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
        fontWeight: 700,
        color: PAGE_COLOR,
        fontFamily: FONT.mono,
        flexShrink: 0,
        marginTop: 2,
      }}>
        {number}
      </div>
      <div>
        <div style={{
          fontSize: 14,
          fontWeight: 600,
          color: TEXT.primary,
          marginBottom: 4,
        }}>
          {title}
        </div>
        <div style={{
          fontSize: 13,
          color: TEXT.secondary,
          lineHeight: 1.7,
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── PAGE ───────────────────────────────────────────────

export default function EmotionalSomaticSystemPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: FONT.display,
        // Force dark "exhibit" palette on this page regardless of user theme.
        // This gives ESS / ESC / Models a visually distinct surface from the
        // rest of the site. CSS variable overrides cascade to all children
        // (SiteHeader, PageLayout, ModelHero, expandables, etc.).
        "--bg-page": "#0a0d17",
        "--bg-primary": "#111729",
        "--bg-card": "#151c35",
        "--bg-surface": "#162035",
        "--bg-inset": "#0a0d17",
        "--text-primary": "#f1f5f9",
        "--text-secondary": "#cbd5e1",
        "--text-muted": "#94a3b8",
        "--text-hint": "#64748b",
        "--text-micro": "#475569",
        "--border-default": "rgba(148, 163, 184, 0.12)",
        "--border-hover": "rgba(148, 163, 184, 0.20)",
        "--border-active": "rgba(148, 163, 184, 0.30)",
        background: "#0a0d17",
      }}
    >
      <SiteHeader currentPath="/emotional-somatic-system" />

      <PageLayout
        header={
          <ModelHero
            badge="THE EMOTIONAL SOMATIC SYSTEM"
            title="Two Information Systems"
            subtitle="Detection · Evaluation · Response — before conscious awareness arrives"
            description="A biological information system runs continuously in every human body. It detects changes in the environment, evaluates them for safety or threat, and organises a physiological response — all within milliseconds. A second information system operates alongside it: language, reasoning, narrative. By the time conscious thought begins, the body has already shifted into a different physiological state."
            color={PAGE_COLOR}
          />
        }
      >

        {/* ════════════════════════════════════════════════════
            THE DIAGRAM
            ════════════════════════════════════════════════════ */}

        <section style={{ marginBottom: 48 }}>
          <ESSInformationSystems />
        </section>

        {/* ════════════════════════════════════════════════════
            THE EMOTIONAL SOMATIC SYSTEM
            ════════════════════════════════════════════════════ */}

        <section style={{ marginBottom: 48 }}>
          <h2 style={{
            fontSize: 20,
            fontWeight: 700,
            color: PAGE_COLOR,
            letterSpacing: "-0.01em",
            marginBottom: 16,
            paddingBottom: 8,
            borderBottom: `2px solid ${hexToRgba(PAGE_COLOR, 0.2)}`,
          }}>
            The Emotional Somatic System
          </h2>

          <p style={proseStyle}>
            A biological information system runs continuously in every human body. It detects changes in the environment through the sensory periphery — eyes, ears, nose, gut, skin — and organises a physiological response before conscious awareness arrives. Cue detection begins at 10–50ms. Pattern matching completes within 50–200ms. A full physiological response — heart rate change, muscle tension, hormonal shifts — is organised within 200–500ms.
          </p>

          <p style={proseStyle}>
            Its domain: safety and threat detection, relational cues, values, needs, relevance. Its learning: through experience, through repetition, through what happens — slow to update, slow to forget. This is the Emotional Somatic System (ESS).
          </p>

          <p style={proseStyle}>
            The ESS does not need the Cognitive-Logical System to function. It detects, evaluates, and generates a complete physiological response entirely on its own — through the same biological architecture that every mammalian nervous system shares. What makes human processing different is what arrives next.
          </p>

          <div style={expandableRowStyle}>
            <ExpandableSection title="Research Foundations" type="opendata">
              <p style={expandedProseStyle}>
                Porges (2011) — polyvagal theory: the autonomic nervous system organises physiological state through hierarchical neural circuits, with neuroception as the subconscious evaluation of environmental safety and threat. LeDoux (1996) — the amygdala fires in 12 milliseconds, generating a physiological threat response before cortical processing begins. Damasio (1994) — somatic marker hypothesis: the body{"'"}s physiological responses inform decision-making before conscious reasoning arrives. Craig (2009) — interoception as a distinct sensory system providing the brain with information about the body{"'"}s internal state.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="opendata">
              <p style={expandedProseStyle}>
                TEG-Blue names this as one of two information systems — not a subsystem of cognition, not a primitive precursor to rational thought, but a complete information processing system operating in its own domain, at its own speed, producing its own output. The ESS is mapped as the primary system that sets the nervous system{"'"}s configuration, within which the CLS then operates. This reverses the common assumption that cognition governs emotion.
              </p>
            </ExpandableSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            THE COGNITIVE-LOGICAL SYSTEM
            ════════════════════════════════════════════════════ */}

        <section style={{ marginBottom: 48 }}>
          <h2 style={{
            fontSize: 20,
            fontWeight: 700,
            color: PAGE_COLOR,
            letterSpacing: "-0.01em",
            marginBottom: 16,
            paddingBottom: 8,
            borderBottom: `2px solid ${hexToRgba(PAGE_COLOR, 0.2)}`,
          }}>
            The Cognitive-Logical System
          </h2>

          <p style={proseStyle}>
            A second information system operates alongside the ESS: language, reasoning, planning, abstraction, narrative construction. Conscious. Deliberate. Effortful. Conscious awareness arrives at 500ms+. Analysis and planning take seconds. Narrative construction takes minutes to hours.
          </p>

          <p style={proseStyle}>
            Its learning: through explanation, through insight, through language — fast to update, fast to revise. This is the Cognitive-Logical System (CLS).
          </p>

          <p style={proseStyle}>
            The CLS builds coherence from whatever data reaches it. When interoceptive data is available — when the biological architecture connecting the two systems is open — the CLS builds from a complete data set. When that data is missing, degraded, or contradicted, the CLS still builds coherence. It does not register the absence as absence. The narrative it produces may still feel complete.
          </p>

          <div style={expandableRowStyle}>
            <ExpandableSection title="Research Foundations" type="opendata">
              <p style={expandedProseStyle}>
                Kahneman (2011) — dual-process theory: System 2 as slow, deliberate, effortful processing. Gazzaniga (1985) — the interpreter module: the left hemisphere constructs narrative explanations for behaviour it did not generate. Nisbett & Wilson (1977) — people often cannot accurately report on the causes of their own behaviour, constructing plausible explanations post-hoc.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="opendata">
              <p style={expandedProseStyle}>
                TEG-Blue specifies what the CLS builds from: data from two separate biological substrates — the interoceptive substrate (reading the body from inside) and the external observation substrate (reading other bodies from outside). The quality and completeness of the coherence the CLS produces depends on which channels are reporting. This is why insight alone does not change the system — the CLS can produce a correct narrative about the mechanism without the interoceptive channel that would let it feel the mechanism operating.
              </p>
            </ExpandableSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            TWO BIOLOGICAL SUBSTRATES
            ════════════════════════════════════════════════════ */}

        <section style={{ marginBottom: 48 }}>
          <h2 style={{
            fontSize: 20,
            fontWeight: 700,
            color: PAGE_COLOR,
            letterSpacing: "-0.01em",
            marginBottom: 16,
            paddingBottom: 8,
            borderBottom: `2px solid ${hexToRgba(PAGE_COLOR, 0.2)}`,
          }}>
            Two Biological Substrates
          </h2>

          <p style={proseStyle}>
            The two information systems operate through two separate sets of biological hardware. These substrates are physically distinct — they do not share components.
          </p>

          {/* Substrate cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            margin: "24px 0",
          }}>
            <div style={{
              padding: "20px",
              borderRadius: 8,
              background: hexToRgba(SPECTRUM.azure, 0.06),
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
            }}>
              <div style={{
                fontSize: 13,
                fontWeight: 700,
                color: SPECTRUM.azure,
                marginBottom: 12,
              }}>
                The Interoceptive Substrate
              </div>
              <p style={{ ...proseStyle, marginBottom: 8 }}>
                Reads the body from the inside. The anterior insula continuously maps the body{"'"}s internal landscape — visceral organ states, hormonal shifts, muscular tension changes, autonomic activation levels. Ventral vagal pathways carry signals between the body{"'"}s organs and the brain. Visceral afferent nerves relay the state of the gut, heart, lungs, and other organs upward to the brainstem and cortex. Together, these structures form the body{"'"}s capacity to generate and receive readable internal signals.
              </p>
              <p style={{ ...proseStyle, marginBottom: 0 }}>
                This substrate provides the channel through which the ESS{"'"}s physiological signals can reach conscious processing. When it is available, the CLS receives hormonal shifts, muscular tension, and autonomic state changes as readable information. When it is unavailable — when the channel was never built during early relational experience, or when sustained activation has degraded its carrying capacity — the CLS operates without that data.
              </p>
            </div>

            <div style={{
              padding: "20px",
              borderRadius: 8,
              background: hexToRgba('#e9a23b', 0.06),
              border: `1px solid ${hexToRgba('#e9a23b', 0.15)}`,
            }}>
              <div style={{
                fontSize: 13,
                fontWeight: 700,
                color: '#e9a23b',
                marginBottom: 12,
              }}>
                The External Observation Substrate
              </div>
              <p style={{ ...proseStyle, marginBottom: 8 }}>
                Reads other bodies from the outside. A separate set of neural structures processes what other bodies are doing through visible and audible signals. The amygdala extracts emotional information from faces, voices, and postures within milliseconds, before conscious awareness arrives. The prefrontal cortex integrates that rapid reading with context, history, and relationship.
              </p>
              <p style={{ ...proseStyle, marginBottom: 0 }}>
                This substrate operates independently of the interoceptive substrate. It continues functioning — often with greater precision — even when the capacity to read the body{"'"}s own signals has degraded. A person can read other bodies from the outside with extraordinary accuracy while having no access to what their own body is doing.
              </p>
            </div>
          </div>

          <p style={proseStyle}>
            This single structural fact — two substrates, not one — makes a specific prediction. If one substrate degrades under chronic activation, the capacities built on it should degrade together, while the capacity built on the other substrate should be unaffected. The separation patterns observed across the models are consistent with this prediction.
          </p>

          <div style={expandableRowStyle}>
            <ExpandableSection title="Research Foundations" type="opendata">
              <p style={expandedProseStyle}>
                Craig (2002, 2009) — the anterior insula as the cortical seat of interoceptive awareness, mapping visceral, hormonal, and autonomic states into conscious experience. Porges (2011) — polyvagal theory: ventral vagal pathways as the substrate for social engagement and co-regulation, suppressed under chronic sympathetic activation. Shamay-Tsoory, Aharon-Peretz & Perry (2009) — double dissociation between cognitive empathy (external observation) and affective empathy (interoceptive resonance), demonstrating that the two operate through independent neural substrates.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="opendata">
              <p style={expandedProseStyle}>
                TEG-Blue identifies these substrates as the architectural explanation for why empathic capacities separate in specific, predictable patterns — not randomly and not uniformly. The prediction follows directly from the hardware: when sustained cortisol elevation and sympathetic dominance degrade the interoceptive substrate, the capacities built on it lose access together, while the capacity built on the external observation substrate continues operating. The separation is not a personality difference. It is hardware.
              </p>
            </ExpandableSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            WHAT DATA REACHES THE CLS
            ════════════════════════════════════════════════════ */}

        <section style={{ marginBottom: 48 }}>
          <h2 style={{
            fontSize: 20,
            fontWeight: 700,
            color: PAGE_COLOR,
            letterSpacing: "-0.01em",
            marginBottom: 16,
            paddingBottom: 8,
            borderBottom: `2px solid ${hexToRgba(PAGE_COLOR, 0.2)}`,
          }}>
            What Data Reaches the CLS
          </h2>

          <p style={proseStyle}>
            The CLS has four possible data sources. Which sources are available depends on which biological substrates are functioning.
          </p>

          {/* Data sources table */}
          <div style={{
            borderRadius: 8,
            border: `1px solid ${BORDER.default}`,
            overflow: "hidden",
            margin: "20px 0",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr 100px",
              background: hexToRgba(SPECTRUM.cobalt, 0.08),
              borderBottom: `1px solid ${BORDER.default}`,
            }}>
              <div style={{ padding: "10px 14px", fontSize: 11, fontWeight: 600, color: TEXT.muted, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: FONT.mono }}>Source</div>
              <div style={{ padding: "10px 14px", fontSize: 11, fontWeight: 600, color: TEXT.muted, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: FONT.mono }}>What it provides</div>
              <div style={{ padding: "10px 14px", fontSize: 11, fontWeight: 600, color: TEXT.muted, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: FONT.mono }}>Substrate</div>
            </div>
            {[
              { source: "External observation", provides: "What other bodies are broadcasting — facial expression, vocal tone, behaviour, postural changes", substrate: "External", color: '#e9a23b' },
              { source: "Somatic resonance", provides: "What other bodies' physiological states produce in the person's own body — the somatic echo", substrate: "Interoceptive", color: SPECTRUM.azure },
              { source: "The body's own signals", provides: "What the ESS is doing right now — hormonal shifts, muscular tension, autonomic state changes", substrate: "Interoceptive", color: SPECTRUM.azure },
              { source: "Its own output", provides: "Reasoning, narrative, abstraction, memory, pattern matching", substrate: "None (default)", color: TEXT.muted },
            ].map((row, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr 100px",
                borderBottom: i < 3 ? `1px solid ${BORDER.default}` : "none",
              }}>
                <div style={{ padding: "10px 14px", fontSize: 13, fontWeight: 600, color: TEXT.primary, lineHeight: 1.5 }}>{row.source}</div>
                <div style={{ padding: "10px 14px", fontSize: 13, color: TEXT.secondary, lineHeight: 1.6 }}>{row.provides}</div>
                <div style={{ padding: "10px 14px", fontSize: 12, color: row.color, fontWeight: 500, fontFamily: FONT.mono }}>{row.substrate}</div>
              </div>
            ))}
          </div>

          <p style={proseStyle}>
            Two of the four sources require the interoceptive substrate. Two do not. This means the CLS always has data — even when the capacity to read the body{"'"}s own signals is completely absent. The CLS is never operating blind. It is operating with or without data from the body it inhabits.
          </p>

          <p style={proseStyle}>
            The CLS does not distinguish between a complete data set and an incomplete one. It builds coherence from whatever reaches it — and the coherence feels true, whether or not it includes what the body is doing. A person whose interoceptive substrate is unavailable does not experience a gap. The narrative the CLS produces still feels complete. The absence is invisible from the inside.
          </p>

          <p style={proseStyle}>
            This is why understanding the two-system architecture does not, by itself, change it. The CLS can produce a correct narrative about how the ESS works without the interoceptive channel that would let it feel the ESS operating. Knowing the mechanism and having the biological channel to perceive the mechanism are structurally different conditions.
          </p>
        </section>

        {/* ════════════════════════════════════════════════════
            INTEROCEPTIVE ACCESS
            ════════════════════════════════════════════════════ */}

        <section style={{ marginBottom: 48 }}>
          <h2 style={{
            fontSize: 20,
            fontWeight: 700,
            color: PAGE_COLOR,
            letterSpacing: "-0.01em",
            marginBottom: 16,
            paddingBottom: 8,
            borderBottom: `2px solid ${hexToRgba(PAGE_COLOR, 0.2)}`,
          }}>
            Interoceptive Access
          </h2>

          <p style={proseStyle}>
            The state of the interoceptive substrate is the single upstream variable. It determines which data sources can function, what data reaches the CLS, what coherence the CLS builds, and whether the person can observe the ESS running. Three structurally distinct states exist.
          </p>

          {/* Three states */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "20px 0" }}>
            {/* Full access */}
            <div style={{
              padding: "16px 20px",
              borderRadius: 8,
              background: hexToRgba(SPECTRUM.azure, 0.06),
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: SPECTRUM.azure, marginBottom: 8 }}>
                Fully available
              </div>
              <p style={{ ...proseStyle, marginBottom: 6 }}>
                The interoceptive substrate carries the ESS{"'"}s signals to conscious processing. The CLS receives physiological data from the body{"'"}s interior — hormonal shifts, muscular tension, autonomic state changes. Somatic resonance with other bodies arrives as readable information. The CLS constructs from a full data set: external observation, somatic resonance, the body{"'"}s own signals, and its own reasoning.
              </p>
              <p style={{ ...proseStyle, marginBottom: 0, fontStyle: "italic", color: TEXT.muted }}>
                The person can perceive the body{"'"}s activation while it is happening. Override is a choice, not the default architecture. The restoration sequence can be observed while it runs.
              </p>
            </div>

            {/* Absent */}
            <div style={{
              padding: "16px 20px",
              borderRadius: 8,
              background: hexToRgba('#e87b35', 0.06),
              border: `1px solid ${hexToRgba('#e87b35', 0.15)}`,
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#e87b35', marginBottom: 8 }}>
                Absent
              </div>
              <p style={{ ...proseStyle, marginBottom: 6 }}>
                The interoceptive substrate is unavailable. Nothing from the body{"'"}s interior reaches conscious processing. The CLS has only external observation and its own output. It reads other bodies from the outside — often with precision — but has no data from the body it inhabits.
              </p>
              <p style={{ ...proseStyle, marginBottom: 6 }}>
                Two distinct mechanisms produce this condition. Developmental absence: the channel was never adequately built during early relational experience. The CLS has never operated with this data. Chronic degradation: sustained cortisol elevation and sympathetic dominance progressively reduced the substrate{"'"}s carrying capacity. An existing pathway was suppressed.
              </p>
              <p style={{ ...proseStyle, marginBottom: 0, fontStyle: "italic", color: TEXT.muted }}>
                Override is not an event — it is the permanent architecture. The CLS does not know what it is missing. The coherence it produces still feels complete.
              </p>
            </div>

            {/* Partial */}
            <div style={{
              padding: "16px 20px",
              borderRadius: 8,
              background: hexToRgba('#e9a23b', 0.06),
              border: `1px solid ${hexToRgba('#e9a23b', 0.15)}`,
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#e9a23b', marginBottom: 8 }}>
                Partial, flooded, or contradicted
              </div>
              <p style={{ ...proseStyle, marginBottom: 6 }}>
                The interoceptive substrate is active but the signals that reach conscious processing are overwhelmed, filtered, or contradicted by narrative. The person senses something physiological but cannot name it, or the signal arrives but the narrative fights it.
              </p>
              <p style={{ ...proseStyle, marginBottom: 0, fontStyle: "italic", color: TEXT.muted }}>
                The substrate has not been fully degraded — the signal is still arriving. The capacity to use it was never built, or is actively being overridden.
              </p>
            </div>
          </div>

          <p style={proseStyle}>
            A critical structural fact: the ESS does not change across any of these states. The same signals fire, the same hormones release, the same activation runs, the same restoration requirements exist — regardless of whether the person can perceive any of it. Interoceptive access determines one thing only: whether the CLS knows the ESS is running.
          </p>

          <div style={expandableRowStyle}>
            <ExpandableSection title="Research Foundations" type="opendata">
              <p style={expandedProseStyle}>
                Craig (2002, 2009) — interoceptive accuracy varies systematically across individuals and conditions, with anterior insula activation correlating with interoceptive performance. Paulus & Stein (2010) — interoceptive dysfunction in anxiety: altered anterior insula processing changes how bodily signals reach awareness. Critchley et al. (2004) — individual differences in interoceptive sensitivity predict emotional experience intensity, demonstrating that the same physiological activation produces different conscious experience depending on interoceptive access.
              </p>
            </ExpandableSection>

            <ExpandableSection title="What TEG-Blue Adds" type="opendata">
              <p style={expandedProseStyle}>
                TEG-Blue maps interoceptive access as the single upstream variable that determines the entire downstream architecture — not as a trait or skill, but as a biological condition. The three states are structurally distinct: full access produces true coherence, absent access produces false coherence (which feels identical from the inside), and partial access produces the contested state where the signal and the narrative conflict. The critical contribution: the ESS is unchanged across all three states. What changes is only whether the CLS has the data.
              </p>
            </ExpandableSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            THE SPEED GAP
            ════════════════════════════════════════════════════ */}

        <section style={{ marginBottom: 48 }}>
          <h2 style={{
            fontSize: 20,
            fontWeight: 700,
            color: PAGE_COLOR,
            letterSpacing: "-0.01em",
            marginBottom: 16,
            paddingBottom: 8,
            borderBottom: `2px solid ${hexToRgba(PAGE_COLOR, 0.2)}`,
          }}>
            The Speed Gap
          </h2>

          <p style={proseStyle}>
            By the time the CLS registers that something has happened, the ESS has already detected the cue, matched it to past patterns, organised a physiological response, and shifted the nervous system{"'"}s configuration. The CLS arrives to find the body already in a different state.
          </p>

          {/* Timeline */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            margin: "24px 0",
          }}>
            <div style={{
              padding: "16px 20px",
              borderRadius: 8,
              background: hexToRgba(SPECTRUM.azure, 0.06),
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
            }}>
              <div style={{
                fontSize: 11,
                fontWeight: 600,
                color: SPECTRUM.azure,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: 12,
                fontFamily: FONT.mono,
              }}>
                ESS Timeline
              </div>
              <StageStep number="1" title="Cue detection">
                10–50ms
              </StageStep>
              <StageStep number="2" title="Pattern matching">
                50–200ms
              </StageStep>
              <StageStep number="3" title="Full physiological response">
                200–500ms
              </StageStep>
            </div>

            <div style={{
              padding: "16px 20px",
              borderRadius: 8,
              background: hexToRgba('#e9a23b', 0.06),
              border: `1px solid ${hexToRgba('#e9a23b', 0.15)}`,
            }}>
              <div style={{
                fontSize: 11,
                fontWeight: 600,
                color: '#e9a23b',
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: 12,
                fontFamily: FONT.mono,
              }}>
                CLS Timeline
              </div>
              <StageStep number="1" title="Conscious awareness">
                500ms+
              </StageStep>
              <StageStep number="2" title="Analysis and planning">
                Seconds
              </StageStep>
              <StageStep number="3" title="Narrative construction">
                Minutes to hours
              </StageStep>
            </div>
          </div>

          <p style={proseStyle}>
            The amygdala fires in 12 milliseconds. A full safety-threat evaluation completes before the CLS has assembled a single thought. A complete physiological response — heart rate change, muscle tension, hormonal shifts — is organised within half a second. Conscious awareness arrives after all of this has already happened.
          </p>

          <p style={proseStyle}>
            This is not a design flaw. These systems serve different functions at different timescales. The ESS evaluates and responds at the speed survival requires. The CLS provides the reflective capacity that allows learning, planning, and communication — but it operates within whatever physiological state the ESS has already set.
          </p>
        </section>

        {/* ════════════════════════════════════════════════════
            THE INTERDEPENDENCE
            ════════════════════════════════════════════════════ */}

        <section style={{ marginBottom: 48 }}>
          <h2 style={{
            fontSize: 20,
            fontWeight: 700,
            color: PAGE_COLOR,
            letterSpacing: "-0.01em",
            marginBottom: 16,
            paddingBottom: 8,
            borderBottom: `2px solid ${hexToRgba(PAGE_COLOR, 0.2)}`,
          }}>
            The Interdependence
          </h2>

          <p style={proseStyle}>
            These are not competitors. They are interdependent capacities running in one organism, operating at different speeds, in different domains, through different mechanisms.
          </p>

          <p style={proseStyle}>
            The nervous system{"'"}s current physiological configuration — set by the ESS — determines what the person can perceive, think, feel, and learn. The CLS operates within whatever configuration has been set. State precedes capacity. A person whose nervous system is organised for threat perceives, thinks, and acts from threat — regardless of what they consciously intend.
          </p>

          <p style={proseStyle}>
            The CLS does not override this configuration by deciding to. It can narrate it, manage it, suppress it, or explain it away — but the physiological state remains. The body carries the activation whether the mind acknowledges it or not. What the CLS can do is receive the ESS{"'"}s signals — when the biological architecture connecting the two systems is available — and allow the body{"'"}s restoration sequence to complete.
          </p>

          <p style={proseStyle}>
            Whether the CLS can feel what the ESS is doing — whether it can receive the physiological signals the ESS has generated — determines everything that follows. This is the central question the{" "}
            <Link href="/models" style={linkStyle}>Emotional Somatic Cycle</Link> maps.
          </p>
        </section>

        {/* ════════════════════════════════════════════════════
            WHERE TO GO NEXT
            ════════════════════════════════════════════════════ */}

        <section style={{ marginBottom: 48 }}>
          <h2 style={{
            fontSize: 20,
            fontWeight: 700,
            color: PAGE_COLOR,
            letterSpacing: "-0.01em",
            marginBottom: 16,
            paddingBottom: 8,
            borderBottom: `2px solid ${hexToRgba(PAGE_COLOR, 0.2)}`,
          }}>
            Where to Go Next
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link href="/models" style={{
              ...linkStyle,
              display: "block",
              padding: "14px 20px",
              borderRadius: 8,
              background: hexToRgba(SPECTRUM.azure, 0.06),
              border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.15)}`,
              transition: "border-color 0.2s ease",
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 4 }}>
                The Emotional Somatic Cycle →
              </div>
              <div style={{ fontSize: 13, color: TEXT.muted }}>
                The repeating biological sequence these two systems run together — from detection through activation to restoration or incompletion.
              </div>
            </Link>

            <Link href="/model/m1-emotions-as-signals" style={{
              ...linkStyle,
              display: "block",
              padding: "14px 20px",
              borderRadius: 8,
              background: hexToRgba(SPECTRUM.cobalt, 0.04),
              border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.1)}`,
              transition: "border-color 0.2s ease",
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 4 }}>
                M1: Emotions as Signals →
              </div>
              <div style={{ fontSize: 13, color: TEXT.muted }}>
                What the ESS detects and the physiological response it generates — sixteen signals, each carrying specific biological information.
              </div>
            </Link>

            <Link href="/framework/f12-two-information-systems" style={{
              ...linkStyle,
              display: "block",
              padding: "14px 20px",
              borderRadius: 8,
              background: hexToRgba(SPECTRUM.cobalt, 0.04),
              border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.1)}`,
              transition: "border-color 0.2s ease",
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: TEXT.primary, marginBottom: 4 }}>
                F12: The Two Information Systems →
              </div>
              <div style={{ fontSize: 13, color: TEXT.muted }}>
                The complete architecture — ESS and CLS as one integrated system, and why understanding alone does not change it.
              </div>
            </Link>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            FAQ + JSON-LD
            ════════════════════════════════════════════════════ */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQJsonLd(FAQ_ITEMS)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateBreadcrumbJsonLd([
                { name: "Home", url: "https://teg-blue.org" },
                { name: "Two Information Systems", url: "https://teg-blue.org/emotional-somatic-system" },
              ])
            ),
          }}
        />

      </PageLayout>

      <SiteFooter />
    </div>
  );
}
