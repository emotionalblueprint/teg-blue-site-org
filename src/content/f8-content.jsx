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
      F1–F7 trace a single thread: how the nervous system builds substitutes
      for the regulation that was never learned, escalating from individual
      cognition to collective domination. F8 turns the system around and asks:
      how do you go back?
    </p>
    <p style={prose}>
      The answer:{" "}
      <strong style={emphasis}>
        every substitute was built because the original was missing. Repair
        means building the original.
      </strong>{" "}
      Not undoing the past, but developing what the past did not provide
      conditions for. F8 returns to F2's three awareness capacities — Reading
      Emotions (RE), Emotional Resonance (ER), and Self-Emotional Awareness
      (SEA) — and shows how they can be developed in adulthood through
      different pathways than childhood provided.
    </p>
    <p style={prose}>
      F8 operates in two movements: individual repair (assessing and restoring
      the three awareness capacities) and collective strength (why different
      configurations make collectives stronger rather than weaker). The
      collective compass is more accurate when it has more sensors.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>Assessing Current Configuration</h4>
    <p style={prose}>
      The three awareness capacities exist in states: online, offline,
      misdirected, collapsed, or compensatory. The assessment question is not
      diagnostic but configurational: which capacities had conditions to
      develop, which did not, and what is each one currently doing? Every
      configuration made sense in its original environment.
    </p>

    <h4 style={subheading}>Why Repair Is Difficult</h4>
    <p style={prose}>
      The system needing repair defends against repair. False coherence treats
      the current configuration as truth. Cognitive replacement has been
      reinforced for years or decades. SEA coming online means feeling what
      was previously unfelt. Relationships were built around the current
      configuration — changing it changes everything.{" "}
      <strong style={emphasis}>
        The system is not resisting repair. It is assessing whether repair is
        safe. When it is, it will move.
      </strong>
    </p>

    <h4 style={subheading}>Five Conditions for Repair</h4>
    <p style={prose}>
      No single condition is sufficient alone. All five are necessary:
      (1) <strong style={emphasis}>Felt safety</strong> — not cognitive
      understanding but experienced regulation; (2){" "}
      <strong style={emphasis}>Accurate mirroring</strong> — being seen as one
      actually is; (3){" "}
      <strong style={emphasis}>Discomfort tolerance</strong> — capacity to stay
      present with what arises when capacities come online;
      (4) <strong style={emphasis}>Permission</strong> — internal and external
      acceptance that imperfection is legitimate; (5){" "}
      <strong style={emphasis}>Time</strong> — accumulated experience rather
      than single insight. You cannot think your way into felt safety. You can
      only experience your way there.
    </p>

    <h4 style={subheading}>The Repair Process</h4>
    <p style={prose}>
      Repair is non-linear and oscillating. Five phases: unawareness →
      recognition → oscillation → active development → integration. The
      oscillation phase is critical — the back-and-forth between old patterns
      and new capacity is not the problem, it is the process. Each oscillation
      that does not result in catastrophe is accumulated evidence that new
      capacity is survivable.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>Everyone Masks Their Configuration</h4>
    <p style={prose}>
      This is a universal pattern, not limited to neurodivergent experience:
      authentic expression → environmental punishment → nervous system learns
      authenticity is unsafe → mask forms → false coherence absorbs the mask.
      What gets masked includes high RE, high ER, online SEA, nonlinear
      processing, slow processing, intense focus — any configuration that does
      not match the system's regulation requirements.{" "}
      <strong style={emphasis}>
        Masking is not individual choice — it is the predictable response to
        systems that regulate through enforced conformity.
      </strong>
    </p>

    <h4 style={subheading}>The Cost of Conformity</h4>
    <p style={prose}>
      When everyone masks, the collective loses what different configurations
      provide. Homogeneity feels safe but is fragile. Difference feels
      threatening but builds resilience. A team where everyone processes the
      same way is not a balanced team — it is a team with shared blind spots.
    </p>

    <h4 style={subheading}>Collective Intelligence Through Openness</h4>
    <p style={prose}>
      Different awareness configurations see different things. High RE detects
      misalignment. High ER holds emotional truth. Strong SEA names what is
      happening. Nonlinear processing finds connections. Detail orientation
      catches what broadness skips.{" "}
      <strong style={emphasis}>
        The collective compass is more accurate when it has more sensors.
        Safety through sameness is false coherence at collective scale.
      </strong>
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
            <td style={{ ...tableCell, fontWeight: 600 }}>Metacognition</td>
            <td style={tableCell}>
              Awareness of one's own thinking and emotional processes
            </td>
            <td style={tableCell}>Flavell; Wells</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Mindfulness Research
            </td>
            <td style={tableCell}>
              Present-moment awareness without judgement
            </td>
            <td style={tableCell}>Kabat-Zinn; Teasdale</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Emotion Differentiation
            </td>
            <td style={tableCell}>
              Granularity of emotional experience predicts outcomes
            </td>
            <td style={tableCell}>Barrett, 2017</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Reflective Functioning
            </td>
            <td style={tableCell}>
              Capacity to understand behaviour in terms of mental states
            </td>
            <td style={tableCell}>Fonagy; Target</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Mentalization Theory
            </td>
            <td style={tableCell}>
              Understanding self and others as having minds
            </td>
            <td style={tableCell}>Bateman & Fonagy</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Somatic Experiencing
            </td>
            <td style={tableCell}>
              Body-based completion of incomplete threat responses
            </td>
            <td style={tableCell}>Levine, 1997</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={prose}>
      <strong style={{ color: TEXT.primary }}>TEG-Blue's contribution:</strong>{" "}
      The assessment model based on three awareness capacities in five states
      (online, offline, misdirected, collapsed, compensatory). The five
      conditions for repair as necessary but individually insufficient. The
      oscillation model normalising non-linear progress. The collective
      intelligence argument — different configurations as sensors, not deficits.
      The building blocks are established; the integration is the hypothesis,
      open to testing.
    </p>
  </>
);
