# Mădălina Radu - Micropigmentare & Beauty Studio

Website profesional pentru servicii de micropigmentare și tratamente estetice, construit cu Next.js 14, TypeScript și Tailwind CSS.

## Tehnologii

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Deploy pe Vercel**

## Instalare și rulare locală

1. Instalează dependențele:
```bash
npm install
```

2. Rulează serverul de dezvoltare:
```bash
npm run dev
```

3. Deschide [http://localhost:3000](http://localhost:3000) în browser.

## Structura proiectului

```
├── app/              # Pagini și layout-uri (App Router)
│   ├── page.tsx      # Pagina principală (Acasă)
│   ├── despre/       # Pagina Despre
│   ├── servicii/     # Pagina Servicii
│   ├── recenzii/     # Pagina Recenzii
│   ├── magazin/      # Magazin online
│   ├── laserice/     # Landing page LaserICE
│   └── contact/      # Pagina Contact
├── components/       # Componente reutilizabile
├── data/            # Date statice (navigation, services, products, reviews, contactInfo)
├── public/          # Fișiere statice (imagini, etc.)
└── styles/          # Stiluri globale
```

## Configurare culori

Culorile brandului pot fi ajustate în `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    indigo: "#25283D",    // Text principal, fundaluri închise
    purple: "#8F3985",    // Accenturi, hover states
    blue: "#98DFEA",      // Accenturi secundare
    teal: "#07BEB8",      // CTA-uri, accenturi principale
    peach: "#EFD9CE",     // Fundal principal
  },
}
```

**Unde să schimbi culorile:**
- Editează `tailwind.config.ts` pentru a modifica paleta de culori
- Culorile sunt folosite prin clase Tailwind: `bg-brand-teal`, `text-brand-indigo`, etc.

**Fonturi:**
- Fonturile pot fi modificate în `tailwind.config.ts` în secțiunea `fontFamily`
- Momentan folosim Inter pentru toate textele

## Imagini

Plasează imaginile în folderul `/public/images/`:
- `hero-madalina.jpg` - Imagine pentru secțiunea hero
- `madalina-portrait.jpg` - Portret pentru pagina Despre
- `service-*.jpg` - Imagini pentru servicii
- `product-*.jpg` - Imagini pentru produse
- `laserice-*.jpg` - Imagini pentru pagina LaserICE

Dacă imaginile lipsesc, site-ul va afișa un gradient solid cu culorile brandului.

## Navigare

Linkurile de navigare pot fi modificate în `/data/navigation.ts`:

```typescript
export const navigation: NavItem[] = [
  { name: "Acasă", href: "/" },
  { name: "Despre", href: "/despre" },
  // ...
];
```

## Footer

Textul footer-ului poate fi modificat în `/components/Footer.tsx`. Informațiile de contact sunt importate din `/data/contactInfo.ts`.

## Integrare GoHighLevel

Componentele GHL sunt pregătite pentru integrare:

### 1. Chat Widget
- **Fișier:** `components/GhlScripts.tsx`
- **Unde:** Folosit în `app/layout.tsx` (înainte de `</body>`)
- **Cum:** Adaugă scriptul GHL chat widget în componentă

### 2. Formulare
- **Component:** `components/GhlFormPlaceholder.tsx`
- **Unde folosit:**
  - `/contact` - Sub formularul custom
  - `/laserice` - În secțiunea finală de lead form
- **Cum:** Înlocuiește placeholder-ul cu:
  - Script de embed GHL (form/survey), SAU
  - POST către Next.js API route care va apela GHL API/webhook

### 3. Calendar (viitor)
- Dacă adaugi o pagină `/programari`, poți folosi același pattern:
  - Creează un placeholder sau
  - Integrează direct scriptul GHL calendar embed

## Build pentru producție

```bash
npm run build
npm start
```

## Deploy pe Vercel

1. Conectează repository-ul la Vercel
2. Vercel va detecta automat Next.js și va configura build-ul
3. Site-ul va fi live după deploy

## Note importante

- Toate textele sunt în română
- Copy-ul este original, nu copiat din surse externe
- Site-ul este optimizat pentru SEO și performanță
- Design-ul este responsive și funcționează pe toate dispozitivele
