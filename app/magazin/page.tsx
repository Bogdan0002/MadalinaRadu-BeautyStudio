import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/cards/ProductCard";

export default function MagazinPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-brand-peach/30 dark:bg-brand-indigo/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-indigo dark:text-white mb-3 sm:mb-4">
            Magazin online
          </h1>
          <p className="text-base sm:text-lg text-brand-indigo/70 dark:text-white/80 max-w-3xl mx-auto mb-3 sm:mb-4">
            Echipamente profesionale de înaltă calitate pentru saloane de
            înfrumusețare și clinici estetice.
          </p>
          <p className="text-xs sm:text-sm text-brand-indigo/60 dark:text-white/60 italic">
            Notă: Checkout-ul online va fi gestionat manual sau prin GoHighLevel
            în curând. Pentru moment, interfața funcționează ca un catalog.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div key={product.slug} className="h-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* De ce noi? */}
        <section className="bg-white dark:bg-brand-indigo/80 rounded-lg p-6 sm:p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-indigo dark:text-white mb-6 sm:mb-8 text-center">
            De ce noi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-teal to-brand-blue rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <span className="text-xl sm:text-2xl">⭐</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-brand-indigo dark:text-white mb-2 sm:mb-3">
                Calitate și preț
              </h3>
              <p className="text-brand-indigo/70 dark:text-white/70 text-xs sm:text-sm">
                Oferim echipamente de cea mai înaltă calitate la prețuri
                competitive, fără compromisuri asupra performanței sau
                durabilității.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-indigo mb-3">
                Satisfacție garantată
              </h3>
              <p className="text-brand-indigo/70 text-sm">
                Garantăm calitatea produselor și oferim suport complet pentru
                fiecare achiziție, inclusiv instruire și asistență tehnică.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-indigo mb-3">
                Livrare rapidă din stoc
              </h3>
              <p className="text-brand-indigo/70 text-sm">
                Produsele disponibile sunt livrate rapid și sigur, direct la
                adresa ta, cu asigurare completă pentru transport.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

