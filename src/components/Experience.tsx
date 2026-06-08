import { FiBriefcase } from "react-icons/fi";
import Reveal, { SectionHeading } from "./Reveal";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="My Journey" title="Experience" />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent via-accent-violet to-transparent md:left-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.role + i} delay={0.05 * i}>
                <div
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* node */}
                  <div className="absolute left-4 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-violet text-bg shadow-glow md:left-1/2">
                    <FiBriefcase className="text-sm" />
                  </div>

                  <div className="md:w-1/2" />

                  <div
                    className={`glow-card ml-12 p-6 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:mr-10" : "md:ml-10"
                    }`}
                  >
                    <span className="font-mono text-xs text-accent">
                      {exp.period}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-accent-violet">
                      {exp.company}
                    </div>
                    <ul className="mt-3 space-y-2">
                      {exp.points.map((p, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-sm leading-relaxed text-slate-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
