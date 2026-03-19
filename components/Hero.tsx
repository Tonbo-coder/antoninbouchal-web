"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".hero-animate");
    els?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      }, 60 + i * 85);
    });
  }, []);

  return (
    <>
      <style>{`
        .hero-animate {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }

        /* ── Photo ── */
        @keyframes heroPhotoIn {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: none; }
        }
        .hero-photo-wrap {
          animation: heroPhotoIn 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.25s both;
          /* mobile: below text, full image, bottom-anchored */
          width: 100%;
          flex-shrink: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          /* no bottom padding so image sits on the divider */
        }
        .hero-photo-wrap img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ── Text column ── */
        .hero-text-col {
          /* mobile: top padding clears the fixed nav */
          padding-top: calc(68px + 1.75rem);
          padding-bottom: 0;
        }

        /* ── Mobile / small tablet < 900px: floating photo ── */
        @media (max-width: 899px) {
          /* Block layout – výška určena textem, foto absolutně */
          .hero-flex-container {
            display: block !important;
            position: relative;
          }

          /* Textová část: full-width, dost spodního paddingu pro foto */
          .hero-text-col {
            display: block;
            padding-top: calc(68px + 2.75rem);
            padding-bottom: 3.5rem;
            justify-content: flex-start !important;
          }

          /* H1 na jeden řádek */
          .hero-h1 {
            font-size: clamp(1.9rem, 9vw, 2.6rem) !important;
          }

          /* Bio label konzistentní spacing */
          .hero-bio-label {
            min-width: 120px !important;
            width: auto !important;
          }

          /* Foto: absolutní, vpravo, kotví se na spodní divider */
          /* width: fluid clamp – foto roste plynule s viewportem */
          .hero-photo-wrap {
            position: absolute !important;
            right: -1.5rem !important;
            bottom: 0 !important;
            top: auto !important;
            width: clamp(130px, 52vw, 360px) !important;
            max-width: none !important;
            display: flex !important;
            align-items: flex-end !important;
            justify-content: flex-end !important;
            padding: 0 !important;
            margin: 0 !important;
            z-index: 1;
          }

          /* Obrázek: zachovat proporce */
          .hero-photo-wrap img {
            width: 100% !important;
            height: auto !important;
            object-fit: unset !important;
          }
        }

        /* ── Small tablet 768–899px: větší foto, výš, doprava ── */
        @media (min-width: 768px) and (max-width: 899px) {
          /* Foto: větší, bez malého max-width omezení */
          .hero-photo-wrap {
            width: 60% !important;
            max-width: 400px !important;
          }
          /* Sekce musí být dost vysoká pro vyšší foto */
          .hero-text-col {
            padding-top: calc(68px + 3rem);
            padding-bottom: 5rem;
          }
          /* H1 větší – máme plnou šířku textu */
          .hero-h1 {
            font-size: clamp(2.4rem, 4.8vw, 2.8rem) !important;
          }
        }

        /* ── Very small mobile <469px: compact bio ── */
        @media (max-width: 468px) {
          /* Inline flow: label + content v jednom toku textu.
             <br> pak přejde na levý okraj = pod label, ne pod obsah. */
          .hero-bio-row {
            display: block !important;
          }
          .hero-bio-label {
            display: inline !important;
            min-width: 0 !important;
            width: auto !important;
            font-size: 14px !important;
            margin-right: 0.25rem;
          }
          .hero-bio-text {
            display: inline !important;
            font-size: 14px !important;
          }
        }

        /* ── Tablet 900–1023px: side-by-side optimized ── */
        @media (min-width: 900px) and (max-width: 1023px) {
          .hero-flex-container {
            align-items: flex-end;
          }
          .hero-text-col {
            padding-top: clamp(4rem, 9vh, 5.5rem);
            padding-bottom: clamp(1.25rem, 2.5vh, 2rem);
            justify-content: flex-end;
          }
          .hero-text-col .hero-pb-block {
            padding-bottom: clamp(1.25rem, 2.5vh, 2rem) !important;
          }
          .hero-photo-wrap {
            width: 52% !important;
            flex-shrink: 0;
            padding-top: clamp(1.5rem, 3vh, 2.5rem);
            align-items: flex-end;
            justify-content: center;
          }
          /* H1 na jeden řádek */
          .hero-h1 {
            font-size: 2.6rem !important;
          }
          /* Bio – label menší min-width, text 15px, gap těsněji */
          .hero-bio-label {
            min-width: 88px !important;
            width: auto !important;
          }
          .hero-bio-text {
            font-size: 15px !important;
          }
          .hero-bio-row {
            gap: 8px;
          }
          .hero-text-pr {
            padding-right: 0.5rem !important;
          }
        }

        /* ── Divider <900px: opticky blíž k obrázku ── */
        @media (max-width: 899px) {
          .hero-divider-wrap {
            margin-top: -4px;
          }
        }

        /* ── Desktop 1024px+ ── */
        @media (min-width: 1024px) {
          .hero-flex-container {
            align-items: flex-end;
          }
          .hero-text-col {
            padding-top: clamp(3.5rem, 8vh, 7rem);
            padding-bottom: clamp(2rem, 4vh, 3.5rem);
            justify-content: flex-end;
          }
          .hero-photo-wrap {
            width: 42%;
            flex-shrink: 0;
            padding-top: clamp(2.5rem, 6vh, 5rem);
            align-items: flex-end;
            justify-content: center;
          }
        }

        @media (min-width: 1024px) {
          .hero-photo-wrap {
            width: 54% !important;
            margin-right: -44px;
            margin-left: -20px;
            padding-top: clamp(3.5rem, 8vh, 7rem);
          }
        }

        /* ── 1024px compact fix (do 1279px = před Laptop L) ── */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .hero-text-col {
            padding-top: clamp(3.5rem, 8vh, 5.5rem);
            padding-bottom: clamp(1.25rem, 2.5vh, 2rem);
          }
          .hero-text-col .hero-pb-block {
            padding-bottom: clamp(1.25rem, 2.5vh, 2rem) !important;
          }
          .hero-photo-wrap {
            padding-top: clamp(1.5rem, 3vh, 2.5rem);
          }
          /* Bio label */
          .hero-bio-label {
            min-width: 110px !important;
            width: auto !important;
          }
          /* Bio text – 16px místo 18px, víc prostoru pro obsah */
          .hero-bio-text {
            font-size: 16px !important;
          }
          .hero-text-pr {
            padding-right: 0.5rem !important;
          }
        }
      `}</style>

      <section
        id="uvod"
        ref={ref}
        className="relative bg-[#f9fafb] overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--orange)] z-10" />

        <div className="hero-flex-container max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 flex flex-col md:flex-row">

          {/* ── LEFT: text ── */}
          <div className="hero-text-col hero-text-pr flex-1 flex flex-col justify-start md:justify-end lg:pr-10">

            {/* Block 1: H1 */}
            <h1
              className="hero-animate hero-h1 font-black leading-[0.93] tracking-[-2px] text-[#000]"
              style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.6rem)", marginBottom: "1.75rem" }}
            >
              Antonín Bouchal
            </h1>

            {/* Block 2: Bio rows */}
            <div className="flex flex-col" style={{ gap: "14px", marginBottom: "1.75rem" }}>
              <div className="hero-animate hero-bio-row flex items-baseline gap-3">
                <span className="hero-bio-label font-semibold text-[#000] text-[16px] md:text-[18px] shrink-0 whitespace-nowrap" style={{ minWidth: "120px" }}>
                  Vystudovaný
                </span>
                <span className="hero-bio-text text-[16px] md:text-[18px] text-[var(--text)] font-normal leading-[1.6]">
                  · Bc. · Dis.
                </span>
              </div>

              <div className="hero-animate hero-bio-row flex items-baseline gap-3">
                <span className="hero-bio-label font-semibold text-[#000] text-[16px] md:text-[18px] shrink-0 whitespace-nowrap" style={{ minWidth: "120px" }}>
                  Zapálený
                </span>
                <span className="hero-bio-text text-[16px] md:text-[18px] text-[var(--text)] font-normal leading-[1.6]">
                  · Podnikatel · Lektor · tvůrce webů<br />
                  · Cestovatel · Motorkář · <span className="whitespace-nowrap">AI nadšenec</span>
                </span>
              </div>

              <div className="hero-animate hero-bio-row flex items-baseline gap-3">
                <span className="hero-bio-label font-semibold text-[#000] text-[16px] md:text-[18px] shrink-0 whitespace-nowrap" style={{ minWidth: "120px" }}>
                  Milovník
                </span>
                <span className="hero-bio-text text-[16px] md:text-[18px] text-[var(--text)] font-normal leading-[1.6]">
                  sportu, výzev a života naplno
                </span>
              </div>

              <div className="hero-animate">
                <span className="text-[13px] text-gray-400 font-normal tracking-wide">
                  #DOCXmaster&nbsp;&nbsp;#WorkSmartNotHard
                </span>
              </div>
            </div>

            {/* Block 3: Contact */}
            <div className="hero-animate hero-pb-block flex flex-col" style={{ gap: "8px", paddingBottom: "clamp(2rem, 4vh, 3.5rem)" }}>
              <p className="font-semibold text-[#000] text-[16px] md:text-[18px]">Kontakt</p>
              <div className="flex flex-col" style={{ gap: "5px" }}>
                <a href="tel:+420736729646"
                  className="text-[#000] text-[15px] md:text-[16px] hover:text-[var(--orange)] transition-colors duration-200 w-fit">
                  +420 736 729 646
                </a>
                <a href="mailto:jsem@antoninbouchal.cz"
                  className="text-[#000] text-[15px] md:text-[16px] hover:text-[var(--orange)] transition-colors duration-200 w-fit">
                  jsem@antoninbouchal.cz
                </a>
              </div>
              <div className="flex items-center gap-2" style={{ marginTop: "4px" }}>
                {[
                  {
                    label: "Facebook",
                    href: "https://www.facebook.com/antoninbouchal",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/antonin.bouchal",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/antoninbouchal",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:border-[var(--orange)] hover:text-[var(--orange)] hover:shadow-sm transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: photo – always fully visible, anchored to bottom ── */}
          <div className="hero-photo-wrap">
            <Image
              src="/images/antonin-bouchal.webp"
              alt="Antonín Bouchal"
              width={900}
              height={951}
              priority
            />
          </div>
        </div>

        {/* Bottom divider – content width only */}
        <div className="hero-divider-wrap max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20">
          <div className="border-b-[3px] border-[#4A5149]" />
        </div>
      </section>
    </>
  );
}
