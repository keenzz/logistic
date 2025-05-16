import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] bg-gray-900 text-white flex items-center">
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <Image 
            src="/hero-bg.jpg" 
            alt="Lojistik Araçları"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Türkiye'nin Güvenilir Lojistik Çözüm Ortağı
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              TLHLOGISTIC ile şehirlerarası yük taşımacılığı hizmetlerinde güvenli, hızlı ve ekonomik çözümler
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/hizmetlerimiz" 
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Hizmetlerimiz
              </Link>
              <Link 
                href="/iletisim" 
                className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Bizimle İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler Özeti */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hizmetlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lojistik ihtiyaçlarınız için kapsamlı ve profesyonel çözümler sunuyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hizmet Kartı 1 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Şehirlerarası Taşımacılık</h3>
              <p className="text-gray-600 mb-4">
                Türkiye'nin her yerine güvenli ve hızlı yük taşıma hizmetleri
              </p>
              <Link href="/hizmetlerimiz/sehirlerarasi-tasimacilik" className="text-red-600 font-medium hover:text-red-700 flex items-center">
                Detaylı Bilgi
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* Hizmet Kartı 2 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Depolama Hizmetleri</h3>
              <p className="text-gray-600 mb-4">
                Kısa ve uzun vadeli profesyonel depolama ve stok yönetimi
              </p>
              <Link href="/hizmetlerimiz/depolama" className="text-red-600 font-medium hover:text-red-700 flex items-center">
                Detaylı Bilgi
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* Hizmet Kartı 3 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Express Teslimat</h3>
              <p className="text-gray-600 mb-4">
                Acil gönderileriniz için hızlı ve güvenilir teslimat çözümleri
              </p>
              <Link href="/hizmetlerimiz/express-teslimat" className="text-red-600 font-medium hover:text-red-700 flex items-center">
                Detaylı Bilgi
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/hizmetlerimiz" className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors">
              Tüm Hizmetlerimizi Görüntüleyin
            </Link>
          </div>
        </div>
      </section>

      {/* Neden Bizi Tercih Etmelisiniz? */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              TLHLOGISTIC olarak müşterilerimize en iyi hizmeti sunmak için çalışıyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Özellik 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Zamanında Teslimat</h3>
              <p className="text-gray-600">
                Teslimatlarda gecikme yaşanmaması için titizlikle çalışıyoruz
              </p>
            </div>
            
            {/* Özellik 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Güvenli Taşıma</h3>
              <p className="text-gray-600">
                Yükleriniz sigortalı ve güvenli bir şekilde taşınır
              </p>
            </div>
            
            {/* Özellik 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Profesyonel Ekip</h3>
              <p className="text-gray-600">
                Deneyimli ve profesyonel ekibimizle hizmetinizdeyiz
              </p>
            </div>
            
            {/* Özellik 4 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rekabetçi Fiyatlar</h3>
              <p className="text-gray-600">
                Kaliteli hizmeti uygun fiyatlarla sunuyoruz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Lojistik İhtiyaçlarınız İçin Bizimle İletişime Geçin</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Profesyonel ekibimiz, lojistik ihtiyaçlarınız için en uygun çözümleri sunmak için hazır
          </p>
          <Link 
            href="/iletisim" 
            className="bg-white text-red-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Hemen İletişime Geçin
          </Link>
        </div>
      </section>
    </div>
  );
} 