import heroBarber from "@/assets/hero-barber.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export const Hero = ({ bookingUrl }: { bookingUrl: string }) => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-24 bg-radial-glow">
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)] py-12">
        {/* Text */}
        <div className="relative z-10 space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-primary">
            <Star className="h-3 w-3 fill-primary" /> Master Barber · Est. 2014
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            Sharp cuts.
            <br />
            <span className="italic text-gradient-gold">Timeless</span> style.
          </h1>

          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            I'm Marco — a solo barber crafting confident, custom looks for the modern gentleman.
            Precision cuts, classic shaves, no compromises.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild variant="gold" size="lg">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Book an appointment <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="goldOutline" size="lg">
              <a href="#work">View my work</a>
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-border/50">
            <div>
              <div className="font-serif text-3xl text-primary">10+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-primary">2.5k</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Cuts Delivered</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-primary">4.9★</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Avg. Rating</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-in fade-in zoom-in-95 duration-1000">
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
          <div className="relative overflow-hidden shadow-elegant">
            <img
              src={heroBarber}
              alt="Marco, master barber"
              width={1080}
              height={1600}
              className="w-full h-[70vh] lg:h-[80vh] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="font-serif text-2xl">Marco Rossi</div>
                <div className="text-xs uppercase tracking-[0.25em] text-primary mt-1">@ The Gentleman's Chair</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
};
