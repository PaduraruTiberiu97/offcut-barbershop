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
  { src: w1, label: "Skin Fade", category: "Cut" },
  { src: w2, label: "Beard Sculpt", category: "Beard" },
  { src: w3, label: "Hot Towel Shave", category: "Shave" },
  { src: w4, label: "Textured Crop", category: "Cut" },
  { src: w5, label: "Classic Pompadour", category: "Cut" },
  { src: w6, label: "The Tools", category: "Studio" },
];

export const Work = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="work" className="py-28">
      <div className="container">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Portfolio</div>
              <h2 className="font-serif text-4xl lg:text-5xl">Recent work</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              A glimpse into the chair. Hover, click, and see the craft up close.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          {works.map((w, i) => (
            <Reveal key={i} delay={i * 70}>
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden bg-secondary aspect-[4/5]"
              >
                <img
                  src={w.src}
                  alt={w.label}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-primary mb-1">{w.category}</div>
                  <div className="font-serif text-xl">{w.label}</div>
                </div>
                <div className="absolute top-4 right-4 h-8 w-8 rounded-full border border-primary/40 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-primary text-xs">+</span>
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
            className="absolute top-6 right-6 h-12 w-12 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors"
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
