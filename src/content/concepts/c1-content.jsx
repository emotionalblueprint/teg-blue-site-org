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
      We eat because we feel hungry. We study because something interests us —
      and interest is a feeling. Underneath every decision, there is a felt
      signal that set the direction. The logic comes second. The feeling came
      first.{" "}
      <Link href="/concepts/emotions-as-biological-information" style={conceptLink}>
        {"\u2192"} Emotions as Biological Information
      </Link>
    </p>
    <p style={prose}>
      Throughout the day, our emotional state shifts — sometimes subtly,
      sometimes dramatically. But because we are inside the feeling, we rarely
      catch the shift itself. We just suddenly see things differently. And we
      assume the world changed.
    </p>
    <p style={prose}>
      Monday, the project feels impossible. Tuesday, the same project feels
      manageable. What happened? The project didn't change. Our internal state
      shifted — and the shift changed how we perceived everything around us.{" "}
      <Link href="/concepts/the-inner-compass" style={conceptLink}>
        {"\u2192"} The Inner Compass
      </Link>{" "}
      <Link href="/concepts/state-determines-capacity" style={conceptLink}>
        {"\u2192"} State Determines Capacity
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      Self-Emotional Awareness is the capacity to notice this.
    </p>
    <p style={prose}>
      Not to control the feeling. Not to suppress it. Just to notice:{" "}
      <em>today I'm seeing from here. Yesterday I was seeing from there. The
      wall didn't move. I moved.</em>
    </p>
    <p style={prose}>
      When this capacity is available, we can catch the moment. We feel
      defensive in a conversation, and something in us says:{" "}
      <em>wait — is this really an attack, or am I reading it that way because
      of my state?</em>{" "}
      The feeling is still there. But we can see it as a feeling — not as the
      truth of the situation.
    </p>
    <p style={prose}>
      <strong style={emphasis}>
        That small separation — between "I feel this" and "this is what's
        happening" — changes everything.
      </strong>
    </p>

    <hr style={separator} />

    <p style={prose}>
      This capacity is not automatic. It forms — or doesn't — based on what
      happened around us when we were very young.
    </p>
    <p style={prose}>
      When a child cries and the caregiver says, "You're upset" — not "you're
      fine," not "stop that" — something develops. The child learns:{" "}
      <em>what I feel is real. My signals are trustworthy.</em>{" "}
      When the child's signals were ignored or contradicted, self-emotional
      awareness doesn't form. Not because the child was incapable. Because the
      conditions weren't there.{" "}
      <Link href="/concepts/awareness-teaches-awareness" style={conceptLink}>
        {"\u2192"} Awareness Teaches Awareness
      </Link>
    </p>
    <p style={prose}>
      When it is absent, we don't experience a gap. We just experience the
      world as it appears to us — and assume that's what the world is.{" "}
      <Link href="/concepts/tolerance-thresholds" style={conceptLink}>
        {"\u2192"} Tolerance Thresholds
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      Without it, when we feel bad, we don't think "I feel bad." We think
      "something is wrong." And we look outward for the cause.{" "}
      <Link href="/concepts/the-safety-orientation-question" style={conceptLink}>
        {"\u2192"} The Safety Orientation Question
      </Link>
    </p>
    <p style={prose}>
      The discomfort is real. The attribution — where we place it — may not be.
      And we can't catch the difference, because the capacity that would let us
      catch it is exactly what's missing.{" "}
      <Link href="/concepts/emotional-distortion" style={conceptLink}>
        {"\u2192"} Emotional Distortion
      </Link>
    </p>
    <p style={prose}>
      We can be brilliant, educated, psychologically literate — and still not
      have this capacity. Intelligence builds better explanations. Without
      self-emotional awareness, cognition fills the void with narratives that
      feel true but aren't connected to what's actually happening in the body.
      We can talk about vulnerability without being vulnerable. We can analyse
      our patterns with brilliant precision and change none of them.{" "}
      <Link href="/concepts/false-coherence" style={conceptLink}>
        {"\u2192"} False Coherence
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      This is not a psychological luxury. In relationships, it is what lets us
      hear feedback without collapsing. In decisions, it is what lets us notice
      when fear is driving a choice. In parenting, it is what we pass on —
      children calibrate to what we embody, not what we say. In leadership, it
      is the difference between "this team needs direction" and "I need to feel
      in control."
    </p>
    <p style={prose}>
      It is the difference between knowing about ourselves and actually knowing
      ourselves.
    </p>

    <hr style={separator} />

    <p style={prose}>
      This capacity was always meant to come online. It is biological — part of
      the design. What it needs, at any age, are conditions. Not more
      information. Not harder effort. Conditions where our signals are received —
      not fixed, not explained away. Received.{" "}
      <Link href="/concepts/regulation-the-return-mechanism" style={conceptLink}>
        {"\u2192"} Regulation — The Return Mechanism
      </Link>
    </p>
    <p style={prose}>
      The nervous system remains capable of building what it was always designed
      to build. This is not about finding something that was lost. It is about
      developing something that was waiting.
    </p>

    <hr style={separator} />

    <p style={standaloneLine}>
      <em>The wall is the same wall. We are just learning, finally, to notice where we are standing.</em>
    </p>
  </>
);
