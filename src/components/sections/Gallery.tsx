import { Reveal } from "@/components/Reveal";
import c1 from "@/assets/client-1.jpg";
import c2 from "@/assets/client-2.jpg";
import c3 from "@/assets/client-3.jpg";
import c4 from "@/assets/client-4.jpg";
import c5 from "@/assets/client-5.jpg";
import c6 from "@/assets/client-6.jpg";

const cuts = [
  { src: c1, label: "Fade Texturat", tag: "Skinfade", color: "bg-primary text-primary-foreground", tilt: "-rotate-2" },
  { src: c2, label: "Brad cu Barbă", tag: "Tuns + Barbă", color: "bg-secondary", tilt: "rotate-1" },
  { src: c3, label: "Crop Modern", tag: "Tuns Modern", color: "bg-accent", tilt: "rotate-2" },
  { src: c4, label: "Slick Back", tag: "Clasic", color: "bg-[hsl(var(--pop-yellow))]", tilt: "-rotate-1" },
  { src: c5, label: "Buzz + Linie", tag: "Line Up", color: "bg-[hsl(var(--pop-purple))]", tilt: "rotate-2" },
  { src: c6, label: "Quiff cu Fade", tag: "Signature", color: "bg-[hsl(var(--pop-orange))]", tilt: "-rotate-2" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-28 bg-halftone relative overflow-hidden">
      <div className="container relative">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-block bg-foreground text-background ink-outline rounded-full px-4 py-1 font-display uppercase text-xs tracking-widest mb-4">
                Galerie
              </div>
              <h2 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9]">
                Galeria<br/>de <span className="text-primary text-shadow-pop">artă.</span>
              </h2>
            </div>
            <p className="font-condensed text-xl uppercase tracking-wider text-foreground/70 max-w-sm">
              Tunsori reale, oameni reali. Fiecare scaun e o pictură.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {cuts.map((c, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className={`group relative ${c.color} ink-outline rounded-2xl shadow-pop ${c.tilt} hover:rotate-0 hover:-translate-y-1 transition-all overflow-hidden`}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.src}
                    alt={c.label}
                    loading="lazy"
                    width={768}
                    height={960}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-background border-t-[3px] border-foreground p-4">
                  <div className="font-condensed text-[11px] uppercase tracking-[0.25em] text-primary mb-1">{c.tag}</div>
                  <div className="font-display text-xl uppercase">{c.label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
