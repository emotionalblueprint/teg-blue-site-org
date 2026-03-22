/**
 * Compass Diagram — Structured Data
 *
 * Single data file derived from all 5 root files in teg-blue-vault/data-source/root/.
 * Every field has a source comment tracing back to the root.
 *
 * Sources:
 *   root--mode-positions.md       → MODES, perception labels, activation types
 *   root--awareness-capacities.md → CAPACITIES (RE, ER, SEA levels + labels)
 *   root--biological-restoration.md → RESTORATION (fluid names/timescales, chronic substitutes)
 *   root--emotions-as-signals.md  → EMOTIONS (9 signals, body responses, gradient behaviour)
 *   root--master-table.md         → RULES (structural rules governing display)
 */

// ─── COMPASS CONDITIONS ──────────────────────────────────────────
// Source: naming-architecture.md §Nervous System Conditions

export const COMPASS_CONDITIONS = {
  compass: 'How the nervous system reads what\u2019s happening and responds',
  fluid: 'When the nervous system can shift between states and restore',
  stuck: 'When the nervous system is locked in one state and can\u2019t restore',
};

// ─── MODES ───────────────────────────────────────────────────────
// Source: root--mode-positions.md §Activation, root--master-table.md Table 1+2
// Mode Conditions: naming-architecture.md §Mode Conditions

export const MODES = [
  {
    key: 'connection',
    label: 'Connection',
    condition: 'When the nervous system reads safety and stays open',  // naming-architecture.md
    conditionShort: 'Safety & Openness',  // table header form
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
    condition: 'When the nervous system reads threat and defends',
    conditionShort: 'Threat & Defence',
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
    condition: 'When the nervous system needs strategy and management',
    conditionShort: 'Strategy & Management',
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
    condition: 'When the nervous system needs power and dominance',
    conditionShort: 'Power & Dominance',
    center: 0.875,
    zone: [0.75, 1.0],
    perception: 'Life Peril',  // root--mode-positions.md §Perception — "Tunnel"
    activation: 'Cognitive',
    arc: 'Override → Eliminate → Secure',
    chronicArc: 'Constant Life Peril → Eliminate → Tyranny',
  },
];

// ─── EMOTIONS ──────────────────────────────────────────────────────
// Source: root--emotions-as-signals.md
// 9 canonical emotions. Each carries a specific nervous system signal.
// defaultMode = which mode this emotion typically activates in a fluid compass.
// type = somatic (can complete through body alone) | relational (requires co-regulation).

