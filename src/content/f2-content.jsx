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
      F1 describes the complete instrument &mdash; the compass with four modes,
      the gradient, and the return mechanism. The design. F2 explains how that
      instrument gets calibrated in each person &mdash; and what happens when the
      calibration goes wrong.
    </p>
    <p style={prose}>
      The calibration system is the three awareness capacities:{" "}
      <strong style={emphasis}>Reading Emotions</strong> (RE) &mdash; the
      capacity to perceive emotional states in others and context;{" "}
      <strong style={emphasis}>Emotional Resonance</strong> (ER) &mdash; the
      capacity to feel with another person&rsquo;s experience without flooding
      or shutting down; and{" "}
      <strong style={emphasis}>Self-Emotional Awareness</strong> (SEA) &mdash;
      the capacity to locate and hold one&rsquo;s own emotional experience.
    </p>
    <p style={prose}>
      These three capacities determine what data the compass receives. They are
      present at birth in proto-form. They develop through relational conditions.
      And they develop through a specific mechanism:
    </p>
    <p style={standaloneLine}>
      Awareness teaches awareness &mdash; the awareness capacities the
      caregivers carry are the awareness capacities that get passed.
    </p>
    <p style={prose}>
      The mechanism is embodied transmission, not instruction. The child&rsquo;s
      nervous system develops inside the adults&rsquo; nervous system. What the
      adults can and cannot do with their own RE, ER, and SEA creates the
      environment the child&rsquo;s awareness develops from.
    </p>
    <p style={standaloneLine}>
      Children do not calibrate to what adults say. They calibrate to what
      adults embody.
    </p>
    <p style={prose}>
      A parent who says &ldquo;be kind&rdquo; while living in chronic Control
      teaches Control, not kindness. A caregiver who says &ldquo;I&rsquo;m
      fine&rdquo; while their nervous system radiates tension teaches the child
      that emotional signals are not to be trusted. A caregiver whose own SEA is
      online &mdash; who can name what they feel, sit with discomfort, model that
      emotions are signals rather than crises &mdash; teaches the child, without
      instruction, that internal experience is readable and trustworthy.
    </p>
    <p style={prose}>
      When conditions are complete, the result is accurate calibration: the child
      reads others accurately, resonates sustainably, locates their own
      experience, learns the return path through co-regulation, and builds
      identity on full data. When conditions are incomplete, the capacity
      configuration that develops creates the specific patterns that F3&ndash;F12
      describe.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>Co-Regulation &mdash; How the Return Is Learned</h4>
    <p style={prose}>
      Children are born with the biological capacity for regulation &mdash; the
      nervous system is designed to complete the threat cycle: mobilise, respond,
      discharge, return. But the infant cannot do this alone. The system is
      designed for co-regulation &mdash; the caregiver&rsquo;s nervous system
      teaching the child&rsquo;s nervous system the return path.
    </p>
    <p style={standaloneLine}>
      The child does not learn to regulate through instruction. The child learns
      to regulate through being regulated with.
    </p>
    <p style={prose}>
      When the infant cries and the caregiver holds them, the caregiver&rsquo;s
      regulated nervous system sends safety signals &mdash; through tone, touch,
      rhythm, presence &mdash; that help the infant&rsquo;s activated nervous
      system complete the cycle and settle. Through thousands of these
      interactions, the child&rsquo;s nervous system internalises the return:{" "}
      <em>this is how the body goes back to safety.</em> Co-regulation becomes
      the template for self-regulation.
    </p>
    <p style={prose}>
      This is awareness teaches awareness applied to regulation: the
      caregiver&rsquo;s capacity to regulate IS the child&rsquo;s regulatory
      environment. A caregiver whose own compass is stuck &mdash; whose own
      return was never learned &mdash; cannot model what they do not have.
    </p>

    <h4 style={subheading}>Three Conditions of Incomplete Awareness</h4>
    <p style={prose}>
      When the awareness that gets passed is incomplete, three specific
      conditions emerge &mdash; each produced by adults with a specific awareness
      configuration, each shaping the child&rsquo;s capacities and regulation in
      a traceable way.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Unpredictability</strong> &mdash; caregivers
      whose own compass swings unpredictably between modes. One moment warm, the
      next explosive or withdrawn. The child&rsquo;s RE overdevelops into
      hypervigilance &mdash; survival requires predicting which version of the
      caregiver will appear. ER floods from exposure to unregulated states. SEA
      never develops &mdash; all attention is directed outward. Regulation is
      disrupted: the child cannot learn the return path from a caregiver whose
      own nervous system is unpredictable.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Incongruence</strong> &mdash; caregivers who feel
      one thing and perform another. They say &ldquo;I&rsquo;m fine&rdquo; while
      radiating tension. The child&rsquo;s RE calibrates to the surface layer
      because the surface is what gets rewarded. ER becomes confused and
      distrusted &mdash; the child&rsquo;s felt sense is contradicted by
      external authority. SEA is actively undermined: &ldquo;you&rsquo;re not
      angry,&rdquo; &ldquo;that didn&rsquo;t happen.&rdquo; Regulation is
      misdirected: the return path leads to compliance rather than connection.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Invalidation</strong> &mdash; caregivers in
      chronic Control who read others for strategy, feel nothing with them, and
      have no access to their own emotional states. They are not being cruel.
      They are teaching what they know. The child&rsquo;s RE develops
      instrumentally. ER shuts down &mdash; feeling was punished. SEA never
      forms &mdash; internal experience is explicitly taught to be wrong.
      Regulation is blocked: the message is not &ldquo;the body can come
      back&rdquo; but &ldquo;the body should never have gone there.&rdquo;
    </p>
    <p style={prose}>
      Each condition shapes not just the three capacities but whether the child
      ever learns the physiological return path that F1 describes.
    </p>

    <h4 style={subheading}>
      Threat Lock &rarr; Chronic Mode &rarr; The Stuck Compass
    </h4>
    <p style={prose}>
      When conditions produce persistent threat, the nervous system locks into a
      protective response. The threat response becomes chronic: the child&rsquo;s
      system learns that safety does not resolve, activation is the new normal.
      The return path is never learned because the threat never fully resolves.
    </p>
    <p style={prose}>
      The modes that F1 describes as extraordinary, time-limited tools become
      traps when the return path was never learned. Control &mdash; which in a
      healthy compass is entered deliberately and exited when done &mdash;
      becomes a permanent identity. The person does not experience themselves as
      locked. They experience their mode as reality. Protection feels like
      realism. Control feels like competence. Domination feels like strength.
    </p>
    <p style={standaloneLine}>
      This is not malfunction. It is accurate adaptation to an inaccurate
      environment.
    </p>

    <h4 style={subheading}>From Capacity to Identity</h4>
    <p style={prose}>
      As cognitive capacity develops, it gets recruited into the threat response.
      Cognition can only work with the data it receives &mdash; and the data
      depends on which awareness capacities are online. With SEA, cognition
      generates true coherence: narrative matches felt experience. Without SEA,
      cognition generates false coherence &mdash; narrative that fills the gap
      where self-awareness should be.
    </p>
    <p style={prose}>
      The awareness configuration determines chronic mode, regulatory strategy,
      and the identity cognition builds. Hyperactive RE + flooded ER + absent
      SEA &rarr; chronic Connection: &ldquo;I am the caring one.&rdquo;
      Instrumental RE + absent ER + absent SEA &rarr; chronic Control: &ldquo;I
      am the capable one.&rdquo; Each configuration is not a type but a record
      &mdash; a record of which capacities had conditions to develop and which
      did not.
    </p>
    <p style={standaloneLine}>
      Personality is not a type. It is a record of which capacities had
      conditions to develop &mdash; and which didn&rsquo;t.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>Tolerance Thresholds</h4>
    <p style={prose}>
      Early environments set tolerance thresholds &mdash; the point at which the
      nervous system shifts modes. The child&rsquo;s system learns what
      intensity, instability, or control must be endured to stay connected. This
      becomes an internal baseline for what counts as &ldquo;normal.&rdquo;
    </p>
    <p style={prose}>
      A person with flooded ER and absent SEA will{" "}
      <em>feel</em> the harm through resonance but cannot identify it as harm
      being done to <em>them</em> &mdash; the signal arrives but cannot be read
      as one&rsquo;s own pain. This explains high tolerance thresholds without
      blaming the person: the awareness configuration prevents the signal from
      being located.
    </p>
    <p style={standaloneLine}>
      Familiar can feel &ldquo;normal&rdquo; even when it is costly.
    </p>

    <h4 style={subheading}>Generational Replication</h4>
    <p style={prose}>
      The pattern replicates across generations without anyone choosing to pass
      it on. The caregiver whose resonance floods unpredictably was once a child
      in an unpredictable environment. The caregiver who says &ldquo;I&rsquo;m
      fine&rdquo; while radiating tension was once a child whose felt sense was
      contradicted. The caregiver in chronic Control who punishes emotional
      expression was once a child whose emotional signals were invalidated.
    </p>
    <p style={prose}>
      No one in the chain chose to start it. Each link is an accurate adaptation
      passed forward. A parent can love their child completely and still transmit
      a capacity configuration that damages them.
    </p>
    <p style={standaloneLine}>
      Love does not override what the nervous system embodies.
    </p>
    <p style={prose}>
      The parent in chronic Control who pushes their child to &ldquo;toughen
      up&rdquo; is not failing at love. They are succeeding at transmission.
      They are passing on the only regulatory architecture they know. The
      child&rsquo;s nervous system reads the conviction, not the content.
    </p>
    <p style={standaloneLine}>
      The chain replicates until awareness changes &mdash; not just behaviour.
    </p>

    <h4 style={subheading}>Healing Is Reconnecting, Not Removing</h4>
    <p style={prose}>
      Healing is not finding a hidden self or removing a mask. The adaptive
      identity is not covering anything &mdash; it is the most intelligent thing
      cognition could build given what was available.
    </p>
    <p style={prose}>
      Healing is two specific things: (1) developing SEA &mdash; the keystone
      capacity, because with SEA online, RE and ER can be recalibrated to serve
      the person rather than the survival strategy; and (2) learning the return
      path &mdash; experiencing through co-regulation and safe relationships that
      activation can resolve. The body must learn what the mind cannot teach.
    </p>
    <p style={standaloneLine}>
      Not fixing something broken &mdash; but developing capacities that
      didn&rsquo;t have conditions to form, and learning a return path that was
      never taught.
    </p>
    <p style={prose}>
      When SEA comes online and the body learns to regulate, the cognitive
      structure does not collapse &mdash; it recalibrates. The person does not
      become someone different. They become someone with access to data they
      never had before &mdash; and a body that knows the way back.
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
              Attachment Theory
            </td>
            <td style={tableCell}>
              Early relationships shape regulatory defaults and conditions for
              awareness development
            </td>
            <td style={tableCell}>
              Bowlby, 1969; Ainsworth, 1978; Main &amp; Hesse, 1990
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Object Relations</td>
            <td style={tableCell}>
              Authentic experience versus compliant adaptation
            </td>
            <td style={tableCell}>Winnicott, 1960</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Developmental Neuroscience
            </td>
            <td style={tableCell}>
              Right-brain development shapes self and regulatory capacity
              through early relational experience
            </td>
            <td style={tableCell}>Schore, 2003</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Interpersonal Neurobiology
            </td>
            <td style={tableCell}>
              Mind develops through relationships; integration is health;
              co-regulation as developmental pathway
            </td>
            <td style={tableCell}>Siegel, 2012</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Narrative Psychology
            </td>
            <td style={tableCell}>
              Coherent narrative as marker of earned security; requires SEA
            </td>
            <td style={tableCell}>Main &amp; Goldwyn, 1998</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Polyvagal Theory</td>
            <td style={tableCell}>
              Neuroception shapes safety; co-regulation as foundation for
              self-regulation
            </td>
            <td style={tableCell}>Porges, 2011</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Somatic Experiencing
            </td>
            <td style={tableCell}>
              Regulation as completion of the activation cycle; the body must
              learn the return
            </td>
            <td style={tableCell}>Levine, 1997</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={prose}>
      <strong style={{ color: TEXT.primary }}>
        TEG-Blue&rsquo;s contribution:
      </strong>{" "}
      The organising principle &mdash; awareness teaches awareness through
      embodied transmission &mdash; connecting caregiver capacity configuration
      to child developmental outcomes. The three awareness capacities (RE, ER,
      SEA) as the data system the compass works with. The mapping of three
      specific childhood conditions (unpredictability, incongruence,
      invalidation) to distinct adult capacity configurations. The causal
      sequence: threat lock &rarr; chronic mode &rarr; stuck compass. The
      developmental account of false coherence as the most intelligent thing
      cognition could build given what was available. The full generational
      replication mechanism through the awareness lens. The building blocks are
      established; the integration is the hypothesis, open to testing.
    </p>
  </>
);
