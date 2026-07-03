/**
 * Deep Engine chronic configuration data for .org.
 *
 * Source: /Users/annaparetas/Projects/teg-blue-engine/atlas-data.js
 * Snapshot: 2026-06-28 chronic build / ESC rewrite.
 *
 * This file is intentionally chronic-only. Acute/formational state definitions
 * live in deep-engine-formations.js so temporary state configuration and
 * chronic state organization cannot drift into the same source layer.
 */

import { CHRONIC_FORMATION } from "../styles/tokens";
import { DEEP_ENGINE_FORMATIONS } from "./deep-engine-formations";

const cell = (lead, sub, note) => ({ lead, sub, note });

export const DEEP_ENGINE_CHRONIC_FORMATION_META = {
  baseline: {
    chronicConfig: "Chronic Elevated Physiological Baseline",
    chronicConfigDetail: "No resting availability",
    plainChronic: "Elevated baseline — regulation does not fully complete",
    chronicColor: CHRONIC_FORMATION.X,
  },
  connection: {
    chronicConfig: "Chronic Connection / Belonging",
    chronicConfigDetail: "No real Safety Access (pretending safety is the normal)",
    plainChronic: "Connection / Belonging — safety is displayed without full access",
    chronicColor: CHRONIC_FORMATION.A,
  },
  calibration: {
    chronicConfig: "Chronic Safety Checking",
    chronicConfigDetail: "Sustained threat",
    plainChronic: "Safety Checking — the safety question remains unresolved",
    chronicColor: CHRONIC_FORMATION.AB,
  },
  protection: {
    chronicConfig: "Chronic Protection / Defence",
    chronicConfigDetail: "Defence as default",
    plainChronic: "Protection / Defence — mobilisation stays held",
    chronicColor: CHRONIC_FORMATION.B,
  },
  strategic: {
    chronicConfig: "Chronic Control / Management",
    chronicConfigDetail: "Chronic Control / Management",
    plainChronic: "Control / Management — management becomes the regulation route",
    chronicColor: CHRONIC_FORMATION.C,
  },
  domination: {
    familiarChronic: "coercive control",
    chronicConfig: "Chronic Domination",
    chronicConfigDetail: "Power as identity",
    plainChronic: "Domination — power becomes the regulation route",
    chronicColor: CHRONIC_FORMATION.D,
  },
  shutdown: {
    chronicConfig: "Shutdown",
    chronicConfigDetail: "Shutdown",
    plainChronic: "Persistent Shutdown — collapse becomes the running organisation",
    chronicColor: CHRONIC_FORMATION.Z,
  },
};

export const withChronicFormationMeta = (formation) => ({
  ...formation,
  ...DEEP_ENGINE_CHRONIC_FORMATION_META[formation.id],
});

