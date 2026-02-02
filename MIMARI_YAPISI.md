# HegoWeb - Mimari Yapı ve Klasör Organizasyonu

## 📁 Önerilen Proje Yapısı

```
hegoweb---modern-web-solutions/
│
├── frontend/                    # React Frontend Uygulaması
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── Footer.tsx
│   │   │   ├── sections/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── About.tsx
│   │   │   │   ├── Services.tsx
│   │   │   │   ├── Projects.tsx
│   │   │   │   ├── Process.tsx
│   │   │   │   └── Contact.tsx
│   │   │   └── ui/
│   │   │       ├── ServiceCard.tsx
│   │   │       ├── ProjectCard.tsx
│   │   │       ├── ProcessStep.tsx
│   │   │       └── ContactForm.tsx
│   │   ├── services/
│   │   │   ├── api/
│   │   │   │   ├── client.ts          # Axios instance
│   │   │   │   └── endpoints.ts       # API endpoint tanımları
│   │   │   └── contactService.ts      # Contact API servisi
│   │   ├── hooks/
│   │   │   └── useContactForm.ts      # Custom hook
│   │   ├── types/
│   │   │   └── index.ts               # TypeScript tipleri
│   │   ├── utils/
│   │   │   └── validation.ts          # Validasyon fonksiyonları
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── main.css                   # Tailwind CSS imports
│   ├── .env.local                     # Frontend environment variables
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── README.md
│
├── backend/                      # Laravel Backend API
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   │   └── Api/
│   │   │   │       └── ContactController.php
│   │   │   ├── Requests/
│   │   │   │   └── ContactRequest.php
│   │   │   ├── Resources/
│   │   │   │   └── ContactResource.php
│   │   │   └── Middleware/
│   │   ├── Models/
│   │   │   └── Contact.php
│   │   ├── Mail/
│   │   │   └── ContactNotification.php
│   │   └── Services/
│   │       └── ContactService.php
│   ├── database/
│   │   ├── migrations/
│   │   │   └── 2024_01_01_000001_create_contacts_table.php
│   │   └── seeders/
│   ├── routes/
│   │   └── api.php
│   ├── config/
│   │   ├── cors.php
│   │   └── mail.php
│   ├── .env
│   ├── .env.example
│   ├── composer.json
│   ├── phpunit.xml
│   └── README.md
│
├── docs/                         # Dokümantasyon
│   ├── API.md                    # API dokümantasyonu
│   └── DEPLOYMENT.md             # Deployment rehberi
│
├── .gitignore
├── README.md                     # Ana README
├── PROJE_ANALIZI.md             # Proje analizi
└── MIMARI_YAPISI.md             # Bu dosya
```

---

## 🔄 Veri Akışı

### İletişim Formu Akışı

```
[Kullanıcı] 
    ↓
[ContactForm Component]
    ↓ (Form Submit)
[useContactForm Hook]
    ↓ (API Call)
[contactService.ts]
    ↓ (HTTP Request)
[Axios Client]
    ↓ (POST /api/contact)
[Laravel Backend]
    ↓
[ContactController]
    ↓ (Validation)
[ContactRequest]
    ↓ (Save to DB)
[Contact Model]
    ↓ (Send Email)
[ContactNotification]
    ↓
[Email Sent]
    ↓ (Response)
[Frontend]
    ↓ (Show Toast)
[Kullanıcı]
```

---

## 🌐 API Yapısı

### Base URL
- **Development:** `http://localhost:8000/api`
- **Production:** `https://api.hegoweb.com/api`

### Endpoints

#### Contact
- `POST /api/contact` - İletişim formu gönderimi

---

## 🔐 Environment Variables

### Frontend (.env.local)
```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_APP_NAME=HegoWeb
```

### Backend (.env)
```env
APP_NAME=HegoWeb
APP_URL=http://localhost:8000
FRONTEND_URL=http://localhost:3000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=hegoweb
DB_USERNAME=root
DB_PASSWORD=

MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_FROM_ADDRESS=noreply@hegoweb.com
MAIL_FROM_NAME="${APP_NAME}"
```

---

## 📦 Bağımlılık Yönetimi

### Frontend
- **Package Manager:** npm/yarn/pnpm
- **Build Tool:** Vite
- **CSS Framework:** Tailwind CSS

### Backend
- **Package Manager:** Composer
- **Framework:** Laravel 11.x
- **Database:** MySQL/PostgreSQL

---

## 🚀 Development Workflow

### Frontend Geliştirme
```bash
cd frontend
npm install
npm run dev          # http://localhost:3000
```

### Backend Geliştirme
```bash
cd backend
composer install
php artisan migrate
php artisan serve    # http://localhost:8000
```

### Her İkisini Birlikte
```bash
# Terminal 1
cd frontend && npm run dev

# Terminal 2
cd backend && php artisan serve
```

---

## 🧪 Test Stratejisi

### Frontend
- Unit Tests: Vitest
- Component Tests: React Testing Library
- E2E Tests: Playwright (ileride)

### Backend
- Unit Tests: PHPUnit
- Feature Tests: Laravel Test Suite
- API Tests: Postman/Insomnia collections

---

## 📊 Database Schema

### contacts Tablosu
```sql
CREATE TABLE contacts (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    ip_address VARCHAR(45) NULL,
    user_agent TEXT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
);
```

---

## 🔄 Git Workflow

### Branch Strategy
- `main` - Production ready code
- `develop` - Development branch
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches

### Commit Messages
- `feat:` - Yeni özellik
- `fix:` - Bug düzeltmesi
- `refactor:` - Kod refactoring
- `docs:` - Dokümantasyon
- `style:` - Formatting
- `test:` - Test ekleme/düzeltme

---

## 📝 Kod Standartları

### Frontend
- ESLint + Prettier
- TypeScript strict mode
- Component-based architecture
- Custom hooks for reusable logic

### Backend
- PSR-12 coding standards
- Laravel best practices
- Repository pattern (ileride)
- Service layer pattern
