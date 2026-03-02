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
      We tend to think that what shapes a child is what the adults say. The
      lessons. The values. The instructions.
    </p>
    <p style={prose}>
      But the child's nervous system is reading the adult's nervous system —
      directly, before language, before intention. It reads what the adult's
      body does, not what their mouth says. How the adult breathes when tension
      rises. Whether their body settles or tightens when the child cries.
      Whether their words match what their body radiates.
    </p>
    <p style={prose}>
      A parent who says "your feelings matter" while their own body
      communicates that emotions are dangerous teaches the child — without
      either of them knowing it — that emotions are dangerous.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Awareness teaches awareness.</strong> The
      awareness capacities the adults carry are the awareness capacities that
      get passed.{" "}
      <Link href="/concepts/emotions-as-biological-information" style={conceptLink}>
        {"\u2192"} Emotions as Biological Information
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      Three awareness capacities develop in every human being: the capacity to
      track what others feel,{" "}
      <Link href="/concepts/reading-emotions" style={conceptLink}>
        {"\u2192"} Reading Emotions
      </Link>{" "}
      the capacity to feel with others,{" "}
      <Link href="/concepts/emotional-resonance" style={conceptLink}>
        {"\u2192"} Emotional Resonance
      </Link>{" "}
      and the capacity to know our own internal states.{" "}
      <Link href="/concepts/self-emotional-awareness" style={conceptLink}>
        {"\u2192"} Self-Emotional Awareness
      </Link>
    </p>
    <p style={prose}>
      All three are present at birth. What happens next depends on the adults'
      awareness — what they can do with their own emotions creates the
      conditions the child's nervous system learns from.
    </p>
    <p style={prose}>
      A caregiver who can name what they feel, stay steady when the child is
      distressed, provides accurate reflection. The child cries, the caregiver
      says "you're upset" — not "you're fine." Over time, the child learns to
      read their own signals because someone else read them first.{" "}
      <Link href="/concepts/regulation-the-return-mechanism" style={conceptLink}>
        {"\u2192"} Regulation — The Return Mechanism
      </Link>
    </p>
    <p style={prose}>
      A caregiver whose own signals are overridden cannot provide this
      reflection. Not because they don't love the child. Because they don't
      have the capacity the reflection requires.
    </p>

    <hr style={separator} />

    <p style={prose}>
      The specific conditions produce specific outcomes. When adults are
      emotionally unpredictable, the child's reading overdevelops into
      hypervigilance — scanning constantly for which version of the caregiver
      will appear.{" "}
      <Link href="/concepts/the-inner-compass" style={conceptLink}>
        {"\u2192"} The Inner Compass
      </Link>{" "}
      When adults are emotionally incongruent — words contradicting the body —
      the child learns to distrust their own felt sense.{" "}
      <Link href="/concepts/false-coherence" style={conceptLink}>
        {"\u2192"} False Coherence
      </Link>{" "}
      When adults are emotionally invalidating, the child shuts the system
      down. Cognition takes over: thinking instead of feeling, managing instead
      of experiencing.
    </p>
    <p style={prose}>
      None of these are choices the child makes.{" "}
      <strong style={emphasis}>
        The system was not broken. It was accurately calibrated to an inaccurate
        environment.
      </strong>
    </p>

    <hr style={separator} />

    <p style={prose}>
      What the adult embodies is what the child absorbs. What the child absorbs
      becomes what they embody as an adult. What they embody is what the next
      child absorbs. The chain transmits through the nervous system, not through
      words.{" "}
      <Link href="/concepts/state-determines-capacity" style={conceptLink}>
        {"\u2192"} State Determines Capacity
      </Link>
    </p>
    <p style={prose}>
      A parent can love their child completely and still transmit patterns that
      damage them. Love does not override what the nervous system carries.{" "}
      <Link href="/concepts/the-safety-orientation-question" style={conceptLink}>
        {"\u2192"} The Safety Orientation Question
      </Link>{" "}
      <Link href="/concepts/tolerance-thresholds" style={conceptLink}>
        {"\u2192"} Tolerance Thresholds
      </Link>
    </p>
    <p style={prose}>
      This is not blame. It is mechanism. The adults were passing what they
      had — shaped by what was passed to them.
    </p>

    <hr style={separator} />

    <p style={prose}>
      This is why behaviour change alone is not enough. A parent who learned to
      say "I hear you" but whose body tightens every time the child cries is
      transmitting the tightening, not the words.{" "}
      <Link href="/concepts/same-emotion-two-expressions" style={conceptLink}>
        {"\u2192"} Same Emotion, Two Expressions
      </Link>
    </p>
    <p style={prose}>
      But it also simplifies things. The work is not: learn more techniques.
      The work is: develop the capacity. When the adult's nervous system
      actually changes — when the compass actually frees — the child's
      environment changes without anyone having to try.{" "}
      <Link href="/concepts/regulation-the-return-mechanism" style={conceptLink}>
        {"\u2192"} Regulation — The Return Mechanism
      </Link>
    </p>
    <p style={prose}>
      The capacities that didn't develop are not gone. They were never built.
      And what was never built can still be built — through conditions, not
      instruction. The same mechanism that calibrated us in childhood is the
      mechanism that can recalibrate us now.{" "}
      <Link href="/concepts/emotional-distortion" style={conceptLink}>
        {"\u2192"} Emotional Distortion
      </Link>
    </p>

    <hr style={separator} />

    <p style={standaloneLine}>
      <em>
        Love does not override what the nervous system embodies.
      </em>
    </p>
  </>
);
