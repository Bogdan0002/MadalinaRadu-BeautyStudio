import Link from "next/link";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import { products } from "@/data/products";
import { contactInfo } from "@/data/contactInfo";
import UnicornStudioEmbed from "@/components/UnicornStudioEmbed";
import ServiceCard from "@/components/cards/ServiceCard";
import ReviewCard from "@/components/cards/ReviewCard";
import ProductCard from "@/components/cards/ProductCard";
import Button from "@/components/ui/Button";
import StatsCard from "@/components/ui/StatsCard";
import FeatureCard from "@/components/ui/FeatureCard";
import BlogCard from "@/components/cards/BlogCard";
import { posts } from "@/data/posts";
import SocialMediaIcons from "@/components/SocialMediaIcons";

export default function Home() {
  const studioReviews = reviews.filter((r) => r.category === "studio").slice(0, 4);
  const featuredProducts = products.slice(0, 3);
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Premium Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-indigo via-brand-purple/90 to-brand-indigo dark:from-brand-indigo dark:via-brand-indigo/95 dark:to-brand-indigo">
        {/* Animated Background Elements - Premium Parallax Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[100px] animate-glow"></div>
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-brand-teal/15 rounded-full blur-[100px] animate-glow" style={{ "--animation-delay": "1s" } as React.CSSProperties}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] animate-float"></div>
          
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>
        
        <div className="mx-auto max-w-7xl container-padding relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="animate-slide-in-left space-y-8">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 glass-effect-strong rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group/badge">
                <span className="text-2xl animate-float">✨</span>
                <span className="text-white text-sm font-semibold tracking-wide">Peste 500 de cliente fericite</span>
              </div>

              {/* Premium Headline */}
              <div className="space-y-5 sm:space-y-6">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                  <span className="block gradient-text bg-gradient-to-r from-white via-brand-purple/90 to-brand-teal bg-clip-text text-transparent animate-fade-in">
                    PMU artist în București
                  </span>
                  <span className="block text-white mt-1 sm:mt-2 animate-fade-in" style={{ "--animation-delay": "0.2s" } as React.CSSProperties}>
                    - cu pasiune și dedicare
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl font-light animate-fade-in" style={{ "--animation-delay": "0.4s" } as React.CSSProperties}>
                  Micropigmentare sprâncene și buze, epilare definitivă cu laser și tratamente faciale profesionale, într-un studio modern din București.
                </p>
              </div>

              {/* Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in" style={{ "--animation-delay": "0.6s" } as React.CSSProperties}>
                <a
                  href="https://wa.me/40757376043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-brand-purple via-brand-purple to-brand-teal text-white rounded-2xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-glow-teal transition-premium transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact WhatsApp
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-teal to-brand-blue opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                </a>
                <Button
                  as="link"
                  href="/servicii"
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  Vezi toate serviciile
                </Button>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-5 animate-fade-in" style={{ "--animation-delay": "0.8s" } as React.CSSProperties}>
                <p className="text-white/70 text-sm font-medium">Urmărește-ne:</p>
                <SocialMediaIcons iconSize="lg" className="[&_a]:text-white/80 [&_a:hover]:text-brand-teal [&_a]:transition-all [&_a]:duration-300 [&_a:hover]:scale-110" />
              </div>
            </div>

            {/* Right Content - Premium Image Container */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl animate-fade-in group/image" style={{ "--animation-delay": "0.3s" } as React.CSSProperties}>
              {/* Subtle border + hover glow (no dark overlay on top of embed) */}
              <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/15 dark:border-brand-teal/25 z-10" />
              
              {/* Hover glow behind the frame */}
              <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-brand-purple/25 via-brand-teal/25 to-brand-blue/25 rounded-[2.5rem] blur-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full w-full z-0">
                <UnicornStudioEmbed />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="section-padding premium-gradient relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl animate-float" style={{ "--animation-delay": "2s" } as React.CSSProperties}></div>
        </div>
        
        <div className="mx-auto max-w-7xl container-padding relative z-10">
          {/* Premium Section Header */}
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 glass-effect rounded-full border border-brand-purple/20 dark:border-brand-teal/30 shadow-md mb-6">
              <span className="text-brand-purple dark:text-brand-teal text-xl">✨</span>
              <p className="text-brand-purple dark:text-brand-teal font-semibold text-sm uppercase tracking-wider">Studio înfrumusețare</p>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-indigo dark:text-white mb-6 leading-tight">
              Servicii <span className="gradient-text">profesionale</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-brand-indigo/70 dark:text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              Micropigmentare sprâncene și buze, mărire buze Hyaluron Pen, tratamente faciale BB Glow, epilare definitivă cu laser și dermopigmentare medicală în București.
            </p>
          </div>

          {/* Premium Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="animate-scale-in h-full" 
                style={{ "--animation-delay": `${index * 100}ms` } as React.CSSProperties}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Reviews Section */}
      <section className="section-padding bg-white dark:bg-brand-indigo/90 relative overflow-hidden">
        <div className="absolute inset-0 premium-gradient opacity-40 dark:opacity-20"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-purple rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-brand-teal rounded-full blur-3xl animate-float" style={{ "--animation-delay": "2s" } as React.CSSProperties}></div>
        </div>
        
        <div className="mx-auto max-w-7xl container-padding relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 glass-effect rounded-full border border-brand-purple/20 dark:border-brand-teal/30 shadow-md mb-6">
              <span className="text-brand-purple dark:text-brand-teal text-xl">💬</span>
              <p className="text-brand-purple dark:text-brand-teal font-semibold text-sm uppercase tracking-wider">Testimoniale</p>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-indigo dark:text-white mb-6 leading-tight">
              Peste <span className="gradient-text">500 de cliente</span> fericite
            </h2>
            <p className="text-lg sm:text-xl text-brand-indigo/70 dark:text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              Descoperă experiențele clienților noștri și rezultatele excepționale obținute prin serviciile noastre profesionale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {studioReviews.map((review, index) => (
              <div 
                key={review.id} 
                className="animate-scale-in" 
                style={{ "--animation-delay": `${index * 100}ms` } as React.CSSProperties}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Shop Preview */}
      <section className="section-padding premium-gradient-strong relative overflow-hidden">
        <div className="mx-auto max-w-7xl container-padding relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-indigo dark:text-white mb-6 leading-tight">
              Magazin <span className="gradient-text">online</span>
            </h2>
            <p className="text-lg sm:text-xl text-brand-indigo/70 dark:text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              Produse profesionale pentru tratamente estetice și îngrijire personală.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.slug} 
                className="animate-scale-in" 
                style={{ "--animation-delay": `${index * 100}ms` } as React.CSSProperties}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="section-padding bg-white dark:bg-brand-indigo/90 relative">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-indigo dark:text-white mb-6 leading-tight">
              De ce <span className="gradient-text">să ne alegi</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="animate-scale-in">
              <StatsCard
                value="500+"
                label="Cliente mulțumite"
                description="Peste 500 de cliente fericite cu rezultatele obținute"
              />
            </div>
            <div className="animate-scale-in" style={{ "--animation-delay": "0.2s" } as React.CSSProperties}>
              <StatsCard
                value="10+"
                label="Ani experiență"
                description="Experiență vastă în micropigmentare și tratamente estetice"
              />
            </div>
            <div className="animate-scale-in" style={{ "--animation-delay": "0.4s" } as React.CSSProperties}>
              <StatsCard
                value="100%"
                label="Rezultate garantate"
                description="Tehnici moderne și echipamente de ultimă generație"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Blog Preview */}
      <section className="section-padding premium-gradient relative overflow-hidden">
        <div className="mx-auto max-w-7xl container-padding relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 glass-effect rounded-full border border-brand-purple/20 dark:border-brand-teal/30 shadow-md mb-6">
              <span className="text-brand-purple dark:text-brand-teal text-xl">📝</span>
              <p className="text-brand-purple dark:text-brand-teal font-semibold text-sm uppercase tracking-wider">Blog & Ghiduri</p>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-indigo dark:text-white mb-6 leading-tight">
              Ultimele <span className="gradient-text">articole</span>
            </h2>
            <p className="text-lg sm:text-xl text-brand-indigo/70 dark:text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              Descoperă cele mai recente articole despre micropigmentare, tratamente estetice și sfaturi de beauty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {recentPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="animate-scale-in" 
                style={{ "--animation-delay": `${index * 100}ms` } as React.CSSProperties}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 animate-fade-in">
            <Button as="link" href="/blog" variant="outline" size="lg">
              Vezi toate articolele
            </Button>
          </div>
        </div>
      </section>

      {/* Final contact CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-brand-indigo via-brand-purple/90 to-brand-indigo dark:from-brand-indigo dark:via-brand-indigo/95 dark:to-brand-indigo relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl animate-glow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl animate-glow" style={{ "--animation-delay": "1.5s" } as React.CSSProperties}></div>
        </div>
        
        <div className="mx-auto max-w-4xl container-padding relative z-10 text-center animate-fade-in">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Ești pregătită?
            
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/85 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
            Scrie-ne pe WhatsApp sau lasă-ne un mesaj și revenim noi cu toate detaliile.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://wa.me/40757376043"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-brand-purple via-brand-purple to-brand-teal text-white rounded-2xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-glow-teal transition-premium transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
            >
              <span className="relative z-10">Contactează-ne pe WhatsApp</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-teal to-brand-blue opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
            </a>
            <Button as="link" href="/contact" variant="secondary" size="md" className="bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white/20">
              Trimite mesaj
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