export const DEEP_ENGINE_CHRONIC_ROWS = {
  ess: {
    label: "Body state",
    cells: {
      baseline: "Elevated baseline; vagal tone reduced, HRV low; cortisol high at rest.",
      connection: "Engagement template rigidified / never built; face-heart hardware unassembled.",
      calibration: "Brake never fully re-engages; held at the boundary.",
      protection: "Brake chronically released; sympathetic held, not discharged; allostatic load.",
      strategic: "Cortisol chronically elevated; reserve drawn down.",
      domination: "Near-max output held; engagement offline.",
      shutdown: "Dorsal output persistent; bradycardia / downshift as organisation.",
    },
  },
  cls: {
    label: "Cognition",
    cells: {
      baseline: "Runs against an activation floor; never full integrative range.",
      connection: "Flexible-but-reduced, or bound to compensatory management.",
      calibration: "Held tilted to the unresolved boundary.",
      protection: "Locked to the defensive problem; reflective range narrowed.",
      strategic: "Narrative as primary regulation (stands in for body-level return).",
      domination: "Reduced to survival-relevant; integrative range offline.",
      shutdown: "Foggy / offline as organisation.",
    },
  },
  lockedPerception: {
    label: "Locked perception",
    cells: {
      baseline: "Chronic tilt held even at \"rest\"; no settled full field.",
      connection: "Compensatory / approximated safety where the safety read never built.",
      calibration: "Boundary read locked, not calibrating.",
      protection: "Locked onto Threat regardless of presence.",
      strategic: "Sustained threat-model, scanning to confirm.",
      domination: "Survival tunnel held as organisation.",
      shutdown: "Aperture chronically withdrawn.",
    },
  },
  signalConfiguration: {
    label: "Fused signals",
    cells: {
      baseline: "Chronic elevated baseline — unresolved source signals remain physiologically available after their completion window.",
      connection: "Pretended Bonding-Belonging — safety display without settled internal safety.",
      calibration: "Connection-Risk Fusion — bonding and belonging-at-risk signals fuse.",
      protection: "Connection-Defence Fusion — connection-preservation and organism-protection signals fuse.",
      strategic: "Distorted emotional signals — source, timing, scale, meaning, target, responsibility or response requirement can become mismatched.",
      domination: "Destructive Signal Configuration — the other becomes the obstacle to remove.",
      shutdown: "Signal collapse — signals may present as numbness, fog, absence, collapse or inaccessible pressure.",
    },
  },
  stuckState: {
    label: "Stuck state",
    cells: {
      baseline: "Chronic Elevated Baseline — rest never settles.",
      connection: "Chronic Pattern A — built-then-rigidified / No Safety Access (pretended bonding-belonging).",
      calibration: "A↔B Transition — collapses toward chronic B.",
      protection: "Chronic Pattern B — sympathetic mobilisation held, not discharged.",
      strategic: "Chronic Pattern C — Control; narrative carries regulation.",
      domination: "Chronic Pattern D — Power Mobilisation; empathy-disabled, destruction as survival route.",
      shutdown: "Persistent Shutdown — collapse as running organisation.",
    },
  },
  physiologicalCapacity: {
    label: "Physiological capacity",
    cells: {
      baseline: cell("Restorative cycling under-resourced", "recovery, digestion, repair and immune surveillance never fully resume."),
      connection: cell("Engagement hardware under-resourced", "face-heart engagement runs without full re-resourcing, or the integrated substrate was never built."),
      calibration: cell("Readiness held at the boundary", "engagement resourcing stays braced against a brake that does not fully re-engage."),
      protection: cell("Defence diversion held", "HRV stays low, stress hormones sustain, maintenance suspends and allostatic load accrues."),
      strategic: cell("Reserve continuously drawn down", "the composed surface masks the physiological cost of holding a managing configuration."),
      domination: cell("Near-maximum output held", "the most expensive configuration runs without a restorative window or reserve held back."),
      shutdown: cell("Conservation held", "metabolic downshift, slowed heart and reduced muscle tone become the running organisation."),
    },
  },
  actionReadiness: {
    label: "Action readiness",
    cells: {
      baseline: cell("Action pressure never fully clears", "rest carries background activation, need, threat or numbness."),
      connection: cell("Guarded or compensatory contact", "approach can be performed or sought while settled safety access remains reduced."),
      calibration: cell("Checking repeats", "approach, withdrawal, appeasement or monitoring repeat because the boundary does not resolve."),
      protection: cell("Defensive readiness held", "bracing, avoidance, pursuit, resistance or boundary defence stay available before present evidence updates."),
      strategic: cell("Managed action and inhibition", "movement is selected to control variables, preserve the model and keep the field manageable."),
      domination: cell("Control or overpowering readiness", "maximum priority goes to imposing outcome or blocking threat while competing information drops."),
      shutdown: cell("Action unavailable", "withdrawal, stillness, dissociation or collapse run as the default answer."),
    },
  },
  regulationNeeded: {
    label: "Regulation needed",
    cells: {
      baseline: cell("Somatic available but not completing; both substitutes active in background.", "Relational substitute low — another's co-regulation leaned on for background settling, not yet under control."),
      connection: cell("Somatic not engaged (template never built); relational substitutes via pretended bonding-belonging.", "Another's closeness recruited as the safety the internal template never built — co-regulation co-opted, not mutual."),
      calibration: "— Position welded / never built.",
      protection: cell("Somatic suppressed; both somatic + relational substitutes active.", "Relational substitute co-opts another's co-regulation under defensive control — settling borrowed by managing the other, not met mutually."),
      strategic: cell("Somatic suppressed / diminishing; relational substitutes dominant (managing-field harm-signals).", "The regulation source is now largely another nervous system — its state managed to produce the controlling system's settling."),
      domination: cell("Somatic subordinated; relational substitutes maximised — Counterfeit Relief + Predatory Regulation Cycle dominant.", "Regulation runs by controlling another nervous system to produce its own settling — co-opted co-regulation maximised (cycle over time → ESC)."),
      shutdown: "— Collapsed.",
    },
  },
  repairReturn: {
    label: "Repair / return",
    cells: {
      baseline: cell("Regulation does not fully land", "the raised floor remains; somatic clearing is available-but-not-completing."),
      connection: cell("Safety template never settles", "closeness may lower pressure without building internal safety access."),
      calibration: cell("Boundary loop does not reset", "the system stays held at the unresolved edge instead of returning to baseline."),
      protection: cell("Mobilisation stays held", "the brake cannot fully re-engage; discharge window remains suppressed."),
      strategic: cell("Relief stands in for repair", "management and narrative reduce pressure while unresolved load stays underneath."),
      domination: cell("Relief escalates instead of repair", "control can register as settling while it blocks mutual regulation and adds load."),
      shutdown: cell("Collapse conserves rather than repairs", "downshift becomes the organisation; re-engagement is not available yet."),
    },
  },
  completion: {
    label: "Completion",
    cells: {
      baseline: cell("Incomplete by default", "old activation carries forward into the next event."),
      connection: cell("Completion condition absent", "safety is displayed or approximated, but settled reception has not arrived."),
      calibration: cell("Loop does not close", "risk remains active; checking, appeasement, withdrawal or monitoring repeats."),
      protection: cell("Response cannot finish", "defence remains active because the body cannot discharge or update."),
      strategic: cell("Narrative closes the story, not the body", "cognition may explain the state while the physiological demand remains."),
      domination: cell("Substitute cannot deliver completion", "force, compliance or submission are not reception; the demand remains and grows."),
      shutdown: cell("Completion inaccessible", "signal and route stay unreadable until the system can re-engage."),
    },
  },
  awarenessAccess: {
    label: "Awareness access",
    cells: {
      baseline: "Self-read present but thinned — interoception runs against the raised floor; reflective range available but never full.",
      connection: "Inward read reduced or never assembled (No Safety Access) — compensatory narrative stands in for reading the state; reflective awareness ungrounded in body-signal.",
      calibration: "Self-tracking caught at the unresolved boundary — present but locked on the safety question, unable to settle.",
      protection: "Interoceptive read backgrounded; reflective range narrowed to the defensive problem — awareness threat-bound.",
      strategic: cell("Drive strong but unread from inside — cognitive override stands in for the self-read; the system narrates its state rather than feeling it. Shame/guilt generated but not received.", "← ISSA▸ drive unread · ISSA◂ override standing · CLS narrative-as-regulation"),
      domination: cell("Self-tracking stripped; integrative range offline — own state unread; shame/guilt generated but not received, so no remorse-as-self-signal.", "← ISSA▸ self-tracking stripped · CLS survival-relevant only · ISSA◂ vmPFC suppressed"),
      shutdown: "Interoceptive channel collapsed (numbness); cognition foggy/offline — self-read faint, fragmented, or unavailable.",
    },
  },
  empathyAccess: {
    label: "Empathy access",
    cells: {
      baseline: "Available but conditional — relational cues read from a system never fully at rest; care present, lightly guarded.",
      connection: "Connection displayed without internal safety access — largely the form of bonding (Pretended Bonding-Belonging), expressed to hold the relationship more than grounded in a self-read.",
      calibration: "Held at the boundary — the other read for mismatch and possible threat rather than freely; care narrowing.",
      protection: "Narrowed by defensive interpretation — the other read through threat (the bond itself can read as danger); care subordinated to protection.",
      strategic: cell("Selective and controlled — the other read instrumentally through the management model; care reduced as the signal map distorts (source, scale, target).", "← M2-C control · M1-C distortion · ISSA◂ override standing"),
      domination: cell("Offline or tactical — the other read as obstacle or resource, not a separate subject; self-other differentiation collapsed; the other's distress does not update the route.", "← M2-C empathy-disabled · M1-C other-as-obstacle · ESC impact fails to update"),
      shutdown: "Relational attunement offline under withdrawal — the other not taken in; empathy reduced with conservation.",
    },
  },
  selfOtherDifferentiation: {
    label: "Self-other differentiation",
    cells: {
      baseline: "Differentiation available but thinned — one's own activation can lightly colour the read of another.",
      connection: "Closeness can be preserved while self/other clarity stays reduced; bonding form may replace settled differentiation.",
      calibration: "Boundary monitoring replaces settled differentiation; the system keeps checking what belongs to self, other or the relationship.",
      protection: "The other's state is easily fused with threat to self; boundaries harden before context fully updates.",
      strategic: cell("Other held inside the management model — difference is tracked instrumentally, while felt separateness and care remain reduced.", "← M2-C management · CLS model dominance · AEC empathy access selective"),
      domination: cell("Self-other differentiation collapses — the other is read as obstacle, resource or target rather than a separate subject.", "← M2-C empathy-disabled · M1-C other-as-obstacle · ESC impact fails to update"),
      shutdown: "Self/other field unavailable under conservation — relational presence is distant, muted or hard to locate.",
    },
  },
};

