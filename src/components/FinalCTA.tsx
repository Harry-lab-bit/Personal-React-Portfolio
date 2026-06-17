import { FiLinkedin, FiExternalLink } from "react-icons/fi";
import Reveal from "./Reveal";
import CalendlyButton from "./CalendlyButton";
import { profile, services } from "../data";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-4 text-center">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
            Your move
          </span>
        </Reveal>
        <Reveal delay={0.05} className="mb-12 text-center">
          <h2 className="section-title">
            Got something <span className="gradient-text">worth building?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Whether it's a full stack web app, an e-commerce platform, or AI-powered automation — I've built it before, and I'd love to build it with you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CalendlyButton />
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full glass px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <FiLinkedin />
              Talk on LinkedIn
            </a>
            <a
              href="#projects"
              className="rounded-full border border-white/10 px-7 py-3 font-semibold text-slate-300 transition-colors hover:text-white"
            >
              See what I offer
            </a>
          </div>
        </Reveal>

        {/* Services tags */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <span
                key={s}
                className="rounded-full glass px-4 py-2 text-sm text-slate-300"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Book meeting — opens Calendly in new tab */}
        <Reveal delay={0.2} className="mt-16 text-center">
          <a
            href={profile.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-white transition-colors hover:text-accent"
          >
            Schedule your meeting on Calendly
            <FiExternalLink />
          </a>
        </Reveal>

        {/* Contact info */}
        <Reveal delay={0.25} className="mt-12 text-center">
          <p className="text-slate-400">
            Or reach out directly at{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-accent hover:text-accent-violet transition-colors"
            >
              {profile.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
