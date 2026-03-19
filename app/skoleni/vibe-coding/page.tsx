import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetail from "@/components/CourseDetail";

export const metadata: Metadata = {
  title: "Tvoříme weby pomocí AI (vibe coding) | Školení – Antonín Bouchal",
  description: "Ukážu vám, jak dnes vznikají weby rychleji než kdy dřív. Praktický kurz vibe codingu s AI.",
};

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <CourseDetail
          name="Tvoříme weby pomocí AI (vibe coding)"
          benefitSentence="Ukážu vám, jak dnes vznikají weby rychleji než kdy dřív."
          subtext="Kurz pro každého, kdo chce pochopit, jak AI mění tvorbu webů – a chce to sám vyzkoušet. Bez nutnosti znát programování."
          targetAudience={[
            { label: "Podnikatelé", sub: "kteří chtějí vlastní web bez agentury" },
            { label: "Marketéři", sub: "kteří chtějí rozumět webovému vývoji" },
            { label: "Začínající vývojáři", sub: "kteří chtějí zrychlit workflow" },
            { label: "Každý zvídavý", sub: "kdo chce vědět, jak to funguje" },
          ]}
          learnItems={[
            "Co je vibe coding a proč mění pravidla tvorby webů",
            "Jak popsat AI, co chcete – a dostat použitelný výsledek",
            "Výběr nástrojů: co použít pro různé typy projektů",
            "Vytvoření funkční stránky od nuly v průběhu kurzu",
            "Jak opravovat chyby a iterovat s pomocí AI",
            "Nasazení webu online – od kódu k živé stránce",
            "Jak kurz propojit s reálným projektem nebo podnikáním",
          ]}
          whyText="Vibe coding jsem začal používat při práci na vlastních projektech – a výsledky mě překvapily. Weby, které by dřív trvaly týdny, vznikají za dny. Tento kurz je přímý přenos mé zkušenosti: co funguje, co ne, a jak začít hned po kurzu na svém vlastním projektu."
        />
      </main>
      <Footer />
    </>
  );
}
