import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import { metrics } from "../data";

export default function Metrics() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="text-center">
                <div className="text-4xl font-extrabold gradient-text md:text-5xl">
                  <AnimatedCounter value={m.value} suffix={m.suffix} />
                </div>
                <p className="mt-2 text-sm text-slate-400">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
