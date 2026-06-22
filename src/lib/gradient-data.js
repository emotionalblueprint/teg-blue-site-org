/**
 * The Emotional Gradient — data model (ported from the visual-system build).
 * Concise readings in the plain-mechanism voice (no jargon, no pronouns,
 * nervous-system anchor). Public labels lead; internal Pattern / Formation codes
 * stay as source-trace, never as the public lead.
 */

// ─── POSITIONS (the seven, in gradient order) ────────────────────────────────

export const positions = [
  {
    id: 'baseline',
    mode: 'Baseline',
    familiar: 'rest-and-digest',
    sub: 'resting availability',
    pattern: 'Formation X · resting',
    mechanism: 'Nothing to meet — the system rests, open and fully available.',
    mechanismChronic: 'Rest never fully arrives — the body stays switched on even with no threat in the room.',
    acuteColor: '#cce0ff',
    chronicColor: '#ffe680',
    active: false,
  },
  {
    id: 'connection',
    mode: 'Connection / Belonging',
    familiar: 'social engagement',
    sub: 'safety → reciprocity',
    pattern: 'Pattern A · ventral vagal',
    mechanism: 'Safety detected — the system regulates through connection.',
    mechanismChronic: 'Safety is read but never quite trusted — connection stays conditional, watched, kept safe.',
    acuteColor: '#6eeafb',
    chronicColor: '#ffce00',
    active: true,
  },
  {
    id: 'calibration',
    mode: 'Safety Checking',
    familiar: '',
    sub: 'A↔B transition',
    pattern: 'Transition A↔B',
    mechanism: 'Belonging has changed — the system checks whether it is still safe here.',
    mechanismChronic: 'The safety check never resolves — the system stays caught between leaning in and bracing.',
    acuteColor: '#76faa1',
    chronicColor: '#ffa300',
    active: true,
  },
  {
    id: 'protection',
    mode: 'Protection / Defence',
    familiar: 'fight · flight · fawn',
    sub: 'threat → defence',
    pattern: 'Pattern B · sympathetic',
    mechanism: 'Threat detected — the system regulates through self-protection.',
    mechanismChronic: 'Threat is read as always present — defence stops being a response and becomes the resting state.',
    acuteColor: '#b6fc50',
    chronicColor: '#ff7e1d',
    active: true,
  },
  {
    id: 'strategic',
    mode: 'Strategic Management',
    familiar: 'control / management',
    sub: 'sustained control',
    pattern: 'Pattern C · sustained sympathetic',
    mechanism: 'Threat persists — the system manages the environment instead of connecting with it.',
    mechanismChronic: 'The threat never lifts — managing and controlling the environment hardens into a way of being.',
    acuteColor: '#e3fd54',
    chronicColor: '#ff5a05',
    active: true,
  },
  {
    id: 'domination',
    mode: 'Domination',
    familiar: 'power mobilisation',
    familiarChronic: 'coercive control',
    sub: 'power → survival',
    pattern: 'Pattern D · peak sympathetic',
    mechanism: 'Survival at stake — the system organises around power because nothing else has worked.',
    mechanismChronic: 'Nothing else has ever been trusted to work — power and force set as identity.',
    acuteColor: '#f7d448',
    chronicColor: '#ff404a',
    active: true,
  },
  {
    id: 'shutdown',
    mode: 'Shutdown',
    familiar: 'freeze · collapse',
    sub: 'conservation / collapse',
    pattern: 'Formation Z · dorsal',
    mechanism: 'Mobilisation cannot form — the system conserves and collapses inward.',
    mechanismChronic: 'Mobilising never feels available — collapse becomes the place the system keeps returning to.',
    acuteColor: '#a1adbf',
    chronicColor: '#a1adbf',
    active: false,
  },
]

// ─── AUTONOMIC BRANCH (recognisable grounding) ───────────────────────────────

