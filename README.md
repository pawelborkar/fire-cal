# 🔥 FIRE Calculator

> A free, local-first Financial Independence Retire Early (FIRE) calculator built with **Astro**, inspired by the zen, minimalist design language of [Pomodoro.in](https://pomodoro.in).

Live at: **[fire.pawel.in](https://fire.pawel.in)**

---

## ✨ Features

- **🛡️ 100% Local-First & Private**: Zero data leaves your device. All inflation compounding, ROI simulation, and milestone calculations execute client-side in the browser.
- **📈 Real Inflation Compounding**: Annual living expenses dynamically compound with inflation, avoiding static estimation pitfalls.
- **🎨 Pomodoro.in Design Language**: Clean dark aesthetic, glassmorphic cards, radiant fire-orange accents, smooth micro-interactions, and custom-styled sliders.
- **📊 Interactive Trajectory Chart**: Interactive canvas-based area chart showing portfolio longevity vs inflation-adjusted expenses with live hover scrub inspector.
- **🇮🇳 Multi-Currency Support**: Native support for **INR (₹)** with Lakhs and Crores formatting (`en-IN`), **USD ($)**, **EUR (€)**, **GBP (£)**, **CAD (C$)**, and **AUD (A$)**.
- **🎯 5 FIRE Archetypes**: Real-time targets calculated for **Lean FIRE** (75%), **Standard FIRE** (100%), **Fat FIRE** (150%), **Barista FIRE** (50%), and **Coast FIRE**.
- **📋 Year-by-Year Breakdown**: Complete tabular view of starting balance, investment gains, withdrawals, and closing capital.
- **⚡ 1-Click Share & Export**:
  - **Shareable URLs**: Encodes calculations in query parameters (`?p=50000000&roi=10...`) for easy bookmarking.
  - **CSV Export**: Download full compounding spreadsheets.
  - **Local Persistence**: Restores your state automatically from `localStorage`.
- **🔍 Extremely Optimised for SEO**:
  - Full Open Graph & Twitter Summary Cards
  - Semantic HTML5 structure (`main`, `article`, `section`, `figure`)
  - Schema.org JSON-LD Structured Data (`WebApplication`, `FAQPage`, `BreadcrumbList`)
  - Automatic `sitemap.xml` and `robots.txt` generation
  - Blazing fast performance: Astro static generation (LCP < 0.8s, 0 CLS)

---

## 🏗️ Modular Architecture

```text
fire-cal/
├── astro.config.mjs          # Astro config with sitemap integration
├── package.json              # Clean dependencies (Astro + @astrojs/sitemap)
├── public/
│   ├── fire.png              # High-res favicon and social icon
│   ├── robots.txt            # Search engine crawler instructions
│   └── site.webmanifest      # PWA & mobile bookmarking manifest
└── src/
    ├── components/
    │   ├── Header.astro      # Sticky blurred header with ecosystem links
    │   ├── Hero.astro        # High-impact SEO hero with value propositions
    │   ├── FireTypesSection.astro # Educational FIRE archetypes
    │   ├── SeoGuide.astro    # In-depth guide on 4% rule & inflation
    │   ├── FaqSection.astro  # Interactive accessible FAQ accordion
    │   ├── Footer.astro      # Minimalist footer with disclaimer & links
    │   └── calculator/
    │       └── FireCalculator.astro # Interactive reactive island & chart
    ├── layouts/
    │   └── Layout.astro      # Master layout with SEO meta & JSON-LD
    ├── lib/
    │   ├── calculator.ts     # Pure mathematical FIRE calculation engine
    │   ├── formatters.ts     # Multi-currency, Lakhs/Crores, and presets
    │   ├── seo.ts            # Metadata constants & structured data
    │   └── types.ts          # Shared TypeScript interfaces
    ├── pages/
    │   └── index.astro       # Assembled static landing page
    └── styles/
        └── global.css        # Design system tokens and glassmorphism utilities
```

---

## 🚀 Development & Deployment

### Install Dependencies
```bash
pnpm install
```

### Local Dev Server
```bash
pnpm dev
```

### Production Build
```bash
pnpm build
```

### Deploy to GitHub Pages
```bash
pnpm deploy
```

---

## 👨‍💻 Author

Crafted by **[Pawel Borkar](https://pawel.in)**  
Companion project: **[Pomodoro.in](https://pomodoro.in)** (A local-first aesthetic timer)
