import { services } from "@/data/services";
import ServiceCard from "@/components/cards/ServiceCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicii Micropigmentare & Beauty București | Mădălina Radu",
  description: "Servicii complete de micropigmentare sprâncene, micropigmentare buze, mărire buze Hyaluron Pen, BB Glow, epilare definitivă cu laser și dermopigmentare medicală în București. Prețuri și programare.",
  keywords: "micropigmentare sprâncene bucurești, micropigmentare buze, hyaluron pen, epilare definitivă laser, bb glow, dermopigmentare medicală",
};

const imageMap: Record<string, string> = {
  "micropigmentare-sprancene": "/images/service-sprancene.jpg",
  "micropigmentare-buze": "/images/service-buze.jpg",
  "marire-buze-hyaluron-pen": "/images/service-hyaluron-pen.jpg",
  "tratamente-faciale-bb-glow": "/images/service-bb-glow.jpg",
  "epilare-definitiva-cu-laser": "/images/service-epilare-laser.jpg",
  "dermopigmentare-medicala": "/images/service-dermopigmentare.jpg",
};

export default function ServiciiPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-brand-peach/30 dark:bg-brand-indigo/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Intro */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-indigo dark:text-white mb-4 sm:mb-6">
            Servicii <span className="bg-gradient-to-r from-brand-purple to-brand-teal bg-clip-text text-transparent">Micropigmentare & Beauty</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-indigo/70 dark:text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            Oferim o gamă completă de proceduri estetice profesionale în București: micropigmentare sprâncene și buze, mărire buze Hyaluron Pen, tratamente faciale BB Glow, epilare definitivă cu laser și dermopigmentare medicală. Fiecare serviciu este realizat cu tehnici moderne și echipamente de ultimă generație pentru rezultate naturale și durabile.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
