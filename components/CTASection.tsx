import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

export default function CTASection() {
  return (
    <SectionWrapper id="ozvete-se" label="Ozvěte se" labelNum="04" bg="gray" noDivider>
      <div className="reveal flex flex-col gap-7 max-w-xl justify-center" style={{ minHeight: "6rem" }}>
        <div className="flex flex-wrap gap-4 items-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--orange)] text-white font-semibold text-[15px] rounded-xl hover:bg-[var(--orange-dark)] transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            Napište mi
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <a
            href="tel:+420736729646"
            className="text-[15px] font-medium text-[var(--text)] hover:text-[var(--orange)] transition-colors duration-200"
          >
            nebo zavolejte →&nbsp;+420&nbsp;736&nbsp;729&nbsp;646
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
