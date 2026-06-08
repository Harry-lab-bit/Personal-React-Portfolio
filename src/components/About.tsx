import { FiCode, FiServer, FiDatabase, FiZap } from "react-icons/fi";
import Reveal, { SectionHeading } from "./Reveal";
import { profile } from "../data";

const cards = [
  {
    icon: FiCode,
    title: "Frontend",
    desc: "React, TypeScript & Tailwind to craft fast, responsive, pixel-perfect interfaces.",
  },
  {
    icon: FiServer,
    title: "Backend",
    desc: "Secure & scalable REST APIs with Django and Django REST Framework.",
  },
  {
    icon: FiDatabase,
    title: "Databases",
    desc: "Optimized data modeling with PostgreSQL & MySQL for performance at scale.",
  },
  {
    icon: FiZap,
    title: "Integration",
    desc: "Seamless frontend-backend flow, payment gateways & third-party APIs.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Who I Am" title="About Me" />

        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate-300">
              {profile.about}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="glass rounded-xl px-4 py-3">
                <div className="text-slate-500">Location</div>
                <div className="font-semibold text-white">
                  {profile.location}
                </div>
              </div>
              <div className="glass rounded-xl px-4 py-3">
                <div className="text-slate-500">Email</div>
                <div className="truncate font-semibold text-white">
                  {profile.email}
                </div>
              </div>
              <div className="glass rounded-xl px-4 py-3">
                <div className="text-slate-500">Phone</div>
                <div className="font-semibold text-white">{profile.phone}</div>
              </div>
              <div className="glass rounded-xl px-4 py-3">
                <div className="text-slate-500">Role</div>
                <div className="font-semibold text-white">{profile.role}</div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-5">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="glow-card group h-full p-6">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-violet/20 text-2xl text-accent transition-transform group-hover:scale-110">
                    <c.icon />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
