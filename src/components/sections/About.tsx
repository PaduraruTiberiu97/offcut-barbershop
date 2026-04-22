import { Reveal } from "@/components/Reveal";
import { Award, Clock, Sparkles } from "lucide-react";
import shopImg from "@/assets/shop-interior.jpg";

const features = [
  { icon: Award, title: "Trained Old-School", text: "Learned in my uncle's shop. Classic technique, modern edge.", color: "bg-secondary" },
  { icon: Sparkles, title: "Built For You", text: "Every cut starts with a real conversation. Your face, your style.", color: "bg-accent" },
  { icon: Clock, title: "No Rush, No Bull", text: "Solo chair means no double bookings. Just focus on you.", color: "bg-primary text-primary-foreground" },
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
              alt="The shop"
              loading="lazy"
              className="relative w-full h-[520px] object-cover rounded-2xl ink-outline shadow-pop"
            />
            <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground ink-outline rounded-xl px-5 py-3 font-display uppercase text-sm shadow-pop -rotate-3">
              The Chair · Brooklyn
            </div>
          </div>
        </Reveal>

        <div className="space-y-8">
          <Reveal>
            <div className="inline-block bg-accent text-accent-foreground ink-outline rounded-full px-4 py-1 font-display uppercase text-xs tracking-widest">
              About Marco
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.9] uppercase mt-4">
              A craft<br/>refined on<br/><span className="text-primary text-shadow-pop">the block.</span>
            </h2>
            <p className="font-sans text-lg leading-relaxed mt-6 max-w-md text-foreground/80">
              I'm Marco. Started cutting heads in my uncle's shop in Naples. Now I run the only chair at
              The Gentleman's Chair — one seat, one mission: deliver the cleanest cut on this side of town.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className={`group flex gap-5 p-5 ${f.color} ink-outline rounded-xl shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`}>
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
