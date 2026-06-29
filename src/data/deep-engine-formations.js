/**
 * Deep Engine acute/formational state data for .org.
 *
 * Source: /Users/annaparetas/Projects/teg-blue-engine/atlas-data.js
 * Snapshot: 2026-06-28 chronic build / ESC rewrite.
 *
 * This file owns the seven formation positions and their acute labels only.
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
    active: true,
  },
  {
    id: "calibration",
    code: "A↔B",
    systemCode: "A B Transition",
    mode: "Safety Checking",
    atlasLabel: "Is it still safe?",
    familiar: "",
    autonomic: "parasympathetic → sympathetic",
    reality: "UNCERTAINTY",
    acuteConfig: "Safety Checking",
    acuteConfigDetail: "Is it still safe?",
    acuteColor: FORMATION.AB,
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
    active: true,
  },
  {
    id: "strategic",
    code: "C",
    systemCode: "C",
    mode: "Control / Management",
    atlasLabel: "Bigger threat",
    familiar: "cognitive control / management",
    autonomic: "sympathetic + vagal brake",
    reality: "BIGGER THREAT",
    acuteConfig: "Control / Management",
    acuteConfigDetail: "Control / Management",
    acuteColor: FORMATION.C,
    active: true,
  },
  {
    id: "domination",
    code: "D",
    systemCode: "D",
    mode: "Domination",
    atlasLabel: "Life threat",
    familiar: "power mobilisation",
    autonomic: "sympathetic",
    reality: "LIFE THREAT",
    acuteConfig: "Domination",
    acuteConfigDetail: "Power Mobilisation",
    acuteColor: FORMATION.D,
    active: true,
  },
  {
    id: "shutdown",
    code: "Z",
    systemCode: "Z",
    mode: "Shutdown",
    atlasLabel: "Shutdown",
    familiar: "freeze · collapse",
    autonomic: "parasympathetic · dorsal vagal",
    reality: "SHUTDOWN",
    acuteConfig: "Shutdown",
    acuteConfigDetail: "Overwhelm, Freeze, Collapse",
    acuteColor: FORMATION.Z,
    active: false,
  },
];
