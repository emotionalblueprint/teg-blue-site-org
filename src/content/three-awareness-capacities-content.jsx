"use client";

import { TEXT, FONT, BORDER, BG, SPECTRUM, hexToRgba } from "@/src/styles/tokens";

const prose = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  marginBottom: 16,
};

const emphasis = {
  color: TEXT.primary,
  fontWeight: 600,
};

const standaloneLine = {
  fontSize: 15,
  fontWeight: 600,
  color: TEXT.primary,
  lineHeight: 1.6,
  margin: "20px 0",
};

const subheading = {
  fontSize: 15,
  fontWeight: 600,
  color: TEXT.primary,
  margin: "24px 0 10px",
};

const tableCell = {
  padding: "10px 14px",
  fontSize: 13,
  color: TEXT.secondary,
  lineHeight: 1.6,
  borderBottom: `1px solid ${BORDER.default}`,
};

const tableHeader = {
  ...tableCell,
  fontWeight: 600,
  color: TEXT.primary,
  background: hexToRgba(SPECTRUM.blue, 0.04),
};

const applicationItem = {
  fontSize: 13,
  color: TEXT.secondary,
  lineHeight: 1.7,
};

const applicationLabel = {
  fontWeight: 600,
  color: TEXT.muted,
  fontSize: 11,
  fontFamily: FONT.mono,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
};

// ─── OVERVIEW ────────────────────────────────────────────────

export const overview = (
  <>
    <p style={prose}>
      The compass moves based on the signals it receives. But which signals get
      through, how they are interpreted, and whether the person has access to
      their own internal state — all of this depends on the three awareness
      capacities.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Reading Emotions (RE)</strong> — the capacity to
      read emotional signals in others. What is happening in this person? What are
      they feeling? What do their signals mean?
    </p>
    <p style={prose}>
      <strong style={emphasis}>Emotional Resonance (ER)</strong> — the capacity to
      feel with others. Not just reading the signal, but feeling the signal in
      one's own body. The felt dimension of connection.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Self-Emotional Awareness (SEA)</strong> — the
      capacity to access, name, and trust one's own emotional states. The
      keystone. Without SEA, RE and ER have no anchor — a person can read emotions
      everywhere but not know what they themselves feel; can resonate with others
      but not distinguish their own states from others'.
    </p>
    <p style={prose}>
      These three capacities are present at birth in proto-form. They develop
      through relational conditions. And they develop through a specific mechanism:{" "}
      <strong style={emphasis}>awareness teaches awareness.</strong> The awareness
      capacities the caregivers carry are the awareness capacities that get passed.
      The adults' capacity configuration IS the child's environment. This is not a
      metaphor. It is the developmental mechanism.
    </p>
    <p style={prose}>
      When conditions are met — when the adults' awareness is sufficiently online
      — the capacities develop as designed. The compass reads accurately. The
      return is learned. True coherence is possible.
    </p>
    <p style={prose}>
      When conditions are not met — when the adults' awareness has gaps — the
      capacities develop differently. Some are heightened in service of survival
      rather than understanding. Some are suppressed because the environment
      punished them. Some never come online at all. The compass gets calibrated to
      the adults' limitations. The return may never be learned. And cognition
      arrives to build identity from whatever incomplete data is available —
      producing false coherence that feels like truth.
    </p>
  </>
);

// ─── 10 CONCEPTS ─────────────────────────────────────────────

