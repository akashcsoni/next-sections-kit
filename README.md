# @webbycrown/layout-suite

A **professional layout kit for Next.js 14+** – drop‑in sections built with Tailwind CSS for landing pages, SaaS, startups, agencies, portfolios, and more.

---

## 🔗 Live Demo

Explore all components and variants in the live playground:

- **Demo site:** [Layout Suite Demo](https://next-sections-kit-demo.vercel.app/)

---

## ✨ What You Get

- 🎨 **Tailwind CSS** powered, clean and modern UI
- ⚡ **Optimized for Next.js 14+** (App Router ready)
- 📱 **Fully responsive** on all devices
- 🎯 **16 production-ready components**
- 🎭 **50+ layout variants** and 100+ style options
- 🔧 **JSON-configurable** via a single `data` prop

---

## 🚀 Installation

Using npm:

```bash
npm install @webbycrown/layout-suite
```

Using yarn:

```bash
yarn add @webbycrown/layout-suite
```

Using pnpm:

```bash
pnpm add @webbycrown/layout-suite
```

---

## ⚡ Quick Start

### 1. Import global CSS

```jsx
// app/layout.jsx (Next.js App Router)
import '@webbycrown/layout-suite/dist/index.css';
```

or, for Pages Router:

```jsx
// pages/_app.js
import '@webbycrown/layout-suite/dist/index.css';
```

### 2. Use a component

```jsx
import { HeroPrime, FeatureDeck, PriceBoard } from '@webbycrown/layout-suite';

const heroData = {
  title: 'Welcome',
  description: 'Build amazing websites',
  buttons: [{ text: 'Get Started', href: '/signup', variant: 'primary' }],
  variant: 'single',
};

export default function HomePage() {
  return (
    <main>
      <HeroPrime data={heroData} />
    </main>
  );
}
```

---

## 🧩 Components Overview

### Hero Sections

| Component      | Description                                   | Variants                |
|----------------|-----------------------------------------------|-------------------------|
| **HeroPrime**  | Versatile hero with backgrounds, video, CTAs | 6 layouts, 4 heights    |
| **HeroGradient** | Modern gradient hero with animations       | 5 gradients             |
| **HeroGlass**  | Glassmorphism hero                           | Light/Dark theme        |

**Usage example:**

```jsx
<HeroPrime
  data={{
    title: 'Welcome',
    subtitle: 'Get Started',
    description: 'Build amazing websites',
    backgroundImage: '/hero.jpg',
    buttons: [{ text: 'Start', href: '/start' }],
    variant: 'single',
    alignment: 'center',
  }}
/>
```

### Feature Sections

| Component        | Description               | Variants                          |
|------------------|---------------------------|-----------------------------------|
| **FeatureDeck**  | Flexible feature showcase | 3 layouts, 14+ styles             |
| **FeatureModern**| Modern feature sections   | 2 layouts (minimal/staggered)     |
| **FeaturePrime** | Premium split layouts     | 2 layouts (split-stacked/split-grid) |

```jsx
<FeatureDeck
  data={{
    title: 'Features',
    items: [
      { title: 'Fast', description: 'Lightning speed', icon: '⚡' },
      { title: 'Secure', description: 'Enterprise security', icon: '🔒' },
    ],
    variant: 'mantine-cards',
    columns: 3,
  }}
/>
```

### Pricing Sections

| Component        | Description                    | Variants          |
|------------------|--------------------------------|-------------------|
| **PriceBoard**   | Comprehensive pricing tables   | 15+ styles        |
| **PriceModern**  | Modern pricing layouts         | Light/Dark theme  |
| **PricePremium** | Premium pricing sections       | Premium styling   |

```jsx
<PriceBoard
  data={{
    title: 'Pricing',
    plans: [
      {
        name: 'Basic',
        price: 9,
        features: ['Feature 1', 'Feature 2'],
        button: { text: 'Get Started', href: '/signup' },
      },
      {
        name: 'Pro',
        price: 29,
        featured: true,
        features: ['All Basic', 'Priority Support'],
        button: { text: 'Get Started', href: '/signup/pro' },
      },
    ],
    variant: 'featured',
    currency: '$',
    billingPeriod: 'month',
  }}
/>
```

### FAQ Sections

| Component      | Description            | Variants  |
|----------------|------------------------|-----------|
| **FaqHub**     | Accordion-style FAQ    | 9 styles  |
| **FaqModern**  | Side-by-side FAQ      | 5 styles  |
| **FaqVisual**  | Visual FAQ component   | Visual    |

```jsx
<FaqHub
  data={{
    title: 'FAQ',
    items: [
      { question: 'How does it work?', answer: "It's simple..." },
      { question: 'Can I cancel?', answer: 'Yes, anytime.' },
    ],
    variant: 'bordered',
    allowMultipleOpen: false,
  }}
/>
```

### Testimonial Sections

| Component               | Description          | Variants              |
|-------------------------|----------------------|-----------------------|
| **TrustBlock**          | Testimonial grid     | 15+ styles            |
| **TestimonialCarousel** | Horizontal carousel  | Auto-play, navigation |
| **TestimonialTimeline** | Vertical timeline    | 2 layouts             |

```jsx
<TrustBlock
  data={{
    title: 'Testimonials',
    testimonials: [
      {
        name: 'John Doe',
        role: 'CEO',
        content: 'Amazing service!',
        rating: 5,
        avatar: '/avatar.jpg',
      },
    ],
    variant: 'card',
    columns: 3,
    showRating: true,
    showAvatar: true,
  }}
/>
```

### Carousel

| Component    | Description                 | Variants                    |
|--------------|-----------------------------|-----------------------------|
| **SlideFlow**| Comprehensive carousel/slider | 15+ styles, 4 transitions |

```jsx
<SlideFlow
  data={{
    slides: [
      {
        title: 'Slide 1',
        description: 'Description',
        image: '/slide1.jpg',
        button: { text: 'Learn More', href: '/slide1' },
      },
    ],
    variant: 'autoplay',
    transition: 'fade',
    showArrows: true,
    showDots: true,
  }}
/>
```

---

## 🔧 Common Props

All components accept:

| Prop       | Type      | Description                          |
|------------|-----------|--------------------------------------|
| `data`     | `Object`  | Main configuration (required)        |
| `className`| `string`  | Extra Tailwind / CSS classes         |
| `id`       | `string`  | Section `id` attribute               |
| `loader`   | `boolean` | Show loading / skeleton state        |

### Button configuration

```jsx
{
  text: 'Button Text',       // Required
  href: '/link',             // Optional - renders as <a>
  onClick: () => {},         // Optional - renders as <button>
  variant: 'primary',        // 'primary' | 'secondary' | 'outline'
  className: 'custom-class', // Optional
}
```

---

## 🎨 Customization

### Tailwind theme

You can extend your Tailwind config to match the design system:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... more shades
          600: '#0284c7',
          900: '#0c4a6e',
        },
      },
    },
  },
};
```

### Custom classes

All components accept `className` so you can tweak spacing, max-width, backgrounds, etc.:

```jsx
<HeroPrime data={heroData} className="my-custom-class" />
```

---

## 📊 Component Summary

| Category     | Components                                           | Total Variants |
|--------------|------------------------------------------------------|----------------|
| Hero         | HeroPrime, HeroGradient, HeroGlass                   | 11+            |
| Feature      | FeatureDeck, FeatureModern, FeaturePrime             | 18+            |
| Pricing      | PriceBoard, PriceModern, PricePremium                | 17+            |
| FAQ          | FaqHub, FaqModern, FaqVisual                         | 14+            |
| Testimonial  | TrustBlock, TestimonialCarousel, TestimonialTimeline | 17+            |
| Carousel     | SlideFlow                                            | 15+            |

**Total: 16 components · 50+ layout variants · 100+ style options**

---

## 🛠 Development (for contributors)

```bash
npm install
npm run build
npm run dev  # Watch mode
```

---

## 📦 Changelog

### [1.0.0] - 2024-12-11

#### Added

- **16 professional components**
  - 3 Hero sections (HeroPrime, HeroGradient, HeroGlass)
  - 3 Feature sections (FeatureDeck, FeatureModern, FeaturePrime)
  - 3 Pricing sections (PriceBoard, PriceModern, PricePremium)
  - 3 FAQ sections (FaqHub, FaqModern, FaqVisual)
  - 3 Testimonial sections (TrustBlock, TestimonialCarousel, TestimonialTimeline)
  - 1 Carousel component (SlideFlow)

- **Features**
  - 50+ layout variants
  - 100+ style options
  - Light/Dark theme support
  - Responsive design
  - Loading states
  - Customizable colors and styling
  - JSON-based configuration
  - Full JSDoc documentation

- **Technical**
  - React 18+ and Next.js 14+ support
  - Tailwind CSS integration
  - TypeScript support via JSDoc
  - Modular architecture
  - Production-ready code

---

## 📄 License

MIT

---

## 💬 Support

For issues, questions, or contributions, visit the
[GitHub repository](https://github.com/webbycrown/layout-suite).

<div align="center">
  <strong>Made with ❤️ by <a href="https://webbycrown.com">WebbyCrown</a></strong>
</div>