import Link from "next/link";
import { getAllPosts, formatDate, type Post } from "@/lib/posts";

export function BlogList({
  limit,
  showHeader = true,
  categorySlug,
}: {
  limit?: number;
  showHeader?: boolean;
  categorySlug?: string;
}) {
  let posts = categorySlug
    ? getAllPosts().filter((p) => p.categorySlug === categorySlug)
    : getAllPosts();
  if (limit) posts = posts.slice(0, limit);

  if (posts.length === 0) {
    return (
      <section className="rounded-2xl border border-soft bg-surface p-8 text-center">
        <p className="text-body">Bu kategoride henüz yazı bulunmuyor.</p>
        <Link
          href="/blog"
          className="mt-4 inline-flex text-sm font-semibold text-pink transition-colors hover:text-[var(--pink-soft)]"
        >
          Tüm yazılara dön
        </Link>
      </section>
    );
  }

  return (
    <section className="space-y-5">
      {showHeader && (
        <div className="flex items-end justify-between gap-3 border-b border-soft pb-3">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Son Blog Yazıları
            </h2>
            <p className="mt-1 text-sm text-muted">
              UsBahis hakkında rehberler, kampanya duyuruları ve güncel
              gelişmeler.
            </p>
          </div>
          {limit && (
            <Link
              href="/blog"
              className="hidden shrink-0 rounded-md border border-soft px-3 py-1.5 text-xs font-medium text-body transition-colors hover:border-pink/40 hover:text-pink sm:inline-flex"
            >
              Tümünü Gör
            </Link>
          )}
        </div>
      )}

      <ul className="grid gap-4 sm:grid-cols-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <PostCard post={p} />
          </li>
        ))}
      </ul>

      {limit && (
        <div className="pt-2 sm:hidden">
          <Link
            href="/blog"
            className="inline-flex rounded-md border border-soft px-3 py-1.5 text-xs font-medium text-body transition-colors hover:border-pink/40 hover:text-pink"
          >
            Tüm Yazıları Gör
          </Link>
        </div>
      )}
    </section>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-soft bg-surface p-5 transition-colors hover:border-pink/40"
    >
      <div className="flex items-center gap-2 text-xs text-muted">
        <span className="rounded-full border border-pink/30 bg-pink/10 px-2 py-0.5 font-medium text-[var(--pink-soft)]">
          {post.category}
        </span>
        <span>{formatDate(post.date)}</span>
        <span>·</span>
        <span>{post.readingTime} dk</span>
      </div>
      <h3 className="font-display mt-3 text-lg font-bold leading-snug text-white transition-colors group-hover:text-pink">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-body">
        {post.excerpt}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-pink">
        Devamını oku
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
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
      </span>
    </Link>
  );
}
