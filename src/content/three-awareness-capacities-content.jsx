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

// ─── OVERVIEW ────────────────────────────────────────────────

export const overview = (
  <>
    <p style={prose}>
      The compass moves based on the signals it receives. But which signals get
      through, how they are interpreted, and whether the person has access to
      their own internal state &mdash; all of this depends on the three awareness
      capacities.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Reading Emotions (RE)</strong> &mdash; the capacity to
      read emotional signals in others. What is happening in this person? What are
      they feeling? What do their signals mean?
    </p>
    <p style={prose}>
      <strong style={emphasis}>Emotional Resonance (ER)</strong> &mdash; the capacity to
      feel with others. Not just reading the signal, but feeling the signal in
      one&rsquo;s own body. The felt dimension of connection.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Self-Emotional Awareness (SEA)</strong> &mdash; the
      capacity to access, name, and trust one&rsquo;s own emotional states. The
      keystone. Without SEA, RE and ER have no anchor &mdash; a person can read emotions
      everywhere but not know what they themselves feel; can resonate with others
      but not distinguish their own states from others&rsquo;.
    </p>
    <p style={prose}>
      These three capacities are present at birth in proto-form. They develop
      through relational conditions &mdash; through what the adults&rsquo; nervous systems
      embody. When conditions are met, the compass reads accurately and the return
      is learned. When conditions are not met, the compass gets calibrated to the
      adults&rsquo; limitations.
    </p>
  </>
);

// ─── KEY CHARACTERISTICS ─────────────────────────────────────

