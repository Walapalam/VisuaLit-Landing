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
import { IconCloud } from "../components/magicui/icon-cloud";

export default function Home() {
  return (
    <>
      <AnimatedParticlesRippleBG />
      <NavBarDock />
      <main className="flex flex-col items-center justify-center min-h-screen gap-10 px-4 bg-white">
        {/* HERO SECTION */}
        <section id="hero" className="flex flex-col items-center gap-8 pt-36 pb-16 w-full max-w-3xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl md:text-9xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-2">
            VisuaLit
          </span>
          <h2 className="text-2xl md:text-3xl text-center text-neutral-800 dark:text-neutral-100 font-semibold mb-4">The AI-powered E-Book Reader That Brings Stories to Life</h2>
          <p className="text-lg md:text-xl text-center text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl">
            Visualize characters and scenes, enjoy seamless narration, and engage with books like never before. Discover a new way to experience your favorite stories with immersive visuals and smart narration.
          </p>
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
          <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 px-2">
            {/* Left: Experience text and IconCloud */}
            <div className="flex-1 flex flex-col items-start md:items-start gap-6 min-w-[280px]">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">EXPERIENCE</h2>
              <div className="text-lg md:text-xl text-neutral-700 dark:text-neutral-200 mb-2 font-medium">Powered by modern tech</div>
              <div className="w-full flex justify-center md:justify-start">
                <IconCloud
                  images={[
                    // Flutter
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
                    // FastAPI
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
                    // GCP Cloud Run
                    "https://raw.githubusercontent.com/google-cloudplatform/cloud-run-button/main/images/run-on-google-cloud.svg",
                    // GCP Cloud Storage
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
                    // Python
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                    // Dart
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
                    // Appwrite
                    "https://avatars.githubusercontent.com/u/28091220?s=200&v=4",
                    // C
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
                    // AWS S3
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
                    // MongoDB
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                  ]}
                />
              </div>
            </div>
            {/* Right: iPhone mockups stacked horizontally, center one in front, sides behind */}
            <div className="flex-1 flex justify-center items-center relative min-h-[520px]">
              <div className="relative w-[600px] h-[520px] flex items-center justify-center">
                {/* Left phone, behind */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 scale-90 opacity-70 z-0 -rotate-12">
                  <Iphone15Pro width={220} height={450} src="/globe.svg" />
                </div>
                {/* Right phone, behind */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 scale-90 opacity-70 z-0 rotate-12">
                  <Iphone15Pro width={220} height={450} src="/window.svg" />
                </div>
                {/* Center phone, in front */}
                <div className="relative z-10">
                  <Iphone15Pro width={250} height={510} src="/file.svg" />
                </div>
              </div>
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
