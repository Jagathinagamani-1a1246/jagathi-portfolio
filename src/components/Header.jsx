import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-(--color-canvas)/85 backdrop-blur-xl border-b border-(--color-line)" : ""}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
        {/*<a href="#home" className="font-display text-xl font-extrabold tracking-tight">JN<span className="text-(--color-accent)">.</span></a>*/}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-sm text-(--color-muted) transition hover:text-(--color-accent)">{label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-(--color-accent-deep) px-5 py-2.5 text-sm font-bold text-white transition hover:scale-105 lg:block">Hire me</a>
        <button className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden lg:hidden" aria-label="Mobile">
            <div className="flex flex-col px-6 pb-6">
              {navLinks.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="border-b border-(--color-line) py-4 font-display text-2xl font-bold">{label}</a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
