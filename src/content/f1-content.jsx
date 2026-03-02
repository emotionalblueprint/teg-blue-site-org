"use client";

import { TEXT, FONT, BORDER, SPECTRUM, hexToRgba } from "@/src/styles/tokens";

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

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  border: `1px solid ${BORDER.default}`,
  borderRadius: 6,
  fontSize: 13,
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

// ─── WHAT THIS FRAMEWORK PROPOSES ─────────────────────────

export const proposal = (
  <>
    <p style={prose}>
      Emotions are not disruptions to clear thinking. They are not noise to be
      filtered out so cognition can work clearly.
    </p>
    <p style={prose}>
      They are the nervous system&rsquo;s signalling language &mdash; the medium
      through which the body&rsquo;s continuous evaluation of safety and threat
      gets communicated to the rest of the organism.
    </p>
    <p style={prose}>
      The nervous system runs a distributed evaluation process &mdash; across the
      gut, the heart, the muscles, the vagus nerve, the amygdala &mdash;
      assessing the environment continuously, below conscious awareness. This
      evaluation produces a finding: safe enough, or threat. But a finding
      without a signal is useless. The organism needs to <em>know</em> what the
      evaluation found &mdash; needs to feel it, orient to it, act on it.
    </p>
    <p style={standaloneLine}>
      Emotions are how the finding gets delivered.
    </p>
    <p style={prose}>
      Fear is not an irrational reaction. It is the nervous system&rsquo;s signal
      that its evaluation found threat. Joy is not a luxury. It is the signal
      that the evaluation found safety and connection. Anger is not a loss of
      control. It is the signal that a boundary has been crossed.
    </p>
    <p style={prose}>
      Each emotion carries specific information about what the evaluation
      detected &mdash; and each orients the organism toward a specific response.
    </p>
    <p style={standaloneLine}>
      This is the body&rsquo;s first language. Cognition is the second.
    </p>
    <p style={prose}>
      Cognition arrived millions of years later. It can interpret emotional
      signals, override them, or replace them with its own narratives. But the
      emotional signals do not stop being generated. The body keeps talking
      whether cognition listens or not.
    </p>
    <p style={prose}>
      This shifts the foundational stance from &ldquo;emotion regulation&rdquo;
      &mdash; implying emotions need controlling &mdash; to &ldquo;signal
      interpretation&rdquo; &mdash; implying emotions carry information that
      needs reading. The question changes:
    </p>
    <p style={standaloneLine}>
      Not &ldquo;how do I manage this emotion?&rdquo; but &ldquo;what is this
      signal telling me?&rdquo;
    </p>
    <p style={prose}>
      The nervous system continuously evaluates one question:{" "}
      <strong style={emphasis}>
        &ldquo;Is there enough safety to engage, or is protection needed?&rdquo;
      </strong>{" "}
      Every emotional signal is, at root, an answer to this question. It
      determines whether learning is possible or defence is required, whether
      trust is available or verification is needed, whether vulnerability is safe
      or control is necessary.
    </p>
    <p style={prose}>
      This two-mode orientation &mdash; engage or protect &mdash; has been
      independently identified across six research traditions: Polyvagal Theory
      (Porges), Motivational Science (Gray, Carver &amp; Scheier), Positive
      Psychology (Fredrickson), Trauma Theory (Siegel, Ogden), Attachment Theory
      (Bowlby), and Trauma Research (van der Kolk, Walker). No existing work maps
      them systematically against each other to show they describe the same
      mechanism. That integration &mdash; making visible that polyvagal states,
      approach/avoidance, broaden-and-build, window of tolerance, secure base,
      and fight/flight/freeze/fawn are all describing the same orientation &mdash;
      is what this framework provides.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>The Inner Compass &mdash; A Moving Needle</h4>
    <p style={prose}>
      The nervous system&rsquo;s continuous orientation between safety and threat
      can be understood through the metaphor of a compass. The needle is always
      moving. It does not have a &ldquo;correct&rdquo; position &mdash; it points
      in a direction. A healthy compass moves fluidly between Connection and
      Protection as conditions change.
    </p>
    <p style={standaloneLine}>
      Health is not staying in Connection permanently. Health is the needle
      moving &mdash; responding, orienting, and coming back.
    </p>

    <h4 style={subheading}>Signal to Mode in Milliseconds</h4>
    <p style={prose}>
      The compass needle moves through a four-step sequence that completes before
      conscious awareness begins:
    </p>
    <p style={prose}>
      (1) <strong style={emphasis}>Signal reception</strong> &mdash;
      exteroceptive, interoceptive, and memory-based signals arrive continuously.
      (2) <strong style={emphasis}>Neuroception</strong> &mdash; the nervous
      system evaluates <em>experienced</em> safety, not objective danger, through
      pattern-matching from past experience.
      (3) <strong style={emphasis}>Autonomic response</strong> &mdash;
      cardiovascular, respiratory, muscular, and hormonal preparation occurs.
      (4) <strong style={emphasis}>Mode activation</strong> &mdash; the system
      organises into Connection or Protection configuration.
    </p>
    <p style={prose}>
      By the time conscious awareness registers &ldquo;an emotion,&rdquo; the
      system has already acted. The compass needle has already moved.
    </p>
    <p style={prose}>
      The system is fast by design. Evolution solved survival by building an
      embodied evaluation system that orients the organism before conscious
      thought begins. The cost of speed: the system can orient to learned
      patterns rather than current reality. When it responds to a pattern from
      the past as though it is happening now, the person is not
      &ldquo;overreacting.&rdquo; The compass is working exactly as designed
      &mdash; it just learned its patterns in conditions that no longer apply.
    </p>
    <p style={standaloneLine}>
      The problem is never the mechanism. The problem is what the mechanism
      learned.
    </p>

    <h4 style={subheading}>Connection &mdash; Body-First</h4>
    <p style={prose}>
      When sufficient safety is perceived, the compass needle settles toward
      Connection. This is the system&rsquo;s home base &mdash; the only mode
      designed for sustained living with no time limit. Perception broadens. The
      full empathy set comes online. Cognitive flexibility increases. Repair
      becomes possible.
    </p>
    <p style={prose}>
      Connection is not &ldquo;calm.&rdquo; It is not the absence of feeling. It
      is the state where the system has sufficient safety to engage with
      challenge, complexity, and even distress without the nervous system treating
      them as threats. A person in Connection can grieve, argue, problem-solve,
      and sit with discomfort &mdash; because the compass is oriented toward
      safety, not because the situation is safe.
    </p>

    <h4 style={subheading}>Protection &mdash; Body-First</h4>
    <p style={prose}>
      When threat is perceived, the compass needle swings toward Protection. The
      entire system mobilises. This is expensive &mdash; by design. Protection
      was meant to last from a few minutes to a few hours. It is the body&rsquo;s
      emergency response, not its operating mode.
    </p>
    <p style={prose}>
      Fight and flight are the primary responses &mdash; active, energised,
      directed. Freeze and fawn are fallbacks when energy depletes &mdash; not
      weakness, but the system conserving resources when active responses are
      unavailable. Attention narrows toward threat. Emotions amplify. Resonance
      filters to survival-relevant data. All temporary.
    </p>
    <p style={standaloneLine}>
      Protection is intelligent design for genuine threat. The question is always
      whether the current mode is proportionate &mdash; and whether the system
      can return.
    </p>

    <h4 style={subheading}>Control and Domination &mdash; Cognition-First</h4>
    <p style={prose}>
      For millions of years, the body had two modes and they were enough. Then
      cognition evolved. And the compass gained range.
    </p>
    <p style={prose}>
      When body-level responses are insufficient &mdash; when the threat is too
      complex, too sustained, or too strategic for fight/flight/freeze/fawn to
      resolve &mdash; the system recruits the next tool available: cognition.{" "}
      <strong style={emphasis}>Control</strong> (anticipate &rarr; manage &rarr;
      override) and <strong style={emphasis}>Domination</strong> (override &rarr;
      eliminate &rarr; secure) are cognition-first modes. In a healthy compass,
      they are time-limited tools: deliberately entered, consciously used, and
      returned from when the situation resolves.
    </p>
    <p style={standaloneLine}>
      Connection and Protection happen to you. Control and Domination are what
      cognition does when recruited into threat service.
    </p>
    <p style={prose}>
      This is not pathology. It is an upgrade. The most sophisticated survival
      tools the species ever developed. The goal is not to eliminate Control or
      Domination &mdash; the goal is to restore the return.
    </p>

    <h4 style={subheading}>The Gradient</h4>
    <p style={prose}>
      The four modes are not four boxes. They are positions on a continuous
      gradient from full Connection to maximum Domination. The compass needle
      moves along this gradient. A healthy compass has access to the full range.
      A stuck compass is locked at one position.
    </p>
    <p style={prose}>
      The gradient makes the compass clinically precise: not &ldquo;which
      box?&rdquo; but &ldquo;where on the gradient, and moving in which
      direction?&rdquo;
    </p>

    <div style={{ overflowX: "auto", margin: "16px 0" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeader}>Mode</th>
            <th style={tableHeader}>Type</th>
            <th style={tableHeader}>Activation</th>
            <th style={tableHeader}>Design Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Connection</td>
            <td style={tableCell}>Body-first</td>
            <td style={tableCell}>Automatic &mdash; safety perceived</td>
            <td style={tableCell}>Indefinite &mdash; home base</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Protection</td>
            <td style={tableCell}>Body-first</td>
            <td style={tableCell}>Automatic &mdash; threat perceived</td>
            <td style={tableCell}>Minutes to hours</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Control</td>
            <td style={tableCell}>Cognition-first</td>
            <td style={tableCell}>Deliberate &mdash; cognition recruited</td>
            <td style={tableCell}>Time-limited &mdash; tool</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Domination</td>
            <td style={tableCell}>Cognition-first</td>
            <td style={tableCell}>Deliberate &mdash; cognition at maximum</td>
            <td style={tableCell}>Rare &mdash; last resort</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4 style={subheading}>Regulation &mdash; The Return Mechanism</h4>
    <p style={prose}>
      The compass was designed to move &mdash; and to come back. Everything
      described above was designed to be temporary. The mechanism by which the
      body returns from threat response to connection is{" "}
      <strong style={emphasis}>regulation</strong>.
    </p>
    <p style={prose}>
      Recovery is walking the nervous system back toward safety. The body does
      not reason its way back. It returns through the same somatic channels it
      departed through: the breath that accelerated must slow, the muscles that
      braced must release, the hormones that flooded must clear.
    </p>
    <p style={prose}>
      This happens through the body&rsquo;s own completion pathways:{" "}
      <strong style={emphasis}>breathing</strong> (slow exhalation activates the
      vagal brake), <strong style={emphasis}>grounding</strong> (sensory contact
      recalibrates from past threat to present reality),{" "}
      <strong style={emphasis}>co-regulation</strong> (another person&rsquo;s
      regulated system sending safety signals), and{" "}
      <strong style={emphasis}>time</strong> (the body completing the activation
      cycle). These are not therapeutic techniques. They are the pathways the
      nervous system was designed to use.
    </p>
    <p style={standaloneLine}>
      Health is not the absence of Protection. Health is the full cycle &mdash;
      the ability to move into threat response when needed and come back when the
      threat has passed.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>State Determines Capacity</h4>
    <p style={prose}>
      What a person can perceive, think, feel, and do depends on their current
      position on the gradient. This is not a metaphor. It is neurobiological
      reality.
    </p>
    <p style={prose}>
      In Connection: perception is broad, empathy is full, cognition is flexible,
      and repair is available. In Protection: perception narrows to threat,
      empathy filters to survival-relevant data, cognition simplifies for speed,
      and learning shuts down. In Control: perception narrows to strategic
      variables, empathy is deprioritised, and cognition becomes focused but
      rigid. In Domination: perception collapses to binary, empathy drops to
      near-zero, and cognition narrows to elimination of the obstacle.
    </p>
    <p style={prose}>
      The inability to understand another person in a given moment may not be
      unwillingness. The current state has literally reduced the neurobiological
      capacity to do so. A person in Protection who cannot see your perspective
      is not choosing to ignore it. Their perceptual field has narrowed. Their
      resonance has filtered. Their cognition has simplified. The capacity is not
      available &mdash; not because it doesn&rsquo;t exist, but because the state
      has restricted access to it.
    </p>
    <p style={standaloneLine}>
      Restore safety first, then expect capacity.
    </p>

    <h4 style={subheading}>Same Emotion, Two Expressions</h4>
    <p style={prose}>
      Every emotion has two possible expressions, determined by where the compass
      needle is pointing when the emotion arises.
    </p>
    <p style={prose}>
      Anger in Connection sets boundaries with honesty. In Protection it becomes
      explosive and reactive. Trust in Connection enables openness. In Protection
      it becomes strategic calculation. Joy in Connection is present and embodied.
      In Protection it becomes manic or denied. Love in Connection opens and
      sustains. In Protection it attaches with desperation.
    </p>
    <p style={prose}>
      The compass determines the expression. The same biological signal produces
      different behaviour depending on mode position. When someone presents with
      a &ldquo;problematic emotion,&rdquo; the question is not &ldquo;what
      emotion is this?&rdquo; but:
    </p>
    <p style={standaloneLine}>
      Where is the compass when this emotion arrives?
    </p>

    <h4 style={subheading}>When the Return Is Missing</h4>
    <p style={prose}>
      F1 describes the complete instrument in healthy operation. But the compass
      is only as good as its calibration.
    </p>
    <p style={prose}>
      The modes that should be time-limited tools become permanent positions when
      the return path was never learned. When the environment that calibrated the
      compass was itself stuck in threat &mdash; when there was no co-regulation
      available, when the activation never completed &mdash; the compass gets
      stuck. What should have been minutes of Protection becomes a lifetime of
      vigilance. What should have been a deliberate use of Control becomes an
      identity built around management.
    </p>
    <p style={prose}>
      This is the subject of F2: how the instrument gets calibrated, and what
      happens when the calibration fails.
    </p>
  </>
);

// ─── SCIENTIFIC FOUNDATIONS ───────────────────────────────

export const foundations = (
  <>
    <div style={{ overflowX: "auto", margin: "16px 0" }}>
      <table style={tableStyle}>
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
            <td style={tableCell}>
              Neuroception, autonomic states, social engagement, the vagal
              brake, co-regulation
            </td>
            <td style={tableCell}>Porges, 2011; Dana, 2018</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Affective Neuroscience
            </td>
            <td style={tableCell}>
              Emotions as functional biological systems; somatic markers
            </td>
            <td style={tableCell}>
              Panksepp, 1998; Damasio, 1994; LeDoux, 1996
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Trauma Research</td>
            <td style={tableCell}>
              Nervous systems calibrate to chronic threat; incomplete threat
              response stored in the body; regulation as completion of the
              activation cycle
            </td>
            <td style={tableCell}>van der Kolk, 2014; Levine, 1997</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Attachment Theory
            </td>
            <td style={tableCell}>
              Safety shapes development and regulation
            </td>
            <td style={tableCell}>Bowlby, 1969; Schore, 2003</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Emotion Science</td>
            <td style={tableCell}>
              State shapes cognitive and relational capacity; broaden-and-build
            </td>
            <td style={tableCell}>Fredrickson, 2001; Frijda, 1986</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Developmental Neuroscience
            </td>
            <td style={tableCell}>
              Relationship shapes brain architecture and regulatory capacity
            </td>
            <td style={tableCell}>Siegel, 2012; Schore, 2003</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Stress Physiology
            </td>
            <td style={tableCell}>
              Stress response designed for acute activation; chronic activation
              produces allostatic load
            </td>
            <td style={tableCell}>Sapolsky, 2004; McEwen, 2000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={prose}>
      <strong style={{ color: TEXT.primary }}>TEG-Blue&rsquo;s contribution:</strong>{" "}
      The individual theories are established. F1 integrates them into a unified
      architecture &mdash; the compass as a visual-conceptual tool making the
      four-mode orientation tangible and clinically usable, reframing health from
      a state to a capacity (not where the needle is, but whether it can move).
      The cross-theoretical convergence mapping, the four-step mechanism with
      speed-over-accuracy as design logic, the architectural break between
      body-first and cognition-first modes, and the positioning of regulation as
      the built-in return mechanism across the full gradient are the synthesis.
      The building blocks are established; the connections are the hypothesis,
      open to testing.
    </p>
  </>
);
