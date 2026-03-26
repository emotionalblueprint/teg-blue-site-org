import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Awareness Capacities — Model M4 | TEG-Blue";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
        {/* Spectrum bar */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "6px",
            background: "linear-gradient(90deg, #60a5fa, #3b82f6, #2563eb, #1d4ed8)",
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
                color: "#3560CC",
                backgroundColor: "rgba(53, 96, 204, 0.15)",
                border: "1px solid rgba(53, 96, 204, 0.3)",
              }}
            >
              MODEL M4
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
            Awareness Capacities
          </div>

          {/* Subtitle */}
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
            RE, ER, SEA
          </div>
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
            teg-blue.org/model/m4-awareness-capacities
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "14px",
              fontWeight: 600,
              color: "#3560CC",
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
