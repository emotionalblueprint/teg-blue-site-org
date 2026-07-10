import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, contrastColor, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import PageLayout from "@/src/components/PageLayout";
import ResearcherHero from "@/src/components/ResearcherHero";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What research does TEG-Blue draw from?",
    answer: "TEG-Blue draws from research on autonomic state, stress, emotion, perception, interoception, attention, attachment, trauma, social safety, repair, and chronic load.",
  },
  {
    question: "Does any one field already say TEG-Blue?",
    answer: "No. Each field remains itself. TEG-Blue gathers supported parts from different fields and places them into one visual map.",
  },
  {
    question: "How should citations be used?",
    answer: "A citation should connect field, finding, function, and place in the map. It should support a specific part, not the whole Gradient at once.",
  },
  {
    question: "Is TEG-Blue diagnostic?",
    answer: "No. The Nervous System Gradient is educational and reflective. It should not be used to diagnose, treat, or claim certainty about another person's true internal state.",
  },
];

const GROUNDING_DIMENSIONS = [
  {
    label: "State",
    title: "Autonomic state",
    body: "Research helps ground rest, social engagement, mobilisation, inhibition, shutdown, and return.",
    color: SPECTRUM.azure,
  },
  {
    label: "Safety",
    title: "Safety and threat read",
    body: "Research helps explain why a body may read a situation as safe, uncertain, threatening, blocked, or too much.",
    color: SPECTRUM.blue,
  },
  {
    label: "Attention",
    title: "Perception and attention",
    body: "Research helps ground why some cues become louder and other cues drop away under stress or uncertainty.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Thinking",
    title: "Cognition under load",
    body: "Research helps explain changes in planning, working memory, reflection, inhibition, and threat prediction.",
    color: SPECTRUM.indigo,
  },
  {
    label: "Body",
    title: "Interoception and body signal",
    body: "Research helps ground how body signals become clear, noisy, muted, overwhelming, or hard to name.",
    color: SPECTRUM.azure,
  },
  {
    label: "Tempo",
    title: "Activation, time, and urgency",
    body: "Research helps explain mobilisation, recovery cost, rush, time compression, freeze, and collapse.",
    color: SPECTRUM.blue,
  },
  {
    label: "Emotion",
    title: "Emotion and action readiness",
    body: "Research helps ground emotion as embodied information about need, threat, boundary, value, action, and repair.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Relation",
    title: "Empathy, perspective, and repair",
    body: "Research helps explain when we can keep another person's experience in view and when repair can or cannot take hold.",
    color: SPECTRUM.indigo,
  },
  {
    label: "Pattern",
    title: "Chronic organization",
    body: "Research helps ground how repeated stress, learning, and prediction can turn a response into a lasting pattern.",
    color: SPECTRUM.slate,
  },
];

const MODE_AUDIT_STEPS = [
  {
    title: "Name what TEG-Blue describes",
    body: "Use plain terms: baseline, connection, safety checking, protection, management, power mobilisation, or shutdown.",
  },
  {
    title: "Separate the part being grounded",
    body: "Do not ground a whole mode at once. Check state, perception, cognition, body activation, emotion, empathy, action, repair, and chronic load separately.",
  },
  {
    title: "Use the right field",
    body: "Stress physiology may support mobilisation. Attachment research may support proximity. Emotion science may support salience and action readiness.",
  },
  {
    title: "Say what is not being claimed",
    body: "A source should not be used to prove a whole person, hidden motive, diagnosis, or the whole Gradient.",
  },
];

const MODE_GROUPS = [
  {
    title: "Acute modes",
    body: "Acute means the pattern is active now. The body is organizing around current safety, uncertainty, threat, action, or shutdown.",
    modes: [
      "X - Baseline / physiological baseline",
      "A - Connection / belonging",
      "A↔B - Safety checking",
      "B - Protection / defence",
      "C - Strategic management",
      "D - Power mobilisation",
      "Z - Shutdown",
    ],
    color: SPECTRUM.azure,
  },
  {
    title: "Chronic configurations (repeated patterns)",
    body: "Chronic means the pattern has repeated or stayed active long enough to become a familiar way the system reads the world.",
    modes: [
      "X - Chronic elevated baseline",
      "A - No safety access / approximated bonding",
      "A↔B - Chronic safety checking",
      "B - Chronic protection / defence",
      "C - Chronic strategy and management",
      "D - Chronic power and dominance",
      "Z - Persistent shutdown / collapse",
    ],
    color: SPECTRUM.indigo,
  },
];

