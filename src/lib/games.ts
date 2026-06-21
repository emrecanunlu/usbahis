export type Game = {
  slug: string;
  title: string;
  short: string;
  subtitle: string;
  badge: string;
  image: string;
  intro: string;
  highlights: string[];
  popular: { name: string; desc: string }[];
  providers: string[];
  faq: { q: string; a: string }[];
};

export const GAMES: Game[] = [
  {
    slug: "spor-bahisleri",
    title: "Canlı Spor Bahisleri",
    short: "Canlı maç, yüksek oran, 35+ spor dalı.",
    subtitle: "1.200+ canlı maç, 35+ spor dalı",
    badge: "Popüler",
    image: "/images/oyunlar/spor.png",
    intro:
      "UsBahis spor bahisleri bölümünde futbol, basketbol, tenis, voleybol, hentbol, masa tenisi, snooker ve e-spor dahil 35'ten fazla spor dalında bahis yapabilirsin. Süper Lig, UEFA Şampiyonlar Ligi, Premier League, La Liga, NBA, EuroLeague, ATP, WTA gibi büyük organizasyonlar için özel oranlar verilir. Canlı izleme özelliği ile seçili maçları platform üzerinden izleyebilir, aynı anda canlı bahis yapabilirsin.",
    highlights: [
      "Maç öncesi (pre-match) ve canlı bahis (in-play) seçenekleri",
      "Maç sonucu, ilk yarı, gol sayısı, toplam korner, kart bahisleri",
      "Sistem bahsi, banko ve kombine kuponlar (kombi-boost ile %50'ye kadar ek bonus)",
      "Canlı maç izleme (seçili Süper Lig, Premier League ve UEFA maçlarında)",
      "Cash out (kupon erken bozma) özelliği ile riski yönet",
      "İddaa fark oranları ile %30'a kadar daha yüksek getiri",
      "Asya handikabı, alt-üst, beraberlikte iade gibi gelişmiş bahis tipleri",
    ],
    popular: [
      { name: "Süper Lig", desc: "Türkiye'nin en üst düzey futbol ligi" },
      { name: "UEFA Şampiyonlar Ligi", desc: "Avrupa'nın en büyük kulüp turnuvası" },
      { name: "NBA", desc: "Kuzey Amerika basketbol ligi" },
      { name: "ATP & WTA", desc: "Profesyonel tenis turnuvaları" },
      { name: "Premier League", desc: "İngiltere futbol ligi" },
      { name: "EuroLeague", desc: "Avrupa basketbol ligi" },
    ],
    providers: ["Betradar", "BetGenius", "SportsBook"],
    faq: [
      {
        q: "Canlı bahiste maç izleyebilir miyim?",
        a: "Evet. Seçili maçlarda UsBahis canlı yayın özelliği sunar. Yayın başlamadan önce hesabında en az 1 TL bakiye olmalı.",
      },
      {
        q: "Cash out nedir?",
        a: "Cash out, kuponun maç bitmeden önce platform tarafından önerilen bir tutar karşılığında kapatılmasıdır. Kazanç kesinleşmeden parayı garantilemeni sağlar.",
      },
    ],
  },
  {
    slug: "canli-casino",
    title: "Canlı Casino",
    short: "Gerçek krupiye, Türkçe masalar, HD yayın.",
    subtitle: "180+ canlı masa, Türkçe krupiye",
    badge: "Türkçe Krupiye",
    image: "/images/oyunlar/casino.png",
    intro:
      "Evolution Gaming, Pragmatic Live, Ezugi ve Authentic Gaming sağlayıcıları ile gerçek stüdyolardan canlı yayınlanan masa oyunları. Türkçe konuşan krupiyelerin bulunduğu özel İstanbul ve İzmir stüdyoları, VIP odalar ve düşük limitli klasik masalar mevcuttur. HD kalitede yayın, çoklu kamera açıları ve mobil uyumlu arayüz ile kara casino atmosferi.",
    highlights: [
      "Rulet: Türkçe rulet, lightning rulet, immersive rulet, hızlı rulet, VIP rulet",
      "Blackjack: klasik, infinite blackjack, free bet blackjack, power blackjack",
      "Baccarat: punto banco, speed baccarat, no commission, dragon tiger",
      "Poker: casino hold'em, three card poker, ultimate texas hold'em, caribbean stud",
      "Game Shows: Crazy Time, Monopoly Live, Mega Wheel, Dream Catcher, Funky Time",
      "HD görüntü kalitesi, mobil uyumlu, tarayıcı tabanlı çalışır",
      "Side bet seçenekleri ile ek kazanç fırsatları",
    ],
    popular: [
      { name: "Crazy Time", desc: "Evolution'ın en popüler eğlence oyunu, x20.000 kazanç" },
      { name: "Lightning Roulette", desc: "Çarpan sembolleri ile rulet, x500 ekstra getiri" },
      { name: "Türkçe Blackjack VIP", desc: "Türkçe krupiye, yüksek limitli masalar" },
      { name: "Monopoly Live", desc: "Klasik Monopoly oyununun canlı versiyonu" },
      { name: "Mega Wheel", desc: "Pragmatic'in renkli ödül çarkı" },
      { name: "Speed Baccarat", desc: "27 saniyede tamamlanan hızlı turlar" },
    ],
    providers: ["Evolution Gaming", "Pragmatic Live", "Ezugi", "Authentic Gaming"],
    faq: [
      {
        q: "Türkçe masalar var mı?",
        a: "Evet. Ezugi ve Pragmatic Live, UsBahis için Türkçe konuşan krupiyelerin bulunduğu özel masalar sunar. Türkçe rulet, blackjack ve baccarat masaları 7/24 aktiftir.",
      },
      {
        q: "Minimum bahis ne kadar?",
        a: "Klasik masalarda 5 TL'den başlar. VIP masalarda minimum 250 TL, maksimum 50.000 TL'ye kadar bahis kabul edilir.",
      },
    ],
  },
  {
    slug: "slot-oyunlari",
    title: "Slot Oyunları",
    short: "5.000+ video slot, jackpot, megaways.",
    subtitle: "5.000+ slot, 40+ sağlayıcı",
    badge: "5.000+ Oyun",
    image: "/images/oyunlar/slot.png",
    intro:
      "Pragmatic Play, NetEnt, Play'n GO, Hacksaw Gaming, Nolimit City ve Push Gaming dahil sektörün önde gelen 40'tan fazla sağlayıcısının tüm oyunları UsBahis kataloğunda yer alır. Sweet Bonanza, Gates of Olympus, Starlight Princess gibi popüler oyunlardan jackpot ve megaways serisine kadar geniş yelpaze. Demo modu ile ücretsiz deneme imkanı.",
    highlights: [
      "Klasik 3 makaralı slotlar (Fruit machine, retro tasarım)",
      "Video slotlar (5 makara, animasyonlu, özellikli)",
      "Megaways serisi (100.000+ değişken ödeme yolu)",
      "Progressive jackpot oyunları (Mega Moolah, Divine Fortune, Hall of Gods)",
      "Bonus buy (özellik satın al) seçenekleri",
      "Demo modunda ücretsiz oynama imkanı",
      "RTP %96+ olan yüksek getirili oyunlar filtresi",
    ],
    popular: [
      { name: "Sweet Bonanza", desc: "Pragmatic Play, RTP %96.51, max x21.100" },
      { name: "Gates of Olympus", desc: "Zeus temalı, max x5.000 çarpan" },
      { name: "Starlight Princess", desc: "Anime tarzı, x5.000 kazanç" },
      { name: "Book of Dead", desc: "Antik Mısır klasik, RTP %96.21" },
      { name: "Wanted Dead or a Wild", desc: "Hacksaw, max x12.500" },
      { name: "Razor Shark", desc: "Push Gaming, x50.000 hikayeler" },
    ],
    providers: ["Pragmatic Play", "NetEnt", "Play'n GO", "Hacksaw", "Nolimit City", "Push Gaming"],
    faq: [
      {
        q: "Slot oyunlarında jackpot var mı?",
        a: "Evet. Mega Moolah, Divine Fortune, Hall of Gods ve Mega Fortune gibi milyonluk progressive jackpot oyunları aktiftir. Jackpot tutarları gerçek zamanlı olarak ekranda gösterilir.",
      },
      {
        q: "Demo modu nedir?",
        a: "Demo modu, slot oyununu gerçek para yatırmadan deneyebilmeni sağlar. Tüm oyunlar üyelik açmadan da test edilebilir.",
      },
    ],
  },
  {
    slug: "aviator-crash",
    title: "Aviator ve Crash Oyunları",
    short: "Anlık çarpan, otomatik cash out, çift bahis.",
    subtitle: "Spribe, Smartsoft ve daha fazlası",
    badge: "Trend",
    image: "/images/oyunlar/aviator.png",
    intro:
      "Anlık çarpan oyunları (crash games) son yıllarda en hızlı büyüyen oyun kategorisi. UsBahis'te Aviator, JetX, Spaceman, Mines, Plinko ve Dice gibi en popüler crash oyunlarının tamamı oynanabilir. Otomatik cash out, çift bahis ve tur geçmişi gibi profesyonel özelliklerle stratejik oyun deneyimi sunar.",
    highlights: [
      "Aviator (Spribe) — sektörün öncüsü, x100+ kazanç hikayeleri",
      "JetX, Spaceman, Cash or Crash — alternatif crash oyunları",
      "Mines, Plinko, Hi-Lo, Dice — instant kazanç oyunları",
      "Otomatik cash out ve çift bahis desteği",
      "Tur geçmişi ve istatistik paneli",
      "Bahisler 0.10 TL'den başlar, 100 TL'ye kadar",
      "Bahis sırasında diğer oyuncuları canlı sohbette gör",
    ],
    popular: [
      { name: "Aviator", desc: "Spribe'ın efsane uçak oyunu" },
      { name: "JetX", desc: "Aviator'ın uzay versiyonu" },
      { name: "Spaceman", desc: "Pragmatic Play imzalı astronot crash" },
      { name: "Mines", desc: "Mayın tarlasında ne kadar yakın geçebilirsin?" },
      { name: "Plinko", desc: "Klasik plinko, çarpan ödülleri" },
      { name: "Cash or Crash", desc: "Evolution'ın crash + ladder kombinasyonu" },
    ],
    providers: ["Spribe", "Smartsoft", "Evolution", "Pragmatic Play"],
    faq: [
      {
        q: "Aviator nasıl oynanır?",
        a: "Bahsini gir, tur başladığında uçak havalanır ve çarpan yükselir. Uçak crash olmadan önce 'Cash Out' butonuna basarsan kazancın garantili. Geç kalırsan bahsi kaybedersin.",
      },
      {
        q: "Otomatik cash out nedir?",
        a: "Belirlediğin çarpana ulaşıldığında bahsin otomatik tamamlanır. Örneğin x2.00 ayarlarsan, uçak x2.00'e ulaştığında bahsin otomatik olarak çekilir.",
      },
    ],
  },
  {
    slug: "sanal-bahis",
    title: "Sanal Bahisler",
    short: "7/24 aktif sanal liglerde bahis.",
    subtitle: "Sanal lig ve yarışlar, 2-3 dk turlar",
    badge: "7/24 Aktif",
    image: "/images/oyunlar/sanal.png",
    intro:
      "Gerçek müsabakaların olmadığı saatlerde sanal liglerde bahis yapabilirsin. Sanal futbol, basketbol, at yarışları, köpek yarışları ve sanal tenis seçenekleri kesintisiz aktif. Sonuçlar 2-3 dakikada belirlenir, gerçek maç heyecanını her saat yaşayabilirsin.",
    highlights: [
      "Sanal Süper Lig, Premier League, La Liga simülasyonları",
      "Sanal NBA basketbol maçları (4 çeyrek)",
      "At yarışları (6-8 koşucu, fotofiniş anonsları)",
      "Tazı yarışları (klasik 6 köpek formatı)",
      "Sanal tenis ve dart turnuvaları",
      "Hızlı sonuçlanan turlar (2-3 dakika)",
      "Maç sonucu, skor, korner, ilk gol gibi geniş bahis seçenekleri",
    ],
    popular: [
      { name: "Sanal Futbol Süper Lig", desc: "20 takımlı Türk ligi simülasyonu" },
      { name: "Sanal Premier League", desc: "İngiltere ligi sanal versiyonu" },
      { name: "At Yarışı", desc: "Foto finiş ve canlı kotalar" },
      { name: "Tazı Yarışı", desc: "6 köpeklik klasik format" },
      { name: "Sanal NBA", desc: "Basketbol simülasyon ligi" },
      { name: "Sanal Tenis", desc: "ATP tarzı eleme sistemli turnuvalar" },
    ],
    providers: ["Inspired", "Kiron", "Leap Gaming"],
    faq: [
      {
        q: "Sanal bahisler nasıl çalışır?",
        a: "Sanal bahis, RNG (rastgele sayı üreteci) algoritması ile çalışan animasyonlu simülasyonlardır. Tüm sonuçlar bağımsız denetim kuruluşları tarafından sertifikalandırılır.",
      },
      {
        q: "Maç sonucu ne kadar sürede belli olur?",
        a: "Sanal futbol maçları 3 dakika, at yarışları 2 dakika sürer. Tüm turlar bittikten sonra hemen yeni tur başlar.",
      },
    ],
  },
  {
    slug: "e-spor",
    title: "E-Spor Bahisleri",
    short: "LoL, CS2, Dota 2, Valorant turnuvaları.",
    subtitle: "Büyük turnuvalar ve canlı maçlar",
    badge: "Yeni",
    image: "/images/oyunlar/espor.png",
    intro:
      "Elektronik spor turnuvaları için özel oranlar. League of Legends Worlds, The International, CS2 Major'lar ve Valorant Champions Tour gibi büyük turnuvalarda hem maç öncesi hem de canlı bahis yapabilirsin. Canlı yayın bağlantısı sayesinde maçı izleyerek bahis yapabilirsin.",
    highlights: [
      "League of Legends (LCK, LEC, LCS, Worlds)",
      "Counter-Strike 2 (Major, ESL Pro League, BLAST)",
      "Dota 2 (The International, DPC turnuvaları)",
      "Valorant (Champions Tour, VCT)",
      "Maç sonucu, harita sayısı, oyuncu istatistikleri bahisleri",
      "İlk kan, ilk kule, ilk Baron gibi özel bahis tipleri",
      "Canlı yayın bağlantısı ile birlikte bahis arayüzü",
    ],
    popular: [
      { name: "LoL Worlds", desc: "League of Legends dünya şampiyonası" },
      { name: "CS2 Major", desc: "Counter-Strike 2 ana turnuvaları" },
      { name: "The International", desc: "Dota 2 prestijli yıllık turnuva" },
      { name: "VCT Champions", desc: "Valorant Champions Tour finalleri" },
      { name: "ESL Pro League", desc: "CS2 profesyonel ligi" },
      { name: "DPC Tournaments", desc: "Dota 2 yıllık tur sistemi" },
    ],
    providers: ["BetRadar Esports", "Pinnacle Esports"],
    faq: [
      {
        q: "Hangi oyunlara bahis yapabilirim?",
        a: "League of Legends, Counter-Strike 2, Dota 2, Valorant, Rainbow Six Siege ve PUBG dahil tüm büyük e-spor başlıkları aktif.",
      },
      {
        q: "Canlı maç izleyebilir miyim?",
        a: "Evet. Büyük turnuvalarda Twitch/YouTube canlı yayın bağlantıları platform içinde gömülü olarak sunulur.",
      },
    ],
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return GAMES.find((g) => g.slug === slug);
}

export function getOtherGames(slug: string): Game[] {
  return GAMES.filter((g) => g.slug !== slug);
}
