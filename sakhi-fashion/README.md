# Sakhi Fashion 🤍

A complete, modern, responsive **premium women's fashion boutique** built with **Next.js 15**, Tailwind CSS, Framer Motion, Lucide icons and Swiper. Cinematic hero video, glassmorphism, dark mode, and a full admin panel with banner-video upload.

> *Elegance in Every Thread — Discover Your Perfect Style.*

---

## ✨ Features

**Storefront**
- Sticky, blur (glassmorphism) navbar + animated mobile drawer + announcement marquee
- Full-screen cinematic hero with **background video support**, autoplay/muted/loop, and **fallback image**
- Featured Collections grid (Sarees, Kurtis, Western, Party, Bridal, Ethnic) with hover reveals
- New Arrivals: filterable product cards with image zoom, wishlist, quick-view modal, add-to-bag, discount badges
- Full-width **parallax** trending banner
- Customer testimonials **Swiper** slider with star ratings
- Instagram **masonry** gallery with hover animations
- About section with **animated statistics counters**
- Contact form + map placeholder + details
- Footer with newsletter subscription, social links, quick links

**Experience**
- 🌙 Dark mode toggle (persisted)
- Scroll-reveal animations, floating elements, page loader, back-to-top with progress ring
- Cart + wishlist counters with toast notifications
- SEO metadata, lazy-loaded images, reduced-motion support, keyboard focus

**Admin Panel** (`/admin`)
- **Banner video upload**: drag & drop, live preview, progress bar, replace, delete, hosted-URL option, saved to localStorage and pushed live to the hero
- Dashboard analytics (KPIs, sales chart, top categories)
- Manage Products / Categories / Testimonials (add & delete)

---

## 🧱 Tech Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 |
| Styling | Tailwind CSS 3 (custom theme + glassmorphism utilities) |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Sliders | Swiper 11 |
| Fonts | Cormorant Garamond (display) + Jost (sans) via `next/font` |

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the site
#    Storefront -> http://localhost:3000
#    Admin      -> http://localhost:3000/admin
```

Production build:

```bash
npm run build
npm start
```

> **Node 18.18+ / 20+ recommended** for Next.js 15.

---

## 📂 Project Structure

```
sakhi-fashion/
├── public/                  # static assets (drop banner.mp4 / favicon here)
├── src/
│   ├── app/
│   │   ├── layout.js        # fonts, SEO metadata, providers
│   │   ├── page.js          # home page (all sections)
│   │   ├── globals.css      # theme tokens, glassmorphism, scrollbar
│   │   └── admin/
│   │       ├── layout.js    # noindex metadata
│   │       └── page.js      # admin panel with tabs
│   ├── components/
│   │   ├── Navbar.js        Hero.js        FeaturedCollections.js
│   │   ├── ProductCard.js   NewArrivals.js TrendingBanner.js
│   │   ├── Testimonials.js  InstagramGallery.js
│   │   ├── About.js         Counter.js     Contact.js   Footer.js
│   │   ├── SectionHeading.js Reveal.js     Toast.js
│   │   ├── Loader.js        ThemeToggle.js BackToTop.js
│   │   └── admin/
│   │       ├── VideoUpload.js  Dashboard.js  Manager.js
│   ├── context/
│   │   ├── ThemeContext.js  # dark mode
│   │   └── CartContext.js   # cart + wishlist + toasts
│   ├── data/
│   │   └── content.js       # sample products, collections, testimonials…
│   └── lib/
│       └── banner.js        # hero banner video store helpers
├── tailwind.config.js
├── next.config.mjs
└── package.json
```

---

## 🎨 Theme

Defined in `tailwind.config.js`:

- **cream** — warm ivory backgrounds
- **blush** — soft rose / pink
- **gold** — antique gold accents (`text-gold-gradient`, `.btn-primary`)
- **ink** — warm near-black

Glassmorphism via the `.glass` / `.glass-strong` utilities in `globals.css`.

---

## 🎬 Managing the Hero Banner Video

1. Go to **`/admin` → Banner Video**.
2. **Drag & drop** an MP4 (or click to browse), or paste a hosted `.mp4` URL.
3. Preview, then **Save & Publish** — the hero updates instantly.
4. **Delete** to revert to the fallback image.

> Uploaded files preview from browser memory and reset on reload (no backend bundled). For a permanent banner, host the video on a CDN/storage and use the **"Use URL"** field, or wire `src/lib/banner.js` to your own API/database.

---

## 🛠 Customising

- **Products / categories / testimonials** → edit `src/data/content.js`
- **Colours / fonts** → `tailwind.config.js` + `src/app/layout.js`
- **Images** → currently Unsplash URLs (allowed in `next.config.mjs`); swap for your own
- **Map** → replace the placeholder in `Contact.js` with a Google Maps `<iframe>`

---

## 📄 License

Free to use for personal and commercial projects. Replace sample imagery with assets you own the rights to before launch.
