/**
 * Compass Diagram — Structured Data
 *
 * Single data file derived from all 5 root files in teg-blue-vault/data-source-update/.
 * Every field has a source comment tracing back to the root.
 *
 * Sources:
 *   root--mode-positions.md       → MODES, perception labels, activation types
 *   root--awareness-capacities.md → CAPACITIES (RE, ER, SEA levels + labels)
 *   root--biological-restoration.md → RESTORATION (fluid names/timescales, chronic substitutes)
 *   root--emotions-as-signals.md  → (reserved for Phase 5 emotion triggers)
 *   root--master-table.md         → RULES (structural rules governing display)
 */

// ─── MODES ───────────────────────────────────────────────────────
// Source: root--mode-positions.md §Activation, root--master-table.md Table 1+2

export const MODES = [
  {
    key: 'connection',
    label: 'Connection',
    center: 0.125,        // gradient bar position (0–1)
    zone: [0, 0.25],      // zone boundaries
    perception: 'Safety',  // root--mode-positions.md §Perception — "All channels wide open"
    activation: 'Body-first',  // root--mode-positions.md §Activation — "Body-first, automatic"
    arc: 'Safety → Three Capacities Online → Repair',  // root--master-table.md Table 1
    chronicArc: 'Pretended Safety → Over-Giving → Disappearing',  // root--master-table.md Table 2
  },
  {
    key: 'protection',
    label: 'Protection',
    center: 0.375,
    zone: [0.25, 0.5],
    perception: 'Threat',  // root--mode-positions.md §Perception — "Narrowed toward threat"
    activation: 'Body-first',
    arc: 'Alert → Threat Scanning → Defence',
    chronicArc: 'Defence → Perpetual Vigilance → No Stand-Down',
  },
  {
    key: 'control',
    label: 'Control',
    center: 0.625,
    zone: [0.5, 0.75],
    perception: 'Danger',  // root--mode-positions.md §Perception — "Strategic"
    activation: 'Cognitive',  // root--mode-positions.md §Activation — "Cognitive, deliberate"
    arc: 'Anticipate → Manage → Override',
    chronicArc: 'Instability as Constant → Override → Manage Permanently',
  },
  {
    key: 'domination',
    label: 'Domination',
    center: 0.875,
    zone: [0.75, 1.0],
    perception: 'Life Peril',  // root--mode-positions.md §Perception — "Tunnel"
    activation: 'Cognitive',
    arc: 'Override → Eliminate → Secure',
    chronicArc: 'Constant Life Peril → Eliminate → Tyranny',
  },
];

// ─── CURVE PARAMETERS ────────────────────────────────────────────
// Derived from root--mode-positions.md observations + root--master-table.md summaries.
//
// Fluid curves: Connection and Protection are symmetric bells contained in their zone.
// Control extends left into Protection zone (cognitive override builds on sympathetic activation).
// Domination extends far left through Protection and Control (maximum sustained activation).
//
// Chronic curves: wider and taller than fluid — accumulated activation never clears.
// Each chronic curve extends further than its fluid counterpart.

export const FLUID_CURVES = [
  // Connection: lowest activation, settled, ventral vagal, symmetric bell
  { peak: 0.125, height: 0.60, spread: 0.08, skew: 0 },
  // Protection: sympathetic spike, proportional, temporary, symmetric bell
  { peak: 0.375, height: 0.75, spread: 0.09, skew: 0 },
  // Control: PFC override engages AFTER sympathetic activation — left tail into Protection zone
  { peak: 0.60, height: 0.70, spread: 0.14, skew: -0.45 },
  // Domination: maximum activation — extends far left through Protection + Control zones
  { peak: 0.85, height: 0.85, spread: 0.22, skew: -0.65 },
];

