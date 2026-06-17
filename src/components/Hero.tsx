import { motion } from "framer-motion";
import { FiArrowDown, FiLinkedin } from "react-icons/fi";
import { profile, credentials } from "../data";
import CalendlyButton from "./CalendlyButton";
import heroPhoto from "../assets/harry.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Left content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-sm text-slate-400"
            >
              {profile.locationTag}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
            >
              <span className="gradient-text animate-gradient-x">
                {profile.nameDisplay}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-slate-400 md:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#journey"
                className="rounded-full bg-gradient-to-r from-accent to-accent-violet px-7 py-3 font-semibold text-bg shadow-glow transition-transform hover:scale-105"
              >
                Take the journey
              </a>
              <CalendlyButton
                text="Let's talk"
                className="rounded-full glass px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              />
            </motion.div>

            {/* Credential badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {credentials.map((c) => (
                <span
                  key={c}
                  className="rounded-full glass px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {c}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right - avatar card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 animate-pulse-glow rounded-3xl bg-gradient-to-tr from-accent via-accent-blue to-accent-violet blur-2xl opacity-40" />
              <div className="glow-card relative overflow-hidden rounded-3xl p-8">
                <div className="mx-auto h-48 w-48 overflow-hidden rounded-full bg-gradient-to-tr from-accent via-accent-blue to-accent-violet p-[3px]">
                  <img
                    src={heroPhoto}
                    alt={profile.name}
                    className="h-full w-full rounded-full object-cover object-top"
                  />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-lg font-bold text-white">{profile.name}</p>
                  <p className="mt-1 text-sm text-accent">{profile.role}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    {profile.company}
                  </p>
                </div>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400 transition-colors hover:text-accent"
                >
                  <FiLinkedin />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#journey"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-accent"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <FiArrowDown className="text-2xl" />
        </motion.span>
      </a>
    </section>
  );
}
