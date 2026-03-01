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
      F1 describes the complete instrument — the compass with four modes, the
      gradient, and the return mechanism. F2 explains how that instrument
      gets calibrated in each person. The central principle:{" "}
      <strong style={emphasis}>awareness teaches awareness</strong> — the
      awareness capacities that caregivers embody become the child's
      developmental environment.
    </p>
    <p style={prose}>
      Three awareness capacities are present at birth in proto-form:{" "}
      <strong style={emphasis}>Reading Emotions</strong> (RE) — the capacity
      to perceive emotional states in others and context;{" "}
      <strong style={emphasis}>Emotional Resonance</strong> (ER) — the
      capacity to feel with another person's experience without flooding or
      shutting down; and{" "}
      <strong style={emphasis}>Self-Emotional Awareness</strong> (SEA) — the
      capacity to locate and hold one's own emotional experience. These three
      capacities determine what data the compass receives.
    </p>
    <p style={prose}>
      The mechanism is embodied transmission, not instruction. Children
      calibrate to what adults embody, not what they say. The three awareness
      capacities the caregivers carry are the three awareness capacities that
      get passed. A caregiver whose Self-Emotional Awareness is offline cannot
      provide conditions for a child's SEA to develop — regardless of
      intention, love, or effort.
    </p>
    <p style={prose}>
      When conditions are complete, the result is accurate calibration: the
      child reads others accurately, resonates sustainably, locates their own
      experience, learns the return path through co-regulation, and builds
      identity on full data. When conditions are incomplete, the capacity
      configuration that develops creates the specific patterns that F3–F12
      describe.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>The Developmental Mechanism</h4>
    <p style={prose}>
      The child does not learn to regulate through instruction. The child
      learns to regulate through being regulated <em>with</em>. Co-regulation
      — the caregiver's nervous system modulating the child's activation
      through tone, touch, rhythm, and presence — teaches the child's body
      that activation can resolve. Through thousands of co-regulation cycles,
      the child's nervous system learns: threat states end, the body can come
      back, the full cycle completes.
    </p>

    <h4 style={subheading}>Three Conditions of Incomplete Awareness</h4>
    <p style={prose}>
      When the awareness that gets passed is incomplete, three specific
      conditions emerge based on the caregiver's awareness configuration:
    </p>
    <p style={prose}>
      <strong style={emphasis}>Unpredictability</strong> (caregiver with
      flooded ER, intact RE): the child develops hyperactive RE to predict
      what is coming, hyperactive ER from exposure to unregulated states,
      and absent SEA — reading everyone constantly with no internal reference
      point.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Incongruence</strong> (caregiver with absent
      ER, intact RE): the child develops instrumental RE (reading for
      strategy), absent ER from the shutdown model, and absent SEA —
      shutting down feeling channels, learning to read strategically but
      unable to locate own needs.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Invalidation</strong> (caregiver with
      weaponised RE, no ER, no SEA): the child develops weaponised RE
      (reading for leverage), absent ER from the armoured model, and absent
      SEA — learning to use information for dominance, no resonance, no
      access to own emotions.
    </p>

    <h4 style={subheading}>Threat Lock and Chronic Mode</h4>
    <p style={prose}>
      When conditions produce persistent threat, the nervous system locks
      into a protective response. The threat response becomes chronic: the
      child's system learns that safety does not resolve, activation is the
      new normal. The return path is never learned because the threat never
      fully resolves. The activation cycle never completes.
    </p>
    <p style={prose}>
      As cognitive capacity develops, it gets recruited into the threat
      response. Cognition learns to create stability where the body could
      not. The child who lives in unpredictability learns: "if I stay
      vigilant enough, I can predict what's coming." The child in incongruence
      learns: "if I think clearly enough, I can manage it." These are
      intelligent adaptations — but they teach cognition that the absence of
      regulation is correct.
    </p>

    <h4 style={subheading}>From Capacity to Identity</h4>
    <p style={prose}>
      The awareness configuration determines chronic mode, regulatory
      strategy, and the identity cognition builds. Hyperactive RE + flooded
      ER + absent SEA → chronic Connection: "I am the caring one."
      Instrumental RE + absent ER + absent SEA → chronic Control: "I am the
      capable one." Each configuration is not a type but a record — a record
      of which capacities had conditions to develop and which did not.
    </p>
    <p style={prose}>
      The pattern replicates across generations without anyone choosing to
      pass it on. The caregiver whose resonance floods unpredictably was once
      a child in an unpredictable environment. No one in the chain chose to
      start it. Each link is an accurate adaptation passed forward. The chain
      replicates until awareness changes, not just behaviour.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>Tolerance Thresholds</h4>
    <p style={prose}>
      Early environments set tolerance thresholds — the point at which the
      nervous system shifts modes. The child's system learns what intensity,
      instability, or control must be endured to stay connected. This becomes
      an internal baseline for what counts as "normal." A person with flooded
      ER and absent SEA will feel the harm through resonance but cannot
      identify it as harm being done to <em>them</em> — the signal arrives
      but cannot be read as one's own pain.
    </p>

    <h4 style={subheading}>False Coherence Emerges in Childhood</h4>
    <p style={prose}>
      Without SEA, the child cannot locate its own experience. Cognition
      steps in and builds a narrative around the awareness gaps — an
      explanation that the child can hold onto. The child with flooded ER
      narrates: "I am the caring one." The child with absent ER narrates: "I
      am the realistic one." The child with weaponised RE narrates: "I am the
      strong one." These narratives are not lies. They are the most
      intelligent thing cognition could build given what was available. They
      are reinforced by the adults in the system — parents who believe that
      suppressing emotions is correct will actively teach this, and the
      conviction lands because it matches what the parent's body is doing.
    </p>

    <h4 style={subheading}>Healing Is Reconnecting, Not Removing</h4>
    <p style={prose}>
      Healing is not finding a hidden self or removing a mask. It is two
      specific things: (1) developing SEA — the keystone capacity, because
      with SEA online, RE and ER can be recalibrated to serve the person
      rather than the survival strategy; and (2) learning the return path —
      experiencing through co-regulation and safe relationships that
      activation can resolve. The body must learn what the mind cannot teach.
      What didn't develop then can develop now — given the right conditions.
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
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Attachment Theory
            </td>
            <td style={tableCell}>
              Early relationships shape regulatory defaults and conditions for
              awareness development
            </td>
            <td style={tableCell}>
              Bowlby, 1969; Ainsworth, 1978; Main & Hesse, 1990
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
            <td style={tableCell}>Main & Goldwyn, 1998</td>
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
              Regulation as completion of the activation cycle; body must learn
              the return
            </td>
            <td style={tableCell}>Levine, 1997</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={prose}>
      <strong style={{ color: TEXT.primary }}>TEG-Blue's contribution:</strong>{" "}
      The specific mechanism — awareness teaches awareness through embodied
      transmission — connecting caregiver capacity configuration to child
      developmental outcomes. The three awareness capacities (RE, ER, SEA) as
      the data system the compass works with. The mapping of three specific
      childhood conditions (unpredictability, incongruence, invalidation) to
      distinct adult capacity configurations. The developmental account of
      false coherence as the most intelligent thing cognition could build
      given what was available. The building blocks are established; the
      integration is the hypothesis, open to testing.
    </p>
  </>
);
