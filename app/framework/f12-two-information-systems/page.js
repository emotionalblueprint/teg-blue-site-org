import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPACING, SPECTRUM,
  hexToRgba, RESEARCHER, PATTERN_GRADIENT,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ResearcherHero,
  PropositionBox, ExpandableSection,
} from "@/src/components";
import ConnectedResearch from "@/src/components/ConnectedResearch";
import {
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from "@/src/lib/jsonld";

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "Our Two Information Systems — Why Insight Alone Doesn't Change Behavior and What Actually Does (F12) | TEG-Blue Research",
  description:
    "The architecture underneath all twelve frameworks: two parallel information systems — emotional-somatic and cognitive-logical — running simultaneously at different speeds. Why understanding patterns doesn't automatically change them, what actually produces change, and how one mechanism explains all human behavior. Framework F12 of 12.",
  keywords: [
    "two information systems",
    "state-dependent behavior",
    "emotional-somatic system",
    "cognitive-logical system",
    "insight doesn't change behavior",
    "dual-process theory",
    "state precedes capacity",
    "accountability without demonization",
    "gradient-matched intervention",
    "nervous system organization",
    "emotional technology",
  ],
  alternates: {
    canonical: "https://teg-blue.org/framework/f12-two-information-systems",
  },
  openGraph: {
    title: "Our Two Information Systems — F12 Framework | TEG-Blue",
    description:
      "Why insight alone doesn't change behavior: two parallel information systems running at different speeds, and the single mechanism that explains all twelve frameworks.",
    url: "https://teg-blue.org/framework/f12-two-information-systems",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

// ─── PAGE ──────────────────────────────────────────────────

export default function F12TwoInformationSystemsPage() {

  /* ── local helpers ─────────────────────────────────── */

  const sectionHeadingStyle = {
    fontSize: 20, fontWeight: 700, color: TEXT.primary,
    borderBottom: `2px solid ${SPECTRUM.cobalt}`,
    paddingBottom: 10, marginBottom: 20, marginTop: 48,
  };
  const conceptHeadingStyle = {
    fontSize: 16, fontWeight: 600, color: TEXT.primary,
    marginTop: 28, marginBottom: 10,
  };
  const proseStyle = {
    fontSize: 14, color: TEXT.secondary, lineHeight: 1.8,
    maxWidth: 720, marginBottom: 16,
  };

  function KeyStatement({ children }) {
    return (
      <blockquote style={{
        borderLeft: `3px solid ${SPECTRUM.cobalt}`,
        paddingLeft: 16, margin: "20px 0", fontStyle: "italic",
        fontSize: 14, lineHeight: 1.7, color: TEXT.primary,
      }}>
        {children}
      </blockquote>
    );
  }

  function TableRow({ cells }) {
    return (
      <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
        {cells.map((c, i) => (
          <td key={i} style={{
            padding: "10px 14px", fontSize: 13, lineHeight: 1.6,
            color: i === 0 ? TEXT.primary : TEXT.secondary,
            fontWeight: i === 0 ? 600 : 400, verticalAlign: "top",
          }}>
            {c}
          </td>
        ))}
      </tr>
    );
  }

  function ThreeColRow({ cells }) {
    return (
      <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
        {cells.map((c, i) => (
          <td key={i} style={{
            padding: "10px 14px", fontSize: 13, lineHeight: 1.6,
            color: i === 0 ? TEXT.primary : TEXT.secondary,
            fontWeight: i === 0 ? 600 : 400, verticalAlign: "top",
          }}>
            {c}
          </td>
        ))}
      </tr>
    );
  }

  function FiveColRow({ cells }) {
    return (
      <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
        {cells.map((c, i) => (
          <td key={i} style={{
            padding: "8px 10px", fontSize: 12, lineHeight: 1.5,
            color: i === 0 ? TEXT.primary : TEXT.secondary,
            fontWeight: i === 0 ? 600 : 400, verticalAlign: "top",
          }}>
            {c}
          </td>
        ))}
      </tr>
    );
  }

  function NavRow({ label, href, linkText, external }) {
    const El = external ? "a" : Link;
    const extra = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <tr style={{ borderBottom: `1px solid ${BORDER.default}` }}>
        <td style={{ padding: "10px 14px", fontSize: 13, color: TEXT.secondary }}>{label}</td>
        <td style={{ padding: "10px 14px", fontSize: 13 }}>
          <El href={href} {...extra} style={{ color: SPECTRUM.cobalt, textDecoration: "none" }}>{linkText}</El>
        </td>
      </tr>
    );
  }

  const thStyle = {
    padding: "10px 14px", fontSize: 12, fontWeight: 600,
    color: TEXT.tertiary, textTransform: "uppercase",
    letterSpacing: "0.05em", textAlign: "left",
    borderBottom: `2px solid ${BORDER.default}`,
  };
  const narrowThStyle = {
    padding: "8px 10px", fontSize: 11, fontWeight: 600,
    color: TEXT.tertiary, textTransform: "uppercase",
    letterSpacing: "0.05em", textAlign: "left",
    borderBottom: `2px solid ${BORDER.default}`,
  };
  const navThStyle = { ...thStyle };
  const tableWrapStyle = {
    overflowX: "auto", marginBottom: 24,
    border: `1px solid ${BORDER.default}`, borderRadius: 8,
  };

  /* ── data ──────────────────────────────────────────── */

  const tocItems = [
    ["#framework-position", "Framework Position"],
    ["#two-systems", "The Two Information Systems"],
    ["#why-insight-fails", "Why Insight Alone Doesn't Change Behavior"],
    ["#state-dependent-behavior", "State-Dependent Behavior"],
    ["#one-mechanism", "One Mechanism, Twelve Angles"],
    ["#accountability", "Accountability Without Demonization"],
    ["#gradient-matched-intervention", "Gradient-Matched Intervention"],
    ["#design-implication", "The Design Implication"],
    ["#complete-architecture", "The Complete Architecture"],
    ["#research-foundations", "Research Foundations"],
    ["#where-to-go-next", "Where to Go Next"],
  ];

  const faqItems = [
    {
      q: "Why doesn't understanding your patterns automatically change them?",
      a: "Because two information systems are operating at different speeds. The emotional-somatic system detects cues in 10\u201350 milliseconds, matches patterns in 50\u2013200ms, and organizes a physiological response within 500ms. Conscious awareness arrives after 500ms. By the time insight is available, the body has already responded and the compass has already moved. The cognitive system narrates a process already underway \u2014 it does not direct it.",
    },
    {
      q: "What actually changes emotional patterns?",
      a: "Since the emotional-somatic system learns through experience, not explanation, pattern change requires: sustained safety (the nervous system recalibrates through accumulated safe experience), somatic awareness (reconnecting to the body's actual signals), co-regulation (another regulated nervous system provides a template), corrective experience (old patterns activated but different outcomes occur), titrated exposure (gradual supported contact with what has been avoided), and time and consistency (the emotional-somatic system updates slowly through repeated experience).",
    },
    {
      q: "If behavior is state-dependent, is anyone responsible for anything?",
      a: "Yes. Understanding the mechanism does not eliminate accountability \u2014 it eliminates demonization. A person in chronic Control producing real harm is still producing real harm, regardless of the nervous system state organizing the behavior. Causality and accountability are separable: understanding why someone became who they became does not excuse what it costs others. The same person with different developmental conditions would have produced a different configuration. This is not excuse \u2014 it is precision.",
    },
    {
      q: "What does 'state precedes capacity' mean?",
      a: "Every dimension of human experience \u2014 perception, cognition, empathy, time orientation, learning, repair capacity, relationship to truth, accountability \u2014 shifts with nervous system state. A person in Connection and the same person in chronic Control are operating with different available equipment, not making different choices with the same equipment. The state determines what capacities come online. This is why the same person can be generous and cruel, insightful and blind.",
    },
    {
      q: "How does F12 relate to the other eleven frameworks?",
      a: "F12 reveals that TEG-Blue is not twelve separate frameworks \u2014 it is one mechanism (state-dependent nervous system organization) described from twelve angles. Every concept in F1\u2013F11 is an expression of this architecture: false coherence is the cognitive system narrating regulation as truth, rules are regulation scaled to groups, bias is state-dependent perception, domination is protection at maximum escalation, repair is developing the capacity to shift state. The scale changes. The mechanism doesn't.",
    },
  ];

  /* ── render ────────────────────────────────────────── */

  return (
    <>
      <SiteHeader />

      <main style={{
        maxWidth: 900, margin: "0 auto",
        padding: `${SPACING.xl} ${SPACING.md} 80px`,
      }}>
        <article>

          {/* ── Hero ── */}
          <ResearcherHero
            badge="FRAMEWORK F12"
            title="Our Two Information Systems"
            subtitle="Why Insight Alone Doesn't Change Behavior and What Actually Does"
          />

          {/* ── Table of Contents ── */}
          <nav style={{
            margin: "32px 0", padding: 20,
            background: hexToRgba(SPECTRUM.cobalt, 0.06),
            borderRadius: 8, border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
          }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
              In this framework
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 32px" }}>
              {tocItems.map(([href, label]) => (
                <a key={href} href={href} style={{
                  fontSize: 13, color: SPECTRUM.cobalt,
                  textDecoration: "none", lineHeight: 1.6,
                }}>
                  {label}
                </a>
              ))}
            </div>
          </nav>

          {/* ── Core Claims ── */}
          <PropositionBox
            title="Core Propositions — F12"
            items={[
              "Two parallel information systems \u2014 emotional-somatic and cognitive-logical \u2014 run simultaneously at different speeds, with the emotional-somatic system arriving first",
              "Insight alone doesn't change behavior because the cognitive system narrates a process already underway \u2014 it does not direct it",
              "Patterns change through experience, not explanation: sustained safety, somatic awareness, co-regulation, corrective experience, titrated exposure, and time",
              "All human behavior is state-dependent nervous system organization \u2014 every framework (F1\u2013F11) describes the same mechanism from a different angle",
              "Understanding the mechanism does not eliminate accountability \u2014 it eliminates demonization. Causality and accountability are separable",
            ]}
          />

          {/* ════════════════════════════════════════════════
              FRAMEWORK POSITION
             ════════════════════════════════════════════════ */}

          <section id="framework-position">
            <h2 style={sectionHeadingStyle}>Framework Position</h2>

            <p style={proseStyle}>
              F1–F11 describe a complete system: how the compass works (F1), how awareness develops or fails (F2), how cognition compensates (F3), how substitutes scale from rules to worth to bias to domination (F4–F7), how repair happens individually and structurally (F8–F9), how patterns transmit and conditions change across generations (F10), and how paradox emerges when the full picture becomes visible (F11).
            </p>

            <KeyStatement>
              F12 steps back and asks: what is the architecture underneath all of this?
            </KeyStatement>

            <p style={proseStyle}>
              The answer: two parallel information systems — the emotional-somatic and the cognitive-logical — running simultaneously, inseparable, at different speeds. The emotional-somatic system arrives first. By the time cognition engages, the state has already shifted. The cognitive system does not direct the process — it narrates a process already underway.
            </p>

            <p style={proseStyle}>
              This is not a new mechanism. It is the mechanism that has been operating in every framework from the first page. F12 makes it explicit — and in doing so, answers the question that every person who reads F1–F11 will ask:
            </p>

            <KeyStatement>
              "I understand all of this now. Why can't I just change?"
            </KeyStatement>

            <h3 style={conceptHeadingStyle}>The Regulation Thread — F12's Position</h3>

            <p style={proseStyle}>
              F12 is not another link in the regulation thread. It is the explanation of <strong>why the thread works the way it does.</strong>
            </p>

            <p style={proseStyle}>
              Every substitution in F3–F7 happens because the cognitive system cannot override the emotional-somatic system in real time. Every repair in F8–F10 works because it addresses the emotional-somatic system through experience, not the cognitive system through explanation. Every paradox in F11 exists because two systems are producing different outputs simultaneously.
            </p>

            <KeyStatement>
              TEG-Blue is not twelve separate frameworks. F12 proposes that it is one mechanism — state-dependent nervous system organization — described from twelve angles.
            </KeyStatement>
          </section>

          {/* ════════════════════════════════════════════════
              PART 1 DIVIDER
             ════════════════════════════════════════════════ */}

          <div style={{
            margin: "48px 0 40px", padding: "14px 20px",
            background: hexToRgba(SPECTRUM.cobalt, 0.10),
            borderRadius: 8, border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
          }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: SPECTRUM.cobalt, margin: 0 }}>
              Part 1: The Architecture
            </p>
            <p style={{ fontSize: 13, color: TEXT.secondary, margin: "4px 0 0" }}>
              What the two systems are, how they interact, and why insight alone doesn't change behavior.
            </p>
          </div>

          {/* ════════════════════════════════════════════════
              C1 — THE TWO INFORMATION SYSTEMS
             ════════════════════════════════════════════════ */}

          <section id="two-systems">
            <h2 style={sectionHeadingStyle}>The Two Information Systems</h2>

            <p style={proseStyle}>
              Two parallel information systems running at the same time, impossible to isolate:
            </p>

            <h3 style={conceptHeadingStyle}>The Emotional-Somatic System</h3>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Dimension</th>
                    <th style={thStyle}>How It Operates</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Speed", "Milliseconds. Cue detection: 10\u201350ms. Pattern matching: 50\u2013200ms. Physiological response organized: 200\u2013500ms"]} />
                  <TableRow cells={["Processing", "Largely unconscious. Automatic. The body responding before the mind knows"]} />
                  <TableRow cells={["Domain", "Safety/threat detection. Relational cues. Values. Needs. Relevance. \"Does this matter? Is this safe? What should the body do?\""]} />
                  <TableRow cells={["Learning", "Through experience. Through repetition. Through what happens, not what is explained. Implicit memory. Slow to update, slow to forget"]} />
                  <TableRow cells={["Language", "Sensation. Emotion. Impulse. Gut feeling. The body's first language (F1)"]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>The Cognitive-Logical System</h3>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Dimension</th>
                    <th style={thStyle}>How It Operates</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Speed", "Seconds to minutes. Conscious awareness: 500ms+. Analysis and planning: seconds. Narrative construction: minutes to hours"]} />
                  <TableRow cells={["Processing", "Conscious. Deliberate. Effortful. The mind working on what the body has already responded to"]} />
                  <TableRow cells={["Domain", "Language. Abstraction. Reasoning. Planning. Narrative construction. \"What does this mean? What should I do? How do I explain this?\""]} />
                  <TableRow cells={["Learning", "Through explanation. Through insight. Through language. Explicit memory. Fast to update, fast to revise"]} />
                  <TableRow cells={["Language", "Words. Concepts. Stories. Arguments. Cognition's own medium"]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>The Critical Relationship</h3>

            <p style={proseStyle}>
              These systems are not competitors. They are <strong>interdependent partners</strong> in a sequence with a fixed order:
            </p>

            <p style={proseStyle}>
              1. Cue detected by the emotional-somatic system (10–50ms). 2. Pattern matched to past experience (50–200ms). 3. Physiological response organized — heart rate, muscle tension, hormonal shift (200–500ms). 4. Nervous system state shifts — the compass moves (within 500ms). 5. <strong>Conscious awareness arrives</strong> (500ms+). 6. Cognitive system engages — analysis, narrative, planning (seconds to minutes).
            </p>

            <p style={proseStyle}>
              By the time insight is available, steps 1–4 have already happened. The body has already responded. The compass has already moved. The state has already shifted.
            </p>

            <KeyStatement>
              The cognitive system doesn't direct this process — it narrates a process already underway.
            </KeyStatement>

            <h3 style={conceptHeadingStyle}>The Reframe</h3>

            <p style={proseStyle}>
              The emotional-somatic system is not an obstacle to rational behavior. It is not "System 1 making errors" that "System 2 corrects" (Kahneman's framing). It is the system that <strong>determines what rational behavior is available.</strong> State precedes capacity (F1). The emotional-somatic system sets the state. The cognitive system operates within whatever state has been set.
            </p>

            <KeyStatement>
              The emotional-somatic system is not the problem. It is the system that determines what solutions are available.
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Dual-process theory (Kahneman, Stanovich, Evans) describes two processing systems — fast/automatic and slow/deliberate. Affective neuroscience (Damasio, LeDoux) demonstrates that emotions precede and shape cognition through somatic markers. Polyvagal theory (Porges) maps how neuroception determines social capacity before conscious awareness.
              </p>
            </ExpandableSection>

            <ExpandableSection title="TEG-Blue Contribution" type="framework">
              <p style={proseStyle}>
                F12 reframes dual-process theory: the two systems are not error-prone versus corrective, but sequential partners where the first determines what the second can do. This adds the regulatory state dimension — what determines which thinking is available — and integrates the temporal sequence with F1's principle that state precedes capacity.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C2 — WHY INSIGHT ALONE DOESN'T CHANGE BEHAVIOR
             ════════════════════════════════════════════════ */}

          <section id="why-insight-fails">
            <h2 style={sectionHeadingStyle}>Why Insight Alone Doesn't Change Behavior</h2>

            <p style={proseStyle}>
              A person reads F1–F11. Sees their configuration. Names their false coherence. Identifies their chronic mode. Understands the mechanism. Locates their paradoxes. And still does the thing. Still enters chronic Control under stress. Still masks. Still transmits.
            </p>

            <p style={proseStyle}>
              This is not failure of understanding. It is not lack of willpower. It is <strong>architecture.</strong>
            </p>

            <h3 style={conceptHeadingStyle}>Three Mechanisms</h3>

            <p style={proseStyle}>
              <strong>The Timing Problem.</strong> By the time insight is available (seconds), the emotional-somatic system has already detected the cue (milliseconds), matched it to past patterns, organized a physiological response, and shifted the nervous system state. The insight arrives to find the compass already moved.
            </p>

            <p style={proseStyle}>
              <strong>The Domain Mismatch.</strong> The cognitive system can understand patterns retrospectively, create insight, plan future responses, and construct narratives about what happened. But it cannot interrupt patterns in real time, override a nervous system state, execute plans when the emotional system is activated, or change the underlying pattern through analysis. Expecting cognition to override the emotional-somatic system is like expecting a narrator to change the story by describing it differently.
            </p>

            <p style={proseStyle}>
              <strong>The Appropriate Limitation.</strong> This is not a design flaw. Cognition's limitation is appropriate — the emotional-somatic system needs to respond faster than cognition can process. In genuine threat, you need the body to act before the mind deliberates. The speed differential that prevents insight from overriding patterns in daily life is the same speed differential that saves lives in emergencies.
            </p>

            <h3 style={conceptHeadingStyle}>What Actually Changes Patterns</h3>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>What Changes Patterns</th>
                    <th style={narrowThStyle}>Why It Works</th>
                    <th style={narrowThStyle}>What Doesn't Work (and Why)</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={["Sustained safety", "The nervous system recalibrates through accumulated safe experience. The compass learns it can return", "Intellectual understanding of safety. The cognitive system can know \"this is safe\" while the emotional-somatic system continues detecting threat"]} />
                  <ThreeColRow cells={["Somatic awareness", "Reconnects the person to the body's signals \u2014 what is actually happening, not what the narrative says is happening", "Talking about the body. Describing sensations. The cognitive system can narrate embodiment without the person being embodied"]} />
                  <ThreeColRow cells={["Co-regulation", "Another regulated nervous system provides the template the person's system can borrow. Regulation learned through being regulated with (F2)", "Instruction in regulation techniques. The technique is cognitive. The learning is somatic"]} />
                  <ThreeColRow cells={["Corrective experience", "Experiences where the old pattern is activated but a different outcome occurs. The emotional-somatic system updates through new data", "Imagined scenarios. Cognitive rehearsal. The system updates from real experience, not simulated experience"]} />
                  <ThreeColRow cells={["Titrated exposure", "Gradual, supported contact with what has been avoided. The system learns at its own pace that the avoided thing is survivable", "Flooding. Forced confrontation. Premature exposure that exceeds the system's current capacity and reinforces the pattern"]} />
                  <ThreeColRow cells={["Time and consistency", "The emotional-somatic system updates slowly. It needs repeated experience, not single events", "Breakthrough moments. Single insights. One good conversation. These can be meaningful starting points but do not constitute the accumulated experience the system needs"]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>The Willpower Assumption</h3>

            <p style={proseStyle}>
              The belief that understanding plus willpower equals change is one of the most damaging false coherences in contemporary culture. It locates failure in the individual ("you know what to do, why aren't you doing it?") when the architecture makes that expectation impossible.
            </p>

            <KeyStatement>
              You cannot out-think a regulatory response. You can only create conditions safe enough for the system to let truth in.
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Trauma research (van der Kolk, Levine, Ogden) demonstrates that the body keeps the score — somatic processing is required for change. Interpersonal neurobiology (Siegel, Schore) maps how co-regulation and relational regulation shape development. Broaden-and-build theory (Fredrickson) shows how positive states broaden available responses while threat states narrow them.
              </p>
            </ExpandableSection>

            <ExpandableSection title="TEG-Blue Contribution" type="framework">
              <p style={proseStyle}>
                F12 organizes these findings into a single architecture: the timing problem, the domain mismatch, and the appropriate limitation explain why insight-based approaches alone consistently underperform experience-based approaches. This is not an argument against insight — it is an argument for matching the intervention to the system it needs to reach.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C3 — STATE-DEPENDENT BEHAVIOR
             ════════════════════════════════════════════════ */}

          <section id="state-dependent-behavior">
            <h2 style={sectionHeadingStyle}>State-Dependent Behavior</h2>

            <h3 style={conceptHeadingStyle}>The Unifying Mechanism</h3>

            <p style={proseStyle}>
              F12 reveals that every framework in TEG-Blue describes the same thing: <strong>behavior organized by nervous system state.</strong>
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>What Changes by State</th>
                    <th style={narrowThStyle}>Connection</th>
                    <th style={narrowThStyle}>Protection</th>
                    <th style={narrowThStyle}>Control</th>
                    <th style={narrowThStyle}>Domination</th>
                  </tr>
                </thead>
                <tbody>
                  <FiveColRow cells={["Perception", "Broad \u2014 context, nuance, complexity available", "Narrow \u2014 threat-focused, binary", "Strategic \u2014 selective, management-oriented", "Tunnel \u2014 power-focused, elimination-oriented"]} />
                  <FiveColRow cells={["Cognition", "Flexible \u2014 revision possible, ambiguity tolerable", "Simplified \u2014 fast decisions, either/or", "Sophisticated but rigid \u2014 complex analysis serving predetermined conclusions", "Weaponized \u2014 intelligence serving domination"]} />
                  <FiveColRow cells={["Empathy", "Full \u2014 all three awareness capacities serving understanding", "Filtered \u2014 narrows to survival-relevant data", "Selective \u2014 RE sharp, ER collapsed, serves strategy", "Absent \u2014 RE redirected to exploitation, ER offline, SEA absent"]} />
                  <FiveColRow cells={["Time orientation", "Extended \u2014 past and future available", "Collapsed \u2014 only the immediate", "Controlled \u2014 future managed, past rewritten", "Irrelevant \u2014 only the current power equation"]} />
                  <FiveColRow cells={["Learning", "Open \u2014 the system can afford to experiment", "Closed \u2014 the system cannot afford to be wrong", "Conditional \u2014 learns what serves the strategy", "Blocked \u2014 nothing can enter that threatens the structure"]} />
                  <FiveColRow cells={["Repair capacity", "Available \u2014 vulnerability safe enough", "Dangerous \u2014 vulnerability is a cost", "Threatening \u2014 repair requires admitting the strategy failed", "Annihilating \u2014 vulnerability equals destruction"]} />
                  <FiveColRow cells={["Relationship to truth", "Receivable \u2014 truth can be metabolized", "Threatening \u2014 truth competes with survival", "Manageable \u2014 truth is sorted into useful/dangerous", "Irrelevant \u2014 truth is whatever serves power"]} />
                  <FiveColRow cells={["Accountability", "Possible \u2014 the person can see impact without collapsing", "Difficult \u2014 accountability feels like attack", "Performative \u2014 accountability becomes narrative management", "Rejected \u2014 accountability equals loss of control"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              Every dimension of human experience shifts with state. Not slightly — fundamentally. A person in Connection and the same person in chronic Control are operating with different perception, different cognition, different empathy, different relationship to truth. Not different "choices" — different <strong>available equipment.</strong>
            </p>

            <KeyStatement>
              You are not dealing with a person. You are dealing with a person in a state. Change the state, and the person who shows up is different.
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Polyvagal theory (Porges) maps how autonomic state determines social, cognitive, and emotional capacity. Window of tolerance research (Siegel) shows how arousal level constrains processing. State-dependent memory and learning research demonstrates that what is learned in one state is best recalled in that state.
              </p>
            </ExpandableSection>

            <ExpandableSection title="TEG-Blue Contribution" type="framework">
              <p style={proseStyle}>
                F12 extends state-dependence from individual dimensions (perception, memory) to all dimensions simultaneously, showing that state organizes the complete package — perception, cognition, empathy, time orientation, learning, repair capacity, relationship to truth, and accountability all shift together as a coordinated state-dependent response.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              PART 2 DIVIDER
             ════════════════════════════════════════════════ */}

          <div style={{
            margin: "48px 0 40px", padding: "14px 20px",
            background: hexToRgba(SPECTRUM.cobalt, 0.10),
            borderRadius: 8, border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
          }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: SPECTRUM.cobalt, margin: 0 }}>
              Part 2: The Integration
            </p>
            <p style={{ fontSize: 13, color: TEXT.secondary, margin: "4px 0 0" }}>
              How F12 unifies TEG-Blue, what it means for intervention, and the principle that holds the entire system together.
            </p>
          </div>

          {/* ════════════════════════════════════════════════
              C4 — ONE MECHANISM, TWELVE ANGLES
             ════════════════════════════════════════════════ */}

          <section id="one-mechanism">
            <h2 style={sectionHeadingStyle}>One Mechanism, Twelve Angles</h2>

            <h3 style={conceptHeadingStyle}>TEG-Blue Is Not Twelve Frameworks</h3>

            <p style={proseStyle}>
              F12 proposes that it is one mechanism described from twelve angles:
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Framework</th>
                    <th style={thStyle}>Angle on State-Dependent Organization</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["F1", "The instrument \u2014 how state organizes through the compass and gradient"]} />
                  <TableRow cells={["F2", "The calibration \u2014 how state-dependent awareness develops (or doesn't) through relational conditions"]} />
                  <TableRow cells={["F3", "The cognitive layer \u2014 how cognition maintains whatever state the system is in"]} />
                  <TableRow cells={["F4", "The collective expression \u2014 how state-dependent regulation becomes shared rules"]} />
                  <TableRow cells={["F5", "The sorting mechanism \u2014 how state-dependent rules become worth hierarchies"]} />
                  <TableRow cells={["F6", "The perceptual filter \u2014 how state-dependent worth becomes perception itself"]} />
                  <TableRow cells={["F7", "The escalation pathway \u2014 how state-dependent protection becomes domination"]} />
                  <TableRow cells={["F8", "The repair \u2014 how state-dependent capacities can be developed and how difference strengthens"]} />
                  <TableRow cells={["F9", "The structural dimension \u2014 how state-dependent mismatch becomes architectural"]} />
                  <TableRow cells={["F10", "The temporal dimension \u2014 how state-dependent patterns transmit and how repair transmits differently"]} />
                  <TableRow cells={["F11", "The complexity \u2014 how state-dependent multi-rationality generates paradox"]} />
                  <TableRow cells={["F12", "The architecture \u2014 why it all works this way"]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>Internal Coherence</h3>

            <p style={proseStyle}>
              Every concept in F1–F11 is an expression of the same architecture:
            </p>

            <p style={proseStyle}>
              <strong>False coherence</strong> (F3) = the cognitive system narrating state-dependent regulation as truth. <strong>Rules</strong> (F4) = state-dependent regulation scaled to groups. <strong>Bias</strong> (F6) = state-dependent perception maintained because it serves regulation. <strong>Domination</strong> (F7) = state-dependent protection at maximum escalation. <strong>Repair</strong> (F8) = developing the capacity to shift state. <strong>Masking</strong> (F8–F9) = state-dependent performance maintained because authenticity triggers threat. <strong>Generational transmission</strong> (F10) = state-dependent patterns absorbed by the next nervous system. <strong>Paradox</strong> (F11) = the visible result of two information systems producing different outputs simultaneously.
            </p>

            <KeyStatement>
              Every framework is the same architecture. The scale changes. The mechanism doesn't.
            </KeyStatement>

            <ExpandableSection title="TEG-Blue Contribution" type="framework">
              <p style={proseStyle}>
                The twelve-angle structure demonstrates internal coherence: every framework is a specific application of state-dependent nervous system organization. This makes the system testable as a unified architecture rather than as twelve independent claims — if state-dependent organization is the mechanism, then each framework's predictions should be consistent with the others.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C5 — ACCOUNTABILITY WITHOUT DEMONIZATION
             ════════════════════════════════════════════════ */}

          <section id="accountability">
            <h2 style={sectionHeadingStyle}>Accountability Without Demonization</h2>

            <p style={proseStyle}>
              Understanding state-dependent behavior raises an immediate question: if behavior is organized by nervous system state, is anyone responsible for anything?
            </p>

            <p style={proseStyle}>
              F12 holds both truths (F11's holding capacity applied to the hardest question):
            </p>

            <p style={proseStyle}>
              <strong>Understanding the mechanism does not eliminate accountability.</strong> The person in chronic Control who manages and diminishes others is producing real harm — regardless of the nervous system state that organizes the behavior. The person in chronic Domination who subjugates others is producing real harm — regardless of the developmental history that produced the configuration. The system that excludes neurodivergent people (F9) is producing real harm — regardless of the regulatory logic that drives conformity.
            </p>

            <p style={proseStyle}>
              <strong>Understanding the mechanism does eliminate demonization.</strong> The person is not evil. They are in a state. The state produces the behavior. The behavior produces harm. All of these are true simultaneously. Causality and accountability are separable (F7). Understanding why someone became who they became does not excuse what it costs others.
            </p>

            <h3 style={conceptHeadingStyle}>The Five Transformations</h3>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>From</th>
                    <th style={thStyle}>To</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Judgment", "Discernment \u2014 \"This person is in a state that produces harmful behavior. The harm is real. The state is identifiable. The intervention can be matched\""]} />
                  <TableRow cells={["Blame", "Mechanism \u2014 \"Their nervous system is organized in a way that produces this. Choice is available in some states and not in others\""]} />
                  <TableRow cells={["Punishment", "Containment + conditions \u2014 \"The harm must be stopped AND the conditions that would enable different behavior can be identified\""]} />
                  <TableRow cells={["Despair", "Architecture \u2014 \"People are state-dependent. Change the state, change what's available. Not always possible, but identifiable\""]} />
                  <TableRow cells={["Moral character", "Configuration \u2014 \"They have a configuration that produces these patterns in these conditions. Different conditions, different patterns\""]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>The Limit</h3>

            <p style={proseStyle}>
              Accountability without demonization does not mean infinite patience or unlimited compassion. F7 establishes the limit: at the domination end of the gradient, protection of others is primary. Understanding the mechanism does not require remaining in its path.
            </p>

            <KeyStatement>
              I understand the architecture. I see how you got here. And I will not remain where your state causes harm.
            </KeyStatement>

            <ExpandableSection title="Research Traditions" type="framework">
              <p style={proseStyle}>
                Restorative justice literature separates understanding causes from excusing harm. Situational psychology (Milgram, Zimbardo, Ross) demonstrates that situations predict behavior more than character — but situational understanding does not eliminate responsibility. Compassion-focused therapy (Gilbert) works with understanding mechanisms while maintaining accountability.
              </p>
            </ExpandableSection>

            <ExpandableSection title="TEG-Blue Contribution" type="framework">
              <p style={proseStyle}>
                F12 grounds the accountability-understanding distinction in the two-system architecture: understanding operates in the cognitive system, behavior operates in the emotional-somatic system, and both are real simultaneously. This makes "I understand AND I hold accountable" not a moral position but an architectural description.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C6 — GRADIENT-MATCHED INTERVENTION
             ════════════════════════════════════════════════ */}

          <section id="gradient-matched-intervention">
            <h2 style={sectionHeadingStyle}>Gradient-Matched Intervention</h2>

            <p style={proseStyle}>
              If state determines capacity, then intervention must match the state. Offering Connection-mode tools to a person in chronic Protection does not work — not because the tools are wrong, but because they require capacities the current state does not provide.
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>Compass Position</th>
                    <th style={narrowThStyle}>What Works</th>
                    <th style={narrowThStyle}>What Doesn't Work (and Why)</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={["Connection", "Direct engagement with complexity. Paradox work (F11). Deepening awareness. Integration of all three capacities", "Being treated as fragile. Simplification. Approaches that underestimate available capacity"]} />
                  <ThreeColRow cells={["Protection", "Safety first. Co-regulation. Somatic work. Corrective experience. Building trust before building insight", "Insight-based approaches. Cognitive challenge. \"Think about why you do this.\" These require Connection-mode capacity the person doesn't currently have"]} />
                  <ThreeColRow cells={["Control", "External accountability. Structured frameworks. Showing that the control strategy has costs the person hasn't calculated. Working with the cognitive system as entry point while building somatic and relational access", "Empathy-based appeals (\"think about how they feel\"). These are processed through the control strategy and managed, not felt. Also: admiration of the person's narrative"]} />
                  <ThreeColRow cells={["Domination", "Containment. Protection of others. Clear consequences. External structure. Sustained pressure without escalation", "Vulnerability-based approaches. Trust-building. \"Let me help you feel.\" Vulnerability at this compass position feels like annihilation, not healing"]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>Pattern-Mismatch as Clinical Error</h3>

            <p style={proseStyle}>
              When the intervention does not match the state, three things happen: the intervention fails (the person cannot access what the intervention requires), the failure is attributed to the person ("resistant," "not ready," "not motivated"), and the person's false coherence is reinforced ("See, nothing works. This is just who I am").
            </p>

            <p style={proseStyle}>
              The error is in the matching, not in the person. Identifying compass position before selecting intervention is not optional — it is the precondition for effectiveness.
            </p>

            <ExpandableSection title="TEG-Blue Contribution" type="framework">
              <p style={proseStyle}>
                Gradient-matched intervention provides a framework for selecting approaches based on the state they need to reach, not the state the clinician or system prefers. This addresses the systematic pattern-mismatch error in therapeutic and institutional settings where one modality is applied regardless of compass position.
              </p>
            </ExpandableSection>
          </section>

          {/* ════════════════════════════════════════════════
              C7 — THE DESIGN IMPLICATION
             ════════════════════════════════════════════════ */}

          <section id="design-implication">
            <h2 style={sectionHeadingStyle}>The Design Implication</h2>

            <p style={proseStyle}>
              If behavior is state-dependent, then systems designed to change behavior must address state, not just information.
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Scale</th>
                    <th style={thStyle}>Implication</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Individual", "Therapy that addresses the emotional-somatic system, not just the cognitive system. Somatic work, co-regulation, corrective experience, titrated exposure \u2014 not insight alone"]} />
                  <TableRow cells={["Relational", "Relationships assessed by what state they produce, not just what they provide. A relationship that chronically activates Protection cannot also be the container for healing"]} />
                  <TableRow cells={["Institutional", "Environments designed for regulation first, performance second (F9). Policies that create safety produce different behavior than policies that demand compliance"]} />
                  <TableRow cells={["Systemic", "\"Restore safety first, then expect capacity\" (F1) applied at every scale. Systems that operate through threat produce threat-state behavior. Systems that provide safety produce Connection-state capacity"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              Every system — from a family to an institution to a culture — is producing the behavior it is designed to produce. Not the behavior it intends to produce. Not the behavior it demands. The behavior that the state it creates makes available.
            </p>

            <KeyStatement>
              The system gets the behavior the system creates conditions for. If you don't like the behavior, look at the conditions.
            </KeyStatement>
          </section>

          {/* ════════════════════════════════════════════════
              C8 — THE COMPLETE ARCHITECTURE
             ════════════════════════════════════════════════ */}

          <section id="complete-architecture">
            <h2 style={sectionHeadingStyle}>The Complete Architecture</h2>

            <p style={proseStyle}>
              One mechanism. Twelve angles. Every scale from a single nervous system to a civilization.
            </p>

            <p style={proseStyle}>
              <strong>The mechanism:</strong> State-dependent nervous system organization responding to perceived safety.
            </p>

            <h3 style={conceptHeadingStyle}>What It Explains</h3>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Framework</th>
                    <th style={thStyle}>What It Explains</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["F1", "Why emotions are information, not disruption"]} />
                  <TableRow cells={["F2", "Why awareness develops through conditions, not instruction"]} />
                  <TableRow cells={["F3", "Why cognition replaces what it can't regulate"]} />
                  <TableRow cells={["F4\u2013F7", "Why rules, hierarchies, bias, and domination exist"]} />
                  <TableRow cells={["F8", "Why repair requires experience, not explanation"]} />
                  <TableRow cells={["F9", "Why inclusion requires design, not accommodation"]} />
                  <TableRow cells={["F10", "Why patterns transmit through embodiment, not intention"]} />
                  <TableRow cells={["F11", "Why contradictions are logical, not irrational"]} />
                  <TableRow cells={["F12", "Why insight alone doesn't produce change"]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>What It Prescribes</h3>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Principle</th>
                    <th style={thStyle}>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["Restore safety first, then expect capacity \u2014 at every scale", "F1"]} />
                  <TableRow cells={["Develop the capacities that didn't have conditions to form", "F8"]} />
                  <TableRow cells={["Design environments for the configurations that will use them", "F9"]} />
                  <TableRow cells={["What the adult repairs, the child doesn't need to", "F10"]} />
                  <TableRow cells={["Hold paradox rather than resolve it", "F11"]} />
                  <TableRow cells={["Match the intervention to the state", "F12"]} />
                </tbody>
              </table>
            </div>

            <h3 style={conceptHeadingStyle}>The Sentence</h3>

            <KeyStatement>
              All human behavior is state-dependent nervous system organization responding to perceived safety — and understanding this changes everything about how we treat ourselves, each other, and the systems we build.
            </KeyStatement>
          </section>

          {/* ════════════════════════════════════════════════
              KEY FORMULATIONS
             ════════════════════════════════════════════════ */}

          <section id="key-formulations">
            <h2 style={sectionHeadingStyle}>Key Formulations — F12</h2>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Formulation</th>
                    <th style={thStyle}>Concept</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow cells={["\"The cognitive system doesn't direct this process \u2014 it narrates a process already underway.\"", "Two Information Systems (C1)"]} />
                  <TableRow cells={["\"The emotional-somatic system is not the problem. It is the system that determines what solutions are available.\"", "Two Information Systems (C1)"]} />
                  <TableRow cells={["\"You cannot out-think a regulatory response. You can only create conditions safe enough for the system to let truth in.\"", "Why Insight Fails (C2)"]} />
                  <TableRow cells={["\"You are not dealing with a person. You are dealing with a person in a state. Change the state, and the person who shows up is different.\"", "State-Dependent Behavior (C3)"]} />
                  <TableRow cells={["\"Every framework is the same architecture. The scale changes. The mechanism doesn't.\"", "One Mechanism (C4)"]} />
                  <TableRow cells={["\"I understand the architecture. I see how you got here. And I will not remain where your state causes harm.\"", "Accountability (C5)"]} />
                  <TableRow cells={["\"The system gets the behavior the system creates conditions for. If you don't like the behavior, look at the conditions.\"", "Design Implication (C7)"]} />
                  <TableRow cells={["\"All human behavior is state-dependent nervous system organization responding to perceived safety \u2014 and understanding this changes everything.\"", "Complete Architecture (C8)"]} />
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              RESEARCH FOUNDATIONS
             ════════════════════════════════════════════════ */}

          <section id="research-foundations">
            <h2 style={sectionHeadingStyle}>Research Foundations</h2>

            <p style={{ ...proseStyle, marginBottom: 8 }}>
              F12 integrates traditions that independently describe the two-system architecture and state-dependent organization:
            </p>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={narrowThStyle}>Tradition</th>
                    <th style={narrowThStyle}>Key Researchers</th>
                    <th style={narrowThStyle}>F12 Integration</th>
                  </tr>
                </thead>
                <tbody>
                  <ThreeColRow cells={["Dual-Process Theory", "Kahneman, Stanovich, Evans", "C1 \u2014 reframed: not error-prone vs. corrective, but sequential partners where the first determines what the second can do"]} />
                  <ThreeColRow cells={["Affective Neuroscience", "Damasio, LeDoux", "C1 \u2014 temporal primacy of emotion; somatic markers as the body's first language"]} />
                  <ThreeColRow cells={["Polyvagal Theory", "Porges", "C3 \u2014 neuroception determines social capacity; autonomic state determines available behavior across all dimensions"]} />
                  <ThreeColRow cells={["Trauma Research", "van der Kolk, Levine, Ogden", "C2 \u2014 why insight alone doesn't work; what actually changes patterns through somatic processing"]} />
                  <ThreeColRow cells={["Interpersonal Neurobiology", "Siegel, Schore", "C2 \u2014 integration, co-regulation, and relational regulation as mechanisms of change"]} />
                  <ThreeColRow cells={["Broaden-and-Build", "Fredrickson", "C3 \u2014 Connection mode broadens available responses; threat modes narrow them"]} />
                  <ThreeColRow cells={["Situational Psychology", "Milgram, Zimbardo, Ross", "C7 \u2014 the system gets the behavior the system creates conditions for"]} />
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              <strong>F12's contribution:</strong> adding the regulatory state dimension to dual-process theory (what determines which thinking is available), integrating all twelve frameworks as expressions of one mechanism, and showing that the architecture itself — two systems, different speeds, state-dependent capacity — explains why every other framework works the way it does.
            </p>
          </section>

          {/* ─── CONNECTED RESEARCH ──────────────────────── */}
          <ConnectedResearch slug="f12-two-information-systems" type="framework" />

          {/* ════════════════════════════════════════════════
              WHERE TO GO NEXT
             ════════════════════════════════════════════════ */}

          <section id="where-to-go-next">
            <h2 style={sectionHeadingStyle}>Where to Go Next</h2>

            <div style={tableWrapStyle}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={navThStyle}>If you want to…</th>
                    <th style={navThStyle}>Go here</th>
                  </tr>
                </thead>
                <tbody>
                  <NavRow label="Read the emotional paradoxes framework (F11)" href="/framework/f11-emotional-paradoxes" linkText="The Emotional Logic Behind Paradoxes \u2192" />
                  <NavRow label="Read the generational bridges framework (F10)" href="/framework/f10-generational-bridges" linkText="Rebuilding Generational Bridges \u2192" />
                  <NavRow label="Read the foundational framework (F1)" href="/framework/f1-emotional-gradient" linkText="Emotions as Biological Information \u2192" />
                  <NavRow label="Read the healing framework (F8)" href="/framework/f8-repairing-awareness" linkText="Repairing Awareness \u2192" />
                  <NavRow label="Read the domination framework (F7)" href="/framework/f7-domination-regulates" linkText="Domination Regulates \u2192" />
                  <NavRow label="See the physiological model — the body's cascade that cognition cannot close" href="/model/m3-the-open-cycle" linkText="The Open Cycle (M3) \u2192" />
                  <NavRow label="Explore all 12 frameworks" href="/frameworks-map" linkText="12 Frameworks \u2192" />
                  <NavRow label="Review the source theories" href="/scientific-foundations" linkText="Scientific Foundations \u2192" />
                  <NavRow label="Look up key terms" href="/glossary" linkText="Glossary \u2192" />
                  <NavRow label="See published research" href="/publications" linkText="Publications \u2192" />
                  <NavRow label="Experience the tools" href="https://teg-blue.com/emotional-tools" linkText="Emotional Tools (teg-blue.com) \u2192" external />
                </tbody>
              </table>
            </div>
          </section>
        </article>

      </main>

      <SiteFooter />

      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            headline: "Our Two Information Systems \u2014 Why Insight Alone Doesn't Change Behavior and What Actually Does",
            description: metadata.description,
            author: {
              "@type": "Person",
              name: "Anna Paretas-Artacho",
              url: "https://teg-blue.com/about-the-author",
            },
            publisher: {
              "@type": "Organization",
              name: "TEG-Blue Research",
              url: "https://teg-blue.org",
            },
            url: "https://teg-blue.org/framework/f12-two-information-systems",
            datePublished: "2026-03-04",
            dateModified: "2026-03-04",
            isPartOf: {
              "@type": "CreativeWork",
              name: "TEG-Blue 12-Framework Architecture",
              url: "https://teg-blue.org/frameworks-map",
            },
            keywords: metadata.keywords,
            license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "https://teg-blue.org" },
              { name: "12 Frameworks", url: "https://teg-blue.org/frameworks-map" },
              { name: "F12 \u2014 Our Two Information Systems", url: "https://teg-blue.org/framework/f12-two-information-systems" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFAQJsonLd(
              faqItems.map((f) => ({ question: f.q, answer: f.a }))
            )
          ),
        }}
      />
    </>
  );
}
