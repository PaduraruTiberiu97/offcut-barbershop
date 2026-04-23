import { Reveal } from "@/components/Reveal";
import { Award, Clock, Sparkles } from "lucide-react";
import shopImg from "@/assets/shop-interior.jpg";

const features = [
  {
    icon: Award,
    title: "Școala veche",
    text: "Am învățat meseria pe bune, nu de pe TikTok. Tehnică clasică, ochi pentru detaliu.",
    color: "bg-secondary",
  },
  {
    icon: Sparkles,
    title: "Făcut pe tine",
    text: "Orice tunsoare începe cu o discuție. Fața ta, stilul tău, nu un șablon.",
    color: "bg-accent",
  },
  {
    icon: Clock,
    title: "Fără grabă",
    text: "Un singur scaun, zero suprapuneri. Vii la oră, pleci mulțumit.",
    color: "bg-primary text-primary-foreground",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-28 relative bg-background">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-[hsl(var(--pop-yellow))] ink-outline" />
            <img
              src={shopImg}
              alt="Interior Offcut"
              loading="lazy"
              className="relative w-full h-[520px] object-cover rounded-2xl ink-outline shadow-pop"
            />
            <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground ink-outline rounded-xl px-5 py-3 font-display uppercase text-sm shadow-pop -rotate-3">
              Offcut · Scaunul lui Denis
            </div>
          </div>
        </Reveal>

        <div className="space-y-8">
          <Reveal>
            <div className="inline-block bg-accent text-accent-foreground ink-outline rounded-full px-4 py-1 font-display uppercase text-xs tracking-widest">
              Despre Denis
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.9] uppercase mt-4">
              Meseria
              <br />
              <span className="text-primary text-shadow-pop">se învață.</span>
              <br />
              <span className="text-primary text-shadow-pop">pe stradă.</span>
            </h2>
            <p className="font-sans text-lg leading-relaxed mt-6 max-w-md text-foreground/80">
              Sunt Denis. Am început să tund prin cartier, am prins meseria de la oameni care chiar știu ce fac. Acum
              țin scaunul de la Offcut — un loc, o misiune: cea mai curată tunsoare din zonă.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div
                  className={`group flex gap-5 p-5 ${f.color} ink-outline rounded-xl shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`}
                >
                  <div className="shrink-0 h-12 w-12 grid place-items-center bg-background ink-outline rounded-lg">
                    <f.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <div className="font-display text-lg uppercase tracking-wide">{f.title}</div>
                    <p className="font-sans text-sm mt-1 opacity-90">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
