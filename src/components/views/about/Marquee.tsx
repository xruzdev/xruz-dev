"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import { horizontalLoop } from "@/utils/horizontalLoop";
import { useLenis } from "lenis/react";
import { GoDot } from "react-icons/go";

export const Marquee = () => {
  const [direction, setDirection] = useState("left");

  const tlRef = useRef<gsap.core.Timeline>();

  const container = useRef(null);



  const tags = [
    "Sitios web",
    "-",
    "Aplicaciones web",
    "-",
    "Diseño web",
    "-",
    "Visión creativa",
    "-",
    "Sitios de alta performance",
    "-",
    "Experiencias interactivas",
    "-",
  ];



  useLenis((lenis) => {
    setDirection(lenis.direction > 0 ? "left" : "right");
  });

  useEffect(() => {
    if (tlRef.current) {
      tlRef.current.reversed(direction === "right");
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
      className={`pointer-events-none  text-[2rem] xl:text-6xl     flex tracking-tight gap-2     w-full items-center group capitalize  `}
    >
      {tags.map((item, index) => (
        <span
          key={index}
          className={`  box mx-8 h-full   relative `}
        
        >
          { item === "-" ? <GoDot className="text-orange-600" /> : item }
        </span>
      ))}
    </div>
  );
};
