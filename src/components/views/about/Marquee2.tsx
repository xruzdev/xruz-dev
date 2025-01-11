"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import { horizontalLoop } from "@/utils/horizontalLoop";
import { useLenis } from "lenis/react";
import { GoDot } from "react-icons/go";

export const Marquee2 = () => {
  const [direction, setDirection] = useState("left");

  const tlRef = useRef<gsap.core.Timeline>();

  const container = useRef(null);



  const tags = [
    "Node.js",
    "-",
    "React",
    "-",
    "Next.js",
    "-",
    "TypeScript",
    "-",
    "JavaScript",
    "-",
    "TailwindCSS",
    "-",
    "CSS",
    "-",
    "Sass",
    "-",
    "GSAP",
    "-",
    "Framer motion",
    "-",
    "Express js",
    "-",
  ]; 



  useLenis((lenis) => {
    setDirection(lenis.direction > 0 ? "left" : "right");
  });

  useEffect(() => {
    if (tlRef.current) {
      tlRef.current.reversed(direction === "left");
    }
  }, [direction]); 

  useGSAP(
    () => {
      gsap.registerPlugin(useGSAP);
      const words: HTMLElement[] = gsap.utils.toArray(".box");

      tlRef.current = horizontalLoop(words, {
        repeat: -1,
        paddingRight: "52px",
        
      });
    },
    {
      scope: container,
    }
  );



  return (
    <div
      ref={container}
      className={`pointer-events-none  text-sm md:text-lg xl:text-2xl  text-nowrap   flex tracking-tight gap-2     w-full items-center group capitalize  `}
    >
      {tags.map((item, index) => (
        <span
          key={index}
          className={`  box mx-8 h-full text-gray-500  relative `}
        
        >
          { item === "-" ? <GoDot className="text-orange-600" /> : item }
        </span>
      ))}
    </div>
  );
};

