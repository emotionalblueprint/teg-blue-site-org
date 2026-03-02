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
      Before we could speak, before we could crawl — we were already reading
      emotions. As infants, our eyes tracked faces. We responded to tone before
      we understood language. We could feel the difference between a caregiver
      who was settled and one who was tense.
    </p>
    <p style={prose}>
      Reading Emotions — RE — is the first of three awareness capacities. The
      outward-facing channel: the capacity to track and interpret the emotional
      states of the people around us.{" "}
      <Link href="/concepts/emotions-as-biological-information" style={conceptLink}>
        {"\u2192"} Emotions as Biological Information
      </Link>
    </p>
    <p style={prose}>
      Every one of us has it. The question is not whether we read. It is what we
      learned to read for.
    </p>

    <hr style={separator} />

    <p style={prose}>
      In safe, consistent conditions, RE calibrates toward accuracy. We learn to
      read what people actually feel, not what they perform. This kind of reading
      is quiet — it gives us information about the emotional landscape so we can
      connect and respond with awareness.{" "}
      <Link href="/concepts/awareness-teaches-awareness" style={conceptLink}>
        {"\u2192"} Awareness Teaches Awareness
      </Link>
    </p>
    <p style={prose}>
      When the adults around us were unpredictable, RE overdeveloped into
      hypervigilance. The child needs to predict which version of the caregiver
      is coming through the door.{" "}
      <Link href="/concepts/the-inner-compass" style={conceptLink}>
        {"\u2192"} The Inner Compass
      </Link>{" "}
      <Link href="/concepts/the-safety-orientation-question" style={conceptLink}>
        {"\u2192"} The Safety Orientation Question
      </Link>{" "}
      This looks like a gift — people call it intuition, emotional intelligence,
      sensitivity. But the scanning never turns off. The system is always reading
      for threat, not connection.{" "}
      <Link href="/concepts/state-determines-capacity" style={conceptLink}>
        {"\u2192"} State Determines Capacity
      </Link>
    </p>
    <p style={prose}>
      When adults were emotionally incongruent — words contradicting the body —
      RE learned to read surfaces. The child tracks what gets rewarded, not what
      is true.{" "}
      <Link href="/concepts/false-coherence" style={conceptLink}>
        {"\u2192"} False Coherence
      </Link>{" "}
      When adults were invalidating, RE learned to read for control — managing
      situations, predicting outcomes, ensuring compliance. And in the furthest
      redirection, RE can become weaponised: reading others' vulnerability and
      using it as leverage.
    </p>

    <hr style={separator} />

    <p style={prose}>
      All of these variants are RE. The reading is often sharper, not duller.
      What changes is what the reading serves. And what determines that is
      whether RE is connected to the other two capacities.
    </p>
    <p style={prose}>
      When RE connects to Emotional Resonance — when we not only read what
      someone feels but feel it with them — the reading naturally serves
      understanding.{" "}
      <Link href="/concepts/emotional-resonance" style={conceptLink}>
        {"\u2192"} Emotional Resonance
      </Link>{" "}
      When RE connects to Self-Emotional Awareness — when we can track our own
      states while reading others — the reading stays grounded.{" "}
      <Link href="/concepts/self-emotional-awareness" style={conceptLink}>
        {"\u2192"} Self-Emotional Awareness
      </Link>
    </p>
    <p style={prose}>
      When RE is decoupled from both, the reading becomes an instrument without a
      conscience. The person knows exactly what we feel. They just can't feel it
      with us — and can't see what's happening inside themselves.{" "}
      <Link href="/concepts/emotional-distortion" style={conceptLink}>
        {"\u2192"} Emotional Distortion
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      This is why what we call "empathy" is not one thing. RE — tracking what
      others feel — can be intact or sharpened while everything else is offline. A
      person with sharp RE, absent ER, and absent SEA is not "lacking empathy" in
      the usual sense. They have one component precisely intact and two offline.{" "}
      <strong style={emphasis}>
        This is a configuration — not a character type.
      </strong>{" "}
      <Link href="/concepts/awareness-teaches-awareness" style={conceptLink}>
        {"\u2192"} Awareness Teaches Awareness
      </Link>
    </p>
    <p style={prose}>
      When conditions change — when the environment provides enough safety that
      reading doesn't need to serve survival — RE can recalibrate.{" "}
      <Link href="/concepts/regulation-the-return-mechanism" style={conceptLink}>
        {"\u2192"} Regulation — The Return Mechanism
      </Link>{" "}
      The person who always read the room can begin to be in the room.{" "}
      <Link href="/concepts/same-emotion-two-expressions" style={conceptLink}>
        {"\u2192"} Same Emotion, Two Expressions
      </Link>
    </p>

    <hr style={separator} />

    <p style={standaloneLine}>
      <em>We were all born reading. The question is what we learned to read for.</em>
    </p>
  </>
);
