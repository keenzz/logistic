import Image from 'next/image';

export default function Referanslar() {
  // Referans veri dizisi
  const references = [
    {
      id: 1,
      name: 'ABC Tekstil A.Ş.',
      sector: 'Tekstil',
      description: 'Türkiye\'nin önde gelen tekstil üreticilerinden ABC Tekstil ile 8 yıldır süren iş birliğimiz kapsamında, yurtiçi ve yurtdışı nakliye hizmetleri sunmaktayız.',
      logo: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'XYZ Gıda San. Tic. Ltd. Şti.',
      sector: 'Gıda',
      description: 'XYZ Gıda\'nın soğuk zincir lojistik ihtiyaçlarını 5 yılı aşkın süredir başarıyla yönetmekteyiz. Avrupa ve Orta Doğu\'ya gıda ihracatında iş ortağıyız.',
      logo: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Mega Yapı Malzemeleri',
      sector: 'İnşaat',
      description: 'Mega Yapı\'nın Türkiye genelindeki 45 mağazasına ağır tonajlı yapı malzemelerinin dağıtımını 3 yıldır kesintisiz olarak sağlamaktayız.',
      logo: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Star Otomotiv',
      sector: 'Otomotiv',
      description: 'Star Otomotiv\'un Türkiye\'nin çeşitli illerindeki bayilerine araç dağıtımını özel taşıma sistemlerimizle gerçekleştiriyoruz.',
      logo: '/placeholder.svg'
    },
    {
      id: 5,
      name: 'Tekno Elektronik',
      sector: 'Elektronik',
      description: 'Tekno Elektronik\'in hassas elektronik ürünlerinin güvenli taşınması ve depolanması konusunda 7 yıldır çözüm ortağıyız.',
      logo: '/placeholder.svg'
    },
    {
      id: 6,
      name: 'Sağlık Medikal',
      sector: 'Sağlık',
      description: 'Sağlık Medikal\'in tıbbi malzeme ve ekipmanlarının Türkiye genelindeki hastanelere dağıtımını özel koşullarda gerçekleştirmekteyiz.',
      logo: '/placeholder.svg'
    }
  ];

  // Müşteri yorumları
  const testimonials = [
    {
      id: 1,
      quote: "TLHLOGISTIC ile 8 yıldır çalışıyoruz ve her zaman zamanında, güvenli teslimatlar yapıyorlar. Operasyon ekipleri son derece profesyonel ve çözüm odaklı.",
      author: "Ayşe Yılmaz",
      position: "Lojistik Müdürü, ABC Tekstil",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      quote: "Soğuk zincir taşımacılığında TLHLOGISTIC'in sunduğu kaliteli hizmet sayesinde ürünlerimiz her zaman taze ve güvenli şekilde müşterilerimize ulaşıyor.",
      author: "Mehmet Demir",
      position: "Tedarik Zinciri Direktörü, XYZ Gıda",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      quote: "Ağır ve büyük yapı malzemelerinin taşınması zor bir iş, ancak TLHLOGISTIC bu konuda uzmanlaşmış. Özellikle zamanında teslimat konusundaki başarıları için teşekkür ederiz.",
      author: "Ali Kaya",
      position: "Satın Alma Müdürü, Mega Yapı",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Sayfa Başlığı */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Referanslarımız</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Türkiye'nin önde gelen şirketleri bize güveniyor. Güçlü iş birliklerimiz ve başarı hikayelerimiz.
          </p>
        </div>

        {/* İstatistikler */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">200+</div>
              <p className="text-gray-600">Kurumsal Müşteri</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">12+</div>
              <p className="text-gray-600">Yıllık Deneyim</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">25+</div>
              <p className="text-gray-600">Sektör Çeşitliliği</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">98%</div>
              <p className="text-gray-600">Müşteri Memnuniyeti</p>
            </div>
          </div>
        </div>

        {/* Referans Logoları - Sektörel Gruplar */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Müşterilerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {references.map((ref) => (
              <div key={ref.id} className="bg-white rounded-xl shadow-sm p-6">
                <div className="h-16 mb-4 flex items-center justify-center">
                  <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Logo</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{ref.name}</h3>
                <p className="text-red-600 text-sm font-medium mb-3">Sektör: {ref.sector}</p>
                <p className="text-gray-600 text-sm">{ref.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Müşteri Yorumları */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Müşteri Yorumları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-sm p-6 relative">
                <svg className="h-12 w-12 text-red-100 absolute top-6 left-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="text-gray-600 mb-4 mt-8 relative z-10">
                  "{testimonial.quote}"
                </div>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Foto</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* İşbirliği CTA */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Siz de Referanslarımız Arasına Katılın</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            TLHLOGISTIC olarak, işinizi büyütmenize yardımcı olacak lojistik çözümler sunuyoruz. 
            Siz de müşterilerimiz arasına katılın, işinizi birlikte büyütelim.
          </p>
          <a
            href="/iletisim"
            className="inline-block bg-red-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Bizimle İletişime Geçin
          </a>
        </div>
      </div>
    </div>
  );
} 