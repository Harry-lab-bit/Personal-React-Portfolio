import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { FiLinkedin } from "react-icons/fi";
import { navLinks, profile } from "../data";
import CalendlyButton from "./CalendlyButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-bg/70 backdrop-blur-xl border-b border-white/10 py-3"
          : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#home" className="group flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight">
            {profile.name.split(" ")[0]}
            <span className="gradient-text">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="ml-1 flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              <FiLinkedin />
              LinkedIn
            </a>
          </li>
          <li>
            <CalendlyButton
              text="Book a call"
              className="ml-2 rounded-full bg-gradient-to-r from-accent to-accent-violet px-5 py-2 text-sm font-semibold text-bg shadow-glow transition-transform hover:scale-105"
            />
          </li>
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mx-6 mt-3 overflow-hidden rounded-2xl glass md:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 px-6 py-3 text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="px-6 py-3">
              <CalendlyButton
                text="Book a 30-min call"
                className="w-full rounded-full bg-gradient-to-r from-accent to-accent-violet px-5 py-2.5 text-sm font-semibold text-bg shadow-glow"
              />
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
