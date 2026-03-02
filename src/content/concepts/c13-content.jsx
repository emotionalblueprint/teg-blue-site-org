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
      A baby cries in a room and the other babies cry too. Not because they
      understand what's wrong. Because their nervous systems are doing something
      ancient and automatic: feeling what is around them.
    </p>
    <p style={prose}>
      Before language, before understanding — we resonate. We are affected by
      what others feel. Their distress moves through us. Their calm settles us.
      This happens in the body, not in the mind. It is felt, not thought.{" "}
      <Link href="/concepts/emotions-as-biological-information" style={conceptLink}>
        {"\u2192"} Emotions as Biological Information
      </Link>
    </p>
    <p style={prose}>
      Emotional Resonance is the capacity to feel with another person. And it is
      the one most people misunderstand.
    </p>

    <hr style={separator} />

    <p style={prose}>
      Resonance is not the same as reading emotions. Reading tracks what
      someone feels — an observational capacity.{" "}
      <Link href="/concepts/reading-emotions" style={conceptLink}>
        {"\u2192"} Reading Emotions
      </Link>{" "}
      Resonance is being <em>moved</em> by what someone feels. When someone we
      love is in pain and we feel heaviness in our chest — that is resonance.
      When we walk into a room where there has been a fight and something
      tightens — that is resonance.
    </p>
    <p style={prose}>
      In its healthy form, resonance serves connection. We feel with someone —
      and that shared feeling becomes the foundation for care. Healthy resonance
      is sustainable: we feel what the other person feels and can hold it without
      losing ourselves.{" "}
      <Link href="/concepts/the-inner-compass" style={conceptLink}>
        {"\u2192"} The Inner Compass
      </Link>
    </p>
    <p style={prose}>
      This develops when a caregiver models it — feeling with the child without
      being consumed. The child absorbs: it is possible to feel deeply and stay.{" "}
      <Link href="/concepts/awareness-teaches-awareness" style={conceptLink}>
        {"\u2192"} Awareness Teaches Awareness
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      When the adults around us were unpredictable, resonance overdeveloped as
      flooding. The child needed to feel everything to predict and appease.{" "}
      <Link href="/concepts/the-safety-orientation-question" style={conceptLink}>
        {"\u2192"} The Safety Orientation Question
      </Link>{" "}
      In adulthood, other people's pain lands in their body. They walk into a
      room and feel overwhelmed by what is in the air. They cannot distinguish
      their own emotions from other people's.{" "}
      <Link href="/concepts/state-determines-capacity" style={conceptLink}>
        {"\u2192"} State Determines Capacity
      </Link>
    </p>
    <p style={prose}>
      This is often called "being an empath." The feeling capacity is real. But
      it is not a personality type. It is resonance that developed without
      boundaries — because the conditions didn't allow boundaries. And when
      self-emotional awareness is also absent, the flooding becomes invisible
      from inside. They don't know they're absorbing. They just feel terrible.{" "}
      <Link href="/concepts/self-emotional-awareness" style={conceptLink}>
        {"\u2192"} Self-Emotional Awareness
      </Link>
    </p>
    <p style={prose}>
      When the adults were incongruent — saying one thing while radiating
      another — resonance becomes confused. The felt sense is still there, but it
      has been contradicted so many times that the person stops trusting it. The
      resonance is not broken. It is distrusted.{" "}
      <Link href="/concepts/false-coherence" style={conceptLink}>
        {"\u2192"} False Coherence
      </Link>{" "}
      <Link href="/concepts/emotional-distortion" style={conceptLink}>
        {"\u2192"} Emotional Distortion
      </Link>
    </p>
    <p style={prose}>
      When emotions were treated as weakness, resonance can shut down entirely.
      Not because the capacity is gone — because the system decided, long ago,
      that the cost of feeling was too high.{" "}
      <Link href="/concepts/tolerance-thresholds" style={conceptLink}>
        {"\u2192"} Tolerance Thresholds
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      What resonance does depends on whether it is connected to the other two
      capacities. Resonance without self-emotional awareness is feeling
      everything with no boundary between self and other. Resonance connected to
      both reading and self-emotional awareness is what it was designed to be: I
      can feel what you feel, I can read what you feel, and I know what belongs
      to me and what belongs to you.{" "}
      <Link href="/concepts/regulation-the-return-mechanism" style={conceptLink}>
        {"\u2192"} Regulation — The Return Mechanism
      </Link>
    </p>
    <p style={prose}>
      Resonance can recalibrate. If it was shut down, it can reopen. If flooded,
      it can become sustainable. If confused, it can learn to trust itself. In
      all cases, the mechanism is the same: conditions, not instruction. The body
      learns by experiencing something different.{" "}
      <Link href="/concepts/same-emotion-two-expressions" style={conceptLink}>
        {"\u2192"} Same Emotion, Two Expressions
      </Link>
    </p>

    <hr style={separator} />

    <p style={standaloneLine}>
      <em>Resonance is not a gift or a flaw. It is a capacity — shaped by what was around us, and capable of finding its way back.</em>
    </p>
  </>
);