export const CHRONIC_CURVES = [
  // Chronic Connection: long right tail — over-giving spreads diffusely across gradient
  // root--biological-restoration.md §Chronic Connection: activation runs continuously
  { peak: 0.125, height: 0.70, spread: 0.18, skew: 0.6 },
  // Chronic Protection: elevated baseline, never stands down, wider than fluid
  // root--biological-restoration.md §Chronic Protection: alarm never stands down
  { peak: 0.375, height: 0.80, spread: 0.16, skew: 0.3 },
  // Chronic Control: habitual override, extends back through Protection
  // root--biological-restoration.md §Chronic Control: suppression is expensive
  { peak: 0.58, height: 0.82, spread: 0.18, skew: -0.4 },
  // Chronic Domination: massive — extends from Connection zone to the end
  // root--biological-restoration.md §Chronic Domination: system organised to prevent return
  { peak: 0.82, height: 0.95, spread: 0.28, skew: -0.65 },
];

// ─── CAPACITIES ──────────────────────────────────────────────────
// Source: root--awareness-capacities.md (mechanism + gradient behaviour)
//         root--master-table.md Table 1 + Table 2 (RE, ER, SEA rows)
//
// Levels are 0–1 scale for bar rendering.
// Labels are compressed from root descriptions.

export const CAPACITIES = {
  fluid: [
    {
      // Connection — root--awareness-capacities.md §RE: "accurate and contextual"
      //              §ER: "Open. Somatic echo intact. Boundary maintained."
      //              §SEA: "Present and clear. Interoception intact."
      re: { level: 1.0,  label: 'Accurate, contextual' },
      er: { level: 1.0,  label: 'Open — somatic echo intact' },
      sea: { level: 1.0, label: 'Present and clear' },
    },
    {
      // Protection — §RE: "Accurate. Elevated but not threat-biased."
      //              §ER: "Filtered. Present but deprioritised — queued, not lost."
      //              §SEA: "Present. Can feel the activation and name it."
      re: { level: 0.95, label: 'Accurate, elevated' },
      er: { level: 0.55, label: 'Filtered — queued, not lost' },
      sea: { level: 0.85, label: 'Present — feels the alarm' },
    },
    {
      // Control — §RE: "Precise. Reading serves strategic clarity."
      //           §ER: "Deliberately quieted. PFC suppressing limbic signals by choice."
      //           §SEA: "Present — but chosen. Suppression is deliberate and known."
      re: { level: 0.95, label: 'Precise, strategic' },
      er: { level: 0.25, label: 'Deliberately quieted' },
      sea: { level: 0.70, label: 'Present — chosen suppression' },
    },
    {
      // Domination — §RE: "Accurate, often sharpened. In service of decisive action."
      //              §ER: "Offline by choice. Dropped to enable decisive action."
      //              §SEA: "Present. Meta-awareness retained even at peak."
      re: { level: 1.0,  label: 'Sharpened for action' },
      er: { level: 0.05, label: 'Offline by choice' },
      sea: { level: 0.60, label: 'Present — knows the extreme' },
    },
  ],
  chronic: [
    {
      // Chronic Connection — §RE: "Compulsive scanning. High accuracy — serves survival."
      //                      §ER: "Flooded. Boundary collapses. Structural merger."
      //                      §SEA: "Gone. Interoception disrupted by chronic outward tuning."
      re: { level: 0.90, label: 'Compulsive scanning' },
      er: { level: 0.90, label: 'Flooded — no boundary' },
      sea: { level: 0,    label: 'Gone' },
    },
    {
      // Chronic Protection — §RE: "Threat-biased. Sensitised amygdala fires fast."
      //                      §ER: "Shut down. HPA chronically elevated."
      //                      §SEA: "Gone. Activation normalised as baseline."
      re: { level: 0.85, label: 'Threat-biased' },
      er: { level: 0,    label: 'Shut down' },
      sea: { level: 0,    label: 'Gone' },
    },
    {
      // Chronic Control — §RE: "Instrumental. Reads precisely for strategic positioning."
      //                   §ER: "Absent. Others' states cognitively registered, not felt."
      //                   §SEA: "Gone. Chronic PFC suppression severed the pathway."
      re: { level: 0.95, label: 'Instrumental' },
      er: { level: 0,    label: 'Absent' },
      sea: { level: 0,    label: 'Gone' },
    },
    {
      // Chronic Domination — §RE: "Weaponised. Often the most accurate reader."
      //                      §ER: "Absent. vmPFC suppressed. Pain = material."
      //                      §SEA: "Gone. Fear experienced as strength."
      re: { level: 1.0,  label: 'Weaponised' },
      er: { level: 0,    label: 'Absent' },
      sea: { level: 0,    label: 'Gone' },
    },
  ],
};