export const characteristics = [
  // ── 1. The Three Capacities — Connected at Birth ──────────
  {
    title: "The Three Capacities \u2014 Connected at Birth",
    body: (
      <>
        <p style={prose}>
          At birth, the emotional-somatic system is the only information system
          online. The infant already has the biological precursors of all three
          capacities, operating as a single integrated system. The baby reads
          before it knows it is reading. It feels with others before knowing why.
          Its body registers states as raw sensation.
        </p>
        <p style={prose}>
          This connected state &mdash; all three proto-capacities online and integrated
          &mdash; is what people remember when they say &ldquo;when I was a kid, I was
          just <em>me</em>.&rdquo; Not a memory of a different person hidden
          underneath. A memory of a capacity state &mdash; the three awarenesses
          connected before anything redirected them.
        </p>
        <p style={standaloneLine}>
          &ldquo;Being yourself is not a personality. It is what happens when the
          three capacities are connected.&rdquo;
        </p>
        <p style={prose}>
          SEA is the keystone. Without it, RE becomes unanchored &mdash; the person can
          read others with extreme accuracy but has no internal reference point.
          Without SEA, ER becomes unfiltered &mdash; the person resonates with
          everything but cannot distinguish own states from others&rsquo;. Without SEA,
          the return mechanism has no endpoint &mdash; regulation means coming back, but
          back to what?
        </p>
        <p style={prose}>
          Each capacity can develop as designed, be heightened in service of
          survival rather than understanding, be suppressed because the environment
          punished it, or never come online at all. What it becomes depends on the
          conditions it develops in.
        </p>
      </>
    ),
  },

  // ── 2. Awareness Teaches Awareness ────────────────────────
  {
    title: "Awareness Teaches Awareness",
    body: (
      <>
        <p style={prose}>
          How do the three capacities develop? Not through instruction. Not
          through intention. Not through love. Through embodiment.
        </p>
        <p style={standaloneLine}>
          The adults&rsquo; awareness capacities create the child&rsquo;s developmental
          environment. The environment shapes the child&rsquo;s awareness capacities.
        </p>
        <p style={prose}>
          A caregiver with online SEA &mdash; who can access, name, and trust their own
          emotional states &mdash; creates an environment where the child&rsquo;s emotional
          states are received, reflected accurately, and validated. The child&rsquo;s
          proto-SEA has conditions to develop.
        </p>
        <p style={prose}>
          A caregiver with absent SEA creates an environment where the child&rsquo;s
          emotional states are unrecognised, misread, or overridden. SEA does not
          develop &mdash; not because the child is incapable, but because the conditions
          were absent.
        </p>

        <div style={{ overflowX: "auto", margin: "16px 0" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableHeader}>If the adult has...</th>
                <th style={tableHeader}>The child absorbs...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableCell}>Accurate RE</td>
                <td style={tableCell}>Emotional reading in service of understanding</td>
              </tr>
              <tr>
                <td style={tableCell}>Hypervigilant RE</td>
                <td style={tableCell}>Emotional reading in service of survival</td>
              </tr>
              <tr>
                <td style={tableCell}>Sustainable ER</td>
                <td style={tableCell}>Emotional resonance that includes self-care</td>
              </tr>
              <tr>
                <td style={tableCell}>Flooded ER</td>
                <td style={tableCell}>Others&rsquo; emotions swamp one&rsquo;s own</td>
              </tr>
              <tr>
                <td style={tableCell}>Online SEA</td>
                <td style={tableCell}>The ability to name and trust one&rsquo;s own feelings</td>
              </tr>
              <tr>
                <td style={tableCell}>Absent SEA</td>
                <td style={tableCell}>No model of internal emotional access</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={standaloneLine}>
          &ldquo;Love does not override what the nervous system embodies.&rdquo;
        </p>
        <p style={prose}>
          A caregiver can love a child deeply and still transmit an incomplete
          awareness configuration &mdash; because what transmits is what the nervous
          system carries, not what the heart intends.
        </p>
      </>
    ),
  },

  // ── 3. True Coherence and False Coherence ──────────────────
  {
    title: "True Coherence and False Coherence",
    body: (
      <>
        <p style={prose}>
          When all three capacities are online and the return is learned, the
          person has access to the full information set. What cognition builds with
          this complete data is{" "}
          <strong style={emphasis}>true coherence</strong> &mdash; a narrative that
          aligns with felt experience. The story matches what the body knows.
        </p>
        <p style={prose}>
          When the capacities are incomplete, cognition builds with whatever is
          available. It generates a stable narrative from incomplete data. That
          narrative feels true. But it replaces the emotional signals it cannot
          process. This is <strong style={emphasis}>false coherence</strong> &mdash; a
          stable-but-untrue narrative that serves regulation at the cost of truth.
        </p>
        <p style={standaloneLine}>
          &ldquo;False coherence is not deception. It is regulation.&rdquo;
        </p>

        <div style={{ overflowX: "auto", margin: "16px 0" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableHeader}></th>
                <th style={tableHeader}>True Coherence</th>
                <th style={tableHeader}>False Coherence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Data source</td>
                <td style={tableCell}>All three capacities + regulation</td>
                <td style={tableCell}>Incomplete capacity set + cognitive replacement</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Narrative</td>
                <td style={tableCell}>Aligned with felt experience</td>
                <td style={tableCell}>Replaces felt experience</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Function</td>
                <td style={tableCell}>Understanding</td>
                <td style={tableCell}>Regulation</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Cost</td>
                <td style={tableCell}>Complexity (must hold more)</td>
                <td style={tableCell}>Truth (must suppress more)</td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Flexibility</td>
                <td style={tableCell}>Can update when new information arrives</td>
                <td style={tableCell}>Resists update &mdash; updating threatens regulation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={prose}>
          False coherence often looks more put-together than true coherence. The
          person running false coherence has a clear narrative, a consistent
          identity. The person developing true coherence is messy, contradictory,
          uncertain, and struggling to hold complexity.
        </p>
        <p style={standaloneLine}>
          &ldquo;The smooth story should worry you more than the messy one.&rdquo;
        </p>
      </>
    ),
  },

  // ── 4. Repair Is Development, Not Recovery ─────────────────
  {
    title: "Repair Is Development, Not Recovery",
    body: (
      <>
        <p style={prose}>
          The three awareness capacities were not damaged. They were not developed.
          This distinction changes everything about repair.
        </p>
        <p style={standaloneLine}>
          &ldquo;Building what was never built, not retrieving what was
          lost.&rdquo;
        </p>
        <p style={prose}>
          The adult who never had conditions for SEA to develop can develop it now.
          The adult whose ER was shut down can reconnect it. The adult whose RE was
          redirected for survival can redirect it for understanding. Repair does
          not require going back. It requires going forward &mdash; with new relational
          experiences that provide the conditions the original environment did not.
        </p>

        <div style={{ overflowX: "auto", margin: "16px 0" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableHeader}>Condition</th>
                <th style={tableHeader}>What It Means</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Safety</td>
                <td style={tableCell}>
                  The nervous system must evaluate &ldquo;safe enough to risk
                  change.&rdquo;
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Relational support</td>
                <td style={tableCell}>
                  New co-regulatory experiences &mdash; the nervous system needs to learn
                  the return path through being regulated with.
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Identity flexibility</td>
                <td style={tableCell}>
                  False coherence must loosen enough for new data to enter.
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Time</td>
                <td style={tableCell}>
                  Capacities develop through repeated experience, not single insight.
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCell, fontWeight: 600 }}>Structural conditions</td>
                <td style={tableCell}>
                  The environment must not re-wound.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={standaloneLine}>
          &ldquo;You cannot think your way into felt safety. You can only
          experience your way there.&rdquo;
        </p>
      </>
    ),
  },
];

