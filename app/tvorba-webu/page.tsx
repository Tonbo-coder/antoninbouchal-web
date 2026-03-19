import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TvorbaWebu from "@/components/TvorbaWebu";

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tvorba webových stránek",
  url: "https://www.antoninbouchal.cz/tvorba-webu",
  description: "Tvorba moderních webových stránek na míru se zaměřením na výkon a konverze.",
  serviceType: "Web development",
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
  image: "https://www.antoninbouchal.cz/images/antonin-bouchal-weby.webp",
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Tvorba webových stránek",
  url: "https://www.antoninbouchal.cz/tvorba-webu",
  description: "Navrhuji a tvořím moderní webové stránky na míru. Rychlé, funkční a připravené na konverze.",
  inLanguage: "cs-CZ",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.antoninbouchal.cz/images/antonin-bouchal-weby.webp",
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
      name: "Tvorba webu",
      item: "https://www.antoninbouchal.cz/tvorba-webu",
    },
  ],
};

export const metadata: Metadata = {
  title: "Tvorba webových stránek | Weby na míru, které přinášejí výsledky",
  description:
    "Navrhuji a tvořím moderní webové stránky na míru. Rychlé, funkční a připravené na konverze. Web, který vám přinese výsledky.",
  keywords: [
    "tvorba webových stránek",
    "web na míru",
    "tvorba webu",
    "web design",
    "SEO web",
    "moderní web",
    "tvorba webu Praha",
  ],
  authors: [{ name: "Antonín Bouchal" }],
  alternates: {
    canonical: "https://www.antoninbouchal.cz/tvorba-webu",
  },
  openGraph: {
    title: "Tvorba webových stránek | Weby na míru, které přinášejí výsledky",
    description: "Moderní weby na míru, které dávají smysl. Rychlost, funkčnost a připravené na konverze.",
    type: "website",
    url: "https://www.antoninbouchal.cz/tvorba-webu",
    siteName: "Antonín Bouchal",
    locale: "cs_CZ",
    images: [
      {
        url: "/images/antonin-bouchal-weby.webp",
        width: 1200,
        height: 630,
        alt: "Tvorba webových stránek na míru – Antonín Bouchal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tvorba webových stránek | Weby na míru, které přinášejí výsledky",
    description: "Moderní weby na míru, které přinášejí výsledky.",
    images: {
      url: "/images/antonin-bouchal-weby.webp",
      alt: "Tvorba webových stránek na míru – Antonín Bouchal",
    },
  },
};

export default function TvorbaWebuPage() {
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
        <TvorbaWebu />
      </main>
      <Footer />
    </>
  );
}
