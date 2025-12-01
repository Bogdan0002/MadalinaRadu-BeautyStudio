import Link from "next/link";
import { navigation } from "@/data/navigation";
import { contactInfo } from "@/data/contactInfo";
import SocialMediaIcons from "./SocialMediaIcons";
import Button from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="mt-10 bg-gradient-to-t from-brand-indigo via-brand-indigo/95 to-brand-indigo/90 text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl container-padding py-10 sm:py-12 lg:py-14 relative">
        {/* Subtle glow background */}
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-32 bg-gradient-to-b from-brand-purple/20 via-brand-teal/8 to-transparent blur-3xl opacity-60" />

        {/* Main footer content */}
        <div className="relative grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.2fr] gap-8 lg:gap-12 mb-6 lg:mb-8">
          {/* Brand / About */}
          <div className="space-y-4">
            <div>
              <Link href="/" className="inline-flex flex-col gap-1">
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
                  Mădălina Radu
                </span>
                <span className="font-body text-xs sm:text-sm text-brand-blue/80">
                  Micropigmentare & Beauty Studio București
                </span>
              </Link>
            </div>
            <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed max-w-md">
              Studio boutique specializat în micropigmentare sprâncene și buze, tratamente faciale și epilare definitivă cu laser, cu focus pe rezultate naturale și o experiență relaxantă pentru fiecare clientă.
            </p>
            <div className="mt-4">
              <p className="text-xs sm:text-sm font-semibold text-white/90 mb-2">
                Urmărește-ne
              </p>
              <SocialMediaIcons iconSize="md" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm sm:text-base font-semibold mb-3 sm:mb-4">
              Link-uri rapide
            </h3>
            <ul className="space-y-2 font-body text-xs sm:text-sm text-white/75">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-brand-teal transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm sm:text-base font-semibold mb-3 sm:mb-4">
              Contact & program
            </h3>
            <ul className="space-y-2 font-body text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-teal">📍</span>
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-teal">📞</span>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-brand-teal transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-teal">✉️</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-brand-teal transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="mt-3 pt-3 border-t border-white/10">
                <p className="text-[11px] sm:text-xs font-semibold mb-1 text-white/80">
                  Program studio
                </p>
                <div className="space-y-0.5">
                  {contactInfo.program.map((hours, index) => (
                    <div key={index}>{hours}</div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-white/60">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} mădălina-radu.ro · Toate drepturile rezervate
            </p>
            <p className="text-center md:text-right">
              NEFERTUM PARFUMERY SRL · CUI, Nr. Reg. Com.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              <Link
                href="/termeni-si-conditii"
                className="hover:text-brand-teal transition-colors"
              >
                Termeni și condiții
              </Link>
              <Link
                href="/politica-confidentialitate"
                className="hover:text-brand-teal transition-colors"
              >
                Politica de confidențialitate
              </Link>
              <Link
                href="/politica-cookie-uri"
                className="hover:text-brand-teal transition-colors"
              >
                Politica de cookie-uri
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
