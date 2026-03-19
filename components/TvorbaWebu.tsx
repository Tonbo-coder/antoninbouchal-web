"use client";

import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import ReferencesWeb from "./ReferencesWeb";
import { useRef, useEffect } from "react";

const portfolio = [
  {
    name: "Powerdrive.cz",
    subtitle: "Nabíjecí stanice pro elektromobily",
    desc: "Kompletní proměna webu od návrhu grafiky až po strukturu a produktový katalog. Cílem bylo vytvořit přehledný a dlouhodobě udržitelný web pro technicky náročný sortiment, včetně migrace a následné správy nového hostingu.",
    image: "/images/portfolio-powerdrive-antoninbouchal.jpg",
    url: "https://www.powerdrive.cz",
  },
  {
    name: "Tkeko.cz",
    subtitle: "Obnovitelné energie a dekarbonizace",
    desc: "Redesign firemního webu pro projekty v oblasti obnovitelných energií. Navržená struktura propojuje různá technologická odvětví a pomáhá srozumitelně prezentovat komplexní témata.",
    image: "/images/portfolio-tkeko-antoninbouchal.jpg",
    url: "https://www.tkeko.cz",
  },
  {
    name: "Profitasky.cz",
    subtitle: "E-shop s reklamními taškami",
    desc: "Komplexní webová aplikace propojující CMS, e-shop a vlastní konfigurační modul pro zakázkovou výrobu. Web slouží jako centrální obchodní nástroj společnosti – od prezentace nabídky až po evidenci a zpracování poptávek.",
    image: "/images/portfolio-profitasky-antoninbouchal.jpg",
    url: "https://www.profitasky.cz",
  },
  {
    name: "Formatovani-diplomove-prace.cz",
    subtitle: "Formátování závěrečných prací",
    desc: "One-page web navržený a vytvořený kompletně od nuly. Strategicky strukturovaný obsah s důrazem na konverze. Dlouhodobá správa webu včetně PPC kampaní a SEO.",
    image: "/images/portfolio-formatovani-antoninbouchal.jpg",
    url: "https://www.formatovani-diplomove-prace.cz",
  },
  {
    name: "Eva-kadernice.cz",
    subtitle: "Webová prezentace kadeřnictví",
    desc: "Jednoduchý web pro živnostnici. Základní informace, fotografie, ceník a rezervační formulář. Rychlé řešení, které dělá, co má a nestojí majlant.",
    image: "/images/portfolio-kadernice-antoninbouchal.jpg",
    url: "https://www.eva-kadernice.cz",
  },
];

