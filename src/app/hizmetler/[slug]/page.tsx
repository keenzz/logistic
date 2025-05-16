import Image from 'next/image';
import Link from 'next/link';

// Hizmet verileri (gerçek uygulamada bir veritabanından veya API'den gelecektir)
const services = [
  {
    id: 1,
    title: 'Karayolu Taşımacılığı',
    description: 'Türkiye genelinde ve uluslararası pazarlarda güvenilir karayolu taşımacılık hizmetleri sunuyoruz.',
    slug: 'karayolu-tasimaciligi',
    icon: '🚚',
    fullDescription: 'TLHLOGISTIC olarak, modern araç filomuz ve deneyimli sürücü kadromuzla Türkiye\'nin her noktasına ve uluslararası destinasyonlara karayolu taşımacılık hizmeti sunuyoruz. Parsiyel ve komple yük taşımacılığında uzmanlaşmış ekibimizle, yüklerinizi güvenle ve zamanında teslim ediyoruz.',
    features: [
      'Yurt içi ve yurt dışı taşımacılık',
      'Parsiyel ve komple yük taşıma',
      'Soğuk zincir taşımacılığı',
      'Ağır ve gabari dışı yük taşımacılığı',
      'Tehlikeli madde taşımacılığı (ADR)',
      'Proje taşımacılığı',
    ],
    benefits: [
      'Güvenilir ve zamanında teslimat',
      'GPS ile araç takibi',
      'Tecrübeli ve eğitimli sürücüler',
      'Modern ve bakımlı araç filosu',
      'Rekabetçi fiyatlandırma',
      '7/24 müşteri desteği',
    ],
    process: [
      {
        step: 1,
        title: 'Talep ve Planlama',
        description: 'Müşteri taleplerinin alınması ve en uygun araç ve rota planlamasının yapılması.'
      },
      {
        step: 2,
        title: 'Yükleme ve Dokümantasyon',
        description: 'Kargonun güvenli şekilde yüklenmesi ve gerekli evrakların hazırlanması.'
      },
      {
        step: 3,
        title: 'Taşıma',
        description: 'Profesyonel sürücülerimiz tarafından yükün güvenle taşınması ve anlık konum bilgisi sağlanması.'
      },
      {
        step: 4,
        title: 'Teslimat',
        description: 'Kargonun zamanında ve hasarsız olarak alıcıya teslim edilmesi.'
      }
    ],
    faq: [
      {
        question: 'Karayolu taşımacılığında hangi tür araçlar kullanılmaktadır?',
        answer: 'Filomuzdaki araçlar arasında TIR, kamyon, kamyonet ve panelvan gibi farklı boyut ve kapasitede araçlar bulunmaktadır. Taşınacak yükün özelliklerine ve miktarına göre en uygun araç seçimi yapılmaktadır.'
      },
      {
        question: 'Yurt dışı taşımacılıkta hangi ülkelere hizmet veriyorsunuz?',
        answer: 'Başta Avrupa ülkeleri olmak üzere, Orta Doğu, Rusya ve Türki Cumhuriyetler\'e düzenli karayolu taşımacılık hizmeti sağlamaktayız.'
      },
      {
        question: 'Tehlikeli madde taşımacılığı yapıyor musunuz?',
        answer: 'Evet, ADR sertifikalı araçlarımız ve eğitimli sürücülerimiz ile tehlikeli madde taşımacılığı hizmeti vermekteyiz.'
      }
    ]
  },
  // Diğer hizmetler burada yer alacak
];

// Genel olarak kullanılacak bir parametre tipini tanımlıyoruz
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default function ServiceDetail({ params }: Props) {
  // URL'den gelen slug parametresini kullanarak ilgili hizmeti buluyoruz
  const paramValue = params as unknown as { slug: string };
  const service = services.find((s) => s.slug === paramValue.slug);

  // Eğer hizmet bulunamadıysa 404 benzeri bir mesaj gösteririz
  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Hizmet Bulunamadı</h1>
        <p className="mb-8">Aradığınız hizmet sayfası bulunamadı.</p>
        <Link href="/hizmetler" className="bg-red-600 text-white px-6 py-3 rounded-lg">
          Tüm Hizmetlerimize Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hizmet Başlığı */}
        <div className="text-center mb-16">
          <div className="text-5xl mb-6">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{service.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>

        {/* Ana Açıklama Bölümü */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hizmet Açıklaması</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.fullDescription}
              </p>
              <Link
                href="/iletisim"
                className="inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Teklif Alın
              </Link>
            </div>
            <div className="md:w-1/2 relative min-h-[300px]">
              <div className="absolute inset-0 bg-gray-300">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-600">Hizmet Görseli</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Özellikler ve Avantajlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hizmet Kapsamı</h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-red-600 mr-3 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Avantajlarımız</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-red-600 mr-3 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Süreç Adımları */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nasıl Çalışıyoruz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {service.process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sık Sorulan Sorular */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sık Sorulan Sorular</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {service.faq.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bölümü */}
        <div className="bg-red-600 rounded-xl shadow-sm p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Bu hizmet ile ilgili teklif almak ister misiniz?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Yük ve taşıma ihtiyaçlarınıza özel çözümler için hemen bizimle iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/iletisim"
              className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              İletişime Geçin
            </Link>
            <Link
              href="/hizmetler"
              className="inline-block bg-transparent text-white border-2 border-white font-semibold px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Diğer Hizmetlerimiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 