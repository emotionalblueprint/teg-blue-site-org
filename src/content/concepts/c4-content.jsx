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
  background: hexToRgba(SPECTRUM.cobalt, 0.04),
};

// ─── WHAT IT IS ─────────────────────────────────────────────

export const whatItIs = (
  <>
    <p style={prose}>
      What you can perceive, think, feel, and do depends on your current
      position on the gradient. This is not a metaphor. It is the operational
      consequence of how the nervous system organises resources under different
      levels of perceived safety.
    </p>

    {/* Capacity table */}
    <div
      style={{
        overflowX: "auto",
        marginBottom: 20,
        borderRadius: 8,
        border: `1px solid ${BORDER.default}`,
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: 560,
        }}
      >
        <thead>
          <tr>
            <th style={tableHeader}>Capacity</th>
            <th style={tableHeader}>Connection</th>
            <th style={tableHeader}>Protection</th>
            <th style={tableHeader}>Control</th>
            <th style={tableHeader}>Domination</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Perception
            </td>
            <td style={tableCell}>Broad — sees the full field</td>
            <td style={tableCell}>Narrowed — sees threat-relevant signals</td>
            <td style={tableCell}>Strategic — sees what needs managing</td>
            <td style={tableCell}>Tunnel — sees obstacles and resources</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Empathy
            </td>
            <td style={tableCell}>Full — serves understanding</td>
            <td style={tableCell}>Filtered — survival-relevant only</td>
            <td style={tableCell}>Redirected — serves strategy</td>
            <td style={tableCell}>Collapsed — offline or weaponised</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Cognition
            </td>
            <td style={tableCell}>
              Flexible — holds complexity, tolerates ambiguity
            </td>
            <td style={tableCell}>
              Simplified — binary, speed over accuracy
            </td>
            <td style={tableCell}>
              Strategic — planning, anticipation, narrowed
            </td>
            <td style={tableCell}>
              Locked — rigid, certain, self-confirming
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Learning
            </td>
            <td style={tableCell}>
              Available — new information integrates
            </td>
            <td style={tableCell}>
              Reduced — contradictory information filtered
            </td>
            <td style={tableCell}>Selective — serves the strategy only</td>
            <td style={tableCell}>Unavailable — not open to revision</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Repair
            </td>
            <td style={tableCell}>Possible — vulnerability available</td>
            <td style={tableCell}>
              Limited — vulnerability feels dangerous
            </td>
            <td style={tableCell}>
              Managed — serves image, not relationship
            </td>
            <td style={tableCell}>
              Absent — others are resources or obstacles
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style={prose}>
      When someone cannot listen, cannot learn, cannot empathise, cannot think
      flexibly — the instinct is to ask: <em>what is wrong with this person?</em>{" "}
      The compass reframes the question:{" "}
      <strong style={emphasis}>where is their compass?</strong>
    </p>
    <p style={standaloneLine}>
      Restore safety first, then expect capacity.
    </p>
    <p style={prose}>
      If a person cannot learn, the first question is not about their
      intelligence. If a person cannot take feedback, the first question is not
      about their character. If a person cannot think clearly, the first question
      is not whether they are smart enough. The first question is always: where
      is their compass? Because if the compass is in a threat mode, the capacity
      being expected is structurally unavailable. Change the state, and the
      capacity changes. The capacity is not missing. It is state-dependent.
    </p>
    <p style={prose}>
      This removes moral judgement from a vast range of human difficulty. Empathy
      failure in a moment of threat may not be a moral failing — it may be a
      neurobiological incapacity from that compass position. Rigid thinking under
      stress is not stubbornness — it is what cognition does when the nervous
      system narrows. The question shifts from character to conditions.
    </p>
  </>
);

// ─── WHERE IT COMES FROM ────────────────────────────────────

export const whereItComesFrom = (
  <>
    <p style={prose}>
      Easterbrook (1959) — emotional arousal narrows attention. Kahneman (2011)
      — cognitive load reduces flexibility. Porges (2011) — social engagement
      goes offline under threat. Keltner (2016) — states shape social cognition.
      Fredrickson (2001) — positive states broaden cognitive and behavioural
      repertoires. Siegel (2012) — integration as function of state.
    </p>
  </>
);

// ─── WHAT TEG-BLUE ADDS ────────────────────────────────────

export const whatTegBlueAdds = (
  <>
    <p style={prose}>
      Elevation to primary principle — not a secondary observation but the
      organising insight of the framework. The six-dimension parallel tracking
      across all four modes — perception, empathy, cognition, time orientation,
      learning, and repair — as a diagnostic structure. This does not exist in
      clinical literature in this integrated form.
    </p>
    <p style={prose}>
      Moral judgement removal: empathy failure may be neurobiological incapacity,
      not moral failing.{" "}
      <strong style={emphasis}>
        "Restore safety first, then expect capacity"
      </strong>{" "}
      transforms clinical and relational intervention — the practitioner assesses
      compass position before expecting cognitive flexibility or empathic
      engagement; the partner understands that the person's capacity is
      state-dependent, not character-dependent; the parent recognises that the
      child cannot learn from a Protection position.
    </p>
    <p style={prose}>
      The extension across the full gradient: most models track capacity changes
      between two states (safe/threat). TEG-Blue tracks capacity across four
      modes, making visible the specific costs of Control and Domination —
      including the cognitive narrowing that makes these modes feel like
      rationality while reducing actual cognitive flexibility.
    </p>
  </>
);
