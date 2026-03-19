import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Kontakt | Antonín Bouchal",
  description: "Napište mi nebo zavolejte. Rád se ozvu zpět co nejdříve.",
};

export default function Kontakt() {
  return (
    <>
      <Navigation />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
