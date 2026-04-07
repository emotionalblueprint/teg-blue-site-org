"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  BG, TEXT, BORDER, FONT, SPECTRUM, RADIUS,
  hexToRgba, AWARENESS, PATTERN, ACCENT,
} from "@/src/styles/tokens";

// ─── CAPACITY STATE VALUES ──────────────────────────────────

const CAPACITY_STATES = {
  Full: 1.0, Sharp: 0.9, Precise: 0.85, Weaponised: 0.95,
  Overwhelmed: 0.7, Partial: 0.5, Strategic: 0.5,
  Performed: 0.3, Minimal: 0.2, Offline: 0, Dark: 0.9,
};

// ─── REGULATION COLORS ──────────────────────────────────────

const REGULATION_COLORS = {
  Internal:   SPECTRUM.sky,       // blue — same as fluid compass
  Relational: AWARENESS.ER,       // ER color — resonance-based
  External:   ACCENT.orange,        // orange — same as "stuck" indicator
  Oscillates: SPECTRUM.azure,     // mid blue — unstable
  None:       TEXT.muted,         // grey — offline
};

// ─── COMPASS CONSTANTS ──────────────────────────────────────

const MODES = [
  { key: "A", name: "Connection", hex: PATTERN.A.primary, center: 0.125, start: 0, end: 0.25 },
  { key: "B", name: "Protection", hex: PATTERN.B.primary, center: 0.375, start: 0.25, end: 0.5 },
  { key: "C", name: "Control", hex: PATTERN.C.primary, center: 0.625, start: 0.5, end: 0.75 },
  { key: "D", name: "Domination", hex: PATTERN.D.primary, center: 0.875, start: 0.75, end: 1 },
];

const BAR_GRADIENT = `linear-gradient(90deg, ${PATTERN.A.primary} 0%, ${PATTERN.A.primary} 20%, ${PATTERN.B.primary} 35%, ${PATTERN.B.primary} 45%, ${PATTERN.C.primary} 55%, ${PATTERN.C.primary} 70%, ${PATTERN.D.primary} 85%, ${PATTERN.D.primary} 100%)`;

function getActiveMode(pos) {
  if (pos < 0.25) return MODES[0];
  if (pos < 0.5) return MODES[1];
  if (pos < 0.75) return MODES[2];
  return MODES[3];
}

// ─── LABEL DATA ─────────────────────────────────────────────

