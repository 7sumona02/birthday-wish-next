'use client';
import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { balloons } from 'balloons-js';
import { gsap } from 'gsap'; // Import GSAP
import BCard from '@/components/bcard/BCard';
import Cake from '@/components/cake/Cake';

const count = 200;
const defaults = {
  origin: { y: 0.7 },
};

function fire(particleRatio: number, opts: any) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}


const Home = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null); // Create a ref for the audio element
  const bannerRef = useRef(null); // Create a ref for the banner element
  const [showBanner, setShowBanner] = useState(false); // State to control banner visibility
  const [showCake, setShowCake] = useState(false); // State to control cake visibility
  const [showGift, setShowGift] = useState(false); // State to control gift visibility

  const handleConfettiClick = () => {
    setTimeout(() => fire(0.25, { spread: 100, startVelocity: 55 }), 0);
    setTimeout(() => fire(0.2, { spread: 120 }), 100);
    setTimeout(() => fire(0.35, { spread: 200, decay: 0.91, scalar: 0.8 }), 200);
    setTimeout(() => fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 }), 300);
    setTimeout(() => fire(0.1, { spread: 120, startVelocity: 45 }), 400);
  };

  const handleBalloonsClick = () => {
    balloons(); // Trigger balloons animation
  };

  const handleMusicClick = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Play the audio when the button is clicked
    }
  };

  const handleDecorClick = () => {
    setShowBanner(true); // Show banner when clicked

    // Animate the banner using GSAP
    gsap.fromTo(bannerRef.current, 
      { y: -100, opacity: 0 }, // Start position and opacity
      { y: 0, opacity: 1, duration: 1 } // End position and opacity with duration
    );
  };

  const handleCakeClick = () => {
    setShowCake((prev) => !prev); // Toggle cake visibility
  };

  const handleGiftClick = () => {
    setShowGift((prev) => !prev); // Toggle gift visibility
  };

  useEffect(() => {
    // Start shooting confetti continuously
    const intervalId = setInterval(() => fire(0.1, { spread: 90 }), 1000); // Adjust interval as needed

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center select-none'>
      <button onClick={handleConfettiClick} className='mb-4 absolute left-[20vw]'>
        ⋆𐙚₊˚⊹♡
      </button>
      <div className='absolute bottom-10 flex gap-10'>
      <button onClick={handleMusicClick} className='mb-4 text-xl'>
          📼
        </button>
        <button onClick={handleDecorClick} className='mb-4 text-xl'>
          🎉
        </button>
        <button onClick={handleCakeClick} className='mb-4 text-xl'>
          🎂
        </button>
        <button onClick={handleBalloonsClick} className='mb-4 text-xl'>
          🎈 
        </button>
        <button onClick={handleGiftClick} className='mb-4 text-xl'>
          🎁
        </button>
      </div>

      {/* Audio element for Happy Birthday music */}
      <audio ref={audioRef} src='/hbd.mp3' preload="auto" />

      {/* Banner that appears with GSAP animation */}
      {showBanner && (
        <div ref={bannerRef} className="banner absolute top-10">
          <img src="/banner.png" alt="Birthday Banner" className='w-[40vw]' />
        </div>
      )}

      {/* Cake Component */}
      {showCake && (
        <div className="">
          <Cake />
        </div>
      )}

      {/* BCard Component */}
      {showGift && (
        <div className="absolute right-[10vw] z-50">
          <BCard />
        </div>
      )}
      
    </div>
  );
};

export default Home;
