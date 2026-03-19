import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetailNew from "@/components/CourseDetailNew";

const jsonLdCourse = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Word bez nervů",
  description: "Praktické školení Microsoft Word pro začátečníky zaměřené na formátování a práci s dokumenty.",
  provider: { "@type": "Person", name: "Antonín Bouchal", url: "https://www.antoninbouchal.cz/" },
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Word bez nervů",
  url: "https://www.antoninbouchal.cz/skoleni/word-bez-nervu",
  description: "Naučíte se pracovat ve Wordu bez stresu. Formátování, styly a dokumenty, které budou vypadat profesionálně.",
  inLanguage: "cs-CZ",
  primaryImageOfPage: { "@type": "ImageObject", url: "https://www.antoninbouchal.cz/images/antonin-bouchal-skoleni.webp" },
};

export const metadata: Metadata = {
  title: "Word bez nervů | Školení Microsoft Word pro začátečníky",
  description: "Naučíte se pracovat ve Wordu bez stresu. Formátování, styly a dokumenty, které budou konečně vypadat profesionálně.",
  keywords: ["word školení", "microsoft word kurz", "word základy", "formátování word", "školení word", "Antonín Bouchal"],
  authors: [{ name: "Antonín Bouchal" }],
  alternates: { canonical: "https://www.antoninbouchal.cz/skoleni/word-bez-nervu" },
  openGraph: {
    title: "Word bez nervů | Školení Microsoft Word pro začátečníky",
    description: "Praktické školení Wordu pro začátečníky. Naučíte se formátování, styly a práci s dokumenty bez chaosu.",
    type: "website", url: "https://www.antoninbouchal.cz/skoleni/word-bez-nervu",
    siteName: "Antonín Bouchal", locale: "cs_CZ",
    images: [{ url: "/images/antonin-bouchal-skoleni.webp", width: 1200, height: 630, alt: "Word bez nervů – Antonín Bouchal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Word bez nervů | Školení Microsoft Word pro začátečníky",
    description: "Praktické školení Wordu pro začátečníky.",
    images: { url: "/images/antonin-bouchal-skoleni.webp", alt: "Word bez nervů – Antonín Bouchal" },
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
          name="Word bez nervů"
          benefitSentence="Dokumenty, které se nerozsypou při každé úpravě."
          subtext="Školení pro každého, kdo pracuje s dokumenty a ztrácí nervy, když se při úpravě rozsype celé formátování."
          heroImage="/images/skoleni_MS_Word_antonin_bouchal.webp"
          sectionImage="/images/skoleni_MS_Word_antonin_bouchal.webp"
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
          ]}
          whyText="Word je program, který každý zná – ale málokdo ho ovládá. Výsledkem jsou dokumenty, které vypadají jinak v každém řádku, nerozsypou se jen náhodou a každá úprava zabere dvakrát tolik času. Tohle školení to změní. Naučím vás Word tak, jak ho reálně používám já – rychle, čistě, bez nervů."
        />
      </main>
      <Footer />
    </>
  );
}
