import Link from "next/link";
import { getFeaturedPartners, getAllPartners } from "@/lib/backlinks";

type Props = {
  limit?: number;
  showAllLink?: boolean;
  title?: string;
};

export function PartnerSites({
  limit,
  showAllLink = true,
  title = "Önerilen Bahis Siteleri",
}: Props) {
  const partners = limit ? getFeaturedPartners(limit) : getAllPartners();

  return (
    <section className="border-b border-soft bg-background" aria-labelledby="partner-heading">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-soft pb-4">
          <div>
            <h2
              id="partner-heading"
              className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              {title}
            </h2>
            <p className="mt-2 max-w-2xl text-[15px] leading-7 text-body">
              Güvenilir ve lisanslı bahis platformları. Aşağıdaki partner siteler
              editoryal olarak öne çıkarılmıştır; güncel giriş ve bonus bilgileri
              için tıklayın.
            </p>
          </div>
          {showAllLink && limit && (
            <Link
              href="/partner-siteler"
              className="inline-flex h-10 items-center rounded-md border border-soft px-4 text-sm font-medium text-body transition-colors hover:border-pink/40 hover:text-pink"
            >
              Tüm Partner Siteler
            </Link>
          )}
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((p) => (
            <li key={p.slug}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-soft bg-surface p-5 transition-colors hover:border-pink/40"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base font-bold text-white transition-colors group-hover:text-pink">
                    {p.name}
                  </h3>
                  {p.badge && (
                    <span className="shrink-0 rounded-full border border-pink/30 bg-pink/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--pink-soft)]">
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                  {p.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-pink">
                  Siteye Git
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M14 4h6v6m0-6L10 14M9 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
