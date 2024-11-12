"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";

export const SvgBackground = () => {
  const bgRef = React.useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!bgRef.current) return;


    gsap.from("polygon", {
      y: -1, // Mover hacia arriba 10px
      duration: 2, // Duración de la animación
      repeat: -1, // Repetir indefinidamente
      yoyo: true, // Hacer que vuelva a la posición original
   
      ease: "power1.inOut",
    })

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(bgRef.current, {
      opacity: 1,
    });

    

    gsap.to(bgRef.current.children, {
      opacity: 1,
      stagger: 0.1,
    });

    gsap.to(bgRef.current, {
      rotate: 360,
      duration: 2,
      fill: "#c2410c",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "body",
        start: "50% center",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    gsap.to(bgRef.current.children, {
      x: 0,
      duration: 2,
      fill: "#c2410c",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "body",
        start: "500px center",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  });

  return (
    <div 
    id="svg-background"
    className="lg:scale-0 w-screen h-full fixed top-0 right-0 bg-none text-white text-5xl  flex justify-center items-center bsrightness-50 -z-10">
      <svg
        className="h-full size-full "
        id="Layer_1"
        ref={bgRef}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 31.07 32.39"
      >
        <polygon
          id="polygon-left-1"
          points="18.66 14.27 26.9 5.38 22.04 14.66 26.69 26.2 18.66 14.27"
          fill="#7c2d12"
          fillRule="evenodd"
          className="translate-x-3/4"
        />
        {
          <polygon
            id="polygon-left-2"
            points="17.61 14.19 18.13 14.97 26.66 27.64 12.46 13.59 31.07 0 17.61 14.19"
            fill="#7c2d12"
            fillRule="evenodd"
            className="translate-x-1/2"
          />
        }
        <polygon
          id="polygon-right-1"
          points="12.6 18.28 3.83 27.04 9.21 17.89 4.54 6.35 12.6 18.28"
          fill="#7c2d12"
          fillRule="evenodd"
          className="-translate-x-3/4"
        />
        <polygon
          id="polygon-right-2"
          points="13.78 18.12 13.25 17.34 4.72 4.67 18.92 18.72 0 32.39 13.78 18.12"
          fill="#7c2d12"
          fillRule="evenodd"
          className="-translate-x-1/2"
        />
      </svg>
    </div>
  );
};
