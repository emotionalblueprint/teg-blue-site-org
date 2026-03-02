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
      The nervous system calibrates a baseline for what to endure. This
      calibration happens through the developmental conditions — through what the
      adults' configuration normalised.
    </p>
    <p style={prose}>
      A child who grew up with a caregiver whose ER was flooded and SEA was
      absent learns: this level of emotional overwhelm is normal. A child who
      grew up with a caregiver running emotional distortion (Concept 7) learns:
      other people's discomfort being treated as my emergency is normal. A child
      whose emotional signals were consistently invalidated learns: my feelings
      do not count.
    </p>
    <p style={prose}>
      The threshold becomes the set point. What was endured becomes what is
      tolerated. The nervous system does not flag it as excessive, because it
      matches the calibrated baseline.
    </p>
    <p style={standaloneLine}>
      Familiar can feel "normal" even when it is costly.
    </p>
    <p style={prose}>
      This is why people stay in harmful dynamics — and why they genuinely do not
      see the harm. It is not a lack of intelligence, willpower, or self-respect.{" "}
      <strong style={emphasis}>
        Their tolerance threshold was calibrated in childhood to endure what they
        are currently enduring.
      </strong>{" "}
      The signal arrives — the body feels the cost — but it does not register as
      "too much" because it matches what the nervous system was trained to
      consider normal.
    </p>
    <p style={prose}>
      <strong style={emphasis}>
        The most consequential configuration: flooded ER + absent SEA.
      </strong>{" "}
      The person feels the harm (ER is online — they feel everything). But they
      cannot locate it as harm (SEA is offline — they cannot name what they feel
      or attribute it correctly). They feel terrible and do not know why. Or they
      know something is wrong but cannot identify what. The body is screaming and
      the person has no translation.
    </p>
    <p style={prose}>
      They may even defend the dynamic that is hurting them — because their
      internal calibration says: this is just how things are. "He doesn't mean
      it." "That's just how she is." "All families are like this." "It's not that
      bad." These are not rationalisations. They are false coherence (Concept 8)
      built on top of a threshold that was calibrated to endure.
    </p>
    <p style={prose}>
      This explains why advice like "just set boundaries" can feel impossible —
      because the system that would recognise the need for a boundary was
      calibrated to not register the violation. And it explains why, when someone
      does begin to recalibrate — often through a relationship that provides a
      different baseline — the shift can feel destabilising. The familiar felt
      wrong. The new feels unfamiliar. Unfamiliar can feel unsafe even when it is
      actually safer.
    </p>
    <p style={prose}>
      <strong style={emphasis}>Recalibration is possible.</strong> It happens
      through experiences that provide a different baseline — relationships,
      environments, and conditions that show the nervous system: this is what it
      feels like when the cost is lower. Over time, the threshold adjusts. What
      was tolerated becomes recognisable as costly. The body starts speaking —
      and this time, the person can hear it.
    </p>
  </>
);

// ─── WHERE IT COMES FROM ────────────────────────────────────

export const whereItComesFrom = (
  <>
    <p style={prose}>
      Pavlov (1927) — classical conditioning. Van der Kolk (2014) — trauma
      creates chronic defensive states and changes threat detection. Porges
      (2011) — neuroception shaped by experience. Bowlby (1969) — internal
      working models shape what is tolerated. McEwen (2000) — allostatic load;
      chronic stress changes baseline. Linehan (1993) — invalidating
      environments shape emotional tolerance. LeDoux (1996) — fear conditioning
      and generalisation.
    </p>
  </>
);

// ─── WHAT TEG-BLUE ADDS ────────────────────────────────────

export const whatTegBlueAdds = (
  <>
    <p style={prose}>
      Tolerance thresholds as a named mechanism linking the awareness capacity
      configuration to what a person can and cannot recognise as harmful. This is
      not just "early experience shapes later behaviour" (generic developmental
      insight). It is the specific pathway: the adults' configuration normalised
      certain conditions &rarr; the child's threshold calibrated to those
      conditions &rarr; the adult's nervous system does not flag harm at
      intensities that match the calibrated baseline &rarr; the person stays in
      dynamics that cost them because the cost registers as normal.
    </p>
    <p style={prose}>
      The configuration specificity is the contribution. Flooded ER + absent SEA
      is identified as the most consequential configuration for tolerance
      thresholds — the person who feels the harm but cannot locate it. This is
      more precise than "they have low self-esteem" or "they have a trauma
      history." It identifies exactly which capacities are producing the
      tolerance: ER is online (the body feels), SEA is offline (the body cannot
      name, source, or flag what it feels). This makes the intervention specific:
      the goal is not "raise self-esteem" or "process trauma" — it is develop
      SEA so the signals that are already arriving can finally be read.
    </p>
    <p style={prose}>
      The connection to false coherence (Concept 8) shows how thresholds and
      narratives work together: the threshold determines what gets tolerated, and
      false coherence generates the narrative that explains the tolerance as
      reasonable. "It's not that bad" is not a thinking error. It is a regulatory
      narrative built on top of a nervous system that was calibrated to not flag
      the level of harm the person is currently experiencing. Both the threshold
      and the narrative need to shift — and both shift through the same
      mechanism: sustained conditions that provide a different baseline.
    </p>
  </>
);
