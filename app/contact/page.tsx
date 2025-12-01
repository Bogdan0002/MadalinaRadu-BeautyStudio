"use client";

import { useState } from "react";
import Link from "next/link";
import { contactInfo } from "@/data/contactInfo";
import GhlFormPlaceholder from "@/components/GhlFormPlaceholder";
import { Metadata } from "next";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nume: "",
    email: "",
    telefon: "",
    mesaj: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to GHL API or Next.js API route
    console.log("Form submitted:", formData);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-brand-peach/30 dark:bg-brand-indigo/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-indigo dark:text-white mb-3 sm:mb-4">
            Contact <span className="bg-gradient-to-r from-brand-purple to-brand-teal bg-clip-text text-transparent">Studio</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-indigo/70 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
            Programează o consultație gratuită pentru micropigmentare, epilare definitivă cu laser sau alte tratamente estetice în București. Ne-ar plăcea să auzim de la tine!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-brand-indigo dark:text-white mb-4 sm:mb-6">
              Informații de contact
            </h2>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div>
                <h3 className="font-semibold text-brand-indigo dark:text-white mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <span className="text-brand-purple dark:text-brand-teal">📍</span> Adresă studio
                </h3>
                <p className="text-brand-indigo/70 dark:text-white/80 text-sm sm:text-base">{contactInfo.address}</p>
                <p className="text-xs sm:text-sm text-brand-indigo/60 dark:text-white/60 mt-1">București, România</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-indigo dark:text-white mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <span className="text-brand-purple dark:text-brand-teal">📞</span> Telefon
                </h3>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="text-brand-indigo/70 dark:text-white/80 hover:text-brand-purple dark:hover:text-brand-teal transition-colors font-semibold text-base sm:text-lg"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-brand-indigo dark:text-white mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <span className="text-brand-purple dark:text-brand-teal">✉️</span> Email
                </h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-brand-indigo/70 dark:text-white/80 hover:text-brand-purple dark:hover:text-brand-teal transition-colors font-semibold text-sm sm:text-base break-all"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-brand-indigo dark:text-white mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <span className="text-brand-purple dark:text-brand-teal">🕐</span> Program
                </h3>
                <div className="text-brand-indigo/70 dark:text-white/80 space-y-1 text-sm sm:text-base">
                  {contactInfo.program.map((hours, index) => (
                    <div key={index} className="font-medium">{hours}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-brand-purple to-brand-teal text-white rounded-xl font-semibold hover:from-brand-teal hover:to-brand-blue transition-all transform hover:scale-105 shadow-lg"
              >
                <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Sună acum
              </a>
              <a
                href="https://wa.me/40757376043"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 bg-white text-brand-indigo border-2 border-brand-indigo rounded-xl font-semibold hover:bg-brand-indigo hover:text-white transition-all transform hover:scale-105 shadow-lg"
              >
                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Scrie pe WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-brand-indigo dark:text-white mb-4 sm:mb-6">
              Trimite un mesaj
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div>
                <label
                  htmlFor="nume"
                  className="block text-xs sm:text-sm font-medium text-brand-indigo dark:text-white mb-1 sm:mb-2"
                >
                  Nume complet *
                </label>
                <input
                  type="text"
                  id="nume"
                  value={formData.nume}
                  onChange={(e) =>
                    setFormData({ ...formData, nume: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-brand-peach/50 dark:border-brand-teal/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple dark:focus:ring-brand-teal bg-white dark:bg-brand-indigo/80 text-brand-indigo dark:text-white text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-brand-indigo dark:text-white mb-1 sm:mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-brand-peach/50 dark:border-brand-teal/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple dark:focus:ring-brand-teal bg-white dark:bg-brand-indigo/80 text-brand-indigo dark:text-white text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="telefon"
                  className="block text-xs sm:text-sm font-medium text-brand-indigo dark:text-white mb-1 sm:mb-2"
                >
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="telefon"
                  value={formData.telefon}
                  onChange={(e) =>
                    setFormData({ ...formData, telefon: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-brand-peach/50 dark:border-brand-teal/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple dark:focus:ring-brand-teal bg-white dark:bg-brand-indigo/80 text-brand-indigo dark:text-white text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="mesaj"
                  className="block text-xs sm:text-sm font-medium text-brand-indigo dark:text-white mb-1 sm:mb-2"
                >
                  Mesaj *
                </label>
                <textarea
                  id="mesaj"
                  rows={5}
                  value={formData.mesaj}
                  onChange={(e) =>
                    setFormData({ ...formData, mesaj: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-brand-peach/50 dark:border-brand-teal/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple dark:focus:ring-brand-teal bg-white dark:bg-brand-indigo/80 text-brand-indigo dark:text-white text-sm sm:text-base"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-brand-purple to-brand-teal text-white rounded-xl font-semibold hover:from-brand-teal hover:to-brand-blue transition-all transform hover:scale-105 shadow-lg"
              >
                Trimite mesaj
              </button>
            </form>

            <div className="mt-8">
              <p className="text-sm text-brand-indigo/60 mb-4">
                Alternativ, poți folosi formularul GoHighLevel de mai jos:
              </p>
              <GhlFormPlaceholder
                title="Formular de contact GoHighLevel"
                description="Completează formularul pentru a ne trimite un mesaj."
              />
              {/* 
                TODO: Replace GhlFormPlaceholder with:
                1. GHL form embed script (form/survey), OR
                2. POST form data to Next.js API route which will call GHL API/webhook
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
