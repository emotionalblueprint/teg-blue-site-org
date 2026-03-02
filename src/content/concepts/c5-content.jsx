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
      We're in the middle of a disagreement and we can't find the words. We know
      we could handle this better — we've done it before. But right now, the
      ability is not there. Then later, everything shifts. We can see their
      point. We can hold both perspectives. And we wonder: where was this
      version of me thirty minutes ago?
    </p>
    <p style={prose}>
      We tend to explain these moments as personal failings. We weren't strong
      enough, patient enough. We should have done better.
    </p>
    <p style={prose}>
      But what if the problem was never about who we are — and always about
      where we were?
    </p>

    <hr style={separator} />

    <p style={prose}>
      <strong style={emphasis}>
        What we can perceive, think, feel, and do in any given moment depends on
        our current state.
      </strong>
    </p>
    <p style={prose}>
      When the body evaluates <em>safe enough</em> — when the compass points
      toward Connection — we have access to a wide range of capacities. We can
      feel what others feel, hold complexity, take feedback, disagree without
      escalating.{" "}
      <Link href="/concepts/the-safety-orientation-question" style={conceptLink}>
        {"\u2192"} The Safety Orientation Question
      </Link>
    </p>
    <p style={prose}>
      When the body evaluates <em>protection needed</em>, those capacities
      reduce. Not because we've lost them. Because the state has restricted
      access to them.{" "}
      <Link href="/concepts/the-inner-compass" style={conceptLink}>
        {"\u2192"} The Inner Compass
      </Link>{" "}
      The emotions we feel in that moment are signals telling us where the
      compass is pointing.{" "}
      <Link href="/concepts/emotions-as-biological-information" style={conceptLink}>
        {"\u2192"} Emotions as Biological Information
      </Link>
    </p>
    <p style={prose}>
      The shift is specific: perception narrows, empathy filters, thinking
      simplifies, learning shuts down, the capacity for repair reduces. All of
      it happens at once — every shift on the compass changes the entire
      configuration.
    </p>

    <hr style={separator} />

    <p style={prose}>
      We miss it because we are inside it. When the compass moves into
      Protection, we don't think "my perception has narrowed." We think "this
      situation is threatening and this person is unreasonable." The state
      reshapes everything — including our ability to see that it's happening.{" "}
      <Link href="/concepts/self-emotional-awareness" style={conceptLink}>
        {"\u2192"} Self-Emotional Awareness
      </Link>
    </p>
    <p style={prose}>
      From inside a threat state, the reduced capacity feels like reality.
      Protection doesn't feel like narrowing — it feels like clarity. Control
      doesn't feel like rigidity — it feels like competence.{" "}
      <Link href="/concepts/false-coherence" style={conceptLink}>
        {"\u2192"} False Coherence
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      Once we understand that capacity is state-dependent, a whole category of
      moral judgement dissolves.
    </p>
    <p style={prose}>
      The partner who can't hear us during an argument is not choosing to be
      dismissive — their compass is in Protection. The child who can't focus in
      a classroom where they feel unsafe is not lazy — their system is running a
      threat evaluation.{" "}
      <Link href="/concepts/awareness-teaches-awareness" style={conceptLink}>
        {"\u2192"} Awareness Teaches Awareness
      </Link>{" "}
      The person who says things in anger they would never say when calm is not
      "showing their true colours" — they are showing what comes out at a
      particular compass position.{" "}
      <Link href="/concepts/same-emotion-two-expressions" style={conceptLink}>
        {"\u2192"} Same Emotion, Two Expressions
      </Link>
    </p>
    <p style={prose}>
      This is not about excusing harm. The words still land. But understanding
      that behaviour comes from a state — not from character — changes the
      question from "what is wrong with this person?" to "where is their
      compass, and what would move it?"
    </p>

    <hr style={separator} />

    <p style={prose}>
      We are not one fixed thing. The same person produces radically different
      outputs depending on where the compass is pointing. We stop treating our
      worst moments as our truest moments — and start seeing them as our most
      restricted moments.
    </p>
    <p style={prose}>
      <strong style={emphasis}>
        Restore safety first, then expect capacity.
      </strong>{" "}
      We cannot argue someone into empathy. We cannot reason someone into
      flexibility. What we can do is change the conditions — lower the voice,
      slow down, make space, signal that safety is available.{" "}
      <Link href="/concepts/regulation-the-return-mechanism" style={conceptLink}>
        {"\u2192"} Regulation — The Return Mechanism
      </Link>
    </p>
    <p style={prose}>
      The capacity was never gone. The state was restricting access to it.
      Change the state, and the capacity returns.
    </p>

    <hr style={separator} />

    <p style={standaloneLine}>
      <em>Restore safety first, then expect capacity.</em>
    </p>
  </>
);
