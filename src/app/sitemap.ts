import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { getAllPosts } from "@/lib/posts";
import { GAMES } from "@/lib/games";
import { getAllSeoPages } from "@/lib/seo-pages";

function rehberPriority(slug: string): number {
  if (
    /(-giris|-guncel-adres|-guncel-giris|-yeni-adres|-telegram-giris|-kayit-ol)$/.test(
      slug,
    )
  )
    return 1;
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
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: absoluteUrl("/rehber"), lastModified: now, changeFrequency: "daily", priority: 0.99 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: absoluteUrl("/oyunlar"), lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: absoluteUrl("/partner-siteler"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/iletisim"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const posts = getAllPosts().map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: p.slug.includes("giris") ? 0.88 : 0.75,
  }));

  const games = GAMES.map((g) => ({
    url: absoluteUrl(`/oyunlar/${g.slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const rehber = getAllSeoPages().map((p) => ({
    url: absoluteUrl(`/rehber/${p.slug}`),
    lastModified: new Date(p.updatedAt),
    changeFrequency: rehberFrequency(p.slug),
    priority: rehberPriority(p.slug),
  }));

  return [...staticRoutes, ...rehber, ...posts, ...games];
}
