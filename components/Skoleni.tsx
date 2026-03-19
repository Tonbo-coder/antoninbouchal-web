"use client";

import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { useRef, useEffect } from "react";

const courses = [
  {
    title: "Excel bez chaosu",
    desc: "Začnete používat Excel tak, aby vám pomáhal – ne zdržoval.",
    href: "/skoleni/excel-bez-chaosu",
    img: "/images/skoleni_MS_Excel_antonin_bouchal.webp",
    level: "Začátečník" as const,
  },
  {
    title: "Excel, který vám šetří hodiny týdně",
    desc: "Funkce, automatizace a postupy, které reálně zrychlují práci.",
    href: "/skoleni/excel-hodiny",
    img: "/images/skoleni_MS_Excel_antonin_bouchal.webp",
    level: "Pokročilý" as const,
  },
  {
    title: "Word bez nervů",
    desc: "Dokumenty, které se nerozsypou při každé úpravě.",
    href: "/skoleni/word-bez-nervu",
    img: "/images/skoleni_MS_Word_antonin_bouchal.webp",
    level: "Začátečník" as const,
  },
  {
    title: "DOCXmaster: Word na úrovni, kterou jinde neučí",
    desc: "Formátování, struktura a automatizace dokumentů. Pro pokročilé.",
    href: "/skoleni/docxmaster",
    img: "/images/skoleni_MS_Word_antonin_bouchal.webp",
    level: "Pokročilý" as const,
  },
  {
    title: "AI, která vám ušetří hodiny práce",
    desc: "Automatizace, psaní a práce s daty bez složitostí.",
    href: "/skoleni/ai-prace",
    img: "/images/skoleni_AI_antonin_bouchal.webp",
    level: "Začátečník" as const,
  },
  {
    title: "Tvoříme weby pomocí AI (vibe coding)",
    desc: "Ukážu vám, jak dnes vznikají weby rychleji než kdy dřív.",
    href: "/skoleni/vibe-coding",
    img: "/images/skoleni_AI_antonin_bouchal.webp",
    level: "Obojí" as const,
  },
];

const problems = [
  "Excel vám žere hodiny práce",
  "Word dělá z dokumentů chaos",
  "AI nevyužíváte naplno",
  "Každý v týmu pracuje jinak",
  "Web máte, ale nefunguje",
];

const howItems = [
  { label: "Školení na míru", sub: "firma / tým" },
  { label: "Individuální konzultace", sub: "1:1" },
  { label: "Online i osobně", sub: "dle dohody" },
];

