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
      Someone feels angry — and from that anger, they say something clear and
      true. They name what happened. They set a limit. The anger repairs
      something.
    </p>
    <p style={prose}>
      Days later, the same person feels angry again. But this time, the anger
      comes out sharp. It attacks. It distorts. It isn't trying to repair — it's
      trying to protect.
    </p>
    <p style={prose}>
      Same person. Same emotion. Completely different outcome. We usually
      explain this as skill — they "handled it well" the first time and "lost
      control" the second. But the difference is not skill. It is where the
      compass was pointing when the emotion arrived.{" "}
      <Link href="/concepts/the-inner-compass" style={conceptLink}>
        → The Inner Compass
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      Every emotion has two possible expressions — not because the emotion
      changes, but because the compass position transforms what the emotion
      does.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Anger in Connection</strong> sets boundaries —
      honest, direct, serving repair.{" "}
      <strong style={emphasis}>Anger in Protection</strong> attacks —
      distorting, escalating, serving survival.{" "}
      <Link href="/concepts/state-determines-capacity" style={conceptLink}>
        → State Determines Capacity
      </Link>{" "}
      The biological signal is identical:{" "}
      <em>a boundary has been crossed</em>.{" "}
      <Link href="/concepts/emotions-as-biological-information" style={conceptLink}>
        → Emotions as Biological Information
      </Link>{" "}
      The state determines everything the emotion can do.
    </p>
    <p style={prose}>
      Fear in Connection produces appropriate caution. Fear in Protection
      generalises — everything feels dangerous.{" "}
      <Link href="/concepts/the-safety-orientation-question" style={conceptLink}>
        → The Safety Orientation Question
      </Link>{" "}
      Love in Connection opens and deepens. Love in Protection possesses and
      monitors. Joy in Connection celebrates. Joy in Protection triggers
      bracing — "waiting for the other shoe to drop."{" "}
      <Link href="/concepts/tolerance-thresholds" style={conceptLink}>
        → Tolerance Thresholds
      </Link>
    </p>
    <p style={prose}>
      The categorisation of emotions as "good" or "bad" collapses entirely. The
      emotion was never the problem. The compass position was the variable.
    </p>

    <hr style={separator} />

    <p style={prose}>
      This changes what we do. We stop targeting the emotion — "manage your
      anger" — and start asking what would help the compass move.{" "}
      <Link href="/concepts/regulation-the-return-mechanism" style={conceptLink}>
        → Regulation — The Return Mechanism
      </Link>{" "}
      We stop pathologising the feeling and start attending to the state it
      arrived in.
    </p>
    <p style={prose}>
      From inside a threat position, we often cannot tell which expression we
      are in. The anger feels righteous — not defensive. The possessiveness
      feels like devotion — not control. The state doesn't just change the
      expression. It changes how the expression feels from inside.{" "}
      <Link href="/concepts/false-coherence" style={conceptLink}>
        → False Coherence
      </Link>
    </p>
    <p style={prose}>
      This is why the capacity to notice our own state matters so much. Without
      it, we cannot tell the difference between the anger that repairs and the
      anger that retaliates. Both feel justified. Only one is working from the
      full picture.{" "}
      <Link href="/concepts/self-emotional-awareness" style={conceptLink}>
        → Self-Emotional Awareness
      </Link>
    </p>
    <p style={prose}>
      And when we can't tell the difference between our own discomfort and an
      external attack, the protective expression doesn't just feel justified —
      it feels like self-defence.{" "}
      <Link href="/concepts/emotional-distortion" style={conceptLink}>
        → Emotional Distortion
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      The same person who attacked from Protection can repair from Connection —
      because the anger isn't gone, but from a different position, it does
      something different. The capacity for repair was always there. The state
      was restricting access to it.
    </p>
    <p style={prose}>
      The emotion was always the same. The compass made the difference.
    </p>

    <hr style={separator} />

    <p style={standaloneLine}>
      <em>Assess mode position, not the emotion.</em>
    </p>
  </>
);
