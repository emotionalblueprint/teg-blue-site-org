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
      When worth sorting (F5) becomes stable and internalised, it stops being
      experienced as a system. It becomes perception. Credibility, competence,
      and trust begin to feel inherent to certain people &mdash; not assigned by
      a filter but simply obvious. F6 explains how this happens.
    </p>
    <p style={standaloneLine}>
      Bias is not a thinking problem. It is a regulation strategy.
    </p>
    <p style={prose}>
      Under stable conditions, bias functions as rapid pattern recognition
      &mdash; efficient and often useful. Under threat conditions, the same
      efficiency becomes rigid certainty. The system is no longer categorising.
      It is regulating. Beliefs that reduce threat are maintained. Beliefs that
      increase threat are rejected. The criterion is not accuracy but stability.
    </p>
    <p style={prose}>
      The regulatory equation: if believing something reduces threat, the
      nervous system keeps believing it &mdash; below conscious awareness. By
      the time the person is &ldquo;thinking about it,&rdquo; the perceptual
      system has already delivered a conclusion that feels like observation.
    </p>
    <p style={standaloneLine}>
      Certainty is physiological stability, not epistemic accuracy.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>The Bias Architecture</h4>
    <p style={prose}>
      Bias operates through eight interacting constructs: the overarching
      architecture of perceptual filters and emotional associations;{" "}
      <strong style={emphasis}>Emotional Logic</strong> &mdash; beliefs feel true
      when they stabilise;{" "}
      <strong style={emphasis}>State-Dependent Perception</strong> &mdash; what
      you perceive broadens in Connection and narrows in threat modes; the{" "}
      <strong style={emphasis}>Identity Filter</strong> &mdash; when &ldquo;what
      I think&rdquo; becomes &ldquo;who I am,&rdquo; contradiction becomes
      identity threat; the{" "}
      <strong style={emphasis}>Social Reward Loop</strong> &mdash; bias
      reinforced through belonging;{" "}
      <strong style={emphasis}>Empathy Collapse</strong> &mdash; state-dependent
      shutdown of resonance; and{" "}
      <strong style={emphasis}>Update Failure</strong> &mdash; the interaction
      effect when Identity Filter is engaged and Empathy Collapse has occurred.
    </p>
    <p style={prose}>
      The eighth construct is the{" "}
      <strong style={emphasis}>Emotional Safety Threshold</strong> &mdash; the
      minimum safety level required for revision. The equation:{" "}
      <em>
        Update capacity = (Internal safety + Relational safety) &minus;
        (Identity threat + Belonging threat).
      </em>{" "}
      When the right side exceeds the left, the system cannot update. It is not
      choosing rigidity. It is structurally unable to revise because the
      regulatory cost would exceed what the nervous system can absorb.
    </p>

    <h4 style={subheading}>Three Categories by Regulatory Function</h4>
    <p style={prose}>
      F6 organises the entire bias landscape not by type or domain but by what
      each bias regulates:
    </p>

    <div style={{ overflowX: "auto", margin: "16px 0" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeader}>Category</th>
            <th style={tableHeader}>What It Regulates</th>
            <th style={tableHeader}>Intervention Direction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Cognitive biases</td>
            <td style={tableCell}>Certainty, control</td>
            <td style={tableCell}>
              Safety-to-revise: reduce the cost of being wrong
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Social &amp; cultural biases
            </td>
            <td style={tableCell}>Belonging, status</td>
            <td style={tableCell}>
              Alternative belonging: group identity that doesn&rsquo;t require
              shared bias
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Internalised emotional biases
            </td>
            <td style={tableCell}>Identity coherence</td>
            <td style={tableCell}>
              Relational repair: address the developmental conditions
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style={prose}>
      Internalised emotional biases &mdash; &ldquo;I&rsquo;m not good
      enough,&rdquo; &ldquo;people can&rsquo;t be trusted,&rdquo; &ldquo;my
      needs don&rsquo;t matter&rdquo; &mdash; are not cognitive distortions in
      the standard clinical sense. They are bias absorbed into the compass
      itself, calibrated during development (F2) and maintained through false
      coherence (F3). They feel like observations about reality because they
      have been running since before the person had language to question them.
    </p>

    <h4 style={subheading}>The Phenomenology of Certainty</h4>
    <p style={prose}>
      Why does bias feel like seeing clearly? The answer is physiological.
      Stimulus triggers uncertainty. Interpretation reduces threat. Threat
      reduction produces physiological relief. Relief is experienced as
      &ldquo;rightness.&rdquo; &ldquo;Rightness&rdquo; is mistaken for
      accuracy.
    </p>
    <p style={prose}>
      The person is not stubbornly maintaining a wrong belief. They are
      experiencing physiological confirmation that the belief is correct. Their
      body is telling them it is true. Telling them they are wrong
      doesn&rsquo;t just contradict their thinking &mdash; it contradicts their
      somatic experience.
    </p>
    <p style={prose}>
      Everyday expressions: intuition is pattern-matching from past experience
      (which may be biased experience). &ldquo;Gut feeling&rdquo; is a somatic
      marker from emotional conditioning. &ldquo;Common sense&rdquo; is
      normalised cultural bias. &ldquo;Obviously true&rdquo; means no
      contradiction with the existing model &mdash; which says nothing about
      accuracy.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>The Six-Step Bias Formation Loop</h4>
    <p style={prose}>
      Bias self-reinforces through a six-step loop: (1) uncertainty or
      difference detected; (2) fast, complexity-reduced interpretation selected;
      (3) interpretation fuses with identity &mdash; &ldquo;what I think&rdquo;
      becomes &ldquo;who I am&rdquo;; (4) social reinforcement stabilises
      &mdash; the group approves, belonging flows; (5) challenge triggers
      defence &mdash; new information treated as threat, source discredited;
      (6) revision requires safety return.
    </p>
    <p style={prose}>
      The loop parallels F4&rsquo;s seven-step rule internalisation and
      F5&rsquo;s five-step worth loop &mdash; the same regulatory architecture
      generating at different organisational scales. Each scale makes the
      substitute harder to see because each scale feels more like &ldquo;just
      how things are.&rdquo;
    </p>

    <h4 style={subheading}>
      The Revision Pathway &mdash; Safety Before Correction
    </h4>
    <p style={standaloneLine}>
      Shame does not unlearn bias. Safety does.
    </p>
    <p style={prose}>
      Shame activates threat. Threat activates defence. Defence engages the
      Identity Filter and Social Reward Loop. The person performs revision
      &mdash; publicly adjusting their language while the bias architecture
      remains intact. Shame produces performance, not revision. And performance
      is itself a regulation strategy &mdash; a new form of false coherence.
    </p>
    <p style={prose}>
      Five conditions for genuine revision: (1){" "}
      <strong style={emphasis}>internal safety</strong> &mdash; a regulated
      nervous system that can tolerate the disorientation of being wrong;
      (2) <strong style={emphasis}>relational safety</strong> &mdash; correction
      from a trusted context; (3){" "}
      <strong style={emphasis}>identity flexibility</strong> &mdash; enough
      space that being wrong does not threaten who you are; (4){" "}
      <strong style={emphasis}>alternative meaning</strong> &mdash; a
      replacement interpretation that provides enough regulation; (5){" "}
      <strong style={emphasis}>gradual exposure</strong> &mdash; incremental
      revision, not sudden conversion.
    </p>
    <p style={prose}>
      Testable prediction: bias-correction programmes relying on education,
      shame, or moral argument are predicted to fail. Safety-based approaches
      meeting these five conditions are predicted to succeed.
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
              Cognitive Psychology
            </td>
            <td style={tableCell}>
              Heuristics, biases, motivated reasoning, need for closure
            </td>
            <td style={tableCell}>
              Kahneman &amp; Tversky; Kunda, 1990; Kruglanski
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Social Psychology
            </td>
            <td style={tableCell}>
              Dissonance, social identity, system justification
            </td>
            <td style={tableCell}>
              Festinger; Tajfel &amp; Turner; Jost &amp; Banaji
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Neuroscience</td>
            <td style={tableCell}>
              Predictive coding, neuroception, somatic markers, threat detection
            </td>
            <td style={tableCell}>
              Friston; Porges, 2011; Damasio, 1994; LeDoux
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Implicit Cognition
            </td>
            <td style={tableCell}>
              Implicit bias, implicit associations
            </td>
            <td style={tableCell}>Greenwald &amp; Banaji</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Psychological Safety
            </td>
            <td style={tableCell}>
              Safety as prerequisite for learning and revision
            </td>
            <td style={tableCell}>Edmondson, 1999</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Dehumanisation Research
            </td>
            <td style={tableCell}>
              How empathy collapse becomes structural
            </td>
            <td style={tableCell}>Haslam; Bandura</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Contact Theory</td>
            <td style={tableCell}>
              Conditions for prejudice reduction
            </td>
            <td style={tableCell}>Allport, 1954</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={prose}>
      <strong style={{ color: TEXT.primary }}>
        TEG-Blue&rsquo;s contribution:
      </strong>{" "}
      The foundational reframe of bias as regulation rather than reasoning error.
      The Bias Architecture with eight interacting constructs and the threshold
      equation formalising revision conditions. The three-category organisation
      by regulatory function with matched intervention directions. The
      phenomenology of certainty &mdash; showing how threat reduction is
      mistaken for epistemic accuracy. The revision pathway: &ldquo;shame does
      not unlearn bias &mdash; safety does&rdquo; with five conditions and
      testable predictions. The building blocks are established; the integration
      is the hypothesis, open to testing.
    </p>
  </>
);
