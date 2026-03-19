"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Úvod", href: "/" },
  { label: "Tvorba webů", href: "/tvorba-webu" },
  { label: "Školení", href: "/skoleni" },
  { label: "Kontakt", href: "/kontakt" },
];

const social = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/antoninbouchal",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/antonin.bouchal",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/antoninbouchal",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll nahoru"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:shadow-lg transition-all duration-200"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <path
          d="M18 15l-6-6-6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal, .reveal-left, .reveal-right")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 80);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @media (min-width: 768px) and (max-width: 1023px) {
          .footer-top-grid {
            grid-template-columns: auto 1fr auto !important;
            gap: 20px !important;
          }
          .footer-col-menu { align-items: center !important; }
          .footer-col-social { align-items: flex-end !important; }
        }
        @media (max-width: 767px) {
          .footer-top-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-col-menu { align-items: flex-start !important; }
          .footer-col-social { align-items: flex-start !important; }
        }
        .footer-nav { flex-wrap: nowrap !important; }
      `}</style>
      <footer ref={ref} className="bg-[#f9fafb] border-t-[3px] border-[#4A5149]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 pt-12 pb-8">

          {/* 3-column top area */}
          <div className="footer-top-grid grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">

            {/* Column 1: Kontakt */}
            <div className="reveal-left flex flex-col gap-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-900">
                Kontakt
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+420736729646"
                  className="flex items-center gap-2 text-[15px] font-medium text-gray-800 hover:text-gray-500 transition-colors duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    className="w-4 h-4 shrink-0"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.03 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  +420 736 729 646
                </a>
                <a
                  href="mailto:jsem@antoninbouchal.cz"
                  className="flex items-center gap-2 text-[15px] font-medium text-gray-800 hover:text-gray-500 transition-colors duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    className="w-4 h-4 shrink-0"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="22,6 12,13 2,6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  jsem@antoninbouchal.cz
                </a>
              </div>
            </div>

            {/* Column 2: Menu */}
            <div className="footer-col-menu reveal flex flex-col gap-5 lg:items-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-900">
                Menu
              </p>
              <nav className="footer-nav flex flex-wrap items-center gap-y-2">
                {navLinks.map((l, i) => (
                  <span key={l.href} className="flex items-center">
                    <Link
                      href={l.href}
                      className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
                    >
                      {l.label}
                    </Link>
                    {i < navLinks.length - 1 && (
                      <span className="mx-2 text-gray-400 select-none">/</span>
                    )}
                  </span>
                ))}
              </nav>
            </div>

            {/* Column 3: Sledujte mě */}
            <div className="footer-col-social reveal-right flex flex-col gap-5 lg:items-end">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-900">
                Sledujte mě
              </p>
              <div className="flex items-center gap-3">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-500 hover:text-gray-900 hover:bg-white transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#bdbdbd]" />

          {/* Bottom bar */}
          <div className="reveal py-5 grid grid-cols-1 md:grid-cols-3 items-center gap-4">

            {/* Left: avatar + address */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/antonin-bouchal_ico.jpg"
                alt="Antonín Bouchal"
                width={40}
                height={40}
                className="rounded-xl object-cover shrink-0"
              />
              <div>
                <p className="text-[13px] text-gray-700 font-medium leading-tight">
                  Václavské nám. 808/66, 110&nbsp;00&nbsp;Praha
                </p>
                <a
                  href="https://maps.google.com/?q=Václavské+náměstí+808/66,+Praha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  Zobrazit na mapě
                </a>
              </div>
            </div>

            {/* Center: copyright */}
            <p className="text-[12px] text-gray-500 text-left md:text-center">
              © {new Date().getFullYear()} Antonín Bouchal&nbsp;·&nbsp;IČO:&nbsp;04484631
            </p>

            {/* Right: hashtag pills */}
            <div className="flex items-center gap-2 md:justify-end flex-wrap">
              <span className="text-[12px] text-gray-600 bg-gray-200 rounded-lg px-3 py-1 font-medium">
                #DOCXmaster
              </span>
              <span className="text-[12px] text-gray-600 bg-gray-200 rounded-lg px-3 py-1 font-medium">
                #WorkSmartNotHard
              </span>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </>
  );
}
