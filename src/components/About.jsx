import { Reveal, Section, SectionHeading } from "./Reveal";

const stats = [["7.65", "Current CGPA"], ["3", "Projects"], ["3", "Internships & training"], ["1st", "Hackathon prize"]];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading kicker="01 · The story" title="About me" />
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="space-y-5 text-lg leading-relaxed text-(--color-muted) lg:col-span-7">
          <p>I'm <strong className="text-(--color-ink)">Jagathi Nagamani Jonnalagadda</strong>, a B.Tech Information Technology student at Dhanekula Institute of Engineering and Technology, based in Vijayawada, Andhra Pradesh.</p>
          <p>I'm building my path as an AI/ML and Python developer — working with data using Pandas and NumPy, exploring generative AI, and learning how to ship real projects. I also have hands-on exposure to Java full stack development and data structures in C.</p>
          <p>I enjoy turning ideas into working software, and I'm looking for opportunities to learn, contribute and grow.</p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 lg:col-span-5">
          {stats.map(([n, label], i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-(--color-line) bg-(--color-surface) p-6 transition hover:border-(--color-accent)">
                <p className="font-display text-4xl font-extrabold text-(--color-accent)">{n}</p>
                <p className="mt-1 text-sm text-(--color-muted)">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
