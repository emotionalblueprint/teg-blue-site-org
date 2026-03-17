import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, ResearcherHero } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "The Common Understanding — Reframes | TEG-Blue Research",
  description:
    "What emotions, trauma, bias, empathy, and other commonly used terms actually mean when you trace them back to the nervous system. 15 reframes across 7 frameworks — from moral labels to regulatory mechanisms.",
  keywords: [
    "emotional regulation reframes",
    "nervous system regulation",
    "what emotions actually are",
    "what trauma actually is",
    "what bias actually is",
    "what empathy actually is",
    "emotional technology",
    "TEG-Blue",
  ],
  alternates: {
    canonical: "https://teg-blue.org/reframes",
  },
  openGraph: {
    title: "The Common Understanding — Reframes | TEG-Blue Research",
    description: "What emotions, trauma, bias, empathy, and other commonly used terms actually mean when you trace them back to the nervous system. 15 reframes across 7 frameworks.",
    url: "https://teg-blue.org/reframes",
    siteName: "TEG-Blue Research",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Common Understanding — Reframes | TEG-Blue",
    description: "What emotions, trauma, bias, and empathy actually mean when traced to the nervous system. 15 reframes across 7 frameworks.",
  },
};

const FAQ_ITEMS = [
  {
    question: "What are TEG-Blue reframes?",
    answer: "Reframes are TEG-Blue's translations of commonly used psychological terms from moral labels to regulatory mechanisms. Each reframe takes a term people think they understand — like emotions, trauma, bias, or empathy — and shows what it actually means when traced back to the nervous system. 15 reframes span 7 frameworks.",
  },
  {
    question: "What is the Common Understanding?",
    answer: "The Common Understanding is how most people currently use a term — often as a moral label, character judgment, or oversimplification. TEG-Blue reframes show what the nervous system is actually doing when these terms apply, replacing moral evaluation with mechanistic understanding. For example, 'emotions' moves from 'irrational feelings that interfere with thinking' to 'biological information — the nervous system signalling safety or threat.'",
  },
  {
    question: "Why does TEG-Blue reframe existing terms instead of creating new ones?",
    answer: "Because the existing terms describe real phenomena — but the common understanding of those phenomena often contains a moral judgment or oversimplification that blocks accurate seeing. TEG-Blue reframes keep the phenomenon but replace the moral framing with the mechanism. The goal is clarity about what is actually happening, not new vocabulary.",
  },
];

// ─── REFRAME DATA ────────────────────────────────────────────
// Inline definitions — same length as framework pages
// Grouped by framework, in order (F1 → F7 → M3)

