import { getModel } from "@/src/data/frameworks";
import ModelPage from "@/src/components/ModelPage";
import * as content from "@/src/content/three-awareness-capacities-content";

const model = getModel("three-awareness-capacities");

export const metadata = {
  title: "The Three Awareness Capacities — TEG-Blue Research",
  description: "The calibration system — Reading Emotions (RE), Emotional Resonance (ER), and Self-Emotional Awareness (SEA). What determines how well the compass works. Awareness teaches awareness, true and false coherence, and repair as development.",
  keywords: ["three awareness capacities", "reading emotions", "emotional resonance", "self-emotional awareness", "SEA keystone", "capacity configuration", "awareness teaches awareness", "co-regulation", "true coherence false coherence", "repair"],
  alternates: { canonical: "https://teg-blue.org/models/three-awareness-capacities" },
  openGraph: {
    title: "The Three Awareness Capacities — The Calibration",
    description: "The calibration system — RE, ER, SEA — what determines how well the compass works. Awareness teaches awareness: the adults' capacity configuration IS the child's developmental environment.",
    url: "https://teg-blue.org/models/three-awareness-capacities",
    siteName: "TEG-Blue Research",
    type: "article",
  },
};

export default function ThreeAwarenessCapacitiesPage() {
  return <ModelPage model={model} content={content} />;
}
