import { ImageResponse } from "next/og";

export const alt = "DegreeNFT - Academic credentials, verified on Solana";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "#f3efe6",
          color: "#11100e",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(17,16,14,0.25)",
            paddingBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#11100e",
                color: "#f3efe6",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              D
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "24px", fontWeight: 700 }}>DegreeNFT</div>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "rgba(17,16,14,0.55)",
                }}
              >
                Academic registry
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "monospace",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "rgba(17,16,14,0.55)",
            }}
          >
            Specimen / 001
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "serif",
              fontSize: "108px",
              fontWeight: 400,
              lineHeight: 0.88,
              letterSpacing: "-5px",
            }}
          >
            Degrees that
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "serif",
              fontSize: "108px",
              fontWeight: 400,
              lineHeight: 0.88,
              letterSpacing: "-5px",
            }}
          >
            <span style={{ color: "#2b2bea", fontStyle: "italic" }}>prove</span>
            <span>&nbsp;themselves.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(17,16,14,0.25)",
            paddingTop: "22px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "monospace",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Issued on Solana / Student owned / Tamper evident
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "monospace",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(17,16,14,0.5)",
              }}
            >
              A permanent record of academic achievement.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "96px",
              height: "96px",
              borderRadius: "999px",
              border: "2px solid #2b2bea",
              color: "#2b2bea",
              fontFamily: "monospace",
              fontSize: "10px",
              lineHeight: 1.3,
              letterSpacing: "1.5px",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Verified
            <br />
            on-chain
          </div>
        </div>
      </div>
    ),
    size,
  );
}
