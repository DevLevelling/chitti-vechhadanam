import Hero from "@/components/Hero";
import Legend from "@/components/Legend";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Rules from "@/components/Rules";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy">
      <Hero />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <Legend />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <Stats />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <Testimonials />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <Rules />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <Booking />

      <Footer />
    </main>
  );
}
