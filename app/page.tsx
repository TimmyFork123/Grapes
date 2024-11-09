"use client";

import { Suspense } from "react";
import { Features } from "./components/features";
import { HowToPlay } from "./components/how-to-play";
import { Testimonials } from "./components/testimonials";
import { LogoText } from "./components/logo";
import { FAQ } from "./components/faq";
import { GameSectionWrapper } from "./components/game-section/wrapper";

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="text-white pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-4 md:gap-6 mb-8">
            <LogoText className="w-auto h-20 md:h-28" />
          </div>
          <p className="text-xl md:text-2xl mb-8">
            Match, Blast & Challenge Your Mind!
          </p>
        </div>
      </section>

      {/* Game Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <GameSectionWrapper />
      </Suspense>
      
      {/* Features */}
      <Features />
      
      {/* How to Play */}
      <HowToPlay />
      
      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />
    </main>
  );
}
