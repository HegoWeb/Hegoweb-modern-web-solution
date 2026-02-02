# HegoWeb Projesi - Analiz ve Mimari Plan

## 📋 Mevcut Durum Analizi

### Frontend (Mevcut)
- **Teknoloji Stack:**
  - React 19.2.4
  - TypeScript 5.8.2
  - Vite 6.2.0
  - Tailwind CSS (CDN üzerinden)
  - Lucide React (ikonlar)

- **Özellikler:**
  - Landing page (tek sayfa uygulaması)
  - Responsive tasarım
  - Hero, Hakkımızda, Hizmetler, Projeler, Süreç, İletişim bölümleri
  - İletişim formu (şu anda sadece alert gösteriyor)
  - Smooth scroll navigasyon

- **Eksikler:**
  - Form validasyonu eksik
  - Backend entegrasyonu yok
  - API çağrıları yok
  - State management yok (basit useState kullanılıyor)
  - Environment variables yönetimi eksik
  - Tailwind CSS CDN yerine npm paketi kullanılmalı

### Backend (Mevcut Durum)
- **Durum:** Backend yok
- **İhtiyaçlar:**
  - İletişim formu için API endpoint
  - Email gönderimi
  - Proje yönetimi için admin paneli (ileride)
  - Blog/İçerik yönetimi (ileride)

---

## 🏗️ Önerilen Mimari Yapı

