"use client";

import { useEffect, useRef } from "react";

interface Props {
  id: string;
  label: string;
  labelNum?: string;
  children: React.ReactNode;
  bg?: "white" | "gray" | "dark";
  className?: string;
  noDivider?: boolean;
}

export default function SectionWrapper({
  id,
  label,
  labelNum,
  children,
  bg = "white",
  className = "",
  noDivider = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const bgClass =
    bg === "dark"
      ? "bg-[#1a1a1a]"
      : bg === "gray"
      ? "bg-[var(--bg)]"
      : "bg-white";

  return (
    <section
      id={id}
      ref={ref}
      className={`${noDivider ? "py-14 md:py-16" : "pt-14 md:pt-16"} ${bgClass} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] gap-8 md:gap-10 lg:gap-20">

          {/* Left: label column */}
          <div className="reveal-left flex md:flex-col md:items-start items-center gap-2 md:pt-1">
            {labelNum && (
              <span className="text-[11px] font-bold text-[var(--orange)] tracking-[0.2em] uppercase">
                {labelNum}
              </span>
            )}
            <h2 className="text-[22px] font-bold uppercase tracking-[0.08em] text-[var(--text-dark)]">
              {label}
            </h2>
            <div className="hidden md:block mt-3 w-10 h-[3px] bg-[var(--orange)] rounded-full" />
          </div>

          {/* Right: content */}
          <div className={noDivider ? "" : "border-b border-[#bdbdbd] pb-14 md:pb-16"}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