export const concepts = [
  // ── CONCEPT 1 ──────────────────────────────────────────────
  {
    title: "The Three Capacities Connected at Birth",
    body: (
      <>
        <p style={prose}>
          At birth, the emotional-somatic system is the only information system
          online. The infant already has the biological precursors of all three
          awareness capacities, operating as a single integrated system:
        </p>
        <p style={prose}>
          <strong style={emphasis}>Proto-RE (Reading Emotions):</strong> The infant
          tracks faces, responds to tone, orients toward emotional signals.
          Mirroring is automatic. The baby reads before it knows it is reading.
        </p>
        <p style={prose}>
          <strong style={emphasis}>Proto-ER (Emotional Resonance):</strong> The
          infant feels with others before knowing why. Emotional contagion is
          present from the start. When the caregiver is calm, the infant calms.
          When the caregiver is distressed, the infant registers distress.
        </p>
        <p style={prose}>
          <strong style={emphasis}>Proto-SEA (Self-Emotional Awareness):</strong>{" "}
          The body registers states — hunger, discomfort, safety, distress — as raw
          sensation. There is no observing self to name them, but the signals
          exist. The body is already talking.
        </p>
        <p style={prose}>
          This connected state — all three proto-capacities online and integrated —
          is what people remember when they say "when I was a kid, I was just{" "}
          <em>me</em>." Not a memory of a different person hidden underneath. A
          memory of a capacity state — the three awarenesses connected before
          anything redirected them.
        </p>
        <p style={standaloneLine}>
          "Being yourself is not a personality. It is what happens when the three
          capacities are connected."
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "There is nothing to find. There is something to reconnect."
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          The therapeutic target is not discovering a hidden self. It is restoring
          the capacity state that allows the person to be themselves — reconnecting
          what was disconnected.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          Proto-capacity presence at birth as baseline. Developmental trajectory of
          each capacity as measurable over time.
        </p>
      </>
    ),
  },

  // ── CONCEPT 2 ──────────────────────────────────────────────
  {
    title: "The Pre-SEA Condition — Feeling = Being",
    body: (
      <>
        <p style={prose}>
          Before cognition develops, there is no observing self. No separation
          between experience and identity.
        </p>
        <p style={prose}>
          <strong style={emphasis}>Feeling = being.</strong> A child does not think
          "I feel scared" — the child <em>is</em> scared.
        </p>
        <p style={prose}>
          <strong style={emphasis}>Feedback = identity.</strong> A child does not
          think "my caregiver is dysregulated" — the child experiences "something
          is wrong with me."
        </p>
        <p style={prose}>
          <strong style={emphasis}>How I'm treated = who I am.</strong>
        </p>
        <p style={prose}>
          This is the pre-SEA condition — the normal developmental starting point
          before Self-Emotional Awareness has had conditions to form. Every human
          begins here. The question is whether the environment provides sufficient
          conditions for SEA to develop — for the child to eventually make the
          separation between "this is what I feel" and "this is what is happening
          around me."
        </p>
        <p style={prose}>
          When SEA develops, the child gains an observing position. They can feel
          something without <em>being</em> it. They can receive feedback without
          absorbing it as identity. They can experience another person's state
          without losing track of their own.
        </p>
        <p style={prose}>
          When SEA does not develop — when conditions do not support its emergence
          — the pre-SEA condition persists into adulthood. The adult may be
          cognitively sophisticated, professionally successful, psychologically
          literate — and still operating from Feeling = Being underneath. When they
          feel inadequate, they <em>are</em> inadequate. When they receive
          criticism, they <em>are</em> the criticism.
        </p>
        <p style={prose}>
          The pre-SEA condition persisting into adulthood is one of the most
          consequential outcomes F2 describes — because it is invisible. The adult
          does not know SEA is offline, because they have never experienced it
          being online.
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "When feedback hits like identity — when I <em>am</em> the feeling rather
          than <em>having</em> it — that is the pre-SEA condition, not proof that
          something is wrong with me."
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          Assess for pre-SEA persistence. The client who collapses under feedback,
          who absorbs criticism as identity — this is not fragility. It is a
          capacity that never had conditions to develop.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          Pre-SEA persistence in adults as an operationalisable construct. Predicted
          correlation with specific regulatory and relational patterns.
        </p>
      </>
    ),
  },

  // ── CONCEPT 3 ──────────────────────────────────────────────
  {
    title: "Awareness Teaches Awareness — The Developmental Mechanism",
    body: (
      <>
        <p style={prose}>
          The organising principle of the entire calibration system. How do the
          three capacities develop? Through what mechanism?
        </p>
        <p style={standaloneLine}>
          The adults' awareness capacities create the child's developmental
          environment. The environment shapes the child's awareness capacities.
        </p>
        <p style={prose}>
          This is the mechanism. Not instruction. Not intention. Not love.
          Embodiment.
        </p>
        <p style={prose}>
          A caregiver with online SEA — who can access, name, and trust their own
          emotional states — creates an environment where the child's emotional
          states are received, reflected accurately, and validated. The child's
          proto-SEA has conditions to develop into full SEA.
        </p>
        <p style={prose}>
          A caregiver with absent SEA — who cannot access their own emotional
          states — creates an environment where the child's emotional states are
          unrecognised, misread, or overridden. The child's proto-SEA has no model
          for what SEA looks like. SEA does not develop — not because the child is
          incapable, but because the conditions were absent.
        </p>

        <div style={{ overflowX: "auto", margin: "16px 0" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: `1px solid ${BORDER.default}`,
              borderRadius: 6,
              fontSize: 13,
            }}
          >
            <thead>
              <tr>
                <th style={tableHeader}>If the adult has...</th>
                <th style={tableHeader}>The child absorbs...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableCell}>Accurate RE</td>
                <td style={tableCell}>A model of emotional reading in service of understanding</td>
              </tr>
              <tr>
                <td style={tableCell}>Hypervigilant RE</td>
                <td style={tableCell}>A model of emotional reading in service of survival</td>
              </tr>
              <tr>
                <td style={tableCell}>Sustainable ER</td>
                <td style={tableCell}>A model of emotional resonance that includes self-care</td>
              </tr>
              <tr>
                <td style={tableCell}>Flooded ER</td>
                <td style={tableCell}>A model where others' emotions swamp one's own</td>
              </tr>
              <tr>
                <td style={tableCell}>Online SEA</td>
                <td style={tableCell}>A model of being able to name and trust one's own feelings</td>
              </tr>
              <tr>
                <td style={tableCell}>Absent SEA</td>
                <td style={tableCell}>No model of internal emotional access</td>
              </tr>
              <tr>
                <td style={tableCell}>Learned regulation</td>
                <td style={tableCell}>An experience of co-regulation that becomes self-regulation</td>
              </tr>
              <tr>
                <td style={tableCell}>Absent regulation</td>
                <td style={tableCell}>An experience of unregulated emotional states with no return path</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={standaloneLine}>
          "Love does not override what the nervous system embodies."
        </p>
        <p style={prose}>
          A caregiver can love a child deeply and still transmit an incomplete
          awareness configuration — because what transmits is what the nervous
          system carries, not what the heart intends. The adults' configuration IS
          the child's reality. The child adapts to whatever configuration walks
          through the door.
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "My configuration is not my fault. It is the accurate product of the
          awareness environment I grew up in."
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          When assessing a client's configuration, the developmental question is
          concrete: not "what went wrong in childhood?" but "which of the three
          capacities had conditions to develop, and which didn't?"
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          The awareness-teaches-awareness mechanism as a testable transmission
          pathway. Caregiver capacity configuration as the independent variable;
          child capacity configuration as the dependent variable.
        </p>
      </>
    ),
  },

  // ── CONCEPT 4 ──────────────────────────────────────────────
  {
    title: "The Three Capacities — Online and Offline",
    body: (
      <>
        <p style={prose}>
          Each capacity has a designed function — what it does when it develops as
          intended — and a range of adaptive variants — what it becomes when
          conditions redirect it.
        </p>

        <h4 style={subheading}>Reading Emotions (RE) — Reading Others' Emotional States</h4>
        <p style={prose}>
          <strong style={emphasis}>When Online:</strong> RE accurately reads the
          emotional signals of others — facial expressions, tone, body language,
          relational patterns. It reads for understanding. It serves connection. It
          is calibrated to truth: what is this person actually feeling?
        </p>

        <div style={{ overflowX: "auto", margin: "16px 0" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: `1px solid ${BORDER.default}`,
              borderRadius: 6,
              fontSize: 13,
            }}
          >
            <thead>
              <tr>
                <th style={tableHeader}>RE Variant</th>
                <th style={tableHeader}>What It Is</th>
                <th style={tableHeader}>What It Serves</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Hypervigilant RE</td>
                <td style={tableCell}>Scanning for survival — reading every signal for threat indicators. Exhausting. Accurate at detecting danger, miscalibrated for safety.</td>
                <td style={tableCell}>Survival</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Surface-calibrated RE</td>
                <td style={tableCell}>Reading performance, not authenticity. Tracking what people display, not what they feel.</td>
                <td style={tableCell}>Fitting in</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Instrumental RE</td>
                <td style={tableCell}>Reading for strategy, compliance, or control. Using emotional data to manage situations or people.</td>
                <td style={tableCell}>Management</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Weaponised RE</td>
                <td style={tableCell}>Reading for leverage and exploitation. Using accurate emotional intelligence to identify vulnerabilities.</td>
                <td style={tableCell}>Power</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={prose}>
          All RE variants are RE. They are all the same capacity — reading
          emotional signals in others. What changes is what the reading serves. The
          person with weaponised RE is not "lacking empathy." They have one
          component of empathy (RE) precisely intact — and it is decoupled from ER
          and SEA. This decoupling is what makes the harm both precise and
          invisible.
        </p>

        <h4 style={subheading}>Emotional Resonance (ER) — Feeling With Others</h4>
        <p style={prose}>
          <strong style={emphasis}>When Online:</strong> ER is the felt dimension
          of connection. Not thinking about what someone feels — feeling it in your
          own body. Sustainable ER means resonating with others while maintaining
          your own centre — feeling with without losing yourself.
        </p>

        <div style={{ overflowX: "auto", margin: "16px 0" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: `1px solid ${BORDER.default}`,
              borderRadius: 6,
              fontSize: 13,
            }}
          >
            <thead>
              <tr>
                <th style={tableHeader}>ER Variant</th>
                <th style={tableHeader}>What It Is</th>
                <th style={tableHeader}>What It Serves</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Flooded ER</td>
                <td style={tableCell}>Overwhelmed by others' emotional states. Absorbs everything. Cannot distinguish own feelings from others'.</td>
                <td style={tableCell}>Connection at any cost</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Confused / Distrusted ER</td>
                <td style={tableCell}>Felt sense is present but contradicted by authority. "I feel something is wrong but I'm told everything is fine."</td>
                <td style={tableCell}>Compliance</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Shut-down ER</td>
                <td style={tableCell}>Feeling was punished or overwhelmed. The system stopped resonating. Protective shutdown.</td>
                <td style={tableCell}>Self-protection</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Absent ER</td>
                <td style={tableCell}>No felt experience of others' emotional states. Different from shut-down. May reflect conditions where resonance was never modelled or activated.</td>
                <td style={tableCell}>—</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 style={subheading}>Self-Emotional Awareness (SEA) — Accessing One's Own Emotional States</h4>
        <p style={prose}>
          <strong style={emphasis}>When Online:</strong> SEA is the capacity to
          access, name, and trust one's own emotional states. The observing
          position — the ability to have a feeling without being consumed by it, to
          notice an internal state and say "this is what I feel" rather than "this
          is what I am." SEA is the keystone.
        </p>

        <div style={{ overflowX: "auto", margin: "16px 0" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: `1px solid ${BORDER.default}`,
              borderRadius: 6,
              fontSize: 13,
            }}
          >
            <thead>
              <tr>
                <th style={tableHeader}>SEA Variant</th>
                <th style={tableHeader}>What It Is</th>
                <th style={tableHeader}>What It Serves</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Online SEA</td>
                <td style={tableCell}>Internal experience is readable, nameable, trustworthy. "I feel angry, and I know that is anger, and I trust that signal."</td>
                <td style={tableCell}>Truth. Self-knowledge.</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Absent SEA</td>
                <td style={tableCell}>No access to one's own emotional states. The pre-SEA condition persisted into adulthood. Cognition runs the narrative while the body is flooded.</td>
                <td style={tableCell}>— (an absence)</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Narrative-filtered SEA</td>
                <td style={tableCell}>Partially online but filtered through a contradicting story. "I think I'm upset" — but the narrative overrides: "that doesn't make sense."</td>
                <td style={tableCell}>Regulation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 style={subheading}>Why SEA Is the Keystone</h4>
        <p style={prose}>
          Without SEA, RE becomes unanchored. The person can read others with
          extreme accuracy but has no internal reference point. They know what
          everyone else feels but not what they feel. RE without SEA produces
          hypervigilance, instrumental reading, or enmeshment.
        </p>
        <p style={prose}>
          Without SEA, ER becomes unfiltered. The person resonates with everything
          but cannot distinguish own states from others'. They feel everything and
          attribute it to themselves. ER without SEA produces flooding, confusion,
          and emotional exhaustion.
        </p>
        <p style={prose}>
          Without SEA, the return mechanism has no endpoint. Regulation means
          coming back — but back to what? SEA provides the internal reference point
          that the return navigates toward. Without SEA, there is nothing to come
          back to.
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "Which of my three capacities is strong? Which is absent? Which is
          redirected? What has each one been doing — serving understanding, or
          serving survival?"
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          The three-capacity assessment provides a precise map. Two people in
          chronic Control may have entirely different configurations — same mode,
          different configurations, different repair pathways.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          Each capacity and each variant as an operationalisable variable.
          Configuration patterns as predictors of specific relational, emotional,
          and behavioural outcomes.
        </p>
      </>
    ),
  },

  // ── CONCEPT 5 ──────────────────────────────────────────────
  {
    title: "Capacity Configuration — The Pattern That Becomes Personality",
    body: (
      <>
        <p style={prose}>
          The specific combination of RE, ER, SEA, and regulation a person carries
          is their <strong style={emphasis}>capacity configuration</strong>. This
          configuration determines what data the compass receives, how it reads
          that data, whether it can move freely, where it settles chronically, and
          what cognition builds with the available data.
        </p>
        <p style={prose}>
          <strong style={emphasis}>Configuration → chronic mode → identity.</strong>{" "}
          This is the causal chain. The capacity configuration predicts the chronic
          mode. The chronic mode shapes what cognition narrates. What cognition
          narrates becomes personality.
        </p>
        <p style={standaloneLine}>
          "Personality is not a type — it is a record of which capacities had
          conditions to develop and which didn't."
        </p>

        <div style={{ overflowX: "auto", margin: "16px 0" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: `1px solid ${BORDER.default}`,
              borderRadius: 6,
              fontSize: 13,
            }}
          >
            <thead>
              <tr>
                <th style={tableHeader}>Example Configuration</th>
                <th style={tableHeader}>Predicted Chronic Mode</th>
                <th style={tableHeader}>What It Looks Like</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Sharp RE, absent ER, absent SEA</td>
                <td style={tableCell}>Chronic Control or Domination</td>
                <td style={tableCell}>Reads everyone accurately, feels nothing, no internal reference. "The smartest person in the room who leaves the room empty."</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Hypervigilant RE, flooded ER, absent SEA</td>
                <td style={tableCell}>Chronic Protection</td>
                <td style={tableCell}>Reads threat everywhere, feels everything, cannot locate own states. "Walking through the world with no skin."</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Surface-calibrated RE, shut-down ER, narrative-filtered SEA</td>
                <td style={tableCell}>Chronic Control</td>
                <td style={tableCell}>Reads performance, feels little, has partial but overridden self-awareness. "Fine on the outside, disconnected on the inside."</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Accurate RE, sustainable ER, online SEA</td>
                <td style={tableCell}>Fluid compass — Connection as home base</td>
                <td style={tableCell}>Reads accurately, feels sustainably, knows own states. Can move through all four modes and come back.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={prose}>
          This reframe changes the target of assessment, therapy, and research. The
          question is not "who is this person?" but "what is their configuration?"
          Not "what personality type?" but "which capacities had conditions, which
          didn't, and what did the system build with the available data?"
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "My configuration is not my character. It is the specific product of the
          specific awareness conditions I developed in."
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          Configuration assessment as the primary clinical tool. Before choosing an
          intervention, map the configuration. Target the specific capacities that
          are offline or redirected.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          Configuration as a multidimensional variable. RE state × ER state × SEA
          state × regulation capacity = predicted compass behaviour, chronic mode,
          and relational patterns.
        </p>
      </>
    ),
  },

  // ── CONCEPT 6 ──────────────────────────────────────────────
  {
    title: "Co-Regulation and the Return Path",
    body: (
      <>
        <p style={prose}>
          Children are born with the biological capacity for regulation. They are
          not born with the ability to regulate. The difference is co-regulation.
        </p>
        <p style={prose}>
          <strong style={emphasis}>Co-regulation</strong> is the caregiver's
          regulated nervous system teaching the child's nervous system the return
          path. The child is distressed. The caregiver's system — through tone,
          rhythm, touch, breath, presence — sends safety signals. The child's
          system synchronises. The activation settles. The child learns:{" "}
          <em>there is a way back.</em>
        </p>
        <p style={prose}>
          Through thousands of repetitions, the return path becomes internalised.
          What was co-regulation becomes{" "}
          <strong style={emphasis}>self-regulation</strong> — the child's own
          capacity to complete the activation cycle and return. Not a skill taught
          through instruction. A capacity built through experience.
        </p>

        <h4 style={subheading}>Three Disruptions to the Return Path</h4>

        <div style={{ overflowX: "auto", margin: "16px 0" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: `1px solid ${BORDER.default}`,
              borderRadius: 6,
              fontSize: 13,
            }}
          >
            <thead>
              <tr>
                <th style={tableHeader}>Disruption</th>
                <th style={tableHeader}>Adult Configuration</th>
                <th style={tableHeader}>What the Child Learns</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Disrupted regulation</td>
                <td style={tableCell}>Emotionally unpredictable — sometimes co-regulates, sometimes dysregulates</td>
                <td style={tableCell}>"Sometimes there is a way back, sometimes there isn't. I cannot predict." → Unreliable return.</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Misdirected regulation</td>
                <td style={tableCell}>Emotionally incongruent — co-regulation is available but leads to compliance, not safety</td>
                <td style={tableCell}>"There is a way back — but it requires me to become what they need me to be." → Return leads to the wrong destination.</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Blocked regulation</td>
                <td style={tableCell}>Emotional invalidation — the departure itself is forbidden</td>
                <td style={tableCell}>"There is no departure. Do not feel. Do not signal." → No cycle to return from.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "Did I learn the return? Through whose nervous system? What did their
          capacity to regulate — or inability — teach mine?"
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          Assess regulation capacity as learned, not innate. A person who "can't
          regulate" may never have had co-regulation. The intervention is providing
          the co-regulatory experiences the nervous system needs to build the return
          path for the first time.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          Co-regulation as the developmental mechanism linking caregiver regulation
          capacity to child regulation capacity. Measurable through nervous system
          synchronisation, return speed, and return completeness.
        </p>
      </>
    ),
  },

  // ── CONCEPT 7 ──────────────────────────────────────────────
  {
    title: "True Coherence and False Coherence",
    body: (
      <>
        <p style={prose}>
          When all three capacities are online and the return is learned, the
          person has access to the full information set. They can read others (RE),
          feel with others (ER), access their own states (SEA), and return from
          activation. What cognition builds with this complete data is{" "}
          <strong style={emphasis}>true coherence</strong> — a narrative that
          aligns with felt experience. The story matches what the body knows.
        </p>
        <p style={prose}>
          When the capacities are incomplete — when SEA is absent, or ER is shut
          down, or RE is redirected for survival — cognition builds with whatever
          is available. It generates a stable narrative from incomplete data. That
          narrative feels true. But it replaces the emotional signals it cannot
          process. This is <strong style={emphasis}>false coherence</strong> — a
          stable-but-untrue narrative that serves regulation at the cost of truth.
        </p>
        <p style={standaloneLine}>
          "False coherence is not deception. It is regulation."
        </p>

        <div style={{ overflowX: "auto", margin: "16px 0" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: `1px solid ${BORDER.default}`,
              borderRadius: 6,
              fontSize: 13,
            }}
          >
            <thead>
              <tr>
                <th style={tableHeader}></th>
                <th style={tableHeader}>True Coherence</th>
                <th style={tableHeader}>False Coherence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Data source</td>
                <td style={tableCell}>All three capacities + regulation</td>
                <td style={tableCell}>Incomplete capacity set + cognitive replacement</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Narrative</td>
                <td style={tableCell}>Aligned with felt experience</td>
                <td style={tableCell}>Replaces felt experience</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Feels like</td>
                <td style={tableCell}>"This is complex and I can hold it"</td>
                <td style={tableCell}>"This is clear and I know who I am"</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Function</td>
                <td style={tableCell}>Understanding</td>
                <td style={tableCell}>Regulation</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Cost</td>
                <td style={tableCell}>Complexity (must hold more)</td>
                <td style={tableCell}>Truth (must suppress more)</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Flexibility</td>
                <td style={tableCell}>Can update when new information arrives</td>
                <td style={tableCell}>Resists update — updating threatens regulation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={prose}>
          The most important clinical distinction: false coherence often looks more
          put-together than true coherence. The person running false coherence has
          a clear narrative, a consistent identity, a well-articulated
          self-understanding. The person developing true coherence is messy,
          contradictory, uncertain, and struggling to hold complexity.
        </p>
        <p style={standaloneLine}>
          "The smooth story should worry you more than the messy one."
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "Does my story about myself match what my body knows — or does my story
          manage what my body can't process?"
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          Assess for coherence type. A client with a smooth, articulate,
          psychologically literate narrative may be running sophisticated false
          coherence. A client who is confused and contradictory may be closer to
          true coherence than they realise.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          True vs. false coherence as operationalisable through alignment between
          self-report (cognitive narrative) and physiological measures (body-level
          states).
        </p>
      </>
    ),
  },

  // ── CONCEPT 8 ──────────────────────────────────────────────
  {
    title: "Tolerance Thresholds",
    body: (
      <>
        <p style={prose}>
          The nervous system calibrates a baseline for what to endure. This
          calibration happens through the developmental conditions — through what
          the adults' configuration normalised.
        </p>
        <p style={prose}>
          A child who grew up with a caregiver whose ER was flooded and SEA was
          absent learns: this level of emotional overwhelm is normal. A child who
          grew up with a caregiver running emotional distortion learns: other
          people's discomfort being treated as my emergency is normal. A child
          whose emotional signals were consistently invalidated learns: my feelings
          don't count.
        </p>
        <p style={prose}>
          The threshold becomes the set point. What was endured becomes what is
          tolerated. The nervous system does not flag it as excessive, because it
          matches the calibrated baseline.
        </p>
        <p style={prose}>
          <strong style={emphasis}>
            Flooded ER + absent SEA = the most consequential configuration for
            tolerance thresholds.
          </strong>{" "}
          The person feels the harm (ER is online — they feel everything). But they
          cannot locate it as harm (SEA is offline — they cannot name what they
          feel or attribute it correctly). They feel terrible and don't know why. Or
          they know something is wrong but can't identify what. The body is
          screaming and the person has no translation.
        </p>
        <p style={standaloneLine}>
          "Familiar can feel 'normal' even when it is costly."
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "What am I tolerating that I shouldn't be — and am I unable to see it
          because my threshold was calibrated to endure it?"
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          Assess tolerance thresholds alongside capacity configuration. A client
          who reports "everything is fine" while showing physiological markers of
          chronic activation may have a threshold calibrated so high that their
          current distress registers as baseline.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          Tolerance thresholds as a measurable construct — the gap between
          physiological activation and subjective distress reporting.
        </p>
      </>
    ),
  },

  // ── CONCEPT 9 ──────────────────────────────────────────────
  {
    title: "Generational Replication",
    body: (
      <>
        <p style={prose}>
          Awareness teaches awareness — and this mechanism does not stop after one
          generation. What the adult's nervous system embodies is what the child
          absorbs. What the child absorbs becomes what they embody as an adult.
          What they embody as an adult is what the next child absorbs.
        </p>
        <p style={prose}>
          The chain transmits through the nervous system, not through words. A
          parent can say "your feelings matter" while their own SEA is absent — and
          the child absorbs the absence, not the words. A parent can explain
          healthy boundaries while their own tolerance thresholds are calibrated to
          endure harm — and the child calibrates to the endurance, not the
          explanation.
        </p>
        <p style={standaloneLine}>
          "The chain replicates until awareness changes, not just behaviour."
        </p>
        <p style={prose}>
          <strong style={emphasis}>Cultural override</strong> is this mechanism
          operating at population scale. When an entire culture performs emotional
          invalidation — "boys don't cry," "be strong," "don't make a scene,"
          "that didn't hurt" — the invalidation is no longer experienced as a
          specific adult's limitation. It is experienced as reality. The culture
          doesn't produce the condition — the condition produces the culture — and
          the culture reproduces the condition.
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "What I carry is not just my story. It is the accumulated configuration
          of the adults who shaped me — and the adults who shaped them."
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          When the configuration is severe or entrenched, consider the generational
          depth. The client may be carrying not one generation's incomplete
          awareness but several — compounded through repeated transmission with no
          intervention point.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          Intergenerational transmission of capacity configurations as a testable
          model. Predicted correlation between caregiver configuration and child
          configuration across multiple generations.
        </p>
      </>
    ),
  },

  // ── CONCEPT 10 ─────────────────────────────────────────────
  {
    title: "Repair — Developing What Was Missing",
    body: (
      <>
        <p style={prose}>
          The three awareness capacities were not damaged. They were not developed.
          This distinction changes everything about repair.
        </p>
        <p style={prose}>
          Repair does not mean undoing the past. It means developing what the past
          didn't provide conditions for — and learning a return path that was never
          taught. The adult who never had conditions for SEA to develop can develop
          it now. The adult whose ER was shut down can reconnect it. The adult
          whose RE was redirected for survival can redirect it for understanding.
        </p>
        <p style={standaloneLine}>
          "Every substitute was built because the original was missing. Repair
          means building the original."
        </p>
        <p style={prose}>
          The repair does not require going back. It requires going forward — with
          new relational experiences that provide the conditions the original
          environment did not. This is not insight work alone. The two information
          systems (F12) apply: the emotional-somatic system learns through
          experience, not explanation.
        </p>
        <p style={standaloneLine}>
          "You cannot think your way into felt safety. You can only experience your
          way there."
        </p>

        <h4 style={subheading}>Five Conditions for Repair</h4>

        <div style={{ overflowX: "auto", margin: "16px 0" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: `1px solid ${BORDER.default}`,
              borderRadius: 6,
              fontSize: 13,
            }}
          >
            <thead>
              <tr>
                <th style={tableHeader}>Condition</th>
                <th style={tableHeader}>What It Means</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Safety</td>
                <td style={tableCell}>The nervous system must evaluate "safe enough to risk change." Repair cannot happen under threat.</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Relational support</td>
                <td style={tableCell}>New co-regulatory experiences. The nervous system needs to learn the return path through being regulated with.</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Identity flexibility</td>
                <td style={tableCell}>False coherence must loosen enough for new data to enter. The hardest part — because loosening false coherence means losing the regulation it provided.</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Time</td>
                <td style={tableCell}>Capacities develop through repeated experience, not single insight. The back-and-forth between old patterns and new capacity is not the problem — it is the process.</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Structural conditions</td>
                <td style={tableCell}>The environment must not re-wound. Individual repair has limited impact when the person returns daily to conditions that require chronic masking (F9).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "I am not broken. There is nothing to fix. There are capacities to
          develop and a return to learn — and the conditions for this are findable."
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          Map the configuration first. Target the specific capacities that are
          offline or redirected. Provide the relational and experiential conditions
          for development — not just cognitive understanding.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          Capacity development in adults as a measurable outcome. Predicted
          correlation between intervention type (experiential vs. cognitive) and
          degree of capacity change.
        </p>
      </>
    ),
  },
];

