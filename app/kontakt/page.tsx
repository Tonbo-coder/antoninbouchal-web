import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactPage from "@/components/ContactPage";

const jsonLdContactPage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontakt – Antonín Bouchal",
  url: "https://www.antoninbouchal.cz/kontakt",
  description: "Kontakt na Antonína Bouchala ohledně školení Excelu, Wordu, AI a tvorby webových stránek.",
  inLanguage: "cs-CZ",
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antonín Bouchal",
  url: "https://www.antoninbouchal.cz/",
  sameAs: [
    "https://www.linkedin.com/in/antoninbouchal/",
    "https://www.instagram.com/antonin.bouchal/",
    "https://www.facebook.com/antonin.bouchal",
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Úvod",
      item: "https://www.antoninbouchal.cz/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kontakt",
      item: "https://www.antoninbouchal.cz/kontakt",
    },
  ],
};

export const metadata: Metadata = {
  title: "Kontakt | Antonín Bouchal – školení, weby, spolupráce",
  description:
    "Kontaktujte mě ohledně školení Excelu, Wordu, AI nebo tvorby webu. Rychlá domluva, jasné řešení a konkrétní výsledky.",
  keywords: [
    "kontakt Antonín Bouchal",
    "školení kontakt",
    "tvorba webu kontakt",
    "excel školení kontakt",
    "word školení kontakt",
  ],
  authors: [{ name: "Antonín Bouchal" }],
  alternates: {
    canonical: "https://www.antoninbouchal.cz/kontakt",
  },
  openGraph: {
    title: "Kontakt | Antonín Bouchal – školení, weby, spolupráce",
    description: "Ozvěte se ohledně školení nebo tvorby webu. Rychlá komunikace a konkrétní řešení.",
    type: "website",
    url: "https://www.antoninbouchal.cz/kontakt",
    siteName: "Antonín Bouchal",
    locale: "cs_CZ",
    images: [
      {
        url: "/images/antonin-bouchal-kontakt.webp",
        width: 1200,
        height: 630,
        alt: "Kontakt – Antonín Bouchal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Antonín Bouchal – školení, weby, spolupráce",
    description: "Kontaktujte mě ohledně školení nebo tvorby webu.",
    images: {
      url: "/images/antonin-bouchal-kontakt.webp",
      alt: "Kontakt – Antonín Bouchal",
    },
  },
};

export default function Kontakt() {
  return (
    <>
      <Navigation />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContactPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
