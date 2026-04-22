import { Scissors } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Scissors className="h-4 w-4 text-primary" />
          <span className="font-serif tracking-wider">MARCO<span className="text-primary">.</span></span>
        </div>
        <div>© {new Date().getFullYear()} Marco Rossi. Crafted with precision.</div>
      </div>
    </footer>
  );
};
