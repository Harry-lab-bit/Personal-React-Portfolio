import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDownCircle,
} from "react-icons/fi";
import { profile, stats } from "../data";
import heroPhoto from "../assets/harry.png";

const socials = [
  { icon: FiGithub, href: profile.github },
  { icon: FiLinkedin, href: profile.linkedin },
  { icon: FiMail, href: `mailto:${profile.email}` },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl"
          >
            Hi, I'm <br />
            <span className="gradient-text animate-gradient-x">
              {profile.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-xl font-semibold text-slate-300 md:text-2xl"
          >
            <span className="font-mono text-accent">&lt;</span>
            {profile.role}
            <span className="font-mono text-accent-violet">/&gt;</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-slate-400 md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-accent to-accent-violet px-7 py-3 font-semibold text-bg shadow-glow transition-transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full glass px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get In Touch
            </a>

            <div className="flex items-center gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full glass text-lg text-slate-300 transition-all hover:scale-110 hover:text-accent hover:shadow-glow"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="text-2xl font-extrabold gradient-text md:text-3xl">
                  {s.value}
                </div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - glowing avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto hidden md:block"
        >
          <div className="relative h-80 w-80 animate-float">
            <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-to-tr from-accent via-accent-blue to-accent-violet blur-2xl opacity-50" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-accent-blue to-accent-violet p-[3px]">
              <div className="h-full w-full overflow-hidden rounded-full bg-bg-card">
                <img
                  src={heroPhoto}
                  alt={profile.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Orbiting badges */}
            {["React", "Django", "TS", "API"].map((t, i) => (
              <motion.div
                key={t}
                className="absolute left-1/2 top-1/2 rounded-full glass px-3 py-1 text-xs font-semibold text-accent shadow-glow"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 16 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  transformOrigin: `${130 + i * 6}px center`,
                }}
              >
                {t}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl text-slate-500 transition-colors hover:text-accent"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="block"
        >
          <FiArrowDownCircle />
        </motion.span>
      </a>
    </section>
  );
}
