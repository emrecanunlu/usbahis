import { getAllPosts } from "./posts";
import { GAMES } from "./games";
import { getAllSeoPages } from "./seo-pages";
import { getAllPartners } from "./backlinks";
import { POPULAR_SEARCHES } from "./keywords";

export type SearchResult = {
  id: string;
  title: string;
  url: string;
  excerpt: string;
  type: "blog" | "oyun" | "rehber" | "sayfa" | "partner";
  score: number;
};

const STATIC_PAGES = [
  { title: "Anasayfa", url: "/", excerpt: "UsBahis resmi tanıtım sitesi" },
  { title: "Oyunlar", url: "/oyunlar", excerpt: "Tüm oyun kategorileri" },
  { title: "Blog", url: "/blog", excerpt: "Rehber yazıları ve haberler" },
  { title: "İletişim", url: "/iletisim", excerpt: "Destek ve iletişim formu" },
  {
    title: "Partner Siteler",
    url: "/partner-siteler",
    excerpt: "Önerilen bahis siteleri",
  },
  {
    title: "Rehber",
    url: "/rehber",
    excerpt: "UsBahis SEO rehber sayfaları",
  },
];

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function scoreText(text: string, terms: string[]): number {
  const n = normalize(text);
  let score = 0;
  for (const term of terms) {
    if (n.includes(term)) score += term.length > 3 ? 3 : 1;
  }
  return score;
}

export function searchSite(query: string, limit = 30): SearchResult[] {
  const q = normalize(query.trim());
  if (q.length < 2) return [];

  const terms = q.split(/\s+/).filter(Boolean);
  const results: SearchResult[] = [];

  for (const p of getAllPosts()) {
    const blob = `${p.title} ${p.excerpt} ${p.category} ${p.content} ${(p.keywords ?? []).join(" ")}`;
    const score = scoreText(blob, terms);
    if (score > 0) {
      results.push({
        id: p.slug,
        title: p.title,
        url: `/blog/${p.slug}`,
        excerpt: p.excerpt,
        type: "blog",
        score,
      });
    }
  }

  for (const g of GAMES) {
    const blob = `${g.title} ${g.short} ${g.intro} ${g.subtitle}`;
    const score = scoreText(blob, terms);
    if (score > 0) {
      results.push({
        id: g.slug,
        title: g.title,
        url: `/oyunlar/${g.slug}`,
        excerpt: g.short,
        type: "oyun",
        score,
      });
    }
  }

  for (const s of getAllSeoPages()) {
    const blob = `${s.title} ${s.h1} ${s.description} ${s.keywords.join(" ")}`;
    const score = scoreText(blob, terms);
    if (score > 0) {
      results.push({
        id: s.slug,
        title: s.h1,
        url: `/rehber/${s.slug}`,
        excerpt: s.description,
        type: "rehber",
        score: score + 2,
      });
    }
  }

  for (const p of getAllPartners()) {
    const blob = `${p.name} ${p.description} ${p.badge ?? ""}`;
    const score = scoreText(blob, terms);
    if (score > 0) {
      results.push({
        id: p.slug,
        title: p.name,
        url: p.url,
        excerpt: p.description,
        type: "partner",
        score,
      });
    }
  }

  for (const page of STATIC_PAGES) {
    const score = scoreText(`${page.title} ${page.excerpt}`, terms);
    if (score > 0) {
      results.push({
        id: page.url,
        title: page.title,
        url: page.url,
        excerpt: page.excerpt,
        type: "sayfa",
        score,
      });
    }
  }

  return results.sort((a, b) => b.score - a.score).slice(0, limit);
}

export function getPopularSearches(): string[] {
  return [...POPULAR_SEARCHES];
}
