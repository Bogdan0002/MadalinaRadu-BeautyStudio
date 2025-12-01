# 📚 Complete Project Documentation - Mădălina Radu Beauty Studio

## 📋 Table of Contents

1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Setup and Installation](#setup-and-installation)
5. [Architecture and Organization](#architecture-and-organization)
6. [Components](#components)
7. [Pages](#pages)
8. [Data and Content](#data-and-content)
9. [Styling and Design](#styling-and-design)
10. [SEO and Optimizations](#seo-and-optimizations)
11. [Dark Mode](#dark-mode)
12. [Performance](#performance)
13. [Integrations](#integrations)
14. [Customization](#customization)
15. [Deployment](#deployment)

---

## 🎯 Overview

**Mădălina Radu Beauty Studio** is a modern, premium, and fully SEO-optimized website built for a micropigmentation and aesthetic treatments studio in Bucharest.

### Key Features:
- ✅ Modern, premium design, SaaS-inspired
- ✅ 100% responsive (mobile, tablet, desktop)
- ✅ Fully functional dark mode
- ✅ SEO optimized (meta tags, sitemap, structured data)
- ✅ Performance optimized (lazy loading, image optimization)
- ✅ Premium typography (Cormorant Garamond + Manrope)
- ✅ Smooth animations and transitions
- ✅ Intuitive navigation with services dropdown menu

---

## 🛠️ Technology Stack

### Framework and Languages:
- **Next.js 14.2.33** - App Router (React Server Components)
- **TypeScript** - Type safety and developer experience
- **React 18** - UI library
- **Tailwind CSS 3.4.1** - Utility-first CSS framework

### Main Dependencies:
- `next` - React framework for production
- `react` & `react-dom` - React core
- `tailwindcss` - CSS framework
- `clsx` & `tailwind-merge` - Utilities for CSS classes
- `three` - 3D library (for Vanta.js, if used)
- `vanta` - Animated backgrounds (optional)

### Fonts:
- **Cormorant Garamond** - Serif font for headings (luxury vibe)
- **Manrope** - Sans-serif font for body text (modern, readable)

---

## 📁 Project Structure

```
madalina-radu.ro/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with global metadata
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles and Tailwind
│   ├── sitemap.ts               # Auto-generated sitemap
│   ├── robots.ts                # Robots.txt config
│   ├── not-found.tsx            # 404 page
│   │
│   ├── despre/                  # About page
│   │   └── page.tsx
│   │
│   ├── servicii/                # Services
│   │   ├── page.tsx             # Services listing
│   │   └── [slug]/              # Individual pages for each service
│   │       └── page.tsx
│   │
│   ├── recenzii/                # Reviews page
│   │   └── page.tsx
│   │
│   ├── magazin/                 # Online shop
│   │   └── page.tsx
│   │
│   ├── laserice/                # LaserICE landing page
│   │   └── page.tsx
│   │
│   ├── blog/                    # Blog
│   │   ├── page.tsx             # Blog listing
│   │   └── [slug]/              # Individual blog posts
│   │       └── page.tsx
│   │
│   └── contact/                 # Contact page
│       └── page.tsx
│
├── components/                   # React Components
│   ├── Header.tsx               # Header with navigation and dropdown
│   ├── Footer.tsx                # Footer with links and contact
│   ├── MobileMenu.tsx           # Mobile menu with services dropdown
│   ├── ThemeToggle.tsx           # Dark/light mode toggle button
│   ├── ImageWithFallback.tsx    # Image component with fallback
│   ├── UnicornStudioEmbed.tsx   # Unicorn Studio embed
│   ├── GhlScripts.tsx           # GoHighLevel scripts placeholder
│   ├── GhlFormPlaceholder.tsx   # GHL forms placeholder
│   │
│   ├── cards/                   # Specialized cards
│   │   ├── ServiceCard.tsx      # Service card
│   │   ├── ReviewCard.tsx        # Review card
│   │   ├── ProductCard.tsx      # Product card
│   │   └── BlogCard.tsx          # Blog post card
│   │
│   └── ui/                      # Base UI components (reusable)
│       ├── Card.tsx             # Base card component
│       ├── Button.tsx           # Button component with variants
│       ├── FeatureCard.tsx      # Feature card
│       ├── StatsCard.tsx        # Stats card
│       └── ImagePlaceholder.tsx # SVG placeholders for images
│
├── data/                         # Static data (TypeScript)
│   ├── navigation.ts             # Navigation links
│   ├── services.ts               # Services with complete details
│   ├── products.ts               # Shop products
│   ├── reviews.ts                # Reviews/testimonials
│   ├── posts.ts                  # Blog posts
│   └── contactInfo.ts           # Contact information
│
├── contexts/                     # React Contexts
│   └── ThemeContext.tsx         # Context for dark/light mode
│
├── lib/                          # Utilities
│   └── utils.ts                 # Helper functions (cn for Tailwind)
│
├── public/                       # Static assets
│   └── images/                   # Images (placeholder paths)
│
├── styles/                       # Additional styles (if any)
│
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
├── postcss.config.js             # PostCSS configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # Basic README
```

---

## ⚙️ Setup and Installation

### Install Dependencies:
```bash
npm install
```

### Run Development Server:
```bash
npm run dev
```
Website will be available at: `http://localhost:3000`

### Build for Production:
```bash
npm run build
npm start
```

### Linting:
```bash
npm run lint
```

---

## 🏗️ Architecture and Organization

### SOLID Principles:
- **Single Responsibility**: Each component has a clear responsibility
- **Open/Closed**: Components extensible through props
- **Liskov Substitution**: Base components (`Card`, `Button`) can be replaced
- **Interface Segregation**: Clear and specific props
- **Dependency Inversion**: Dependencies through props, not hardcoded

### Component Organization:
- **`/components/ui`** - Base reusable components (Card, Button, etc.)
- **`/components/cards`** - Specialized cards that extend base components
- **`/components`** - Specific components (Header, Footer, etc.)

### Patterns Used:
- **Component Composition** - Small, composable components
- **Props Drilling** - Minimized through Context API for theme
- **Server Components** - Pages are Server Components when possible
- **Client Components** - Only when interactivity is needed (`"use client"`)

---

## 🧩 Components

### Global Components:

#### `Header.tsx`
- **Location**: `components/Header.tsx`
- **Type**: Client Component
- **Features**:
  - Sticky header with backdrop blur
  - Desktop navigation with services dropdown
  - Active states for links (highlight current page)
  - Hover dropdown for services (desktop)
  - Integrated theme toggle
  - Responsive (separate mobile menu)
- **Props**: None (uses Context for theme)

#### `Footer.tsx`
- **Location**: `components/Footer.tsx`
- **Type**: Server Component
- **Features**:
  - About text
  - Quick links (navigation)
  - Contact info (address, phone, email, hours)
  - Legal links (terms, privacy, cookies)
  - Dark mode support
  - Responsive layout

#### `MobileMenu.tsx`
- **Location**: `components/MobileMenu.tsx`
- **Type**: Client Component
- **Features**:
  - Slide-in menu for mobile
  - Expandable dropdown for services
  - Active states
  - Dark mode support
  - Transition animations

#### `ThemeToggle.tsx`
- **Location**: `components/ThemeToggle.tsx`
- **Type**: Client Component
- **Features**:
  - Toggle between light/dark mode
  - Different icons for each mode
  - Save preference in localStorage
  - Automatic system preference detection

### Base UI Components:

#### `Card.tsx`
- **Location**: `components/ui/Card.tsx`
- **Type**: Server Component
- **Props**:
  - `children`: ReactNode
  - `className?`: string
  - `hover?`: boolean (default: true)
  - `as?`: "div" | "article" | "section" (default: "div")
- **Features**:
  - Base reusable card
  - Dark mode support
  - Optional hover effects
  - Shadow and border styling

#### `Button.tsx`
- **Location**: `components/ui/Button.tsx`
- **Type**: Server Component
- **Props**:
  - `variant?`: "primary" | "secondary" | "outline" | "ghost"
  - `size?`: "sm" | "md" | "lg"
  - `as?`: "button" | "link"
  - `href?`: string (if `as="link"`)
  - `icon?`: ReactNode
  - Standard button/link props
- **Features**:
  - Button or link (polymorphism)
  - Style variants (primary with purplish gradient)
  - Dark mode support
  - Hover effects and scale transform

#### `ImageWithFallback.tsx`
- **Location**: `components/ImageWithFallback.tsx`
- **Type**: Client Component
- **Props**:
  - `src`: string
  - `alt`: string
  - `fill?`: boolean
  - `width?`: number
  - `height?`: number
  - `priority?`: boolean
  - `className?`: string
  - `type?`: "hero" | "service" | "product" | "portrait" | "blog"
- **Features**:
  - Wrapper for `next/image`
  - Fallback to SVG placeholder if image missing
  - Lazy loading (if not priority)
  - Optimizations (quality: 85, sizes)

### Specialized Cards:

#### `ServiceCard.tsx`
- **Location**: `components/cards/ServiceCard.tsx`
- **Extends**: `Card` component
- **Features**:
  - Link to individual service page
  - Decorative gradient corner
  - Icon and description
  - Hover effects
  - Uniform height (`h-full flex flex-col`)

#### `ReviewCard.tsx`
- **Location**: `components/cards/ReviewCard.tsx`
- **Extends**: `Card` component
- **Features**:
  - Rating stars
  - Quote styling
  - Author info
  - Uniform height

#### `ProductCard.tsx`
- **Location**: `components/cards/ProductCard.tsx`
- **Extends**: `Card` component
- **Features**:
  - Product image
  - "On Sale" badge
  - Price and description
  - "Details" and "Quote" buttons
  - Uniform height

#### `BlogCard.tsx`
- **Location**: `components/cards/BlogCard.tsx`
- **Extends**: `Card` component
- **Features**:
  - Blog post image
  - Date and excerpt
  - Link to post
  - Uniform height

---

## 📄 Pages

### Homepage (`app/page.tsx`)
**URL**: `/`

**Sections**:
1. **Hero Section**
   - Headline with gradient text
   - CTA buttons (WhatsApp, View services)
   - Unicorn Studio embed
   - Animated background (blur circles)

2. **Services Offered**
   - Grid with all services
   - ServiceCard components
   - Links to individual pages

3. **Reviews Preview**
   - Grid with 4 reviews
   - ReviewCard components
   - Link to reviews page

4. **Shop Preview**
   - Grid with 3 products
   - ProductCard components
   - Link to shop

5. **Why Us?**
   - 3 feature cards
   - StatsCard or FeatureCard

6. **Blog Preview**
   - Grid with 3 recent posts
   - BlogCard components
   - Link to blog

7. **Contact CTA**
   - Contact information
   - Action buttons

### Services Page (`app/servicii/page.tsx`)
**URL**: `/servicii`

**Content**:
- Intro text
- Grid with all services (ServiceCard)
- Links to individual pages

### Individual Service Pages (`app/servicii/[slug]/page.tsx`)
**URL**: `/servicii/{slug}`

**Single Template for All Services**:
- Breadcrumb navigation
- Hero section with image and CTA
- Detailed description
- Main benefits (list)
- Who it's for
- How the procedure works (steps)
- Subservices (if any)
- Sidebar with:
  - Booking CTA
  - Quick info
  - Related services

**SEO**:
- Unique meta tags for each service
- Title: `{Service Name} București | Prețuri & Programare`
- Customized meta description
- Relevant keywords
- OpenGraph tags

### Blog Page (`app/blog/page.tsx`)
**URL**: `/blog`

**Features**:
- List of all blog posts
- Category filtering
- Responsive grid
- BlogCard components

### Blog Post Pages (`app/blog/[slug]/page.tsx`)
**URL**: `/blog/{slug}`

**Content**:
- Back link
- Post header (date, author, category)
- Featured image
- HTML content
- Tags
- Related posts (dynamic algorithm)

**Related Posts Algorithm**:
- Score based on:
  - Common category: +3 points
  - Common tags: +1 point per tag
- Sorted by score
- Top 3 most relevant

### LaserICE Page (`app/laserice/page.tsx`)
**URL**: `/laserice`

**Sections**:
1. Hero with CTA
2. Our Proposal (4 cards)
3. Key Features (3 pillars)
4. What is LaserICE + How it Works
5. Why Choose LaserICE (6 cards)
6. Technical Specifications
7. Customer Reviews
8. FAQ (accordion)
9. Lead form (GHL placeholder)

### Contact Page (`app/contact/page.tsx`)
**URL**: `/contact`

**Content**:
- Contact information (address, phone, email, hours)
- Action buttons (Call, WhatsApp)
- Contact form (client-side)
- GHL form placeholder

### About Page (`app/despre/page.tsx`)
**URL**: `/despre`

**Content**:
- Mădălina Radu portrait
- Training and qualifications
- Professional experience
- Philosophy

### Reviews Page (`app/recenzii/page.tsx`)
**URL**: `/recenzii`

**Features**:
- Filter by categories (All, Studio, LaserICE)
- Grid with all reviews
- ReviewCard components

### Shop Page (`app/magazin/page.tsx`)
**URL**: `/magazin`

**Content**:
- Grid with all products
- ProductCard components
- "Why Us?" section

---

## 📊 Data and Content

### `data/navigation.ts`
**Structure**:
```typescript
interface NavItem {
  name: string;
  href: string;
}

export const navigation: NavItem[]
```

**Links**:
- Acasă (/)
- Despre (/despre)
- Servicii (/servicii) - with dropdown
- Recenzii (/recenzii)
- Blog (/blog)
- Magazin online (/magazin)
- LaserICE (/laserice)
- Contact (/contact)

### `data/services.ts`
**Structure**:
```typescript
interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  image?: string;
  benefits?: string[];
  forWhom?: string[];
  procedure?: string[];
  tags?: string[];
  metaDescription?: string;
  subservices?: Subservice[];
}
```

**Services**:
1. Micropigmentare sprâncene
2. Micropigmentare buze
3. Mărire buze Hyaluron Pen
4. Tratamente faciale BB Glow
5. Epilare definitivă cu laser
6. Dermopigmentare medicală (with subservices)

### `data/products.ts`
**Structure**:
```typescript
interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  priceRange: string;
  isOnSale: boolean;
}
```

**Products**:
1. Aparat de epilare definitivă cu laser diode, ND yag
2. Aparat de epilare definitiva LaserICE
3. Hyaluron Pen pro automat
4. LaserICE – UK delivery

### `data/reviews.ts`
**Structure**:
```typescript
interface Review {
  id: string;
  name: string;
  initials: string;
  content: string;
  rating?: number;
  category: "studio" | "laserice";
}
```

**Categories**:
- Studio înfrumusețare
- LaserICE

### `data/posts.ts`
**Structure**:
```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  metaDescription: string;
  readingTime: number;
}
```

**Posts** (all from 2025):
1. Micropigmentare Sprâncene București - Ghid Complet 2025
2. Micropigmentare Buze: Rezultate Durabile
3. Hyaluron Pen: Mărire Buze Fără Ac
4. Epilare Definitivă cu Laser: Ghid Complet
5. BB Glow: Tratament Facial Revoluționar

### `data/contactInfo.ts`
**Structure**:
```typescript
export const contactInfo = {
  address: string;
  phone: string;
  email: string;
  program: string[];
}
```

---

## 🎨 Styling and Design

### Color Palette (`tailwind.config.ts`):
```typescript
brand: {
  indigo: "#25283D",    // Main text, dark backgrounds
  purple: "#8F3985",    // Main accents, hover states
  blue: "#98DFEA",      // Secondary accents
  teal: "#07BEB8",      // CTAs, main accents
  peach: "#EFD9CE",     // Main background
}
```

### Dark Mode Colors:
```typescript
dark: {
  background: "#1A1A2E",
  card: "#2E2E4A",
  text: "#E0E0E0",
  "text-muted": "#A0A0B0",
  border: "#4A4A6A",
}
```

### Typography:
- **Headlines**: Cormorant Garamond (serif, luxury)
- **Body**: Manrope (sans-serif, modern)
- **Configuration**: `app/globals.css` and `tailwind.config.ts`

### Global Styles (`app/globals.css`):
- Tailwind directives
- Custom animations (fadeIn, slideUp, shimmer, float)
- Utility classes:
  - `.gradient-text` - Gradient text effect
  - `.glass-effect` - Glassmorphism
  - `.saas-card` - Premium card styling
  - `.saas-gradient` - Background gradient

### Responsive Breakpoints:
- Mobile: default (< 640px)
- Tablet: `sm:` (640px+)
- Desktop: `lg:` (1024px+)

---

## 🔍 SEO and Optimizations

### Meta Tags:
- **Title**: Optimized for each page
- **Description**: Unique meta descriptions
- **Keywords**: Relevant for each page
- **OpenGraph**: For social sharing
- **Twitter Cards**: Configured

### Sitemap (`app/sitemap.ts`):
- Auto-generated
- Includes all pages
- Configured priorities
- Set change frequency

### Robots.txt (`app/robots.ts`):
- Allow: `/`
- Disallow: `/api/`, `/_next/`
- Sitemap URL

### Structured Data:
- Prepared for implementation
- Schema.org markup (can be added)

### SEO-friendly URLs:
- Descriptive slugs
- Clear hierarchy
- Breadcrumbs on pages

---

## 🌙 Dark Mode

### Implementation:
- **Context API**: `contexts/ThemeContext.tsx`
- **Provider**: Wrapped in `app/layout.tsx`
- **Toggle**: `components/ThemeToggle.tsx`
- **Storage**: localStorage for preference
- **System Detection**: Detects system preference

### Features:
- Toggle button in header (desktop and mobile)
- Save preference in localStorage
- Automatic system preference detection
- Smooth transitions between modes
- Full support on all components and pages

### Tailwind Configuration:
```typescript
darkMode: "class" // Enable dark mode
```

---

## ⚡ Performance

### Image Optimizations:
- **Next.js Image**: Optimized component
- **Lazy Loading**: For non-critical images
- **Priority**: For above-the-fold images
- **Sizes**: Responsive image sizes
- **Quality**: 85 (quality/size balance)
- **Fallback**: SVG placeholders if image missing

### Fonts:
- **Display Swap**: Prevents FOIT (Flash of Invisible Text)
- **Preload**: Critical fonts preload
- **Variable Fonts**: Size optimization

### Code Splitting:
- **Automatic**: Next.js does automatic code splitting
- **Dynamic Imports**: For heavy components (if needed)

### Lazy Loading:
- Images: `loading="lazy"` (if not priority)
- Components: Dynamic imports when possible

---

## 🔌 Integrations

### GoHighLevel (GHL):
- **`GhlScripts.tsx`**: Placeholder for chat widget script
- **`GhlFormPlaceholder.tsx`**: Placeholder for forms
- **Comments**: In code for future integration

### Unicorn Studio:
- **`UnicornStudioEmbed.tsx`**: Embed for Unicorn Studio projects
- **Project ID**: `SLrv47o4FFjYcbTd3heE`
- **Script Loading**: Robust, with checks

---

## 🎛️ Customization

### Colors:
**File**: `tailwind.config.ts`
```typescript
colors: {
  brand: {
    indigo: "#25283D",    // Change here
    purple: "#8F3985",    // Change here
    blue: "#98DFEA",      // Change here
    teal: "#07BEB8",      // Change here
    peach: "#EFD9CE",     // Change here
  }
}
```

### Fonts:
**File**: `app/layout.tsx`
```typescript
const manrope = Manrope({ ... });           // Body font
const cormorantGaramond = Cormorant_Garamond({ ... }); // Heading font
```

**Changing Fonts**:
1. Import new font from `next/font/google`
2. Add to `tailwind.config.ts` in `fontFamily`
3. Update `app/globals.css`

### Content:
- **Navigation**: `data/navigation.ts`
- **Services**: `data/services.ts`
- **Products**: `data/products.ts`
- **Reviews**: `data/reviews.ts`
- **Blog**: `data/posts.ts`
- **Contact**: `data/contactInfo.ts`

### Images:
**Location**: `/public/images/`

**Required Images**:
- `/images/hero-madalina.jpg` - Homepage hero
- `/images/madalina-portrait.jpg` - About page
- `/images/service-*.jpg` - Service images
- `/images/product-*.jpg` - Product images
- `/images/blog-*.jpg` - Blog images
- `/images/laserice-*.jpg` - LaserICE images

**Fallback**: If image is missing, SVG placeholder is displayed

---

## 🚀 Deployment

### Vercel (Recommended):
1. Push code to GitHub/GitLab
2. Connect repository to Vercel
3. Vercel automatically detects Next.js
4. Automatic build and deploy

### Environment Variables:
- Not needed currently
- For GHL: will be added when integrating

### Build Commands:
```bash
npm run build  # Build for production
npm start      # Start production server
```

### Production Optimizations:
- Next.js does automatic optimizations
- Images automatically optimized
- Automatic code splitting
- Static generation for pages

---

## 📝 Important Notes

### URL Structure:
- Services: `/servicii/{slug}`
- Blog: `/blog/{slug}`
- All slugs are SEO-friendly

### Active States:
- Header automatically detects current page
- Highlight for active links
- Support for sub-routes (e.g., `/servicii/micropigmentare-sprancene`)

### Responsive Design:
- Mobile-first approach
- Breakpoints: `sm:` (640px), `lg:` (1024px)
- All components are responsive

### Accessibility:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus states for interactive elements

### Browser Support:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement
- Graceful degradation for new features

---

## 🔧 Troubleshooting

### Dark Mode Not Working:
- Check that `ThemeProvider` wraps everything in `app/layout.tsx`
- Check that `darkMode: "class"` is set in `tailwind.config.ts`

### Images Not Loading:
- Check that paths are correct in `/public/images/`
- Fallback should work automatically

### Services Dropdown Not Appearing:
- Check that `services` is imported in `Header.tsx`
- Check that `group-hover` classes are applied correctly

### Build Errors:
- Run `npm run lint` to see errors
- Check TypeScript types
- Check that all imports are correct

---

## 📚 Additional Resources

### Documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

### Fonts:
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)
- [Manrope](https://fonts.google.com/specimen/Manrope)

---

## ✅ Final Checklist

- [x] Next.js 14 App Router
- [x] TypeScript
- [x] Tailwind CSS with brand palette
- [x] Fully functional dark mode
- [x] Responsive design (mobile, tablet, desktop)
- [x] SEO optimized (meta tags, sitemap, robots.txt)
- [x] Individual pages for services
- [x] Blog with SEO-optimized posts
- [x] Navigation with services dropdown
- [x] Premium typography (Cormorant Garamond + Manrope)
- [x] Reusable components (SOLID principles)
- [x] Performance optimizations (images, fonts, lazy loading)
- [x] GHL placeholders for future integration
- [x] Unicorn Studio embed
- [x] Sitemap and robots.txt
- [x] Error handling (404, image fallback)

---

**Last Updated**: 2025
**Version**: 1.0.0