const LABEL_GROUPS = [
  {
    name: "Attachment Styles",
    compassActive: false,
    labels: [
      {
        name: "Secure", re: "Full", er: "Full", sea: "Full", compassPos: 0.125,
        headline: "All three capacities online and flexible.",
        body: "Reads others accurately, resonates genuinely, and knows where self ends and other begins. The compass moves freely — baseline is home, not a single position.",
        compassNote: "Fluid — baseline is home",
        regulation: { location: "Internal", reaches: "The cycle completes through its own channels. No substitute required." },
      },
      {
        name: "Anxious", re: "Sharp", er: "Overwhelmed", sea: "Minimal", compassPos: 0.32,
        headline: "High-resolution scanning with no internal anchor.",
        body: "RE (Reading Emotions) sharpens toward threat detection in relationships. ER (Emotional Resonance) floods — every emotional signal lands at full volume. Without SEA (Self-Emotional Awareness), there is no way to distinguish own activation from other's.",
        compassNote: "Stuck — Protection, scanning for abandonment",
        regulation: { location: "Relational", reaches: "Reassurance that the other won't leave. The nervous system is waiting for relational evidence that the bond still holds." },
      },
      {
        name: "Dismissive-Avoidant", re: "Partial", er: "Offline", sea: "Partial", compassPos: 0.58,
        headline: "Partial reading, resonance shut down.",
        body: "Some emotional data gets through, but closeness is managed at a distance. ER (Emotional Resonance) offline means intimacy registers as threat. Partial SEA (Self-Emotional Awareness) preserves a sense of self — but only by keeping others out.",
        compassNote: "Stuck — Control, managing proximity",
        regulation: { location: "Internal", reaches: "Distance. Proximity is the threat — withdrawal removes it. Relief comes from reducing relational contact, not from completing the cycle." },
      },
      {
        name: "Fearful-Avoidant", re: "Sharp", er: "Overwhelmed", sea: "Minimal", compassPos: 0.38,
        erOscillates: true,
        headline: "The compass oscillates — no stable position.",
        body: "RE (Reading Emotions) sharpens toward threat. ER (Emotional Resonance) swings between overwhelmed and offline — flooding then shutting down. Minimal SEA (Self-Emotional Awareness) means the system cannot track which state it is in.",
        compassNote: "Oscillating — Protection, disorganized",
        regulation: { location: "Oscillates", reaches: "The system lurches between pulling toward connection and cutting it off. Neither resolves. Each attempt produces the activation the other was supposed to reduce." },
      },
    ],
  },
  {
    name: "Empathy & Sensitivity",
    compassActive: false,
    labels: [
      {
        name: "Empath", re: "Full", er: "Overwhelmed", sea: "Partial", compassPos: 0.15,
        headline: "Reads everything, feels everything, partly knows it.",
        body: "Full RE (Reading Emotions) means the reading is accurate. Overwhelmed ER (Emotional Resonance) means every signal lands in the body at full intensity. Partial SEA (Self-Emotional Awareness) — enough to notice the cost, not enough to stop it.",
        compassNote: "Stuck — Connection, absorbing",
        regulation: { location: "Relational", reaches: "The regulated state of the people nearby. If those around are calm, the flooded resonance settles temporarily. The environment is the regulator." },
      },
      {
        name: "Highly Sensitive Person", re: "Full", er: "Full", sea: "Partial", compassPos: 0.13,
        headline: "Full reading, full resonance, partial self-tracking.",
        body: "Unlike the empath configuration, ER (Emotional Resonance) is regulated — genuine resonance rather than flooding. The gap is in SEA (Self-Emotional Awareness): the internal signal is present but not always reliable.",
        compassNote: "Near-fluid — Connection",
        regulation: { location: "Internal", reaches: "Solitude and sensory reduction. The system can partially self-regulate, but requires lower-input conditions to do so." },
      },
      {
        name: "Codependent", re: "Full", er: "Overwhelmed", sea: "Offline", compassPos: 0.12,
        headline: "Full reading, flooded resonance, self-signal gone.",
        body: "Same configuration as empath — but SEA (Self-Emotional Awareness) is offline. Reads others accurately, feels everything they feel, and has lost the signal that says 'this is mine, that is yours.' Own needs become invisible.",
        compassNote: "Stuck — Connection, merged",
        regulation: { location: "Relational", reaches: "Merger with the other's state. Own signal absent — the other's stability becomes the regulation signal. If you're okay, I'm okay." },
      },
      {
        name: "People-Pleaser", re: "Sharp", er: "Overwhelmed", sea: "Minimal", compassPos: 0.15,
        headline: "Threat-focused scanning, flooded resonance, minimal self.",
        body: "RE (Reading Emotions) sharpens toward what others need or might be upset about. ER (Emotional Resonance) floods with their emotional state. Minimal SEA (Self-Emotional Awareness) preserves just enough self-reference to know 'I am doing this' — not enough to stop.",
        compassNote: "Stuck — Connection, appeasement",
        regulation: { location: "Relational", reaches: "The other's approval. Compliance removes the threat of conflict or rejection before it arrives. The relief is anticipatory — preventing the activation rather than resolving it." },
      },
    ],
  },
  {
    name: "Harm Patterns",
    labels: [
      {
        name: "Narcissist (Overt)", re: "Precise", er: "Performed", sea: "Offline", compassPos: 0.75,
        headline: "Precise reading, performed empathy, no self-signal.",
        body: "RE (Reading Emotions) is accurate but instrumental — reads for leverage, not connection. ER (Emotional Resonance) is performed — warmth appears but no genuine resonance underneath. Without SEA (Self-Emotional Awareness), there is no access to internal vulnerability.",
        compassNote: "Stuck — Control/Domination boundary",
        regulation: { location: ["Relational", "External"], reaches: "Admiration and deference. Control over others' perception of self suppresses the threat response. When the supply is removed, the cycle opens. Also reaches for achievement, status, and substances — anything that produces the neurochemical shift the body is searching for." },
      },
      {
        name: "Covert Narcissist", re: "Sharp", er: "Performed", sea: "Offline", compassPos: 0.65,
        headline: "Sharp scanning, performed empathy, no self-signal.",
        body: "RE (Reading Emotions) is hypervigilant to perceived slights and threats to self-image. ER (Emotional Resonance) is performed — empathy appears selectively, withdrawn when control is challenged. Without SEA (Self-Emotional Awareness), vulnerability is experienced as attack.",
        compassNote: "Stuck — Control, covert management",
        regulation: { location: ["Relational", "External"], reaches: "Confirmation of the self-narrative — superiority or victimhood. Others must either validate the position or be experienced as attacking it. Also reaches for achievement and substances to suppress the vulnerability the system cannot access." },
      },
      {
        name: "Gaslighter", re: "Weaponised", er: "Dark", sea: "Offline", compassPos: 0.875,
        headline: "Weaponised reading, dark resonance, no self-tracking.",
        body: "RE (Reading Emotions) is weaponised — directed at destabilising the other person's reality. ER (Emotional Resonance) is dark — the capacity to feel what others feel is active but inverted, used to intensify confusion. SEA (Self-Emotional Awareness) offline means no internal reckoning.",
        compassNote: "Stuck — Domination",
        regulation: { location: "Relational", reaches: "Destabilization of the other's reality. If the other doubts themselves, the threat response settles temporarily. The other's confusion is the regulation mechanism." },
      },
      {
        name: "Enabler", re: "Full", er: "Overwhelmed", sea: "Offline", compassPos: 0.13,
        headline: "Full reading, flooded resonance, self-signal gone.",
        body: "Structurally identical to codependent. The difference is relational context — the enabler's merging supports another person's harmful pattern, making it invisible to both.",
        compassNote: "Stuck — Connection, supporting harm",
        regulation: { location: "Relational", reaches: "The other's continued functioning. Structurally identical to codependent — the other's stability is the regulation signal, regardless of what maintaining that stability requires." },
      },
    ],
  },
  {
    name: "Trauma Responses",
    labels: [
      {
        name: "Fawn", re: "Sharp", er: "Overwhelmed", sea: "Offline", compassPos: 0.12,
        headline: "Threat-sharpened scanning, survival-driven resonance.",
        body: "RE (Reading Emotions) sharpens toward the source of danger. ER (Emotional Resonance) overwhelms — not with empathy but with survival urgency. SEA (Self-Emotional Awareness) offline means this is not a choice. The body learned that the safest response to threat is to become what the threat wants.",
        compassNote: "Stuck — Connection, survival appeasement",
        regulation: { location: "Relational", reaches: "Compliance. The body learned that becoming what the threat wants is the fastest available path to safety. The other's satisfaction is the signal." },
      },
      {
        name: "Fight", re: "Sharp", er: "Minimal", sea: "Partial", compassPos: 0.375,
        headline: "Sharpened scanning, minimal resonance, some self.",
        body: "RE (Reading Emotions) sharpens toward threat. ER (Emotional Resonance) drops to minimal — just enough emotional data to fuel the response. Partial SEA (Self-Emotional Awareness) means the fight response retains some self-tracking.",
        compassNote: "Protection — mobilised toward threat",
        regulation: { location: "External", reaches: "Confrontation as discharge. The mobilized energy finds an outlet. The activation reduces, briefly — the cycle hasn't closed, the debris remains." },
      },
      {
        name: "Flight", re: "Sharp", er: "Offline", sea: "Minimal", compassPos: 0.40,
        headline: "Sharpened scanning, resonance offline, minimal self.",
        body: "RE (Reading Emotions) sharpens toward escape routes and danger signals. ER (Emotional Resonance) goes offline — no resonance with what is being left behind. Minimal SEA (Self-Emotional Awareness) — the system is running, not choosing.",
        compassNote: "Protection — mobilised away from threat",
        regulation: { location: "External", reaches: "Distance. Removing the perceived threat source produces temporary relief — the activation follows, because the source was internal." },
      },
      {
        name: "Freeze", re: "Offline", er: "Offline", sea: "Offline", compassPos: 0.42,
        headline: "Everything offline.",
        body: "The only configuration where all three capacities shut down simultaneously. No reading, no resonance, no self-tracking. Not numbness as a trait — the nervous system's last-resort protection when fight, flight, and fawn have all been tried or are unavailable.",
        compassNote: "Stuck — Protection, complete shutdown",
        regulation: { location: "None", reaches: "No pathway available. All channels are offline. The system has shut down rather than regulate." },
      },
    ],
  },
  {
    name: "Karpman Triangle",
    labels: [
      {
        name: "Rescuer", re: "Full", er: "Overwhelmed", sea: "Minimal", compassPos: 0.15,
        headline: "Full reading, flooded resonance, minimal self.",
        body: "Reads the full picture accurately — including the patterns that maintain the problem. ER (Emotional Resonance) overwhelms with the other person's pain. Minimal SEA (Self-Emotional Awareness) — just enough self-reference to feel needed, not enough to see the cost.",
        compassNote: "Stuck — Connection, compulsive helping",
        regulation: { location: "Relational", reaches: "Fixing the other. When the other is okay, the flooded resonance settles. The other's distress is the activation; their resolution is the relief." },
      },
      {
        name: "Victim", re: "Partial", er: "Overwhelmed", sea: "Minimal", compassPos: 0.32,
        headline: "Partial reading, flooded resonance, minimal self.",
        body: "Some signals get through but the systemic picture is missed. ER (Emotional Resonance) overwhelms — the emotional experience is real, but flooding prevents accurate cause-tracking. Minimal SEA (Self-Emotional Awareness) preserves just enough identity to maintain the position.",
        compassNote: "Stuck — Protection, helplessness",
        regulation: { location: "Relational", reaches: "Recognition of harm by others. The nervous system is waiting for confirmation that what it's signaling is real — for someone to see it." },
      },
      {
        name: "Persecutor", re: "Precise", er: "Offline", sea: "Offline", compassPos: 0.82,
        headline: "Precise reading, no resonance, no self-tracking.",
        body: "RE (Reading Emotions) is precise and instrumental — reads for weakness and leverage. ER (Emotional Resonance) is offline — no resonance with the impact. SEA (Self-Emotional Awareness) is offline — no internal reckoning with what the behavior costs.",
        compassNote: "Stuck — Domination",
        regulation: { location: ["Relational", "External"], reaches: "Domination of the other. Enforcing hierarchy and consequence suppresses the threat response temporarily. The other's submission is the signal. Also reaches for intensity — physical, chemical, or situational — to produce the discharge the body is searching for." },
      },
    ],
  },
];

