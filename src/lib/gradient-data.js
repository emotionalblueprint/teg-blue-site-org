/**
 * The Emotional Gradient — data model (ported from the visual-system build).
 * Concise readings in the plain-mechanism voice (no jargon, no pronouns,
 * nervous-system anchor). Public labels lead; internal state codes
 * stay as source-trace, never as the public lead.
 */

import {
  DEEP_ENGINE_FORMATIONS,
  PUBLIC_CHRONIC_ROWS,
  withChronicFormationMeta,
} from '../data/deep-engine-data'

// ─── POSITIONS (the seven, in gradient order) ────────────────────────────────

const FORMATION_EXTRAS = {
  baseline: {
    sub: 'resting availability',
    pattern: 'State X · resting',
    mechanism: 'Physiological baseline — restoration and broad capacity are available.',
  },
  connection: {
    sub: 'safety → reciprocity',
    pattern: 'State A · ventral vagal',
    mechanism: 'Safety with others — social engagement and co-regulation are available.',
  },
  calibration: {
    sub: 'A↔B transition',
    pattern: 'State A↔B · transition',
    mechanism: 'Relational uncertainty — the system checks whether safety still holds.',
  },
  protection: {
    sub: 'threat → defence',
    pattern: 'State B · sympathetic',
    mechanism: 'Threat — mobilisation prioritises boundary, distance, or defence.',
  },
  strategic: {
    sub: 'sustained control',
    pattern: 'State C · sympathetic + brake',
    mechanism: 'Sustained threat — cognition organises around management and control.',
  },
  domination: {
    sub: 'power → survival',
    pattern: 'State D · peak sympathetic',
    mechanism: 'Life threat — power mobilisation overrides relational access.',
  },
  shutdown: {
    sub: 'conservation / collapse',
    pattern: 'State Z · dorsal',
    mechanism: 'Overwhelm — mobilisation drops and conservation becomes primary.',
  },
}

const chronicText = (row, id) => PUBLIC_CHRONIC_ROWS[row][id]

