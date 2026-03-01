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
      F8 describes a universal pattern: everyone masks their configuration
      when the environment punishes authentic expression. F9 asks what happens
      when that pattern becomes structural — when environments are designed
      for one neurological configuration and nervous systems arrive that work
      differently.
    </p>
    <p style={prose}>
      Neurodivergence is a difference in how the nervous system is configured —
      how it processes information, rhythm, sensory input, attention, social
      signals, and emotion. It is not a deficit to correct, a disorder to
      treat, or a special gift. It is a configuration. A neurodivergent
      nervous system in a well-matched environment can sit in Connection just
      as sustainably as any other.{" "}
      <strong style={emphasis}>
        The compass is not broken. The environment may be mismatched.
      </strong>
    </p>
    <p style={prose}>
      <strong style={emphasis}>System Mismatch</strong> is the gap between
      what an environment requires and what a nervous system can sustainably
      provide. The variable is context, not neurology. The person whose
      configuration matches the environment does not know the environment was
      designed for them — the fish does not know it is in water.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>Structural Masking</h4>
    <p style={prose}>
      Neurodivergent masking goes beyond F8's universal pattern because the
      punishment is structural — built into every institution, space, and norm,
      with no environment to escape to. It requires hiding rhythm itself:
      suppressing stims, forcing eye contact, performing emotional display,
      running explicit analysis to mimic intuition, maintaining neurotypical
      pace, filtering sensory responses.
    </p>
    <p style={prose}>
      The cost is cumulative across every dimension: energetic (fatigue,
      recovery time), cognitive (capacity consumed by performance), emotional
      (disconnection from authentic feeling), somatic (tension, pain, stress
      illness), developmental (suppressed capacities do not develop), and
      identity (false coherence: "my authentic rhythm is wrong").{" "}
      <strong style={emphasis}>
        You cannot develop your capacities while suppressing the system those
        capacities run on.
      </strong>
    </p>

    <h4 style={subheading}>Threshold Dynamics</h4>
    <p style={prose}>
      Threshold = baseline capacity − (masking cost + environmental demand +
      accumulated stress). For neurodivergent people facing chronic mismatch,
      the threshold is under constant pressure. Crossing produces meltdown,
      shutdown, or oscillation — frequently misinterpreted as manipulation or
      laziness rather than regulatory collapse. When persistently close to
      threshold, the threshold itself lowers through accumulated stress.{" "}
      <strong style={emphasis}>
        You cannot rest your way out of an environment that requires you to
        run a system your nervous system was not built to run.
      </strong>
    </p>

    <h4 style={subheading}>Awareness Capacities in Neurodivergent Experience</h4>
    <p style={prose}>
      The three capacities are not absent but configured differently. RE may
      be hyper-accurate, systematically processed, or differently channelled —
      misread as "lacks empathy." ER may be intense, delayed, or internally
      deep but externally flat — misread as "doesn't care." SEA may be highly
      developed or disrupted by chronic masking — misread as "not self-aware."
      Repair requires reconnection to neurodivergent rhythm — authentic
      processing speed, sensory experience, emotional intensity — not learning
      to regulate like a neurotypical person.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>Unmasking Is Not Healing</h4>
    <p style={prose}>
      Dropping neurotypical performance is not the same as being met in
      authentic expression. Healing requires accommodating environments,
      accurate mirroring, internalised shame repair, grief work, identity
      reconstruction, and relational renegotiation.{" "}
      <strong style={emphasis}>
        Unmasking into a vacuum fails. The environment must be ready before
        the mask comes off.
      </strong>
    </p>

    <h4 style={subheading}>From Accommodation to Design</h4>
    <p style={prose}>
      The shift is from an accommodation model (retrofit after failure,
      exception process, individual burden) to a design model (build for
      variation from the start, standard options, system responsibility).
      Seven design principles: regulation first, sensory consideration,
      flexible pacing, communication clarity, autonomy respect, multiple
      modalities, and rest integration.{" "}
      <strong style={emphasis}>
        Genuine inclusion is not charity. It is structural intelligence.
      </strong>
    </p>

    <h4 style={subheading}>The Structural Argument</h4>
    <p style={prose}>
      Systems designed for one configuration lose access to other
      configurations' contributions, produce avoidable suffering, and
      perpetuate the regulation thread. Single-process systems appear
      efficient but exclude different configurations' contributions, generate
      avoidable costs, and create fragile systems with shared blind spots.
      Neither individual repair without structural change nor structural
      change without individual repair is sufficient alone.
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
              Neurodiversity Paradigm
            </td>
            <td style={tableCell}>
              Neurodivergence as natural human variation
            </td>
            <td style={tableCell}>Singer; Walker; Silberman</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Social Model of Disability
            </td>
            <td style={tableCell}>
              Disability created by environment, not individual
            </td>
            <td style={tableCell}>Oliver; Shakespeare</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Intense World Theory
            </td>
            <td style={tableCell}>
              Heightened perception as processing difference
            </td>
            <td style={tableCell}>Markram & Markram</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Masking Research</td>
            <td style={tableCell}>
              Masking and burnout as mismatch outcomes
            </td>
            <td style={tableCell}>Price; Rose; Maté</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Universal Design</td>
            <td style={tableCell}>
              Build for variation from the start
            </td>
            <td style={tableCell}>CAST; Rose</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Polyvagal Theory</td>
            <td style={tableCell}>
              Safety detection shapes regulatory capacity
            </td>
            <td style={tableCell}>Porges, 2011</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={prose}>
      <strong style={{ color: TEXT.primary }}>TEG-Blue's contribution:</strong>{" "}
      The System Mismatch framing relocating the problem from individual to
      environment. Structural masking as a distinct mechanism with cumulative
      cost. The threshold equation formalising collapse conditions. The
      awareness capacities model applied to neurodivergent experience — showing
      capacities as differently configured, not absent. The shift from
      accommodation to design with seven principles. The building blocks are
      established; the integration is the hypothesis, open to testing.
    </p>
  </>
);
