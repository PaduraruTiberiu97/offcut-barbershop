import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const services = [
  { name: "Signature Cut", price: "$45", duration: "45 min", desc: "Consultation, precision cut, hot towel finish, styling." },
  { name: "Beard Sculpt", price: "$30", duration: "30 min", desc: "Shape, line-up, hot towel, premium beard oil." },
  { name: "The Full Service", price: "$70", duration: "75 min", desc: "Cut + beard + straight razor + scalp massage." },
  { name: "Classic Shave", price: "$35", duration: "40 min", desc: "Traditional straight razor with hot lather ritual." },
  { name: "Father & Son", price: "$65", duration: "60 min", desc: "Two cuts, side by side. Pass it down." },
  { name: "Express Trim", price: "$25", duration: "20 min", desc: "Quick clean-up. Stay sharp between visits." },
];

export const Services = ({ bookingUrl }: { bookingUrl: string }) => {
  return (
    <section id="services" className="py-28 bg-secondary/40 relative bg-grain">
      <div className="container">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="font-condensed text-sm uppercase tracking-[0.4em] text-primary mb-3">— The Menu</div>
              <h2 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9]">
                Pick your<br/><span className="text-primary">poison.</span>
              </h2>
            </div>
            <p className="font-condensed text-xl uppercase tracking-wider text-muted-foreground max-w-xs">
              Honest prices. No upsells. Hot towel on the house.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 70}>
              <div className="group bg-background p-8 h-full hover:bg-primary transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display text-2xl uppercase tracking-wide group-hover:text-primary-foreground transition-colors">{s.name}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex items-baseline gap-3 mb-4 border-t-2 border-foreground/10 group-hover:border-primary-foreground/30 pt-4">
                  <span className="font-display text-4xl text-primary group-hover:text-primary-foreground transition-colors">{s.price}</span>
                  <span className="font-condensed text-sm uppercase tracking-widest text-muted-foreground group-hover:text-primary-foreground/80">{s.duration}</span>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-14">
            <Button asChild variant="gold" size="lg">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Reserve the chair</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
