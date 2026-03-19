import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Skoleni from "@/components/Skoleni";

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Školení Excel, Word a AI",
  url: "https://www.antoninbouchal.cz/skoleni",
  description: "Praktická školení a konzultace zaměřené na Excel, Word a AI pro firmy i jednotlivce.",
  serviceType: "Business training",
  provider: {
    "@type": "Person",
    name: "Antonín Bouchal",
    url: "https://www.antoninbouchal.cz/",
    sameAs: [
      "https://www.linkedin.com/in/antoninbouchal/",
      "https://www.instagram.com/antonin.bouchal/",
      "https://www.facebook.com/antonin.bouchal",
    ],
  },
  areaServed: {
    "@type": "Country",
    name: "Czech Republic",
  },
  image: "https://www.antoninbouchal.cz/images/antonin-bouchal-skoleni.webp",
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Školení a konzultace",
  url: "https://www.antoninbouchal.cz/skoleni",
  description: "Praktická školení Excelu, Wordu a AI pro firmy i jednotlivce. Online i osobně.",
  inLanguage: "cs-CZ",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.antoninbouchal.cz/images/antonin-bouchal-skoleni.webp",
  },
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
      name: "Školení",
      item: "https://www.antoninbouchal.cz/skoleni",
    },
  ],
};

export const metadata: Metadata = {
  title: "Školení Excel, Word a AI | Praktické kurzy a konzultace",
  description:
    "Praktická školení Excelu, Wordu a AI pro firmy i jednotlivce. Bez zbytečné teorie, jen postupy, které vám ušetří čas v praxi.",
  keywords: [
    "školení Excel",
    "školení Word",
    "AI školení",
    "kurzy Excel",
    "kurzy Word",
    "školení pro firmy",
    "individuální konzultace",
    "Antonín Bouchal",
  ],
  authors: [{ name: "Antonín Bouchal" }],
  alternates: {
    canonical: "https://www.antoninbouchal.cz/skoleni",
  },
  openGraph: {
    title: "Školení Excel, Word a AI | Praktické kurzy a konzultace",
    description: "Excel, Word a AI bez zbytečné teorie. Praktická školení a konzultace pro firmy i jednotlivce.",
    type: "website",
    url: "https://www.antoninbouchal.cz/skoleni",
    siteName: "Antonín Bouchal",
    locale: "cs_CZ",
    images: [
      {
        url: "/images/antonin-bouchal-skoleni.webp",
        width: 1200,
        height: 630,
        alt: "Školení Excelu, Wordu a AI – Antonín Bouchal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Školení Excel, Word a AI | Praktické kurzy a konzultace",
    description: "Praktická školení Excelu, Wordu a AI pro firmy i jednotlivce.",
    images: {
      url: "/images/antonin-bouchal-skoleni.webp",
      alt: "Školení Excelu, Wordu a AI – Antonín Bouchal",
    },
  },
};

export default function SkoleniPage() {
  return (
    <>
      <Navigation />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
        <Skoleni />
      </main>
      <Footer />
    </>
  );
}
