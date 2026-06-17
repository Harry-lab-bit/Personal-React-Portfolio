import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Reveal from "./Reveal";
import { journey } from "../data";

const years = [...new Set(journey.map((j) => j.year))].sort();

export default function JourneyTimeline() {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = journey.filter((j) => j.year === selectedYear);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    emblaApi?.reInit();
    setActiveIndex(0);
  }, [selectedYear, emblaApi]);

  return (
    <section id="journey" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-4 text-center">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
            The journey
          </span>
        </Reveal>
        <Reveal delay={0.05} className="mb-6 text-center">
          <h2 className="section-title">
            Pick a year. <span className="gradient-text">See what happened.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            From student to full stack developer — tap through the milestones that shaped the build.
          </p>
        </Reveal>

        {/* Year tabs */}
        <Reveal delay={0.1}>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  selectedYear === year
                    ? "bg-gradient-to-r from-accent to-accent-violet text-bg shadow-glow"
                    : "glass text-slate-400 hover:text-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Carousel */}
        <Reveal delay={0.15}>
          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {filtered.map((entry) => (
                  <div
                    key={`${entry.year}-${entry.category}`}
                    className="min-w-0 flex-[0_0_100%] px-1"
                  >
                    <div className="glow-card mx-auto max-w-2xl p-8 md:p-10">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full glass px-3 py-1 text-xs font-mono uppercase tracking-wider text-accent">
                          {entry.category}
                        </span>
                        <span className="font-mono text-xs text-slate-500">
                          {entry.year}
                        </span>
                      </div>
                      <h3 className="mt-5 text-2xl font-bold text-white md:text-3xl">
                        {entry.title}
                      </h3>
                      <p className="mt-3 text-slate-400">{entry.summary}</p>
                      <ul className="mt-6 space-y-3">
                        {entry.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-3 text-sm text-slate-300"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {filtered.length > 1 && (
              <div className="mt-8 flex items-center justify-center gap-6">
                <button
                  onClick={scrollPrev}
                  className="grid h-10 w-10 place-items-center rounded-full glass text-slate-300 transition-colors hover:text-accent"
                  aria-label="Previous"
                >
                  <FiChevronLeft />
                </button>
                <span className="font-mono text-sm text-slate-500">
                  ← swipe → {activeIndex + 1} / {filtered.length}
                </span>
                <button
                  onClick={scrollNext}
                  className="grid h-10 w-10 place-items-center rounded-full glass text-slate-300 transition-colors hover:text-accent"
                  aria-label="Next"
                >
                  <FiChevronRight />
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
