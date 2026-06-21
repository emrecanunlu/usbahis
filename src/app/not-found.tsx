import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sayfa Bulunamadı",
  description: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-20">
        <div className="max-w-md text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-pink">404</p>
          <h1 className="font-display mt-3 text-3xl font-bold text-white">
            Sayfa bulunamadı
          </h1>
          <p className="mt-3 text-[15px] leading-7 text-body">
            Aradığınız sayfa kaldırılmış veya adresi değişmiş olabilir.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex h-11 items-center rounded-md btn-primary px-5 text-sm font-semibold text-white transition-transform active:translate-y-px"
            >
              Anasayfaya Dön
            </Link>
            <Link
              href="/rehber"
              className="inline-flex h-11 items-center rounded-md border border-soft px-5 text-sm font-medium text-body transition-colors hover:border-pink/40 hover:text-pink"
            >
              Rehber Sayfaları
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
