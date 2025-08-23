"use client"

import { useEffect, useState } from "react";

import Image from "next/image";

//  all images are 5712 × 4284

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

  return (
    <div className="font-sans items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">

        <div className="relative w-full mx-auto" style={{ aspectRatio: "5712 / 4284" }}>

          {/* clickable areas for each egg */}
          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[13%] h-[14%] absolute top-[52%] left-[20%]"
            onClick={() => setEggStates({ ...eggStates, a1: !eggStates.a1 })}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[12%] h-[14%] absolute top-[52%] left-[33%]"
            onClick={() => setEggStates({ ...eggStates, b1: !eggStates.b1 })}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[12%] h-[14%] absolute top-[52%] left-[45%]"
            onClick={() => setEggStates({ ...eggStates, c1: !eggStates.c1 })}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[12%] h-[14%] absolute top-[52%] left-[57%]"
            onClick={() => setEggStates({ ...eggStates, d1: !eggStates.d1 })}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[12%] h-[14%] absolute top-[52%] left-[70%]"
            onClick={() => setEggStates({ ...eggStates, e1: !eggStates.e1 })}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[12%] h-[17%] absolute top-[66%] left-[20%]"
            onClick={() => setEggStates({ ...eggStates, a2: !eggStates.a2 })}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[13%] h-[17%] absolute top-[66%] left-[32%]"
            onClick={() => setEggStates({ ...eggStates, b2: !eggStates.b2 })}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[13%] h-[17%] absolute top-[66%] left-[45%]"
            onClick={() => setEggStates({ ...eggStates, c2: !eggStates.c2 })}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[13%] h-[17%] absolute top-[66%] left-[58%]"
            onClick={() => setEggStates({ ...eggStates, d2: !eggStates.d2 })}></button>

          <button
            className="border z-10 border-[#ff00ff] cursor-pointer opacity-0 w-[13%] h-[17%] absolute top-[66%] left-[71%]"
            onClick={() => setEggStates({ ...eggStates, e2: !eggStates.e2 })}></button>


          {/* Base image */}
          <Image
            src="/eggs/images/egg_none.png"
            alt="egg container"
            fill
            className="object-contain"
            priority
          />

          {/* Overlay images - positioned absolutely to match the base image */}
          <Image
            src="/eggs/images/egg_a1.png"
            className={eggStates.a1 ? "absolute inset-0 object-contain" : "hidden"}
            alt="egg_a1"
            fill
          />
          <Image
            src="/eggs/images/egg_a2.png"
            className={eggStates.a2 ? "absolute inset-0 object-contain" : "hidden"}
            alt="egg_a2"
            fill
          />
          <Image
            src="/eggs/images/egg_b1.png"
            className={eggStates.b1 ? "absolute inset-0 object-contain" : "hidden"}
            alt="egg_b1"
            fill
          />
          <Image
            src="/eggs/images/egg_b2.png"
            className={eggStates.b2 ? "absolute inset-0 object-contain" : "hidden"}
            alt="egg_b2"
            fill
          />
          <Image
            src="/eggs/images/egg_c1.png"
            className={eggStates.c1 ? "absolute inset-0 object-contain" : "hidden"}
            alt="egg_c1"
            fill
          />
          <Image
            src="/eggs/images/egg_c2.png"
            className={eggStates.c2 ? "absolute inset-0 object-contain" : "hidden"}
            alt="egg_c2"
            fill
          />
          <Image
            src="/eggs/images/egg_d1.png"
            className={eggStates.d1 ? "absolute inset-0 object-contain" : "hidden"}
            alt="egg_d1"
            fill
          />
          <Image
            src="/eggs/images/egg_d2.png"
            className={eggStates.d2 ? "absolute inset-0 object-contain" : "hidden"}
            alt="egg_d2"
            fill
          />
          <Image
            src="/eggs/images/egg_e1.png"
            className={eggStates.e1 ? "absolute inset-0 object-contain" : "hidden"}
            alt="egg_e1"
            fill
          />
          <Image
            src="/eggs/images/egg_e2.png"
            className={eggStates.e2 ? "absolute inset-0 object-contain" : "hidden"}
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