// ─── HELPER FUNCTIONS ───────────────────────────────────────

function getStateName(value) {
  if (value >= 0.95) return "Full";
  if (value >= 0.75) return "Sharp";
  if (value >= 0.6) return "Overwhelmed";
  if (value >= 0.4) return "Partial";
  if (value >= 0.25) return "Performed";
  if (value >= 0.1) return "Minimal";
  return "Offline";
}

function computeCompassPosition(re, er, sea) {
  if (re + er + sea < 0.15) return 0.40;

  let pos = 0.375;
  pos -= er * 0.35;
  pos -= Math.min(er, sea) * 0.15;

  const reWithoutEr = re * Math.max(0, 1 - er * 1.2);
  pos += reWithoutEr * 0.45;

  if (reWithoutEr > 0.2 && sea < 0.3) {
    pos += reWithoutEr * (1 - sea) * 0.15;
  }

  return Math.max(0.05, Math.min(0.95, pos));
}

function findNearestLabels(re, er, sea) {
  const allLabels = LABEL_GROUPS.flatMap(g => g.labels);
  const distances = allLabels.map(label => {
    const lre = CAPACITY_STATES[label.re];
    const ler = CAPACITY_STATES[label.er];
    const lsea = CAPACITY_STATES[label.sea];
    const d = Math.sqrt((re - lre) ** 2 + (er - ler) ** 2 + (sea - lsea) ** 2);
    return { name: label.name, distance: d };
  });

  distances.sort((a, b) => a.distance - b.distance);
  const bestDist = distances[0].distance;

  return distances
    .filter(d => d.distance <= bestDist + 0.2 && d.distance < 0.5)
    .slice(0, 4)
    .map(d => d.name);
}

