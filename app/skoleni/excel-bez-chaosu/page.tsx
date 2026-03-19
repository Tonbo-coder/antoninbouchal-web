import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExcelBezChaosuDetail from "@/components/ExcelBezChaosuDetail";

const jsonLdCourse = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Excel bez chaosu",
  description: "Praktické školení Microsoft Excel pro začátečníky zaměřené na reálné použití v praxi.",
  provider: {
    "@type": "Person",
    name: "Antonín Bouchal",
    url: "https://www.antoninbouchal.cz/",
  },
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Excel bez chaosu",
  url: "https://www.antoninbouchal.cz/skoleni/excel-bez-chaosu",
  description: "Naučíte se Excel od základů bez zmatků. Praktické školení zaměřené na reálné použití.",
  inLanguage: "cs-CZ",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.antoninbouchal.cz/images/antonin-bouchal-skoleni.webp",
  },
};

export const metadata: Metadata = {
  title: "Excel bez chaosu | Školení Microsoft Excel pro začátečníky",
  description:
    "Naučíte se Excel od základů bez zmatků. Praktické školení zaměřené na reálné použití – tabulky, funkce a tipy, které ihned využijete v práci.",
  keywords: [
    "excel školení",
    "excel začátečníci",
    "kurz excel",
    "microsoft excel kurz",
    "excel základy",
    "Antonín Bouchal",
  ],
  authors: [{ name: "Antonín Bouchal" }],
  alternates: {
    canonical: "https://www.antoninbouchal.cz/skoleni/excel-bez-chaosu",
  },
  openGraph: {
    title: "Excel bez chaosu | Školení Microsoft Excel pro začátečníky",
    description: "Praktické školení Excelu pro začátečníky. Naučíte se tabulky, funkce a postupy, které ihned využijete v praxi.",
    type: "website",
    url: "https://www.antoninbouchal.cz/skoleni/excel-bez-chaosu",
    siteName: "Antonín Bouchal",
    locale: "cs_CZ",
    images: [
      {
        url: "/images/antonin-bouchal-skoleni.webp",
        width: 1200,
        height: 630,
        alt: "Excel bez chaosu – Antonín Bouchal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Excel bez chaosu | Školení Microsoft Excel pro začátečníky",
    description: "Praktické školení Excelu pro začátečníky.",
    images: {
      url: "/images/antonin-bouchal-skoleni.webp",
      alt: "Excel bez chaosu – Antonín Bouchal",
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
        <ExcelBezChaosuDetail />
      </main>
      <Footer />
    </>
  );
}
