"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  FONT, TEXT, BG, BORDER,
  PATTERN, PATTERN_GRADIENT, hexToRgba,
  MODE_ORANGE,
} from "@/src/styles/tokens";
import { COMPASS_CONDITIONS } from "@/src/data/compass-diagram-data";

// ─── MODE DATA ──────────────────────────────────────────

const MODES = [
  {
    key: "A",
    name: "Connection",
    conditionShort: "Safety & Openness",
    hex: PATTERN.A.primary,
    center: 0.125,
    fluid: {
      fullName: "Connection Mode",
      pattern: "Pattern A",
      type: "Body-first",
      duration: "Indefinite — baseline",
      sequence: "Engage → Relate → Repair → Learn",
      description:
        "The nervous system has enough safety to engage with complexity. Perception broadens, empathy comes fully online, repair becomes possible, and learning capacity opens.",
      insight: "The mode designed for sustained living — the system's baseline",
      capacities: [
        { name: "Perception", text: "Broad — sees the full field" },
        { name: "Cognition", text: "Flexible — holds complexity" },
        { name: "Learning", text: "Available" },
        { name: "Relational", text: "Full — repair, vulnerability, trust" },
      ],
    },
    chronic: {
      fullName: "Chronic Connection",
      type: "SEA Offline",
      duration: "Permanent — no end condition",
      sequence: "Pretended Safety → Over-Giving → Disappearing",
      description:
        "Connection as survival strategy. Safety performed, not felt. Boundaries feel like threat. Anger forbidden — rerouted into guilt or compliance. From outside, this looks like healthy Connection. From inside, there is no self left to connect from.",
      insight:
        "What looks like warmth is a protection strategy — the person cannot stop giving because stopping feels like the thing that will make them disappear",
      distortion: "I feel bad → I caused it → I must fix myself",
      capacities: [
        { name: "Perception", text: "Narrowed to other — self drops out" },
        { name: "Cognition", text: "Serves compliance — not reflection" },
        { name: "Learning", text: "Blocked by external focus" },
        { name: "Relational", text: "Performed — not felt" },
      ],
    },
  },
  {
    key: "B",
    name: "Protection",
    conditionShort: "Threat & Defence",
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
      type: "SEA Offline",
      duration: "Permanent — alarm never stands down",
      sequence: "Defence → Perpetual Vigilance → No Stand-Down",
      description:
        "The system never stands down. Alarm stays on after threat passes. Uncertainty is danger. Safety feels like it will be taken the moment you relax. The person is not anxious — they are realistic.",
      insight:
        "The alarm never stops because stopping it feels more dangerous than the alarm itself",
      distortion: "I feel bad → you're threatening me → I must defend",
      capacities: [
        { name: "Perception", text: "Locked on threat — cannot widen" },
        { name: "Cognition", text: "Binary — safe/unsafe only" },
        { name: "Learning", text: "Blocked by vigilance" },
        { name: "Relational", text: "Blocked — openness reads as exposure" },
      ],
    },
  },
  {
    key: "C",
    name: "Control",
    conditionShort: "Strategy & Management",
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
      type: "SEA Offline",
      duration: "Permanent — management never stops",
      sequence: "Instability as Constant → Override → Manage Permanently",
      description:
        "Uncertainty must be managed always. Cognitive control is the default safety strategy. Others still register — as data to be managed, not as people to be felt. What looks like calm competence from outside is ongoing suppression from inside.",
      insight:
        "What looks like competence is a nervous system that cannot stop managing because unmanaged feels like unsafe",
      distortion: "I feel bad → you're destabilising me → I must manage you",
      capacities: [
        { name: "Perception", text: "Strategic — scans for instability" },
        { name: "Cognition", text: "Locked on management — cannot release" },
        { name: "Learning", text: "Selective — serves strategy only" },
        { name: "Relational", text: "Managed — relationships serve control" },
      ],
    },
  },
  {
    key: "D",
    name: "Domination",
    conditionShort: "Power & Dominance",
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
      type: "SEA Offline",
      duration: "Permanent — tolerance builds, cost disappears",
      sequence: "Constant Life Peril → Eliminate → Tyranny",
      description:
        "Permanent override. Empathy collapsed or weaponised. Tolerance builds — what produced safety yesterday requires more force today. The person has lost the experience of the cost.",
      insight:
        "The person does not feel the weight of what they are doing because the weight has become who they believe they are",
      distortion: "I feel bad → you're challenging me → I must eliminate",
      capacities: [
        { name: "Perception", text: "Weaponised — reads to exploit" },
        { name: "Cognition", text: "Locked — rigid, self-confirming" },
        { name: "Learning", text: "Unavailable — nothing penetrates" },
        { name: "Relational", text: "Absent — others are resources or threats" },
      ],
    },
  },
];

