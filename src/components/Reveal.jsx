import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.5, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ kicker, title }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-(--color-accent)">{kicker}</p>
      <h2 className="font-display mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h2>
    </Reveal>
  );
}

export const Section = ({ id, children }) => (
  <section id={id} className="relative mx-auto max-w-7xl scroll-mt-16 px-6 py-24 md:px-12 md:py-32">
    {children}
  </section>
);