function getRegulationInsight(re, er, sea, compassPos) {
  // None — all offline (Freeze territory)
  if (re < 0.15 && er < 0.15 && sea < 0.15) return {
    location: "None",
    reaches: "No pathway available. All channels are offline.",
  };

  // Internal — SEA online enough to use internal pathways
  if (sea >= 0.5) return {
    location: "Internal",
    reaches: "The cycle has internal pathways available. Whether it completes depends on conditions, not on another person's state.",
  };

  // Oscillates — ER floods and shuts down
  if (er > 0.6 && sea < 0.2 && re > 0.7) return {
    location: "Oscillates",
    reaches: "The system pulls toward connection and cuts it off. Each attempt activates what the other was meant to resolve.",
  };

  // Relational — ER present, SEA offline or minimal
  if (er >= 0.3 && sea < 0.5) {
    if (compassPos < 0.25) return {
      location: "Relational",
      reaches: "The regulated state of those nearby. The environment carries the regulation the body cannot produce internally.",
    };
    if (compassPos < 0.5) return {
      location: "Relational",
      reaches: "Reassurance or compliance. The threat of disconnection is the activation — the other's response is the relief.",
    };
    if (compassPos < 0.75) return {
      location: "Relational",
      reaches: "Admiration, deference, or confirmation. Others must reflect the self-narrative back for the system to settle.",
    };
    return {
      location: "Relational",
      reaches: "Domination or destabilization. The other's submission or confusion is the regulation signal.",
    };
  }

  // External — RE active, ER low, SEA offline
  if (re > 0.5 && er < 0.3 && sea < 0.3) {
    if (compassPos < 0.5) return {
      location: "External",
      reaches: "Discharge through confrontation or physical intensity. The mobilized energy finds an outlet. The cycle doesn't close.",
    };
    return {
      location: "External",
      reaches: "Achievement, control, or intensity. Agency over outcomes suppresses the stress response temporarily. The debris remains.",
    };
  }

  // Default fallback
  return {
    location: "Relational",
    reaches: "The system is looking outward. The specific vehicle depends on which capacities are available.",
  };
}

function getManualInsight(re, er, sea) {
  if (re < 0.15 && er < 0.15 && sea < 0.15) return {
    headline: "All capacities offline.",
    body: "Reading, resonance, and self-tracking are all shut down. This is the freeze configuration — the nervous system's last-resort protection.",
    color: SPECTRUM.slate,
  };

  if (re > 0.75 && er > 0.75 && sea > 0.75) return {
    headline: "All capacities online.",
    body: "The system reads others accurately, resonates genuinely, and tracks its own internal state. This is the secure configuration — the compass moves freely.",
    color: SPECTRUM.sky,
  };

  if (sea < 0.05 && er > 0.5) return {
    headline: "Resonance without self-tracking.",
    body: "Emotional signals from others land in the body, but the internal compass has no return address. The system absorbs without boundaries.",
    color: ACCENT.orange,
  };

  if (sea < 0.05 && re > 0.7 && er < 0.3) return {
    headline: "Reading without resonance or self.",
    body: "The reading is active but there is no emotional feedback and no internal reference. The system reads for leverage or control.",
    color: PATTERN.C.primary,
  };

  if (re > 0.7 && er < 0.25) return {
    headline: "Clear reading, low resonance.",
    body: "Others' emotional states are perceived but not felt. The gap between reading and resonance determines whether this becomes strategic distance or instrumental control.",
    color: SPECTRUM.azure,
  };

  if (er > 0.6 && sea > 0.4) return {
    headline: "Resonance with self-tracking.",
    body: "Emotional signals from others land in the body and the internal compass can distinguish self from other. This configuration supports genuine connection.",
    color: AWARENESS.SEA,
  };

  return {
    headline: "Mixed configuration.",
    body: "The three capacities are at different levels. Drag the sliders to explore specific patterns, or click a label to see a named configuration.",
    color: TEXT.secondary,
  };
}

// ─── CAPACITY SLIDER ────────────────────────────────────────

