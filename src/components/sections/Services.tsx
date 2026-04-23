import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const services = [
  { name: "Tuns Skinfade", price: "70 lei", duration: "30 min", desc: "Skinfade curat, conturat la milimetru. Cea mai cerută tunsoare.", color: "bg-primary text-primary-foreground" },
  { name: "Tuns Modern", price: "60 lei", duration: "30 min", desc: "Tunsori moderne cu 0.5 și 0 pe lateral. Linie clară, look fresh.", color: "bg-secondary" },
  { name: "Tuns Modern + Barbă", price: "80 lei", duration: "30 min", desc: "Tunsoare modernă plus aranjat barba. Pachet rapid, totul pus la punct.", color: "bg-accent" },
  { name: "Tuns Barbă", price: "20 lei", duration: "10 min", desc: "Aranjat și conturat barba. Intri, ieși, gata.", color: "bg-[hsl(var(--pop-yellow))]" },
  { name: "Skinfade + Barbă", price: "90 lei", duration: "30 min", desc: "Skinfade plus barbă aranjată. Combo-ul preferat al băieților.", color: "bg-[hsl(var(--pop-purple))] text-primary-foreground" },
  { name: "Skinfade + Barbă + Spălat", price: "100 lei", duration: "30 min", desc: "Pachet complet — tuns, barbă și spălat. Pleci ca scos din cutie.", color: "bg-[hsl(var(--pop-orange))] text-foreground" },
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
