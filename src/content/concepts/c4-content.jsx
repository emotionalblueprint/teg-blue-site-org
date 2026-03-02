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
      We walk into a room full of strangers and something tightens. Shoulders
      rise. We scan the space. Then a friend waves from across the room — and
      everything shifts. Shoulders drop. We settle.
    </p>
    <p style={prose}>
      The room didn't change. What changed was how our nervous system evaluated
      the situation. And that evaluation changed everything — what we noticed,
      how we held our body, what we were capable of in that moment.{" "}
      <Link href="/concepts/emotions-as-biological-information" style={conceptLink}>
        {"\u2192"} Emotions as Biological Information
      </Link>
    </p>
    <p style={prose}>
      We know this experience. What we don't usually have is a way to see it
      clearly.
    </p>

    <hr style={separator} />

    <p style={prose}>
      Our nervous system is running a continuous evaluation, below conscious
      awareness, asking one question:{" "}
      <strong style={emphasis}>
        "Is there enough safety to engage, or is protection needed?"
      </strong>{" "}
      <Link href="/concepts/the-safety-orientation-question" style={conceptLink}>
        {"\u2192"} The Safety Orientation Question
      </Link>
    </p>
    <p style={prose}>
      When the answer is <em>safe enough</em>, we open — we can listen,
      connect, tolerate disagreement, hold complexity. When the answer is{" "}
      <em>protection needed</em>, we close — we narrow, defend, react.{" "}
      <Link href="/concepts/state-determines-capacity" style={conceptLink}>
        {"\u2192"} State Determines Capacity
      </Link>
    </p>
    <p style={prose}>
      The Inner Compass makes this visible. A compass whose needle moves
      between safety and threat — always shifting, always responding. Not a
      compass that has a correct position. A compass that is supposed to move.
    </p>

    <hr style={separator} />

    <p style={prose}>
      The compass has four modes. Two are{" "}
      <strong style={emphasis}>body-first</strong> — they have been running in
      living creatures for millions of years. Two are{" "}
      <strong style={emphasis}>cognition-first</strong> — they appeared when the
      human brain evolved strategic thinking.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Connection</strong> is home base. Perception
      broadens. We can feel what others feel without losing ourselves.
      Connection is not calm — we can grieve in Connection, argue in Connection,
      feel anger in Connection. It means the nervous system has enough safety to
      engage with what's real, including what's painful.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Protection</strong> is the emergency system.
      Heart rate rises. Attention narrows to the threat. Empathy filters.
      Thinking simplifies to binary. Extraordinary engineering — but designed
      for minutes to hours, not for life.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Control</strong> activates when the situation is
      too complex for the body alone. Cognition gets recruited: anticipate,
      manage, override. A parent in a medical emergency. A difficult workplace
      dynamic. In a healthy compass, it's a tool — entered deliberately,
      released when the situation resolves.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Domination</strong> is the furthest point.
      Maximum override. Empathy drops to near-zero — not through failure, but
      deliberately. In a healthy compass, it's rare, brief, and costly. The
      person feels the weight of it afterward.{" "}
      <Link href="/concepts/regulation-the-return-mechanism" style={conceptLink}>
        {"\u2192"} Regulation — The Return Mechanism
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      These four modes are not boxes. They sit on a continuous gradient. The
      transitions between them are recognisable — and interruptible, if we can
      see where we are.
    </p>
    <p style={prose}>
      <strong style={emphasis}>
        Health is not staying in Connection permanently.
      </strong>{" "}
      Nobody does. Nobody should. Health is the return — the ability to move
      into whatever mode the situation requires and come back.{" "}
      <Link href="/concepts/regulation-the-return-mechanism" style={conceptLink}>
        {"\u2192"} Regulation — The Return Mechanism
      </Link>
    </p>

    <hr style={separator} />

    <p style={prose}>
      For many of us, the compass is not moving freely. The needle settled
      somewhere — usually a long time ago — because the return was never
      learned.{" "}
      <Link href="/concepts/awareness-teaches-awareness" style={conceptLink}>
        {"\u2192"} Awareness Teaches Awareness
      </Link>
    </p>
    <p style={prose}>
      Chronic Protection becomes vigilance we call "anxiety." Chronic Control
      becomes management we call "having it together." Chronic Domination
      becomes override we call "strength." The person who is stuck does not
      experience themselves as stuck. They experience their mode as reality.{" "}
      <Link href="/concepts/false-coherence" style={conceptLink}>
        {"\u2192"} False Coherence
      </Link>
    </p>
    <p style={prose}>
      This is not malfunction. It is accurate adaptation to an environment that
      is no longer present. The compass read the conditions correctly. The
      problem is that it never came back.
    </p>

    <hr style={separator} />

    <p style={prose}>
      A person in chronic Control is not "a controlling person." They are a
      person whose compass settled there because the conditions required it. The
      identity that formed around that position feels like who they are. But it
      is where the needle is stuck — not who the person is.{" "}
      <Link href="/concepts/tolerance-thresholds" style={conceptLink}>
        {"\u2192"} Tolerance Thresholds
      </Link>{" "}
      <Link href="/concepts/same-emotion-two-expressions" style={conceptLink}>
        {"\u2192"} Same Emotion, Two Expressions
      </Link>
    </p>
    <p style={prose}>
      The same person behaves completely differently at different compass
      positions. The mode determines the expression. The person was never the
      problem. The stuckness was.
    </p>
    <p style={prose}>
      The distinction between what is actually happening and what our compass
      position reports — that is one of the most important distinctions we can
      learn to make.{" "}
      <Link href="/concepts/self-emotional-awareness" style={conceptLink}>
        {"\u2192"} Self-Emotional Awareness
      </Link>
    </p>

    <hr style={separator} />

    <p style={standaloneLine}>
      <em>Health is not staying in Connection permanently — health is the ability to move through the gradient and come back.</em>
    </p>
  </>
);
