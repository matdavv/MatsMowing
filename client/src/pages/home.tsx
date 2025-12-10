import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-background">
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Footer />
      <FloatingContact />
    </main>
  );
}
