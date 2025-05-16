# Lojistik Web Sitesi Projesi

Bu proje, Lojistik firması için geliştirilmiş modern bir web sitesi ve yönetim panelidir. [Next.js](https://nextjs.org) framework'ü kullanılarak geliştirilmiştir.

## Özellikler

- Responsive ve modern tasarım
- SEO dostu yapı
- Dinamik içerik yönetimi
- Admin paneli ile kolay içerik güncelleme
- Blog yönetimi
- Filo yönetimi
- Hizmet detayları
- İletişim formu
- Kariyer sayfası
- Online hizmetler (Kargo takip, teklif alma)
- Müşteri ilişkileri yönetimi

## Teknolojiler

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Veritabanı**: Supabase
- **Kimlik Doğrulama**: NextAuth.js
- **Deployment**: Vercel

## Başlangıç

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# Depoyu klonlayın
git clone https://github.com/keenzz/logistic.git
cd logistic

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açarak sonucu görebilirsiniz.

## Proje Yapısı

- `src/app/` - Ana sayfa ve diğer sayfalar
  - `(main)/` - Ana site sayfaları
  - `admin/` - Yönetim paneli
  - `api/` - API endpointleri
  - `blog/` - Blog sayfaları
  - `filo/` - Filo sayfaları
  - `hizmetler/` - Hizmetler sayfaları
  - `hakkimizda/` - Hakkımızda sayfası
  - `iletisim/` - İletişim sayfası
  - `kariyer/` - Kariyer sayfası
  - `online-hizmetler/` - Online hizmetler sayfaları
  - `referanslar/` - Referanslar sayfası
- `src/components/` - Yeniden kullanılabilir bileşenler
- `src/lib/` - Yardımcı fonksiyonlar ve kütüphaneler
- `src/types/` - TypeScript tipleri
- `public/` - Statik dosyalar

## Canlı Demo

[https://tlh-logistic.vercel.app](https://tlh-logistic.vercel.app) (örnek link)

## Lisans

Bu proje [MIT lisansı](LICENSE) altında lisanslanmıştır.