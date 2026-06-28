/**
 * M3: Regulation Capacities — Diagram Data
 *
 * Source: vault-2/data-source/root/root--M3.md
 * Derived spec: vault-2/data-source/derived/derived--M3-diagram-data.md
 *
 * Consumed by: OpenCycleExplorer
 */

// ─── ACTIVATION STAGES ──────────────────────────────────────────
// Source: root--biological-restoration.md + M3 page content
// The HPA axis cascade — trigger → cascade → full activation.
// Used by OpenCycleExplorer (M3 page).

export const ACTIVATION_STAGES = [
  {
    id: 'trigger',
    label: 'Trigger',
    sub: 'Perceived threat',
    description:
      'The nervous system perceives a threat — physical, relational, social, or emotional. This happens below conscious awareness. The amygdala fires within 12ms — faster than any thought.',
    biology: [
      'Amygdala fires (12ms)',
      'Thalamus → fast pathway activated',
      'Signal: threat detected',
    ],
    hormones: [],
  },
  {
    id: 'cascade',
    label: 'Cascade',
    sub: 'HPA axis & SNS fire',
    description:
      'The hypothalamic-pituitary-adrenal axis fires a hormonal cascade. The entire body shifts to survival configuration. The entire body shifts to survival configuration — biology in motion.',
    biology: [
      'Cortisol released (1–3 min)',
      'Epinephrine & norepinephrine surge',
      'Heart rate ↑, digestion stops',
      'Muscles brace, pupils dilate',
      'PFC blood flow ↓',
    ],
    hormones: [
      'CRH → ACTH → Cortisol',
      'Epinephrine (adrenaline)',
      'Norepinephrine',
      'Glucagon → blood glucose ↑',
    ],
  },
  {
    id: 'activation',
    label: 'Full Activation',
    sub: 'Body in survival mode',
    description:
      'Every organ system is now oriented toward survival. The amygdala dominates. Cognition narrows. Emotional resonance filters. The body is doing exactly what it was designed to do.',
    biology: [
      'SNS fully dominant',
      'Serotonin ↓, GABA ↓',
      'Oxytocin ↓',
      'Amygdala sensitivity ↑',
      'Working memory ↓',
    ],
    hormones: [
      'Cortisol (peak)',
      'Epinephrine (sustained)',
      'Norepinephrine (sustained)',
      'Inflammatory cytokines',
    ],
  },
];

// ─── RESOLUTION PATH ────────────────────────────────────────────
// Source: root--biological-restoration.md §Fluid Restoration
// The cycle completion sequence — expression → vagal return → clearance → baseline.
// Used by OpenCycleExplorer (M3 page).

export const RESOLUTION_PATH = [
  {
    id: 'expression',
    label: 'Expression',
    sub: 'Signal discharged',
    description:
      'The emotion is felt and expressed. Trembling, crying, movement, breath change, vocalisation. The body begins to discharge the mobilised energy.',
    biology: [
      'Motor discharge begins',
      'Exhale-dominant breathing',
      'Emotional tears (stress hormones released)',
      'Muscle release begins',
    ],
    hormones: [],
  },
  {
    id: 'parasympathetic',
    label: 'Vagal Return',
    sub: 'PNS re-engages',
    description:
      'The vagus nerve activates the parasympathetic system. Heart rate slows. The gut re-engages. The face softens. Social engagement opens again.',
    biology: [
      'Vagal brake activates',
      'Heart rate ↓',
      'Digestion resumes',
      'PFC blood flow returns',
      'Oxytocin begins recovering',
    ],
    hormones: [],
  },
  {
    id: 'clearance',
    label: 'Clearance',
    sub: 'Cortisol metabolised',
    description:
      'The hippocampus receives the feedback signal that completes the HPA loop. Cortisol is metabolised by the liver. Neurotransmitters rebalance. The cycle closes.',
    biology: [
      'Hippocampal feedback loop closes',
      'Liver metabolises cortisol (20min–hrs)',
      'Serotonin, GABA, oxytocin normalise',
      'Memory encoded with context',
    ],
    hormones: [],
  },
  {
    id: 'baseline',
    label: 'Baseline',
    sub: 'Cycle complete',
    description:
      'The body returns to full baseline. Digestion, immune function, cognition, and emotional capacity all restored. The needle returns. This is what the body was designed to do.',
    biology: [
      'All systems normalised',
      'Allostatic load: zero added',
      'Compass: fluid',
      'Capacity: full',
    ],
    hormones: [],
  },
];

// ─── OVERRIDE PATH ──────────────────────────────────────────────
// Source: root--biological-restoration.md §Cognitive Override
// What happens when cognition intercepts the activation cycle.
// Used by OpenCycleExplorer (M3 page).

