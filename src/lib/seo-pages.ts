import { SEO_PAGE_KEYWORDS } from "./keywords";
import { ENTRY_SEO_PAGES } from "./entry-seo-pages";
import { getSeoPageBody } from "./seo-page-bodies";

export type SeoPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  content: string;
  faq: { q: string; a: string }[];
  updatedAt: string;
};

export const SEO_PAGES: SeoPage[] = [
  {
    slug: "usbahis-giris",
    title: "UsBahis Giriş 2026 | Güncel Giriş Adresi",
    h1: "UsBahis Giriş — Güncel Adres ve Güvenli Erişim",
    description:
      "UsBahis giriş adresi 2026. usgrs.link/usgir kalıcı linki üzerinden güvenli giriş, üyelik ve bonus talebi. Domain değişse bile otomatik yönlendirme.",
    keywords: ["UsBahis giriş", "UsBahis login", "UsBahis üye girişi"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "UsBahis'e nasıl giriş yapılır?",
        a: "usgrs.link/usgir adresine gidin; otomatik olarak güncel domaine yönlendirilirsiniz. Ardından sağ üstteki Giriş butonuna tıklayıp kullanıcı adı ve şifrenizi girin.",
      },
      {
        q: "Giriş yapamıyorum, ne yapmalıyım?",
        a: "DNS ayarlarını 8.8.8.8 yapın, önbelleği temizleyin veya bu sayfadaki güncel linki kullanın.",
      },
    ],
    content: getSeoPageBody("usbahis-giris"),
  },
  {
    slug: "usbahis-guncel-adres",
    title: "UsBahis Güncel Adres 2026 | Yeni Giriş Linki",
    h1: "UsBahis Güncel Adres — 2026 Yeni Domain",
    description:
      "UsBahis güncel adres ve kalıcı giriş linki. usgrs.link/usgir — domain değişse bile otomatik yönlendirme.",
    keywords: ["UsBahis güncel adres", "UsBahis yeni link", "usgir"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "UsBahis güncel adresi nedir?",
        a: "Kalıcı giriş linki usgrs.link/usgir'dir; tıkladığınızda her zaman güncel domaine yönlendirilirsiniz.",
      },
      {
        q: "Adres neden değişiyor?",
        a: "BTK erişim engelleri nedeniyle domain numarası periyodik güncellenir; hesap bilgileri etkilenmez.",
      },
    ],
    content: getSeoPageBody("usbahis-guncel-adres"),
  },
  {
    slug: "usbahis-guncel-giris",
    title: "UsBahis Güncel Giriş | Hızlı ve Güvenli Link",
    h1: "UsBahis Güncel Giriş — Anında Erişim",
    description:
      "UsBahis güncel giriş linki usgrs.link/usgir. Kalıcı yönlendirme, mobil ve masaüstü giriş ipuçları.",
    keywords: ["UsBahis güncel giriş", "UsBahis link", "UsBahis erişim"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Güncel giriş linki güvenli mi?",
        a: "Evet. usgrs.link/usgir resmi yönlendirme linkidir; güncel domain SSL sertifikalıdır ve 256-bit şifreleme kullanır.",
      },
    ],
    content: getSeoPageBody("usbahis-guncel-giris"),
  },
  {
    slug: "usbahis-bonus",
    title: "UsBahis Bonus 2026 | %100 Hoş Geldin + Free Spin",
    h1: "UsBahis Bonus — Kampanyalar ve Promosyonlar",
    description:
      "UsBahis bonus rehberi: %100 hoş geldin, yatırım bonusu, kayıp iadesi ve Aviator cashback. Çevrim şartları ve talep adımları.",
    keywords: ["UsBahis bonus", "UsBahis hoş geldin", "UsBahis promosyon"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Hoş geldin bonusu kaç TL?",
        a: "İlk yatırımın %100'ü kadar, maksimum 20.000 TL bonus + 50 free spin.",
      },
    ],
    content: getSeoPageBody("usbahis-bonus"),
  },
  {
    slug: "usbahis-canli-bahis",
    title: "UsBahis Canlı Bahis | Yüksek Oranlar 2026",
    h1: "UsBahis Canlı Bahis — Spor ve E-Spor",
    description:
      "UsBahis canlı bahis: futbol, basketbol, tenis, e-spor. 1200+ maç, cash out, canlı izleme ve yüksek oranlar.",
    keywords: ["UsBahis canlı bahis", "UsBahis spor", "UsBahis iddaa"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Canlı bahiste hangi sporlar var?",
        a: "Futbol, basketbol, tenis, voleybol, e-spor ve 35+ spor dalı.",
      },
    ],
    content: getSeoPageBody("usbahis-canli-bahis"),
  },
  {
    slug: "usbahis-casino",
    title: "UsBahis Casino | Canlı Krupiye Masaları",
    h1: "UsBahis Casino — Canlı ve Slot Oyunları",
    description:
      "UsBahis casino: Evolution Gaming, Pragmatic Live, 180+ canlı masa, Türkçe krupiye, Crazy Time ve rulet.",
    keywords: ["UsBahis casino", "UsBahis canlı casino", "UsBahis rulet"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Türkçe krupiye var mı?",
        a: "Evet. Ezugi ve Pragmatic Live Türkçe masalar sunar.",
      },
    ],
    content: getSeoPageBody("usbahis-casino"),
  },
  {
    slug: "usbahis-slot",
    title: "UsBahis Slot | 5000+ Oyun Kataloğu",
    h1: "UsBahis Slot Oyunları — En Popüler Slotlar",
    description:
      "UsBahis slot: Sweet Bonanza, Gates of Olympus, 5000+ video slot, jackpot ve megaways. Demo mod ve bonus buy.",
    keywords: ["UsBahis slot", "UsBahis Sweet Bonanza", "UsBahis slot oyunları"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Slot demo modu var mı?",
        a: "Evet. Çoğu slot ücretsiz demo ile denenebilir.",
      },
    ],
    content: getSeoPageBody("usbahis-slot"),
  },
  {
    slug: "usbahis-aviator",
    title: "UsBahis Aviator | Crash Oyun Rehberi",
    h1: "UsBahis Aviator — Anlık Çarpan Oyunu",
    description:
      "UsBahis Aviator nasıl oynanır? Spribe crash oyunu, otomatik cash out, stratejiler ve günlük cashback.",
    keywords: ["UsBahis Aviator", "UsBahis crash", "Aviator giriş"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Aviator minimum bahis?",
        a: "0.10 TL'den başlar, maksimum 100 TL.",
      },
    ],
    content: getSeoPageBody("usbahis-aviator"),
  },
  {
    slug: "usbahis-mobil-giris",
    title: "UsBahis Mobil Giriş | iOS ve Android",
    h1: "UsBahis Mobil Giriş — Uygulama İndirmeden",
    description:
      "UsBahis mobil giriş: tarayıcıdan hızlı erişim, responsive arayüz, iOS/Android uyumluluk ve ana ekran kısayolu.",
    keywords: ["UsBahis mobil", "UsBahis mobil giriş", "UsBahis app"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Mobil uygulama var mı?",
        a: "Resmi mobil uygulama yok; tarayıcı üzerinden tam özellikli erişim sağlanır.",
      },
    ],
    content: getSeoPageBody("usbahis-mobil-giris"),
  },
  {
    slug: "usbahis-guvenilir-mi",
    title: "UsBahis Güvenilir mi? | Lisans ve İnceleme 2026",
    h1: "UsBahis Güvenilir mi? — Detaylı İnceleme",
    description:
      "UsBahis güvenilir mi? Curaçao lisansı, SSL şifreleme, ödeme hızı, kullanıcı yorumları ve güvenlik analizi.",
    keywords: ["UsBahis güvenilir mi", "UsBahis lisans", "UsBahis yorum"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "UsBahis lisanslı mı?",
        a: "Evet. Curaçao eGaming lisansı altında hizmet verir.",
      },
      {
        q: "Para çekimi güvenli mi?",
        a: "Onaylı hesaplarda ortalama 3 dakikada Papara/kripto çekim tamamlanır.",
      },
    ],
    content: getSeoPageBody("usbahis-guvenilir-mi"),
  },
  {
    slug: "usbahis-ucretsiz-bonus",
    title: "UsBahis Ücretsiz Bonus | Deneme ve Free Spin",
    h1: "UsBahis Ücretsiz Bonus — Kampanya Rehberi",
    description:
      "UsBahis ücretsiz bonus, deneme bonusu ve free spin fırsatları. Yeni üyelere özel promosyonlar ve çevrim şartları.",
    keywords: ["UsBahis ücretsiz bonus", "UsBahis deneme bonusu", "UsBahis free spin"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Deneme bonusu var mı?",
        a: "Yeni üyelere %100 hoş geldin + 50 free spin verilir; minimum 50 TL yatırım gerekir.",
      },
    ],
    content: getSeoPageBody("usbahis-ucretsiz-bonus"),
  },
  {
    slug: "usbahis-yeni-adres",
    title: "UsBahis Yeni Adres 2026 | Domain Güncellemesi",
    h1: "UsBahis Yeni Adres — Son Domain Değişikliği",
    description:
      "UsBahis yeni adres duyurusu. Domain güncellemesi sonrası giriş, hesap güvenliği ve bildirim kanalları.",
    keywords: ["UsBahis yeni adres", "UsBahis domain", "usgir link"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Yeni adrese geçince hesabım silinir mi?",
        a: "Hayır. Tüm veriler merkezi sunucuda saklanır, aynı bilgilerle giriş yapılır.",
      },
    ],
    content: getSeoPageBody("usbahis-yeni-adres"),
  },
  ...ENTRY_SEO_PAGES,
];

export function getSeoPageBySlug(slug: string): SeoPage | undefined {
  const page = SEO_PAGES.find((p) => p.slug === slug);
  if (!page) return undefined;
  return {
    ...page,
    keywords: SEO_PAGE_KEYWORDS[page.slug] ?? page.keywords,
  };
}

export function getAllSeoPages(): SeoPage[] {
  return SEO_PAGES.map((p) => ({
    ...p,
    keywords: SEO_PAGE_KEYWORDS[p.slug] ?? p.keywords,
  }));
}
