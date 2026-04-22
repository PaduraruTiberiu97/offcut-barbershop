import { Reveal } from "@/components/Reveal";
import { Award, Clock, Sparkles } from "lucide-react";

const features = [
  { icon: Award, title: "Certified Master", text: "Trained in classic European technique with a modern edge." },
  { icon: Sparkles, title: "Tailored to You", text: "Every cut starts with a consultation. Your face, your style." },
  { icon: Clock, title: "On Your Schedule", text: "Solo chair means no rush, no overlaps. Pure focus." },
];

export const About = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">— About</div>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
              A craft refined over a <em className="text-gradient-gold not-italic">decade</em>.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I started cutting hair in my uncle's shop in Naples. Today, I run my own chair at The Gentleman's Chair —
              a single seat, a single mission: deliver the most precise, personal grooming experience in the city.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              No assistants. No conveyor belt. Just you, me, and 60 minutes of attention to detail that you'll feel
              every time you look in the mirror.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 120}>
              <div className="group flex gap-5 p-6 border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-500 hover:-translate-y-1">
                <div className="shrink-0 h-12 w-12 grid place-items-center bg-primary/10 border border-primary/20 group-hover:bg-gradient-gold transition-all">
                  <f.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="font-serif text-xl mb-1">{f.title}</div>
                  <p className="text-sm text-muted-foreground">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
