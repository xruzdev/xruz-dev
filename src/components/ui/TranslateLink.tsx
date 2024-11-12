"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

/* const languajes = [
  {
    title: "¿Hablas español?",
    flag: "/esflag.png",
    href: "/es",
  },
  {
    title: "Do you speak English?",
    flag: "/usaflag.png",
    href: "/en",
  },
]; */

export const TranslateLink = () => {
  const tl = React.useRef<gsap.core.Timeline>();
  const container = React.useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline()

        .to(container.current, {
          x: 0,
          duration: 0.6,
          ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.22,1 1,1 "),
        })
        .to("span", {
          y: 0,
          duration: 0.6,
          ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.22,1 1,1 "),
        })
        .reverse();
    },
    { scope: container }
  );

  const handleMouse = contextSafe(() => {
    if (!tl.current) return;
    tl.current.reversed(!tl.current.reversed());
  });

  return (
    <div
      ref={container}
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      className="hidden translate-x-44 w-64 fixed bottom-14 lg:bottom-14 cursor-pointer right-0 bg-red-900 h-16 rounded-l-full lg:flex items-center gap-4 z-[100]"
    >
      <div className="size-16  rounded-full relative z-50">
        <Image src="/usaflag.png" fill alt="USA" className="p-1" />
      </div>

      <Link 
       onClick={handleMouse}
      href={""} className="overflow-hidden">
        <span className="block translate-y-full">Do you speak English?</span>
      </Link>
    </div>
  );
};
