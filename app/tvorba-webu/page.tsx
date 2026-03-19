import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TvorbaWebu from "@/components/TvorbaWebu";

export const metadata: Metadata = {
  title: "Tvorba webových stránek | Antonín Bouchal",
  description: "Navrhuji a programuji webové stránky na míru — moderní, rychlé a krásné. Od Landing Page po komplexní e-shop.",
};

export default function TvorbaWebuPage() {
  return (
    <>
      <Navigation />
      <main>
        <TvorbaWebu />
      </main>
      <Footer />
    </>
  );
}
