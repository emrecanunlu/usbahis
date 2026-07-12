import Link from "next/link";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden border-b border-soft sm:min-h-0">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_50%_-10%,var(--hero-glow-a),transparent_70%),radial-gradient(50%_50%_at_85%_30%,var(--hero-glow-b),transparent_70%)]"
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink/30 bg-pink/10 px-3 py-1 text-xs font-medium text-[var(--pink-soft)]">
            <span className="h-1.5 w-1.5 rounded-full bg-pink" />
            {SITE.name} Resmi Tanıtım Sitesi — Giriş 2026
          </span>

          <h1 className="font-display mt-5 text-[36px] font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[48px]">
            {SITE.name}{" "}
            <span className="text-pink">Giriş</span>
            <br className="hidden sm:block" />
            <span className="text-white"> — Güncel Adres 2026</span>
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={SITE.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-md btn-primary px-6 text-sm font-semibold text-white transition-transform active:translate-y-px"
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
              href={SITE.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 cursor-pointer items-center rounded-md border border-white/15 bg-white/[0.03] px-5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.06]"
            >
              Güncel Giriş Adresi
            </a>
            <Link
              href={`/rehber/${SITE.brandSlug}-giris`}
              className="inline-flex h-12 items-center rounded-md border border-pink/30 bg-pink/10 px-5 text-sm font-medium text-[var(--pink-soft)] transition-colors hover:border-pink/50 hover:bg-pink/15"
            >
              Giriş Rehberi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
