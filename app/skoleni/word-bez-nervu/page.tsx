import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetail from "@/components/CourseDetail";

export const metadata: Metadata = {
  title: "Word bez nervů | Školení – Antonín Bouchal",
  description: "Dokumenty, které se nerozsypou při každé úpravě. Praktické školení Wordu pro každodenní práci.",
};

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <CourseDetail
          name="Word bez nervů"
          benefitSentence="Dokumenty, které se nerozsypou při každé úpravě."
          subtext="Školení pro každého, kdo pracuje s dokumenty a ztrácí nervy, když se při úpravě rozsype celé formátování."
          targetAudience={[
            { label: "Každý, kdo píše dokumenty", sub: "smlouvy, zprávy, nabídky" },
            { label: "Asistenti a sekretářky", sub: "zpracovávající firemní dokumenty" },
            { label: "Začátečníci ve Wordu", sub: "kteří se chtějí zorientovat" },
            { label: "Týmy", sub: "sdílející dokumenty s kolegy" },
          ]}
          learnItems={[
            "Styly a nadpisy – základ každého přehledného dokumentu",
            "Jak nastavit okraje, záhlaví a zápatí správně napoprvé",
            "Automatické číslování stránek a obsah jedním klikem",
            "Jak vkládat obrázky a tabulky bez rozpadnutí layoutu",
            "Sledování změn a komentáře při spolupráci s kolegy",
            "Klávesové zkratky pro rychlejší psaní a formátování",
            "Jak uložit šablonu, aby každý nový dokument vypadal stejně",
          ]}
          whyText="Word je program, který každý zná – ale málokdo ho ovládá. Výsledkem jsou dokumenty, které vypadají jinak v každém řádku, nerozsypou se jen náhodou a každá úprava zabere dvakrát tolik času. Tohle školení to změní. Naučím vás Word tak, jak ho reálně používám já – rychle, čistě, bez nervů."
        />
      </main>
      <Footer />
    </>
  );
}
