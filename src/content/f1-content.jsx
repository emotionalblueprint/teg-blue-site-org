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

// ─── WHAT THIS FRAMEWORK PROPOSES ─────────────────────────

export const proposal = (
  <>
    <p style={prose}>
      The central reframe: emotions are not disruptions to clear thinking.
      They are the nervous system's signalling language — the medium through
      which the body's continuous evaluation of safety and threat gets
      communicated to the rest of the organism. The nervous system runs a
      distributed evaluation process across the gut, heart, muscles, vagus
      nerve, and amygdala, assessing the environment continuously below
      conscious awareness. Emotions are how that evaluation gets delivered.
    </p>
    <p style={prose}>
      This shifts the foundational stance from <em>emotion regulation</em>{" "}
      (implying emotions need controlling) to <em>signal interpretation</em>{" "}
      (implying emotions carry information that needs reading). The question
      is not "how do I manage this emotion?" but "what is this signal telling
      me?" Fear is the signal that the evaluation found threat. Joy is the
      signal that it found safety and connection. Anger is the signal that a
      boundary has been crossed. Each emotion carries specific information
      about what the evaluation detected — and each orients the organism
      toward a specific response.
    </p>
    <p style={prose}>
      The nervous system continuously evaluates one question:{" "}
      <strong style={emphasis}>
        "Is there enough safety to engage, or is protection needed?"
      </strong>{" "}
      Every emotional signal is, at root, an answer to this question. It
      determines whether learning is possible or defence is required, whether
      trust is available or verification is needed, whether vulnerability is
      safe or control is necessary.
    </p>
    <p style={prose}>
      This two-mode orientation — engage or protect — has been independently
      identified across six research traditions: Polyvagal Theory (Porges),
      Motivational Science (Gray, Carver & Scheier), Positive Psychology
      (Fredrickson), Trauma Theory (Siegel, Ogden), Attachment Theory
      (Bowlby), and Trauma Research (van der Kolk, Walker). F1 integrates
      these, making visible that polyvagal states, approach/avoidance,
      broaden-and-build, window of tolerance, secure base, and
      fight/flight/freeze/fawn all describe the same fundamental
      mechanism.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>The Inner Compass — A Moving Needle</h4>
    <p style={prose}>
      The nervous system's continuous orientation between safety and threat
      can be understood through the metaphor of a compass. The needle is
      always moving. It does not have a "correct" position — it points in a
      direction. A healthy compass moves fluidly between Connection and
      Protection as conditions change. Health is not staying in Connection
      permanently. Health is the needle moving — responding, orienting, and
      coming back.
    </p>

    <h4 style={subheading}>Signal to Mode in Milliseconds</h4>
    <p style={prose}>
      The compass needle moves through a four-step sequence that completes
      before conscious awareness begins: (1) signal reception — exteroceptive,
      interoceptive, and memory-based signals arrive continuously;
      (2) neuroception — the nervous system evaluates{" "}
      <em>experienced</em> safety, not objective danger, through
      pattern-matching from past experience; (3) autonomic response —
      cardiovascular, respiratory, muscular, and hormonal preparation occurs;
      (4) mode activation — the system organises into Connection or Protection
      configuration. By the time conscious awareness registers "an emotion,"
      the system has already acted.
    </p>
    <p style={prose}>
      The system is fast by design. Evolution solved survival by building an
      embodied evaluation system that orients the organism before conscious
      thought begins. The cost of speed: the system can orient to learned
      patterns rather than current reality. When it responds to a pattern from
      the past as though it is happening now, the person is not "overreacting."
      The compass is working exactly as designed — it just learned its patterns
      in conditions that no longer apply. The problem is never the mechanism.
      The problem is what the mechanism learned.
    </p>

    <h4 style={subheading}>Two Body-First Modes</h4>
    <p style={prose}>
      <strong style={emphasis}>Connection</strong> (ventral vagal dominant) is
      the system's home base — the only mode designed for sustained living
      with no time limit. Perception broadens, the full empathy set comes
      online, cognitive flexibility increases, repair becomes possible.
      Connection is not "calm." It is the state where the system has sufficient
      safety to engage with challenge, complexity, and even distress without
      the nervous system treating them as threats.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Protection</strong> (sympathetic/dorsal
      dominant) is the system on emergency fuel — designed for minutes to
      hours, not a lifetime. Fight and flight are the primary responses; freeze
      and fawn are fallbacks when energy depletes. Attention narrows toward
      threat, emotions amplify, resonance filters to survival-relevant data.
      Protection is intelligent design for genuine threat. The question is
      always whether the current mode is proportionate to actual present
      conditions — and whether the system can return.
    </p>

    <h4 style={subheading}>Two Cognition-First Modes</h4>
    <p style={prose}>
      For millions of years, the body had two modes and they were enough. Then
      cognition evolved, and the compass gained range. When body-level
      responses are insufficient — when the threat is too complex, too
      sustained, or too strategic — cognition gets recruited.{" "}
      <strong style={emphasis}>Control</strong> (anticipate → manage →
      override) and <strong style={emphasis}>Domination</strong> (override →
      eliminate → secure) are cognition-first modes. In a healthy compass,
      they are time-limited tools: deliberately entered, consciously used, and
      returned from when the situation resolves. They are not pathology — they
      are the most sophisticated survival tools the species ever developed.
    </p>

    <h4 style={subheading}>The Gradient</h4>
    <p style={prose}>
      The four modes are not four boxes. They are positions on a continuous
      gradient from full connection to maximum domination. The compass needle
      moves along this gradient. A healthy compass has access to the full
      range. A stuck compass is locked at one position. The gradient makes the
      compass clinically precise: not "which box?" but "where on the gradient,
      and moving in which direction?"
    </p>

    {/* Compact mode table */}
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
            <td style={tableCell}>Automatic — safety perceived</td>
            <td style={tableCell}>Indefinite (home base)</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Protection</td>
            <td style={tableCell}>Body-first</td>
            <td style={tableCell}>Automatic — threat perceived</td>
            <td style={tableCell}>Minutes to hours</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Control</td>
            <td style={tableCell}>Cognition-first</td>
            <td style={tableCell}>Deliberate — cognition recruited</td>
            <td style={tableCell}>Time-limited (tool)</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Domination</td>
            <td style={tableCell}>Cognition-first</td>
            <td style={tableCell}>Deliberate — cognition at maximum</td>
            <td style={tableCell}>Rare (last resort)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4 style={subheading}>Regulation — The Return Mechanism</h4>
    <p style={prose}>
      The compass was designed to move — and to come back. Everything
      described above was designed to be temporary. The mechanism by which the
      body returns from threat response to connection is{" "}
      <strong style={emphasis}>regulation</strong>. Recovery is walking the
      nervous system back toward safety through the body's own completion
      pathways: breathing (slow exhalation activates the vagal brake),
      grounding (sensory contact recalibrates from past threat to present
      reality), co-regulation (another person's regulated system sending
      safety signals), and time (the body completing the activation cycle).
      Health is not the absence of Protection. Health is the full cycle — the
      ability to move into threat response when needed and come back when
      the threat has passed.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>State Determines Capacity</h4>
    <p style={prose}>
      What a person can perceive, think, feel, and do depends on their current
      regulatory state. This is neurobiological reality, not metaphor, tracked
      across six dimensions: perceptual field, empathy access, cognitive
      flexibility, time orientation, learning capacity, and repair capacity.
    </p>
    <p style={prose}>
      In Connection, perception is broad, empathy is full, cognition is
      flexible, and repair is available. In Protection, perception narrows to
      threat, empathy filters to survival-relevant data, cognition simplifies
      for speed, and learning shuts down. In Control, perception narrows to
      strategic variables, empathy is deprioritised, and cognition becomes
      focused but rigid. In Domination, perception collapses to binary, empathy
      drops to near-zero, and cognition narrows to elimination of the
      obstacle.
    </p>
    <p style={prose}>
      The inability to understand another person may not be unwillingness. The
      current state has literally reduced the neurobiological capacity to do
      so. The clinical reframe:{" "}
      <strong style={emphasis}>
        restore safety first, then expect capacity.
      </strong>
    </p>

    <h4 style={subheading}>Same Emotion, Two Expressions</h4>
    <p style={prose}>
      Every emotion has two possible expressions, determined by where the
      compass needle is pointing when the emotion arises. Anger in Connection
      sets boundaries with honesty; in Protection it becomes explosive and
      reactive. Trust in Connection enables openness; in Protection it becomes
      strategic calculation. Joy in Connection is present and embodied; in
      Protection it becomes manic or denied.
    </p>
    <p style={prose}>
      The compass determines the expression. The same biological signal
      produces different behaviour depending on mode position. When someone
      presents with a "problematic emotion," the diagnostic question is not
      "what emotion is this?" but "where is the compass when this emotion
      arrives?"
    </p>

    <h4 style={subheading}>When the Return Is Missing</h4>
    <p style={prose}>
      F1 describes the complete instrument in healthy operation. But the
      compass is only as good as its calibration. The modes that should be
      time-limited tools become permanent positions when the return path was
      never learned. When the environment that calibrated the compass was
      itself stuck in threat — when there was no co-regulation available, when
      the activation never completed — the compass gets stuck. This is the
      subject of F2: how the instrument gets calibrated, and what happens when
      the calibration fails.
    </p>
  </>
);

// ─── SCIENTIFIC FOUNDATIONS ───────────────────────────────

export const foundations = (
  <>
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
              Emotions as functional biological systems
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
              State shapes cognitive and relational capacity
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
      <strong style={{ color: TEXT.primary }}>TEG-Blue's contribution:</strong>{" "}
      The individual theories are established. F1 integrates them into a
      unified architecture — the compass as a visual-conceptual tool making
      the four-mode orientation tangible and clinically usable, reframing
      health from a state to a capacity (not where the needle is, but whether
      it can move). The cross-theoretical convergence mapping, the four-step
      mechanism with speed-over-accuracy as design logic, the architectural
      break between body-first and cognition-first modes, and the positioning
      of regulation as the built-in return mechanism across the full gradient
      are the synthesis. The building blocks are established; the connections
      are the hypothesis, open to testing.
    </p>
  </>
);