// ─── WHAT THE MODEL CHANGES ─────────────────────────────────

export const reframes = (
  <ul style={{ paddingLeft: 20, margin: 0 }}>
    {[
      "Being yourself is not a personality. It is what happens when the three capacities are connected.",
      "Awareness teaches awareness \u2014 the adults\u2019 awareness configuration is the child\u2019s developmental environment",
      "Personality is not a type \u2014 it is a record of which capacities had conditions to develop and which didn\u2019t",
      "Love does not override what the nervous system embodies",
      "Familiar can feel \u2018normal\u2019 even when it is costly",
      "False coherence is not deception \u2014 it is regulatory success at the cost of emotional truth",
      "Not undoing the past \u2014 developing what the past didn\u2019t provide conditions for",
    ].map((line, i) => (
      <li
        key={i}
        style={{
          fontSize: 14,
          color: TEXT.secondary,
          lineHeight: 1.7,
          marginBottom: 8,
          fontStyle: "italic",
        }}
      >
        {line}
      </li>
    ))}
  </ul>
);

// ─── RESEARCH FOUNDATIONS ────────────────────────────────────

export const foundations = (
  <div style={{ overflowX: "auto" }}>
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
          <td style={{ ...tableCell, fontWeight: 600 }}>Attachment Theory</td>
          <td style={tableCell}>Early relationships shape regulatory defaults and conditions for awareness development</td>
          <td style={tableCell}>Bowlby, 1969; Ainsworth, 1978; Main &amp; Hesse, 1990</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Object Relations</td>
          <td style={tableCell}>Authentic experience vs. compliant adaptation; true self vs. false self</td>
          <td style={tableCell}>Winnicott, 1960</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Developmental Neuroscience</td>
          <td style={tableCell}>Right-brain development shapes self and regulatory capacity through early relational experience</td>
          <td style={tableCell}>Schore, 2003</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Interpersonal Neurobiology</td>
          <td style={tableCell}>Mind develops through relationships; integration is health; co-regulation as developmental pathway</td>
          <td style={tableCell}>Siegel, 2012</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Narrative Psychology</td>
          <td style={tableCell}>Coherent narrative as marker of earned security; requires SEA</td>
          <td style={tableCell}>Main &amp; Goldwyn, 1998</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Polyvagal Theory</td>
          <td style={tableCell}>Neuroception shapes what is safe enough for authentic engagement; co-regulation as foundation for self-regulation</td>
          <td style={tableCell}>Porges, 2011</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Somatic Experiencing</td>
          <td style={tableCell}>Regulation as completion of activation cycle; the body must learn the return</td>
          <td style={tableCell}>Levine, 1997</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Empathy Research</td>
          <td style={tableCell}>Multi-component empathy (cognitive, affective, self-referential)</td>
          <td style={tableCell}>Decety &amp; Jackson, 2004</td>
        </tr>
        <tr>
          <td style={{ ...tableCell, fontWeight: 600 }}>Intergenerational Transmission</td>
          <td style={tableCell}>Attachment patterns transmit; earned security interrupts transmission; epigenetic effects</td>
          <td style={tableCell}>Main &amp; Hesse; Yehuda; Meaney</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// ─── CONNECTION TO PAIRED MODEL ──────────────────────────────

export const connection = (
  <>
    <p style={prose}>
      The Three Awareness Capacities describes <em>what determines</em> how well
      the compass works &mdash; which signals get through, how they are processed, and
      whether the person has access to their own internal state.
    </p>
    <p style={prose}>
      But what the compass <em>does</em> with that data &mdash; how it orients, what the
      modes are, how it moves, what capacity is available from each position &mdash; is
      described by the Inner Compass &amp; Four-Mode Gradient model.
    </p>
    <p style={prose}>
      The two models are inseparable in practice. A person&rsquo;s compass position
      and their capacity configuration are two dimensions of the same reality. The
      configuration explains <em>why</em> the compass is where it is. The compass
      explains <em>what</em> the configuration produces.
    </p>
    <p style={standaloneLine}>
      The instrument and the calibration. One architecture. Two models. Because
      they answer different questions &mdash; and both questions must be asked.
    </p>
  </>
);
