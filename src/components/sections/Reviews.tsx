import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  { name: "James W.", role: "Regular since 2019", rating: 5, text: "Marco doesn't just cut hair — he reads your face, your style, your mood. Best fade I've had in 15 years of looking. Worth every penny." },
  { name: "Daniel K.", role: "First visit", rating: 5, text: "Walked in skeptical, walked out planning my next four appointments. The hot towel shave alone is a religious experience." },
  { name: "Anthony R.", role: "Wedding party", rating: 5, text: "Did all the groomsmen the morning of my wedding. Calm, professional, and somehow finished us all on time. A pro." },
  { name: "Marcus L.", role: "Monthly client", rating: 5, text: "I've followed Marco across two shops. The man is an artist. Booking system makes it effortless to keep my schedule locked in." },
  { name: "Oliver P.", role: "Beard guy", rating: 5, text: "My beard has never looked this intentional. He shaped it in a way that finally suits my jaw. Game changer." },
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
    <section id="reviews" className="py-28 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="container relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Reviews</div>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">In their words</h2>
            <div className="flex items-center justify-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary" />
              ))}
              <span className="ml-3 text-sm text-muted-foreground">4.9 / 5 — based on 312 reviews</span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative max-w-3xl mx-auto">
            <Quote className="absolute -top-8 -left-2 h-20 w-20 text-primary/10" />

            <div className="min-h-[280px] grid place-items-center">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-700 ${
                    i === idx ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
                  }`}
                >
                  <div className="text-center px-4">
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(r.rating)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="font-serif text-2xl lg:text-3xl leading-relaxed italic mb-8">
                      "{r.text}"
                    </p>
                    <div className="font-medium">{r.name}</div>
                    <div className="text-sm text-muted-foreground tracking-wide">{r.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prev}
                className="h-11 w-11 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`h-1.5 transition-all duration-500 ${
                      i === idx ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="h-11 w-11 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Next review"
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
