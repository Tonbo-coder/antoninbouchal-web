import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseDetailNew from "@/components/CourseDetailNew";

const jsonLdCourse = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Tvoříme weby pomocí AI (vibe coding)",
  description: "Kurz zaměřený na moderní tvorbu webů s využitím AI – od návrhu po kód.",
  provider: { "@type": "Person", name: "Antonín Bouchal", url: "https://www.antoninbouchal.cz/" },
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Tvoříme weby pomocí AI (vibe coding)",
  url: "https://www.antoninbouchal.cz/skoleni/vibe-coding",
  description: "Naučíte se tvořit weby pomocí AI. Od návrhu po kód – rychle, efektivně a bez zbytečné složitosti.",
  inLanguage: "cs-CZ",
  primaryImageOfPage: { "@type": "ImageObject", url: "https://www.antoninbouchal.cz/images/antonin-bouchal-skoleni.webp" },
};

export const metadata: Metadata = {
  title: "Tvoříme weby pomocí AI (vibe coding) | Kurz tvorby webů s AI",
  description: "Naučíte se tvořit weby pomocí AI. Od návrhu po kód – rychle, efektivně a bez zbytečné složitosti.",
  keywords: ["tvorba webu ai", "vibe coding", "ai web development", "tvorba webových stránek", "ai školení", "Antonín Bouchal"],
  authors: [{ name: "Antonín Bouchal" }],
  alternates: { canonical: "https://www.antoninbouchal.cz/skoleni/vibe-coding" },
  openGraph: {
    title: "Tvoříme weby pomocí AI (vibe coding) | Kurz tvorby webů s AI",
    description: "Moderní způsob tvorby webů s využitím AI – od návrhu po kód.",
    type: "website", url: "https://www.antoninbouchal.cz/skoleni/vibe-coding",
    siteName: "Antonín Bouchal", locale: "cs_CZ",
    images: [{ url: "/images/antonin-bouchal-skoleni.webp", width: 1200, height: 630, alt: "Tvoříme weby pomocí AI – Antonín Bouchal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tvoříme weby pomocí AI (vibe coding) | Kurz tvorby webů s AI",
    description: "Moderní tvorba webů s využitím AI.",
    images: { url: "/images/antonin-bouchal-skoleni.webp", alt: "Tvoříme weby pomocí AI – Antonín Bouchal" },
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
          name="Tvoříme weby pomocí AI (vibe coding)"
          benefitSentence="Ukážu vám, jak dnes vznikají weby rychleji než kdy dřív."
          subtext="Kurz pro každého, kdo chce pochopit, jak AI mění tvorbu webů – a chce to sám vyzkoušet. Bez nutnosti znát programování."
          heroImage="/images/skoleni_AI_antonin_bouchal.webp"
          sectionImage="/images/skoleni_AI_antonin_bouchal.webp"
          roundedImage
          nameHighlight="AI (vibe coding)"
          targetAudience={[
            { label: "Podnikatelé", sub: "kteří chtějí vlastní web bez agentury" },
            { label: "Marketéři", sub: "kteří chtějí rozumět webovému vývoji" },
            { label: "Začínající vývojáři", sub: "kteří chtějí zrychlit workflow" },
            { label: "Každý zvídavý", sub: "kdo chce vědět, jak to funguje" },
          ]}
          learnItems={[
            "Co je vibe coding a proč mění pravidla tvorby webů",
            "Jak popsat AI, co chcete – a dostat použitelný výsledek",
            "Výběr nástrojů: co použít pro různé typy projektů",
            "Vytvoření funkční stránky od nuly v průběhu kurzu",
            "Jak opravovat chyby a iterovat s pomocí AI",
            "Nasazení webu online – od kódu k živé stránce",
          ]}
          whyText="Vibe coding jsem začal používat při práci na vlastních projektech – a výsledky mě překvapily. Weby, které by dřív trvaly týdny, vznikají za dny. Tento kurz je přímý přenos mé zkušenosti: co funguje, co ne, a jak začít hned po kurzu na svém vlastním projektu."
        />
      </main>
      <Footer />
    </>
  );
}
