import { projects } from "../data/content";
import { GithubIcon } from "./Icons";
import { Reveal, Section, SectionHeading } from "./Reveal";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading kicker="06 · Featured titles" title="Projects" />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-(--color-line) bg-(--color-surface) p-7 transition duration-500 hover:-translate-y-3 hover:border-(--color-accent) hover:shadow-[0_30px_60px_-20px_oklch(0.55_0.24_27/.5)]">
              <div aria-hidden className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-(--color-accent)/20 blur-3xl transition group-hover:scale-150" />
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-(--color-accent)">{p.tag}</span>
                {p.status && <span className="rounded-full border border-(--color-line) px-3 py-1 text-xs text-(--color-muted)">{p.status}</span>}
              </div>
              <h3 className="font-display relative mt-10 text-3xl font-extrabold">{p.title}</h3>
              <p className="relative mt-4 text-(--color-muted)">{p.text}</p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (<span key={t} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs">{t}</span>))}
              </div>
              <div className="relative mt-auto flex flex-wrap gap-3 pt-8">
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-(--color-accent-deep) px-5 py-2.5 text-sm font-bold text-white transition hover:scale-105"><GithubIcon /> GitHub</a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-sm text-(--color-muted)">Each GitHub button opens the project's repository.</p>
    </Section>
  );
}
