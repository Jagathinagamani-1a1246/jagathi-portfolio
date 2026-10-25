import { useState } from "react";
import { profile } from "../data/content";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import { Reveal, Section, SectionHeading } from "./Reveal";

const input = "w-full rounded-xl border border-(--color-line) bg-(--color-surface) px-4 py-3.5 text-base outline-none transition focus:border-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent)/40";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  const links = [
    [<MailIcon key="m" />, "Email", profile.email, `mailto:${profile.email}`],
    [<span key="p" className="text-lg">☎</span>, "Phone", profile.phone, "tel:+918341411329"],
    [<LinkedinIcon key="l" />, "LinkedIn", "Jagathi Nagamani Jonnalagadda", profile.linkedin],
    [<GithubIcon key="g" />, "GitHub", "Jagathinagamani-1a1246", profile.github],
  ];
  return (
    <Section id="contact">
      <SectionHeading kicker="08 · Next episode" title="Let's work together" />
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal className="space-y-5">
          {links.map(([icon, label, value, href]) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-(--color-line) bg-(--color-surface) p-5 transition hover:border-(--color-accent)">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-(--color-accent)/15 text-(--color-accent)">{icon}</span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-widest text-(--color-muted)">{label}</span>
                <span className="block truncate font-medium">{value}</span>
              </span>
            </a>
          ))}
          <p className="text-(--color-muted)">📍 {profile.location}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="space-y-4">
            <label className="block"><span className="mb-2 block text-sm text-(--color-muted)">Name</span><input name="name" required className={input} autoComplete="name" /></label>
            <label className="block"><span className="mb-2 block text-sm text-(--color-muted)">Email</span><input name="email" type="email" required className={input} autoComplete="email" /></label>
            <label className="block"><span className="mb-2 block text-sm text-(--color-muted)">Message</span><textarea name="message" rows={5} required className={input} /></label>
            <button className="rounded-full bg-(--color-accent-deep) px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:scale-105 focus-visible:ring-2 focus-visible:ring-white">Send message</button>
            <p className="text-sm text-(--color-muted)">{sent ? "Opening your email app with the message ready to send." : "This opens your email app with the message pre-filled."}</p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
