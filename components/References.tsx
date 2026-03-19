"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import SectionWrapper from "./SectionWrapper";

const CARD_COLORS = ["#f7b174", "#ffd986"];

const refs = [
  {
    text: "Díky Profiformátování jsem zvládla odevzdat diplomovou práci bez stresu. Vše bylo hotové přesně podle požadavků školy a v rekordním čase. Naprosto doporučuji každému studentovi!",
    name: "Martina Horáková",
    role: "Absolventka VŠE Praha",
    project: "Profiformátování.cz",
    init: "MH",
  },
  {
    text: "Pan Bouchal nám vytvořil web, který skutečně prodává. Profesionální přístup, skvělý design a hlavně výsledky – spolupráce na webu byla radost od začátku do konce.",
    name: "Tomáš Veselý",
    role: "Majitel e-shopu",
    project: "Tvorba webů",
    init: "TV",
  },
  {
    text: "Školení bylo přesně to, co naši zaměstnanci potřebovali. Praktické, srozumitelné a ihned použitelné v práci. Určitě se vrátíme pro další kurzy.",
    name: "Lucie Procházková",
    role: "HR manažerka",
    project: "Školení",
    init: "LP",
  },
  {
    text: "Reklamní tašky od Profitašky.cz předčily naše očekávání. Kvalita tisku, rychlost dodání a skvělá komunikace. Naši klienti byli nadšení – příští sezónu opět u vás.",
    name: "Jan Novák",
    role: "Jednatel",
    project: "Profitašky.cz",
    init: "JN",
  },
  {
    text: "Korektura bakalářské práce proběhla naprosto profesionálně. Zachytili chyby, které mi unikly, a práce vyšla na výbornou. Rychlé, spolehlivé a za skvělou cenu.",
    name: "Petra Šimánková",
    role: "Studentka, ČVUT Praha",
    project: "Korektura BP.cz",
    init: "PŠ",
  },
  {
    text: "S Antonínem jsem spolupracoval na redesignu webu mého klienta. Rozuměl přesně tomu, co chci, výsledek byl lepší, než jsem si představoval. Skvělá práce, top komunikace.",
    name: "Karel Dvořák",
    role: "Freelance designér",
    project: "Tvorba webů",
    init: "KD",
  },
  {
    text: "Formátování diplomové práce bylo hotové za jeden den. Výsledek byl perfektní, komise neměla jedinou výtku ke grafické úpravě. Skvělá služba, doporučuji všem studentům.",
    name: "Jakub Malý",
    role: "Student, MU Brno",
    project: "Profiformátování.cz",
    init: "JM",
  },
  {
    text: "Tvorba webu proběhla rychle a profesionálně. Antonín přesně pochopil, co potřebuji, a výsledek předčil moje očekávání. Web funguje skvěle a zákazníci jej chválí.",
    name: "Eva Horáčková",
    role: "Majitelka kavárny",
    project: "Tvorba webů",
    init: "EH",
  },
  {
    text: "Vazba závěrečné práce dopadla perfektně. Pevná vazba, krásné zpracování, doručení druhý den. Přesně takový servis student před odevzdáním potřebuje.",
    name: "Ondřej Kříž",
    role: "Absolvent ČVUT",
    project: "Vazbičov.cz",
    init: "OK",
  },
  {
    text: "Reklamní tašky jsme objednali na firemní akci. Tisk byl precizní, materiál kvalitní a termín dodání byl splněn bez problémů. Příště opět u Profitašky.",
    name: "Michaela Srbová",
    role: "Marketing manažerka",
    project: "Profitašky.cz",
    init: "MS",
  },
];

export default function References() {
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
    <SectionWrapper id="reference" label="Pár referencí" labelNum="03" bg="white" noDivider>
      <div className="reveal">

        {/* Quote block – min-height stabilises layout across short/long quotes */}
        <div
          className="relative mb-8 transition-all duration-220 min-h-[9rem]"
          style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(6px)" : "none" }}
        >
          <span
            className="absolute -top-4 -left-3 font-black select-none leading-none text-[var(--orange)]"
            style={{ fontSize: "6rem", opacity: 0.1 }}
          >
            &ldquo;
          </span>
          <blockquote className="text-[18px] font-normal leading-[1.85] text-[var(--text)] pt-6 max-w-2xl relative z-10 line-clamp-3">
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
