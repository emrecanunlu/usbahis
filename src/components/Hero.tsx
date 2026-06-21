import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-soft">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_50%_-10%,var(--hero-glow-a),transparent_70%),radial-gradient(50%_50%_at_85%_30%,var(--hero-glow-b),transparent_70%)]"
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink/30 bg-pink/10 px-3 py-1 text-xs font-medium text-[var(--pink-soft)]">
            <span className="h-1.5 w-1.5 rounded-full bg-pink" />
            UsBahis Resmi Tanıtım Sitesi
          </span>

          <h1 className="font-display mt-5 text-[26px] font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[52px]">
            Güvenilir{" "}
            <span className="text-gradient-neon">Bahis ve Casino</span>
            <br className="sm:hidden" /> Deneyimi
          </h1>

          <p className="mt-5 text-base leading-7 text-body sm:text-lg">
            Lisanslı canlı spor bahisleri, gerçek krupiyeli casino oyunları,
            5.000&apos;den fazla slot, Aviator ve sanal bahis seçenekleri tek
            platformda. Yüksek oranlar, hızlı para çekme ve 7/24 Türkçe destek
            ile UsBahis ailesine katıl.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
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
              href={SITE.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 cursor-pointer items-center rounded-md border border-white/15 bg-white/[0.03] px-5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.06]"
            >
              Güncel Giriş Adresi
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <li className="inline-flex items-center gap-2">
              <CheckIcon /> Curaçao Lisanslı
            </li>
            <li className="inline-flex items-center gap-2">
              <CheckIcon /> %100 Hoş Geldin Bonusu
            </li>
            <li className="inline-flex items-center gap-2">
              <CheckIcon /> 3 dakikada para çekim
            </li>
            <li className="inline-flex items-center gap-2">
              <CheckIcon /> 7/24 Türkçe destek
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 text-pink"
      aria-hidden="true"
    >
      <path
        d="m5 12 5 5L20 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
