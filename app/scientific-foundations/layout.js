import { generateScientificFoundationsJsonLd } from "@/src/lib/jsonld";

export const metadata = {
  title: "Scientific Foundations — TEG-Blue",
  description: "Research areas that help illuminate the Nervous System Gradient: emotion, state, attachment, trauma, cognition, communication, social patterns, and repair.",
  keywords: [
    "TEG-Blue scientific foundations",
    "Nervous System Gradient",
    "affective neuroscience",
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
    description: "Research areas that help make emotional, nervous-system, relational, and social patterns visible.",
    url: "https://teg-blue.org/scientific-foundations",
    siteName: "TEG-Blue",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scientific Foundations — TEG-Blue",
    description: "Research areas that help make emotional, nervous-system, relational, and social patterns visible.",
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
