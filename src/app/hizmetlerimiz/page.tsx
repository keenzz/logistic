import Link from "next/link";

export default function Hizmetlerimiz() {
  // Tüm hizmetleri içeren veri yapısı
  const hizmetler = [
    {
      id: "sehirlerarasi-tasimacilik",
      baslik: "Şehirlerarası Taşımacılık",
      aciklama: "Türkiye'nin her bölgesine güvenli ve zamanında teslimat hizmetleri sunuyoruz.",
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
      ozellikler: [
        "Tam yük taşıma (FTL)",
        "Parsiyel yük taşıma (LTL)",
        "Nokta-nokta sevkiyat",
        "Zamanında teslimat garantisi",
        "Gerçek zamanlı takip sistemi"
      ]
    },
    {
      id: "depolama",
      baslik: "Depolama Hizmetleri",
      aciklama: "Modern ve güvenli tesislerimizde kısa ve uzun süreli depolama çözümleri sunuyoruz.",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      ozellikler: [
        "Sıcaklık kontrollü depolar",
        "24/7 güvenlik",
        "Stok yönetimi",
        "Barkod sistemi",
        "Sigortalı depolama"
      ]
    },
    {
      id: "express-teslimat",
      baslik: "Express Teslimat",
      aciklama: "Acil gönderileriniz için hızlı ve güvenilir teslimat çözümleri sunuyoruz.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      ozellikler: [
        "Aynı gün teslimat",
        "24 saat içinde teslimat garantisi",
        "Öncelikli yük elleçleme",
        "Özel araç tahsisi",
        "VIP taşıma hizmetleri"
      ]
    },
    {
      id: "agir-yuk-tasimaciligi",
      baslik: "Ağır Yük Taşımacılığı",
      aciklama: "Özel ekipmanlarımız ve deneyimli ekibimizle ağır ve hacimli yükleri güvenle taşıyoruz.",
      icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
      ozellikler: [
        "İnşaat ekipmanları taşıma",
        "Endüstriyel makine taşıma",
        "Proje bazlı taşımacılık",
        "Özel izin gerektiren taşımalar",
        "Teknik ekip desteği"
      ]
    },
    {
      id: "e-ticaret-lojistigi",
      baslik: "E-ticaret Lojistiği",
      aciklama: "E-ticaret işletmeleri için özel olarak tasarlanmış lojistik çözümler sunuyoruz.",
      icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
      ozellikler: [
        "Fulfillment hizmetleri",
        "Paketleme ve etiketleme",
        "İade lojistiği",
        "Son kilometre teslimat",
        "Entegre e-ticaret çözümleri"
      ]
    },
    {
      id: "lojistik-danismanlik",
      baslik: "Lojistik Danışmanlık",
      aciklama: "İşletmenizin lojistik süreçlerini optimize etmenize yardımcı oluyoruz.",
      icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      ozellikler: [
        "Tedarik zinciri analizi",
        "Maliyet optimizasyonu",
        "Rota planlaması",
        "Lojistik yazılım çözümleri",
        "Performans raporlama"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Sayfa Başlığı */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TLHLOGISTIC olarak, müşterilerimizin tüm lojistik ihtiyaçlarını karşılamak için kapsamlı hizmetler sunuyoruz.
          </p>
        </div>

        {/* Hizmetler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {hizmetler.map((hizmet) => (
            <div key={hizmet.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={hizmet.icon} />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{hizmet.baslik}</h2>
                <p className="text-gray-600 mb-4">{hizmet.aciklama}</p>
                
                <ul className="space-y-2 mb-6">
                  {hizmet.ozellikler.map((ozellik, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {ozellik}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={`/hizmetlerimiz/${hizmet.id}`}
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
                >
                  Detaylı Bilgi
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bölümü */}
        <div className="bg-red-600 text-white rounded-xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Özel Lojistik Çözümler</h2>
            <p className="text-xl mb-8">
              İşletmenize özel lojistik çözümler için bizimle iletişime geçin. Uzman ekibimiz, ihtiyaçlarınıza en uygun çözümleri sunmak için hazır.
            </p>
            <Link
              href="/iletisim"
              className="inline-block bg-white text-red-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Teklif Alın
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 