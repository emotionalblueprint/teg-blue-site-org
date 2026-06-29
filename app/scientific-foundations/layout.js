import { generateScientificFoundationsJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "Scientific Foundations — Source Grounding",
  description: "The established research traditions, clinical models, communication approaches, and educational tools that ground the public Nervous System Gradient.",
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
    "emotional intelligence research",
    "TEG-Blue established research",
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
    title: "Scientific Foundations — How TEG-Blue Draws From Cross-Disciplinary Research",
    description: "Source traces and research grounding behind the public Nervous System Gradient, including emotion science, polyvagal theory, attachment, trauma research, CBT, NVC, and educational regulation tools.",
    url: "https://teg-blue.org/scientific-foundations",
    siteName: "TEG-Blue",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scientific Foundations — TEG-Blue",
    description: "Research traditions and applied models that ground the public Nervous System Gradient.",
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
