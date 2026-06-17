import { profile, navLinks, projects } from "../data";
import CalendlyButton from "./CalendlyButton";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">
              {profile.name}
              <span className="gradient-text">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {profile.role} at {profile.company}. Building robust, secure, and user-focused web applications from {profile.location}.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {profile.email}
                </a>
              </li>
              <li>{profile.location}</li>
            </ul>
            <div className="mt-4">
              <CalendlyButton
                text="Book a 30-min call"
                className="rounded-full bg-gradient-to-r from-accent to-accent-violet px-5 py-2 text-sm font-semibold text-bg shadow-glow transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-8">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-500 transition-colors hover:text-accent"
            >
              {p.title}
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