export const autonomic = {
  baseline: 'parasympathetic',
  connection: 'parasympathetic · ventral vagal',
  calibration: 'parasympathetic → sympathetic',
  protection: 'sympathetic',
  strategic: 'sympathetic',
  domination: 'sympathetic',
  shutdown: 'parasympathetic · dorsal vagal',
}

// ─── DIMENSION CARDS ─────────────────────────────────────────────────────────

export const cards = [
  { id: 'state', label: 'State', description: "The mode the whole system is in right now — the master setting everything else here is shaped by. Change it, and perception, thinking, feeling, and action all shift with it.", science: 'Polyvagal Theory (Porges) + Stress Physiology (Sapolsky, McEwen)', source: 'M2' },
  { id: 'perception', label: 'Perception', description: 'What gets noticed and what gets missed — whether attention is wide open or narrowed to a single point.', science: 'Cognitive Science — state-dependent perception (Barrett, Kahneman) + neuroception', source: 'M2-C13' },
  { id: 'cognition', label: 'Cognition', description: 'How much clear thinking is available — free to weigh and plan, or narrowed to the immediate problem.', science: 'Cognitive Science — cognitive load, state-dependent (Bower, Kahneman, Barrett)', source: 'M2-C14 · CLS' },
  { id: 'selfAwareness', label: 'Self-awareness', description: "How clearly the body’s own inner state can be read — its signals, its needs, what it is feeling.", science: 'Interoception (A. D. Craig)', source: 'M2-C15' },
  { id: 'empathy', label: 'Empathy', description: "How much another’s state can be read and felt — resonance with what someone else is going through.", science: 'Interpersonal Neurobiology (Siegel) + Polyvagal social engagement', source: 'M2-C16 · AEC' },
  { id: 'body', label: 'Body / activation', description: 'What the body is physically doing — resting and repairing, or revved up and ready to act.', science: 'Stress Physiology — activation → allostatic load (Sapolsky, McEwen)', source: 'M2-C17 · ESS' },
  { id: 'time', label: 'Time horizon', description: 'How far the system reaches across time — open to past and future, or compressed to the immediate now.', science: 'Cognitive Science + Stress Physiology', source: 'M2-C18' },
  { id: 'emotions', label: 'Emotions / signals', description: 'What the emotion carries — the condition the body has picked up, and the response it pushes toward.', science: 'Affective Neuroscience (Panksepp, Damasio, Barrett, LeDoux) + Emotion Science', source: 'M1' },
  { id: 'behaviour', label: 'Behaviour / response', description: 'The action the state drives toward — reaching out, defending, controlling, or overpowering.', science: 'Polyvagal (mobilise / immobilise) + Trauma Research (defence)', source: 'M3' },
  { id: 'repair', label: 'Repair', description: 'Whether the system can come back down — settling, reconnecting, and returning to safety after threat.', science: 'Trauma Research — completion (Levine, van der Kolk) + Attachment (Bowlby)', source: 'M3 · ESC' },
  { id: 'rush', label: 'Rush (tempo)', description: "The system’s inner tempo — unhurried and steady, or speeding up into urgency and rush.", science: 'Tachypsychia + hurry sickness / hyperarousal — Stress Physiology + Cognitive Science', source: 'derived · M2 + C18' },
]

// ─── READINGS (acute `a` / chronic `c`) ──────────────────────────────────────

