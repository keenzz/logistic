import Image from 'next/image';

export default function Filo() {
  // Filo veri dizisi
  const filoVehi = [
    {
      id: 1,
      type: 'Tır',
      count: 25,
      description: 'Uluslararası taşımacılık için donatılmış tırlarımız',
      features: ['Euro 6 motor', 'GPS takip sistemi', 'Soğutmalı opsiyonlar'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      id: 2,
      type: 'Kamyon',
      count: 40,
      description: 'Yurtiçi nakliye için ideal kamyonlar',
      features: ['Yüksek yük kapasitesi', 'Düşük yakıt tüketimi', 'Hızlı teslimat'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      id: 3,
      type: 'Panelvan',
      count: 30,
      description: 'Şehir içi dağıtım için pratik araçlar',
      features: ['Esnek boyutlar', 'Hızlı dağıtım', 'İyi manevra kabiliyeti'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      id: 4,
      type: 'Tanker',
      count: 15,
      description: 'Sıvı taşımacılık için özel tankerler',
      features: ['ADR standartlarına uygun', 'Güvenli taşıma', 'Yüksek kapasite'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Sayfa Başlığı */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Filomuz</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern ve geniş araç filomuzla Türkiye'nin her noktasına güvenli ve hızlı lojistik hizmeti sunuyoruz.
          </p>
        </div>

        {/* Filo İstatistikleri */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Filo İstatistiklerimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">110+</div>
              <p className="text-gray-600">Toplam Araç</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">4.5M+</div>
              <p className="text-gray-600">Yıllık Km</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">150+</div>
              <p className="text-gray-600">Profesyonel Sürücü</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">98%</div>
              <p className="text-gray-600">Zamanında Teslimat</p>
            </div>
          </div>
        </div>

        {/* Araç Tipleri */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Araç Tipilerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filoVehi.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{vehicle.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{vehicle.type}</h3>
                      <p className="text-red-600 font-medium">{vehicle.count} Adet</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{vehicle.description}</p>
                  <h4 className="font-semibold text-gray-900 mb-2">Özellikler:</h4>
                  <ul className="text-gray-600">
                    {vehicle.features.map((feature, index) => (
                      <li key={index} className="flex items-center mb-1">
                        <svg className="h-4 w-4 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-300 h-48 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600">{vehicle.type} Görseli</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filo Yönetimi */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Filo Yönetim Sistemimiz</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
              TLHLOGISTIC olarak, tüm araçlarımız son teknoloji GPS takip sistemleri ile donatılmıştır. Bu sayede, yüklerinizin nerede olduğunu ve tahmini varış süresini anlık olarak takip edebiliyoruz.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Araç filomuz düzenli bakım ve kontrol süreçlerinden geçirilerek, güvenli ve kesintisiz hizmet sunulmaktadır. Sürücülerimiz, güvenli sürüş teknikleri ve yük güvenliği konularında düzenli eğitimler almaktadır.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Filo Avantajlarımız:</h3>
                <ul className="text-gray-600">
                  <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Anlık araç takibi
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Optimum rota planlaması
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Düşük yakıt tüketimi
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Çevre dostu lojistik
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[300px]">
              <div className="absolute inset-0 bg-gray-300 rounded-lg">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-600">Filo Yönetim Sistemi Görseli</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* İletişim CTA */}
        <div className="bg-red-600 rounded-xl shadow-sm p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Sizin için en uygun aracı seçelim</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Yük ve taşıma ihtiyaçlarınıza göre özel çözümler sunuyoruz. 
            Hemen bize ulaşın, nakliye uzmanlarımız size yardımcı olsun.
          </p>
          <a
            href="/iletisim"
            className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Bize Ulaşın
          </a>
        </div>
      </div>
    </div>
  );
} 