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
      The nervous system continuously evaluates a single question:{" "}
      <strong style={emphasis}>
        "Is there enough safety to engage, or is protection needed?"
      </strong>{" "}
      Every emotional signal the body generates is an answer to this question.
      Every shift in perception, capacity, empathy, and cognition follows from it.
    </p>
    <p style={prose}>
      The Inner Compass is the visual-conceptual model that makes this continuous
      evaluation visible. It is a compass with a moving needle that orients
      between safety and threat. Health is not a position on the compass. Health
      is the needle's capacity to move — to shift toward Protection when threat
      appears and return toward Connection when the threat resolves.
    </p>
    <p style={prose}>
      The Four-Mode Gradient is the full range the compass can access. Two modes
      are body-first — Connection and Protection — the nervous system's responses
      that have been running for millions of years. Two modes are cognition-first
      — Control and Domination — an intelligent evolutionary upgrade that appeared
      when cognition arrived and the system gained range. The four modes sit on a
      continuous gradient, not in four boxes. The compass needle moves along this
      gradient, and any position on the gradient — from full Connection to maximum
      Domination — has a specific, predictable effect on what the person can
      perceive, think, feel, and do.
    </p>
    <p style={prose}>
      In a healthy compass, all four modes are available, all are time-limited
      (except Connection, which is the home base), and all are returnable. The
      needle can go anywhere it needs to go — and come back.
    </p>
    <p style={standaloneLine}>
      The return — regulation — is the mechanism that keeps the compass working.
    </p>
    <p style={prose}>
      When the return is missing — when the needle moves toward threat and cannot
      come back — the compass gets stuck. What should have been a temporary tool
      becomes a permanent position. What should have been minutes of Protection
      becomes a lifetime of vigilance. What should have been a deliberate use of
      Control becomes an identity built around management. The frameworks explain
      how this happens (F2), what maintains it (F3), and what it produces at every
      scale (F4–F7). The model makes it visible: where is the needle, can it move,
      and what does the person have access to from where they are?
    </p>
  </>
);

// ─── 10 CONCEPTS ─────────────────────────────────────────────

