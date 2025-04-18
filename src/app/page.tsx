"use client";

import { AnimatedBackground } from "../components/AnimatedBackground";
import { AnimatedSlogan } from "../components/AnimatedSlogan";
import { IPhone15ProMockup } from "../components/IPhone15ProMockup";
import { DummyAppScreen } from "../components/DummyAppScreen";
import { Button } from "../components/ui/button";
import { FeaturesSection } from "../components/FeaturesSection";
import { NavBarDock } from "../components/NavBarDock";
import { AnimatedParticlesRippleBG } from "../components/AnimatedParticlesRippleBG";
import { AboutSection } from "../components/AboutSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { TechStackSection } from "../components/TechStackSection";
import { UIShowcaseSection } from "../components/UIShowcaseSection";
import { DemoSignupSection } from "../components/DemoSignupSection";
import { PricingSection } from "../components/PricingSection";
import { TeamSection } from "../components/TeamSection";
import { ContactSection } from "../components/ContactSection";
import Iphone15Pro from "../components/magicui/iphone-15-pro";

export default function Home() {
  return (
    <>
      <AnimatedParticlesRippleBG />
      <NavBarDock />
      <main className="flex flex-col items-center justify-center min-h-screen gap-10 px-4 bg-white">
        {/* HERO SECTION */}
        <section id="hero" className="flex flex-col items-center gap-6 pt-28 pb-10 w-full max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
            VisuaLit – The AI-powered E-Book Reader That Brings Stories to Life
          </h1>
          <h2 className="text-lg md:text-2xl text-center text-neutral-600 dark:text-neutral-300 mb-6">
            Visualize characters and scenes, enjoy seamless narration, and engage with books like never before.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('demo')?.scrollIntoView({behavior:'smooth'})}>
              Try the Demo
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('features')?.scrollIntoView({behavior:'smooth'})}>
              Explore Features
            </Button>
          </div>
        </section>
        {/* EXPERIENCE/DEMO SECTION */}
        <section id="demo" className="w-full py-16 flex flex-col items-center bg-white border-y border-neutral-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">EXPERIENCE</h2>
          <div className="w-full max-w-5xl px-2">
            <div className="flex flex-wrap gap-8 justify-center items-center">
              <Iphone15Pro width={250} height={510} src="/file.svg" />
              <Iphone15Pro width={250} height={510} src="/globe.svg" />
              <Iphone15Pro width={250} height={510} src="/window.svg" />
            </div>
          </div>
        </section>
        <AboutSection />
        <FeaturesSection />
        <ReviewsSection />
        <TechStackSection />
        <UIShowcaseSection />
        <TeamSection />
        <PricingSection />
        <DemoSignupSection />
        <ContactSection />
      </main>
    </>
  );
}
