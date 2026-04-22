import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ArrowRight, AtSign } from "lucide-react";

export const Contact = ({ bookingUrl }: { bookingUrl: string }) => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-grain">
      <div className="container relative">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="font-condensed text-sm uppercase tracking-[0.4em] text-primary mb-3">— Book your chair</div>
            <h2 className="font-display text-6xl lg:text-8xl uppercase leading-[0.85] mb-8">
              Pull up.<br/>Get <span className="text-primary">right.</span>
            </h2>
            <p className="font-condensed text-xl uppercase tracking-wider text-muted-foreground max-w-xl mx-auto mb-10">
              Pick a time online. Confirmation in seconds. No phone tag.
            </p>
            <Button asChild variant="gold" size="lg" className="text-base px-12 py-7">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Schedule appointment <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-5xl mx-auto border-2 border-border">
          {[
            { icon: MapPin, label: "Location", value: "142 Maple Street\nBrooklyn, NY 11201" },
            { icon: Clock, label: "Hours", value: "Tue – Sat\n9:00 AM – 7:00 PM" },
            { icon: Phone, label: "Call", value: "+1 (555) 248-3920", href: "tel:+15552483920" },
            { icon: AtSign, label: "Follow", value: "@marco.thebarber", href: "https://instagram.com" },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 90}>
              <a
                href={c.href || "#"}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block bg-background p-8 h-full hover:bg-primary group transition-colors"
              >
                <c.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground mb-4 transition-colors" />
                <div className="font-condensed text-xs uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary-foreground/80 mb-2 transition-colors">{c.label}</div>
                <div className="font-display text-base uppercase whitespace-pre-line group-hover:text-primary-foreground transition-colors">{c.value}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
