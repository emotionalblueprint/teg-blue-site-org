"use client";

import { useState } from "react";
import {
  FONT, TEXT, BG, BORDER,
  SPECTRUM, hexToRgba, RADIUS,
} from "@/src/styles/tokens";
import {
  EMOTIONS, BODY_SIGNATURE_GROUPS, DISTORTIONS,
} from "@/src/data/m1-data";

// ─── CONSTANTS ──────────────────────────────────────

const ACCENT = SPECTRUM.azure;

const SOMATIC_GROUPS = ["mobilization", "expulsion", "approach"];
const RELATIONAL_GROUPS = ["social-withdrawal", "conservation", "bonding"];

const SOMATIC = BODY_SIGNATURE_GROUPS.filter((g) => SOMATIC_GROUPS.includes(g.key));
const RELATIONAL = BODY_SIGNATURE_GROUPS.filter((g) => RELATIONAL_GROUPS.includes(g.key));

// ─── STYLES ─────────────────────────────────────────

const containerStyle = {
  background: BG.card,
  border: `1px solid ${hexToRgba(ACCENT, 0.15)}`,
  borderRadius: RADIUS.lg,
  padding: "clamp(16px, 3vw, 28px)",
  marginBottom: 32,
};

const headerLabelStyle = {
  fontFamily: FONT.mono,
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: ACCENT,
  margin: "0 0 6px 0",
};

const headerDescStyle = {
  fontFamily: FONT.display,
  fontSize: 13,
  color: TEXT.muted,
  margin: 0,
  lineHeight: 1.5,
};

const layoutStyle = {
  display: "grid",
  gridTemplateColumns: "clamp(170px, 28%, 240px) 1fr",
  gap: "clamp(14px, 2.5vw, 24px)",
};

const typeDividerStyle = (isRelational) => ({
  fontFamily: FONT.mono,
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: isRelational ? SPECTRUM.sky : ACCENT,
  margin: "14px 0 6px 0",
  padding: "0 0 4px 0",
  borderBottom: `1px solid ${hexToRgba(isRelational ? SPECTRUM.sky : ACCENT, 0.2)}`,
});

const groupLabelStyle = {
  fontFamily: FONT.mono,
  fontSize: 9,
  fontWeight: 600,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: TEXT.muted,
  margin: "10px 0 3px 0",
};

const buttonStyle = (isSelected) => ({
  fontFamily: FONT.mono,
  fontSize: 12,
  fontWeight: isSelected ? 600 : 400,
  letterSpacing: "0.02em",
  padding: "5px 10px",
  borderRadius: RADIUS.sm,
  cursor: "pointer",
  transition: "all 180ms ease",
  width: "100%",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  gap: 8,
  background: isSelected ? hexToRgba(ACCENT, 0.1) : "transparent",
  border: `1px solid ${isSelected ? hexToRgba(ACCENT, 0.25) : "transparent"}`,
  color: isSelected ? TEXT.primary : TEXT.secondary,
});

const dotStyle = (isSelected) => ({
  width: 6,
  height: 6,
  borderRadius: "50%",
  background: isSelected ? ACCENT : TEXT.hint,
  flexShrink: 0,
});

// Detail panel styles

const detailNameStyle = {
  fontFamily: FONT.display,
  fontSize: 22,
  fontWeight: 700,
  color: TEXT.primary,
  margin: 0,
};

const detailBadgeStyle = (isRelational) => ({
  fontFamily: FONT.mono,
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: isRelational ? SPECTRUM.sky : TEXT.muted,
  background: hexToRgba(isRelational ? SPECTRUM.sky : ACCENT, 0.1),
  padding: "3px 8px",
  borderRadius: RADIUS.sm,
});

const fieldLabelStyle = {
  fontFamily: FONT.mono,
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: TEXT.muted,
  margin: "0 0 4px 0",
};

const fieldValueStyle = {
  fontFamily: FONT.display,
  fontSize: 14,
  lineHeight: 1.6,
  color: TEXT.secondary,
  margin: 0,
};

const signalValueStyle = {
  ...fieldValueStyle,
  fontWeight: 600,
  color: TEXT.primary,
  fontSize: 15,
};

const signatureBoxStyle = {
  padding: "10px 14px",
  background: hexToRgba(ACCENT, 0.04),
  border: `1px solid ${hexToRgba(ACCENT, 0.1)}`,
  borderRadius: RADIUS.sm,
};

const signatureLabelStyle = {
  fontFamily: FONT.mono,
  fontSize: 9,
  fontWeight: 600,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: TEXT.muted,
  margin: "0 0 2px 0",
};

