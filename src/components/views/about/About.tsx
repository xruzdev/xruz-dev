"use client";
import React from "react";
import Image from "next/image";
import { Marquee } from "./Marquee";
import { Text } from "./Text";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export const About = () => {
  useGSAP(() => {
    gsap.from("img", {
      filter: "blur(10px)",
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "img",
        start: "-10% center",
        end: "50% 50%",
        scrub: true,
      },
    });
  });

  return (
    <section
      id="about"
      className="w-screen h-auto   relative  flex flex-col items-center justify-center overflow-hidden px-4 md:px-10 lg:px-14"
    >
      <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-evenly h-auto lg:h-[90vh]  ">
        <Text />

        <div className="relative w-full md:w-[60%] aspect-square lg:w-1/4 h-3/4 mt-4 lg:mt-0 ">
          <Image src="https://res.cloudinary.com/dqbpjov4y/image/upload/v1731443113/retrato_akppqf.jpg" fill alt="retrato" className="object-cover " />
        </div>
      </div>

      <div className="w-[800vw] h-[25vh] lg:h-[40vh] md:w-[500vw] lg:w-[300vw]   2xl:w-[200vw] 2xl:h-[50vh] flex justify-center items-center text-white   ">
        <Marquee />
      </div>
    </section>
  );
};
