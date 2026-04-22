import heroImg from "@/assets/hero-tools.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = ({ bookingUrl }: { bookingUrl: string }) => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-24 bg-grain">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Barber tools on a worn counter"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>

      {/* Diagonal red stripe accent */}
      <div className="absolute top-0 right-0 w-[40%] h-2 bg-primary" />
      <div className="absolute top-2 right-0 w-[25%] h-1 bg-foreground/80" />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-6rem)] py-12">
        <div className="lg:col-span-9 space-y-8">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-primary font-bold">
            <span className="h-px w-10 bg-primary" /> Solo Barber · Est. 2014
          </div>

          <h1 className="font-display text-[clamp(3rem,11vw,9rem)] leading-[0.85] uppercase">
            Cut <span className="text-primary">sharp.</span>
            <br />
            Live <span className="text-stroke">loud.</span>
          </h1>

          <p className="font-condensed text-2xl tracking-wide text-muted-foreground max-w-xl uppercase">
            One chair. One barber. Zero shortcuts.<br/>
            Marco — your neighborhood blade since '14.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild variant="gold" size="lg">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Book the chair <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="goldOutline" size="lg">
              <a href="#work">See the work</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-10 max-w-xl border-t-2 border-foreground/20">
            <div className="pt-6">
              <div className="font-display text-4xl text-primary">10+</div>
              <div className="font-condensed text-xs uppercase tracking-widest text-muted-foreground mt-1">Years in</div>
            </div>
            <div className="pt-6">
              <div className="font-display text-4xl text-primary">2.5K</div>
              <div className="font-condensed text-xs uppercase tracking-widest text-muted-foreground mt-1">Cuts dropped</div>
            </div>
            <div className="pt-6">
              <div className="font-display text-4xl text-primary">4.9</div>
              <div className="font-condensed text-xs uppercase tracking-widest text-muted-foreground mt-1">Star avg.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 inset-x-0 bg-primary text-primary-foreground py-3 overflow-hidden border-y-2 border-foreground/10">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-condensed text-xl tracking-[0.3em] uppercase">
          {Array(8).fill(0).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              Walk-ins limited <span className="text-primary-foreground/60">✦</span>
              Solo chair <span className="text-primary-foreground/60">✦</span>
              Book online <span className="text-primary-foreground/60">✦</span>
              Open Tue–Sat <span className="text-primary-foreground/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
