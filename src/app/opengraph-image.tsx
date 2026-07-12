import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#05070e";
const ACCENT = "#db0000";

export default function Image() {
  const domain = SITE.promoUrl
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
  const pills = ["Güncel Giriş", "Bonus", "Canlı Casino"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: BG,
          borderBottom: `20px solid ${ACCENT}`,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              border: `2px solid ${ACCENT}`,
              color: "#ffffff",
              borderRadius: "999px",
              padding: "10px 24px",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            RESMİ TANITIM SİTESİ
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 130,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            {SITE.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 46,
              fontWeight: 600,
              color: ACCENT,
            }}
          >
            {SITE.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#cbd5e1",
              fontWeight: 600,
            }}
          >
            {domain}
          </div>
          <div style={{ display: "flex" }}>
            {pills.map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  marginLeft: 14,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "#ffffff",
                  borderRadius: "12px",
                  padding: "10px 18px",
                  fontSize: 26,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
