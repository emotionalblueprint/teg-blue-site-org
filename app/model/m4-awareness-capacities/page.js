import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, ModelAnchorStrip,
  ModelPurpose, OperationalStatement,
  ExpandableSection, PageLayout,
} from "@/src/components";
import EmpathicIntegrationExplorer from "@/src/components/EmpathicIntegrationExplorer";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateSpeakableJsonLd,
} from "@/src/lib/jsonld";

const MODEL_COLOR = SPECTRUM.cobalt;

const ANCHOR_SECTIONS = [
  { label: "Three Capacities", href: "#three-capacities" },
  { label: "Multiplicative", href: "#multiplicative-system" },
  { label: "Development", href: "#awareness-develops" },
  { label: "Configuration", href: "#capacity-configuration" },
  { label: "Coherence", href: "#true-false-coherence" },
  { label: "Repair", href: "#repair" },
  { label: "Full Cycle", href: "#cycle-completes" },
];

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Awareness Capacities (M4) | TEG-Blue Research",
  description:
    "The fourth stage of the Emotional Somatic Cycle — what determines whether the person can feel the cycle while it is running. Three biological capacities that the world calls empathy. They are not one thing. They are three things.",
  keywords: [
    "awareness capacities",
    "Reading Emotions",
    "Emotional Resonance",
    "Self-Emotional Awareness",
    "empathy components",
    "multiplicative system",
    "capacity configuration",
    "awareness teaches awareness",
    "co-regulation",
    "pre-SEA condition",
    "true coherence",
    "false coherence",
    "tolerance thresholds",
    "generational replication",
    "emotional somatic cycle",
  ],
  alternates: {
    canonical: "https://teg-blue.org/model/m4-awareness-capacities",
  },
  openGraph: {
    title: "Awareness Capacities — M4 Model | TEG-Blue",
    description:
      "What determines whether the person can feel the cycle while it is running — three biological capacities, each with its own developmental trajectory and degradation pattern. The fourth stage of the Emotional Somatic Cycle.",
    url: "https://teg-blue.org/model/m4-awareness-capacities",
    type: "article",
    siteName: "TEG-Blue Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awareness Capacities — TEG-Blue M4",
    description:
      "What the world calls empathy is not one thing. It is three biological capacities — and when any one is missing, the whole system distorts.",
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function M4AwarenessCapacitiesPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/model/m4-awareness-capacities" />

      <PageLayout
        header={
          <>
            <ModelHero
              badge="MODEL M4"
              title="Awareness Capacities"
              subtitle="The Calibration"
              description="The signal fired (M1). The state shifted (M2). The body mobilised, and either the cycle completed or it didn't (M3). But throughout — from the first signal to the last substitute — one question has been running underneath: can the person feel any of this happening? Some people feel the state shift. They notice the narrowing. They catch the override engaging. Others cannot. What determines this difference is not intelligence, insight, or willpower. It is three biological capacities — each with its own neural substrate, its own developmental trajectory, and its own degradation pattern under chronic activation."
              coreQuestion="Can the person feel the cycle while it is running — and what determines whether they can?"
              drawsFrom={[
                { label: "M1", href: "/model/m1-emotions-as-signals" },
                { label: "M2", href: "/model/m2-nervous-system-states" },
                { label: "M3", href: "/model/m3-regulation-capacities" },
                { label: "F2", href: "/framework/f2-awareness-calibration" },
              ]}
              color={MODEL_COLOR}
            />
            <ModelAnchorStrip sections={ANCHOR_SECTIONS} color={MODEL_COLOR} />
          </>
        }
      >
        {/* ─── EMPATHIC INTEGRATION EXPLORER ────────────────── */}
        <EmpathicIntegrationExplorer />

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
                  What the world calls {"\u201C"}empathy{"\u201D"} is not one capacity. It is three distinct biological processes — <strong style={{ color: TEXT.primary }}>Reading Emotions (RE)</strong>, <strong style={{ color: TEXT.primary }}>Emotional Resonance (ER)</strong>, and <strong style={{ color: TEXT.primary }}>Self-Emotional Awareness (SEA)</strong> — each with a different neural substrate, developmental pathway, and degradation pattern
                </li>
                <li style={propositionItemStyle}>
                  The three capacities are multiplicative: RE × ER × SEA. All three can be present and the product is still zero if any one is gone
                </li>
                <li style={propositionItemStyle}>
                  Self-Emotional Awareness (SEA) is the keystone. Without it, Reading Emotions (RE) is unanchored, Emotional Resonance (ER) is unfiltered, and cycle completion has no endpoint
                </li>
                <li style={propositionItemStyle}>
                  The capacity needed to observe the mode is the capacity the mode disables — Self-Emotional Awareness (SEA) is structurally absent in all four chronic positions
                </li>
                <li style={propositionItemStyle}>
                  Awareness teaches awareness — the adults{"'"} awareness configuration is the child{"'"}s developmental environment. Not instruction. Not intention. Not love. What the nervous system embodies is what transmits
                </li>
                <li style={propositionItemStyle}>
                  Co-regulation teaches cycle completion. The caregiver{"'"}s capacity to regulate IS the child{"'"}s regulatory environment — the bridge between awareness (M4) and regulation (M3)
                </li>
                <li style={propositionItemStyle}>
                  Configuration → chronic mode → identity. Personality is not a type — it is a record of which capacities had conditions to develop and which didn{"'"}t
                </li>
                <li style={propositionItemStyle}>
                  False coherence is not deception — it is cognition building a stable narrative from incomplete data. Regulation at the cost of truth
                </li>
                <li style={propositionItemStyle}>
                  The chain replicates through the nervous system, not through words. It replicates until awareness changes, not just behaviour
                </li>
                <li style={propositionItemStyle}>
                  The capacities were not damaged. They were not developed. Repair is not undoing the past — it is developing what the past didn{"'"}t provide conditions for
                </li>
              </ul>
            </ModelPurpose>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 1: THE THREE CAPACITIES                    */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 1" title="The Three Capacities" />

          {/* ─── C0: WHAT EMPATHY ACTUALLY IS ──────────────── */}
          <section
            id="what-empathy-is"
            aria-labelledby="heading-what-empathy-is"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-what-empathy-is"
              style={sectionHeadingStyle}
            >
              What Empathy Actually Is
            </h2>

            <p style={proseStyle}>
              The word {"\u201C"}empathy{"\u201D"} is used as if it names one capacity. It does not. What the culture calls empathy is actually three distinct biological processes — each with a different neural substrate, a different developmental pathway, and a different degradation pattern under chronic activation.
            </p>
            <p style={proseStyle}>
              A person can have one of these capacities running at full strength and the other two completely offline. This is not a partial version of empathy. It is a fundamentally different configuration — producing a fundamentally different experience of self, others, and the world.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Reading Emotions (RE)</strong> — the capacity to identify what others are feeling. What is happening in this person? What are their signals telling me?
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Emotional Resonance (ER)</strong> — the capacity to feel what others are feeling. Not reading the signal from outside — experiencing it in one{"'"}s own body.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Self-Emotional Awareness (SEA)</strong> — the capacity to identify, name, and trust one{"'"}s own emotional states. The capacity to have a feeling without being consumed by it. To observe one{"'"}s own internal process while it is running.
            </p>
            <p style={proseStyle}>
              These are the three capacities that M2 and M3 have been describing without naming. M2 said: {"\u201C"}Some people feel the state shift. Some don{"'"}t.{"\u201D"} M3 said: {"\u201C"}Some people feel the activation running. Others cannot.{"\u201D"} The gap was visible. The mechanism was not yet named. This is where it gets named.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Not one thing but three. A person can have one component at full strength and the others completely offline. This is not partial empathy. It is a fundamentally different configuration.
            </OperationalStatement>

            <p style={{ ...proseStyle, fontSize: 13, fontStyle: "italic" }}>
              <strong style={{ color: TEXT.primary }}>Note on cross-model terms:</strong> {"\u201C"}The gradient{"\u201D"} refers to the continuous range from Safety & Openness through Threat & Defence, Strategy & Management, to Power & Dominance — the four nervous system states that M2 mapped. {"\u201C"}The compass{"\u201D"} (or {"\u201C"}Inner Compass{"\u201D"}) is M2{"'"}s visual tool for tracking where the nervous system currently sits on this gradient. Both terms are used throughout M4 as established vocabulary.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Multi-component empathy:</strong> Decety & Jackson (2004) — empathy as requiring cognitive empathy (RE), affective empathy (ER), and self-referential processing (SEA). Singer & Lamm (2009) — distinct neural substrates for cognitive and affective empathy. <strong style={{ color: TEXT.primary }}>Dissociable components:</strong> Blair (2005) — independent degradation patterns with different clinical profiles.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The identification of {"\u201C"}empathy{"\u201D"} as three biologically distinct capacities that develop independently, degrade independently, and can be present in any combination — explaining why a person can read others with surgical precision while feeling nothing (Reading Emotions (RE) without Emotional Resonance (ER)), or feel everything while unable to locate themselves (Emotional Resonance (ER) without Self-Emotional Awareness (SEA)). The framing of these three capacities as the awareness system that determines whether the Emotional Somatic Cycle can be observed and completed.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C1: READING EMOTIONS (RE) ─────────────────── */}
          <section
            id="reading-emotions"
            aria-labelledby="heading-reading-emotions"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-reading-emotions"
              style={sectionHeadingStyle}
            >
              Reading Emotions (RE) — Identifying What Others Feel
            </h2>

            <p style={proseStyle}>
              The capacity to read the emotional signals of others — facial expressions, tone of voice, body language, behavioural patterns. Reading Emotions (RE) operates as a two-stage system. The first stage is bottom-up — the amygdala and sensory processing regions extract emotional signals rapidly and automatically, below conscious awareness. This stage fires in milliseconds. The person is already reading before they know they are reading.
            </p>
            <p style={proseStyle}>
              The second stage is top-down — the prefrontal cortex integrates that reading with context, goal, and relationship history, determining what the reading is <em>used for</em>. This is the stage that changes across nervous system states. In Safety & Openness, the prefrontal cortex integrates the reading with curiosity and understanding. In chronic states, it routes the reading through the mode{"'"}s threat lens.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Reading Emotions (RE) does not degrade across activation levels.</strong> The reading stays sharp — often sharpens — as the nervous system moves along the gradient. What changes is not the accuracy of the reading but what the reading serves. This is what makes Reading Emotions (RE) the most biologically robust of the three capacities. It is also what makes chronic states effective and difficult to interrupt from outside — the person in a chronic state is often the most accurate reader in the room. They are using that reading for something other than understanding.
            </p>

            {/* RE Variant Map */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 2.5fr", minWidth: 500 }}>
                <div style={gridHeaderStyle}>Variant</div>
                <div style={gridHeaderStyle}>How It Functions</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Accurate RE</div>
                <div style={gridCellStyle}>The design function. Reads for understanding. Calibrated to truth. Serves connection.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Hypervigilant RE</div>
                <div style={gridCellStyle}>Scanning for survival — reading every signal for threat indicators. The person knows what everyone in the room is feeling before they know it themselves. Exhausting. Accurate at detecting danger, miscalibrated for safety.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Surface-calibrated RE</div>
                <div style={gridCellStyle}>Reading performance, not authenticity. Tracking what people display, not what they feel. Excellent at social navigation, poor at genuine understanding.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Instrumental RE</div>
                <div style={gridCellStyle}>Reading for strategy, compliance, or control. Using emotional data to manage situations or people.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Weaponised RE</div>
                <div style={gridCellStyle}>Reading for leverage and exploitation. Using accurate emotional intelligence to identify vulnerabilities. The most precise reading in the system — in the service of power, not understanding.</div>
              </div>
            </div>

            <p style={proseStyle}>
              All of these are Reading Emotions (RE). They are all the same capacity — reading emotional signals in others. What changes is what the reading serves. A person with weaponised Reading Emotions (RE) is not {"\u201C"}lacking empathy.{"\u201D"} They have one component of it precisely intact and decoupled from the other two. This decoupling is what makes the harm both precise and invisible.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Cognitive empathy:</strong> Baron-Cohen (2003) — cognitive empathy as a distinct, dissociable capacity. <strong style={{ color: TEXT.primary }}>Double dissociation:</strong> Shamay-Tsoory, Aharon-Peretz & Perry (2009) — cognitive and affective empathy dissociable in brain injury. <strong style={{ color: TEXT.primary }}>Pre-conscious reading:</strong> LeDoux (1996) — amygdala processing emotional signals before conscious awareness.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The variant map showing how the same biological reading capacity redirects under different activation levels — from accurate to hypervigilant to instrumental to weaponised — as traceable products of specific nervous system states, not personality types. The identification that Reading Emotions (RE){"'"}s biological robustness is not a sign of empathic functioning but the mechanism that makes chronic states effective.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C2: EMOTIONAL RESONANCE (ER) ──────────────── */}
          <section
            id="emotional-resonance"
            aria-labelledby="heading-emotional-resonance"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-emotional-resonance"
              style={sectionHeadingStyle}
            >
              Emotional Resonance (ER) — Feeling What Others Feel
            </h2>

            <p style={proseStyle}>
              The capacity to feel what another person is feeling — not to register it cognitively, but to experience a version of it in one{"'"}s own body. When someone across the room is in pain, and the body produces a somatic echo of that pain — that is Emotional Resonance (ER). It is the felt dimension of connection.
            </p>
            <p style={proseStyle}>
              Emotional Resonance (ER) requires functioning interoception — the body must be generating legible internal signals for the resonance to register. The anterior insula maps the body{"'"}s internal state and translates others{"'"} expressions into felt somatic experience. The ventral vagal pathways — the co-regulation circuit — carry the relational regulation signal. When safe, they are active. Under threat, they suppress.
            </p>
            <p style={proseStyle}>
              Sustainable Emotional Resonance (ER) means resonating with others while maintaining one{"'"}s own centre — feeling with, without losing oneself. The boundary between self and other is held by Self-Emotional Awareness (SEA) functioning simultaneously: Emotional Resonance (ER) tells the person what the other is feeling; Self-Emotional Awareness (SEA) tells them it is the other person{"'"}s feeling, not their own. When Self-Emotional Awareness (SEA) is absent, this boundary is the first thing to fail.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Emotional Resonance (ER) is the capacity most sensitive to nervous system state.</strong> It is the first of the three to degrade under chronic activation, and the one that degrades most completely.
            </p>

            {/* ER Variant Map */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 2.5fr", minWidth: 500 }}>
                <div style={gridHeaderStyle}>Variant</div>
                <div style={gridHeaderStyle}>How It Functions</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Sustainable ER</div>
                <div style={gridCellStyle}>The design function. Resonates with others while maintaining own centre. Feeling with, without losing oneself. Connection without fusion.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Flooded ER</div>
                <div style={gridCellStyle}>Overwhelmed by others{"'"} emotional states. Absorbs everything. No filter. The boundary between self and other collapses. What appears as deep empathy is structural merger — the person cannot distinguish their own feelings from those of the person in front of them.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Confused / distrusted ER</div>
                <div style={gridCellStyle}>The felt sense is present but has been contradicted by authority. {"\u201C"}I feel that something is wrong, but I{"'"}m told everything is fine.{"\u201D"} The resonance signal exists — the child learned to distrust it.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Shut-down ER</div>
                <div style={gridCellStyle}>Feeling was punished or overwhelmed. The system stopped resonating. Protective shutdown — the body learned that feeling with others was not safe.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Absent ER</div>
                <div style={gridCellStyle}>No felt experience of others{"'"} emotional states. In chronic Power & Dominance, the ventromedial prefrontal cortex (vmPFC) — which carries care, guilt, and consequence signals — is suppressed. Others{"'"} pain registers as information about the environment, not shared experience.</div>
              </div>
            </div>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The critical pattern:</strong> Emotional Resonance (ER) degrades along a trajectory that maps directly onto the gradient. In Safety & Openness, resonance is open. In Threat & Defence, it is filtered — safety takes priority. In Strategy & Management, it is deliberately quieted — the prefrontal cortex suppresses the resonance signal to enable strategic action. In Power & Dominance, it is offline. When the nervous system has full range of movement, all of this modulation is chosen and reversible. In chronic states, the modulation is involuntary.
            </p>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Empathic distress vs compassion:</strong> Singer & Klimecki (2014) — distinction between empathic distress (flooding) and compassion (sustainable resonance). <strong style={{ color: TEXT.primary }}>Vagal pathways:</strong> Porges (2011) — co-regulation circuit suppressed under threat. <strong style={{ color: TEXT.primary }}>Right-brain regulation:</strong> Schore (2003) — right-brain relational regulation and its developmental trajectory.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The variant map for Emotional Resonance (ER) showing flooded, confused, shut-down, and absent resonance as traceable products of developmental and activation conditions — not personality traits. The identification of Emotional Resonance (ER) as the most state-sensitive capacity, with a degradation trajectory that maps directly onto the four-state gradient. The mechanism: the boundary between self and other in resonance is maintained by Self-Emotional Awareness (SEA), not by Emotional Resonance (ER) itself — which explains why flooded Emotional Resonance (ER) co-occurs with absent Self-Emotional Awareness (SEA).
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C3: SELF-EMOTIONAL AWARENESS (SEA) ────────── */}
          <section
            id="self-emotional-awareness"
            aria-labelledby="heading-self-emotional-awareness"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-self-emotional-awareness"
              style={sectionHeadingStyle}
            >
              Self-Emotional Awareness (SEA) — Knowing What You Yourself Feel
            </h2>

            <p style={proseStyle}>
              The capacity to identify, name, and trust one{"'"}s own emotional states — including the drives that are not visible as emotions. The capacity to have a feeling without being consumed by it. To notice an internal state and say {"\u201C"}this is what I feel{"\u201D"} rather than {"\u201C"}this is what I am.{"\u201D"}
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Self-Emotional Awareness (SEA) is the keystone of the awareness system.</strong> Without it, the other two capacities lose their anchor.
            </p>
            <p style={proseStyle}>
              Without Self-Emotional Awareness (SEA), Reading Emotions (RE) is unanchored. The person can read others with extreme accuracy but has no internal reference point. They know what everyone else feels but not what they feel. Reading Emotions (RE) without Self-Emotional Awareness (SEA) produces hypervigilance, instrumental reading, or enmeshment — the reading serves the mode, not the person.
            </p>
            <p style={proseStyle}>
              Without Self-Emotional Awareness (SEA), Emotional Resonance (ER) is unfiltered. The person resonates with everything but cannot distinguish their own states from others{"'"}. They feel everything and attribute it to themselves. Emotional Resonance (ER) without Self-Emotional Awareness (SEA) produces flooding, confusion, and emotional exhaustion.
            </p>
            <p style={proseStyle}>
              Without Self-Emotional Awareness (SEA), the cycle completion mechanism mapped in M3 has no endpoint. The body processes the activation — but toward what resting state? Self-Emotional Awareness (SEA) provides the internal reference point that baseline is measured against. Without it, there is nothing to come back to. The compass needle has no home.
            </p>

            <h3 style={h3Style}>How Self-Emotional Awareness (SEA) Becomes Invisible in Chronic States</h3>
            <p style={proseStyle}>
              Two distinct mechanisms produce the loss of Self-Emotional Awareness (SEA), and the distinction matters:
            </p>
            <p style={proseStyle}>
              First — under chronic activation, the body{"'"}s signals become habitual background noise. They are no longer flagged as information because the activated state has become the baseline. In chronic Threat & Defence, the alarm is constant and therefore invisible — there is nothing to contrast it against. The person does not know they are activated because they have never experienced not being activated.
            </p>
            <p style={proseStyle}>
              Second — the prefrontal cortex{"'"}s processing of interoceptive signals is blocked by persistent cortisol elevation and sympathetic dominance. The body is still generating signals. The channel that would receive them is closed.
            </p>
            <p style={proseStyle}>
              In either case, the activated state stops being legible as an activated state. It is experienced as identity. The person in chronic Strategy & Management does not experience their mode as a mode — they experience it as rationality, competence, being the responsible one. The person in chronic Power & Dominance does not experience fear driving the system — they experience certainty, strength, decisiveness.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The capacity needed to observe the mode is the capacity the mode disables. Self-Emotional Awareness (SEA) absence makes the mode invisible from inside — the person cannot see the pattern because seeing the pattern requires the capacity the pattern has taken offline.
            </OperationalStatement>

            {/* SEA Online vs Offline */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 2.5fr", minWidth: 500 }}>
                <div style={gridHeaderStyle}>State</div>
                <div style={gridHeaderStyle}>How It Functions</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Online SEA</div>
                <div style={gridCellStyle}>The design function. Internal experience is readable, nameable, trustworthy. The person can say: {"\u201C"}I feel angry, and I know that is anger, and I trust that signal.{"\u201D"} They can have the feeling without being consumed by it.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Absent SEA</div>
                <div style={gridCellStyle}>No access to one{"'"}s own emotional states — including drives that are not visible as emotions. Cognition runs the narrative while the body is flooded with signals the person cannot identify or name.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Narrative-filtered SEA</div>
                <div style={gridCellStyle}>Partially online but filtered through a contradicting story. The person senses something — {"\u201C"}I think I{"'"}m upset{"\u201D"} — but the narrative overrides: {"\u201C"}That doesn{"'"}t make sense, I shouldn{"'"}t feel that way.{"\u201D"} Present but subordinated to the false coherence that manages what the emerging awareness threatens.</div>
              </div>
            </div>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Interoceptive awareness:</strong> Craig (2002) — interoceptive awareness as the substrate of emotional self-awareness. <strong style={{ color: TEXT.primary }}>Self-referential processing:</strong> Damasio (1999) — the feeling of what happens: self-referential emotional processing. <strong style={{ color: TEXT.primary }}>Levels of awareness:</strong> Lane & Schwartz (1987) — levels of emotional awareness as a developmental capacity.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Self-Emotional Awareness (SEA) identified as the keystone capacity — its presence or absence determining whether Reading Emotions (RE) and Emotional Resonance (ER) serve understanding or serve the mode. The paradox formulation: the capacity needed to observe the mode is the capacity the mode disables. The two distinct mechanisms of loss (habituation and channel blockage) as clinically relevant — different routes to absence requiring different repair conditions. The identification that Self-Emotional Awareness (SEA) is structurally absent in all four chronic positions, including chronic Safety & Openness.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C4: THE MULTIPLICATIVE SYSTEM ─────────────── */}
          <section
            id="multiplicative-system"
            aria-labelledby="heading-multiplicative-system"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-multiplicative-system"
              style={sectionHeadingStyle}
            >
              The Multiplicative System
            </h2>

            <p style={proseStyle}>
              The three capacities are not additive. They are multiplicative: RE × ER × SEA. All three can be present and the product is still zero if any one is gone. This relationship is not metaphorical — it reflects how the underlying circuits interact.
            </p>

            {/* Multiplicative Combinations Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 2.5fr", minWidth: 500 }}>
                <div style={gridHeaderStyle}>Configuration</div>
                <div style={gridHeaderStyle}>What It Produces</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>RE without SEA</div>
                <div style={gridCellStyle}>A scanner that serves the mode. The reading is accurate. It is purposeful. It operates entirely in service of a state the person cannot see. The paradox of partial capacity: each component works, the product does not.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>ER without SEA</div>
                <div style={gridCellStyle}>Resonance without boundary. In Safety & Openness, this manifests as fusion — the person feels everything but cannot tell what is theirs. In other chronic positions, Emotional Resonance (ER) shuts down entirely — the system chose absence over flooding.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>RE without ER</div>
                <div style={gridCellStyle}>A reader who sees but does not feel. In Safety & Openness: accurate and disconnected. In chronic Power & Dominance: the most dangerous configuration in the system — someone who reads vulnerability with perfect accuracy and has no somatic echo of what the use of that reading costs.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>SEA without ER</div>
                <div style={gridCellStyle}>Structurally possible in Strategy & Management and Power & Dominance. The person knows their resonance is turned down. This is only possible because Self-Emotional Awareness (SEA) is intact — it is the self-referential capacity that makes deliberate modulation different from involuntary loss.</div>
              </div>
            </div>

            <p style={proseStyle}>
              The multiplier effect explains why the gradient positions look the way they do. Self-Emotional Awareness (SEA){"'"}s presence does not guarantee anything — but its absence guarantees that Reading Emotions (RE) and Emotional Resonance (ER) will serve the mode rather than the person.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The most dangerous configurations are not the ones with the least capacity — they are the ones with the most Reading Emotions (RE) and the least Self-Emotional Awareness (SEA).
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Interacting systems:</strong> Decety & Jackson (2004) — empathy as requiring the interaction of multiple components, not their sum. <strong style={{ color: TEXT.primary }}>Dissociable but interacting:</strong> Shamay-Tsoory et al. (2009) — cognitive and affective empathy as dissociable but interacting systems. Blair (2005) — selective empathy deficits producing qualitatively different outcomes depending on which components are intact.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The multiplicative framing (RE × ER × SEA) as the reason partial capacity produces distortion, not partial empathy. The specific predictions: Reading Emotions (RE) without Self-Emotional Awareness (SEA) serves the mode; Emotional Resonance (ER) without Self-Emotional Awareness (SEA) floods or shuts down; Reading Emotions (RE) without Emotional Resonance (ER) produces precision without feeling. The identification that the most dangerous configurations have the most Reading Emotions (RE) and the least Self-Emotional Awareness (SEA).
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 2: HOW AWARENESS DEVELOPS                  */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 2" title="How Awareness Develops" />

          {/* ─── C5: THREE CAPACITIES CONNECTED AT BIRTH ───── */}
          <section
            id="awareness-develops"
            aria-labelledby="heading-awareness-develops"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-awareness-develops"
              style={sectionHeadingStyle}
            >
              Three Capacities Connected at Birth
            </h2>

            <p style={proseStyle}>
              At birth, the emotional-somatic system is the only information system online. The infant already has the biological precursors of all three awareness capacities, operating as a single integrated system:
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Proto-RE:</strong> the infant tracks faces, responds to tone, orients toward emotional signals. Mirroring is automatic. The baby reads before it knows it is reading.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Proto-ER:</strong> the infant feels with others before knowing why. Emotional contagion is present from the start. When the caregiver is calm, the infant calms. When the caregiver is distressed, the infant registers distress.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Proto-SEA:</strong> the body registers states — hunger, discomfort, safety, distress — as raw sensation. There is no observing self to name them, but the signals exist. The body is already communicating.
            </p>
            <p style={proseStyle}>
              This connected state — all three proto-capacities online and integrated — is what people remember when they say {"\u201C"}when I was a kid, I was just <em>me</em>.{"\u201D"} Not a memory of a different person hidden underneath. A memory of a capacity state — the three awarenesses connected before anything redirected them.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Being yourself is not a personality. It is what happens when the three capacities are connected.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Neonatal imitation:</strong> Meltzoff & Moore (1977) — evidence of proto-RE. <strong style={{ color: TEXT.primary }}>Neonatal contagion:</strong> Field, Woodson, Greenberg & Cohen (1982) — neonatal emotional contagion. <strong style={{ color: TEXT.primary }}>Primary intersubjectivity:</strong> Trevarthen (1979) — the relational starting point.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The three proto-capacities as a unified starting point — not three separate skills to develop but an integrated system that was online before anything redirected it. The reframe of {"\u201C"}being yourself{"\u201D"} from a personality concept to a capacity state — the three awarenesses connected.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C6: THE PRE-SEA CONDITION ──────────────────── */}
          <section
            id="pre-sea-condition"
            aria-labelledby="heading-pre-sea-condition"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-pre-sea-condition"
              style={sectionHeadingStyle}
            >
              The Pre-SEA Condition — Feeling = Being
            </h2>

            <p style={proseStyle}>
              Before cognition develops, there is no observing self. No separation between experience and identity.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Feeling = being.</strong> A child does not think {"\u201C"}I feel scared{"\u201D"} — the child <em>is</em> scared.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Feedback = identity.</strong> A child does not think {"\u201C"}my caregiver is dysregulated{"\u201D"} — the child experiences {"\u201C"}something is wrong with me.{"\u201D"}
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>How I{"'"}m treated = who I am.</strong> The treatment becomes identity in the absence of an observing self that could separate them.
            </p>
            <p style={proseStyle}>
              This is the pre-SEA condition — the normal developmental starting point before Self-Emotional Awareness (SEA) has had conditions to form. Every human begins here. The question is whether the environment provides sufficient conditions for Self-Emotional Awareness (SEA) to develop — for the child to eventually make the separation between {"\u201C"}this is what I feel{"\u201D"} and {"\u201C"}this is what is happening around me.{"\u201D"}
            </p>
            <p style={proseStyle}>
              When Self-Emotional Awareness (SEA) develops, the child gains an observing position. They can feel something without <em>being</em> it. They can receive feedback without absorbing it as identity. When Self-Emotional Awareness (SEA) does not develop — when conditions do not support its emergence — the pre-SEA condition persists into adulthood. The adult may be cognitively sophisticated, professionally successful, psychologically literate — and still operating from Feeling = Being underneath. When they feel inadequate, they <em>are</em> inadequate. When they receive criticism, they <em>are</em> the criticism.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The pre-SEA condition persisting into adulthood is one of the most consequential outcomes in the system — because it is invisible. The adult does not know Self-Emotional Awareness (SEA) is offline, because they have never experienced it being online.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>True/false self:</strong> Winnicott (1960) — developmental outcomes of early relational conditions. <strong style={{ color: TEXT.primary }}>Sense of self:</strong> Stern (1985) — development of the sense of self through stages. <strong style={{ color: TEXT.primary }}>Mentalization:</strong> Fonagy, Gergely, Jurist & Target (2002) — mentalization as a developmental achievement requiring specific relational conditions.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The pre-SEA condition as a named developmental state — normal at birth, consequential when it persists — with the specific mechanism of persistence: Self-Emotional Awareness (SEA) never developed because conditions were absent. The distinction between a capacity that was lost and one that was never built. The identification that the pre-SEA condition{"'"}s invisibility (the person doesn{"'"}t know they don{"'"}t have Self-Emotional Awareness (SEA)) is its most consequential feature.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C7: AWARENESS TEACHES AWARENESS ───────────── */}
          <section
            id="awareness-teaches-awareness"
            aria-labelledby="heading-awareness-teaches-awareness"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-awareness-teaches-awareness"
              style={sectionHeadingStyle}
            >
              Awareness Teaches Awareness — The Developmental Mechanism
            </h2>

            <p style={proseStyle}>
              The organising principle of the entire awareness system. How do the three capacities develop? Through what mechanism?
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The adults{"'"} awareness capacities create the child{"'"}s developmental environment. The environment shapes the child{"'"}s awareness capacities.</strong> This is the mechanism. Not instruction. Not intention. Not love. Embodiment.
            </p>
            <p style={proseStyle}>
              A caregiver with online Self-Emotional Awareness (SEA) — who can access, name, and trust their own emotional states — creates an environment where the child{"'"}s emotional states are received, reflected accurately, and validated. The child{"'"}s proto-SEA has conditions to develop into full Self-Emotional Awareness (SEA).
            </p>
            <p style={proseStyle}>
              A caregiver with absent Self-Emotional Awareness (SEA) creates an environment where the child{"'"}s emotional states are unrecognised, misread, or overridden. The child{"'"}s signals either go unmet or get met with the caregiver{"'"}s own displaced material. Self-Emotional Awareness (SEA) does not develop — not because the child is incapable, but because the conditions were absent.
            </p>

            {/* Transmission Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 2fr", minWidth: 500 }}>
                <div style={gridHeaderStyle}>If the Adult Has...</div>
                <div style={gridHeaderStyle}>The Child Absorbs...</div>

                <div style={gridCellStyle}>Accurate Reading Emotions (RE)</div>
                <div style={gridCellStyle}>A model of emotional reading in service of understanding</div>

                <div style={gridCellStyle}>Hypervigilant Reading Emotions (RE)</div>
                <div style={gridCellStyle}>A model of emotional reading in service of survival</div>

                <div style={gridCellStyle}>Sustainable Emotional Resonance (ER)</div>
                <div style={gridCellStyle}>A model of emotional resonance that includes self-care</div>

                <div style={gridCellStyle}>Flooded Emotional Resonance (ER)</div>
                <div style={gridCellStyle}>A model where others{"'"} emotions swamp one{"'"}s own</div>

                <div style={gridCellStyle}>Online Self-Emotional Awareness (SEA)</div>
                <div style={gridCellStyle}>A model of being able to name and trust one{"'"}s own feelings</div>

                <div style={gridCellStyle}>Absent Self-Emotional Awareness (SEA)</div>
                <div style={gridCellStyle}>No model of internal emotional access</div>
              </div>
            </div>

            <OperationalStatement color={MODEL_COLOR}>
              Love does not override what the nervous system embodies. What transmits is what the nervous system carries, not what the heart intends.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Right-brain development:</strong> Schore (2003) — the caregiver{"'"}s regulatory state shaping the child{"'"}s developing right hemisphere. <strong style={{ color: TEXT.primary }}>Mentalization:</strong> Fonagy et al. (2002) — mentalization developing through being mentalized. <strong style={{ color: TEXT.primary }}>Mutual regulation:</strong> Tronick (2007) — the quality of moment-to-moment emotional exchange shaping the infant{"'"}s regulatory repertoire.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Awareness teaches awareness as a named, testable transmission mechanism — making the developmental pathway concrete. The specific prediction: each capacity variant the adult carries predicts the corresponding variant the child develops. Not instruction, not intention, not love. What the nervous system embodies is what transmits.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C8: CO-REGULATION ──────────────────────────── */}
          <section
            id="co-regulation"
            aria-labelledby="heading-co-regulation"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-co-regulation"
              style={sectionHeadingStyle}
            >
              Co-Regulation — How the Body Learns to Complete the Cycle
            </h2>

            <p style={proseStyle}>
              Children are born with the biological capacity for regulation. They are not born with the ability to regulate. The difference is co-regulation — and this concept is the bridge between M4 and M3.
            </p>
            <p style={proseStyle}>
              Co-regulation is the caregiver{"'"}s regulated nervous system teaching the child{"'"}s nervous system how to complete the activation cycle and reach baseline. The child is distressed. The caregiver{"'"}s system — through tone, rhythm, touch, breath, presence — sends safety signals. The child{"'"}s system synchronises. The activation settles. The child learns: <em>the activation can complete. Baseline is reachable.</em>
            </p>
            <p style={proseStyle}>
              Through thousands of repetitions, this capacity becomes internalised. What was co-regulation becomes self-regulation — the child{"'"}s own capacity to complete the Activation Sequence (M3) and reach baseline. Not a skill taught through instruction. A capacity built through experience.
            </p>

            {/* Co-Regulation Disruptions Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 2fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>Disruption</div>
                <div style={gridHeaderStyle}>Adult Configuration</div>
                <div style={gridHeaderStyle}>What the Child Learns</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Disrupted regulation</div>
                <div style={gridCellStyle}>Emotionally unpredictable — sometimes co-regulates, sometimes dysregulates</div>
                <div style={gridCellStyle}>{"\u201C"}Sometimes the activation completes, sometimes it doesn{"'"}t. I cannot predict.{"\u201D"} → Unreliable cycle completion.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Misdirected regulation</div>
                <div style={gridCellStyle}>Emotionally incongruent — co-regulation available but leads to compliance, not safety</div>
                <div style={gridCellStyle}>{"\u201C"}The activation can settle — but only if I become what they need me to be.{"\u201D"} → Cycle completes to the wrong destination.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Blocked regulation</div>
                <div style={gridCellStyle}>Emotional invalidation — the departure itself is forbidden</div>
                <div style={gridCellStyle}>{"\u201C"}There is no departure. Do not feel. Do not signal.{"\u201D"} → No cycle to complete.</div>
              </div>
            </div>

            <p style={proseStyle}>
              Each disruption produces a specific relationship to the Emotional Somatic Cycle. Disrupted regulation produces a person who knows the cycle can complete but cannot rely on it. Misdirected regulation produces a person who learned cycle completion — but to compliance, not to baseline. Blocked regulation produces a person who never learned there was a cycle at all.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The caregiver{"'"}s capacity to regulate IS the child{"'"}s regulatory environment. A caregiver who can regulate provides co-regulation. A caregiver who cannot provides co-dysregulation.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Co-regulation:</strong> Porges (2011) — co-regulation as the mammalian primary regulation pathway, operating through the ventral vagal complex. <strong style={{ color: TEXT.primary }}>Hidden regulators:</strong> Hofer (1984) — the mother as hidden regulator of the infant{"'"}s physiology. <strong style={{ color: TEXT.primary }}>Attachment as regulation:</strong> Bowlby (1969) — attachment as the relational regulation system.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Co-regulation as the mechanism linking M4 (awareness capacities) to M3 (regulation). The three disruptions mapped as specific developmental conditions — each producing a specific relationship to the Emotional Somatic Cycle. The formulation: the caregiver{"'"}s capacity to regulate IS the child{"'"}s regulatory environment.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 3: WHAT THE CONFIGURATION PRODUCES         */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 3" title="What the Configuration Produces" />

          {/* ─── C9: CAPACITY CONFIGURATION ─────────────────── */}
          <section
            id="capacity-configuration"
            aria-labelledby="heading-capacity-configuration"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-capacity-configuration"
              style={sectionHeadingStyle}
            >
              Capacity Configuration — The Pattern That Becomes Personality
            </h2>

            <p style={proseStyle}>
              The specific combination of Reading Emotions (RE), Emotional Resonance (ER), Self-Emotional Awareness (SEA), and regulation a person carries is their capacity configuration. This configuration is not personality. It is the product of the awareness environment the person developed in — which capacities had conditions to develop, which were redirected, and which were never built.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Configuration → chronic mode → identity.</strong> This is the causal chain. The capacity configuration predicts the chronic mode. The chronic mode shapes what cognition narrates. What cognition narrates becomes personality.
            </p>

            {/* Configuration Prediction Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1.2fr 1.8fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>Configuration</div>
                <div style={gridHeaderStyle}>Predicted Chronic State</div>
                <div style={gridHeaderStyle}>What It Looks Like</div>

                <div style={gridCellStyle}>Sharp RE, absent ER, absent SEA</div>
                <div style={gridCellStyle}>Chronic Strategy & Management or Power & Dominance</div>
                <div style={gridCellStyle}>Reads everyone accurately, feels nothing, no internal reference. Strategic, effective, disconnected.</div>

                <div style={gridCellStyle}>Hypervigilant RE, flooded ER, absent SEA</div>
                <div style={gridCellStyle}>Chronic Threat & Defence</div>
                <div style={gridCellStyle}>Reads threat everywhere, feels everything, cannot locate own states. Anxious, exhausted, overwhelmed.</div>

                <div style={gridCellStyle}>Surface-calibrated RE, shut-down ER, narrative-filtered SEA</div>
                <div style={gridCellStyle}>Chronic Strategy & Management</div>
                <div style={gridCellStyle}>Reads performance, feels little, has partial but overridden self-awareness. Functional, managed, successful-looking.</div>

                <div style={gridCellStyle}>Accurate RE, sustainable ER, online SEA</div>
                <div style={gridCellStyle}>Fluid compass — baseline as home</div>
                <div style={gridCellStyle}>Reads accurately, feels sustainably, knows own states. Can move through all four states and reach baseline.</div>
              </div>
            </div>

            <OperationalStatement color={MODEL_COLOR}>
              Personality is not a type — it is a record of which capacities had conditions to develop and which didn{"'"}t.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Mentalization and functioning:</strong> Fonagy et al. (2002) — mentalizing capacity as a predictor of relational and emotional functioning. <strong style={{ color: TEXT.primary }}>Dimensional personality:</strong> Luyten, Campbell, Allison & Fonagy (2020) — dimensional approach to personality based on mentalizing capacity. <strong style={{ color: TEXT.primary }}>Interpersonal neurobiology:</strong> Siegel (2012) — the mind develops through relationships, producing specific patterns.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Capacity configuration as the predictive unit — RE state × ER state × SEA state × regulation capacity = predicted compass behaviour, chronic mode, identity, and relational patterns. The causal chain: configuration → chronic mode → identity. The reframe: personality is not a type but a record of developmental conditions for awareness.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C10: TRUE AND FALSE COHERENCE ──────────────── */}
          <section
            id="true-false-coherence"
            aria-labelledby="heading-true-false-coherence"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-true-false-coherence"
              style={sectionHeadingStyle}
            >
              True Coherence and False Coherence
            </h2>

            <p style={proseStyle}>
              When all three capacities are online and the body has learned to complete the cycle, the person has access to the full information set. What cognition builds with this complete data is <strong style={{ color: TEXT.primary }}>true coherence</strong> — a narrative that aligns with felt experience. The story matches what the body knows.
            </p>
            <p style={proseStyle}>
              When the capacities are incomplete — when Self-Emotional Awareness (SEA) is absent, or Emotional Resonance (ER) is shut down, or Reading Emotions (RE) is redirected for survival — cognition builds with whatever is available. It generates a stable narrative from incomplete data. That narrative feels true — because cognition is the system that constructs what the person experiences as reality. But it replaces the emotional signals it cannot process. This is <strong style={{ color: TEXT.primary }}>false coherence</strong> — a stable-but-untrue narrative that serves regulation at the cost of truth.
            </p>

            {/* True vs False Coherence Table */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1.5fr", minWidth: 600 }}>
                <div style={gridHeaderStyle}>&nbsp;</div>
                <div style={gridHeaderStyle}>True Coherence</div>
                <div style={gridHeaderStyle}>False Coherence</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Data source</div>
                <div style={gridCellStyle}>All three capacities + regulation</div>
                <div style={gridCellStyle}>Incomplete capacity set + cognitive replacement</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Narrative</div>
                <div style={gridCellStyle}>Aligned with felt experience</div>
                <div style={gridCellStyle}>Replaces felt experience</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Feels like</div>
                <div style={gridCellStyle}>{"\u201C"}This is complex and I can hold it{"\u201D"}</div>
                <div style={gridCellStyle}>{"\u201C"}This is clear and I know who I am{"\u201D"}</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Function</div>
                <div style={gridCellStyle}>Understanding</div>
                <div style={gridCellStyle}>Regulation</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Cost</div>
                <div style={gridCellStyle}>Complexity (must hold more)</div>
                <div style={gridCellStyle}>Truth (must suppress more)</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Flexibility</div>
                <div style={gridCellStyle}>Can update when new information arrives</div>
                <div style={gridCellStyle}>Resists update — updating threatens regulation</div>
              </div>
            </div>

            <p style={proseStyle}>
              False coherence is not deception. It is cognition doing what the body was never taught to do. The person is regulated. The cost is truth.
            </p>
            <p style={proseStyle}>
              The most important distinction: false coherence often looks more put-together than true coherence. The person running false coherence has a clear narrative, a consistent identity, a well-articulated self-understanding. The person developing true coherence is messy, contradictory, uncertain, and struggling to hold complexity. <strong style={{ color: TEXT.primary }}>The smooth story should worry more than the messy one.</strong> The smooth one may be false coherence performing integration. The messy one may be someone learning to hold complexity.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              False coherence is not deception — it is regulation at the cost of truth. The smooth story should worry more than the messy one.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Coherent narrative:</strong> Main & Goldwyn (1998) — coherent narrative as a marker of earned security in the Adult Attachment Interview, requiring integration of felt experience. <strong style={{ color: TEXT.primary }}>Cognitive dissonance:</strong> Festinger (1957) — the drive toward coherent narrative. <strong style={{ color: TEXT.primary }}>Coherence-seeking:</strong> Kahneman (2011) — coherence-seeking as a fundamental cognitive process that builds plausible stories from available data, regardless of completeness.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  True coherence and false coherence as products of the capacity configuration — true coherence requiring all three capacities online, false coherence as cognition building with incomplete data. The clinical identification: false coherence often appears healthier than true coherence, because the narrative is smooth while the underlying data is suppressed. The formulation: false coherence is not deception — it is regulation at the cost of truth.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C11: TOLERANCE THRESHOLDS ──────────────────── */}
          <section
            id="tolerance-thresholds"
            aria-labelledby="heading-tolerance-thresholds"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-tolerance-thresholds"
              style={sectionHeadingStyle}
            >
              Tolerance Thresholds
            </h2>

            <p style={proseStyle}>
              The nervous system calibrates a baseline for what to endure. This calibration happens through the developmental conditions — through what the adults{"'"} configuration normalised.
            </p>
            <p style={proseStyle}>
              A child who grew up with a caregiver whose Emotional Resonance (ER) was flooded and Self-Emotional Awareness (SEA) was absent learns: this level of emotional overwhelm is normal. A child whose emotional signals were consistently invalidated learns: my feelings don{"'"}t count. The threshold becomes the set point. What was endured becomes what is tolerated.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The most consequential configuration for tolerance thresholds: flooded Emotional Resonance (ER) + absent Self-Emotional Awareness (SEA).</strong> The person feels the harm — Emotional Resonance (ER) is online, they feel everything. But they cannot locate it as harm — Self-Emotional Awareness (SEA) is offline, they cannot name what they feel or attribute it correctly. They feel terrible and don{"'"}t know why. Or they know something is wrong but can{"'"}t identify what. The body is communicating and the person has no translation.
            </p>
            <p style={proseStyle}>
              This mechanism explains why a person can be in a condition that would be immediately recognisable to an outside observer — and genuinely not see it themselves. The threshold was calibrated before cognition arrived. The calibrated baseline is pre-cognitive. It operates below the level at which insight can touch it.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Familiar can feel {"\u201C"}normal{"\u201D"} even when it is costly. The calibration is pre-cognitive — which is why insight alone does not move it.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Internal working models:</strong> Bowlby (1969) — calibrating expectations of relationship quality. <strong style={{ color: TEXT.primary }}>Body and memory:</strong> van der Kolk (2014) — the body maintaining calibrated baselines below conscious awareness. <strong style={{ color: TEXT.primary }}>Implicit memory:</strong> Siegel (2012) — implicit memory shaping tolerance for relational and emotional conditions without conscious recall.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Tolerance thresholds as a named mechanism linking the capacity configuration to what the person can and cannot recognise as harm. The specific identification of flooded Emotional Resonance (ER) + absent Self-Emotional Awareness (SEA) as the configuration that maximises endurance of harmful conditions — the person feels the cost somatically while being unable to identify it cognitively. The formulation: the calibration is pre-cognitive, which is why insight alone does not move it.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* PART 4: THE CYCLE COMPLETES                     */}
          {/* ════════════════════════════════════════════════ */}

          <PartDivider label="PART 4" title="The Cycle Completes" />

          {/* ─── C12: GENERATIONAL REPLICATION ──────────────── */}
          <section
            id="generational-replication"
            aria-labelledby="heading-generational-replication"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-generational-replication"
              style={sectionHeadingStyle}
            >
              Generational Replication
            </h2>

            <p style={proseStyle}>
              Awareness teaches awareness — and this mechanism does not stop after one generation. What the adult{"'"}s nervous system embodies is what the child absorbs. What the child absorbs becomes what they embody as an adult. What they embody as an adult is what the next child absorbs.
            </p>
            <p style={proseStyle}>
              The chain transmits through the nervous system, not through words. A parent can say {"\u201C"}your feelings matter{"\u201D"} while their own Self-Emotional Awareness (SEA) is absent — and the child absorbs the absence, not the words. A parent can explain healthy boundaries while their own tolerance thresholds are calibrated to endure harm — and the child calibrates to the endurance, not the explanation.
            </p>
            <p style={proseStyle}>
              This is why generational patterns persist despite intention, education, and love. The transmission pathway is somatic — it runs through the same two information systems M2 mapped. The emotional-somatic system learns through experience, not explanation. What the child experiences is the adult{"'"}s configuration. What the adult explains is cognition narrating over the top.
            </p>
            <p style={proseStyle}>
              When an entire culture performs blocked regulation — {"\u201C"}boys don{"'"}t cry,{"\u201D"} {"\u201C"}be strong,{"\u201D"} {"\u201C"}don{"'"}t make a scene,{"\u201D"} {"\u201C"}that didn{"'"}t hurt{"\u201D"} — the invalidation is no longer experienced as a specific adult{"'"}s limitation. It is experienced as reality. The culture does not produce the condition. The condition produces the culture. And the culture reproduces the condition.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The chain replicates until awareness changes, not just behaviour. The condition produces the culture, not the reverse.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Intergenerational attachment:</strong> Main & Hesse (1990) — intergenerational transmission of attachment patterns. <strong style={{ color: TEXT.primary }}>Epigenetic transmission:</strong> Yehuda et al. (2014) — epigenetic transmission of stress-response calibration. Meaney (2001) — maternal care altering offspring stress reactivity through epigenetic mechanisms.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  Generational replication as the downstream consequence of awareness teaches awareness — operating across generations, not just within one. The identification that the chain runs through the somatic transmission pathway (M2: two information systems), which is why words and intentions cannot interrupt it. The formulation: the condition produces the culture, not the reverse.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C13: REPAIR ────────────────────────────────── */}
          <section
            id="repair"
            aria-labelledby="heading-repair"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-repair"
              style={sectionHeadingStyle}
            >
              Repair — Developing What Was Missing
            </h2>

            <p style={proseStyle}>
              The three awareness capacities were not damaged. They were not developed. This distinction changes everything about repair.
            </p>
            <p style={proseStyle}>
              The adult who never had conditions for Self-Emotional Awareness (SEA) to develop can develop it now. The adult whose Emotional Resonance (ER) was shut down can reconnect it. The adult whose Reading Emotions (RE) was redirected for survival can redirect it for understanding. But one distinction must be made first:
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Chronic suppression</strong> means the capacities developed — partially or fully — and then went offline under chronic activation. The pathway exists but is blocked. Recovery is unblocking: safety long enough for the suppression to lift and the existing pathway to reopen.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Developmental absence</strong> means the capacities never developed. The conditions that build them — being regulated with, having signals received, having cycles complete through co-regulation — were never present. The pathway does not exist yet. Recovery is building: co-regulation that builds the pathway for the first time. Both require safety and time. The second requires more of both.
            </p>

            {/* Five Conditions for Repair */}
            <h3 style={h3Style}>Five Conditions for Repair</h3>
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2.5fr", minWidth: 500 }}>
                <div style={gridHeaderStyle}>Condition</div>
                <div style={gridHeaderStyle}>What It Means</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Safety</div>
                <div style={gridCellStyle}>The nervous system must evaluate {"\u201C"}safe enough to risk change.{"\u201D"} Repair cannot happen under threat — because the system will prioritise regulation over development.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Relational support</div>
                <div style={gridCellStyle}>New co-regulatory experiences. The nervous system needs to learn cycle completion through being regulated with — the same mechanism that would have built it originally.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Identity flexibility</div>
                <div style={gridCellStyle}>False coherence must loosen enough for new data to enter. This is the hardest part — because loosening false coherence means losing the regulation it provided.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Time</div>
                <div style={gridCellStyle}>Capacities develop through repeated experience, not single insight. The back-and-forth between old patterns and new capacity is not the problem — it is the process.</div>

                <div style={{ ...gridCellStyle, fontWeight: 600, color: TEXT.primary }}>Structural conditions</div>
                <div style={gridCellStyle}>The environment must not re-wound. Individual repair has limited impact when the person goes back daily to conditions that require chronic masking or exceed their nervous system{"'"}s capacity.</div>
              </div>
            </div>

            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>Self-Emotional Awareness (SEA) is the last capacity to come back — and its reappearance is the mechanism of change.</strong> As Self-Emotional Awareness (SEA) gradually develops, the person starts catching glimpses of their own patterns from inside — not as insight delivered from outside, but as felt recognition: {"\u201C"}I can feel that I{"'"}m doing this.{"\u201D"} That felt recognition IS Self-Emotional Awareness (SEA) developing.
            </p>
            <p style={proseStyle}>
              The chronic mode does not vanish. It becomes less invisible. The person starts to see it while it{"'"}s running. Over time, they can interrupt it earlier. Over more time, the biology shifts and the mode loosens. As Self-Emotional Awareness (SEA) comes back online, the other capacities shift with it. Reading Emotions (RE) shifts what it serves — the reading was always accurate; with Self-Emotional Awareness (SEA) present, the person can see what the reading is being used for. Emotional Resonance (ER) can begin to function without flooding or absence — the boundary between self and other, which Self-Emotional Awareness (SEA) maintains, starts to hold.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>This generates its own paradox:</strong> emerging awareness surfaces previously invisible contradictions. The person feels worse precisely because they are getting better. Pain that was always present but unfelt now becomes felt. The experience is one of deterioration while the biology is one of recovery.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              Not undoing the past — developing what the past didn{"'"}t provide conditions for. You cannot think your way into Self-Emotional Awareness (SEA). You can only experience your way there.
            </OperationalStatement>

            <div style={expandableRowStyle}>
              <ExpandableSection title="Research Traditions" type="opendata">
                <p style={expandedProseStyle}>
                  <strong style={{ color: TEXT.primary }}>Developable mentalizing:</strong> Fonagy et al. (2002) — mentalizing capacity as developable in adulthood through relational experience. <strong style={{ color: TEXT.primary }}>Innate completion:</strong> Levine (1997) — the innate completion capacity persisting despite chronic activation. <strong style={{ color: TEXT.primary }}>Lifelong co-regulation:</strong> Porges (2011) — co-regulation as available throughout the lifespan, not limited to development.
                </p>
              </ExpandableSection>

              <ExpandableSection title="What TEG-Blue Adds" type="opendata">
                <p style={expandedProseStyle}>
                  The chronic suppression vs developmental absence distinction as the clinically critical differential — determining whether repair is unblocking (the pathway exists) or building (it does not). The five conditions for repair connected to the full Emotional Somatic Cycle architecture: safety (M2{"'"}s state), relational support (M3{"'"}s co-regulation), identity flexibility (false coherence from C10), time (M3{"'"}s biological timescales), structural conditions (M3{"'"}s environmental requirements). The paradox of recovery: getting better feels like getting worse because awareness surfaces what was previously unfelt.
                </p>
              </ExpandableSection>
            </div>
          </section>

          {/* ─── C14: THE CYCLE COMPLETES ───────────────────── */}
          <section
            id="cycle-completes"
            aria-labelledby="heading-cycle-completes"
            style={{ marginBottom: 48 }}
          >
            <h2
              id="heading-cycle-completes"
              style={sectionHeadingStyle}
            >
              The Cycle Completes
            </h2>

            <p style={proseStyle}>
              M4 is the final model. The full Emotional Somatic Cycle is now visible.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The signal fires</strong> (M1). The nervous system detects something — threat, safety, loss, connection, boundary crossed — and generates a biological message. Sixteen signals, each carrying a specific finding. Each needing specific conditions to resolve.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The state shifts</strong> (M2). The signal produces a nervous system state. The entire system reorganises — perception, cognition, empathy, relational capacity — around the finding. The mode changes what the person can see, think, feel, and do. The filter is set before any thought forms.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The body responds</strong> (M3). The activation sequence runs. The body was designed to complete the cycle — the debris clears, the hormones metabolise, the muscles release, the system reaches baseline. Or: cognition overrides the signal, the cycle stays open, the debris accumulates, and the nervous system begins searching for anything that produces relief. Substitutes escalate. The alarm stays on.
            </p>
            <p style={proseStyle}>
              <strong style={{ color: TEXT.primary }}>The awareness system determines all of it</strong> (M4). Whether the person can read the signal when it fires. Whether they can feel the state when it shifts. Whether they can catch the override when it engages. Whether they can distinguish the substitute from genuine restoration. Whether they can observe the pattern while it is running — or are inside the pattern, invisible to themselves.
            </p>
            <p style={proseStyle}>
              Reading Emotions (RE) determines whether the person can read the signals — in others and in the environment. Emotional Resonance (ER) determines whether the person can feel what those signals carry — the somatic dimension that makes the reading real. Self-Emotional Awareness (SEA) determines whether the person has access to their own internal state — the observing position that makes the difference between a cycle that can be felt and a cycle that runs unseen.
            </p>
            <p style={proseStyle}>
              Without these capacities, the cycle runs anyway. The signals fire. The states shift. The activation accumulates. The substitutes escalate. It all happens — below the threshold of awareness, producing consequences the person cannot trace to their source.
            </p>
            <p style={proseStyle}>
              With these capacities, the cycle becomes observable. The person can feel the signal arriving. Can notice the state shifting. Can catch the override engaging and choose whether to let the cycle complete. Can distinguish temporary relief from genuine restoration. Can feel the shame loop running and hold it long enough for the cycle to complete.
            </p>
            <p style={proseStyle}>
              This is the answer M2 and M3 were building toward. The gap between the person who can feel the cycle running and the person who cannot is not a difference in intelligence, insight, or willpower. It is a difference in three biological capacities — each with a developmental origin, each with a degradation pattern under chronic activation, each developable through relational experience.
            </p>

            <OperationalStatement color={MODEL_COLOR}>
              The Emotional Somatic Cycle runs in every nervous system. The awareness capacities determine whether the person knows it.
            </OperationalStatement>
          </section>

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="m4-awareness-capacities" type="model" />

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
                    <th style={navThStyle}>If you want to...</th>
                    <th style={navThStyle}>Go here</th>
                  </tr>
                </thead>
                <tbody>
                  <NavRow
                    label="See the sixteen emotions mapped as biological signals — the input that the awareness system reads"
                    href="/model/m1-emotions-as-signals"
                    linkText="M1: Emotions as Signals &rarr;"
                  />
                  <NavRow
                    label="Understand the four nervous system states that the awareness capacities operate within"
                    href="/model/m2-nervous-system-states"
                    linkText="M2: Nervous System States &rarr;"
                  />
                  <NavRow
                    label="Understand the activation cycle that awareness determines whether the person can observe"
                    href="/model/m3-regulation-capacities"
                    linkText="M3: Regulation Capacities &rarr;"
                  />
                  <NavRow
                    label="Explore the foundational theory behind how awareness capacities develop and calibrate"
                    href="/framework/f2-awareness-calibration"
                    linkText="F2: Awareness Calibration &rarr;"
                  />
                  <NavRow
                    label="Explore the interactive tools"
                    href="https://teg-blue.com/emotional-tools"
                    linkText="teg-blue.com &rarr;"
                    external
                  />
                </tbody>
              </table>
            </div>
          </section>
        </article>

      </PageLayout>

      <SiteFooter />

      {/* ─── JSON-LD ─────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": "https://teg-blue.org/model/m4-awareness-capacities#article",
            headline: "Awareness Capacities: The Calibration",
            description:
              "What determines whether the person can feel the Emotional Somatic Cycle while it is running — three biological capacities (Reading Emotions, Emotional Resonance, Self-Emotional Awareness), their developmental trajectories, degradation patterns, and the multiplicative system they form. Model M4 of the TEG-Blue system.",
            author: {
              "@type": "Person",
              name: "Anna Paretas-Artacho",
              url: "https://teg-blue.org/about",
            },
            publisher: {
              "@type": "Organization",
              name: "TEG-Blue Research",
              url: "https://teg-blue.org",
            },
            datePublished: "2026-03-05",
            dateModified: "2026-03-27",
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue Models & Frameworks",
              url: "https://teg-blue.org/models",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://teg-blue.org/model/m4-awareness-capacities",
            },
            about: [
              { "@type": "Thing", name: "Awareness Capacities" },
              { "@type": "Thing", name: "Reading Emotions" },
              { "@type": "Thing", name: "Emotional Resonance" },
              { "@type": "Thing", name: "Self-Emotional Awareness" },
              { "@type": "Thing", name: "Multiplicative Empathy System" },
            ],
            citation: [
              { "@type": "ScholarlyArticle", name: "A social neuroscience perspective on empathy (Decety & Jackson, 2004)" },
              { "@type": "ScholarlyArticle", name: "The Polyvagal Theory (Porges, 2011)" },
              { "@type": "ScholarlyArticle", name: "Affect Regulation, Mentalization and the Development of the Self (Fonagy et al., 2002)" },
              { "@type": "ScholarlyArticle", name: "Affect Dysregulation and Disorders of the Self (Schore, 2003)" },
              { "@type": "ScholarlyArticle", name: "The Body Keeps the Score (van der Kolk, 2014)" },
              { "@type": "ScholarlyArticle", name: "Interoception: The Sense of the Physiological Condition of the Body (Craig, 2002)" },
            ],
            keywords: [
              "awareness capacities",
              "Reading Emotions",
              "Emotional Resonance",
              "Self-Emotional Awareness",
              "empathy components",
              "multiplicative system",
              "capacity configuration",
              "true coherence",
              "false coherence",
              "generational replication",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "The Emotional Somatic System", url: "/models" },
              { name: "M4: Awareness Capacities", url: "/model/m4-awareness-capacities" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFAQJsonLd([
              {
                question: "What are the three awareness capacities in the TEG-Blue model?",
                answer:
                  "The three awareness capacities are Reading Emotions (RE) — the capacity to identify what others are feeling; Emotional Resonance (ER) — the capacity to feel what others are feeling in one's own body; and Self-Emotional Awareness (SEA) — the capacity to identify, name, and trust one's own emotional states. These three capacities are what the world calls 'empathy,' but empathy is not one thing. Each has a distinct neural substrate, developmental trajectory, and degradation pattern under chronic activation.",
              },
              {
                question: "Why is Self-Emotional Awareness (SEA) the keystone capacity?",
                answer:
                  "Self-Emotional Awareness (SEA) is the keystone because without it, the other two capacities lose their anchor. Without SEA, Reading Emotions (RE) serves the mode rather than understanding — the reading is accurate but unanchored. Without SEA, Emotional Resonance (ER) floods or shuts down — there is no boundary between self and other. Without SEA, cycle completion has no endpoint — there is nothing to come back to. SEA is also structurally absent in all four chronic states, creating the paradox: the capacity needed to observe the mode is the capacity the mode disables.",
              },
              {
                question: "What is the multiplicative system in empathy?",
                answer:
                  "The three awareness capacities are multiplicative, not additive: RE × ER × SEA. If any one capacity is zero, the product is zero regardless of the other two. This explains why partial capacity produces distortion, not partial empathy. A person with sharp Reading Emotions (RE) and absent Self-Emotional Awareness (SEA) has a scanner serving a mode they cannot see. The most dangerous configurations are not the ones with the least capacity — they are the ones with the most RE and the least SEA.",
              },
              {
                question: "How do the awareness capacities develop?",
                answer:
                  "Through the mechanism of 'awareness teaches awareness' — the adults' awareness capacities create the child's developmental environment. A caregiver with online Self-Emotional Awareness (SEA) creates conditions for the child's SEA to develop. A caregiver with absent SEA provides no model. This transmits through the nervous system, not through words — a parent can say 'your feelings matter' while their own SEA is absent, and the child absorbs the absence, not the words. Love does not override what the nervous system embodies.",
              },
              {
                question: "What is false coherence?",
                answer:
                  "False coherence is a stable-but-untrue narrative that cognition builds from incomplete capacity data. When Self-Emotional Awareness (SEA) is absent or Emotional Resonance (ER) is shut down, cognition generates a coherent story that replaces felt experience. It serves regulation at the cost of truth. False coherence often looks more put-together than true coherence — the person has a clear narrative and consistent identity, while someone developing true coherence may appear messy and uncertain. The smooth story should worry more than the messy one.",
              },
              {
                question: "Can awareness capacities be developed in adulthood?",
                answer:
                  "Yes. The three capacities were not damaged — they were not developed, which changes everything about repair. The critical distinction is between chronic suppression (the pathway exists but is blocked — recovery is unblocking through safety) and developmental absence (the pathway was never built — recovery is building through new co-regulatory experiences). Both require safety, relational support, identity flexibility, time, and structural conditions. SEA comes back last, and its reappearance is the mechanism of change.",
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "Awareness Capacities (M4) — TEG-Blue Research",
              url: "https://teg-blue.org/model/m4-awareness-capacities",
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

const gridHeaderStyle = {
  padding: "10px 12px",
  background: hexToRgba(MODEL_COLOR, 0.1),
  borderBottom: `1px solid ${BORDER.default}`,
  fontSize: 12,
  fontWeight: 600,
  color: TEXT.primary,
  fontFamily: FONT.mono,
};

const gridCellStyle = {
  padding: "10px 12px",
  borderBottom: `1px solid ${BORDER.default}`,
  fontSize: 13,
  color: TEXT.secondary,
  lineHeight: 1.6,
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

function PartDivider({ label, title }) {
  return (
    <div
      style={{
        marginBottom: 32,
        marginTop: 16,
        paddingTop: 24,
        borderTop: `1px solid ${BORDER.default}`,
      }}
    >
      <span
        style={{
          fontFamily: FONT.mono,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: MODEL_COLOR,
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: TEXT.primary,
          margin: "4px 0 0",
        }}
      >
        {title}
      </h2>
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