### Frontend (React + TypeScript + Vite)
```
frontend/
├── src/
│   ├── components/          # React bileşenleri
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ContactForm.tsx
│   ├── services/            # API servisleri
│   │   ├── api.ts           # Axios instance
│   │   └── contactService.ts
│   ├── types/               # TypeScript tipleri
│   │   └── index.ts
│   ├── utils/               # Yardımcı fonksiyonlar
│   ├── hooks/               # Custom React hooks
│   ├── App.tsx
│   ├── index.tsx
│   └── main.css             # Tailwind CSS
├── public/
├── .env.local               # Environment variables
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Backend (Laravel)
```
backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── ContactController.php
│   │   ├── Requests/
│   │   │   └── ContactRequest.php
│   │   └── Middleware/
│   ├── Models/
│   │   └── Contact.php
│   ├── Mail/
│   │   └── ContactMail.php
│   └── Services/
│       └── ContactService.php
├── database/
│   ├── migrations/
│   │   └── create_contacts_table.php
│   └── seeders/
├── routes/
│   └── api.php
├── config/
│   └── cors.php
├── .env
└── composer.json
```

---

## 📝 Geliştirme Planı

### Faz 1: Proje Yapısını Ayırma
1. ✅ Mevcut projeyi analiz et
2. ⏳ Frontend klasörü oluştur ve dosyaları taşı
3. ⏳ Backend klasörü oluştur (Laravel kurulumu)
4. ⏳ Git yapısını güncelle

### Faz 2: Backend Geliştirme (Laravel)
1. ⏳ Laravel projesi kurulumu
2. ⏳ CORS yapılandırması
3. ⏳ Database migration (contacts tablosu)
4. ⏳ Contact API endpoint'i
5. ⏳ Email gönderimi (Mailtrap/SMTP)
6. ⏳ Form validasyonu
7. ⏳ Rate limiting (spam koruması)

### Faz 3: Frontend Geliştirme
1. ⏳ Tailwind CSS'i npm paketi olarak ekle
2. ⏳ Axios kurulumu
3. ⏳ API servis katmanı
4. ⏳ Form validasyonu (React Hook Form)
5. ⏳ Error handling
6. ⏳ Loading states
7. ⏳ Success/Error mesajları (Toast notifications)

### Faz 4: Entegrasyon ve Test
1. ⏳ Frontend-Backend entegrasyonu
2. ⏳ CORS testleri
3. ⏳ Form gönderim testleri
4. ⏳ Email gönderim testleri

---

## 🔧 Teknik Gereksinimler

### Backend (Laravel) İhtiyaçları
- PHP >= 8.1
- Composer
- MySQL/PostgreSQL
- Laravel 11.x
- Laravel Sanctum (API authentication için - ileride)
- Laravel Mail (Email gönderimi)

### Frontend İhtiyaçları
- Node.js >= 18
- npm/yarn/pnpm
- Axios (HTTP client)
- React Hook Form (form yönetimi)
- React Hot Toast veya benzeri (bildirimler)

---

## 🚀 Geliştirilebilir Özellikler

### Kısa Vadeli (MVP)
1. ✅ İletişim formu backend entegrasyonu
2. ✅ Email bildirimleri
3. ✅ Form validasyonu
4. ✅ Spam koruması (rate limiting)

### Orta Vadeli
1. 📧 Admin paneli (Laravel Nova veya custom)
2. 📧 İletişim mesajlarını görüntüleme/yönetme
3. 📧 Blog/İçerik yönetim sistemi
4. 📧 Proje portföy yönetimi (CRUD)
5. 📧 SEO optimizasyonu (meta tags, sitemap)

### Uzun Vadeli
1. 🔐 Kullanıcı kimlik doğrulama (admin girişi)
2. 📊 Analytics entegrasyonu
3. 🌐 Çoklu dil desteği (i18n)
4. 📱 PWA (Progressive Web App) desteği
5. 💬 Canlı destek entegrasyonu
6. 📈 A/B test desteği
7. 🎨 Tema yönetimi (dark mode)

---

## 📦 Paket Önerileri

### Frontend
```json
{
  "dependencies": {
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "axios": "^1.6.0",
    "react-hook-form": "^7.48.0",
    "react-hot-toast": "^2.4.1",
    "lucide-react": "^0.563.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.8.2",
    "vite": "^6.2.0",
    "@vitejs/plugin-react": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32"
  }
}
```

### Backend (Laravel)
```json
{
  "require": {
    "php": "^8.1",
    "laravel/framework": "^11.0",
    "laravel/sanctum": "^4.0",
    "guzzlehttp/guzzle": "^7.8"
  }
}
```

---

## 🔐 Güvenlik Önerileri

1. **CORS Yapılandırması:** Sadece frontend domain'ine izin ver
2. **Rate Limiting:** Form gönderimlerini sınırla (örn: dakikada 3 istek)
3. **CSRF Protection:** Laravel'ın built-in CSRF koruması
4. **Input Validation:** Hem frontend hem backend'de
5. **SQL Injection:** Laravel Eloquent ORM kullan (otomatik koruma)
6. **XSS Protection:** React otomatik escape yapar
7. **Environment Variables:** Hassas bilgileri .env'de tut

---

## 📊 API Endpoint Tasarımı

### Contact Form
```
POST /api/contact
Headers:
  Content-Type: application/json
  Accept: application/json

Body:
{
  "name": "string (required, min:2, max:100)",
  "email": "string (required, email)",
  "message": "string (required, min:10, max:1000)"
}

Response (200):
{
  "success": true,
  "message": "Mesajınız başarıyla gönderildi."
}

Response (422):
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": ["The email field is required."]
  }
}
```

---

## 🎯 Sonraki Adımlar

1. Frontend ve backend klasörlerini oluştur
2. Mevcut frontend kodunu yeni yapıya taşı
3. Laravel backend'i kur ve yapılandır
4. API endpoint'lerini geliştir
5. Frontend'i backend'e bağla
6. Test et ve deploy et

---

## 📝 Notlar

- Mevcut `geminiService.ts` dosyası boş, muhtemelen gelecekte AI özellikleri için kullanılacak
- Tailwind CSS şu anda CDN üzerinden yükleniyor, npm paketi olarak kurulmalı
- Proje şu anda tek sayfa uygulaması, ileride routing eklenebilir (React Router)
- Email gönderimi için Mailtrap (development) ve SMTP (production) kullanılabilir
