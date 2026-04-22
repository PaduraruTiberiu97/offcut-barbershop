import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { X } from "lucide-react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

const works = [
  { src: w1, label: "The Pole", category: "Out front" },
  { src: w2, label: "The Throne", category: "The chair" },
  { src: w3, label: "The Kit", category: "Tools" },
  { src: w4, label: "Open Late", category: "Street" },
  { src: w5, label: "Clean Fade", category: "In progress" },
  { src: w6, label: "House Tonics", category: "Shelf" },
];

export const Work = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="work" className="py-28 bg-grain">
      <div className="container">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="font-condensed text-sm uppercase tracking-[0.4em] text-primary mb-3">— The Shop</div>
              <h2 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9]">
                Inside<br/>the <span className="text-primary">shop.</span>
              </h2>
            </div>
            <p className="font-condensed text-xl uppercase tracking-wider text-muted-foreground max-w-sm">
              Brick walls. Buzzing clippers. A little neon. Tap any frame.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
          {works.map((w, i) => (
            <Reveal key={i} delay={i * 60}>
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden bg-secondary aspect-[4/5]"
              >
                <img
                  src={w.src}
                  alt={w.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                  <div className="font-condensed text-[11px] uppercase tracking-[0.3em] text-primary mb-1">{w.category}</div>
                  <div className="font-display text-xl uppercase">{w.label}</div>
                </div>
                <div className="absolute top-3 right-3 h-8 w-8 grid place-items-center bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                  +
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md grid place-items-center p-4 animate-in fade-in duration-300"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 h-12 w-12 grid place-items-center bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X />
          </button>
          <img
            src={works[active].src}
            alt={works[active].label}
            className="max-h-[85vh] max-w-full object-contain shadow-elegant"
          />
        </div>
      )}
    </section>
  );
};
