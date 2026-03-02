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
      F1&ndash;F10 trace a complete system: how emotion organises, how
      awareness develops, how cognition substitutes, how patterns scale, and
      how repair becomes possible. F11 maps what happens when repair work
      loosens false coherence and the nervous system&rsquo;s actual state
      becomes visible.
    </p>
    <p style={standaloneLine}>
      Paradox is what truth looks like when you can finally see the whole
      picture.
    </p>
    <p style={prose}>
      Paradoxical behaviour appears irrational only when assessed against a
      single value. When multiple needs are recognised as simultaneously
      valid &mdash; connection, protection, authenticity, belonging,
      coherence &mdash; behaviour becomes{" "}
      <strong style={emphasis}>multi-rational</strong>: serving multiple
      masters at once. It looks contradictory from outside but is perfectly
      logical from inside.
    </p>
    <p style={standaloneLine}>
      Not &ldquo;Why are you inconsistent?&rdquo; but &ldquo;What competing
      needs is this behaviour trying to serve?&rdquo;
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>Every Framework Generates Paradox</h4>
    <p style={prose}>
      Each mechanism in F1&ndash;F10 creates characteristic contradictions.
      F1: intending one thing while feeling another. F2: reading everyone
      perfectly while having no idea what you feel. F3: knowing and
      not-knowing simultaneously. F4: following rules that harm, defending
      rules that hurt the defender. F5: pursuing status that contradicts
      professed values. F8: getting worse before getting better. F9:
      succeeding by standards that cost everything. F10: repeating what was
      vowed never to repeat.
    </p>
    <p style={prose}>
      When a person can locate their contradiction on this map, it stops
      being a personal failing and becomes an identifiable pattern with a
      known mechanism. The shame reduces. The curiosity increases. And the
      intervention point becomes visible.
    </p>

    <h4 style={subheading}>The Paradox Cascade</h4>
    <p style={prose}>
      Paradox does not remain visible. False coherence hides it through six
      levels: (1) initial contradiction emerges from competing needs; (2)
      false coherence constructs an explanation that hides it; (3) the
      adaptive identity absorbs the explanation &mdash; becomes &ldquo;who I
      am&rdquo;; (4) rules and worth systems reinforce it; (5) generational
      transmission passes it forward; (6) the contradiction becomes invisible
      &mdash; experienced as normal.
    </p>
    <p style={prose}>
      Single-level interventions fail because a contradiction that has
      cascaded through all six levels cannot be addressed at one level.
      Cognitive insight at level 2 does not reach the identity level at
      level 3. Individual therapy at levels 1&ndash;3 does not address the
      social reinforcement at level 4.
    </p>

    <h4 style={subheading}>Paradox and Compass Position</h4>
    <p style={prose}>
      How a person relates to their own contradictions reveals compass
      position. In Connection: both truths coexist &mdash; &ldquo;I love them
      AND what they did hurt me.&rdquo; In Protection: paradox feels
      threatening, binary thinking reduces load. In Control: false coherence
      constructs a smooth narrative eliminating one side. In Domination: one
      truth is imposed, the other erased.
    </p>
    <p style={standaloneLine}>
      The smooth story should worry you more than the messy one. The messy
      one may be someone learning to hold complexity. The smooth one may be
      false coherence performing integration.
    </p>

    <h4 style={subheading}>Holding Capacity</h4>
    <p style={prose}>
      The goal is not resolving paradox &mdash; many are structurally
      unresolvable. The goal is developing capacity to hold paradox without
      collapse. Five components: both/and thinking (requires SEA online),
      somatic tolerance (requires ER developed), temporal flexibility
      (requires RE accurate), part recognition (capacity to see different
      needs generating different pulls), and grief capacity (mourning what
      cannot be reconciled).
    </p>
    <p style={prose}>
      Holding capacity is what the three awareness capacities produce when
      online. F8 repair builds the infrastructure. F11 describes what that
      infrastructure enables.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>The Paradoxes of Repair</h4>
    <p style={prose}>
      Healing surfaces characteristic paradoxes that are not signs of failure
      but of depth. Getting worse before getting better &mdash; previously
      unfelt pain becomes felt. Knowing and not yet being &mdash; clear sight
      of patterns but the nervous system has not updated. Grieving what you
      never had &mdash; mourning an absence. Healing changing relationships
      &mdash; some deepen, some break.
    </p>
    <p style={standaloneLine}>
      I am in more pain AND I am more alive.
    </p>
    <p style={prose}>
      Understanding your parents and grieving what they could not give.
      Simultaneously seeing the system that shaped them and the cost it
      produced. Becoming more yourself while some people cannot be with who
      you actually are.
    </p>

    <h4 style={subheading}>The Relational Paradoxes</h4>
    <p style={prose}>
      At relational scale, both people&rsquo;s competing needs interact.
      Connection-protection oscillation: one moves toward connection, the
      other&rsquo;s system activates protection &mdash; both want connection,
      both are protecting. Authenticity demand, honesty punishment:
      &ldquo;I want you to be honest&rdquo; followed by punishment when
      honesty arrives. Love as control: genuine care expressed through a mode
      that the recipient experiences as management.
    </p>

    <h4 style={subheading}>The Systemic Paradoxes</h4>
    <p style={prose}>
      The same mechanism at institutional scale: freedom-seeking populations
      supporting authoritarian leaders (nervous system equates structure with
      safety). Revolution recreating hierarchy (old patterns are the only
      available templates). Institutions perpetuating what they were designed
      to solve &mdash; healthcare maintaining illness, justice systems
      producing injustice (regulatory functions override stated purpose).
      Diversity initiatives enforcing conformity &mdash; demanding everyone
      value difference in the same way.
    </p>
    <p style={standaloneLine}>
      True coherence is not the absence of contradiction &mdash; it is the
      capacity to hold contradiction without collapsing.
    </p>
    <p style={prose}>
      Integration means developing enough holding capacity that both truths
      remain present. Neither is eliminated for comfort. The compass being
      flexible enough to move between the needs without getting stuck in
      one. Grief capacity sufficient to mourn what cannot be reconciled.
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
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Dialectical Theory
            </td>
            <td style={tableCell}>
              Both/and thinking as developmental achievement
            </td>
            <td style={tableCell}>Basseches; Linehan</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Paradoxical Interventions
            </td>
            <td style={tableCell}>
              Therapeutic use of contradiction
            </td>
            <td style={tableCell}>Watzlawick; Bateson</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Internal Family Systems
            </td>
            <td style={tableCell}>
              Multiple parts holding competing needs simultaneously
            </td>
            <td style={tableCell}>Schwartz</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Post-Formal Reasoning
            </td>
            <td style={tableCell}>
              Cognitive development beyond binary logic
            </td>
            <td style={tableCell}>Kegan; Commons &amp; Richards</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Analytical Psychology
            </td>
            <td style={tableCell}>
              Holding the tension of opposites as individuation
            </td>
            <td style={tableCell}>Jung</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Systemic Therapy
            </td>
            <td style={tableCell}>
              Paradoxical communication and double binds in systems
            </td>
            <td style={tableCell}>Palazzoli; Haley</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={prose}>
      <strong style={{ color: TEXT.primary }}>
        TEG-Blue&rsquo;s contribution:
      </strong>{" "}
      Multi-rationality as the source of paradox &mdash; competing needs
      generating behaviour that serves multiple masters. The paradox cascade
      showing how contradiction becomes invisible through six levels. Compass
      position as predictor of paradox tolerance. Holding capacity as the
      product of the three awareness capacities. True coherence redefined as
      capacity to hold contradiction, not eliminate it. The building blocks
      are established; the integration is the hypothesis, open to testing.
    </p>
  </>
);
