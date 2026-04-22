import { useEffect, useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = ({ bookingUrl }: { bookingUrl: string }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border/50 py-3" : "py-6"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <Scissors className="h-5 w-5 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-display text-xl tracking-wider uppercase">
            MARCO<span className="text-primary">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9 font-condensed text-base uppercase tracking-[0.2em]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-foreground/80 hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="gold" size="sm">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Book Now</a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50 mt-3">
          <ul className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <Button asChild variant="gold" className="mt-2">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Book Now</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};
