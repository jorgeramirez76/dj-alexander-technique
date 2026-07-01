import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#08090c",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#c8ff00", fontSize: 28, letterSpacing: 8, textTransform: "uppercase" }}>
          NYC Techno · DJ · Producer
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 24 }}>
          <div style={{ color: "#f4f4f0", fontSize: 128, fontWeight: 800, lineHeight: 1 }}>ALEXANDER</div>
          <div style={{ color: "#c8ff00", fontSize: 128, fontWeight: 800, lineHeight: 1 }}>TECHNIQUE</div>
        </div>
        <div style={{ display: "flex", color: "#a7a9b0", fontSize: 30, marginTop: 40 }}>
          Stripped-down, banging techno for peak-time hours.
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
