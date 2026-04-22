import { Reveal } from "@/components/Reveal";
import { Award, Clock, Sparkles } from "lucide-react";
import shopImg from "@/assets/shop-interior.jpg";

const features = [
  { icon: Award, title: "Trained Old-School", text: "Learned the craft in my uncle's shop. Classic technique, modern edge." },
  { icon: Sparkles, title: "Built For You", text: "Every cut starts with a real conversation. Your face. Your style." },
  { icon: Clock, title: "No Rush, No Bull", text: "Solo chair means no double bookings. Just focus on you." },
];

export const About = () => {
  return (
    <section id="about" className="py-28 relative bg-grain">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-primary" />
            <img
              src={shopImg}
              alt="The shop"
              loading="lazy"
              className="relative w-full h-[520px] object-cover grayscale-[20%]"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-5 py-3 font-condensed tracking-[0.25em] uppercase text-sm">
              The Chair · Brooklyn
            </div>
          </div>
        </Reveal>

        <div className="space-y-8">
          <Reveal>
            <div className="font-condensed text-sm uppercase tracking-[0.4em] text-primary">— About</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.9] uppercase mt-3">
              A craft<br/>refined on<br/><span className="text-primary">the block.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-md">
              I'm Marco. Started cutting heads in my uncle's shop in Naples. Now I run the only chair at
              The Gentleman's Chair — a single seat, a single mission: deliver the cleanest cut on this side of town.
            </p>
          </Reveal>

          <div className="grid gap-px bg-border">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="group flex gap-5 p-5 bg-background hover:bg-card transition-colors">
                  <div className="shrink-0 h-11 w-11 grid place-items-center bg-primary text-primary-foreground">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-lg uppercase tracking-wide">{f.title}</div>
                    <p className="text-sm text-muted-foreground mt-1">{f.text}</p>
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
