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
      Someone sets a reasonable boundary. A friend says: "I need you to stop
      doing that." And something fires inside us that is far bigger than the
      moment warrants. We don't just hear the words. We feel attacked. And
      before we've had time to think, we're defending ourselves — not against
      what was said, but against something much larger.
    </p>
    <p style={prose}>
      Most of us catch it — not always in the moment, sometimes the next
      morning. We feel the recognition: "That wasn't about them. That was about
      something in me." We course-correct. We repair.
    </p>
    <p style={prose}>
      That catching depends on a specific capacity: the ability to identify what
      we're feeling, locate it as ours, and separate it from what is actually
      happening.{" "}
      <Link href="/concepts/self-emotional-awareness" style={conceptLink}>
        {"\u2192"} Self-Emotional Awareness
      </Link>
    </p>
    <p style={prose}>
      What happens when the catching never comes?
    </p>

    <hr style={separator} />

    <p style={prose}>
      When we can read our own signals, the process works: discomfort arrives →
      we identify it (shame, guilt, fear) → we locate it as ours → we respond
      to the actual situation.
    </p>
    <p style={prose}>
      When that capacity was never fully developed, the process breaks at a
      specific point. The feeling loses its name — shame, guilt, envy all
      collapse into undifferentiated "I feel bad."{" "}
      <Link href="/concepts/emotions-as-biological-information" style={conceptLink}>
        {"\u2192"} Emotions as Biological Information
      </Link>{" "}
      The body looks outward — "I feel bad" becomes "someone is making me feel
      bad" becomes "I am being attacked."{" "}
      <Link href="/concepts/the-safety-orientation-question" style={conceptLink}>
        {"\u2192"} The Safety Orientation Question
      </Link>{" "}
      The body reacts — "someone hurt me, I need to hurt back." From inside
      that moment, it is self-defence.
    </p>
    <p style={prose}>
      This is emotional distortion. Internal discomfort, unable to be processed
      as one's own, gets reclassified as an external attack.
    </p>

    <hr style={separator} />

    <p style={prose}>
      The person experiencing this is not lying. Their nervous system is
      reporting a threat. The discomfort is real. The only error is the
      attribution: the source is internal, but the system maps it externally.{" "}
      <Link href="/concepts/state-determines-capacity" style={conceptLink}>
        {"\u2192"} State Determines Capacity
      </Link>
    </p>
    <p style={prose}>
      This produces a specific relational pattern: one person crosses a line,
      the other sets a boundary, and the first person experiences the boundary
      as an unprovoked attack. The more boundaries are set, the more "evidence"
      accumulates.{" "}
      <strong style={emphasis}>Your boundaries become their evidence.</strong>
      {" "}The narrative feels coherent from inside.{" "}
      <Link href="/concepts/false-coherence" style={conceptLink}>
        {"\u2192"} False Coherence
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      Emotional distortion operates on a gradient — matching the compass. In
      Connection, we catch it almost immediately. In Protection, the catching
      becomes harder — we might catch it later, after the compass moves back.{" "}
      <Link href="/concepts/same-emotion-two-expressions" style={conceptLink}>
        {"\u2192"} Same Emotion, Two Expressions
      </Link>{" "}
      In chronic Control and Domination, the catching stops entirely. The
      distortion becomes the person's experienced reality.{" "}
      <Link href="/concepts/the-inner-compass" style={conceptLink}>
        {"\u2192"} The Inner Compass
      </Link>
    </p>
    <p style={prose}>
      This is not a personality type. It is state-dependent. The same person
      can catch it on a good day and miss it completely on a bad one. What
      determines the catching is compass position.
    </p>
    <p style={prose}>
      It is not manipulation. It is a structural consequence of a capacity that
      did not develop — because the conditions were not present.{" "}
      <Link href="/concepts/awareness-teaches-awareness" style={conceptLink}>
        {"\u2192"} Awareness Teaches Awareness
      </Link>{" "}
      Understanding this does not excuse the impact. The harm is real. But
      understanding the mechanism changes what works.{" "}
      <Link href="/concepts/tolerance-thresholds" style={conceptLink}>
        {"\u2192"} Tolerance Thresholds
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      The signal that started the whole sequence — the shame, the guilt, the
      fear — was real and accurate. The problem was never the signal. The
      problem was that it had no reader. When the reader develops, the
      distortion loosens. The loop that once ran automatically begins to have
      gaps. And in those gaps, something new becomes possible.
    </p>
    <p style={prose}>
      That reader is self-emotional awareness.{" "}
      <Link href="/concepts/self-emotional-awareness" style={conceptLink}>
        {"\u2192"} Self-Emotional Awareness
      </Link>
    </p>

    <hr style={separator} />

    <p style={standaloneLine}>
      <em>Your boundaries become their evidence.</em>
    </p>
  </>
);
