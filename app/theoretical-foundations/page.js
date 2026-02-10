import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, ExpandableSection } from "@/src/components";

export const metadata = {
  title: "Theoretical Foundations",
  description: "65+ aligned theories across 12 frameworks from neuroscience, psychology, sociology, and trauma research that inform the TEG-Blue framework. AI-assisted literature mapping open for community validation.",
};

// Research data: 12 frameworks with their theoretical foundations
const researchData = [
  {
    id: 1,
    framework: "F1: The Emotional Gradient",
    arc: "Formation",
    coreQuestion: "How does the emotional compass work?",
    domains: [
      {
        name: "Neuroscience",
        theories: ["Polyvagal Theory", "Neuroception", "Autonomic Nervous System research"],
        researchers: ["Stephen Porges", "Deb Dana"]
      },
      {
        name: "Affective Neuroscience",
        theories: ["Primary Emotional Systems", "Somatic Marker Hypothesis", "Theory of Constructed Emotion"],
        researchers: ["Jaak Panksepp", "Antonio Damasio", "Lisa Feldman Barrett", "Joseph LeDoux"]
      },
      {
        name: "Trauma Research",
        theories: ["Trauma and the body", "Somatic Experiencing", "Sensorimotor Psychotherapy"],
        researchers: ["Bessel van der Kolk", "Peter Levine", "Pat Ogden", "Judith Herman"]
      },
      {
        name: "Attachment Theory",
        theories: ["Attachment as regulatory system", "Attachment patterns", "Affect regulation"],
        researchers: ["John Bowlby", "Mary Ainsworth", "Mary Main", "Allan Schore"]
      },
      {
        name: "Emotion Science",
        theories: ["Process model of emotion regulation", "Window of tolerance", "Broaden-and-build theory"],
        researchers: ["James Gross", "Daniel Siegel", "Barbara Fredrickson", "Paul Ekman"]
      }
    ]
  },
  {
    id: 2,
    framework: "F2: Identity as Adaptive System",
    arc: "Formation",
    coreQuestion: "How does identity form as protection?",
    domains: [
      {
        name: "Attachment Theory",
        theories: ["Attachment System", "Strange Situation", "Adult Attachment Interview"],
        researchers: ["John Bowlby", "Mary Ainsworth", "Mary Main"]
      },
      {
        name: "Object Relations",
        theories: ["True Self / False Self", "Self Psychology", "Identity Integration"],
        researchers: ["Donald Winnicott", "Heinz Kohut", "Otto Kernberg"]
      },
      {
        name: "Developmental Psychology",
        theories: ["Sense of Self", "Interpersonal Neurobiology", "Affect Regulation"],
        researchers: ["Daniel Stern", "Daniel Siegel", "Allan Schore", "Edward Tronick"]
      },
      {
        name: "Trauma Research",
        theories: ["Developmental Trauma", "Complex PTSD", "Somatic Experiencing"],
        researchers: ["Bessel van der Kolk", "Judith Herman", "Peter Levine", "Pat Ogden"]
      },
      {
        name: "Internal Family Systems",
        theories: ["Parts and Self", "Trauma-informed parts work"],
        researchers: ["Richard Schwartz", "Janina Fisher"]
      }
    ]
  },
  {
    id: 3,
    framework: "F3: Cognitive Coherence & False Coherence",
    arc: "Formation",
    coreQuestion: "How does cognition maintain the mask?",
    domains: [
      {
        name: "Psychology",
        theories: ["Defense Mechanisms", "True/False Self", "Organismic Valuing", "The Persona", "Cognitive Dissonance"],
        researchers: ["Sigmund Freud", "Donald Winnicott", "Carl Rogers", "Carl Jung", "Leon Festinger"]
      },
      {
        name: "Sociology",
        theories: ["Dramaturgical Theory", "Social/Cultural Capital", "Symbolic Interactionism"],
        researchers: ["Erving Goffman", "Pierre Bourdieu"]
      },
      {
        name: "Therapy",
        theories: ["Parts Work (IFS)", "EMDR", "Somatic Trauma Work", "Emotion-Focused Therapy"],
        researchers: ["Richard Schwartz", "Janina Fisher"]
      }
    ]
  },
  {
    id: 4,
    framework: "F4: Threat-Based Rule Internalization",
    arc: "Scaling",
    coreQuestion: "Where do the social stories come from?",
    domains: [
      {
        name: "Sociology",
        theories: ["Habitus & Social Reproduction", "Dramaturgical Theory", "Role Theory"],
        researchers: ["Pierre Bourdieu", "Erving Goffman"]
      },
      {
        name: "Psychology",
        theories: ["Attachment Theory", "Schema Therapy", "Internal Family Systems"],
        researchers: ["John Bowlby", "Jeffrey Young", "Richard Schwartz"]
      },
      {
        name: "Trauma Studies",
        theories: ["Polyvagal Theory", "Complex PTSD models", "Intergenerational Trauma"],
        researchers: ["Stephen Porges", "Judith Herman", "Pete Walker"]
      },
      {
        name: "Cultural Studies",
        theories: ["Feminist Theory", "Critical Race Theory", "Queer Theory"],
        researchers: ["Various scholars"]
      }
    ]
  },
  {
    id: 5,
    framework: "F5: Threat-Driven Worth Sorting",
    arc: "Scaling",
    coreQuestion: "How does following rules become sorting?",
    domains: [
      {
        name: "Sociology - Capital & Reproduction",
        theories: ["Forms of Capital", "Social Reproduction", "Stigma", "Unequal Childhoods"],
        researchers: ["Pierre Bourdieu", "Basil Bernstein", "Erving Goffman", "Annette Lareau"]
      },
      {
        name: "Social Psychology - Status",
        theories: ["Status Characteristics Theory", "Social Dominance Theory", "System Justification"],
        researchers: ["Joseph Berger", "Jim Sidanius", "Felicia Pratto", "John Jost", "Mahzarin Banaji"]
      },
      {
        name: "Network Science",
        theories: ["Eigenvector Centrality", "Scale-free Networks", "Strength of Weak Ties", "Social Capital"],
        researchers: ["Phillip Bonacich", "Albert-László Barabási", "Mark Granovetter", "Nan Lin"]
      },
      {
        name: "Critical Theory",
        theories: ["Intersectionality", "Matrix of Domination", "Meritocracy Critique", "Capability Approach"],
        researchers: ["Kimberlé Crenshaw", "Patricia Hill Collins", "Michael Young", "Amartya Sen"]
      },
      {
        name: "Neuroscience - Social",
        theories: ["Polyvagal Theory", "Allostatic Load", "Stress and Hierarchy", "Social Rank Theory"],
        researchers: ["Stephen Porges", "Bruce McEwen", "Robert Sapolsky", "Paul Gilbert"]
      },
      {
        name: "Health Psychology",
        theories: ["Spirit Level (Inequality & Health)", "Weathering Hypothesis"],
        researchers: ["Richard Wilkinson", "Kate Pickett", "Arline Geronimus"]
      }
    ]
  },
  {
    id: 6,
    framework: "F6: State-Dependent Perception",
    arc: "Scaling",
    coreQuestion: "How does sorting become 'truth'?",
    domains: [
      {
        name: "Cognitive Psychology",
        theories: ["Cognitive Bias (Heuristics & Biases)", "Cognitive Dissonance", "Motivated Reasoning", "Confirmation Bias"],
        researchers: ["Daniel Kahneman", "Amos Tversky", "Leon Festinger", "Ziva Kunda"]
      },
      {
        name: "Social Psychology",
        theories: ["Social Identity Theory", "System Justification Theory", "Moral Foundations Theory", "Terror Management Theory"],
        researchers: ["Henri Tajfel", "John Turner", "John Jost", "Jonathan Haidt", "Sheldon Solomon"]
      },
      {
        name: "Neuroscience",
        theories: ["Predictive Coding / Free Energy Principle", "Neuroception", "Somatic Marker Hypothesis"],
        researchers: ["Karl Friston", "Stephen Porges", "Antonio Damasio", "Joseph LeDoux"]
      },
      {
        name: "Implicit Cognition",
        theories: ["Implicit Bias", "Implicit Association Test"],
        researchers: ["Anthony Greenwald", "Mahzarin Banaji", "Brian Nosek", "Patricia Devine"]
      },
      {
        name: "Therapeutic Models",
        theories: ["Cognitive Therapy", "Schema Therapy", "Internal Family Systems"],
        researchers: ["Aaron Beck", "Jeffrey Young", "Richard Schwartz"]
      }
    ]
  },
  {
    id: 7,
    framework: "F7: The Anatomy of Tyranny",
    arc: "Turning Point",
    coreQuestion: "How does protection escalate to domination?",
    domains: [
      {
        name: "Clinical Psychology",
        theories: ["Narcissism research", "Dark Triad", "Machiavellianism"],
        researchers: ["Various clinical researchers"]
      },
      {
        name: "Power & Corruption",
        theories: ["How power changes cognition and empathy"],
        researchers: ["Dacher Keltner", "Adam Galinsky", "Deborah Gruenfeld", "Cameron Anderson"]
      },
      {
        name: "Developmental Pathways",
        theories: ["Callous-unemotional traits", "Antisocial development", "Gene-environment factors"],
        researchers: ["Paul Frick", "Essi Viding", "Terrie Moffitt", "Adrian Raine", "Avshalom Caspi"]
      },
      {
        name: "Attachment & Control",
        theories: ["Disorganized attachment", "Controlling behavior"],
        researchers: ["Mary Main", "Karlen Lyons-Ruth", "Erik Hesse"]
      },
      {
        name: "Coercive Control & Abuse",
        theories: ["Patterns of domination in relationships"],
        researchers: ["Evan Stark", "Michael Johnson", "Lenore Walker", "Donald Dutton", "Lundy Bancroft"]
      },
      {
        name: "Dehumanization",
        theories: ["Moral Disengagement", "How harm becomes possible"],
        researchers: ["Albert Bandura", "Nick Haslam", "Herbert Kelman", "James Waller"]
      },
      {
        name: "Shame & Rage",
        theories: ["Shame-rage spiral", "Humiliated fury and violence"],
        researchers: ["Helen Block Lewis", "James Gilligan", "June Tangney", "Thomas Scheff"]
      },
      {
        name: "Perpetrator Psychology",
        theories: ["How ordinary people cause harm"],
        researchers: ["Ervin Staub", "James Waller", "Roy Baumeister", "Philip Zimbardo", "Christopher Browning"]
      }
    ]
  },
  {
    id: 8,
    framework: "F8: Self-Reconnection & Role Mask Loosening",
    arc: "Healing",
    coreQuestion: "How does the mask loosen?",
    domains: [
      {
        name: "Developmental Psychology",
        theories: ["True Self / False Self", "Identity Stages", "Identity Status"],
        researchers: ["Donald Winnicott", "Erik Erikson", "James Marcia"]
      },
      {
        name: "Attachment Theory",
        theories: ["Secure Base", "Dynamic-Maturational Model", "Earned Security"],
        researchers: ["John Bowlby", "Mary Ainsworth", "Patricia Crittenden"]
      },
      {
        name: "Somatic & Neuroscience",
        theories: ["Polyvagal Theory", "Somatic Experiencing", "Interpersonal Neurobiology"],
        researchers: ["Stephen Porges", "Peter Levine", "Daniel Siegel", "Antonio Damasio"]
      },
      {
        name: "Trauma & Healing",
        theories: ["Body Keeps the Score", "Parts Work", "Self-Compassion"],
        researchers: ["Bessel van der Kolk", "Janina Fisher", "Kristin Neff", "Tara Brach"]
      },
      {
        name: "Parts Work",
        theories: ["Internal Family Systems", "Structural Dissociation"],
        researchers: ["Richard Schwartz", "Janina Fisher", "van der Hart", "Nijenhuis", "Steele"]
      },
      {
        name: "Corrective Experience",
        theories: ["Corrective Emotional Experience", "AEDP", "Emotion-Focused Therapy"],
        researchers: ["Franz Alexander", "Diana Fosha", "Leslie Greenberg", "Sue Johnson"]
      }
    ]
  },
  {
    id: 9,
    framework: "F9: Nervous System Variation",
    arc: "Healing",
    coreQuestion: "How do different systems navigate?",
    domains: [
      {
        name: "Neurodiversity Paradigm",
        theories: ["Neurodiversity concept", "NeuroTribes"],
        researchers: ["Judy Singer", "Nick Walker", "Steve Silberman"]
      },
      {
        name: "Neuroscience & Cognition",
        theories: ["Polyvagal Theory", "Intense World Theory", "Predictive Processing"],
        researchers: ["Stephen Porges", "Henry & Kamila Markram", "Karl Friston"]
      },
      {
        name: "Disability Studies",
        theories: ["Social Model of Disability", "Critical Disability Theory"],
        researchers: ["Mike Oliver", "Tom Shakespeare", "Lennard Davis"]
      },
      {
        name: "Clinical & Trauma",
        theories: ["Developmental context of ADHD", "Masking research", "Autistic burnout"],
        researchers: ["Gabor Maté", "Bessel van der Kolk", "Devon Price", "Kieran Rose"]
      },
      {
        name: "Education & Design",
        theories: ["Universal Design for Learning", "Power of Neurodiversity"],
        researchers: ["CAST", "Thomas Armstrong", "Carol Ann Tomlinson"]
      }
    ]
  },
  {
    id: 10,
    framework: "F10: Generational Transmission",
    arc: "Healing",
    coreQuestion: "How do patterns pass and interrupt?",
    domains: [
      {
        name: "Family Systems",
        theories: ["Family Systems Theory", "Structural Family Therapy", "Contextual Therapy"],
        researchers: ["Murray Bowen", "Salvador Minuchin", "Ivan Boszormenyi-Nagy"]
      },
      {
        name: "Trauma & Attachment",
        theories: ["ACE Studies", "Trauma & Recovery", "Attachment Strategies"],
        researchers: ["Felitti & Anda", "Judith Herman", "Patricia Crittenden"]
      },
      {
        name: "Developmental Psychology",
        theories: ["Generativity", "Interpersonal Neurobiology"],
        researchers: ["Erik Erikson", "Daniel Siegel"]
      },
      {
        name: "Narrative & Epigenetics",
        theories: ["Narrative Therapy", "Epigenetics of Trauma"],
        researchers: ["Michael White", "David Epston", "Rachel Yehuda"]
      }
    ]
  },
  {
    id: 11,
    framework: "F11: Emotional Logic of Paradoxes",
    arc: "Integration",
    coreQuestion: "Why do contradictions emerge?",
    domains: [
      {
        name: "Integration of F1-F10",
        theories: ["All previous frameworks contribute specific paradox patterns"],
        researchers: ["See Frameworks 1-10"]
      },
      {
        name: "Holding Capacity",
        theories: ["Both/And Thinking", "Multi-Rationality", "Compassionate Investigation"],
        researchers: ["Therapeutic integration traditions"]
      }
    ]
  },
  {
    id: 12,
    framework: "F12: Our Two Information Systems",
    arc: "Integration",
    coreQuestion: "What is the complete architecture?",
    domains: [
      {
        name: "Dual-Process Theory",
        theories: ["System 1/System 2", "Two Minds Hypothesis"],
        researchers: ["Daniel Kahneman", "Keith Stanovich", "Richard West", "Jonathan Evans"]
      },
      {
        name: "Neuroscience",
        theories: ["Polyvagal Theory", "Somatic Marker Hypothesis", "Threat Detection"],
        researchers: ["Stephen Porges", "Antonio Damasio", "Joseph LeDoux", "Lisa Feldman Barrett"]
      },
      {
        name: "Attachment Theory",
        theories: ["Attachment patterns as regulatory strategies"],
        researchers: ["John Bowlby", "Mary Main", "Mary Ainsworth"]
      },
      {
        name: "Trauma Research",
        theories: ["Chronic lower-gradient activation"],
        researchers: ["Bessel van der Kolk", "Judith Herman", "Peter Levine"]
      },
      {
        name: "Emotion Regulation",
        theories: ["State-dependent capacity", "DBT"],
        researchers: ["James Gross", "Daniel Siegel", "Marsha Linehan"]
      },
      {
        name: "Social Psychology",
        theories: ["Situational factors in behavior"],
        researchers: ["Stanley Milgram", "Philip Zimbardo"]
      }
    ]
  }
];

