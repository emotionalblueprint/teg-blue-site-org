"use client";

import Link from "next/link";
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
  fontStyle: "italic",
  color: TEXT.primary,
  lineHeight: 1.6,
  margin: "24px 0",
};

const separator = {
  width: 40,
  height: 1,
  background: BORDER.default,
  margin: "28px 0",
  border: "none",
};

const conceptLink = {
  color: SPECTRUM.azure,
  textDecoration: "none",
  fontWeight: 500,
  fontSize: 13,
};

export const body = (
  <>
    <p style={prose}>
      Most of us were taught that emotions get in the way. That clear thinking
      happens when we push past them. So we learned to override — the knot in
      the stomach, the anger, the unease — and replace the signal with something
      that sounded more reasonable: "I'm fine." "It's not a big deal."
    </p>
    <p style={prose}>
      Every time we did that, we were silencing a signal. Not noise. A signal —
      carrying specific information about what our body had detected.
    </p>

    <hr style={separator} />

    <p style={prose}>
      Emotions are the nervous system's signalling language. Our body runs a
      continuous evaluation — across the gut, the heart, the muscles, the vagus
      nerve — assessing our environment below conscious awareness, faster than
      thought. Emotions are how the finding gets delivered.
    </p>
    <p style={prose}>
      Fear is the signal that the evaluation found threat. Joy is the signal
      that it found safety and connection. Anger is the signal that a boundary
      has been crossed.{" "}
      <Link href="/concepts/the-safety-orientation-question" style={conceptLink}>
        {"\u2192"} The Safety Orientation Question
      </Link>
    </p>
    <p style={prose}>
      Each one carries specific information. Each one orients us toward a
      specific response. They are the body's first language — precise, fast, and
      ancient.
    </p>

    <hr style={separator} />

    <p style={prose}>
      Emotions have been running for millions of years, long before cognition
      evolved. When cognition arrived, it did not replace the first language. It
      added a second one. In a healthy system, the two work together — cognition
      listens to the emotional signals and uses the information they carry.
    </p>
    <p style={prose}>
      But when the first language was never listened to — or was actively
      contradicted{" "}
      <Link href="/concepts/awareness-teaches-awareness" style={conceptLink}>
        {"\u2192"} Awareness Teaches Awareness
      </Link>{" "}
      — cognition starts replacing. It builds its own explanations for what we
      feel. Narratives that sound true but aren't connected to what the body is
      actually reporting.{" "}
      <Link href="/concepts/false-coherence" style={conceptLink}>
        {"\u2192"} False Coherence
      </Link>
    </p>
    <p style={prose}>
      And we call this "being rational."
    </p>

    <hr style={separator} />

    <p style={prose}>
      The signal that was never read doesn't dissolve. It persists — in tension,
      in exhaustion, in reactivity that seems disproportionate, in relationships
      where something feels off but we can't name what.{" "}
      <Link href="/concepts/the-inner-compass" style={conceptLink}>
        {"\u2192"} The Inner Compass
      </Link>
    </p>
    <p style={prose}>
      We don't override because we're foolish. We override because we were
      taught to.{" "}
      <Link href="/concepts/awareness-teaches-awareness" style={conceptLink}>
        {"\u2192"} Awareness Teaches Awareness
      </Link>{" "}
      The override was adaptive. But its cost compounds: when we can't read our
      own signals, we can't tell the difference between a genuine threat and an
      old pattern.{" "}
      <Link href="/concepts/emotional-distortion" style={conceptLink}>
        {"\u2192"} Emotional Distortion
      </Link>{" "}
      We can't tell the difference between what we feel and what we've been told
      to feel.{" "}
      <Link href="/concepts/self-emotional-awareness" style={conceptLink}>
        {"\u2192"} Self-Emotional Awareness
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      The old question was:{" "}
      <strong style={emphasis}>"How do I manage this emotion?"</strong> —
      implying the emotion is the problem.
    </p>
    <p style={prose}>
      The new question is:{" "}
      <strong style={emphasis}>"What is this signal telling me?"</strong> —
      implying it carries information, and our job is to read it.
    </p>
    <p style={prose}>
      This doesn't mean emotions are always right. It means they are always
      informative. The question is whether we read the data or override it.
    </p>

    <hr style={separator} />

    <p style={prose}>
      No matter how well we've learned to override, the body does not stop
      generating signals. The breath that catches before a difficult
      conversation. The tightness in the chest when we read a certain name. The
      lightness when we walk into a room where we feel safe.
    </p>
    <p style={prose}>
      These are not weaknesses to manage. They are the first language, still
      speaking, still waiting to be heard.{" "}
      <Link href="/concepts/the-inner-compass" style={conceptLink}>
        {"\u2192"} The Inner Compass
      </Link>{" "}
      <Link href="/concepts/self-emotional-awareness" style={conceptLink}>
        {"\u2192"} Self-Emotional Awareness
      </Link>
    </p>

    <hr style={separator} />

    <p style={standaloneLine}>
      <em>The body keeps talking. The question is whether we listen.</em>
    </p>
  </>
);
