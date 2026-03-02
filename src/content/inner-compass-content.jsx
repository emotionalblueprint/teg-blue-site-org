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

// ─── OVERVIEW ────────────────────────────────────────────────

export const overview = (
  <>
    <p style={prose}>
      The nervous system continuously evaluates a single question:{" "}
      <strong style={emphasis}>
        &ldquo;Is there enough safety to engage, or is protection needed?&rdquo;
      </strong>{" "}
      Every emotional signal the body generates is an answer to this question.
      Every shift in perception, capacity, empathy, and cognition follows from it.
    </p>
    <p style={prose}>
      The Inner Compass is the visual-conceptual model that makes this continuous
      evaluation visible. It is a compass with a moving needle that orients
      between safety and threat. Health is not a position on the compass. Health
      is the needle&rsquo;s capacity to move &mdash; to shift toward Protection when threat
      appears and return toward Connection when the threat resolves.
    </p>
    <p style={prose}>
      The Four-Mode Gradient is the full range the compass can access. Two modes
      are body-first &mdash; Connection and Protection &mdash; the nervous system&rsquo;s responses
      that have been running for millions of years. Two modes are cognition-first
      &mdash; Control and Domination &mdash; an intelligent evolutionary upgrade that appeared
      when cognition arrived and the system gained range. The four modes sit on a
      continuous gradient, not in four boxes.
    </p>
    <p style={prose}>
      In a healthy compass, all four modes are available, all are time-limited
      (except Connection, which is the home base), and all are returnable. The
      needle can go anywhere it needs to go &mdash; and come back.
    </p>
    <p style={standaloneLine}>
      The return &mdash; regulation &mdash; is the mechanism that keeps the compass working.
    </p>
  </>
);

// ─── KEY CHARACTERISTICS ─────────────────────────────────────

