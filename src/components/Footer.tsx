import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built with React +
          Tailwind.
        </span>
        <span className="font-mono">
          Designed & developed with <span className="text-accent">♥</span>
        </span>
      </div>
    </footer>
  );
}
