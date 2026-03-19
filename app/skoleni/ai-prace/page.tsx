import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetail from "@/components/CourseDetail";

export const metadata: Metadata = {
  title: "AI, která vám ušetří hodiny práce | Školení – Antonín Bouchal",
  description: "Automatizace, psaní a práce s daty pomocí AI bez složitostí. Praktické školení pro každodenní práci.",
};

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <CourseDetail
          name="AI, která vám ušetří hodiny práce"
          benefitSentence="Automatizace, psaní a práce s daty bez složitostí."
          subtext="Školení zaměřené na praktické využití AI v každodenní práci. Žádné buzzwordy, žádná teorie – jen to, co reálně funguje."
          targetAudience={[
            { label: "Manažeři a podnikatelé", sub: "kteří chtějí pracovat efektivněji" },
            { label: "Marketéři a copywriteři", sub: "kteří chtějí AI jako pomocníka" },
            { label: "Administrativní pracovníci", sub: "s opakujícími se úkoly" },
            { label: "Týmy", sub: "které chtějí AI zavést do praxe" },
          ]}
          learnItems={[
            "Jak správně zadávat příkazy AI, aby výsledky dávaly smysl",
            "Psaní textů – e-maily, nabídky, posty za zlomek času",
            "Analýza dat a dokumentů pomocí AI bez programování",
            "Automatizace opakujících se úkolů s AI nástroji",
            "Jak AI využít v Excelu, Wordu a dalších programech",
            "Přehled nástrojů: co, kdy a proč použít",
            "Jak AI naučit váš styl a tón komunikace",
            "Praktická cvičení – reálné scénáře z vaší práce",
          ]}
          whyText="AI není jen ChatGPT. Je to celá sada nástrojů, které – pokud je umíte používat – vám ušetří hodiny každý týden. Já AI používám každý den v práci na webu, textech i datech. Ukážu vám, co reálně funguje a co je jen hype."
        />
      </main>
      <Footer />
    </>
  );
}
