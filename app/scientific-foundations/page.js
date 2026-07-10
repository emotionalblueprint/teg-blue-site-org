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
    title: "Empathy, other-read, and repair",
    body: "Research helps explain when another person can stay real and separate, and when repair can or cannot land.",
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
    title: "Chronic configurations",
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
      <h2 style={sectionHeadingStyle}>Each mode is read across concrete dimensions.</h2>
      <p style={leadStyle}>
        The page is not asking whether one theory proves TEG-Blue. It asks which field supports each described
        part of a mode.
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
      <div style={labelStyle(SPECTRUM.indigo)}>Mode grounding</div>
      <h2 style={sectionHeadingStyle}>The draft grounds seven acute modes and seven chronic configurations.</h2>
      <p style={leadStyle}>
        Acute modes describe what the system is organizing around now. Chronic configurations describe what
        happens when a pattern keeps repeating or does not fully return.
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
      <h2 style={sectionHeadingStyle}>Follow the source question you are asking.</h2>
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
            <NavRow label="Project, creator, and contact routes" href="/about" linkText="About" />
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