// ─── WHAT THE MODEL ESTABLISHES ──────────────────────────────

export const establishes = (
  <div style={{ overflowX: "auto", margin: "0 0 16px" }}>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        border: `1px solid ${BORDER.default}`,
        borderRadius: 6,
        fontSize: 13,
      }}
    >
      <thead>
        <tr>
          <th style={tableHeader}>Component</th>
          <th style={tableHeader}>What It Is</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Three awareness capacities</td>
          <td style={tableCell}>RE (reading others), ER (feeling with others), SEA (knowing one's own states). The calibration system.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Proto-capacities at birth</td>
          <td style={tableCell}>All three present in proto-form. Connected. "Being yourself" = the three capacities integrated.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>The pre-SEA condition</td>
          <td style={tableCell}>Feeling = being. The starting point. Persists into adulthood when SEA never develops.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Awareness teaches awareness</td>
          <td style={tableCell}>The developmental mechanism. The adults' configuration creates the child's environment.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Capacity configuration</td>
          <td style={tableCell}>The specific combination of RE, ER, SEA, and regulation. Predicts chronic mode, identity, and relational patterns.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>SEA as keystone</td>
          <td style={tableCell}>Without SEA, RE is unanchored and ER is unfiltered. SEA provides the internal reference point.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Co-regulation → self-regulation</td>
          <td style={tableCell}>The return path is learned through being regulated with. Not instruction — experience.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>True coherence</td>
          <td style={tableCell}>Narrative aligned with felt experience. Requires all three capacities + regulation.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>False coherence</td>
          <td style={tableCell}>Stable narrative replacing emotional truth. Regulation at the cost of truth.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Tolerance thresholds</td>
          <td style={tableCell}>Calibrated baseline for what to endure. Familiar feels normal, even when costly.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Generational replication</td>
          <td style={tableCell}>Configurations transmit through the nervous system, not through words. Replicates until awareness changes.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Repair</td>
          <td style={tableCell}>Developing what was missing. Building the original. Experience, not explanation.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// ─── KEY FORMULATIONS ────────────────────────────────────────

export const formulations = (
  <ul style={{ paddingLeft: 20, margin: 0 }}>
    {[
      "Being yourself is not a personality. It is what happens when the three capacities are connected.",
      "Awareness teaches awareness — the adults' awareness configuration is the child's developmental environment",
      "Personality is not a type — it is a record of which capacities had conditions to develop and which didn't",
      "The child doesn't learn to regulate through instruction — the child learns to regulate through being regulated with",
      "Love does not override what the nervous system embodies",
      "A caregiver whose SEA is offline cannot provide conditions for a child's SEA to develop",
      "The chain replicates until awareness changes, not just behaviour",
      "Familiar can feel 'normal' even when it is costly",
      "Accurate adaptation to an inaccurate environment",
      "False coherence is not deception — it is regulatory success at the cost of emotional truth",
      "The smooth story should worry you more than the messy one",
      "Not undoing the past — developing what the past didn't provide conditions for",
      "You cannot think your way into felt safety. You can only experience your way there.",
      "Every substitute was built because the original was missing. Repair means building the original.",
    ].map((line, i) => (
      <li
        key={i}
        style={{
          fontSize: 14,
          color: TEXT.secondary,
          lineHeight: 1.7,
          marginBottom: 8,
          fontStyle: "italic",
        }}
      >
        {line}
      </li>
    ))}
  </ul>
);

// ─── RESEARCH FOUNDATIONS ────────────────────────────────────

export const foundations = (
  <div style={{ overflowX: "auto" }}>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        border: `1px solid ${BORDER.default}`,
        borderRadius: 6,
        fontSize: 13,
      }}
    >
      <thead>
        <tr>
          <th style={tableHeader}>Tradition</th>
          <th style={tableHeader}>Key Contribution</th>
          <th style={tableHeader}>Researchers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Attachment Theory</td>
          <td style={tableCell}>Early relationships shape regulatory defaults and conditions for awareness development</td>
          <td style={tableCell}>Bowlby, 1969; Ainsworth, 1978; Main & Hesse, 1990</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Object Relations</td>
          <td style={tableCell}>Authentic experience vs. compliant adaptation; true self vs. false self</td>
          <td style={tableCell}>Winnicott, 1960</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Developmental Neuroscience</td>
          <td style={tableCell}>Right-brain development shapes self and regulatory capacity through early relational experience</td>
          <td style={tableCell}>Schore, 2003</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Interpersonal Neurobiology</td>
          <td style={tableCell}>Mind develops through relationships; integration is health; co-regulation as developmental pathway</td>
          <td style={tableCell}>Siegel, 2012</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Narrative Psychology</td>
          <td style={tableCell}>Coherent narrative as marker of earned security; requires SEA</td>
          <td style={tableCell}>Main & Goldwyn, 1998</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Schema Therapy</td>
          <td style={tableCell}>Early maladaptive schemas as stable childhood patterns</td>
          <td style={tableCell}>Young, Klosko, & Weishaar, 2003</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Polyvagal Theory</td>
          <td style={tableCell}>Neuroception shapes what is safe enough for authentic engagement; co-regulation as foundation for self-regulation</td>
          <td style={tableCell}>Porges, 2011</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Somatic Experiencing</td>
          <td style={tableCell}>Regulation as completion of activation cycle; the body must learn the return</td>
          <td style={tableCell}>Levine, 1997</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Empathy Research</td>
          <td style={tableCell}>Multi-component empathy (cognitive, affective, self-referential)</td>
          <td style={tableCell}>Decety & Jackson, 2004</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Psychoanalytic Theory</td>
          <td style={tableCell}>Defence mechanisms, protective identity structures, projection, self-object needs</td>
          <td style={tableCell}>Freud, 1923; Kohut, 1977; Kernberg, 1975</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Cognitive Psychology</td>
          <td style={tableCell}>Dissonance, motivated reasoning, coherence-seeking</td>
          <td style={tableCell}>Festinger, 1957; Kahneman, 2011; Haidt, 2001</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Intergenerational Transmission</td>
          <td style={tableCell}>Attachment patterns transmit; earned security interrupts transmission; epigenetic effects</td>
          <td style={tableCell}>Main & Hesse; Yehuda; Meaney</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// ─── TEG-BLUE CONTRIBUTION ──────────────────────────────────

