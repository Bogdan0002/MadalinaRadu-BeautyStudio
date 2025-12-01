"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  if (!open) return null;

  return (
    <div className="lg:hidden border-t border-brand-indigo/10 dark:border-brand-teal/20 bg-white dark:bg-brand-indigo/95 backdrop-blur-lg animate-slide-up">
      <div className="px-4 pt-2 pb-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
          const isLaserIce = item.href === "/laserICE" || item.href === "/laserice";
          
          if (item.href === "/servicii") {
            return (
              <div key={item.name}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-all ${
                    isActive
                      ? "text-brand-purple dark:text-brand-teal bg-brand-purple/10 dark:bg-brand-teal/10"
                      : "text-brand-indigo dark:text-white/80 hover:bg-brand-purple/5 dark:hover:bg-brand-teal/10"
                  }`}
                >
                  <span>{item.name}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/servicii"
                      onClick={onClose}
                      className={`block px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                        pathname === "/servicii"
                          ? "text-brand-purple dark:text-brand-teal bg-brand-purple/10 dark:bg-brand-teal/10"
                          : "text-brand-indigo/70 dark:text-white/70 hover:bg-brand-purple/5 dark:hover:bg-brand-teal/10"
                      }`}
                    >
                      Toate serviciile
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/servicii/${service.slug}`}
                        onClick={onClose}
                        className={`block px-4 py-2 text-sm rounded-lg transition-all ${
                          pathname === `/servicii/${service.slug}`
                            ? "text-brand-purple dark:text-brand-teal bg-brand-purple/10 dark:bg-brand-teal/10 font-medium"
                            : "text-brand-indigo/70 dark:text-white/70 hover:bg-brand-purple/5 dark:hover:bg-brand-teal/10"
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={`block px-4 py-3 text-base font-medium rounded-xl transition-all ${
                isLaserIce
                  ? "bg-gradient-to-r from-brand-purple via-brand-purple to-brand-teal text-white shadow-glow-teal"
                  : isActive
                  ? "text-brand-purple dark:text-brand-teal bg-brand-purple/10 dark:bg-brand-teal/10"
                  : "text-brand-indigo dark:text-white/80 hover:bg-brand-purple/5 dark:hover:bg-brand-teal/10"
              }`}
            >
              {item.name}
              {isLaserIce && (
                <span className="ml-2 inline-flex items-center rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-white/90 bg-white/5">
                  Nou
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

