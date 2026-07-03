import { generateScientificFoundationsJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "Scientific Grounding",
  description: "Research areas that support specific parts of the TEG-Blue map while each field remains itself.",
  keywords: [
    "TEG-Blue scientific grounding",
    "TEG-Blue scientific foundations",
    "Nervous System Gradient",
    "affective neuroscience",
    "biology and physiology",
    "autonomic neuroscience",
    "autonomic physiology",
    "attachment research",
    "trauma research",
    "emotion science",
    "cognitive science",
    "psychology",
    "social psychology",
    "sociology",
    "repair capacity",
    "state-shaped capacity"
  ],
  alternates: {
    canonical: "https://teg-blue.org/scientific-foundations",
  },
  openGraph: {
    title: "Scientific Grounding - TEG-Blue",
    description: "Research areas, field boundaries, and claim discipline behind the TEG-Blue map.",
    url: "https://teg-blue.org/scientific-foundations",
    siteName: "TEG-Blue",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scientific Grounding - TEG-Blue",
    description: "Research areas, field boundaries, and claim discipline behind the TEG-Blue map.",
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
