import { FiAward } from "react-icons/fi";
import Reveal, { SectionHeading } from "./Reveal";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Background" title="Education" />

        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1}>
              <div className="glow-card group h-full p-7">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-violet/20 text-2xl text-accent transition-transform group-hover:scale-110">
                  <FiAward />
                </div>
                <h3 className="text-xl font-bold text-white">{e.degree}</h3>
                <p className="text-sm text-accent-violet">{e.field}</p>
                <p className="mt-2 text-sm text-slate-400">{e.institute}</p>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-500">{e.period}</span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">
                    {e.grade}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
