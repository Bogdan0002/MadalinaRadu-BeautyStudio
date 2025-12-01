import { notFound } from "next/navigation";
import { services } from "@/data/services";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import { Metadata } from "next";
import Button from "@/components/ui/Button";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

const imageMap: Record<string, string> = {
  "micropigmentare-sprancene": "/images/service-sprancene.jpg",
  "micropigmentare-buze": "/images/service-buze.jpg",
  "marire-buze-hyaluron-pen": "/images/service-hyaluron-pen.jpg",
  "tratamente-faciale-bb-glow": "/images/service-bb-glow.jpg",
  "epilare-definitiva-cu-laser": "/images/service-epilare-laser.jpg",
  "dermopigmentare-medicala": "/images/service-dermopigmentare.jpg",
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Serviciu negăsit",
    };
  }

  return {
    title: `${service.name} București | Prețuri & Programare | Mădălina Radu`,
    description: service.metaDescription || `${service.longDescription.substring(0, 160)}... Consultație gratuită în București.`,
    keywords: `${service.name.toLowerCase()}, ${service.category}, bucurești, micropigmentare bucurești, ${service.tags?.join(", ") || ""}`,
      openGraph: {
        title: `${service.name} - Mădălina Radu Beauty Studio`,
        description: service.shortDescription,
        images: service.image ? [service.image] : [],
        type: "website",
      },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((s) => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-brand-peach/30 dark:bg-brand-indigo/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-brand-indigo/60 dark:text-white/60">
            <li>
              <Link href="/" className="hover:text-brand-purple dark:hover:text-brand-teal transition-colors">
                Acasă
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/servicii" className="hover:text-brand-purple dark:hover:text-brand-teal transition-colors">
                Servicii
              </Link>
            </li>
            <li>/</li>
            <li className="text-brand-indigo dark:text-white font-medium">{service.name}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-3 sm:px-4 py-2 bg-brand-purple/10 dark:bg-brand-teal/20 rounded-full border border-brand-purple/20 dark:border-brand-teal/30">
                <span className="text-brand-purple dark:text-brand-teal font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  {service.category}
                </span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-indigo dark:text-white mb-4 sm:mb-6 leading-tight">
                {service.name}
              </h1>
              <p className="font-body text-lg sm:text-xl text-brand-indigo/70 dark:text-white/80 leading-relaxed mb-6">
                {service.shortDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {service.slug.includes("epilare") ? (
                  <Button
                    as="link"
                    href="/laserice"
                    variant="primary"
                    size="lg"
                  >
                    Programează consultație gratuită
                  </Button>
                ) : (
                  <Button
                    as="link"
                    href="/contact"
                    variant="primary"
                    size="lg"
                  >
                    Programează consultație gratuită
                  </Button>
                )}
                <Button
                  as="link"
                  href="/servicii"
                  variant="outline"
                  size="md"
                >
                  Toate serviciile
                </Button>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src={imageMap[service.slug] || service.image || "/images/service-default.jpg"}
                alt={`${service.name} - Servicii micropigmentare București`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white dark:bg-brand-indigo/80 rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-indigo dark:text-white mb-4">
                Despre {service.name}
              </h2>
              <div className="font-body prose prose-lg max-w-none text-brand-indigo/70 dark:text-white/80 leading-relaxed">
                <p className="text-base sm:text-lg mb-4">{service.longDescription}</p>
              </div>
            </section>

            {/* Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <section className="bg-white dark:bg-brand-indigo/80 rounded-2xl p-6 sm:p-8 shadow-lg">
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-indigo dark:text-white mb-6">
                  Beneficii principale
                </h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-brand-purple to-brand-teal rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-body text-brand-indigo/70 dark:text-white/80 flex-1">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* For Whom */}
            {service.forWhom && service.forWhom.length > 0 && (
              <section className="bg-white dark:bg-brand-indigo/80 rounded-2xl p-6 sm:p-8 shadow-lg">
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-indigo dark:text-white mb-6">
                  Pentru cine este potrivit
                </h2>
                <ul className="space-y-3">
                  {service.forWhom.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-brand-teal to-brand-blue rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="font-body text-brand-indigo/70 dark:text-white/80 flex-1">{item}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Procedure */}
            {service.procedure && service.procedure.length > 0 && (
              <section className="bg-white dark:bg-brand-indigo/80 rounded-2xl p-6 sm:p-8 shadow-lg">
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-indigo dark:text-white mb-6">
                  Cum decurge procedura
                </h2>
                <ol className="space-y-4">
                  {service.procedure.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-teal rounded-full flex items-center justify-center font-heading font-semibold text-white">
                        {index + 1}
                      </div>
                      <p className="font-body text-brand-indigo/70 dark:text-white/80 flex-1 pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Subservices (for dermopigmentare medicală) */}
            {service.subservices && service.subservices.length > 0 && (
              <section className="bg-white dark:bg-brand-indigo/80 rounded-2xl p-6 sm:p-8 shadow-lg">
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-indigo dark:text-white mb-6">
                  Servicii incluse
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.subservices.map((sub) => (
                    <div
                      key={sub.id}
                      className="bg-brand-peach/20 dark:bg-brand-indigo/70 p-4 rounded-xl border border-brand-purple/20 dark:border-brand-teal/30"
                    >
                      <h3 className="font-heading text-lg font-semibold text-brand-indigo dark:text-white mb-2">
                        {sub.name}
                      </h3>
                      <p className="font-body text-sm text-brand-indigo/70 dark:text-white/80">{sub.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-brand-purple to-brand-teal rounded-2xl p-6 sm:p-8 text-white shadow-xl">
              <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-4">
                Programează o consultație
              </h3>
              <p className="font-body text-white/90 mb-6 text-sm sm:text-base">
                Primește o consultație gratuită personalizată pentru {service.name.toLowerCase()}.
              </p>
              {service.slug.includes("epilare") ? (
                <Button
                  as="link"
                  href="/laserice"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  Contactează-ne
                </Button>
              ) : (
                <Button
                  as="link"
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  Contactează-ne
                </Button>
              )}
            </div>

            {/* Quick Info */}
            <div className="bg-white dark:bg-brand-indigo/80 rounded-2xl p-6 shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-brand-indigo dark:text-white mb-4">
                Informații rapide
              </h3>
              <div className="space-y-3 font-body text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-brand-purple dark:text-brand-teal">⏱️</span>
                  <span className="text-brand-indigo/70 dark:text-white/80">Durata: 2-3 ore</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand-purple dark:text-brand-teal">🔄</span>
                  <span className="text-brand-indigo/70 dark:text-white/80">Retușare: după 6-8 luni</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand-purple dark:text-brand-teal">⏳</span>
                  <span className="text-brand-indigo/70 dark:text-white/80">Rezultate: 12-18 luni</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand-purple dark:text-brand-teal">📍</span>
                  <span className="text-brand-indigo/70 dark:text-white/80">București, România</span>
                </div>
              </div>
            </div>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="bg-white dark:bg-brand-indigo/80 rounded-2xl p-6 shadow-lg">
                <h3 className="font-heading text-xl font-semibold text-brand-indigo dark:text-white mb-4">
                  Servicii similare
                </h3>
                <ul className="space-y-3">
                  {relatedServices.map((related) => (
                    <li key={related.id}>
                      <Link
                        href={`/servicii/${related.slug}`}
                        className="font-body text-brand-indigo dark:text-white hover:text-brand-purple dark:hover:text-brand-teal transition-colors text-sm sm:text-base"
                      >
                        {related.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

