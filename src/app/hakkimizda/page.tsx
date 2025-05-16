import Image from 'next/image';

export default function Hakkimizda() {
  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Sayfa Başlığı */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hakkımızda</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TLHLOGISTIC, Türkiye genelinde lojistik ve taşımacılık sektöründe güvenilir çözümler sunan deneyimli bir firmadır.
          </p>
        </div>

        {/* Ana Bölüm */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Firmamız</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                TLHLOGISTIC, 2010 yılında kurulan ve kısa sürede Türkiye'nin önde gelen lojistik şirketlerinden biri haline gelen bir aile şirketidir. Şirketimiz, müşterilerimizin ihtiyaçlarını anlamak ve bu ihtiyaçlara özel çözümler sunmak prensibini benimsemiştir.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bugün, modern ve genişleyen araç filomuz, deneyimli kadromuz ve teknolojik altyapımız ile Türkiye'nin her noktasına güvenilir lojistik hizmetleri sunmaktayız. Uzun vadeli iş ilişkilerine değer veriyor, müşteri memnuniyetini her zaman ön planda tutuyoruz.
              </p>
            </div>
            <div className="md:w-1/2 relative min-h-[300px]">
              <div className="absolute inset-0 bg-gray-300">
                {/* Firma görseli */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-600">Firma Görseli</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Misyon ve Vizyon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h2>
            <p className="text-gray-600 leading-relaxed">
              Müşterilerimize güvenilir, hızlı ve ekonomik lojistik çözümler sunarak, iş süreçlerini optimize etmelerine ve rekabet avantajı kazanmalarına yardımcı olmak. Her zaman müşteri odaklı, çevre dostu ve yenilikçi yaklaşımlarla sektörde fark yaratmak.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h2>
            <p className="text-gray-600 leading-relaxed">
              Türkiye'nin en güvenilir ve tercih edilen lojistik şirketi olmak, sürekli kendini geliştiren teknolojik altyapısı ve profesyonel ekibiyle sektörde öncü rol oynamak. Müşteri memnuniyetini esas alan, çevreye ve topluma duyarlı bir yaklaşımla sürdürülebilir büyümeyi hedeflemek.
            </p>
          </div>
        </div>

        {/* Değerlerimiz */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Müşteri Odaklılık</h3>
              <p className="text-gray-600">
                Her müşterinin ihtiyaçlarını anlar, beklentilerini karşılar ve ilişkilerimizi güven temeline dayandırırız.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Güvenilirlik</h3>
              <p className="text-gray-600">
                Verdiğimiz sözleri tutar, iş ortaklarımıza ve müşterilerimize karşı sorumluluklarımızı yerine getiririz.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Yenilikçilik</h3>
              <p className="text-gray-600">
                Sürekli gelişim için teknolojik yenilikleri takip eder, iş süreçlerimizi sürekli iyileştiririz.
              </p>
            </div>
          </div>
        </div>

        {/* Ekibimiz */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ekibimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ekip Üyesi 1 */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-600">Profil Fotoğrafı</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Ahmet Kel</h3>
              <p className="text-gray-600 mb-2">Genel Müdür</p>
              <p className="text-gray-500 text-sm">
                20+ yıl lojistik sektörü deneyimi
              </p>
            </div>
            {/* Ekip Üyesi 2 */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-600">Profil Fotoğrafı</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Ayşe Nur</h3>
              <p className="text-gray-600 mb-2">Finans Direktörü</p>
              <p className="text-gray-500 text-sm">
                15+ yıl finans ve işletme deneyimi
              </p>
            </div>
            {/* Ekip Üyesi 3 */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-600">Profil Fotoğrafı</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Mehmet Doğan</h3>
              <p className="text-gray-600 mb-2">Operasyon Direktörü</p>
              <p className="text-gray-500 text-sm">
                18+ yıl operasyon ve lojistik deneyimi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 