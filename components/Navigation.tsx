"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Úvod", href: "/" },
  { label: "Tvorba webových stránek", href: "/tvorba-webu" },
  { label: "Školení", href: "/skoleni" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-7 h-7 flex-shrink-0">
              <Image
                src="/images/logo-bouchal-antonin2.png"
                alt="Antonín Bouchal"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-[var(--orange)] font-semibold text-[15px] tracking-tight group-hover:text-[var(--orange-dark)] transition-colors duration-200">
              antoninbouchal.cz
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3.5 py-2 rounded-xl text-[13.5px] font-medium transition-all duration-200 ${
                  l.href === "/kontakt"
                    ? "ml-2 px-5 py-2 bg-[var(--orange)] text-white hover:bg-[var(--orange-dark)]"
                    : pathname === l.href
                    ? "text-[var(--orange)]"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-[5px] w-10 h-10 items-center justify-center"
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-[2px] rounded-full transition-all duration-300 ${
                  scrolled || menuOpen ? "bg-[var(--text-dark)]" : "bg-[var(--text-dark)]"
                } ${
                  i === 0 ? menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
                  : i === 1 ? menuOpen ? "w-0 opacity-0" : "w-4"
                  : menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
                }`}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/30" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-white shadow-2xl transition-transform duration-300 flex flex-col pt-20 pb-8 px-6 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-[15px] font-medium transition-colors duration-200 ${
                  l.href === "/kontakt"
                    ? "mt-4 text-center bg-[var(--orange)] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-6 border-t border-[var(--border)]">
            <p className="text-xs text-gray-400">+420 736 729 646</p>
            <p className="text-xs text-gray-400 mt-1">jsem@antoninbouchal.cz</p>
          </div>
        </div>
      </div>
    </>
  );
}