export const positions = DEEP_ENGINE_FORMATIONS.map((formation) => {
  const chronicFormation = withChronicFormationMeta(formation);
  return {
    ...chronicFormation,
    ...FORMATION_EXTRAS[formation.id],
    mechanismChronic: chronicFormation.plainChronic,
  }
})

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
  { id: 'selfAwareness', label: 'Self-Awareness', description: "The state controls access to the body's own information: in safety, signals can be felt and named; under threat, the inner read gets muted, narrowed, or cut off.", science: 'Interoception (A. D. Craig)', source: 'M2-C15' },
  { id: 'empathy', label: 'Empathy', description: "The state controls how available another person remains as real and separate: in safety, resonance and care can stay online; under threat, others are read for risk, use, or impact on survival.", science: 'Interpersonal Neurobiology (Siegel) + Polyvagal social engagement', source: 'M2-C16 · AEC' },
  { id: 'body', label: 'Body / activation', description: 'The state changes the body’s operating mode: safety keeps repair, digestion, and social engagement available; threat redirects energy toward mobilisation, control, or conservation.', science: 'Stress Physiology — activation → allostatic load (Sapolsky, McEwen)', source: 'M2-C17 · ESS' },
  { id: 'time', label: 'Time Horizon', description: 'The state changes how much time the system can hold: in safety, past, present, and future can stay connected; under threat, time compresses toward the immediate problem or freezes.', science: 'Cognitive Science + Stress Physiology', source: 'M2-C18' },
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
    baseline: { a: 'Resting availability', c: chronicText('state', 'baseline') },
    connection: { a: 'Safety through connection', c: chronicText('state', 'connection') },
    calibration: { a: 'Checking whether safety still holds', c: chronicText('state', 'calibration') },
    protection: { a: 'Defence for immediate threat', c: chronicText('state', 'protection') },
    strategic: { a: 'Control / Management for sustained threat', c: chronicText('state', 'strategic') },
    domination: { a: 'Power mobilized for survival', c: chronicText('state', 'domination') },
    shutdown: { a: 'Conservation when mobilizing is too much', c: chronicText('state', 'shutdown') },
  },
  perception: {
    baseline: { a: 'The whole field open — nothing singled out', c: chronicText('perception', 'baseline') },
    connection: { a: 'Wide, tilted toward faces and people', c: chronicText('perception', 'connection') },
    calibration: { a: 'Tuned to the other — is this still safe?', c: chronicText('perception', 'calibration') },
    protection: { a: 'Narrows hard onto the threat', c: chronicText('perception', 'protection') },
    strategic: { a: 'Narrow and held — scanning ahead', c: chronicText('perception', 'strategic') },
    domination: { a: 'Tunnel — only what bears on surviving', c: chronicText('perception', 'domination') },
    shutdown: { a: 'The field fades — attention withdraws', c: chronicText('perception', 'shutdown') },
  },
  cognition: {
    baseline: { a: 'Fully open — free to plan and reflect', c: chronicText('cognition', 'baseline') },
    connection: { a: 'Flexible, free to range', c: chronicText('cognition', 'connection') },
    calibration: { a: 'Fixed on the situation right now', c: chronicText('cognition', 'calibration') },
    protection: { a: 'Bound to the immediate defence', c: chronicText('cognition', 'protection') },
    strategic: { a: 'Held in managing and predicting the threat', c: chronicText('cognition', 'strategic') },
    domination: { a: 'Stripped to survival-only thinking', c: chronicText('cognition', 'domination') },
    shutdown: { a: 'Foggy or offline', c: chronicText('cognition', 'shutdown') },
  },
  selfAwareness: {
    baseline: { a: 'Reads its own inner state freely', c: chronicText('awarenessAccess', 'baseline') },
    connection: { a: "Open to its own state and the other's at once", c: chronicText('awarenessAccess', 'connection') },
    calibration: { a: 'Tracking its own state — am I still okay here?', c: chronicText('awarenessAccess', 'calibration') },
    protection: { a: 'Backgrounded — attention is on the threat', c: chronicText('awarenessAccess', 'protection') },
    strategic: { a: 'Backgrounded — the cost goes unregistered', c: chronicText('awarenessAccess', 'strategic') },
    domination: { a: 'Stripped — almost no read of itself', c: chronicText('awarenessAccess', 'domination') },
    shutdown: { a: 'The inner channel collapses — numb', c: chronicText('awarenessAccess', 'shutdown') },
  },
  empathy: {
    baseline: { a: 'Available, but nothing calling on it', c: chronicText('empathyAccess', 'baseline') },
    connection: { a: 'Full — reading and resonating with the other', c: chronicText('empathyAccess', 'connection') },
    calibration: { a: 'Heightened — reading the other closely', c: chronicText('empathyAccess', 'calibration') },
    protection: { a: 'The other read for threat, not felt', c: chronicText('empathyAccess', 'protection') },
    strategic: { a: 'The other read to predict and manage', c: chronicText('empathyAccess', 'strategic') },
    domination: { a: 'Offline — the cost to others cannot register', c: chronicText('empathyAccess', 'domination') },
    shutdown: { a: 'Withdrawn — out of contact', c: chronicText('empathyAccess', 'shutdown') },
  },
  body: {
    baseline: { a: 'Resting and repairing — recovery running', c: chronicText('physiologicalCapacity', 'baseline') },
    connection: { a: 'Steady — engaged, recovery still running', c: chronicText('physiologicalCapacity', 'connection') },
    calibration: { a: 'Easing toward readiness', c: chronicText('physiologicalCapacity', 'calibration') },
    protection: { a: 'Mobilised — repair and digestion on hold', c: chronicText('physiologicalCapacity', 'protection') },
    strategic: { a: 'Reserve drawn down, held under load', c: chronicText('physiologicalCapacity', 'strategic') },
    domination: { a: 'Maximum output — nothing held back', c: chronicText('physiologicalCapacity', 'domination') },
    shutdown: { a: 'Powered down — slowed, conserving', c: chronicText('physiologicalCapacity', 'shutdown') },
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
    baseline: { a: 'Quiet — only low background signal', c: chronicText('signalConfiguration', 'baseline') },
    connection: { a: 'Love, trust, warmth, hope', c: chronicText('signalConfiguration', 'connection') },
    calibration: { a: 'Unease — shame, sadness, fear of losing the bond', c: chronicText('signalConfiguration', 'calibration') },
    protection: { a: 'Fear, anger, disgust', c: chronicText('signalConfiguration', 'protection') },
    strategic: { a: 'Sustained anxiety and pressure, held in check', c: chronicText('signalConfiguration', 'strategic') },
    domination: { a: 'Rage at survival pitch', c: chronicText('signalConfiguration', 'domination') },
    shutdown: { a: 'Signals barely generated — flat', c: chronicText('signalConfiguration', 'shutdown') },
  },
  behaviour: {
    baseline: { a: 'Resting, restoring', c: chronicText('actionReadiness', 'baseline') },
    connection: { a: 'Approaching, working together, repairing', c: chronicText('actionReadiness', 'connection') },
    calibration: { a: 'Checking, clarifying, reaching for repair', c: chronicText('actionReadiness', 'calibration') },
    protection: { a: 'Fight, flight, freeze, or fawn', c: chronicText('actionReadiness', 'protection') },
    strategic: { a: 'Managing, controlling, containing', c: chronicText('actionReadiness', 'strategic') },
    domination: { a: 'Overpowering, forcing', c: chronicText('actionReadiness', 'domination') },
    shutdown: { a: 'Collapsing, withdrawing, going still', c: chronicText('actionReadiness', 'shutdown') },
  },
  repair: {
    baseline: { a: 'Available — nothing to mend right now', c: chronicText('restoration', 'baseline') },
    connection: { a: 'Open — acknowledging, reconnecting', c: chronicText('restoration', 'connection') },
    calibration: { a: 'Within reach — repair still possible', c: chronicText('restoration', 'calibration') },
    protection: { a: 'Hard — self-protection comes first', c: chronicText('restoration', 'protection') },
    strategic: { a: 'Avoided — admitting impact feels like losing control', c: chronicText('restoration', 'strategic') },
    domination: { a: 'Out of reach — harm denied or justified', c: chronicText('restoration', 'domination') },
    shutdown: { a: 'Blocked — re-engagement has to come first', c: chronicText('restoration', 'shutdown') },
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
      'The architecture leads; established research provides grounding for specific claims. The gradient’s autonomic hierarchy draws from Polyvagal Theory (Porges); activation and chronic load from Stress Physiology (Sapolsky, McEwen); state-dependent perception and cognition from Cognitive Science (Barrett, Kahneman); interoception from A. D. Craig; empathy from Interpersonal Neurobiology (Siegel); emotions from Affective Neuroscience (Panksepp, Damasio, LeDoux); defence and repair from Trauma Research (Levine, van der Kolk) and Attachment (Bowlby).',
  },
  {
    question: 'What are fight, flight, fawn and freeze?',
    answer:
      'They are familiar names for points on the gradient. Fight, flight and fawn are defensive expressions of Protection (mobilised self-protection under threat). Freeze and collapse are Shutdown (the system conserves when mobilisation cannot form). Rest-and-digest is Baseline; social engagement is Connection.',
  },
]
