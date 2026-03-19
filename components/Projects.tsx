import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const STUDENTS = [
  { name: "Profiformátování.cz", desc: "Kompletní úprava a tisk závěrečných prací", url: "https://www.profiformatovani.cz/", img: "/images/profiformatovani.jpg" },
  { name: "Vazbičov.cz", desc: "Kompletní úprava a tisk závěrečných prací", url: "https://www.vazbicov.cz/", img: "/images/vazbicov.jpg" },
  { name: "Formátování diplomové práce.cz", desc: "Kompletní úprava a tisk závěrečných prací", url: "https://formatovani-diplomove-prace.cz/", img: "/images/formatovani-diplomove-prace.jpg" },
  { name: "Formátování bakalářské práce.cz", desc: "Kompletní úprava a tisk závěrečných prací", url: "https://www.formatovani-bakalarske-prace.cz/", img: "/images/formatovani-bakalarske-prace.jpg" },
  { name: "Formátování závěrečných prací.cz", desc: "Kompletní úprava a tisk závěrečných prací", url: "https://www.formatovani-zaverecnych-praci.cz/", img: "/images/formatovani-zaverecnych-praci.jpg" },
  { name: "Korektura bakalářské práce.cz", desc: "Kompletní úprava a tisk závěrečných prací", url: "https://korektura-bakalarske-prace.cz/", img: "/images/korektura-bakalarske-prace.jpg" },
];

const COMPANIES = [
  { name: "Profitašky.cz", desc: "Reklamní tašky s potiskem i bez potisku", url: "https://www.profitasky.cz/", img: "/images/profitasky.jpg" },
];

const PERSONAL = [
  {
    name: "Školení a kurzy",
    desc: "Školení digitálních technologií a Wordu",
    url: "/skoleni",
    img: "/images/logo-bouchal-antonin2.png",
    accent: true,
    gradientBg: "linear-gradient(135deg, rgba(255,217,134,0.28) 0%, #ffffff 68%)",
  },
  {
    name: "Tvorba webových stránek",
    desc: "Návrh a realizace webů na míru",
    url: "/tvorba-webu",
    img: "/images/logo-bouchal-antonin2.png",
    accent: true,
    gradientBg: "linear-gradient(135deg, rgba(236,67,15,0.10) 0%, #ffffff 68%)",
  },
];

const IconStudents = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCompanies = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPersonal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function CategoryLabel({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mt-9 mb-3 first:mt-0">
      <span className="flex items-center justify-center w-6 h-6 rounded-md bg-[var(--orange)]/10 text-[var(--orange)] flex-shrink-0">
        {icon}
      </span>
      <span className="text-[var(--orange)] text-[11px] font-bold tracking-[0.18em] uppercase whitespace-nowrap">
        {label}
      </span>
      <div className="w-5 h-[2px] bg-[var(--orange)] rounded-full opacity-35" />
    </div>
  );
}

function Tile({ name, desc, url, img, accent, gradientBg }: {
  name: string; desc: string; url: string; img: string; accent?: boolean; gradientBg?: string;
}) {
  const isExternal = url.startsWith("http");
  return (
    <a
      href={url}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className={`project-tile group ${accent ? "accent-tile" : ""}`}
      style={gradientBg ? { background: gradientBg } : undefined}
    >
      <div className="proj-logo w-[52px] h-[52px] flex items-center justify-center rounded-xl overflow-hidden bg-white border border-[#e5e7eb] p-1.5 flex-shrink-0 group-hover:border-[var(--orange)]/30 transition-colors duration-200">
        <Image src={img} alt={name} width={44} height={44} className="object-contain w-full h-full rounded-lg" />
      </div>
      <div className="project-vdiv" />
      <span className="proj-title font-semibold text-[14px] text-[var(--text-dark)] group-hover:text-[var(--orange)] transition-colors duration-200 leading-tight">
        {name}
      </span>
      <div className="project-vdiv" />
      <span className="proj-desc text-[13px] text-gray-500 font-normal leading-snug">
        {desc}
      </span>
      <span className="proj-arrow text-gray-300 group-hover:text-[var(--orange)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-[18px] ml-auto flex-shrink-0">
        ↗
      </span>
    </a>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projekty" label="Hlavní projekty" labelNum="02" bg="gray" noDivider>
      <div className="reveal flex flex-col">
        <CategoryLabel label="Pro studenty" icon={<IconStudents />} />
        {STUDENTS.map((p) => <Tile key={p.name} {...p} />)}

        <CategoryLabel label="Pro firmy" icon={<IconCompanies />} />
        {COMPANIES.map((p) => <Tile key={p.name} {...p} />)}

        <CategoryLabel label="Osobní projekty" icon={<IconPersonal />} />
        {PERSONAL.map((p) => <Tile key={p.name} {...p} />)}
      </div>
    </SectionWrapper>
  );
}
