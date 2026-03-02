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
      The nervous system's continuous orientation between safety and threat can
      be understood through the metaphor of a compass. Like a healthy working
      compass, the needle is constantly moving. It does not have a "correct"
      position — it points in a direction. The goal is not to arrive at one
      position and stay there. The goal is to point accurately and to move
      freely.
    </p>
    <p style={prose}>
      A healthy compass moves fluidly as conditions change. When the evaluation
      (Concept 2) says <em>safe enough</em>, the needle orients toward{" "}
      <strong style={emphasis}>Connection</strong> — the mode designed for
      sustained living. Perception broadens. Empathy comes online. Cognition
      flexes. Repair becomes possible. When the evaluation says{" "}
      <em>protection needed</em>, the needle moves toward{" "}
      <strong style={emphasis}>Protection</strong> — the body's emergency
      system. Fight/flight first, freeze/fawn when energy depletes. This is
      expensive by design — meant to last from minutes to hours, not a lifetime.
    </p>
    <p style={prose}>
      But the compass has more range than two modes. When cognition evolved, the
      instrument gained two additional modes.{" "}
      <strong style={emphasis}>Control</strong> — anticipating, managing,
      overriding — and <strong style={emphasis}>Domination</strong> — overriding
      completely, eliminating the threat. These are cognition-first modes: they
      require cognition to exist and are entered through cognitive decision. In a
      healthy compass, they are extraordinary survival tools — deliberate,
      time-limited, and returnable.
    </p>

    {/* Four-mode table */}
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
          minWidth: 500,
        }}
      >
        <thead>
          <tr>
            <th style={tableHeader}>Mode</th>
            <th style={tableHeader}>Type</th>
            <th style={tableHeader}>Design</th>
            <th style={tableHeader}>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Connection
            </td>
            <td style={tableCell}>Body-first</td>
            <td style={tableCell}>The home base — safety perceived</td>
            <td style={tableCell}>Indefinite</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Protection
            </td>
            <td style={tableCell}>Body-first</td>
            <td style={tableCell}>Emergency system — threat perceived</td>
            <td style={tableCell}>Minutes to hours</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Control
            </td>
            <td style={tableCell}>Cognition-first</td>
            <td style={tableCell}>
              Strategic intervention — cognition recruited
            </td>
            <td style={tableCell}>Time-limited tool</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600, color: TEXT.primary }}>
              Domination
            </td>
            <td style={tableCell}>Cognition-first</td>
            <td style={tableCell}>
              Maximum override — cognition at full power
            </td>
            <td style={tableCell}>Rare, last resort</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style={prose}>
      The four modes sit on a continuous gradient, not in four boxes. The compass
      needle moves along this gradient, and any position — from full Connection
      to maximum Domination — has a specific, predictable effect on what the
      person can perceive, think, feel, and do.
    </p>
    <p style={standaloneLine}>
      Health is not staying in Connection permanently. Health is the needle's
      capacity to move — to shift toward Protection when threat appears and
      return toward Connection when the threat resolves.
    </p>
    <p style={prose}>
      Nobody stays in Connection permanently. Nobody should. Connection is not
      "calm" — it can hold distress, grief, challenge, even anger. The question
      is not where the needle is. The question is whether it can move.
    </p>
  </>
);

// ─── WHERE IT COMES FROM ────────────────────────────────────

export const whereItComesFrom = (
  <>
    <p style={prose}>
      Polyvagal Theory (Porges, 2011) — autonomic states as continuous
      orientation. Attachment Theory (Bowlby, 1969) — secure base vs. threat
      activation. Positive Psychology (Fredrickson, 2001) — broaden-and-build as
      directional state. Trauma Theory (Siegel, 2012; Ogden, 2006) — window of
      tolerance as range of healthy movement. Evolutionary psychology — cognition
      evolved to solve survival problems that body-level responses alone could
      not. Sapolsky (2004) — stress response and strategic planning under
      threat.
    </p>
  </>
);

// ─── WHAT TEG-BLUE ADDS ────────────────────────────────────

export const whatTegBlueAdds = (
  <>
    <p style={prose}>
      The compass as a visual-conceptual architecture that makes the continuous
      orientation tangible and usable. Most models describe states. The compass
      describes <em>movement between states</em> — and makes "stuck versus
      fluid" the primary question rather than "which state is the person in."
      The compass reframes health from a state to a capacity: not where the
      needle is, but whether it can move.
    </p>
    <p style={prose}>
      The explicit naming of Control and Domination as <em>cognitive</em>{" "}
      modes — distinct from Connection and Protection not just in intensity but
      in kind. Body-first versus cognition-first is a qualitative distinction.
      The first two modes are biological responses that happen <em>to</em> you.
      The second two are what cognition <em>does</em> when recruited into the
      threat response. This is an evolutionary upgrade, not a deviation. The
      compass gained range because the species gained cognition.
    </p>
    <p style={prose}>
      The presentation of healthy Control and Domination{" "}
      <em>before</em> their chronic versions. Most clinical and popular
      frameworks encounter these modes only as problems — controlling behaviour,
      dominating behaviour. TEG-Blue introduces them as adaptive, time-limited,
      and extraordinary survival tools. The goal is not to eliminate Control or
      Domination. The goal is to restore the return — so the person can use
      these modes when needed and come back when done.
    </p>
  </>
);
