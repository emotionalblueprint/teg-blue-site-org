"use client";

import Link from "next/link";
import { TEXT, FONT, BORDER, SPECTRUM, hexToRgba } from "@/src/styles/tokens";

const prose = { fontSize: 14, color: TEXT.secondary, lineHeight: 1.8, marginBottom: 16 };
const emphasis = { color: TEXT.primary, fontWeight: 600 };
const standaloneLine = { fontSize: 15, fontWeight: 600, fontStyle: "italic", color: TEXT.primary, lineHeight: 1.6, margin: "24px 0" };
const separator = { width: 40, height: 1, background: BORDER.default, margin: "28px 0", border: "none" };
const conceptLink = { color: SPECTRUM.azure, textDecoration: "none", fontWeight: 500, fontSize: 13 };

export const body = (
  <>
    <p style={prose}>
      Something happens — a confrontation, a scare, a moment of overwhelm.
      Heart pounding. Muscles tight. Everything narrows. And then, gradually, it
      passes. The heart slows. The shoulders drop. The world comes back into
      focus — wider, softer than it felt five minutes ago.
    </p>
    <p style={prose}>
      That coming back is not just "calming down." It is the body completing a
      cycle it was designed to complete.
    </p>

    <hr style={separator} />

    <p style={prose}>
      The word "regulation" has been captured. In everyday language it usually
      means: keep it together. Manage your emotions. Stay calm. But that is
      management, not regulation.
    </p>
    <p style={prose}>
      <strong style={emphasis}>
        Regulation is the mechanism of coming back.
      </strong>{" "}
      The body moved into Protection because it evaluated{" "}
      <em>protection needed</em>.{" "}
      <Link href="/concepts/the-safety-orientation-question" style={conceptLink}>
        {"\u2192"} The Safety Orientation Question
      </Link>{" "}
      The return is the body undoing all of that — heart rate settling, muscles
      releasing, attention broadening, the compass needle moving back toward
      Connection.{" "}
      <Link href="/concepts/the-inner-compass" style={conceptLink}>
        {"\u2192"} The Inner Compass
      </Link>
    </p>
    <p style={prose}>
      This is a physiological event. The body does not think its way back. It
      returns through the same channels it departed through — through breath,
      through the body, not through cognition.
    </p>
    <p style={prose}>
      <strong style={emphasis}>
        Health is not staying calm. Health is the return.
      </strong>
    </p>

    <hr style={separator} />

    <p style={prose}>
      We are not born knowing how to regulate. The hardware is there, but the
      software gets installed through one mechanism:{" "}
      <strong style={emphasis}>being regulated with.</strong>
    </p>
    <p style={prose}>
      When we were infants, we couldn't complete the return alone. We needed
      someone whose nervous system could send ours a signal:{" "}
      <em>you can come back. Here is how.</em> Through presence, tone, rhythm,
      touch — the caregiver's body communicates with the child's body. Through
      thousands of these repetitions, what was co-regulation becomes
      self-regulation.{" "}
      <Link href="/concepts/awareness-teaches-awareness" style={conceptLink}>
        {"\u2192"} Awareness Teaches Awareness
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      When the return was never learned, three things happen. The threat
      response doesn't resolve — activation that was meant to last minutes
      persists for months or years. One mode becomes permanent. And the compass
      gets stuck.{" "}
      <Link href="/concepts/false-coherence" style={conceptLink}>
        {"\u2192"} False Coherence
      </Link>
    </p>
    <p style={prose}>
      Cognition steps in — it builds narratives that provide stability: "I'm
      fine." "I don't need anyone." "I've got it under control." The person
      feels regulated. But it is regulation by story, not by felt experience.{" "}
      <Link href="/concepts/self-emotional-awareness" style={conceptLink}>
        {"\u2192"} Self-Emotional Awareness
      </Link>{" "}
      This is why understanding alone doesn't change things — we can narrate
      our patterns with brilliant precision and change none of them, because the
      patterns are running in the body.
    </p>
    <p style={prose}>
      This is why "just calm down" doesn't work. We are asking cognition to do
      what the body needs to do. The body needs experienced safety — a slower
      voice, a softer presence, space, time, breath.{" "}
      <Link href="/concepts/the-safety-orientation-question" style={conceptLink}>
        {"\u2192"} The Safety Orientation Question
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      The return can be learned at any age. The nervous system remains capable
      across the entire lifespan. It happens through the same mechanism it was
      always meant to happen through: relationship. Any relationship where one
      person's regulated nervous system provides the conditions for the other
      person's system to complete the return.
    </p>
    <p style={prose}>
      Each time the activation rises and the return completes, the pathway gets
      stronger. The compass gets freer. What changes is not who we are. What
      changes is what the compass can do.{" "}
      <Link href="/concepts/the-inner-compass" style={conceptLink}>
        {"\u2192"} The Inner Compass
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      The return is the thread running through everything. The compass was
      designed to move and come back.{" "}
      <Link href="/concepts/same-emotion-two-expressions" style={conceptLink}>
        {"\u2192"} Same Emotion, Two Expressions
      </Link>{" "}
      When the return is absent, internal discomfort gets misread as external
      attack.{" "}
      <Link href="/concepts/emotional-distortion" style={conceptLink}>
        {"\u2192"} Emotional Distortion
      </Link>{" "}
      When the return is absent, cognition builds narratives that replace felt
      experience.{" "}
      <Link href="/concepts/false-coherence" style={conceptLink}>
        {"\u2192"} False Coherence
      </Link>{" "}
      The adults' capacity to return is what gets passed to the next generation.{" "}
      <Link href="/concepts/awareness-teaches-awareness" style={conceptLink}>
        {"\u2192"} Awareness Teaches Awareness
      </Link>{" "}
      And the thresholds we develop for what to endure are set in the conditions
      where the return was or wasn't available.{" "}
      <Link href="/concepts/tolerance-thresholds" style={conceptLink}>
        {"\u2192"} Tolerance Thresholds
      </Link>
    </p>
    <p style={prose}>
      The compass was always designed to come back. The question is whether the
      conditions were ever there to learn how. They can be there now.
    </p>

    <hr style={separator} />

    <p style={standaloneLine}>
      <em>Regulation is the mechanism of coming back.</em>
    </p>
  </>
);
