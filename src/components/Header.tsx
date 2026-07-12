import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { MobileMenu } from "./MobileMenu";
import { SITE, HEADER_NAV } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-soft bg-surface/95">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          aria-label="UsBahis anasayfa"
          className="flex shrink-0 items-center"
        >
          <BrandMark />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Ana menü"
        >
          {HEADER_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-body transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/arama"
            aria-label="Site içi arama"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-soft text-body transition-colors hover:bg-white/[0.04] hover:text-white"
          >
            <SearchIcon />
          </Link>
          <a
            href={SITE.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram kanalı"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md btn-secondary"
          >
            <TelegramIcon />
          </a>
          <a
            href={SITE.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 cursor-pointer items-center rounded-md btn-primary px-4 text-sm font-semibold text-white  transition-transform active:translate-y-px sm:inline-flex"
          >
            Üye Ol
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="m20 20-3.5-3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M21.94 4.32a1 1 0 0 0-1.34-1.1L2.85 10.04c-.95.36-.95 1.7.02 2.04l4.55 1.6 1.74 5.6c.22.7 1.1.9 1.6.35l2.42-2.62 4.6 3.4c.7.52 1.7.13 1.85-.74l2.3-15.36ZM9.84 13.97l8.04-7.13-6.36 8.5-1.68 5.6-.72-5.6Z" />
    </svg>
  );
}
