import { SITE } from "@/lib/site";

export function FloatingCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-40 flex justify-center px-4 sm:bottom-5">
      <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-surface-3/90 p-1.5  ring-1 ring-pink/20 backdrop-blur">
        <a
          href={SITE.registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-full btn-primary px-4 text-sm font-semibold text-white transition-transform active:translate-y-px sm:px-5"
        >
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
          <span className="hidden sm:inline">UsBahis Üye Ol</span>
          <span className="sm:hidden">Üye Ol</span>
        </a>
        <a
          href={SITE.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram kanalı"
          className="inline-flex h-10 cursor-pointer items-center gap-2.5 rounded-full btn-secondary px-3.5 text-sm font-semibold sm:gap-3 sm:px-5"
        >
          <TelegramIcon />
          <span className="hidden sm:inline">Telegram</span>
        </a>
      </div>
    </div>
  );
}

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M21.94 4.32a1 1 0 0 0-1.34-1.1L2.85 10.04c-.95.36-.95 1.7.02 2.04l4.55 1.6 1.74 5.6c.22.7 1.1.9 1.6.35l2.42-2.62 4.6 3.4c.7.52 1.7.13 1.85-.74l2.3-15.36ZM9.84 13.97l8.04-7.13-6.36 8.5-1.68 5.6-.72-5.6Z" />
    </svg>
  );
}
