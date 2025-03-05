"use client";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import ComingSoon from "@/components/comming-soon";
import Audience from "@/components/audience";
import Footer from "@/components/footer";
import CountdownTimer from "@/components/countdown-timer";
import TestimonialsSection from "@/components/testimonials-section";
import ParticlesBackground from "@/components/ui/particles-background";

export default function Home() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <ParticlesBackground />
      </div>
      <div className="relative z-10">
        <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-wingman-400 via-wingman-600 to-wingman-500 z-50" />
        <Navbar />
        <main className="relative">
          <Hero />
          <div className="animate-fade-in animation-delay-700">
            <CountdownTimer targetDate={targetDate} />
          </div>
          <Features />
          <Audience />
          <TestimonialsSection />
          <ComingSoon />
        </main>
        <Footer />
      </div>
    </div>
  );
}
