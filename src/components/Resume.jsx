import { RESUME_DOWNLOAD_NAME, RESUME_URL } from "../data/content";
import { Reveal, Section, SectionHeading } from "./Reveal";

export default function Resume() {
  return (
    <Section id="resume">
      <SectionHeading kicker="05 · The credits" title="My Resume" />
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-(--color-line) bg-(--color-surface) p-8 md:p-14">
          <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-(--color-accent)/20 blur-3xl" />
          <p className="relative max-w-2xl text-lg leading-relaxed text-(--color-muted) md:text-xl">Explore my resume to learn more about my education, technical skills, projects, and experience.</p>
          <div className="relative mt-8 flex flex-wrap gap-4">
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="rounded-full bg-(--color-accent-deep) px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:scale-105 focus-visible:ring-2 focus-visible:ring-white">View Resume</a>
            <a href={RESUME_URL} download={RESUME_DOWNLOAD_NAME} className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-bold uppercase tracking-widest transition hover:border-(--color-accent) hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-white">Download Resume</a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
