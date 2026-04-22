import { Scissors } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground/10 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 font-condensed text-sm uppercase tracking-[0.2em] text-muted-foreground">
        <div className="flex items-center gap-2">
          <Scissors className="h-4 w-4 text-primary" />
          <span className="font-display text-foreground">MARCO<span className="text-primary">.</span></span>
        </div>
        <div>© {new Date().getFullYear()} Marco Rossi · Cut by hand in Brooklyn</div>
      </div>
    </footer>
  );
};
