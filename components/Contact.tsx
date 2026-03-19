"use client";

import { useEffect, useRef, useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Telefon",
    value: "+420 736 729 646",
    href: "tel:+420736729646",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "E-mail",
    value: "jsem@antoninbouchal.cz",
    href: "mailto:jsem@antoninbouchal.cz",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Adresa",
    value: "Václavské nám. 808/66, Praha 1",
    href: "https://maps.google.com/?q=Václavské+náměstí+808/66,+Praha",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/antoninbouchal",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/antonin.bouchal",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/antoninbouchal",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "Tvorba webu",
  });
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    "Tvorba webu",
    "Školení",
    "Formátování práce",
    "Reklamní tašky",
    "Jiné",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".ct-reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("ct-in"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="kontakt"
      ref={sectionRef}
      className="section-padding bg-gray-50 overflow-hidden"
    >
      <style>{`
        .ct-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .ct-reveal.ct-in {
          opacity: 1;
          transform: none;
        }
      `}</style>

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="ct-reveal flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#E8420E]" />
            <span className="text-[#E8420E] text-sm font-semibold uppercase tracking-widest">
              Kontakt
            </span>
            <div className="w-8 h-0.5 bg-[#E8420E]" />
          </div>
          <h2 className="ct-reveal text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            Ozvěte se mi
          </h2>
          <p className="ct-reveal text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Máte projekt, otázku nebo jen chcete pohovořit? Rád se ozvu zpět
            do 24 hodin.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Contact info */}
            <div className="ct-reveal bg-[#111827] rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Kontaktní údaje</h3>
              <div className="flex flex-col gap-5">
                {contactInfo.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : "_self"}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : ""}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-[#E8420E] flex-shrink-0 group-hover:bg-[#E8420E] group-hover:text-white transition-all duration-300">
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-white/50 text-xs uppercase tracking-wide mb-0.5">
                        {c.label}
                      </div>
                      <div className="text-white font-medium group-hover:text-[#E8420E] transition-colors duration-200">
                        {c.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-6" />

              {/* Social links */}
              <div>
                <div className="text-white/50 text-xs uppercase tracking-wide mb-4">
                  Sociální sítě
                </div>
                <div className="flex gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white/60 hover:bg-[#E8420E] hover:text-white transition-all duration-300"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* IČO */}
              <div className="border-t border-white/10 mt-6 pt-6">
                <div className="text-white/30 text-xs">
                  IČO: 04484631 · #DOCXmaster · #WorkSmartNotHard
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="ct-reveal grid grid-cols-2 gap-4">
              {[
                { label: "Odpověď do", value: "24h" },
                { label: "Konzultace", value: "Zdarma" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl p-5 text-center border border-gray-100"
                >
                  <div className="text-2xl font-black text-[#E8420E]">
                    {s.value}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="lg:col-span-3 ct-reveal">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Zpráva odeslána!
                  </h3>
                  <p className="text-gray-500">
                    Děkuji za zprávu. Ozvu se vám do 24 hodin.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-3 bg-[#E8420E] text-white rounded-xl text-sm font-semibold hover:bg-[#c7370d] transition-colors"
                  >
                    Odeslat další zprávu
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-gray-900">
                    Napište mi
                  </h3>

                  {/* Subject chips */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téma
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {subjects.map((subj) => (
                        <button
                          key={subj}
                          type="button"
                          onClick={() =>
                            setFormState((s) => ({ ...s, subject: subj }))
                          }
                          className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
                            formState.subject === subj
                              ? "bg-[#E8420E] text-white border-[#E8420E]"
                              : "bg-gray-50 text-gray-600 border-gray-200 hover:border-[#E8420E] hover:text-[#E8420E]"
                          }`}
                        >
                          {subj}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jméno *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, name: e.target.value }))
                        }
                        placeholder="Jan Novák"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#E8420E] focus:ring-1 focus:ring-[#E8420E] transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, email: e.target.value }))
                        }
                        placeholder="jan@example.cz"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#E8420E] focus:ring-1 focus:ring-[#E8420E] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, phone: e.target.value }))
                      }
                      placeholder="+420 123 456 789"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#E8420E] focus:ring-1 focus:ring-[#E8420E] transition-all duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Zpráva *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          message: e.target.value,
                        }))
                      }
                      placeholder="Popište váš projekt nebo otázku..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#E8420E] focus:ring-1 focus:ring-[#E8420E] transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#E8420E] text-white font-semibold rounded-xl hover:bg-[#c7370d] transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    Odeslat zprávu
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Odesláním formuláře souhlasíte se zpracováním osobních údajů.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
