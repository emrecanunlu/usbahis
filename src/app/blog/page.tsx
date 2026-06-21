import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { BlogList } from "@/components/BlogList";
import { Sidebar } from "@/components/Sidebar";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { CATEGORIES } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Blog & Rehber",
  description:
    "UsBahis hakkında rehberler, bonus duyuruları, oyun incelemeleri ve güncel gelişmeler. Spor bahsi, casino, slot ve Aviator stratejileri.",
  path: "/blog",
  keywords: ["UsBahis blog", "bahis rehberi", "casino ipuçları"],
});

type Props = { searchParams: Promise<{ cat?: string }> };

async function BlogContent({ searchParams }: Props) {
  const { cat } = await searchParams;
  const category = cat ? CATEGORIES.find((c) => c.slug === cat) : undefined;

  return (
    <>
      {category && (
        <p className="mb-4 text-sm text-muted">
          Kategori:{" "}
          <strong className="text-white">{category.name}</strong>
        </p>
      )}
      <BlogList showHeader={false} categorySlug={category?.slug} />
    </>
  );
}

export default function BlogPage(props: Props) {
  return (
    <>
      <Header />
      <JsonLd
        data={[
          webPageJsonLd({
            title: "Blog & Rehber",
            description: "UsBahis blog yazıları ve rehberler",
            path: "/blog",
          }),
          breadcrumbJsonLd([
            { name: "Anasayfa", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <main className="flex-1">
        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <Breadcrumbs
              items={[{ label: "Anasayfa", href: "/" }, { label: "Blog" }]}
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-pink/30 bg-pink/10 px-3 py-1 text-xs font-medium text-[var(--pink-soft)]">
              <span className="h-1.5 w-1.5 rounded-full bg-pink" />
              Blog &amp; Rehber
            </span>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              UsBahis Hakkında Tüm Yazılar
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-body">
              Bonus rehberleri, oyun incelemeleri, ödeme yöntemleri ve güncel
              kampanya duyuruları. UsBahis ile ilgili bilmen gereken her şey
              burada.
            </p>
          </div>
        </section>

        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
              <Suspense fallback={<div className="h-40 animate-pulse rounded-2xl bg-surface" />}>
                <BlogContent searchParams={props.searchParams} />
              </Suspense>
              <Sidebar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