const RESEARCH_SEQUENCE = [
  {
    label: "Field",
    title: "Which research area is speaking?",
    body: "Biology, physiology, psychology, attachment research, trauma research, social psychology, and other fields each keep their own methods and limits.",
    color: SPECTRUM.azure,
  },
  {
    label: "Finding",
    title: "What does that field help establish?",
    body: "The source should support a mechanism, condition, capacity, or pattern, not be stretched into a claim about all of TEG-Blue.",
    color: SPECTRUM.blue,
  },
  {
    label: "Function",
    title: "What does the finding help clarify?",
    body: "A finding may clarify arousal, shutdown, attention, relational expectation, rupture, chronic load, or repair capacity.",
    color: SPECTRUM.cobalt,
  },
  {
    label: "Position",
    title: "Where does it sit in the map?",
    body: "Name the part of the map the source supports: safety, threat, control, shutdown, regulation, repair, or a related capacity.",
    color: SPECTRUM.indigo,
  },
];

const RESEARCH_AREAS = [
  {
    title: "Biology and physiology",
    role: "Body state on the map.",
    body: "These fields support discussion of survival, adaptation, arousal, energy use, shutdown, regulation, and repair capacity.",
    boundary: "They do not make visible behaviour a biological measurement or prove someone's inner state from outside.",
    color: SPECTRUM.azure,
  },
  {
    title: "Autonomic neuroscience and stress physiology",
    role: "State change and chronic load.",
    body: "These areas support discussion of mobilisation, inhibition, arousal flexibility, stress load, shutdown, and return.",
    boundary: "Specific mechanisms, markers, or pathways need source trace before public use.",
    color: SPECTRUM.blue,
  },
  {
    title: "Affective neuroscience and emotion science",
    role: "Connects emotion to signal, salience, and action readiness.",
    body: "These areas support the view that emotions can carry information about need, threat, boundary, value, action readiness, and relational meaning.",
    boundary: "No single emotion theory should be treated as the source of the whole Blueprint.",
    color: SPECTRUM.cobalt,
  },
  {
    title: "Psychology",
    role: "Cognition, behaviour, and learning.",
    body: "Psychology supports discussion of cognition, behaviour, appraisal, learning, development, social perception, personality patterns, and relationship patterns.",
    boundary: "TEG-Blue should not be presented as a psychology model, therapy model, diagnosis, or clinical assessment.",
    color: SPECTRUM.indigo,
  },
  {
    title: "Attachment, trauma, and developmental research",
    role: "Supports relational safety, rupture, protection, and repeated patterns.",
    body: "These fields help explain proximity, separation, expectation, chronic threat adaptation, dissociation, hypervigilance, defensive reorganization, and repair limits.",
    boundary: "Do not use TEG-Blue to diagnose trauma or make deterministic claims about childhood and adult patterns.",
    color: SPECTRUM.blue,
  },
  {
    title: "Social, cultural, and contemplative fields",
    role: "Context, power, attention, and culture.",
    body: "Social psychology, sociology, anthropology, evolutionary research, and contemplative traditions help clarify social patterning, belonging, status, care, attention, and awareness.",
    boundary: "Group and cultural claims need careful wording and a more specific page.",
    color: SPECTRUM.slate,
  },
];

