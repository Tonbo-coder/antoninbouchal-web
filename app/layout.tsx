import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f8b074",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.antoninbouchal.cz"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "Antonín Bouchal" }],
  creator: "Antonín Bouchal",
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antonín Bouchal",
  url: "https://www.antoninbouchal.cz/",
  image: "https://www.antoninbouchal.cz/images/antonin-bouchal-bio.webp",
  jobTitle: "Podnikatel, lektor a tvůrce webů",
  description:
    "Antonín Bouchal pomáhá firmám i jednotlivcům pracovat efektivněji prostřednictvím školení Excelu, Wordu, AI a tvorby moderních webů.",
  sameAs: [
    "https://www.linkedin.com/in/antoninbouchal/",
    "https://www.instagram.com/antonin.bouchal/",
    "https://www.facebook.com/antonin.bouchal",
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Antonín Bouchal",
  url: "https://www.antoninbouchal.cz/",
  inLanguage: "cs-CZ",
  publisher: {
    "@type": "Person",
    name: "Antonín Bouchal",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Antonín Bouchal",
  url: "https://www.antoninbouchal.cz/",
  logo: "https://www.antoninbouchal.cz/images/antonin-bouchal-bio.webp",
  sameAs: [
    "https://www.linkedin.com/in/antoninbouchal/",
    "https://www.instagram.com/antonin.bouchal/",
    "https://www.facebook.com/antonin.bouchal",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="font-poppins antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
