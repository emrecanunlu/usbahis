import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import {
  buildMetadata,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "UsBahis | Güvenilir Bahis ve Casino",
    description:
      "UsBahis resmi tanıtım sitesi. Lisanslı canlı bahis, casino, slot, Aviator. Güncel giriş, bonus rehberleri, partner siteler ve 7/24 destek.",
    path: "/",
    keywords: [
      "UsBahis giriş",
      "UsBahis güncel adres",
      "canlı bahis",
      "canlı casino",
      "slot oyunları",
      "Aviator",
      "bonus",
    ],
  }),
  title: {
    default: "UsBahis | Güvenilir Bahis ve Casino",
    template: "%s | UsBahis",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.usbahisonline.com",
  ),
  authors: [{ name: "UsBahis" }],
  creator: "UsBahis",
  publisher: "UsBahis",
  formatDetection: { email: false, address: false, telephone: false },
  category: "entertainment",
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png", sizes: "100x100" }],
    apple: [{ url: "/images/favicon.png", type: "image/png", sizes: "100x100" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-background text-white selection:bg-pink/30 selection:text-white">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {children}
      </body>
    </html>
  );
}
