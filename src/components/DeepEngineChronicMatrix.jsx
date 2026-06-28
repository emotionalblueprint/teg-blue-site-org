import {
  PUBLIC_CHRONIC_CONFIGURATIONS,
  atlasCellParts,
} from "@/src/data/deep-engine-data";
import { TEXT, BORDER, FONT, RADIUS, MODEL_COLORS, hexToRgba } from "@/src/styles/tokens";

const VARIANTS = {
  m2States: {
    eyebrow: "Chronic configurations",
    title: "Seven chronic positions",
    intro:
      "The chronic layer follows the seven nervous-system positions directly: baseline, connection, transition, protection, control / management, domination, and shutdown.",
    columns: [
      { label: "Position", key: "position" },
      { label: "Chronic reading", key: "chronicLabel" },
      { label: "State pattern", key: "state" },
      { label: "Body capacity", key: "physiologicalCapacity" },
    ],
  },
  m2Perception: {
    eyebrow: "Locked perception",
    title: "State-locked perception by position",
    intro:
      "Chronic perception is not generic projection. Each position locks a different filter before cognition builds its explanation.",
    columns: [
      { label: "Position", key: "position" },
      { label: "Perception", key: "perception" },
      { label: "Action pressure", key: "actionReadiness" },
      { label: "Chronic reading", key: "chronicLabel" },
    ],
  },
  m3Routing: {
    eyebrow: "Chronic routing",
    title: "Relief is not completion",
    intro:
      "M3 names what route is needed, whether restoration can land, and how incompletion carries into the next cycle.",
    columns: [
      { label: "Position", key: "position" },
      { label: "Regulation needed", key: "regulationNeeded" },
      { label: "Restoration", key: "restoration" },
      { label: "Completion", key: "completion" },
    ],
  },
  m4Access: {
    eyebrow: "Chronic access",
    title: "Awareness, empathy, and differentiation under chronic configuration",
    intro:
      "M4/AEC reads how chronic state gates self-read, other-read, and the boundary between self and other.",
    columns: [
      { label: "Position", key: "position" },
      { label: "Awareness access", key: "awarenessAccess" },
      { label: "Empathy access", key: "empathyAccess" },
      { label: "Self-other differentiation", key: "selfOtherDifferentiation" },
    ],
  },
};

function cellContent(config, columnKey) {
  if (columnKey === "position") {
    return {
      lead: config.positionLabel,
      sub: config.atlasLabel,
      note: config.familiar || config.autonomic,
    };
  }
  return atlasCellParts(config[columnKey]);
}

function MatrixCell({ config, column }) {
  const { lead, sub, note } = cellContent(config, column.key);
  return (
    <td
      style={{
        verticalAlign: "top",
        padding: "13px 14px",
        borderTop: `1px solid ${BORDER.default}`,
        borderLeft: column.key === "position" ? `3px solid ${config.chronicColor}` : `1px solid ${BORDER.default}`,
        background: column.key === "position" ? hexToRgba(config.chronicColor, 0.035) : "transparent",
      }}
    >
      <div
        style={{
          color: column.key === "position" ? config.chronicColor : TEXT.primary,
          fontWeight: column.key === "position" ? 700 : 650,
          fontSize: column.key === "position" ? 12.5 : 13,
          lineHeight: 1.45,
        }}
      >
        {lead}
      </div>
      {sub && (
        <div
          style={{
            marginTop: 5,
            color: TEXT.secondary,
            fontSize: 12,
            lineHeight: 1.55,
          }}
        >
          {sub}
        </div>
      )}
      {note && (
        <div
          style={{
            marginTop: 6,
            color: TEXT.muted,
            fontSize: 11.5,
            lineHeight: 1.55,
            fontStyle: "italic",
          }}
        >
          {note}
        </div>
      )}
    </td>
  );
}

export default function DeepEngineChronicMatrix({ variant = "m2States", color = MODEL_COLORS.M2 }) {
  const config = VARIANTS[variant] || VARIANTS.m2States;

  return (
    <section
      style={{
        margin: "22px 0",
        borderRadius: RADIUS.lg,
        border: `1px solid ${hexToRgba(color, 0.18)}`,
        background: hexToRgba(color, 0.025),
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "18px 18px 14px" }}>
        <div
          style={{
            marginBottom: 7,
            fontFamily: FONT.mono,
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color,
          }}
        >
          {config.eyebrow}
        </div>
        <h3
          style={{
            margin: 0,
            color: TEXT.primary,
            fontSize: 18,
            lineHeight: 1.25,
          }}
        >
          {config.title}
        </h3>
        <p
          style={{
            margin: "8px 0 0",
            maxWidth: 760,
            color: TEXT.secondary,
            fontSize: 13.5,
            lineHeight: 1.65,
          }}
        >
          {config.intro}
        </p>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            minWidth: variant === "m2States" ? 900 : 980,
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              {config.columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  style={{
                    padding: "10px 14px",
                    textAlign: "left",
                    fontFamily: FONT.mono,
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: TEXT.muted,
                    background: hexToRgba(color, 0.045),
                    borderTop: `1px solid ${hexToRgba(color, 0.12)}`,
                  }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PUBLIC_CHRONIC_CONFIGURATIONS.map((formation) => (
              <tr key={formation.id}>
                {config.columns.map((column) => (
                  <MatrixCell
                    key={column.key}
                    config={formation}
                    column={column}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
