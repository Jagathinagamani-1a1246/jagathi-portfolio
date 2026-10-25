import { experience } from "../data/content";
import { Reveal, Section, SectionHeading } from "./Reveal";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading kicker="04 · Behind the scenes" title="Internships & experience" />
      <ol className="relative ml-3 border-l border-(--color-line)">
        {experience.map((x, i) => (
          <Reveal key={x.role} delay={i * 0.1} className="relative pb-10 pl-8 last:pb-0 md:pl-12">
            <span className="absolute top-2 -left-[7px] h-3.5 w-3.5 rounded-full bg-(--color-accent) ring-4 ring-(--color-canvas)" />
            <li className="list-none rounded-3xl border border-(--color-line) bg-(--color-surface) p-6 transition hover:border-(--color-accent) md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl font-bold md:text-2xl">{x.role}</h3>
                <span className="rounded-full bg-(--color-accent)/15 px-3 py-1 font-mono text-xs text-(--color-accent)">{x.status}</span>
              </div>
              <p className="mt-1 font-medium text-(--color-accent)">{x.org}</p>
              <p className="mt-3 max-w-2xl text-(--color-muted)">{x.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
