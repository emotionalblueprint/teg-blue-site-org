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
      When rules (F4), worth hierarchies (F5), and bias (F6) are insufficient
      to restore nervous system stability, the system escalates to direct
      control. F7 traces the pathway from self-protection through strategy to
      domination — and names the intervention windows at each stage.
    </p>
    <p style={prose}>
      The core claim:{" "}
      <strong style={emphasis}>
        domination is built through reinforcement, not born.
      </strong>{" "}
      Under sustained threat, when connection does not feel safe, the system
      looks for another stabiliser. In some environments, the stabiliser that
      works fastest is control. When control consistently produces relief,
      compliance, or protection, the nervous system adopts control as its
      preferred solution — even when it harms others. If strategy continues to
      work — socially rewarded, produces access, accountability absent — it
      escalates. Each step follows reinforcement logic: what works gets
      repeated, what gets repeated gets stronger, what gets stronger becomes
      default.
    </p>
    <p style={prose}>
      This is not character or personality. It is reinforcement. And at every
      stage, it traces back to the same origin: a nervous system that never
      learned the return path.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>The Crossroads</h4>
    <p style={prose}>
      There is a critical turning point — the Crossroads — where the internal
      logic shifts from <em>"I am trying to feel safe"</em> to{" "}
      <em>"I will make you behave so I can feel safe."</em> This is the
      transition from Protection to Control. Defence stops being a response to
      threat and becomes a method for managing threat by managing others.
      Tactics replace repair. The compass locks in a new configuration.
    </p>
    <p style={prose}>
      The Crossroads is recognisable: repair is decreasing while control is
      increasing. Vulnerability is disappearing while strategy is appearing.
      The person may still look connected — but balance has shifted.
    </p>

    <h4 style={subheading}>Five-Stage Escalation Pathway</h4>

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
            <th style={tableHeader}>Stage</th>
            <th style={tableHeader}>Logic</th>
            <th style={tableHeader}>What Happens</th>
            <th style={tableHeader}>Intervention</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>1. Fear Activation</td>
            <td style={tableCell}>"If I can't control it, I lose safety"</td>
            <td style={tableCell}>
              Threat scanning, catastrophic thinking, urgency
            </td>
            <td style={tableCell}>Most accessible — still in Protection</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              2. Strategy Formation
            </td>
            <td style={tableCell}>"Control creates stability"</td>
            <td style={tableCell}>
              Behaviour management, proliferating rules, tactics tested
            </td>
            <td style={tableCell}>
              Crossing the Crossroads — naming, accountability
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              3. Entitlement Loop
            </td>
            <td style={tableCell}>"I'm safer when others obey"</td>
            <td style={tableCell}>
              Obedience expected, non-compliance punished, narrative control
            </td>
            <td style={tableCell}>
              Requires external consequences
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              4. Empathy Collapse
            </td>
            <td style={tableCell}>"Their pain is my threat"</td>
            <td style={tableCell}>
              Minimisation, contempt, dehumanisation
            </td>
            <td style={tableCell}>
              Requires external containment
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              5. Power Preservation
            </td>
            <td style={tableCell}>
              "I can't survive without control"
            </td>
            <td style={tableCell}>
              Identity fused with dominance, escalated coercion
            </td>
            <td style={tableCell}>
              Protection primary — rehabilitation not accessible
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4 style={subheading}>Empathy Gating — The Three Capacities Under Escalation</h4>
    <p style={prose}>
      What people call "empathy" conflates three processes that diverge under
      escalation.{" "}
      <strong style={emphasis}>Reading Emotions does not collapse — it
      redirects.</strong>{" "}
      It stays sharp or sharpens, serving management in Control and
      exploitation in Domination.{" "}
      <strong style={emphasis}>Emotional Resonance is what collapses.</strong>{" "}
      The capacity to be affected by others' feelings progressively shuts
      down as the compass locks in threat-based modes.{" "}
      <strong style={emphasis}>Self-Emotional Awareness was never there.</strong>{" "}
      Not gated out — never fully built (F2). This is the precondition for
      the escalation pathway, not its consequence.
    </p>
    <p style={prose}>
      The dangerous configuration: sharp RE + collapsed ER + absent SEA. Reads
      perfectly, cannot feel, has no internal signal telling them any of this
      is happening. This is the configuration that most reliably mimics
      healthy Connection — and makes victims invisible. Empathy appeals fail
      at later stages because they target ER (offline) while RE remains sharp
      enough for the person to narrate empathy-language back without felt
      connection behind it.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>Addiction Logic at the Domination End</h4>
    <p style={prose}>
      When SEA is offline, others' fear, submission, and diminishment provide
      temporary relief from internal activation. But relief fades. The
      unprocessed pain, fear, and shame are still there, still generating
      signal, still requiring regulation. Tolerance builds — the same level
      of domination does not produce the same relief.{" "}
      <strong style={emphasis}>
        There is no amount of domination that will make them feel safe —
        because the safety they need is internal.
      </strong>
    </p>
    <p style={prose}>
      This is addiction logic applied to relational domination: temporary
      relief → internal state never processed → tolerance builds → escalation
      required → never satisfied → no natural stopping point. Power and wealth
      amplify access and remove constraints, which is why escalation patterns
      are most extreme where power is most concentrated.
    </p>

    <h4 style={subheading}>Causality and Accountability Are Separable</h4>
    <p style={prose}>
      F7 does not use "evil" as a category — not because harm is not real,
      but because "evil" implies something fundamentally different about the
      person. The regulation thread shows they are running the same nervous
      system, same mechanisms, same compass, same modes. Further along the
      gradient, further from return, at higher cost to others — but the same
      mechanism.{" "}
      <strong style={emphasis}>
        Understanding the mechanism does not reduce accountability.
      </strong>{" "}
      It enables precise intervention: prevention (address F2 conditions),
      early intervention (Stages 1–2), systemic design (do not reward
      chronic Control), victim protection (name the mechanism so victims
      recognise what is happening), and accountability without demonisation.
    </p>

    <h4 style={subheading}>The Regulation Thread Complete</h4>
    <p style={prose}>
      F7 completes the regulation thread connecting F1–F7. Each framework
      describes a regulation substitute at a different scale with escalating
      costs: biological return (F1, no cost) → developmental failure (F2,
      return path never built) → cognitive replacement (F3, truth) → rules
      (F4, flexibility) → worth hierarchies (F5, equity) → bias (F6,
      accuracy) → domination (F7, everything). The substitutes work — they
      provide nervous system stability. They just are not the return.
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
              Behavioural Reinforcement
            </td>
            <td style={tableCell}>
              Behaviour shaped by reinforcement; rewarded behaviour escalates
            </td>
            <td style={tableCell}>Skinner, 1953</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Psychoanalytic Theory
            </td>
            <td style={tableCell}>
              Narcissistic development, escalation of self-protection
            </td>
            <td style={tableCell}>Kohut, 1977; Kernberg, 1975</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Neuroscience</td>
            <td style={tableCell}>
              Threat physiology, state-dependent perception and empathy
            </td>
            <td style={tableCell}>Porges, 2011; Siegel, 2012; Schore, 2003</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Trauma Psychology
            </td>
            <td style={tableCell}>
              Threat shapes escalation; complex trauma
            </td>
            <td style={tableCell}>van der Kolk, 2014; Herman, 1992</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Abuse / Violence Research
            </td>
            <td style={tableCell}>
              Pattern recognition in abuse; escalation markers
            </td>
            <td style={tableCell}>Bancroft, 2002</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Addiction Research
            </td>
            <td style={tableCell}>
              Tolerance, escalation, structural dependence
            </td>
            <td style={tableCell}>Established literature</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Attachment Theory
            </td>
            <td style={tableCell}>
              Attachment as regulatory system; external regulation
            </td>
            <td style={tableCell}>Bowlby, 1969</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={prose}>
      <strong style={{ color: TEXT.primary }}>TEG-Blue's contribution:</strong>{" "}
      The five-stage escalation pathway with intervention windows at each
      stage. The Crossroads as a named, recognisable critical moment. The
      empathy gating model showing three channels diverging under escalation
      (RE redirects, ER collapses, SEA was never there). The addiction-logic
      framing for chronic Domination with tolerance and escalation. The
      ethical positioning separating causality from accountability. The
      regulation thread completion connecting F1–F7 as one mechanism at
      escalating scale and cost. The building blocks are established; the
      integration is the hypothesis, open to testing.
    </p>
  </>
);
