/**
 * Backlink verilecek / öne çıkarılacak partner siteler.
 * Yeni site eklemek için bu listeye kayıt ekleyin; featured: true olanlar anasayfada görünür.
 */
export type BacklinkPartner = {
  slug: string;
  name: string;
  url: string;
  description: string;
  badge?: string;
  featured: boolean;
  priority: number;
};

export const BACKLINK_PARTNERS: BacklinkPartner[] = [
  {
    slug: "usbahis-resmi",
    name: "UsBahis Resmi",
    url: "https://usbahis871.com",
    description:
      "Lisanslı canlı bahis, casino ve slot. %100 hoş geldin bonusu, 3 dk para çekim, 7/24 Türkçe destek.",
    badge: "Resmi Site",
    featured: true,
    priority: 100,
  },
  {
    slug: "usbahis-guncel",
    name: "UsBahis Güncel Giriş",
    url: "https://usbahis871.com",
    description:
      "Erişim engeli sonrası güncel domain adresi. Anında giriş, Papara ve kripto ile hızlı yatırım.",
    badge: "Güncel Link",
    featured: true,
    priority: 90,
  },
  {
    slug: "usbahis-bonus",
    name: "UsBahis Bonus",
    url: "https://usbahis871.com",
    description:
      "%100 hoş geldin, %50 yatırım ve haftalık kayıp bonusu. Düşük çevrim şartlarıyla ekstra kazanç.",
    badge: "Bonus",
    featured: true,
    priority: 80,
  },
  {
    slug: "usbahis-casino",
    name: "UsBahis Casino",
    url: "https://usbahis871.com",
    description:
      "Evolution ve Pragmatic Live ile 180+ canlı masa. Türkçe krupiye, Crazy Time, rulet ve blackjack.",
    badge: "Canlı Casino",
    featured: true,
    priority: 70,
  },
  {
    slug: "mekanbahis-tanitim",
    name: "Mekanbahis Tanıtım",
    url: "https://mekanbahis.vercel.app",
    description:
      "Mekanbahis resmi tanıtım sitesi. Güncel giriş adresi, bonus rehberleri ve casino incelemeleri.",
    badge: "Partner",
    featured: true,
    priority: 85,
  },
  {
    slug: "lakebahis-tanitim",
    name: "LakeBahis Tanıtım",
    url: "https://lakebahis.vercel.app",
    description:
      "LakeBahis resmi tanıtım sitesi. Güncel giriş, oyun rehberleri ve kampanya bilgileri.",
    badge: "Partner",
    featured: true,
    priority: 84,
  },
  {
    slug: "usbahis-aviator",
    name: "UsBahis Aviator",
    url: "https://usbahis871.com",
    description:
      "Spribe Aviator ve crash oyunları. Otomatik cash out, çift bahis ve günlük cashback.",
    badge: "Aviator",
    featured: false,
    priority: 60,
  },
  {
    slug: "usbahis-mobil",
    name: "UsBahis Mobil",
    url: "https://usbahis871.com",
    description:
      "Mobil tarayıcıdan uygulama indirmeden giriş. iOS ve Android uyumlu responsive arayüz.",
    badge: "Mobil",
    featured: false,
    priority: 50,
  },
];

export function getFeaturedPartners(limit = 4): BacklinkPartner[] {
  return [...BACKLINK_PARTNERS]
    .filter((p) => p.featured)
    .sort((a, b) => b.priority - a.priority)
    .slice(0, limit);
}

export function getAllPartners(): BacklinkPartner[] {
  return [...BACKLINK_PARTNERS].sort((a, b) => b.priority - a.priority);
}

export function getPartnerBySlug(slug: string): BacklinkPartner | undefined {
  return BACKLINK_PARTNERS.find((p) => p.slug === slug);
}
