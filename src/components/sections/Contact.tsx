import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, Clock, ArrowRight } from "lucide-react";

export const Contact = ({ bookingUrl }: { bookingUrl: string }) => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="container relative">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Book Your Chair</div>
            <h2 className="font-serif text-5xl lg:text-7xl mb-6 leading-[0.95]">
              Ready for your <em className="text-gradient-gold not-italic">best cut</em> yet?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Pick a time that works for you. Confirmation in seconds — no phone tag, no waiting.
            </p>
            <Button asChild variant="gold" size="lg" className="text-base px-10 py-7">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Schedule appointment <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-5xl mx-auto">
          {[
            { icon: MapPin, label: "Location", value: "142 Maple Street\nBrooklyn, NY 11201" },
            { icon: Clock, label: "Hours", value: "Tue – Sat\n9:00 AM – 7:00 PM" },
            { icon: Phone, label: "Call", value: "+1 (555) 248-3920", href: "tel:+15552483920" },
            { icon: Instagram, label: "Follow", value: "@marco.thebarber", href: "https://instagram.com" },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <a
                href={c.href || "#"}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block bg-background p-8 h-full hover:bg-card transition-colors group"
              >
                <c.icon className="h-5 w-5 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{c.label}</div>
                <div className="font-serif text-lg whitespace-pre-line">{c.value}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
