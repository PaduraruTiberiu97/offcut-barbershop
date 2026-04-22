import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ArrowRight, AtSign } from "lucide-react";

const cards = [
  { icon: MapPin, label: "Location", value: "142 Maple Street\nBrooklyn, NY", color: "bg-primary text-primary-foreground" },
  { icon: Clock, label: "Hours", value: "Tue – Sat\n9:00 – 19:00", color: "bg-secondary" },
  { icon: Phone, label: "Call", value: "+1 (555) 248-3920", href: "tel:+15552483920", color: "bg-accent" },
  { icon: AtSign, label: "Follow", value: "@marco.thebarber", href: "https://instagram.com", color: "bg-[hsl(var(--pop-yellow))]" },
];

export const Contact = ({ bookingUrl }: { bookingUrl: string }) => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-halftone">
      <div className="container relative">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-foreground text-background ink-outline rounded-full px-4 py-1 font-display uppercase text-xs tracking-widest mb-4">
              Book your chair
            </div>
            <h2 className="font-display text-6xl lg:text-8xl uppercase leading-[0.85] mb-8">
              Pull up.<br/>Get <span className="text-primary text-shadow-pop">right.</span>
            </h2>
            <p className="font-condensed text-xl uppercase tracking-wider text-foreground/80 max-w-xl mx-auto mb-10">
              Pick a time online. Confirmation in seconds. No phone tag.
            </p>
            <Button asChild variant="gold" size="lg" className="text-base px-10 py-7">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Schedule appointment <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 90}>
              <a
                href={c.href || "#"}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`block ${c.color} ink-outline rounded-2xl p-6 shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`}
              >
                <div className="h-12 w-12 grid place-items-center bg-background ink-outline rounded-xl mb-4">
                  <c.icon className="h-5 w-5 text-foreground" />
                </div>
                <div className="font-condensed text-xs uppercase tracking-[0.25em] mb-2 opacity-80">{c.label}</div>
                <div className="font-display text-base uppercase whitespace-pre-line leading-tight">{c.value}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
