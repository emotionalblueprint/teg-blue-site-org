import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS, hexToRgba, gradientCardBg } from "@/src/styles/tokens";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import PageLayout from "@/src/components/PageLayout";
import ResearcherHero from "@/src/components/ResearcherHero";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What research does TEG-Blue draw from?",
    answer: "TEG-Blue draws from established research areas including biology, physiology, affective neuroscience, autonomic neuroscience, psychology, attachment research, trauma research, developmental science, anthropology, sociology, social psychology, and contemplative traditions.",
  },
  {
    question: "Does any one field already say TEG-Blue?",
    answer: "No. Each field remains itself. TEG-Blue places parts from different fields into relation, and that integration is its contribution.",
  },
  {
    question: "How should citations be used?",
    answer: "A citation should connect field, finding, function, and position in the sequence. It should support a specific part of the architecture, not the whole system at once.",
  },
  {
    question: "Is TEG-Blue diagnostic?",
    answer: "No. The Nervous System Gradient is educational and reflective. It should not be used to diagnose, treat, or claim certainty about another person's true internal state.",
  },
];

const RESEARCH_SEQUENCE = [
  {
    label: "Field",
    title: "Which research area is speaking?",
    body: "Biology, physiology, psychology, attachment research, trauma research, social psychology, and other fields each keep their own methods and boundaries.",
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
    body: "TEG-Blue places supported parts into relation across safety, threat, control, shutdown, regulation, and repair.",
    color: SPECTRUM.indigo,
  },
];

const RESEARCH_AREAS = [
  {
    title: "Biology and physiology",
    role: "Load-bearing for the body-level organization of the map.",
    body: "These fields ground survival, adaptation, organism-environment response, arousal, energy mobilization, shutdown, regulation, and repair capacity.",
    boundary: "They do not make visible behaviour a biological measurement or prove someone's inner state from outside.",
    color: SPECTRUM.azure,
  },
  {
    title: "Autonomic neuroscience and stress physiology",
    role: "Grounds state organization and chronic load.",
    body: "These areas support careful discussion of mobilisation, inhibition, arousal flexibility, stress physiology, allostatic pressure, shutdown, and return.",
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
    role: "One major research angle, not the owner of the pattern.",
    body: "Psychology supports discussion of cognition, behaviour, appraisal, learning, development, social perception, personality organization, and relational dynamics.",
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
    role: "Locate context, attention, awareness, norms, power, and later scale.",
    body: "Social psychology, sociology, anthropology, evolutionary research, and contemplative traditions help clarify social patterning, belonging, status, care, attention, and awareness.",
    boundary: "Groups, institutions, and culture are deeper scale language, not the current public lead.",
    color: SPECTRUM.slate,
  },
];

const CLAIM_CARE = [
  {
    title: "A field supports a part",
    body: "A research area may help explain one mechanism, condition, capacity, or pattern. It should not be used to claim the whole framework is already established.",
  },
  {
    title: "The integration is named honestly",
    body: "TEG-Blue places source-supported parts into relation. That relational architecture is the contribution.",
  },
  {
    title: "Named theories need calibration",
    body: "When a page names a theory, construct, mechanism, or clinical field, the claim should say exactly what that source can and cannot support.",
  },
  {
    title: "Impact remains visible",
    body: "Mechanism never erases effect. Pattern reading still asks what happened, what impact occurred, and what response fits.",
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
            subtitle="Research areas, source boundaries, and claim discipline"
            description="A public guide to how established fields support specific parts of The Emotional Gradient Blueprint without being collapsed into one theory."
          />
        }
      >
        <OverviewSection />
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
      <div style={labelStyle(SPECTRUM.azure)}>Research stance</div>
      <h2 style={sectionHeadingStyle}>Scientific grounding means each source supports a specific part.</h2>
      <p style={leadStyle}>
        TEG-Blue is grounded in science when that means established fields support specific parts of the map,
        each field remains itself, and TEG-Blue places the parts in relation.
      </p>
      <p style={{ ...bodyStyle, marginTop: 12, maxWidth: 800 }}>
        No source already says TEG-Blue. A source may support a mechanism, condition, capacity, or pattern. The
        Blueprint contributes the visual architecture that holds those parts together across safety, threat,
        control, shutdown, regulation, and repair.
      </p>
      <div style={calloutStyle(SPECTRUM.cobalt)}>
        <p style={{ ...bodyStyle, color: TEXT.primary, fontWeight: 600, marginBottom: 8 }}>
          The established research underwrites specific parts. The integration is TEG-Blue's contribution.
        </p>
        <p style={bodyStyle}>
          This page names research areas and claim boundaries. It does not turn the framework into a diagnostic,
          clinical, treatment, or assessment system.
        </p>
      </div>
    </section>
  );
}

function ResearchSequenceSection() {
  return (
    <section id="research-sequence" style={{ marginBottom: 42 }}>
      <div style={labelStyle(SPECTRUM.indigo)}>Citation discipline</div>
      <h2 style={sectionHeadingStyle}>Move from field to finding to function to position.</h2>
      <p style={leadStyle}>
        A clear citation does more than name an authority. It shows what the source clarifies and where that
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
      <h2 style={sectionHeadingStyle}>Different fields have different jobs inside the architecture.</h2>
      <p style={leadStyle}>
        These areas are not collapsed into one theory. They ground mechanisms, capacities, conditions, patterns,
        and repair routes inside the Gradient.
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
        see what kind of support is being claimed and where the claim stops.
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
            <NavRow label="Citation guidance and public records" href="/publications" linkText="Publications" />
            <NavRow label="Terminology and Engine layer names" href="/glossary" linkText="Glossary" />
            <NavRow label="How to read claims responsibly" href="/methodology" linkText="Pattern reading" />
            <NavRow label="The core frame and Gradient overview" href="/foundations" linkText="TEG-Blue Overview" />
            <NavRow label="Collaboration and review conversations" href="/collaborate" linkText="Collaborate" />
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
        <LinkEl href={href} {...extraProps} style={{ color: SPECTRUM.azure, textDecoration: "none", fontWeight: 500 }}>
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
    color,
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

const areaGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
  gap: 12,
  marginTop: 18,
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