export const concepts = [
  // ── CONCEPT 1 ──────────────────────────────────────────────
  {
    title: "Emotions as the Nervous System's Signalling Language",
    body: (
      <>
        <p style={prose}>
          Emotions are not disruptions to clear thinking. They are not noise to be
          filtered out so cognition can work clearly.
        </p>
        <p style={prose}>
          They are the nervous system's signalling language — the medium through
          which the body's continuous evaluation of safety and threat reaches the
          rest of the organism.
        </p>
        <p style={prose}>
          The nervous system runs a distributed evaluation — across the gut, the
          heart, the muscles, the vagus nerve, the amygdala — continuously, below
          conscious awareness. This evaluation produces a finding: safe enough, or
          threat. But a finding without a signal is useless. The organism needs to{" "}
          <em>know</em> what the evaluation found — needs to feel it, orient to it,
          act on it.
        </p>
        <p style={standaloneLine}>
          Emotions are how the finding gets delivered.
        </p>
        <p style={prose}>
          Fear is not an irrational reaction. It is the nervous system's signal
          that its evaluation found threat. Joy is not a luxury. It is the signal
          that the evaluation found safety and connection. Anger is not a loss of
          control. It is the signal that a boundary has been crossed.
        </p>
        <p style={prose}>
          Each emotion carries specific information about what the evaluation
          detected — and each orients the organism toward a specific response.
        </p>
        <p style={prose}>
          This is the body's first language. It was running for millions of years
          before cognition evolved. When cognition arrived, it did not replace this
          language — it added a second one. Cognition can interpret emotional
          signals, override them, or replace them with its own narratives. But the
          emotional signals do not stop being generated.
        </p>
        <p style={standaloneLine}>
          The body keeps talking whether cognition listens or not.
        </p>
        <p style={prose}>
          This shifts the foundational stance from "emotion regulation" — implying
          emotions need controlling — to "signal interpretation" — implying
          emotions carry information that needs reading. The question changes: not{" "}
          <em>"how do I manage this emotion?"</em> but{" "}
          <strong style={emphasis}>"what is this signal telling me?"</strong>
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          What is the emotion signalling? What did the body detect before cognition arrived?
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          Help the person read the signal rather than manage the feeling.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          Emotional signals as measurable outputs of neuroceptive evaluation;
          signal-interpretation competence as a testable variable.
        </p>
      </>
    ),
  },

  // ── CONCEPT 2 ──────────────────────────────────────────────
  {
    title: "The Safety Orientation Question",
    body: (
      <>
        <p style={prose}>
          The single question the nervous system continuously evaluates:
        </p>
        <p style={standaloneLine}>
          "Is there enough safety to engage, or is protection needed?"
        </p>
        <p style={prose}>
          Every emotional signal is, at root, an answer to this question. It
          generates all emotional diversity — from empathy to defensiveness, from
          curiosity to withdrawal. Every emotion is a variation on:{" "}
          <em>safe enough, or not yet.</em>
        </p>
        <p style={prose}>
          This evaluation is automatic, continuous, and below conscious awareness
          — what Porges (2011) calls neuroception. It does not wait for cognition.
          It does not require analysis. It evaluates{" "}
          <em>experienced</em> safety, not objective danger — which is why a person
          can feel threatened in an objectively safe room, or feel safe in an
          objectively dangerous situation.
        </p>
        <p style={prose}>
          The compass reads what the nervous system has learned to recognise as
          safe or threatening, which may not match current reality. This is not a
          flaw. It is a design feature optimised for survival.
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "Am I reacting to what is actually happening, or to what my nervous
          system learned to expect?"
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          Assess what the client's nervous system is evaluating as safe or
          threatening — which may differ entirely from what is objectively present.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          Neuroceptive evaluation as the independent variable; compass position as
          the dependent variable.
        </p>
      </>
    ),
  },

  // ── CONCEPT 3 ──────────────────────────────────────────────
  {
    title: "The Inner Compass — A Moving Needle",
    body: (
      <>
        <p style={prose}>
          The visual-conceptual architecture that organises the entire model. A
          compass with a moving needle that orients between safety and threat.
        </p>
        <p style={prose}>
          The needle is constantly moving. It does not have a "correct" position —
          it points in a direction. The goal is not to arrive at one position and
          stay there. The goal is to point accurately and to move freely.
        </p>
        <p style={prose}>
          A healthy compass moves fluidly as conditions change. It shifts toward
          Protection when threat appears and returns toward Connection when the
          threat passes.
        </p>
        <p style={standaloneLine}>
          Health is not a state. Health is a capacity. Not where the needle is, but
          whether it can move.
        </p>
        <p style={prose}>
          The compass reframes every clinical and personal question. The question
          is never "which mode is this person in?" It is:{" "}
          <strong style={emphasis}>
            "where on the gradient, moving in which direction, and can the needle
            move?"
          </strong>{" "}
          A brief shift into Protection during an argument is proportionate. A
          permanent residence in Control that began in childhood is not. The
          compass makes both visible — and makes the difference between them
          measurable.
        </p>
        <p style={prose}>
          A <strong style={emphasis}>stuck compass</strong> is one where the needle
          has lost its capacity to move. What should have been a temporary
          orientation becomes a chronic position. The person does not experience
          this as being stuck — they experience it as "just who I am." False
          coherence (F3) constructs identity around the locked position, making the
          chronic mode feel natural rather than structural. The model makes the
          stuckness visible, which is the first step toward restoring movement.
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "Where is my needle right now? Can it move? What would help it move?"
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          The primary diagnostic question becomes movement, not category. Assess
          fluidity, not label.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          Compass fluidity as a continuous variable. Stuckness operationalised as
          restricted range of movement across measured states.
        </p>
      </>
    ),
  },

  // ── CONCEPT 4 ──────────────────────────────────────────────
  {
    title: "The Four Modes",
    body: (
      <>
        <p style={prose}>
          The compass has four modes arranged on a continuous gradient. Two are
          body-first. Two are cognition-first. This distinction is qualitative, not
          just quantitative — a different kind of mode, not just a more intense
          one.
        </p>

        <h4 style={subheading}>Connection — Body-First Mode</h4>
        <p style={prose}>
          The nervous system evaluates "safe enough." The body opens. Engage,
          relate, repair, learn. The only mode with no time limit — the home base.
        </p>
        <p style={prose}>
          Perception broadens. Empathy comes fully online. Cognition flexes — can
          hold complexity, tolerate ambiguity, consider multiple perspectives.
          Learning is possible. Repair is possible. Vulnerability is available.
        </p>
        <p style={prose}>
          Connection is not relaxation, not happiness, not the absence of
          difficulty. It is the mode in which the nervous system has enough safety
          to engage with complexity — including painful complexity. Grief
          experienced in Connection is different from grief experienced in
          Protection. Conflict navigated in Connection produces different outcomes
          than conflict navigated in Control.
        </p>

        <h4 style={subheading}>Protection — Body-First Mode</h4>
        <p style={prose}>
          The nervous system evaluates "threat." The body mobilises.
          Fight/flight as primary response; freeze/fawn as energy-depletion
          fallbacks. Designed for minutes to hours — an emergency system.
        </p>
        <p style={prose}>
          Attention narrows to threat-relevant signals. Emotions amplify — fear
          louder, anger sharper. Empathy filters — resonance with the threat source
          decreases. Cognition simplifies — binary thinking, reduced nuance. All of
          this is functional: the system is prioritising survival over complexity.
        </p>
        <p style={prose}>
          Protection is not pathology. It is an extraordinary emergency system. The
          problem is never that the person entered Protection. The problem is when
          Protection — designed for minutes to hours — becomes a permanent address.
        </p>

        <h4 style={subheading}>Control — Cognition-First Mode</h4>
        <p style={prose}>
          The body-first responses are insufficient. Cognition enters the threat
          response. Anticipate, manage, override. A tool, not a residence.
        </p>
        <p style={prose}>
          Strategic thinking about threat. Planning beyond immediate survival.
          Anticipation of future problems. Management of complex situations that
          pure body-level responses cannot handle. In a healthy compass, Control is
          deliberate, time-limited, and returnable. A parent managing a child's
          medical emergency. A leader navigating an organisational crisis.
        </p>
        <p style={standaloneLine}>
          Connection and Protection happen to you. Control and Domination are what
          cognition does when recruited into threat service.
        </p>

        <h4 style={subheading}>Domination — Cognition-First Mode</h4>
        <p style={prose}>
          Control is insufficient. The threat is evaluated as requiring elimination
          or total override. Override, eliminate, secure. Rare. Last resort. The
          furthest reach of the compass.
        </p>
        <p style={prose}>
          Complete override of the relational system. Emotional Resonance drops
          deliberately — not collapsed through failure, but suspended as a
          strategic requirement. Decisions that would be impossible with full
          empathy online.
        </p>
        <p style={prose}>
          In a healthy compass, Domination is the rarest mode: entered
          deliberately, used for the briefest time the situation demands, and
          followed by return. The person feels the cost — the weight of having
          suspended resonance. In a healthy compass, this cost is felt and
          processed. The return happens.
        </p>

        {/* Complete instrument table */}
        <div style={{ overflowX: "auto", margin: "20px 0" }}>
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
                <th style={tableHeader}>Mode</th>
                <th style={tableHeader}>Type</th>
                <th style={tableHeader}>Activation</th>
                <th style={tableHeader}>Sequence</th>
                <th style={tableHeader}>Design Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Connection</td>
                <td style={tableCell}>Body-first</td>
                <td style={tableCell}>Automatic — safety perceived</td>
                <td style={tableCell}>Engage, relate, repair, learn</td>
                <td style={tableCell}>Indefinite — home base</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Protection</td>
                <td style={tableCell}>Body-first</td>
                <td style={tableCell}>Automatic — threat perceived</td>
                <td style={tableCell}>Fight/flight → freeze/fawn</td>
                <td style={tableCell}>Minutes to hours</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Control</td>
                <td style={tableCell}>Cognition-first</td>
                <td style={tableCell}>Deliberate — cognition recruited</td>
                <td style={tableCell}>Anticipate → Manage → Override</td>
                <td style={tableCell}>Time-limited — tool</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Domination</td>
                <td style={tableCell}>Cognition-first</td>
                <td style={tableCell}>Deliberate — cognition at maximum</td>
                <td style={tableCell}>Override → Eliminate → Secure</td>
                <td style={tableCell}>Rare — last resort</td>
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
          "Which mode am I in right now? Is this proportionate to what is actually
          happening? Can I come back?"
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          Introduce the four modes as designed tools, not pathology. The goal is
          never to eliminate Control or Domination — the goal is to restore the
          return.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          Four-mode classification as operationalisable states; body-first /
          cognition-first distinction as a qualitative variable; design duration
          vs. actual duration as a measure of stuckness.
        </p>
      </>
    ),
  },

  // ── CONCEPT 5 ──────────────────────────────────────────────
  {
    title: "The Gradient",
    body: (
      <>
        <p style={prose}>
          The four modes are not four boxes. They are positions on a continuous
          gradient from full Connection to maximum Domination. The compass needle
          moves along this gradient.
        </p>
        <p style={prose}>
          The gradient means there are no hard boundaries between modes — there
          are shifts, transitions, degrees. A person can be slightly in Protection,
          deep in Control, at the edge of Domination. The gradient makes the
          compass clinically precise: not "which box?" but "where on the gradient,
          and moving in which direction?"
        </p>
        <p style={prose}>
          The gradient also makes visible what happens between the modes:
        </p>
        <ul style={{ paddingLeft: 20, margin: "0 0 16px" }}>
          <li style={{ ...prose, marginBottom: 8 }}>
            <strong style={emphasis}>Connection → Protection:</strong> The shift
            from open to defensive. Automatic. The body responding to perceived
            threat.
          </li>
          <li style={{ ...prose, marginBottom: 8 }}>
            <strong style={emphasis}>Protection → Control:</strong> The shift from
            body-level response to cognitive management. Cognition gets recruited.
            This is the point where the architectural break between body-first and
            cognition-first occurs.
          </li>
          <li style={{ ...prose, marginBottom: 8 }}>
            <strong style={emphasis}>Control → Domination:</strong> The shift from
            strategic management to elimination. The most consequential transition
            on the gradient — the Crossroads (F7) where defence becomes strategy.
          </li>
        </ul>
        <p style={prose}>
          Each transition is recognisable. Each is interruptible. The gradient
          makes intervention targeted: not "help this person" but "help this person
          at this specific point on the gradient, moving in this specific
          direction."
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "Where am I on the gradient? Am I moving toward safety or toward threat?"
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          Track compass position over time. Note direction of movement, not just
          current position. The gradient makes the proportionality question visible.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          The gradient as a continuous measure rather than categorical
          classification. Movement rate, range, and direction as primary variables.
        </p>
      </>
    ),
  },

  // ── CONCEPT 6 ──────────────────────────────────────────────
  {
    title: "State Determines Capacity",
    body: (
      <>
        <p style={prose}>
          What you can perceive, think, feel, and do depends on your current
          position on the gradient. This is not a metaphor. It is the operational
          consequence of how the nervous system organises resources under different
          levels of perceived safety.
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
                <th style={tableHeader}>Capacity</th>
                <th style={tableHeader}>Connection</th>
                <th style={tableHeader}>Protection</th>
                <th style={tableHeader}>Control</th>
                <th style={tableHeader}>Domination</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Perception</td>
                <td style={tableCell}>Broad — sees the full field</td>
                <td style={tableCell}>Narrowed — sees threat-relevant signals</td>
                <td style={tableCell}>Strategic — sees what needs managing</td>
                <td style={tableCell}>Tunnel — sees obstacles and resources</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Empathy</td>
                <td style={tableCell}>Full — RE, ER, and SEA online and serving understanding</td>
                <td style={tableCell}>Filtered — resonance with threat source decreases</td>
                <td style={tableCell}>Redirected — RE sharp but serving strategy, not understanding</td>
                <td style={tableCell}>Collapsed — ER offline; RE may be weaponised</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Cognition</td>
                <td style={tableCell}>Flexible — holds complexity, tolerates ambiguity</td>
                <td style={tableCell}>Simplified — binary thinking, reduced nuance</td>
                <td style={tableCell}>Strategic — planning, anticipation; narrowed to threat domain</td>
                <td style={tableCell}>Locked — rigid, certain, self-confirming</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Learning</td>
                <td style={tableCell}>Available — new information can be integrated</td>
                <td style={tableCell}>Reduced — contradicting information filtered</td>
                <td style={tableCell}>Selective — learning in service of strategy only</td>
                <td style={tableCell}>Unavailable — system not open to revision</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Relational capacity</td>
                <td style={tableCell}>Full — repair, vulnerability, trust available</td>
                <td style={tableCell}>Limited — vulnerability feels dangerous</td>
                <td style={tableCell}>Managed — relationships serve the strategy</td>
                <td style={tableCell}>Absent — others are resources, obstacles, or threats</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={standaloneLine}>
          Restore safety first, then expect capacity.
        </p>
        <p style={prose}>
          If a person cannot learn, cannot empathise, cannot think flexibly — the
          first question is not "what is wrong with this person?" The first
          question is: <strong style={emphasis}>"where is their compass?"</strong>{" "}
          Change the state, and the capacity changes. This is not a personality
          limitation. It is a state limitation.
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "What am I not able to see, think, or feel right now — and is that
          because of where my compass is?"
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          Before expecting cognitive flexibility, empathic engagement, or
          behavioural change, assess compass position. If the compass is in a
          threat mode, the capacity you are expecting is structurally unavailable.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          State-capacity correspondence as a testable prediction. Compass position
          as the independent variable; cognitive flexibility, empathic accuracy,
          and learning capacity as dependent variables.
        </p>
      </>
    ),
  },

  // ── CONCEPT 7 ──────────────────────────────────────────────
  {
    title: "Same Emotion, Two Expressions",
    body: (
      <>
        <p style={prose}>
          Every emotion has two expressions — one in Connection and one in the
          threat modes. The emotion is the same. What it does depends on the
          compass position.
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
                <th style={tableHeader}>Emotion</th>
                <th style={tableHeader}>In Connection</th>
                <th style={tableHeader}>In Threat Modes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Anger</td>
                <td style={tableCell}>Signals a boundary has been crossed; motivates repair and clarity</td>
                <td style={tableCell}>Mobilises defence; escalates conflict; becomes attack</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Fear</td>
                <td style={tableCell}>Signals genuine threat; promotes appropriate caution</td>
                <td style={tableCell}>Generalises; becomes hypervigilance; restricts engagement</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Sadness</td>
                <td style={tableCell}>Processes loss; invites support and reflection</td>
                <td style={tableCell}>Becomes withdrawal; deepens isolation; hardens into hopelessness</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Joy</td>
                <td style={tableCell}>Celebrates; connects; broadens capacity</td>
                <td style={tableCell}>Is distrusted; feels dangerous; may trigger threat</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Love</td>
                <td style={tableCell}>Opens; deepens; sustains</td>
                <td style={tableCell}>Attaches with desperation; becomes possession; masks control</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Shame</td>
                <td style={tableCell}>Signals misalignment; motivates repair</td>
                <td style={tableCell}>Becomes identity ("I am wrong"); drives hiding, self-punishment</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Guilt</td>
                <td style={tableCell}>Signals harm done; motivates accountability</td>
                <td style={tableCell}>Becomes paralysis; drives excessive self-blame or defensive denial</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Disgust</td>
                <td style={tableCell}>Protects boundaries; signals contamination</td>
                <td style={tableCell}>Dehumanises; creates othering; justifies exclusion</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Curiosity</td>
                <td style={tableCell}>Explores; learns; builds understanding</td>
                <td style={tableCell}>Becomes surveillance; information-gathering for control</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Grief</td>
                <td style={tableCell}>Processes what was lost or never had; creates space for what comes next</td>
                <td style={tableCell}>Becomes stuck mourning; blocked by false coherence; unexperienced</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={prose}>
          The clinical reframe:{" "}
          <strong style={emphasis}>
            assess mode position, not the emotion.
          </strong>{" "}
          Anger in Connection and anger in Domination are the same emotional signal
          producing entirely different outcomes. Treating "anger" as the problem
          misses the actual variable: where the compass is when the anger arrives.
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "Is this emotion serving understanding or defence?"
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          When a client presents with an emotion, the first question is not "what
          emotion?" but "from what compass position?" The intervention changes
          accordingly.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          Emotional expression as a function of compass position; same
          self-reported emotion producing measurably different outcomes depending
          on state.
        </p>
      </>
    ),
  },

  // ── CONCEPT 8 ──────────────────────────────────────────────
  {
    title: "Regulation — The Return",
    body: (
      <>
        <p style={prose}>
          Regulation is the built-in mechanism by which the nervous system returns
          from threat to safety. The body moves toward Protection, does what it
          needs to do, and comes back. The compass needle shifts and returns. This
          is the design.
        </p>
        <p style={prose}>
          Regulation is not a skill imposed from outside — it is a process the
          system was built to run. The return applies across the full gradient.
          Recovery is walking the nervous system back — from wherever it went. It
          is not a cognitive process. The body does not reason its way back to
          safety. It returns through the same somatic channels it departed through:
          the breath that accelerated must slow, the muscles that braced must
          release, the hormones that flooded must clear.
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
                <th style={tableHeader}>Pathway</th>
                <th style={tableHeader}>How It Works</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Breathing</td>
                <td style={tableCell}>
                  Slow exhalation activates the vagal brake, signalling safety to
                  the autonomic system.
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Grounding</td>
                <td style={tableCell}>
                  Sensory contact with the present environment helps the system
                  recalibrate from the threat that was to the reality that is.
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Co-regulation</td>
                <td style={tableCell}>
                  Another person's regulated nervous system sending safety signals
                  through tone, touch, rhythm, presence.
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Time</td>
                <td style={tableCell}>
                  The body completing the activation cycle when given space to do
                  so without interruption.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={prose}>
          These are not therapeutic techniques. They are the pathways the nervous
          system was designed to use. Therapy that works through the body works
          because it supports what the body was already designed to do.
        </p>
        <p style={prose}>
          <strong style={emphasis}>When the return is missing,</strong> the compass
          gets stuck. What should have been temporary becomes permanent. This is
          the question that connects the model to the full framework system: what
          happens when the return is never learned? F2 explains the developmental
          conditions. F3 explains what cognition does instead. F4–F7 explain what
          the substitutes produce at collective scale. F8 explains how to build the
          return in adulthood.
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "Can I come back? What helps my nervous system return? What blocks it?"
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          Teach regulation as return, not as control. Support the body's existing
          pathway rather than imposing cognitive management. Assess whether the
          return has ever been learned.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          Return capacity as a measurable variable. Speed of return, completeness
          of return, and the conditions that facilitate or block return as
          operationalisable outcomes.
        </p>
      </>
    ),
  },

  // ── CONCEPT 9 ──────────────────────────────────────────────
  {
    title: "The Stuck Compass — When Modes Become Chronic",
    body: (
      <>
        <p style={prose}>
          When the return mechanism is absent — when it was never learned through
          co-regulation (F2), or when environmental conditions prevent it (F9) —
          the compass gets stuck. A mode that was designed to be temporary becomes
          a permanent position. The person lives in the mode. Identity forms around
          it (F3). The mode stops feeling like a mode and starts feeling like "who
          I am."
        </p>

        <h4 style={subheading}>Chronic Protection</h4>
        <p style={prose}>
          Permanent vigilance. The world is read as dangerous. Relationships are
          approach-avoidance. Energy is consumed by threat-scanning. The body never
          comes back.
        </p>

        <h4 style={subheading}>Chronic Control</h4>
        <p style={prose}>
          Permanent management. Relationships are managed for predictability.
          Emotions are replaced by narratives. The person appears functional —
          often high-functioning — because cognitive regulation is efficient. But
          the biological return is absent. The cost is truth, spontaneity, and
          genuine intimacy. Chronic Control is the mode that most reliably mimics
          healthy Connection (F3) — strategic warmth, managed closeness, performed
          empathy — making the stuckness invisible.
        </p>

        <h4 style={subheading}>Chronic Domination</h4>
        <p style={prose}>
          Permanent override. Others are resources or obstacles. Empathy is
          collapsed or weaponised. The system builds tolerance — the same level of
          control produces diminishing relief — and escalates (F7). There is no
          natural stopping point.
        </p>

        <p style={prose}>
          The model's contribution to understanding stuckness: the compass makes
          chronic modes visible as{" "}
          <strong style={emphasis}>positions, not personalities.</strong> The
          person in chronic Control is not "a controlling person." They are a
          person whose compass has been stuck in Control — likely since childhood —
          because the return was never learned. The identity built around the mode
          is false coherence (F3), not character. This changes the intervention:
          not "fix the personality" but "restore the return."
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "Is this who I am, or is this where my compass has been stuck?"
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          Assess chronic mode position. Ask: when did this mode become default? Was
          the return ever available? What maintains the stuckness?
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          Chronic mode position as a primary classification variable. Duration,
          onset, and rigidity of stuck position as measurable dimensions.
        </p>
      </>
    ),
  },

  // ── CONCEPT 10 ─────────────────────────────────────────────
  {
    title: "The Two Information Systems — Why Understanding Doesn't Equal Change",
    body: (
      <>
        <p style={prose}>
          Underneath the compass — underneath everything — are two parallel
          information systems running simultaneously at different speeds (F12):
        </p>
        <p style={prose}>
          <strong style={emphasis}>The emotional-somatic system:</strong>{" "}
          milliseconds. Unconscious. Experience-based. Slow to update, slow to
          forget. The body's first language.
        </p>
        <p style={prose}>
          <strong style={emphasis}>The cognitive-logical system:</strong>{" "}
          hundreds of milliseconds. Conscious. Explanation-based. Fast to update,
          fast to revise. The body's second language.
        </p>
        <p style={prose}>
          The emotional-somatic system arrives first. By the time cognition
          engages, the compass has already moved. Cognition does not direct the
          process — it narrates a process already underway.
        </p>
        <p style={prose}>
          This is why a person can read F1–F12, understand the entire
          architecture, see their own pattern clearly — and still do the thing.
          Still enter chronic Control under stress. Still mask. Still react from
          the stuck position.
        </p>
        <p style={standaloneLine}>
          Understanding is cognitive. The compass is somatic. More cognition
          doesn't move a somatic compass.
        </p>
        <p style={prose}>
          What moves the compass is experience — new experiences of safety, new
          experiences of co-regulation, new experiences of the return actually
          happening. Cognition supports. Experience changes.
        </p>
      </>
    ),
    application: (
      <>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the individual: </span>
          "I understand the pattern. That is valuable. Now I need experiences — not
          more understanding — to change it."
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the practitioner: </span>
          Insight is the cognitive system's contribution. But the compass moves
          through the emotional-somatic system. Match the intervention to the
          system that needs to change.
        </p>
        <p style={applicationItem}>
          <span style={applicationLabel}>For the researcher: </span>
          The insight-behaviour gap as a testable prediction of the two-system
          model. Interventions matched to the emotional-somatic system predicted to
          produce more compass movement than cognitive-only interventions.
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
          <td style={{ ...tableCell, fontWeight: 600 }}>The compass</td>
          <td style={tableCell}>A moving needle orienting between safety and threat. Health = movement.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>The safety orientation question</td>
          <td style={tableCell}>"Is there enough safety to engage, or is protection needed?" — continuously evaluated.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Emotions as signals</td>
          <td style={tableCell}>The body's first language. What the evaluation finds, delivered as feeling.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Four modes</td>
          <td style={tableCell}>Connection (body-first, home base), Protection (body-first, emergency), Control (cognition-first, strategic), Domination (cognition-first, maximum).</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>The gradient</td>
          <td style={tableCell}>Continuous range, not four boxes. Position and direction, not category.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>State determines capacity</td>
          <td style={tableCell}>What you can perceive, think, and do follows from where the needle is.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Same emotion, two expressions</td>
          <td style={tableCell}>Mode position, not emotion type, determines outcome.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Regulation — the return</td>
          <td style={tableCell}>The built-in mechanism of coming back. Health is the full cycle.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Stuck compass</td>
          <td style={tableCell}>When the return is missing and a mode becomes chronic.</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Two information systems</td>
          <td style={tableCell}>Emotional-somatic and cognitive-logical, different speeds. Understanding ≠ change.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// ─── KEY FORMULATIONS ────────────────────────────────────────

export const formulations = (
  <ul style={{ paddingLeft: 20, margin: 0 }}>
    {[
      "The body's first language — cognition is the second",
      "The question is not 'how do I manage this emotion?' but 'what is this signal telling me?'",
      "Health is not staying in Connection permanently — health is the ability to move through the gradient and come back",
      "Regulation is the mechanism of coming back",
      "State determines capacity",
      "Restore safety first, then expect capacity",
      "Assess mode position, not the emotion",
      "The problem is never the mechanism — it is what the mechanism learned",
      "Connection and Protection happen to you — Control and Domination are what cognition does when recruited into threat service",
      "The goal is not to eliminate Control or Domination — the goal is to restore the return",
      "Protection was designed for minutes to hours — not a lifetime",
      "You are not dealing with a person. You are dealing with a person in a state. Change the state, and the person who shows up is different.",
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
          <td style={{ ...tableCell, fontWeight: 600 }}>Polyvagal Theory</td>
          <td style={tableCell}>Neuroception, autonomic states, social engagement, vagal brake, co-regulation</td>
          <td style={tableCell}>Porges, 2011; Dana, 2018</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Affective Neuroscience</td>
          <td style={tableCell}>Emotions as functional biological systems; somatic markers</td>
          <td style={tableCell}>Panksepp, 1998; Damasio, 1994; LeDoux, 1996</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Trauma Research</td>
          <td style={tableCell}>Nervous systems calibrate to chronic threat; regulation as completion of activation cycle</td>
          <td style={tableCell}>van der Kolk, 2014; Levine, 1997</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Attachment Theory</td>
          <td style={tableCell}>Safety shapes development and regulation</td>
          <td style={tableCell}>Bowlby, 1969; Schore, 2003</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Emotion Science</td>
          <td style={tableCell}>State shapes cognitive and relational capacity; broaden-and-build</td>
          <td style={tableCell}>Fredrickson, 2001; Frijda, 1986</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Developmental Neuroscience</td>
          <td style={tableCell}>Relationship shapes brain architecture and regulatory capacity</td>
          <td style={tableCell}>Siegel, 2012; Schore, 2003</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Stress Physiology</td>
          <td style={tableCell}>Stress response designed for acute activation; chronic activation produces allostatic load</td>
          <td style={tableCell}>Sapolsky, 2004; McEwen, 2000</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Dual-Process Theory</td>
          <td style={tableCell}>Two processing systems at different speeds</td>
          <td style={tableCell}>Kahneman, 2011; Stanovich; Evans</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Evolutionary Psychology</td>
          <td style={tableCell}>Cognition evolved to solve survival problems body-level responses alone could not</td>
          <td style={tableCell}>Established literature</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// ─── TEG-BLUE CONTRIBUTION ──────────────────────────────────

export const contribution = (
  <>
    <p style={prose}>
      The Inner Compass as a unified visual-conceptual architecture making the
      nervous system's safety/threat orientation tangible, clinically usable, and
      personally recognisable. The reframe of health from a state to a capacity —
      not where the needle is, but whether it can move. The four-mode gradient as
      a continuous range with two body-first modes inherited from evolution and two
      cognition-first modes that emerged with cognition — an intelligent upgrade,
      not pathology.
    </p>
    <p style={prose}>
      The architectural break between body-first and cognition-first as a
      qualitative distinction. The principle "state determines capacity" tracked
      across all four modes as a clinically actionable framework. The ten-emotion
      two-expression mapping showing that mode position, not emotion type,
      determines outcome. The positioning of regulation as the built-in return
      mechanism across the full gradient.
    </p>
    <p style={prose}>
      The integration of the two information systems (F12) showing why
      understanding doesn't equal change and why matched intervention matters. The
      individual research traditions are established. The model — the compass
      architecture, the four-mode gradient, the clinical reframes, and the unified
      visual tool — is TEG-Blue's contribution, open to testing.
    </p>
  </>
);

// ─── CONNECTION TO PAIRED MODEL ──────────────────────────────

export const connection = (
  <>
    <p style={prose}>
      The Inner Compass describes <em>what</em> the nervous system does — how it
      orients, what the modes are, how it moves, what determines capacity.
    </p>
    <p style={prose}>
      But what determines <em>how well</em> the compass works? What determines
      whether the needle reads accurately, whether the return mechanism functions,
      whether the person can actually use the information the compass provides?
    </p>
    <p style={prose}>
      The answer is the three awareness capacities: Reading Emotions (RE),
      Emotional Resonance (ER), and Self-Emotional Awareness (SEA). These
      capacities determine what data the compass receives, how that data is
      processed, and whether the person has access to their own internal state.
      When the capacities are online, the compass reads accurately and moves
      freely. When they are compromised, the compass misreads, narrows, or gets
      stuck.
    </p>
    <p style={standaloneLine}>
      The Inner Compass is the instrument. The Three Awareness Capacities is the
      calibration. One describes the architecture. The other describes what
      determines how well the architecture functions.
    </p>
  </>
);