export default function TvorbaWebu() {
  const ref = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".hero-animate");
    els?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      }, 60 + i * 85);
    });
  }, []);

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
    if (portfolioRef.current) observer.observe(portfolioRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @media (min-width: 397px) and (max-width: 767px) {
          .tvorba-portfolio-wrapper {
            max-width: 420px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .tvorba-portfolio-item {
            flex-direction: column !important;
            text-align: center;
            padding: 28px 24px !important;
            gap: 20px !important;
          }
          .tvorba-portfolio-text {
            order: 1;
          }
          .tvorba-portfolio-img {
            order: 2;
            width: 228px !important;
            height: 228px !important;
            margin: 0 auto !important;
          }
          .tvorba-portfolio-img a,
          .tvorba-portfolio-img > div {
            width: 228px !important;
            height: 228px !important;
          }
          .tvorba-portfolio-img img {
            width: 228px !important;
            height: 228px !important;
            object-fit: cover !important;
          }
        }
      `}</style>

      {/* ── HERO ── */}
      <section ref={ref} className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-[#f9fafb] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--orange)]" />

        {/* Decorative yellow blob */}
        <div
          className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full bg-[#FFD986] opacity-25 blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 relative z-10">
          <div>
            <span className="hero-animate inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--orange)] mb-5">
              Tvorba webových stránek
            </span>
            <h1
              className="hero-animate font-black text-[#000] leading-[40px] tracking-[-2px] mb-8"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              Weby, které <span className="text-[var(--orange)]">skutečně fungují</span>
            </h1>
            <p className="hero-animate text-[18px] font-light text-[var(--text)] leading-relaxed max-w-4xl mb-10">
              Baví mě tvořit weby, které nejen dobře vypadají, ale hlavně dávají smysl a plní svůj účel.<br className="hidden lg:block" />
              {" "}Bez zbytečných komplikací. Jednoduše a efektivně. Pro firmy i živnostníky.
            </p>
            <div className="hero-animate flex flex-wrap gap-4">
              <Link href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--orange)] text-white font-bold text-[15px] rounded-xl hover:bg-[var(--orange-dark)] transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5">
                Nezávazná konzultace
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* Divider pod hero */}
      <div className="bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">
          <div className="border-b-[3px] border-[#4A5149]" />
        </div>
      </div>

      {/* ── MOJE TVORBA ── */}
      <section ref={portfolioRef} className="pt-14 md:pt-20 pb-4 md:pb-8 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">
          <div className="reveal flex items-center gap-2 mb-10 md:mb-14">
            <span className="text-[11px] font-bold text-[var(--orange)] tracking-[0.2em] uppercase">01</span>
            <h2 className="text-[22px] font-bold uppercase tracking-[0.08em] text-[var(--text-dark)]">
              Moje tvorba
            </h2>
            <div className="w-10 h-[3px] bg-[var(--orange)] rounded-full ml-2" />
          </div>

          <div className="tvorba-portfolio-wrapper rounded-2xl overflow-hidden border border-[var(--border)]">
            {portfolio.map((p, i) => {
              const isEven = i % 2 === 0;
              const bgColor = i % 2 === 0 ? "bg-white" : "bg-[#f9fafb]";
              return (
                <div
                  key={p.name}
                  className={`reveal ${bgColor} ${i > 0 ? "border-t border-[var(--border)]" : ""}`}
                >
                  <div
                    className={`tvorba-portfolio-item flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12 lg:gap-16 p-8 md:p-12 lg:p-16`}
                  >
                    {/* Text */}
                    <div className="tvorba-portfolio-text flex-1 min-w-0">
                      {p.url ? (
                        <a href={p.url} target="_blank" rel="noopener noreferrer"
                          className="text-[20px] md:text-[22px] font-black text-[var(--text-dark)] leading-tight hover:text-[var(--orange)] transition-colors duration-200 inline-block">
                          {p.name}
                        </a>
                      ) : (
                        <h3 className="text-[20px] md:text-[22px] font-black text-[var(--text-dark)] leading-tight">
                          {p.name}
                        </h3>
                      )}
                      <p className="text-[14px] text-gray-400 font-medium mt-1 italic">
                        {p.subtitle}
                      </p>
                      <p className="text-[15px] md:text-[16px] font-light text-[var(--text)] leading-relaxed mt-4">
                        {p.desc}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="tvorba-portfolio-img w-full md:w-[200px] lg:w-[230px] shrink-0">
                      {p.url ? (
                        <a href={p.url} target="_blank" rel="noopener noreferrer"
                          className="block rounded-xl overflow-hidden shadow-sm border border-[var(--border)]">
                          <Image
                            src={p.image}
                            alt={p.name}
                            width={230}
                            height={153}
                            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </a>
                      ) : (
                        <div className="rounded-xl overflow-hidden shadow-sm border border-[var(--border)]">
                          <Image
                            src={p.image}
                            alt={p.name}
                            width={230}
                            height={153}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── REFERENCE ── */}
      <ReferencesWeb />

      {/* ── ZAČNEME? ── */}
      <SectionWrapper id="zacneme" label="Začneme?" labelNum="02" bg="gray" noDivider>
        <div className="reveal flex flex-col gap-7 max-w-xl justify-center" style={{ minHeight: "6rem" }}>
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--orange)] text-white font-semibold text-[15px] rounded-xl hover:bg-[var(--orange-dark)] transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Napište mi
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="tel:+420736729646"
              className="text-[15px] font-medium text-[var(--text)] hover:text-[var(--orange)] transition-colors duration-200"
            >
              nebo zavolejte →&nbsp;+420&nbsp;736&nbsp;729&nbsp;646
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
