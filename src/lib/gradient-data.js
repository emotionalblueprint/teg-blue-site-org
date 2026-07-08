/**
 * The Emotional Gradient — data model (ported from the visual-system build).
 * Concise readings in the plain-mechanism voice (no jargon, no pronouns,
 * nervous-system anchor). Public labels lead; internal state codes
 * stay as source-trace, never as the public lead.
 */

import {
  DEEP_ENGINE_FORMATIONS,
  PUBLIC_CHRONIC_PERCEPTION_DETAILS,
  PUBLIC_CHRONIC_ROWS,
  withChronicFormationMeta,
} from '../data/deep-engine-data'

// ─── POSITIONS (the seven, in gradient order) ────────────────────────────────

const FORMATION_EXTRAS = {
  baseline: {
    sub: 'resting availability',
    pattern: 'Pattern X',
    mechanism: 'Physiological baseline — regulation and broad capacity are available.',
  },
  connection: {
    sub: 'safety → reciprocity',
    pattern: 'Pattern A',
    mechanism: 'Safety with others — social engagement and co-regulation are available.',
  },
  calibration: {
    sub: 'A↔B transition',
    pattern: 'Pattern A↔B',
    mechanism: 'Relational uncertainty — the system checks whether safety still holds.',
  },
  protection: {
    sub: 'threat → defence',
    pattern: 'Pattern B',
    mechanism: 'Threat — mobilisation prioritises boundary, distance, or defence.',
  },
  strategic: {
    sub: 'persistent threat',
    pattern: 'Pattern C',
    mechanism: 'Persistent threat — cognition organises around strategic management and control of variables.',
  },
  domination: {
    sub: 'power mobilisation',
    pattern: 'Pattern D',
    mechanism: 'Life threat — power mobilisation overrides relational access.',
  },
  shutdown: {
    sub: 'conservation / collapse',
    pattern: 'Pattern Z',
    mechanism: 'Capacity exceeded — active mobilisation drops and conservation becomes primary.',
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

const perceptionDescriptions = Object.fromEntries(
  positions.map((position) => [
    position.id,
    {
      a: position.publicPerception.detail,
      c: PUBLIC_CHRONIC_PERCEPTION_DETAILS[position.id],
    },
  ])
)

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
  { id: 'state', label: 'State', description: "The whole-system configuration. The state is the position on the line; change it, and perception, thinking, feeling, body activation, and action all shift with it.", science: 'Biology, physiology, autonomic neuroscience, and stress physiology', source: 'M2 + GC' },
  { id: 'perception', label: 'Perception', description: 'Perception starts with field width: in safety, the field is wide enough to include body, context, and others; under threat, it narrows toward risk, control, force, or shutdown.', descriptions: perceptionDescriptions, science: 'Cognitive science, appraisal research, prediction, and state-shaped perception', source: 'M2-C13' },
  { id: 'cognition', label: 'Cognition', description: 'The state sets how much modelling capacity is available: in safety, thinking can compare, imagine, and revise; under threat, it compresses into fast, defensive problem-solving.', science: 'Cognitive science, attention, cognitive load, and state-shaped reasoning', source: 'M2-C14 · CLS' },
  { id: 'selfAwareness', label: 'Awareness', description: 'The state changes how much awareness is available: in safety, body signals and context can be felt and named; under threat, awareness narrows, backgrounds cost, or goes numb.', science: 'Interoception, body awareness, attention, and contemplative research', source: 'M2-C15' },
  {
    id: 'empathy',
    label: 'Empathy',
    description: "The state controls how available another person remains as real and separate: in safety, resonance and care can stay online; under threat, others are read for risk, use, or impact on survival.",
    descriptions: {
      connection: {
        a: 'Empathy is available in this pattern: another person can stay real and separate, so resonance, care, and impact can register without becoming threat.',
      },
    },
    science: 'Relational neuroscience, attachment research, social perception, and care capacity',
    source: 'M2-C16 · AEC',
  },
  { id: 'body', label: 'Body / activation', description: 'The state changes the body’s operating mode: safety keeps repair, digestion, and social engagement available; threat redirects energy toward mobilisation, control, or conservation.', science: 'Stress physiology, energy mobilisation, chronic load, regulation, and return', source: 'M2-C17 · ESS' },
  {
    id: 'time',
    label: 'Time / tempo',
    description: 'This row blends horizon and rush: how much time the system can hold, and how fast or pressured the moment feels. In safety, time can stay open; under threat, it quickens, compresses, collapses, or freezes.',
    descriptions: {
      baseline: {
        a: 'Time is wide and unpressured. Past, present, and future can stay connected, and the system can move at the pace of the actual moment.',
        c: 'Time does not fully open. The future can feel closed or effortful while background pressure keeps the body from settling into an unhurried present.',
      },
      connection: {
        a: 'Time feels open enough for continuity. The system can stay with what is happening now while still sensing what can continue after this moment.',
        c: 'Time narrows around possible loss. Contact may continue, but the body braces for the bond to end, so even connection can carry hurry or pressure.',
      },
      calibration: {
        a: 'Time tightens around the present moment. There is a slight quickening as the system checks what changed and whether repair or clarification is needed.',
        c: 'Time loops around the unresolved rupture. The system keeps replaying, anticipating, and speeding up around the same safety question.',
      },
      protection: {
        a: 'Time compresses toward the immediate threat. Urgency rises; the body wants a fast answer, boundary, escape route, appeasement, or defence.',
        c: 'Time stays locked in anticipation. The body feels behind or under pressure even before the present moment has fully shown what is happening.',
      },
      strategic: {
        a: "Time reaches ahead, but only toward the threat's next move. Tempo becomes fast and pressured because the system is trying to manage what may happen.",
        c: 'Time becomes a permanent projection field. The next threat keeps arriving in advance, and the system can feel driven even when nothing is happening now.',
      },
      domination: {
        a: 'Time collapses to the survival instant. Tempo reaches maximum pressure, and the only future that matters is the outcome being forced or blocked.',
        c: 'Time narrows to staying in control. Future, repair, and consequence can drop out unless they affect power, force, or threat.',
      },
      shutdown: {
        a: 'Time freezes or drops out. Continuity is hard to hold, tempo slows or stops, and the system conserves instead of moving through the moment.',
        c: 'Time stays frozen or collapsed. The system may feel timeless, absent, or unable to move forward until protected re-engagement becomes possible.',
      },
    },
    science: 'Cognitive science, stress physiology, time perception, urgency, and hyperarousal',
    source: 'M2-C18 + derived rush',
  },
  {
    id: 'emotions',
    label: 'Emotions',
    description: 'Emotions show the signal climate in the pattern: in safety, signals can stay warm or quiet; under threat, anxiety, fear, vigilance, anger, or numbness can dominate.',
    descriptions: {
      baseline: {
        a: 'The point here is not a dominant emotion; it is the absence of a problem signal. Feeling can stay quiet because nothing needs defending, pursuing, or repairing.',
        c: 'What looks like rest is not fully quiet. An unresolved signal keeps running underneath, so the body never drops all the way into regulation.',
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
        a: 'Emotions are restricted around threat. Anxiety, fear, or vigilance dominate, pulling attention toward boundary, distance, escape, or defence.',
        c: 'Defence no longer comes and goes cleanly. Closeness itself can trigger threat, so protective emotion stays tangled with the wish to connect.',
      },
      strategic: {
        a: 'Emotion is held under pressure rather than expressed directly. Anxiety and tension become management signals: watch, predict, contain, stay ahead.',
        c: 'Feeling gets organized through management. The system still carries pressure, but the original hurt or fear is harder to find.',
      },
      domination: {
        a: 'The signal has reached survival pitch. Rage and force organize the system around overpowering what feels dangerous.',
        c: 'The signal hardens into a destructive operating style. Harm can start to feel justified because power and force are being used as the route.',
      },
      shutdown: {
        a: 'The signal system is going offline. Instead of producing a clear emotion, the body conserves, goes flat, and reduces contact.',
        c: 'Numbness becomes the familiar state. Signals may still exist underneath, but they are difficult to feel, name, or use for repair.',
      },
    },
    science: 'Affective neuroscience and emotion science',
    source: 'M1',
  },
  { id: 'behaviour', label: 'Behaviour / response', description: 'The state narrows or opens the action menu: in safety, the system can approach, cooperate, and repair; under threat, it moves toward defending, managing, overpowering, or withdrawing.', science: 'Action readiness, defensive response, trauma research, and behavioural adaptation', source: 'M3' },
  {
    id: 'repair',
    label: 'Repair',
    description: 'The state determines whether activation can complete: safety lets the system settle and reconnect; threat keeps protection first, so repair has to wait until enough safety returns.',
    descriptions: {
      connection: {
        a: 'Repair is open in this pattern: impact can be named, empathy can stay present, and reconnection can happen without protection taking over.',
      },
      protection: {
        a: 'Repair is difficult in this pattern because self-protection takes priority over connection. Enough safety has to return before impact, empathy, or reconnection can land.',
      },
    },
    science: 'Trauma research, attachment research, completion, reconnection, and repair',
    source: 'M3 · ESC',
  },
  { id: 'rush', label: 'Rush (tempo)', description: "The state sets the system's pace: safety can move at the speed of the situation; threat accelerates into urgency or pressured management; shutdown slows time toward freeze.", science: 'Stress physiology, cognitive science, time perception, urgency, and hyperarousal', source: 'derived · M2 + C18' },
]

// ─── READINGS (acute `a` / chronic `c`) ──────────────────────────────────────

export const content = {
  state: {
    baseline: { a: 'Resting availability', c: chronicText('state', 'baseline') },
    connection: { a: 'Safety through connection', c: chronicText('state', 'connection') },
    calibration: { a: 'Checking whether safety still holds', c: chronicText('state', 'calibration') },
    protection: { a: 'Defence for immediate threat', c: chronicText('state', 'protection') },
    strategic: { a: 'Strategic management for persistent threat', c: chronicText('state', 'strategic') },
    domination: { a: 'Power mobilisation for life threat', c: chronicText('state', 'domination') },
    shutdown: { a: 'Conservation when capacity is exceeded', c: chronicText('state', 'shutdown') },
  },
  perception: {
    baseline: { a: 'Wide field: the whole situation is available', c: chronicText('perception', 'baseline') },
    connection: { a: 'Wide social field: people and context stay readable', c: chronicText('perception', 'connection') },
    calibration: { a: 'Slightly narrowed field: contact shifts stand out', c: chronicText('perception', 'calibration') },
    protection: { a: 'Narrowed field: boundary and risk stand out', c: chronicText('perception', 'protection') },
    strategic: { a: 'Narrow management field: control variables stand out', c: chronicText('perception', 'strategic') },
    domination: { a: 'Tunnel field: force and outcome dominate', c: chronicText('perception', 'domination') },
    shutdown: { a: 'Withdrawn field: perception fades', c: chronicText('perception', 'shutdown') },
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
    baseline: { a: 'Inner signals are available and nameable', c: chronicText('awarenessAccess', 'baseline') },
    connection: { a: 'Aware of body state and the other at once', c: chronicText('awarenessAccess', 'connection') },
    calibration: { a: 'Tracking the safety question — am I still okay here?', c: chronicText('awarenessAccess', 'calibration') },
    protection: { a: 'Narrowed — attention is on the threat', c: chronicText('awarenessAccess', 'protection') },
    strategic: { a: 'Backgrounded — cost is hard to register', c: chronicText('awarenessAccess', 'strategic') },
    domination: { a: 'Stripped — almost no inner read', c: chronicText('awarenessAccess', 'domination') },
    shutdown: { a: 'Awareness collapses — numb', c: chronicText('awarenessAccess', 'shutdown') },
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
    baseline: { a: 'Open and unhurried — past, present, future stay connected', c: 'Closed-off future, pressure even at rest' },
    connection: { a: 'Open tempo — oriented to what can continue', c: 'Bracing for the bond to end' },
    calibration: { a: 'Slight quickening — pulled to this moment', c: 'Looping and speeding up around the rupture' },
    protection: { a: 'Urgent now — compressed to immediate threat', c: 'Locked in anticipation, always behind' },
    strategic: { a: "Pressured ahead — tracking the threat's next move", c: 'Driven by the next threat before it arrives' },
    domination: { a: 'Maximum pressure — collapsed to the survival instant', c: 'No future beyond staying in control' },
    shutdown: { a: 'Frozen tempo — continuity drops out', c: 'Frozen, timeless, hard to move forward' },
  },
  emotions: {
    baseline: { a: 'Quiet — no dominant problem signal', c: chronicText('signalConfiguration', 'baseline') },
    connection: { a: 'Open — warmth, trust, and care can move', c: chronicText('signalConfiguration', 'connection') },
    calibration: { a: 'Sensitive — unease, shame, sadness, or fear of rupture', c: chronicText('signalConfiguration', 'calibration') },
    protection: { a: 'Restricted — anxiety, fear, or vigilance dominate', c: chronicText('signalConfiguration', 'protection') },
    strategic: { a: 'Contained — pressure and anxiety are held under control', c: chronicText('signalConfiguration', 'strategic') },
    domination: { a: 'Overdriven — rage and force organize the signal field', c: chronicText('signalConfiguration', 'domination') },
    shutdown: { a: 'Muted — signals flatten, fade, or go numb', c: chronicText('signalConfiguration', 'shutdown') },
  },
  behaviour: {
    baseline: { a: 'Resting, repairing', c: chronicText('actionReadiness', 'baseline') },
    connection: { a: 'Approaching, working together, repairing', c: chronicText('actionReadiness', 'connection') },
    calibration: { a: 'Checking, clarifying, reaching for repair', c: chronicText('actionReadiness', 'calibration') },
    protection: { a: 'Fight, flight, freeze, or fawn', c: chronicText('actionReadiness', 'protection') },
    strategic: { a: 'Managing, controlling, containing', c: chronicText('actionReadiness', 'strategic') },
    domination: { a: 'Overpowering, forcing', c: chronicText('actionReadiness', 'domination') },
    shutdown: { a: 'Collapsing, withdrawing, going still', c: chronicText('actionReadiness', 'shutdown') },
  },
  repair: {
    baseline: { a: 'Available — nothing to mend right now', c: chronicText('repairReturn', 'baseline') },
    connection: { a: 'Open — acknowledging, reconnecting', c: chronicText('repairReturn', 'connection') },
    calibration: { a: 'Within reach — repair still possible', c: chronicText('repairReturn', 'calibration') },
    protection: { a: 'Difficult — self-protection takes priority over connection', c: chronicText('repairReturn', 'protection') },
    strategic: { a: 'Avoided — admitting impact feels like losing control', c: chronicText('repairReturn', 'strategic') },
    domination: { a: 'Out of reach — harm denied or justified', c: chronicText('repairReturn', 'domination') },
    shutdown: { a: 'Blocked — re-engagement has to come first', c: chronicText('repairReturn', 'shutdown') },
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
  { part: 'Gradient and autonomic state', science: 'Autonomic neuroscience, neuroception, and stress physiology ground the safety-threat axis, mobilisation, inhibition, chronic load, and return.', authors: 'Porges · Sapolsky · McEwen' },
  { part: 'Perception and cognition', science: 'Cognitive science, appraisal research, attention, prediction, cognitive load, and state-shaped perception ground the narrowing or widening of the field.', authors: 'Barrett · Kahneman · Bower' },
  { part: 'Awareness and body signals', science: 'Interoception and body-awareness research ground the way inner signals become available, muted, narrowed, or difficult to name.', authors: 'A. D. Craig · contemplative research' },
  { part: 'Emotion and action readiness', science: 'Affective neuroscience and emotion science ground emotional salience, body signals, urgency, and action readiness.', authors: 'Panksepp · Damasio · Barrett · LeDoux' },
  { part: 'Relationship and repair', science: 'Attachment, interpersonal neurobiology, trauma research, and developmental research ground proximity, rupture, protection, co-regulation, and repair.', authors: 'Bowlby · Siegel · Levine · van der Kolk' },
  { part: 'Context and scale', science: 'Psychology, social psychology, sociology, and anthropology locate overlapping parts of the map without owning the whole architecture.', authors: 'Contextual grounding' },
]

// ─── FAQ (AEO — answer engines, voice, featured snippets) ────────────────────

export const faq = [
  {
    question: 'What is TEG-Blue?',
    answer:
      'TEG-Blue is The Emotional Gradient Blueprint: a research-grounded visual framework for reading how emotional, nervous-system, relational, and repair patterns form and change.',
  },
  {
    question: 'What is the Nervous System Gradient?',
    answer:
      'The Nervous System Gradient is the current central public map inside TEG-Blue: a visual map of how emotional, bodily, and relational patterns shift across safety, threat, control, shutdown, regulation, and repair.',
  },
  {
    question: 'What does the Gradient help readers notice?',
    answer:
      'It helps readers notice how a state can shape perception, emotion, body activation, behaviour, empathy, accountability, and repair capacity without turning a visible pattern into diagnosis or motive certainty.',
  },
  {
    question: 'What is the difference between a passing state and a chronic one?',
    answer:
      'Some protective states move. Other protective patterns become repeated, rigid, or hard to leave. This distinction helps read patterns over time; it is not a public typology or a verdict about a person.',
  },
  {
    question: 'What research is TEG-Blue grounded in?',
    answer:
      'The architecture leads; established research provides grounding for specific parts of the map. These are source traces and orientation points, not a claim that the whole system has clinical validation.',
  },
  {
    question: 'Can TEG-Blue diagnose people?',
    answer:
      'No. TEG-Blue is educational and reflective. It can help read observable patterns, effects, boundaries, and repair needs, but it cannot identify someone\'s true internal state from the outside.',
  },
]