const FRAMEWORK_GROUPS = [
  {
    id: "F1",
    label: "F1 — Emotions as Biological Information",
    href: "/framework/f1-emotional-gradient",
    terms: [
      {
        title: "Emotions",
        slug: "emotions",
        commonUnderstanding:
          "Irrational feelings that interfere with thinking — something to manage, override, or push past.",
        definition:
          "Biological information — the nervous system signalling safety or threat. Emotions are not disruptions to clear thinking. They are data from a guidance system that predates language and cognition.",
      },
      {
        title: "Regulation",
        slug: "regulation",
        commonUnderstanding:
          "Calming down, managing your emotions — getting yourself under control.",
        definition:
          "Physical cleanup — stress hormones metabolised, muscles unclenched, inflammatory compounds cleared, neural circuits recovered. The body returning to baseline. Not a psychological skill. A biological process.",
      },
      {
        title: "People-Pleasing",
        slug: "people-pleasing",
        commonUnderstanding:
          "Low self-esteem, conflict avoidance — being too nice for your own good.",
        definition:
          "Stuck Connection scanning — the scanner filters out own needs, amplifies others' discomfort, reads any tension as 'I caused this.' ER (Emotional Resonance) lands somatically; no SEA (Self-Emotional Awareness) to notice the filtering. The system regulates by managing others' states.",
      },
      {
        title: "Emotional Exhaustion",
        slug: "emotional-exhaustion",
        commonUnderstanding:
          "Being too sensitive, burnout — not being resilient enough.",
        definition:
          "Physiological depletion — the body running out of resources for its own return because those resources are being consumed by someone else's regulation needs. Not a character trait. A resource equation.",
      },
    ],
  },
  {
    id: "F2",
    label: "F2 — Awareness Teaches Awareness",
    href: "/framework/f2-awareness-calibration",
    terms: [
      {
        title: "Empathy",
        slug: "empathy",
        commonUnderstanding:
          "A single trait you either have or lack — being a caring person, or not.",
        definition:
          "Three independent capacities — RE (Reading Emotions), ER (Emotional Resonance), and SEA (Self-Emotional Awareness). What most people call 'empathy' is actually different combinations of these, producing very different outcomes. Sharp RE (Reading Emotions) without ER (Emotional Resonance) reads others for leverage. High ER (Emotional Resonance) without SEA (Self-Emotional Awareness) feels everyone else's pain but cannot track its own depletion.",
      },
    ],
  },
  {
    id: "F3",
    label: "F3 — Adult Cognition & False Coherence",
    href: "/framework/f3-false-coherence",
    terms: [
      {
        title: "False Coherence",
        slug: "false-coherence-reframe",
        commonUnderstanding:
          "Self-deception, denial — lying to yourself about what's really happening.",
        definition:
          "Cognitive regulation — the mind building narratives that maintain the current mode's regulation strategy. Not lying to yourself. Cognition doing the only job it knows how to do when somatic regulation is offline. The narrative reduces threat. The reduction feels like clarity. The clarity hardens into certainty.",
      },
      {
        title: "Projection",
        slug: "projection-reframe",
        commonUnderstanding:
          "A defense mechanism — putting your unwanted feelings onto others.",
        definition:
          "Outsourced regulation — mode-calibrated scanning that detects threats to the active regulation pathway. Not putting feelings onto others. Reading the world through settings designed to protect your only return path. Without SEA (Self-Emotional Awareness), the scanning feels like accurate perception.",
      },
      {
        title: "Validation-Seeking",
        slug: "validation-seeking",
        commonUnderstanding:
          "Insecurity, neediness — fishing for compliments, needing constant reassurance.",
        definition:
          "Emotional regulation — the nervous system seeking external confirmation to settle activation that SEA (Self-Emotional Awareness) cannot process internally. When the internal signal is missing, the system looks outward for what it cannot generate from within.",
      },
    ],
  },
  {
    id: "F4",
    label: "F4 — Rules Regulate",
    href: "/framework/f4-rules-regulate",
    terms: [
      {
        title: "Entitlement",
        slug: "entitlement",
        commonUnderstanding:
          "Arrogance, selfishness, a personality flaw — someone who thinks they deserve more than others.",
        definition:
          "Emotional regulation — the enforcement mechanism that ensures external regulation continues when internal capacity was never built. The demand is not for more than is fair. It is for the only return pathway the system has.",
      },
      {
        title: "Punishment (Relational)",
        slug: "punishment-relational",
        commonUnderstanding:
          "Discipline, consequences, tough love — holding someone accountable for their behaviour.",
        definition:
          "Regulation enforcement — the system's response when its regulation supply is threatened. Boundaries are experienced as attack because they cut off the only return pathway. The punishment is not about the other person's behaviour. It is about restoring the regulation source.",
      },
    ],
  },
  {
    id: "F6",
    label: "F6 — Bias as Regulation",
    href: "/framework/f6-bias-regulates",
    terms: [
      {
        title: "Bias",
        slug: "bias",
        commonUnderstanding:
          "Prejudice, unfairness, a moral failing — something correctable through education, awareness, or shame.",
        definition:
          "Perceptual regulation — the nervous system filtering information to protect a regulation pathway it depends on. The filtering is not a choice. It is the mode's scanner running without SEA (Self-Emotional Awareness). If believing something reduces threat, the nervous system keeps believing it — below conscious awareness. This is why bias resists correction even in intelligent, well-intentioned people: correction threatens the stability the bias provides. Shame does not unlearn bias. Safety does.",
      },
    ],
  },
  {
    id: "F7",
    label: "F7 — Domination Regulates",
    href: "/framework/f7-domination-regulates",
    terms: [
      {
        title: "Domination",
        slug: "domination",
        commonUnderstanding:
          "Power hunger, abuse of authority — the exercise of control over others through coercion, intimidation, or force.",
        definition:
          "Emotional regulation — subjugation of others to settle internal activation that has no other return pathway. There is no amount of domination that will make them feel safe — because the safety they need is internal. This is not a defense of harm. It is the structural account of why chronic domination escalates without limit.",
      },
      {
        title: "Emotional Abuse",
        slug: "emotional-abuse",
        commonUnderstanding:
          "A pattern of manipulation, control, and psychological harm — insults, threats, gaslighting, isolation — that damages self-esteem and emotional wellbeing.",
        definition:
          "A structural dynamic that becomes possible when the capacity to read another's emotional state — RE (Reading Emotions) — exists without the capacity to be moved by it — ER (Emotional Resonance) — and when the capacity to feel deeply exists without the capacity to trust one's own experience as real — SEA (Self-Emotional Awareness). It does not require malice to cause harm. But when malice is present, it marks a shift in mode: the other's pain is no longer invisible — it has become the resource. The harm is no longer a byproduct of dysregulation. It is the regulation.",
      },
      {
        title: "Control (Relational)",
        slug: "control-relational",
        commonUnderstanding:
          "Trust issues, micromanagement — someone who can't let go or let others be.",
        definition:
          "Emotional regulation — the nervous system using predictability as its return pathway. Unpredictability threatens the only regulation strategy the system has. The controlling behaviour is not about the other person. It is about maintaining the conditions the nervous system requires to feel safe.",
      },
    ],
  },
  {
    id: "M3",
    label: "M3 — The Biology of Unfinished Emotion",
    href: "/model/m3-the-open-cycle",
    terms: [
      {
        title: "Trauma",
        slug: "trauma",
        commonUnderstanding:
          "A terrible event that happened to you — something big enough to justify lasting pain.",
        definition:
          "An incomplete biological response — activation the nervous system couldn't fully discharge or integrate, regardless of whether it felt like 'too much' or 'no emotion at all.' Trauma is not defined by the event. It is defined by what the body could not complete.",
      },
    ],
  },
];

