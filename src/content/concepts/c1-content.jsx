"use client";

import { TEXT, FONT, BORDER, SPECTRUM, hexToRgba } from "@/src/styles/tokens";

const prose = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  marginBottom: 16,
};

const emphasis = {
  color: TEXT.primary,
  fontWeight: 600,
};

const standaloneLine = {
  fontSize: 15,
  fontWeight: 600,
  color: TEXT.primary,
  lineHeight: 1.6,
  margin: "20px 0",
};

// ─── WHAT IT IS ─────────────────────────────────────────────

export const whatItIs = (
  <>
    <p style={prose}>
      The central reframe of the entire framework system: emotions are not
      disruptions to clear thinking. They are not noise to be filtered out so
      cognition can work clearly. They are the nervous system's signalling
      language — the medium through which the body's continuous evaluation of
      safety and threat gets communicated to the rest of the organism.
    </p>
    <p style={prose}>
      The nervous system runs a distributed evaluation process — across the gut,
      the heart, the muscles, the vagus nerve, the amygdala — that assesses the
      environment continuously, below conscious awareness. This evaluation
      produces a finding: safe enough, or threat. But a finding without a signal
      is useless. The organism needs to <em>know</em> what the evaluation found
      — needs to feel it, orient to it, act on it. Emotions are how the finding
      gets delivered. They are the signal that carries the evaluation from the
      body's detection systems to the organism's response systems.
    </p>
    <p style={prose}>
      Fear is not an irrational reaction. It is the nervous system's signal that
      its evaluation found threat. Joy is not a luxury. It is the signal that the
      evaluation found safety and connection. Anger is not a loss of control. It
      is the signal that a boundary has been crossed. Each emotion carries
      specific information about what the evaluation detected — and each orients
      the organism toward a specific response.
    </p>
    <p style={prose}>
      This is the body's first language. It was running for millions of years
      before cognition evolved. When cognition arrived, it did not replace this
      language — it added a second one. The two systems — emotional signalling
      and cognitive reasoning — are separate but interdependent. Cognition can
      interpret emotional signals, override them, or replace them with its own
      narratives. But the emotional signals do not stop being generated.{" "}
      <strong style={emphasis}>
        The body keeps talking whether cognition listens or not.
      </strong>
    </p>
    <p style={standaloneLine}>
      The question is not "how do I manage this emotion?" but "what is this
      signal telling me?"
    </p>
    <p style={prose}>
      This shifts the foundational stance from "emotion regulation" (implying
      emotions need controlling) to "signal interpretation" (implying emotions
      carry information that needs reading).
    </p>
  </>
);

// ─── WHERE IT COMES FROM ────────────────────────────────────

export const whereItComesFrom = (
  <>
    <p style={prose}>
      <strong style={emphasis}>Emotions as functional signals:</strong> Frijda
      (1986) — action readiness; Ekman (1992) — basic emotions as functional
      responses; Plutchik (1980) — emotions relate to survival conditions.{" "}
      <strong style={emphasis}>Affect-as-information:</strong> Schwarz & Clore
      (1983); Damasio (1994) — somatic markers guide decision-making.{" "}
      <strong style={emphasis}>Evolutionary primacy:</strong> LeDoux (1996) —
      amygdala responds before cortex; Panksepp (1998) — primary emotional
      systems are ancient.{" "}
      <strong style={emphasis}>Interoception:</strong> Craig (2009) — the body's
      internal signalling system.{" "}
      <strong style={emphasis}>Distributed processing:</strong> Porges (2011) —
      the vagus nerve as a bidirectional communication pathway between body and
      brain.
    </p>
  </>
);

// ─── WHAT TEG-BLUE ADDS ────────────────────────────────────

export const whatTegBlueAdds = (
  <>
    <p style={prose}>
      Positioning emotions explicitly as the{" "}
      <em>signalling language</em> of the nervous system — not just
      "information" in the abstract, but the specific medium through which the
      body's evaluation reaches the organism. Most clinical models acknowledge
      that emotions carry information but treat this as a secondary insight.
      TEG-Blue positions it as the foundational principle: the nervous system
      evaluates, emotions signal, and the organism orients. This is the
      operating logic of the entire system.
    </p>
    <p style={prose}>
      The framing as "language" carries specific implications: a language can be
      listened to or ignored, interpreted accurately or misread, spoken fluently
      or suppressed. When cognition overrides the emotional signal, it is not
      correcting an error — it is silencing one language and replacing it with
      another. The signal does not stop being generated.{" "}
      <strong style={emphasis}>The body keeps talking.</strong>
    </p>
    <p style={prose}>
      This sets up the entire framework arc: what happens when the first
      language gets silenced, and what the system does when its signals have
      nowhere to go.
    </p>
  </>
);
