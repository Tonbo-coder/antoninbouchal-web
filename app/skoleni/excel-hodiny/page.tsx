import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetailNew from "@/components/CourseDetailNew";

const jsonLdCourse = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Excel, který vám šetří hodiny týdně",
  description: "Pokročilé školení Microsoft Excel zaměřené na funkce, automatizaci a efektivní práci.",
  provider: { "@type": "Person", name: "Antonín Bouchal", url: "https://www.antoninbouchal.cz/" },
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Excel, který vám šetří hodiny týdně",
  url: "https://www.antoninbouchal.cz/skoleni/excel-hodiny",
  description: "Pokročilé školení Excelu zaměřené na funkce, automatizaci a úsporu času.",
  inLanguage: "cs-CZ",
  primaryImageOfPage: { "@type": "ImageObject", url: "https://www.antoninbouchal.cz/images/antonin-bouchal-skoleni.webp" },
};

export const metadata: Metadata = {
  title: "Excel, který vám šetří hodiny týdně | Školení Microsoft Excel pro pokročilé",
  description: "Posunete Excel na další úroveň. Naučíte se pokročilé funkce, automatizaci a postupy, které vám ušetří hodiny práce každý týden.",
  keywords: ["excel pokročilý", "excel automatizace", "pokročilé funkce excel", "excel efektivita", "školení excel", "Antonín Bouchal"],
  authors: [{ name: "Antonín Bouchal" }],
  alternates: { canonical: "https://www.antoninbouchal.cz/skoleni/excel-hodiny" },
  openGraph: {
    title: "Excel, který vám šetří hodiny týdně | Školení Microsoft Excel pro pokročilé",
    description: "Pokročilé školení Excelu zaměřené na funkce, automatizaci a úsporu času v praxi.",
    type: "website", url: "https://www.antoninbouchal.cz/skoleni/excel-hodiny",
    siteName: "Antonín Bouchal", locale: "cs_CZ",
    images: [{ url: "/images/antonin-bouchal-skoleni.webp", width: 1200, height: 630, alt: "Excel, který vám šetří hodiny týdně – Antonín Bouchal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Excel, který vám šetří hodiny týdně | Školení Microsoft Excel pro pokročilé",
    description: "Pokročilé školení Excelu zaměřené na úsporu času a efektivitu.",
    images: { url: "/images/antonin-bouchal-skoleni.webp", alt: "Excel, který vám šetří hodiny týdně – Antonín Bouchal" },
  },
};

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourse) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
        <CourseDetailNew
          name="Excel, který vám šetří hodiny týdně"
          benefitSentence="Funkce, automatizace a postupy, které reálně zrychlují práci."
          subtext="Pro ty, kdo Excel znají, ale tuší, že by to šlo dělat rychleji. Zaměřujeme se na věci, které skutečně ušetří čas – ne na teorii."
          heroImage="/images/skoleni_MS_Excel_antonin_bouchal.webp"
          sectionImage="/images/skoleni_MS_Excel_antonin_bouchal.webp"
          nameHighlight="šetří hodiny týdně"
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
            "Power Query – import a čištění dat bez copy-paste",
            "Jak vytvořit reporting, který se aktualizuje sám",
          ]}
          whyText="Většina pokročilých kurzů Excelu vás naučí, co existuje. Já vás naučím, co reálně používat. Každý bod v tomto kurzu je věc, která mi v praxi ušetřila desítky hodin. Ukážu vám konkrétní příklady z reálné práce – ne cvičení vymyšlená pro kurzy."
        />
      </main>
      <Footer />
    </>
  );
}
