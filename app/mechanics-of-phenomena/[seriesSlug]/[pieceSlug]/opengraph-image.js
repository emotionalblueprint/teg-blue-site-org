import { ImageResponse } from "next/og";
import { SERIES } from "../../mechanics-config";

export const runtime = "edge";
export const alt = "Mechanics of Phenomena | TEG-Blue";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Amber palette — hardcoded hex for edge runtime (source: tokens.js EDITORIAL)
const AMBER_500 = "#f59e0b"; // EDITORIAL.accent
const AMBER_BG = "rgba(245, 158, 11, 0.15)";
const AMBER_BORDER = "rgba(245, 158, 11, 0.3)";

function findPieceForOg(seriesSlug, pieceSlug) {
  for (const series of SERIES) {
    if (series.slug !== seriesSlug) continue;
    const piece = series.pieces.find((p) => p.slug === pieceSlug);
    if (piece) return { piece, series };
  }
  return null;
}

export default function Image({ params }) {
  const { seriesSlug, pieceSlug } = params;
  const found = findPieceForOg(seriesSlug, pieceSlug);

  const title = found ? found.piece.title : "Mechanics of Phenomena";
  const subtitle = found ? found.piece.subtitle : "";
  const seriesName = found ? found.series.name : "";
  const url = `teg-blue.org/mechanics-of-phenomena/${seriesSlug}/${pieceSlug}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#0a0f1a",
          padding: "0",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Amber gradient bar */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "6px",
            background: `linear-gradient(90deg, #fbbf24, ${AMBER_500}, #d97706, #92400e)`,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "60px 80px",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "6px 16px",
                borderRadius: "100px",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: AMBER_500,
                backgroundColor: AMBER_BG,
                border: `1px solid ${AMBER_BORDER}`,
              }}
            >
              {seriesName.toUpperCase()}
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: "48px",
              fontWeight: 700,
              color: "#e2e8f0",
              lineHeight: 1.2,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          {subtitle && (
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 400,
                color: "#94a3b8",
                lineHeight: 1.4,
                fontStyle: "italic",
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 80px 32px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "14px",
              color: "#475569",
              letterSpacing: "0.04em",
            }}
          >
            {url}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "14px",
              fontWeight: 600,
              color: AMBER_500,
              letterSpacing: "0.04em",
            }}
          >
            TEG-Blue Research
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
