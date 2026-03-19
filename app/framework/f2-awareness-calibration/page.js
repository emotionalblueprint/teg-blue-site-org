import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba, RESEARCHER, PATTERN_GRADIENT,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, PageLayout, FrameworkHero,
  PropositionBox, ExpandableSection, CommonUnderstanding,
} from "@/src/components";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

// ─── SIDEBAR ──────────────────────────────────────────────

const SIDEBAR_SECTIONS = [
  { label: "The Common Understanding", href: "#common-understanding", description: "What most people think empathy means — and what the nervous system is actually doing." },
  { label: "Core Propositions", href: "#core-propositions", description: "That the adults' awareness configuration is the child's developmental environment." },
  { label: "Overview", href: "#overview", description: "F1 is the instrument. F2 is the calibration. The three awareness capacities and the organising mechanism." },
  { label: "Three Capacities at Birth", href: "#capacities-at-birth", description: "What the infant arrives with: Reading Emotions, Emotional Resonance, and Self-Emotional Awareness in proto-form." },
  { label: "Feeling = Being", href: "#pre-sea-condition", description: "Before cognition arrives, there is no observing self. Feeling is being. Feedback is identity." },
  { label: "The Mechanism", href: "#the-mechanism", description: "How each capacity develops through the specific experience of being met by a caregiver who already has that capacity online." },
  { label: "Designed Development", href: "#designed-development", description: "What the system builds when conditions are met: accurate Reading Emotions (RE), sustainable Emotional Resonance (ER), online Self-Emotional Awareness (SEA), a fluid compass." },
  { label: "The Turn", href: "#the-turn", description: "What happens when the awareness that gets passed is incomplete." },
  { label: "The Stuck Compass", href: "#the-consequence", description: "How threat locks the mode, the mode becomes chronic, cognition builds identity around the locked position." },
  { label: "What Identity Is", href: "#config-mode-identity", description: "Personality is a record, not a type. Configuration, not character." },
  { label: "The Generational Chain", href: "#the-replication", description: "Awareness teaches awareness across generations. The chain transmits through nervous systems, not words." },
  { label: "What F2 Establishes", href: "#what-f2-establishes", description: "Every core concept defined, from the three capacities to awareness-teaches-awareness." },
  { label: "Research Foundations", href: "#research-foundations", description: "Attachment theory, developmental neuroscience, interpersonal neurobiology, and polyvagal theory." },
  { label: "Bridge to F3", href: "#bridge-to-f3", description: "Why the calibration persists after childhood ends. Cognition actively maintains false coherence." },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Awareness Teaches Awareness (F2) | TEG-Blue Research",
  description:
    "How the three awareness capacities — Reading Emotions, Emotional Resonance, and Self-Emotional Awareness — calibrate the compass through the relational environment, and what happens when the awareness passed is incomplete. Framework F2 of 12.",
  keywords: [
    "awareness teaches awareness",
    "awareness calibration",
    "three awareness capacities",
    "reading emotions",
    "emotional resonance",
    "self-emotional awareness",
    "developmental calibration",
    "co-regulation",
    "biological restoration",
    "generational transmission",
    "emotional technology",
    "identity formation",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f2-awareness-calibration",
  },
  openGraph: {
    title: "Awareness Teaches Awareness — F2 Framework | TEG-Blue",
    description:
      "How the three awareness capacities calibrate the compass through the relational environment, and what happens when the awareness passed is incomplete. Framework F2 of the TEG-Blue 12-framework system.",
    url: "https://teg-blue.org/framework/f2-awareness-calibration",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awareness Teaches Awareness — TEG-Blue F2",
    description:
      "How the three awareness capacities calibrate the compass. The developmental framework of the TEG-Blue system.",
  },
  other: {
    'citation_title': 'Awareness Teaches Awareness',
    'citation_author': 'Anna Paretas-Artacho',
    'citation_publication_date': '2026/02',
    'citation_technical_report_institution': 'TEG-Blue Research',
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F2AwarenessCalibrationPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/framework/f2-awareness-calibration" />

      <PageLayout
        header={
          <FrameworkHero
              badge="FRAMEWORK F2"
              title="Awareness Teaches Awareness"
              subtitle="How the Three Capacities Calibrate the Compass"
              description="How the three awareness capacities develop through the relational environment, what the system produces when the awareness passed is complete, and what happens to the compass calibration, chronic mode position, and identity when it is not. The calibration framework of the TEG-Blue system."
              group="Individual"
              groupLabel="Individual · F1–F3"
              threadLine="Co-regulation → self-restoration (when learned). When not learned: the compass locks · Cost: The restoration path is never built"
              informsModels={[
                { label: "M2", href: "/model/m2-three-awareness-capacities" },
                { label: "M3", href: "/model/m3-regulation-capacities" },
              ]}
              adjacent={{
                prev: { label: "F1 Emotions as Biological Information", href: "/framework/f1-emotional-gradient" },
                next: { label: "F3 False Coherence", href: "/framework/f3-false-coherence" },
              }}
            />
        }
        sidebarSections={SIDEBAR_SECTIONS}
      >
        {/* ─── THREE CAPACITIES LEGEND ──────────────────── */}
        <div
          style={{
            margin: "32px 0 0",
            padding: "16px 20px",
            background: hexToRgba(SPECTRUM.cobalt, 0.06),
            borderRadius: 10,
            border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
          }}
        >
          <h2
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: SPECTRUM.cobalt,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontFamily: FONT.mono,
              marginBottom: 10,
            }}
          >
            The three awareness capacities
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: TEXT.primary }}>Reading Emotions (RE)</strong>{" "}
              <span style={{ color: TEXT.muted }}>|</span>{" "}
              Perceiving what others are feeling — detecting emotional signals from faces, tone, body language, and context.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: TEXT.primary }}>Emotional Resonance (ER)</strong>{" "}
              <span style={{ color: TEXT.muted }}>|</span>{" "}
              Feeling what others are feeling — the body's capacity to resonate with another person's emotional state.
            </p>
            <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: TEXT.primary }}>Self-Emotional Awareness (SEA)</strong>{" "}
              <span style={{ color: TEXT.muted }}>|</span>{" "}
              Perceiving and naming your own internal state — the capacity that separates "I feel bad" from "I feel guilty because I hurt someone."
            </p>
          </div>
        </div>

        <article>
          {/* ─── THE COMMON UNDERSTANDING ──────────────────── */}
          <CommonUnderstanding
            terms={[
              {
                title: "Empathy",
                commonUnderstanding: "A single trait you either have or lack — being a caring person, or not.",
                definition: "Three independent capacities — RE (Reading Emotions), ER (Emotional Resonance), and SEA (Self-Emotional Awareness). What most people call 'empathy' is actually different combinations of these, producing very different outcomes. Sharp RE (Reading Emotions) without ER (Emotional Resonance) reads others for leverage. High ER (Emotional Resonance) without SEA (Self-Emotional Awareness) feels everyone else's pain but cannot track its own depletion.",
              },
            ]}
          />

          {/* ─── CORE PROPOSITIONS ───────────────────────── */}
          <section
            id="core-propositions"
            aria-labelledby="heading-core-propositions"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-core-propositions"
              style={sectionHeadingStyle}
            >
              Core Propositions
            </h2>
            <PropositionBox label="FOUNDATIONAL CLAIM">
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={propositionItemStyle}>
                  The three awareness capacities — Reading Emotions (RE), Emotional Resonance (ER), and Self-Emotional Awareness (SEA) — are present at birth in proto-form and develop through relational conditions
                </li>
                <li style={propositionItemStyle}>
                  Awareness teaches awareness: the adults' awareness configuration is the child's developmental environment
                </li>
                <li style={propositionItemStyle}>
                  Children calibrate to what caregivers embody, not what they say — the transmission channel is the nervous system, not language
                </li>
                <li style={propositionItemStyle}>
                  Identity is not a pure expression of an "innate self" — it is a cognitive structure built around the awareness capacities and regulation patterns the child had conditions to develop
                </li>
                <li style={propositionItemStyle}>
                  Healing is not finding a hidden self or removing a mask — it is developing the capacities that never had conditions to form, and learning Biological Restoration
                </li>
                <li style={propositionItemStyle}>
                  The generational chain replicates until awareness changes, not just behavior or intention
                </li>
              </ul>
            </PropositionBox>
          </section>

          {/* ─── OVERVIEW ─────────────────────────────────── */}
          <section
            id="overview"
            aria-labelledby="heading-overview"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-overview"
              style={sectionHeadingStyle}
            >
              Overview — The Calibration Framework
            </h2>

            <p style={proseStyle}>
              F1 describes the complete instrument — the Inner Compass with its four modes, the gradient, Biological Restoration. The design. F2 explains how the instrument gets calibrated in each person — and what happens when the calibration goes wrong.
            </p>
            <p style={proseStyle}>
              The calibration system is the three awareness capacities: Reading Emotions (RE), Emotional Resonance (ER), and Self-Emotional Awareness (SEA). These capacities determine what data the compass receives. They are present at birth in proto-form. They develop through relational conditions. And they develop through a specific mechanism: <strong style={{ color: TEXT.primary }}>awareness teaches awareness.</strong> The awareness capacities the caregivers carry are the awareness capacities that get passed. The adults' capacity configuration is the child's environment.
            </p>
            <p style={proseStyle}>
              It is a developmental mechanism: <strong style={{ color: TEXT.primary }}>what the adult nervous system can reliably embody becomes the child's training data.</strong>
            </p>

            <h3 style={conceptHeadingStyle}>The Two-Part Architecture</h3>
            <p style={proseStyle}>
              F2 has a two-part architecture. The first half describes the design — how the awareness capacities, the capacity to regulate, and the full range of the compass develop when conditions are met. The second half asks: what happens when those conditions are not met? What does the system produce instead — and how does that become what we call personality?
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Part</th>
                    <th style={thStyle}>What It Describes</th>
                    <th style={thStyle}>Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Part 1: The Design", "How the three awareness capacities develop when conditions are met", "Accurate Reading Emotions (RE), sustainable Emotional Resonance (ER), online Self-Emotional Awareness (SEA), learned Biological Restoration, true coherence, a moving compass"]} />
                  <TableRow cells={["Part 2: The Deviation", "What happens when the awareness that gets passed is incomplete", "Reconfigured capacities, disrupted regulation, chronic mode, false coherence, constructed identity"]} />
                </tbody>
              </table>
            </div>

            <KeyStatement>
              Core Question: How do the three awareness capacities and the capacity to regulate develop when conditions are met — and what happens to the compass calibration, chronic mode position, and identity when they are not?
            </KeyStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Relationship to F1" type="framework">
                <p style={expandedProseStyle}>
                  F1 is the instrument. F2 is the calibration. F1 describes what the compass does — including the complete Biological Restoration process in its designed form. F2 explains how each person's compass gets tuned — through the awareness capacities that develop (or don't) in the relational environment — and what happens when Biological Restoration is never learned. F1 establishes the four modes in their designed operation. F2 explains what makes any mode become chronic.
                </p>
              </ExpandableSection>

              <ExpandableSection title="Relationship to the Inner Compass Model" type="framework">
                <p style={expandedProseStyle}>
                  F2 explains the developmental origins of everything the Inner Compass describes in adult operation — both the full four-mode range and the chronic mode positions. The Inner Compass shows how the three capacities function (or fail to function) across the four modes. F2 explains how they got that way.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── THE STARTING POINT ───────────────────────── */}
          <section
            id="the-starting-point"
            aria-labelledby="heading-the-starting-point"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-the-starting-point" style={sectionHeadingStyle}>
              The Starting Point — Before Cognition Arrives
            </h2>

            {/* Concept 1: Three Capacities Connected at Birth */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="capacities-at-birth" style={conceptHeadingStyle}>
                The Three Capacities Connected at Birth
              </h3>

              <KeyStatement>
                Being yourself is not a personality. It is what happens when the three capacities are connected.
              </KeyStatement>

              <p style={proseStyle}>
                Operationally, "being yourself" means: <strong style={{ color: TEXT.primary }}>Reading Emotions (RE) reads accurately, Emotional Resonance (ER) resonates without flooding, Self-Emotional Awareness (SEA) registers your own state — and none of these are being overridden by threat.</strong>
              </p>

              <p style={proseStyle}>
                At birth, the emotional-somatic system is the only information system online. The infant already has the biological precursors of the three awareness capacities, operating as a single integrated system:
              </p>
              <ul style={{ paddingLeft: 20, margin: "0 0 16px" }}>
                <li style={listItemStyle}>
                  <strong style={{ color: TEXT.primary }}>Proto-RE (Reading Emotions)</strong> — the infant tracks faces, responds to tone, orients toward emotional signals. Mirroring is automatic.
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: TEXT.primary }}>Proto-ER (Emotional Resonance)</strong> — the infant feels with others before knowing why. Emotional contagion is present from the start.
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: TEXT.primary }}>Proto-SEA (Self-Emotional Awareness)</strong> — the body registers states — hunger, discomfort, safety, distress — as raw sensation. There is no observing self to name them, but the signals exist.
                </li>
              </ul>
              <p style={proseStyle}>
                This connected state is what people remember when they say "when I was a kid, I was just <em>me</em>." Not a memory of a different person hidden underneath. A memory of a capacity state — the three awarenesses connected before anything redirected them. The developmental question becomes concrete: not "who is this person really?" but "which capacities had conditions to develop and which didn't?"
              </p>

              <div style={expandableRowStyle}>
                <ExpandableSection title="Research Traditions" type="framework">
                  <p style={expandedProseStyle}>
                    Porges (2011) — neuroception operates from birth. Schore (2003) — affect precedes cognition developmentally. Siegel (2012) — right-brain implicit processing precedes left-brain explicit. Zajonc (1980) — emotion precedes cognition. Damasio (1994) — somatic markers shape perception before conscious awareness. Bowlby (1969) — attachment system is innate. Decety & Jackson (2004) — multi-dimensional empathy components.
                  </p>
                </ExpandableSection>

                <ExpandableSection title="What TEG-Blue Adds" type="framework">
                  <p style={expandedProseStyle}>
                    Identifying the three capacities — Reading Emotions (RE), Emotional Resonance (ER), Self-Emotional Awareness (SEA) — as the specific awarenesses present at birth in proto-form, and framing their connected state as the mechanism behind what people experience as "being themselves." This reframes the "real self" from a hidden identity to a capacity state — not someone to find but something to reconnect.
                  </p>
                </ExpandableSection>
              </div>
            </div>

            {/* Concept 2: The Pre-SEA Condition */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="pre-sea-condition" style={conceptHeadingStyle}>
                The Pre-SEA Condition — Feeling = Being
              </h3>

              <KeyStatement>
                Before cognition develops, there is no observing self. No separation between experience and identity. Feeling = being. Feedback = identity. How I'm treated = who I am.
              </KeyStatement>

              <p style={proseStyle}>
                Without SEA, the child cannot locate causality in the environment — so the system defaults to the safest conclusion for attachment: <strong style={{ color: TEXT.primary }}>"It must be me."</strong>
              </p>

              <p style={proseStyle}>
                A child does not think "I feel scared" — the child <em>is</em> scared. A child does not think "my caregiver is dysregulated" — the child experiences "something is wrong with me." This is the pre-SEA condition — the normal developmental starting point before Self-Emotional Awareness has had conditions to form. Every human begins here.
              </p>
              <p style={proseStyle}>
                The question is whether the environment provides sufficient conditions for SEA to develop — for the child to eventually make the separation between "this is what I feel" and "this is what is happening around me." Adults without SEA are still operating in the pre-SEA condition where feeling = being and external feedback = identity. This is not immaturity. It is unfinished developmental wiring — the capacity that was never built.
              </p>

              <div style={expandableRowStyle}>
                <ExpandableSection title="Research Traditions" type="framework">
                  <p style={expandedProseStyle}>
                    Stern (1985) — developing sense of self through relational experience. Mahler (1975) — separation-individuation process. Siegel (2012) — differentiation requires safety and integration. Schore (2003) — right hemisphere calibrates to early relational environment.
                  </p>
                </ExpandableSection>

                <ExpandableSection title="What TEG-Blue Adds" type="framework">
                  <p style={expandedProseStyle}>
                    Naming this as the "pre-SEA condition" and making explicit that the separation between internal experience and external reality <em>is</em> Self-Emotional Awareness. This connects the developmental starting point directly to the adult capacity framework: adults without SEA are still in the pre-SEA condition. This is not immaturity — it is unfinished developmental wiring.
                  </p>
                </ExpandableSection>
              </div>
            </div>
          </section>

          {/* ─── THE MECHANISM ─────────────────────────────── */}
          <section
            id="the-mechanism"
            aria-labelledby="heading-the-mechanism"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-how-awareness-develops" style={sectionHeadingStyle}>
              How do awareness capacities develop in children?
            </h2>

            <h2 id="heading-the-mechanism" style={sectionHeadingStyle}>
              The Mechanism — Awareness Teaches Awareness
            </h2>

            <div style={{ marginBottom: 32 }}>
              <h3 id="awareness-teaches-awareness" style={conceptHeadingStyle}>
                The Core Mechanism
              </h3>

              <KeyStatement>
                Children do not calibrate to what adults say. They calibrate to what adults embody. The caregiver's capacity configuration is the child's developmental environment.
              </KeyStatement>

              <p style={proseStyle}>
                The three awareness capacities do not develop in isolation. They do not develop through instruction, willpower, or cognitive understanding. They develop through one mechanism: <strong style={{ color: TEXT.primary }}>the awareness the caregivers carry is the awareness that gets passed.</strong>
              </p>
              <p style={proseStyle}>
                The child's nervous system develops inside the adults' nervous system. What the adults can and cannot do with their own Reading Emotions (RE), Emotional Resonance (ER), and Self-Emotional Awareness (SEA) creates the environment the child's awareness develops from. A parent who says "be kind" while living in chronic Control teaches Control, not kindness. A caregiver who says "I'm fine" while their nervous system radiates tension teaches the child that emotional signals are not to be trusted. A caregiver whose own SEA is online — who can name what they feel, sit with discomfort, model that emotions are signals rather than crises — teaches the child, without instruction, that internal experience is readable and trustworthy.
              </p>
              <p style={proseStyle}>
                This is the foundational mechanism of F2. Everything that follows — the designed development account, the three adverse conditions, the chronic mode positions, the generational transmission — is an expression of this one principle: awareness teaches awareness. The adults' awareness is the child's inheritance.
              </p>

              <div style={expandableRowStyle}>
                <ExpandableSection title="Research Traditions" type="framework">
                  <p style={expandedProseStyle}>
                    Schore (2003) — right-brain-to-right-brain attunement between caregiver and infant. Porges (2011) — co-regulation through the social engagement system. Siegel (2012) — interpersonal neurobiology; the mind develops through relationships. Bowlby (1969) — attachment as a regulatory system. Tronick (1998) — mutual regulation model. Bandura (1977) — social learning and modelling. Stern (1985) — attunement and mirroring in early development.
                  </p>
                </ExpandableSection>

                <ExpandableSection title="What TEG-Blue Adds" type="framework">
                  <p style={expandedProseStyle}>
                    Naming the transmission mechanism explicitly: not "environment shapes development" (which is generic) but "the specific awareness capacities the adults carry determine which awareness capacities the child develops." The causal chain is precise: adult Reading Emotions (RE) / Emotional Resonance (ER) / Self-Emotional Awareness (SEA) configuration → environment → child RE/ER/SEA configuration.
                  </p>
                </ExpandableSection>
              </div>
            </div>
          </section>

          {/* ─── DESIGNED DEVELOPMENT ─────────────────────── */}
          <section
            id="designed-development"
            aria-labelledby="heading-designed-development"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-designed-development" style={sectionHeadingStyle}>
              Designed Development — What the System Produces
            </h2>

            {/* Concept 4: How the Capacities Develop */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="capacity-development" style={conceptHeadingStyle}>
                How the Capacities Develop
              </h3>

              <p style={proseStyle}>
                When the caregiving environment provides sufficient safety, consistency, and emotional honesty — when the adults around the child have awareness capacities that are functioning and can co-regulate — each of the three capacities develops as designed.
              </p>

              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>Reading Emotions (RE) develops as accurate reading.</strong> Not hypervigilant scanning for threat. Not instrumental reading for strategic advantage. Accurate reading: the child learns to track others' emotional states because the adults' emotional states are readable — consistent, congruent, not dangerous to perceive. RE develops in service of understanding, not survival. The two common distortions are <strong style={{ color: TEXT.primary }}>hypervigilant RE</strong> (scanning for threat) and <strong style={{ color: TEXT.primary }}>instrumental RE</strong> (reading for leverage).
              </p>
              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>Emotional Resonance (ER) develops as sustainable resonance.</strong> Not flooding — where the child is overwhelmed by everyone else's emotions. Not shut-down — where the child stops feeling with others because feeling was punished or unbearable. Sustainable: the child feels with others and can hold that feeling without losing themselves in it. ER develops in service of connection, not overwhelm. The two common distortions are <strong style={{ color: TEXT.primary }}>flooded ER</strong> (over-identifying) and <strong style={{ color: TEXT.primary }}>sealed ER</strong> (empathy shut-down).
              </p>
              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>Self-Emotional Awareness (SEA) develops as the capacity to know one's own states.</strong> This is the developmental breakthrough: the child begins to separate "this is what I feel" from "this is what is happening around me." The pre-SEA condition begins to resolve. Internal experience becomes readable, nameable, trustworthy. The two common distortions are <strong style={{ color: TEXT.primary }}>absent SEA</strong> (no self-referential input) and <strong style={{ color: TEXT.primary }}>story-based SEA</strong> (narrative replacing sensation).
              </p>
              <p style={proseStyle}>
                This requires something specific from the caregiving environment: <strong style={{ color: TEXT.primary }}>the child's emotional signals must be received, reflected as best as possible, and repaired when misread.</strong> The child cries and the caregiver says "you're upset" — not "you're fine," not "stop that," not "what's wrong with you." Over time, the child learns to read their own signals because someone else read them first. SEA develops through being seen — not instructed.
              </p>
              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>When cognition arrives, it arrives inside a fully informed system.</strong> All three inputs are online. RE provides accurate data about others. ER provides felt experience of connection. SEA provides data about the self. Cognition builds with the full information set — and the result is <strong style={{ color: TEXT.primary }}>true coherence</strong>: narrative that matches felt experience. Identity forms around accurate data. Not a perfect person — a person with a full information set. A person whose compass moves freely because Biological Restoration was learned and the capacities are online.
              </p>

              <div style={expandableRowStyle}>
                <ExpandableSection title="Research Traditions" type="framework">
                  <p style={expandedProseStyle}>
                    Bowlby (1969) — secure attachment as the base for development. Ainsworth (1978) — secure attachment patterns. Schore (2003) — right-brain development through attuned caregiving. Siegel (2012) — integration as the mechanism of health; earned security through coherent narrative. Tronick (1998) — mutual regulation, "good enough" repair. Winnicott (1960) — "good enough" caregiving and conditions for authentic experience.
                  </p>
                </ExpandableSection>

                <ExpandableSection title="What TEG-Blue Adds" type="framework">
                  <p style={expandedProseStyle}>
                    Describing the full development of all three capacities and regulation as a single integrated account — not as a clinical ideal but as the design specification of the system. The introduction of <em>true coherence</em> as the counterpart to false coherence (F3): narrative aligned with felt experience because cognition has the full information set.
                  </p>
                </ExpandableSection>
              </div>
            </div>

            {/* Concept 5: Co-Regulation and Biological Restoration */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="co-regulation" style={conceptHeadingStyle}>
                The Capacity to Regulate — Co-Regulation and Biological Restoration
              </h3>

              <KeyStatement>
                The child doesn't learn to regulate through instruction. The child learns to regulate through being regulated with.
              </KeyStatement>

              <p style={proseStyle}>
                F1 establishes that Biological Restoration is the mechanism by which the body returns from threat to baseline. Children are born with the biological capacity for this return. The nervous system is designed to complete the threat cycle: mobilize, respond, discharge, restore. But the infant cannot do this alone. The system is designed for <strong style={{ color: TEXT.primary }}>co-regulation</strong> — the caregiver's nervous system teaching the child's nervous system Biological Restoration.
              </p>
              <p style={proseStyle}>
                When the infant cries and the caregiver holds them, the caregiver's regulated nervous system sends safety signals — through tone, touch, rhythm, presence — that help the infant's activated nervous system complete the cycle and settle. The infant is not being "calmed down." They are learning a <strong style={{ color: TEXT.primary }}>sequence</strong>: activation → supported discharge → return. That sequence is what becomes Biological Restoration. The infant is learning to attune the compass. Through thousands of these interactions, the child's nervous system internalizes Biological Restoration: <em>this is how the body goes back to safety.</em> Co-regulation becomes the template for self-regulation.
              </p>
              <p style={proseStyle}>
                This is not a metaphor. It is neurobiological wiring. The caregiver's regulatory capacity literally shapes the child's developing regulatory architecture. The infant doesn't learn to regulate through instruction. The infant learns to regulate through being regulated with. This is awareness teaches awareness applied to regulation: the caregiver's capacity to regulate is the child's regulatory environment.
              </p>

              <div style={expandableRowStyle}>
                <ExpandableSection title="Research Traditions" type="framework">
                  <p style={expandedProseStyle}>
                    Porges (2011) — co-regulation through the social engagement system; ventral vagal development requires relational safety. Schore (2003) — right-brain-to-right-brain regulation between caregiver and infant shapes regulatory capacity. Siegel (2012) — interpersonal neurobiology. Bowlby (1969) — attachment as a regulatory system. Tronick (1998) — mutual regulation model. Levine (1997) — regulation as completion of the activation cycle.
                  </p>
                </ExpandableSection>

                <ExpandableSection title="What TEG-Blue Adds" type="framework">
                  <p style={expandedProseStyle}>
                    Positioning co-regulation as the developmental origin of Biological Restoration established in F1 — and as the clearest expression of "awareness teaches awareness" applied to regulation. Biological Restoration is not a skill the child learns through instruction. It is a physiological capacity that develops through being regulated with. The caregiver's nervous system is the child's first regulatory environment.
                  </p>
                </ExpandableSection>
              </div>
            </div>
          </section>

          {/* ─── THE TURN ─────────────────────────────────── */}
          <section
            id="the-turn"
            aria-labelledby="heading-the-turn"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-the-turn" style={sectionHeadingStyle}>
              The Turn — Three Conditions That Shape the Compass
            </h2>

            <p style={proseStyle}>
              The system described in the previous sections is the design. But this design requires something the child cannot provide for itself: caregivers whose own awareness capacities are functioning. When the adults' awareness capacities were not fully developed — when their own compasses were stuck, their own SEA was absent, their own Biological Restoration was never learned — the child's development follows a different trajectory. Not because the design is flawed. Because the awareness that gets passed is incomplete. In practice, Biological Restoration can be <strong style={{ color: TEXT.primary }}>disrupted</strong> (unpredictability), <strong style={{ color: TEXT.primary }}>misdirected</strong> (incongruence), or <strong style={{ color: TEXT.primary }}>blocked</strong> (invalidation).
            </p>

            <p style={proseStyle}>
              Three major conditions determine how the three capacities develop and whether the capacity to regulate is learned. Each condition is produced by adults with a specific awareness configuration. The child does not develop in a vacuum. The child develops inside the adults' awareness.
            </p>

            {/* Condition 1 */}
            <div style={{ marginBottom: 24 }}>
              <h3 id="condition-unpredictable" style={conceptHeadingStyle}>
                Condition 1 — Emotionally Unpredictable Environments
              </h3>
              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>The adults' awareness:</strong> Caregivers whose own Reading Emotions (RE) is hyperactive (scanning constantly), whose Emotional Resonance (ER) floods or swings, and whose Self-Emotional Awareness (SEA) is absent. The caregiver's compass swings unpredictably between modes. One moment warm, the next explosive or withdrawn. The child cannot predict which version of the caregiver will appear because the caregiver cannot predict it either.
              </p>
              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>What this produces in the child:</strong> Reading Emotions (RE) overdevelops into hypervigilance — survival requires predicting which version of the caregiver will appear. Emotional Resonance (ER) either floods (wide open to predict and appease) or shuts down (too overwhelming). Self-Emotional Awareness (SEA) does not develop — all attention is directed outward toward the unpredictable source. Biological Restoration is disrupted — sometimes the caregiver helps the child come back; sometimes the caregiver is the reason the child activated. The child's nervous system learns: Biological Restoration is not reliable. Stay alert.
              </p>
            </div>

            {/* Condition 2 */}
            <div style={{ marginBottom: 24 }}>
              <h3 id="condition-incongruent" style={conceptHeadingStyle}>
                Condition 2 — Emotionally Incongruent Environments
              </h3>
              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>The adults' awareness:</strong> Caregivers whose Reading Emotions (RE) reads accurately but whose Emotional Resonance (ER) is disconnected from what they express. Their Self-Emotional Awareness (SEA) is partially online but filtered through narrative — they have a story about who they are that contradicts what their body is doing. The caregiver says "I'm fine" while their nervous system radiates tension. They say "we're a happy family" while the child's resonance picks up distress.
              </p>
              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>What this produces in the child:</strong> Reading Emotions (RE) calibrates to performance rather than authenticity — the child learns to read the surface layer because the surface is what gets rewarded. Emotional Resonance (ER) becomes confused and distrusted — the child's felt sense is contradicted by external authority. Self-Emotional Awareness (SEA) is actively undermined — the child's emerging capacity to read their own signals is met with "you're not angry," "that didn't happen," "you're imagining things." Biological Restoration is misdirected — the child learns to regulate toward what the adult needs, not toward their own safety.
              </p>
            </div>

            {/* Condition 3 */}
            <div style={{ marginBottom: 24 }}>
              <h3 id="condition-invalidating" style={conceptHeadingStyle}>
                Condition 3 — Emotional Invalidation
              </h3>
              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>The adults' awareness:</strong> Caregivers whose Reading Emotions (RE) is instrumental (they read others for strategic purposes — compliance, control), whose Emotional Resonance (ER) is shut down, and whose Self-Emotional Awareness (SEA) is absent. These adults are often in chronic Control — competent, decisive, "rational." Their compass has been stuck for so long that they genuinely believe the stuck position is correct. They may not intend cruelty — but the impact is still <strong style={{ color: TEXT.primary }}>real</strong>, and invalidation still <strong style={{ color: TEXT.primary }}>harms development</strong>. They are teaching what they know.
              </p>
              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>What this produces in the child:</strong> Reading Emotions (RE) develops instrumentally — the child learns to read what the environment demands to avoid punishment or rejection. Emotional Resonance (ER) shuts down — feeling was punished, so the system stops feeling. Self-Emotional Awareness (SEA) never forms — internal experience is explicitly taught to be wrong: "you don't feel that, you shouldn't feel that." Biological Restoration is blocked — the child learns that the activation itself is the problem. The child learns to suppress the activation rather than complete it. The child learns — from adults who believe it — that the first language (F1) is noise, and that silencing it is maturity.
              </p>
            </div>

            {/* Three Conditions Table */}
            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Condition</th>
                    <th style={thStyle}>Adult Configuration</th>
                    <th style={thStyle}>Child's Reading Emotions (RE)</th>
                    <th style={thStyle}>Child's Emotional Resonance (ER)</th>
                    <th style={thStyle}>Child's Self-Emotional Awareness (SEA)</th>
                    <th style={thStyle}>Biological Restoration</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={[
                    "Unpredictable",
                    "Hyperactive RE, flooding ER, absent SEA",
                    "Hypervigilant",
                    "Flooded or shut-down",
                    "Absent",
                    "Disrupted",
                  ]} />
                  <TableRow cells={[
                    "Incongruent",
                    "Accurate RE, disconnected ER, narrative-filtered SEA",
                    "Surface-calibrated",
                    "Confused, distrusted",
                    "Suppressed",
                    "Misdirected",
                  ]} />
                  <TableRow cells={[
                    "Invalidating",
                    "Instrumental RE, shut-down ER, absent SEA",
                    "Instrumental",
                    "Shut down",
                    "Never forms",
                    "Blocked",
                  ]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Cultural override as Condition 3 at scale:</strong> When a culture teaches "logic over emotion," "don't be so sensitive," or "boys don't cry," it performs emotional invalidation across entire populations. The adults delivering these messages are the product of the same conditions, passed down generationally. The culture doesn't produce the condition. The condition produces the culture. And the culture reproduces the condition.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Van der Kolk (2014) — trauma forces nervous system adaptation. Bowlby (1988) — defensive exclusion. Linehan (1993) — invalidating environments. Young (1990) — early maladaptive schemas. Beck (1967) — core beliefs formed through early experience. Decety & Jackson (2004) — cognitive and affective empathy as distinct systems. Porges (2011) — co-regulation failure shapes regulatory capacity. Schore (2003) — right hemisphere calibrates to early relational environment. Bandura (1977) — social learning and modelling.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Mapping each condition to the adult awareness configuration that produces it <em>and</em> to its specific effect on each of the child's three capacities and on the capacity to regulate. The causal chain is made explicit: adult Reading Emotions (RE) / Emotional Resonance (ER) / Self-Emotional Awareness (SEA) configuration → environment → child RE/ER/SEA configuration + regulation outcome. This is not just "the child adapts" — it is which adults, carrying which awareness, produce which environment, shaping which capacities, with which regulatory consequence.
                </p>
              </ExpandableSection>
            </div>

            {/* Chronic Flatness */}
            <div style={{ marginBottom: 32, marginTop: 24 }}>
              <h3 id="chronic-flatness" style={conceptHeadingStyle}>
                Chronic Flatness — When All Three Channels Are at Minimum
              </h3>

              <p style={proseStyle}>
                The three conditions describe distortions: Reading Emotions (RE) redirected, Emotional Resonance (ER) flooded or sealed, Self-Emotional Awareness (SEA) suppressed or absent. But when any of these conditions persists severely enough — or when multiple conditions overlap — the system can reach a state that is not distortion but reduction: <strong style={{ color: TEXT.primary }}>Chronic Flatness.</strong>
              </p>
              <p style={proseStyle}>
                Chronic Flatness is all three capacities at baseline minimum as the operating state. The system has reorganised around that level. It is not shutting down — it is running. This is just where it runs. The biology is still generating activation — signals are still firing — but the channels for accessing, expressing, and using that activation are at minimum or offline.
              </p>
              <p style={proseStyle}>
                This is distinct from <strong style={{ color: TEXT.primary }}>Acute Freeze</strong> — a temporary shutdown in response to overwhelm, where all three capacities go offline to survive. Acute Freeze is a state the system enters and can exit. Chronic Flatness is not a state the system entered. It is where the system developed to.
              </p>

              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>State</th>
                      <th style={thStyle}>Duration</th>
                      <th style={thStyle}>Capacities</th>
                      <th style={thStyle}>Mechanism</th>
                      <th style={thStyle}>Can Reverse?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow cells={[
                      "Acute Freeze",
                      "Temporary",
                      "All offline — emergency shutdown",
                      "Overwhelm exceeds capacity",
                      "Yes — when safety returns",
                    ]} />
                    <TableRow cells={[
                      "Chronic Flatness",
                      "Persistent",
                      "All at minimum — operating state",
                      "Cycles never ran; capacities never developed",
                      "Yes — but requires building, not unblocking",
                    ]} />
                  </tbody>
                </table>
              </div>

              <p style={proseStyle}>
                Flatness is not emotional absence. It is the accumulated effect of a system that learned the cycle was not safe to run. The capacities did not break. The conditions that would have developed them never existed — or existed and were withdrawn before the capacities could consolidate.
              </p>
              <p style={proseStyle}>
                The developmental mechanism: a child not regulated with → cycles stay open → no conditions for capacities to develop → the child cannot receive or regulate → the capacities flatten.
              </p>
              <p style={proseStyle}>
                Regulation signature in Chronic Flatness: external or none. The body is still generating activation. There is no internal pathway and no relational pathway. The only available channels are external vehicles — substances, withdrawal, fixated behaviours, compulsive patterns. This connects directly to{" "}
                <Link href="/model/m3-regulation-capacities" style={{ color: SPECTRUM.blue, textDecoration: "none", fontWeight: 500 }}>
                  M3's (Regulation Capacities)
                </Link>{" "}
                account of regulation substitutes: what the nervous system reaches for when the biological return pathway was never built.
              </p>
            </div>
          </section>

          {/* ─── THE CONSEQUENCE ──────────────────────────── */}
          <section
            id="the-consequence"
            aria-labelledby="heading-the-consequence"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-the-consequence" style={sectionHeadingStyle}>
              The Consequence — Stuck Compass and Constructed Identity
            </h2>

            {/* Concept 7: Threat Lock */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="threat-lock" style={conceptHeadingStyle}>
                Threat Lock → Chronic Mode → Stuck Compass
              </h3>

              <KeyStatement>
                This is not malfunction. It is accurate adaptation to an inaccurate environment. The system worked perfectly — it just learned the wrong lessons.
              </KeyStatement>

              <p style={proseStyle}>
                When the early environment cannot support Biological Restoration — because the caregivers themselves never learned it, because the threat is chronic, because the activation is never allowed to complete — three things happen in sequence:
              </p>
              <ol style={orderedListStyle}>
                <li style={listItemStyle}>
                  <strong style={{ color: TEXT.primary }}>Threat Lock</strong> — the threat response does not resolve. It persists. Repeated activation without resolution shifts the system's baseline toward chronic defensive activation.
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: TEXT.primary }}>Chronic Mode</strong> — because the lock persists, one mode becomes the default operating position regardless of context. The system no longer registers that other modes are safe to return to.
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: TEXT.primary }}>The Stuck Compass</strong> — the overall system state when the compass that should move fluidly is stuck. The person has lost access to the full gradient. Not because the compass is broken. Because Biological Restoration was never built.
                </li>
              </ol>
              <p style={proseStyle}>
                From the inside, the lock does not feel like a lock — it feels like <strong style={{ color: TEXT.primary }}>accurate perception</strong>. Protection reads as realism, Control as competence, Domination as strength — because the nervous system rarely experiences the <em>after</em> state where nuance returns. The lock is invisible from inside because the person has never experienced Biological Restoration and therefore does not know it exists.
              </p>

              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Van der Kolk (2014) — trauma creates chronic defensive states. Porges (2011) — neuroception shaped by experience; sympathetic and dorsal vagal dominance as sustained states. Schore (2003) — right hemisphere calibrates to early relational environment. Bowlby (1969) — internal working models. McEwen (2000) — allostatic load. LeDoux (1996) — fear conditioning. Levine (1997) — incomplete threat responses stored in the body.
                </p>
              </ExpandableSection>
            </div>

            {/* Concept 8: Cognition Arrives */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="cognition-arrives" style={conceptHeadingStyle}>
                Cognition Arrives — And Learns the Wrong Lesson
              </h3>

              <KeyStatement>
                Cognition doesn't begin by asking "who am I?" — it begins by asking "what works?"
              </KeyStatement>

              <p style={proseStyle}>
                Cognition comes online — language, memory, reasoning, narrative. A second information system emerges inside the first. But it does not emerge in a vacuum. It emerges inside a nervous system that has already been shaped, inside a specific awareness configuration that has already been set. Cognition can only work with the data it receives. And the data it receives depends on which awareness capacities are online:
              </p>
              <ul style={{ paddingLeft: 20, margin: "0 0 16px" }}>
                <li style={listItemStyle}>
                  <strong style={{ color: TEXT.primary }}>Reading Emotions (RE) online</strong> → cognition receives data about others' emotional states → builds social strategies
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: TEXT.primary }}>Emotional Resonance (ER) online</strong> → cognition receives felt experience of others' emotions → builds care and moral reasoning
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: TEXT.primary }}>Self-Emotional Awareness (SEA) online</strong> → cognition receives data about one's own emotional states → builds self-understanding
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: TEXT.primary }}>Self-Emotional Awareness (SEA) offline</strong> → cognition receives no data about one's own states → builds explanations that fill the gap
                </li>
              </ul>
              <p style={proseStyle}>
                The pivotal variable: with SEA, cognition generates <strong style={{ color: TEXT.primary }}>true coherence</strong> — narrative matches felt experience. Without SEA, cognition generates <strong style={{ color: TEXT.primary }}>false coherence</strong> — narrative fills the gap where self-awareness should be. "I'm not angry, I'm just being logical." "I don't have a problem, everyone else is too sensitive." In other words, cognition becomes a <strong style={{ color: TEXT.primary }}>regulation strategy</strong>: it stabilizes the system by generating explanations that reduce internal conflict when self-data is missing.
              </p>
              <p style={proseStyle}>
                Cognition does not just fill gaps passively. The adults in the environment use it to teach the child that the stuck position is the <em>correct</em> position. "Don't cry." "Be strong." "You're too sensitive." The child does not just fail to learn regulation. The child is actively taught that the absence of regulation is the right way to be.
              </p>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Identifying the specific mechanism by which cognition and awareness configuration interact: cognition doesn't "choose" identity — it builds identity from whatever data is available. SEA is the pivotal variable because it determines whether cognition has self-referential input. Without it, cognition constructs false coherence. This is the developmental origin of what F3 describes as false coherence.
                </p>
              </ExpandableSection>
            </div>

            {/* Concept 9: No Hidden Self */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="no-hidden-self" style={conceptHeadingStyle}>
                There Is No Hidden Self to Find
              </h3>

              <p style={proseStyle}>
                The traditional framing — a "true self" hidden behind a "false self" or "mask" — implies that there is a complete, authentic identity concealed beneath the adaptive one. The three-capacity model shows something different:
              </p>
              <p style={proseStyle}>
                People may have different temperaments — but what we call "who I am" is still heavily shaped by <strong style={{ color: TEXT.primary }}>which capacities were allowed to come online</strong> and whether the body learned the return.
              </p>
              <p style={proseStyle}>
                There is no hidden self waiting to be uncovered. There is a body that never stopped sending signals, an awareness configuration that determines what gets received, and a cognitive structure built around the gaps. Identity is not concealing anything — it is what cognition constructed given which capacities were available. "Find your real self" is the wrong instruction. There is no self to find. There is a capacity — SEA — that needs conditions to develop. When it comes online, the person does not discover a hidden identity. They begin receiving data they never had access to before.
              </p>
              <p style={proseStyle}>
                This is what people describe as "coming back to myself." They are not finding a hidden self. They are reconnecting capacities that were disconnected. The feeling is recognition — not discovery.
              </p>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Replacing the "hidden self / mask" framing with a mechanism: awareness configuration. The adaptive identity is the most intelligent thing cognition could build given what was available. Healing is not removing a mask. It is developing the capacities that never had conditions to form, and learning Biological Restoration.
                </p>
              </ExpandableSection>
            </div>

            {/* Concept 10: Configuration → Mode → Identity */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="config-mode-identity" style={conceptHeadingStyle}>
                Configuration → Chronic Mode → Identity
              </h3>

              <p style={proseStyle}>
                These are <strong style={{ color: TEXT.primary }}>configurations</strong>, not personality boxes — they can shift as capacities develop and restoration returns. The awareness configuration a person carries determines the chronic mode, the regulatory strategy, and the identity that cognition builds:
              </p>

              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Configuration</th>
                      <th style={thStyle}>Chronic Mode</th>
                      <th style={thStyle}>Identity Narrative</th>
                      <th style={thStyle}>Regulation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow cells={[
                      "Hyperactive Reading Emotions (RE) + Flooded Emotional Resonance (ER) + Absent Self-Emotional Awareness (SEA)",
                      "Chronic Connection*",
                      "\"I am the caring one\"",
                      "Regulate toward what the other needs",
                    ]} />
                    <TableRow cells={[
                      "Hyperactive RE + Shut-down ER + Absent SEA",
                      "Chronic Protection",
                      "\"I am the realistic one\"",
                      "Biological Restoration never completed",
                    ]} />
                    <TableRow cells={[
                      "Instrumental RE + Absent ER + Absent SEA",
                      "Chronic Control",
                      "\"I am the capable one\"",
                      "Cognition replaced Biological Restoration",
                    ]} />
                    <TableRow cells={[
                      "Weaponized RE + Absent ER + Absent SEA",
                      "Chronic Domination",
                      "\"I am the strong one\"",
                      "Power substitutes for the return path",
                    ]} />
                  </tbody>
                </table>
              </div>

              <p style={{ ...proseStyle, fontSize: 12, color: TEXT.muted, fontStyle: "italic" }}>
                *This is not Connection Mode as health — it is connection as <strong style={{ color: TEXT.muted }}>survival strategy</strong>: attachment maintained through self-erasure.
              </p>

              <p style={proseStyle}>
                The four configurations are not personality categories. They are the predictable outcomes of which awareness capacities had conditions to develop, which didn't, and what happened to Biological Restoration under each set of conditions. <strong style={{ color: TEXT.primary }}>Personality is not a type — it is a record.</strong>
              </p>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The mapping from awareness configuration to chronic mode to identity narration as a single causal chain: childhood conditions → awareness configuration + regulation capacity → chronic mode → cognitive identity → personality. This makes personality traceable — not a type, but a record. The contrast with F1 is now fully visible: the same four modes, one set time-limited and returnable (the design), one set chronic and stuck (the deviation). Same architecture. Different awareness conditions. Different outcome.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── THE REPLICATION ──────────────────────────── */}
          <section
            id="the-replication"
            aria-labelledby="heading-the-replication"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-how-patterns-transmit" style={sectionHeadingStyle}>
              How do emotional patterns transmit across generations?
            </h2>

            <h2 id="heading-the-replication" style={sectionHeadingStyle}>
              The Replication — Generational Transmission
            </h2>

            {/* Concept 11: Generational Replication */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="generational-replication" style={conceptHeadingStyle}>
                Awareness Teaches Awareness Across Generations
              </h3>

              <KeyStatement>
                Love does not override what the nervous system embodies. A parent can love their child completely and still transmit a capacity configuration that damages them.
              </KeyStatement>

              <p style={proseStyle}>
                Patterns replicate across generations without anyone choosing to pass them on. The transmission mechanism is awareness configuration and regulatory capacity. Not words. Not intentions. Not love. The transferable unit is not the parent's beliefs. It is the parent's <strong style={{ color: TEXT.primary }}>state signature</strong> and <strong style={{ color: TEXT.primary }}>repair signature</strong>.
              </p>
              <p style={proseStyle}>
                The parent in chronic Control who pushes their child to "toughen up" is not failing at love. They are succeeding at transmission. They are passing on the only regulatory architecture they know. A caregiver whose Self-Emotional Awareness (SEA) is offline cannot mirror what they cannot see, validate what they cannot feel, or model self-awareness they do not have. A caregiver whose own nervous system never learned Biological Restoration cannot co-regulate a child through it — because they do not know it exists.
              </p>
              <p style={proseStyle}>
                This is the generational loop: the adults in the three conditions were once children of adults with the same configurations. The caregiver whose ER floods unpredictably was once a child in an unpredictable environment. The caregiver who says "I'm fine" while radiating tension was once a child whose felt sense was contradicted. No one in the chain chose to start it. Each link is an accurate adaptation passed forward.
              </p>

              <div style={expandableRowStyle}>
                <ExpandableSection title="Research Traditions" type="framework">
                  <p style={expandedProseStyle}>
                    Schore (2003) — right hemisphere calibrates to early relational environment. Bowlby (1969) — internal working models. Bandura (1977) — social learning / modelling. Hazan & Shaver (1987) — familiar patterns feel safe even when harmful. Van der Kolk (2014) — intergenerational transmission of trauma. Main & Hesse (1990) — unresolved attachment in parents predicts disorganized attachment in children.
                  </p>
                </ExpandableSection>

                <ExpandableSection title="What TEG-Blue Adds" type="framework">
                  <p style={expandedProseStyle}>
                    The full generational replication mechanism made explicit through the awareness-teaches-awareness lens: adult awareness configuration → environment → child awareness configuration → adult awareness configuration → next generation. The chain is traceable. The transmission channel is identified: not behavior, not words, not intentions — the caregiver's nervous system and the awareness it carries.
                  </p>
                </ExpandableSection>
              </div>
            </div>

            {/* Concept 12: Tolerance Thresholds */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="tolerance-thresholds" style={conceptHeadingStyle}>
                Tolerance Thresholds
              </h3>

              <KeyStatement>
                Familiar can feel "normal" even when it is costly.
              </KeyStatement>

              <p style={proseStyle}>
                Early environments set tolerance thresholds — the point at which the nervous system shifts from one regulatory mode to the next. A tolerance threshold is not a value. It is a <strong style={{ color: TEXT.primary }}>nervous system setting</strong> — what the body has learned it must endure to stay connected. A child's nervous system learns what intensity, instability, or control must be endured to stay connected. This becomes an internal baseline for what counts as "too much," what feels familiar enough to stay, what gets minimized or normalized, and what feels dangerous to challenge.
              </p>
              <p style={proseStyle}>
                The awareness configuration plays a direct role: a person with flooded Emotional Resonance (ER) and absent Self-Emotional Awareness (SEA) will <em>feel</em> the harm being done to them (through resonance) but cannot identify it as harm being done <em>to</em> them (without self-awareness). The signal arrives but cannot be read as one's own. People don't lack intelligence or willpower. Their nervous system was calibrated early to survive within certain environments.
              </p>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Naming tolerance thresholds as a specific mechanism and connecting them to awareness configuration: the reason people stay in harmful dynamics is not that they can't see the pattern — it's that their awareness configuration (particularly absent SEA) prevents the signal from being read as their own pain. Flooded ER + absent SEA = feel the harm but can't locate it.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── HEALING ──────────────────────────────────── */}
          <section
            id="healing"
            aria-labelledby="heading-healing"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-healing" style={sectionHeadingStyle}>
              Healing — Reconnecting, Not Removing
            </h2>

            <div style={{ marginBottom: 32 }}>
              <h3 id="healing-mechanism" style={conceptHeadingStyle}>
                The Dual Mechanism of Healing
              </h3>

              <KeyStatement>
                Not fixing something broken, but developing capacities that didn't have conditions to form — and learning Biological Restoration — the return path that was never taught.
              </KeyStatement>

              <p style={proseStyle}>
                Healing is not finding your "real self" — there is no complete self hidden underneath. Healing is not removing a mask — the identity that formed is not covering anything. Healing is not building self-esteem — without Self-Emotional Awareness (SEA), self-esteem has no grounding and fluctuates with external feedback.
              </p>
              <p style={proseStyle}>
                Healing is <strong style={{ color: TEXT.primary }}>developing the awareness capacities that never had conditions to form</strong> — and <strong style={{ color: TEXT.primary }}>learning Biological Restoration — the return path that was never taught.</strong>
              </p>
              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>Self-Emotional Awareness (SEA) is the keystone.</strong> Healing requires two tracks in parallel: <strong style={{ color: TEXT.primary }}>SEA (receiving self-data)</strong> and <strong style={{ color: TEXT.primary }}>Biological Restoration (the body learning the return)</strong>. Without SEA, Reading Emotions (RE) serves the mode (scanning for threat, leverage, or approval rather than understanding) and Emotional Resonance (ER) is either flooded or absent. With SEA online, the other two capacities can be recalibrated to serve the person rather than the survival strategy.
              </p>
              <p style={proseStyle}>
                And regulation — the physiological return — is the foundation. Without the body learning that activation can resolve, that threat states end, that the system can come back, cognitive insight alone changes nothing. The person understands their pattern but the body keeps running the old program. Biological Restoration must be learned — not understood, but experienced. Through co-regulation, through somatic experience, through relationships that provide the safety the original environment could not.
              </p>
              <p style={proseStyle}>
                Neither alone is sufficient. SEA without Biological Restoration means the person can finally feel what they feel but the body doesn't know how to complete the cycle. Biological Restoration without SEA means the body can complete the cycle but the person doesn't know what activated it. Both must develop together — and both develop through the same medium: relationships that provide what the original environment could not.
              </p>
              <p style={proseStyle}>
                The destination is not perfection. It is the capacity state the system was designed to produce: three awareness capacities online and serving understanding. Regulation learned. True coherence. A moving compass. Not a different person — the same person with the full information set.
              </p>

              <div style={expandableRowStyle}>
                <ExpandableSection title="Research Traditions" type="framework">
                  <p style={expandedProseStyle}>
                    Van der Kolk (2014) — understanding alone doesn't change somatic patterns. Levine (1997) — Somatic Experiencing, change requires bodily experience. Winnicott (1960) — conditions for authentic experience. Siegel (2012) — integration as mechanism of health. Porges (2011) — co-regulation as pathway to self-regulation at any age.
                  </p>
                </ExpandableSection>

                <ExpandableSection title="What TEG-Blue Adds" type="framework">
                  <p style={expandedProseStyle}>
                    Replacing "find yourself" / "remove the mask" / "build self-esteem" with a mechanistically precise instruction: develop SEA so the signals can be received, learn Biological Restoration so the body can come back, then recalibrate RE and ER to serve understanding rather than survival. The dual mechanism of healing: awareness development (SEA) + Biological Restoration learning. Neither alone is sufficient. The destination is the designed capacity state described earlier in the framework.
                  </p>
                </ExpandableSection>
              </div>
            </div>
          </section>

          {/* ─── WHAT F2 ESTABLISHES ──────────────────────── */}
          <section
            id="what-f2-establishes"
            aria-labelledby="heading-what-f2-establishes"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-what-f2-establishes" style={sectionHeadingStyle}>
              What F2 Establishes
            </h2>

            <p style={proseStyle}>
              F2 is the calibration framework — showing how the three awareness capacities develop when conditions are met, and what happens when the awareness that gets passed is incomplete. The organizing principle is: awareness teaches awareness.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 24 }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Concept</th>
                    <th style={thStyle}>What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Three capacities connected at birth", "Reading Emotions (RE), Emotional Resonance (ER), and Self-Emotional Awareness (SEA) start integrated. \"Being yourself\" is a capacity state, not a hidden identity."]} />
                  <TableRow cells={["The pre-SEA condition", "Feeling = being. The normal starting point. The question is whether SEA develops."]} />
                  <TableRow cells={["Awareness teaches awareness", "The organizing mechanism. The adults' awareness configuration creates the environment. The environment shapes the child's awareness."]} />
                  <TableRow cells={["How the capacities develop", "When awareness that gets passed is complete: accurate Reading Emotions (RE), sustainable Emotional Resonance (ER), online Self-Emotional Awareness (SEA), learned regulation, true coherence."]} />
                  <TableRow cells={["The capacity to regulate", "Children learn Biological Restoration through co-regulation — being regulated with. The caregiver's capacity to regulate is the child's regulatory environment."]} />
                  <TableRow cells={["Three conditions", "Each produced by adults with a specific awareness configuration. Unpredictability, incongruence, and invalidation each produce a traceable configuration in the child."]} />
                  <TableRow cells={["Threat lock → chronic mode → stuck compass", "Mechanism → consequence → system state. The same modes F1 describes as extraordinary tools become traps when Biological Restoration is missing."]} />
                  <TableRow cells={["Cognition arrives — and learns the wrong lesson", "Identity is what cognition builds with whatever data is available. Without SEA → false coherence."]} />
                  <TableRow cells={["No hidden self to find", "The adaptive identity isn't concealing anything. It's what cognition built given an incomplete awareness set."]} />
                  <TableRow cells={["Configuration → mode → identity", "Awareness configuration + regulation capacity predicts chronic mode. Chronic mode shapes the identity cognition narrates. Personality is a record."]} />
                  <TableRow cells={["Generational replication", "Awareness teaches awareness across generations. Children calibrate to what caregivers embody. The chain transmits through awareness, not words."]} />
                  <TableRow cells={["Tolerance thresholds", "The nervous system learns what to endure. Flooded ER + absent SEA = feel the harm but can't locate it."]} />
                  <TableRow cells={["Healing is reconnecting", "Develop SEA. Learn Biological Restoration. The destination is the capacity state the system was designed to produce."]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>Key Formulations</h3>
            <div
              style={{
                padding: "16px 20px",
                background: hexToRgba(SPECTRUM.cobalt, 0.06),
                borderRadius: 8,
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
                marginBottom: 16,
              }}
            >
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                {[
                  "Awareness teaches awareness — the adults' awareness configuration is the child's developmental environment",
                  "The child doesn't learn to regulate through instruction — the child learns to regulate through being regulated with",
                  "Personality is not a type — it is a record of which capacities had conditions to develop and which didn't",
                  "Cognition doesn't begin by asking 'who am I?' — it begins by asking 'what works?'",
                  "The goal is not to eliminate Control or Domination — the goal is to restore the capacity for Biological Restoration",
                  "The child does not just fail to learn regulation — the child is taught that the absence of regulation is the right way to be",
                  "The culture doesn't produce the condition — the condition produces the culture — and the culture reproduces the condition",
                  "Love does not override what the nervous system embodies",
                  "The chain replicates until awareness changes, not just behavior",
                  "Familiar can feel 'normal' even when it is costly",
                  "Not fixing something broken, but developing capacities that didn't have conditions to form",
                  "A caregiver whose Self-Emotional Awareness (SEA) is offline cannot provide conditions for a child's SEA to develop",
                  "Being yourself is not a personality. It is what happens when the three capacities are connected.",
                  "Accurate adaptation to an inaccurate environment",
                ].map((f, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 13,
                      color: TEXT.secondary,
                      lineHeight: 1.7,
                      marginBottom: 6,
                      fontStyle: "italic",
                    }}
                  >
                    "{f}"
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ─── RESEARCH FOUNDATIONS ─────────────────────── */}
          <section
            id="research-foundations"
            aria-labelledby="heading-research-foundations"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-research-foundations" style={sectionHeadingStyle}>
              Research Foundations
            </h2>

            <p style={{ ...proseStyle, marginBottom: 16 }}>
              F2 integrates established research from the following traditions. The individual theories are well-documented. The integration — and the connections between them — is TEG-Blue's contribution, open to testing.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Tradition</th>
                    <th style={thStyle}>Key Contribution</th>
                    <th style={thStyle}>Researchers</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Attachment Theory", "Early relationships shape regulatory defaults and conditions for awareness development", "Bowlby, 1969; Ainsworth, 1978; Main & Hesse, 1990"]} />
                  <TableRow cells={["Object Relations", "Authentic experience vs. compliant adaptation", "Winnicott, 1960"]} />
                  <TableRow cells={["Developmental Neuroscience", "Right-brain development shapes self and regulatory capacity through early relational experience", "Schore, 2003"]} />
                  <TableRow cells={["Interpersonal Neurobiology", "Mind develops through relationships; integration is health; co-regulation as developmental pathway", "Siegel, 2012"]} />
                  <TableRow cells={["Narrative Psychology", "Coherent narrative as marker of earned security; requires SEA", "Main & Goldwyn, 1998"]} />
                  <TableRow cells={["Schema Therapy", "Early maladaptive schemas as stable childhood patterns", "Young, Klosko, & Weishaar, 2003"]} />
                  <TableRow cells={["Polyvagal Theory", "Neuroception shapes what is safe enough for authentic engagement; co-regulation as foundation for self-regulation", "Porges, 2011"]} />
                  <TableRow cells={["Somatic Experiencing", "Biological Restoration requires bodily experience; the body must complete the cycle", "Levine, 1997"]} />
                </tbody>
              </table>
            </div>
          </section>

          {/* ─── BRIDGE TO F3 ─────────────────────────────── */}
          <section
            id="bridge-to-f3"
            aria-labelledby="heading-bridge-to-f3"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-bridge-to-f3" style={sectionHeadingStyle}>
              Bridge to F3: What Maintains the Calibration
            </h2>

            <p style={proseStyle}>
              F2 explains how the compass gets calibrated — how the awareness capacities that develop (or don't) determine where the needle settles and whether it can move. The calibration happens in childhood, through the awareness the adults carry.
            </p>
            <p style={proseStyle}>
              But childhood ends. The calibration persists.
            </p>
            <p style={proseStyle}>
              F3 explains how. When cognition was recruited into the threat response during childhood and never released, it does not just passively carry the calibration forward. It actively maintains it — replacing emotional signals with invented narratives, experiencing the replacement as truth, and hardening the replacement into identity through a self-reinforcing loop.
            </p>
            <p style={proseStyle}>
              False coherence — the stable-but-untrue narrative that cognition builds around the awareness gaps — is not just the product of incomplete awareness. It is itself a regulation strategy: cognition regulating what the body was never taught to regulate. The person feels regulated. They are regulated. The cost is truth, not function.
            </p>

            <KeyStatement>
              F2 explains how the calibration was set. F3 explains why it holds — and why it is so hard to change.
            </KeyStatement>

            <p style={proseStyle}>
              <Link href="/framework/f3-false-coherence" style={{ color: SPECTRUM.blue, textDecoration: "none", fontWeight: 500 }}>
                Read the full F3 framework: Adult Cognition & False Coherence →
              </Link>
            </p>
          </section>

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="f2-awareness-calibration" type="framework" />

          {/* ─── WHERE TO GO NEXT ────────────────────────── */}
          <section
            id="where-to-go-next"
            aria-labelledby="heading-where-to-go-next"
            style={{ marginBottom: 32 }}
          >
            <h2 id="heading-where-to-go-next" style={sectionHeadingStyle}>
              Where to Go Next
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
                    <th style={navThStyle}>If you want to…</th>
                    <th style={navThStyle}>Go here</th>
                  </tr>
                </thead>
                <tbody>
                  <NavRow label="Read the foundational framework (F1)" href="/framework/f1-emotional-gradient" linkText="Emotions as Biological Information →" />
                  <NavRow label="Read the cognitive maintenance framework (F3)" href="/framework/f3-false-coherence" linkText="Adult Cognition & False Coherence →" />
                  <NavRow label="See the applied model for this framework" href="/model/m2-three-awareness-capacities" linkText="Three Awareness Capacities (M2) →" />
                  <NavRow label="See the physiological model — what the body does when the return is never learned" href="/model/m3-regulation-capacities" linkText="Regulation Capacities (M3) →" />
                  <NavRow label="Explore all 12 frameworks" href="/frameworks-map" linkText="12 Frameworks →" />
                  <NavRow label="Review the source theories" href="/scientific-foundations" linkText="Scientific Foundations →" />
                  <NavRow label="Understand the epistemological stance" href="/epistemological-foundations" linkText="Epistemological Foundations →" />
                  <NavRow label="See the full system architecture" href="/foundations" linkText="System Overview →" />
                  <NavRow label="Look up key terms" href="/glossary" linkText="Glossary →" />
                  <NavRow label="See published research" href="/publications" linkText="Publications →" />
                  <NavRow label="Experience the tools" href="https://teg-blue.com/emotional-tools" linkText="Emotional Tools (teg-blue.com) →" external />
                </tbody>
              </table>
            </div>
          </section>
        </article>

      </PageLayout>

      <SiteFooter />

      {/* ─── JSON-LD: ScholarlyArticle ──────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": "https://teg-blue.org/framework/f2-awareness-calibration#article",
            headline: "Awareness Teaches Awareness: How the Three Capacities Calibrate the Compass",
            description:
              "How the three awareness capacities develop through the relational environment, and what happens when the awareness passed is incomplete. Framework F2 of the TEG-Blue 12-framework system.",
            author: {
              "@type": "Person",
              name: "Anna Paretas-Artacho",
              url: "https://teg-blue.org/about",
            },
            publisher: {
              "@type": "Organization",
              name: "TEG-Blue Research Consortium",
              url: "https://teg-blue.org",
            },
            datePublished: "2026-03-04",
            dateModified: "2026-03-19",
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue 12 Framework System",
              url: "https://teg-blue.org/frameworks-map",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://teg-blue.org/framework/f2-awareness-calibration",
            },
            about: [
              { "@type": "Thing", name: "Awareness Calibration" },
              { "@type": "Thing", name: "Developmental Psychology" },
              { "@type": "Thing", name: "Attachment Theory" },
              { "@type": "Thing", name: "Co-Regulation" },
              { "@type": "Thing", name: "Identity Formation" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Attachment and Loss (Bowlby, 1969)" },
              { "@type": "ScholarlyArticle", name: "Affect Regulation and the Origin of the Self (Schore, 2003)" },
              { "@type": "ScholarlyArticle", name: "The Developing Mind (Siegel, 2012)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
              { "@type": "ScholarlyArticle", name: "Waking the Tiger (Levine, 1997)" },
              { "@type": "ScholarlyArticle", name: "The Maturational Processes (Winnicott, 1960)" },
              { "@type": "ScholarlyArticle", name: "Schema Therapy (Young, Klosko, & Weishaar, 2003)" },
            ],
            keywords: [
              "awareness teaches awareness",
              "three awareness capacities",
              "awareness calibration",
              "developmental psychology",
              "co-regulation",
              "biological restoration",
              "identity formation",
              "generational transmission",
            ],
          }),
        }}
      />

      {/* ─── JSON-LD: BreadcrumbList ────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "12 Frameworks", url: "/frameworks-map" },
              { name: "F2: Awareness Calibration", url: "/framework/f2-awareness-calibration" },
            ])
          ),
        }}
      />

      {/* ─── JSON-LD: FAQPage ───────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFAQJsonLd([
              {
                question: "What are the three awareness capacities in the TEG-Blue system?",
                answer:
                  "Reading Emotions (RE) is the capacity to track others' emotional states. Emotional Resonance (ER) is the capacity to feel with others. Self-Emotional Awareness (SEA) is the capacity to know one's own emotional states. All three are present at birth in proto-form and develop through relational conditions.",
              },
              {
                question: "What does 'awareness teaches awareness' mean?",
                answer:
                  "The awareness capacities that caregivers carry are the awareness capacities that get passed to the child. Children calibrate to what adults embody, not what they say. The adults' capacity configuration — their Reading Emotions (RE), Emotional Resonance (ER), and Self-Emotional Awareness (SEA) — creates the environment the child's awareness develops from.",
              },
              {
                question: "How does generational transmission of emotional patterns work?",
                answer:
                  "Patterns replicate across generations through awareness configuration and regulatory capacity, not through words or intentions. A caregiver whose SEA is offline cannot provide conditions for a child's SEA to develop. The chain transmits through what the nervous system embodies and replicates until awareness changes.",
              },
              {
                question: "What is the relationship between awareness and identity?",
                answer:
                  "Identity is a cognitive structure built around whichever awareness capacities had conditions to develop. Cognition builds identity from whatever data is available. With SEA online, cognition generates true coherence. Without SEA, cognition generates false coherence — narrative that fills the gap where self-awareness should be.",
              },
              {
                question: "How does healing work in the F2 framework?",
                answer:
                  "Healing is not finding a hidden self or removing a mask. It is developing the awareness capacities — particularly SEA — that never had conditions to form, and learning Biological Restoration. Both must develop together through relationships that provide the safety the original environment could not.",
              },
            ])
          ),
        }}
      />
      {/* ─── JSON-LD: Speakable ──────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "Awareness Teaches Awareness (F2) — TEG-Blue Research",
              url: "https://teg-blue.org/framework/f2-awareness-calibration",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

// ─── STYLE CONSTANTS ──────────────────────────────────────

const sectionHeadingStyle = {
  fontSize: 20,
  fontWeight: 700,
  color: RESEARCHER.accent,
  marginBottom: 20,
  paddingBottom: 8,
  borderBottom: `2px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
};

const conceptHeadingStyle = {
  fontSize: 16,
  fontWeight: 600,
  color: TEXT.primary,
  marginBottom: 12,
};

const proseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  marginBottom: 12,
  maxWidth: 720,
};

const expandedProseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  margin: "8px 0 0",
};

const propositionItemStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  marginBottom: 8,
};

const expandableRowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: 6,
  marginTop: 4,
};

const orderedListStyle = {
  paddingLeft: 20,
  margin: "0 0 16px",
};

const listItemStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  marginBottom: 8,
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  background: BG.card,
  borderRadius: 8,
  overflow: "hidden",
  border: `1px solid ${BORDER.default}`,
  fontSize: 13,
};

const thStyle = {
  padding: "10px 14px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 600,
  color: TEXT.muted,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontFamily: FONT.mono,
  background: BG.surface,
  borderBottom: `1px solid ${BORDER.default}`,
};

const navThStyle = {
  padding: "12px 16px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 600,
  color: TEXT.muted,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontFamily: FONT.mono,
};

// ─── HELPER COMPONENTS ────────────────────────────────────

function KeyStatement({ children }) {
  return (
    <blockquote
      style={{
        padding: "16px 20px",
        margin: "0 0 16px",
        background: hexToRgba(SPECTRUM.cobalt, 0.06),
        borderRadius: 8,
        borderLeft: `4px solid ${SPECTRUM.cobalt}`,
        fontSize: 15,
        fontWeight: 500,
        color: TEXT.primary,
        lineHeight: 1.6,
        fontStyle: "italic",
      }}
    >
      {children}
    </blockquote>
  );
}

function TableRow({ cells }) {
  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      {cells.map((cell, i) => (
        <td
          key={i}
          style={{
            padding: "10px 14px",
            fontSize: 13,
            color: i === 0 ? TEXT.primary : TEXT.secondary,
            fontWeight: i === 0 ? 600 : 400,
            lineHeight: 1.6,
            verticalAlign: "top",
          }}
        >
          {cell}
        </td>
      ))}
    </tr>
  );
}

function NavRow({ label, href, linkText, external }) {
  const linkStyle = {
    color: SPECTRUM.blue,
    textDecoration: "none",
    fontWeight: 500,
  };

  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ padding: "12px 16px", fontSize: 14, color: TEXT.secondary }}>
        {label}
      </td>
      <td style={{ padding: "12px 16px", fontSize: 14 }}>
        {external ? (
          <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
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
