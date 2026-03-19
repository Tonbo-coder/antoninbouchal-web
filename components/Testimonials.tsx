"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Martina Horáková",
    role: "Absolventka VŠE Praha",
    avatar: "/images/antonin-bouchal_ico.jpg",
    initials: "MH",
    color: "bg-blue-500",
    text: "Díky Antonínovi jsem zvládla formátování diplomové práce bez stresu. Vše bylo hotové přesně podle požadavků školy a v rekordním čase. Naprosto doporučuji!",
    stars: 5,
    project: "Profiformátování.cz",
  },
  {
    name: "Tomáš Veselý",
    role: "Majitel e-shopu",
    initials: "TV",
    color: "bg-purple-500",
    text: "Antonín nám vytvořil web, který skutečně prodává. Profesionální přístup, skvělý design a hlavně výsledky. Spolupráce byla radost od začátku do konce.",
    stars: 5,
    project: "Tvorba webů",
  },
  {
    name: "Lucie Procházková",
    role: "HR manažerka, TechCorp s.r.o.",
    initials: "LP",
    color: "bg-pink-500",
    text: "Školení od Antonína bylo přesně to, co naši zaměstnanci potřebovali. Praktické, srozumitelné a ihned použitelné. Určitě se vrátíme pro další kurzy.",
    stars: 5,
    project: "Školení a kurzy",
  },
  {
    name: "Jan Novák",
    role: "Jednatel, Promo Agency",
    initials: "JN",
    color: "bg-green-500",
    text: "Reklamní tašky od Profitašky.cz předčily naše očekávání. Kvalita tisku, rychlost dodání a skvělá komunikace. Naši klienti jsou nadšení.",
    stars: 5,
    project: "Profitašky.cz",
  },
  {
    name: "Petra Šimánková",
    role: "Doktorandka, ČVUT",
    initials: "PŠ",
    color: "bg-orange-500",
    text: "Korektura bakalářské práce proběhla naprosto profesionálně. Antonín zachytil chyby, které mi unikly, a práce vyšla na výbornou. Mockrát děkuji!",
    stars: 5,
    project: "Korektura BP.cz",
  },
  {
    name: "Karel Dvořák",
    role: "Freelance grafik",
    initials: "KD",
    color: "bg-teal-500",
    text: "Spolupráce na redesignu webu byla ukázková. Antonín rozuměl přesně tomu, co chci, a výsledek byl lepší, než jsem si představoval. Top práce!",
    stars: 5,
    project: "Tvorba webů",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".t-reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("t-in"), i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleDotClick = (i: number) => {
    setActiveIndex(i);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="reference"
      ref={sectionRef}
      className="section-padding bg-[#111827] overflow-hidden"
    >
      <style>{`
        .t-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .t-reveal.t-in {
          opacity: 1;
          transform: none;
        }
      `}</style>

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="t-reveal flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#E8420E]" />
            <span className="text-[#E8420E] text-sm font-semibold uppercase tracking-widest">
              Reference
            </span>
            <div className="w-8 h-0.5 bg-[#E8420E]" />
          </div>
          <h2 className="t-reveal text-4xl sm:text-5xl font-black text-white leading-tight">
            Co říkají klienti
          </h2>
          <p className="t-reveal text-white/50 text-lg mt-4 max-w-xl mx-auto">
            Výsledky mluví za vše. Spokojení klienti jsou mou největší motivací.
          </p>
        </div>

        {/* Main testimonial (large) */}
        <div className="t-reveal max-w-3xl mx-auto mb-10">
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            {/* Large quote mark */}
            <div className="absolute -top-4 left-8 text-[#E8420E] text-8xl font-black leading-none opacity-40 select-none">
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array(testimonials[activeIndex].stars)
                .fill(null)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#E8420E]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
            </div>

            {/* Text */}
            <blockquote className="text-white text-xl md:text-2xl font-light leading-relaxed mb-8 italic">
              &ldquo;{testimonials[activeIndex].text}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full ${testimonials[activeIndex].color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
              >
                {testimonials[activeIndex].initials}
              </div>
              <div>
                <div className="text-white font-semibold">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-white/50 text-sm">
                  {testimonials[activeIndex].role}
                </div>
              </div>
              <div className="ml-auto">
                <span className="px-3 py-1 bg-[#E8420E]/10 border border-[#E8420E]/20 text-[#E8420E] text-xs rounded-full font-medium">
                  {testimonials[activeIndex].project}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="t-reveal flex justify-center gap-2 mb-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? "w-8 h-2 bg-[#E8420E]"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Small cards grid */}
        <div className="t-reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => handleDotClick(i)}
              className={`p-3 rounded-xl text-left transition-all duration-300 border ${
                i === activeIndex
                  ? "bg-[#E8420E]/10 border-[#E8420E]/30"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-xs mb-2`}
              >
                {t.initials}
              </div>
              <div className="text-white text-xs font-semibold truncate">
                {t.name}
              </div>
              <div className="text-white/40 text-xs truncate">{t.role}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
