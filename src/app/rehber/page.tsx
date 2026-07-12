import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { Sidebar } from "@/components/Sidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PartnerSites } from "@/components/PartnerSites";
import { JsonLd } from "@/components/JsonLd";
import { getAllSeoPages } from "@/lib/seo-pages";
import { buildMetadata, breadcrumbJsonLd, webPageJsonLd, itemListJsonLd, absoluteUrl } from "@/lib/seo";
import { PAGE_KEYWORDS } from "@/lib/keywords";

export const metadata: Metadata = buildMetadata({
  title: "UsBahis Rehber 2026 | Giriş, Bonus ve Oyun Kılavuzları",
  description:
    "UsBahis rehber: güncel giriş linki, hoş geldin bonusu, canlı bahis, casino, slot, Aviator, mobil giriş ve güvenilirlik incelemesi. Tüm SEO rehber sayfaları.",
  path: "/rehber",
  keywords: [...PAGE_KEYWORDS.rehber],
});

export default function RehberIndex() {
  const pages = getAllSeoPages();

  return (
    <>
      <Header />
      <JsonLd
        data={[
          webPageJsonLd({
            title: "UsBahis Rehber",
            description: "Giriş, bonus ve oyun rehberleri",
            path: "/rehber",
          }),
          breadcrumbJsonLd([
            { name: "Anasayfa", path: "/" },
            { name: "Rehber", path: "/rehber" },
          ]),
          itemListJsonLd(
            pages.map((p) => ({
              name: p.h1,
              url: absoluteUrl(`/rehber/${p.slug}`),
            })),
          ),
        ]}
      />
      <main className="flex-1">
        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <Breadcrumbs
              items={[{ label: "Anasayfa", href: "/" }, { label: "Rehber" }]}
            />
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              UsBahis Rehber Sayfaları
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-body">
              Giriş, bonus, oyun türleri ve güvenilirlik hakkında detaylı SEO
              rehberleri. Her sayfa güncel bilgi ve SSS içerir.
            </p>
          </div>
        </section>

        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
              <ul className="grid gap-4 sm:grid-cols-2">
                {pages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/rehber/${p.slug}`}
                      className="group block h-full rounded-2xl border border-soft bg-surface p-5 transition-colors hover:border-pink/40"
                    >
                      <h2 className="font-display text-lg font-bold leading-snug text-white transition-colors group-hover:text-pink">
                        {p.h1}
                      </h2>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-body">
                        {p.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-pink">
                        Rehberi oku
                        <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                          <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Sidebar />
            </div>
          </div>
        </section>

        <PartnerSites limit={4} title="Öne Çıkan Partner Siteler" />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
