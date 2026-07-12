import { SITE, SEO_LINKS } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.name} — ${SITE.tagline}. Lisanslı canlı bahis, casino, slot ve Aviator; güncel giriş, bonuslar ve 7/24 Türkçe destek.`,
    "",
    `Güncel giriş: ${SITE.loginUrl}`,
    `Telegram: ${SITE.telegramUrl}`,
    `İletişim: ${SITE.supportEmail}`,
    "",
    "## Rehberler",
    ...SEO_LINKS.map((l) => `- ${l.label}: ${absoluteUrl(l.href)}`),
    "",
    "## Sayfalar",
    `- Anasayfa: ${absoluteUrl("/")}`,
    `- Oyunlar: ${absoluteUrl("/oyunlar")}`,
    `- Blog: ${absoluteUrl("/blog")}`,
    `- Rehber: ${absoluteUrl("/rehber")}`,
    `- Partner Siteler: ${absoluteUrl("/partner-siteler")}`,
    `- İletişim: ${absoluteUrl("/iletisim")}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
