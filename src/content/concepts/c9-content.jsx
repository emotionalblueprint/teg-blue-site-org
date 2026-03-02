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
      "Why didn't you just leave?" "Why do you put up with that?" "Can't you
      see how badly they treat you?"
    </p>
    <p style={prose}>
      These questions assume that recognising harm is simple — that the person
      can see what everyone else can see, and that staying is a choice. But it
      is not a failure of anything. It is calibration.
    </p>

    <hr style={separator} />

    <p style={prose}>
      Our nervous system sets a baseline — a threshold for what to endure. This
      calibration happens early, through the conditions we grew up in, through
      what the adults around us normalised.{" "}
      <Link href="/concepts/awareness-teaches-awareness" style={conceptLink}>
        {"\u2192"} Awareness Teaches Awareness
      </Link>
    </p>
    <p style={prose}>
      A child who grew up with unpredictable explosions learns: this level of
      chaos is normal. A child whose signals were consistently dismissed
      learns: what I feel does not count. The threshold becomes the set point.
      What was endured becomes what is tolerated.
    </p>
    <p style={prose}>
      <strong style={emphasis}>
        Familiar can feel "normal" even when it is costly.
      </strong>{" "}
      The system calibrates to its environment. Anything at the calibrated
      level — no matter how costly — registers as: this is just how things
      are.{" "}
      <Link href="/concepts/the-safety-orientation-question" style={conceptLink}>
        {"\u2192"} The Safety Orientation Question
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      This is why people stay in harmful dynamics and genuinely do not see the
      harm. The signal arrives — the tension, the knot, the sense of
      wrongness.{" "}
      <Link href="/concepts/emotions-as-biological-information" style={conceptLink}>
        {"\u2192"} Emotions as Biological Information
      </Link>{" "}
      But it does not register as "too much." It registers as normal. Because
      it matches what the nervous system was trained to consider normal.
    </p>
    <p style={prose}>
      The person may even defend the dynamic. "He doesn't mean it." "All
      families are like this." These are not rationalisations in the usual
      sense. They are the honest output of a system calibrated to not flag this
      level of harm.{" "}
      <Link href="/concepts/false-coherence" style={conceptLink}>
        {"\u2192"} False Coherence
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      There is a specific combination that makes thresholds particularly
      invisible: when the capacity to feel with others is flooded and the
      capacity to know our own state is absent.{" "}
      <Link href="/concepts/emotional-resonance" style={conceptLink}>
        {"\u2192"} Emotional Resonance
      </Link>{" "}
      <Link href="/concepts/self-emotional-awareness" style={conceptLink}>
        {"\u2192"} Self-Emotional Awareness
      </Link>
    </p>
    <p style={prose}>
      The person feels the harm — resonance is wide open, the body is
      registering the cost. But they cannot locate it as harm — they cannot
      name what they feel, cannot say "this is hurting me." They feel terrible
      and do not know why. Or they attribute it to themselves: "I'm just too
      sensitive." "Something is wrong with me."{" "}
      <Link href="/concepts/emotional-distortion" style={conceptLink}>
        {"\u2192"} Emotional Distortion
      </Link>
    </p>
    <p style={prose}>
      This is why "just set boundaries" can feel impossible. The system that
      would recognise the need for a boundary was calibrated to not register
      the violation.
    </p>

    <hr style={separator} />

    <p style={prose}>
      When someone begins to experience a different baseline — less chaos, more
      respect — the new conditions often feel wrong. Not harmful. Unfamiliar.
      The nervous system evaluates not "is this good for me?" but "do I know
      how to survive this?" And the thing it knows how to survive is the thing
      it was calibrated to.{" "}
      <Link href="/concepts/the-inner-compass" style={conceptLink}>
        {"\u2192"} The Inner Compass
      </Link>
    </p>
    <p style={prose}>
      The threshold can shift. It shifts through sustained conditions that
      provide a different baseline — relationships and environments that show
      the nervous system what it feels like when the cost is lower.{" "}
      <Link href="/concepts/regulation-the-return-mechanism" style={conceptLink}>
        {"\u2192"} Regulation — The Return Mechanism
      </Link>{" "}
      The recalibration is slow. Over time, what was tolerated begins to
      register as costly. The signal starts to get through.{" "}
      <Link href="/concepts/self-emotional-awareness" style={conceptLink}>
        {"\u2192"} Self-Emotional Awareness
      </Link>
    </p>
    <p style={prose}>
      And when it does, something both painful and liberating happens. The
      person begins to feel what they were enduring — not as concept, but as
      felt experience.{" "}
      <Link href="/concepts/state-determines-capacity" style={conceptLink}>
        {"\u2192"} State Determines Capacity
      </Link>
    </p>

    <hr style={separator} />

    <p style={standaloneLine}>
      <em>
        Familiar can feel normal — even when it is costly. Recalibration
        happens through different conditions, not better arguments.
      </em>
    </p>
  </>
);
