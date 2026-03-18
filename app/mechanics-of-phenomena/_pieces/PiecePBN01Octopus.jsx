import Link from "next/link";
import { TEXT, BORDER } from "@/src/styles/tokens";
import { READING } from "../mechanics-config";
import GoDeeper from "../GoDeeper";

export default function PiecePBN01Octopus() {
  return (
    <article>
      {/* Continuous prose */}
      <p style={READING.paragraph}>I keep a running list of the places I find the same architecture operating in completely different hardware. The octopus was on it early.</p>

      <p style={READING.paragraph}>Here is the mechanism: across the octopus{"\u2019"}s skin, millions of tiny neuromuscular organs called chromatophores sit waiting. Each one is a pigment sac wrapped in 10 to 20 radial muscles, wired directly to the brain via motor neurons. When the brain detects a threat, a rival, a potential mate {"\u2014"} it fires. The muscles contract or expand. The pigment sac opens or closes. Across the entire body, simultaneously, a pattern appears.</p>

      <p style={READING.paragraph}>In <em>Octopus vulgaris</em> alone, there are over half a million neurons dedicated to chromatophore control, with receptors for all classical neurotransmitters present {"\u2014"} different transmitters activating or inhibiting different color classes. This is not a reflex. It is a full neural broadcast.</p>

      <p style={READING.paragraph}>What drives it is an internal state {"\u2014"} threat, arousal, recognition {"\u2014"} transmitted outward through the body{"\u2019"}s surface at the speed of nerve impulse.</p>

      <p style={READING.paragraph}>This is what I was already mapping when I found this. What TEG-Blue calls the <strong>signal function of emotional states</strong>: an inner condition doesn{"\u2019"}t stay inner. It reorganizes the system, and the system speaks. The octopus doesn{"\u2019"}t express its state {"\u2014"} its state <em>is</em> the expression. There is no gap between what is felt and what is transmitted.</p>

      <p style={READING.paragraph}>Neurally controlled chromatophores allow rapid, finely graded, and bilateral signalling {"\u2014"} meaning the communication is precise, graduated, and simultaneous on both sides of the body. Not a blunt alarm. A calibrated broadcast.</p>

      <p style={READING.paragraph}>The octopus is colorblind. It reads the world through polarized light, through pressure, through texture. And yet it produces, in full color, one of the most sophisticated real-time communication systems in nature. The signal doesn{"\u2019"}t require the sender to consciously understand it. It only requires that the internal state be real.</p>

      <p style={READING.paragraph}>That is the argument. Emotions are not reactions layered on top of experience. They are the information itself {"\u2014"} translated, instantly, into signal. I didn{"\u2019"}t build that principle out of theory. I kept finding it running in systems that had no theory. The octopus is one of the cleaner examples.</p>

      <hr style={READING.hr} />

      {/* Science reference */}
      <p style={{
        ...READING.paragraph,
        fontSize: 13,
        fontStyle: "italic",
        color: TEXT.muted,
        paddingLeft: 16,
        borderLeft: `2px solid ${BORDER.default}`,
      }}>
        <strong>Science reference:</strong> Messenger, J.B. (2001). Cephalopod chromatophores: neurobiology and natural history. <em>Biological Reviews</em>, 76(4), 473{"\u2013"}528.{" "}
        <Link
          href="https://pubmed.ncbi.nlm.nih.gov/11762491/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          https://pubmed.ncbi.nlm.nih.gov/11762491/
        </Link>
      </p>

      <hr style={READING.hr} />

      {/* TEG-Blue connection section */}
      <h2 id="teg-blue-connection" style={READING.heading}>TEG-Blue connection</h2>

      <p style={READING.paragraph}><strong>Primary:</strong> M2 {"\u2014"} Signal function of emotional states (the ability to read the environment and transmit emotional responses)</p>

      <p style={READING.paragraph}><strong>Related:</strong> M1 {"\u2014"} The gap between inner state and outer signal closes entirely in fluid mode</p>

      <p style={READING.paragraph}><strong>Implication:</strong> The octopus is evidence that the signal-transmission function of emotion is not a human construct. It is a biological architecture. It predates us. It is observable in hardware entirely different from ours.</p>

      {/* Go deeper */}
      <GoDeeper
        items={[
          {
            description: "You want to understand how emotional states function as information, not decoration:",
            label: "M2 \u2014 Three Awareness Capacities",
            href: "/model/m2-three-awareness-capacities",
          },
          {
            description: "You want to understand what happens when the signal function breaks down \u2014 when inner state and outer transmission decouple:",
            label: "M1 \u2014 Four-Mode Gradient (Control / Domination modes)",
            href: "/model/m1-nervous-system-signaling",
          },
          {
            description: "You want to understand how the body carries information that the mind hasn\u2019t named yet:",
            label: "F1 \u2014 Biological Return",
            href: "/framework/f1-emotional-gradient",
          },
        ]}
      />

      <hr style={READING.hr} />

      {/* Series footer */}
      <p style={READING.seriesFooter}>Series: Proofs by Nature {"\u00B7"} No. 01</p>
      <p style={READING.seriesFooter}>Last updated: 2026-03</p>
    </article>
  );
}
