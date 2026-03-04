import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Neurodivergence as Nervous System Variation — F9 Framework | TEG-Blue";
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
                color: "#3b82f6",
                backgroundColor: "rgba(59, 130, 246, 0.15)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
              }}
            >
              FRAMEWORK F9
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: "44px",
              fontWeight: 700,
              color: "#e2e8f0",
              lineHeight: 1.2,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Neurodivergence as Nervous System Variation
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
            When the Environment Is the Mismatch
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
            teg-blue.org/framework/f9-neurodivergence-variation
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "14px",
              fontWeight: 600,
              color: "#3b82f6",
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
