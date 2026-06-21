import type { Metadata } from "next";
import { SITE } from "./site";

const DEFAULT_OG = "/images/usbahis.png";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
};

export function absoluteUrl(path = ""): string {
  const base = SITE.promoUrl.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return path ? `${base}${p}` : base;
}

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogImage = DEFAULT_OG,
  noIndex = false,
  type = "website",
  publishedTime,
}: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const fullTitle =
    path === "" || path === "/"
      ? `${SITE.name} | ${SITE.tagline}`
      : `${title} | ${SITE.name}`;

  return {
    title: path === "" || path === "/" ? undefined : title,
    description: description.slice(0, 160),
    keywords: [
      SITE.name,
      "UsBahis giriş",
      "UsBahis güncel adres",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: description.slice(0, 160),
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type,
      images: [{ url: absoluteUrl(ogImage), width: 309, height: 60, alt: SITE.name }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description.slice(0, 160),
      images: [absoluteUrl(ogImage)],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: absoluteUrl(),
    logo: absoluteUrl("/images/usbahis.png"),
    sameAs: [SITE.telegramUrl, SITE.url],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE.supportEmail,
      availableLanguage: ["Turkish"],
      areaServed: "TR",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: absoluteUrl(),
    description:
      "UsBahis resmi tanıtım sitesi. Güncel giriş, bonuslar, oyun rehberleri ve partner siteler.",
    inLanguage: SITE.language,
    publisher: { "@type": "Organization", name: SITE.name },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl("/arama")}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: absoluteUrl(opts.path),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@type": "Organization", name: SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/images/usbahis.png") },
    },
    inLanguage: SITE.language,
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function webPageJsonLd(opts: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.title,
    description: opts.description,
    url: absoluteUrl(opts.path),
    isPartOf: { "@type": "WebSite", name: SITE.name, url: absoluteUrl() },
    inLanguage: SITE.language,
  };
}
