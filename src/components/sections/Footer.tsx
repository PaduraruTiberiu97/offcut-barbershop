import { Scissors } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10 border-t-[3px] border-foreground">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 font-condensed text-sm uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2">
          <Scissors className="h-5 w-5 text-primary" />
          <span className="font-display text-background text-lg">MARCO<span className="text-primary">.</span></span>
        </div>
        <div className="opacity-80">© {new Date().getFullYear()} Marco Rossi · Cut by hand in Brooklyn</div>
      </div>
    </footer>
  );
};
