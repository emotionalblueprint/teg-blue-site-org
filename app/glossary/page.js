import { BG, TEXT, BORDER, FONT, SPACING, SPECTRUM, hexToRgba } from "@/src/styles/tokens";
import { SiteHeader, SiteFooter } from "@/src/components";
import GlossaryList from "./GlossaryList";

export const metadata = {
  title: "Glossary | TEG-Blue Research",
  description: "Key terms and concepts used throughout TEG-Blue research. Includes definitions for regulatory states, complexity markers, and core framework concepts.",
  alternates: {
    canonical: "https://teg-blue.org/glossary",
  },
};

// Glossary terms from the approved content
const GLOSSARY_TERMS = [
  {
    slug: "four-mode-gradient",
    title: "Four-Mode Gradient",
    type: "concept",
    status: "proposed",
    definition: "The measurement layer of TEG-Blue. A continuous gradient mapping four nervous system regulatory states: Connection, Protection, Control, and Domination. These are states, not personality types — they shift in response to perceived threat.",
    tags: ["core-concept", "measurement"],
  },
  {
    slug: "regulatory-state",
    title: "Regulatory State",
    type: "concept",
    status: "established",
    definition: "The nervous system's current operating mode, shaped by neuroception and expressed through physiology, cognition, and behavior. Different states enable different capacities.",
    tags: ["neuroscience", "polyvagal"],
  },
  {
    slug: "state-dependent-capacity",
    title: "State-Dependent Capacity",
    type: "concept",
    status: "established",
    definition: "The principle that cognitive, emotional, and relational abilities vary with nervous system state. What someone can perceive, feel, think, and do depends on where their system has landed.",
    tags: ["neuroscience", "core-concept"],
  },
  {
    slug: "neuroception",
    title: "Neuroception",
    type: "concept",
    status: "established",
    definition: "Stephen Porges' term for the nervous system's automatic, below-conscious evaluation of safety and threat. It operates before cognition and shapes what responses are available.",
    tags: ["polyvagal", "neuroscience"],
  },
  {
    slug: "calibration",
    title: "Calibration",
    type: "concept",
    status: "established",
    definition: "The developmental process through which the nervous system learns its baseline settings for safety and threat detection. Shaped by early relational experience and attachment history.",
    tags: ["development", "attachment"],
  },
  {
    slug: "role-mask",
    title: "Role Mask",
    type: "concept",
    status: "proposed",
    definition: "A protective identity structure built when the Real Self couldn't secure connection through authenticity alone. Not pathological — adaptive. Becomes problematic when it replaces the self entirely.",
    tags: ["identity", "protection"],
  },
  {
    slug: "real-self",
    title: "Real Self",
    type: "concept",
    status: "proposed",
    definition: "The baseline emotional-somatic configuration present before cognitive identity forms. Innate temperament and capacities — what exists before adaptation reshapes it.",
    tags: ["identity", "development"],
  },
  {
    slug: "threat-lock",
    title: "Threat Lock",
    type: "concept",
    status: "proposed",
    definition: "Chronic activation of Protection, Control, or Domination where the nervous system gets stuck outside Connection. The system cannot find its way back without support or changed conditions.",
    tags: ["dysregulation", "trauma"],
  },
  {
    slug: "pattern-hijack",
    title: "Pattern Hijack",
    type: "concept",
    status: "proposed",
    definition: "A rapid, involuntary shift into Protection triggered by present stimuli resembling past danger. The nervous system responds to the past, not the present.",
    tags: ["trauma", "triggers"],
  },
  {
    slug: "complexity-markers",
    title: "Complexity Markers",
    type: "concept",
    status: "proposed",
    definition: "Linguistic and behavioral signs of self-awareness, perspective-taking, and emotional differentiation. Preliminary evidence suggests they predict capacity to return to Connection when challenged.",
    tags: ["measurement", "language"],
  },
  {
    slug: "return-capacity",
    title: "Return Capacity",
    type: "concept",
    status: "proposed",
    definition: "The ability to move back toward Connection after being pushed into Protection or Control by challenge or threat. TEG-Blue's core hypothesis is that this capacity — not current state — predicts relational outcomes.",
    tags: ["core-concept", "measurement"],
  },
];

export default function GlossaryPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG.page,
        fontFamily: FONT.display,
      }}
    >
      <SiteHeader currentPath="/glossary" />

      <main
        style={{
          maxWidth: SPACING.containerMax,
          margin: "0 auto",
          padding: "32px 24px 60px",
        }}
      >
        <GlossaryList terms={GLOSSARY_TERMS} />

        {/* Footer note */}
        <footer style={{ marginTop: 40, textAlign: "center" }}>
          <p style={{ fontSize: 11, color: TEXT.micro, fontFamily: FONT.mono }}>
            TEG-Blue Research Consortium · Open Science · CC BY-NC-SA 4.0
          </p>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}
