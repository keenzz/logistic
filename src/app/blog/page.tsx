import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  // Blog yazıları veri dizisi
  const blogPosts = [
    {
      id: 1,
      title: 'Lojistik Sektöründe Dijital Dönüşüm',
      excerpt: 'Lojistik sektöründe dijital dönüşümün etkileri ve şirketlerin bu dönüşüme nasıl adapte olabilecekleri hakkında bilgiler.',
      date: '15 Mart 2023',
      author: 'Ahmet Durmaz',
      category: 'Teknoloji',
      image: '/placeholder.svg',
      slug: 'lojistik-sektorunde-dijital-donusum'
    },
    {
      id: 2,
      title: 'Sürdürülebilir Lojistik Çözümleri',
      excerpt: 'Çevre dostu lojistik uygulamaları ve karbon ayak izini azaltmak için alınabilecek önlemler.',
      date: '28 Nisan 2023',
      author: 'Ayşe Kel',
      category: 'Sürdürülebilirlik',
      image: '/placeholder.svg',
      slug: 'surdurulebilir-lojistik-cozumleri'
    },
    {
      id: 3,
      title: 'E-Ticaret Lojistiğinde Son Trendler',
      excerpt: 'E-ticaret patlamasıyla birlikte değişen lojistik stratejileri ve müşteri beklentilerini karşılamak için ipuçları.',
      date: '10 Haziran 2023',
      author: 'Mehmet Doğan',
      category: 'E-Ticaret',
      image: '/placeholder.svg',
      slug: 'e-ticaret-lojistiginde-son-trendler'
    },
    {
      id: 4,
      title: 'Lojistikte Yapay Zeka Uygulamaları',
      excerpt: 'Yapay zeka ve makine öğrenmesinin lojistik operasyonlarını nasıl daha verimli hale getirdiğine dair inceleme.',
      date: '22 Temmuz 2023',
      author: 'Ali Yılmaz',
      category: 'Teknoloji',
      image: '/placeholder.svg',
      slug: 'lojistikte-yapay-zeka-uygulamalari'
    },
    {
      id: 5,
      title: 'Tedarik Zinciri Krizleri ve Çözüm Yolları',
      excerpt: 'Küresel tedarik zinciri krizlerinin nedenleri ve şirketlerin bu sorunların üstesinden gelmek için izleyebilecekleri stratejiler.',
      date: '15 Eylül 2023',
      author: 'Zeynep Kaya',
      category: 'Tedarik Zinciri',
      image: '/placeholder.svg',
      slug: 'tedarik-zinciri-krizleri-ve-cozum-yollari'
    },
    {
      id: 6,
      title: 'Uluslararası Nakliyede Gümrük İşlemleri',
      excerpt: 'Uluslararası nakliyede karşılaşılan gümrük işlemleri ve bürokrasi ile başa çıkma yöntemleri.',
      date: '3 Kasım 2023',
      author: 'Murat Demir',
      category: 'Uluslararası Lojistik',
      image: '/placeholder.svg',
      slug: 'uluslararasi-nakliyede-gumruk-islemleri'
    }
  ];

  // Kategoriler
  const categories = [
    'Tümü',
    'Teknoloji',
    'Sürdürülebilirlik',
    'E-Ticaret',
    'Tedarik Zinciri',
    'Uluslararası Lojistik'
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Sayfa Başlığı */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lojistik sektöründen haberler, bilgiler ve uzman görüşleri
          </p>
        </div>

        {/* Kategori Filtreleri */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                index === 0
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Öne Çıkan Yazı */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-2/5 h-64 md:h-auto relative bg-gray-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-600">Blog Görseli</p>
              </div>
            </div>
            <div className="md:w-3/5 p-8">
              <div className="flex items-center mb-4">
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {blogPosts[0].category}
                </span>
                <span className="text-gray-500 text-sm ml-4">{blogPosts[0].date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Foto</span>
                  </div>
                  <span className="text-gray-700 font-medium">{blogPosts[0].author}</span>
                </div>
                <Link 
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center text-red-600 hover:text-red-700"
                >
                  Devamını Oku
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tüm Blog Yazıları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-48 bg-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-600">Blog Görseli</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 mr-2 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">Foto</span>
                    </div>
                    <span className="text-gray-700 text-sm">{post.author}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    Devamını Oku
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Abone Ol CTA */}
        <div className="bg-red-600 rounded-xl shadow-sm p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Lojistik Dünyasından Haberdar Olun</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Aylık bültenimize abone olun, lojistik sektöründeki son gelişmeler ve fırsatlar hakkında bilgi sahibi olun.
          </p>
          <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-grow rounded-lg px-4 py-3 text-gray-900 focus:outline-none"
            />
            <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Abone Ol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 