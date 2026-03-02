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
      When rules (F4), worth hierarchies (F5), and bias (F6) are insufficient
      to restore nervous system stability, the system escalates to direct
      control. F7 traces the pathway from self-protection through strategy to
      domination &mdash; and names the intervention windows at each stage.
    </p>
    <p style={standaloneLine}>
      Domination is built through reinforcement, not born.
    </p>
    <p style={prose}>
      Under sustained threat, when connection does not feel safe, the system
      looks for another stabiliser. In some environments, the stabiliser that
      works fastest is control. When control consistently produces relief,
      compliance, or protection, the nervous system adopts control as its
      preferred solution &mdash; even when it harms others. If strategy
      continues to work &mdash; socially rewarded, produces access,
      accountability absent &mdash; it escalates. Each step follows
      reinforcement logic: what works gets repeated, what gets repeated gets
      stronger, what gets stronger becomes default.
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
      There is a critical turning point &mdash; the Crossroads &mdash; where
      the internal logic shifts:
    </p>
    <p style={standaloneLine}>
      &ldquo;I am trying to feel safe&rdquo; &rarr; &ldquo;I will make you
      behave so I can feel safe.&rdquo;
    </p>
    <p style={prose}>
      This is the transition from Protection to Control. Defence stops being a
      response to threat and becomes a method for managing threat by managing
      others. Tactics replace repair. The compass locks in a new configuration.
    </p>
    <p style={prose}>
      The Crossroads is recognisable: repair is decreasing while control is
      increasing. Vulnerability is disappearing while strategy is appearing.
      The person may still look connected &mdash; but the balance has shifted.
      Apologies begin serving image rather than relationship. Warmth begins
      serving management rather than connection.
    </p>

    <h4 style={subheading}>Five-Stage Escalation Pathway</h4>

    <div style={{ overflowX: "auto", margin: "16px 0" }}>
      <table style={tableStyle}>
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
            <td style={tableCell}>
              &ldquo;If I can&rsquo;t control it, I lose safety&rdquo;
            </td>
            <td style={tableCell}>
              Threat scanning, catastrophic thinking, urgency
            </td>
            <td style={tableCell}>Most accessible &mdash; still in Protection</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              2. Strategy Formation
            </td>
            <td style={tableCell}>
              &ldquo;Control creates stability&rdquo;
            </td>
            <td style={tableCell}>
              Behaviour management, proliferating rules, tactics tested
            </td>
            <td style={tableCell}>
              Crossing the Crossroads &mdash; naming, accountability
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              3. Entitlement Loop
            </td>
            <td style={tableCell}>
              &ldquo;I&rsquo;m safer when others obey&rdquo;
            </td>
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
            <td style={tableCell}>
              &ldquo;Their pain is my threat&rdquo;
            </td>
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
              &ldquo;I can&rsquo;t survive without control&rdquo;
            </td>
            <td style={tableCell}>
              Identity fused with dominance, escalated coercion
            </td>
            <td style={tableCell}>
              Protection primary &mdash; rehabilitation not accessible
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style={prose}>
      The pathway shows: escalation is stages, not a switch. It follows
      reinforcement, not personality. Each stage is interruptible &mdash; but
      the cost and difficulty of interruption increase as the pathway
      progresses. Early intervention is most accessible. Late intervention
      requires structural containment.
    </p>

    <h4 style={subheading}>Empathy Gating &mdash; The Three Capacities Under Escalation</h4>
    <p style={prose}>
      What people call &ldquo;empathy&rdquo; conflates three processes that
      diverge under escalation.{" "}
      <strong style={emphasis}>
        Reading Emotions does not collapse &mdash; it redirects.
      </strong>{" "}
      It stays sharp or sharpens, serving management in Control and
      exploitation in Domination.{" "}
      <strong style={emphasis}>Emotional Resonance is what collapses.</strong>{" "}
      The capacity to be affected by others&rsquo; feelings progressively
      shuts down as the compass locks in threat-based modes.{" "}
      <strong style={emphasis}>
        Self-Emotional Awareness was never there.
      </strong>{" "}
      Not gated out &mdash; never fully built (F2). This is the precondition
      for the escalation pathway, not its consequence.
    </p>
    <p style={standaloneLine}>
      The dangerous configuration: sharp RE + collapsed ER + absent SEA.
    </p>
    <p style={prose}>
      Reads perfectly, cannot feel, has no internal signal telling them any of
      this is happening. This is the configuration that most reliably mimics
      healthy Connection &mdash; and makes victims invisible. Empathy appeals
      fail at later stages because they target ER (offline) while RE remains
      sharp enough for the person to narrate empathy-language back without
      felt connection behind it.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>Addiction Logic at the Domination End</h4>
    <p style={prose}>
      When SEA is offline, others&rsquo; fear, submission, and diminishment
      provide temporary relief from internal activation. But relief fades.
      The unprocessed pain, fear, and shame are still there, still generating
      signal, still requiring regulation. Tolerance builds &mdash; the same
      level of domination does not produce the same relief.
    </p>
    <p style={standaloneLine}>
      There is no amount of domination that will make them feel safe &mdash;
      because the safety they need is internal.
    </p>
    <p style={prose}>
      This is addiction logic applied to relational domination: temporary
      relief &rarr; internal state never processed &rarr; tolerance builds
      &rarr; escalation required &rarr; never satisfied &rarr; no natural
      stopping point. Power and wealth amplify access and remove constraints,
      which is why escalation patterns are most extreme where power is most
      concentrated.
    </p>

    <h4 style={subheading}>Causality and Accountability Are Separable</h4>
    <p style={prose}>
      F7 does not use &ldquo;evil&rdquo; as a category &mdash; not because
      harm is not real, but because &ldquo;evil&rdquo; implies something
      fundamentally different about the person. The regulation thread shows
      they are running the same nervous system, same mechanisms, same compass,
      same modes. Further along the gradient, further from return, at higher
      cost to others &mdash; but the same mechanism.
    </p>
    <p style={standaloneLine}>
      Understanding the mechanism does not reduce accountability. It enables
      precise intervention.
    </p>
    <p style={prose}>
      Prevention (address F2 conditions), early intervention (Stages 1&ndash;2),
      systemic design (do not reward chronic Control), victim protection (name
      the mechanism so victims recognise what is happening), and
      accountability without demonisation.
    </p>

    <h4 style={subheading}>The Regulation Thread Complete</h4>
    <p style={prose}>
      F7 completes the regulation thread connecting F1&ndash;F7. Each
      framework describes a regulation substitute at a different scale with
      escalating costs: biological return (F1, no cost) &rarr; developmental
      failure (F2, return path never built) &rarr; cognitive replacement (F3,
      truth) &rarr; rules (F4, flexibility) &rarr; worth hierarchies (F5,
      equity) &rarr; bias (F6, accuracy) &rarr; domination (F7, everything).
    </p>
    <p style={standaloneLine}>
      The substitutes work. They just are not the return.
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
      <strong style={{ color: TEXT.primary }}>
        TEG-Blue&rsquo;s contribution:
      </strong>{" "}
      The five-stage escalation pathway with intervention windows at each
      stage. The Crossroads as a named, recognisable critical moment. The
      empathy gating model showing three channels diverging under escalation
      (RE redirects, ER collapses, SEA was never there). The addiction-logic
      framing for chronic Domination with tolerance and escalation. The
      ethical positioning separating causality from accountability. The
      regulation thread completion connecting F1&ndash;F7 as one mechanism at
      escalating scale and cost. The building blocks are established; the
      integration is the hypothesis, open to testing.
    </p>
  </>
);
