import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba, RESEARCHER, PATTERN_GRADIENT, RADIUS, gradientCardBg,
  AWARENESS, MODE_PINK,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, ModelAnchorStrip,
  ModelPurpose, OperationalStatement, DrawsFromPanel,
  ExpandableSection, PageLayout,
} from "@/src/components";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import EmpathicIntegrationExplorer from "@/src/components/EmpathicIntegrationExplorer";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

// ─── CAPACITY COLORS (from tokens — cross-site canonical) ───
const RE_COLOR = AWARENESS.RE;
const ER_COLOR = AWARENESS.ER;
const SEA_COLOR = AWARENESS.SEA;
const RE_CHRONIC = MODE_PINK;  // pink — domination / precision without feedback

const MODEL_COLOR = SPECTRUM.cobalt;

const ANCHOR_SECTIONS = [
  { label: "Three Capacities", href: "#capacities-online-offline" },
  { label: "How They Develop", href: "#awareness-teaches-awareness" },
  { label: "Configurations", href: "#capacity-configuration" },
  { label: "SEA as Keystone", href: "#sea-self-emotional-awareness" },
  { label: "Draws From", href: "#relationship-to-frameworks" },
];

const DRAWS_FROM = [
  { id: "F2", title: "Awareness Calibration", relation: "Primary source", description: "How awareness capacities develop — or fail to develop — in the relational environment.", href: "/framework/f2-awareness-calibration" },
  { id: "F3", title: "False Coherence", relation: "Maintains stuckness", description: "How cognition constructs identity around missing capacities, making the absence invisible.", href: "/framework/f3-false-coherence" },
  { id: "F8", title: "Repairing Awareness", relation: "Repair pathway", description: "How awareness capacities that didn't develop can be rebuilt in adult relational contexts.", href: "/framework/f8-repairing-awareness" },
  { id: "F10", title: "Generational Bridges", relation: "Transmission", description: "How capacity configurations replicate across generations through the relational environment.", href: "/framework/f10-generational-bridges" },
  { id: "M1", title: "Nervous System Signaling", relation: "Paired model", description: "The instrument these capacities calibrate. M1 maps what the compass does; M2 maps what determines how well it works.", href: "/model/m1-inner-compass" },
  { id: "M3", title: "Regulation Capacities", relation: "Paired model", description: "The physiological cascade underneath. What happens in the body when awareness capacities can't process the signal.", href: "/model/m3-regulation-capacities" },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Three Awareness Capacities (M2) | TEG-Blue Research",
  description:
    "The three specific awarenesses — Reading Emotions, Emotional Resonance, and Self-Emotional Awareness — that determine what data the compass receives, how it is processed, and whether the person has access to their own internal state. Model M2 of the TEG-Blue system.",
  keywords: [
    "three awareness capacities",
    "reading emotions",
    "emotional resonance",
    "self-emotional awareness",
    "awareness calibration",
    "capacity configuration",
    "pre-SEA condition",
    "co-regulation",
    "tolerance thresholds",
    "generational replication",
    "emotional technology",
    "awareness repair",
  ],
  alternates: {
    canonical: "https://teg-blue.org/model/m2-three-awareness-capacities",
  },
  openGraph: {
    title: "Three Awareness Capacities — M2 Model | TEG-Blue",
    description:
      "The calibration system: how RE, ER, and SEA determine what data the compass receives, how configurations predict chronic mode and identity, and how repair develops what was missing. Model M2 of the TEG-Blue system.",
    url: "https://teg-blue.org/model/m2-three-awareness-capacities",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Three Awareness Capacities — TEG-Blue M2",
    description:
      "The calibration system: RE, ER, and SEA. How capacity configurations predict chronic mode, identity, and relational patterns.",
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function M2ThreeAwarenessCapacitiesPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/model/m2-three-awareness-capacities" />

      <PageLayout
        header={
          <>
            <ModelHero
              badge="MODEL M2"
              title="Three Awareness Capacities"
              subtitle="The Calibration System"
              description="The three specific awarenesses — Reading Emotions (RE), Emotional Resonance (ER), and Self-Emotional Awareness (SEA) — that determine what data the compass receives, how that data is processed, and whether the person has access to their own internal state. How capacity configurations predict chronic mode, identity, and relational patterns — and how repair develops what was missing."
              coreQuestion="What is the current configuration — which capacities had conditions to develop, and which didn't?"
              drawsFrom={[
                { label: "F2", href: "/framework/f2-awareness-calibration" },
                { label: "F3", href: "/framework/f3-false-coherence" },
                { label: "F8", href: "/framework/f8-repairing-awareness" },
                { label: "F10", href: "/framework/f10-generational-bridges" },
              ]}
              color={MODEL_COLOR}
            />
            <ModelAnchorStrip sections={ANCHOR_SECTIONS} color={MODEL_COLOR} />
          </>
        }
      >
        {/* ─── EMPATHIC INTEGRATION EXPLORER ──────────── */}
        <EmpathicIntegrationExplorer />

        {/* ─── DEGRADATION BAR CHART ──────────────────── */}
        <div style={{ margin: "32px 0 0" }}>
          {/* Legend with colored capacity labels */}
          <div
            style={{
              padding: "16px 20px",
              background: hexToRgba(MODEL_COLOR, 0.06),
              borderRadius: "10px 10px 0 0",
              border: `1px solid ${hexToRgba(MODEL_COLOR, 0.15)}`,
              borderBottom: "none",
            }}
          >
            <h2
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: MODEL_COLOR,
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
                <strong style={{ color: RE_COLOR }}>RE — Reading Emotions</strong>{" "}
                <span style={{ color: TEXT.muted }}>|</span>{" "}
                Perceiving what others are feeling — detecting emotional signals from faces, tone, body language, and context.
              </p>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: ER_COLOR }}>ER — Emotional Resonance</strong>{" "}
                <span style={{ color: TEXT.muted }}>|</span>{" "}
                Feeling what others are feeling — the body's capacity to resonate with another person's emotional state.
              </p>
              <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: SEA_COLOR }}>SEA — Self-Emotional Awareness</strong>{" "}
                <span style={{ color: TEXT.muted }}>|</span>{" "}
                Perceiving and naming your own internal state — the capacity that separates "I feel bad" from "I feel guilty because I hurt someone."
              </p>
            </div>
          </div>

          {/* Degradation chart */}
          <div
            style={{
              overflowX: "auto",
              border: `1px solid ${hexToRgba(MODEL_COLOR, 0.15)}`,
              borderRadius: "0 0 10px 10px",
            }}
          >
            <div style={{ minWidth: 600 }}>
              {/* Column headers */}
              <div style={{ display: "grid", gridTemplateColumns: "140px repeat(5, 1fr)" }}>
                <div style={chartHeaderStyle}>Capacity</div>
                {GRADIENT_COLUMNS.map((col) => (
                  <div key={col} style={chartHeaderStyle}>{col}</div>
                ))}
              </div>
              {/* Data rows */}
              {DEGRADATION_DATA.map((row) => (
                <div
                  key={row.capacity}
                  style={{ display: "grid", gridTemplateColumns: "140px repeat(5, 1fr)" }}
                >
                  <div
                    style={{
                      padding: 12,
                      borderBottom: `1px solid ${BORDER.default}`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        fontFamily: FONT.mono,
                        color: row.color,
                      }}
                    >
                      {row.capacity}
                    </span>
                    <span style={{ fontSize: 11, color: TEXT.muted }}>{row.fullName}</span>
                  </div>
                  {row.levels.map((level, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "10px 8px",
                        borderBottom: `1px solid ${BORDER.default}`,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          color: level.pct > 0 ? TEXT.secondary : TEXT.muted,
                          marginBottom: 6,
                        }}
                      >
                        {level.label}
                      </div>
                      <div
                        style={{
                          height: 3,
                          borderRadius: 2,
                          background: hexToRgba(level.color, 0.12),
                        }}
                      >
                        {level.pct > 0 && (
                          <div
                            style={{
                              height: "100%",
                              borderRadius: 2,
                              width: `${level.pct}%`,
                              background: level.color,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── PRECISION WITHOUT FEEDBACK ──────────────── */}
        <div
          style={{
            margin: "20px 0 0",
            padding: "20px 24px",
            background: "linear-gradient(135deg, rgba(249,115,22,0.06), rgba(236,72,153,0.06))",
            border: "1px solid rgba(236,72,153,0.2)",
            borderRadius: 10,
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: FONT.mono,
              color: RE_CHRONIC,
              marginBottom: 12,
            }}
          >
            Precision without feedback
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            <span
              style={{
                fontSize: 11,
                fontFamily: FONT.mono,
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: RADIUS.sm,
                color: RE_COLOR,
                background: hexToRgba(RE_COLOR, 0.15),
              }}
            >
              RE Sharp
            </span>
            <span
              style={{
                fontSize: 11,
                fontFamily: FONT.mono,
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: RADIUS.sm,
                color: TEXT.muted,
                background: "rgba(136, 136, 136, 0.1)",
              }}
            >
              ER Absent
            </span>
            <span
              style={{
                fontSize: 11,
                fontFamily: FONT.mono,
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: RADIUS.sm,
                color: TEXT.muted,
                background: "rgba(136, 136, 136, 0.1)",
              }}
            >
              SEA Absent
            </span>
          </div>
          <p
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: TEXT.primary,
              lineHeight: 1.4,
              marginBottom: 10,
            }}
          >
            Sees everything. Feels nothing. Cannot see what drives them.
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 680,
            }}
          >
            RE stays sharp across the entire gradient — it is the last capacity to degrade. When ER and SEA go offline but RE remains, the person reads every emotional signal with precision — but has no felt resonance and no self-access. This is the configuration that enables strategic use of emotional reading without internal feedback — the reading is accurate but the resonance and self-awareness that would generate guilt, empathy, or self-reflection are absent.
          </p>
        </div>

        <article>
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
            <ModelPurpose color={MODEL_COLOR}>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={propositionItemStyle}>
                  The compass (M1) is the instrument. The three awareness capacities are the calibration system — they determine what data the compass receives, what it can process, and whether the person has access to their own internal state.
                </li>
                <li style={propositionItemStyle}>
                  All three capacities are present at birth in proto-form and develop through relational conditions — not instruction, not intention, not cognitive understanding.
                </li>
                <li style={propositionItemStyle}>
                  Awareness teaches awareness: the adults' awareness configuration is the child's developmental environment. What transmits is what the nervous system carries, not what the heart intends.
                </li>
                <li style={propositionItemStyle}>
                  SEA is the keystone capacity. Without SEA, RE becomes unanchored and ER becomes unfiltered. Without SEA, no capacity configuration can produce true coherence.
                </li>
                <li style={propositionItemStyle}>
                  Capacity configuration (RE state x ER state x SEA state x regulation) predicts chronic mode, identity formation, tolerance thresholds, and relational patterns.
                </li>
                <li style={propositionItemStyle}>
                  The three capacities were never developed. Repair means developing what the past did not provide conditions for.
                </li>
              </ul>
            </ModelPurpose>
          </section>

          {/* ─── CONCEPT 1: THREE CAPACITIES AT BIRTH ──── */}
          <section
            id="capacities-at-birth"
            aria-labelledby="heading-capacities-at-birth"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-capacities-at-birth" style={sectionHeadingStyle}>
              1. The Three Capacities Connected at Birth
            </h2>

            <p style={proseStyle}>
              At birth, the emotional-somatic system is the only information system online. The infant has biological precursors of all three capacities, operating as a single integrated system:
            </p>

            <ul style={{ paddingLeft: 20, margin: "0 0 16px" }}>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Proto-RE (Reading Emotions)</strong> — tracks faces, responds to tone, orients toward emotional signals. Mirroring is automatic.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Proto-ER (Emotional Resonance)</strong> — feels with others before knowing why. Emotional contagion is present from the start.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Proto-SEA (Self-Emotional Awareness)</strong> — the body registers states — hunger, discomfort, safety, distress — as raw sensation. There is no observing self to name them, but the signals exist.
              </li>
            </ul>

            <p style={proseStyle}>
              This connected state is what people remember when they say "when I was a kid, I was just <em>me</em>." Not a memory of a different person hidden underneath. A memory of a capacity state — the three awarenesses connected before anything redirected them.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Being yourself is not a personality. It is what happens when the three capacities are connected.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Attachment theory (Bowlby, 1969; Ainsworth, 1978) — the attachment system as innate and relational. Developmental neuroscience (Schore, 2003) — affect precedes cognition; right-brain development through attunement. Object relations (Winnicott, 1960) — conditions for authentic experience and the "true self" as emergent capacity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The proto-capacity framework showing that the three awarenesses are present at birth in integrated form. "Being yourself" reframed as a capacity state — not a hidden personality to find but a configuration to reconnect. The developmental question becomes concrete: not "who is this person really?" but "which capacities had conditions to develop and which didn't?"
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 2: PRE-SEA CONDITION ──────────── */}
          <section
            id="pre-sea-condition"
            aria-labelledby="heading-pre-sea-condition"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-pre-sea-condition" style={sectionHeadingStyle}>
              2. The Pre-SEA Condition — Feeling = Being
            </h2>

            <p style={proseStyle}>
              Before cognition develops, there is no observing self. No separation between experience and identity. The child does not think "I feel scared" — the child <em>is</em> scared. The child does not think "my caregiver is dysregulated" — the child experiences "something is wrong with me."
            </p>

            <ul style={{ paddingLeft: 20, margin: "0 0 16px" }}>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Feeling = being:</strong> the child does not have an observing position from which to witness emotion — the child is the emotion.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>Feedback = identity:</strong> "my caregiver is dysregulated" becomes "something is wrong with me."
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: TEXT.primary }}>How I'm treated = who I am:</strong> without an observing self, external data writes directly onto identity.
              </li>
            </ul>

            <p style={proseStyle}>
              When SEA develops, the child gains an observing position — the capacity to separate "this is what I feel" from "this is what is happening around me." When SEA does not develop, the pre-SEA condition persists into adulthood — invisible because the adult has never experienced SEA being online. This is not immaturity. It is unfinished developmental wiring.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              When feedback hits like identity — when I am the feeling rather than having it — that is the pre-SEA condition, not proof that something is wrong with me.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Object relations (Winnicott, 1960) — the true self as emergent through relational conditions. Developmental psychology (Stern, 1985; Mahler, 1975) — separation-individuation and the developing sense of self. Interpersonal neurobiology (Siegel, 2012) — differentiation requires safety and integration.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The pre-SEA condition as a named developmental state that persists into adulthood with specific, identifiable consequences. Making explicit that the separation between internal experience and external reality <em>is</em> Self-Emotional Awareness — and that adults without SEA are still operating in the pre-SEA condition where feeling = being and external feedback = identity.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 3: AWARENESS TEACHES AWARENESS ── */}
          <section
            id="awareness-teaches-awareness"
            aria-labelledby="heading-awareness-teaches-awareness"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-awareness-teaches-awareness" style={sectionHeadingStyle}>
              3. Awareness Teaches Awareness — The Developmental Mechanism
            </h2>

            <h2 id="heading-awareness-development-question" style={sectionHeadingStyle}>
              How do the three awareness capacities develop through relational experience?
            </h2>

            <p style={proseStyle}>
              The organising principle of the entire calibration system. The adults' awareness capacities create the child's developmental environment. Not instruction. Not intention. Not love. <strong style={{ color: TEXT.primary }}>Embodiment.</strong>
            </p>

            <p style={proseStyle}>
              The child's nervous system develops inside the adults' nervous system. What the adults can and cannot do with their own RE, ER, and SEA creates the environment the child's awareness develops from. The transmission channel is the nervous system, not language.
            </p>

            {/* Transmission table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minWidth: 500 }}>
                {/* Header row */}
                <div style={gridHeaderStyle}>If the adult has...</div>
                <div style={gridHeaderStyle}>The child absorbs...</div>
                {/* Data rows */}
                <GridCell first>Accurate RE</GridCell>
                <GridCell>A model of emotional reading in service of understanding</GridCell>
                <GridCell first>Hypervigilant RE</GridCell>
                <GridCell>A model of emotional reading in service of survival</GridCell>
                <GridCell first>Sustainable ER</GridCell>
                <GridCell>A model of emotional resonance that includes self-care</GridCell>
                <GridCell first>Flooded ER</GridCell>
                <GridCell>A model where others' emotions swamp one's own</GridCell>
                <GridCell first>Online SEA</GridCell>
                <GridCell>A model of being able to name and trust one's own feelings</GridCell>
                <GridCell first>Absent SEA</GridCell>
                <GridCell>No model of internal emotional access</GridCell>
                <GridCell first>Learned regulation</GridCell>
                <GridCell>An experience of co-regulation that becomes self-regulation</GridCell>
                <GridCell first>Absent regulation</GridCell>
                <GridCell>An experience of unregulated states with no return path</GridCell>
              </div>
            </div>

            <OperationalStatement color={MODEL_COLOR}>
              Love does not override what the nervous system embodies. A caregiver can love a child deeply and still transmit an incomplete awareness configuration — because what transmits is what the nervous system carries, not what the heart intends.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Attachment theory (Bowlby, 1969; Main & Hesse, 1990) — the attachment system as a regulatory template. Interpersonal neurobiology (Siegel, 2012; Schore, 2003) — right-brain-to-right-brain attunement. Polyvagal theory (Porges, 2011) — co-regulation through the social engagement system. Social learning (Bandura, 1977) — modelling as a transmission mechanism.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The awareness-teaches-awareness principle as the organising developmental mechanism — making the transmission pathway concrete and testable. Not "environment shapes development" (which is generic) but "the specific awareness capacities the adults carry determine which awareness capacities the child develops." The causal chain is precise: adult RE/ER/SEA configuration → environment → child RE/ER/SEA configuration.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 4: ONLINE AND OFFLINE ─────────── */}
          <section
            id="capacities-online-offline"
            aria-labelledby="heading-capacities-online-offline"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-capacities-online-offline" style={sectionHeadingStyle}>
              4. The Three Capacities — Online and Offline
            </h2>

            <p style={proseStyle}>
              Each capacity has a designed function — what it does when conditions allowed it to develop as intended. Each also has adaptive variants — what it becomes when conditions required it to serve a different purpose. All variants are the same capacity. What changes is what the capacity serves.
            </p>

            {/* ── RE ── */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="re-reading-emotions" style={h3Style}>
                Reading Emotions (RE)
              </h3>

              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>When Online (Design Function):</strong> accurately reads emotional signals in others for understanding. The child learned to track others' emotional states because the adults' states were readable — consistent, congruent, not dangerous to perceive. RE develops in service of understanding, not survival.
              </p>

              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "160px 1fr 140px", minWidth: 600 }}>
                  <div style={gridHeaderStyle}>Variant</div>
                  <div style={gridHeaderStyle}>What It Is</div>
                  <div style={gridHeaderStyle}>What It Serves</div>

                  <GridCell first>Hypervigilant RE</GridCell>
                  <GridCell>Scanning for survival — reading every signal for threat. Exhausting.</GridCell>
                  <GridCell>Survival</GridCell>

                  <GridCell first>Surface-calibrated RE</GridCell>
                  <GridCell>Reading performance, not authenticity.</GridCell>
                  <GridCell>Fitting in</GridCell>

                  <GridCell first>Instrumental RE</GridCell>
                  <GridCell>Reading for strategy, compliance, or control.</GridCell>
                  <GridCell>Management</GridCell>

                  <GridCell first>Weaponised RE</GridCell>
                  <GridCell>Reading for leverage and exploitation.</GridCell>
                  <GridCell>Power</GridCell>
                </div>
              </div>

              <p style={{
                ...proseStyle,
                padding: "12px 16px",
                background: hexToRgba(MODEL_COLOR, 0.04),
                borderRadius: 6,
                fontStyle: "italic",
              }}>
                <strong style={{ color: TEXT.primary }}>Critical insight:</strong> All RE variants are RE. They are all the same capacity — reading emotional signals. What changes is what the reading serves.
              </p>
            </div>

            {/* ── ER ── */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="er-emotional-resonance" style={h3Style}>
                Emotional Resonance (ER)
              </h3>

              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>When Online (Design Function):</strong> the felt dimension of connection — feeling it in your own body. Sustainable ER means resonating with another person's emotional state while maintaining your own centre. The body participates in the other's experience without being consumed by it.
              </p>

              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "180px 1fr 180px", minWidth: 600 }}>
                  <div style={gridHeaderStyle}>Variant</div>
                  <div style={gridHeaderStyle}>What It Is</div>
                  <div style={gridHeaderStyle}>What It Serves</div>

                  <GridCell first>Flooded ER</GridCell>
                  <GridCell>Overwhelmed by others' states. No filter. The other person's emotion becomes the dominant experience.</GridCell>
                  <GridCell>Connection at any cost</GridCell>

                  <GridCell first>Confused / Distrusted ER</GridCell>
                  <GridCell>Felt sense contradicted by authority. "You're imagining things." The signal is there but cannot be trusted.</GridCell>
                  <GridCell>Compliance</GridCell>

                  <GridCell first>Shut-down ER</GridCell>
                  <GridCell>Feeling was punished. Protective shutdown. The capacity retreats because it was too costly to use.</GridCell>
                  <GridCell>Self-protection</GridCell>

                  <GridCell first>Absent ER</GridCell>
                  <GridCell>No felt experience of others' states. The resonance channel never developed or was fully sealed.</GridCell>
                  <GridCell>—</GridCell>
                </div>
              </div>
            </div>

            {/* ── SEA ── */}
            <div style={{ marginBottom: 32 }}>
              <h3 id="sea-self-emotional-awareness" style={h3Style}>
                Self-Emotional Awareness (SEA) — The Keystone
              </h3>

              <p style={proseStyle}>
                <strong style={{ color: TEXT.primary }}>When Online (Design Function):</strong> the capacity to access, name, and trust one's own emotional states. SEA is the developmental breakthrough — the moment the child begins to separate "this is what I feel" from "this is what is happening around me." Internal experience becomes readable, nameable, trustworthy.
              </p>

              <div style={{ overflowX: "auto", marginBottom: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "200px 1fr 140px", minWidth: 600 }}>
                  <div style={gridHeaderStyle}>Variant</div>
                  <div style={gridHeaderStyle}>What It Is</div>
                  <div style={gridHeaderStyle}>What It Serves</div>

                  <GridCell first>Online SEA</GridCell>
                  <GridCell>Internal experience readable, nameable, trustworthy. The person can locate what they feel, distinguish it from what others feel, and use it as data.</GridCell>
                  <GridCell>Truth</GridCell>

                  <GridCell first>Absent SEA</GridCell>
                  <GridCell>No access to own emotional states. The pre-SEA condition persists into adulthood. Feeling = being. Feedback = identity.</GridCell>
                  <GridCell>—</GridCell>

                  <GridCell first>Narrative-filtered SEA</GridCell>
                  <GridCell>Partially online but filtered through a contradicting story. The person can name some states but the naming is constrained by a narrative that overrides felt experience.</GridCell>
                  <GridCell>Regulation</GridCell>
                </div>
              </div>

              <h2 id="heading-sea-keystone-question" style={sectionHeadingStyle}>
                Why is Self-Emotional Awareness (SEA) the keystone capacity?
              </h2>

              <h3 style={{ ...h3Style, marginTop: 20 }}>
                Why SEA Is the Keystone
              </h3>

              <p style={proseStyle}>
                Without SEA, RE becomes unanchored — reading others' emotions with no internal reference point to ground the reading. Without SEA, ER becomes unfiltered — feeling others' states with no capacity to distinguish "theirs" from "mine." Without SEA, the return has no endpoint — because there is no stable "self" to return to. <strong style={{ color: TEXT.primary }}>SEA provides the internal reference point</strong> that makes all other capacities functional rather than reactive.
              </p>

              <OperationalStatement color={MODEL_COLOR}>
                SEA is the keystone capacity. Without it, RE reads without anchoring, ER resonates without filtering, and the return has no destination.
              </OperationalStatement>
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Empathy research (Decety & Jackson, 2004) — multi-dimensional empathy components. Psychoanalytic theory (Kohut, 1977; Kernberg, 1975) — self-psychology and the role of mirroring. Polyvagal theory (Porges, 2011) — the social engagement system and neuroception. Mentalization theory (Fonagy, 2002) — the capacity to understand behavior in terms of mental states.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  The three-capacity model with variant maps showing how the same capacity redirects under different developmental conditions. SEA identified as the keystone — the capacity without which no configuration can produce true coherence. Each variant is the same capacity serving a different function, not a different capacity.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 5: CAPACITY CONFIGURATION ─────── */}
          <section
            id="capacity-configuration"
            aria-labelledby="heading-capacity-configuration"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-capacity-configuration" style={sectionHeadingStyle}>
              5. Capacity Configuration — The Pattern That Becomes Personality
            </h2>

            <p style={proseStyle}>
              The specific combination of RE, ER, SEA, and regulation is the capacity configuration. This is the predictive unit of the model. Configuration predicts chronic mode. Chronic mode becomes identity. This is the causal chain: <strong style={{ color: TEXT.primary }}>configuration → chronic mode → identity.</strong>
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 16,
                marginBottom: 20,
              }}
            >
              {PROFILE_CARDS.map((profile) => (
                <div
                  key={profile.name}
                  style={{
                    background: BG.card,
                    border: `1px solid ${BORDER.default}`,
                    borderTop: `3px solid ${profile.border}`,
                    borderRadius: RADIUS.md,
                    padding: 20,
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: TEXT.primary,
                      marginBottom: 6,
                    }}
                  >
                    {profile.name}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: TEXT.secondary,
                      lineHeight: 1.6,
                      margin: "0 0 14px",
                    }}
                  >
                    {profile.description}
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {profile.badges.map((badge) => (
                      <span
                        key={badge.label}
                        style={{
                          fontSize: 11,
                          fontFamily: FONT.mono,
                          fontWeight: 600,
                          padding: "3px 8px",
                          borderRadius: RADIUS.sm,
                          color: badge.active ? badge.color : TEXT.muted,
                          background: badge.active
                            ? hexToRgba(badge.color, 0.15)
                            : "rgba(136, 136, 136, 0.08)",
                        }}
                      >
                        {badge.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <OperationalStatement color={MODEL_COLOR}>
              Personality is not a type — it is a record of which capacities had conditions to develop and which didn't.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Schema therapy (Young, Klosko, & Weishaar, 2003) — early maladaptive schemas as predictive patterns. Attachment theory (Bowlby, 1969; Ainsworth, 1978) — attachment style as developmental configuration. Personality psychology — trait models as descriptions of chronic regulatory positions.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Configuration as the predictive unit — RE state x ER state x SEA state x regulation = predicted compass behaviour. This reframes personality from a fixed type to a developmental record: the specific awareness capacities that had conditions to develop, and the chronic mode position that resulted. Configuration is testable, trackable, and — crucially — changeable.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 6: CO-REGULATION ──────────────── */}
          <section
            id="co-regulation"
            aria-labelledby="heading-co-regulation"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-co-regulation" style={sectionHeadingStyle}>
              6. Co-Regulation and the Return Path
            </h2>

            <p style={proseStyle}>
              Children are born with the biological capacity for regulation but not the ability. The nervous system is designed to complete the threat cycle: mobilize, respond, discharge, restore. But the infant cannot do this alone. The system is designed for <strong style={{ color: TEXT.primary }}>co-regulation</strong> — the caregiver's regulated nervous system teaching the child's nervous system the return path.
            </p>

            <p style={proseStyle}>
              When the infant cries and the caregiver holds them, the caregiver's regulated nervous system sends safety signals — through tone, touch, rhythm, presence — that help the infant's activated nervous system complete the cycle and settle. Through thousands of these interactions, the child internalizes the return: <em>this is how the body goes back to safety.</em> Co-regulation becomes the template for self-regulation.
            </p>

            <h3 style={h3Style}>Three Disruptions</h3>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "180px 1fr 1fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>Disruption</div>
                <div style={gridHeaderStyle}>Adult Configuration</div>
                <div style={gridHeaderStyle}>What the Child Learns</div>

                <GridCell first>Disrupted regulation</GridCell>
                <GridCell>Emotionally unpredictable</GridCell>
                <GridCell>"Sometimes there is a way back, sometimes there isn't." → Unreliable return</GridCell>

                <GridCell first>Misdirected regulation</GridCell>
                <GridCell>Emotionally incongruent</GridCell>
                <GridCell>"There is a way back — but it requires me to become what they need." → Wrong destination</GridCell>

                <GridCell first>Blocked regulation</GridCell>
                <GridCell>Emotional invalidation</GridCell>
                <GridCell>"There is no departure. Do not feel." → No cycle to return from</GridCell>
              </div>
            </div>

            <OperationalStatement color={MODEL_COLOR}>
              The child doesn't learn to regulate through instruction — the child learns to regulate through being regulated with.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Polyvagal Theory (Porges, 2011) — co-regulation through the social engagement system. Somatic experiencing (Levine, 1997) — completing the threat cycle as a biological process. Interpersonal neurobiology (Siegel, 2012; Schore, 2003) — right-brain-to-right-brain regulatory attunement between caregiver and infant.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Co-regulation as the developmental mechanism for the return path. Three named disruption patterns — disrupted, misdirected, and blocked — linking caregiver configuration to child regulatory capacity. Each disruption produces a specific, predictable consequence for the child's ability to return from activation to safety.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 7: TRUE AND FALSE COHERENCE ───── */}
          <section
            id="true-false-coherence"
            aria-labelledby="heading-true-false-coherence"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-true-false-coherence" style={sectionHeadingStyle}>
              7. True Coherence and False Coherence
            </h2>

            <p style={proseStyle}>
              When all three capacities are online and the return is learned: <strong style={{ color: TEXT.primary }}>true coherence</strong> — narrative aligns with felt experience. Cognition has the full information set. The story matches what the body knows.
            </p>

            <p style={proseStyle}>
              When capacities are incomplete: <strong style={{ color: TEXT.primary }}>false coherence</strong> — a stable-but-untrue narrative. Cognition fills the gap where awareness data should be. This is regulation — cognition doing what the body was never taught to do. The person feels regulated. They <em>are</em> regulated. The cost is truth, not function.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "160px 1fr 1fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}></div>
                <div style={gridHeaderStyle}>True Coherence</div>
                <div style={gridHeaderStyle}>False Coherence</div>

                <GridCell first>Data source</GridCell>
                <GridCell>All three capacities + regulation</GridCell>
                <GridCell>Incomplete capacity set + cognitive replacement</GridCell>

                <GridCell first>Narrative</GridCell>
                <GridCell>Aligned with felt experience</GridCell>
                <GridCell>Replaces felt experience</GridCell>

                <GridCell first>Feels like</GridCell>
                <GridCell>"This is complex and I can hold it"</GridCell>
                <GridCell>"This is clear and I know who I am"</GridCell>

                <GridCell first>Function</GridCell>
                <GridCell>Understanding</GridCell>
                <GridCell>Regulation</GridCell>

                <GridCell first>Cost</GridCell>
                <GridCell>Complexity</GridCell>
                <GridCell>Truth</GridCell>

                <GridCell first>Flexibility</GridCell>
                <GridCell>Can update</GridCell>
                <GridCell>Resists update</GridCell>
              </div>
            </div>

            <OperationalStatement color={MODEL_COLOR}>
              The smooth story should worry you more than the messy one. The smooth one may be false coherence performing integration. The messy one may be someone learning to hold complexity.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Narrative psychology (Main & Goldwyn, 1998) — coherence in the Adult Attachment Interview as a predictor of attachment classification. Cognitive dissonance (Festinger, 1957) — the drive to reduce inconsistency between belief and experience. Psychoanalytic theory — defense mechanisms as regulatory strategies maintaining internal consistency.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  True vs false coherence grounded in the capacity model. False coherence as cognition regulating what the body never learned to process — function at the cost of truth. The distinction provides a concrete diagnostic: does the narrative align with felt experience (true coherence) or replace it (false coherence)?
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 8: TOLERANCE THRESHOLDS ────────── */}
          <section
            id="tolerance-thresholds"
            aria-labelledby="heading-tolerance-thresholds"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-tolerance-thresholds" style={sectionHeadingStyle}>
              8. Tolerance Thresholds
            </h2>

            <p style={proseStyle}>
              The nervous system calibrates a baseline for what to endure — through developmental conditions. What was endured becomes what is tolerated. The person does not experience this as tolerance. They experience it as normal. The threshold is invisible from inside.
            </p>

            <p style={proseStyle}>
              The gap between physiological activation and subjective distress reporting is the tolerance threshold in action. The body registers the harm — cortisol, heart rate, hypervigilance, somatic symptoms. The person reports "I'm fine" or "it wasn't that bad" or "that's just how relationships are." The threshold sits between the body's data and the person's access to it.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Familiar can feel "normal" even when it is costly.
            </OperationalStatement>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The most consequential configuration for tolerance thresholds:</strong> Flooded ER + absent SEA. The person <em>feels</em> the harm — the body resonates with it, ER is picking up the signal. But without SEA, the person cannot locate it as harm. They feel the pain but cannot name it, cannot source it, cannot use it as data. This is the configuration that produces the highest tolerance for harmful conditions, because the very capacity that would flag the harm (SEA) is the capacity that is missing.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Allostatic load (McEwen, 2000) — the cumulative physiological cost of chronic stress and adaptation. Trauma research (van der Kolk, 2014; Herman, 1992) — how trauma calibrates the body's baseline for distress and how dissociation maintains tolerance for harmful conditions.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Tolerance thresholds as a named mechanism — the gap between physiological activation and subjective distress reporting, explained through the capacity model. The identification of flooded ER + absent SEA as the most consequential configuration, producing the highest tolerance for harm because the person feels the damage but cannot locate it as damage.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 9: GENERATIONAL REPLICATION ───── */}
          <section
            id="generational-replication"
            aria-labelledby="heading-generational-replication"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-generational-replication" style={sectionHeadingStyle}>
              9. Generational Replication
            </h2>

            <p style={proseStyle}>
              Awareness teaches awareness — and this does not stop after one generation. The chain transmits through the nervous system, not words. A parent can say "your feelings matter" while their SEA is absent — the child absorbs the absence, not the words. A grandparent's unprocessed trauma shapes the parent's regulatory capacity, which shapes the child's developmental environment.
            </p>

            <p style={proseStyle}>
              The mechanism is the same at every generation: what the adult nervous system embodies is what the child's nervous system absorbs. The content of the transmission changes — different families, different circumstances, different decades — but the <strong style={{ color: TEXT.primary }}>mechanism</strong> does not change. Awareness teaches awareness. Absence teaches absence.
            </p>

            <h3 style={h3Style}>Cultural Override</h3>

            <p style={proseStyle}>
              When an entire culture performs emotional invalidation — "boys don't cry," "don't make a scene," "be strong" — the mechanism operates at population level. The condition produces the culture and the culture reproduces the condition. Individual families cannot easily resist a cultural norm that the surrounding environment continuously reinforces. Cultural override is not a metaphor for social pressure. It is the awareness-teaches-awareness mechanism operating through institutions, media, language norms, and collective regulatory patterns.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The chain replicates until awareness changes, not just behaviour.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Intergenerational transmission (Main & Hesse, 1990; Yehuda et al., 2014; Meaney, 2001) — epigenetic and behavioural pathways of trauma transmission. Family systems (Bowen, 1978; Satir, 1964; Minuchin, 1974) — multigenerational patterns and systemic regulation.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Generational replication through awareness transmission, not instruction — the mechanism is the same at every generation. Cultural override as a named population-level mechanism: the awareness-teaches-awareness principle operating through institutions and collective norms, not just individual families.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── CONCEPT 10: REPAIR ────────────────────── */}
          <section
            id="repair"
            aria-labelledby="heading-repair"
            style={{ marginBottom: 48 }}
          >
            <h2 id="heading-repair" style={sectionHeadingStyle}>
              10. Repair — Developing What Was Missing
            </h2>

            <p style={proseStyle}>
              The three awareness capacities were never developed. There is no original wound to heal. There is no hidden self to find. There are capacities that the developmental environment did not provide conditions for — and those capacities can still develop, under the right conditions, at any age.
            </p>

            <p style={proseStyle}>
              Repair does not mean recovering what was lost. It means <strong style={{ color: TEXT.primary }}>building what was never built.</strong> The substitutes — the hypervigilant RE, the flooded ER, the narrative-filtered SEA, the false coherence — They are the best the system could produce with what it had. Repair is not removing them. Repair is developing the original capacities so that the substitutes are no longer the only option.
            </p>

            <h3 style={h3Style}>Five Conditions for Repair</h3>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", minWidth: 500 }}>
                <div style={gridHeaderStyle}>Condition</div>
                <div style={gridHeaderStyle}>What It Means</div>

                <GridCell first>Safety</GridCell>
                <GridCell>The nervous system must evaluate "safe enough to risk change." This is a physiological assessment, not a cognitive decision.</GridCell>

                <GridCell first>Relational support</GridCell>
                <GridCell>New co-regulatory experiences. The capacities that develop through relationship can only be repaired through relationship.</GridCell>

                <GridCell first>Identity flexibility</GridCell>
                <GridCell>False coherence must loosen enough for new data. The person must be able to tolerate the discomfort of the old narrative no longer holding.</GridCell>

                <GridCell first>Time</GridCell>
                <GridCell>Capacities develop through repeated experience, not single insight. Awareness is not an epiphany — it is a developmental process.</GridCell>

                <GridCell first>Structural conditions</GridCell>
                <GridCell>The environment must not re-wound. A person cannot develop new capacities while the current environment continues to require the old substitutes.</GridCell>
              </div>
            </div>

            <OperationalStatement color={MODEL_COLOR}>
              Every substitute was built because the original was missing. Repair means building the original.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="framework">
                <p style={expandedProseStyle}>
                  Corrective emotional experience research (Alexander & French, 1946) — new relational experiences as the mechanism of change. Polyvagal Theory (Porges, 2011) — felt safety as a prerequisite for social engagement. Internal Family Systems (Schwartz, 1995) — parts carrying burdens from experiences. Rogers' organismic valuing process — the innate developmental trajectory that resumes when conditions allow.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="framework">
                <p style={expandedProseStyle}>
                  Repair as development, not recovery. The five conditions connecting to the full framework system: safety (F1 — the nervous system's evaluation), relational support (F2 — awareness teaches awareness, now in the forward direction), identity flexibility (F3 — false coherence loosening), time (F8 — the non-linear process), and structural conditions (F9 — neurodivergent pathways; F12 — the two information systems working together).
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── DRAWS FROM ──────────────────────────────── */}
          <DrawsFromPanel items={DRAWS_FROM} color={MODEL_COLOR} />

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="m2-three-awareness-capacities" type="framework" />

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
                  <NavRow
                    label="Understand the instrument these capacities calibrate"
                    href="/model/m1-inner-compass"
                    linkText="M1: Nervous System Signaling →"
                  />
                  <NavRow
                    label="Understand the physiological cost of capacity gaps"
                    href="/model/m3-regulation-capacities"
                    linkText="M3: Regulation Capacities →"
                  />
                  <NavRow
                    label="See all twelve frameworks"
                    href="/frameworks-map"
                    linkText="12 Frameworks Map →"
                  />
                  <NavRow
                    label="Understand the foundational theory behind this model"
                    href="/framework/f2-awareness-calibration"
                    linkText="F2: Awareness Calibration →"
                  />
                  <NavRow
                    label="Understand how awareness configurations repair"
                    href="/framework/f8-repairing-awareness"
                    linkText="F8: Repairing Awareness →"
                  />
                  <NavRow
                    label="Explore the interactive tools"
                    href="https://teg-blue.com/emotional-tools"
                    linkText="Emotional Tools (teg-blue.com) →"
                    external
                  />
                  <NavRow
                    label="Collaborate on validating this model"
                    href="/collaborate"
                    linkText="Collaborate →"
                  />
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
            "@id": "https://teg-blue.org/model/m2-three-awareness-capacities#article",
            headline: "Three Awareness Capacities: The Calibration System",
            description:
              "The three specific awarenesses — Reading Emotions, Emotional Resonance, and Self-Emotional Awareness — that determine what data the compass receives, how capacity configurations predict chronic mode and identity, and how repair develops what was missing. Model M2 of the TEG-Blue system.",
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
            datePublished: "2026-03-05",
            dateModified: "2026-03-05",
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue Model System",
              url: "https://teg-blue.org/models",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://teg-blue.org/model/m2-three-awareness-capacities",
            },
            about: [
              { "@type": "Thing", name: "Three Awareness Capacities" },
              { "@type": "Thing", name: "Developmental Psychology" },
              { "@type": "Thing", name: "Awareness Calibration" },
              { "@type": "Thing", name: "Capacity Configuration" },
              { "@type": "Thing", name: "Co-Regulation" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "Attachment and Loss (Bowlby, 1969)" },
              { "@type": "ScholarlyArticle", name: "Affect Regulation and the Origin of the Self (Schore, 2003)" },
              { "@type": "ScholarlyArticle", name: "The Developing Mind (Siegel, 2012)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "The Maturational Processes (Winnicott, 1960)" },
              { "@type": "ScholarlyArticle", name: "A multidimensional approach to empathy (Decety & Jackson, 2004)" },
              { "@type": "ScholarlyArticle", name: "Affect Regulation, Mentalization, and the Development of the Self (Fonagy, 2002)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
            ],
            keywords: [
              "three awareness capacities",
              "reading emotions",
              "emotional resonance",
              "self-emotional awareness",
              "capacity configuration",
              "co-regulation",
              "tolerance thresholds",
              "generational replication",
              "awareness repair",
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
              { name: "Models", url: "/models" },
              { name: "M2: Three Awareness Capacities", url: "/model/m2-three-awareness-capacities" },
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
                  "Reading Emotions (RE) is the capacity to perceive what others are feeling. Emotional Resonance (ER) is the capacity to feel what others are feeling in your own body. Self-Emotional Awareness (SEA) is the capacity to access, name, and trust your own emotional states. All three are present at birth in proto-form and develop through relational conditions.",
              },
              {
                question: "Why is Self-Emotional Awareness (SEA) called the keystone capacity?",
                answer:
                  "Without SEA, RE becomes unanchored — reading others' emotions with no internal reference point. Without SEA, ER becomes unfiltered — feeling others' states with no capacity to distinguish theirs from yours. Without SEA, the return from activation has no endpoint. SEA provides the internal reference point that makes all other capacities functional rather than reactive.",
              },
              {
                question: "What is a capacity configuration and how does it predict personality?",
                answer:
                  "A capacity configuration is the specific combination of RE state, ER state, SEA state, and regulation that a person develops. Configuration predicts chronic mode (where the compass gets stuck), which becomes the basis of identity. Personality is not a type — it is a record of which capacities had conditions to develop and which didn't.",
              },
              {
                question: "How does repair work in the three awareness capacities model?",
                answer:
                  "The three awareness capacities were never developed. Repair means building what was never built, not recovering what was lost. Five conditions are required: safety (the nervous system must evaluate 'safe enough'), relational support (new co-regulatory experiences), identity flexibility (false coherence must loosen), time (capacities develop through repeated experience), and structural conditions (the environment must not re-wound).",
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
              name: "The Three Awareness Capacities (M2) — TEG-Blue Research",
              url: "https://teg-blue.org/model/m2-three-awareness-capacities",
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
  color: MODEL_COLOR,
  letterSpacing: "-0.01em",
  marginBottom: 16,
  paddingBottom: 8,
  borderBottom: `2px solid ${hexToRgba(MODEL_COLOR, 0.2)}`,
};

const h3Style = {
  fontSize: 16,
  fontWeight: 600,
  color: TEXT.primary,
  marginBottom: 12,
};

const proseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  marginBottom: 16,
  maxWidth: 720,
};

const propositionItemStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  marginBottom: 8,
};

const expandedProseStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  margin: "8px 0 0",
};

const expandableRowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: 6,
  marginTop: 4,
};

const listItemStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.7,
  marginBottom: 8,
};

const gridHeaderStyle = {
  padding: "10px 12px",
  background: hexToRgba(MODEL_COLOR, 0.1),
  borderBottom: `1px solid ${BORDER.default}`,
  fontSize: 12,
  fontWeight: 600,
  color: TEXT.primary,
  fontFamily: FONT.mono,
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

const chartHeaderStyle = {
  padding: "8px",
  fontSize: 10,
  fontWeight: 600,
  color: TEXT.hint,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontFamily: FONT.mono,
  borderBottom: `1px solid ${BORDER.default}`,
};

const DEGRADATION_DATA = [
  {
    capacity: "RE", fullName: "Reading Emotions", color: RE_COLOR,
    levels: [
      { label: "Full", pct: 100, color: RE_COLOR },
      { label: "Full", pct: 100, color: RE_COLOR },
      { label: "Sharp", pct: 100, color: "#c084fc" },
      { label: "Precise", pct: 100, color: "#d946ef" },
      { label: "Weaponised", pct: 100, color: RE_CHRONIC },
    ],
  },
  {
    capacity: "ER", fullName: "Emotional Resonance", color: ER_COLOR,
    levels: [
      { label: "Full", pct: 100, color: ER_COLOR },
      { label: "Overwhelmed", pct: 60, color: ER_COLOR },
      { label: "Strategic", pct: 20, color: ER_COLOR },
      { label: "Performed", pct: 5, color: ER_COLOR },
      { label: "Dark", pct: 0, color: ER_COLOR },
    ],
  },
  {
    capacity: "SEA", fullName: "Self-Emotional Awareness", color: SEA_COLOR,
    levels: [
      { label: "Full", pct: 100, color: SEA_COLOR },
      { label: "Partial", pct: 40, color: SEA_COLOR },
      { label: "Minimal", pct: 10, color: SEA_COLOR },
      { label: "Offline", pct: 0, color: SEA_COLOR },
      { label: "Offline", pct: 0, color: SEA_COLOR },
    ],
  },
];

const GRADIENT_COLUMNS = ["Baseline", "Protection", "Control", "Domination", "Chronic"];

const PROFILE_CARDS = [
  {
    name: "Integrated",
    description: "All three online. Real choice is possible.",
    border: "#4ade80",
    badges: [
      { label: "RE Active", color: RE_COLOR, active: true },
      { label: "ER Active", color: ER_COLOR, active: true },
      { label: "SEA Active", color: SEA_COLOR, active: true },
    ],
  },
  {
    name: "Blind Empath",
    description: "Feels everything but can\u2019t read patterns.",
    border: ER_COLOR,
    badges: [
      { label: "RE Weak", color: RE_COLOR, active: false },
      { label: "ER Active", color: ER_COLOR, active: true },
      { label: "SEA Active", color: SEA_COLOR, active: true },
    ],
  },
  {
    name: "Strategic Reader",
    description: "Reads with precision, no self-location.",
    border: "#f97316",
    badges: [
      { label: "RE Active", color: RE_COLOR, active: true },
      { label: "ER Partial", color: ER_COLOR, active: false },
      { label: "SEA Offline", color: SEA_COLOR, active: false },
    ],
  },
  {
    name: "Unanchored Reader",
    description: "Reads everything. Feels nothing. No self-access.",
    border: RE_CHRONIC,
    badges: [
      { label: "RE Active", color: RE_COLOR, active: true },
      { label: "ER Offline", color: ER_COLOR, active: false },
      { label: "SEA Offline", color: SEA_COLOR, active: false },
    ],
  },
];

// ─── HELPER COMPONENTS ────────────────────────────────────

function GridCell({ children, first }) {
  return (
    <div
      style={{
        padding: "10px 12px",
        borderBottom: `1px solid ${BORDER.default}`,
        fontSize: 13,
        color: first ? TEXT.primary : TEXT.secondary,
        fontWeight: first ? 600 : 400,
        lineHeight: 1.6,
      }}
    >
      {children}
    </div>
  );
}

function NavRow({ label, href, linkText, external }) {
  const linkStyle = {
    color: MODEL_COLOR,
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