export const characteristics = [
  // ── 1. Emotions as Signalling Language ────────────────────
  {
    title: "Emotions as the Nervous System\u2019s Signalling Language",
    body: (
      <>
        <p style={prose}>
          Emotions are not disruptions to clear thinking. They are the nervous
          system&rsquo;s signalling language &mdash; the medium through which the body&rsquo;s
          continuous evaluation of safety and threat reaches the rest of the
          organism.
        </p>
        <p style={prose}>
          The nervous system runs a distributed evaluation &mdash; across the gut, the
          heart, the muscles, the vagus nerve &mdash; continuously, below conscious
          awareness. This evaluation produces a finding: safe enough, or threat.
          Emotions are how the finding gets delivered.
        </p>
        <p style={prose}>
          Fear is the signal that the evaluation found threat. Joy is the signal
          that it found safety and connection. Anger is the signal that a boundary
          has been crossed. Each emotion carries specific information about what the
          evaluation detected &mdash; and each orients the organism toward a specific
          response.
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
      </>
    ),
  },

  // ── 2. The Compass and the Four Modes ─────────────────────
  {
    title: "The Compass and the Four Modes",
    body: (
      <>
        <p style={prose}>
          The compass has four modes arranged on a continuous gradient. Two are
          body-first &mdash; the nervous system&rsquo;s responses that have been running for
          millions of years. Two are cognition-first &mdash; an intelligent evolutionary
          upgrade that appeared when cognition arrived and the system gained range.
        </p>

        <h4 style={subheading}>Connection &mdash; Body-First</h4>
        <p style={prose}>
          The nervous system evaluates &ldquo;safe enough.&rdquo; The body opens. Engage,
          relate, repair, learn. The only mode with no time limit &mdash; the home base.
          Perception broadens, empathy comes fully online, cognition flexes.
          Connection is not relaxation or happiness &mdash; it is the mode in which the
          nervous system has enough safety to engage with complexity, including
          painful complexity.
        </p>

        <h4 style={subheading}>Protection &mdash; Body-First</h4>
        <p style={prose}>
          The nervous system evaluates &ldquo;threat.&rdquo; The body mobilises.
          Fight/flight as primary response; freeze/fawn as fallbacks. Designed for
          minutes to hours &mdash; an emergency system. Attention narrows, emotions
          amplify, cognition simplifies. The problem is never that the person
          entered Protection. The problem is when Protection becomes a permanent
          address.
        </p>

        <h4 style={subheading}>Control &mdash; Cognition-First</h4>
        <p style={prose}>
          The body-first responses are insufficient. Cognition enters the threat
          response. Anticipate, manage, override. In a healthy compass, Control is
          deliberate, time-limited, and returnable. A tool, not a residence.
        </p>

        <h4 style={subheading}>Domination &mdash; Cognition-First</h4>
        <p style={prose}>
          Control is insufficient. The threat is evaluated as requiring elimination
          or total override. Complete override of the relational system. Rare. Last
          resort. The furthest reach of the compass.
        </p>

        <p style={standaloneLine}>
          Connection and Protection happen to you. Control and Domination are what
          cognition does when recruited into threat service.
        </p>

        <div style={{ overflowX: "auto", margin: "20px 0" }}>
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
      </>
    ),
  },

  // ── 3. Health Is Movement, Not Position ────────────────────
  {
    title: "Health Is Movement, Not Position",
    body: (
      <>
        <p style={prose}>
          The four modes are not four boxes. They are positions on a continuous
          gradient from full Connection to maximum Domination. The compass needle
          moves along this gradient. There are no hard boundaries between modes
          &mdash; there are shifts, transitions, degrees.
        </p>
        <p style={standaloneLine}>
          Not which box, but where on the gradient, and moving in which direction?
        </p>
        <p style={prose}>
          This is what distinguishes the compass from personality typing. A brief
          shift into Protection during an argument is proportionate. A permanent
          residence in Control that began in childhood is not. The compass makes
          both visible &mdash; and makes the difference between them measurable.
        </p>
        <p style={prose}>
          A healthy compass moves fluidly as conditions change. It shifts toward
          Protection when threat appears and returns toward Connection when the
          threat passes. Health is not a state. Health is a capacity &mdash; not where
          the needle is, but whether it can move.
        </p>
        <p style={prose}>
          When the needle cannot move &mdash; when it gets stuck &mdash; what should have
          been a temporary tool becomes a permanent position. The person does not
          experience this as being stuck. They experience it as &ldquo;just who I
          am.&rdquo;
        </p>
      </>
    ),
  },

  // ── 4. Regulation — The Return ─────────────────────────────
  {
    title: "Regulation \u2014 The Return",
    body: (
      <>
        <p style={prose}>
          Regulation is the built-in mechanism by which the nervous system returns
          from threat to safety. The body moves toward Protection, does what it
          needs to do, and comes back. The compass needle shifts and returns. This
          is the design.
        </p>
        <p style={standaloneLine}>
          The compass was designed to move &mdash; and to come back.
        </p>
        <p style={prose}>
          The return is not a cognitive process. The body does not reason its way
          back to safety. It returns through the same somatic channels it departed
          through: the breath that accelerated must slow, the muscles that braced
          must release, the hormones that flooded must clear.
        </p>

        <div style={{ overflowX: "auto", margin: "16px 0" }}>
          <table style={tableStyle}>
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
                  Another person&rsquo;s regulated nervous system sending safety signals
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
          system was designed to use. When the return is missing &mdash; when it was
          never learned through co-regulation, or when conditions prevent it &mdash;
          the compass gets stuck. What should have been temporary becomes
          permanent.
        </p>
      </>
    ),
  },
];

// ─── WHAT THE MODEL CHANGES ─────────────────────────────────

export const reframes = (
  <ul style={{ paddingLeft: 20, margin: 0 }}>
    {[
      "From \u2018emotion regulation\u2019 to \u2018signal interpretation\u2019 \u2014 the question is not \u2018how do I manage this emotion?\u2019 but \u2018what is this signal telling me?\u2019",
      "Health is not staying in Connection \u2014 health is the ability to move through the gradient and come back",
      "State determines capacity \u2014 restore safety first, then expect capacity",
      "Assess mode position, not the emotion \u2014 anger in Connection and anger in Domination are the same signal producing entirely different outcomes",
      "The problem is never the mechanism \u2014 it is what the mechanism learned",
      "Protection was designed for minutes to hours \u2014 not a lifetime",
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

// ─── CONNECTION TO PAIRED MODEL ──────────────────────────────

export const connection = (
  <>
    <p style={prose}>
      The Inner Compass describes <em>what</em> the nervous system does &mdash; how it
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
    </p>
    <p style={standaloneLine}>
      The Inner Compass is the instrument. The Three Awareness Capacities is the
      calibration. One describes the architecture. The other describes what
      determines how well the architecture functions.
    </p>
  </>
);
