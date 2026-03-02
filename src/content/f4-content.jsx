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
      F3 completes the individual arc &mdash; how cognition maintains identity
      through false coherence, and what this system does to the people around it
      through emotional distortion and external regulation. F4 asks: what
      happens when enough people in a system are running these mechanisms? When
      enough compasses are stuck in threat-based modes?
    </p>
    <p style={prose}>
      The answer is collective rule systems. Not rational agreements or social
      contracts &mdash; nervous system regulation at the group level. When enough
      individuals need predictability, belonging protection, and conformity to
      stay regulated, the group develops structures that provide these.
    </p>
    <p style={standaloneLine}>
      Rule-following is a nervous system regulation strategy, not a reasoning
      choice.
    </p>
    <p style={prose}>
      People do not follow harmful rules because they are unintelligent or
      immoral. They follow them because under threat, the nervous system
      prioritises predictability and belonging &mdash; and rules become a
      low-cost form of stability. The same cognitive system that maintains
      individual false coherence absorbs and maintains social rules. If cognition
      can replace an emotional signal with &ldquo;I&rsquo;m not angry &mdash;
      I&rsquo;m being logical,&rdquo; it can replace it with &ldquo;that&rsquo;s
      just how things are done&rdquo; or &ldquo;everyone knows that.&rdquo;
    </p>
    <p style={prose}>
      The scaling mechanism is direct: false coherence absorbs rules as truth.
      Emotional distortion makes rule-violation feel like personal attack.
      External regulation makes rule-compliance a nervous system need. Together,
      these produce collective rule systems without deliberate design &mdash;
      emerging from below, from enough individuals running the same regulatory
      strategies in proximity.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>The Seven-Step Internalisation</h4>
    <p style={prose}>
      Under perceived threat, a seven-step mechanism produces internalised
      rules:
    </p>
    <p style={prose}>
      (1) Attention narrows toward threat and social-risk cues.
      (2) Tolerance for ambiguity decreases &mdash; clear answers, even wrong
      ones, feel safer than open questions.
      (3) Deviation becomes costly &mdash; difference signals potential threat.
      (4) Sameness becomes protective &mdash; conformity reduces
      unpredictability.
      (5) Behaviours that reduce uncertainty are rewarded with belonging signals.
      (6) External enforcement gives way to self-policing &mdash; the person
      polices themselves, and others.
      (7) Rules become invisible &mdash; experienced as &ldquo;just how things
      are.&rdquo;
    </p>
    <p style={standaloneLine}>
      Questioning the rules activates the same threat response that created
      them.
    </p>
    <p style={prose}>
      The loop closes at Step 7. The rules are no longer perceived as rules.
      They are &ldquo;common sense.&rdquo; &ldquo;How it works.&rdquo; This is
      collective false coherence &mdash; the same mechanism as individual false
      coherence, operating at a different scale.
    </p>

    <h4 style={subheading}>Six Rule Systems</h4>
    <p style={prose}>
      Six categories of rules consistently emerge, each serving a distinct
      regulatory function:
    </p>

    <div style={{ overflowX: "auto", margin: "16px 0" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeader}>Rule System</th>
            <th style={tableHeader}>Regulatory Function</th>
            <th style={tableHeader}>Core Pattern</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Roles</td>
            <td style={tableCell}>Identity stabilisation</td>
            <td style={tableCell}>
              &ldquo;You are who others need you to be&rdquo;
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Obedience</td>
            <td style={tableCell}>Belonging protection</td>
            <td style={tableCell}>
              &ldquo;Safety comes from compliance&rdquo;
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Performance</td>
            <td style={tableCell}>Worth verification</td>
            <td style={tableCell}>
              &ldquo;Value is earned through image&rdquo;
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Dominance</td>
            <td style={tableCell}>Power establishment</td>
            <td style={tableCell}>
              &ldquo;Strength means control&rdquo;
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Punishment</td>
            <td style={tableCell}>Boundary enforcement</td>
            <td style={tableCell}>
              &ldquo;Pain teaches lessons&rdquo;
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Entitlement</td>
            <td style={tableCell}>Resource allocation</td>
            <td style={tableCell}>
              &ldquo;Some people are owed more&rdquo;
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style={prose}>
      Every specific rule &mdash; &ldquo;boys don&rsquo;t cry,&rdquo;
      &ldquo;respect your elders,&rdquo; &ldquo;nice girls don&rsquo;t
      argue&rdquo; &mdash; can be located within this taxonomy by identifying
      which regulatory need it serves.
    </p>
    <p style={prose}>
      Each rule system expresses differently across the gradient. In Connection,
      rules are held lightly &mdash; they serve the group and can be examined.
      In chronic Protection, rules are rigid &mdash; deviation feels dangerous.
      In chronic Control, rules serve management &mdash; selectively enforced to
      maintain the curated reality. In chronic Domination, rules are absolute
      &mdash; violation is met with punishment or elimination.
    </p>

    <h4 style={subheading}>Cross-Theoretical Convergence</h4>
    <p style={prose}>
      Ten research traditions independently describe the same phenomenon:
      Bourdieu&rsquo;s habitus, Bernstein&rsquo;s pedagogic codes,
      Goffman&rsquo;s dramaturgy, Beck&rsquo;s core beliefs, Bowlby&rsquo;s
      internal working models, Schwartz&rsquo;s protective parts,
      Porges&rsquo; neuroception, Haidt&rsquo;s moral foundations,
      Milgram&rsquo;s obedience, and van der Kolk&rsquo;s intergenerational
      trauma. F4 integrates these into a single account: rule internalisation as
      collective regulation under threat.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>Rule Escalation Under Sustained Threat</h4>
    <p style={prose}>
      When collective threat persists, rule systems escalate through four stages
      that parallel the four-mode gradient:
    </p>

    <div style={{ overflowX: "auto", margin: "16px 0" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeader}>Stage</th>
            <th style={tableHeader}>Characteristics</th>
            <th style={tableHeader}>Compass Parallel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Initial</td>
            <td style={tableCell}>
              Informal rules, social pressure, flexibility possible
            </td>
            <td style={tableCell}>Connection-like flexibility</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Intermediate</td>
            <td style={tableCell}>
              Rules proliferate, deviation increasingly costly
            </td>
            <td style={tableCell}>Protection-like narrowing</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Advanced</td>
            <td style={tableCell}>
              Reduced tolerance, increased punishment, obedience as virtue
            </td>
            <td style={tableCell}>Control-like enforcement</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Extreme</td>
            <td style={tableCell}>
              Authoritarian enforcement, violence normalised
            </td>
            <td style={tableCell}>Domination-like violence</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style={standaloneLine}>
      Not ideological anomalies &mdash; but predictable outcomes of prolonged
      collective threat.
    </p>
    <p style={prose}>
      The escalation follows the same nervous system logic as individual compass
      movement. Every system is capable of it under sustained threat. The
      question is always about conditions and safety, not the moral character of
      the population. The staged model allows recognition of where a system is
      in the escalation &mdash; and identification of intervention points before
      reaching extreme stages.
    </p>

    <h4 style={subheading}>Punishment Versus Accountability</h4>
    <p style={standaloneLine}>
      Punishment aims to cause suffering. Accountability aims to create
      understanding.
    </p>
    <p style={prose}>
      Punishment is a threat-mode response: the system is activated, the
      violator is perceived as threat, suffering is the regulatory mechanism.
      Accountability requires Connection: enough safety to tolerate the
      discomfort of impact, enough capacity to understand what happened. When
      punishment rules are internalised, the distinction disappears &mdash; all
      correction feels like infliction of pain.
    </p>
    <p style={prose}>
      This connects directly to F3&rsquo;s emotional distortion: the person
      whose discomfort is misread as attack genuinely cannot tell the difference
      between &ldquo;you hurt my feelings by setting a boundary&rdquo; and
      &ldquo;you are harming me.&rdquo; Punishment rules normalise this
      confusion at the collective level.
    </p>

    <h4 style={subheading}>The Self-Sealing Problem</h4>
    <p style={standaloneLine}>
      The mechanism that created the rules is the mechanism that protects the
      rules.
    </p>
    <p style={prose}>
      Anyone who questions becomes a threat to the group&rsquo;s regulation. The
      challenge is experienced not as feedback but as attack &mdash; emotional
      distortion operating at collective scale. The intervention principle
      remains consistent with F1: restore safety first, then expect flexibility
      &mdash; including at the systemic level.
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
            <td style={{ ...tableCell, fontWeight: 600 }}>Sociology</td>
            <td style={tableCell}>
              Habitus, social reproduction, dramaturgical performance
            </td>
            <td style={tableCell}>
              Bourdieu, 1977; Bernstein; Goffman, 1959
            </td>
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
      <strong style={{ color: TEXT.primary }}>
        TEG-Blue&rsquo;s contribution:
      </strong>{" "}
      The specific scaling mechanism &mdash; the chain is traceable: SEA offline
      &rarr; emotional distortion &rarr; external regulation &rarr; collective
      rule systems. The seven-step internalisation mechanism with self-sealing
      loop. The six-category rule taxonomy organised by regulatory function. The
      four-stage escalation model paralleling the four-mode gradient. The
      punishment vs. accountability distinction. The reframe of rules as
      regulation rather than ideology &mdash; changing the intervention from
      dismantling structures to creating safety conditions that allow
      flexibility. The building blocks are established; the integration is the
      hypothesis, open to testing.
    </p>
  </>
);
