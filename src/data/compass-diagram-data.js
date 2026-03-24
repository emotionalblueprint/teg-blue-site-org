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
    activation: 'Before awareness',  // root--mode-positions.md §Activation — "Before awareness, automatic"
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
    activation: 'Before awareness',
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
    key: 'stress',
    name: 'Stress',
    signal: 'Demand-resource mismatch',
    bodyResponse: 'HPA axis activation — cortisol rises, energy redirects toward the demand, body prioritises the mismatch and mobilises toward resolution',
    restorationNeeds: 'Demand must be met or resource restored — when the gap closes, the activation discharges; when it does not, cortisol remains elevated',
    type: 'somatic',
    restorationType: 'somatic',
    defaultMode: 'protection',
    fluidCompass: {
      connection: 'Reads the mismatch, mobilises toward the challenge proportionally',
      protection: 'Temporary activation — body prepares for the demand, releases when met',
      control: 'Brief prioritising — focuses attention on what requires action, then releases',
      domination: 'Momentary intensity spike — energy rises to meet the demand and self-regulates',
    },
    stuckCompass: {
      connection: 'Absorbed from environment — carries others\' demand states as own, no boundary',
      protection: 'Permanent baseline — demand-resource gap never closes, activation becomes resting state',
      control: 'Channeled into over-functioning — managed through doing rather than resolved',
      domination: 'Projected outward — discharged by imposing demands on others',
    },
  },
  {
    key: 'anxiety',
    name: 'Anxiety',
    signal: 'Anticipatory threat',
    bodyResponse: 'Chronic cortisol elevation — BNST activates (sustained anxiety circuit, distinct from amygdala\'s acute fear), body scans continuously for unresolved future conditions',
    restorationNeeds: 'Uncertainty must resolve — future condition assessed and accepted, threat materialises and converts to actionable fear, or relational support for tolerating uncertainty',
    type: 'somatic',
    restorationType: 'somatic or relational',
    defaultMode: 'protection',
    fluidCompass: {
      connection: 'Anticipatory threat reaches awareness, system prepares for unresolved future condition',
      protection: 'Temporary alertness — scans for what is not yet certain, settles when assessed',
      control: 'Brief scenario-mapping — plans for contingencies, then releases',
      domination: 'Momentary overwhelm — spike brought back within range',
    },
    stuckCompass: {
      connection: 'Chronic and relational — stays activated around whether connection will be maintained or lost',
      protection: 'Permanent anticipatory threat — the future reads as consistently dangerous',
      control: 'Channeled into planning and preparation — managed through scenario-control',
      domination: 'Projected as urgency onto others — activation transferred, others carry the anticipatory state',
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
    key: 'happiness',
    name: 'Happiness',
    signal: 'Sustained positive condition',
    bodyResponse: 'Serotonergic tone rises — general positive affect, body maintains openness without urgency of approach, a settled sustained state',
    restorationNeeds: 'Presence without interruption — the signal completes through continued contact with the condition that produced it',
    type: 'somatic',
    restorationType: 'somatic',
    defaultMode: 'connection',
    fluidCompass: {
      connection: 'Felt as a genuine positive state, without performance or suppression',
      protection: 'Received and briefly checked for reliability, then settles',
      control: 'Motivates maintaining the condition, then releases',
      domination: 'Momentary overflow — energy rises and self-regulates',
    },
    stuckCompass: {
      connection: 'Performed to maintain connection — genuine states suppressed to remain acceptable',
      protection: 'Blocked — positive conditions read as setups in chronic threat environment',
      control: 'Curated and timed — felt only when conditions are sufficiently managed',
      domination: 'Used as display — signals superiority or deployed to make others aware of the gap',
    },
  },
  {
    key: 'admiration',
    name: 'Admiration',
    signal: 'Value detected in another',
    bodyResponse: 'Orientation toward the other — body opens in the direction of what was detected, approach and inspiration, sometimes a brief pause of recognition',
    restorationNeeds: 'Presence with the recognition — allowing the detection to land without converting it into comparison, obligation, or self-diminishment',
    type: 'somatic',
    restorationType: 'somatic',
    defaultMode: 'connection',
    distortedBy: 'envy',
    fluidCompass: {
      connection: 'Inspires approach and orientation toward what was detected in the other',
      protection: 'Brief self-assessment, then returns to recognition of the other',
      control: 'Motivates identifying how to develop or acquire what was recognised',
      domination: 'Detection briefly activates own position, then returns to the other',
    },
    stuckCompass: null,  // In stuck compass, Envy occupies this space
  },
  {
    key: 'pride',
    name: 'Pride',
    signal: 'Own value recognised',
    bodyResponse: 'Expansion, warmth, upward energy — chest lifts, posture shifts, the body opens from the inside',
    restorationNeeds: 'Presence with the recognition, without requiring external validation — the signal completes through own awareness of contribution',
    type: 'somatic',
    restorationType: 'somatic',
    defaultMode: 'connection',
    distortedBy: 'arrogance',
    fluidCompass: {
      connection: 'Recognition of own value, shared without requiring external confirmation',
      protection: 'Temporary self-assertion, then settles without needing validation',
      control: 'Registers achievement and releases',
      domination: 'Energy rises with the signal, self-regulates without positioning above others',
    },
    stuckCompass: null,  // In stuck compass, Arrogance occupies this space
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
    key: 'trust',
    name: 'Trust',
    signal: 'Safety confirmed in a specific person',
    bodyResponse: 'Guard-dropping — vagal tone shifts, body moves from monitoring to open contact, muscles around eyes and throat soften',
    restorationNeeds: 'Reciprocity — the signal met with equivalent openness; trust extended must be matched by the other\'s',
    type: 'relational',
    restorationType: 'relational',
    defaultMode: 'connection',
    fluidCompass: {
      connection: 'Confirmed safety in a specific person, openness extends toward the other',
      protection: 'Checked against available information, then settles',
      control: 'Motivates assessment of reliability, then releases',
      domination: 'Pull to maintain guard is recognised and releases',
    },
    stuckCompass: {
      connection: 'Indiscriminate — openness extends to whoever is present regardless of evidence',
      protection: 'Absent — every person reads as a potential threat, the signal cannot activate',
      control: 'Conditional — reliability must be continuously verified and maintained',
      domination: 'Feigned strategically — performed to lower the other\'s guard',
    },
  },
  {
    key: 'gratitude',
    name: 'Gratitude',
    signal: 'Something needed was received',
    bodyResponse: 'Warmth, orientation toward the other, brief vulnerability in receiving — body opens toward the source with the settling of something received',
    restorationNeeds: 'Expression — the signal completing through acknowledgment that reaches the other person, not as performance but as genuine contact',
    type: 'relational',
    restorationType: 'relational',
    defaultMode: 'connection',
    fluidCompass: {
      connection: 'Recognition of what was received, orientation toward the other',
      protection: 'Brief vulnerability in receiving, then settles',
      control: 'Motivates expression, then releases',
      domination: 'Momentary discomfort with asymmetry of receiving, redirected toward expression',
    },
    stuckCompass: {
      connection: 'Performed to secure belonging — expressed out of necessity rather than genuine recognition',
      protection: 'Blocked — receiving activates suspicion about cost or intent',
      control: 'Transactional — what was received is tracked, gratitude creates obligation',
      domination: 'Demanded but not reciprocated — the other\'s expression expected as acknowledgment of position',
    },
  },
  {
    key: 'compassion',
    name: 'Compassion',
    signal: 'Other\'s state resonates, calls for approach',
    bodyResponse: 'Movement toward the other — body orients, approaches, reaches; resonance with the other\'s state while maintaining boundary',
    restorationNeeds: 'Contact with the other\'s state without absorption — presence without fixing, being in contact while remaining in own body',
    type: 'relational',
    restorationType: 'relational',
    defaultMode: 'connection',
    fluidCompass: {
      connection: 'Resonance with the other\'s state, movement toward them without merger',
      protection: 'Own pain activates briefly in contact with the other\'s, recalibrates and responds',
      control: 'Assesses what is needed, then acts',
      domination: 'Pull to distance recognised and redirected toward presence',
    },
    stuckCompass: {
      connection: 'Without boundary — the other\'s pain absorbed entirely, self disappears into caregiving',
      protection: 'Blocked — the other\'s pain triggers own activation, cannot maintain contact',
      control: 'Managed through problem-solving — the other\'s state addressed instrumentally, not received',
      domination: 'Performed as display — used to establish moral position rather than connect',
    },
  },
];

