"use client";

import { useState, useRef, useCallback } from "react";
import {
  FONT, TEXT, BG, BORDER,
  PATTERN, PATTERN_GRADIENT, MODE_ORANGE, hexToRgba,
} from "@/src/styles/tokens";

// ─── MODE DATA ──────────────────────────────────────────

const MODES = [
  {
    key: "A",
    name: "Connection",
    hex: PATTERN.A.primary,
    center: 0.125,
    fluid: {
      fullName: "Connection Mode",
      pattern: "Pattern A",
      type: "Body-first",
      duration: "Indefinite — home base",
      sequence: "Engage → Relate → Repair → Learn",
      description:
        "The nervous system has enough safety to engage with complexity. Perception broadens, empathy comes fully online, repair becomes possible, and learning capacity opens.",
      insight: "The only mode designed for sustained living",
      capacities: [
        { name: "Perception", text: "Broad — sees the full field" },
        { name: "Cognition", text: "Flexible — holds complexity" },
        { name: "Learning", text: "Available" },
        { name: "Relational", text: "Full — repair, vulnerability, trust" },
      ],
    },
    chronic: {
      fullName: "Chronic Connection",
      pattern: "Pattern A",
      type: "SEA offline",
      duration: "Permanent — the only mode the system knows",
      distortion: "I feel bad → I caused it → I must fix myself",
      description:
        "Permanent appeasement. Cannot say no, cannot feel anger, cannot set a boundary. Emotional Resonance is flooded — the person feels everything everyone around them feels. Self-Emotional Awareness is gone. Looks like healthy Connection from the outside.",
      insight:
        "Chronic Connection is as damaging as chronic Domination — the damage just goes in a different direction",
      capacities: [
        { name: "Perception", text: "Compulsive scanning — locked outward" },
        { name: "Cognition", text: "Self-blame loops — always my fault" },
        { name: "Learning", text: "Blocked — self-erasure prevents growth" },
        { name: "Relational", text: "Self-abandoning — love as merger" },
      ],
    },
  },
  {
    key: "B",
    name: "Protection",
    hex: PATTERN.B.primary,
    center: 0.375,
    fluid: {
      fullName: "Protection Mode",
      pattern: "Pattern B",
      type: "Body-first",
      duration: "Minutes — activates fast, returns fast",
      sequence: "Fight / Flight → Freeze / Fawn",
      description:
        "The entire system mobilises: attention narrows toward threat, emotions amplify. Fight and flight are the primary responses — proportional and clear.",
      insight: "Intelligent design for genuine threat",
      capacities: [
        { name: "Perception", text: "Narrowed — threat-relevant signals" },
        { name: "Cognition", text: "Simplified — binary thinking" },
        { name: "Learning", text: "Reduced" },
        { name: "Relational", text: "Limited — vulnerability dangerous" },
      ],
    },
    chronic: {
      fullName: "Chronic Protection",
      pattern: "Pattern B",
      type: "SEA offline",
      duration: "Permanent alert — alarm never switches off",
      distortion: "I feel bad → you're threatening me → I must defend",
      description:
        "Permanent vigilance. The nervous system never received the signal that the threat has passed. Approach-avoidance cycling — wanting connection but reading it as dangerous. The body running on emergency fuel indefinitely.",
      insight:
        "Hypervigilance is not anxiety as a personality trait — it is a compass stuck in Protection",
      capacities: [
        { name: "Perception", text: "Threat-biased — danger everywhere" },
        { name: "Cognition", text: "Binary — black-and-white thinking" },
        { name: "Learning", text: "Blocked — safety never trusted" },
        { name: "Relational", text: "Approach-avoidance — wants but can't trust" },
      ],
    },
  },
  {
    key: "C",
    name: "Control",
    hex: PATTERN.C.primary,
    center: 0.625,
    fluid: {
      fullName: "Control Mode",
      pattern: "Pattern C",
      type: "Cognition-first",
      duration: "Hours to days — time-limited tool",
      sequence: "Anticipate → Manage → Override",
      description:
        "Protection is not enough — the situation requires structure or strategic action. Cognition is recruited deliberately. When it resolves, cognition stands down.",
      insight: "A tool. Used deliberately. Released when done.",
      capacities: [
        { name: "Perception", text: "Strategic — what needs managing" },
        { name: "Cognition", text: "Strategic — planning, anticipation" },
        { name: "Learning", text: "Selective" },
        { name: "Relational", text: "Managed — relationships serve strategy" },
      ],
    },
    chronic: {
      fullName: "Chronic Control",
      pattern: "Pattern C",
      type: "SEA offline",
      duration: "Permanent override — cognitive control is identity",
      distortion: "I feel bad → you're destabilising me → I must manage you",
      description:
        "Permanent management. Strategic warmth, managed closeness, performed empathy. The person looks functional — often more than functional. But closeness is managed rather than felt. Vulnerability is performed rather than experienced.",
      insight:
        "The mode that most reliably mimics Connection — making the stuckness invisible",
      capacities: [
        { name: "Perception", text: "Instrumental — reads for advantage" },
        { name: "Cognition", text: "Strategic — management is identity" },
        { name: "Learning", text: "Selective — only what serves control" },
        { name: "Relational", text: "Conditional — all love transactional" },
      ],
    },
  },
  {
    key: "D",
    name: "Domination",
    hex: PATTERN.D.primary,
    center: 0.875,
    fluid: {
      fullName: "Domination Mode",
      pattern: "Pattern D",
      type: "Cognition-first",
      duration: "Rare — last resort, highest cost",
      sequence: "Override → Eliminate → Secure",
      description:
        "Entered deliberately, used briefly, followed by return. Emotional Resonance drops to near-zero — the person chose to let it drop. The sequence is final.",
      insight: "In a fluid compass, the cost is felt and processed",
      capacities: [
        { name: "Perception", text: "Tunnel — obstacles and resources" },
        { name: "Cognition", text: "Locked — rigid, self-confirming" },
        { name: "Learning", text: "Unavailable" },
        { name: "Relational", text: "Absent — others are resources or threats" },
      ],
    },
    chronic: {
      fullName: "Chronic Domination",
      pattern: "Pattern D",
      type: "SEA offline",
      duration: "Permanent extreme — power is the only safety",
      distortion: "I feel bad → you're challenging me → I must eliminate",
      description:
        "Permanent override. Empathy collapsed or weaponised. Tolerance builds — what produced safety yesterday requires more force today. The person has lost the experience of the cost.",
      insight:
        "The person does not feel the weight of what they are doing because the weight has become who they believe they are",
      capacities: [
        { name: "Perception", text: "Weaponised — reads to exploit" },
        { name: "Cognition", text: "Locked — rigid, self-confirming" },
        { name: "Learning", text: "Unavailable — nothing penetrates" },
        { name: "Relational", text: "Absent — others are resources or threats" },
      ],
    },
  },
];

