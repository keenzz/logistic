import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNavbar from "@/components/MobileBottomNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TLHLOGISTIC - Türkiye'nin Güvenilir Lojistik Çözüm Ortağı",
  description: "TLHLOGISTIC ile şehirlerarası yük taşımacılığı, depolama ve dağıtım hizmetleri, express teslimat ve daha fazlası. Türkiye genelinde profesyonel lojistik çözümleri sunuyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-10 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBottomNavbar />
      </body>
    </html>
  );
}
