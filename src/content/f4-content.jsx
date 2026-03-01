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
      F3 describes how cognition maintains identity in the individual — false
      coherence replacing emotional signals with stabilising narratives. F4
      asks: what happens when enough people in a system are running these
      mechanisms? When enough compasses are stuck in threat-based modes?
    </p>
    <p style={prose}>
      The answer is collective rule systems — not rational agreements or social
      contracts, but nervous system regulation at the group level. When enough
      individuals need predictability, belonging, and conformity to stay
      regulated, the group develops structures that provide these. The
      structures become self-reinforcing because questioning them activates the
      same threat response that created them.
    </p>
    <p style={prose}>
      The scaling mechanism is direct: the same cognitive system that maintains
      individual false coherence is the system that absorbs and maintains
      social rules. If cognition can replace an emotional signal with "I'm not
      angry — I'm being logical," it can replace it with "that's just how
      things are done" or "that's the policy" or "everyone knows that."{" "}
      <strong style={emphasis}>
        Rule-following is a nervous system regulation strategy, not a reasoning
        choice.
      </strong>
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>Three Mechanisms of Scaling</h4>
    <p style={prose}>
      Three mechanisms from F3 scale simultaneously: false coherence absorbs
      rules as truth (the rule becomes part of identity, indistinguishable
      from belief), emotional distortion makes rule-violation feel like
      personal attack (the nervous system reads non-compliance as threat), and
      external regulation makes rule-compliance a nervous system need (without
      rules, there is no stability). These three mechanisms together produce
      collective rule systems without deliberate design.
    </p>

    <h4 style={subheading}>The Seven-Step Internalisation</h4>
    <p style={prose}>
      Under perceived threat, a seven-step mechanism produces internalised
      rules: (1) attention narrows toward threat cues; (2) tolerance for
      ambiguity decreases; (3) deviation becomes costly; (4) sameness becomes
      protective; (5) behaviours reducing uncertainty are rewarded;
      (6) external enforcement gives way to self-policing; (7) rules become
      invisible — experienced as "just how things are." The loop is
      self-reinforcing: examining the rules activates the same threat response
      that created them.
    </p>

    <h4 style={subheading}>Six Rule Systems</h4>
    <p style={prose}>
      Six categories emerge, each serving a distinct regulatory function:{" "}
      <strong style={emphasis}>Roles</strong> (identity stabilisation),{" "}
      <strong style={emphasis}>Obedience</strong> (belonging protection),{" "}
      <strong style={emphasis}>Performance</strong> (worth verification),{" "}
      <strong style={emphasis}>Dominance</strong> (power establishment),{" "}
      <strong style={emphasis}>Punishment</strong> (boundary enforcement), and{" "}
      <strong style={emphasis}>Entitlement</strong> (resource allocation). Each
      expresses differently across the gradient — flexible in Connection,
      narrowing in Protection, rigid in Control, absolute in Domination. Every
      specific rule can be located within this taxonomy by identifying which
      regulatory need it serves.
    </p>

    <h4 style={subheading}>Cross-Theoretical Convergence</h4>
    <p style={prose}>
      Ten research traditions independently describe the same phenomenon:
      Bourdieu's habitus, Bernstein's pedagogic codes, Goffman's dramaturgy,
      Beck's core beliefs, Bowlby's internal working models, Schwartz's
      protective parts, Porges' neuroception, Haidt's moral foundations,
      Milgram's obedience research, and van der Kolk's intergenerational
      trauma. F4 integrates these into a single account: rule internalisation
      as collective regulation under threat.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>Rule Escalation Under Sustained Threat</h4>
    <p style={prose}>
      When collective threat persists, rule systems escalate through four
      stages paralleling the four-mode gradient:{" "}
      <strong style={emphasis}>Initial</strong> (flexibility — rules serve
      coordination) →{" "}
      <strong style={emphasis}>Intermediate</strong> (narrowing — rules tighten,
      exceptions disappear) →{" "}
      <strong style={emphasis}>Advanced</strong> (enforcement — compliance
      becomes mandatory, dissent punished) →{" "}
      <strong style={emphasis}>Extreme</strong> (violence — rules enforced
      through force, deviation eliminated). Authoritarianism becomes visible
      not as an ideological anomaly but as the predictable outcome of
      prolonged collective threat.
    </p>

    <h4 style={subheading}>Punishment Versus Accountability</h4>
    <p style={prose}>
      A critical distinction emerges from the regulation lens:{" "}
      <strong style={emphasis}>
        punishment aims to cause suffering — accountability aims to create
        understanding.
      </strong>{" "}
      Punishment is a threat-mode response: the system is activated, the
      violator is perceived as threat, suffering is the regulatory mechanism.
      Accountability requires Connection: enough safety to tolerate the
      discomfort of impact, enough capacity to understand what happened.
      Systems stuck in threat produce punishment systems. Systems with access
      to Connection can produce accountability.
    </p>

    <h4 style={subheading}>The Self-Sealing Problem</h4>
    <p style={prose}>
      The mechanism that created the rules is the mechanism that protects the
      rules. Anyone who questions becomes a threat to the group's regulation.
      The challenge is experienced not as feedback but as attack — the same
      emotional distortion operating at collective scale. The intervention
      principle remains consistent: restore safety first, then expect
      flexibility — including at the systemic level.
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
            <td style={{ ...tableCell, fontWeight: 600 }}>Sociology</td>
            <td style={tableCell}>
              Habitus, social reproduction, dramaturgical performance
            </td>
            <td style={tableCell}>Bourdieu, 1977; Bernstein; Goffman, 1959</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Social Psychology
            </td>
            <td style={tableCell}>
              Obedience, conformity, compliance under authority
            </td>
            <td style={tableCell}>
              Milgram, 1963; Asch, 1951; Zimbardo, 1971
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Neuroscience</td>
            <td style={tableCell}>
              Nervous system synchronisation, neuroception, co-regulation
            </td>
            <td style={tableCell}>Porges, 2011; Siegel, 2012</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Systems Theory</td>
            <td style={tableCell}>
              Anxiety propagation, family rule systems
            </td>
            <td style={tableCell}>Bowen; Satir</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Trauma Studies</td>
            <td style={tableCell}>
              Intergenerational transmission, coercive control
            </td>
            <td style={tableCell}>van der Kolk, 2014; Herman, 1992</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Moral Psychology
            </td>
            <td style={tableCell}>
              Moral foundations as intuitive rules
            </td>
            <td style={tableCell}>Haidt, 2001</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Clinical Psychology
            </td>
            <td style={tableCell}>
              Core beliefs, schemas, protective parts
            </td>
            <td style={tableCell}>Beck; Young, 2003; Schwartz, 1995</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={prose}>
      <strong style={{ color: TEXT.primary }}>TEG-Blue's contribution:</strong>{" "}
      The specific mechanism by which individual nervous system patterns become
      collective structures — the chain is traceable: SEA offline → emotional
      distortion → external regulation → collective rule systems. The
      seven-step internalisation mechanism with self-reinforcing loop. The
      six-category rule taxonomy organised by regulatory function. The
      four-stage escalation model paralleling the four-mode gradient. The
      building blocks are established; the integration is the hypothesis, open
      to testing.
    </p>
  </>
);
