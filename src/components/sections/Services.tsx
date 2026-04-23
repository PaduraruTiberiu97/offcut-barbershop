import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const services = [
  { name: "Tuns Signature", price: "90 lei", duration: "45 min", desc: "Discuție, tunsoare la milimetru, prosop fierbinte și styling.", color: "bg-primary text-primary-foreground" },
  { name: "Aranjat Barbă", price: "60 lei", duration: "30 min", desc: "Conturare, linie clară, prosop cald, ulei de barbă.", color: "bg-secondary" },
  { name: "Pachet Complet", price: "140 lei", duration: "75 min", desc: "Tuns + barbă + ras pe brici + masaj scalp.", color: "bg-accent" },
  { name: "Ras Clasic", price: "70 lei", duration: "40 min", desc: "Brici tradițional cu spumă caldă. Ritualul complet.", color: "bg-[hsl(var(--pop-yellow))]" },
  { name: "Tată & Fiu", price: "130 lei", duration: "60 min", desc: "Două tunsori, unul lângă altul. Treabă pe bune.", color: "bg-[hsl(var(--pop-purple))] text-primary-foreground" },
  { name: "Refresh", price: "50 lei", duration: "20 min", desc: "Aranjat rapid între programări. Să stai mereu fresh.", color: "bg-[hsl(var(--pop-orange))] text-foreground" },
];

export const Services = ({ bookingUrl }: { bookingUrl: string }) => {
  return (
    <section id="services" className="py-28 bg-foreground text-background relative bg-halftone">
      <div className="container">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-block bg-[hsl(var(--pop-yellow))] text-foreground ink-outline rounded-full px-4 py-1 font-display uppercase text-xs tracking-widest mb-4">
                Meniul
              </div>
              <h2 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9]">
                Alege-ți<br/><span className="text-primary text-shadow-pop">stilul.</span>
              </h2>
            </div>
            <p className="font-condensed text-xl uppercase tracking-wider text-background/80 max-w-xs">
              Prețuri pe față. Fără șmecherii. Prosop cald din partea casei.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 70}>
              <div className={`group ${s.color} ink-outline rounded-2xl p-6 h-full shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer`}>
                <div className="flex justify-between items-start mb-5">
                  <h3 className="font-display text-2xl uppercase tracking-wide">{s.name}</h3>
                  <ArrowUpRight className="h-6 w-6 group-hover:rotate-45 transition-transform" />
                </div>
                <div className="flex items-baseline gap-3 mb-4 pb-4 border-b-[3px] border-foreground border-dashed">
                  <span className="font-display text-4xl">{s.price}</span>
                  <span className="font-condensed text-sm uppercase tracking-widest opacity-80">{s.duration}</span>
                </div>
                <p className="font-sans text-sm leading-relaxed opacity-90">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-14">
            <Button asChild variant="gold" size="lg">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Rezervă scaunul</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
