import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetail from "@/components/CourseDetail";

export const metadata: Metadata = {
  title: "Excel, který vám šetří hodiny týdně | Školení – Antonín Bouchal",
  description: "Funkce, automatizace a postupy, které reálně zrychlují práci v Excelu. Pro pokročilejší uživatele.",
};

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <CourseDetail
          name="Excel, který vám šetří hodiny týdně"
          benefitSentence="Funkce, automatizace a postupy, které reálně zrychlují práci."
          subtext="Pro ty, kdo Excel znají, ale tuší, že by to šlo dělat rychleji. Zaměřujeme se na věci, které skutečně ušetří čas – ne na teorii."
          targetAudience={[
            { label: "Pokročilejší uživatelé", sub: "kteří chtějí víc z Excelu" },
            { label: "Analytici a accountanti", sub: "pracující s daty každý den" },
            { label: "Manažeři", sub: "kteří potřebují rychlé přehledy" },
            { label: "Týmy", sub: "kde se pracuje s opakujícími se reporty" },
          ]}
          learnItems={[
            "SVYHLEDAT, INDEX+POZVYHLEDAT a kdy co použít",
            "Kontingenční tabulky – rychlý přehled z velkých dat",
            "Podmíněné formátování pro okamžitý přehled",
            "Makra – jak zautomatizovat opakující se úkoly",
            "Propojení listů a sešitů bez chybových odkazů",
            "Power Query – import a čištění dat bez copy-paste",
            "Jak vytvořit reporting, který se aktualizuje sám",
            "Tipy na zrychlení práce, které vám ušetří hodiny",
          ]}
          whyText="Většina pokročilých kurzů Excelu vás naučí, co existuje. Já vás naučím, co reálně používat. Každý bod v tomto kurzu je věc, která mi v praxi ušetřila desítky hodin. Ukážu vám konkrétní příklady z reálné práce – ne cvičení vymyšlená pro kurzy."
        />
      </main>
      <Footer />
    </>
  );
}
