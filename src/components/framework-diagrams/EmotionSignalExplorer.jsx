"use client";

import { useState } from "react";
import {
  FONT, TEXT, BG, BORDER,
  SPECTRUM, PATTERN, hexToRgba, RADIUS,
} from "@/src/styles/tokens";
import {
  EMOTIONS, BODY_SIGNATURE_GROUPS, DISTORTIONS,
} from "@/src/data/m1-data";

// ─── CONSTANTS ──────────────────────────────────────

const ACCENT = SPECTRUM.azure;
const WARN = SPECTRUM.slate;

const MODE_COLUMNS = [
  { key: "connection", label: "Connection", condition: "Safety & Openness", color: PATTERN.A.primary },
  { key: "protection", label: "Protection", condition: "Threat & Defence", color: PATTERN.B.primary },
  { key: "control", label: "Control", condition: "Strategy & Management", color: PATTERN.C.primary },
  { key: "domination", label: "Domination", condition: "Power & Dominance", color: PATTERN.D.primary },
];

// ─── STYLES ─────────────────────────────────────────

const groupLabelStyle = {
  fontFamily: FONT.mono,
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: TEXT.muted,
  marginBottom: 6,
  marginTop: 0,
};

const buttonBase = {
  fontFamily: FONT.mono,
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: "0.02em",
  padding: "6px 12px",
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

// ─── COMPONENT ──────────────────────────────────────

export default function EmotionSignalExplorer() {
  const [selectedKey, setSelectedKey] = useState("fear");

  const selectedDistortion = DISTORTIONS.find((d) => d.key === selectedKey);
  const selectedEmotion = EMOTIONS.find((e) => e.key === selectedKey);
  const selected = selectedDistortion || selectedEmotion;
  const isDistortion = !!selectedDistortion;

  const restorationLabel = isDistortion
    ? null
    : selected.restorationType === "somatic"
      ? "Somatic"
      : selected.restorationType === "relational"
        ? "Relational"
        : "Somatic or Relational";

  // For Admiration/Pride — find which distortion replaces them
  const distortionNote = !isDistortion && selected.distortedBy
    ? DISTORTIONS.find((d) => d.key === selected.distortedBy)
    : null;

  return (
    <section
      aria-label="Emotion Signal Explorer — select an emotion to see its signal, body response, and restoration pathway"
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
          Select an emotion to see what the nervous system is signalling, what the body does, and what restores the cycle.
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
        {/* Left: Emotion selector — body signature groups */}
        <div>
          {BODY_SIGNATURE_GROUPS.map((group) => (
            <div key={group.key} style={{ marginBottom: 12 }}>
              <p style={groupLabelStyle}>{group.label}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {group.emotions.map((emotionKey) => {
                  const emotion = EMOTIONS.find((e) => e.key === emotionKey);
                  if (!emotion) return null;
                  return (
                    <EmotionButton
                      key={emotion.key}
                      emotion={emotion}
                      isSelected={selectedKey === emotion.key}
                      onClick={() => setSelectedKey(emotion.key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}

          {/* Distortions group */}
          <div style={{ marginTop: 4, paddingTop: 10, borderTop: `1px solid ${BORDER.default}` }}>
            <p style={{ ...groupLabelStyle, color: WARN }}>Distortions</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {DISTORTIONS.map((d) => (
                <EmotionButton
                  key={d.key}
                  emotion={d}
                  isSelected={selectedKey === d.key}
                  onClick={() => setSelectedKey(d.key)}
                  isDistortion
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Detail panel */}
        <div>
          {isDistortion ? (
            /* ── Distortion detail ── */
            <>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 20 }}>
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
                    color: WARN,
                    background: hexToRgba(WARN, 0.1),
                    padding: "3px 8px",
                    borderRadius: RADIUS.sm,
                  }}
                >
                  Distortion of {EMOTIONS.find((e) => e.key === selected.distortionOf)?.name}
                </span>
              </div>

              <div style={{ marginBottom: 24 }}>
                <p style={detailValueStyle}>{selected.description}</p>
              </div>

              <div>
                <p style={{ ...detailLabelStyle, marginBottom: 14 }}>
                  STUCK COMPASS ONLY
                </p>
                <CompassTable
                  title="Stuck Compass"
                  subtitle="appears only when SEA is absent"
                  data={selected.stuckCompass}
                  isStuck
                />
              </div>
            </>
          ) : (
            /* ── Emotion detail ── */
            <>
              {/* Emotion header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  marginBottom: 20,
                  flexWrap: "wrap",
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
                  Restoration: {restorationLabel}
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

              {/* Restoration Pathway */}
              <div style={{ marginBottom: 24 }}>
                <p style={detailLabelStyle}>RESTORATION PATHWAY</p>
                <p style={detailValueStyle}>{selected.restorationNeeds}</p>
              </div>

              {/* Across the Compass */}
              <div>
                <p style={{ ...detailLabelStyle, marginBottom: 14 }}>
                  ACROSS THE COMPASS
                </p>

                {/* Fluid Compass table */}
                <CompassTable
                  title="Fluid Compass"
                  subtitle="the signal stays intact"
                  data={selected.fluidCompass}
                />

                {/* Stuck Compass table — or distortion callout */}
                {selected.stuckCompass ? (
                  <CompassTable
                    title="Stuck Compass"
                    subtitle="the signal distorts"
                    data={selected.stuckCompass}
                    isStuck
                  />
                ) : distortionNote ? (
                  <div
                    style={{
                      padding: "14px 18px",
                      background: hexToRgba(WARN, 0.06),
                      border: `1px solid ${hexToRgba(WARN, 0.2)}`,
                      borderRadius: RADIUS.sm,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: FONT.display,
                        fontSize: 13,
                        color: TEXT.secondary,
                        margin: 0,
                        lineHeight: 1.6,
                      }}
                    >
                      <strong style={{ color: TEXT.primary }}>In the stuck compass:</strong>{" "}
                      {distortionNote.name} occupies this space. When Self-Emotional Awareness (SEA) is absent,{" "}
                      {selected.name.toLowerCase()} cannot be received — {distortionNote.name.toLowerCase()} is what the person experiences instead.
                    </p>
                  </div>
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── COMPASS TABLE ─────────────────────────────────

function CompassTable({ title, subtitle, data, isStuck }) {
  return (
    <div style={{ marginBottom: isStuck ? 0 : 16 }}>
      <div style={{ marginBottom: 8 }}>
        <span
          style={{
            fontFamily: FONT.mono,
            fontSize: 11,
            fontWeight: 600,
            color: TEXT.primary,
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: FONT.display,
            fontSize: 11,
            fontStyle: "italic",
            color: TEXT.muted,
            marginLeft: 6,
          }}
        >
          — {subtitle}
        </span>
      </div>

      {/* Desktop: 4-column row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          background: BORDER.default,
          borderRadius: RADIUS.sm,
          overflow: "hidden",
        }}
      >
        {MODE_COLUMNS.map((mode) => {
          const cellValue = data[mode.key];
          const isNull = cellValue === null || cellValue === undefined;

          return (
            <div key={mode.key} style={{ background: BG.card }}>
              {/* Column header */}
              <div
                style={{
                  padding: "8px 10px 6px",
                  background: isNull
                    ? hexToRgba(SPECTRUM.slate, 0.03)
                    : hexToRgba(mode.color, 0.06),
                  borderBottom: `1px solid ${BORDER.default}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: isNull ? TEXT.hint : mode.color,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: FONT.mono,
                      fontSize: 10,
                      fontWeight: 600,
                      color: isNull ? TEXT.muted : TEXT.primary,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {mode.label}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: FONT.display,
                    fontSize: 9,
                    color: TEXT.muted,
                    marginTop: 2,
                    display: "block",
                  }}
                >
                  {mode.condition}
                </span>
              </div>

              {/* Cell content */}
              <div
                style={{
                  padding: "10px",
                  minHeight: 60,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {isNull ? (
                  <span
                    style={{
                      fontFamily: FONT.mono,
                      fontSize: 12,
                      color: TEXT.hint,
                      fontStyle: "italic",
                    }}
                  >
                    —
                  </span>
                ) : (
                  <p
                    style={{
                      fontFamily: FONT.display,
                      fontSize: 12,
                      lineHeight: 1.55,
                      color: TEXT.secondary,
                      margin: 0,
                    }}
                  >
                    {cellValue}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── EMOTION BUTTON ─────────────────────────────────

function EmotionButton({ emotion, isSelected, onClick, isDistortion }) {
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
        fontStyle: isDistortion ? "italic" : "normal",
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
