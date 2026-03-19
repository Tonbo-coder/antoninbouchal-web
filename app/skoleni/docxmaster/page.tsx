import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetail from "@/components/CourseDetail";

export const metadata: Metadata = {
  title: "DOCXmaster: Word na úrovni, kterou jinde neučí | Školení – Antonín Bouchal",
  description: "Formátování, struktura a automatizace dokumentů ve Wordu. Pokročilé školení pro náročné uživatele.",
};

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <CourseDetail
          name="DOCXmaster: Word na úrovni, kterou jinde neučí"
          benefitSentence="Formátování, struktura a automatizace dokumentů. Pro pokročilé."
          subtext="Kurz pro ty, kteří Word znají dobře, ale vědí, že existuje úroveň, kam se zatím nedostali. Hluboká práce s dokumenty, šablonami a automatizací."
          targetAudience={[
            { label: "Pokročilí uživatelé Wordu", sub: "kteří chtějí jít dál" },
            { label: "Tvůrci šablon a dokumentů", sub: "pro celé firmy a týmy" },
            { label: "Právníci a accountanti", sub: "pracující s komplexními dokumenty" },
            { label: "HR a administrativní pracovníci", sub: "kteří spravují firemní dokumentaci" },
          ]}
          learnItems={[
            "Komplexní systém stylů – jak vytvořit šablonu pro celou firmu",
            "Automatické generování obsahu, rejstříků a příloh",
            "Hromadná korespondence – dopisy, smlouvy, štítky automaticky",
            "Formuláře ve Wordu – jak vytvořit interaktivní dokumenty",
            "Makra ve Wordu – automatizace opakujících se úkonů",
            "Revize a správa verzí v týmovém prostředí",
            "Export do PDF se zachováním struktury a záložek",
            "Propojení Wordu s Excelem a dalšími aplikacemi Office",
          ]}
          whyText="DOCXmaster není běžný kurz Wordu. Je to výsledek let práce s dokumenty – od formátování závěrečných prací po tvorbu firemních šablon pro velké společnosti. Naučím vás věci, které na žádném jiném kurzu nenajdete, protože vycházejí z reálné praxe, ne z učebnic."
        />
      </main>
      <Footer />
    </>
  );
}