// ─── BODY SIGNATURE GROUPS ───────────────────────────────────────
// Source: root--emotions-as-signals.md §Body Signature Groups
// Emotions cluster by what the body does with them — the physiological signature.

export const BODY_SIGNATURE_GROUPS = [
  { key: 'mobilization', label: 'Mobilization', signature: 'Sympathetic activation, energy rises', emotions: ['fear', 'anger', 'stress', 'anxiety'] },
  { key: 'expulsion', label: 'Expulsion', signature: 'Visceral rejection, nausea, closure', emotions: ['disgust'] },
  { key: 'social-withdrawal', label: 'Social Withdrawal', signature: 'Shrinking, heat, pull inward', emotions: ['shame', 'guilt'] },
  { key: 'conservation', label: 'Conservation', signature: 'Slowing, tears, energy turns inward', emotions: ['sadness'] },
  { key: 'approach', label: 'Approach & Expansion', signature: 'Opening, energy moves outward', emotions: ['joy', 'happiness', 'admiration', 'pride'] },
  { key: 'bonding', label: 'Bonding & Proximity', signature: 'Orientation toward the other', emotions: ['love', 'trust', 'gratitude', 'compassion'] },
];

// ─── DISTORTIONS ─────────────────────────────────────────────────
// Source: root--emotions-as-signals.md §Distortions: Envy and Arrogance
// Not emotions — what occupies the space where Admiration and Pride would have been
// when SEA is absent and the compass is stuck. Only appear in Control and Domination.

