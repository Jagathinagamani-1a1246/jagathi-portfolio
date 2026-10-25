import { skills } from "../data/content";
import { Reveal, Section, SectionHeading } from "./Reveal";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading kicker="03 · Toolkit" title="Technical skills" />
      <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.name} delay={(i % 2) * 0.1}>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-(--color-muted)">{g.name}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {g.items.map((s) => (
                <span key={s} className="rounded-full border border-(--color-line) bg-(--color-surface) px-5 py-2.5 text-sm font-medium transition hover:-translate-y-1 hover:border-(--color-accent) hover:text-(--color-accent)">{s}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
