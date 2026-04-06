import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS,
  hexToRgba, gradientCardBg,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, PageLayout,
} from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

// ─── METADATA ──────────────────────────────────────────────

export const metadata = {
  title: "The Emotional Somatic Cycle | TEG-Blue Research",
  description:
    "The Emotional Somatic Cycle (ESC) — the repeating biological sequence two information systems run together. Four models describe different stages: signal generation, state activation, restoration or incompletion, and awareness.",
  keywords: [
    "emotional somatic cycle",
    "nervous system",
    "biological restoration",
    "signal generation",
    "state activation",
    "awareness capacities",
    "regulation capacities",
    "ESS",
    "CLS",
  ],
  alternates: {
    canonical: "https://teg-blue.org/models",
  },
  openGraph: {
    title: "The Emotional Somatic Cycle | TEG-Blue Research",
    description:
      "Four models describing the repeating biological sequence the nervous system runs — from signal through state through restoration or incompletion.",
    url: "https://teg-blue.org/models",
    type: "article",
    siteName: "TEG-Blue Research",
  },
};

const FAQ_ITEMS = [
  {
    question: "What is the Emotional Somatic Cycle?",
    answer: "The Emotional Somatic Cycle (ESC) is the repeating biological sequence that two information systems — the Emotional Somatic System (ESS) and the Cognitive-Logical System (CLS) — run together. The nervous system detects something in the environment, evaluates it for safety or threat, generates a physiological response, reorganises into a different configuration, and then either the restoration sequence runs to its endpoint or the activation remains unresolved.",
  },
  {
    question: "What are the four TEG-Blue models?",
    answer: "The four models each map a different stage of the Emotional Somatic Cycle. M1: Emotions as Signals maps what the nervous system detects and the physiological response it generates. M2: Nervous System States maps how the nervous system reorganises into different configurations along a continuous gradient. M3: Regulation Capacities maps whether the restoration sequence completes or the activation remains unresolved. M4: Awareness Capacities maps the biological architecture that determines whether the CLS can receive the ESS's physiological signals.",
  },
  {
    question: "What determines whether the cycle completes?",
    answer: "Whether the CLS can feel what the ESS is doing — whether the biological architecture connecting the two systems is available. When it is, the body completes its restoration sequence: stress hormones metabolise, muscles release, the HPA axis stands down, and the nervous system returns toward physiological baseline. When it is not, the CLS overrides the physiological activation, the restoration sequence does not run to its endpoint, and the activation remains unresolved.",
  },
  {
    question: "How do the four TEG-Blue models relate to each other?",
    answer: "The four models describe one process: the nervous system detects and evaluates (M1), reorganises into a different physiological configuration (M2), either completes the restoration sequence or the activation remains unresolved (M3), and whether the person can perceive any of these physiological changes while they are happening depends on the state of the biological architecture connecting the two information systems (M4). Every concept in every model maps a part of this cycle.",
  },
];

// ─── MODEL DATA ─────────────────────────────────────────────

const MODELS = [
  {
    id: "M1",
    role: "The Signal Language",
    title: "Emotions as Signals",
    coreQuestion: "What is this signal telling me?",
    summary:
      "What the nervous system detects and the physiological response it generates — hormonal, neurochemical, muscular — encoding a finding about what was detected. Sixteen emotions, each with a distinct finding, grouped by whether the body can complete the restoration sequence through its own channels or requires another person.",
    concepts: 16,
    drawsFrom: "F1",
    color: SPECTRUM.azure,
    href: "/model/m1-emotions-as-signals",
  },
  {
    id: "M2",
    role: "The Instrument",
    title: "Nervous System States",
    coreQuestion: "Where is the needle?",
    summary:
      "How the nervous system reorganises into four configurations along a continuous physiological gradient — from parasympathetic-dominant states of engagement through sympathetic activation and defensive mobilisation. What each state enables and restricts, how states become chronic, and how the return to physiological baseline restores flexibility.",
    concepts: 10,
    drawsFrom: "F1, F3, F7, F12",
    color: SPECTRUM.azure,
    href: "/model/m2-nervous-system-states",
  },
  {
    id: "M3",
    role: "The Return Pathway",
    title: "Regulation Capacities",
    coreQuestion: "Is the cycle completing?",
    summary:
      "Whether the restoration sequence completes — mobilisation response, biological restoration, return to physiological baseline — or the activation remains unresolved. What completion looks like at each state. What replaces it when it cannot happen. How the residue accumulates across repeated incomplete cycles.",
    concepts: 9,
    drawsFrom: "F1, F2, F3, F12",
    color: SPECTRUM.indigo,
    href: "/model/m3-regulation-capacities",
  },
  {
    id: "M4",
    role: "The Calibration",
    title: "Awareness Capacities",
    coreQuestion: "What determines which path?",
    summary:
      "The biological architecture that determines whether the CLS can receive the ESS's physiological signals. Whether that architecture is available determines which path the cycle follows — whether the body completes its restoration sequence or the CLS overrides and the activation remains unresolved.",
    concepts: 10,
    drawsFrom: "F2, F3, F8, F10",
    color: SPECTRUM.cobalt,
    href: "/model/m4-awareness-capacities",
  },
];

