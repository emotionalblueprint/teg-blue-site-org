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
      Rule systems (F4) do not just organise behaviour. They organise value.
      When rule adherence becomes the social definition of safety, the system
      begins to sort people. Those who comply &mdash; who perform the right
      roles, follow the right rules, display the right markers &mdash; receive
      belonging, protection, and credibility. Those who don&rsquo;t, or
      can&rsquo;t, receive less.
    </p>
    <p style={prose}>
      Over time, this sorting formalises. It stops looking like rules and starts
      looking like reality.
    </p>
    <p style={standaloneLine}>
      Worth-seeking is a nervous system regulation strategy, not a character
      flaw.
    </p>
    <p style={prose}>
      When love, protection, or belonging were conditional (F2), the nervous
      system learned: being valued often equals being safer. Being powerless
      often equals being exposed. In adulthood, power becomes compelling not
      because humans are shallow but because power reduces vulnerability. The
      person pursuing status or validation is running the same regulation logic
      the nervous system has been running since childhood: find what reduces
      threat and move toward it.
    </p>
    <p style={prose}>
      The central mechanism is the{" "}
      <strong style={emphasis}>Filter of Worth</strong>: signal access mistaken
      for human value, and repeated signal deprivation internalised as personal
      inadequacy. Who gets taken seriously in a meeting, whose pain gets
      responded to, whose version of events gets believed, whose potential gets
      recognised, whose mistakes get forgiven &mdash; these are not neutral
      observations. They are the filter operating.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>Safety Proxies and the Three Capitals</h4>
    <p style={prose}>
      A safety proxy is a marker that signals reduced threat within an
      environment. F5 translates Bourdieu&rsquo;s three capitals through nervous
      system logic:
    </p>

    <div style={{ overflowX: "auto", margin: "16px 0" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeader}>Capital</th>
            <th style={tableHeader}>Sociological Function</th>
            <th style={tableHeader}>Nervous System Function</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Economic</td>
            <td style={tableCell}>Financial resources, property, income</td>
            <td style={tableCell}>
              Independence signals &mdash; &ldquo;I can leave if I need to&rdquo;
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Social</td>
            <td style={tableCell}>Networks, relationships, alliances</td>
            <td style={tableCell}>
              Alliance signals &mdash; &ldquo;I have people who will protect
              me&rdquo;
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Cultural</td>
            <td style={tableCell}>Education, accent, manners, knowledge</td>
            <td style={tableCell}>
              Predictability signals &mdash; &ldquo;I know how this works; I
              belong here&rdquo;
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style={prose}>
      Each capital is compelling not because people are status-seeking by nature,
      but because these markers genuinely reduce nervous system threat in systems
      where they predict who gets protected and who gets exposed.
    </p>

    <h4 style={subheading}>The Five-Step Worth Loop</h4>
    <p style={prose}>
      The mechanism by which threat produces worth sorting and worth sorting
      stabilises itself:
    </p>
    <p style={prose}>
      (1) Threat increases dependency sensitivity &mdash; hypervigilance to
      ranking and exclusion signals.
      (2) Validation becomes a stabiliser &mdash; approval predicts safety.
      (3) Power becomes the highest safety proxy &mdash; control over access,
      consequences, and protection provides the most reliable threat reduction.
      (4) Proxies become sorting rules &mdash; informal signals formalise into
      criteria, metrics, and standards.
      (5) The filter becomes internalised as self-worth &mdash; inside the filter
      equals success; outside equals inadequacy.
    </p>
    <p style={prose}>
      The loop self-reinforces: Step 5 outcomes appear to justify the original
      sorting. The people inside the filter have more resources, more visibility,
      more opportunities &mdash; and their success is cited as evidence that the
      sorting was correct.
    </p>

    <h4 style={subheading}>
      Chronic Invisibility as Structural Compass Lock
    </h4>
    <p style={prose}>
      Chronic invisibility &mdash; the repeated experience of being unheard,
      dismissed, disbelieved, excluded &mdash; functions as chronic social
      threat. The nervous system interprets this exactly as it interprets any
      sustained threat: by shifting into protective states. This is the same
      mechanism F1 describes at the individual level, now operating
      structurally.
    </p>
    <p style={standaloneLine}>
      The person is not choosing chronic Protection. The structural filter is
      holding their compass there.
    </p>
    <p style={prose}>
      The physiological consequences are documented through allostatic load
      research (McEwen) and the weathering hypothesis (Geronimus): chronic
      hypervigilance, shutdown, self-doubt, imposter experience, chronic tension
      and fatigue. When a person presents with these, the assessment must include
      structural invisibility as a contributing factor. These may be accurate
      adaptations to filtering environments &mdash; not cognitive distortions to
      be corrected.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>Self-Reinforcing Advantage</h4>
    <p style={prose}>
      Once the Filter of Worth stabilises, it produces compounding effects.
      Inside the filter: more validation, more resources, more credibility, more
      forgiveness for mistakes. Outside: fewer opportunities, more scepticism,
      harsher consequences for the same failures. Each advantage compounds the
      next. Each barrier compounds the next.
    </p>
    <p style={standaloneLine}>
      Outcome gaps are structural artifacts of proxy access, not evidence of
      intrinsic worth.
    </p>
    <p style={prose}>
      Double false coherence operates in both directions: the insider&rsquo;s
      narrative &mdash; &ldquo;I earned this through merit&rdquo; &mdash; is
      false coherence serving regulation. It stabilises the identity and reduces
      the threat of examining position. The outsider&rsquo;s narrative &mdash;
      &ldquo;something is wrong with me&rdquo; &mdash; is also false coherence
      serving regulation. It provides an explanation that is painful but
      coherent.
    </p>
    <p style={prose}>
      Both are regulation strategies. Neither reflects the structural reality of
      how the filter operates. The feeling of deserving and the feeling of
      inadequacy are both physiological states produced by structural position,
      not accurate readings of intrinsic worth.
    </p>

    <h4 style={subheading}>The Bridge to Perception</h4>
    <p style={prose}>
      When worth sorting becomes stable and internalised, it stops being
      experienced as a system. It becomes perception. Credibility, competence,
      and trust begin to feel inherent to certain people &mdash; not assigned by
      a filter but simply obvious. This is the bridge from sorting to bias: the
      Filter of Worth operates through rules, institutions, and structures. Bias
      (F6) operates through perception itself &mdash; through what feels true
      about people before any conscious evaluation begins.
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
              Capital theory, habitus, social reproduction, stigma
            </td>
            <td style={tableCell}>Bourdieu, 1986; Weber; Goffman</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Social Psychology
            </td>
            <td style={tableCell}>
              Social dominance theory, system justification
            </td>
            <td style={tableCell}>Sidanius &amp; Pratto; Jost &amp; Banaji</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Network Science</td>
            <td style={tableCell}>
              Eigenvector centrality, scale-free networks
            </td>
            <td style={tableCell}>Bonacich; Barab&aacute;si</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Neuroscience</td>
            <td style={tableCell}>
              Neuroception, allostatic load, stress and hierarchy
            </td>
            <td style={tableCell}>Porges, 2011; McEwen; Sapolsky</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Critical Theory</td>
            <td style={tableCell}>
              Intersectionality, structural exclusion, capability approach
            </td>
            <td style={tableCell}>Crenshaw; Collins; Sen, 1999</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Health Psychology
            </td>
            <td style={tableCell}>
              Inequality and health, weathering, discrimination
            </td>
            <td style={tableCell}>
              Wilkinson &amp; Pickett; Krieger; Geronimus
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Cumulative Advantage
            </td>
            <td style={tableCell}>
              Matthew effect, success-breeds-success dynamics
            </td>
            <td style={tableCell}>Merton, 1968; DiPrete &amp; Eirich</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={prose}>
      <strong style={{ color: TEXT.primary }}>
        TEG-Blue&rsquo;s contribution:
      </strong>{" "}
      The unified terminology &ldquo;safety proxies&rdquo; making explicit that
      all three capitals function as nervous system stabilisers. The term
      &ldquo;Filter of Worth&rdquo; as a named systemic mechanism. The five-step
      worth loop operating at individual and institutional scales simultaneously.
      Chronic invisibility framed as structural compass lock &mdash; connecting
      structural inequality directly to the Inner Compass model. The double
      false coherence showing that insider and outsider narratives both serve
      regulation. The building blocks are established; the integration is the
      hypothesis, open to testing.
    </p>
  </>
);