export function atlasCellParts(value) {
  if (value == null) return { lead: "", sub: "", note: "" };
  if (typeof value === "string") return { lead: value, sub: "", note: "" };
  return {
    lead: value.lead || "",
    sub: value.sub || "",
    note: value.note || "",
  };
}

export function atlasCellText(value) {
  const { lead, sub, note } = atlasCellParts(value);
  return [lead, sub, note].filter(Boolean).join(" — ");
}

export const DEEP_ENGINE_CHRONIC_CONFIGURATIONS = DEEP_ENGINE_FORMATIONS.map((formation) => {
  const chronicFormation = withChronicFormationMeta(formation);
  return {
    ...chronicFormation,
    bodyState: DEEP_ENGINE_CHRONIC_ROWS.ess.cells[formation.id],
    cognition: DEEP_ENGINE_CHRONIC_ROWS.cls.cells[formation.id],
    lockedPerception: DEEP_ENGINE_CHRONIC_ROWS.lockedPerception.cells[formation.id],
    signalConfiguration: DEEP_ENGINE_CHRONIC_ROWS.signalConfiguration.cells[formation.id],
    stuckState: DEEP_ENGINE_CHRONIC_ROWS.stuckState.cells[formation.id],
    physiologicalCapacity: DEEP_ENGINE_CHRONIC_ROWS.physiologicalCapacity.cells[formation.id],
    actionReadiness: DEEP_ENGINE_CHRONIC_ROWS.actionReadiness.cells[formation.id],
    regulationNeeded: DEEP_ENGINE_CHRONIC_ROWS.regulationNeeded.cells[formation.id],
    repairReturn: DEEP_ENGINE_CHRONIC_ROWS.repairReturn.cells[formation.id],
    completion: DEEP_ENGINE_CHRONIC_ROWS.completion.cells[formation.id],
    awarenessAccess: DEEP_ENGINE_CHRONIC_ROWS.awarenessAccess.cells[formation.id],
    empathyAccess: DEEP_ENGINE_CHRONIC_ROWS.empathyAccess.cells[formation.id],
    selfOtherDifferentiation: DEEP_ENGINE_CHRONIC_ROWS.selfOtherDifferentiation.cells[formation.id],
  };
});

