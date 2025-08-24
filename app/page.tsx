"use client"

import { useEffect, useState } from "react";

import Image from "next/image";

//  all images are 5712 × 4284

export default function Home() {

  const [eggStates, setEggStates] = useState({
    a1: false,
    a2: false,
    b1: false,
    b2: false,
    c1: false,
    c2: false,
    d1: false,
    d2: false,
    e1: false,
    e2: false,
  });

  const [hoverStates, setHoverStates] = useState({
    a1: false,
    a2: false,
    b1: false,
    b2: false,
    c1: false,
    c2: false,
    d1: false,
    d2: false,
    e1: false,
    e2: false,
  });

  // Track recently removed eggs to prevent immediate 50% opacity
  const [recentlyRemoved, setRecentlyRemoved] = useState({
    a1: false,
    a2: false,
    b1: false,
    b2: false,
    c1: false,
    c2: false,
    d1: false,
    d2: false,
    e1: false,
    e2: false,
  });

  // initial loading animation, fill the eggs, then empty them
  useEffect(() => {
    const eggNames = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2', 'd1', 'd2', 'e1', 'e2'];

    const runAnimation = async () => {
      // Phase 1: Show eggs one after the other
      for (const eggName of eggNames) {
        await new Promise(resolve => setTimeout(resolve, 150));
        setEggStates(prev => ({ ...prev, [eggName]: true }));
      }

      // Wait a bit before starting phase 2
      await new Promise(resolve => setTimeout(resolve, 300));

      // Phase 2: Hide eggs one after the other
      for (const eggName of eggNames) {
        await new Promise(resolve => setTimeout(resolve, 150));
        setEggStates(prev => ({ ...prev, [eggName]: false }));
      }
    };

    runAnimation();
  }, []);

  // Global mouse move handler to ensure hover states are properly reset
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const eggContainer = document.querySelector('[data-egg-container]') as HTMLElement;

      if (eggContainer && !eggContainer.contains(target)) {
        // Mouse is outside the egg container, reset all hover states
        setHoverStates({
          a1: false,
          a2: false,
          b1: false,
          b2: false,
          c1: false,
          c2: false,
          d1: false,
          d2: false,
          e1: false,
          e2: false,
        });
        return;
      }

      // Calculate which egg area the mouse is in
      if (eggContainer) {
        const rect = eggContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Convert to percentages
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        // Define egg areas (approximate positions based on your button positioning)
        const newHoverStates = {
          a1: xPercent >= 20 && xPercent <= 33 && yPercent >= 52 && yPercent <= 66,
          a2: xPercent >= 20 && xPercent <= 33 && yPercent >= 66 && yPercent <= 83,
          b1: xPercent >= 33 && xPercent <= 45 && yPercent >= 52 && yPercent <= 66,
          b2: xPercent >= 32 && xPercent <= 45 && yPercent >= 66 && yPercent <= 83,
          c1: xPercent >= 45 && xPercent <= 57 && yPercent >= 52 && yPercent <= 66,
          c2: xPercent >= 45 && xPercent <= 58 && yPercent >= 66 && yPercent <= 83,
          d1: xPercent >= 57 && xPercent <= 69 && yPercent >= 52 && yPercent <= 66,
          d2: xPercent >= 58 && xPercent <= 71 && yPercent >= 66 && yPercent <= 83,
          e1: xPercent >= 70 && xPercent <= 82 && yPercent >= 52 && yPercent <= 66,
          e2: xPercent >= 71 && xPercent <= 84 && yPercent >= 66 && yPercent <= 83,
        };

        // Check if mouse left any areas and reset recentlyRemoved for those areas
        setHoverStates(prevHoverStates => {
          const updatedRecentlyRemoved = { ...recentlyRemoved };

          // If mouse left an area that was recently removed, reset the flag
          if (prevHoverStates.a1 && !newHoverStates.a1 && recentlyRemoved.a1) {
            updatedRecentlyRemoved.a1 = false;
          }
          if (prevHoverStates.a2 && !newHoverStates.a2 && recentlyRemoved.a2) {
            updatedRecentlyRemoved.a2 = false;
          }
          if (prevHoverStates.b1 && !newHoverStates.b1 && recentlyRemoved.b1) {
            updatedRecentlyRemoved.b1 = false;
          }
          if (prevHoverStates.b2 && !newHoverStates.b2 && recentlyRemoved.b2) {
            updatedRecentlyRemoved.b2 = false;
          }
          if (prevHoverStates.c1 && !newHoverStates.c1 && recentlyRemoved.c1) {
            updatedRecentlyRemoved.c1 = false;
          }
          if (prevHoverStates.c2 && !newHoverStates.c2 && recentlyRemoved.c2) {
            updatedRecentlyRemoved.c2 = false;
          }
          if (prevHoverStates.d1 && !newHoverStates.d1 && recentlyRemoved.d1) {
            updatedRecentlyRemoved.d1 = false;
          }
          if (prevHoverStates.d2 && !newHoverStates.d2 && recentlyRemoved.d2) {
            updatedRecentlyRemoved.d2 = false;
          }
          if (prevHoverStates.e1 && !newHoverStates.e1 && recentlyRemoved.e1) {
            updatedRecentlyRemoved.e1 = false;
          }
          if (prevHoverStates.e2 && !newHoverStates.e2 && recentlyRemoved.e2) {
            updatedRecentlyRemoved.e2 = false;
          }

          setRecentlyRemoved(updatedRecentlyRemoved);
          return newHoverStates;
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="font-sans items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">

        <div className="relative w-full mx-auto" style={{ aspectRatio: "5712 / 4284" }} data-egg-container>

          {/* clickable areas for each egg */}
          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[13%] h-[14%] absolute top-[52%] left-[20%]"
            onClick={() => {
              const newState = !eggStates.a1;
              setEggStates({ ...eggStates, a1: newState });
              if (!newState) {
                setRecentlyRemoved({ ...recentlyRemoved, a1: true });
              } else {
                setRecentlyRemoved({ ...recentlyRemoved, a1: false });
              }
            }}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[12%] h-[14%] absolute top-[52%] left-[33%]"
            onClick={() => {
              const newState = !eggStates.b1;
              setEggStates({ ...eggStates, b1: newState });
              if (!newState) {
                setRecentlyRemoved({ ...recentlyRemoved, b1: true });
              } else {
                setRecentlyRemoved({ ...recentlyRemoved, b1: false });
              }
            }}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[12%] h-[14%] absolute top-[52%] left-[45%]"
            onClick={() => {
              const newState = !eggStates.c1;
              setEggStates({ ...eggStates, c1: newState });
              if (!newState) {
                setRecentlyRemoved({ ...recentlyRemoved, c1: true });
              } else {
                setRecentlyRemoved({ ...recentlyRemoved, c1: false });
              }
            }}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[12%] h-[14%] absolute top-[52%] left-[57%]"
            onClick={() => {
              const newState = !eggStates.d1;
              setEggStates({ ...eggStates, d1: newState });
              if (!newState) {
                setRecentlyRemoved({ ...recentlyRemoved, d1: true });
              } else {
                setRecentlyRemoved({ ...recentlyRemoved, d1: false });
              }
            }}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[12%] h-[14%] absolute top-[52%] left-[70%]"
            onClick={() => {
              const newState = !eggStates.e1;
              setEggStates({ ...eggStates, e1: newState });
              if (!newState) {
                setRecentlyRemoved({ ...recentlyRemoved, e1: true });
              } else {
                setRecentlyRemoved({ ...recentlyRemoved, e1: false });
              }
            }}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[12%] h-[17%] absolute top-[66%] left-[20%]"
            onClick={() => {
              const newState = !eggStates.a2;
              setEggStates({ ...eggStates, a2: newState });
              if (!newState) {
                setRecentlyRemoved({ ...recentlyRemoved, a2: true });
              } else {
                setRecentlyRemoved({ ...recentlyRemoved, a2: false });
              }
            }}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[13%] h-[17%] absolute top-[66%] left-[32%]"
            onClick={() => {
              const newState = !eggStates.b2;
              setEggStates({ ...eggStates, b2: newState });
              if (!newState) {
                setRecentlyRemoved({ ...recentlyRemoved, b2: true });
              } else {
                setRecentlyRemoved({ ...recentlyRemoved, b2: false });
              }
            }}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[13%] h-[17%] absolute top-[66%] left-[45%]"
            onClick={() => {
              const newState = !eggStates.c2;
              setEggStates({ ...eggStates, c2: newState });
              if (!newState) {
                setRecentlyRemoved({ ...recentlyRemoved, c2: true });
              } else {
                setRecentlyRemoved({ ...recentlyRemoved, c2: false });
              }
            }}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[13%] h-[17%] absolute top-[66%] left-[58%]"
            onClick={() => {
              const newState = !eggStates.d2;
              setEggStates({ ...eggStates, d2: newState });
              if (!newState) {
                setRecentlyRemoved({ ...recentlyRemoved, d2: true });
              } else {
                setRecentlyRemoved({ ...recentlyRemoved, d2: false });
              }
            }}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[13%] h-[17%] absolute top-[71%] left-[71%]"
            onClick={() => {
              const newState = !eggStates.e2;
              setEggStates({ ...eggStates, e2: newState });
              if (!newState) {
                setRecentlyRemoved({ ...recentlyRemoved, e2: true });
              } else {
                setRecentlyRemoved({ ...recentlyRemoved, e2: false });
              }
            }}></button>


          {/* Base image */}
          <Image
            src="/eggs/images/egg_none_reduced.png"
            alt="egg container"
            fill
            className="object-contain"
            priority
          />

          {/* Overlay images - positioned absolutely to match the base image */}
          <Image
            src="/eggs/images/egg_a1_reduced.png"
            className={`absolute inset-0 object-contain  ${eggStates.a1 ? "opacity-100" : (hoverStates.a1 && !recentlyRemoved.a1) ? "opacity-50" : "opacity-0"
              }`}
            alt="egg_a1"
            fill
          />
          <Image
            src="/eggs/images/egg_a2_reduced.png"
            className={`absolute inset-0 object-contain  ${eggStates.a2 ? "opacity-100" : (hoverStates.a2 && !recentlyRemoved.a2) ? "opacity-50" : "opacity-0"
              }`}
            alt="egg_a2"
            fill
          />
          <Image
            src="/eggs/images/egg_b1_reduced.png"
            className={`absolute inset-0 object-contain  ${eggStates.b1 ? "opacity-100" : (hoverStates.b1 && !recentlyRemoved.b1) ? "opacity-50" : "opacity-0"
              }`}
            alt="egg_b1"
            fill
          />
          <Image
            src="/eggs/images/egg_b2_reduced.png"
            className={`absolute inset-0 object-contain  ${eggStates.b2 ? "opacity-100" : (hoverStates.b2 && !recentlyRemoved.b2) ? "opacity-50" : "opacity-0"
              }`}
            alt="egg_b2"
            fill
          />
          <Image
            src="/eggs/images/egg_c1_reduced.png"
            className={`absolute inset-0 object-contain  ${eggStates.c1 ? "opacity-100" : (hoverStates.c1 && !recentlyRemoved.c1) ? "opacity-50" : "opacity-0"
              }`}
            alt="egg_c1"
            fill
          />
          <Image
            src="/eggs/images/egg_c2_reduced.png"
            className={`absolute inset-0 object-contain  ${eggStates.c2 ? "opacity-100" : (hoverStates.c2 && !recentlyRemoved.c2) ? "opacity-50" : "opacity-0"
              }`}
            alt="egg_c2"
            fill
          />
          <Image
            src="/eggs/images/egg_d1_reduced.png"
            className={`absolute inset-0 object-contain  ${eggStates.d1 ? "opacity-100" : (hoverStates.d1 && !recentlyRemoved.d1) ? "opacity-50" : "opacity-0"
              }`}
            alt="egg_d1"
            fill
          />
          <Image
            src="/eggs/images/egg_d2_reduced.png"
            className={`absolute inset-0 object-contain  ${eggStates.d2 ? "opacity-100" : (hoverStates.d2 && !recentlyRemoved.d2) ? "opacity-50" : "opacity-0"
              }`}
            alt="egg_d2"
            fill
          />
          <Image
            src="/eggs/images/egg_e1_reduced.png"
            className={`absolute inset-0 object-contain  ${eggStates.e1 ? "opacity-100" : (hoverStates.e1 && !recentlyRemoved.e1) ? "opacity-50" : "opacity-0"
              }`}
            alt="egg_e1"
            fill
          />
          <Image
            src="/eggs/images/egg_e2_reduced.png"
            className={`absolute inset-0 object-contain  ${eggStates.e2 ? "opacity-100" : (hoverStates.e2 && !recentlyRemoved.e2) ? "opacity-50" : "opacity-0"
              }`}
            alt="egg_e2"
            fill
          />
        </div>



      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Egglector the egg-selector by <a href="https://meusburger.io/" target="_blank" rel="noopener noreferrer">Luca Meusburger</a>
      </footer>
    </div>
  );
}
