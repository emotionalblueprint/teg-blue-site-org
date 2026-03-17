import Link from "next/link";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM,
  hexToRgba, RADIUS, gradientCardBg,
} from "@/src/styles/tokens";
import {
  SiteHeader, SiteFooter, ModelHero, PageLayout,
} from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

const FAQ_ITEMS = [
  {
    question: "What are the three TEG-Blue models?",
    answer: "The three models are M1: Inner Compass and Four-Mode Gradient (the instrument — where is the needle?), M2: Three Awareness Capacities (the calibration — what is holding it there?), and M3: The Biology of Unfinished Emotion (the biological foundation — what is the body doing underneath?). The frameworks explain why. The models provide what — the applied tools that practitioners, researchers, and individuals actually use.",
  },
  {
    question: "What is the Inner Compass model?",
    answer: "M1, the Inner Compass, maps how the nervous system orients between safety and threat across four modes on a continuous gradient: Connection, Protection, Control, and Domination. The core question it answers is: where is the needle, can it move, and what does the person have access to from where they are?",
  },
  {
    question: "What are the Three Awareness Capacities?",
    answer: "M2 describes Reading Emotions (RE), Emotional Resonance (ER), and Self-Emotional Awareness (SEA) — the three awarenesses that determine what data the compass receives, how that data is processed, and whether the person has access to their own internal state. These capacities develop through relationship and determine the compass configuration.",
  },
];

// ─── MODEL DATA ─────────────────────────────────────────────

const MODELS = [
  {
    id: "M1",
    role: "The Instrument",
    title: "Inner Compass & Four-Mode Gradient",
    coreQuestion: "Where is the needle?",
    summary:
      "How the nervous system orients between safety and threat across four modes on a continuous gradient. What each mode enables and restricts. How the compass gets stuck and how the return restores it.",
    concepts: 10,
    drawsFrom: "F1, F3, F7, F12",
    color: SPECTRUM.azure,
    href: "/model/m1-inner-compass",
  },
  {
    id: "M2",
    role: "The Calibration",
    title: "Three Awareness Capacities",
    coreQuestion: "What is holding it there?",
    summary:
      "The three awarenesses — Reading Emotions, Emotional Resonance, and Self-Emotional Awareness — that determine what data the compass receives, how that data is processed, and whether the person has access to their own internal state.",
    concepts: 10,
    drawsFrom: "F2, F3, F8, F10",
    color: SPECTRUM.cobalt,
    href: "/model/m2-three-awareness-capacities",
  },
  {
    id: "M3",
    role: "The Biological Foundation",
    title: "The Biology of Unfinished Emotion",
    coreQuestion: "What is the body doing underneath?",
    summary:
      "The physiological sequence that runs when the nervous system perceives a threat, what the body does when that sequence is allowed to complete, and what happens when cognition overrides it instead.",
    concepts: 7,
    drawsFrom: "F1, F2, F3, F8, F12",
    color: SPECTRUM.indigo,
    href: "/model/m3-the-open-cycle",
  },
];

