"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-premium ${
        scrolled
          ? "glass-effect-strong shadow-xl border-b border-white/30 dark:border-brand-teal/30"
          : "glass-effect border-b border-white/20 dark:border-brand-teal/20"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex flex-col group">
              <span className="font-heading text-xl sm:text-2xl font-bold text-brand-indigo dark:text-white tracking-tight group-hover:text-brand-purple dark:group-hover:text-brand-teal transition-colors">
                Mădălina Radu
              </span>
              <span className="text-xs sm:text-sm text-brand-purple dark:text-brand-teal font-light font-body">
                Micropigmentare & Beauty Studio
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));

              // Special styling for LaserICE highlight
              const isLaserIce = item.href === "/laserice";
              
              if (item.href === "/servicii") {
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${
                        isActive
                          ? "text-brand-purple dark:text-brand-teal bg-brand-purple/10 dark:bg-brand-teal/10"
                          : "text-brand-indigo dark:text-white/80 hover:text-brand-purple dark:hover:text-brand-teal hover:bg-brand-purple/5 dark:hover:bg-brand-teal/5"
                      }`}
                    >
                      {item.name}
                      <svg
                        className="w-4 h-4 transition-transform group-hover:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white dark:bg-brand-indigo/95 backdrop-blur-lg rounded-xl shadow-xl border border-brand-peach/30 dark:border-dark-border p-2">
                        <Link
                          href="/servicii"
                          className={`block px-4 py-2 rounded-lg text-sm font-semibold mb-2 transition-colors ${
                            pathname === "/servicii"
                              ? "bg-brand-purple/10 text-brand-purple dark:bg-brand-teal/20 dark:text-brand-teal"
                              : "text-brand-indigo dark:text-white/80 hover:bg-brand-purple/5 dark:hover:bg-brand-teal/10"
                          }`}
                        >
                          Toate serviciile
                        </Link>
                        <div className="border-t border-brand-peach/20 dark:border-dark-border my-2"></div>
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/servicii/${service.slug}`}
                            className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                              pathname === `/servicii/${service.slug}`
                                ? "bg-brand-purple/10 text-brand-purple dark:bg-brand-teal/20 dark:text-brand-teal font-medium"
                                : "text-brand-indigo/70 dark:text-white/70 hover:bg-brand-purple/5 dark:hover:bg-brand-teal/10 hover:text-brand-indigo dark:hover:text-white"
                            }`}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all relative ${
                    isLaserIce
                      ? "bg-gradient-to-r from-brand-purple via-brand-purple to-brand-teal text-white shadow-glow-teal hover:shadow-glow-strong hover:scale-[1.03]"
                      : isActive
                      ? "text-brand-purple dark:text-brand-teal bg-brand-purple/10 dark:bg-brand-teal/10"
                      : "text-brand-indigo dark:text-white/80 hover:text-brand-purple dark:hover:text-brand-teal hover:bg-brand-purple/5 dark:hover:bg-brand-teal/5"
                  }`}
                >
                  {item.name}
                  {isLaserIce && (
                    <span className="absolute -top-3 -right-4 text-[9px] px-2 py-0.5 rounded-full bg-brand-indigo text-white border border-white/40 tracking-wide uppercase shadow-md">
                      Nou
                    </span>
                  )}
                </Link>
              );
            })}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-brand-indigo dark:text-white hover:bg-brand-purple/10 dark:hover:bg-brand-teal/20 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}

