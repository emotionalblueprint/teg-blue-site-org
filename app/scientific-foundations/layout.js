import { generateScientificFoundationsJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "Established Research — 41 Research Traditions | TEG-Blue Research",
  description: "The bodies of established research that underwrite specific parts of the TEG-Blue architecture. 41 research traditions across 24 domains — from Polyvagal Theory and Attachment to CBT, IFS, and Moral Psychology — with 145+ theoretical contributions, each connected to its architectural function (F1-F12, M1-M4).",
  keywords: [
    "emotional regulation models",
    "Plutchik wheel of emotions",
    "nonviolent communication NVC",
    "cognitive behavioral therapy CBT",
    "polyvagal theory Stephen Porges",
    "zones of regulation",
    "internal family systems IFS",
    "attachment theory",
    "nervous system regulation",
    "emotional intelligence frameworks",
    "TEG-Blue scientific foundations",
    "psychology integration",
    "neuroscience emotions",
    "Carl Rogers organismic valuing",
    "Winnicott true false self",
    "Jung persona",
    "Freud ego model",
    "defense mechanisms",
    "cognitive dissonance",
    "complex PTSD",
    "disorganized attachment"
  ],
  alternates: {
    canonical: "https://teg-blue.org/scientific-foundations",
  },
  openGraph: {
    title: "Established Research — How TEG-Blue Integrates Cross-Disciplinary Findings",
    description: "TEG-Blue connects findings from 41 research traditions — Plutchik, NVC, CBT, Polyvagal, IFS, attachment, trauma, and more — by placing each in sequence inside one architecture. 145+ theoretical contributions, each connected to its architectural function.",
    url: "https://teg-blue.org/scientific-foundations",
    siteName: "TEG-Blue Research",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Established Research — TEG-Blue Research",
    description: "The 41 research traditions and 145+ theoretical contributions that underwrite specific parts of the TEG-Blue architecture.",
  },
};

export default function ScientificFoundationsLayout({ children }) {
  const jsonLd = generateScientificFoundationsJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