function CapacitySlider({ abbr, name, color, value, stateName, onChange }) {
  const pct = Math.round(value * 100);
  const isOffline = value < 0.05;

  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: 6,
      padding: "10px 14px",
      background: BG.card,
      border: `1px solid ${hexToRgba(color, isOffline ? 0.06 : 0.12)}`,
      borderRadius: RADIUS.md,
      transition: "border-color 0.3s",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{
            fontFamily: FONT.mono, fontSize: 10, fontWeight: 700,
            padding: "2px 6px", borderRadius: RADIUS.sm,
            color: isOffline ? TEXT.muted : color,
            background: isOffline ? BG.inset : hexToRgba(color, 0.15),
            letterSpacing: "0.04em",
          }}>{abbr}</span>
          <span style={{
            fontFamily: FONT.display, fontSize: 12, fontWeight: 600,
            color: isOffline ? TEXT.muted : TEXT.primary,
          }}>{name}</span>
        </div>
        <span style={{
          fontFamily: FONT.mono, fontSize: 11, fontWeight: 600,
          color: isOffline ? TEXT.muted : color,
        }}>{stateName}</span>
      </div>

      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", top: "50%", left: 0, right: 0,
          transform: "translateY(-50%)", height: 4, borderRadius: 2,
          background: BG.inset,
        }} />
        <div style={{
          position: "absolute", top: "50%", left: 0,
          width: `${pct}%`, transform: "translateY(-50%)",
          height: 4, borderRadius: 2,
          background: isOffline ? TEXT.muted : `linear-gradient(to right, ${hexToRgba(color, 0.4)}, ${color})`,
          boxShadow: isOffline ? "none" : `0 0 6px ${hexToRgba(color, 0.3)}`,
          transition: "width 0.05s, background 0.3s",
        }} />
        <input
          type="range" min={0} max={100} value={pct}
          onChange={e => onChange(parseInt(e.target.value) / 100)}
          aria-label={`${name} capacity level`}
          style={{
            position: "relative", width: "100%",
            appearance: "none", background: "transparent",
            cursor: "pointer", height: 20,
            WebkitAppearance: "none",
          }}
        />
      </div>
    </div>
  );
}

// ─── COMPASS VISUALIZATION ──────────────────────────────────

