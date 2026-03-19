import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Skoleni from "@/components/Skoleni";

export const metadata: Metadata = {
  title: "Školení a konzultace | Antonín Bouchal",
  description: "Firemní školení a individuální konzultace – Excel, Word, AI a tvorba webů. Bez teorie, jen praxe.",
};

export default function SkoleniPage() {
  return (
    <>
      <Navigation />
      <main>
        <Skoleni />
      </main>
      <Footer />
    </>
  );
}