// Calculate stats
const allResearchers = new Set();
const allTheories = new Set();
const allDomains = new Set();
researchData.forEach(f => {
  f.domains.forEach(d => {
    allDomains.add(d.name);
    d.theories.forEach(t => allTheories.add(t));
    d.researchers.forEach(r => allResearchers.add(r));
  });
});

const arcColors = {
  "Formation": SPECTRUM.azure,
  "Scaling": SPECTRUM.blue,
  "Turning Point": SPECTRUM.cobalt,
  "Healing": SPECTRUM.indigo,
  "Integration": SPECTRUM.slate,
};

export default function TheoreticalFoundationsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/theoretical-foundations" />

      <main
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        {/* Header */}
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: TEXT.primary,
            marginBottom: 8,
            letterSpacing: "-0.02em",
          }}
        >
          Theoretical Foundations
        </h1>
        <p
          style={{
            fontSize: 13,
            color: TEXT.hint,
            marginBottom: 24,
            fontStyle: "italic",
          }}
        >
          The Explanatory Architecture Behind the Four-Mode Gradient
        </p>

        {/* Two-layer explanation */}
        <div style={{ marginBottom: 32 }}>
          <p
            style={{
              fontSize: 15,
              color: TEXT.secondary,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            TEG-Blue is organized in two layers.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
          >
            {/* Measurement System Box */}
            <div
              style={{
                padding: 24,
                background: hexToRgba(SPECTRUM.azure, 0.08),
                borderRadius: 12,
                border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.2)}`,
                borderTop: `3px solid ${SPECTRUM.azure}`,
              }}
            >
              <h3
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.azure,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: FONT.mono,
                  marginBottom: 12,
                }}
              >
                Measurement System
              </h3>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: TEXT.primary,
                  marginBottom: 12,
                }}
              >
                The Four-Mode Gradient
              </p>
              <div
                style={{
                  fontSize: 12,
                  fontFamily: FONT.mono,
                  color: TEXT.secondary,
                  marginBottom: 16,
                  padding: "10px 12px",
                  background: hexToRgba(SPECTRUM.azure, 0.1),
                  borderRadius: 6,
                  textAlign: "center",
                }}
              >
                Connection → Protection → Control → Domination
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: TEXT.secondary,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                The observable, testable backbone. It measures nervous system regulatory states that shift in response to perceived threat and can be detected in natural language.
              </p>
            </div>

            {/* Explanatory Architecture Box */}
            <div
              style={{
                padding: 24,
                background: hexToRgba(SPECTRUM.cobalt, 0.08),
                borderRadius: 12,
                border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
                borderTop: `3px solid ${SPECTRUM.cobalt}`,
              }}
            >
              <h3
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: SPECTRUM.cobalt,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: FONT.mono,
                  marginBottom: 12,
                }}
              >
                Explanatory Architecture
              </h3>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: TEXT.primary,
                  marginBottom: 12,
                }}
              >
                12 Frameworks
              </p>
              <div
                style={{
                  fontSize: 12,
                  fontFamily: FONT.mono,
                  color: TEXT.secondary,
                  marginBottom: 16,
                  padding: "10px 12px",
                  background: hexToRgba(SPECTRUM.cobalt, 0.1),
                  borderRadius: 6,
                  textAlign: "center",
                }}
              >
                Why · How · Where · What
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: TEXT.secondary,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Sits behind the gradient. Explains <em>why</em> the four modes exist, <em>how</em> individual patterns scale into social structures, <em>where</em> protection tips into domination, and <em>what</em> makes change possible.
              </p>
            </div>
          </div>

          {/* Emotional Tools note */}
          <p
            style={{
              fontSize: 13,
              color: TEXT.muted,
              textAlign: "center",
              marginTop: 16,
            }}
          >
            These frameworks inform 16 <strong style={{ color: TEXT.secondary }}>Emotional Tools</strong> — assessment instruments available on{" "}
            <a href="https://teg-blue.com/emotional-tools" style={{ color: SPECTRUM.azure }} target="_blank" rel="noopener noreferrer">
              teg-blue.com
            </a>
            , awaiting psychometric validation.
          </p>
        </div>

        {/* What Is Original */}
        <section
          style={{
            marginBottom: 32,
          }}
        >
          <h2
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 16,
            }}
          >
            What Is Original Here
          </h2>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            The 12 frameworks draw on 139+ established theories across neuroscience, psychology, sociology, and trauma studies. Every source theory is credited. The originality is not in the individual theories — it is in the connections between them.
          </p>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            These research traditions developed independently, within separate disciplines, often without reference to each other. TEG-Blue proposes specific cross-disciplinary connections that do not exist in any of the source theories:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                padding: "16px 20px",
                background: hexToRgba(SPECTRUM.azure, 0.06),
                borderRadius: 8,
                borderLeft: `3px solid ${SPECTRUM.azure}`,
              }}
            >
              <h4 style={{ fontSize: 13, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
                Nervous system regulation → moral perception
              </h4>
              <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                Polyvagal Theory describes autonomic states. Moral psychology describes ethical judgments. TEG-Blue proposes that regulatory state systematically shapes which moral judgments a person makes.
              </p>
            </div>

            <div
              style={{
                padding: "16px 20px",
                background: hexToRgba(SPECTRUM.blue, 0.06),
                borderRadius: 8,
                borderLeft: `3px solid ${SPECTRUM.blue}`,
              }}
            >
              <h4 style={{ fontSize: 13, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
                Attachment patterns → social stratification
              </h4>
              <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                Attachment theory operates at the individual scale. Sociology of capital (Bourdieu) operates at the social scale. TEG-Blue proposes that the same protective mechanisms that organize individual identity also organize social hierarchies.
              </p>
            </div>

            <div
              style={{
                padding: "16px 20px",
                background: hexToRgba(SPECTRUM.cobalt, 0.06),
                borderRadius: 8,
                borderLeft: `3px solid ${SPECTRUM.cobalt}`,
              }}
            >
              <h4 style={{ fontSize: 13, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
                Self-protection → domination as a continuous gradient
              </h4>
              <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                Clinical psychology studies narcissism, coercive control, and moral disengagement as separate phenomena. TEG-Blue maps these onto a single continuous trajectory with identifiable transition markers at each stage.
              </p>
            </div>

            <div
              style={{
                padding: "16px 20px",
                background: hexToRgba(SPECTRUM.indigo, 0.06),
                borderRadius: 8,
                borderLeft: `3px solid ${SPECTRUM.indigo}`,
              }}
            >
              <h4 style={{ fontSize: 13, fontWeight: 600, color: TEXT.primary, marginBottom: 6 }}>
                Linguistic complexity → regulatory capacity
              </h4>
              <p style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.7, margin: 0 }}>
                Psycholinguistics studies language as a window into cognitive states. Emotion regulation research studies the capacity to return to baseline. TEG-Blue connects these by proposing that specific linguistic markers indicate the capacity to return to Connection — a construct neither field has operationalized.
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.8,
              marginTop: 20,
              marginBottom: 0,
            }}
          >
            These connections generate testable questions that no single source discipline could produce alone. Several have already been tested empirically (see <a href="/publications" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>Publications</a>). For a full overview of TEG-Blue's structure, existing evidence, and open research questions, see the <a href="/research-entry" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>Research Entry Point</a>.
          </p>
        </section>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 32,
            padding: 20,
            background: hexToRgba(SPECTRUM.blue, 0.06),
            borderRadius: 12,
            border: `1px solid ${hexToRgba(SPECTRUM.blue, 0.12)}`,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: SPECTRUM.azure }}>12</div>
            <div style={{ fontSize: 11, color: TEXT.muted, fontFamily: FONT.mono }}>Frameworks</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: SPECTRUM.blue }}>{allDomains.size}+</div>
            <div style={{ fontSize: 11, color: TEXT.muted, fontFamily: FONT.mono }}>Domains</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: SPECTRUM.cobalt }}>{allTheories.size}+</div>
            <div style={{ fontSize: 11, color: TEXT.muted, fontFamily: FONT.mono }}>Theories</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: SPECTRUM.indigo }}>{allResearchers.size}+</div>
            <div style={{ fontSize: 11, color: TEXT.muted, fontFamily: FONT.mono }}>Researchers</div>
          </div>
        </div>

        {/* Methodology Notice */}
        <section
          style={{
            marginBottom: 32,
            padding: 24,
            background: hexToRgba(SPECTRUM.slate, 0.08),
            borderRadius: 12,
            border: `1px solid ${hexToRgba(SPECTRUM.slate, 0.15)}`,
            borderLeft: `3px solid ${SPECTRUM.slate}`,
          }}
        >
          <h2
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 16,
            }}
          >
            Methodology & Status
          </h2>
          <div style={{ fontSize: 13, color: TEXT.secondary, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: TEXT.primary }}>How TEG-Blue was developed:</strong>{" "}
              The integrative architecture — the 12 frameworks and the connections between them — was developed by Anna Paretas-Artacho over nearly two years of independent research, drawing on a lifetime of observing patterns in human behavior, systems thinking, personal experience, and cross-disciplinary reading.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: TEXT.primary }}>How this mapping was created:</strong>{" "}
              Once the architecture was established, AI research tools (Claude, ChatGPT Deep Research) were used to systematically identify which established theories and researchers align with each framework's propositions. The architecture determined the connections. The AI tools helped locate and organize the corresponding academic literature.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: TEXT.primary }}>What this means:</strong>{" "}
              The theoretical mapping on this page is a working hypothesis — a starting point for deeper scholarly validation, not a finished academic work. Human researchers are needed to verify accuracy, correct errors, and deepen the analysis.
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong style={{ color: TEXT.primary }}>Limitations:</strong>{" "}
              Some literature connections may be inaccurate or oversimplified. Researchers may disagree with how their work is represented. Corrections are welcomed and the mapping is updated based on scholarly feedback.
            </p>
          </div>
        </section>

        {/* Frameworks */}
        <section style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: TEXT.hint,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: FONT.mono,
              marginBottom: 16,
            }}
          >
            12 Frameworks
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {researchData.map((framework) => {
              const arcColor = arcColors[framework.arc] || SPECTRUM.blue;
              return (
                <ExpandableSection
                  key={framework.id}
                  title={framework.framework}
                  type="theory"
                  defaultOpen={framework.id === 1}
                  id={`f${framework.id}`}
                >
                  <div style={{ paddingTop: 12 }}>
                    {/* Arc & Question */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 16,
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          fontFamily: FONT.mono,
                          padding: "4px 10px",
                          borderRadius: 4,
                          background: hexToRgba(arcColor, 0.15),
                          color: arcColor,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {framework.arc}
                      </span>
                      <span style={{ fontSize: 13, color: TEXT.muted, fontStyle: "italic" }}>
                        {framework.coreQuestion}
                      </span>
                    </div>

                    {/* Domains */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {framework.domains.map((domain, i) => (
                        <div
                          key={i}
                          style={{
                            padding: "12px 16px",
                            background: BG.surface,
                            borderRadius: 8,
                            border: `1px solid ${BORDER.default}`,
                          }}
                        >
                          <h4
                            style={{
                              fontSize: 12,
                              fontWeight: 600,
                              color: TEXT.primary,
                              marginBottom: 8,
                            }}
                          >
                            {domain.name}
                          </h4>
                          <div style={{ fontSize: 12, color: TEXT.secondary, marginBottom: 6 }}>
                            <span style={{ color: TEXT.muted }}>Theories: </span>
                            {domain.theories.join(" · ")}
                          </div>
                          <div style={{ fontSize: 11, color: TEXT.hint, fontFamily: FONT.mono }}>
                            {domain.researchers.join(", ")}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ExpandableSection>
              );
            })}
          </div>
        </section>

        {/* Contribute Section */}
        <section
          style={{
            padding: 24,
            background: hexToRgba(SPECTRUM.azure, 0.08),
            borderRadius: 12,
            border: `1px solid ${hexToRgba(SPECTRUM.azure, 0.2)}`,
          }}
        >
          <h2
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: TEXT.primary,
              marginBottom: 12,
            }}
          >
            Help Us Validate This Mapping
          </h2>
          <p
            style={{
              fontSize: 14,
              color: TEXT.secondary,
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            We're building this research foundation openly and invite scholars, practitioners,
            and researchers to help verify and improve these connections. Your expertise can help ensure
            this mapping accurately represents the field.
          </p>
          <div style={{ fontSize: 13, color: TEXT.secondary, marginBottom: 20 }}>
            <p style={{ marginBottom: 8 }}><strong style={{ color: TEXT.primary }}>You can help by:</strong></p>
            <ul style={{ paddingLeft: 20, lineHeight: 1.8 }}>
              <li>Identifying errors or misattributions</li>
              <li>Suggesting additional relevant theories or researchers</li>
              <li>Providing nuance where connections are oversimplified</li>
              <li>Pointing us to key papers that should be cited</li>
            </ul>
          </div>
          <div style={{ fontSize: 13, color: TEXT.muted, marginBottom: 16 }}>
            <strong style={{ color: TEXT.primary }}>How you'll be credited:</strong>{" "}
            Contributors will be acknowledged both on this page and on our contributors page.
            For significant contributions, we'll add per-connection attribution.
          </div>
          <a
            href="mailto:research@teg-blue.org?subject=Theoretical Foundations Feedback"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: SPECTRUM.blue,
              color: "#fff",
              borderRadius: 8,
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Send Feedback
          </a>
        </section>

        {/* Contributors Section (placeholder for future) */}
        <section style={{ marginTop: 32, textAlign: "center" }}>
          <p style={{ fontSize: 12, color: TEXT.micro, fontFamily: FONT.mono }}>
            Contributors: <em>Be the first to help validate this mapping</em>
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