const CLAIM_CARE = [
  {
    title: "A field supports a part",
    body: "A research area may help explain one mechanism, condition, capacity, or pattern. It should not be used to claim the whole framework is already established.",
  },
  {
    title: "The map connects the parts",
    body: "TEG-Blue places source-supported parts together. That connection is the contribution.",
  },
  {
    title: "Named theories need exact wording",
    body: "When a page names a theory, construct, mechanism, or clinical field, the claim should say exactly what that source can and cannot support.",
  },
  {
    title: "Polyvagal language stays modest",
    body: "It can help name social engagement, mobilisation, and shutdown. It is one language bridge, not the whole scientific basis.",
  },
  {
    title: "Impact remains visible",
    body: "Mechanism never erases effect. A responsible read still asks what happened, what impact occurred, and what response fits.",
  },
];

const CORE_REFERENCES = [
  {
    field: "Stress and allostasis",
    citation: "McEwen, B. S. (1998). Protective and damaging effects of stress mediators. New England Journal of Medicine.",
    href: "https://doi.org/10.1056/NEJM199801153380307",
    supports: "Chronic stress load, adaptation, recovery cost, and the difference between a useful short-term response and a costly repeated pattern.",
  },
  {
    field: "Predictive regulation",
    citation: "Sterling, P. (2012). Allostasis: A model of predictive regulation. Physiology & Behavior.",
    href: "https://doi.org/10.1016/j.physbeh.2011.06.004",
    supports: "How the body anticipates demand and changes its operating state rather than maintaining one fixed baseline.",
  },
  {
    field: "Interoception",
    citation: "Craig, A. D. (2002). How do you feel? Interoception: The sense of the physiological condition of the body. Nature Reviews Neuroscience.",
    href: "https://doi.org/10.1038/nrn894",
    supports: "How information about the body's condition contributes to feeling, awareness, and the reading of internal state.",
  },
  {
    field: "Stress and cognition",
    citation: "Arnsten, A. F. T. (2009). Stress signalling pathways that impair prefrontal cortex structure and function. Nature Reviews Neuroscience.",
    href: "https://doi.org/10.1038/nrn2648",
    supports: "Why stress can narrow reflective thinking, working memory, inhibition, and flexible decision-making.",
  },
  {
    field: "Attention under arousal",
    citation: "Easterbrook, J. A. (1959). The effect of emotion on cue utilization and the organization of behavior. Psychological Review.",
    href: "https://doi.org/10.1037/h0047707",
    supports: "Why heightened arousal can narrow the range of cues a person notices and uses.",
  },
  {
    field: "Uncertainty and anticipation",
    citation: "Grupe, D. W., & Nitschke, J. B. (2013). Uncertainty and anticipation in anxiety. Nature Reviews Neuroscience.",
    href: "https://doi.org/10.1038/nrn3524",
    supports: "Safety checking, anticipatory attention, and the effects of uncertainty on emotion and cognition.",
  },
  {
    field: "Emotion and embodied prediction",
    citation: "Barrett, L. F. (2017). The theory of constructed emotion: An active inference account of interoception and categorization. Social Cognitive and Affective Neuroscience.",
    href: "https://doi.org/10.1093/scan/nsw154",
    supports: "Emotion as an embodied, context-shaped construction rather than a direct readout of objective fact.",
  },
  {
    field: "Autonomic regulation",
    citation: "Thayer, J. F., & Lane, R. D. (2000). A model of neurovisceral integration in emotion regulation and dysregulation. Journal of Affective Disorders.",
    href: "https://doi.org/10.1016/S0165-0327(00)00338-4",
    supports: "Links among autonomic regulation, attention, emotion, and flexible response.",
  },
];

export default function ScientificFoundationsPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/scientific-foundations" />

      <PageLayout
        header={
          <ResearcherHero
            badge="SCIENTIFIC GROUNDING"
            title="Scientific Grounding"
            subtitle="Research areas, source limits, and public claims"
            description="How established fields support specific parts of The Emotional Gradient Blueprint without becoming proof of the whole map."
          />
        }
      >
        <OverviewSection />
        <GroundingDimensionsSection />
        <ModeGroundingSection />
        <ResearchSequenceSection />
        <ResearchAreasSection />
        <CoreReferencesSection />
        <ClaimCareSection />
        <WhereNextSection />
      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Scientific Grounding", url: "/scientific-foundations" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd(FAQ_ITEMS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "Scientific Grounding | TEG-Blue",
              url: "https://teg-blue.org/scientific-foundations",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

