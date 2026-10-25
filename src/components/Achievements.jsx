import { achievements } from "../data/content";
import { Reveal, Section, SectionHeading } from "./Reveal";

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading kicker="07 · Awards & credits" title="Achievements & certifications" />
      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={(i % 2) * 0.1}>
            <div className="flex h-full items-start gap-5 rounded-3xl border border-(--color-line) bg-(--color-surface) p-7 transition hover:border-(--color-accent)">
              <span className="font-display text-4xl font-extrabold text-(--color-accent)/60">0{i + 1}</span>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-(--color-accent)">{a.kind}</p>
                <h3 className="font-display mt-1 text-xl font-bold">{a.title}</h3>
                <p className="mt-1 text-(--color-muted)">{a.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
