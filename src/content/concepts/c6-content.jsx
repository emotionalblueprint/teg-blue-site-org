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
      Every emotion has two possible expressions, determined by mode position —
      by where the compass needle is pointing when the emotion arises. The
      emotion is the same. What it does depends on the compass.
    </p>

    {/* Two-expression table */}
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
          minWidth: 480,
        }}
      >
        <thead>
          <tr>
            <th style={tableHeader}>Emotion</th>
            <th style={tableHeader}>In Connection</th>
            <th style={tableHeader}>In Threat Modes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Anger
            </td>
            <td style={tableCell}>
              Signals a boundary has been crossed; motivates clarity and repair
            </td>
            <td style={tableCell}>
              Mobilises defence; escalates conflict; becomes attack
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Fear
            </td>
            <td style={tableCell}>
              Signals genuine threat; promotes appropriate caution
            </td>
            <td style={tableCell}>
              Generalises; becomes hypervigilance; restricts engagement
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Sadness
            </td>
            <td style={tableCell}>
              Processes loss; invites support and reflection
            </td>
            <td style={tableCell}>
              Becomes withdrawal; deepens isolation; hardens into hopelessness
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Joy
            </td>
            <td style={tableCell}>
              Celebrates; connects; broadens capacity
            </td>
            <td style={tableCell}>
              Is distrusted; feels dangerous; may trigger threat
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Love
            </td>
            <td style={tableCell}>Opens; deepens; sustains</td>
            <td style={tableCell}>
              Attaches with desperation; becomes possession; masks control
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Shame
            </td>
            <td style={tableCell}>
              Signals misalignment; motivates repair
            </td>
            <td style={tableCell}>
              Becomes identity ("I am wrong"); drives hiding, self-punishment
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Guilt
            </td>
            <td style={tableCell}>
              Signals harm done; motivates accountability
            </td>
            <td style={tableCell}>
              Becomes paralysis; drives excessive self-blame or defensive denial
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Curiosity
            </td>
            <td style={tableCell}>
              Explores; learns; builds understanding
            </td>
            <td style={tableCell}>
              Becomes surveillance; information-gathering for control
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Gratitude
            </td>
            <td style={tableCell}>
              Genuine recognition and appreciation
            </td>
            <td style={tableCell}>
              Becomes performative — thanking people to stay safe
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Trust
            </td>
            <td style={tableCell}>Enables reliance and openness</td>
            <td style={tableCell}>
              Becomes strategic calculation, conditional and defended
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style={prose}>
      The compass determines the expression. The same biological signal produces
      different behaviour depending on where the needle is. Fear in Connection
      produces caution and care. Fear in Protection produces panic or shutdown.
      The signal is the same. The mode transforms it.
    </p>
    <p style={standaloneLine}>
      Assess mode position, not the emotion.
    </p>
    <p style={prose}>
      When someone presents with a "problematic emotion," the first question is
      not "what emotion is this?" The first question is:{" "}
      <strong style={emphasis}>
        "where is the compass when this emotion arrives?"
      </strong>{" "}
      Anger in Connection and anger in Domination are the same emotional signal
      producing entirely different outcomes. Treating "anger" as the problem
      misses the actual variable.
    </p>
    <p style={prose}>
      This applies to every emotion, including the ones conventionally called
      positive. Gratitude in Connection is genuine recognition. Gratitude in
      Protection becomes performative — thanking people to stay safe. Pride in
      Connection is earned satisfaction. Pride in Control becomes enforcement of
      superiority. Love in Connection opens and deepens. Love in Domination
      becomes possession. The categorisation of emotions as "good" or "bad"
      collapses. There are no bad emotions. There are emotions arriving in
      different compass positions.
    </p>
  </>
);

// ─── WHERE IT COMES FROM ────────────────────────────────────

export const whereItComesFrom = (
  <>
    <p style={prose}>
      Gross (1998) — context shapes emotional expression. Barrett (2017) — same
      core affect, different construction. Frijda (1986) — emotions as action
      readiness. Ekman (1992) — basic emotions with distinct functions.
    </p>
  </>
);

// ─── WHAT TEG-BLUE ADDS ────────────────────────────────────

export const whatTegBlueAdds = (
  <>
    <p style={prose}>
      The systematic side-by-side comparison across ten core emotions — no
      existing model provides this. The inclusion of "positive" emotions
      (gratitude, joy, love, pride, trust) — most clinical models focus on
      "negative" emotions. TEG-Blue shows that positive emotions also change in
      the threat modes: gratitude becomes performative, joy becomes manic or
      denied, love becomes possessive. The diagnostic reframe — "assess mode
      position, not the emotion" — inverts standard practice.
    </p>
    <p style={prose}>
      The intervention logic changes: instead of targeting the emotion (reduce
      anger, increase gratitude, build trust), the intervention targets the
      compass position that determines what the emotion does. The same anger that
      is destructive from Domination is healthy from Connection. The same trust
      that is rigid from Control is flexible from Connection. Changing the
      emotion without changing the compass position changes nothing.
    </p>
  </>
);
