"use client";
import React, { useMemo, useState } from 'react';
import './hero.css'
import BlurText from '../components/ui/text';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Memoize the text to prevent unnecessary re-renders
  const heroText = useMemo(() => (
    "Welcome to Ario Shipping Logistics"
  ), []);

  const heroText2 =useMemo(() => (
    ` "Transforming Experience"` 
   ), []);

  return (
    <main className="relative w-full h-[60vh]  pb-30 min-h-[400px] md:min-h-[700px] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-2"
        autoPlay
        muted
        loop
        playsInline
        src="/hero.mp4"
        style={{
    clipPath: 'ellipse(86% 60% at 50% 40%)',  
    zIndex: '2'// ellipse width 70%, height 30%, centered horizontally at 50%, vertically at 90% (bottom area)
  }}
      />

      {/* Text overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <BlurText
          text={heroText}
          className="blur-text text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl text-center hero-text"
          animateBy="words"
          direction="top"
          immediate={true}
          onAnimationComplete={() => setIsLoaded(true)}
        />

        <BlurText
          text={heroText2}
          className="blur-text text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl text-center"
          animateBy="words"
          direction="top"
          immediate={true}
          onAnimationComplete={() => setIsLoaded(true)}
        />
      </div>
    </main>
  );
}

export default Hero;