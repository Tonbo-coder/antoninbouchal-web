import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetail from "@/components/CourseDetail";

export const metadata: Metadata = {
  title: "Excel bez chaosu | Školení – Antonín Bouchal",
  description: "Naučím vás používat Excel tak, aby vám pomáhal – ne zdržoval. Praktické školení bez zbytečné teorie.",
};

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <CourseDetail
          name="Excel bez chaosu"
          benefitSentence="Začnete používat Excel tak, aby vám pomáhal – ne zdržoval."
          subtext="Praktické školení pro lidi, kteří Excel používají každý den, ale pořád ztrácejí čas na věcech, které by šly dělat rychleji."
          targetAudience={[
            { label: "Jednotlivci", sub: "kteří chtějí pracovat rychleji" },
            { label: "Týmy", sub: "s různou úrovní znalostí" },
            { label: "Začátečníci", sub: "bez předchozí zkušenosti s Excelem" },
            { label: "Firmy", sub: "kde Excel brzdí každodenní práci" },
          ]}
          learnItems={[
            "Jak se orientovat v Excelu bez ztráty času hledáním",
            "Vzorce, které reálně používám každý den",
            "Jak třídit, filtrovat a přehledně zobrazit data",
            "Jednoduché grafy a přehledy, které ostatní pochopí",
            "Jak předejít chybám ve vzorcích a výpočtech",
            "Klávesové zkratky, které šetří minuty každý den",
            "Jak si nastavit Excel tak, aby vyhovoval právě vám",
          ]}
          whyText="Excel je nástroj, který skoro každý zná – ale většina ho používá jen na zlomek jeho možností. Toto školení není o memorování funkcí. Je o tom, abyste po kurzu otevřeli Excel a věděli přesně, co děláte a proč. Bez tápání, bez chaosu."
        />
      </main>
      <Footer />
    </>
  );
}
