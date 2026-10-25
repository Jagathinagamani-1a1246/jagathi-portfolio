import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    const qx = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const qy = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
    const move = (e) => { qx(e.clientX - 130); qy(e.clientY - 130); el.style.opacity = "1"; };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[5] h-[260px] w-[260px] max-[900px]:hidden rounded-full opacity-0 blur-[60px] transition-opacity"
      style={{ background: "radial-gradient(circle, oklch(0.68 0.23 350 / .24), transparent 70%)" }}
    />
  );
}
