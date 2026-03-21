"use client";

import { useState } from "react";
import {
  FONT, TEXT, BG, BORDER,
  SPECTRUM, PATTERN, PATTERN_GRADIENT, hexToRgba, RADIUS,
} from "@/src/styles/tokens";
import { EMOTIONS } from "@/src/data/compass-diagram-data";

// ─── CONSTANTS ──────────────────────────────────────────

const ACCENT = SPECTRUM.azure;

const MODE_LABELS = [
  { key: "fluid", label: "Fluid", color: PATTERN.A.primary },
  { key: "chronicConnection", label: "Chronic Connection", color: PATTERN.A.primary },
  { key: "chronicProtection", label: "Chronic Protection", color: PATTERN.B.primary },
  { key: "chronicControl", label: "Chronic Control", color: PATTERN.C.primary },
  { key: "chronicDomination", label: "Chronic Domination", color: PATTERN.D.primary },
];

const SOMATIC_KEYS = ["fear", "anger", "disgust", "joy", "envy"];
const RELATIONAL_KEYS = ["shame", "guilt", "sadness", "love"];

const SOMATIC_EMOTIONS = EMOTIONS.filter((e) => SOMATIC_KEYS.includes(e.key));
const RELATIONAL_EMOTIONS = EMOTIONS.filter((e) => RELATIONAL_KEYS.includes(e.key));

// ─── STYLES ─────────────────────────────────────────────

const groupLabelStyle = {
  fontFamily: FONT.mono,
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: TEXT.muted,
  marginBottom: 8,
  marginTop: 0,
};

const buttonBase = {
  fontFamily: FONT.mono,
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.02em",
  padding: "8px 14px",
  borderRadius: RADIUS.sm,
  cursor: "pointer",
  transition: "all 200ms ease",
  width: "100%",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  gap: 8,
};

const detailLabelStyle = {
  fontFamily: FONT.mono,
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: TEXT.muted,
  marginBottom: 4,
};

const detailValueStyle = {
  fontFamily: FONT.display,
  fontSize: 14,
  lineHeight: 1.65,
  color: TEXT.secondary,
  margin: 0,
};

// ─── COMPONENT ──────────────────────────────────────────