// ─── PAGE COMPONENT ──────────────────────────────────────────

export default function ReframesPage() {
  const totalTerms = FRAMEWORK_GROUPS.reduce((sum, g) => sum + g.terms.length, 0);

  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/reframes" />

      <PageLayout
        header={
          <ResearcherHero
            badge="REFRAMES"
            title="The Common Understanding"
            subtitle={`${totalTerms} terms across ${FRAMEWORK_GROUPS.length} frameworks`}
            description="What these words actually mean when you trace them back to the nervous system."
          />
        }
      >
        {/* ─── Introduction ─────────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: TEXT.primary, marginBottom: 16 }}>
            What does TEG-Blue reframe about common emotional concepts?
          </h2>
          <p style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: TEXT.secondary,
            margin: "0 0 24px",
            maxWidth: 680,
          }}>
            Most of the words we use for emotions, relationships, and behaviour describe
            the <em>output</em> of what the nervous system is doing — and evaluate it morally.
            A person is selfish. A reaction is irrational. A pattern is toxic. The label
            names the surface. The mechanism stays invisible.
          </p>
          <p style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: TEXT.secondary,
            margin: "0 0 32px",
            maxWidth: 680,
          }}>
            These reframes trace each term back to the regulatory mechanism underneath.
            Not to excuse harm — but to make it structurally visible rather than morally mysterious.
          </p>

          {/* ─── Principle Box ──────────────────────────── */}
          <div style={{
            borderRadius: 8,
            background: BG.inset,
            border: `1px solid ${BORDER.default}`,
            borderLeft: `3px solid ${SPECTRUM.cobalt}`,
            padding: "20px 24px",
          }}>
            <p style={{
              fontSize: 14,
              lineHeight: 1.8,
              color: TEXT.primary,
              margin: 0,
              fontStyle: "italic",
            }}>
              Almost every term in common use describes the output of a regulation strategy
              and evaluates it morally. TEG-Blue names the mechanism — what the system is
              trying to do and why. This doesn't excuse harm. It makes harm structurally
              visible rather than morally mysterious.
            </p>
          </div>
        </section>

        {/* ─── Reframe Groups ──────────────────────────── */}
        {FRAMEWORK_GROUPS.map((group) => (
          <section key={group.id} id={group.id.toLowerCase()} style={{ marginBottom: 56 }}>
            {/* Framework header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}>
              <Link
                href={group.href}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: FONT.mono,
                  color: SPECTRUM.azure,
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                {group.label}
              </Link>
              <div style={{
                flex: 1,
                height: 1,
                background: hexToRgba(SPECTRUM.slate, 0.2),
              }} />
            </div>

            {/* Reframe cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {group.terms.map((term) => (
                <article key={term.slug} style={{
                  borderRadius: 8,
                  background: BG.inset,
                  border: `1px solid ${BORDER.default}`,
                  borderLeft: `3px solid ${SPECTRUM.slate}`,
                  padding: "20px 24px",
                }}>
                  <h3 style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: TEXT.primary,
                    marginBottom: 16,
                    margin: "0 0 16px",
                  }}>
                    <Link
                      href={`/glossary#${term.slug}`}
                      style={{ color: TEXT.primary, textDecoration: "none" }}
                    >
                      {term.title}
                    </Link>
                  </h3>

                  <div style={{ marginBottom: 16 }}>
                    <div style={{
                      fontSize: 11,
                      fontFamily: FONT.mono,
                      fontWeight: 600,
                      color: TEXT.muted,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: 6,
                    }}>
                      Commonly understood as
                    </div>
                    <p style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: TEXT.secondary,
                      fontStyle: "italic",
                      margin: 0,
                    }}>
                      {term.commonUnderstanding}
                    </p>
                  </div>

                  <div>
                    <div style={{
                      fontSize: 11,
                      fontFamily: FONT.mono,
                      fontWeight: 600,
                      color: TEXT.muted,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: 6,
                    }}>
                      What the nervous system is actually doing
                    </div>
                    <p style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: TEXT.primary,
                      margin: 0,
                    }}>
                      {term.definition}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* ─── Footer Note ─────────────────────────────── */}
        <section style={{
          marginTop: 16,
          marginBottom: 64,
          paddingTop: 32,
          borderTop: `1px solid ${BORDER.default}`,
        }}>
          <p style={{
            fontSize: 14,
            lineHeight: 1.8,
            color: TEXT.muted,
            fontStyle: "italic",
            margin: "0 0 24px",
            maxWidth: 640,
          }}>
            These are not corrections. They are translations — from the language of
            character and morality to the language of the nervous system.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link
              href="/glossary"
              style={{
                fontSize: 13,
                fontFamily: FONT.mono,
                color: SPECTRUM.azure,
                textDecoration: "none",
              }}
            >
              Full glossary →
            </Link>
            <Link
              href="/frameworks-map"
              style={{
                fontSize: 13,
                fontFamily: FONT.mono,
                color: SPECTRUM.azure,
                textDecoration: "none",
              }}
            >
              12 Frameworks →
            </Link>
            <a
              href="https://teg-blue.com/emotional-tools"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                fontFamily: FONT.mono,
                color: SPECTRUM.azure,
                textDecoration: "none",
              }}
            >
              Emotional Tools (teg-blue.com) →
            </a>
          </div>
        </section>
      </PageLayout>

      {/* ─── JSON-LD: Article ──────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": "https://teg-blue.org/reframes#article",
            headline:
              "The Common Understanding — What These Words Actually Mean When You Trace Them Back to the Nervous System",
            description:
              "15 commonly used terms — emotions, trauma, bias, empathy, and more — reframed from moral labels to regulatory mechanisms using the TEG-Blue framework.",
            author: {
              "@type": "Person",
              name: "Anna Paretas-Artacho",
              url: "https://teg-blue.org/about",
            },
            publisher: {
              "@type": "Organization",
              name: "TEG-Blue Research Consortium",
              url: "https://teg-blue.org",
            },
            datePublished: "2026-03-17",
            dateModified: "2026-03-17",
            mainEntityOfPage: "https://teg-blue.org/reframes",
            keywords: [
              "emotional regulation",
              "nervous system regulation",
              "reframes",
              "what emotions actually are",
              "what trauma actually is",
              "what bias actually is",
              "emotional technology",
            ],
          }),
        }}
      />

      {/* ─── JSON-LD: Breadcrumb ───────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Reframes", url: "/reframes" },
            ])
          ),
        }}
      />

      {/* ─── JSON-LD: FAQ ───────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd(FAQ_ITEMS)) }}
      />

      {/* ─── JSON-LD: Speakable ────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "The Common Understanding — Reframes | TEG-Blue Research",
              url: "https://teg-blue.org/reframes",
              cssSelectors: ["article > p:first-of-type", "article h3", "article h3 + div + div p"],
            })
          ),
        }}
      />

      <SiteFooter />
    </div>
  );
}
