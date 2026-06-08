import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import Reveal, { SectionHeading } from "./Reveal";
import { profile } from "../data";

const items = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: FiMapPin, label: "Location", value: profile.location, href: undefined },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow="Say Hello" title="Let's Work Together" />

        <Reveal>
          <p className="mx-auto max-w-xl text-lg text-slate-400">
            Have a project in mind or just want to chat? I'm always open to
            discussing new opportunities and ideas.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {items.map((it) => {
              const Inner = (
                <div className="glow-card group flex h-full flex-col items-center gap-2 p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-accent/20 to-accent-violet/20 text-xl text-accent transition-transform group-hover:scale-110">
                    <it.icon />
                  </span>
                  <span className="text-xs uppercase tracking-wider text-slate-500">
                    {it.label}
                  </span>
                  <span className="break-all text-sm font-medium text-white">
                    {it.value}
                  </span>
                </div>
              );
              return it.href ? (
                <a key={it.label} href={it.href}>
                  {Inner}
                </a>
              ) : (
                <div key={it.label}>{Inner}</div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-gradient-to-r from-accent to-accent-violet px-8 py-3.5 font-semibold text-bg shadow-glow transition-transform hover:scale-105"
            >
              Send a Message
            </a>
            <div className="flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-full glass text-xl text-slate-300 transition-all hover:scale-110 hover:text-accent hover:shadow-glow"
              >
                <FiGithub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-full glass text-xl text-slate-300 transition-all hover:scale-110 hover:text-accent hover:shadow-glow"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
