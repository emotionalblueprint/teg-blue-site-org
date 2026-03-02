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
      We feel fear — and we pull back. We feel curiosity — and we lean in. We
      feel tenderness — and we soften. These feel like completely different
      emotions. But underneath all of them, something simpler is happening.
    </p>
    <p style={prose}>
      Our nervous system is running one evaluation, constantly, below awareness,
      faster than thought:
    </p>
    <p style={prose}>
      <strong style={emphasis}>
        "Is there enough safety to engage, or is protection needed?"
      </strong>
    </p>
    <p style={prose}>
      Every emotion we feel is a variation on the answer. When the answer is{" "}
      <em>safe enough</em>, the body opens — we can listen, learn, connect,
      tolerate disagreement, hold complexity. When the answer is{" "}
      <em>protection needed</em>, the body closes — we narrow, defend, react.{" "}
      <Link href="/concepts/the-inner-compass" style={conceptLink}>
        {"\u2192"} The Inner Compass
      </Link>{" "}
      <Link href="/concepts/emotions-as-biological-information" style={conceptLink}>
        {"\u2192"} Emotions as Biological Information
      </Link>
    </p>
    <p style={prose}>
      We don't choose the answer. The body decides for us — below conscious
      awareness, before we've had a single thought about it. By the time we
      notice we're anxious, the body has already braced.
    </p>

    <hr style={separator} />

    <p style={prose}>
      The evaluation does not assess what is actually happening. It assesses
      what our nervous system <em>reads</em> as happening — shaped by everything
      our system has ever learned.
    </p>
    <p style={prose}>
      Two people in the same meeting can hear the same words and their nervous
      systems report completely different things. One feels safe. The other
      feels threatened. Neither is wrong. Each system is evaluating based on its
      own history.{" "}
      <Link href="/concepts/tolerance-thresholds" style={conceptLink}>
        {"\u2192"} Tolerance Thresholds
      </Link>
    </p>
    <p style={prose}>
      This distinction —{" "}
      <strong style={emphasis}>
        experienced safety, not objective danger
      </strong>{" "}
      — explains almost everything that gets labelled "overreaction." The
      colleague who shuts down during reasonable feedback is not evaluating the
      feedback. Their body is matching a pattern it learned long ago, in an
      environment where critical words meant something far more threatening.{" "}
      <Link href="/concepts/awareness-teaches-awareness" style={conceptLink}>
        {"\u2192"} Awareness Teaches Awareness
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      Once we understand the question, several things shift at once.
    </p>
    <p style={prose}>
      We stop blaming the emotion — fear, anger, defensiveness are not character
      flaws. They are answers. The question becomes: "what is my system reading
      as unsafe right now?"{" "}
      <Link href="/concepts/emotions-as-biological-information" style={conceptLink}>
        {"\u2192"} Emotions as Biological Information
      </Link>
    </p>
    <p style={prose}>
      We stop expecting the impossible — when someone's system answers{" "}
      <em>protection needed</em>, we cannot expect openness, flexibility, or
      empathy. The state has literally reduced the neurobiological capacity for
      all of those things.{" "}
      <Link href="/concepts/state-determines-capacity" style={conceptLink}>
        {"\u2192"} State Determines Capacity
      </Link>
    </p>
    <p style={prose}>
      We learn to change the conditions instead of arguing with the answer.{" "}
      <strong style={emphasis}>
        Restore safety first, then expect capacity.
      </strong>{" "}
      We don't reason someone out of an evaluation their body made before reason
      was involved.{" "}
      <Link href="/concepts/regulation-the-return-mechanism" style={conceptLink}>
        {"\u2192"} Regulation — The Return Mechanism
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      And sometimes the evaluation fires, and the discomfort it generates cannot
      be identified as ours — so it lands as if someone else caused it. We feel
      bad, and the system concludes we are being attacked. From there, our
      defence feels completely justified.{" "}
      <Link href="/concepts/emotional-distortion" style={conceptLink}>
        {"\u2192"} Emotional Distortion
      </Link>
    </p>
    <p style={prose}>
      When we can catch this — when we can notice the evaluation firing and ask
      "is this about now, or about then?" — something opens. Not the
      elimination of the response. The possibility of a different relationship
      with it.{" "}
      <Link href="/concepts/self-emotional-awareness" style={conceptLink}>
        {"\u2192"} Self-Emotional Awareness
      </Link>
    </p>

    <hr style={separator} />

    <p style={standaloneLine}>
      <em>Every emotion is a variation on: safe enough, or not yet.</em>
    </p>
  </>
);
