import { education } from "../data/content";
import { Reveal, Section, SectionHeading } from "./Reveal";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading kicker="02 · Chapters" title="Education" />
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.level} delay={i * 0.1}>
            <article className="group flex h-full flex-col rounded-3xl border border-(--color-line) bg-(--color-surface) p-7 transition duration-300 hover:-translate-y-2 hover:border-(--color-accent)">
              <p className="font-display text-5xl font-extrabold text-(--color-accent)">{e.big}</p>
              <h3 className="font-display mt-6 text-xl font-bold">{e.level}</h3>
              <p className="mt-2 text-(--color-muted)">{e.school}</p>
              {e.period && <p className="mt-auto pt-6 font-mono text-xs uppercase tracking-widest text-(--color-muted)">{e.period}</p>}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
