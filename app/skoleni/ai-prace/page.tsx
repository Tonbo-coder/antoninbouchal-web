import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetailNew from "@/components/CourseDetailNew";

const jsonLdCourse = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "AI, která vám ušetří hodiny práce",
  description: "Praktické školení zaměřené na využití AI v práci, automatizaci a produktivitu.",
  provider: { "@type": "Person", name: "Antonín Bouchal", url: "https://www.antoninbouchal.cz/" },
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI, která vám ušetří hodiny práce",
  url: "https://www.antoninbouchal.cz/skoleni/ai-prace",
  description: "Naučíte se využívat AI v praxi. Automatizace, generování textu a efektivní workflow, které vám ušetří hodiny práce.",
  inLanguage: "cs-CZ",
  primaryImageOfPage: { "@type": "ImageObject", url: "https://www.antoninbouchal.cz/images/antonin-bouchal-skoleni.webp" },
};

export const metadata: Metadata = {
  title: "AI, která vám ušetří hodiny práce | Školení umělé inteligence",
  description: "Naučíte se využívat AI v praxi. Automatizace, generování textu a efektivní workflow, které vám ušetří hodiny práce.",
  keywords: ["ai školení", "umělá inteligence kurz", "chatgpt školení", "ai produktivita", "ai automatizace", "Antonín Bouchal"],
  authors: [{ name: "Antonín Bouchal" }],
  alternates: { canonical: "https://www.antoninbouchal.cz/skoleni/ai-prace" },
  openGraph: {
    title: "AI, která vám ušetří hodiny práce | Školení umělé inteligence",
    description: "Praktické využití AI pro automatizaci, generování textu a efektivní workflow.",
    type: "website", url: "https://www.antoninbouchal.cz/skoleni/ai-prace",
    siteName: "Antonín Bouchal", locale: "cs_CZ",
    images: [{ url: "/images/antonin-bouchal-skoleni.webp", width: 1200, height: 630, alt: "AI, která vám ušetří hodiny práce – Antonín Bouchal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI, která vám ušetří hodiny práce | Školení umělé inteligence",
    description: "Praktické využití AI pro každodenní práci.",
    images: { url: "/images/antonin-bouchal-skoleni.webp", alt: "AI, která vám ušetří hodiny práce – Antonín Bouchal" },
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
          name="AI, která vám ušetří hodiny práce"
          benefitSentence="Automatizace, psaní a práce s daty bez složitostí."
          subtext="Školení zaměřené na praktické využití AI v každodenní práci. Žádné buzzwordy, žádná teorie – jen to, co reálně funguje."
          heroImage="/images/skoleni_AI_antonin_bouchal.webp"
          sectionImage="/images/skoleni_AI_antonin_bouchal.webp"
          roundedImage
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
          ]}
          whyText="AI není jen ChatGPT. Je to celá sada nástrojů, které – pokud je umíte používat – vám ušetří hodiny každý týden. Já AI používám každý den v práci na webu, textech i datech. Ukážu vám, co reálně funguje a co je jen hype."
        />
      </main>
      <Footer />
    </>
  );
}