const CONNECTORS = [
  { label: "calibrates", description: "M2 determines how well the compass (M1) can read its own data" },
  { label: "runs underneath", description: "M3 maps the biology that M1 and M2 sit on top of" },
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
            badge="3 FOUNDATIONAL MODELS"
            title="The Three Core Models"
            subtitle="Instrument + Calibration + Biological Foundation"
            description="Each model makes a different dimension of the emotional system visible. Together, they map how emotional patterns form, persist, and change — where the nervous system is oriented, what calibrated it, and what the body is doing underneath."
            color={SPECTRUM.cobalt}
          />
        }
      >
        {/* ─── VISUAL RELATIONSHIP MAP ────────────────────── */}
        <section style={{ marginTop: 8, marginBottom: 48 }}>
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
          title="Inner Compass & Four-Mode Gradient"
          role="The instrument"
          color={SPECTRUM.azure}
          href="/model/m1-inner-compass"
        >
          <p style={bodyStyle}>
            The nervous system continuously evaluates one question: <em>Is there enough safety to engage, or is protection needed?</em> The Inner Compass is the name for that orientation mechanism. The Four-Mode Gradient is the continuous range it moves through.
          </p>
          <div style={modesLabelStyle(SPECTRUM.azure)}>
            Four modes — not types, not stages. Positions on a gradient:
          </div>
          <ul style={listStyle}>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Connection</strong> (Teal) — Safety perceived. Body-first. All three awareness capacities online. The system designed for sustained living.</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Protection</strong> (Yellow) — Threat perceived. Body-first. Attention narrows, self-preservation prioritised. Healthy and temporary by design.</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Control</strong> (Orange) — Cognition recruited into threat service. Deliberate, anticipatory, time-limited in designed operation.</li>
            <li><strong style={{ color: TEXT.primary }}>Domination</strong> (Pink) — Maximum cognitive override. Decisive, final. Designed as rare; costly if chronic.</li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: 16 }}>
            <strong style={{ color: TEXT.primary }}>The central principle:</strong> Health is not a position. Health is mobility — the needle&apos;s capacity to move. A Fluid Compass moves through all four modes and returns. A Stuck Compass is one where the needle has stopped moving. What should have been temporary has become identity.
          </p>
          <QuoteBlock>
            A fluid compass does not stay in Connection permanently — fluid operation is the ability to move through the gradient and come back.
          </QuoteBlock>
          <StatusBadge status="Proposed model with early evidence" color={SPECTRUM.azure} />
          <p style={{ fontSize: 13, color: TEXT.muted, marginTop: 8 }}>
            See <Link href="/publications" style={{ color: SPECTRUM.blue, textDecoration: "none" }}>Publications</Link> for what is currently tested.
          </p>
        </ModelDetail>

        {/* ─── M2 DETAIL ────────────────────────────────────── */}
        <ModelDetail
          id="M2"
          title="Three Awareness Capacities"
          role="The calibration system"
          color={SPECTRUM.cobalt}
          href="/model/m2-three-awareness-capacities"
        >
          <p style={bodyStyle}>
            The compass (M1) is the instrument. The three awareness capacities determine what data it receives, how accurately it reads, and whether the person has access to their own internal state.
          </p>
          <div style={modesLabelStyle(SPECTRUM.cobalt)}>
            The three capacities:
          </div>
          <ul style={listStyle}>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Reading Emotions (RE)</strong> — Perceiving what others are feeling: faces, tone, body language, context.</li>
            <li style={{ marginBottom: 6 }}><strong style={{ color: TEXT.primary }}>Emotional Resonance (ER)</strong> — Feeling what others are feeling. The body&apos;s resonance with another person&apos;s state.</li>
            <li><strong style={{ color: TEXT.primary }}>Self-Emotional Awareness (SEA)</strong> — Perceiving and naming your own internal state. The capacity that separates &ldquo;I feel bad&rdquo; from &ldquo;I feel guilty because I hurt someone.&rdquo;</li>
          </ul>
          <p style={{ ...bodyStyle, marginTop: 16 }}>
            <strong style={{ color: TEXT.primary }}>The key insight:</strong> RE stays sharp across the entire gradient — it just changes what it serves. In a Fluid Compass it serves understanding. In a Stuck Compass it serves the mode. ER degrades differently per mode. SEA degrades progressively: present in Fluid modes, flickering in transitional states, gone in Stuck modes. It is the last capacity to go offline and the first that needs to come back. Its level determines whether the other two capacities serve the person or serve the stuck position.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            <strong style={{ color: TEXT.primary }}>Why this matters for discernment:</strong> The configuration RE sharp + ER absent + SEA absent — found in Chronic Control and Chronic Domination — enables precise emotional reading with no internal feedback. The person may be the most accurate emotional reader in the room and cause the most harm, because the capacities that would register that harm have been structurally shut down. This is what makes trauma-driven protection and strategic manipulation look identical on the surface, and why distinguishing them matters.
          </p>
          <StatusBadge status="Proposed model, grounded in established research" color={SPECTRUM.cobalt} />
        </ModelDetail>

        {/* ─── M3 DETAIL ────────────────────────────────────── */}
        <ModelDetail
          id="M3"
          title="Biological Restoration"
          role="The fork"
          color={SPECTRUM.indigo}
          href="/model/m3-the-open-cycle"
        >
          <p style={bodyStyle}>
            When the nervous system perceives a threat, a precise biological cascade activates — hormonal, neurochemical, whole-body — before any conscious thought forms. This cascade was designed to complete. Activation → expression → parasympathetic return → cortisol clearance → baseline. The body has a built-in endpoint.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            When cognition overrides the emotion — labelling it irrelevant, dangerous, or weak — the override reaches awareness, not biology. The cascade continues below the threshold of access.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            This is not a suppressed feeling. It is an open biological cycle. Cortisol still releasing, amygdala still sensitising, organs still in survival configuration. Each unprocessed cycle adds to allostatic load — measurable cumulative wear on the body&apos;s regulatory systems.
          </p>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            Biological Restoration is the name for the designed completion process. It cannot be forced. It can only be allowed. And it is not automatic — it must be learned, through co-regulation, through the repeated experience of another person&apos;s regulated nervous system demonstrating that return is possible.
          </p>
          <QuoteBlock>
            The body has no mechanism for receiving philosophical decisions. Deciding an emotion is not important does not change the cortisol level.
          </QuoteBlock>
          <p style={{ ...bodyStyle, marginTop: 12 }}>
            M3 is the physiological substrate that explains why the gradient exists, why the compass gets stuck, and why insight alone does not produce change.
          </p>
          <StatusBadge status="Built on established stress physiology — framing as 'Biological Restoration' is TEG-Blue's contribution" color={SPECTRUM.indigo} />
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
            How do the three TEG-Blue models work together?
          </h2>
          <div style={sectionLabelStyle(SPECTRUM.cobalt)}>
            Three Dimensions of One Reality
          </div>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, margin: 0 }}>
            A compass position (M1) without a capacity configuration (M2) is a reading without an explanation. A capacity configuration without a compass position is an architecture without a location. And both without the physiological foundation (M3) are a map drawn above ground with no account of what is running underneath.
          </p>
          <p style={{ fontSize: 14, color: TEXT.primary, lineHeight: 1.8, margin: "12px 0 0", fontWeight: 500 }}>
            Complete understanding requires all three: where is the needle, what is holding it there, and what is the body doing while it stays stuck?
          </p>
        </section>

        {/* ─── REGULATION THREAD ─────────────────────────── */}
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
            Regulation Thread
          </div>
          <p style={{ fontSize: 14, color: TEXT.secondary, lineHeight: 1.7, margin: "0 0 8px" }}>
            M3 maps the biology of the thread: the physiological sequence that runs when emotion doesn&apos;t complete. When that sequence is blocked, the nervous system recruits substitutes — at every scale, at a cost. The 12 frameworks trace those substitutes from individual cognition to systemic domination.
          </p>
          <Link
            href="/frameworks-map#the-regulation-thread"
            style={{
              fontSize: 13,
              color: SPECTRUM.cobalt,
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            See the full thread →
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
              name: "The Three Models | TEG-Blue Research",
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

function QuoteBlock({ children }) {
  return (
    <blockquote
      style={{
        margin: "16px 0",
        padding: "12px 16px",
        borderLeft: `2px solid ${SPECTRUM.cobalt}`,
        background: hexToRgba(SPECTRUM.cobalt, 0.04),
        borderRadius: `0 ${RADIUS.sm}px ${RADIUS.sm}px 0`,
      }}
    >
      <p style={{ fontSize: 14, fontStyle: "italic", color: TEXT.primary, lineHeight: 1.7, margin: 0 }}>
        &ldquo;{children}&rdquo;
      </p>
    </blockquote>
  );
}

function StatusBadge({ status, color }) {
  return (
    <span
      style={{
        display: "inline-flex",
        fontSize: 11,
        fontWeight: 600,
        fontFamily: FONT.mono,
        color: color,
        padding: "4px 10px",
        background: hexToRgba(color, 0.1),
        borderRadius: 4,
        marginTop: 12,
      }}
    >
      Status: {status}
    </span>
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
