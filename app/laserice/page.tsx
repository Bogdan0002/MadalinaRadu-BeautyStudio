"use client";

import { useState } from "react";
import Link from "next/link";
import { reviews } from "@/data/reviews";
import ImageWithFallback from "@/components/ImageWithFallback";
import GhlFormPlaceholder from "@/components/GhlFormPlaceholder";

export default function LaserICEPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const lasericeReviews = reviews.filter((r) => r.category === "laserice");

  const faqs = [
    {
      id: 1,
      question: "Ce este LaserICE și cum funcționează?",
      answer:
        "LaserICE este un sistem avansat de epilare definitivă care utilizează tehnologia prin înghețare pentru a elimina părul nedorit fără durere. Sistemul combină impulsuri laser cu răcire intensă, asigurând confort maxim și rezultate eficiente.",
    },
    {
      id: 2,
      question: "Pentru ce tipuri de piele este potrivit?",
      answer:
        "LaserICE este potrivit pentru toate tipurile de piele, de la cea mai deschisă la cea mai închisă. Tehnologia avansată permite tratarea eficientă a tuturor fototipurilor de piele.",
    },
    {
      id: 3,
      question: "Câte sesiuni sunt necesare pentru rezultate definitive?",
      answer:
        "Numărul de sesiuni variază în funcție de tipul de piele, culoarea părului și zona tratată. În general, sunt recomandate 6-8 sesiuni pentru rezultate optime și durabile.",
    },
    {
      id: 4,
      question: "Este procedura durerosă?",
      answer:
        "Nu, procedura este aproape fără durere datorită tehnologiei prin înghețare integrată. Majoritatea clienților raportează doar o senzație ușoară de răceală sau un disconfort minim.",
    },
    {
      id: 5,
      question: "Ce include pachetul de achiziție?",
      answer:
        "Pachetul include aparatul LaserICE, instruire tehnică completă, training pentru personal, asistență de marketing și vânzări, precum și suport service continuu.",
    },
    {
      id: 6,
      question: "Oferiți testare gratuită?",
      answer:
        "Da, oferim posibilitatea de testare gratuită pentru a demonstra eficiența și calitatea aparatului în condiții reale de lucru.",
    },
    {
      id: 7,
      question: "Care este perioada de amortizare a investiției?",
      answer:
        "Perioada de amortizare variază în funcție de volumul de clienți și prețurile practicate. În general, investiția se amortizează în 12-18 luni pentru saloanele cu un flux constant de clienți.",
    },
  ];

  return (
    <div className="bg-brand-peach/30 dark:bg-brand-indigo/90">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-indigo to-brand-purple dark:from-brand-indigo dark:to-brand-purple text-white py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-brand-teal font-medium mb-4 text-sm sm:text-base uppercase tracking-wider">
                Metoda rapidă pentru epilare definitivă
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                LaserICE – epilare definitivă cu tehnologie de ultimă generație
              </h1>
              <p className="font-body text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                Sistem avansat de epilare definitivă fără durere, potrivit pentru
                toate tipurile de piele. Investiție profitabilă pentru saloane,
                cu rezultate rapide și clienți mulțumiți.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/40757376043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-teal text-white rounded-md font-medium hover:bg-brand-blue transition-colors"
                >
                  Vreau detalii pe WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-indigo rounded-md font-medium hover:bg-brand-peach transition-colors"
                >
                  Solicită prezentare completă
                </Link>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/images/laserice-hero.jpg"
                alt="LaserICE - Aparat de epilare definitivă"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Propunerea noastră */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-brand-indigo/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-indigo dark:text-white mb-6 leading-tight">
              Propunerea noastră
            </h2>
            <p className="font-body text-lg sm:text-xl text-brand-indigo/70 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
              LaserICE ajută saloanele să adauge un serviciu profitabil și
              solicitat, transformând investiția într-o oportunitate de creștere
              a afacerii.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-white to-brand-peach/20 dark:from-brand-indigo/70 dark:to-brand-indigo/90 p-6 sm:p-8 rounded-xl border-l-4 border-brand-teal shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-brand-indigo dark:text-white mb-3 leading-tight">
                Testare gratuită
              </h3>
              <p className="font-body text-brand-indigo/70 dark:text-white/80 text-sm sm:text-base leading-relaxed">
                Oferim posibilitatea de a testa aparatul în condiții reale
                înainte de achiziție.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-brand-peach/20 dark:from-brand-indigo/70 dark:to-brand-indigo/90 p-6 sm:p-8 rounded-xl border-l-4 border-brand-blue shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-brand-indigo dark:text-white mb-3 leading-tight">
                Instruire tehnică și training
              </h3>
              <p className="font-body text-brand-indigo/70 dark:text-white/80 text-sm sm:text-base leading-relaxed">
                Training complet pentru personalul tău, asigurând utilizarea
                corectă și eficientă a echipamentului.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-brand-peach/20 dark:from-brand-indigo/70 dark:to-brand-indigo/90 p-6 sm:p-8 rounded-xl border-l-4 border-brand-purple shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-brand-indigo dark:text-white mb-3 leading-tight">
                Asistență de marketing și vânzări
              </h3>
              <p className="font-body text-brand-indigo/70 dark:text-white/80 text-sm sm:text-base leading-relaxed">
                Suport complet pentru promovarea serviciului și atragerea de
                clienți noi.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-brand-peach/20 dark:from-brand-indigo/70 dark:to-brand-indigo/90 p-6 sm:p-8 rounded-xl border-l-4 border-brand-teal shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-brand-indigo dark:text-white mb-3 leading-tight">
                Asistență service
              </h3>
              <p className="font-body text-brand-indigo/70 dark:text-white/80 text-sm sm:text-base leading-relaxed">
                Suport tehnic continuu și service pentru întreținerea și
                repararea echipamentului.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Puncte forte / 3 piloni */}
      <section className="py-20 bg-gradient-to-r from-brand-teal/10 to-brand-blue/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-indigo mb-12 text-center">
            Puncte forte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-brand-indigo/80 p-6 sm:p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl sm:text-5xl font-bold text-brand-teal dark:text-brand-teal mb-2">
                1200W
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-brand-indigo dark:text-white mb-2 sm:mb-3">
                Putere în wați
              </h3>
              <p className="text-brand-indigo/70 dark:text-white/80 text-xs sm:text-sm">
                Putere maximă pentru rezultate rapide și eficiente
              </p>
            </div>
            <div className="bg-white dark:bg-brand-indigo/80 p-6 sm:p-8 rounded-lg shadow-sm text-center">
              <div className="text-5xl font-bold text-brand-blue mb-2">
                20M+
              </div>
              <h3 className="text-xl font-semibold text-brand-indigo mb-3">
                Milioane de impulsuri
              </h3>
              <p className="text-brand-indigo/70 text-sm">
                Capacitate mare pentru utilizare intensivă pe termen lung
              </p>
            </div>
            <div className="bg-white dark:bg-brand-indigo/80 p-6 sm:p-8 rounded-lg shadow-sm text-center">
              <div className="text-5xl font-bold text-brand-purple mb-2">
                755nm
              </div>
              <h3 className="text-xl font-semibold text-brand-indigo mb-3">
                Lungimi de undă
              </h3>
              <p className="text-brand-indigo/70 text-sm">
                Tehnologie optimizată pentru toate tipurile de piele
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce este LaserICE + Cum funcționează */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-brand-indigo/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-indigo dark:text-white mb-4 sm:mb-6">
                Ce este LaserICE?
              </h2>
              <p className="text-brand-indigo/70 dark:text-white/80 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                LaserICE este un sistem inovator de epilare definitivă care
                combină tehnologia laser cu răcire intensă prin contact. Această
                combinație unică elimină disconfortul asociat cu epilarea
                tradițională cu laser, oferind o experiență plăcută și rezultate
                excepționale.
              </p>
              <p className="text-brand-indigo/70 leading-relaxed">
                Sistemul este proiectat pentru utilizare profesională în saloane
                și clinici estetice, oferind performanță de top și fiabilitate
                pe termen lung.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/laserice-tech-1.jpg"
                alt="Tehnologie LaserICE"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg lg:order-2">
              <ImageWithFallback
                src="/images/laserice-tech-2.jpg"
                alt="Cum funcționează LaserICE"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl font-bold text-brand-indigo mb-6">
                Cum funcționează?
              </h2>
              <p className="text-brand-indigo/70 leading-relaxed mb-4">
                LaserICE utilizează impulsuri laser care sunt absorbite de
                melanina din foliculul părului, generând căldură care distruge
                foliculul. Sistemul de răcire integrat menține pielea la o
                temperatură confortabilă, eliminând durerea și protejând
                epidermul.
              </p>
              <p className="text-brand-indigo/70 leading-relaxed">
                Procedura este rapidă, eficientă și potrivită pentru toate
                zonele corpului, de la față la picioare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* De ce să alegi LaserICE */}
      <section className="py-20 bg-brand-peach/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-indigo mb-12 text-center">
            De ce să alegi LaserICE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Pentru toate tipurile de piele",
                description:
                  "Tehnologie avansată care funcționează eficient pe toate fototipurile de piele.",
              },
              {
                title: "Ecran intuitiv",
                description:
                  "Interfață ușor de utilizat, cu setări preconfigurate pentru rezultate optime.",
              },
              {
                title: "Fără durere",
                description:
                  "Sistem de răcire integrat care elimină disconfortul și durerea.",
              },
              {
                title: "Tehnologie prin înghețare",
                description:
                  "Răcire activă care protejează pielea și maximizează confortul.",
              },
              {
                title: "Fără consumabile",
                description:
                  "Nu necesită consumabile costisitoare, reducând costurile de operare.",
              },
              {
                title: "Rezultate rapide",
                description:
                  "Vizibile după primele sesiuni, cu rezultate definitive după tratament complet.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-brand-peach/50"
              >
                <h3 className="font-semibold text-brand-indigo mb-2">
                  {feature.title}
                </h3>
                <p className="text-brand-indigo/70 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specificații tehnice */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-indigo mb-8 text-center">
            Specificații tehnice
          </h2>
          <div className="bg-brand-peach/20 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-brand-indigo mb-2">Putere</h3>
                <p className="text-brand-indigo/70 text-sm">1200W</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-indigo mb-2">
                  Impulsuri
                </h3>
                <p className="text-brand-indigo/70 text-sm">Peste 20 milioane</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-indigo mb-2">
                  Lungime de undă
                </h3>
                <p className="text-brand-indigo/70 text-sm">755nm</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-indigo mb-2">
                  Dimensiune ecran
                </h3>
                <p className="text-brand-indigo/70 text-sm">7 inch touchscreen</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-indigo mb-2">Răcire</h3>
                <p className="text-brand-indigo/70 text-sm">
                  Sistem integrat de răcire activă
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-indigo mb-2">
                  Dimensiuni
                </h3>
                <p className="text-brand-indigo/70 text-sm">
                  45 x 35 x 25 cm (L x W x H)
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-indigo mb-2">Greutate</h3>
                <p className="text-brand-indigo/70 text-sm">12 kg</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-indigo mb-2">Tensiune</h3>
                <p className="text-brand-indigo/70 text-sm">220V / 50Hz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recenzii */}
      <section className="py-20 bg-brand-peach/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-indigo mb-12 text-center">
            Recenzii cliente
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lasericeReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                {review.rating && (
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-brand-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}
                <p className="text-brand-indigo/80 mb-4 leading-relaxed italic text-sm">
                  &ldquo;{review.content}&rdquo;
                </p>
                <p className="text-sm font-medium text-brand-indigo">
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-indigo mb-12 text-center">
            Întrebări frecvente
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-brand-peach/50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === faq.id ? null : faq.id)
                  }
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-brand-peach/20 hover:bg-brand-peach/30 transition-colors"
                >
                  <span className="font-semibold text-brand-indigo">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-brand-indigo transition-transform ${
                      openFaq === faq.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-brand-indigo/70">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Lead Form */}
      <section className="py-20 bg-gradient-to-br from-brand-indigo to-brand-purple text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4 text-center">Hai să vorbim!</h2>
            <p className="text-lg text-white/90 mb-8 text-center">
              Completează formularul de mai jos pentru a primi o ofertă
              personalizată și detalii complete despre LaserICE.
            </p>
            <GhlFormPlaceholder
              title="Solicită ofertă personalizată"
              description="Completează formularul pentru a primi toate detaliile despre LaserICE și o ofertă adaptată nevoilor tale."
            />
            {/* 
              TODO: Replace GhlFormPlaceholder with:
              1. GHL form embed script (form/survey), OR
              2. POST form data to Next.js API route which will call GHL API/webhook
            */}
          </div>
        </div>
      </section>
    </div>
  );
}

