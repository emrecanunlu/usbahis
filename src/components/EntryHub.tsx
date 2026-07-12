import Link from "next/link";
import { ENTRY_LINKS, SITE } from "@/lib/site";

export function EntryHub() {
  return (
    <section className="border-b border-soft bg-surface-2">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
          {SITE.name} Giriş ve Erişim Rehberleri
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-body sm:text-[15px]">
          Güncel giriş, Telegram kanalı, mobil erişim, kayıt ve Papara yatırım
          için resmi rehber sayfaları. Kalıcı link:{" "}
          <strong className="text-white">{SITE.domain}</strong>
        </p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {ENTRY_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-2 rounded-xl border border-soft bg-surface px-4 py-3 text-sm font-medium text-body transition-colors hover:border-pink/40 hover:text-pink"
              >
                <span className="text-pink" aria-hidden="true">
                  →
                </span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
