export const metadata = {
  title: "The Emotional Somatic Cycle | TEG-Blue Research",
  description:
    "The Emotional Somatic Cycle (ESC) — the repeating biological sequence two information systems run together. Detection → Signal → State → Restoration or Incompletion.",
  keywords: [
    "emotional somatic cycle",
    "ESC",
    "nervous system",
    "biological restoration",
    "signal generation",
    "state activation",
    "cognitive override",
    "ESS",
    "CLS",
    "physiological baseline",
  ],
  alternates: {
    canonical: "https://teg-blue.org/emotional-somatic-cycle",
  },
  openGraph: {
    title: "The Emotional Somatic Cycle | TEG-Blue Research",
    description:
      "The repeating biological sequence the nervous system runs — from signal through state through restoration or incompletion.",
    url: "https://teg-blue.org/emotional-somatic-cycle",
    siteName: "TEG-Blue Research",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Emotional Somatic Cycle | TEG-Blue Research",
    description:
      "The repeating biological sequence the nervous system runs — from signal through state through restoration or incompletion.",
  },
};

export default function ESCLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The Emotional Somatic Cycle — TEG-Blue",
    url: "https://teg-blue.org/emotional-somatic-cycle",
    description:
      "The Emotional Somatic Cycle (ESC) — the repeating biological sequence the ESS and CLS run together. Detection, signal generation, state activation, and the branching point that determines completion or incompletion.",
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
