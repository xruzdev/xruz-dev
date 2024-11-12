"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "lenis/dist/lenis.css";
import { LenisRef, ReactLenis } from "lenis/react";
import { MutableRefObject, useRef } from "react";


interface LenisProps {
  children: React.ReactNode;
}

export function Lenis({ children }: LenisProps) {
  const lenisRef: MutableRefObject<LenisRef | null> = useRef(null);




  useGSAP(() => {
    function update(time: number) {
      if (lenisRef.current?.lenis) {
        lenisRef.current?.lenis?.raf(time * 1000);
      }
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis
      ref={lenisRef}
      className="overflow-hidden"
      autoRaf={false}
      options={{
        syncTouch: true,
        lerp: 0.11,
      }}
      root
    >
      
      {children}
    </ReactLenis>
  );
}
