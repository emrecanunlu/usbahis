import Image from "next/image";
import Link from "next/link";
import { GAMES } from "@/lib/games";

export function GameTypes() {
  return (
    <section className="border-b border-soft bg-surface-2">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-soft pb-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              UsBahis&apos;te Hangi Oyunlar Var?
            </h2>
            <p className="mt-2 text-[15px] leading-7 text-body">
              Spor bahsinden canlı casinoya, slotlardan crash oyunlarına 6 ana
              kategori. Her oyun türünün detay sayfası için kartlara tıkla.
            </p>
          </div>
          <Link
            href="/oyunlar"
            className="inline-flex h-10 items-center rounded-md border border-soft px-4 text-sm font-medium text-body transition-colors hover:border-pink/40 hover:text-pink"
          >
            Tüm Oyunları Gör
          </Link>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                  <span className="absolute top-3 right-3 rounded-full border border-pink/40 bg-black/50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--pink-soft)] backdrop-blur">
                    {g.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold tracking-tight text-white transition-colors group-hover:text-pink">
                    {g.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted">{g.subtitle}</p>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-body">
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
      </div>
    </section>
  );
}
