import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-(--color-line) px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <p className="text-sm text-(--color-muted)">© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-6 text-sm">
          <a className="hover:text-(--color-accent)" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-(--color-accent)" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-(--color-accent)" href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
