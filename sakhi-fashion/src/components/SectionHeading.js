"use client";

import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  lead,
  align = "center",
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-ink-900 dark:text-cream-50 sm:text-5xl">
          {title} {accent && <span className="italic text-gold-gradient">{accent}</span>}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.16}>
          <p
            className={`mt-4 font-sans text-base font-light text-ink-700/80 dark:text-cream-50/70 ${
              isCenter ? "mx-auto max-w-xl" : "max-w-xl"
            }`}
          >
            {lead}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.2}>
        <div className={`hairline mt-7 ${isCenter ? "mx-auto max-w-[120px]" : "max-w-[120px]"}`} />
      </Reveal>
    </div>
  );
}
