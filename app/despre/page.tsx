import ImageWithFallback from "@/components/ImageWithFallback";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre Mădălina Radu - Specialist Micropigmentare București",
  description: "Mădălina Radu - artistă de tatuaj cosmetic cu peste 500 de cliente mulțumite în București. Specializare în micropigmentare sprâncene, buze, epilare definitivă cu laser și tratamente estetice profesionale.",
  keywords: "mădălina radu, micropigmentare bucurești, artistă tatuaj cosmetic, specialist beauty bucurești",
};

export default function DesprePage() {
  return (
    <div className="section-padding premium-gradient relative overflow-hidden">
      <div className="mx-auto max-w-5xl container-padding relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 animate-slide-up">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-indigo dark:text-white mb-3 sm:mb-4">
            Despre{" "}
            <span className="gradient-text">
              Mădălina Radu
            </span>
          </h1>
          <p className="font-body text-base sm:text-lg text-brand-indigo/70 dark:text-white/80 max-w-2xl mx-auto leading-relaxed">
            Specialist în micropigmentare și tratamente estetice în București
          </p>
        </div>

        {/* Premium portrait block */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.6fr)] gap-10 lg:gap-14 items-center mb-10 lg:mb-14">
          {/* Portrait */}
          <div className="relative max-w-sm mx-auto md:mx-0 animate-scale-in">
            {/* Glow background */}
            <div className="absolute -inset-6 bg-gradient-to-br from-brand-purple/25 via-brand-teal/25 to-brand-blue/25 blur-3xl opacity-70" />

            {/* Glass card */}
            <div className="relative glass-effect-strong rounded-4xl overflow-hidden shadow-premium-lg border border-white/40 dark:border-brand-teal/30">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <ImageWithFallback
                  src="/images/madalinaradu-899x1024.webp"
                  alt="Mădălina Radu - Specialist micropigmentare București"
                  fill
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
              <div className="px-6 py-5 sm:px-7 sm:py-6 flex items-center justify-between">
                <div>
                  <p className="font-heading text-lg sm:text-xl text-brand-indigo dark:text-white leading-tight">
                    Mădălina Radu
                  </p>
                  <p className="font-body text-xs sm:text-sm text-brand-indigo/70 dark:text-white/70 mt-1">
                    Artistă tatuaj cosmetic & fondatoare studio
                  </p>
                </div>
                <div className="hidden sm:flex flex-col items-end text-xs text-brand-indigo/60 dark:text-white/60">
                  <span className="font-semibold text-brand-purple dark:text-brand-teal">
                    500+
                  </span>
                  <span>cliente fericite</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="premium-card p-6 sm:p-8 lg:p-10 animate-slide-up">
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-brand-indigo dark:text-white mb-3 sm:mb-4">
              Formare și calificări
            </h2>
            <p className="font-body text-brand-indigo/70 dark:text-white/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Mădălina Radu este o artistă de tatuaj cosmetic certificată, cu formare specializată în micropigmentare, epilare definitivă cu laser și tratamente estetice moderne. Cu ani de experiență în domeniul beauty și estetică, oferă servicii de cea mai înaltă calitate în studio-ul din București.
            </p>
            <p className="font-body text-brand-indigo/70 dark:text-white/80 leading-relaxed mb-0 text-sm sm:text-base">
              Formarea continuă și participarea la cursuri și workshop-uri internaționale asigură că tehnicile și produsele folosite sunt mereu dintre cele mai moderne și sigure disponibile pe piață.
            </p>
          </div>
        </div>

        {/* Additional content block */}
        <div className="premium-card p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 animate-fade-in">
          <div>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-brand-indigo dark:text-white mb-3 sm:mb-4">
              Experiență profesională
            </h2>
            <p className="font-body text-brand-indigo/70 dark:text-white/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Cu peste 500 de cliente mulțumite în București, Mădălina a dezvoltat o abordare personalizată și profund empatică pentru fiecare procedură de micropigmentare, epilare definitivă sau tratament estetic. Experiența acumulată îi permite să ofere rezultate consecvent excepționale și să răspundă nevoilor specifice ale fiecărei cliente.
            </p>
            <p className="font-body text-brand-indigo/70 dark:text-white/80 leading-relaxed mb-0 text-sm sm:text-base">
              Specializări principale: micropigmentare sprâncene, micropigmentare buze, mărire buze Hyaluron Pen, tratamente faciale BB Glow, epilare definitivă cu laser și dermopigmentare medicală.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-brand-indigo dark:text-white mb-3 sm:mb-4">
              Filosofia mea
            </h2>
            <p className="font-body text-brand-indigo/70 dark:text-white/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Cred că fiecare persoană merită să se simtă încrezătoare și frumoasă. Prin tehnici moderne de micropigmentare, epilare definitivă și tratamente estetice, transform această credință în rezultate concrete care depășesc așteptările. Fiecare procedură este personalizată pentru a se potrivi perfect nevoilor și preferințelor tale.
            </p>
            <p className="font-body text-brand-indigo/70 dark:text-white/80 leading-relaxed mb-0 text-sm sm:text-base">
              În studio-ul meu din București, prioritățile sunt siguranța, calitatea și confortul clientei. Folosesc doar produse de calitate medicală, echipamente profesionale și protocoale stricte de igienă pentru a oferi rezultate naturale, durabile și sigure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
