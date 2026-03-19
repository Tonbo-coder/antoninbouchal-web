"use client";

import CourseDetailNew from "./CourseDetailNew";

export default function ExcelBezChaosuDetail() {
  return (
    <CourseDetailNew
      name="Excel bez chaosu"
      benefitSentence="Začnete používat Excel tak, aby vám pomáhal – ne zdržoval."
      subtext="Praktické školení pro lidi, kteří Excel používají každý den, ale pořád ztrácejí čas na věcech, které by šly dělat rychleji."
      heroImage="/images/skoleni_MS_Excel_antonin_bouchal.webp"
      sectionImage="/images/skoleni_MS_Excel_antonin_bouchal.webp"
      nameHighlight="chaosu"
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
      ]}
      whyText="Excel je nástroj, který skoro každý zná – ale většina ho používá jen na zlomek jeho možností. Toto školení není o memorování funkcí. Je o tom, abyste po kurzu otevřeli Excel a věděli přesně, co děláte a proč. Bez tápání, bez chaosu."
    />
  );
}
