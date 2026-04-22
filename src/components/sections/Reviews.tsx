import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  { name: "James W.", role: "Regular since 2019", rating: 5, text: "Marco doesn't just cut hair — he reads your face, your style, your mood. Best fade I've had in 15 years. Worth every penny." },
  { name: "Daniel K.", role: "First visit", rating: 5, text: "Walked in skeptical, walked out planning my next four appointments. The hot towel shave alone is a religious experience." },
  { name: "Anthony R.", role: "Wedding party", rating: 5, text: "Did all the groomsmen the morning of my wedding. Calm, professional, finished us all on time. A pro." },
  { name: "Marcus L.", role: "Monthly client", rating: 5, text: "I've followed Marco across two shops. The man's an artist. Booking online keeps my schedule locked in." },
  { name: "Oliver P.", role: "Beard guy", rating: 5, text: "My beard's never looked this intentional. He shaped it in a way that finally suits my jaw. Game changer." },
];

export const Reviews = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIdx((i) => (i + 1) % reviews.length);
  const prev = () => setIdx((i) => (i - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-28 bg-secondary/40 relative overflow-hidden bg-grain">
      <div className="container relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="font-condensed text-sm uppercase tracking-[0.4em] text-primary mb-3">— Word on the street</div>
            <h2 className="font-display text-5xl lg:text-6xl uppercase mb-6 leading-[0.9]">
              What they're<br/><span className="text-primary">saying.</span>
            </h2>
            <div className="flex items-center justify-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary" />
              ))}
              <span className="ml-3 font-condensed text-base tracking-wider uppercase text-muted-foreground">4.9 / 5 — 312 reviews</span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative max-w-3xl mx-auto border-2 border-foreground/15 bg-background p-10 lg:p-14">
            <Quote className="absolute -top-6 -left-2 h-16 w-16 text-primary fill-primary" />

            <div className="min-h-[260px] grid place-items-center">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 p-10 lg:p-14 transition-all duration-700 ${
                    i === idx ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
                  }`}
                >
                  <div className="text-center">
                    <p className="font-condensed text-2xl lg:text-3xl leading-snug uppercase tracking-wide mb-8">
                      "{r.text}"
                    </p>
                    <div className="font-display text-lg uppercase tracking-wider">{r.name}</div>
                    <div className="font-condensed text-sm text-primary tracking-[0.25em] uppercase mt-1">{r.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-10 relative z-10">
              <button
                onClick={prev}
                className="h-11 w-11 grid place-items-center border-2 border-foreground/20 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`h-1.5 transition-all duration-500 ${
                      i === idx ? "w-10 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="h-11 w-11 grid place-items-center border-2 border-foreground/20 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
