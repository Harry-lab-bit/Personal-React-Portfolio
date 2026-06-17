import { marqueeSkills } from "../data";

export default function SkillsMarquee() {
  const items = marqueeSkills.map((s) => `${s} ✦`);
  const track = [...items, ...items];

  return (
    <section className="relative border-y border-white/10 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={i}
            className="mx-6 font-mono text-sm tracking-[0.2em] text-slate-400"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
