"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import SectionWrapper from "./SectionWrapper";

const CARD_COLORS = ["#f7b174", "#ffd986"];

const refs = [
  {
    text: "Web jsme měli zastaralý a pomalu načítaný. Po redesignu se čas načítání zkrátil na polovinu a poptávky vzrostly o třetinu.",
    name: "Martin Chalupa",
    role: "Jednatel, stavební firma",
    project: "Redesign webu",
    init: "MC",
  },
  {
    text: "Antonín navrhl strukturu webu tak, aby zákazníci rychle našli, co hledají. Míra okamžitého opuštění klesla výrazně.",
    name: "Jana Procházková",
    role: "Majitelka e-shopu",
    project: "UX a struktura",
    init: "JP",
  },
  {
    text: "SEO jsem řešil sám roky bez výsledku. Po konzultaci a úpravách jsme za dva měsíce vyskočili na první stránku Google.",
    name: "Tomáš Beneš",
    role: "OSVČ, realitní makléř",
    project: "SEO optimalizace",
    init: "TB",
  },
  {
    text: "Google Ads jsme spouštěli bez strategie a peníze lítaly zbytečně. Antonín kampaně přenastavil a cena za lead se snížila o 40 %.",
    name: "Radek Horáček",
    role: "Majitel autoservisu",
    project: "Nastavení Google Ads",
    init: "RH",
  },
  {
    text: "Potřeboval jsem napojit rezervační systém na web. Řešení bylo hotové do týdne, funguje spolehlivě a bez problémů.",
    name: "Lukáš Novotný",
    role: "Provozovatel wellness",
    project: "Technické řešení",
    init: "LN",
  },
  {
    text: "Měla jsem web na Joomle, který nikdo neuměl upravit. Nový web na míru zvládám sama a konečně vypadám jako firma, za kterou se nestydím.",
    name: "Petra Marková",
    role: "Účetní poradkyně",
    project: "Tvorba webu na míru",
    init: "PM",
  },
  {
    text: "S vibe codingem jsem si nevěděl rady. Antonín mi pomohl celý projekt rozjet a naučil mě, jak v něm samostatně pokračovat.",
    name: "Ondřej Fiala",
    role: "Startup zakladatel",
    project: "AI / Vibe coding",
    init: "OF",
  },
  {
    text: "Web byl nepřehledný a zákazníci nevěděli, co si mají objednat. Po úpravě struktury se počet poptávek za první měsíc zdvojnásobil.",
    name: "Kateřina Hájková",
    role: "Provozovatelka kavárny",
    project: "Struktura webu",
    init: "KH",
  },
  {
    text: "Hodinu konzultace nad mým webem mi dala víc než roky tápání. Dostal jsem konkrétní body, co opravit, a výsledky přišly rychle.",
    name: "Jiří Sedláček",
    role: "Freelance fotograf",
    project: "Konzultace a strategie",
    init: "JS",
  },
  {
    text: "Redesign e-shopu zvýšil konverzní poměr z 0,8 % na 2,3 %. Stejný provoz, výrazně více objednávek. Výsledek mluví za vše.",
    name: "Monika Veselá",
    role: "Majitelka e-shopu s módou",
    project: "Redesign e-shopu",
    init: "MV",
  },
];

export default function ReferencesWeb() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 220);
  }, []);

  const startAuto = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((p) => {
        const next = (p + 1) % refs.length;
        setFading(true);
        setTimeout(() => { setActive(next); setFading(false); }, 220);
        return p;
      });
    }, 5500);
  }, []);

  useEffect(() => {
    startAuto();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startAuto]);

  const pick = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    goTo(i);
    startAuto();
  };

  const r = refs[active];

  return (
    <SectionWrapper id="reference" label="Pár referencí" labelNum="02" bg="white" noDivider>
      <div className="reveal">

        {/* Quote block */}
        <div
          className="relative mb-8 transition-all duration-220"
          style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(6px)" : "none" }}
        >
          <span
            className="absolute -top-4 -left-3 font-black select-none leading-none text-[var(--orange)]"
            style={{ fontSize: "6rem", opacity: 0.1 }}
          >
            &ldquo;
          </span>
          <blockquote className="text-[18px] font-normal leading-[1.85] text-[var(--text)] pt-6 max-w-2xl relative z-10">
            &ldquo;{r.text}&rdquo;
          </blockquote>
        </div>

        {/* Author */}
        <div
          className="flex items-center gap-4 mb-8 transition-all duration-220"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-[#1a1a1a] text-sm font-bold flex-shrink-0 shadow-sm"
            style={{ background: CARD_COLORS[active % 2] }}
          >
            {r.init}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-[15px] text-[var(--text-dark)]">{r.name}</p>
            <p className="text-[13px] text-gray-400">{r.role}</p>
          </div>
          <span className="text-[11px] px-3 py-1.5 border border-[var(--border)] rounded-lg text-gray-400 font-medium hidden sm:inline-block">
            {r.project}
          </span>
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-2 mb-8">
          {refs.map((_, i) => (
            <button
              key={i}
              onClick={() => pick(i)}
              className={`h-[3px] rounded-full transition-all duration-400 ${
                i === active ? "w-10 bg-[var(--orange)]" : "w-3 bg-[var(--border)] hover:bg-gray-300"
              }`}
              aria-label={`Reference ${i + 1}`}
            />
          ))}
        </div>

        {/* All authors mini row */}
        <div className="pt-5 border-t border-[var(--border)] flex items-center gap-1 flex-wrap">
          {refs.map((ref, i) => (
            <button
              key={ref.name}
              onClick={() => pick(i)}
              title={ref.name}
              className={`w-9 h-9 rounded-xl flex items-center justify-center text-[#1a1a1a] text-xs font-bold transition-all duration-200 ${
                i === active ? "scale-110 shadow-md ring-2 ring-white ring-offset-1" : "opacity-50 hover:opacity-80"
              }`}
              style={{ background: CARD_COLORS[i % 2] }}
            >
              {ref.init}
            </button>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
