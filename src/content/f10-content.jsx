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
      F10 applies F2&rsquo;s foundational insight &mdash; awareness teaches
      awareness &mdash; at generational scale. When adults develop their
      awareness capacities (F8) and inhabit environments that support
      authentic configuration (F9), the next generation grows in a different
      world. Not a perfect world. A world where the three awareness capacities
      have conditions to develop, where regulation is learned through being
      regulated with, and where the compass has room to move.
    </p>
    <p style={prose}>
      The mechanism is embodiment, not intention. The child&rsquo;s nervous
      system continuously reads the adult&rsquo;s nervous system and
      calibrates accordingly. A parent with offline SEA cannot provide
      conditions for a child&rsquo;s SEA development regardless of intention,
      love, or effort.
    </p>
    <p style={standaloneLine}>
      What the adult embodies, the child absorbs. What the adult has repaired,
      the child does not need to.
    </p>
    <p style={prose}>
      This is not blame. The parent did not choose their configuration. They
      are transmitting what they have, which is what their parents
      transmitted. Understanding the mechanism identifies where change is
      possible.
    </p>
    <p style={standaloneLine}>
      Love does not override what the nervous system embodies.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>Five Transmission Pathways</h4>
    <p style={prose}>
      Transmission operates through five simultaneous pathways that reinforce
      each other. When one is interrupted, others can still maintain
      transmission &mdash; which is why single interventions (a parenting
      course, a therapy session, a good intention) often fail.
    </p>

    <div style={{ overflowX: "auto", margin: "16px 0" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeader}>Pathway</th>
            <th style={tableHeader}>What Transmits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Implicit Learning</td>
            <td style={tableCell}>
              The child observes and absorbs the adult&rsquo;s emotional
              patterns before language &mdash; what emotions are expressed,
              which are suppressed, how distress is handled
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Co-Regulation Modelling
            </td>
            <td style={tableCell}>
              The adult&rsquo;s nervous system functions as the child&rsquo;s
              external regulator and template. What the adult can hold, the
              child learns is holdable
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Environmental Design
            </td>
            <td style={tableCell}>
              The adult creates the physical and emotional environment
              determining what adaptations become necessary
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Epigenetic Modification
            </td>
            <td style={tableCell}>
              Stress exposure modifies gene expression affecting
              offspring&rsquo;s stress response &mdash; reversible through
              experience
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Narrative Inheritance
            </td>
            <td style={tableCell}>
              Family stories, silences, and meaning-making frameworks shape
              how children understand themselves
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style={prose}>
      All five transmit the complete F1&ndash;F7 system content: compass
      calibration, awareness configuration, false coherence patterns, rules,
      worth hierarchies, bias architecture, escalation patterns.
    </p>
    <p style={standaloneLine}>
      The family is a complete nervous system. It transmits a complete
      regulatory system.
    </p>

    <h4 style={subheading}>What Is Not Processed Gets Passed On</h4>
    <p style={prose}>
      Unprocessed experience becomes the environment the next generation
      develops within. Unprocessed grief &rarr; emotional climate of
      suppression. Unprocessed rage &rarr; volatility or rigid control.
      Unprocessed shame &rarr; performance and conditional belonging. The
      child inherits not the event but the regulatory consequence &mdash;
      the configuration the adult built to survive.
    </p>
    <p style={prose}>
      Processing changes what transmits. Research on earned security (Main
      &amp; Hesse) demonstrates: when adults process their attachment history
      &mdash; make coherent sense of what happened &mdash; children show more
      secure attachment regardless of history content. The shift is from
      content to coherence: not &ldquo;what happened to you&rdquo; but
      &ldquo;have you made sense of what happened?&rdquo;
    </p>
    <p style={prose}>
      Intellectual understanding without nervous system processing does not
      interrupt transmission. The parent&rsquo;s conscious intention operates
      in the cognitive system. The child&rsquo;s calibration reads the
      emotional-somatic system. These are different systems with different
      timelines (F12).
    </p>

    <h4 style={subheading}>The Mechanism of Generational Change</h4>
    <p style={prose}>
      Adult develops awareness capacities (F8) &rarr; configuration changes
      &rarr; child develops in different emotional environment &rarr;
      child&rsquo;s capacities have conditions to develop &rarr; child
      transmits differently to the next generation. One generation of repair
      does not produce perfection but produces a shift in baseline.
      Generational change is compound interest &mdash; small, sustained
      shifts accumulating across time.
    </p>
    <p style={standaloneLine}>
      You do not have to heal everything. You have to heal enough that the
      next generation starts from a different place.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>Enough, Not Perfect</h4>
    <p style={prose}>
      The most important word in F10 is &ldquo;enough.&rdquo; Not perfect
      awareness, complete repair, or ideal childhood. Enough loosening of
      false coherence that the child absorbs different possibilities. Enough
      SEA that the child sees self-awareness modelled. Enough return that
      the child learns the compass comes back.
    </p>
    <p style={prose}>
      The demand for perfection recreates the regulation thread. If the
      parent believes they must be completely healed before providing good
      conditions, they have replaced one false coherence with another. The
      performance demands of F5 now operate in the domain of healing itself.
    </p>

    <div style={{ overflowX: "auto", margin: "16px 0" }}>
      <table style={tableStyle}>
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
              Returning from Protection &mdash; child sees the return
            </td>
          </tr>
          <tr>
            <td style={tableCell}>Never experiencing false coherence</td>
            <td style={tableCell}>
              Recognising it &mdash; &ldquo;I&rsquo;m doing the thing
              again&rdquo;
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
              Repairing after mistakes &mdash; child learns repair is
              possible
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style={standaloneLine}>
      The child does not need a perfect parent. The child needs a parent
      whose compass moves &mdash; and who comes back.
    </p>

    <h4 style={subheading}>Understanding Without Excusing</h4>
    <p style={prose}>
      F10 holds both truths simultaneously. &ldquo;I understand why you
      became who you became &mdash; I can see the system that shaped you,
      what you never had conditions to develop, that you transmitted what you
      had.&rdquo; And: &ldquo;I see what it cost me &mdash; the capacities
      that did not develop, the false coherence, the regulation I never
      learned.&rdquo;
    </p>
    <p style={standaloneLine}>
      Both are true. Neither erases the other.
    </p>
    <p style={prose}>
      Understanding does not minimise impact. Accountability does not require
      demonisation. Family relationships, like all relationships, require
      consent. F10 does not assume that understanding the mechanism means
      maintaining contact &mdash; the goal is clear-eyed assessment and
      genuine choice, neither guilt-driven contact nor reflexive cutoff.
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
              Bowlby; Main &amp; Hesse; Lyons-Ruth
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Intergenerational Trauma
            </td>
            <td style={tableCell}>
              Unprocessed trauma shapes next generation&rsquo;s emotional
              environment
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
            <td style={tableCell}>White &amp; Epston; McAdams</td>
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
      <strong style={{ color: TEXT.primary }}>
        TEG-Blue&rsquo;s contribution:
      </strong>{" "}
      The five-pathway model showing all pathways transmitting the same
      underlying content (the complete F1&ndash;F7 regulatory system). The
      central mechanism of coherence over content &mdash; not &ldquo;what
      happened to you&rdquo; but &ldquo;have you made sense of it?&rdquo;
      The compound effect model showing generational change as accumulated
      shifts rather than single breakthroughs. The &ldquo;enough, not
      perfect&rdquo; principle. The building blocks are established; the
      integration is the hypothesis, open to testing.
    </p>
  </>
);