// ─── EVENTS & EMOTIONS ─────────────────────────────────

const EVENTS = [
  {
    signal: "Safety",
    event: "A close friend shares something they've been carrying — you feel genuine warmth",
    emotion: "Joy",
    modeIndex: 0,
  },
  {
    signal: "Threat",
    event: "A car swerves toward you on the highway",
    emotion: "Fear",
    modeIndex: 1,
  },
  {
    signal: "Danger",
    event: "Your boss takes credit for your work — again",
    emotion: "Anger",
    modeIndex: 2,
  },
  {
    signal: "Life peril",
    event: "You discover someone in authority has been harming those in their care",
    emotion: "Disgust",
    modeIndex: 3,
  },
];

const EMOTIONS = [
  // Connection — safety signals + repair drive
  { name: "Joy",     modeIndex: 0 },
  { name: "Love",    modeIndex: 0 },
  { name: "Guilt",   modeIndex: 0 },
  // Protection — threat mobilization + loss withdrawal
  { name: "Fear",    modeIndex: 1 },
  { name: "Sadness", modeIndex: 1 },
  // Control — cognitive management signals
  { name: "Anger",   modeIndex: 2 },
  { name: "Shame",   modeIndex: 2 },
  { name: "Envy",    modeIndex: 2 },
  // Domination — elimination signal
  { name: "Disgust", modeIndex: 3 },
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
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [connectors, setConnectors] = useState(null);
  const [isStuck, setIsStuck] = useState(false);
  const containerRef = useRef(null);
  const barRef = useRef(null);
  const eventCardRefs = useRef([]);
  const emotionPillRefs = useRef({});
  const isDragging = useRef(false);
  const activeMode = getActiveMode(position);
  const data = isStuck ? activeMode.chronic : activeMode.fluid;
  const accentColor = isStuck ? MODE_ORANGE : activeMode.hex;

  // Derive highlighted emotion from selected event
  const activeEvent = selectedEvent !== null ? EVENTS[selectedEvent] : null;

  const updatePosition = useCallback((clientX) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const raw = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setPosition(snapToCenter(raw));
  }, []);

  const handlePointerDown = useCallback(
    (e) => {
      isDragging.current = true;
      setSelectedEvent(null);
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
    setSelectedEvent(null);
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

  const handleEventClick = useCallback((eventIndex) => {
    setSelectedEvent(eventIndex);
    setPosition(MODES[EVENTS[eventIndex].modeIndex].center);
  }, []);

  const handleToggle = useCallback((stuck) => {
    setIsStuck(stuck);
    setSelectedEvent(null);
  }, []);

  // Measure connector line positions
  useEffect(() => {
    if (selectedEvent === null || !containerRef.current) {
      setConnectors(null);
      return;
    }

    const measure = () => {
      const evt = EVENTS[selectedEvent];
      const cEl = containerRef.current;
      const evEl = eventCardRefs.current[selectedEvent];
      const emEl = emotionPillRefs.current[evt.emotion];
      const bEl = barRef.current;

      if (!cEl || !evEl || !emEl || !bEl) return;

      const c = cEl.getBoundingClientRect();
      const ev = evEl.getBoundingClientRect();
      const em = emEl.getBoundingClientRect();
      const b = bEl.getBoundingClientRect();

      setConnectors({
        x1: ev.left + ev.width / 2 - c.left,
        y1: ev.bottom - c.top,
        x2: em.left + em.width / 2 - c.left,
        y2: em.top - c.top,
        x3: em.left + em.width / 2 - c.left,
        y3: em.bottom - c.top,
        x4: b.left + MODES[evt.modeIndex].center * b.width - c.left,
        y4: b.top + b.height / 2 - c.top,
        color: isStuck ? MODE_ORANGE : MODES[evt.modeIndex].hex,
      });
    };

    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [selectedEvent, isStuck]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        margin: "32px 0",
        borderRadius: 12,
        border: `1px solid ${hexToRgba(accentColor, 0.2)}`,
        background: hexToRgba(accentColor, 0.03),
        overflow: "hidden",
        transition: "border-color 300ms ease, background 300ms ease",
      }}
    >
      {/* ─── SVG Connector Lines ─────────────── */}
      {connectors && (
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <defs>
            <filter
              id="connector-glow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="3"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Event card → Emotion pill */}
          <path
            d={`M ${connectors.x1},${connectors.y1} C ${connectors.x1},${
              connectors.y1 + (connectors.y2 - connectors.y1) * 0.5
            } ${connectors.x2},${
              connectors.y2 - (connectors.y2 - connectors.y1) * 0.5
            } ${connectors.x2},${connectors.y2}`}
            stroke={connectors.color}
            strokeWidth={1.5}
            fill="none"
            opacity={0.45}
            filter="url(#connector-glow)"
          />
          {/* Emotion pill → Mode position */}
          <path
            d={`M ${connectors.x3},${connectors.y3} C ${connectors.x3},${
              connectors.y3 + (connectors.y4 - connectors.y3) * 0.5
            } ${connectors.x4},${
              connectors.y4 - (connectors.y4 - connectors.y3) * 0.5
            } ${connectors.x4},${connectors.y4}`}
            stroke={connectors.color}
            strokeWidth={1.5}
            fill="none"
            opacity={0.45}
            filter="url(#connector-glow)"
          />
        </svg>
      )}

      {/* ─── Header ────────────────────────────── */}
      <div
        style={{
          padding: "20px 20px 0",
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              fontFamily: FONT.mono,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: accentColor,
              padding: "3px 8px",
              borderRadius: 100,
              background: hexToRgba(accentColor, 0.12),
              border: `1px solid ${hexToRgba(accentColor, 0.25)}`,
              transition: "all 300ms ease",
              display: "inline-block",
              marginBottom: 10,
            }}
          >
            {isStuck ? "Stuck Compass" : "Fluid Compass"}
          </span>
          <div
            style={{
              fontFamily: FONT.display,
              fontSize: 10,
              fontStyle: "italic",
              color: hexToRgba(accentColor, 0.6),
              marginBottom: 6,
            }}
          >
            {isStuck ? COMPASS_CONDITIONS.stuck : COMPASS_CONDITIONS.fluid}
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: TEXT.primary,
              lineHeight: 1.2,
              marginBottom: 8,
            }}
          >
            How We Respond
          </div>
          <div
            style={{
              fontSize: 13,
              color: TEXT.secondary,
              lineHeight: 1.6,
              maxWidth: 480,
            }}
          >
            We perceive an event. An emotion fires. The nervous system activates
            the mode designed for that level of threat.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 8,
            flexShrink: 0,
          }}
        >
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
              onClick={() => handleToggle(false)}
              aria-label="Show fluid compass"
              aria-pressed={!isStuck}
              style={{
                padding: "4px 14px",
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
              onClick={() => handleToggle(true)}
              aria-label="Show stuck compass"
              aria-pressed={isStuck}
              style={{
                padding: "4px 14px",
                fontSize: 10,
                fontFamily: FONT.mono,
                fontWeight: 600,
                letterSpacing: "0.04em",
                border: "none",
                borderLeft: `1px solid ${BORDER.default}`,
                cursor: "pointer",
                transition: "all 200ms ease",
                background: isStuck
                  ? hexToRgba(MODE_ORANGE, 0.15)
                  : "transparent",
                color: isStuck ? MODE_ORANGE : TEXT.muted,
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
              whiteSpace: "nowrap",
              marginTop: 2,
            }}
          >
            Click an event to trace the chain
          </span>
        </div>
      </div>

      {/* ─── Event Row ─────────────────────────── */}
      <div
        style={{
          padding: "20px 20px 0",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8,
        }}
      >
        {EVENTS.map((evt, i) => {
          const mode = MODES[evt.modeIndex];
          const isActive = selectedEvent === i;
          const cardColor = isStuck && isActive ? MODE_ORANGE : mode.hex;
          return (
            <button
              key={evt.signal}
              ref={(el) => { eventCardRefs.current[i] = el; }}
              onClick={() => handleEventClick(i)}
              style={{
                padding: "10px 12px",
                borderRadius: 8,
                border: `1px solid ${
                  isActive
                    ? hexToRgba(cardColor, 0.5)
                    : BORDER.default
                }`,
                background: isActive
                  ? hexToRgba(cardColor, 0.06)
                  : "transparent",
                cursor: "pointer",
                textAlign: "left",
                opacity: selectedEvent !== null && !isActive ? 0.4 : 1,
                transition: "all 250ms ease",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontFamily: FONT.mono,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: isActive ? cardColor : TEXT.muted,
                  marginBottom: 4,
                  transition: "color 250ms ease",
                }}
              >
                {evt.signal}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: TEXT.secondary,
                  lineHeight: 1.5,
                }}
              >
                {evt.event}
              </div>
            </button>
          );
        })}
      </div>

      {/* ─── Emotion Row ─────────────────────────── */}
      <div
        style={{
          padding: "20px 20px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 6,
        }}
      >
        {EMOTIONS.map((emotion) => {
          const isHighlighted =
            activeEvent !== null && activeEvent.emotion === emotion.name;
          const pillColor = isStuck && isHighlighted
            ? MODE_ORANGE
            : MODES[emotion.modeIndex].hex;
          return (
            <span
              key={emotion.name}
              ref={(el) => { emotionPillRefs.current[emotion.name] = el; }}
              style={{
                fontSize: 11,
                fontFamily: FONT.mono,
                fontWeight: isHighlighted ? 600 : 400,
                padding: "3px 10px",
                borderRadius: 100,
                color: isHighlighted ? pillColor : TEXT.muted,
                background: isHighlighted
                  ? hexToRgba(pillColor, 0.12)
                  : "transparent",
                border: `1px solid ${
                  isHighlighted
                    ? hexToRgba(pillColor, 0.25)
                    : BORDER.default
                }`,
                opacity: selectedEvent !== null && !isHighlighted ? 0.4 : 1,
                transition: "all 250ms ease",
              }}
            >
              {emotion.name}
            </span>
          );
        })}
      </div>

      {/* ─── Gradient Bar ──────────────────────── */}
      <div style={{ padding: "4px 20px 0" }}>
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
                zIndex: 2,
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
              {activeMode.key === mode.key && (
                <div style={{
                  fontSize: 8,
                  fontFamily: FONT.display,
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: hexToRgba(mode.hex, 0.7),
                  marginTop: 1,
                }}>
                  {mode.conditionShort}
                </div>
              )}
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
              color: accentColor,
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
                isStuck
                  ? hexToRgba(MODE_ORANGE, 0.25)
                  : BORDER.default
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
          {data.pattern && <span>{data.pattern}</span>}
          {data.pattern && <span style={{ opacity: 0.4 }}>·</span>}
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
            borderLeft: `3px solid ${accentColor}`,
            background: hexToRgba(accentColor, 0.06),
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

        {/* Distortion (chronic only) */}
        {isStuck && data.distortion && (
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 10,
              marginBottom: 16,
              padding: "10px 14px",
              borderRadius: 8,
              background: hexToRgba(MODE_ORANGE, 0.05),
              border: `1px solid ${hexToRgba(MODE_ORANGE, 0.12)}`,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontFamily: FONT.mono,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: MODE_ORANGE,
                flexShrink: 0,
              }}
            >
              Distortion
            </span>
            <span
              style={{
                fontSize: 13,
                fontStyle: "italic",
                color: TEXT.secondary,
                lineHeight: 1.6,
              }}
            >
              {data.distortion}
            </span>
          </div>
        )}

        {/* Sequence */}
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
              color: TEXT.muted,
            }}
          >
            Sequence
          </span>
          <span
            style={{
              fontSize: 12,
              fontFamily: FONT.mono,
              fontWeight: 600,
              color: accentColor,
              transition: "color 300ms ease",
            }}
          >
            {data.sequence}
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
                background: hexToRgba(accentColor, 0.05),
                border: `1px solid ${hexToRgba(accentColor, 0.12)}`,
                transition:
                  "background 300ms ease, border-color 300ms ease",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: FONT.mono,
                  color: accentColor,
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
