import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { SearchForm } from "@/components/SearchForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { searchSite, getPopularSearches } from "@/lib/search";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Site İçi Arama",
  description:
    "UsBahis tanıtım sitesinde arama yapın. Rehber sayfaları, blog yazıları, oyun kategorileri ve partner siteler.",
  path: "/arama",
  noIndex: true,
});

type Props = { searchParams: Promise<{ q?: string }> };

function ResultType({ type }: { type: string }) {
  const labels: Record<string, string> = {
    blog: "Blog",
    oyun: "Oyun",
    rehber: "Rehber",
    sayfa: "Sayfa",
    partner: "Partner",
  };
  return (
    <span className="rounded-full border border-pink/30 bg-pink/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--pink-soft)]">
      {labels[type] ?? type}
    </span>
  );
}

async function SearchResults({ query }: { query: string }) {
  const results = searchSite(query);

  if (results.length === 0) {
    return (
      <div className="rounded-2xl border border-soft bg-surface p-8 text-center">
        <p className="text-body">
          <strong className="text-white">&quot;{query}&quot;</strong> için sonuç
          bulunamadı.
        </p>
        <p className="mt-2 text-sm text-muted">
          Farklı anahtar kelimeler deneyin veya popüler aramalara göz atın.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {results.map((r) => (
        <li key={`${r.type}-${r.id}`}>
          {r.type === "partner" ? (
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-soft bg-surface p-5 transition-colors hover:border-pink/40"
            >
              <div className="flex items-center gap-2">
                <ResultType type={r.type} />
              </div>
              <h2 className="font-display mt-2 text-lg font-bold text-white transition-colors group-hover:text-pink">
                {r.title}
              </h2>
              <p className="mt-1 text-sm leading-6 text-body">
                {r.excerpt}
              </p>
            </a>
          ) : (
            <Link
              href={r.url}
              className="group block rounded-2xl border border-soft bg-surface p-5 transition-colors hover:border-pink/40"
            >
              <div className="flex items-center gap-2">
                <ResultType type={r.type} />
              </div>
              <h2 className="font-display mt-2 text-lg font-bold text-white transition-colors group-hover:text-pink">
                {r.title}
              </h2>
              <p className="mt-1 text-sm leading-6 text-body">
                {r.excerpt}
              </p>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

async function SearchContent({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const popular = getPopularSearches();

  return (
    <>
      <SearchForm
        defaultValue={query}
        placeholder="UsBahis giriş, bonus, casino…"
      />

      {!query && (
        <div className="mt-8">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-muted">
            Popüler Aramalar
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {popular.map((term) => (
              <li key={term}>
                <Link
                  href={`/arama?q=${encodeURIComponent(term)}`}
                  className="inline-flex rounded-full border border-soft bg-surface px-3 py-1.5 text-sm text-body transition-colors hover:border-pink/40 hover:text-pink"
                >
                  {term}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {query.length >= 2 && (
        <div className="mt-8">
          <p className="mb-4 text-sm text-muted">
            <strong className="text-white">&quot;{query}&quot;</strong> için
            arama sonuçları
          </p>
          <SearchResults query={query} />
        </div>
      )}

      {query.length > 0 && query.length < 2 && (
        <p className="mt-6 text-sm text-muted">
          Arama için en az 2 karakter girin.
        </p>
      )}
    </>
  );
}

export default function SearchPage(props: Props) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-soft">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <Breadcrumbs
              items={[{ label: "Anasayfa", href: "/" }, { label: "Arama" }]}
            />
            <h1 className="font-display text-3xl font-bold tracking-tight">
              Site İçi Arama
            </h1>
            <p className="mt-3 text-[15px] leading-7 text-body">
              Rehber sayfaları, blog yazıları, oyun kategorileri ve partner
              sitelerde arama yapın.
            </p>
            <div className="mt-8">
              <Suspense
                fallback={
                  <div className="h-12 animate-pulse rounded-xl bg-surface" />
                }
              >
                <SearchContent searchParams={props.searchParams} />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
