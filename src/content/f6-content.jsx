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
      When worth sorting (F5) becomes stable and internalised, it stops being
      experienced as a system and becomes perception. F6 explains how this
      happens. The foundational reframe:{" "}
      <strong style={emphasis}>
        bias is not a thinking problem — it is a regulation strategy.
      </strong>
    </p>
    <p style={prose}>
      Under stable conditions, bias functions as rapid pattern recognition —
      efficient and often useful. Under threat conditions, the same efficiency
      becomes rigid certainty. The system is no longer categorising; it is
      regulating. Beliefs that reduce threat are maintained; beliefs that
      increase threat are rejected. The criterion is not accuracy but
      stability.
    </p>
    <p style={prose}>
      The regulatory equation: if believing something reduces threat, the
      nervous system keeps believing it — below conscious awareness. This is
      false coherence operating at the perceptual level. The person is not
      stubbornly maintaining a wrong belief. They are experiencing
      physiological confirmation that the belief is correct.{" "}
      <strong style={emphasis}>
        Certainty is physiological stability, not epistemic accuracy.
      </strong>
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>The Bias Architecture</h4>
    <p style={prose}>
      Bias operates through eight interacting constructs: (1) the overarching
      architecture of perceptual filters and emotional associations; (2){" "}
      <strong style={emphasis}>Emotional Logic</strong> — beliefs feel true
      when they stabilise the nervous system; (3){" "}
      <strong style={emphasis}>State-Dependent Perception</strong> — what you
      perceive broadens in Connection and narrows in threat modes; (4) the{" "}
      <strong style={emphasis}>Identity Filter</strong> — when "what I think"
      becomes "who I am," contradiction becomes identity threat; (5) the{" "}
      <strong style={emphasis}>Social Reward Loop</strong> — bias reinforced
      through belonging; (6){" "}
      <strong style={emphasis}>Empathy Collapse</strong> — state-dependent
      shutdown of resonance; (7){" "}
      <strong style={emphasis}>Update Failure</strong> — loss of revision
      capacity when Identity Filter is engaged and Empathy Collapse has
      occurred; and (8) the{" "}
      <strong style={emphasis}>Emotional Safety Threshold</strong>.
    </p>
    <p style={prose}>
      The threshold equation formalises revision conditions:{" "}
      <strong style={emphasis}>
        Update capacity = (Internal safety + Relational safety) − (Identity
        threat + Belonging threat).
      </strong>{" "}
      When the right side exceeds the left, the system cannot update.
    </p>

    <h4 style={subheading}>Three Categories by Regulatory Function</h4>
    <p style={prose}>
      <strong style={emphasis}>Cognitive biases</strong> (confirmation,
      authority, negativity, attribution) provide certainty and control —
      clear answers feel safer than open questions.{" "}
      <strong style={emphasis}>Social and cultural biases</strong> (in-group
      favouritism, racism, sexism, ableism, classism) provide belonging and
      status — shared bias provides identity and protection.{" "}
      <strong style={emphasis}>Internalised emotional biases</strong> ("I'm
      not good enough," "can't trust," "my needs don't matter") provide
      identity coherence — not cognitive distortions but bias absorbed into
      the compass itself, calibrated during development (F2) and maintained
      through false coherence (F3).
    </p>

    <h4 style={subheading}>The Phenomenology of Certainty</h4>
    <p style={prose}>
      Why does bias feel like seeing clearly? The answer is physiological:
      stimulus triggers uncertainty → interpretation reduces threat → threat
      reduction produces physiological relief → relief is experienced as
      "rightness" → "rightness" is mistaken for accuracy. The felt sense of
      certainty is the nervous system reporting threat reduction, mistaken for
      epistemic confirmation. This explains why bias is invisible to the
      person running it — their body is telling them it is true.
    </p>
    <p style={prose}>
      Everyday expressions of this: intuition is pattern-matching from past
      experience (which may be biased experience); "gut feeling" is a somatic
      marker from emotional conditioning; "common sense" is normalised
      cultural bias; "obviously true" is absence of contradiction with the
      existing model.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>The Six-Step Bias Formation Loop</h4>
    <p style={prose}>
      Bias self-reinforces through a six-step loop: (1) uncertainty detected;
      (2) fast, complexity-reduced interpretation selected; (3) interpretation
      fuses with identity; (4) social reinforcement stabilises; (5) challenge
      triggers defence — new information treated as threat, filtered out,
      source discredited; (6) revision requires safety return. The loop
      parallels F4's seven-step rule internalisation and F5's five-step worth
      loop — the nervous system generating the same regulatory architecture
      at different organisational scales.
    </p>

    <h4 style={subheading}>The Revision Pathway — Safety Before Correction</h4>
    <p style={prose}>
      <strong style={emphasis}>
        Shame does not unlearn bias. Safety does.
      </strong>{" "}
      Shame activates threat, which activates defence, which engages the
      Identity Filter and Social Reward Loop. The person performs revision —
      a new form of false coherence — without genuine updating.
    </p>
    <p style={prose}>
      Five conditions for genuine revision: (1) internal safety — a regulated
      nervous system; (2) relational safety — correction from a trusted
      source; (3) identity flexibility — enough space that being wrong does
      not threaten who you are; (4) alternative meaning — a replacement
      interpretation that provides enough regulation; (5) gradual exposure —
      incremental revision, not sudden conversion. Bias-correction programmes
      relying on education, shame, or moral argument are predicted to fail.
      Safety-based approaches meeting these five conditions are predicted to
      succeed.
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
              Cognitive Psychology
            </td>
            <td style={tableCell}>
              Heuristics, biases, motivated reasoning, need for closure
            </td>
            <td style={tableCell}>
              Kahneman & Tversky; Kunda, 1990; Kruglanski
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Social Psychology
            </td>
            <td style={tableCell}>
              Dissonance, social identity, system justification
            </td>
            <td style={tableCell}>Festinger; Tajfel & Turner; Jost & Banaji</td>
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
            <td style={tableCell}>Greenwald & Banaji</td>
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
      <strong style={{ color: TEXT.primary }}>TEG-Blue's contribution:</strong>{" "}
      The explicit unification of bias as regulation rather than reasoning
      error. The Bias Architecture with eight interacting constructs and the
      threshold equation formalising revision conditions. The three-category
      organisation by regulatory function. The phenomenology of certainty
      showing how threat reduction is mistaken for epistemic accuracy. The
      revision pathway with five conditions and testable predictions. The
      building blocks are established; the integration is the hypothesis,
      open to testing.
    </p>
  </>
);
