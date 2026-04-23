import heroImg from "@/assets/hero-shop.jpg";
import denisImg from "@/assets/denis-portrait.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Zap } from "lucide-react";

export const Hero = ({ bookingUrl }: { bookingUrl: string }) => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28 pb-20 bg-halftone">
      {/* Floating chunky shapes */}
      <div className="pointer-events-none absolute -top-10 -left-10 w-48 h-48 rounded-full bg-secondary border-[3px] border-foreground" />
      <div className="pointer-events-none absolute top-40 right-10 w-24 h-24 rounded-full bg-accent border-[3px] border-foreground animate-float-slow" />
      <div className="pointer-events-none absolute bottom-40 left-1/3 w-16 h-16 rotate-12 bg-[hsl(var(--pop-yellow))] border-[3px] border-foreground" />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 font-display uppercase text-xs tracking-widest rounded-full border-[3px] border-foreground">
            <Zap className="h-4 w-4 fill-[hsl(var(--pop-yellow))] text-[hsl(var(--pop-yellow))]" />
            Un scaun · Un barber · Din 2014
          </div>

          <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] uppercase">
            <span className="block text-shadow-pop">Tuns</span>
            <span className="block text-primary text-shadow-pop">Curat.</span>
            <span className="block text-stroke-ink">Mișcări precise.</span>
          </h1>

          <p className="font-condensed text-xl tracking-wide text-foreground max-w-xl">
            Un scaun. Un barber.{" "}
            <span className="bg-[hsl(var(--pop-yellow))] px-2 border-2 border-foreground">Zero compromisuri.</span>{" "}
            Denis la Offcut — barberul tau din cartier.
          </p>
          <p className="font-condensed text-sm uppercase tracking-[0.2em] text-foreground/60 -mt-4">
            * Programări disponibile și la ceilalți barberi din echipă
          </p>

          <div className="flex flex-wrap gap-5 pt-2">
            <Button asChild variant="gold" size="lg">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Prinde-ți loc <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="goldOutline" size="lg">
              <a href="#work">Vezi shop-ul</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-8 max-w-xl">
            {[
              { v: "10+", l: "Ani pe brici", c: "bg-primary text-primary-foreground" },
              { v: "2.5K", l: "Tunsori", c: "bg-secondary text-secondary-foreground" },
              { v: "4.9★", l: "Rating", c: "bg-accent text-accent-foreground" },
            ].map((s) => (
              <div key={s.l} className={`${s.c} ink-outline rounded-xl p-4 shadow-pop`}>
                <div className="font-display text-3xl">{s.v}</div>
                <div className="font-condensed text-[11px] uppercase tracking-widest mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero illustration card */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden ink-outline shadow-pop-lg bg-card rotate-1">
            <img
              src={heroImg}
              alt="Offcut Barbershop — shop-ul lui Denis"
              width={1080}
              height={1600}
              className="w-full h-[60vh] lg:h-[72vh] object-cover"
            />
          </div>
          {/* Denis overlay portrait */}
          <div className="absolute -bottom-6 -left-6 w-[42%] max-w-[210px] rotate-[-4deg] animate-float-slow">
            <div className="relative ink-outline rounded-2xl overflow-hidden shadow-pop-lg bg-card">
              <img src={denisImg} alt="Denis — barber la Offcut" className="w-full h-auto object-cover block" />
            </div>
            <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground ink-outline rounded-full px-3 py-1 font-display uppercase text-xs shadow-pop rotate-6">
              Denis
            </div>
          </div>
          {/* Sticker */}
          <div className="absolute -top-6 -left-6 bg-[hsl(var(--pop-yellow))] ink-outline rounded-full p-5 shadow-pop animate-float-slow">
            <Scissors className="h-8 w-8" />
          </div>
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground ink-outline rounded-2xl px-4 py-2 font-display uppercase text-sm shadow-pop -rotate-6">
            Locuri limitate!
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="absolute bottom-0 inset-x-0 bg-foreground text-background py-6 overflow-hidden border-y-[3px] border-foreground flex items-center">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-xl uppercase">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                Tuns curat <span className="text-primary">✦</span>
                Prosop fierbinte <span className="text-secondary">✦</span>
                Programări online <span className="text-accent">✦</span>
                Luni–Duminică <span className="text-[hsl(var(--pop-yellow))]">✦</span>
                Vibe misto <span className="text-primary">✦</span>
              </span>
            ))}
        </div>
      </div>
    </section>
  );
};
