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
      F1&ndash;F7 trace a single thread: how the nervous system builds
      substitutes for the regulation that was never learned, escalating from
      individual cognition to collective domination. F8 turns the system
      around and asks: how do you go back?
    </p>
    <p style={standaloneLine}>
      Every substitute was built because the original was missing. Repair
      means building the original.
    </p>
    <p style={prose}>
      Not undoing the past, but developing what the past did not provide
      conditions for. F8 returns to F2&rsquo;s three awareness capacities
      &mdash; Reading Emotions (RE), Emotional Resonance (ER), and
      Self-Emotional Awareness (SEA) &mdash; and shows how they can be
      developed in adulthood through different pathways than childhood
      provided.
    </p>
    <p style={prose}>
      F8 operates in two movements: individual repair (assessing and restoring
      the three awareness capacities) and collective strength (why different
      configurations make collectives stronger rather than weaker).
    </p>
    <p style={standaloneLine}>
      The collective compass is more accurate when it has more sensors.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>Assessing Current Configuration</h4>
    <p style={prose}>
      The three awareness capacities are not binary. Each can be in different
      states: online (functioning and serving understanding), offline (never
      developed or fully shut down), misdirected (functioning but serving the
      wrong purpose), collapsed (was developing but was overwhelmed), or
      compensatory (one capacity doing another&rsquo;s job).
    </p>
    <p style={standaloneLine}>
      Which capacities had conditions to develop, which did not, and what is
      each one currently doing?
    </p>
    <p style={prose}>
      This is a configuration, not a diagnosis. Every configuration made sense
      given the original environment. The question is whether the current
      configuration serves the person now.
    </p>

    <h4 style={subheading}>Why Repair Is Difficult</h4>
    <p style={prose}>
      The system needing repair defends against repair. False coherence treats
      the current configuration as truth. Cognitive replacement has been
      reinforced for years or decades. SEA coming online means feeling what
      was previously unfelt &mdash; grief for what was lost, anger about what
      happened, confusion about who one actually is without the narrative.
      Relationships were built around the current configuration &mdash;
      changing it changes everything.
    </p>
    <p style={standaloneLine}>
      The system is not resisting repair. It is assessing whether repair is
      safe. When it is, it will move.
    </p>

    <h4 style={subheading}>Five Conditions for Repair</h4>
    <p style={prose}>
      No single condition is sufficient alone. All five are necessary:
      (1) <strong style={emphasis}>Felt safety</strong> &mdash; not cognitive
      understanding but experienced regulation sufficient for new capacity to
      come online; (2){" "}
      <strong style={emphasis}>Accurate mirroring</strong> &mdash; being seen
      as one actually is, not the performance or the mask; (3){" "}
      <strong style={emphasis}>Discomfort tolerance</strong> &mdash; capacity
      to stay present with what arises when capacities come online;
      (4) <strong style={emphasis}>Permission</strong> &mdash; internal and
      external acceptance that imperfection and not-knowing are legitimate;
      (5) <strong style={emphasis}>Time</strong> &mdash; accumulated
      experience rather than single insight.
    </p>
    <p style={standaloneLine}>
      You cannot think your way into felt safety. You can only experience your
      way there.
    </p>

    <h4 style={subheading}>The Repair Process</h4>
    <p style={prose}>
      Repair is non-linear and oscillating. Five phases: unawareness &rarr;
      recognition &rarr; oscillation &rarr; active development &rarr;
      integration. The oscillation phase is critical &mdash; the nervous
      system tests new capacity, retreats to the familiar configuration, tests
      again. This is not failure. Each oscillation that does not result in
      catastrophe is accumulated evidence that new capacity is survivable.
    </p>
    <p style={standaloneLine}>
      The back-and-forth is not the problem. The back-and-forth is the
      process.
    </p>
    <p style={prose}>
      Repair does not produce three perfectly balanced, permanently online
      awareness capacities. It produces a compass that can move. False
      coherence becomes recognisable. The return works. Emotions are
      experienced as information &mdash; sometimes overwhelming, sometimes
      quiet, but receivable.
    </p>
    <p style={standaloneLine}>
      Not becoming someone new &mdash; being able to be yourself more of the
      time.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>Everyone Masks Their Configuration</h4>
    <p style={prose}>
      This is a universal pattern, not limited to neurodivergent experience.
      Authentic expression meets environmental punishment. The nervous system
      learns authenticity is unsafe. A regulatory strategy forms &mdash;
      suppress what does not fit, perform what is expected. The mask becomes
      automatic. False coherence absorbs it: &ldquo;This is who I am.&rdquo;
    </p>
    <p style={prose}>
      What gets masked includes high RE (&ldquo;you&rsquo;re too
      sensitive&rdquo;), high ER (&ldquo;toughen up&rdquo;), online SEA
      (&ldquo;you&rsquo;re overthinking&rdquo;), nonlinear processing
      (&ldquo;stay focused&rdquo;), intense focus (&ldquo;you&rsquo;re
      obsessed&rdquo;) &mdash; any configuration that does not match the
      system&rsquo;s regulation requirements.
    </p>
    <p style={standaloneLine}>
      Masking is not individual choice &mdash; it is the predictable response
      to systems that regulate through enforced conformity.
    </p>

    <h4 style={subheading}>The Cost of Conformity</h4>
    <p style={prose}>
      When everyone masks, the collective loses what different configurations
      provide. Homogeneity feels safe but is fragile &mdash; a system where
      everyone reads the same way, feels the same way, processes the same way
      has massive blind spots. It cannot detect what no member is equipped to
      detect. It cannot feel what no member is allowed to feel.
    </p>
    <p style={standaloneLine}>
      A team where everyone processes the same way is not a balanced team
      &mdash; it is a team with shared blind spots.
    </p>

    <h4 style={subheading}>Collective Intelligence Through Openness</h4>
    <p style={prose}>
      Different awareness configurations see different things. High RE
      detects misalignment between what is said and what is meant. High ER
      holds the emotional truth of the group. Strong SEA names what is
      happening and cuts through false coherence. Nonlinear processing finds
      connections sequential thinkers miss. Detail orientation catches what
      broadness skips.
    </p>
    <p style={standaloneLine}>
      Safety through sameness is false coherence at collective scale.
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
            <td style={{ ...tableCell, fontWeight: 600 }}>Metacognition</td>
            <td style={tableCell}>
              Awareness of one&rsquo;s own thinking and emotional processes
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
            <td style={tableCell}>Bateman &amp; Fonagy</td>
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
      <strong style={{ color: TEXT.primary }}>
        TEG-Blue&rsquo;s contribution:
      </strong>{" "}
      The assessment model based on three awareness capacities in five states
      (online, offline, misdirected, collapsed, compensatory). The five
      conditions for repair as necessary but individually insufficient. The
      oscillation model normalising non-linear progress. The collective
      intelligence argument &mdash; different configurations as sensors, not
      deficits. The building blocks are established; the integration is the
      hypothesis, open to testing.
    </p>
  </>
);
