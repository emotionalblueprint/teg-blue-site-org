/**
 * M1: Emotions as Signals — Diagram Data
 *
 * Source: vault-2/data-source/root/root--M1.md
 * Derived spec: vault-2/data-source/derived/derived--M1-diagram-data.md
 *
 * Consumed by: M1EmotionsAsSignals, EmotionWaveSection
 */

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

// ─── EMOTION WAVE ─────────────────────────────────────────────────
// Source: root--M1.md §Biological Substrate / EmotionWaveSection.jsx (inline MOMENTS)
// Three annotation points for the emotion wave animation.
// Extracted from EmotionWaveSection.jsx inline MOMENTS constant.

export const EMOTION_WAVE = [
  {
    t: 0.115, id: "fast",
    color: "#5BADFF",
    label: "Fast pathway",
    sub: "~12 ms",
    body: "The amygdala fires before the cortex knows what triggered it. The body responds before the mind understands.",
    ref: "LeDoux, 1996"
  },
  {
    t: 0.365, id: "branch",
    color: "#2563eb",
    label: "Integration window",
    sub: "300 ms – 5 s",
    body: "The only point where processing is possible. Before this, both pathways are identical biology. After it, they diverge permanently.",
    ref: "Ochsner & Gross, 2005"
  },
  {
    t: 0.625, id: "w90",
    color: "#f97316",
    label: "90-second window",
    sub: "~90 s",
    body: "If uninterrupted, the neurochemical cascade clears in roughly 90 seconds. Everything beyond that is re-triggering.",
    ref: "Bolte Taylor, 2008"
  }
];