export const DISTORTIONS = [
  {
    key: 'envy',
    name: 'Envy',
    distortionOf: 'admiration',
    description: 'What occupies the space where Admiration would have been — when SEA is absent and the compass is stuck. The original detection (value in another) is the same; what changed is whether it could be received.',
    stuckCompass: {
      connection: null,
      protection: null,
      control: 'Strategic undermining — the gap motivates quietly levelling the other\'s position',
      domination: 'Destroying what others have — if the gap cannot close, the other\'s resource is eliminated',
    },
  },
  {
    key: 'arrogance',
    name: 'Arrogance',
    distortionOf: 'pride',
    description: 'What occupies the space where Pride would have been — when SEA is absent and the compass is stuck. Own value cannot be received through SEA; elevation above others substitutes for internal recognition.',
    stuckCompass: {
      connection: null,
      protection: null,
      control: 'Superiority as management tool — own value maintained by keeping others positioned below',
      domination: 'Signals dominance — reinforces superiority, prevents contact, creates distance',
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
      // Connection — §Connection Restoration: "preventive, not corrective"
      name: 'Connection Restoration',
      timescale: 'Continuous',
      type: 'somatic',  // "Somatic restoration... system tends itself"
      description: 'System at functional baseline. Preventive, not corrective.',
    },
    {
      // Protection — §Protection Restoration: "Activation Sequence must complete"
      name: 'Protection Restoration',
      timescale: '20 min – 2 hrs',
      type: 'somatic',  // "primarily somatic — sympathetic spike clears through physical discharge"
      description: 'Full exhale, physical discharge, co-regulation. HPA resets.',
    },
    {
      // Control — §Control Restoration: "deliberately puts down the cognitive override"
      name: 'Control Restoration',
      timescale: '2 – 8 hrs',
      type: 'both',  // "begins somatically... may require relational safety to complete"
      description: 'Override released. Emotions surface. Cannot be rushed.',
    },
    {
      // Domination — §Domination Restoration: "extended rest, minimal demand"
      name: 'Domination Restoration',
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

// ─── CAPACITY DEFINITIONS ───────────────────────────────────────
// Source: root--awareness-capacities.md (tool-facing definitions for explorer UI)
// Used by EmpathicIntegrationExplorer (M2 page)
// Note: colors are applied by the component from tokens.js, not stored here.

export const CAPACITY_DEFINITIONS = [
  {
    id: 'RE',
    name: 'Reading Emotions',
    abbr: 'RE',
    tagline: 'Perceiving what others feel',
    lowHint: 'Emotional signals from others are missed or misread.',
    highHint: 'Others\' feelings are perceived clearly — even subtle or unspoken ones.',
  },
  {
    id: 'ER',
    name: 'Emotional Resonance',
    abbr: 'ER',
    tagline: 'Feeling it in your own body',
    lowHint: 'Others\' emotions are understood intellectually, but not felt.',
    highHint: 'Others\' emotions land in the body. Genuine resonance occurs.',
  },
  {
    id: 'SEA',
    name: 'Self-Emotional Awareness',
    abbr: 'SEA',
    tagline: 'Knowing your own internal state',
    lowHint: 'Internal state is difficult to locate or name.',
    highHint: 'Internal signals are readable and trustworthy. What\'s yours is identifiable.',
  },
];

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
      'Default mode: Protection/Control',
      'External regulation required',
      'Regulation substitutes: F3–F7',
      'Identity forms around mode',
      'Return pathway blocked',
    ],
    hormones: [],
  },
];
