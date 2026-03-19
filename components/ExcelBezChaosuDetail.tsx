"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const learnItems = [
  "Jak se orientovat v Excelu bez ztráty času hledáním",
  "Vzorce, které reálně používám každý den",
  "Jak třídit, filtrovat a přehledně zobrazit data",
  "Jednoduché grafy a přehledy, které ostatní pochopí",
  "Jak předejít chybám ve vzorcích a výpočtech",
  "Klávesové zkratky, které šetří minuty každý den",
];

const targetAudience = [
  { label: "Jednotlivci", sub: "kteří chtějí pracovat rychleji" },
  { label: "Týmy", sub: "s různou úrovní znalostí" },
  { label: "Začátečníci", sub: "bez předchozí zkušenosti s Excelem" },
  { label: "Firmy", sub: "kde Excel brzdí každodenní práci" },
];

const formOptions = ["Online", "Osobně", "Dle dohody"];

export default function ExcelBezChaosuDetail() {
  const [sent, setSent] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = heroRef.current?.querySelectorAll(".hero-animate");
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
    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    participants: "",
    format: "Dle dohody",
    date: "",
    message: "",
  });

  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((s) => ({ ...s, [k]: e.target.value }));

  const inputCls =
    "w-full px-5 py-3.5 bg-white border border-[var(--border)] rounded-xl text-[15px] text-[var(--text-dark)] placeholder-gray-300 focus:outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/10 transition-all duration-200";

  return (
    <>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-0 md:pt-44 bg-[#f9fafb] overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--orange)]" />
        <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full bg-[#FFD986] opacity-25 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 relative z-10">
          <div className="relative pb-20 md:pb-28">
            <Link
              href="/skoleni"
              className="hero-animate inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--orange)] mb-5 hover:opacity-70 transition-opacity"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Školení a konzultace
            </Link>

            <h1
              className="hero-animate font-black text-[#000] leading-[1.1] tracking-[-2px] mb-5"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              Excel bez chaosu
            </h1>
            <p className="hero-animate text-[19px] font-semibold text-[var(--text-dark)] mb-3">
              Začnete používat Excel tak, aby vám pomáhal – ne zdržoval.
            </p>
            <p className="hero-animate text-[16px] font-light text-[var(--text)] mb-10 max-w-xl">
              Praktické školení pro lidi, kteří Excel používají každý den, ale
              pořád ztrácejí čas na věcech, které by šly dělat rychleji.
            </p>

            <div className="hero-animate flex flex-wrap items-center gap-4">
              <a
                href="#objednavka"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--orange)] text-white font-bold text-[15px] rounded-xl hover:bg-[var(--orange-dark)] transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5"
              >
                Mám zájem o kurz
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-green-50 border border-green-100 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <span className="text-[13px] text-green-700 font-medium">
                  Odpovídám do 24 hodin
                </span>
              </div>
            </div>

            {/* Excel icon – sitting on the divider */}
            <div className="absolute bottom-0 right-0 hidden sm:block pointer-events-none select-none">
              <Image
                src="/images/skoleni_MS_Excel_antonin_bouchal.webp"
                alt=""
                width={220}
                height={220}
                className="object-contain object-bottom"
                style={{ height: "clamp(140px, 18vw, 220px)", width: "auto" }}
              />
            </div>
          </div>
        </div>

        {/* Divider inside section so photo sits precisely on it */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">
          <div className="border-b-[3px] border-[#4A5149]" />
        </div>
      </section>

      {/* ── PROČ PRÁVĚ TENTO KURZ ── */}
      <SectionWrapper id="proc" label="Proč právě tento kurz" labelNum="01" bg="gray">
        <div className="reveal max-w-2xl">
          <p className="text-[17px] leading-[1.85] text-[var(--text)] font-light">
            Excel je nástroj, který skoro každý zná – ale většina ho používá jen
            na zlomek jeho možností. Toto školení není o memorování funkcí. Je o
            tom, abyste po kurzu otevřeli Excel a věděli přesně, co děláte a
            proč. Bez tápání, bez chaosu.
          </p>
        </div>
      </SectionWrapper>

      {/* ── CO SE NAUČÍTE ── */}
      <section id="co-se-naucite" className="pt-14 md:pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] gap-8 md:gap-10 lg:gap-20">

            {/* Left: label + tilted Excel icon */}
            <div className="reveal-left flex md:flex-col md:items-start items-center gap-2 md:pt-1">
              <span className="text-[11px] font-bold text-[var(--orange)] tracking-[0.2em] uppercase">02</span>
              <h2 className="text-[22px] font-bold uppercase tracking-[0.08em] text-[var(--text-dark)]">
                Co se naučíte
              </h2>
              <div className="hidden md:block mt-3 w-10 h-[3px] bg-[var(--orange)] rounded-full" />
              <div className="hidden md:block mt-6 rotate-[-8deg]">
                <Image
                  src="/images/skoleni_MS_Excel_antonin_bouchal.webp"
                  alt="Excel"
                  width={100}
                  height={100}
                  className="object-contain opacity-80"
                />
              </div>
            </div>

            {/* Right: content */}
            <div className="border-b border-[#bdbdbd] pb-14 md:pb-16">
              <div className="reveal grid sm:grid-cols-2 gap-3">
                {learnItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-5 bg-[#f9fafb] border border-[var(--border)] rounded-xl"
                  >
                    <span className="text-[var(--orange)] font-black text-[13px] mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[15px] font-medium text-[var(--text-dark)] leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PRO KOHO TO JE ── */}
      <SectionWrapper id="pro-koho" label="Pro koho to je" labelNum="03" bg="gray">
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {targetAudience.map((t) => (
            <div
              key={t.label}
              className="flex flex-col gap-1 p-6 bg-white border border-[var(--border)] rounded-2xl"
            >
              <div className="w-6 h-[2px] bg-[var(--orange)] rounded-full mb-2" />
              <p className="font-bold text-[15px] text-[var(--text-dark)]">
                {t.label}
              </p>
              <p className="text-[13px] text-gray-400 font-medium">{t.sub}</p>
            </div>
          ))}
        </div>
        <p className="reveal mt-6 text-[15px] font-light text-[var(--text)] leading-relaxed">
          Termín, cena i délka školení se vždy domlouvají individuálně – přizpůsobíme vše přesně vašim potřebám.
        </p>
      </SectionWrapper>

      {/* ── OBJEDNÁVKOVÝ FORMULÁŘ ── */}
      <section ref={formRef} id="objednavka" className="py-20 md:py-28 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] gap-8 md:gap-10 lg:gap-20">
            <div className="reveal-left flex md:flex-col md:items-start items-center gap-2 md:pt-1">
              <span className="text-[11px] font-bold text-[var(--orange)] tracking-[0.2em] uppercase">
                04
              </span>
              <h2 className="text-[22px] font-bold uppercase tracking-[0.08em] text-[var(--text-dark)]">
                Mám zájem
              </h2>
              <div className="hidden md:block mt-3 w-10 h-[3px] bg-[var(--orange)] rounded-full" />
            </div>

            <div className="reveal max-w-2xl">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                    <svg
                      className="w-9 h-9 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-[var(--text-dark)] mb-3">
                    Zpráva odeslána!
                  </h3>
                  <p className="text-[var(--text)] font-light mb-8 max-w-xs">
                    Ozvu se vám co nejdříve, nejpozději do 24 hodin.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-7 py-3 bg-[var(--orange)] text-white rounded-xl text-sm font-semibold hover:bg-[var(--orange-dark)] transition-colors"
                  >
                    Odeslat znovu
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="flex flex-col gap-5"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-orange-50 border border-orange-100 rounded-xl self-start">
                    <span className="text-[13px] text-[var(--orange)] font-semibold">
                      Mám zájem o kurz: Excel bez chaosu
                    </span>
                  </div>

                  <input type="hidden" name="course" value="Excel bez chaosu" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">
                        Jméno a příjmení *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Jan Novák"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={set("email")}
                        placeholder="jan@example.cz"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder="+420 123 456 789"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      {/* Label adjusted to be inclusive for both companies and individuals */}
                      <label className="block text-[12px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">
                        Firma / organizace
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={set("company")}
                        placeholder="Název firmy (nepovinné)"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">
                        Počet účastníků
                      </label>
                      <input
                        type="text"
                        value={form.participants}
                        onChange={set("participants")}
                        placeholder="1–10"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">
                        Forma školení
                      </label>
                      <select
                        value={form.format}
                        onChange={set("format")}
                        className={inputCls}
                      >
                        {formOptions.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">
                      Preferovaný termín
                    </label>
                    <input
                      type="text"
                      value={form.date}
                      onChange={set("date")}
                      placeholder="např. únor 2026, nebo dle dohody"
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">
                      Zpráva
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Cokoliv, co mi pomůže kurz připravit na míru vám..."
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-[var(--orange)] text-white font-bold text-[15px] rounded-xl hover:bg-[var(--orange-dark)] transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Odeslat poptávku
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                      />
                    </svg>
                  </button>

                  <p className="text-[12px] text-gray-300 text-center">
                    Odesláním souhlasíte se zpracováním osobních údajů.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
