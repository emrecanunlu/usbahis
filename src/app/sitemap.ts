import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { getAllPosts } from "@/lib/posts";
import { GAMES } from "@/lib/games";
import { getAllSeoPages } from "@/lib/seo-pages";

export const revalidate = 86400;

function parseDate(dateInput?: string | Date): Date {
  if (!dateInput) return new Date();
  const d = new Date(dateInput);
  return isNaN(d.getTime()) ? new Date() : d;
}

function rehberPriority(slug: string): number {
  if (
    /(-giris|-guncel-adres|-guncel-giris|-yeni-adres|-telegram-giris|-kayit-ol)$/.test(
      slug,
    )
  )
    return 1.0;
  if (/(-mobil-giris|-papara-yatirim)$/.test(slug)) return 0.98;
  if (/(-bonus|-guvenilir-mi|-ucretsiz-bonus)$/.test(slug)) return 0.92;
  return 0.85;
}

function rehberFrequency(slug: string): "daily" | "weekly" {
  return rehberPriority(slug) >= 0.98 ? "daily" : "weekly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: absoluteUrl("/rehber"), lastModified: now, changeFrequency: "daily", priority: 0.95 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "daily", priority: 0.90 },
    { url: absoluteUrl("/oyunlar"), lastModified: now, changeFrequency: "daily", priority: 0.90 },
    { url: absoluteUrl("/partner-siteler"), lastModified: now, changeFrequency: "weekly", priority: 0.80 },
    { url: absoluteUrl("/iletisim"), lastModified: now, changeFrequency: "monthly", priority: 0.70 },
  ];

  const rehberRoutes: MetadataRoute.Sitemap = getAllSeoPages().map((p) => ({
    url: absoluteUrl(`/rehber/${p.slug}`),
    lastModified: parseDate(p.updatedAt),
    changeFrequency: rehberFrequency(p.slug),
    priority: rehberPriority(p.slug),
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((p) => {
    const isEntryRelated = p.slug.includes("giris") || p.slug.includes("adres");
    return {
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: parseDate(p.date),
      changeFrequency: isEntryRelated ? ("weekly" as const) : ("monthly" as const),
      priority: isEntryRelated ? 0.88 : 0.75,
    };
  });

  const gameRoutes: MetadataRoute.Sitemap = GAMES.map((g) => {
    const isTopGame = [
      "spor-bahisleri",
      "canli-casino",
      "slot-oyunlari",
      "aviator-crash",
    ].includes(g.slug);
    return {
      url: absoluteUrl(`/oyunlar/${g.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: isTopGame ? 0.85 : 0.80,
    };
  });

  const allRoutes = [...staticRoutes, ...rehberRoutes, ...blogRoutes, ...gameRoutes];

  const uniqueRoutes = Array.from(
    new Map(allRoutes.map((route) => [route.url, route])).values(),
  );

  return uniqueRoutes;
}

