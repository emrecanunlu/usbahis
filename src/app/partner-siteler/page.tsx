import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { Sidebar } from "@/components/Sidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PartnerSites } from "@/components/PartnerSites";
import { JsonLd } from "@/components/JsonLd";
import { getAllPartners } from "@/lib/backlinks";
import { buildMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { PAGE_KEYWORDS } from "@/lib/keywords";

export const metadata: Metadata = buildMetadata({
  title: "Partner Bahis Siteleri 2026 | Güvenilir Platformlar",
  description:
    "UsBahis partner ve önerilen bahis siteleri: güvenilir, lisanslı platformlar, güncel giriş linkleri, bonus karşılaştırması ve casino rehberleri.",
  path: "/partner-siteler",
  keywords: [...PAGE_KEYWORDS.partner],
});

export default function PartnerPage() {
  const partners = getAllPartners();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Önerilen Bahis Siteleri",
    description: "UsBahis partner ve backlink siteleri",
    numberOfItems: partners.length,
    itemListElement: partners.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: p.url,
      description: p.description,
    })),
  };

  return (
    <>
      <Header />
      <JsonLd
        data={[
          webPageJsonLd({
            title: "Partner Bahis Siteleri",
            description: "Önerilen ve partner bahis platformları",
            path: "/partner-siteler",
          }),
          breadcrumbJsonLd([
            { name: "Anasayfa", path: "/" },
            { name: "Partner Siteler", path: "/partner-siteler" },
          ]),
          itemListJsonLd,
        ]}
      />
      <main className="flex-1">
        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <Breadcrumbs
              items={[
                { label: "Anasayfa", href: "/" },
                { label: "Partner Siteler" },
              ]}
            />
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Partner & Önerilen Bahis Siteleri
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-body">
              Editöryal olarak seçilmiş güvenilir bahis ve casino platformları.
              Bu siteler lisanslı hizmet sunar; güncel giriş ve kampanya
              bilgileri için kartlara tıklayın.
            </p>
          </div>
        </section>

        <PartnerSites showAllLink={false} title="Tüm Partner Siteler" />

        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
              <article className="prose-mb max-w-none">
                <h2>Partner Siteler Hakkında</h2>
                <p>
                  Bu sayfada listelenen platformlar, kullanıcı deneyimi,
                  lisans durumu ve ödeme hızı kriterlerine göre öne
                  çıkarılmıştır. <strong>UsBahis</strong> resmi sitesi listenin
                  en üst sıralarında yer alır.
                </p>
                <h3>Site Ekleme</h3>
                <p>
                  Yeni partner site eklemek için{" "}
                  <a href="/iletisim">iletişim formunu</a> kullanabilirsiniz.
                  Editöryal inceleme sonrası listeye alınır.
                </p>
              </article>
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
