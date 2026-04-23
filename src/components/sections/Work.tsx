import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { X } from "lucide-react";
import s1 from "@/assets/shop-1.png";
import s2 from "@/assets/shop-2.png";
import s3 from "@/assets/shop-3.png";
import s4 from "@/assets/shop-4.png";
import s5 from "@/assets/shop-5.png";
import s6 from "@/assets/shop-6.png";
import s7 from "@/assets/shop-7.png";

const works = [
  { src: s5, label: "Mario pe perete", category: "Mural", tilt: "-rotate-2", color: "bg-secondary" },
  { src: s3, label: "Scaunul lui Rick", category: "Locul", tilt: "rotate-1", color: "bg-primary" },
  { src: s7, label: "Level Up", category: "Vibe", tilt: "rotate-2", color: "bg-accent" },
  { src: s2, label: "Sculele", category: "Trusa", tilt: "-rotate-1", color: "bg-[hsl(var(--pop-yellow))]" },
  { src: s6, label: "Offcut Wall", category: "Graffiti", tilt: "rotate-2", color: "bg-[hsl(var(--pop-purple))]" },
  { src: s1, label: "Spirit", category: "Colțul", tilt: "-rotate-2", color: "bg-[hsl(var(--pop-orange))]" },
  { src: s4, label: "Barber", category: "Perete", tilt: "rotate-1", color: "bg-secondary" },
];

export const Work = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="work" className="py-28 bg-background">
      <div className="container">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-block bg-primary text-primary-foreground ink-outline rounded-full px-4 py-1 font-display uppercase text-xs tracking-widest mb-4">
                Shop-ul
              </div>
              <h2 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9]">
                Pe<br/>din<span className="text-primary text-shadow-pop"> ăuntru.</span>
              </h2>
            </div>
            <p className="font-condensed text-xl uppercase tracking-wider text-foreground/70 max-w-sm">
              Graffiti pe pereți. Hexagoane pe tavan. Rick & Morty te privesc cum te tunzi.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {works.map((w, i) => (
            <Reveal key={i} delay={i * 60}>
              <button
                onClick={() => setActive(i)}
                className={`group relative block w-full overflow-hidden ${w.color} ink-outline rounded-2xl shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all ${w.tilt} hover:rotate-0`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={w.src}
                    alt={w.label}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-background border-t-[3px] border-foreground p-4 text-left">
                  <div className="font-condensed text-[11px] uppercase tracking-[0.25em] text-primary mb-1">{w.category}</div>
                  <div className="font-display text-xl uppercase">{w.label}</div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-md grid place-items-center p-4 animate-in fade-in duration-300"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 h-12 w-12 grid place-items-center bg-primary text-primary-foreground ink-outline rounded-full shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            onClick={() => setActive(null)}
            aria-label="Închide"
          >
            <X />
          </button>
          <img
            src={works[active].src}
            alt={works[active].label}
            className="max-h-[85vh] max-w-full object-contain ink-outline rounded-2xl bg-background"
          />
        </div>
      )}
    </section>
  );
};
