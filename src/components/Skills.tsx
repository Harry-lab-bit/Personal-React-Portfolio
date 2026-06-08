import { motion } from "framer-motion";
import Reveal, { SectionHeading } from "./Reveal";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What I Use" title="Skills & Tech" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={(i % 4) * 0.08}>
              <div className="glow-card group h-full p-5">
                <div className="flex items-center justify-between">
                  <s.icon className="text-3xl text-slate-300 transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  <span className="font-mono text-xs text-accent">
                    {s.level}%
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-white">
                  {s.name}
                </h3>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-violet"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
