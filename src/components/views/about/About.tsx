"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Marquee } from "./Marquee";
import { Text } from "./Text";
import { Marquee2 } from "./Marquee2";

export const About = () => {
  useGSAP(() => {
    gsap.to(".header-text", {
     y: 0,
      duration:1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#about",
        start: "5% bottom",
        end: "bottom 50%",
        toggleActions: "play none none reverse",

      
      },
    });

    gsap.to(".header-line", {
      width: "100%",
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#about",
        start: "5% bottom",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
      },
    })


  });

  return (
    <section
      id="about"
      className="w-screen h-auto   relative  flex flex-col items-center justify-center overflow-hidden px-4 md:px-10 lg:px-14"
    >


      <div id="header" className="relative w-full  h-20 flex  items-center justify-between text-xs lg:text-lg 2xl:text-3xl  text-black lg:mt-16 overflow-hidden">

        <span className="header-text block translate-y-52">
        Apasionado por el código, impulsado por la innovación.
        </span>

        <span className="header-text block translate-y-52">
          Bahía Blanca, Buenos Aires, Argentina.
        </span>

        <div className="header-line w-0 bg-orange-600 h-0.5 absolute bottom-0 "></div>

      </div>
       
        <Text />

     

      <div className="h-[5vh] w-[90vw] 2xl:h-[10vh] flex justify-center items-center text-black mt-20   ">
        <Marquee2 />
      </div>
      <div className="w-[800vw] h-[10vh]  md:w-[500vw] lg:w-[300vw] xl:w-[350vw]  2xl:w-[250vw] lg:h-[20vh] 2xl:h-[10vh] flex justify-center items-center text-black  ">
        <Marquee />
      </div>
      <div className="h-[5vh] w-[90vw]   2xl:h-[10vh] flex justify-center items-center text-black mb-20 ">
        <Marquee2 />
      </div>
    </section>
  );
};