const CONNECTORS = [
  { label: "produces", description: "The physiological response M1 maps produces the state M2 maps" },
  { label: "determines return", description: "M3 maps whether the activation cycle M2 opened can complete" },
  { label: "calibrates", description: "M4 determines which path the cycle follows" },
];

// ─── PAGE ───────────────────────────────────────────────────

export default function ModelsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/models" />

      <PageLayout
        header={
          <ModelHero
            badge="THE EMOTIONAL SOMATIC CYCLE"
            title="The Emotional Somatic Cycle"
            subtitle="Signal → State → Regulation → Perception"
            description="Two information systems run a repeating biological sequence together. The Emotional Somatic System (ESS) detects, evaluates, and generates physiological responses below conscious awareness. The Cognitive-Logical System (CLS) produces language, reasoning, and narrative. The nervous system detects something in the environment, evaluates it for safety or threat, generates a physiological response, reorganises into a different configuration — and then either the restoration sequence runs to its endpoint or the activation remains unresolved."
            color={SPECTRUM.cobalt}
          />
        }
      >
        {/* ─── THE CYCLE ─────────────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            The Cycle
          </h2>
          <p style={bodyStyle}>
            Every cycle begins at physiological baseline — the nervous system at rest, resources available but not deployed. The nervous system detects something, evaluates it for safety or threat, generates a physiological response encoding what was detected, and reorganises into a different physiological configuration. By the time the CLS registers that something has happened, the ESS has already detected the cue, matched it to past patterns, organised a response, and shifted the nervous system&#39;s configuration.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            The cycle has two possible paths. When the CLS can receive the ESS&#39;s physiological signals — when the biological architecture connecting the two systems is available — the body completes its restoration sequence: stress hormones metabolise, muscles release, the HPA axis stands down, and the nervous system returns toward physiological baseline. The activation resolves. The cycle does not need to repeat.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            When the CLS cannot receive the ESS&#39;s signals — when it overrides the physiological activation with narrative, management, or suppression — the restoration sequence does not run to its endpoint. Cortisol continues circulating. Muscles stay braced. Neural circuits remain organised for threat. Across repeated incomplete cycles, the residue accumulates, the resting activation level shifts upward, and the nervous system searches for anything that produces the neurochemical relief that biological restoration would have provided.
          </p>
        </section>

        {/* ─── VISUAL RELATIONSHIP MAP ────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            Four Models, One Sequence
          </h2>
          <p style={{ ...bodyStyle, marginBottom: 16 }}>
            Each model maps a different stage of the Emotional Somatic Cycle. Together they describe one process — from the signal the nervous system generates through the state it produces through whether the cycle completes to whether the person can perceive any of it happening.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {MODELS.map((model, i) => (
              <div key={model.id}>
                <ModelLayer model={model} />
                {i < MODELS.length - 1 && (
                  <Connector connector={CONNECTORS[i]} topColor={model.color} bottomColor={MODELS[i + 1].color} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── M1 DETAIL ────────────────────────────────────── */}
        <ModelDetail
          id="M1"
          title="Emotions as Signals"
          role="The Signal Language"
          color={SPECTRUM.azure}
          href="/model/m1-emotions-as-signals"
        >
          <p style={bodyStyle}>
            The nervous system generates a physiological response pattern — hormonal, neurochemical, muscular — encoding a finding about what was detected. Each pattern is distinct. The hormonal, neurochemical, and muscular configuration the nervous system generates for a boundary crossing is different from the configuration it generates for a loss, a threat, or a moment of safety.
          </p>
          <div style={modesLabelStyle(SPECTRUM.azure)}>
            Sixteen emotions organized by body signature:
          </div>
          <ul style={listStyle}>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Mobilization</strong> — Fear, Anger, Stress, Anxiety</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Expulsion</strong> — Disgust</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Social Withdrawal</strong> — Shame, Guilt</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Conservation</strong> — Sadness</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Approach &amp; Expansion</strong> — Joy, Happiness, Admiration, Pride</li>
            <li><strong style={{ color: TEXT.primary }}>Bonding &amp; Proximity</strong> — Love, Trust, Gratitude, Compassion</li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: 16 }}>
            <strong style={{ color: TEXT.primary }}>The central distinction:</strong> Somatic emotions can complete through the body&#39;s own channels — movement, discharge, physiological settling. Relational emotions require another person. Relational completion is a biological requirement built into the signal architecture.
          </p>
        </ModelDetail>

        {/* ─── M2 DETAIL ────────────────────────────────────── */}
        <ModelDetail
          id="M2"
          title="Nervous System States"
          role="The Instrument"
          color={SPECTRUM.azure}
          href="/model/m2-nervous-system-states"
        >
          <p style={bodyStyle}>
            The nervous system reorganises into a different physiological configuration in response to the signal. Perception narrows or widens. Cognitive flexibility increases or decreases. Muscle tension redistributes. Sensory filtering adjusts. The body configures itself for what the evaluation determined the situation requires.
          </p>
          <div style={modesLabelStyle(SPECTRUM.azure)}>
            Four modes — positions on a continuous gradient:
          </div>
          <ul style={listStyle}>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Connection</strong> (Teal) — Safety perceived. Parasympathetic-dominant. Broader perception, cognitive flexibility, empathic capacity available.</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Protection</strong> (Yellow) — Threat perceived. Attention narrows, self-preservation prioritised. Temporary by design.</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Control</strong> (Orange) — Cognition recruited into threat service. Deliberate, anticipatory, time-limited in designed operation.</li>
            <li><strong style={{ color: TEXT.primary }}>Domination</strong> (Pink) — Maximum cognitive override. Designed as rare; costly if chronic.</li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: 16 }}>
            <strong style={{ color: TEXT.primary }}>The central principle:</strong> The current position on the gradient determines what the person can perceive, think, feel, and learn. Any state can be temporary and functional. Any state can also become chronic when the nervous system cannot return to physiological baseline.
          </p>
        </ModelDetail>

        {/* ─── M3 DETAIL ────────────────────────────────────── */}
        <ModelDetail
          id="M3"
          title="Regulation Capacities"
          role="The Return Pathway"
          color={SPECTRUM.indigo}
          href="/model/m3-regulation-capacities"
        >
          <p style={bodyStyle}>
            The cycle has two paths. In Path A, the mobilised physiological resources are expended, the restoration sequence runs to its endpoint — stress hormones metabolise, muscles release, the HPA axis stands down, inflammatory compounds clear — and the nervous system returns toward physiological baseline. This is the body&#39;s designed completion process, operating at zero cost.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            In Path B, the CLS overrides the ESS&#39;s physiological signals. The restoration sequence does not run to its endpoint. A cascade follows: incomplete restoration, unresolved activation load, debris accumulation — cortisol, muscle tension, sensitised neural circuits, inflammatory compounds — baseline elevation, and restoration substitutes. Each incomplete cycle raises the floor. The next activation starts from a system already carrying unresolved load.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            Two designed completion pathways exist. Somatic emotions can complete through the body&#39;s own channels. Relational emotions require another person — relational completion is a biological requirement, not a psychological preference.
          </p>
        </ModelDetail>

        {/* ─── M4 DETAIL ────────────────────────────────────── */}
        <ModelDetail
          id="M4"
          title="Awareness Capacities"
          role="The Calibration"
          color={SPECTRUM.cobalt}
          href="/model/m4-awareness-capacities"
        >
          <p style={bodyStyle}>
            Everything in the cycle above happened in milliseconds. The ESS detected, evaluated, generated a physiological response, and shifted the nervous system&#39;s configuration before the CLS registered that anything changed. Whether the CLS can receive the ESS&#39;s physiological signals determines everything that follows — the fork between Path A and Path B.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            This is determined by the state of the biological architecture connecting the two systems — whether the CLS has a channel to receive the ESS&#39;s physiological signals, or whether it is operating without that data. When the biological architecture connecting the two systems was never built — when the interoceptive substrate was never developed during early relational experience — cognitive override is not an event. It is the permanent structure the CLS was built with.
          </p>
          <div style={modesLabelStyle(SPECTRUM.cobalt)}>
            Three awareness capacities:
          </div>
          <ul style={listStyle}>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Interpersonal Affect Perception (RE)</strong> — Perceiving what others are feeling through facial expression, tone, body language, context.</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Affective Resonance (ER)</strong> — Feeling what others are feeling. The body&#39;s resonance with another person&#39;s physiological state.</li>
            <li><strong style={{ color: TEXT.primary }}>Interoceptive Self-Awareness (SEA)</strong> — Whether the body&#39;s internal signals are reaching conscious processing as readable information.</li>
          </ul>
        </ModelDetail>

        {/* ─── INTEGRATION ────────────────────────────────── */}
        <section
          id="integration"
          style={{
            marginBottom: 48,
            padding: "20px 24px",
            background: hexToRgba(SPECTRUM.cobalt, 0.04),
            borderRadius: RADIUS.md,
            border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.12)}`,
          }}
        >
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 12 }}>
            How the Four Models Work Together
          </h2>
          <div style={sectionLabelStyle(SPECTRUM.cobalt)}>
            One Process, Four Questions
          </div>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: "0 0 12px" }}>
            Every concept in every model maps a part of the same cycle. M1 maps what the nervous system detects and the physiological response it generates. M2 maps how the nervous system reorganises in response to that signal. M3 maps whether the restoration sequence completes or the activation remains unresolved. M4 maps the biological architecture that determines which path the cycle follows.
          </p>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: "0 0 12px" }}>
            The relationship between M3 and M4 is the branching point. M4 determines whether the CLS can receive the ESS&#39;s physiological signals. That single condition determines whether the body&#39;s activation sequence completes (Path A) or stays open (Path B). The awareness capacities develop through the restoration sequence completing. And the restoration sequence completes through the awareness architecture being available.
          </p>
          <div style={{ fontSize: 13, color: TEXT.muted, lineHeight: 1.7, padding: "12px 16px", background: hexToRgba(SPECTRUM.cobalt, 0.04), borderRadius: RADIUS.sm, borderLeft: `2px solid ${hexToRgba(SPECTRUM.cobalt, 0.3)}` }}>
            <p style={{ margin: "0 0 8px" }}><strong style={{ color: TEXT.primary }}>At physiological baseline:</strong> Capacities are available but not deployed. The restoration sequence is not running — the architecture exists, the conditions are not being tested. The person can enter any state and return.</p>
            <p style={{ margin: "0 0 8px" }}><strong style={{ color: TEXT.primary }}>In acute activation:</strong> Capacities have shifted — temporary resource reallocation. The restoration sequence is available when conditions are present. The awareness architecture is under load but functional. The restrictions are temporary.</p>
            <p style={{ margin: 0 }}><strong style={{ color: TEXT.primary }}>In chronic activation:</strong> The capacity restrictions are sustained. The restoration pathway is blocked. And the instrument that would detect either condition is the instrument that chronic activation degrades.</p>
          </div>
        </section>

        {/* ─── THE FRAMEWORKS ────────────────────────────── */}
        <section
          style={{
            marginBottom: 48,
            padding: "12px 16px",
            background: hexToRgba(SPECTRUM.cobalt, 0.06),
            borderRadius: RADIUS.md,
            border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.15)}`,
          }}
        >
          <div style={sectionLabelStyle(SPECTRUM.cobalt)}>
            Models and Frameworks
          </div>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: "0 0 8px" }}>
            The models describe <em>what is happening</em> — the mechanism as it operates right now, in any person. The twelve frameworks describe <em>why it is happening this way</em> — the origin, development, and scaling of the mechanism. Where it comes from, how a specific person got their specific configuration, and what happens when the mechanism operates at collective scale.
          </p>
          <Link
            href="/frameworks-map"
            style={{
              fontSize: 13,
              color: SPECTRUM.cobalt,
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            See the twelve frameworks →
          </Link>
        </section>

        {/* ─── FOOTER LINKS ───────────────────────────────── */}
        <section
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { href: "/publications/validation-study", label: "Validation Study" },
            { href: "/frameworks-map", label: "12 Frameworks" },
            { href: "/foundations", label: "System Overview" },
            { href: "/collaborate", label: "Collaborate" },
            { href: "/explore/labels", label: "Capacity Labels Explorer" },
            { href: "https://teg-blue.com/compass-explorer", label: "Inner Compass (teg-blue.com)", external: true },
          ].map(({ href, label, external }) => {
            const style = {
              padding: "10px 20px",
              background: external ? hexToRgba(SPECTRUM.azure, 0.08) : "transparent",
              color: external ? SPECTRUM.azure : TEXT.muted,
              border: `1px solid ${external ? hexToRgba(SPECTRUM.azure, 0.2) : BORDER.default}`,
              borderRadius: RADIUS.md,
              fontWeight: 500,
              fontSize: 13,
              fontFamily: FONT.mono,
              textDecoration: "none",
              letterSpacing: "0.02em",
            };
            return external ? (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={style}>
                {label}
              </a>
            ) : (
              <Link key={href} href={href} style={style}>
                {label}
              </Link>
            );
          })}
        </section>

      </PageLayout>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Models", url: "/models" },
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
              name: "The Emotional Somatic Cycle | TEG-Blue Research",
              url: "https://teg-blue.org/models",
              cssSelectors: ["article > p:first-of-type", "article h2", "article h2 + p"],
            })
          ),
        }}
      />
    </div>
  );
}

