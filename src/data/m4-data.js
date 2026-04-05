/**
 * M4: Awareness Capacities — Diagram Data
 *
 * Source: vault-2/data-source/root/root--M4.md
 * Derived spec: vault-2/data-source/derived/derived--M4-diagram-data.md
 *
 * Consumed by: EmpathicIntegrationExplorer
 */

// ─── CAPACITIES ──────────────────────────────────────────────────
// Source: root--awareness-capacities.md (mechanism + gradient behaviour)
//         root--master-table.md Table 1 + Table 2 (RE, ER, SEA rows)
//
// Levels are 0–1 scale for bar rendering.
// Labels are compressed from root descriptions.

export const CAPACITIES = {
  fluid: [
    {
      re: { level: 1.0,  label: 'Accurate, contextual' },
      er: { level: 1.0,  label: 'Open — somatic echo intact' },
      sea: { level: 1.0, label: 'Present and clear' },
    },
    {
      re: { level: 0.95, label: 'Accurate, elevated' },
      er: { level: 0.55, label: 'Filtered — queued, not lost' },
      sea: { level: 0.85, label: 'Present — feels the alarm' },
    },
    {
      re: { level: 0.95, label: 'Precise, strategic' },
      er: { level: 0.25, label: 'Deliberately quieted' },
      sea: { level: 0.70, label: 'Present — chosen suppression' },
    },
    {
      re: { level: 1.0,  label: 'Sharpened for action' },
      er: { level: 0.05, label: 'Offline by choice' },
      sea: { level: 0.60, label: 'Present — knows the extreme' },
    },
  ],
  chronic: [
    {
      re: { level: 0.90, label: 'Compulsive scanning' },
      er: { level: 0.90, label: 'Flooded — no boundary' },
      sea: { level: 0,    label: 'Gone' },
    },
    {
      re: { level: 0.85, label: 'Threat-biased' },
      er: { level: 0,    label: 'Shut down' },
      sea: { level: 0,    label: 'Gone' },
    },
    {
      re: { level: 0.95, label: 'Instrumental' },
      er: { level: 0,    label: 'Absent' },
      sea: { level: 0,    label: 'Gone' },
    },
    {
      re: { level: 1.0,  label: 'Weaponised' },
      er: { level: 0,    label: 'Absent' },
      sea: { level: 0,    label: 'Gone' },
    },
  ],
};

// ─── CAPACITY DEFINITIONS ───────────────────────────────────────
// Source: root--awareness-capacities.md (tool-facing definitions for explorer UI)
// Used by EmpathicIntegrationExplorer (M4 page)
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

// ─── EXPERIMENTS ─────────────────────────────────────────────────
// Source: EmpathicIntegrationExplorer.jsx inline EXPERIMENTS constant
// Preset slider configurations for the empathic integration explorer.

export const EXPERIMENTS = [
  {
    label: "The distant helper",
    desc: "Turn ER all the way down. Leave RE and SEA high.",
    values: { re: 0.9, er: 0.05, sea: 0.9 },
  },
  {
    label: "The keystone collapse",
    desc: "Turn only SEA to zero. Leave RE and ER full.",
    values: { re: 1.0, er: 1.0, sea: 0.0 },
  },
  {
    label: "The anxious reader",
    desc: "High RE, high ER, low SEA.",
    values: { re: 0.9, er: 0.85, sea: 0.15 },
  },
  {
    label: "Full empathic integration",
    desc: "All three online.",
    values: { re: 1.0, er: 1.0, sea: 1.0 },
  },
];
