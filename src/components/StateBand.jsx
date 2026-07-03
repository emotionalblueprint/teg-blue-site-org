import {
  BORDER,
  FONT,
  FORMATION,
  REALITY_CHECK_STATES,
  RADIUS,
  SPECTRUM,
  TEXT,
  hexToRgba,
} from "@/src/styles/tokens";

export function StateBand({
  showLabels = false,
  compact = false,
  ariaLabel = "Safety, threat, control, shutdown, regulation, and repair state band",
}) {
  return (
    <div aria-label={ariaLabel} role="img">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${REALITY_CHECK_STATES.length - 1}, minmax(0, 1fr)) minmax(42px, 0.6fr)`,
          gap: compact ? 3 : 5,
          alignItems: "stretch",
        }}
      >
        {REALITY_CHECK_STATES.map((state) => {
          const isShutdown = !state.activeGradient;
          return (
            <span
              key={state.code}
              title={`${state.code}: ${state.mode}`}
              style={{
                display: "block",
                minHeight: compact ? 8 : 14,
                borderRadius: compact ? 2 : RADIUS.sm,
                background: isShutdown ? hexToRgba(state.color, 0.48) : state.color,
                border: isShutdown ? `1px dashed ${hexToRgba(SPECTRUM.sky, 0.46)}` : `1px solid ${hexToRgba(state.color, 0.58)}`,
                boxShadow: isShutdown ? "none" : `0 0 16px ${hexToRgba(state.color, 0.10)}`,
              }}
            />
          );
        })}
      </div>

      {showLabels && (
        <div
          aria-hidden="true"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${REALITY_CHECK_STATES.length - 1}, minmax(0, 1fr)) minmax(42px, 0.6fr)`,
            gap: compact ? 3 : 5,
            marginTop: 7,
            color: TEXT.muted,
            fontFamily: FONT.diagram,
            fontSize: compact ? 8 : 10,
            lineHeight: 1.2,
          }}
        >
          {REALITY_CHECK_STATES.map((state) => (
            <span key={state.code} style={{ textAlign: "center", minWidth: 0 }}>
              {state.code}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function SignalTrace({
  color = SPECTRUM.azure,
  secondaryColor = FORMATION.D,
  label = "Signal trace",
}) {
  return (
    <div
      aria-label={label}
      role="img"
      style={{
        position: "relative",
        minHeight: 54,
        border: `1px solid ${BORDER.default}`,
        borderRadius: RADIUS.md,
        overflow: "hidden",
        background:
          "linear-gradient(90deg, color-mix(in srgb, var(--blue-200) 7%, transparent) 1px, transparent 1px), linear-gradient(0deg, color-mix(in srgb, var(--blue-200) 6%, transparent) 1px, transparent 1px)",
        backgroundSize: "34px 18px",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 12,
          right: 12,
          top: "50%",
          height: 1,
          background: BORDER.default,
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "8%",
          right: "8%",
          top: "50%",
          height: 2,
          borderRadius: 999,
          background: `linear-gradient(90deg, ${hexToRgba(color, 0.20)}, ${color}, ${secondaryColor})`,
          transform: "translateY(-50%)",
        }}
      />
      {[8, 28, 52, 74, 92].map((left, index) => (
        <span
          key={left}
          aria-hidden="true"
          style={{
            position: "absolute",
            left: `${left}%`,
            top: index % 2 === 0 ? "38%" : "58%",
            width: index === 4 ? 9 : 7,
            height: index === 4 ? 9 : 7,
            borderRadius: 999,
            background: index === 4 ? secondaryColor : color,
            boxShadow: `0 0 0 4px ${hexToRgba(index === 4 ? secondaryColor : color, 0.10)}`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
