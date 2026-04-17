# Current State: open4.dev

**Дата:** 2026-04-17
**Версия:** 1.2
**Тип:** Статический HTML сайт

---

## 1. Общее описание

Статический маркетинговый сайт агентства open4 (брендинг + стратегия + AI трансформация).

- **Website:** https://open4.dev
- **GitHub Repo:** https://github.com/Valdiss-Valdiss/open4.dev.public.site
- **Pages:** 19 HTML страниц
- **Stack:** Vanilla HTML + CSS + JavaScript (без фреймворков)
- **Hosting:** GitHub Pages (бесплатный, public repo)
- **SSL:** Автоматически от GitHub Pages

---

## 2. Структура файлов

```
site/
├── index.html                 # Главная страница
├── work.html                  # Портфолио (сетка кейсов)
├── services.html              # Услуги (аккордеон)
├── robots.txt                 # SEO: разрешение краулерам
├── sitemap.xml                # SEO: карта сайта (19 URLs)
├── css/
│   └── style.css              # Стили проекта
├── js/
│   └── main.js                # Интерактив
├── images/
│   ├── open4_logo_small.png   # Логотип
│   ├── favicon.ico            # Иконка
│   ├── twitter_cards/         # Twitter Card изображения (1200x628px)
│   ├── main/                  # Изображения для главной (portfolio grid)
│   └── work/                  # Изображения case studies
└── work/
    ├── cluxx-branding.html
    ├── kanrock-branding.html
    ├── welt-rebranding.html
    ├── 2roxx-branding.html
    ├── cluxx-website.html
    ├── vortex-branding.html
    ├── ultherma-branding.html
    ├── forma-i-sreda-branding.html
    ├── routes-and-roads-branding.html
    ├── kanrock-brandbook.html
    ├── kanrock-catalog.html
    ├── kanrock-website.html
    ├── welt-website.html
    ├── alride-pitch-deck-presentation.html
    ├── cluxx-catalog.html
    └── fit-n-fix-branding.html
```

---

## 3. Дизайн система

### 3.1 Цветовая палитра (CSS Variables)

```css
:root {
    --tp-primary: #1a1a1a;        /* Основной чёрный */
    --tp-secondary: #666666;       /* Серый текст */
    --tp-accent: #ff6b35;          /* Оранжевый акцент */
    --tp-accent-2: #f7b731;        /* Жёлтый акцент */
    --tp-white: #ffffff;
    --tp-black: #000000;
    --tp-gray: #f5f5f5;            /* Фон секций */
    --tp-gray-2: #e0e0e0;
    --tp-text: #333333;
    --tp-text-light: #666666;
    --tp-bg: #ffffff;
    --tp-bg-alt: #f9f9f9;
    --tp-transition: all 0.3s ease;
    --tp-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}
```

### 3.2 Типографика

| Элемент | Шрифт | Вес | Размеры |
|---------|-------|-----|---------|
| H1 | Outfit | 700-800 | 48-72px |
| H2 | Outfit | 700 | 36-48px |
| H3 | Outfit | 600 | 24-32px |
| Body | Poppins | 400 | 15-16px |
| Small | Poppins | 400 | 13-14px |

**Источник:** Google Fonts (бесплатно)

**Font Awesome:** v6.5.1 (CDN)

### 3.3 Breakpoints

| Breakpoint | Ширина | Суффикс классов |
|-----------|--------|------------------|
| Mobile | < 640px | `.d-sm-*` |
| Tablet | 640px - 1024px | `.d-md-*` |
| Desktop | > 1024px | `.d-lg-*` |

---

## 4. SEO (реализовано)

### 4.1 Meta tags (все 19 страниц)

| Тег | Пример |
|-----|--------|
| `<title>` | `open4 — Branding Agency for the AI Era` |
| `<meta name="description">` | Уникальный для каждой страницы (150-160 chars) |
| `<link rel="canonical">` | `https://open4.dev/` или `https://open4.dev/work/*.html` |
| `<meta property="og:*">` | og:url, og:title, og:description, og:image, og:type |
| `<meta name="twitter:*">` | twitter:card (summary_large_image), twitter:title, twitter:description, twitter:image |

### 4.2 Twitter Card изображения

Размер: **1200x628px**

Файлы в `/images/twitter_cards/`: twitter_card_index.jpg, twitter-card-services.jpg, и другие для case studies.

### 4.3 JSON-LD Schema

Organization, WebSite, Service, CreativeWork — реализованы на соответствующих страницах.

### 4.4 robots.txt
```
User-agent: *
Allow: /

Sitemap: https://open4.dev/sitemap.xml
```

### 4.5 sitemap.xml

19 URLs: `/`, `/work.html`, `/services.html`, `/work/*.html` (16 кейсов)

---

## 5. FAQ Sections (AEO)

Реализованы на index.html (5 вопросов) и services.html (5 вопросов).
Разметка: Schema.org Question/Answer.

---

## 6. Contact Form

Форма отправляет данные через Formspree (https://formspree.io/f/mjgjggyd).

| Поле | Тип | Обязательность |
|------|-----|----------------|
| contactName | text | ✅ required |
| contactEmail | email | ✅ required |
| phoneNumber | tel | ✅ required (должен начинаться с +) |
| contactDescription | textarea | ✅ required |

### Статус
✅ Formspree webhook настроен
✅ Валидация на клиенте
✅ Success/Error сообщения

---

## 7. Изображения

Twitter Cards в `/images/twitter_cards/` — все 1200x628px, готовы.

Контентные изображения оптимизированы.

---

## 8. Hosted services

| Сервис | Статус | Данные |
|--------|--------|--------|
| Website | ✅ Работает | https://open4.dev (GitHub Pages) |
| GitHub Repo | ✅ Работает | github.com/Valdiss-Valdiss/open4.dev.public.site |
| Telegram Bot | ✅ Работает | @open4_dev_bot |
| Email | ✅ Работает | hello@open4.dev |
| Formspree | ✅ Работает | formspree.io/f/mjgjggyd |

---

## 9. Deployment (GitHub Pages)

### Текущая конфигурация
- Репозиторий: https://github.com/Valdiss-Valdiss/open4.dev.public.site
- Branch: main
- Папка: / (root)
- Домен: open4.dev (привязан через Custom Domains в GitHub Pages settings)

### Как работает
1. Пуши в ветку `main` → автоматический деплой на GitHub Pages
2. GitHub Pages раздаёт сайт по адресу open4.dev
3. SSL сертификат выпускается автоматически

### Деплой через GitHub API
Использовать токен из `C:\projects\opencode\meetsu_on_python\.git\config` (pattern: `github_pat_*`)

---

## 10. Roadmap (TODO)

- [ ] Russian language version в /ru/
- [ ] Улучшение производительности

---

*Документ создан: 2026-04-10*
*Обновлено: 2026-04-17*
*Статус: Актуально*