// ─── CONSTANTS ──────────────────────────────────────────

const BAR_GRADIENT = `linear-gradient(90deg, ${PATTERN.A.primary} 0%, ${PATTERN.A.primary} 20%, ${PATTERN.B.primary} 35%, ${PATTERN.B.primary} 45%, ${PATTERN.C.primary} 55%, ${PATTERN.C.primary} 70%, ${PATTERN.D.primary} 85%, ${PATTERN.D.primary} 100%)`;

const MAGNET_RADIUS = 0.04;

function getActiveMode(pos) {
  if (pos < 0.25) return MODES[0];
  if (pos < 0.5) return MODES[1];
  if (pos < 0.75) return MODES[2];
  return MODES[3];
}

function snapToCenter(pos) {
  for (const mode of MODES) {
    if (Math.abs(pos - mode.center) < MAGNET_RADIUS) return mode.center;
  }
  return pos;
}

// ─── COMPONENT ──────────────────────────────────────────

export default function FluidCompassExplorer() {
  const [position, setPosition] = useState(0.125);
  const [isStuck, setIsStuck] = useState(false);
  const barRef = useRef(null);
  const isDragging = useRef(false);
  const activeMode = getActiveMode(position);
  const data = isStuck ? activeMode.chronic : activeMode.fluid;

  const updatePosition = useCallback((clientX) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const raw = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setPosition(snapToCenter(raw));
  }, []);

  const handlePointerDown = useCallback(
    (e) => {
      isDragging.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e) => {
      if (isDragging.current) updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleSliderKeyDown = useCallback((e) => {
    const step = 0.05;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setPosition((prev) => snapToCenter(Math.min(1, prev + step)));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setPosition((prev) => snapToCenter(Math.max(0, prev - step)));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPosition(0.125);
    } else if (e.key === "End") {
      e.preventDefault();
      setPosition(0.875);
    }
  }, []);

  return (
    <div
      style={{
        margin: "32px 0",
        borderRadius: 12,
        border: `1px solid ${hexToRgba(activeMode.hex, 0.2)}`,
        background: hexToRgba(activeMode.hex, 0.03),
        overflow: "hidden",
        transition: "border-color 300ms ease, background 300ms ease",
      }}
    >
      {/* ─── Header ────────────────────────────── */}
      <div
        style={{
          padding: "16px 20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {/* Badge */}
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            fontFamily: FONT.mono,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: activeMode.hex,
            padding: "3px 8px",
            borderRadius: 100,
            background: hexToRgba(activeMode.hex, 0.12),
            border: `1px solid ${hexToRgba(activeMode.hex, 0.25)}`,
            transition: "all 300ms ease",
          }}
        >
          {isStuck ? "Stuck Compass" : "Fluid Compass"}
        </span>

        {/* Toggle + instruction */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Fluid / Stuck toggle */}
          <div
            style={{
              display: "flex",
              borderRadius: 100,
              border: `1px solid ${BORDER.default}`,
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setIsStuck(false)}
              aria-label="Show fluid compass (healthy movement)"
              aria-pressed={!isStuck}
              style={{
                padding: "4px 12px",
                fontSize: 10,
                fontFamily: FONT.mono,
                fontWeight: 600,
                letterSpacing: "0.04em",
                border: "none",
                cursor: "pointer",
                transition: "all 200ms ease",
                background: !isStuck
                  ? hexToRgba(activeMode.hex, 0.15)
                  : "transparent",
                color: !isStuck ? activeMode.hex : TEXT.muted,
              }}
            >
              Fluid
            </button>
            <button
              onClick={() => setIsStuck(true)}
              aria-label="Show stuck compass (chronic pattern)"
              aria-pressed={isStuck}
              style={{
                padding: "4px 12px",
                fontSize: 10,
                fontFamily: FONT.mono,
                fontWeight: 600,
                letterSpacing: "0.04em",
                border: "none",
                borderLeft: `1px solid ${BORDER.default}`,
                cursor: "pointer",
                transition: "all 200ms ease",
                background: isStuck
                  ? hexToRgba(activeMode.hex, 0.15)
                  : "transparent",
                color: isStuck ? activeMode.hex : TEXT.muted,
              }}
            >
              Stuck
            </button>
          </div>

          <span
            style={{
              fontSize: 11,
              color: TEXT.muted,
              fontFamily: FONT.mono,
            }}
          >
            Drag to explore
          </span>
        </div>
      </div>

      {/* ─── Gradient Bar ──────────────────────── */}
      <div style={{ padding: "16px 20px 0" }}>
        <div
          role="slider"
          tabIndex={0}
          aria-label="Four-mode gradient position"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position * 100)}
          aria-valuetext={`${activeMode.name} mode`}
          style={{
            padding: "15px 0",
            margin: "-15px 0",
            cursor: "pointer",
            touchAction: "none",
            userSelect: "none",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onKeyDown={handleSliderKeyDown}
        >
          <div
            ref={barRef}
            style={{
              position: "relative",
              height: 14,
              borderRadius: 7,
              background: BAR_GRADIENT,
              pointerEvents: "none",
            }}
          >
            {/* Zone dividers */}
            {[0.25, 0.5, 0.75].map((pos) => (
              <div
                key={pos}
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  width: 3,
                  left: `${pos * 100}%`,
                  transform: "translateX(-50%)",
                  backgroundColor: hexToRgba('#000000', 0.6),
                }}
              />
            ))}
            {/* Slider thumb */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: `${position * 100}%`,
                transform: "translate(-50%, -50%)",
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: BG.primary,
                border: `3px solid ${activeMode.hex}`,
                boxShadow: `0 0 16px ${activeMode.hex}80`,
                transition:
                  "border-color 200ms ease, box-shadow 200ms ease",
              }}
            />
          </div>
        </div>

        {/* Mode labels */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 6,
            padding: "0 2px",
          }}
        >
          {MODES.map((mode) => (
            <span
              key={mode.key}
              style={{
                width: "25%",
                textAlign: "center",
                fontSize: 11,
                fontFamily: FONT.mono,
                fontWeight: activeMode.key === mode.key ? 700 : 400,
                color: mode.hex,
                opacity: activeMode.key === mode.key ? 1 : 0.35,
                transition: "opacity 200ms ease",
              }}
            >
              {mode.name}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Content Area ──────────────────────── */}
      <div style={{ padding: "20px 20px 20px" }}>
        {/* Mode title + type pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 8,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: activeMode.hex,
              transition: "color 300ms ease",
            }}
          >
            {data.fullName}
          </span>
          <span
            style={{
              fontSize: 10,
              fontFamily: FONT.mono,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: isStuck ? MODE_ORANGE : TEXT.muted,
              padding: "2px 8px",
              borderRadius: 100,
              background: isStuck
                ? hexToRgba(MODE_ORANGE, 0.1)
                : BG.surface,
              border: `1px solid ${
                isStuck ? hexToRgba(MODE_ORANGE, 0.25) : BORDER.default
              }`,
              transition: "all 300ms ease",
            }}
          >
            {data.type}
          </span>
        </div>

        {/* Metadata */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 12,
            fontSize: 12,
            color: TEXT.muted,
            fontFamily: FONT.mono,
          }}
        >
          <span>{data.pattern}</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>{data.duration}</span>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 14,
            color: TEXT.secondary,
            lineHeight: 1.7,
            margin: "0 0 12px",
            maxWidth: 640,
          }}
        >
          {data.description}
        </p>

        {/* Insight quote */}
        <div
          style={{
            padding: "10px 14px",
            borderLeft: `3px solid ${activeMode.hex}`,
            background: hexToRgba(activeMode.hex, 0.06),
            borderRadius: "0 6px 6px 0",
            marginBottom: 16,
            transition: "border-color 300ms ease, background 300ms ease",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              fontStyle: "italic",
              color: TEXT.primary,
            }}
          >
            {data.insight}
          </span>
        </div>

        {/* Sequence (fluid) or Distortion (stuck) */}
        <div
          style={{
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontFamily: FONT.mono,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: isStuck ? MODE_ORANGE : TEXT.muted,
              transition: "color 300ms ease",
            }}
          >
            {isStuck ? "Distortion" : "Sequence"}
          </span>
          <span
            style={{
              fontSize: 12,
              fontFamily: FONT.mono,
              fontWeight: 600,
              color: isStuck ? TEXT.secondary : activeMode.hex,
              fontStyle: isStuck ? "italic" : "normal",
              transition: "color 300ms ease",
            }}
          >
            {isStuck ? data.distortion : data.sequence}
          </span>
        </div>

        {/* Capacity mini-cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 8,
          }}
        >
          {data.capacities.map((cap) => (
            <div
              key={cap.name}
              style={{
                padding: "10px 12px",
                borderRadius: 8,
                background: hexToRgba(activeMode.hex, 0.05),
                border: `1px solid ${hexToRgba(activeMode.hex, 0.12)}`,
                transition:
                  "background 300ms ease, border-color 300ms ease",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: FONT.mono,
                  color: activeMode.hex,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: 4,
                  transition: "color 300ms ease",
                }}
              >
                {cap.name}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: TEXT.secondary,
                  lineHeight: 1.5,
                }}
              >
                {cap.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
