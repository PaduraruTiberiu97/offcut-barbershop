import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const services = [
  { name: "Signature Cut", price: "$45", duration: "45 min", desc: "Consultation, precision cut, hot towel finish, styling." },
  { name: "Beard Sculpt", price: "$30", duration: "30 min", desc: "Shape, line-up, hot towel, premium beard oil treatment." },
  { name: "The Full Service", price: "$70", duration: "75 min", desc: "Cut + beard + straight razor neck shave + scalp massage." },
  { name: "Classic Shave", price: "$35", duration: "40 min", desc: "Traditional straight razor shave with hot lather ritual." },
  { name: "Father & Son", price: "$65", duration: "60 min", desc: "Two cuts, side by side. A timeless tradition." },
  { name: "Express Trim", price: "$25", duration: "20 min", desc: "Quick clean-up between visits to keep you sharp." },
];

export const Services = ({ bookingUrl }: { bookingUrl: string }) => {
  return (
    <section id="services" className="py-28 bg-secondary/30 relative">
      <div className="container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Services</div>
            <h2 className="font-serif text-4xl lg:text-5xl mb-4">The menu</h2>
            <p className="text-muted-foreground">
              Honest pricing. Premium products. Every service includes consultation and hot towel.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <div className="group bg-background p-8 h-full hover:bg-card transition-all duration-500 cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 left-0 h-px w-0 bg-gradient-gold group-hover:w-full transition-all duration-700" />
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl">{s.name}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-serif text-3xl text-gradient-gold">{s.price}</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{s.duration}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-14">
            <Button asChild variant="gold" size="lg">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Reserve your chair</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
