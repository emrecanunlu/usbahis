import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { Sidebar } from "@/components/Sidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PartnerSites } from "@/components/PartnerSites";
import {
  SEO_PAGES,
  getSeoPageBySlug,
  getAllSeoPages,
} from "@/lib/seo-pages";
import { SITE } from "@/lib/site";
import {
  buildMetadata,
  breadcrumbJsonLd,
  faqJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return SEO_PAGES.map((p) => ({ slug: p.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) return { title: "Sayfa bulunamadı" };
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/rehber/${slug}`,
    keywords: page.keywords,
  });
}

export default async function RehberPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) notFound();

  const related = getAllSeoPages()
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const score = (s: string) =>
        /giris|kayit|telegram|guncel|papara/.test(s) ? 0 : 1;
      return score(a.slug) - score(b.slug);
    })
    .slice(0, 4);

  return (
    <>
      <Header />
      <JsonLd
        data={[
          webPageJsonLd({
            title: page.title,
            description: page.description,
            path: `/rehber/${slug}`,
          }),
          breadcrumbJsonLd([
            { name: "Anasayfa", path: "/" },
            { name: "Rehber", path: "/rehber" },
            { name: page.h1, path: `/rehber/${slug}` },
          ]),
          ...(page.faq.length > 0 ? [faqJsonLd(page.faq)] : []),
        ]}
      />
      <main className="flex-1">
        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <Breadcrumbs
              items={[
                { label: "Anasayfa", href: "/" },
                { label: "Rehber", href: "/rehber" },
                { label: page.h1 },
              ]}
            />
            <h1 className="font-display max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              {page.h1}
            </h1>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-body sm:text-base">
              {page.description}
            </p>
            <p className="mt-3 text-xs text-[var(--placeholder)]">
              Son güncelleme: {page.updatedAt}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-md btn-primary px-6 text-sm font-semibold text-white  transition-transform active:translate-y-px"
              >
                Hemen Üye Ol
              </a>
              <a
                href={SITE.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 cursor-pointer items-center rounded-md border border-white/15 bg-white/[0.03] px-5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.06]"
              >
                Güncel Giriş
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
              <article className="min-w-0">
                <div
                  className="prose-mb max-w-none"
                  dangerouslySetInnerHTML={{ __html: page.content }}
                />

                {page.faq.length > 0 && (
                  <div className="mt-12">
                    <h2 className="font-display text-2xl font-bold text-white">
                      Sıkça Sorulan Sorular
                    </h2>
                    <div className="mt-4 overflow-hidden rounded-2xl border border-soft bg-surface">
                      {page.faq.map((item, i) => (
                        <details
                          key={item.q}
                          className="group border-b border-soft last:border-b-0 [&_summary::-webkit-details-marker]:hidden"
                          open={i === 0}
                        >
                          <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-white/[0.02]">
                            <span className="font-display text-base font-semibold text-white">
                              {item.q}
                            </span>
                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-pink/30 bg-pink/10 text-pink transition-transform group-open:rotate-45">
                              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                              </svg>
                            </span>
                          </summary>
                          <div className="px-5 pb-5">
                            <p className="text-sm leading-7 text-body">{item.a}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )}
              </article>
              <Sidebar />
            </div>
          </div>
        </section>

        <section className="border-b border-soft bg-surface-2">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="font-display border-b border-soft pb-3 text-xl font-bold text-white">
              Diğer Rehberler
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/rehber/${r.slug}`}
                    className="block rounded-xl border border-soft bg-surface p-4 text-sm font-medium text-body transition-colors hover:border-pink/40 hover:text-pink"
                  >
                    {r.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <PartnerSites limit={4} />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
