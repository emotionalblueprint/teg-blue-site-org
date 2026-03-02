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
      F1&ndash;F11 describe a complete system. F12 steps back and reveals
      the architecture underneath: two parallel information systems running
      simultaneously at different speeds.
    </p>
    <p style={prose}>
      The <strong style={emphasis}>emotional-somatic system</strong> arrives
      first &mdash; cue detection in 10&ndash;50ms, pattern matching in
      50&ndash;200ms, physiological response in 200&ndash;500ms. By the time
      the <strong style={emphasis}>cognitive-logical system</strong> engages
      (500ms+ for conscious awareness, seconds to minutes for analysis), the
      state has already shifted. The compass has already moved.
    </p>
    <p style={standaloneLine}>
      The cognitive system does not direct this process &mdash; it narrates a
      process already underway.
    </p>
    <p style={prose}>
      This answers the question everyone asks after reading F1&ndash;F11:
      &ldquo;I understand all of this now. Why can&rsquo;t I just
      change?&rdquo; Because insight operates in the cognitive system.
      Patterns operate in the emotional-somatic system. They run on different
      timescales, learn through different mechanisms, and update at different
      speeds.
    </p>
    <p style={standaloneLine}>
      The emotional-somatic system is not the problem. It is the system that
      determines what solutions are available.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>
      Why Insight Alone Does Not Change Behaviour
    </h4>
    <p style={prose}>
      Three mechanisms explain the gap. The{" "}
      <strong style={emphasis}>timing problem</strong>: by the time insight
      is available (seconds), the emotional-somatic system has already
      detected the cue, matched patterns, organised response, and shifted
      state (milliseconds). The{" "}
      <strong style={emphasis}>domain mismatch</strong>: cognition can
      understand patterns retrospectively but cannot interrupt them in real
      time &mdash; expecting cognition to override the emotional-somatic
      system is like expecting a narrator to change the story by describing
      it differently. The{" "}
      <strong style={emphasis}>appropriate limitation</strong>: this is not
      design flaw &mdash; the emotional-somatic system needs to respond
      faster than cognition can process.
    </p>

    <h4 style={subheading}>What Actually Changes Patterns</h4>
    <div style={{ overflowX: "auto", margin: "16px 0" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeader}>What Works</th>
            <th style={tableHeader}>Why It Works</th>
            <th style={tableHeader}>What Does Not</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Sustained safety</td>
            <td style={tableCell}>
              Nervous system recalibrates through accumulated safe experience
            </td>
            <td style={tableCell}>
              Intellectual understanding of safety
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Somatic awareness</td>
            <td style={tableCell}>
              Reconnects person to body&rsquo;s signals &mdash; what is
              actually happening
            </td>
            <td style={tableCell}>
              Talking about the body without embodiment
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Co-regulation</td>
            <td style={tableCell}>
              Another regulated nervous system provides template the system
              can borrow
            </td>
            <td style={tableCell}>
              Instruction in regulation techniques
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Corrective experience
            </td>
            <td style={tableCell}>
              Old pattern activated but different outcome occurs &mdash;
              system updates
            </td>
            <td style={tableCell}>
              Cognitive rehearsal without emotional activation
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Titrated exposure
            </td>
            <td style={tableCell}>
              Gradual, supported contact &mdash; system learns at own pace
            </td>
            <td style={tableCell}>
              Flooding or premature exposure
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Time and consistency
            </td>
            <td style={tableCell}>
              Emotional-somatic system updates slowly; needs repeated
              experience
            </td>
            <td style={tableCell}>
              Single breakthrough moments
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={standaloneLine}>
      The willpower myth &mdash; understanding + willpower = change &mdash;
      is false coherence.
    </p>
    <p style={prose}>
      The person who understands their patterns and cannot change them is not
      weak. They are experiencing domain mismatch between two information
      systems operating at different speeds, learning through different
      mechanisms.
    </p>

    <h4 style={subheading}>State-Dependent Behaviour</h4>
    <p style={prose}>
      Behaviour is organised by nervous system state. A person in Connection
      and the same person in chronic Control are operating with fundamentally
      different perception, cognition, empathy, and relationship to truth
      &mdash; not different &ldquo;choices&rdquo; but different available
      equipment. In Connection: perception is broad, learning is open, repair
      is available. In Protection: perception narrows to threat, learning
      closes. In Control: analysis is sophisticated but rigid, accountability
      becomes narrative management. In Domination: intelligence serves power,
      vulnerability feels annihilating.
    </p>
    <p style={standaloneLine}>
      You are not dealing with a person. You are dealing with a person in a
      state. Change the state, and the person who shows up is different.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>One Mechanism, Twelve Angles</h4>
    <p style={prose}>
      TEG-Blue is not twelve frameworks. It is one mechanism described from
      twelve angles:{" "}
      <strong style={emphasis}>
        state-dependent nervous system organisation responding to perceived
        safety.
      </strong>{" "}
      F1 is the instrument. F2 is the calibration. F3 is the cognitive layer.
      F4&ndash;F7 trace scaling from rules to domination. F8&ndash;F10 are
      repair and transmission. F11 is the complexity. F12 is the architecture
      underneath.
    </p>
    <p style={standaloneLine}>
      Every framework is the same architecture. The scale changes. The
      mechanism does not.
    </p>

    <h4 style={subheading}>Accountability Without Demonisation</h4>
    <p style={prose}>
      If behaviour is organised by nervous system state, is anyone
      responsible? F12 holds both truths. The person in chronic Control
      harming others is producing real harm &mdash; true regardless of state
      or history. And: the person is not evil; they are in a state; the state
      produces behaviour; the behaviour produces harm &mdash; all
      simultaneously true.
    </p>
    <p style={standaloneLine}>
      Causality and accountability are separable. Understanding why someone
      became who they became does not excuse what it costs others.
    </p>
    <p style={prose}>
      Understanding the mechanism does not eliminate accountability. It
      eliminates demonisation. And it enables precision: judgement becomes
      discernment, blame becomes mechanism, punishment becomes containment
      plus conditions, despair becomes architecture, moral character becomes
      configuration.
    </p>

    <h4 style={subheading}>Gradient-Matched Intervention</h4>
    <p style={prose}>
      If state determines capacity, intervention must match state. In
      Connection: direct engagement with complexity, paradox work, deepening
      awareness. In Protection: safety first, co-regulation, somatic work
      &mdash; insight-based approaches require Connection-mode capacity not
      available. In Control: external accountability, structured frameworks
      &mdash; empathy-based appeals are processed through the control
      strategy, not felt. In Domination: containment, protection of others,
      clear consequences &mdash; vulnerability-based approaches increase
      danger.
    </p>
    <p style={prose}>
      When intervention does not match state, it fails, the person is blamed
      for being &ldquo;resistant,&rdquo; and false coherence is reinforced.
      The error is in the matching, not the person.
    </p>
    <p style={standaloneLine}>
      The system gets the behaviour the system creates conditions for. If
      you do not like the behaviour, look at the conditions.
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
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Dual Process Theory
            </td>
            <td style={tableCell}>
              Two systems processing simultaneously at different speeds
            </td>
            <td style={tableCell}>Kahneman; Evans &amp; Stanovich</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Affective Neuroscience
            </td>
            <td style={tableCell}>
              Subcortical emotion systems operating before cortical awareness
            </td>
            <td style={tableCell}>Panksepp; Damasio; LeDoux</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Polyvagal Theory
            </td>
            <td style={tableCell}>
              Neuroception &mdash; unconscious safety/threat detection driving
              state
            </td>
            <td style={tableCell}>Porges, 2011</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Somatic Experiencing
            </td>
            <td style={tableCell}>
              Body-based processing completing what cognition cannot
            </td>
            <td style={tableCell}>Levine, 1997</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Embodied Cognition
            </td>
            <td style={tableCell}>
              Cognition grounded in body states and sensorimotor experience
            </td>
            <td style={tableCell}>Varela; Thompson; Gallagher</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Interpersonal Neurobiology
            </td>
            <td style={tableCell}>
              Co-regulation as mechanism for nervous system change
            </td>
            <td style={tableCell}>Siegel; Schore</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={prose}>
      <strong style={{ color: TEXT.primary }}>
        TEG-Blue&rsquo;s contribution:
      </strong>{" "}
      The reframe of the emotional-somatic system as determining what
      rational behaviour is available &mdash; not &ldquo;System 1
      errors&rdquo; but state-setting. State-dependent behaviour mapped
      across all four compass positions showing how perception, cognition,
      empathy, and accountability transform with state. One mechanism, twelve
      angles as the unifying architecture. Accountability without
      demonisation as practical framework. Gradient-matched intervention as
      precondition for effectiveness. The deepest implication: every system
      produces the behaviour it creates conditions for &mdash; not the
      behaviour it intends. The building blocks are established; the
      integration is the hypothesis, open to testing.
    </p>
  </>
);