export const EMOTIONS = [
  {
    key: 'fear',
    name: 'Fear',
    signal: 'Threat detected',
    bodyResponse: 'Sympathetic activation — heart rate rises, muscles tense, sensory acuity sharpens',
    restorationNeeds: 'Threat must resolve — danger passes, person acts, or safety established',
    type: 'somatic',
    restorationType: 'somatic',
    defaultMode: 'protection',
    fluidCompass: {
      connection: 'Reads real threat, mobilises proportionally, completes when threat passes',
      protection: 'Mobilises proportionally, body leads',
      control: 'Consciously contains the danger',
      domination: 'Eliminates the threat, knows the cost',
    },
    stuckCompass: {
      connection: 'Constant reassurance-seeking — can\'t hold safety alone, merges to feel safe',
      protection: 'Chronic hypervigilance — everything is a threat, can\'t settle',
      control: 'Rigid risk management — must control all variables to feel safe',
      domination: 'Terrorizing — "if I scare you first, I\'m safe"',
    },
  },
  {
    key: 'anger',
    name: 'Anger',
    signal: 'Boundary crossed',
    bodyResponse: 'Sympathetic activation directed outward — energy toward confrontation, assertion, correction',
    restorationNeeds: 'Boundary must be reasserted or acknowledged — through communication, action, or change',
    type: 'somatic',
    restorationType: 'somatic',
    defaultMode: 'protection',
    fluidCompass: {
      connection: 'Boundary signal — names the crossing, repairs',
      protection: 'Activates defence, proportional and clear',
      control: 'Deploys anger strategically, no collateral damage',
      domination: 'Overrides with force — chosen, deliberate',
    },
    stuckCompass: {
      connection: 'Suppressed — buried to preserve closeness, self erased to keep the peace',
      protection: 'Chronic rage — everything is an attack, always defended',
      control: 'Cold punishment — calculated retaliation, strategic withdrawal',
      domination: 'Destruction — rage used to annihilate, no return',
    },
  },
  {
    key: 'disgust',
    name: 'Disgust',
    signal: 'Contamination detected',
    bodyResponse: 'Nausea, retching, mouth/nose closing — gustatory cortex and insula activate',
    restorationNeeds: 'Removal — contaminant expelled, distance established, or environment confirmed safe',
    type: 'somatic',
    restorationType: 'somatic',
    defaultMode: 'protection',
    fluidCompass: {
      connection: 'Reads real contamination — signals boundary, acts proportionally',
      protection: 'Identifies real toxicity, withdraws proportionally',
      control: 'Uses moral clarity strategically, proportionate',
      domination: 'Rejects what is genuinely toxic — chosen, deliberate',
    },
    stuckCompass: {
      connection: 'Self-disgust — turns inward, "I\'m the thing that\'s wrong"',
      protection: 'Chronic contempt — nothing and no one is good enough',
      control: 'Moral gatekeeping — "I decide what\'s acceptable"',
      domination: 'Dehumanization — others become less than human',
    },
  },
  {
    key: 'shame',
    name: 'Shame',
    signal: 'Belonging at risk',
    bodyResponse: 'Withdrawal, shrinking, heat, desire to disappear — social survival signal',
    restorationNeeds: 'Relational evidence — another person stays present without contempt after seeing the shameful thing',
    type: 'relational',
    restorationType: 'relational',
    defaultMode: 'connection',
    fluidCompass: {
      connection: 'Vulnerability in service of repair — SEA present, can hold it',
      protection: 'Holds self-blame without losing self',
      control: 'Owns the failure, doesn\'t perform it',
      domination: 'Decisive course correction, no self-destruction',
    },
    stuckCompass: {
      connection: 'Disappearing — merges with others to avoid being seen at all',
      protection: 'Permanent hiding — can\'t be known, isolation becomes identity',
      control: 'Perfectionism — manages every surface to prevent exposure',
      domination: 'Shaming others — "if you feel smaller, I feel less exposed"',
    },
  },
  {
    key: 'guilt',
    name: 'Guilt',
    signal: 'Harm done',
    bodyResponse: 'Discomfort, restlessness, pull toward repair — corrective signal',
    restorationNeeds: 'Acknowledgment of impact, genuine repair, other person\'s experience felt through ER',
    type: 'relational',
    restorationType: 'relational',
    defaultMode: 'connection',
    fluidCompass: {
      connection: 'Acknowledges impact, makes amends — accountability without collapse',
      protection: 'Recognises shame signal, holds it without collapsing',
      control: 'Owns the harm, justifies nothing',
      domination: 'Takes decisive corrective action',
    },
    stuckCompass: {
      connection: 'Endless self-sacrifice — atones constantly, no forgiveness possible',
      protection: 'Chronic dread — "I\'m always about to be found out"',
      control: 'Over-functioning — tries to outwork the guilt, earns love through labor',
      domination: 'Blame reversal — "actually, you should feel guilty"',
    },
  },
  {
    key: 'sadness',
    name: 'Sadness',
    signal: 'Loss',
    bodyResponse: 'Withdrawal, slowing, tears — energy turns inward, conservation signal',
    restorationNeeds: 'Time, space, and for relational losses the presence of someone who holds without fixing',
    type: 'relational',
    restorationType: 'somatic or relational',
    defaultMode: 'connection',
    fluidCompass: {
      connection: 'Shared grief, genuine empathy with what is lost',
      protection: 'Withdraws to process, knows why, and returns',
      control: 'Sadness acknowledged purposefully, returns',
      domination: 'Allows grief briefly, acts through it',
    },
    stuckCompass: {
      connection: 'Chronic grieving — can\'t stop mourning, grief becomes identity',
      protection: 'Numbing — sadness blocked entirely, nothing gets in or out',
      control: 'Scheduled grief — "I\'ll manage when and how much I feel"',
      domination: 'Weaponized suffering — "my pain gives me power over you"',
    },
  },
  {
    key: 'joy',
    name: 'Joy',
    signal: 'Safety confirmed',
    bodyResponse: 'Expansion, energy, approach — body opens, dopamine flows, system moves toward source',
    restorationNeeds: 'Presence — fully experienced in body without scanning for what will take it away',
    type: 'somatic',
    restorationType: 'somatic',
    defaultMode: 'connection',
    fluidCompass: {
      connection: 'Play, celebration, full presence',
      protection: 'Allows joy cautiously, real threat nearby',
      control: 'Uses joy deliberately, knows the context',
      domination: 'Intense, decisive — earned and conscious',
    },
    stuckCompass: {
      connection: 'Compulsive positivity — must stay happy, can\'t hold anything dark',
      protection: 'Joy-blocking — "good things don\'t last, don\'t trust this"',
      control: 'Manufactured happiness — curated, performative, always "fine"',
      domination: 'Manic dominance — "my high overrides your reality"',
    },
  },
  {
    key: 'love',
    name: 'Love',
    signal: 'Bond',
    bodyResponse: 'Oxytocin, warmth, pull toward closeness — co-regulation circuit activates',
    restorationNeeds: 'Reciprocity — signal received and returned through genuine felt presence, not performance',
    type: 'relational',
    restorationType: 'relational',
    defaultMode: 'connection',
    fluidCompass: {
      connection: 'Deepens real closeness and care — connection without fusion',
      protection: 'Protects the bond actively',
      control: 'Holds love while managing real danger',
      domination: 'Protects at all costs — chosen sacrifice',
    },
    stuckCompass: {
      connection: 'Enmeshment — compulsive caretaking, no boundaries, love without self',
      protection: 'Possessive clinging — anxious, fear of loss, constant vigilance',
      control: 'Conditional — transactional, "I love you when you meet my terms"',
      domination: 'Ownership — identity-erasing, consuming, "you\'re mine"',
    },
  },
  {
    key: 'envy',
    name: 'Envy',
    signal: 'Gap',
    bodyResponse: 'Tension, comparison, pull toward acquisition or diminishment — gap-detection signal',
    restorationNeeds: 'Gap must close (resource acquired) or be accepted (reality integrated without threat)',
    type: 'somatic',
    restorationType: 'somatic',
    defaultMode: 'protection',
    fluidCompass: {
      connection: 'Turns envy into admiration and learning',
      protection: 'Feels the gap, uses it as signal',
      control: 'Channels envy into strategic action',
      domination: 'Eliminates the obstacle with full awareness',
    },
    stuckCompass: {
      connection: 'Self-erasure — "you deserve everything, I deserve nothing"',
      protection: 'Chronic comparison — always measuring, never enough',
      control: 'Strategic undermining — quietly works to level the playing field',
      domination: 'Destroying what others have — "if I can\'t have it, neither can you"',
    },
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
      nonRelational: ['Food', 'Numbing substances', 'Screens', 'Over-availability', 'Compulsive helping'],
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
  // Rule 9: Behavioural Convergence — same visible behaviour, different mechanism
  behaviouralConvergence: true,
};
