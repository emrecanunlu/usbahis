import type { Metadata } from "next";
import { redirect, notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { Sidebar } from "@/components/Sidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PostCard } from "@/components/BlogList";
import {
  POSTS,
  getPostBySlug,
  getRelatedPosts,
  formatDate,
} from "@/lib/posts";
import { SITE, CATEGORIES } from "@/lib/site";
import {
  buildMetadata,
  articleJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";

export const dynamicParams = true;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı bulunamadı" };
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: [post.category, post.categorySlug],
    type: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    if (CATEGORIES.some((c) => c.slug === slug)) {
      redirect(`/blog?cat=${slug}`);
    }
    notFound();
  }
  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <Header />
      <JsonLd
        data={[
          articleJsonLd({
            title: post.title,
            description: post.excerpt,
            path: `/blog/${slug}`,
            datePublished: post.date,
          }),
          breadcrumbJsonLd([
            { name: "Anasayfa", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${slug}` },
          ]),
        ]}
      />
      <main className="flex-1">
        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <Breadcrumbs
              items={[
                { label: "Anasayfa", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.category },
              ]}
            />

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full border border-pink/30 bg-pink/10 px-2.5 py-0.5 font-medium text-[var(--pink-soft)]">
                {post.category}
              </span>
              <span className="text-muted">{formatDate(post.date)}</span>
              <span className="text-muted">·</span>
              <span className="text-muted">{post.readingTime} dk okuma</span>
            </div>
            <h1 className="font-display mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-body sm:text-base">
              {post.excerpt}
            </p>
          </div>
        </section>

        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
              <article className="min-w-0">
                <div
                  className="prose-mb max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-10 rounded-2xl border border-pink/30 bg-gradient-to-br from-pink/[0.08] to-violet-500/[0.05] p-6">
                  <h3 className="font-display text-lg font-bold text-white">
                    Hemen UsBahis&apos;e Katıl
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-body">
                    Yazıda bahsi geçen kampanyalardan faydalanmak için
                    UsBahis güncel giriş adresine ulaş ve %100 hoş geldin
                    bonusunu kap.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={SITE.registerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 cursor-pointer items-center rounded-md btn-primary px-5 text-sm font-semibold text-white transition-transform active:translate-y-px"
                    >
                      Hemen Üye Ol
                    </a>
                    <a
                      href={SITE.loginUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 cursor-pointer items-center rounded-md border border-white/15 bg-white/[0.03] px-5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.06]"
                    >
                      Güncel Giriş
                    </a>
                  </div>
                </div>
              </article>
              <Sidebar />
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="border-b border-soft bg-surface-2">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
              <h2 className="font-display border-b border-soft pb-3 text-xl font-bold tracking-tight text-white sm:text-2xl">
                İlgili Yazılar
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <PostCard post={r} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
