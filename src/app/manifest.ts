import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.tagline}`,
    short_name: SITE.name,
    description:
      "UsBahis resmi tanıtım sitesi. Güncel giriş, bonuslar, rehberler ve partner siteler.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070e",
    theme_color: "#db0000",
    lang: SITE.language,
    icons: [
      {
        src: "/images/favicon.png",
        sizes: "100x100",
        type: "image/png",
      },
    ],
  };
}