export default function Skoleni() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".hero-animate");
    els?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      }, 60 + i * 85);
    });
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section ref={ref} className="relative pt-32 pb-0 md:pt-44 bg-[#f9fafb] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--orange)]" />
        <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full bg-[#FFD986] opacity-25 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 relative z-10">
          <div className="relative pb-20 md:pb-28">
            <span className="hero-animate inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--orange)] mb-5">
              Školení a konzultace
            </span>
            <h1
              className="hero-animate font-black text-[#000] leading-[1.1] tracking-[-2px] mb-5"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              Naučím vás pracovat <span className="text-[var(--orange)]">rychleji</span>
            </h1>
            <p className="hero-animate text-[19px] font-semibold text-[var(--text-dark)] mb-3">
              Bez teorie. Jen věci, které používám každý den v praxi – Excel, Word a AI.
            </p>
            <p className="hero-animate text-[16px] font-light text-[var(--text)] mb-10">
              Firemní školení i individuální konzultace. Online i osobně.
            </p>
            <div className="hero-animate flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <Link href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--orange)] text-white font-bold text-[15px] rounded-xl hover:bg-[var(--orange-dark)] transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5 self-start">
                Domluvit školení
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-green-50 border border-green-100 rounded-xl self-start">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <span className="text-[13px] text-green-700 font-medium">Odpovídám do 24 hodin</span>
              </div>
            </div>

            {/* Photo anchored to bottom-right, sitting on divider */}
            <div className="absolute bottom-0 right-0 pointer-events-none select-none">
              <Image
                src="/images/antonin-bouchal.webp"
                alt="Antonín Bouchal"
                width={220}
                height={233}
                className="object-contain object-bottom"
                style={{ height: "clamp(160px, 22vw, 260px)", width: "auto" }}
              />
            </div>
          </div>
        </div>

        {/* Divider – inside section so photo sits on it */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">
          <div className="border-b-[3px] border-[#4A5149]" />
        </div>
      </section>

      {/* ── KURZY ── */}
      <SectionWrapper id="kurzy" label="Kurzy" labelNum="01" bg="gray">
        <div className="reveal grid sm:grid-cols-2 gap-5">
          {courses.map((c) => (
            <div key={c.title} className="relative pt-3">
              {/* Level tag on the border line */}
              {c.level === "Obojí" ? (
                <span className="absolute top-0 left-6 flex overflow-hidden rounded-md z-10 text-[11px] font-bold uppercase tracking-[0.16em] whitespace-nowrap text-[#1a1a1a]">
                  <span className="px-2.5 py-0.5" style={{ background: "#ffd986" }}>Začátečník</span>
                  <span className="px-2.5 py-0.5" style={{ background: "#f8b074" }}>Pokročilý</span>
                </span>
              ) : (
                <span
                  className="absolute top-0 left-6 px-3 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-[0.16em] whitespace-nowrap text-[#1a1a1a] z-10"
                  style={{ background: c.level === "Začátečník" ? "#ffd986" : "#f8b074" }}
                >
                  {c.level}
                </span>
              )}
              <div className="group relative flex flex-col gap-4 p-7 border border-[var(--border)] rounded-2xl hover:border-[var(--orange)]/40 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 hover:-translate-y-0.5 bg-white overflow-hidden h-full">
                {/* Background illustration */}
                <div className="absolute bottom-0 right-0 w-[120px] h-[120px] pointer-events-none select-none">
                  <Image
                    src={c.img}
                    alt=""
                    fill
                    className="object-contain object-bottom-right opacity-[0.12] group-hover:opacity-[0.18] transition-opacity duration-300"
                    sizes="120px"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-[18px] font-black leading-tight mb-2">
                    <Link href={c.href} className="text-[var(--text-dark)] hover:text-[var(--orange)] transition-colors duration-200">{c.title}</Link>
                  </h3>
                  <p className="text-[15px] font-light text-[var(--text)] leading-relaxed">{c.desc}</p>
                </div>
                <Link href={c.href}
                  className="relative z-10 mt-auto self-start text-[13px] font-semibold text-[var(--orange)] hover:underline transition-all duration-200">
                  Chci školení →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── S ČÍM VÁM POMŮŽU ── */}
      <SectionWrapper id="problemy" label="S čím vám pomůžu" labelNum="02" bg="white">
        <div className="reveal flex flex-col gap-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {problems.map((p) => (
              <div key={p}
                className="flex items-center gap-3 px-5 py-4 bg-[#f9fafb] border border-[var(--border)] rounded-xl">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] flex-shrink-0" />
                <span className="text-[15px] font-medium text-[var(--text-dark)]">{p}</span>
              </div>
            ))}
          </div>
          <p className="text-[16px] font-light text-[var(--text)] leading-relaxed pt-2">
            Ukážu vám, jak to dělat rychleji, jednodušeji a bez zbytečných kliků.
          </p>
        </div>
      </SectionWrapper>

      {/* ── JAK VÁS BUDU ŠKOLIT ── */}
      <SectionWrapper id="jak" label="Jak vás budu školit" labelNum="03" bg="gray" noDivider>
        <div className="reveal grid sm:grid-cols-3 gap-5">
          {howItems.map((h) => (
            <div key={h.label}
              className="flex flex-col gap-1 p-6 bg-white border border-[var(--border)] rounded-2xl">
              <div className="w-6 h-[2px] bg-[var(--orange)] rounded-full mb-2" />
              <p className="font-bold text-[15px] text-[var(--text-dark)]">{h.label}</p>
              <p className="text-[13px] text-gray-400 font-medium">{h.sub}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── ZAČNEME? ── */}
      <SectionWrapper id="zacneme" label="Začneme?" labelNum="04" bg="gray" noDivider>
        <div className="reveal flex flex-col gap-7 max-w-xl justify-center" style={{ minHeight: "6rem" }}>
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--orange)] text-white font-semibold text-[15px] rounded-xl hover:bg-[var(--orange-dark)] transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0">
              Napište mi
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a href="tel:+420736729646"
              className="text-[15px] font-medium text-[var(--text)] hover:text-[var(--orange)] transition-colors duration-200">
              nebo zavolejte →&nbsp;+420&nbsp;736&nbsp;729&nbsp;646
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
