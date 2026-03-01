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
      F1–F10 trace a complete system: how emotion organises, how awareness
      develops, how cognition substitutes, how patterns scale, and how repair
      becomes possible. F11 maps what happens when repair work loosens false
      coherence and the nervous system's actual state becomes visible:{" "}
      <strong style={emphasis}>paradox emerges.</strong>
    </p>
    <p style={prose}>
      Paradoxical behaviour appears irrational only when assessed against a
      single value. When multiple needs are recognised as simultaneously valid —
      connection, protection, authenticity, belonging, coherence — behaviour
      becomes{" "}
      <strong style={emphasis}>multi-rational</strong>: serving multiple masters
      at once. It looks contradictory from outside but is perfectly logical from
      inside.
    </p>
    <p style={prose}>
      The assessment shift:{" "}
      <strong style={emphasis}>
        from "Why are you inconsistent?" to "What competing needs is this
        behaviour trying to serve?"
      </strong>{" "}
      Paradox is not confusion. It is the predictable outcome of a system
      pursuing multiple valid needs simultaneously. When SEA comes online and
      the person can see the whole picture, contradictions become visible and
      holdable rather than invisible and rigid.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>Every Framework Generates Paradox</h4>
    <p style={prose}>
      Each mechanism in F1–F10 creates characteristic contradictions. F1:
      intending one thing while feeling another. F2: reading everyone perfectly
      while having no idea what you feel. F3: knowing and not-knowing
      simultaneously. F4: following rules that harm, defending rules that hurt
      the defender. F5: pursuing status that contradicts professed values. F8:
      getting worse before getting better. F9: succeeding by standards that cost
      everything. F10: repeating what was vowed never to repeat.{" "}
      <strong style={emphasis}>
        Every framework's mechanism produces its own signature contradiction.
      </strong>
    </p>

    <h4 style={subheading}>The Paradox Cascade</h4>
    <p style={prose}>
      Paradox does not remain visible. False coherence hides it through six
      levels: (1) initial contradiction emerges from competing needs; (2) false
      coherence constructs an explanation that hides it; (3) the adaptive
      identity absorbs the explanation — becomes "who I am"; (4) rules and
      worth systems reinforce it; (5) generational transmission passes it
      forward; (6) the contradiction becomes invisible — experienced as normal.
      Single-level interventions fail because cognitive insight at level 2
      does not reach the identity level at level 3.
    </p>

    <h4 style={subheading}>Paradox and Compass Position</h4>
    <p style={prose}>
      How a person relates to their own contradictions reveals compass
      position. In Connection: both truths coexist — "I love them AND what they
      did hurt me." In Protection: paradox feels threatening, binary thinking
      reduces load. In Control: false coherence constructs a smooth narrative
      eliminating one side. In Domination: one truth is imposed, the other
      erased.{" "}
      <strong style={emphasis}>
        Paradox is a clinical tool: those who can name both sides without
        distress likely have Connection access. Those with smooth narratives
        eliminating one side are likely in chronic Control — and that narrative
        should be examined, not admired.
      </strong>
    </p>

    <h4 style={subheading}>Holding Capacity</h4>
    <p style={prose}>
      The goal is not resolving paradox — many are structurally unresolvable.
      The goal is developing capacity to hold paradox without collapse. Five
      components: both/and thinking (requires SEA online), somatic tolerance
      (requires ER developed), temporal flexibility (requires RE accurate),
      part recognition (capacity to see different needs generating different
      pulls), and grief capacity (mourning what cannot be reconciled). Holding
      capacity is what the three awareness capacities produce when online.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>The Paradoxes of Repair</h4>
    <p style={prose}>
      Healing surfaces characteristic paradoxes that are not signs of failure
      but of depth. Getting worse before getting better — previously unfelt
      pain becomes felt. Knowing and not yet being — clear sight of patterns
      but the nervous system has not updated. Grieving what you never had —
      mourning an absence. Healing changing relationships — some deepen, some
      break. Understanding your parents and grieving what they could not give —
      simultaneously.{" "}
      <strong style={emphasis}>
        These are not complications. They are the texture of genuine change.
      </strong>
    </p>

    <h4 style={subheading}>The Relational Paradoxes</h4>
    <p style={prose}>
      At relational scale, both people's competing needs interact.
      Connection-protection oscillation: one moves toward connection, the
      other's system activates protection — both want connection, both are
      protecting. Authenticity demand, honesty punishment: "I want you to be
      honest" followed by punishment when honesty arrives. Love as control:
      genuine care expressed through a mode that the recipient experiences as
      management.{" "}
      <strong style={emphasis}>
        In relational paradox, both truths are real. Neither person is wrong.
        Both are producing the pattern they want to escape.
      </strong>
    </p>

    <h4 style={subheading}>The Systemic Paradoxes</h4>
    <p style={prose}>
      The same mechanism at institutional scale: freedom-seeking populations
      supporting authoritarian leaders (nervous system equates structure with
      safety). Revolution recreating hierarchy (old patterns are the only
      available templates). Institutions perpetuating what they were designed
      to solve — healthcare maintaining illness, justice systems producing
      injustice (regulatory functions override stated purpose). Diversity
      initiatives enforcing conformity — demanding everyone value difference
      in the same way.
    </p>

    <p style={prose}>
      <strong style={emphasis}>
        True coherence is not the absence of contradiction — it is the capacity
        to hold contradiction without collapsing.
      </strong>{" "}
      Integration means developing enough holding capacity that both truths
      remain present. Neither is eliminated for comfort.
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
            <td style={{ ...tableCell, fontWeight: 600 }}>Dialectical Theory</td>
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
            <td style={tableCell}>Kegan; Commons & Richards</td>
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
      <strong style={{ color: TEXT.primary }}>TEG-Blue's contribution:</strong>{" "}
      Multi-rationality as the source of paradox — competing needs generating
      behaviour that serves multiple masters. The paradox cascade showing how
      contradiction becomes invisible through six levels. Compass position as
      predictor of paradox tolerance. Holding capacity as the product of the
      three awareness capacities. True coherence redefined as capacity to hold
      contradiction, not eliminate it. The building blocks are established; the
      integration is the hypothesis, open to testing.
    </p>
  </>
);