function CompassVisualization({ position, isStuck, isFluid, disabled }) {
  const activeMode = getActiveMode(position);

  if (disabled) {
    return (
      <div style={{
        padding: 16,
        background: BG.surface,
        border: `1px solid ${BORDER.default}`,
        borderRadius: RADIUS.lg,
        opacity: 0.4,
        transition: "all 0.4s",
      }}>
        <div style={{
          fontSize: 10, fontFamily: FONT.mono, fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.08em",
          color: TEXT.muted, marginBottom: 10,
        }}>Nervous System States</div>
        <div style={{ position: "relative", height: 14, borderRadius: 7, overflow: "hidden" }}>
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(90deg, ${TEXT.muted} 0%, ${SPECTRUM.slate} 50%, ${TEXT.muted} 100%)`,
            borderRadius: 7,
          }} />
          {[0.25, 0.5, 0.75].map(pos => (
            <div key={pos} style={{
              position: "absolute", top: 0, bottom: 0, width: 2,
              left: `${pos * 100}%`, transform: "translateX(-50%)",
              background: hexToRgba("#000000", 0.4),
            }} />
          ))}
        </div>
        <div style={{
          display: "flex", justifyContent: "space-between",
          marginTop: 6, padding: "0 2px",
        }}>
          {MODES.map(mode => (
            <span key={mode.key} style={{
              width: "25%", textAlign: "center",
              fontSize: 10, fontFamily: FONT.mono, fontWeight: 400,
              color: TEXT.muted, opacity: 0.5,
            }}>{mode.name}</span>
          ))}
        </div>
        <p style={{
          fontSize: 11, fontFamily: FONT.mono,
          color: TEXT.hint, margin: "10px 0 0",
          fontStyle: "italic",
        }}>
          This label describes a capacity pattern, not a nervous system mode.
        </p>
      </div>
    );
  }

  return (
    <div style={{
      marginTop: 16, padding: 16,
      background: BG.surface,
      border: `1px solid ${hexToRgba(activeMode.hex, isStuck ? 0.25 : 0.12)}`,
      borderRadius: RADIUS.lg,
      transition: "all 0.3s",
    }}>
      <div style={{
        fontSize: 10, fontFamily: FONT.mono, fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.08em",
        color: TEXT.muted, marginBottom: 10,
      }}>Nervous System States</div>
      <div style={{ position: "relative", height: 14, borderRadius: 7, overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          background: BAR_GRADIENT, borderRadius: 7,
        }} />

        {isStuck && MODES.map(mode => (
          mode.key !== activeMode.key ? (
            <div key={mode.key} style={{
              position: "absolute", top: 0, bottom: 0,
              left: `${mode.start * 100}%`,
              width: `${(mode.end - mode.start) * 100}%`,
              background: "rgba(0,0,0,0.55)",
              transition: "opacity 0.4s",
            }} />
          ) : null
        ))}

        {isFluid && (
          <div style={{
            position: "absolute", top: 1, bottom: 1,
            left: `${Math.max(0, position - 0.12) * 100}%`,
            width: "24%",
            borderRadius: 6,
            background: "rgba(255,255,255,0.06)",
            transition: "left 0.3s",
          }} />
        )}

        {[0.25, 0.5, 0.75].map(pos => (
          <div key={pos} style={{
            position: "absolute", top: 0, bottom: 0, width: 2,
            left: `${pos * 100}%`, transform: "translateX(-50%)",
            background: hexToRgba("#000000", 0.5),
          }} />
        ))}

        <div style={{
          position: "absolute", top: "50%",
          left: `${position * 100}%`,
          transform: "translate(-50%, -50%)",
          width: 22, height: 22, borderRadius: "50%",
          background: BG.primary,
          border: `2.5px solid ${activeMode.hex}`,
          boxShadow: `0 0 12px ${hexToRgba(activeMode.hex, 0.5)}`,
          transition: "left 0.3s, border-color 0.3s, box-shadow 0.3s",
        }} />
      </div>

      <div style={{
        display: "flex", justifyContent: "space-between",
        marginTop: 6, padding: "0 2px",
      }}>
        {MODES.map(mode => (
          <span key={mode.key} style={{
            width: "25%", textAlign: "center",
            fontSize: 10, fontFamily: FONT.mono,
            fontWeight: activeMode.key === mode.key ? 700 : 400,
            color: mode.hex,
            opacity: activeMode.key === mode.key ? 1 : (isStuck ? 0.2 : 0.4),
            transition: "opacity 0.3s",
          }}>{mode.name}</span>
        ))}
      </div>

      <div style={{
        display: "flex", alignItems: "center", gap: 8, marginTop: 10,
      }}>
        <span style={{
          fontSize: 10, fontFamily: FONT.mono, fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.08em",
          color: isStuck ? ACCENT.orange : (isFluid ? SPECTRUM.sky : TEXT.muted),
          padding: "2px 8px", borderRadius: 100,
          background: isStuck ? hexToRgba(ACCENT.orange, 0.1) : (isFluid ? hexToRgba(SPECTRUM.sky, 0.08) : "transparent"),
          border: `1px solid ${isStuck ? hexToRgba(ACCENT.orange, 0.2) : (isFluid ? hexToRgba(SPECTRUM.sky, 0.15) : "transparent")}`,
        }}>
          {isStuck ? "STUCK" : isFluid ? "FLUID" : "\u2014"}
        </span>
        <span style={{ fontSize: 11, fontFamily: FONT.mono, color: activeMode.hex }}>
          {activeMode.name}
        </span>
      </div>
    </div>
  );
}

// ─── INSIGHT PANEL ──────────────────────────────────────────

function InsightPanel({ activeLabelData, re, er, sea }) {
  if (!activeLabelData) {
    const state = getManualInsight(re, er, sea);
    return (
      <div style={{
        marginTop: 16, padding: "14px 16px",
        background: BG.surface,
        border: `1px solid ${BORDER.default}`,
        borderRadius: RADIUS.md,
      }}>
        <p style={{
          fontSize: 11, fontFamily: FONT.mono, fontWeight: 600,
          color: TEXT.muted, margin: "0 0 8px",
          textTransform: "uppercase", letterSpacing: "0.06em",
        }}>Current Configuration</p>
        <p style={{
          fontFamily: FONT.display, fontSize: 14, fontWeight: 600,
          color: state.color, margin: "0 0 6px", lineHeight: 1.4,
        }}>{state.headline}</p>
        <p style={{
          fontFamily: FONT.display, fontSize: 13,
          color: TEXT.secondary, lineHeight: 1.65, margin: 0,
        }}>{state.body}</p>
      </div>
    );
  }

  return (
    <div style={{
      marginTop: 16, padding: "14px 16px",
      background: BG.surface,
      border: `1px solid ${hexToRgba(SPECTRUM.cobalt, 0.2)}`,
      borderLeft: `3px solid ${SPECTRUM.cobalt}`,
      borderRadius: RADIUS.md,
    }}>
      <p style={{
        fontSize: 11, fontFamily: FONT.mono, fontWeight: 600,
        color: SPECTRUM.azure, margin: "0 0 4px",
        textTransform: "uppercase", letterSpacing: "0.06em",
      }}>{activeLabelData.name}</p>
      <p style={{
        fontFamily: FONT.display, fontSize: 14, fontWeight: 600,
        color: TEXT.primary, margin: "0 0 8px", lineHeight: 1.4,
      }}>{activeLabelData.headline}</p>
      <p style={{
        fontFamily: FONT.display, fontSize: 13,
        color: TEXT.secondary, lineHeight: 1.65, margin: "0 0 10px",
      }}>{activeLabelData.body}</p>
      <p style={{
        fontSize: 11, fontFamily: FONT.mono,
        color: TEXT.muted, margin: 0, fontStyle: "italic",
      }}>{activeLabelData.compassNote}</p>
    </div>
  );
}

// ─── LABEL GRID ─────────────────────────────────────────────

function LabelGrid({ activeLabel, nearestLabels, isMobile, expandedGroup, onGroupToggle, onLabelClick }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {LABEL_GROUPS.map((group, gi) => {
        const isExpanded = !isMobile || expandedGroup === gi;

        return (
          <div key={group.name}>
            <button
              onClick={() => isMobile && onGroupToggle(expandedGroup === gi ? null : gi)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                width: "100%", padding: "6px 0",
                background: "none", border: "none",
                cursor: isMobile ? "pointer" : "default",
              }}
            >
              <span style={{
                fontSize: 11, fontFamily: FONT.mono, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.06em",
                color: TEXT.muted,
              }}>{group.name}</span>
              {isMobile && (
                <span style={{ color: TEXT.hint, fontSize: 14, fontFamily: FONT.mono }}>
                  {isExpanded ? "\u2212" : "+"}
                </span>
              )}
            </button>

            {isExpanded && (
              <div style={{
                display: "grid",
                gridTemplateColumns: group.labels.length === 3 ? "1fr 1fr 1fr" : "1fr 1fr",
                gap: 6, marginBottom: 4,
              }}>
                {group.labels.map(label => {
                  const isActive = activeLabel === label.name;
                  const isNearest = !activeLabel && nearestLabels.includes(label.name);

                  return (
                    <button
                      key={label.name}
                      onClick={() => onLabelClick(label)}
                      style={{
                        padding: "8px 10px",
                        borderRadius: RADIUS.sm,
                        border: `1px solid ${isActive ? SPECTRUM.cobalt : isNearest ? hexToRgba(SPECTRUM.azure, 0.35) : BORDER.default}`,
                        background: isActive ? hexToRgba(SPECTRUM.cobalt, 0.15) : isNearest ? hexToRgba(SPECTRUM.azure, 0.06) : BG.surface,
                        cursor: "pointer", textAlign: "left",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={e => {
                        if (!isActive) e.currentTarget.style.borderColor = hexToRgba(SPECTRUM.cobalt, 0.3);
                      }}
                      onMouseLeave={e => {
                        if (!isActive && !isNearest) e.currentTarget.style.borderColor = BORDER.default;
                        else if (isNearest) e.currentTarget.style.borderColor = hexToRgba(SPECTRUM.azure, 0.35);
                      }}
                    >
                      <span style={{
                        fontSize: 12, fontFamily: FONT.display, fontWeight: isActive ? 600 : 500,
                        color: isActive ? SPECTRUM.sky : TEXT.primary,
                      }}>{label.name}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── REGULATION PANEL ────────────────────────────────────────

function RegulationPanel({ activeLabelData, re, er, sea, compassPos }) {
  const data = activeLabelData?.regulation
    ? activeLabelData.regulation
    : getRegulationInsight(re, er, sea, compassPos);

  // Normalize location to always be an array
  const locations = Array.isArray(data.location) ? data.location : [data.location];

  return (
    <div style={{
      padding: 16,
      background: BG.surface,
      border: `1px solid ${BORDER.default}`,
      borderRadius: RADIUS.lg,
    }}>
      <div style={{
        fontSize: 10, fontFamily: FONT.mono, fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.08em",
        color: TEXT.muted, marginBottom: 12,
      }}>Regulation Capacities</div>

      {/* Row 1 — Location tags */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
        <span style={{
          fontSize: 10, fontFamily: FONT.mono, fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.06em",
          color: TEXT.hint,
        }}>Located</span>
        {locations.map(loc => {
          const color = REGULATION_COLORS[loc] ?? TEXT.muted;
          return (
            <span key={loc} style={{
              fontSize: 11, fontFamily: FONT.mono, fontWeight: 700,
              padding: "3px 10px", borderRadius: 100,
              color: color,
              background: hexToRgba(color, 0.1),
              border: `1px solid ${hexToRgba(color, 0.2)}`,
              letterSpacing: "0.04em",
              transition: "all 0.3s",
            }}>{loc}</span>
          );
        })}
      </div>

      {/* Row 2 — What the nervous system reaches for */}
      <div style={{
        fontSize: 10, fontFamily: FONT.mono, fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.06em",
        color: TEXT.hint, marginBottom: 6,
      }}>Reaches for</div>
      <p style={{
        fontFamily: FONT.display, fontSize: 12,
        color: TEXT.secondary, lineHeight: 1.6,
        margin: 0,
        transition: "color 0.3s",
      }}>{data.reaches}</p>
    </div>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────

export default function CapacityLabelsExplorer() {
  const [re, setRe] = useState(0.5);
  const [er, setEr] = useState(0.5);
  const [sea, setSea] = useState(0.5);
  const [activeLabel, setActiveLabel] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState(null);

  const animRef = useRef(null);
  const reRef = useRef(re);
  const erRef = useRef(er);
  const seaRef = useRef(sea);

  useEffect(() => { reRef.current = re; }, [re]);
  useEffect(() => { erRef.current = er; }, [er]);
  useEffect(() => { seaRef.current = sea; }, [sea]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  const animateToValues = useCallback((target) => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    const startRe = reRef.current;
    const startEr = erRef.current;
    const startSea = seaRef.current;
    const startTime = performance.now();

    function step(now) {
      const t = Math.min(1, (now - startTime) / 400);
      const ease = t * (2 - t);
      setRe(startRe + (target.re - startRe) * ease);
      setEr(startEr + (target.er - startEr) * ease);
      setSea(startSea + (target.sea - startSea) * ease);
      if (t < 1) animRef.current = requestAnimationFrame(step);
    }
    animRef.current = requestAnimationFrame(step);
  }, []);

  const handlePresetClick = useCallback((label) => {
    setActiveLabel(label.name);
    animateToValues({
      re: CAPACITY_STATES[label.re],
      er: CAPACITY_STATES[label.er],
      sea: CAPACITY_STATES[label.sea],
    });
  }, [animateToValues]);

  const handleSliderChange = useCallback((capacity, value) => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setActiveLabel(null);
    if (capacity === "re") setRe(value);
    else if (capacity === "er") setEr(value);
    else setSea(value);
  }, []);

  const activeLabelData = activeLabel
    ? LABEL_GROUPS.flatMap(g => g.labels).find(l => l.name === activeLabel)
    : null;

  const compassPos = activeLabelData
    ? activeLabelData.compassPos
    : computeCompassPosition(re, er, sea);

  const activeLabelGroup = activeLabel
    ? LABEL_GROUPS.find(g => g.labels.some(l => l.name === activeLabel))
    : null;
  const compassDisabled = activeLabelGroup ? activeLabelGroup.compassActive === false : false;

  const isStuck = sea < 0.25;
  const isFluid = sea > 0.4;
  const nearestLabels = activeLabel ? [] : findNearestLabels(re, er, sea);

  const reStateName = activeLabelData ? activeLabelData.re : getStateName(re);
  const erStateName = activeLabelData
    ? (activeLabelData.erOscillates ? "Overwhelmed \u2194 Offline" : activeLabelData.er)
    : getStateName(er);
  const seaStateName = activeLabelData ? activeLabelData.sea : getStateName(sea);

  return (
    <div style={{
      margin: "32px 0 0",
      background: BG.card,
      borderRadius: RADIUS.lg,
      border: `1px solid ${BORDER.default}`,
      overflow: "hidden",
    }}>
      <style>{`
        .cl-explorer input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: #f8fafc;
          border: 2px solid rgba(255,255,255,0.3);
          box-shadow: 0 2px 6px rgba(0,0,0,0.4);
          cursor: pointer;
          transition: transform 0.15s;
        }
        .cl-explorer input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        .cl-explorer input[type="range"]::-moz-range-thumb {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: #f8fafc;
          border: 2px solid rgba(255,255,255,0.3);
          cursor: pointer;
        }
      `}</style>

      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 24px",
        borderBottom: `1px solid ${BORDER.default}`,
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 11, fontWeight: 700,
          color: SPECTRUM.sky,
          background: hexToRgba(SPECTRUM.cobalt, 0.15),
          padding: "4px 12px", borderRadius: RADIUS.sm,
          letterSpacing: "0.06em", textTransform: "uppercase",
        }}>Capacity Explorer</span>
        <span style={{
          fontFamily: FONT.mono, fontSize: 11, color: TEXT.hint,
          letterSpacing: "0.02em",
        }}>
          {activeLabel || "Drag sliders to explore"}
        </span>
      </div>

      <div className="cl-explorer" style={{ padding: "20px 24px 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 24, alignItems: "start",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* ─── M2: Awareness Capacities ─── */}
            <div style={{
              padding: 16,
              background: BG.surface,
              border: `1px solid ${BORDER.default}`,
              borderRadius: RADIUS.lg,
            }}>
              <div style={{
                fontSize: 10, fontFamily: FONT.mono, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.08em",
                color: TEXT.muted, marginBottom: 12,
              }}>Awareness Capacities</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <CapacitySlider
                  abbr="RE" name="Reading Emotions" color={AWARENESS.RE}
                  value={re} stateName={reStateName}
                  onChange={v => handleSliderChange("re", v)}
                />
                <CapacitySlider
                  abbr="ER" name="Emotional Resonance" color={AWARENESS.ER}
                  value={er} stateName={erStateName}
                  onChange={v => handleSliderChange("er", v)}
                />
                <CapacitySlider
                  abbr="SEA" name="Self-Emotional Awareness" color={AWARENESS.SEA}
                  value={sea} stateName={seaStateName}
                  onChange={v => handleSliderChange("sea", v)}
                />
              </div>
            </div>

            {/* ─── M2: Nervous System States ─── */}
            <CompassVisualization
              position={compassPos}
              isStuck={isStuck}
              isFluid={isFluid}
              disabled={compassDisabled}
            />

            {/* ─── M3: Regulation Capacities ─── */}
            <RegulationPanel
              activeLabelData={activeLabelData}
              re={re} er={er} sea={sea}
              compassPos={compassPos}
            />
          </div>

          {/* ─── Right column ─── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <LabelGrid
              activeLabel={activeLabel}
              nearestLabels={nearestLabels}
              isMobile={isMobile}
              expandedGroup={expandedGroup}
              onGroupToggle={setExpandedGroup}
              onLabelClick={handlePresetClick}
            />

            <InsightPanel
              activeLabelData={activeLabelData}
              re={re} er={er} sea={sea}
            />
          </div>
        </div>

        <div style={{
          marginTop: 20, paddingTop: 16,
          borderTop: `1px solid ${BORDER.default}`,
        }}>
          <p style={{
            fontFamily: FONT.mono, fontSize: 11,
            color: TEXT.hint, margin: 0, lineHeight: 1.6,
          }}>
            Each label maps to a specific configuration of three awareness capacities:
            RE (Reading Emotions), ER (Emotional Resonance), and SEA (Self-Emotional Awareness).
            The same three capacities in different combinations produce every pattern psychology has named separately.
          </p>
        </div>
      </div>
    </div>
  );
}