export const content = {
  state: {
    baseline: { a: 'At rest — nothing to defend against', c: 'Rest rarely reached — still switched on' },
    connection: { a: 'Open and engaged — the social system online', c: 'Still connected, but guarded and conditional' },
    calibration: { a: 'Between modes — checking if it is still safe', c: 'Stuck checking — the safety question never settles' },
    protection: { a: 'Mobilised to defend', c: 'Defence has become the resting state' },
    strategic: { a: 'Managing the threat — controlled, sustained', c: 'Control hardened into the default' },
    domination: { a: 'Organised around power', c: 'Power entrenched as the way of operating' },
    shutdown: { a: 'Shut down — conserving and withdrawn', c: 'Collapse as the default' },
  },
  perception: {
    baseline: { a: 'The whole field open — nothing singled out', c: 'Scanning for threat even at rest' },
    connection: { a: 'Wide, tilted toward faces and people', c: 'Reads people for safety and for risk' },
    calibration: { a: 'Tuned to the other — is this still safe?', c: 'Hyper-reads small shifts for signs of rupture' },
    protection: { a: 'Narrows hard onto the threat', c: 'Locked in threat-narrowing' },
    strategic: { a: 'Narrow and held — scanning ahead', c: 'Reads everything for advantage' },
    domination: { a: 'Tunnel — only what bears on surviving', c: 'Only power and leverage register' },
    shutdown: { a: 'The field fades — attention withdraws', c: 'Muted, dissociative' },
  },
  cognition: {
    baseline: { a: 'Fully open — free to plan and reflect', c: 'Low-grade rumination idling underneath' },
    connection: { a: 'Flexible, free to range', c: 'Thinking keeps screening for risk' },
    calibration: { a: 'Fixed on the situation right now', c: 'Looping over what went wrong' },
    protection: { a: 'Bound to the immediate defence', c: 'Narrow, defensive reasoning' },
    strategic: { a: 'Held in managing and predicting the threat', c: 'Always managing — it never lets up' },
    domination: { a: 'Stripped to survival-only thinking', c: 'Justifying logic; the other stops counting' },
    shutdown: { a: 'Foggy or offline', c: 'Blank' },
  },
  selfAwareness: {
    baseline: { a: 'Reads its own inner state freely', c: 'Little access to the inner state' },
    connection: { a: "Open to its own state and the other's at once", c: 'Own state muted to hold the connection' },
    calibration: { a: 'Tracking its own state — am I still okay here?', c: 'Doubting its own read of itself' },
    protection: { a: 'Backgrounded — attention is on the threat', c: "Cut off from the body's signals" },
    strategic: { a: 'Backgrounded — the cost goes unregistered', c: 'Only monitors itself to stay in control' },
    domination: { a: 'Stripped — almost no read of itself', c: 'No read of its own cost or impact' },
    shutdown: { a: 'The inner channel collapses — numb', c: 'Chronic numbness, dissociation' },
  },
  empathy: {
    baseline: { a: 'Available, but nothing calling on it', c: 'Only opens when safety allows' },
    connection: { a: 'Full — reading and resonating with the other', c: 'Attunement performed, kept managed' },
    calibration: { a: 'Heightened — reading the other closely', c: 'Anxiously over-reading everyone' },
    protection: { a: 'The other read for threat, not felt', c: 'Reads others through defence' },
    strategic: { a: 'The other read to predict and manage', c: 'Others handled as variables' },
    domination: { a: 'Offline — the cost to others cannot register', c: 'Others read only for leverage' },
    shutdown: { a: 'Withdrawn — out of contact', c: 'Offline — collapsed out of reach' },
  },
  body: {
    baseline: { a: 'Resting and repairing — recovery running', c: 'Never fully recovers — wear carried' },
    connection: { a: 'Steady — engaged, recovery still running', c: 'Running on borrowed reserve' },
    calibration: { a: 'Easing toward readiness', c: 'Low-grade activation that never lifts' },
    protection: { a: 'Mobilised — repair and digestion on hold', c: 'Mobilised so long it wears the body down' },
    strategic: { a: 'Reserve drawn down, held under load', c: 'Heavy load carried over a long time' },
    domination: { a: 'Maximum output — nothing held back', c: 'Maxed out again and again — damage' },
    shutdown: { a: 'Powered down — slowed, conserving', c: 'Chronic collapse — depleted' },
  },
  time: {
    baseline: { a: 'Ranges freely across past, present, future', c: 'The future feels closed off' },
    connection: { a: 'Open — oriented to what continues', c: 'Bracing for the bond to end' },
    calibration: { a: 'Pulled to the present moment', c: 'Stuck replaying the rupture, past and future' },
    protection: { a: 'Compressed to the threat right now', c: 'Locked in the anticipating now' },
    strategic: { a: "Reaches ahead — but only to the threat's next move", c: 'Endlessly projecting the next threat' },
    domination: { a: 'Collapsed to the survival instant', c: 'No future beyond staying in control' },
    shutdown: { a: 'Time freezes — continuity lost', c: 'Frozen, timeless' },
  },
  emotions: {
    baseline: { a: 'Quiet — only low background signal', c: 'An unresolved signal humming under the rest' },
    connection: { a: 'Love, trust, warmth, hope', c: 'Warmth laced with fear — longing that never feels safe' },
    calibration: { a: 'Unease — shame, sadness, fear of losing the bond', c: 'Grief and watchfulness fused together' },
    protection: { a: 'Fear, anger, disgust', c: 'Closeness and defence tangled together' },
    strategic: { a: 'Sustained anxiety and pressure, held in check', c: 'Feeling managed and flattened, cut off from what set it off' },
    domination: { a: 'Rage at survival pitch', c: 'Hardened into something destructive' },
    shutdown: { a: 'Signals barely generated — flat', c: "Numb — the signals can't be reached" },
  },
  behaviour: {
    baseline: { a: 'Resting, restoring', c: "Restless — can't settle" },
    connection: { a: 'Approaching, working together, repairing', c: 'Appeasing — working to earn safety' },
    calibration: { a: 'Checking, clarifying, reaching for repair', c: 'Pursue-and-withdraw, never steady' },
    protection: { a: 'Fight, flight, freeze, or fawn', c: 'Reactive defence as the default' },
    strategic: { a: 'Managing, controlling, containing', c: 'Controlling as a way of operating' },
    domination: { a: 'Overpowering, forcing', c: 'Coercive control, harm done' },
    shutdown: { a: 'Collapsing, withdrawing, going still', c: 'Chronic shutdown and freeze' },
  },
  repair: {
    baseline: { a: 'Available — nothing to mend right now', c: 'Repair rarely finishes' },
    connection: { a: 'Open — acknowledging, reconnecting', c: "Repair offered but doesn't land or isn't trusted" },
    calibration: { a: 'Within reach — repair still possible', c: 'Rupture and repair cycle, stalling' },
    protection: { a: 'Hard — self-protection comes first', c: 'The routes back are blocked' },
    strategic: { a: 'Avoided — admitting impact feels like losing control', c: 'Control stands in for repair' },
    domination: { a: 'Out of reach — harm denied or justified', c: 'No repair — the cycle repeats' },
    shutdown: { a: 'Blocked — re-engagement has to come first', c: 'Repair offline' },
  },
  rush: {
    baseline: { a: 'Settled — moving at the pace of now', c: "Can't slow down, even at rest" },
    connection: { a: 'Easeful — time feels open', c: 'Rushing even through connection' },
    calibration: { a: 'A slight quickening', c: 'Anxious speeding-up' },
    protection: { a: 'Quickening — urgency rising', c: 'Constant urgency — always behind' },
    strategic: { a: 'Fast and pressured, held there', c: 'Permanent rush — driven, never off' },
    domination: { a: 'Maximum rush — time itself seems to collapse', c: 'Relentless drive' },
    shutdown: { a: 'Tempo freezes — time stops', c: 'Frozen, time collapsed' },
  },
}

