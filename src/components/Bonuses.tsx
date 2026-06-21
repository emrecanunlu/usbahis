import { SITE } from "@/lib/site";

const BONUSES = [
  {
    title: "Hoş Geldin Bonusu",
    amount: "%100",
    cap: "20.000 TL'ye kadar",
    desc: "İlk yatırımına özel %100 bonus ve 50 ücretsiz dönüş. Hem spor hem casino için geçerlidir.",
    tag: "Yeni Üye",
  },
  {
    title: "Yatırım Bonusu",
    amount: "%50",
    cap: "Her Yatırımda",
    desc: "Hafta içi her yatırımında %50 ekstra bonus. Çevrim şartı sektör ortalamasının altında.",
    tag: "Sürekli",
  },
  {
    title: "Haftalık Kayıp Bonusu",
    amount: "%25",
    cap: "Pazartesi Otomatik",
    desc: "Haftalık net kaybının %25'i her pazartesi hesabına otomatik tanımlanır.",
    tag: "Otomatik",
  },
  {
    title: "Aviator Cashback",
    amount: "%15",
    cap: "Günlük",
    desc: "Aviator ve crash oyunlarına özel günlük geri ödeme. Üyelik seviyesine göre artar.",
    tag: "Günlük",
  },
];

export function Bonuses() {
  return (
    <section id="bonuslar" className="border-b border-soft bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex items-end justify-between gap-3 border-b border-soft pb-4">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Bonuslar ve Kampanyalar
            </h2>
            <p className="mt-2 max-w-2xl text-[15px] leading-7 text-body">
              UsBahis hem yeni üyeleri hem de mevcut kullanıcıları çeşitli
              kampanyalarla destekler. Tüm bonuslar için ayrıntılı çevrim
              şartları üye panelinde paylaşılır.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BONUSES.map((b) => (
            <article
              key={b.title}
              className="flex flex-col rounded-2xl border border-soft bg-surface p-5 transition-colors hover:border-pink/30"
            >
              <span className="inline-flex w-fit rounded-full border border-pink/30 bg-pink/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--pink-soft)]">
                {b.tag}
              </span>
              <div className="font-display mt-4 text-4xl font-extrabold tracking-tight text-gradient-neon">
                {b.amount}
              </div>
              <div className="mt-1 text-xs text-muted">{b.cap}</div>
              <h3 className="font-display mt-4 text-base font-bold text-white">
                {b.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-body">
                {b.desc}
              </p>
              <a
                href={SITE.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-pink/30 bg-pink/10 px-4 text-xs font-semibold text-[var(--pink-soft)] transition-colors hover:border-pink/60 hover:bg-pink/20"
              >
                Bonusu Talep Et
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