// ─── HELPER COMPONENTS ──────────────────────────────────────

function ModelDetail({ id, title, role, color, href, children }) {
  return (
    <section
      style={{
        marginBottom: 32,
        padding: "20px 24px",
        background: gradientCardBg(color, 0.04),
        borderRadius: RADIUS.lg,
        border: `1px solid ${hexToRgba(color, 0.12)}`,
        borderLeft: `4px solid ${color}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
        <span style={{ fontSize: 13, fontWeight: 700, fontFamily: FONT.mono, color: color }}>{id}</span>
        <h3 style={{ fontSize: 17, fontWeight: 600, color: TEXT.primary, margin: 0 }}>{title}</h3>
      </div>
      <p style={{ fontSize: 12, fontStyle: "italic", color: TEXT.muted, marginBottom: 16, marginTop: 2 }}>
        {role}
      </p>
      {children}
      <div style={{ marginTop: 16 }}>
        <Link href={href} style={{ fontSize: 13, color: color, textDecoration: "none", fontWeight: 500 }}>
          Full model →
        </Link>
      </div>
    </section>
  );
}

function ModelLayer({ model }) {
  return (
    <Link
      href={model.href}
      style={{
        display: "block",
        textDecoration: "none",
        padding: "20px 24px",
        background: gradientCardBg(model.color, 0.06),
        borderRadius: RADIUS.md,
        border: `1px solid ${hexToRgba(model.color, 0.15)}`,
        borderLeft: `4px solid ${model.color}`,
        transition: "border-color 200ms ease, background 200ms ease",
      }}
    >
      {/* Top row: ID + Role badge */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 700, fontFamily: FONT.mono, color: model.color }}>
          {model.id}
        </span>
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            fontFamily: FONT.mono,
            padding: "3px 10px",
            borderRadius: 100,
            background: hexToRgba(model.color, 0.12),
            color: model.color,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {model.role}
        </span>
        <span style={{ marginLeft: "auto", fontSize: 11, fontFamily: FONT.mono, color: TEXT.hint }}>
          {model.concepts} concepts
        </span>
      </div>

      {/* Title */}
      <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, margin: "0 0 6px", lineHeight: 1.3 }}>
        {model.title}
      </h2>

      {/* Core question */}
      <p style={{ fontSize: 14, fontWeight: 500, color: model.color, fontStyle: "italic", margin: "0 0 10px" }}>
        {model.coreQuestion}
      </p>

      {/* Summary */}
      <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: "0 0 12px" }}>
        {model.summary}
      </p>

      {/* Footer: draws from + read link */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              fontFamily: FONT.mono,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: TEXT.hint,
            }}
          >
            Draws from
          </span>
          <span style={{ fontSize: 11, fontFamily: FONT.mono, color: TEXT.muted }}>
            {model.drawsFrom}
          </span>
        </div>
        <span style={{ fontSize: 13, fontWeight: 500, color: model.color }}>
          Read full model →
        </span>
      </div>
    </Link>
  );
}

function Connector({ connector, topColor, bottomColor }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px 0",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 28,
          top: 0,
          bottom: 0,
          width: 2,
          background: `linear-gradient(to bottom, ${hexToRgba(topColor, 0.4)}, ${hexToRgba(bottomColor, 0.4)})`,
          borderRadius: 1,
        }}
        aria-hidden="true"
      />
      <div
        style={{
          fontSize: 10,
          fontWeight: 600,
          fontFamily: FONT.mono,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: TEXT.muted,
          background: BG.page,
          padding: "2px 12px",
          zIndex: 1,
        }}
      >
        {connector.label}
      </div>
    </div>
  );
}

// ─── SHARED STYLES ──────────────────────────────────────

const bodyStyle = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  margin: 0,
};

const listStyle = {
  paddingLeft: 20,
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  margin: 0,
};

function modesLabelStyle(color) {
  return {
    fontSize: 9,
    fontWeight: 700,
    fontFamily: FONT.mono,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: color,
    marginBottom: 8,
    marginTop: 16,
  };
}

function sectionLabelStyle(color) {
  return {
    fontSize: 9,
    fontWeight: 700,
    fontFamily: FONT.mono,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: color,
    marginBottom: 10,
  };
}
