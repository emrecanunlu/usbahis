import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { GameTypes } from "@/components/GameTypes";
import { Bonuses } from "@/components/Bonuses";
import { FAQ, FAQ_ITEMS } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { BlogList } from "@/components/BlogList";
import { Sidebar } from "@/components/Sidebar";
import { PartnerSites } from "@/components/PartnerSites";
import { EntryHub } from "@/components/EntryHub";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

export default function Home() {
  const b = SITE.brandSlug;
  return (
    <>
      <Header />
      <JsonLd
        data={[
          webPageJsonLd({
            title: `${SITE.name} Giriş 2026 | Güncel Adres, Bonus ve Casino`,
            description: `${SITE.name} resmi tanıtım sitesi. Güncel giriş ${SITE.domain}, canlı bahis, casino, slot, Aviator.`,
            path: "/",
          }),
          faqJsonLd(FAQ_ITEMS),
        ]}
      />
      <main className="flex-1">
        <Hero />
        <EntryHub />

        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_260px] lg:items-start">
              <article className="prose-mb max-w-none">
                <h2>{SITE.name} Resmi Tanıtım Sitesi</h2>
                <p>
                  <strong>{SITE.name}</strong>, Türk bahis ve casino pazarının
                  en hızlı büyüyen platformlarından biri olarak Curaçao eGaming
                  lisansı altında hizmet veriyor. Yüksek oranlı spor bahisleri,
                  gerçek krupiyeli canlı casino masaları, 5.000&apos;den fazla
                  slot oyunu, Aviator ve sanal bahis seçenekleriyle tek
                  platformda eksiksiz bir oyun deneyimi sunuyor.
                </p>
                <p>
                  Bu sayfa, {SITE.name}&apos;in{" "}
                  <strong>resmi tanıtım sitesi</strong> olarak güncel giriş
                  adresini, kampanyaları, oyun türlerini ve ödeme yöntemlerini
                  Türkçe olarak detaylı şekilde paylaşır. Kalıcı giriş linki{" "}
                  <strong>{SITE.domain}</strong> — detaylı adımlar için{" "}
                  <a href={`/rehber/${b}-giris`}>{SITE.name} giriş rehberi</a>,{" "}
                  <a href={`/rehber/${b}-telegram-giris`}>Telegram giriş</a> ve{" "}
                  <a href={`/rehber/${b}-mobil-giris`}>mobil giriş</a> sayfalarına
                  bakın.
                </p>

                <h3>Neden {SITE.name}?</h3>
                <ul>
                  <li>Curaçao eGaming lisansı ile uluslararası standartlarda hizmet</li>
                  <li>256-bit SSL şifreleme ile uçtan uca güvenli ödeme altyapısı</li>
                  <li>3 dakikada para çekme (Papara ve kripto yöntemleriyle)</li>
                  <li>%100 hoş geldin bonusu + 50 ücretsiz dönüş</li>
                  <li>7/24 Türkçe canlı destek, WhatsApp ve e-posta hattı</li>
                  <li>Komisyonsuz yatırım ve çekim işlemleri</li>
                </ul>
              </article>
              <Sidebar variant="compact" />
            </div>
          </div>
        </section>

        <GameTypes />
        <Bonuses />
        <PartnerSites limit={4} title="Öne Çıkan Partner Siteler" />

        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
            <BlogList limit={4} />
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