// ─── RESTORATION ─────────────────────────────────────────────────
// Source: root--biological-restoration.md Part 1 (fluid) + Parts 2–4 (chronic)

export const RESTORATION = {
  fluid: [
    {
      // Connection — §Maintenance: "preventive, not corrective"
      name: 'Maintenance',
      timescale: 'Continuous',
      type: 'somatic',  // "Somatic restoration... system tends itself"
      description: 'System at functional baseline. Preventive, not corrective.',
    },
    {
      // Protection — §Recovery: "Activation Sequence must complete"
      name: 'Recovery',
      timescale: '20 min – 2 hrs',
      type: 'somatic',  // "primarily somatic — sympathetic spike clears through physical discharge"
      description: 'Full exhale, physical discharge, co-regulation. HPA resets.',
    },
    {
      // Control — §Surrender: "deliberately puts down the cognitive override"
      name: 'Surrender',
      timescale: '2 – 8 hrs',
      type: 'both',  // "begins somatically... may require relational safety to complete"
      description: 'Override released. Emotions surface. Cannot be rushed.',
    },
    {
      // Domination — §Long Return: "extended rest, minimal demand"
      name: 'Long Return',
      timescale: '24 – 72 hrs',
      type: 'relational',  // "almost always requires relational completion"
      description: 'Full somatic discharge. Guilt, grief, relief in sequence.',
    },
  ],
  chronic: [
    {
      // Chronic Connection substitutes — root--biological-restoration.md §Part 3 + §Part 4
      nonRelational: ['Food', 'Numbing substances', 'Screens', 'Compulsive helping'],
      relational: ['Manufactured crises', 'Guilt-induction', 'Emotional manipulation'],
      relief: 'Minutes to hours',
    },
    {
      // Chronic Protection substitutes
      nonRelational: ['Stimulants', 'Intense exercise', 'Alcohol', 'Controlled environments'],
      relational: ['Pre-emptive attack', 'Rejection', 'Punishment for distance'],
      relief: 'Hours, or while perimeter holds',
    },
    {
      // Chronic Control substitutes
      nonRelational: ['Work', 'Planning', 'Information', 'Focus substances'],
      relational: ['Criticism as correction', 'Punishment as consequence', 'Control as care'],
      relief: 'While substitute is active',
    },
    {
      // Chronic Domination substitutes
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
  // Rule 1: RE stays sharp across the entire gradient
  reNeverDegrades: true,
  // Rule 2: ER degrades differently fluid vs chronic
  erFluidIsChosen: true,      // fluid ER modulation is chosen and reversible
  erChronicIsStructural: true, // chronic ER degradation is involuntary
  // Rule 3: SEA present in all fluid, gone in all chronic
  seaDividingLine: true,
  // Rule 4: Distortion = I × (1 − SEA)
  distortionFormula: '(1 - SEA)',
  // Rule 5: Empathic Integration = RE × ER × SEA (multiplicative)
  empathicIntegration: 'RE × ER × SEA',
  // Rule 6: Health is mobility, not position
  baselineIsHome: true,
  // Rule 7: Chronic is not a choice
  chronicIsNotChosen: true,
  // Rule 8: Mode-Matched Scanning
  lockedFilter: true,
};