// ─── READOUT GROUPS ──────────────────────────────────────────────────────────

export const groups = [
  { label: 'Mind', ids: ['perception', 'cognition', 'selfAwareness', 'time'] },
  { label: 'Body', ids: ['body', 'rush'] },
  { label: 'Feeling', ids: ['emotions', 'empathy'] },
  { label: 'Response', ids: ['behaviour', 'repair'] },
]

// ─── SCIENCE GROUNDING (convergence, not derivation) — for static section + JSON-LD ──

export const scienceGrounding = [
  { part: 'The gradient / autonomic hierarchy', science: 'Polyvagal Theory — autonomic hierarchy and neuroception', authors: 'Porges' },
  { part: 'State / activation', science: 'Polyvagal Theory (three states) + Stress Physiology', authors: 'Porges · Sapolsky · McEwen' },
  { part: 'Perception', science: 'Cognitive Science — state-dependent perception + neuroception', authors: 'Barrett · Kahneman' },
  { part: 'Cognition', science: 'Cognitive Science — cognitive load, state-dependent', authors: 'Bower · Kahneman · Barrett' },
  { part: 'Self-awareness', science: 'Interoception — internal signalling and the sense of self', authors: 'A. D. Craig' },
  { part: 'Empathy', science: 'Interpersonal Neurobiology + Polyvagal social engagement', authors: 'Siegel · Porges' },
  { part: 'Body / activation', science: 'Stress Physiology — acute activation → allostatic load', authors: 'Sapolsky · McEwen' },
  { part: 'Time horizon', science: 'Cognitive Science + Stress Physiology (threat compresses the horizon)', authors: 'Kahneman · Sapolsky' },
  { part: 'Emotions / signals', science: 'Affective Neuroscience + Emotion Science', authors: 'Panksepp · Damasio · Barrett · LeDoux' },
  { part: 'Behaviour / response', science: 'Polyvagal (mobilise / immobilise) + Trauma Research', authors: 'Porges · Levine · van der Kolk' },
  { part: 'Repair', science: 'Trauma Research (completion of defence) + Attachment (co-regulation)', authors: 'Levine · van der Kolk · Bowlby' },
  { part: 'Rush / tempo', science: 'Tachypsychia + hurry sickness / hyperarousal', authors: 'Stress Physiology · Cognitive Science' },
]

