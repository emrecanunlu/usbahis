"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Props = {
  compact?: boolean;
  defaultValue?: string;
  placeholder?: string;
};

export function SearchForm({
  compact = false,
  defaultValue = "",
  placeholder = "Site içinde ara…",
}: Props) {
  const router = useRouter();
  const [q, setQ] = useState(defaultValue);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = q.trim();
    if (trimmed.length < 2) return;
    router.push(`/arama?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      role="search"
      className={compact ? "w-full max-w-xs" : "w-full"}
    >
      <label htmlFor={compact ? "header-search" : "page-search"} className="sr-only">
        Ara
      </label>
      <div className="relative flex items-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="pointer-events-none absolute left-3 h-4 w-4 text-[var(--placeholder)]"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          id={compact ? "header-search" : "page-search"}
          type="search"
          name="q"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
          minLength={2}
          className={
            compact
              ? "h-10 w-full rounded-md border border-soft bg-background py-2 pr-3 pl-9 text-sm text-white placeholder:text-[var(--placeholder)] outline-none transition-colors focus:border-pink/50 focus:ring-2 focus:ring-pink/20"
              : "h-12 w-full rounded-xl border border-soft bg-surface py-3 pr-4 pl-10 text-base text-white placeholder:text-[var(--placeholder)] outline-none transition-colors focus:border-pink/50 focus:ring-2 focus:ring-pink/20"
          }
        />
        {!compact && (
          <button
            type="submit"
            className="absolute right-2 inline-flex h-8 cursor-pointer items-center rounded-md btn-primary px-3 text-xs font-semibold text-white transition-transform active:translate-y-px"
          >
            Ara
          </button>
        )}
      </div>
    </form>
  );
}
