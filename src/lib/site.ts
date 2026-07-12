export const SITE = {
  name: "UsBahis",
  tagline: "Güvenilir Bahis ve Casino",
  /** Tanıtım sitesinin kendi domain'i (SEO canonical için) */
  promoUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.usbahisonline.com",
  /** Kalıcı giriş yönlendirme linki — domain değişse bile güncel adrese gider */
  domain: "usgrs.link/usgir",
  url: "https://usgrs.link/usgir",
  loginUrl: "https://usgrs.link/usgir",
  registerUrl: "https://usgrs.link/usgir",
  supportEmail: "destek@usbahisonline.com",
  telegramUrl: "https://t.me/usgiris",
  locale: "tr_TR",
  language: "tr",
  twitter: "@usbahis",
};

export const HEADER_NAV = [
  { label: "Oyunlar", href: "/oyunlar" },
  { label: "Rehber", href: "/rehber" },
  { label: "Blog", href: "/blog" },
  { label: "Bonuslar", href: "/#bonuslar" },
  { label: "Partner", href: "/partner-siteler" },
  { label: "İletişim", href: "/iletisim" },
];

export const NAV = [
  { label: "Anasayfa", href: "/" },
  ...HEADER_NAV,
  { label: "Arama", href: "/arama" },
];

export const CATEGORIES = [
  { slug: "canli-bahis", name: "Canlı Bahis" },
  { slug: "canli-casino", name: "Canlı Casino" },
  { slug: "slot", name: "Slot Oyunları" },
  { slug: "bonuslar", name: "Bonuslar" },
  { slug: "rehber", name: "Rehber" },
  { slug: "guncel", name: "Güncel Giriş" },
];

export const SEO_LINKS = [
  { label: "UsBahis Giriş", href: "/rehber/usbahis-giris" },
  { label: "Güncel Adres", href: "/rehber/usbahis-guncel-adres" },
  { label: "Hoş Geldin Bonusu", href: "/rehber/usbahis-bonus" },
  { label: "Canlı Bahis", href: "/rehber/usbahis-canli-bahis" },
  { label: "Canlı Casino", href: "/rehber/usbahis-casino" },
  { label: "Aviator", href: "/rehber/usbahis-aviator" },
  { label: "Mobil Giriş", href: "/rehber/usbahis-mobil-giris" },
  { label: "Güvenilir mi?", href: "/rehber/usbahis-guvenilir-mi" },
];
