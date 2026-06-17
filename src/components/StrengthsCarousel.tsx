import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Reveal from "./Reveal";
import { strengths } from "../data";

export default function StrengthsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

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

  const modalStrength = modalIndex !== null ? strengths[modalIndex] : null;

  return (
    <section id="strengths" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-4 text-center">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
            The proof
          </span>
        </Reveal>
        <Reveal delay={0.05} className="mb-10 text-center">
          <h2 className="section-title">
            {strengths.length} strengths. <span className="gradient-text">Zero shortcuts.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Everything below is documented and real. Swipe through them, then open any one for the full breakdown.
          </p>
        </Reveal>

        {/* Number pills */}
        <Reveal delay={0.1}>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {strengths.map((s, i) => (
              <button
                key={s.id}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`grid h-9 w-9 place-items-center rounded-full text-sm font-bold transition-all ${
                  i === activeIndex
                    ? "bg-gradient-to-r from-accent to-accent-violet text-bg shadow-glow"
                    : "glass text-slate-400 hover:text-white"
                }`}
              >
                {s.id}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Carousel */}
        <Reveal delay={0.15}>
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {strengths.map((s, i) => (
                <div key={s.id} className="min-w-0 flex-[0_0_100%] px-2 md:flex-[0_0_80%] lg:flex-[0_0_70%]">
                  <div
                    className={`glow-card mx-auto p-8 transition-opacity duration-300 md:p-10 ${
                      i === activeIndex ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <span className="font-mono text-sm text-accent">
                      {String(s.id).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                      {s.title}
                    </h3>
                    <div className="mt-6 space-y-4">
                      {s.items.slice(0, 2).map((item) => (
                        <div key={item.heading}>
                          <h4 className="font-semibold text-white">{item.heading}</h4>
                          <p className="mt-1 text-sm text-slate-400">{item.body}</p>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setModalIndex(i)}
                      className="mt-6 text-sm font-semibold text-accent transition-colors hover:text-accent-violet"
                    >
                      See the full breakdown →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={scrollPrev}
              className="rounded-full glass px-5 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-accent"
            >
              Prev
            </button>
            <span className="font-mono text-sm text-slate-500">
              ← swipe → {activeIndex + 1} / {strengths.length}
            </span>
            <button
              onClick={scrollNext}
              className="rounded-full glass px-5 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-accent"
            >
              Next
            </button>
          </div>
        </Reveal>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalStrength && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
            onClick={() => setModalIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl glass p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalIndex(null)}
                className="absolute right-6 top-6 text-2xl text-slate-400 hover:text-white"
                aria-label="Close"
              >
                <FiX />
              </button>
              <span className="font-mono text-sm text-accent">
                {String(modalStrength.id).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-3xl font-bold text-white">
                {modalStrength.title}
              </h3>
              <div className="mt-8 space-y-6">
                {modalStrength.items.map((item) => (
                  <div key={item.heading}>
                    <h4 className="font-semibold text-white">{item.heading}</h4>
                    <p className="mt-2 text-slate-400">{item.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