export const OVERRIDE_PATH = [
  {
    id: 'intercept',
    label: 'Cognition Intercepts',
    sub: 'Override activated',
    description:
      'The mind labels the emotion as irrelevant, weak, inappropriate, or dangerous. Attention redirects to analysis or narrative. The body hears nothing — it is already mid-cascade.',
    biology: [
      'PFC suppresses emotional signal',
      'Discharge phase never begins',
      'Muscles stay braced',
      'Cortisol keeps releasing',
      'HPA receives no \'all clear\'',
    ],
    hormones: [],
  },
  {
    id: 'submersion',
    label: 'Signal Submerged',
    sub: 'Access lost, signal runs',
    description:
      'The person loses access to the signal — but the signal continues generating. The body holds everything the mind refuses to see. The cycle is open. The cherry is still there.',
    biology: [
      'SEA collapses',
      'Emotional distortion activates',
      'Internal discomfort misread as external threat',
      'Somatic holding increases',
    ],
    hormones: [],
  },
  {
    id: 'accumulation',
    label: 'Load Accumulates',
    sub: 'Allostatic debt builds',
    description:
      'With each unprocessed cycle, the baseline rises. The amygdala sensitises. The threshold for the next activation lowers. The system escalates on an already-elevated foundation.',
    biology: [
      '★ Cortisol chronically elevated',
      '★ Amygdala increasingly sensitised',
      '★ Serotonin depleted',
      '★ Oxytocin suppressed',
      '★ Immune dysregulation',
      'Allostatic load: growing',
    ],
    hormones: [],
  },
  {
    id: 'stuck',
    label: 'Compass Stuck',
    sub: 'Mode becomes chronic',
    description:
      'The nervous system reorganises around the unresolved state. What was Protection becomes permanent. External regulation substitutes multiply. The gradient shift locks in.',
    biology: [
      'Default mode: Protection / Control / Management',
      'External regulation required',
      'Regulation substitutes: F3–F7',
      'Identity forms around mode',
      'Return pathway blocked',
    ],
    hormones: [],
  },
];

// ─── RESTORATION ─────────────────────────────────────────────────
// Source: root--biological-restoration.md Part 1 (fluid) + Parts 2–4 (chronic)

export const RESTORATION = {
  fluid: [
    {
      name: 'Connection Restoration',
      timescale: 'Continuous',
      type: 'somatic',
      description: 'System at functional baseline. Preventive, not corrective.',
    },
    {
      name: 'Protection Restoration',
      timescale: '20 min – 2 hrs',
      type: 'somatic',
      description: 'Full exhale, physical discharge, co-regulation. HPA resets.',
    },
    {
      name: 'Control / Management Restoration',
      timescale: '2 – 8 hrs',
      type: 'both',
      description: 'Override released. Emotions surface. Cannot be rushed.',
    },
    {
      name: 'Domination Restoration',
      timescale: '24 – 72 hrs',
      type: 'relational',
      description: 'Full somatic discharge. Guilt, grief, relief in sequence.',
    },
  ],
  chronic: [
    {
      nonRelational: ['Food', 'Numbing substances', 'Screens', 'Over-availability', 'Compulsive helping'],
      relational: ['Manufactured crises', 'Guilt-induction', 'Emotional manipulation'],
      relief: 'Minutes to hours',
    },
    {
      nonRelational: ['Stimulants', 'Intense exercise', 'Alcohol', 'Controlled environments'],
      relational: ['Pre-emptive attack', 'Rejection', 'Punishment for distance'],
      relief: 'Hours, or while perimeter holds',
    },
    {
      nonRelational: ['Work', 'Planning', 'Information', 'Focus substances'],
      relational: ['Criticism as correction', 'Punishment as consequence', 'Control as care'],
      relief: 'While substitute is active',
    },
    {
      nonRelational: ['Intense activity', 'Power substances', 'Risk', 'High-stimulus'],
      relational: ['Coercion', 'Punishment', 'Domination', 'Harm'],
      relief: 'While submission holds',
    },
  ],
};

// ─── RULES ───────────────────────────────────────────────────────
// Source: root--master-table.md §Structural Rules
// These govern what the diagram can and cannot show.

export const RULES = {
  reNeverDegrades: true,
  erFluidIsChosen: true,
  erChronicIsStructural: true,
  seaDividingLine: true,
  distortionFormula: '(1 - SEA)',
  empathicIntegration: 'RE × ER × SEA',
  baselineIsHome: true,
  chronicIsNotChosen: true,
  lockedFilter: true,
  behaviouralConvergence: true,
};
