import { useEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "../data/content";
import { GithubIcon, LinkedinIcon } from "./Icons";

const WORDS = ["AI / ML", "PYTHON", "GENERATIVE AI", "DATA", "JAVA"];

export default function Hero({ ready }) {
  const root = useRef(null);
  const card = useRef(null);

  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power4.out" } })
        .from(".h-item", { y: 50, opacity: 0, filter: "blur(10px)", duration: 1, stagger: 0.1 })
        .from(card.current, { scale: 0.8, opacity: 0, rotationY: 25, duration: 1.2 }, "-=0.8");
    }, root);
    return () => ctx.revert();
  }, [ready]);

  useEffect(() => {
    const el = card.current;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rx = gsap.quickTo(el, "rotationX", { duration: 0.5 });
    const ry = gsap.quickTo(el, "rotationY", { duration: 0.5 });
    const move = (e) => {
      ry((e.clientX / window.innerWidth - 0.5) * 18);
      rx(-(e.clientY / window.innerHeight - 0.5) * 14);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section id="home" ref={root} className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      <div aria-hidden className="absolute inset-0 flex items-center opacity-[0.06]">
        <div className="marquee font-display text-[18vw] font-extrabold whitespace-nowrap text-(--color-accent)">
          {[...WORDS, ...WORDS, ...WORDS, ...WORDS].map((w, i) => (<span key={i} className="mx-8">{w} •</span>))}
        </div>
      </div>
      <div aria-hidden className="absolute -right-40 top-1/4 h-[600px] w-[600px] rounded-full bg-(--color-accent)/15 blur-[140px]" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:px-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="h-item inline-flex items-center gap-2 rounded-full border border-(--color-accent)/40 bg-black/30 px-4 py-2 font-mono text-xs uppercase tracking-widest">
            <span className="h-2 w-2 animate-pulse rounded-full bg-(--color-accent)" /> Now streaming: B.Tech IT · 2023 – Present
          </p>
          <h1 className="h-item font-display mt-6 text-5xl leading-[0.95] font-extrabold tracking-tighter sm:text-7xl xl:text-8xl">
            Jagathi Nagamani{" "}
            <span className="bg-gradient-to-r from-[oklch(0.78_0.19_350)] to-[oklch(0.57_0.23_350)] bg-clip-text text-transparent">Jonnalagadda</span>
          </h1>
          <p className="h-item mt-5 font-mono text-sm tracking-wide text-(--color-accent) md:text-base">{profile.title}</p>
          <p className="h-item mt-5 max-w-xl text-lg leading-relaxed text-(--color-muted)">
            I'm an Information Technology student who turns data and code into useful things — exploring machine learning, generative AI and Python, one project at a time.
          </p>
          <div className="h-item mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="rounded-full bg-(--color-accent-deep) px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:scale-105 focus-visible:ring-2 focus-visible:ring-white">▶ View Projects</a>
            <a href="#contact" className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-bold uppercase tracking-widest transition hover:border-(--color-accent) hover:text-(--color-accent)">Contact Me</a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:text-(--color-accent)"><GithubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:text-(--color-accent)"><LinkedinIcon /></a>
          </div>
        </div>
        <div className="flex justify-center lg:col-span-5" style={{ perspective: 1000 }}>
          <div ref={card} className="relative w-full max-w-sm" style={{ transformStyle: "preserve-3d" }}>
            <div aria-hidden className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-(--color-accent) to-transparent opacity-40 blur-xl" />
            <img src="/img/jagathi.jpg" alt="Portrait of Jagathi Nagamani Jonnalagadda" width={650} height={696} fetchPriority="high" className="relative aspect-[4/5] w-full rounded-[2rem] border border-white/15 object-cover object-[50%_20%] shadow-2xl" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
              <p className="font-display text-lg font-bold">Jagathi Nagamani</p>
              <p className="text-xs text-(--color-muted)">Vijayawada, Andhra Pradesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
