import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { Sidebar } from "@/components/Sidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { GAMES, getGameBySlug, getOtherGames } from "@/lib/games";
import { SITE } from "@/lib/site";
import {
  buildMetadata,
  breadcrumbJsonLd,
  faqJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { getGameKeywords } from "@/lib/keywords";

export function generateStaticParams() {
  return GAMES.map((g) => ({ slug: g.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return { title: "Oyun bulunamadı" };
  return buildMetadata({
    title: game.title,
    description: game.intro.slice(0, 160),
    path: `/oyunlar/${slug}`,
    keywords: getGameKeywords(slug),
    ogImage: game.image,
  });
}

export default async function GameDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();
  const others = getOtherGames(slug).slice(0, 3);

  return (
    <>
      <Header />
      <JsonLd
        data={[
          webPageJsonLd({
            title: game.title,
            description: game.intro.slice(0, 160),
            path: `/oyunlar/${slug}`,
          }),
          breadcrumbJsonLd([
            { name: "Anasayfa", path: "/" },
            { name: "Oyunlar", path: "/oyunlar" },
            { name: game.title, path: `/oyunlar/${slug}` },
          ]),
          ...(game.faq.length > 0 ? [faqJsonLd(game.faq)] : []),
        ]}
      />
      <main className="flex-1">
        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
            <Breadcrumbs
              items={[
                { label: "Anasayfa", href: "/" },
                { label: "Oyunlar", href: "/oyunlar" },
                { label: game.title },
              ]}
            />

            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-pink/30 bg-pink/10 px-3 py-1 text-xs font-medium text-[var(--pink-soft)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink" />
                  {game.badge}
                </span>
                <h1 className="font-display mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {game.title}
                </h1>
                <p className="mt-2 text-sm font-medium text-muted">
                  {game.subtitle}
                </p>
                <p className="mt-5 text-[15px] leading-7 text-body">
                  {game.intro}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={SITE.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-md btn-primary px-6 text-sm font-semibold text-white  transition-transform active:translate-y-px"
                  >
                    Hemen Üye Ol
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
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
                  </a>
                  <a
                    href={SITE.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-md btn-secondary"
                  >
                    <TelegramIcon />
                    Telegram
                  </a>
                </div>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-soft">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
                <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
              <div className="space-y-12">
                <article>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Öne Çıkan Özellikler
                  </h2>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {game.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2.5 rounded-xl border border-soft bg-surface p-4 text-sm leading-6 text-body"
                      >
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-pink/15 text-pink">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-3 w-3"
                            aria-hidden="true"
                          >
                            <path
                              d="m5 12 5 5L20 7"
                              stroke="currentColor"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Popüler Seçenekler
                  </h2>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {game.popular.map((p) => (
                      <li
                        key={p.name}
                        className="rounded-xl border border-soft bg-surface p-4"
                      >
                        <div className="font-display font-bold text-white">
                          {p.name}
                        </div>
                        <p className="mt-1 text-sm leading-5 text-muted">
                          {p.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </article>

                <article>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Sağlayıcılar
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {game.providers.map((p) => (
                      <li
                        key={p}
                        className="rounded-full border border-soft bg-surface px-3.5 py-1.5 text-sm text-body"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>

                {game.faq.length > 0 && (
                  <article>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Sıkça Sorulanlar
                    </h2>
                    <div className="mt-4 overflow-hidden rounded-2xl border border-soft bg-surface">
                      {game.faq.map((item, i) => (
                        <details
                          key={item.q}
                          className="group border-b border-soft last:border-b-0 [&_summary::-webkit-details-marker]:hidden"
                          open={i === 0}
                        >
                          <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-white/[0.02]">
                            <span className="font-display text-base font-semibold text-white">
                              {item.q}
                            </span>
                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-pink/30 bg-pink/10 text-pink transition-transform group-open:rotate-45">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-4 w-4"
                                aria-hidden="true"
                              >
                                <path
                                  d="M12 5v14M5 12h14"
                                  stroke="currentColor"
                                  strokeWidth="2.2"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </span>
                          </summary>
                          <div className="px-5 pb-5">
                            <p className="text-sm leading-7 text-body">
                              {item.a}
                            </p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </article>
                )}

                <div className="rounded-2xl border border-pink/30 bg-gradient-to-br from-pink/[0.08] to-violet-500/[0.05] p-6">
                  <h3 className="font-display text-lg font-bold text-white">
                    {game.title} oynamaya hazır mısın?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-body">
                    UsBahis&apos;e üye ol, %100 hoş geldin bonusunu al ve
                    hemen oynamaya başla. Güncel kampanyaları kaçırmamak için
                    Telegram kanalımıza katıl.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={SITE.registerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 cursor-pointer items-center rounded-md btn-primary px-5 text-sm font-semibold text-white transition-transform active:translate-y-px"
                    >
                      Üye Ol
                    </a>
                    <a
                      href={SITE.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-md btn-secondary"
                    >
                      <TelegramIcon />
                      Telegram&apos;a Katıl
                    </a>
                  </div>
                </div>
              </div>

              <Sidebar />
            </div>
          </div>
        </section>

        {others.length > 0 && (
          <section className="border-b border-soft bg-surface-2">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
              <h2 className="font-display border-b border-soft pb-3 text-xl font-bold tracking-tight text-white sm:text-2xl">
                Diğer Oyun Kategorileri
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/oyunlar/${o.slug}`}
                      className="group block h-full overflow-hidden rounded-2xl border border-soft bg-surface transition-colors hover:border-pink/40"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={o.image}
                          alt={o.title}
                          fill
                          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-display text-base font-bold text-white transition-colors group-hover:text-pink">
                          {o.title}
                        </h3>
                        <p className="mt-1 text-xs text-muted">
                          {o.subtitle}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M21.94 4.32a1 1 0 0 0-1.34-1.1L2.85 10.04c-.95.36-.95 1.7.02 2.04l4.55 1.6 1.74 5.6c.22.7 1.1.9 1.6.35l2.42-2.62 4.6 3.4c.7.52 1.7.13 1.85-.74l2.3-15.36ZM9.84 13.97l8.04-7.13-6.36 8.5-1.68 5.6-.72-5.6Z" />
    </svg>
  );
}
