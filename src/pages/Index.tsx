import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

// Replace with the barber's actual booking URL
const BOOKING_URL = "https://booksy.com";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar bookingUrl={BOOKING_URL} />
      <Hero bookingUrl={BOOKING_URL} />
      <About />
      <Services bookingUrl={BOOKING_URL} />
      <Work />
      <Reviews />
      <Contact bookingUrl={BOOKING_URL} />
      <Footer />
    </main>
  );
};

export default Index;
