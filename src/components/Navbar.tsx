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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav className={`container flex items-center justify-between ${scrolled ? "bg-background/95 backdrop-blur-lg ink-outline rounded-full px-5 py-2 shadow-pop" : ""}`}>
        <a href="#top" className="flex items-center gap-2 group">
          <div className="h-9 w-9 grid place-items-center bg-primary text-primary-foreground ink-outline rounded-lg shadow-pop group-hover:rotate-12 transition-transform">
            <Scissors className="h-4 w-4" />
          </div>
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
        <div className="md:hidden mt-3">
          <ul className="container py-6 flex flex-col gap-3 bg-background ink-outline rounded-2xl shadow-pop">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 px-4 font-display uppercase tracking-wider hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <Button asChild variant="gold" className="mt-2 mx-4">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Book Now</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};
