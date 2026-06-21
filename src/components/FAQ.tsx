export const FAQ_ITEMS = [
  {
    q: "UsBahis güncel giriş adresi nedir?",
    a: "UsBahis güncel giriş adresi usbahis871.com'dur. Erişim engellerinden etkilenmemek için bu sayfanın üst kısmındaki 'Güncel Giriş Adresi' butonunu kullanabilirsin; her zaman yeni adrese yönlendirilirsin.",
  },
  {
    q: "Üyelik açmak ücretsiz mi?",
    a: "Evet. Üyelik tamamen ücretsizdir ve 30 saniye içinde tamamlanır. Telefon numaran ile temel bilgilerin yeterli; ardından ilk yatırımına %100 hoş geldin bonusunu otomatik alabilirsin.",
  },
  {
    q: "Para çekme işlemleri ne kadar sürer?",
    a: "Onaylanmış hesaplarda çekim talepleri ortalama 3 dakika içinde sonuçlanır. Papara ve kripto yöntemlerinde işlemler anlık tamamlanır; banka havalesinde 10-30 dakika sürebilir.",
  },
  {
    q: "Hangi ödeme yöntemleri destekleniyor?",
    a: "Papara, kripto para (USDT, BTC, ETH), havale/EFT, kredi kartı, mobil ödeme ve QR ile yatırım seçeneklerinin tamamı aktif. Tüm yöntemlerde komisyon alınmaz.",
  },
  {
    q: "Bonusların çevrim şartı nedir?",
    a: "Hoş geldin bonusunda spor için 1x, casino için 25x çevrim uygulanır. Kayıp ve cashback bonuslarında çevrim şartı bulunmaz; doğrudan çekilebilir.",
  },
  {
    q: "Lisanslı ve güvenli mi?",
    a: "UsBahis, Curaçao eGaming lisansı altında 256-bit SSL şifreleme ile hizmet verir. Tüm kullanıcı verileri ve ödemeler uçtan uca korunur.",
  },
];

export function FAQ() {
  return (
    <section className="border-b border-soft bg-surface-2">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="border-b border-soft pb-4">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-2 max-w-2xl text-[15px] leading-7 text-body">
            Kullanıcılarımızın en çok sorduğu sorular ve cevapları. Daha fazlası
            için 7/24 canlı destek ekibimize ulaşabilirsin.
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-soft bg-surface">
          {FAQ_ITEMS.map((item, i) => (
            <details
              key={item.q}
              className="group border-b border-soft last:border-b-0 [&_summary::-webkit-details-marker]:hidden"
              open={i === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-white/[0.02] sm:px-6 sm:py-5">
                <span className="font-display text-base font-semibold text-white sm:text-lg">
                  {item.q}
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-pink/30 bg-pink/10 text-pink transition-transform group-open:rotate-45">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 sm:px-6">
                <p className="text-[15px] leading-7 text-body">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
