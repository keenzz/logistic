"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HeaderClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Admin sayfalarında header'ı gösterme
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white py-4 px-4 md:px-8 w-full shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-44">
            {/* Logo yerine şimdilik metin kullanıyoruz, logo eklendiğinde Image komponenti kullanılabilir */}
            <span className="text-xl font-bold text-red-600">TLHLOGISTIC</span>
          </div>
        </Link>

        {/* Mobil Menü Butonu */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Masaüstü Menüsü */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
            Ana Sayfa
          </Link>
          <Link href="/hakkimizda" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
            Hakkımızda
          </Link>
          <Link href="/hizmetlerimiz" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
            Hizmetlerimiz
          </Link>
          <Link href="/filo" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
            Filomuz
          </Link>
          <Link href="/referanslar" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
            Referanslar
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
            Blog
          </Link>
          <Link href="/iletisim" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
            İletişim
          </Link>
          <Link 
            href="/online-hizmetler" 
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Online Hizmetler
          </Link>
        </div>

        {/* Mobil Menüsü */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
            <div className="flex flex-col py-4 px-4">
              <Link 
                href="/" 
                className="py-2 text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/hakkimizda" 
                className="py-2 text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link 
                href="/hizmetlerimiz" 
                className="py-2 text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetlerimiz
              </Link>
              <Link 
                href="/filo" 
                className="py-2 text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Filomuz
              </Link>
              <Link 
                href="/referanslar" 
                className="py-2 text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Referanslar
              </Link>
              <Link 
                href="/blog" 
                className="py-2 text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/iletisim" 
                className="py-2 text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <Link 
                href="/online-hizmetler" 
                className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Online Hizmetler
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 