export const contribution = (
  <>
    <p style={prose}>
      The three awareness capacities (RE, ER, SEA) as a unified calibration system
      for the Inner Compass — providing the specific mechanism connecting
      developmental conditions to adult capacity, chronic mode, and identity. The
      identification of SEA as the keystone capacity, without which the other two
      cannot serve understanding. The variant maps for each capacity showing how
      the same capacity redirects under different conditions — each as a traceable
      product of a specific environment, not a personality flaw.
    </p>
    <p style={prose}>
      The awareness-teaches-awareness principle as the organising developmental
      mechanism — making the transmission pathway concrete and testable. The
      pre-SEA condition as a named developmental state that persists into adulthood
      with specific, identifiable consequences. The capacity configuration as the
      predictive unit — RE state × ER state × SEA state × regulation = predicted
      compass behaviour, chronic mode, and relational pattern.
    </p>
    <p style={prose}>
      The true coherence / false coherence distinction grounded in the capacity
      model. Tolerance thresholds as a named mechanism linking configuration to
      what the person can and cannot recognise as harm. Generational replication
      through awareness transmission, not instruction. Repair as development of
      what was missing, not recovery of what was lost — with the five conditions
      connecting to the full framework system (F8, F9, F12).
    </p>
    <p style={prose}>
      The individual research traditions are established. The three-capacity model,
      the awareness-teaches-awareness mechanism, the configuration-to-identity
      causal chain, the variant maps, the keystone identification, the coherence
      distinction, and the repair architecture are TEG-Blue's contribution, open
      to testing.
    </p>
  </>
);

// ─── CONNECTION TO PAIRED MODEL ──────────────────────────────

export const connection = (
  <>
    <p style={prose}>
      The Three Awareness Capacities describes <em>what determines</em> how well
      the compass works — which signals get through, how they are processed, and
      whether the person has access to their own internal state.
    </p>
    <p style={prose}>
      But what the compass <em>does</em> with that data — how it orients, what the
      modes are, how it moves, what capacity is available from each position — is
      described by the Inner Compass & Four-Mode Gradient model.
    </p>
    <p style={prose}>
      The two models are inseparable in practice. A person's compass position
      (Inner Compass model) and their capacity configuration (Three Awareness
      Capacities model) are two dimensions of the same reality. The configuration
      explains <em>why</em> the compass is where it is. The compass explains{" "}
      <em>what</em> the configuration produces. Together, they provide a complete
      assessment: where is the needle, what configuration is holding it there, and
      what would need to develop for it to move?
    </p>
    <p style={standaloneLine}>
      The instrument and the calibration. One architecture. Two models. Because
      they answer different questions — and both questions must be asked.
    </p>
  </>
);
