import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetail from "@/components/CourseDetail";

const jsonLdCourse = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "DOCXmaster",
  description: "Pokročilé školení Microsoft Word zaměřené na styly, automatizaci a profesionální dokumenty.",
  provider: {
    "@type": "Person",
    name: "Antonín Bouchal",
    url: "https://www.antoninbouchal.cz/",
  },
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "DOCXmaster",
  url: "https://www.antoninbouchal.cz/skoleni/docxmaster",
  description: "Ovládnete Word na pokročilé úrovni. Styly, automatické obsahy, číslování a profesionální formátování bez chaosu.",
  inLanguage: "cs-CZ",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.antoninbouchal.cz/images/antonin-bouchal-skoleni.webp",
  },
};

export const metadata: Metadata = {
  title: "Word na úrovni, kterou jinde neučí | Školení MS Word pro pokročilé",
  description:
    "Ovládnete Word na pokročilé úrovni. Styly, automatické obsahy, číslování a profesionální formátování bez chaosu.",
  keywords: [
    "word pokročilý",
    "styly word",
    "automatický obsah word",
    "formátování dokumentů",
    "školení word",
    "Antonín Bouchal",
  ],
  authors: [{ name: "Antonín Bouchal" }],
  alternates: {
    canonical: "https://www.antoninbouchal.cz/skoleni/docxmaster",
  },
  openGraph: {
    title: "Word na úrovni, kterou jinde neučí | Školení MS Word pro pokročilé",
    description: "Pokročilé školení Wordu zaměřené na styly, číslování, automatický obsah a profesionální formátování.",
    type: "website",
    url: "https://www.antoninbouchal.cz/skoleni/docxmaster",
    siteName: "Antonín Bouchal",
    locale: "cs_CZ",
    images: [
      {
        url: "/images/antonin-bouchal-skoleni.webp",
        width: 1200,
        height: 630,
        alt: "DOCXmaster – Antonín Bouchal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Word na úrovni, kterou jinde neučí | Školení MS Word pro pokročilé",
    description: "Pokročilé školení Wordu pro profesionální dokumenty.",
    images: {
      url: "/images/antonin-bouchal-skoleni.webp",
      alt: "DOCXmaster – Antonín Bouchal",
    },
  },
};

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourse) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
        />
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
