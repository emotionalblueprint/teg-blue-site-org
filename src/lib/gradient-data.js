/**
 * The Emotional Gradient — data model (ported from the visual-system build).
 * Concise readings in the plain-mechanism voice (no jargon, no pronouns,
 * nervous-system anchor). Public labels lead; internal state codes
 * stay as source-trace, never as the public lead.
 */

// ─── POSITIONS (the seven, in gradient order) ────────────────────────────────

export const positions = [
  {
    id: 'baseline',
    code: 'X',
    mode: 'Baseline',
    atlasLabel: 'Safe & at rest',
    familiar: 'rest-and-digest',
    sub: 'resting availability',
    pattern: 'State X · resting',
    reality: 'SAFETY',
    mechanism: 'Nothing to meet — the system rests, open and fully available.',
    mechanismChronic: 'Rest never fully arrives — the body stays switched on even with no threat in the room.',
    acuteColor: '#cce0ff',
    chronicColor: '#ffe680',
    active: false,
  },
  {
    id: 'connection',
    code: 'A',
    mode: 'Connection / Belonging',
    atlasLabel: 'Safe with others',
    familiar: 'social engagement',
    sub: 'safety → reciprocity',
    pattern: 'State A · ventral vagal',
    reality: 'SAFETY',
    mechanism: 'Safety detected — the system regulates through connection.',
    mechanismChronic: 'Safety is read but never quite trusted — connection stays conditional, watched, kept safe.',
    acuteColor: '#6eeafb',
    chronicColor: '#ffce00',
    active: true,
  },
  {
    id: 'calibration',
    code: 'A↔B',
    mode: 'Safety Checking',
    atlasLabel: 'Is it still safe?',
    familiar: '',
    sub: 'A↔B transition',
    pattern: 'State A↔B · transition',
    reality: 'UNCERTAINTY',
    mechanism: 'Belonging has changed — the system checks whether it is still safe here.',
    mechanismChronic: 'The safety check never resolves — the system stays caught between leaning in and bracing.',
    acuteColor: '#76faa1',
    chronicColor: '#ffa300',
    active: true,
  },
  {
    id: 'protection',
    code: 'B',
    mode: 'Protection / Defence',
    atlasLabel: 'Threat',
    familiar: 'fight · flight · fawn',
    sub: 'threat → defence',
    pattern: 'State B · sympathetic',
    reality: 'THREAT',
    mechanism: 'Threat detected — the system regulates through self-protection.',
    mechanismChronic: 'Threat is read as always present — defence stops being a response and becomes the resting state.',
    acuteColor: '#b6fc50',
    chronicColor: '#ff7e1d',
    active: true,
  },
  {
    id: 'strategic',
    code: 'C',
    mode: 'Strategic Management',
    atlasLabel: 'Bigger threat',
    familiar: 'control / strategic management',
    sub: 'sustained control',
    pattern: 'State C · sympathetic + brake',
    reality: 'DANGER',
    mechanism: 'Threat persists — the system manages the environment instead of connecting with it.',
    mechanismChronic: 'The threat never lifts — managing and controlling the environment hardens into a way of being.',
    acuteColor: '#e3fd54',
    chronicColor: '#ff5a05',
    active: true,
  },
  {
    id: 'domination',
    code: 'D',
    mode: 'Domination',
    atlasLabel: 'Life threat',
    familiar: 'power mobilisation',
    familiarChronic: 'coercive control',
    sub: 'power → survival',
    pattern: 'State D · peak sympathetic',
    reality: 'LIFE PERIL',
    mechanism: 'Survival at stake — the system organises around power because nothing else has worked.',
    mechanismChronic: 'Nothing else has ever been trusted to work — power and force set as identity.',
    acuteColor: '#f7d448',
    chronicColor: '#ff404a',
    active: true,
  },
  {
    id: 'shutdown',
    code: 'Z',
    mode: 'Shutdown',
    atlasLabel: 'Shutdown',
    familiar: 'freeze · collapse',
    sub: 'conservation / collapse',
    pattern: 'State Z · dorsal',
    reality: 'OVERWHELM',
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
  strategic: 'sympathetic + vagal brake',
  domination: 'sympathetic',
  shutdown: 'parasympathetic · dorsal vagal',
}

// ─── DIMENSION CARDS ─────────────────────────────────────────────────────────

export const cards = [
  { id: 'state', label: 'State', description: "The whole-system configuration. The state is the position on the line; change it, and perception, thinking, feeling, body activation, and action all shift with it.", science: 'Polyvagal Theory (Porges) + Stress Physiology (Sapolsky, McEwen)', source: 'M2 + GC' },
  { id: 'perception', label: 'Perception', description: 'The state sets the filter on the world: in safety, the whole situation can be taken in; under threat, attention selects for what matters to protection, risk, escape, or control.', science: 'Cognitive Science — state-dependent perception (Barrett, Kahneman) + neuroception', source: 'M2-C13' },
  { id: 'cognition', label: 'Cognition', description: 'The state sets how much modelling capacity is available: in safety, thinking can compare, imagine, and revise; under threat, it compresses into fast, defensive problem-solving.', science: 'Cognitive Science — cognitive load, state-dependent (Bower, Kahneman, Barrett)', source: 'M2-C14 · CLS' },
  { id: 'selfAwareness', label: 'Self-awareness', description: "The state controls access to the body's own information: in safety, signals can be felt and named; under threat, the inner read gets muted, narrowed, or cut off.", science: 'Interoception (A. D. Craig)', source: 'M2-C15' },
  { id: 'empathy', label: 'Empathy', description: "The state controls how available another person remains as real and separate: in safety, resonance and care can stay online; under threat, others are read for risk, use, or impact on survival.", science: 'Interpersonal Neurobiology (Siegel) + Polyvagal social engagement', source: 'M2-C16 · AEC' },
  { id: 'body', label: 'Body / activation', description: 'The state changes the body’s operating mode: safety keeps repair, digestion, and social engagement available; threat redirects energy toward mobilisation, control, or conservation.', science: 'Stress Physiology — activation → allostatic load (Sapolsky, McEwen)', source: 'M2-C17 · ESS' },
  { id: 'time', label: 'Time horizon', description: 'The state changes how much time the system can hold: in safety, past, present, and future can stay connected; under threat, time compresses toward the immediate problem or freezes.', science: 'Cognitive Science + Stress Physiology', source: 'M2-C18' },
  {
    id: 'emotions',
    label: 'Emotions / signals',
    description: 'The emotion row shows what kind of signal the system is using to solve the situation.',
    descriptions: {
      baseline: {
        a: 'The point here is not a dominant emotion; it is the absence of a problem signal. Feeling can stay quiet because nothing needs defending, pursuing, or repairing.',
        c: 'What looks like rest is not fully quiet. An unresolved signal keeps running underneath, so the body never drops all the way into restoration.',
      },
      connection: {
        a: 'Signals organize toward contact. Warmth, trust, hope, and affection make approach, bonding, and repair easier.',
        c: 'Connection is present but not settled. Warmth is mixed with fear of losing safety, so longing and vigilance travel together.',
      },
      calibration: {
        a: 'The signal is a relational question: did something change, and can the bond be repaired? Unease, shame, sadness, and fear all point attention back to safety.',
        c: 'The question never resolves. Grief and watchfulness fuse together, so the system keeps checking for rupture even when the moment has moved on.',
      },
      protection: {
        a: 'The signal turns defensive. Fear, anger, and disgust push the system to create distance, set a boundary, escape, or fight back.',
        c: 'Defence no longer comes and goes cleanly. Closeness itself can trigger threat, so protective emotion stays tangled with the wish to connect.',
      },
      strategic: {
        a: 'Emotion is held under pressure rather than expressed directly. Anxiety and tension become management signals: watch, predict, contain, stay ahead.',
        c: 'Feeling gets flattened into control. The system still carries pressure, but the original hurt or fear is harder to find.',
      },
      domination: {
        a: 'The signal has reached survival pitch. Rage and force organize the system around overpowering what feels dangerous.',
        c: 'The signal hardens into a destructive operating style. Harm can start to feel justified because power has become the route to safety.',
      },
      shutdown: {
        a: 'The signal system is going offline. Instead of producing a clear emotion, the body conserves, goes flat, and reduces contact.',
        c: 'Numbness becomes the familiar state. Signals may still exist underneath, but they are difficult to feel, name, or use for repair.',
      },
    },
    science: 'Affective Neuroscience (Panksepp, Damasio, Barrett, LeDoux) + Emotion Science',
    source: 'M1',
  },
  { id: 'behaviour', label: 'Behaviour / response', description: 'The state narrows or opens the action menu: in safety, the system can approach, cooperate, and repair; under threat, it moves toward defending, managing, overpowering, or withdrawing.', science: 'Polyvagal (mobilise / immobilise) + Trauma Research (defence)', source: 'M3' },
  { id: 'repair', label: 'Repair', description: 'The state determines whether activation can complete: safety lets the system settle and reconnect; threat keeps protection first, so repair has to wait until enough safety returns.', science: 'Trauma Research — completion (Levine, van der Kolk) + Attachment (Bowlby)', source: 'M3 · ESC' },
  { id: 'rush', label: 'Rush (tempo)', description: "The state sets the system's pace: safety can move at the speed of the situation; threat accelerates into urgency or pressured management; shutdown slows time toward freeze.", science: 'Tachypsychia + hurry sickness / hyperarousal — Stress Physiology + Cognitive Science', source: 'derived · M2 + C18' },
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
    question: 'What is TEG-Blue?',
    answer:
      'TEG-Blue is The Emotional Gradient Blueprint: a layered visual framework that maps how emotions, nervous systems, survival strategies, identity, and social patterns form and evolve. Its current public center is the Nervous System Gradient.',
  },
  {
    question: 'What is the Nervous System Gradient?',
    answer:
      'The Nervous System Gradient is a map of the nervous system’s states. The nervous system continuously appraises one question — is it safe, or is there danger? — faster than conscious thought, and shifts the whole organism into the state that fits what it found, along a single continuum from rest, through connection and the defences, down to shutdown.',
  },
  {
    question: 'How does the nervous system choose a state?',
    answer:
      'Through neuroception — a continuous, pre-conscious read of safety versus danger. Based on that read, the system organises itself into one of seven ordered states: X, A, A↔B, B, C, D, and Z. Each state is a complete configuration of perception, cognition, the body, feeling, and behaviour — not a mood.',
  },
  {
    question: 'What is the difference between a passing state and a chronic one?',
    answer:
      'Each position is a passing response the system is built to move through and leave (acute). When a position cannot be left, it stops being a passing response and hardens into the default (chronic). The chronic reading shows restriction, repetition and substitute routing — it describes a system that cannot leave a state, never a verdict about a person.',
  },
  {
    question: 'What research is the Nervous System Gradient grounded in?',
    answer:
      'The architecture leads; established research provides source traces and grounding for specific claims. The gradient’s autonomic hierarchy draws from Polyvagal Theory (Porges); activation and chronic load from Stress Physiology (Sapolsky, McEwen); state-dependent perception and cognition from Cognitive Science (Barrett, Kahneman); interoception from A. D. Craig; empathy from Interpersonal Neurobiology (Siegel); emotions from Affective Neuroscience (Panksepp, Damasio, LeDoux); defence and repair from Trauma Research (Levine, van der Kolk) and Attachment (Bowlby).',
  },
  {
    question: 'What are fight, flight, fawn and freeze?',
    answer:
      'They are familiar names for points on the gradient. Fight, flight and fawn are defensive expressions of Protection (mobilised self-protection under threat). Freeze and collapse are Shutdown (the system conserves when mobilisation cannot form). Rest-and-digest is Baseline; social engagement is Connection.',
  },
]
