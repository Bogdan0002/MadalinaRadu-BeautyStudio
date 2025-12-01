import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GhlScripts from "@/components/GhlScripts";
import { ThemeProvider } from "@/contexts/ThemeContext";

const manrope = Manrope({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Mădălina Radu - Micropigmentare & Beauty Studio București | Servicii Estetice Profesionale",
  description: "Servicii profesionale de micropigmentare sprâncene, micropigmentare buze, epilare definitivă cu laser și tratamente estetice în București. Peste 500 de cliente mulțumite. Consultație gratuită.",
  keywords: "micropigmentare bucurești, micropigmentare sprâncene, micropigmentare buze, epilare definitivă laser, beauty studio bucurești, tratamente estetice",
  openGraph: {
    title: "Mădălina Radu - Micropigmentare & Beauty Studio București",
    description: "Servicii profesionale de micropigmentare și tratamente estetice în București",
    type: "website",
    locale: "ro_RO",
    siteName: "Mădălina Radu - Micropigmentare & Beauty Studio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://madalina-radu.ro',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body className={`${manrope.variable} ${cormorantGaramond.variable} font-body`}>
        <ThemeProvider>
          <GhlScripts />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
