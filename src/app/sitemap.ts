import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { getAllPosts } from "@/lib/posts";
import { GAMES } from "@/lib/games";
import { getAllSeoPages } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: absoluteUrl("/oyunlar"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: absoluteUrl("/rehber"), lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: absoluteUrl("/partner-siteler"), lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: absoluteUrl("/iletisim"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const posts = getAllPosts().map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const games = GAMES.map((g) => ({
    url: absoluteUrl(`/oyunlar/${g.slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const rehber = getAllSeoPages().map((p) => ({
    url: absoluteUrl(`/rehber/${p.slug}`),
    lastModified: new Date(p.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

  return [...staticRoutes, ...rehber, ...posts, ...games];
}