export const PUBLIC_CHRONIC_ROWS = {
  state: {
    baseline: "Rest that never fully arrives.",
    connection: "Connection without settled safety.",
    calibration: "The safety question stuck open.",
    protection: "Defence as the resting state.",
    strategic: "Control as the only way to feel safe.",
    domination: "Power becomes the default route to safety.",
    shutdown: "Any pattern can drop into shutdown when capacity can no longer hold.",
  },
  perception: {
    baseline: "The field cannot fully widen; background activation stays in the read.",
    connection: "The social field stays partly narrowed; contact is scanned for risk.",
    calibration: "The field narrows around small shifts in contact.",
    protection: "The field stays narrowed around threat cues.",
    strategic: "The field narrows around what must be predicted or managed.",
    domination: "The field tunnels around power, leverage, and threat.",
    shutdown: "The field withdraws; less is available.",
  },
  cognition: {
    baseline: "Thinking runs against background activation, so full range never quite returns.",
    connection: "Thinking can stay flexible, but it keeps screening contact for risk.",
    calibration: "Thinking stays tilted toward the unresolved boundary.",
    protection: "Thinking locks to the defensive problem.",
    strategic: "Narrative becomes the way the system regulates.",
    domination: "Thinking narrows to survival-relevant certainty.",
    shutdown: "Thinking becomes foggy, blank, or hard to organize.",
  },
  signalConfiguration: {
    baseline: "Unfinished signals keep running under the surface.",
    connection: "Safety can be displayed without fully landing inside.",
    calibration: "Bonding and risk signals travel together.",
    protection: "Connection and defence get tangled in the same field.",
    strategic: "Feeling becomes organized through management; source, scale, target, or responsibility can get mismatched.",
    domination: "The other can become the obstacle to overpower, silence, remove, or control.",
    shutdown: "Signals may show up as numbness, fog, absence, collapse, or unreadable pressure.",
  },
  physiologicalCapacity: {
    baseline: "Recovery and repair are under-resourced.",
    connection: "Engagement uses energy without full recovery.",
    calibration: "Readiness stays braced at the safety boundary.",
    protection: "Defence keeps resources diverted from maintenance and repair.",
    strategic: "Reserve is steadily spent by ongoing management.",
    domination: "Near-maximum output runs without enough recovery.",
    shutdown: "Conservation becomes the operating state.",
  },
  actionReadiness: {
    baseline: "Rest carries background pressure.",
    connection: "Contact is guarded or compensatory.",
    calibration: "Checking, approaching, withdrawing, or appeasing repeats.",
    protection: "Defensive readiness stays available before the present updates.",
    strategic: "Action is selected to control variables and preserve the model.",
    domination: "Action prioritizes imposing outcome or blocking threat.",
    shutdown: "Withdrawal, stillness, dissociation, or collapse becomes the available answer.",
  },
  regulationNeeded: {
    baseline: "The body needs real settling, but relief substitutes run in the background.",
    connection: "The body needs safety to become internal, not only performed through contact.",
    calibration: "The loop needs reliable evidence or repair so the safety question can close.",
    protection: "The body needs discharge, boundary action, distance, or threat resolution.",
    strategic: "The system needs the management model to loosen and the body load to clear.",
    domination: "The system needs force or control to stand down; compliance cannot complete the need.",
    shutdown: "The first need is protected re-engagement before active regulation can run.",
  },
  repairReturn: {
    baseline: "Relief may lower pressure, but the resting floor remains raised.",
    connection: "Closeness may soothe without building internal safety access.",
    calibration: "Reassurance may reduce pressure briefly, but the boundary loop does not reset.",
    protection: "Mobilisation stays held; the body does not fully discharge or update.",
    strategic: "Management lowers pressure while unresolved load remains underneath.",
    domination: "Control can feel settling while blocking mutual regulation and adding load.",
    shutdown: "Collapse reduces demand but does not return capacity.",
  },
  completion: {
    baseline: "Old activation carries into the next event.",
    connection: "Safety is approximated, but settled reception has not arrived.",
    calibration: "Checking repeats because risk remains active.",
    protection: "Defence cannot finish while discharge or update is blocked.",
    strategic: "The story can close while the body remains unfinished.",
    domination: "Force, compliance, or submission cannot provide reception; the demand grows.",
    shutdown: "Completion is inaccessible until the system can re-engage.",
  },
  awarenessAccess: {
    baseline: "Self-read is available but thinned by the raised floor.",
    connection: "The inner state is hard to read; pleasing or performing safety can replace body-tracking.",
    calibration: "Self-tracking is caught on the safety question.",
    protection: "Awareness narrows around threat and defence.",
    strategic: "The model of the state can replace feeling the state.",
    domination: "Self-tracking and remorse-as-body-signal are largely unavailable.",
    shutdown: "Self-read is faint, fragmented, or numb.",
  },
  empathyAccess: {
    baseline: "Care is possible but lightly guarded.",
    connection: "Connection may be displayed to hold contact more than grounded in self-read.",
    calibration: "The other is read for mismatch or possible threat.",
    protection: "Care is filtered through defence.",
    strategic: "The other is read through the management model.",
    domination: "The other is read as obstacle, resource, or threat rather than separate subject.",
    shutdown: "Relational attunement is offline or distant.",
  },
  selfOtherDifferentiation: {
    baseline: "One's own activation can color the read of another.",
    connection: "Closeness can be preserved while self/other clarity stays reduced.",
    calibration: "Boundary monitoring replaces settled differentiation.",
    protection: "The other's state can fuse with threat to self.",
    strategic: "Difference is tracked instrumentally, not felt as separate subjectivity.",
    domination: "The other collapses into obstacle, resource, or target.",
    shutdown: "The self/other field is distant or hard to locate.",
  },
};

