import Image from 'next/image';
import Link from 'next/link';

export default function OnlineServices() {
  // Online hizmetler veri dizisi
  const onlineServices = [
    {
      id: 1,
      title: 'Kargo Takibi',
      description: 'Gönderilerinizin anlık durumunu ve konumunu takip edin.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Online Teklif',
      description: 'Taşıma ihtiyaçlarınız için hızlı ve kolay şekilde fiyat teklifi alın.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Kargo Siparişi',
      description: 'Hızlı ve kolay şekilde yeni bir kargo siparişi oluşturun.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Müşteri Portalı',
      description: 'Tüm gönderilerinizi, faturalarınızı ve sözleşmelerinizi yönetin.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Depo Yönetimi',
      description: 'Depolama hizmetlerimizi kullanıyorsanız, envanter durumunuzu kontrol edin.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
          <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Destek Merkezi',
      description: 'Sorularınız ve sorunlarınız için online destek alın.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Sayfa Başlığı */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Online Hizmetlerimiz</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lojistik ihtiyaçlarınızı yönetmek için sunduğumuz dijital çözümler
          </p>
        </div>

        {/* Online Hizmetler Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {onlineServices.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="p-8 flex-grow">
                <div className="text-red-600 mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div className="px-8 pb-8 pt-4 mt-auto">
                <button className="w-full bg-red-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Kullanmaya Başla
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Kargo Takip Formu */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kargo Takibi</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-gray-600 mb-6 text-center">
              Gönderinizin güncel durumunu öğrenmek için takip numaranızı giriniz.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="trackingNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Takip Numarası
                </label>
                <input
                  type="text"
                  id="trackingNumber"
                  placeholder="Örn: KBL12345678"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Kargo Durumunu Sorgula
              </button>
            </form>
          </div>
        </div>

        {/* Online Teklif Formu */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hızlı Teklif Alın</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-8 text-center">
              Taşıma ihtiyaçlarınız için hızlı ve kolay şekilde fiyat teklifi alın. Formunu doldurun, uzmanlarımız sizinle iletişime geçsin.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Hizmet Türü
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Seçiniz</option>
                  <option value="karayolu">Karayolu Taşımacılığı</option>
                  <option value="denizyolu">Denizyolu Taşımacılığı</option>
                  <option value="havayolu">Havayolu Taşımacılığı</option>
                  <option value="intermodal">İntermodal Taşımacılık</option>
                  <option value="depolama">Depolama</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  placeholder="Taşınacak yük, ağırlık, boyutlar, tarih gibi detayları belirtiniz."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Teklif İsteği Gönder
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Mobile App Tanıtımı */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-sm overflow-hidden">
          <div className="md:flex items-center">
            <div className="md:w-1/2 p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Mobil Uygulamamızı İndirin</h2>
              <p className="mb-8 text-red-100">
                TLHLOGISTIC mobil uygulamamız ile kargolarınızı takip edebilir, yeni sevkiyat oluşturabilir ve geçmiş gönderilerinizi görüntüleyebilirsiniz. Hemen indirin, lojistik işlerinizi cebinizden yönetin.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center bg-white text-gray-900 px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.6 11.8c-.1-.9-.5-1.6-1-2.2-.8-.8-1.9-1.3-3.1-1.4h-.1c-1.2.1-2.3.6-3.1 1.4-.5.6-.9 1.3-1 2.2s0 1.8.3 2.7c.3.7.8 1.3 1.4 1.8.3.2.6.4.9.5-.2.1-.4.1-.6.2-.6.2-1.2.2-1.8.1-.5-.1-1-.3-1.4-.5-.6-.5-1-.9-1.1-1.5-.1-.4.1-.8.3-1.1.1-.2.3-.4.5-.6.3-.2.5-.3.8-.4.1 0 .2-.1.2-.1 0-.1-.1-.1-.1-.2-.1-.1-.2-.2-.3-.2s-.2-.1-.4-.1c-.2 0-.4 0-.5.1-.5.1-.9.5-1.3.9-.6.7-.8 1.8-.7 2.7.1.9.5 1.8 1.2 2.4.4.3.9.5 1.4.7.5.1 1 .2 1.6.2.6 0 1.1-.1 1.6-.2.2-.1.5-.1.7-.2.3-.1.6-.2.8-.4.3-.1.5-.3.7-.5.3-.3.6-.7.8-1 .3-.5.4-1 .4-1.6 0-.5-.1-1-.3-1.5-.1-.2-.3-.5-.4-.7-.3-.5-.6-.8-1-1.1-.5-.4-1-.6-1.6-.7-.4-.1-.8 0-1.1.1-.3.1-.6.3-.9.5-.1.1-.2.2-.3.3s-.1.2-.2.2c0 0 0-.1-.1-.1s-.2-.1-.2-.1c.1-.1.1-.1.2-.2.2-.2.3-.4.5-.5.3-.2.7-.4 1.1-.4.5-.1.9 0 1.4.1.5.1 1 .3 1.4.6.6.4 1 .9 1.1 1.6.1.5 0 1-.1 1.4-.3.7-.7 1.2-1.3 1.7-.5.3-1 .5-1.7.7-.2.1-.4.1-.6.1-.3.1-.6.1-1 .1-.6 0-1.2-.1-1.8-.3-.3-.1-.6-.3-.9-.5-.6-.4-1-1-1.3-1.7-.2-.6-.2-1.3-.1-1.9.1-.6.2-1.1.6-1.5.2-.3.5-.5.8-.7h.3c.1 0 .1 0 .2.1.2-.1.1-.1.1-.2s-.2-.1-.2-.1c-.6.1-1.1.2-1.6.5s-.9.7-1.1 1.2c-.3.8-.2 1.6 0 2.3.8 2.4 3.3 3.6 5.6 2.7.5-.1.9-.4 1.4-.7.1-.1.2-.1.3-.2.2-.1.4-.3.6-.4.4-.3.7-.7.9-1.1.3-.6.4-1.2.3-1.8h-.2z"/>
                  </svg>
                  Google Play
                </a>
                <a href="#" className="flex items-center bg-white text-gray-900 px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 8.5c.1 0 2.5-1.7 2.5-1.7s-2.1-2.8-2.5-3.2c-.4-.4-1-.5-1.7-.5-.3 0-.7.1-1 .2-.3.1-.6.2-.9.3-.2.1-.5.3-.7.4-.3.1-.6.3-.8.3m-9 9c-.1 0-2.5 1.7-2.5 1.7s2.1 2.8 2.5 3.2c.4.4 1 .5 1.7.5.3 0 .7-.1 1-.2.3-.1.6-.2.9-.3.2-.1.5-.3.7-.4.3-.1.6-.3.8-.3m12.4-9.9c-.4.3-12.1 9.7-12.1 9.7v.2c0 .6.2 1.2.5 1.6.4.6 1 1.1 1.7 1.5.3.2.7.3 1.1.3.8 0 1.5-.3 2-1l7.8-9.9c.1-.1.1-.2.1-.3 0-.4-.3-.7-.6-.9-.2-.1-.3-.2-.5-.2h-.1l.1.1z"/>
                  </svg>
                  App Store
                </a>
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex justify-center">
              <div className="bg-gray-300 h-80 w-48 rounded-3xl flex items-center justify-center">
                <p className="text-gray-600">Mobil Uygulama Görseli</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 