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
      F10 applies F2's foundational insight — awareness teaches awareness — at
      generational scale. When adults develop their awareness capacities (F8)
      and inhabit environments that support authentic configuration (F9), the
      next generation grows in a different world.
    </p>
    <p style={prose}>
      The mechanism is embodiment, not intention. The child's nervous system
      continuously reads the adult's nervous system and calibrates
      accordingly. A parent with offline SEA cannot provide conditions for a
      child's SEA development regardless of intention, love, or effort. A
      parent with a moving compass provides a child whose nervous system
      learns: the full gradient is available, the return is possible.{" "}
      <strong style={emphasis}>
        What the adult embodies, the child absorbs. What the adult has
        repaired, the child does not need to.
      </strong>
    </p>
    <p style={prose}>
      This is not blame. The parent did not choose their configuration. They
      are transmitting what they have, which is what their parents
      transmitted. Understanding the mechanism identifies where change is
      possible.{" "}
      <strong style={emphasis}>
        Love does not override what the nervous system embodies.
      </strong>
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>Five Transmission Pathways</h4>
    <p style={prose}>
      Transmission operates through five simultaneous pathways that reinforce
      each other: (1) <strong style={emphasis}>Implicit learning</strong> —
      the child observes and absorbs the adult's emotional patterns before
      language; (2) <strong style={emphasis}>Co-regulation modelling</strong> —
      the adult's nervous system functions as the child's external regulator
      and template; (3){" "}
      <strong style={emphasis}>Environmental design</strong> — the adult
      creates the physical and emotional environment determining what
      adaptations become necessary; (4){" "}
      <strong style={emphasis}>Epigenetic modification</strong> — stress
      exposure modifies gene expression affecting offspring's stress response,
      reversible through experience; (5){" "}
      <strong style={emphasis}>Narrative inheritance</strong> — family
      stories, silences, and meaning-making frameworks shape how children
      understand themselves.
    </p>
    <p style={prose}>
      All five transmit the complete F1–F7 system content: compass
      calibration, awareness configuration, false coherence patterns, rules,
      worth hierarchies, bias architecture, escalation patterns.{" "}
      <strong style={emphasis}>
        The family is a complete nervous system. It transmits a complete
        regulatory system.
      </strong>
    </p>

    <h4 style={subheading}>What Is Not Processed Gets Passed On</h4>
    <p style={prose}>
      Unprocessed experience becomes the environment the next generation
      develops within. Unprocessed grief → emotional climate of suppression.
      Unprocessed rage → volatility or rigid control. Unprocessed shame →
      performance and conditional belonging. The child inherits not the event
      but the regulatory consequence — the configuration the adult built to
      survive.
    </p>
    <p style={prose}>
      Processing changes what transmits. Research on earned security (Main &
      Hesse) demonstrates: when adults process their attachment history —
      make coherent sense of what happened — children show more secure
      attachment regardless of history content. The shift is from content to
      coherence: not "what happened to you" but "have you made sense of what
      happened?" Not "was your childhood good?" but "can you narrate your
      experience with emotional truth intact?"
    </p>

    <h4 style={subheading}>The Mechanism of Generational Change</h4>
    <p style={prose}>
      Adult develops awareness capacities (F8) → configuration changes →
      child develops in different emotional environment → child's capacities
      have conditions to develop → child transmits differently to the next
      generation. The compound effect: one generation of repair does not
      produce perfection but produces a shift in baseline. Generational
      change is compound interest — small, sustained shifts accumulating
      across time.{" "}
      <strong style={emphasis}>
        You do not have to heal everything. You have to heal enough that the
        next generation starts from a different place.
      </strong>
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>Enough, Not Perfect</h4>
    <p style={prose}>
      The most important word in F10 is "enough." Not perfect awareness,
      complete repair, or ideal childhood. Enough loosening of false coherence
      that the child absorbs different possibilities. Enough SEA that the
      child sees self-awareness modelled. Enough return that the child learns
      the compass comes back.
    </p>

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
            <th style={tableHeader}>Not Required</th>
            <th style={tableHeader}>What Is Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableCell}>Never entering Protection</td>
            <td style={tableCell}>
              Returning from Protection — child sees the return
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Never experiencing false coherence</td>
            <td style={tableCell}>
              Recognising it — "I'm doing the thing again"
            </td>
          </tr>
          <tr>
            <td style={tableCell}>All capacities perfectly online</td>
            <td style={tableCell}>
              Enough development that the child reads a different signal
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Never making mistakes</td>
            <td style={tableCell}>
              Repairing after mistakes — child learns repair is possible
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style={prose}>
      <strong style={emphasis}>
        The child does not need a perfect parent. The child needs a parent
        whose compass moves — and who comes back.
      </strong>
    </p>

    <h4 style={subheading}>Understanding Without Excusing</h4>
    <p style={prose}>
      F10 holds both truths simultaneously: "I understand why you became who
      you became — I can see the system that shaped you, what you never had
      conditions to develop, that you transmitted what you had." And: "I see
      what it cost me — the capacities that did not develop, the false
      coherence, the regulation I never learned." Neither truth cancels the
      other. Understanding does not minimise impact. Accountability does not
      require demonisation.
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
            <td style={{ ...tableCell, fontWeight: 600 }}>Family Systems</td>
            <td style={tableCell}>
              Multigenerational transmission of relational patterns
            </td>
            <td style={tableCell}>Bowen; Satir; Minuchin</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Attachment Theory
            </td>
            <td style={tableCell}>
              Attachment patterns transmit; earned security interrupts
              transmission
            </td>
            <td style={tableCell}>
              Bowlby; Main & Hesse; Lyons-Ruth
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Intergenerational Trauma
            </td>
            <td style={tableCell}>
              Unprocessed trauma shapes next generation's emotional environment
            </td>
            <td style={tableCell}>van der Kolk; Herman; Danieli</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Epigenetics</td>
            <td style={tableCell}>
              Stress modifies gene expression across generations; reversible
              through experience
            </td>
            <td style={tableCell}>Yehuda; Meaney; Champagne</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Narrative Therapy
            </td>
            <td style={tableCell}>
              Family stories shape identity and meaning-making
            </td>
            <td style={tableCell}>White & Epston; McAdams</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Interpersonal Neurobiology
            </td>
            <td style={tableCell}>
              Co-regulation patterns transmit through nervous system
              synchronisation
            </td>
            <td style={tableCell}>Porges; Siegel; Schore</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={prose}>
      <strong style={{ color: TEXT.primary }}>TEG-Blue's contribution:</strong>{" "}
      The five-pathway model showing all pathways transmitting the same
      underlying content (the complete F1–F7 regulatory system). The central
      mechanism of coherence over content — not "what happened to you" but
      "have you made sense of it?" The compound effect model showing
      generational change as accumulated shifts rather than single
      breakthroughs. The "enough, not perfect" principle. The building blocks
      are established; the integration is the hypothesis, open to testing.
    </p>
  </>
);
