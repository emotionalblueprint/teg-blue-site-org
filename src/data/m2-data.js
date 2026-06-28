/**
 * M2: Nervous System States — Diagram Data
 *
 * Source: vault-2/data-source/root/root--M2.md
 * Derived spec: vault-2/data-source/derived/derived--M2-diagram-data.md
 *
 * Consumed by: FluidCompassExplorer, CompassDiagram
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
// Extended fields (description, capacities, sequence, insight, distortion) extracted
// from FluidCompassExplorer.jsx inline MODES constant.

export const MODES = [
  {
    key: 'connection',
    label: 'Connection',
    name: 'Connection',
    hex: '#93CFFF',
    condition: 'When the nervous system reads safety and stays open',
    conditionShort: 'Connection',
    center: 0.125,
    zone: [0, 0.25],
    perception: 'Safety',
    activation: 'Before awareness',
    arc: 'Safety → Three Capacities Online → Repair',
    chronicArc: 'Pretended Safety → Over-Giving → Disappearing',
    // Extended fields from FluidCompassExplorer.jsx
    autonomic: 'Ventral vagal — social engagement system',
    fluid: {
      fullName: 'Connection Mode',
      pattern: 'Connection',
      type: 'Before awareness',
      duration: 'Indefinite — baseline',
      sequence: 'Engage → Relate → Repair → Learn',
      description:
        'The nervous system has enough safety to engage with complexity. Perception broadens, empathy comes fully online, repair becomes possible, and learning capacity opens.',
      insight: 'The mode designed for sustained living — the system\'s baseline',
      capacities: [
        { name: 'Perception', text: 'Broad — sees the full field' },
        { name: 'Cognition', text: 'Flexible — holds complexity' },
        { name: 'Learning', text: 'Available' },
        { name: 'Relational', text: 'Full — repair, vulnerability, trust' },
      ],
    },
    chronic: {
      fullName: 'Chronic Connection',
      type: 'SEA Offline',
      duration: 'Permanent — no end condition',
      sequence: 'Pretended Safety → Over-Giving → Disappearing',
      description:
        'Connection as survival strategy. Safety performed, not felt. Boundaries feel like threat. Anger forbidden — rerouted into guilt or compliance. From outside, this looks like healthy Connection. From inside, there is no self left to connect from.',
      insight:
        'What looks like warmth is a protection strategy — the person cannot stop giving because stopping feels like the thing that will make them disappear',
      distortion: 'I feel bad → I caused it → I must fix myself',
      capacities: [
        { name: 'Perception', text: 'Narrowed to other — self drops out' },
        { name: 'Cognition', text: 'Serves compliance — not reflection' },
        { name: 'Learning', text: 'Blocked by external focus' },
        { name: 'Relational', text: 'Performed — not felt' },
      ],
    },
  },
  {
    key: 'protection',
    label: 'Protection',
    name: 'Protection',
    hex: '#5BADFF',
    condition: 'When the nervous system reads threat and defends',
    conditionShort: 'Protection',
    center: 0.375,
    zone: [0.25, 0.5],
    perception: 'Threat',
    activation: 'Before awareness',
    arc: 'Alert → Threat Scanning → Defence',
    chronicArc: 'Defence → Perpetual Vigilance → No Stand-Down',
    // Extended fields from FluidCompassExplorer.jsx
    autonomic: 'Sympathetic (fight/flight) · Dorsal vagal (freeze/fawn)',
    fluid: {
      fullName: 'Protection Mode',
      pattern: 'Protection',
      type: 'Before awareness',
      duration: 'Minutes — activates fast, returns fast',
      sequence: 'Fight / Flight → Freeze / Fawn',
      description:
        'The entire system mobilises: attention narrows toward threat, emotions amplify. Fight and flight are the primary responses — proportional and clear.',
      insight: 'Intelligent design for genuine threat',
      capacities: [
        { name: 'Perception', text: 'Narrowed — threat-relevant signals' },
        { name: 'Cognition', text: 'Simplified — binary thinking' },
        { name: 'Learning', text: 'Reduced' },
        { name: 'Relational', text: 'Limited — vulnerability dangerous' },
      ],
    },
    chronic: {
      fullName: 'Chronic Protection',
      type: 'SEA Offline',
      duration: 'Permanent — alarm never stands down',
      sequence: 'Defence → Perpetual Vigilance → No Stand-Down',
      description:
        'The system never stands down. Alarm stays on after threat passes. Uncertainty is danger. Safety feels like it will be taken the moment you relax. The person is not anxious — they are realistic.',
      insight:
        'The alarm never stops because stopping it feels more dangerous than the alarm itself',
      distortion: 'I feel bad → you\'re threatening me → I must defend',
      capacities: [
        { name: 'Perception', text: 'Locked on threat — cannot widen' },
        { name: 'Cognition', text: 'Binary — safe/unsafe only' },
        { name: 'Learning', text: 'Blocked by vigilance' },
        { name: 'Relational', text: 'Blocked — openness reads as exposure' },
      ],
    },
  },
  {
    key: 'control',
    label: 'Control / Management',
    name: 'Control / Management',
    hex: '#346AEC',
    condition: 'When the nervous system needs strategy and management',
    conditionShort: 'Control / Management',
    center: 0.625,
    zone: [0.5, 0.75],
    perception: 'Danger',
    activation: 'Cognitive',
    arc: 'Anticipate → Manage → Override',
    chronicArc: 'Instability as Constant → Override → Manage Permanently',
    // Extended fields from FluidCompassExplorer.jsx
    autonomic: 'Sympathetic + cognitive recruitment',
    fluid: {
      fullName: 'Control / Management Mode',
      pattern: 'Control / Management',
      type: 'After awareness',
      duration: 'Hours to days — time-limited tool',
      sequence: 'Anticipate → Manage → Override',
      description:
        'Protection is not enough — the situation requires structure or strategic action. Cognition is recruited deliberately. When it resolves, cognition stands down.',
      insight: 'A tool. Used deliberately. Released when done.',
      capacities: [
        { name: 'Perception', text: 'Control — what needs managing' },
        { name: 'Cognition', text: 'Control — planning, anticipation' },
        { name: 'Learning', text: 'Selective' },
        { name: 'Relational', text: 'Managed — relationships serve strategy' },
      ],
    },
    chronic: {
      fullName: 'Chronic Control / Management',
      type: 'SEA Offline',
      duration: 'Permanent — management never stops',
      sequence: 'Instability as Constant → Override → Manage Permanently',
      description:
        'Uncertainty must be managed always. Cognitive control is the default safety strategy. Others still register — as data to be managed, not as people to be felt. What looks like calm competence from outside is ongoing suppression from inside.',
      insight:
        'What looks like competence is a nervous system that cannot stop managing because unmanaged feels like unsafe',
      distortion: 'I feel bad → you\'re destabilising me → I must manage you',
      capacities: [
        { name: 'Perception', text: 'Control — scans for instability' },
        { name: 'Cognition', text: 'Locked on management — cannot release' },
        { name: 'Learning', text: 'Selective — serves strategy only' },
        { name: 'Relational', text: 'Managed — relationships serve control' },
      ],
    },
  },
  {
    key: 'domination',
    label: 'Domination',
    name: 'Domination',
    hex: '#2563eb',
    condition: 'When the nervous system needs power and dominance',
    conditionShort: 'Domination',
    center: 0.875,
    zone: [0.75, 1.0],
    perception: 'Life Peril',
    activation: 'Cognitive',
    arc: 'Override → Eliminate → Secure',
    chronicArc: 'Constant Life Peril → Eliminate → Tyranny',
    // Extended fields from FluidCompassExplorer.jsx
    autonomic: 'Sympathetic + full cognitive override',
    fluid: {
      fullName: 'Domination Mode',
      pattern: 'Domination',
      type: 'After awareness',
      duration: 'Rare — last resort, highest cost',
      sequence: 'Override → Eliminate → Secure',
      description:
        'Entered deliberately, used briefly, followed by return. Emotional Resonance drops to near-zero — the person chose to let it drop. The sequence is final.',
      insight: 'In a fluid compass, the cost is felt and processed',
      capacities: [
        { name: 'Perception', text: 'Tunnel — obstacles and resources' },
        { name: 'Cognition', text: 'Locked — rigid, self-confirming' },
        { name: 'Learning', text: 'Unavailable' },
        { name: 'Relational', text: 'Absent — others are resources or threats' },
      ],
    },
    chronic: {
      fullName: 'Chronic Domination',
      type: 'SEA Offline',
      duration: 'Permanent — tolerance builds, cost disappears',
      sequence: 'Constant Life Peril → Eliminate → Tyranny',
      description:
        'Permanent override. Empathy collapsed or weaponised. Tolerance builds — what produced safety yesterday requires more force today. The person has lost the experience of the cost.',
      insight:
        'The person does not feel the weight of what they are doing because the weight has become who they believe they are',
      distortion: 'I feel bad → you\'re challenging me → I must eliminate',
      capacities: [
        { name: 'Perception', text: 'Weaponised — reads to exploit' },
        { name: 'Cognition', text: 'Locked — rigid, self-confirming' },
        { name: 'Learning', text: 'Unavailable — nothing penetrates' },
        { name: 'Relational', text: 'Absent — others are resources or threats' },
      ],
    },
  },
];

// ─── FLUID CURVES ─────────────────────────────────────────────────
// Source: root--mode-positions.md + root--master-table.md
// Gaussian curve parameters for the fluid compass activation diagram.

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

// ─── CHRONIC CURVES ───────────────────────────────────────────────
// Source: root--mode-positions.md + root--biological-restoration.md
// Wider and taller than fluid — accumulated activation never clears.

export const CHRONIC_CURVES = [
  // Chronic Connection: long right tail — over-giving spreads diffusely across gradient
  { peak: 0.125, height: 0.70, spread: 0.18, skew: 0.6 },
  // Chronic Protection: elevated baseline, never stands down, wider than fluid
  { peak: 0.375, height: 0.80, spread: 0.16, skew: 0.3 },
  // Chronic Control: habitual override, extends back through Protection
  { peak: 0.58, height: 0.82, spread: 0.18, skew: -0.4 },
  // Chronic Domination: massive — extends from Connection zone to the end
  { peak: 0.82, height: 0.95, spread: 0.28, skew: -0.65 },
];
