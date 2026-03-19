import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antonín Bouchal | Podnikatel · Lektor · Tvůrce webů",
  description:
    "Osobní web Antonína Bouchala – podnikatele, lektora digitálních technologií a tvůrce webů z Prahy. Pomáhám studentům, firmám i jednotlivcům dosáhnout jejich cílů.",
  keywords: [
    "Antonín Bouchal",
    "tvorba webů Praha",
    "školení digitálních technologií",
    "formátování závěrečných prací",
    "reklamní tašky",
  ],
  authors: [{ name: "Antonín Bouchal" }],
  creator: "Antonín Bouchal",
  openGraph: {
    title: "Antonín Bouchal | Podnikatel · Lektor · Tvůrce webů",
    description:
      "Osobní web Antonína Bouchala – podnikatele, lektora a tvůrce webů z Prahy.",
    url: "https://www.antoninbouchal.cz",
    siteName: "Antonín Bouchal",
    locale: "cs_CZ",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
