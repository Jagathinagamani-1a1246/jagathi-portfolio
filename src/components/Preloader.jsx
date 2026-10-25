import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onDone }) {
  const ref = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ onComplete: onDone });
    tl.fromTo(".pl-in", { y: 30, opacity: 0, filter: "blur(8px)" }, { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, stagger: 0.15, ease: "power3.out" })
      .fromTo(".pl-bar", { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: "power2.inOut" }, "-=0.4")
      .to(ref.current, { yPercent: -100, duration: 0.8, ease: "power4.inOut", delay: 0.2 });
    return () => { tl.kill(); };
  }, [onDone]);
  return (
    <div ref={ref} className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-(--color-canvas)">
      <span className="pl-in h-3 w-3 animate-ping rounded-full bg-(--color-accent)" />
      <h1 className="pl-in font-display text-3xl font-extrabold uppercase tracking-[0.3em] md:text-5xl">Jagathi</h1>
      <div className="pl-bar h-0.5 w-40 origin-left bg-(--color-accent)" />
    </div>
  );
}
