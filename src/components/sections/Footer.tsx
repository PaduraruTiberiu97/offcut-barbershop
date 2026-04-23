import { Scissors, MapPin, Phone, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 border-t-[3px] border-foreground">
      <div className="container grid gap-8 md:grid-cols-4 font-condensed text-sm uppercase tracking-[0.15em]">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Scissors className="h-5 w-5 text-primary" />
            <span className="font-display text-background text-xl">
              OFFCUT<span className="text-primary">.</span>
            </span>
          </div>
          <p className="opacity-70 normal-case tracking-normal font-sans text-sm">
            Barbershop-ul lui Denis. Mișcări precise, fără fițe, în Iași.
          </p>
        </div>

        <a
          href="https://maps.google.com/?q=Bulevardul+Dacia+6A,+Iași"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 hover:text-primary transition-colors"
        >
          <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <span>
            Bd. Dacia 6A
            <br />
            700424 Iași
          </span>
        </a>

        <a href="tel:+40735514992" className="flex items-start gap-3 hover:text-primary transition-colors">
          <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <span>0735 514 992</span>
        </a>

        <a
          href="https://www.instagram.com/denispalaghia/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 hover:text-primary transition-colors"
        >
          <Instagram className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <span>@denispalaghia</span>
        </a>
      </div>

      <div className="container mt-10 pt-6 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-3 font-condensed text-xs uppercase tracking-[0.2em] opacity-70">
        <div>© {new Date().getFullYear()} Offcut Barbershop · Iași</div>
        <div>Tuns cu mâna lui Denis</div>
      </div>
    </footer>
  );
};
