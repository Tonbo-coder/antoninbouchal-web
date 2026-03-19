import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="o-mne" label="O mně" labelNum="01" bg="gray">
      <div className="flex flex-col gap-10">
        <div className="reveal">
          <p className="text-[17px] leading-[1.85] text-[var(--text)] font-normal">
            Podnikám v oblasti úprav a tisku závěrečných prací, kde pomáháme
            studentům zvládnout studium s menším stresem. Vedle toho vedu firmu
            zaměřenou na zakázkovou výrobu reklamních tašek, kde pomáháme firmám
            se zviditelnit. Věnuji se také tvorbě webových stránek a zkušenosti,
            které jsem získal v průběhu podnikání, předávám dál formou školení a
            konzultací. Mimo práci dobíjím energii cestováním, sportem a
            objevováním nových zážitků.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
