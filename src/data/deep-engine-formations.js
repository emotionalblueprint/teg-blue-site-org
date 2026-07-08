/**
 * Deep Engine acute/formational state data for .org.
 *
 * Source: /Users/annaparetas/Projects/teg-blue-engine/atlas-data.js
 * Snapshot: 2026-07-04 Deep Engine source refresh.
 *
 * This file owns the seven formation positions and their acute/public labels.
 * Public perception copy translates the Engine's state-shaped perception row
 * into behavior-first page language while keeping the formation trace local.
 * Chronic configuration rows and chronic display metadata live in
 * deep-engine-chronic-data.js.
 */

import { FORMATION } from "../styles/tokens";

export const DEEP_ENGINE_FORMATIONS = [
  {
    id: "baseline",
    code: "X",
    systemCode: "X",
    mode: "Baseline",
    atlasLabel: "Safe & at rest",
    familiar: "rest-and-digest",
    autonomic: "parasympathetic",
    reality: "SAFETY",
    acuteConfig: "Physiological Baseline",
    acuteConfigDetail: "Safe & Rest, Rest & Digest",
    acuteColor: FORMATION.X,
    publicPerception: {
      label: "Wide field",
      detail:
        "The perceptual field is wide and low-pressure. Body signals, context, other people, and available options can all stay in view without the system needing to sort the field for danger.",
      sourceTrace: "M2-C13 · formation X · physiological baseline",
    },
    active: false,
  },
  {
    id: "connection",
    code: "A",
    systemCode: "A",
    mode: "Connection / Belonging",
    atlasLabel: "Safe with others",
    familiar: "social engagement",
    autonomic: "parasympathetic · ventral vagal",
    reality: "SAFETY",
    acuteConfig: "Connection-Belonging",
    acuteConfigDetail: "Open Engagement, Safe With Others",
    acuteColor: FORMATION.A,
    publicPerception: {
      label: "Wide social field",
      detail:
        "The field is wide enough to include another person as safe and separate. Facial expression, tone, timing, context, and shared meaning can be read without defensive narrowing.",
      sourceTrace: "M2-C13 · formation A · connection / belonging",
    },
    active: true,
  },
  {
    id: "calibration",
    code: "A↔B",
    systemCode: "A B Transition",
    mode: "Safety Checking",
    atlasLabel: "Is it still safe?",
    familiar: "belonging at risk",
    autonomic: "parasympathetic → sympathetic",
    reality: "UNCERTAINTY",
    acuteConfig: "Safety Checking",
    acuteConfigDetail: "Is it still safe?",
    acuteColor: FORMATION.AB,
    publicPerception: {
      label: "Slightly narrowed field",
      detail:
        "The field begins to narrow around contact. Small changes in tone, attention, timing, distance, or ambiguity become more important because the system is checking whether safety still holds.",
      sourceTrace: "M2-C13 · formation A↔B · safety checking",
    },
    active: true,
  },
  {
    id: "protection",
    code: "B",
    systemCode: "B",
    mode: "Protection / Defence",
    atlasLabel: "Threat",
    familiar: "fight · flight · fawn",
    autonomic: "sympathetic",
    reality: "THREAT",
    acuteConfig: "Protection / Defence",
    acuteConfigDetail: "Protective Mobilisation",
    acuteColor: FORMATION.B,
    publicPerception: {
      label: "Narrowed threat field",
      detail:
        "The field narrows around immediate protection. Boundary, risk, escape, appeasement, or defence cues move forward while neutral details can drop behind them until enough safety returns.",
      sourceTrace: "M2-C13 · formation B · protection / defence",
    },
    active: true,
  },
  {
    id: "strategic",
    code: "C",
    systemCode: "C",
    mode: "Strategic Management",
    atlasLabel: "Persistent threat",
    familiar: "control / management",
    autonomic: "sympathetic + vagal brake",
    reality: "PERSISTENT THREAT",
    acuteConfig: "Strategic Management",
    acuteConfigDetail: "Managed Mobilisation, sympathetic + vagal brake",
    acuteColor: FORMATION.C,
    publicPerception: {
      label: "Narrow management field",
      detail:
        "The field narrows into a strategic management map. What must be predicted, contained, sequenced, corrected, or controlled stands out because the system is trying to stay ahead of persistent threat.",
      sourceTrace: "M2-C13 · formation C · strategic management",
    },
    active: true,
  },
  {
    id: "domination",
    code: "D",
    systemCode: "D",
    mode: "Power Mobilisation",
    atlasLabel: "Life threat",
    familiar: "power mobilisation",
    autonomic: "sympathetic",
    reality: "LIFE THREAT",
    acuteConfig: "Power Mobilisation",
    acuteConfigDetail: "Life-threat mobilisation",
    acuteColor: FORMATION.D,
    publicPerception: {
      label: "Tunnel field",
      detail:
        "The field tunnels around power, force, outcome, and blocked threat. Impact, empathy, and another person's separate reality become harder to register while maximum protection output is primary.",
      sourceTrace: "M2-C13 · formation D · power mobilisation",
    },
    active: true,
  },
  {
    id: "shutdown",
    code: "Z",
    systemCode: "Z",
    mode: "Shutdown",
    atlasLabel: "Capacity exceeded",
    familiar: "freeze · collapse",
    autonomic: "parasympathetic · dorsal vagal",
    reality: "CAPACITY EXCEEDED",
    acuteConfig: "Shutdown",
    acuteConfigDetail: "Overwhelm, Freeze, Collapse",
    acuteColor: FORMATION.Z,
    publicPerception: {
      label: "Withdrawn field",
      detail:
        "Capacity is exceeded, so the field withdraws, fades, or goes distant. Less reaches usable awareness; fog, blankness, numbness, or collapse can replace active scanning.",
      sourceTrace: "M2-C13 · formation Z · capacity exceeded / shutdown fallback",
    },
    active: false,
  },
];
