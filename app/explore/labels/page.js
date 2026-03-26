import Link from "next/link";
import { BG, TEXT, BORDER, FONT, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter, PageLayout, ResearcherHero, CapacityLabelsExplorer } from "@/src/components";
import { generateBreadcrumbJsonLd, generateFAQJsonLd, generateSpeakableJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "What Labels Actually Map — Capacity Explorer | TEG-Blue Research",
  description:
    "19 psychology labels mapped to three awareness capacities. Explore how RE (Reading Emotions), ER (Emotional Resonance), and SEA (Self-Emotional Awareness) configurations produce every pattern psychology has named separately.",
  keywords: [
    "capacity configurations",
    "awareness capacities",
    "reading emotions",
    "emotional resonance",
    "self-emotional awareness",
    "narcissist capacity",
    "empath capacity",
    "attachment styles",
    "trauma responses",
    "emotional technology",
    "TEG-Blue",
  ],
  alternates: {
    canonical: "https://teg-blue.org/explore/labels",
  },
  openGraph: {
    title: "What Labels Actually Map — Capacity Explorer | TEG-Blue Research",
    description: "19 psychology labels mapped to three awareness capacities. Interactive explorer showing how Reading Emotions (RE), Emotional Resonance (ER), and Self-Emotional Awareness (SEA) produce every pattern psychology has named separately.",
    url: "https://teg-blue.org/explore/labels",
    siteName: "TEG-Blue Research",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Labels Actually Map — Capacity Explorer | TEG-Blue",
    description: "19 labels, 3 capacities. Interactive explorer showing what narcissist, empath, codependent, and other labels actually map to.",
  },
};

const FAQ_ITEMS = [
  {
    question: "What are capacity configurations in TEG-Blue?",
    answer: "Capacity configurations are specific combinations of three awareness capacities — RE (Reading Emotions), ER (Emotional Resonance), and SEA (Self-Emotional Awareness). Each popular psychology label (empath, narcissist, codependent, etc.) maps to a specific configuration of these three capacities. The same three capacities in different combinations produce every pattern psychology has named separately.",
  },
  {
    question: "What do RE, ER, and SEA measure?",
    answer: "RE (Reading Emotions) measures the capacity to perceive what others feel. ER (Emotional Resonance) measures whether others' emotions land in your body — genuine felt resonance. SEA (Self-Emotional Awareness) measures the capacity to track your own internal state and distinguish what is yours from what belongs to someone else. These three capacities operate independently and can each be full, partial, minimal, or offline.",
  },
  {
    question: "Why does TEG-Blue map labels to capacities instead of treating them as personality types?",
    answer: "Because labels like 'empath' or 'narcissist' describe outputs — recognizable patterns — but flatten them into fixed identities. TEG-Blue tracks the three underlying capacities that produce those patterns. This matters because capacities can change. A codependent configuration (Full RE, Overwhelmed ER, Offline SEA) is not a permanent identity — it is a description of which capacities are currently online and which are not.",
  },
];

export default function ExploreLabelsPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG.page, fontFamily: FONT.display }}>
      <SiteHeader currentPath="/explore/labels" />

      <PageLayout
        header={
          <ResearcherHero
            badge="EXPLORE"
            title="What Labels Actually Map"
            subtitle="19 labels · 3 capacities · 1 compass"
            description="Every popular psychology label — narcissist, empath, codependent, people-pleaser — maps to a specific configuration of three awareness capacities. Drag the sliders to see what each label actually describes."
          />
        }
      >
        <CapacityLabelsExplorer />

        {/* ─── Footer cross-links ────────────────────── */}
        <section style={{
          marginTop: 48, paddingTop: 32,
          borderTop: `1px solid ${BORDER.default}`,
        }}>
          <p style={{
            fontSize: 14, lineHeight: 1.8,
            color: TEXT.muted, fontStyle: "italic",
            margin: "0 0 24px", maxWidth: 640,
          }}>
            Labels describe outputs. Capacities describe the mechanism.
            The same three capacities in different combinations produce every pattern
            psychology has named separately.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link
              href="/model/m4-awareness-capacities"
              style={{
                fontSize: 13, fontFamily: FONT.mono,
                color: SPECTRUM.azure, textDecoration: "none",
              }}
            >
              Awareness Capacities (M4) →
            </Link>
            <Link
              href="/frameworks-map"
              style={{
                fontSize: 13, fontFamily: FONT.mono,
                color: SPECTRUM.azure, textDecoration: "none",
              }}
            >
              12 Frameworks →
            </Link>
            <Link
              href="/reframes"
              style={{
                fontSize: 13, fontFamily: FONT.mono,
                color: SPECTRUM.azure, textDecoration: "none",
              }}
            >
              Reframes →
            </Link>
            <a
              href="https://teg-blue.com/emotional-tools"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13, fontFamily: FONT.mono,
                color: SPECTRUM.azure, textDecoration: "none",
              }}
            >
              Emotional Tools (teg-blue.com) →
            </a>
          </div>
        </section>
      </PageLayout>

      {/* ─── JSON-LD: Article ────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": "https://teg-blue.org/explore/labels#article",
            headline: "What Labels Actually Map — 19 Psychology Labels as Capacity Configurations",
            description: "19 popular psychology labels mapped to three awareness capacities (RE, ER, SEA). Interactive explorer showing how the same three capacities produce every pattern psychology has named separately.",
            author: {
              "@type": "Person",
              name: "Anna Paretas-Artacho",
              url: "https://teg-blue.org/about",
            },
            publisher: {
              "@type": "Organization",
              name: "TEG-Blue Research",
              url: "https://teg-blue.org",
            },
            datePublished: "2026-03-17",
            dateModified: "2026-03-17",
            mainEntityOfPage: "https://teg-blue.org/explore/labels",
            keywords: [
              "capacity configurations",
              "awareness capacities",
              "reading emotions",
              "emotional resonance",
              "self-emotional awareness",
              "narcissist",
              "empath",
              "codependent",
              "attachment styles",
              "emotional technology",
            ],
          }),
        }}
      />

      {/* ─── JSON-LD: Breadcrumb ─────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Explore", url: "/explore/labels" },
              { name: "Labels", url: "/explore/labels" },
            ])
          ),
        }}
      />

      {/* ─── JSON-LD: FAQ ────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd(FAQ_ITEMS)) }}
      />

      {/* ─── JSON-LD: Speakable ──────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableJsonLd({
              name: "What Labels Actually Map — Capacity Explorer | TEG-Blue Research",
              url: "https://teg-blue.org/explore/labels",
              cssSelectors: ["section > p", "article h3"],
            })
          ),
        }}
      />

      <SiteFooter />
    </div>
  );
}
