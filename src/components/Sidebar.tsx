import Link from "next/link";
import { SITE } from "@/lib/site";
import { getAllPosts, formatDate } from "@/lib/posts";

type SidebarProps = {
  /** compact: yalnızca giriş kutusu — kısa içerik yanında */
  variant?: "compact" | "default";
};

export function Sidebar({ variant = "default" }: SidebarProps) {
  if (variant === "compact") {
    return (
      <aside className="self-start lg:sticky lg:top-20">
        <LoginBox />
      </aside>
    );
  }

  const recent = getAllPosts().slice(0, 3);

  return (
    <aside className="space-y-5 self-start lg:sticky lg:top-20">
      <LoginBox />
      <SidebarBox title="Son Yazılar">
        <ul className="space-y-3">
          {recent.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group block">
                <span className="text-sm font-medium leading-5 text-white transition-colors group-hover:text-pink">
                  {p.title}
                </span>
                <span className="mt-1 block text-xs text-muted">
                  {formatDate(p.date)} · {p.readingTime} dk
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/blog"
          className="mt-3 block text-center text-xs font-semibold text-pink transition-colors hover:text-[var(--pink-soft)]"
        >
          Tüm yazılar →
        </Link>
      </SidebarBox>
    </aside>
  );
}

function LoginBox() {
  return (
    <SidebarBox title="UsBahis Giriş">
      <p className="text-sm leading-6 text-body">
        Güncel adres:{" "}
        <strong className="text-white">{SITE.domain}</strong>
      </p>
      <a
        href={SITE.loginUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex h-11 w-full cursor-pointer items-center justify-center rounded-md btn-primary px-4 text-sm font-semibold text-white transition-transform active:translate-y-px"
      >
        Güncel Giriş Yap
      </a>
      <a
        href={SITE.telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md btn-secondary"
      >
        <TelegramIcon />
        Telegram
      </a>
    </SidebarBox>
  );
}

function SidebarBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-soft bg-surface p-5">
      <h3 className="font-display mb-3 border-b border-soft pb-2.5 text-sm font-bold uppercase tracking-wider text-white">
        {title}
      </h3>
      {children}
    </section>
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
