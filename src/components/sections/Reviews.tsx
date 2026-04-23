import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  { name: "Andrei P.", role: "Client din 2019", text: "Denis nu doar tunde — îți citește fața, stilul, dispoziția. Cel mai curat fade pe care l-am avut vreodată.", color: "bg-primary text-primary-foreground" },
  { name: "Vlad M.", role: "Prima vizită", text: "Am intrat sceptic, am ieșit cu următoarele patru programări făcute. Rasul cu prosop cald e altă treabă.", color: "bg-secondary" },
  { name: "Cristi R.", role: "Cavaler de onoare", text: "Mi-a tuns toți băieții în dimineața nunții. Calm, profi, ne-a terminat la fix. Respect.", color: "bg-accent" },
  { name: "Mihai L.", role: "Lunar la scaun", text: "L-am urmat pe Denis prin două shop-uri. Omul e artist. Programările online îmi salvează viața.", color: "bg-[hsl(var(--pop-yellow))]" },
  { name: "Tudor I.", role: "Băiat cu barbă", text: "Barba mea n-a arătat niciodată mai bine. A conturat-o exact cum trebuie. Game changer.", color: "bg-[hsl(var(--pop-purple))] text-primary-foreground" },
];

export const Reviews = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIdx((i) => (i + 1) % reviews.length);
  const prev = () => setIdx((i) => (i - 1 + reviews.length) % reviews.length);

  const current = reviews[idx];

  return (
    <section id="reviews" className="py-28 bg-background relative overflow-hidden">
      <div className="container relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block bg-secondary ink-outline rounded-full px-4 py-1 font-display uppercase text-xs tracking-widest mb-4">
              Vorba din cartier
            </div>
            <h2 className="font-display text-5xl lg:text-7xl uppercase mb-6 leading-[0.9]">
              Ce zic<br/><span className="text-primary text-shadow-pop">băieții.</span>
            </h2>
            <div className="inline-flex items-center gap-2 bg-foreground text-background ink-outline rounded-full px-5 py-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[hsl(var(--pop-yellow))] text-[hsl(var(--pop-yellow))]" />
              ))}
              <span className="font-condensed text-sm tracking-wider uppercase ml-2">4.9 / 5 — 312 review-uri</span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative max-w-3xl mx-auto">
            <div className={`relative ${current.color} ink-outline rounded-3xl shadow-pop-lg p-10 lg:p-14 transition-colors duration-500`}>
              <Quote className="absolute -top-6 -left-6 h-16 w-16 fill-foreground text-foreground" />

              <div className="text-center min-h-[220px] flex flex-col justify-center">
                <p className="font-display text-2xl lg:text-3xl leading-snug uppercase mb-8">
                  "{current.text}"
                </p>
                <div className="font-display text-lg uppercase tracking-wider">{current.name}</div>
                <div className="font-condensed text-sm tracking-[0.25em] uppercase mt-1 opacity-80">{current.role}</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="h-12 w-12 grid place-items-center bg-background ink-outline rounded-full shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                aria-label="Înapoi"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`h-3 border-2 border-foreground transition-all duration-300 rounded-full ${
                      i === idx ? "w-10 bg-primary" : "w-3 bg-background"
                    }`}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="h-12 w-12 grid place-items-center bg-background ink-outline rounded-full shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                aria-label="Înainte"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
