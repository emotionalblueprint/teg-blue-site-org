import { getModel } from "@/src/data/frameworks";
import ModelPage from "@/src/components/ModelPage";
import { generateModelJsonLd, generateBreadcrumbJsonLd } from "@/src/lib/jsonld";
import * as content from "@/src/content/inner-compass-content";

const model = getModel("inner-compass");

export const metadata = {
  title: "The Inner Compass & Four-Mode Gradient — TEG-Blue Research",
  description: "The visual-conceptual instrument — how the nervous system orients between safety and threat, made visible and usable. Emotions as signals, the four modes (Connection, Protection, Control, Domination), the gradient, and regulation as the return.",
  keywords: ["inner compass", "four-mode gradient", "nervous system regulation", "emotional signalling", "connection protection control domination", "compass model", "state determines capacity", "regulation return mechanism"],
  alternates: { canonical: "https://teg-blue.org/models/inner-compass" },
  openGraph: {
    title: "The Inner Compass & Four-Mode Gradient — The Instrument",
    description: "The visual-conceptual instrument — how the nervous system orients between safety and threat, made visible and usable. Health is not a position. Health is the needle's capacity to move.",
    url: "https://teg-blue.org/models/inner-compass",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function InnerCompassPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateModelJsonLd(model)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Models", url: "/models" },
          { name: model.name, url: `/models/${model.slug}` },
        ])) }}
      />
      <ModelPage model={model} content={content} />
    </>
  );
}
