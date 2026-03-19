import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import References from "@/components/References";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Antonín Bouchal | Podnikatel, lektor Excelu, Wordu a AI, tvůrce webů",
  description:
    "Pomáhám firmám i jednotlivcům pracovat efektivněji. Školení Excel, Word, AI a tvorba moderních webů na míru.",
  keywords: [
    "Antonín Bouchal",
    "školení Excel",
    "školení Word",
    "AI školení",
    "tvorba webu",
    "tvorba webových stránek",
    "lektor Excel",
    "lektor Word",
    "AI kurzy",
    "weby na míru",
  ],
  alternates: {
    canonical: "https://www.antoninbouchal.cz/",
  },
  openGraph: {
    title: "Antonín Bouchal | Školení Excel, Word, AI a tvorba webů",
    description:
      "Pomáhám firmám i jednotlivcům pracovat efektivněji. Školení Excel, Word, AI a tvorba moderních webů na míru.",
    type: "website",
    url: "https://www.antoninbouchal.cz/",
    siteName: "Antonín Bouchal",
    locale: "cs_CZ",
    images: [
      {
        url: "/images/antonin-bouchal_web.png",
        width: 1200,
        height: 630,
        alt: "Antonín Bouchal – školení Excel, Word, AI a tvorba webů",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonín Bouchal | Školení Excel, Word, AI a tvorba webů",
    description:
      "Pomáhám firmám i jednotlivcům pracovat efektivněji. Školení Excel, Word, AI a tvorba moderních webů na míru.",
    images: {
      url: "/images/antonin-bouchal_web.png",
      alt: "Antonín Bouchal – školení Excel, Word, AI a tvorba webů",
    },
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <References />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
