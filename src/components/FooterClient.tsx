"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterClient() {
  const pathname = usePathname();
  
  // Admin sayfalarında footer'ı gösterme
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve Kısa Açıklama */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
              TLHLOGISTIC
            </Link>
            <p className="text-gray-400 mt-4">
              Türkiye genelinde profesyonel ve güvenilir lojistik hizmetleri sunuyoruz. Müşteri memnuniyeti odaklı çalışma prensibimiz ile ihtiyaçlarınıza özel çözümler üretiyoruz.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* Diğer sosyal medya ikonları */}
              {/* ... */}
            </div>
          </div>

          {/* Hızlı Erişim Linkleri */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz" className="text-gray-400 hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/filo" className="text-gray-400 hover:text-white transition-colors">
                  Filomuz
                </Link>
              </li>
              <li>
                <Link href="/referanslar" className="text-gray-400 hover:text-white transition-colors">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/kariyer" className="text-gray-400 hover:text-white transition-colors">
                  Kariyer
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetlerimiz/sehirlerarasi-tasimacilik" className="text-gray-400 hover:text-white transition-colors">
                  Şehirlerarası Taşımacılık
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/depolama" className="text-gray-400 hover:text-white transition-colors">
                  Depolama Hizmetleri
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/express-teslimat" className="text-gray-400 hover:text-white transition-colors">
                  Express Teslimat
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/agir-yuk-tasimaciligi" className="text-gray-400 hover:text-white transition-colors">
                  Ağır Yük Taşımacılığı
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/e-ticaret-lojistigi" className="text-gray-400 hover:text-white transition-colors">
                  E-ticaret Lojistiği
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/lojistik-danismanlik" className="text-gray-400 hover:text-white transition-colors">
                  Lojistik Danışmanlık
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                {/* Adres iconu */}
                <span className="text-gray-400">
                  Merkez Mah. Lojistik Cad. No:123<br />
                  Ataşehir, İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-center">
                {/* Telefon iconu */}
                <span className="text-gray-400">+90 212 123 45 67</span>
              </li>
              <li className="flex items-center">
                {/* Email iconu */}
                <span className="text-gray-400">info@tlhlogistic.com</span>
              </li>
              <li className="flex items-center mt-4">
                {/* Saat iconu */}
                <span className="text-gray-400">
                  Pazartesi - Cumartesi: 08:00 - 18:00<br />
                  Pazar: Kapalı
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alt Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TLHLOGISTIC. Tüm hakları saklıdır.
          </div>
          <div className="flex space-x-6">
            <Link href="/gizlilik-politikasi" className="text-gray-400 hover:text-white text-sm transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-kosullari" className="text-gray-400 hover:text-white text-sm transition-colors">
              Kullanım Koşulları
            </Link>
            <Link href="/kvkk" className="text-gray-400 hover:text-white text-sm transition-colors">
              KVKK
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 