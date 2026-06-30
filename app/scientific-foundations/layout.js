import { generateScientificFoundationsJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "Scientific Foundations",
  description: "Research areas that help make parts of the TEG-Blue map visible: emotion, Polyvagal Theory, state, attachment, trauma, cognition, communication, relationship patterns, context, and repair.",
  keywords: [
    "TEG-Blue scientific foundations",
    "Nervous System Gradient",
    "affective neuroscience",
    "Polyvagal Theory",
    "neuroception",
    "autonomic physiology",
    "attachment theory",
    "trauma research",
    "emotion science",
    "cognitive science",
    "social psychology",
    "sociology",
    "repair capacity",
    "state-shaped capacity"
  ],
  alternates: {
    canonical: "https://teg-blue.org/scientific-foundations",
  },
  openGraph: {
    title: "Scientific Foundations — TEG-Blue",
    description: "Research areas behind the map: emotion, Polyvagal Theory, state, attachment, trauma, context, accountability, and repair.",
    url: "https://teg-blue.org/scientific-foundations",
    siteName: "TEG-Blue",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scientific Foundations — TEG-Blue",
    description: "Research areas behind the map: emotion, Polyvagal Theory, state, attachment, trauma, context, accountability, and repair.",
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
