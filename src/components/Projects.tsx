import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import Reveal, { SectionHeading } from "./Reveal";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="The work" title="Projects that shipped" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1}>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="glow-card group flex h-full flex-col p-7"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-accent">
                      {p.category}
                    </span>
                    <h3 className="mt-1 flex items-center gap-2 text-2xl font-bold text-white">
                      {p.title}
                      <FiArrowUpRight className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </h3>
                  </div>
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full glass text-accent transition-all group-hover:shadow-glow">
                    <FiExternalLink />
                  </span>
                </div>

                <span className="mt-1 font-mono text-xs text-slate-500">
                  {p.period}
                </span>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
