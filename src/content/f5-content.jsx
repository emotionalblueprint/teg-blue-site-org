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
      Rule systems (F4) do not just organise behaviour — they organise value.
      When rule adherence becomes the social definition of safety, the system
      begins to sort people: those who comply receive belonging, protection,
      and credibility; those who don't, receive less. This sorting stops
      looking like rules and starts looking like reality.
    </p>
    <p style={prose}>
      F5 explains how worth-seeking becomes nervous system regulation at
      systemic scale. When love, protection, or belonging were conditional
      (F2), the nervous system learned: being valued often equals being safer.
      In adulthood, power becomes compelling not because humans are shallow
      but because power reduces vulnerability.{" "}
      <strong style={emphasis}>
        Worth-seeking is a nervous system regulation strategy, not a character
        flaw.
      </strong>
    </p>
    <p style={prose}>
      The central mechanism is the{" "}
      <strong style={emphasis}>Filter of Worth</strong>: signal access mistaken
      for human value, and repeated signal deprivation internalised as personal
      inadequacy. Who gets taken seriously, whose pain gets responded to, whose
      version gets believed, whose potential gets recognised, whose mistakes
      get forgiven — these are not neutral observations. They are the filter
      operating.
    </p>
  </>
);

// ─── THE MECHANISM ────────────────────────────────────────

export const mechanism = (
  <>
    <h4 style={subheading}>Safety Proxies and the Three Capitals</h4>
    <p style={prose}>
      A safety proxy is a marker that signals reduced threat within an
      environment. F5 translates Bourdieu's three capitals through nervous
      system logic:{" "}
      <strong style={emphasis}>Economic capital</strong> provides independence
      signals — "I can leave, I can absorb setbacks."{" "}
      <strong style={emphasis}>Social capital</strong> provides alliance
      signals — "I have protectors, I'm connected to power."{" "}
      <strong style={emphasis}>Cultural capital</strong> provides
      predictability signals — "I know how this works, I belong here." Each
      functions as a nervous system stabiliser under threat-based systems.
    </p>

    <h4 style={subheading}>The Five-Step Worth Loop</h4>
    <p style={prose}>
      The mechanism by which threat produces worth sorting and worth sorting
      stabilises itself: (1) threat increases dependency sensitivity —
      hypervigilance to ranking; (2) validation becomes a stabiliser —
      approval predicts safety; (3) power becomes the highest safety proxy —
      control over access, consequences, protection; (4) proxies become
      sorting rules — informal signals formalise into criteria, metrics,
      standards; (5) the filter becomes internalised as self-worth — inside
      the filter equals success, outside equals inadequacy.
    </p>
    <p style={prose}>
      The loop self-reinforces: Step 5 outcomes appear to justify the original
      sorting. Both insider and outsider narratives are false coherence serving
      regulation — the insider's "I earned this" and the outsider's "something
      is wrong with me" neither reflects the structural reality of signal
      access.
    </p>

    <h4 style={subheading}>Chronic Invisibility as Structural Compass Lock</h4>
    <p style={prose}>
      Chronic invisibility — repeated experience of being unheard, dismissed,
      disbelieved, excluded — functions as chronic social threat. The nervous
      system interprets this as sustained threat and shifts into protective
      states. This is the same F1 mechanism operating structurally: the
      filter is holding the compass in Protection. The person is not choosing
      chronic Protection — the structural filter is holding them there. This
      produces measurable physiological effects documented through allostatic
      load research and the weathering hypothesis.
    </p>
  </>
);

// ─── WHAT HAPPENS WHEN IT BREAKS ──────────────────────────

export const breakdown = (
  <>
    <h4 style={subheading}>Self-Reinforcing Advantage</h4>
    <p style={prose}>
      Once the Filter of Worth stabilises, it produces compounding effects.
      Inside the filter: more validation, more resources, more credibility,
      more forgiveness for mistakes. Outside: fewer opportunities, more
      scepticism, harsher consequences.{" "}
      <strong style={emphasis}>
        Outcome gaps are structural artifacts of proxy access, not evidence of
        intrinsic worth.
      </strong>
    </p>
    <p style={prose}>
      Double false coherence operates: the insider narrative ("I earned this
      through merit") and the outsider narrative ("something is wrong with
      me") are both regulation strategies. The Matthew effect operates through
      regulatory function: position security feels like rightness; position
      threat feels like inadequacy. Merit becomes a rule the cognitive system
      absorbs as truth — and the filter's outcomes become the evidence.
    </p>

    <h4 style={subheading}>The Bridge to Perception</h4>
    <p style={prose}>
      When worth sorting becomes stable and internalised, it stops being
      experienced as a system. It becomes perception. Credibility, competence,
      and trust begin to feel inherent to certain people — not assigned by a
      filter but simply obvious. This is the bridge from sorting to bias: the
      Filter of Worth operates through rules, institutions, and structures;
      bias (F6) operates through perception itself — through what feels true
      about people before any conscious evaluation begins.
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
            <td style={tableCell}>Sidanius & Pratto; Jost & Banaji</td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>Network Science</td>
            <td style={tableCell}>
              Eigenvector centrality, scale-free networks
            </td>
            <td style={tableCell}>Bonacich; Barabási</td>
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
              Wilkinson & Pickett; Krieger; Geronimus
            </td>
          </tr>
          <tr>
            <td style={{ ...tableCell, fontWeight: 600 }}>
              Cumulative Advantage
            </td>
            <td style={tableCell}>
              Matthew effect, success-breeds-success dynamics
            </td>
            <td style={tableCell}>Merton, 1968; DiPrete & Eirich</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={prose}>
      <strong style={{ color: TEXT.primary }}>TEG-Blue's contribution:</strong>{" "}
      The unified terminology "safety proxies" making explicit that all three
      capitals function as nervous system stabilisers. The term "Filter of
      Worth" as a named systemic mechanism. The five-step worth loop operating
      simultaneously at individual and institutional scales. Chronic
      invisibility framed as structural compass lock — connecting structural
      inequality directly to the Inner Compass model. The double false
      coherence showing that insider and outsider narratives both serve
      regulation. The building blocks are established; the integration is the
      hypothesis, open to testing.
    </p>
  </>
);