// ─── FAQ (AEO — answer engines, voice, featured snippets) ────────────────────

export const faq = [
  {
    question: 'What is the Emotional Gradient?',
    answer:
      'The Emotional Gradient is a map of the nervous system’s states. The nervous system continuously appraises one question — is it safe, or is there danger? — faster than conscious thought, and shifts the whole organism into the state that fits what it found, along a single continuum from rest, through connection and the defences, down to shutdown.',
  },
  {
    question: 'How does the nervous system choose a state?',
    answer:
      'Through neuroception — a continuous, pre-conscious read of safety versus danger. Based on that read, the system organises itself into one of seven ordered positions: Baseline, Connection, Safety Checking, Protection, Strategic Management, Domination, and Shutdown. Each is a complete configuration of perception, cognition, the body, feeling, and behaviour — not a mood.',
  },
  {
    question: 'What is the difference between a passing state and a chronic one?',
    answer:
      'Each position is a passing response the system is built to move through and leave (acute). When a position cannot be left, it stops being a passing response and hardens into the default (chronic). The chronic reading shows restriction, repetition and substitute routing — it describes a system that cannot leave a state, never a verdict about a person.',
  },
  {
    question: 'What research is the Emotional Gradient grounded in?',
    answer:
      'The architecture leads; established research converges with and underwrites specific claims. The gradient’s autonomic hierarchy converges with Polyvagal Theory (Porges); activation and chronic load with Stress Physiology (Sapolsky, McEwen); state-dependent perception and cognition with Cognitive Science (Barrett, Kahneman); interoception with A. D. Craig; empathy with Interpersonal Neurobiology (Siegel); emotions with Affective Neuroscience (Panksepp, Damasio, LeDoux); defence and repair with Trauma Research (Levine, van der Kolk) and Attachment (Bowlby).',
  },
  {
    question: 'What are fight, flight, fawn and freeze?',
    answer:
      'They are familiar names for points on the gradient. Fight, flight and fawn are defensive expressions of Protection (mobilised self-protection under threat). Freeze and collapse are Shutdown (the system conserves when mobilisation cannot form). Rest-and-digest is Baseline; social engagement is Connection.',
  },
]
