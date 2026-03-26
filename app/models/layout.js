export const metadata = {
  title: "The Emotional Somatic System | TEG-Blue Research",
  description:
    "Four foundational models: Emotions as Signals (the signal language), Nervous System States (the instrument), Regulation Capacities (the return pathway), and Awareness Capacities (the calibration). Signal → State → Regulation → Perception.",
  keywords: [
    "TEG-Blue models",
    "emotional somatic system",
    "emotions as signals",
    "nervous system states",
    "four-mode gradient",
    "awareness capacities",
    "emotional technology",
    "nervous system regulation",
    "reading emotions",
    "emotional resonance",
    "self-emotional awareness",
    "connection protection control domination",
    "applied models",
    "calibration system",
  ],
  alternates: {
    canonical: "https://teg-blue.org/models",
  },
  openGraph: {
    title: "The Emotional Somatic System — Signal + State + Regulation + Perception | TEG-Blue",
    description:
      "Emotions as Signals (what the nervous system delivers), Nervous System States (what state it produces), Regulation Capacities (whether the cycle completes), and Awareness Capacities (whether the signal can be received). Four foundational models.",
    url: "https://teg-blue.org/models",
    siteName: "TEG-Blue Research",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Emotional Somatic System — TEG-Blue Research",
    description:
      "Signal + State + Regulation + Perception. Four foundational models that make the nervous system's orientation visible and measurable.",
  },
};

export default function ModelsLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The Emotional Somatic System — TEG-Blue",
    url: "https://teg-blue.org/models",
    description:
      "The four foundational models of TEG-Blue: Emotions as Signals (the signal language), Nervous System States (the instrument), Regulation Capacities (the return pathway), and Awareness Capacities (the calibration system).",
    inLanguage: "en",
    isPartOf: {
      "@type": "ResearchProject",
      name: "TEG-Blue: The Emotional Gradient Blueprint",
      url: "https://teg-blue.org",
    },
  };

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