export default function EmotionSignalExplorer() {
  const [selectedKey, setSelectedKey] = useState("fear");
  const [expandedGradient, setExpandedGradient] = useState(null);

  const selected = EMOTIONS.find((e) => e.key === selectedKey);

  return (
    <section
      aria-label="Emotion Signal Explorer — select an emotion to see its signal, body response, and completion pathway"
      style={{
        background: BG.card,
        border: `1px solid ${hexToRgba(ACCENT, 0.15)}`,
        borderRadius: RADIUS.lg,
        padding: "clamp(16px, 3vw, 28px)",
        marginBottom: 48,
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <h3
          style={{
            fontFamily: FONT.mono,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: ACCENT,
            margin: "0 0 6px 0",
          }}
        >
          EMOTION SIGNAL EXPLORER
        </h3>
        <p
          style={{
            fontFamily: FONT.display,
            fontSize: 13,
            color: TEXT.muted,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Select an emotion to see what the nervous system is signalling, what the body does, and what completes the cycle.
        </p>
      </div>

      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "clamp(160px, 25%, 220px) 1fr",
          gap: "clamp(12px, 2vw, 24px)",
        }}
      >
        {/* Left: Emotion selector */}
        <div>
          {/* Somatic group */}
          <p style={groupLabelStyle}>Somatic</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 3, marginBottom: 16 }}>
            {SOMATIC_EMOTIONS.map((emotion) => (
              <EmotionButton
                key={emotion.key}
                emotion={emotion}
                isSelected={selectedKey === emotion.key}
                onClick={() => {
                  setSelectedKey(emotion.key);
                  setExpandedGradient(null);
                }}
              />
            ))}
          </div>

          {/* Relational group */}
          <p style={groupLabelStyle}>Relational</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {RELATIONAL_EMOTIONS.map((emotion) => (
              <EmotionButton
                key={emotion.key}
                emotion={emotion}
                isSelected={selectedKey === emotion.key}
                onClick={() => {
                  setSelectedKey(emotion.key);
                  setExpandedGradient(null);
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: Detail panel */}
        <div>
          {/* Emotion header */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <h4
              style={{
                fontFamily: FONT.display,
                fontSize: 22,
                fontWeight: 700,
                color: TEXT.primary,
                margin: 0,
              }}
            >
              {selected.name}
            </h4>
            <span
              style={{
                fontFamily: FONT.mono,
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: selected.type === "relational" ? SPECTRUM.sky : TEXT.muted,
                background:
                  selected.type === "relational"
                    ? hexToRgba(SPECTRUM.sky, 0.12)
                    : hexToRgba(ACCENT, 0.08),
                padding: "3px 8px",
                borderRadius: RADIUS.sm,
              }}
            >
              {selected.type}
            </span>
          </div>

          {/* Signal */}
          <div style={{ marginBottom: 16 }}>
            <p style={detailLabelStyle}>THE SIGNAL</p>
            <p
              style={{
                ...detailValueStyle,
                fontWeight: 600,
                color: TEXT.primary,
                fontSize: 15,
              }}
            >
              {selected.signal}
            </p>
          </div>

          {/* Body Response */}
          <div style={{ marginBottom: 16 }}>
            <p style={detailLabelStyle}>BODY RESPONSE</p>
            <p style={detailValueStyle}>{selected.bodyResponse}</p>
          </div>

          {/* Completion Pathway */}
          <div style={{ marginBottom: 24 }}>
            <p style={detailLabelStyle}>COMPLETION PATHWAY</p>
            <p style={detailValueStyle}>{selected.completionNeeds}</p>
          </div>

          {/* Gradient section */}
          <div>
            <p
              style={{
                ...detailLabelStyle,
                marginBottom: 10,
              }}
            >
              ACROSS THE GRADIENT
            </p>

            {/* Gradient bar */}
            <div
              style={{
                background: PATTERN_GRADIENT,
                height: 6,
                borderRadius: 100,
                marginBottom: 12,
              }}
            />

            {/* Gradient positions */}
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {MODE_LABELS.map((mode) => {
                const isExpanded = expandedGradient === mode.key;
                const gradientText = selected.gradient[mode.key];

                return (
                  <button
                    key={mode.key}
                    onClick={() =>
                      setExpandedGradient(isExpanded ? null : mode.key)
                    }
                    aria-expanded={isExpanded}
                    style={{
                      background: isExpanded
                        ? hexToRgba(mode.color, 0.08)
                        : "transparent",
                      border: `1px solid ${
                        isExpanded
                          ? hexToRgba(mode.color, 0.25)
                          : "transparent"
                      }`,
                      borderRadius: RADIUS.sm,
                      padding: "8px 12px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 200ms ease",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: mode.color,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: FONT.mono,
                          fontSize: 11,
                          fontWeight: 600,
                          color: isExpanded ? mode.color : TEXT.secondary,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {mode.label}
                      </span>
                      <span
                        style={{
                          marginLeft: "auto",
                          fontFamily: FONT.mono,
                          fontSize: 10,
                          color: TEXT.hint,
                          transform: isExpanded
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                          transition: "transform 200ms ease",
                        }}
                      >
                        {"\u25B8"}
                      </span>
                    </div>
                    {isExpanded && (
                      <p
                        style={{
                          fontFamily: FONT.display,
                          fontSize: 13,
                          lineHeight: 1.65,
                          color: TEXT.secondary,
                          margin: "8px 0 0 16px",
                        }}
                      >
                        {gradientText}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SUBCOMPONENT ───────────────────────────────────────

function EmotionButton({ emotion, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={isSelected}
      style={{
        ...buttonBase,
        background: isSelected ? hexToRgba(ACCENT, 0.12) : "transparent",
        border: `1px solid ${
          isSelected ? hexToRgba(ACCENT, 0.3) : "transparent"
        }`,
        color: isSelected ? TEXT.primary : TEXT.secondary,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: isSelected ? ACCENT : TEXT.hint,
          flexShrink: 0,
        }}
      />
      {emotion.name}
    </button>
  );
}