function OverviewSection() {
  return (
    <section id="overview" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Research use</div>
      <h2 style={sectionHeadingStyle}>TEG-Blue is a map. Science grounds the parts.</h2>
      <p style={leadStyle}>
        TEG-Blue gathers research from different fields into one visual map for reading body state, emotion,
        perception, relationship, protection, shutdown, regulation, and repair.
      </p>
      <p style={{ ...bodyStyle, marginTop: 12, maxWidth: 800 }}>
        The claim is specific. Existing science can support parts of the map. It can support how stress changes
        attention, how threat can narrow cognition, how social safety can reduce load, how shutdown protects
        capacity, and why repair needs enough safety to land. It does not already prove the whole Gradient as one
        finished clinical model.
      </p>
      <div style={calloutStyle(SPECTRUM.cobalt)}>
        <p style={{ ...bodyStyle, color: TEXT.primary, fontWeight: 600, marginBottom: 8 }}>
          In plain language: sources ground parts of the map. TEG-Blue connects those parts.
        </p>
        <p style={bodyStyle}>
          A source may support a mechanism, capacity, condition, or repeated pattern. It should not be stretched
          into a claim about a person's hidden state, motive, diagnosis, or whole identity.
        </p>
      </div>
    </section>
  );
}

function GroundingDimensionsSection() {
  return (
    <section id="grounding-dimensions" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.cobalt)}>What gets grounded</div>
      <h2 style={sectionHeadingStyle}>Research supports specific, testable parts of the map.</h2>
      <p style={leadStyle}>
        No single theory is asked to prove TEG-Blue. Instead, each claim is matched to the field that can support
        it—for example, stress physiology for mobilisation or emotion science for action readiness.
      </p>
      <div style={dimensionGridStyle}>
        {GROUNDING_DIMENSIONS.map((item) => (
          <InfoCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function ModeGroundingSection() {
  return (
    <section id="mode-grounding" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.indigo)}>Modes and configurations</div>
      <h2 style={sectionHeadingStyle}>The map distinguishes acute modes from chronic configurations.</h2>
      <p style={leadStyle}>
        An acute mode describes how a pattern presents in the moment and the nervous-system state beneath it. A
        chronic configuration describes what happens when that organization repeats long enough to shape what the
        system expects from the world.
      </p>
      <div style={modeGridStyle}>
        {MODE_GROUPS.map((group) => (
          <ModeGroupCard key={group.title} group={group} />
        ))}
      </div>
      <div style={{ ...gridStyle, marginTop: 18 }}>
        {MODE_AUDIT_STEPS.map((item) => (
          <PlainCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function ResearchSequenceSection() {
  return (
    <section id="research-sequence" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.indigo)}>Citing sources</div>
      <h2 style={sectionHeadingStyle}>Move from field to finding to function to position.</h2>
      <p style={leadStyle}>
        A clear citation does more than name an authority. It shows what the source supports and where that
        support stops.
      </p>
      <div style={gridStyle}>
        {RESEARCH_SEQUENCE.map((item) => (
          <InfoCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function ResearchAreasSection() {
  return (
    <section id="research-areas" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Research areas</div>
      <h2 style={sectionHeadingStyle}>Different fields answer different questions.</h2>
      <p style={leadStyle}>
        These areas are not one theory. They support different parts of the Gradient.
      </p>
      <div style={areaGridStyle}>
        {RESEARCH_AREAS.map((area) => (
          <ResearchAreaCard key={area.title} area={area} />
        ))}
      </div>
    </section>
  );
}

function CoreReferencesSection() {
  return (
    <section id="core-references" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.cobalt)}>Selected research</div>
      <h2 style={sectionHeadingStyle}>Start with the sources behind the main mechanisms.</h2>
      <p style={leadStyle}>
        These peer-reviewed sources are a starting set, not a claim that any one paper proves the Gradient. Each
        source is attached to the specific part of the map it helps explain.
      </p>
      <div style={{ ...gridStyle, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))" }}>
        {CORE_REFERENCES.map((reference) => (
          <article key={reference.href} style={plainCardStyle}>
            <div style={labelStyle(SPECTRUM.cobalt)}>{reference.field}</div>
            <p style={{ ...cardBodyStyle, color: TEXT.primary, fontWeight: 600, marginBottom: 10 }}>
              {reference.citation}
            </p>
            <p style={{ ...cardBodyStyle, marginBottom: 12 }}>{reference.supports}</p>
            <a
              href={reference.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: contrastColor(SPECTRUM.azure), fontSize: 12, fontWeight: 600, textDecoration: "none" }}
            >
              Open DOI ↗
            </a>
          </article>
        ))}
      </div>
      <div style={calloutStyle(SPECTRUM.slate)}>
        <p style={{ ...bodyStyle, color: TEXT.primary, fontWeight: 600, marginBottom: 8 }}>What these sources do not establish</p>
        <p style={bodyStyle}>
          They do not validate the entire Gradient as a clinical model, identify a person's exact internal state,
          or establish one universal sequence. They ground particular mechanisms that TEG-Blue brings together in
          a visual architecture.
        </p>
      </div>
    </section>
  );
}

function ClaimCareSection() {
  return (
    <section id="claim-care" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.slate)}>Claim care</div>
      <h2 style={sectionHeadingStyle}>Use research carefully, and only for the part it can support.</h2>
      <p style={leadStyle}>
        The clearest scientific page is not the page with the most names. It is the page where the reader can
        see what each source supports and where the claim stops.
      </p>
      <div style={gridStyle}>
        {CLAIM_CARE.map((item) => (
          <PlainCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function WhereNextSection() {
  return (
    <section id="where-next" style={{ marginBottom: 32 }}>
      <div style={labelStyle(SPECTRUM.azure)}>Where next</div>
      <h2 style={sectionHeadingStyle}>Continue with the question that matters to you.</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: BG.surface }}>
              <th style={tableHeaderStyle}>For</th>
              <th style={tableHeaderStyle}>Visit</th>
            </tr>
          </thead>
          <tbody>
            <NavRow label="Basic terms" href="/glossary" linkText="Glossary" />
            <NavRow label="The core frame and Gradient overview" href="/foundations" linkText="TEG-Blue Overview" />
            <NavRow label="Project, creator, and contact information" href="/about" linkText="About" />
          </tbody>
        </table>
      </div>
    </section>
  );
}

function InfoCard({ item }) {
  return (
    <div style={infoCardStyle(item.color)}>
      <div style={labelStyle(item.color)}>{item.label}</div>
      <h3 style={cardTitleStyle}>{item.title}</h3>
      <p style={cardBodyStyle}>{item.body}</p>
    </div>
  );
}

function ResearchAreaCard({ area }) {
  return (
    <div style={areaCardStyle(area.color)}>
      <div style={labelStyle(area.color)}>{area.title}</div>
      <h3 style={cardTitleStyle}>{area.role}</h3>
      <p style={{ ...cardBodyStyle, marginBottom: 10 }}>{area.body}</p>
      <p style={boundaryStyle}>{area.boundary}</p>
    </div>
  );
}

function ModeGroupCard({ group }) {
  return (
    <div style={modeGroupCardStyle(group.color)}>
      <div style={labelStyle(group.color)}>{group.title}</div>
      <p style={{ ...cardBodyStyle, marginBottom: 12 }}>{group.body}</p>
      <ul style={modeListStyle}>
        {group.modes.map((mode) => (
          <li key={mode} style={modeItemStyle}>
            {mode}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlainCard({ item }) {
  return (
    <div style={plainCardStyle}>
      <h3 style={cardTitleStyle}>{item.title}</h3>
      <p style={cardBodyStyle}>{item.body}</p>
    </div>
  );
}

function NavRow({ label, href, linkText, external }) {
  const LinkEl = external ? "a" : Link;
  const extraProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <tr style={{ borderTop: `1px solid ${BORDER.default}` }}>
      <td style={{ ...tableCellStyle, color: TEXT.secondary }}>{label}</td>
      <td style={tableCellStyle}>
        <LinkEl href={href} {...extraProps} style={{ color: contrastColor(SPECTRUM.azure), textDecoration: "none", fontWeight: 500 }}>
          {linkText}
        </LinkEl>
      </td>
    </tr>
  );
}

function labelStyle(color) {
  return {
    fontSize: 9,
    fontWeight: 700,
    fontFamily: FONT.mono,
    textTransform: "uppercase",
    letterSpacing: 0,
    color: contrastColor(color),
    marginBottom: 4,
  };
}

function infoCardStyle(color) {
  return {
    padding: 16,
    minHeight: 164,
    background: gradientCardBg(color, 0.055),
    border: `1px solid ${hexToRgba(color, 0.16)}`,
    borderLeft: `3px solid ${color}`,
    borderRadius: RADIUS.md,
  };
}

function areaCardStyle(color) {
  return {
    padding: 16,
    minHeight: 244,
    background: gradientCardBg(color, 0.055),
    border: `1px solid ${hexToRgba(color, 0.16)}`,
    borderTop: `3px solid ${color}`,
    borderRadius: RADIUS.md,
  };
}

function modeGroupCardStyle(color) {
  return {
    padding: 16,
    background: gradientCardBg(color, 0.055),
    border: `1px solid ${hexToRgba(color, 0.16)}`,
    borderTop: `3px solid ${color}`,
    borderRadius: RADIUS.md,
  };
}

function calloutStyle(color) {
  return {
    marginTop: 18,
    padding: 18,
    background: gradientCardBg(color, 0.055),
    border: `1px solid ${hexToRgba(color, 0.18)}`,
    borderLeft: `3px solid ${color}`,
    borderRadius: RADIUS.md,
  };
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
  gap: 12,
  marginTop: 18,
};

const dimensionGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
  gap: 12,
  marginTop: 18,
};

const areaGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
  gap: 12,
  marginTop: 18,
};

const modeGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
  gap: 12,
  marginTop: 18,
};

const modeListStyle = {
  display: "grid",
  gap: 8,
  margin: 0,
  paddingLeft: 18,
};

const modeItemStyle = {
  fontSize: 13,
  color: TEXT.secondary,
  lineHeight: 1.55,
};

const sectionHeadingStyle = {
  fontSize: 21,
  fontWeight: 700,
  color: TEXT.primary,
  lineHeight: 1.25,
  margin: "0 0 10px",
};

const leadStyle = {
  fontSize: 15,
  color: TEXT.secondary,
  lineHeight: 1.8,
  margin: 0,
  maxWidth: 790,
};

const bodyStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.75,
  margin: 0,
};

const cardTitleStyle = {
  fontSize: 15,
  fontWeight: 650,
  color: TEXT.primary,
  lineHeight: 1.35,
  margin: "0 0 8px",
};

const cardBodyStyle = {
  fontSize: 13,
  color: TEXT.secondary,
  lineHeight: 1.65,
  margin: 0,
};

const boundaryStyle = {
  fontSize: 12,
  color: TEXT.muted,
  lineHeight: 1.55,
  margin: 0,
};

const plainCardStyle = {
  padding: 16,
  background: BG.card,
  border: `1px solid ${BORDER.default}`,
  borderRadius: RADIUS.md,
};

const tableWrapStyle = {
  background: BG.card,
  borderRadius: RADIUS.md,
  border: `1px solid ${BORDER.default}`,
  overflow: "hidden",
  marginTop: 16,
};

const tableHeaderStyle = {
  padding: "12px 16px",
  textAlign: "left",
  fontSize: 11,
  fontFamily: FONT.mono,
  textTransform: "uppercase",
  letterSpacing: 0,
  color: TEXT.muted,
};

const tableCellStyle = {
  padding: "13px 16px",
  fontSize: 13,
  lineHeight: 1.5,
};
