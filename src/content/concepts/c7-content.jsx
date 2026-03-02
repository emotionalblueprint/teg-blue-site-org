"use client";

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
  color: TEXT.primary,
  lineHeight: 1.6,
  margin: "20px 0",
};

const numberedItem = {
  fontSize: 14,
  color: TEXT.secondary,
  lineHeight: 1.8,
  marginBottom: 10,
  paddingLeft: 8,
};

// ─── WHAT IT IS ─────────────────────────────────────────────

export const whatItIs = (
  <>
    <p style={prose}>
      Every person has moments where internal discomfort gets misread as an
      external attack. Someone sets a reasonable boundary. The body reacts as if
      something much bigger happened. The response is disproportionate — sharper,
      more defensive, more retaliatory than the situation warrants. Usually, the
      person catches it. They feel the guilt or shame underneath and
      course-correct: "Sorry — that wasn't about you."
    </p>
    <p style={prose}>
      This catching depends on a specific capacity: Self-Emotional Awareness
      (SEA) — the capacity to know one's own emotional states, to identify what
      one feels, and to locate the source internally. When SEA is available, the
      person can identify what they feel ("I feel defensive," "I feel guilty
      about what I said"), locate the source inside themselves, and separate
      their internal discomfort from the external situation. The emotion stays
      where it started: inside. The response corrects.
    </p>
    <p style={prose}>
      But when SEA is structurally absent — not temporarily offline under stress,
      but never fully developed — the catching never happens. The internal
      discomfort has no name, no internal source, no "this is mine." The signal
      collapses.
    </p>
    <p style={{ ...prose, fontWeight: 500, color: TEXT.primary }}>
      The sequence:
    </p>
    <p style={numberedItem}>
      <strong style={emphasis}>1. The feeling loses its name.</strong> Shame,
      guilt, envy, fear — they all collapse into undifferentiated "I feel bad."
      The different flavours of discomfort merge into one painful signal with no
      label and no recognised internal source.
    </p>
    <p style={numberedItem}>
      <strong style={emphasis}>2. The body looks outward.</strong> "I feel bad"
      becomes "someone is making me feel bad" becomes "I am being attacked."
      Without a label pointing inward, the nervous system searches for an
      external cause. The attribution lands before any conscious thought.
    </p>
    <p style={numberedItem}>
      <strong style={emphasis}>3. The body reacts.</strong> "Someone hurt me, I
      need to hurt back." The person now genuinely perceives a threat. Their
      response — shutting down, lashing out, withdrawing care — feels
      proportional to what they are experiencing. From inside that moment, it is
      self-defence.
    </p>
    <p style={prose}>
      <strong style={emphasis}>This is emotional distortion.</strong> Internal
      discomfort, unable to be processed as one's own, gets reclassified as an
      external attack. The person genuinely believes they are defending
      themselves. They are not lying. They are not strategising. The nervous
      system is reporting a threat that is not there — because the processing
      channel that would identify the signal as internal (SEA) is structurally
      unavailable.
    </p>
    <p style={prose}>
      <strong style={emphasis}>The boundary-evidence loop:</strong> One person
      crosses a line. The other sets a boundary. The first person — unable to
      register their own part or feel the other person's pain — experiences the
      boundary as an unprovoked attack. They push back. A firmer boundary gets
      set. They experience this as escalation. The other person's self-protection
      becomes proof of being attacked. The more boundaries are set, the more
      "evidence" accumulates.
    </p>
    <p style={standaloneLine}>Your boundaries become their evidence.</p>
    <p style={prose}>
      <strong style={emphasis}>The spectrum matters.</strong> SEA can be partial.
      It might be present in calm moments and absent when stress rises or
      relational stakes increase. Each time someone catches the moment where "I
      feel bad" could actually be "I feel envious" or "I feel guilty," the loop
      loosens. When SEA is structurally absent across contexts, the loop tightens
      into chronic patterns.
    </p>
    <p style={prose}>
      This explains one of the most confusing dynamics in relationships:{" "}
      <strong style={emphasis}>
        why retaliation feels like self-defence to the person doing it.
      </strong>{" "}
      They are not choosing to be unfair. Their nervous system is reporting a
      threat that is real to them — the discomfort is real. The attribution is
      wrong. And without SEA, no correction is available from inside.
    </p>
  </>
);

// ─── WHERE IT COMES FROM ────────────────────────────────────

export const whereItComesFrom = (
  <>
    <p style={prose}>
      Porges (2011) — neuroception evaluates experienced safety, not objective
      danger; state shapes perception. Damasio (1994) — somatic markers shape
      attribution before conscious awareness. Freud — projection as attribution
      of internal states to external sources. Cognitive therapy (Beck) —
      misattribution and cognitive distortion. Attachment theory — insecure
      attachment patterns produce threat-biased attribution. Schore (2003) —
      right-brain implicit processing shapes relational perception. Van der Kolk
      (2014) — trauma produces threat-biased perception and disproportionate
      response.
    </p>
  </>
);

// ─── WHAT TEG-BLUE ADDS ────────────────────────────────────

export const whatTegBlueAdds = (
  <>
    <p style={prose}>
      Naming emotional distortion as the specific micro-mechanism that connects
      SEA absence to relational harm — and showing it as the real-time
      interpersonal expression of the regulatory replacement described across the
      framework system. Existing frameworks describe projection (psychoanalytic),
      misattribution (cognitive), threat-biased perception (trauma), and
      neuroception errors (polyvagal) as separate phenomena. TEG-Blue identifies
      them as one mechanism: when SEA is offline, internal discomfort cannot be
      identified as one's own and gets attributed outward.
    </p>
    <p style={prose}>
      The boundary-evidence loop as a named, recognisable interpersonal pattern
      — giving language to an experience that is otherwise difficult to
      articulate. The spectrum framing: emotional distortion is not binary but
      operates on a gradient matching the compass. In Connection, the person
      catches it. In Protection, the catching becomes harder. In chronic Control
      and Domination, the catching stops entirely and the distortion becomes the
      person's experienced reality.
    </p>
    <p style={prose}>
      The non-pathologising stance is critical: emotional distortion is not
      manipulation. It is not a personality flaw. It is a structural consequence
      of a capacity that did not develop — because the conditions it required
      were not present. Understanding the mechanism does not excuse the impact.
      The harm is real regardless of the internal process. But understanding
      changes what works: explaining why the boundary is reasonable does not help
      (the problem is not logic). Creating safety — and sometimes creating
      distance — is what allows the system to settle enough that the distortion
      can loosen.
    </p>
  </>
);
