"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Moderní design",
    desc: "Weby navržené s citem pro detail, UI/UX a aktuální trendy.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3.75h3m-3 3.75h3" />
      </svg>
    ),
    title: "Plně responzivní",
    desc: "Perfektní zobrazení na všech zařízeních — mobil, tablet, desktop.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Rychlost & výkon",
    desc: "Optimalizováno pro rychlé načítání a vysoké skóre ve Webcore.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0z" />
      </svg>
    ),
    title: "SEO optimalizace",
    desc: "Weby viditelné ve vyhledávačích. Váš zákazník vás najde.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Zabezpečení",
    desc: "SSL, ochrana dat a dodržení GDPR standardem.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "Podpora & údržba",
    desc: "Jsem tu i po spuštění. Aktualizace, opravy a rozvoj.",
  },
];

const process = [
  { step: "01", title: "Konzultace", desc: "Probere me vaše potřeby, cíle a vizi." },
  { step: "02", title: "Návrh", desc: "Wireframy a design v souladu s vaší značkou." },
  { step: "03", title: "Vývoj", desc: "Kódování na moderní technologií Next.js/React." },
  { step: "04", title: "Spuštění", desc: "Testování, optimalizace a nasazení na server." },
];

export default function WebCreation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".wc-reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("wc-in"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tvorba-webu"
      ref={sectionRef}
      className="section-padding bg-white overflow-hidden"
    >
      <style>{`
        .wc-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .wc-reveal.wc-in {
          opacity: 1;
          transform: none;
        }
      `}</style>

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="wc-reveal flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#E8420E]" />
            <span className="text-[#E8420E] text-sm font-semibold uppercase tracking-widest">
              Tvorba webů
            </span>
            <div className="w-8 h-0.5 bg-[#E8420E]" />
          </div>
          <h2 className="wc-reveal text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            Weby, které přinášejí{" "}
            <span className="text-gradient">výsledky</span>
          </h2>
          <p className="wc-reveal text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Navrhuji a vyvíjím webové stránky, které nejen dobře vypadají, ale
            hlavně fungují. Každý web je unikátní — přesně jako váš byznys.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="wc-reveal p-6 rounded-2xl border border-gray-100 hover:border-[#E8420E]/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 bg-[#E8420E]/10 rounded-xl flex items-center justify-center text-[#E8420E] mb-4 group-hover:bg-[#E8420E] group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="wc-reveal text-2xl font-black text-gray-900 text-center mb-10">
            Jak spolupráce probíhá
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div
                key={p.step}
                className="wc-reveal text-center relative"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px bg-gray-200" />
                )}
                <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-xl font-black text-[#E8420E]">
                    {p.step}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{p.title}</h4>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="wc-reveal text-center mt-12">
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8420E] text-white font-semibold rounded-full hover:bg-[#c7370d] transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/30 hover:-translate-y-1"
          >
            Nezávazná konzultace zdarma
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
