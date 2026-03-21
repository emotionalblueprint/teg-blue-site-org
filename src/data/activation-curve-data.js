/**
 * Activation-Restoration Curve Data
 *
 * Extends the .org curve parameters (peak, height, spread, skew) with
 * tier metadata, floor levels, inaccessible zones, and annotations
 * for the Activation Curve Explorer prototype.
 *
 * Tiers:
 *   signal  — Emotion completes its biological cycle. Returns to baseline.
 *   barrier — Extended activation. Floor > 0, cycle stretches but never fully returns.
 *   weapon  — Permanent activation. System locks into mode as identity.
 *
 * Sources: compass-diagram-data.js (FLUID_CURVES, CHRONIC_CURVES)
 */

import { FLUID_CURVES, CHRONIC_CURVES } from './compass-diagram-data';

// ─── TIER COLORS (orange tone system — light → dark = severity) ───

export const TIER_COLORS = {
  signal:  '#fbbf24',   // light amber
  barrier: '#f97316',   // = MODE_ORANGE
  weapon:  '#ea580c',   // deep burnt orange
};

export const TIERS = {
  signal: {
    label: 'Signal',
    description: 'Activation completes, returns to baseline',
    stroke: 'solid',
    strokeWidth: 2,
  },
  barrier: {
    label: 'Barrier',
    description: 'Extended activation — floor never reaches zero',
    stroke: 'dashed',
    strokeWidth: 2.5,
  },
  weapon: {
    label: 'Weapon',
    description: 'Permanent activation — mode locked as identity',
    stroke: 'solid',
    strokeWidth: 3.5,
  },
};

// ─── FLUID COMPASS — All signals. Activation rises and returns to baseline. ───

export const ACTIVATION_FLUID_CURVES = [
  {
    ...FLUID_CURVES[0],
    id: 'fluid-connection',
    label: 'Connection Mode Activated',
    mode: 'connection',
    compass: 'fluid',
    tier: 'signal',
    floor: 0,
    inaccessibleZones: [],
    annotations: [{ type: 'peak', label: 'Safety signal received' }],
  },
  {
    ...FLUID_CURVES[1],
    id: 'fluid-protection',
    label: 'Protection Mode Activated',
    mode: 'protection',
    compass: 'fluid',
    tier: 'signal',
    floor: 0,
    inaccessibleZones: [],
    annotations: [{ type: 'peak', label: 'Threat signal received' }],
  },
  {
    ...FLUID_CURVES[2],
    id: 'fluid-control',
    label: 'Control Mode Activated',
    mode: 'control',
    compass: 'fluid',
    tier: 'signal',
    floor: 0,
    inaccessibleZones: [],
    annotations: [{ type: 'peak', label: 'Danger signal received' }],
  },
  {
    ...FLUID_CURVES[3],
    id: 'fluid-domination',
    label: 'Domination Mode Activated',
    mode: 'domination',
    compass: 'fluid',
    tier: 'signal',
    floor: 0,
    inaccessibleZones: [],
    annotations: [{ type: 'peak', label: 'Life-peril signal received' }],
  },
];

// ─── STUCK COMPASS — Barriers and weapons. Floor > 0, never returns to baseline. ───

export const ACTIVATION_CHRONIC_CURVES = [
  {
    ...CHRONIC_CURVES[0],
    id: 'chronic-connection',
    label: 'Chronic Connection',
    mode: 'connection',
    compass: 'stuck',
    tier: 'barrier',
    floor: 0.05,
    cutoffRight: 0.55,
    inaccessibleZones: [{ from: 0.55, to: 1.0 }],
    annotations: [{ type: 'floor', label: 'Never returns to baseline' }],
  },
  {
    ...CHRONIC_CURVES[1],
    id: 'chronic-protection',
    label: 'Chronic Protection',
    mode: 'protection',
    compass: 'stuck',
    tier: 'barrier',
    floor: 0.04,
    inaccessibleZones: [],
    annotations: [{ type: 'floor', label: 'Sustained vigilance' }],
  },
  {
    ...CHRONIC_CURVES[2],
    id: 'chronic-control',
    label: 'Chronic Control',
    mode: 'control',
    compass: 'stuck',
    tier: 'weapon',
    floor: 0.05,
    cutoffLeft: 0.20,
    inaccessibleZones: [{ from: 0, to: 0.20 }],
    annotations: [{ type: 'floor', label: 'Control as default state' }],
  },
  {
    ...CHRONIC_CURVES[3],
    id: 'chronic-domination',
    label: 'Chronic Domination',
    mode: 'domination',
    compass: 'stuck',
    tier: 'weapon',
    floor: 0.08,
    cutoffLeft: 0.15,
    inaccessibleZones: [{ from: 0, to: 0.15 }],
    annotations: [{ type: 'floor', label: 'Power as only safety' }],
  },
];

// ─── REGULATION VARIANTS — Modifiers on Chronic Connection ───

export const REGULATION_VARIANTS = [
  {
    id: 'chronic-connection-non-relational',
    label: 'Non-Relational Regulation',
    description: 'Regulation outside relationships — work, substances, exercise',
    baseId: 'chronic-connection',
    opacity: 0.5,
  },
  {
    id: 'chronic-connection-relational-temporary',
    label: 'Relational Temporary Regulation',
    description: 'Brief relational contact provides temporary regulation',
    baseId: 'chronic-connection',
    opacity: 0.35,
  },
  {
    id: 'chronic-connection-load-increase',
    label: 'Relational Load Increase',
    description: 'Relational contact increases activation instead of regulating',
    baseId: 'chronic-connection',
    opacity: 1.0,
    secondaryBump: {
      peak: 0.10,
      amplitude: 0.25,
      sigma: 0.04,
    },
  },
];

// ─── HELPERS ───

export function getCurvesByCompass(compass) {
  return compass === 'fluid' ? ACTIVATION_FLUID_CURVES : ACTIVATION_CHRONIC_CURVES;
}

export function getCurve(compass, mode) {
  return getCurvesByCompass(compass).find(c => c.mode === mode);
}

export function getRegulationVariant(variantId) {
  const variant = REGULATION_VARIANTS.find(v => v.id === variantId);
  if (!variant) return undefined;
  const baseCurve = ACTIVATION_CHRONIC_CURVES.find(c => c.id === variant.baseId);
  if (!baseCurve) return undefined;
  return {
    ...baseCurve,
    id: variant.id,
    label: variant.label,
    opacity: variant.opacity,
    secondaryBump: variant.secondaryBump,
  };
}
