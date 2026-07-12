import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import { getAllPosts } from "@/lib/posts";
import { getAllSeoPages } from "@/lib/seo-pages";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts().slice(0, 15);
  const rehber = getAllSeoPages()
    .filter((p) =>
      /giris|guncel|kayit|telegram|papara|bonus/.test(p.slug),
    )
    .slice(0, 10);

  const items = [
    ...posts.map((p) => ({
      title: p.title,
      link: absoluteUrl(`/blog/${p.slug}`),
      description: p.excerpt,
      pubDate: new Date(p.date).toUTCString(),
      guid: absoluteUrl(`/blog/${p.slug}`),
    })),
    ...rehber.map((p) => ({
      title: p.title,
      link: absoluteUrl(`/rehber/${p.slug}`),
      description: p.description,
      pubDate: new Date(p.updatedAt).toUTCString(),
      guid: absoluteUrl(`/rehber/${p.slug}`),
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${SITE.name} — Giriş, Bonus ve Rehberler</title>
  <link>${absoluteUrl("/")}</link>
  <description>${SITE.name} resmi tanıtım sitesi. Güncel giriş, bonus ve casino rehberleri.</description>
  <language>tr</language>
  <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml"/>
  ${items
    .map(
      (i) => `<item>
    <title><![CDATA[${i.title}]]></title>
    <link>${i.link}</link>
    <description><![CDATA[${i.description}]]></description>
    <pubDate>${i.pubDate}</pubDate>
    <guid isPermaLink="true">${i.guid}</guid>
  </item>`,
    )
    .join("\n  ")}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
