import Image from 'next/image';
import Link from 'next/link';

export default function Career() {
  // Açık pozisyonlar veri dizisi
  const openPositions = [
    {
      id: 1,
      title: 'Lojistik Operasyon Uzmanı',
      location: 'İstanbul',
      type: 'Tam Zamanlı',
      department: 'Operasyon',
      description: 'Lojistik operasyonların planlanması ve yönetilmesinde görev alacak, müşteri memnuniyetini ön planda tutacak takım arkadaşları arıyoruz.',
      requirements: [
        'Üniversitelerin ilgili bölümlerinden mezun',
        'En az 2 yıl lojistik sektörü deneyimi',
        'İyi derecede İngilizce',
        'MS Office programlarına hakim',
        'Seyahat engeli olmayan',
        'Erkek adaylar için askerlik görevini tamamlamış'
      ],
      slug: 'lojistik-operasyon-uzmani'
    },
    {
      id: 2,
      title: 'Filo Yönetim Sorumlusu',
      location: 'Ankara',
      type: 'Tam Zamanlı',
      department: 'Filo Yönetimi',
      description: 'Araç filomuzun yönetimi, bakım planlaması ve optimizasyonu konusunda sorumluluk alacak deneyimli adaylar arıyoruz.',
      requirements: [
        'Üniversitelerin ilgili bölümlerinden mezun',
        'En az 3 yıl filo yönetimi deneyimi',
        'Araç bakım ve onarım süreçlerine hakim',
        'Sürücü yönetimi deneyimi',
        'Rota optimizasyonu konusunda bilgi sahibi',
        'Erkek adaylar için askerlik görevini tamamlamış'
      ],
      slug: 'filo-yonetim-sorumlusu'
    },
    {
      id: 3,
      title: 'Depo Operasyon Sorumlusu',
      location: 'İzmir',
      type: 'Tam Zamanlı',
      department: 'Depo Yönetimi',
      description: 'Depo operasyonlarının verimli ve düzenli bir şekilde yürütülmesinden sorumlu olacak, ekip yönetimi deneyimine sahip adaylar arıyoruz.',
      requirements: [
        'Lise veya üniversite mezunu',
        'En az 2 yıl depo yönetimi deneyimi',
        'Forklift operatörlüğü sertifikası',
        'Microsoft Office programlarına hakim',
        'Vardiyalı çalışabilecek',
        'Erkek adaylar için askerlik görevini tamamlamış'
      ],
      slug: 'depo-operasyon-sorumlusu'
    },
    {
      id: 4,
      title: 'Müşteri İlişkileri Temsilcisi',
      location: 'İstanbul',
      type: 'Tam Zamanlı',
      department: 'Müşteri İlişkileri',
      description: 'Müşteri taleplerini karşılayacak, şikayet ve önerileri değerlendirecek, müşteri memnuniyetini artıracak takım arkadaşları arıyoruz.',
      requirements: [
        'En az lise mezunu',
        'Tercihen müşteri ilişkileri alanında deneyim',
        'İletişim becerileri yüksek',
        'Microsoft Office programlarına hakim',
        'Vardiyalı çalışabilecek'
      ],
      slug: 'musteri-iliskileri-temsilcisi'
    }
  ];

  // Şirket değerleri
  const companyValues = [
    {
      title: 'Takım Çalışması',
      description: 'Birlikte çalışarak daha büyük başarılara imza atıyoruz.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Sürekli Gelişim',
      description: 'Kendimizi ve iş süreçlerimizi sürekli geliştirmeye odaklanıyoruz.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Müşteri Odaklılık',
      description: 'Müşterilerimizin beklentilerini aşan hizmetler sunmak için çalışıyoruz.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Sayfa Başlığı */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Kariyer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TLHLOGISTIC ailesinin bir parçası olun, geleceğin lojistik çözümlerini birlikte geliştirelim.
          </p>
        </div>

        {/* Neden TLHLOGISTIC? */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Neden TLHLOGISTIC?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                TLHLOGISTIC olarak, çalışanlarımızı en değerli varlığımız olarak görüyoruz. Dinamik, yenilikçi ve sürekli gelişen bir çalışma ortamında, kariyer hedeflerinize ulaşmanız için size destek oluyoruz.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Eğitim ve gelişim programlarımız, performans ödüllendirme sistemimiz ve sosyal aktivitelerimiz ile çalışanlarımızın hem profesyonel hem de kişisel gelişimlerini destekliyoruz.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Sunduğumuz Fırsatlar:</h3>
                <ul className="text-gray-600">
                  <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Kariyer gelişim imkanları
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sürekli eğitim ve gelişim programları
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Rekabetçi ücret ve yan haklar
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Pozitif ve dinamik çalışma ortamı
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[300px]">
              <div className="absolute inset-0 bg-gray-300">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-600">Çalışan Görseli</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Şirket Değerleri */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="text-red-600 mx-auto mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Açık Pozisyonlar */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Açık Pozisyonlar</h2>
          
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                      <p className="text-gray-500 text-sm">{position.department}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {position.location}
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <h4 className="font-semibold text-gray-900 mb-2">Aranan Özellikler:</h4>
                  <ul className="text-gray-600 mb-4 pl-5 space-y-1 list-disc">
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                  <button className="inline-block bg-red-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    Başvur
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Başvuru Formu */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Genel Başvuru</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-8 text-center">
              Açık pozisyonlarımız dışında da başvuru yapmak isterseniz, özgeçmişinizi bize gönderebilirsiniz. Uygun bir pozisyon açıldığında sizinle iletişime geçeceğiz.
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
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                  İlgilendiğiniz Pozisyon
                </label>
                <select
                  id="position"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Seçiniz</option>
                  <option value="operasyon">Operasyon</option>
                  <option value="filo">Filo Yönetimi</option>
                  <option value="depo">Depo Yönetimi</option>
                  <option value="muhasebe">Muhasebe / Finans</option>
                  <option value="satis">Satış / Pazarlama</option>
                  <option value="insan-kaynaklari">İnsan Kaynakları</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Kısa Not
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  placeholder="Kendiniz hakkında kısa bir bilgi verebilirsiniz."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                  CV Yükle
                </label>
                <input
                  type="file"
                  id="cv"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  accept=".pdf,.doc,.docx"
                />
                <p className="text-xs text-gray-500 mt-1">PDF, DOC veya DOCX formatında dosya yükleyebilirsiniz (max. 5MB)</p>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Başvuruyu Gönder
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Çalışan Hikayeleri */}
        <div className="bg-gray-100 rounded-xl shadow-sm p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Çalışan Hikayeleri</h2>
          <div className="bg-white rounded-lg p-6 md:p-8 relative">
            <svg className="h-12 w-12 text-red-100 absolute top-6 left-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <div className="text-gray-600 mb-6 mt-6 md:mt-0 md:ml-12 relative z-10">
              "TLHLOGISTIC'te çalışmaya başladığımda, kariyerimde yeni bir sayfaydı. 5 yıl içinde gösterdiğim performans ve şirketin sunduğu gelişim fırsatları sayesinde operasyon sorumluluğundan departman yöneticiliğine yükseldim. Burada sadece bir çalışan değil, ailenin bir parçası olduğunuzu hissediyorsunuz."
            </div>
            <div className="flex items-center md:ml-12">
              <div className="h-12 w-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                <span className="text-gray-500 text-xs">Foto</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Mehmet Yılmaz</h4>
                <p className="text-gray-500 text-sm">Operasyon Müdürü / 5 Yıldır TLHLOGISTIC'te</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 