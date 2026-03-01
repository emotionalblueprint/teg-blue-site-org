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
      F2 explains how the compass gets calibrated in childhood and what
      happens when calibration fails. F3 explains why that calibration
      persists in adulthood — and why it is so hard to change. The central
      mechanism is <strong style={emphasis}>false coherence</strong>: cognition
      actively replacing emotional signals with invented narratives that feel
      true because they restore nervous system stability, not because they
      are accurate.
    </p>
    <p style={prose}>
      False coherence is not deception. It is not denial, which implies
      awareness of what is being denied. It is the outcome: a stable, complete
      narrative built on incomplete data that functions as identity. "I'm not
      angry — I'm being logical." "They're overreacting — I'm just being
      realistic." "I'm fine, everything is fine" — said while radiating
      tension. Each narrative works for regulation. Each is objectively
      incomplete.
    </p>
    <p style={prose}>
      The critical insight: false coherence{" "}
      <em>is</em> regulation. When the biological return was never learned
      (F2), cognition stepped in to do what the body could not. The person
      feels regulated. They are regulated. The cost is truth, not function.
      This is why challenging someone's false coherence directly escalates
      threat rather than producing insight — you are threatening the only
      regulatory system they have.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>The Self-Reinforcing Loop</h4>
    <p style={prose}>
      False coherence does not maintain itself passively — it gets stronger
      through use. Under stress, the nervous system shifts toward protection.
      Attention narrows. Cognition generates a stabilising narrative,
      replacing the emotional signal. The narrative holds, identity feels
      coherent, the body calms. Relief reinforces the pattern. Each cycle
      makes the replacement more automatic and invisible.
    </p>
    <p style={prose}>
      The deeper cost: every time cognition replaces an emotional signal, the
      body's regulatory system gets less practice. The muscles that would
      release don't. The breath that would deepen doesn't. The tears don't
      come. Cognitive regulation prevents the conditions under which emotional
      regulation could develop. This is why insight alone cannot break the
      loop — understanding the pattern is itself a cognitive event, and the
      cognitive system is the one running the replacement.
    </p>

    <h4 style={subheading}>
      Cognitive Dissonance as Regulatory Stress Response
    </h4>
    <p style={prose}>
      When reality contradicts the narrative cognition built, the nervous
      system experiences the misalignment as threat. Dissonance is not a
      reasoning error — it is a regulatory stress response. The resolution
      strategies — denial, projection, blame, narrative revision,
      counterattack — are the cognitive system doing its job under threat:
      generating a stable narrative as fast as possible to restore
      equilibrium.
    </p>
    <p style={prose}>
      You cannot out-think a regulatory response. You can only create
      conditions safe enough for the system to let truth in without
      collapsing. If the biological return was never learned and cognition is
      the only regulatory system, then challenging cognition's narrative
      threatens the person's entire regulatory architecture.
    </p>

    <h4 style={subheading}>Emotional Distortion</h4>
    <p style={prose}>
      When Self-Emotional Awareness is offline, internal discomfort — the
      person's own nervous system activation — cannot be located as their own
      experience. The activation gets misread as external threat. Retaliation
      feels like self-defence because the nervous system is reporting a threat
      that is not there. This is the specific micro-mechanism connecting SEA
      absence to relational harm: internal discomfort → misread as external
      attack → retaliation feels justified.
    </p>

    <h4 style={subheading}>Identity Upgrades</h4>
    <p style={prose}>
      The identity cognition built does not stay static — it gets upgraded
      with achievement, ideology, self-optimisation, and therapeutic
      narratives. These may resemble genuine growth while serving the same
      regulatory function. Chronic Control plus meditation becomes the
      "mindful leader." Chronic Connection plus empowerment language becomes
      the "empowered empath." The diagnostic question: is cognition serving
      truth or serving the mode? Genuine growth brings SEA online and teaches
      the return. Identity upgrade gives cognition better language for the
      same replacement.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>Regulatory Defence Across the Gradient</h4>
    <p style={prose}>
      When external reality contradicts the identity cognition built around
      the capacity gaps, the system does not experience this as feedback. It
      experiences it as a threat to its regulation. The response is
      proportionate to the regulatory threat, not the external event — which
      is why it looks "disproportionate" from outside and feels completely
      justified from inside.
    </p>

    {/* Defence patterns table */}
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
            <th style={tableHeader}>Chronic Mode</th>
            <th style={tableHeader}>Defence Pattern</th>
            <th style={tableHeader}>What It Sounds Like</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Connection</td>
            <td style={tableCell}>Collapse, guilt, self-blame</td>
            <td style={tableCell}>
              "I'm so sorry, I'm terrible, you're right"
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Protection</td>
            <td style={tableCell}>Withdrawal, attack, shutdown</td>
            <td style={tableCell}>
              "You're the problem. I'm done."
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Control</td>
            <td style={tableCell}>
              Strategic reframing, blame reversal
            </td>
            <td style={tableCell}>
              "Actually, if you look at the facts..."
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Domination</td>
            <td style={tableCell}>Rage, punishment, elimination</td>
            <td style={tableCell}>"You will regret this."</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4 style={subheading}>External Regulation</h4>
    <p style={prose}>
      When the internal regulatory system is offline, people use others to
      manage what the body cannot manage alone. Chronic Connection regulates
      through fusion — dissolving self-boundaries. Chronic Protection
      regulates through distance — eliminating relational threat. Chronic
      Control regulates through management — orchestrating others' behaviour.
      Chronic Domination regulates through subjugation — enforcing compliance.
    </p>
    <p style={prose}>
      A critical mechanism:{" "}
      <strong style={emphasis}>
        chronic Control mimics healthy Connection
      </strong>
      . Control partners can look attentive, responsive, and connected —
      because reading others' needs is a core competence. But the attention
      serves management, not connection. The relationship maintains a version
      of belonging while the partner remains unseen. This is the mode that
      most reliably makes victims invisible.
    </p>

    <h4 style={subheading}>The Somatic Cost</h4>
    <p style={prose}>
      Maintaining false coherence consumes substantial resources. When
      cognition is permanently replacing emotional signals, the cost shows
      somatically: chronic tension, persistent fatigue, emotional numbing,
      cognitive fog, difficulty relaxing even in safe environments. Rigidity
      and defensiveness are state-dependent outcomes, not character traits —
      predictable results of a system working overtime to maintain a narrative
      for years or decades. When safety increases, what becomes available is
      not new capacity but existing capacity freed from defensive use.
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
              Psychoanalytic Theory
            </td>
            <td style={tableCell}>
              Defence mechanisms, protective identity structures, projection,
              self-object needs
            </td>
            <td style={tableCell}>
              Freud, 1923; Winnicott, 1960; Kohut, 1977
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Cognitive Psychology
            </td>
            <td style={tableCell}>
              Cognitive dissonance, motivated reasoning, coherence-seeking
            </td>
            <td style={tableCell}>Festinger, 1957; Kahneman, 2011; Haidt, 2001</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Family Systems</td>
            <td style={tableCell}>
              Accepted reality, communication patterns, emotional process
            </td>
            <td style={tableCell}>Bowen; Satir</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Polyvagal-Informed Neuroscience
            </td>
            <td style={tableCell}>
              State-dependent cognition, neuroception gating, co-regulation
            </td>
            <td style={tableCell}>Porges, 2011; Siegel, 2012; Schore, 2003</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Trauma Studies</td>
            <td style={tableCell}>
              Narrative control, body-based memory, incomplete regulation,
              threat-biased perception
            </td>
            <td style={tableCell}>van der Kolk, 2014; Levine, 1997</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Internal Family Systems
            </td>
            <td style={tableCell}>
              Parts managing internal conflict, protective roles
            </td>
            <td style={tableCell}>Schwartz, 1995</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Attachment Theory
            </td>
            <td style={tableCell}>
              Attachment as regulatory system, insecure patterns, relational
              regulation
            </td>
            <td style={tableCell}>Bowlby, 1969; Ainsworth, 1978</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={prose}>
      <strong style={{ color: TEXT.primary }}>TEG-Blue's contribution:</strong>{" "}
      The term "false coherence" captures what no existing term does —
      regulatory success at the cost of emotional truth. The self-reinforcing
      loop showing how the replacement becomes automatic through use. The
      reframe of cognitive dissonance from reasoning error to nervous system
      regulatory stress response. The naming of emotional distortion as the
      micro-mechanism connecting SEA absence to relational harm. The
      diagnostic distinction between genuine growth and identity upgrade. The
      four-mode map of external regulation patterns. The building blocks are
      established; the integration is the hypothesis, open to testing.
    </p>
  </>
);
