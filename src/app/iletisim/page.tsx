import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { buildMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { PAGE_KEYWORDS } from "@/lib/keywords";

export const metadata: Metadata = buildMetadata({
  title: "UsBahis İletişim | 7/24 Destek ve Telegram",
  description:
    "UsBahis iletişim: üyelik, bonus, giriş ve teknik destek için form veya Telegram kanalı. 7/24 Türkçe canlı destek, hızlı yanıt garantisi.",
  path: "/iletisim",
  keywords: [...PAGE_KEYWORDS.iletisim],
});

const CHANNELS = [
  {
    title: "Canlı Destek",
    desc: "7/24 Türkçe canlı sohbet. Giriş yaptıktan sonra sağ alt köşeden ulaşabilirsin.",
    href: SITE.loginUrl,
    label: "Canlı Desteğe Git",
    external: true,
    icon: <ChatIcon />,
    accent: "pink",
  },
  {
    title: "Telegram",
    desc: "Güncel adres duyuruları, kampanyalar ve hızlı destek için Telegram kanalımıza katıl.",
    href: SITE.telegramUrl,
    label: "Telegram'a Katıl",
    external: true,
    icon: <TelegramIcon />,
    accent: "cyan",
  },
  {
    title: "E-posta",
    desc: "Detaylı taleplerin için e-posta gönderebilirsin. Ortalama yanıt süresi 2-4 saat.",
    href: `mailto:${SITE.supportEmail}`,
    label: SITE.supportEmail,
    external: true,
    icon: <MailIcon />,
    accent: "violet",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <JsonLd
        data={[
          webPageJsonLd({
            title: "İletişim",
            description: "UsBahis iletişim ve destek kanalları",
            path: "/iletisim",
          }),
          breadcrumbJsonLd([
            { name: "Anasayfa", path: "/" },
            { name: "İletişim", path: "/iletisim" },
          ]),
        ]}
      />
      <main className="flex-1">
        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <Breadcrumbs
              items={[{ label: "Anasayfa", href: "/" }, { label: "İletişim" }]}
            />

            <span className="inline-flex items-center gap-2 rounded-full border border-pink/30 bg-pink/10 px-3 py-1 text-xs font-medium text-[var(--pink-soft)]">
              <span className="h-1.5 w-1.5 rounded-full bg-pink" />
              7/24 Destek
            </span>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              İletişim
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-body">
              Sorularını, önerilerini veya destek taleplerini aşağıdaki form
              üzerinden iletebilirsin. Acil konularda Telegram kanalımız en hızlı
              yanıtı verir.
            </p>
          </div>
        </section>

        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
              <div className="rounded-2xl border border-soft bg-surface p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-white">
                  Bize Yazın
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Formu doldur, ekibimiz en kısa sürede sana dönüş yapsın.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>

              <aside className="space-y-4">
                {CHANNELS.map((c) => (
                  <a
                    key={c.title}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="group block rounded-2xl border border-soft bg-surface p-5 transition-colors hover:border-pink/30"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                          c.accent === "cyan"
                            ? "btn-secondary"
                            : c.accent === "violet"
                              ? "border border-violet/40 bg-violet/10 text-violet"
                              : "border border-pink/30 bg-pink/10 text-[var(--pink-soft)]"
                        }`}
                      >
                        {c.icon}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-white">
                          {c.title}
                        </h3>
                        <p className="mt-1 text-sm leading-5 text-muted">
                          {c.desc}
                        </p>
                        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-pink transition-colors group-hover:text-[var(--pink-soft)]">
                          {c.label}
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-3 w-3"
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
                      </div>
                    </div>
                  </a>
                ))}

                <div className="rounded-2xl border border-soft bg-surface p-5">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                    Yanıt Süreleri
                  </h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <Row label="Canlı sohbet" value="Anında" />
                    <Row label="Telegram" value="5-15 dk" />
                    <Row label="E-posta / Form" value="2-4 saat" />
                    <Row label="Çalışma saati" value="7/24" />
                  </dl>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-muted">{label}</dt>
      <dd className="font-medium text-white">{value}</dd>
    </div>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M21.94 4.32a1 1 0 0 0-1.34-1.1L2.85 10.04c-.95.36-.95 1.7.02 2.04l4.55 1.6 1.74 5.6c.22.7 1.1.9 1.6.35l2.42-2.62 4.6 3.4c.7.52 1.7.13 1.85-.74l2.3-15.36ZM9.84 13.97l8.04-7.13-6.36 8.5-1.68 5.6-.72-5.6Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