const signatureValueStyle = {
  fontFamily: FONT.display,
  fontSize: 13,
  color: TEXT.secondary,
  margin: 0,
  fontStyle: "italic",
};

const distortionBoxStyle = {
  padding: "12px 14px",
  background: hexToRgba(SPECTRUM.slate, 0.06),
  border: `1px solid ${hexToRgba(SPECTRUM.slate, 0.15)}`,
  borderRadius: RADIUS.sm,
};

const distortionLabelStyle = {
  fontFamily: FONT.mono,
  fontSize: 9,
  fontWeight: 600,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: SPECTRUM.slate,
  margin: "0 0 4px 0",
};

const distortionValueStyle = {
  fontFamily: FONT.display,
  fontSize: 13,
  lineHeight: 1.55,
  color: TEXT.muted,
  margin: 0,
};

// ─── COMPONENT ──────────────────────────────────────

export default function M1EmotionsAsSignals() {
  const [selectedKey, setSelectedKey] = useState("fear");

  const emotion = EMOTIONS.find((e) => e.key === selectedKey);
  const isRelational = emotion.type === "relational";
  const group = BODY_SIGNATURE_GROUPS.find((g) => g.emotions.includes(selectedKey));
  const distortion = emotion.distortedBy
    ? DISTORTIONS.find((d) => d.key === emotion.distortedBy)
    : null;

  const restorationLabel =
    emotion.restorationType === "somatic or relational"
      ? "somatic / relational"
      : emotion.restorationType;

  return (
    <section
      aria-label="The Signal Map — select an emotion to see its signal anatomy: what the nervous system detected, the body response, and the restoration pathway"
      style={containerStyle}
    >
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <p style={headerLabelStyle}>M1 · THE SIGNAL MAP</p>
        <p style={headerDescStyle}>
          Select a signal to see its anatomy: what the nervous system detected, what the body does, what restores the cycle.
        </p>
      </div>

      {/* Two-column layout */}
      <div style={layoutStyle}>

        {/* Left: Selector */}
        <div>
          {/* Somatic */}
          <p style={typeDividerStyle(false)}>Somatic</p>
          {SOMATIC.map((g) => (
            <div key={g.key}>
              <p style={groupLabelStyle}>{g.label}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {g.emotions.map((key) => {
                  const e = EMOTIONS.find((em) => em.key === key);
                  if (!e) return null;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedKey(key)}
                      aria-pressed={selectedKey === key}
                      style={buttonStyle(selectedKey === key)}
                    >
                      <span style={dotStyle(selectedKey === key)} />
                      {e.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Relational */}
          <p style={typeDividerStyle(true)}>Relational</p>
          {RELATIONAL.map((g) => (
            <div key={g.key}>
              <p style={groupLabelStyle}>{g.label}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {g.emotions.map((key) => {
                  const e = EMOTIONS.find((em) => em.key === key);
                  if (!e) return null;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedKey(key)}
                      aria-pressed={selectedKey === key}
                      style={buttonStyle(selectedKey === key)}
                    >
                      <span style={dotStyle(selectedKey === key)} />
                      {e.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Detail panel */}
        <div>
          {/* Name + badge */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
            <h4 style={detailNameStyle}>{emotion.name}</h4>
            <span style={detailBadgeStyle(isRelational)}>
              Restoration: {restorationLabel}
            </span>
          </div>

          {/* Signal */}
          <div style={{ marginBottom: 16 }}>
            <p style={fieldLabelStyle}>Signal</p>
            <p style={signalValueStyle}>{emotion.signal}</p>
          </div>

          {/* Body Response */}
          <div style={{ marginBottom: 16 }}>
            <p style={fieldLabelStyle}>Body Response</p>
            <p style={fieldValueStyle}>{emotion.bodyResponse}</p>
          </div>

          {/* Restoration Pathway */}
          <div style={{ marginBottom: 20 }}>
            <p style={fieldLabelStyle}>Restoration Pathway</p>
            <p style={fieldValueStyle}>{emotion.restorationNeeds}</p>
          </div>

          {/* Body Signature Group */}
          {group && (
            <div style={{ ...signatureBoxStyle, marginBottom: distortion ? 16 : 0 }}>
              <p style={signatureLabelStyle}>Body Signature Group</p>
              <p style={signatureValueStyle}>{group.label} — {group.signature}</p>
            </div>
          )}

          {/* Distortion note */}
          {distortion && (
            <div style={distortionBoxStyle}>
              <p style={distortionLabelStyle}>When signal can{"'"}t be received</p>
              <p style={distortionValueStyle}>
                <strong style={{ color: TEXT.secondary }}>→ {distortion.name}.</strong>{" "}
                {distortion.description.split(".")[0]}.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
