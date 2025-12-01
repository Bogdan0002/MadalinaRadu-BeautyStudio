import Link from "next/link";
import { Service } from "@/data/services";
import Card from "@/components/ui/Card";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/servicii/${service.slug}`} className="block h-full group">
      <Card className="h-full flex flex-col premium-card-hover overflow-hidden p-0">
        <div className="p-8 lg:p-10 relative flex-1 flex flex-col">
          {/* Premium Decorative Gradient Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-brand-purple/20 via-brand-purple/10 to-brand-teal/20 dark:from-brand-purple/30 dark:via-brand-teal/30 rounded-bl-[3rem] lg:rounded-bl-[4rem] group-hover:from-brand-purple/30 group-hover:to-brand-teal/30 transition-all duration-700 pointer-events-none"></div>
          
          {/* Premium Glow Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/0 via-brand-teal/0 to-brand-blue/0 group-hover:from-brand-purple/5 group-hover:via-brand-teal/5 group-hover:to-brand-blue/5 rounded-3xl transition-all duration-700 pointer-events-none"></div>

          <div className="relative z-10 flex-1 flex flex-col">
            {/* Premium Icon Container */}
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-brand-purple via-brand-purple to-brand-teal rounded-2xl lg:rounded-3xl mb-6 lg:mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-glow-teal">
              <span className="text-3xl lg:text-4xl">✨</span>
            </div>
            
            {/* Premium Typography */}
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-brand-indigo dark:text-white mb-4 group-hover:text-brand-purple dark:group-hover:text-brand-teal transition-colors duration-300 leading-tight">
              {service.name}
            </h3>
            
            <p className="font-body text-brand-indigo/70 dark:text-white/70 leading-relaxed mb-6 flex-1 text-base lg:text-lg font-light">
              {service.shortDescription}
            </p>
            
            {/* Premium CTA */}
            <div className="flex items-center font-body text-brand-purple dark:text-brand-teal font-semibold group-hover:text-brand-teal dark:group-hover:text-brand-blue group-hover:translate-x-2 transition-all duration-500">
              <span className="text-base lg:text-lg">Află mai mult</span>
              <svg className="ml-3 w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
