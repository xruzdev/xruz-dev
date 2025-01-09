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

  const [indexHover, setIndexHover] = useState<null | number>(null);

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
    "Esperiencias interactivas",
    "-",
  ];
  /* const tags = [
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
    "GSAP",
    "-",
  ]; */

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

  useGSAP(() => {
    const words = gsap.utils.toArray<HTMLElement>(".box");

    if (indexHover !== null) {
      // Aplicar blur a los elementos que no están seleccionados
      gsap.to(
        words.filter((_, i) => i !== indexHover),
        {
          filter: "blur(5px)",
          duration: 0.3,
        }
      );

      // Quitar blur del elemento seleccionado
      gsap.to(words[indexHover], {
        filter: "blur(0px)",

        duration: 0.3,
      });
    } else {
      // Si no hay hover, quitar el blur de todos
      gsap.to(words, {
        filter: "blur(0px)",

        duration: 0.3,
      });
    }
  }, [indexHover]); // Este useEffect se ejecutará cuando cambie el índice de hover

  return (
    <div
      ref={container}
      className={`pointer-events-none  text-[2rem] xl:text-6xl     flex tracking-tight gap-2     w-full items-center group capitalize  `}
    >
      {tags.map((item, index) => (
        <span
          key={index}
          className={`  box mx-8 h-full   relative    ${
            indexHover === index ? "selected" : "no-selected"
          }  `}
          onMouseOver={() => {
            setIndexHover(index);
          }}
          onMouseOut={() => {
            setIndexHover(null);
          }}
        >
          { item === "-" ? <GoDot className="text-orange-600" /> : item }
        </span>
      ))}
    </div>
  );
};
