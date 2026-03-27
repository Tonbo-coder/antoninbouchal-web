"use client";

import { useState, useRef, useEffect } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", _hp: "" });
  const ref = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const mountTime = useRef<number>(0);

  useEffect(() => {
    mountTime.current = Date.now();
  }, []);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".hero-animate");
    els?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      }, 60 + i * 85);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal, .reveal-left, .reveal-right")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 80);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const inputCls =
    "w-full px-5 py-3.5 bg-white border border-[var(--border)] rounded-xl text-[15px] text-[var(--text-dark)] placeholder-gray-300 focus:outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/10 transition-all duration-200";

  return (
    <>
      {/* ── HERO ── */}
      <section ref={ref} className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-[#f9fafb] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--orange)]" />
        <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full bg-[#FFD986] opacity-25 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 relative z-10">
          <div>
            <span className="hero-animate inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--orange)] mb-5">
              Kontakt
            </span>
            <h1
              className="hero-animate font-black text-[#000] leading-[40px] tracking-[-2px] mb-8"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              Pojďme to spolu <span className="text-[var(--orange)]">rozjet</span>
            </h1>
            <p className="hero-animate text-[18px] font-light text-[var(--text)] leading-relaxed">
              Napište mi níže, nebo rovnou zavolejte na{" "}
              <a href="tel:+420736729646" className="font-semibold text-[var(--text-dark)] hover:text-[var(--orange)] transition-colors">
                +420 736 729 646
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Divider pod hero */}
      <div className="bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">
          <div className="border-b-[3px] border-[#4A5149]" />
        </div>
      </div>

      {/* ── FORMULÁŘ ── */}
      <section ref={formRef} className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-center md:gap-36">

            {/* Fotka */}
            <div className="reveal-left w-full md:flex-1 flex justify-center md:justify-start items-center mb-12 md:mb-0">
              <img
                src="/images/antonin_bouchal_kontakt.webp"
                alt="Antonín Bouchal"
                className="w-[200px] md:w-auto md:max-w-[280px] rounded-2xl object-contain h-auto"
              />
            </div>

            {/* Formulář */}
            <div className="reveal w-full md:flex-[3]">

              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-green-50 border border-green-100 rounded-2xl mb-8">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[13px] text-green-700 font-medium">Odpovídám do 24 hodin</span>
              </div>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                    <svg className="w-9 h-9 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-black text-[var(--text-dark)] mb-3">Zpráva odeslána!</h2>
                  <p className="text-[var(--text)] font-light mb-8 max-w-xs">Ozvu se vám co nejdříve, nejpozději do 24 hodin.</p>
                  <button onClick={() => setSent(false)}
                    className="px-7 py-3 bg-[var(--orange)] text-white rounded-xl text-sm font-semibold hover:bg-[var(--orange-dark)] transition-colors">
                    Odeslat další zprávu
                  </button>
                </div>
              ) : (
                <form onSubmit={async (e) => {
                e.preventDefault();
                setSending(true);
                setError("");
                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...form, _t: mountTime.current }),
                  });
                  if (!res.ok) throw new Error();
                  setSent(true);
                } catch {
                  setError("Odeslání selhalo. Zkuste to prosím znovu nebo napište přímo na jsem@antoninbouchal.cz");
                } finally {
                  setSending(false);
                }
              }} className="flex flex-col gap-6">

                  {/* Honeypot – skryté pro lidi, viditelné pro boty */}
                  <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
                    <input type="text" name="website" value={form._hp} onChange={(e) => setForm((s) => ({ ...s, _hp: e.target.value }))} tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">Jméno *</label>
                      <input type="text" required value={form.name} onChange={set("name")}
                        placeholder="Jan Novák" className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">E-mail *</label>
                      <input type="email" required value={form.email} onChange={set("email")}
                        placeholder="jan@example.cz" className={inputCls} />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">Telefon</label>
                    <input type="tel" value={form.phone} onChange={set("phone")}
                      placeholder="+420 123 456 789" className={inputCls} />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">Zpráva *</label>
                    <textarea required rows={6} value={form.message} onChange={set("message")}
                      placeholder="Popište váš projekt nebo otázku..."
                      className={`${inputCls} resize-none`} />
                  </div>

                  {error && (
                    <p className="text-[13px] text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</p>
                  )}

                  <button type="submit" disabled={sending}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-[var(--orange)] text-white font-bold text-[15px] rounded-xl hover:bg-[var(--orange-dark)] transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                    {sending ? "Odesílám…" : "Odeslat zprávu"}
                    {!sending && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                      </svg>
                    )}
                  </button>

                  <p className="text-[12px] text-gray-300 text-center">
                    Odesláním souhlasíte se zpracováním osobních údajů.
                  </p>
                </form>
              )}
            </div>


          </div>
        </div>
      </section>
    </>
  );
}