export const PUBLIC_CHRONIC_PERCEPTION_DETAILS = {
  baseline:
    "The field cannot fully widen into settled rest. Background activation stays in the read, so neutral events can feel loaded before the body has fully settled.",
  connection:
    "The social field stays partly narrowed even while contact continues. Perception keeps checking for loss, demand, rupture, or mismatch because the safety read does not fully land inside.",
  calibration:
    "The field narrows around unresolved contact. Tone, timing, attention, and distance keep getting compared against risk, so updating is harder even when reassurance arrives.",
  protection:
    "The field stays narrowed around the threat template. Perception searches for boundary violation, danger, or escape routes before the present moment has fully updated.",
  strategic:
    "The field narrows into a management map. Perception reads for what must be predicted, contained, corrected, or controlled, and softer information can be filtered out if it does not help the model.",
  domination:
    "The field tunnels around power, leverage, and imposed outcome. Impact, autonomy, and separate reality may not register unless they affect control, force, or threat.",
  shutdown:
    "The field stays withdrawn. Detail, signal, and context may remain distant or hard to use until protected re-engagement becomes available.",
};

export const PUBLIC_CHRONIC_CONFIGURATIONS = DEEP_ENGINE_FORMATIONS.map((formation) => {
  const chronicFormation = withChronicFormationMeta(formation);
  return {
    ...chronicFormation,
    positionLabel: `${formation.code} · ${formation.mode}`,
    chronicLabel: chronicFormation.plainChronic,
    state: PUBLIC_CHRONIC_ROWS.state[formation.id],
    perception: PUBLIC_CHRONIC_ROWS.perception[formation.id],
    perceptionDetail: PUBLIC_CHRONIC_PERCEPTION_DETAILS[formation.id],
    cognition: PUBLIC_CHRONIC_ROWS.cognition[formation.id],
    signalConfiguration: PUBLIC_CHRONIC_ROWS.signalConfiguration[formation.id],
    physiologicalCapacity: PUBLIC_CHRONIC_ROWS.physiologicalCapacity[formation.id],
    actionReadiness: PUBLIC_CHRONIC_ROWS.actionReadiness[formation.id],
    regulationNeeded: PUBLIC_CHRONIC_ROWS.regulationNeeded[formation.id],
    repairReturn: PUBLIC_CHRONIC_ROWS.repairReturn[formation.id],
    completion: PUBLIC_CHRONIC_ROWS.completion[formation.id],
    awarenessAccess: PUBLIC_CHRONIC_ROWS.awarenessAccess[formation.id],
    empathyAccess: PUBLIC_CHRONIC_ROWS.empathyAccess[formation.id],
    selfOtherDifferentiation: PUBLIC_CHRONIC_ROWS.selfOtherDifferentiation[formation.id],
  };
});
