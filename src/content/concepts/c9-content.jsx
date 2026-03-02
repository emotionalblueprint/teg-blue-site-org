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

// ─── WHAT IT IS ─────────────────────────────────────────────

export const whatItIs = (
  <>
    <p style={prose}>
      The three awareness capacities — Reading Emotions (RE: the capacity to
      track and interpret others' emotional states), Emotional Resonance (ER: the
      capacity to feel with others), and Self-Emotional Awareness (SEA: the
      capacity to know one's own emotional states) — are present at birth in
      proto-form. They develop through relational conditions. And they develop
      through a specific mechanism:{" "}
      <strong style={emphasis}>awareness teaches awareness.</strong>
    </p>
    <p style={prose}>
      The awareness capacities the caregivers carry are the awareness capacities
      that get passed. The adults' capacity configuration IS the child's
      developmental environment.{" "}
      <strong style={emphasis}>
        Children do not calibrate to what adults say. They calibrate to what
        adults embody.
      </strong>{" "}
      The child's nervous system reads the adult's nervous system directly —
      before language, before instruction, before intention.
    </p>
    <p style={prose}>
      A parent who says "be kind" while living in chronic Control teaches
      Control, not kindness. A caregiver who says "I'm fine" while their nervous
      system radiates tension teaches the child that emotional signals are not to
      be trusted. A caregiver whose own SEA is online — who can name what they
      feel, sit with discomfort, model that emotions are signals rather than
      crises — teaches the child, without instruction, that internal experience
      is readable and trustworthy.
    </p>
    <p style={standaloneLine}>
      Love does not override what the nervous system embodies.
    </p>
    <p style={prose}>
      A parent can love their child completely and still transmit patterns that
      damage them — because the parent in chronic Control who pushes their child
      to "toughen up" is not failing at love. They are succeeding at
      transmission. They are passing on the only regulatory architecture they
      know.
    </p>
    <p style={prose}>
      The mechanism is precise: adult RE/ER/SEA configuration &rarr; creates the
      environment &rarr; shapes the child's RE/ER/SEA configuration + regulation
      outcome. This is not just "the child adapts" — it is which adults,
      carrying which awareness, produce which environment, shaping which
      capacities, with which regulatory consequence.
    </p>
    <p style={prose}>
      When the awareness that gets passed is complete — when the caregivers have
      SEA online, ER sustainable, RE accurate, and the return path learned — the
      child's capacities develop as designed. RE develops as accurate reading
      (not hypervigilant scanning). ER develops as sustainable feeling (not
      flooding or shutdown). SEA develops as internal knowledge (not absence or
      suppression). The child learns the return path through co-regulation —
      being regulated <em>with</em>. This is the design.
    </p>
    <p style={prose}>
      When the awareness that gets passed is incomplete — when the adults' own
      capacities were shaped by their own conditions — the child's capacities
      develop around what is available.{" "}
      <strong style={emphasis}>
        The system was not broken. It was accurately calibrated to an inaccurate
        environment.
      </strong>{" "}
      What feels like "personality" is traceable to which capacities had
      conditions to develop, which did not — and whether the return path was ever
      learned.
    </p>
    <p style={prose}>
      <strong style={emphasis}>
        The chain replicates until awareness changes — not just behaviour, not
        just understanding.
      </strong>{" "}
      What the adult's nervous system embodies is what the child absorbs. What
      the child absorbs becomes what they embody as an adult. What they embody as
      an adult is what the next child absorbs. A parent can say "your feelings
      matter" while their own SEA is absent — and the child absorbs the absence,
      not the words.
    </p>
  </>
);

// ─── WHERE IT COMES FROM ────────────────────────────────────

export const whereItComesFrom = (
  <>
    <p style={prose}>
      Schore (2003) — right-brain-to-right-brain attunement between caregiver
      and infant. Porges (2011) — co-regulation through the social engagement
      system. Siegel (2012) — interpersonal neurobiology; the mind develops
      through relationships. Bowlby (1969) — attachment as a regulatory system.
      Tronick (1998) — mutual regulation model. Bandura (1977) — social learning
      and modelling. Stern (1985) — attunement and mirroring in early
      development.
    </p>
  </>
);

// ─── WHAT TEG-BLUE ADDS ────────────────────────────────────

export const whatTegBlueAdds = (
  <>
    <p style={prose}>
      Naming the transmission mechanism explicitly: not "environment shapes
      development" (which is generic) but "the specific awareness capacities the
      adults carry determine which awareness capacities the child develops." The
      causal chain is made precise: adult configuration &rarr; environment &rarr;
      child configuration. This makes the developmental question concrete and
      traceable: which adults, carrying which awareness configuration, produced
      which environment, developing which capacities in the child?
    </p>
    <p style={prose}>
      This framing is neither blame nor absolution. It is mechanism. The adults
      were not choosing to pass incomplete awareness. They were passing what they
      had — which was shaped by what was passed to them. The transmission is
      structural, not intentional. And it changes only when awareness changes —
      not when intentions improve, not when behaviour modifies, not when
      understanding deepens. When what the adult's nervous system{" "}
      <em>embodies</em> changes, the child's developmental environment changes.
      Nothing less alters the transmission.
    </p>
    <p style={prose}>
      The closing formulation connects to every subsequent framework: the chain
      replicates until capacity changes. This is the developmental origin of
      everything the framework system addresses — from individual identity
      through relationship patterns, collective rule systems, worth hierarchies,
      bias, and domination. Each scale is a different expression of the same
      transmission: awareness that was incomplete getting passed forward through
      relationship, through institutions, through culture.
    </p>
  </>
);
