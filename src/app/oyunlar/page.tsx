import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { Sidebar } from "@/components/Sidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { GAMES } from "@/lib/games";
import { buildMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Oyunlar",
  description:
    "UsBahis'in tüm oyun kategorileri: canlı spor bahisleri, canlı casino, slot oyunları, Aviator, sanal bahis ve e-spor. Her kategori için detaylı tanıtım sayfaları.",
  path: "/oyunlar",
  keywords: ["UsBahis oyunlar", "canlı bahis", "slot", "Aviator"],
});

export default function GamesIndex() {
  return (
    <>
      <Header />
      <JsonLd
        data={[
          webPageJsonLd({
            title: "UsBahis Oyunları",
            description: "Canlı bahis, casino, slot ve Aviator kategorileri",
            path: "/oyunlar",
          }),
          breadcrumbJsonLd([
            { name: "Anasayfa", path: "/" },
            { name: "Oyunlar", path: "/oyunlar" },
          ]),
        ]}
      />
      <main className="flex-1">
        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <Breadcrumbs
              items={[{ label: "Anasayfa", href: "/" }, { label: "Oyunlar" }]}
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-pink/30 bg-pink/10 px-3 py-1 text-xs font-medium text-[var(--pink-soft)]">
              <span className="h-1.5 w-1.5 rounded-full bg-pink" />
              Oyun Kategorileri
            </span>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              UsBahis Oyunları
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-body">
              Canlı spor bahisleri, gerçek krupiyeli casino, 5.000+ slot,
              Aviator, sanal bahisler ve e-spor. Her kategorinin detaylarını
              kartlara tıklayarak inceleyebilirsin.
            </p>
          </div>
        </section>

        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
              <ul className="grid gap-5 sm:grid-cols-2">
                {GAMES.map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={`/oyunlar/${g.slug}`}
                      className="group block h-full overflow-hidden rounded-2xl border border-soft bg-surface transition-colors hover:border-pink/40"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={g.image}
                          alt={g.title}
                          fill
                          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                        <span className="absolute top-3 right-3 rounded-full border border-pink/40 bg-black/50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--pink-soft)] backdrop-blur">
                          {g.badge}
                        </span>
                      </div>
                      <div className="p-5">
                        <h2 className="font-display text-lg font-bold tracking-tight text-white transition-colors group-hover:text-pink">
                          {g.title}
                        </h2>
                        <p className="mt-1 text-xs text-muted">{g.subtitle}</p>
                        <p className="mt-3 text-sm leading-6 text-body">
                          {g.short}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-pink">
                          Detaylı incele
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          >
                            <path
                              d="M5 12h14m0 0-6-6m6 6-6 6"
                              stroke="currentColor"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <Sidebar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
