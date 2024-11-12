"use client";
import { monoton } from "@/config";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import Link from "next/link";
import React, { useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  start?: boolean;
}

export const ButtonLink = ({
  children,
  className,
  href,
  start,
}: ButtonProps) => {
  const container = useRef<HTMLAnchorElement>(null);

  const lenisRef = useLenis();

  const tl = useRef<gsap.core.Timeline>();

  const { contextSafe } = useGSAP(
    () => {
      if (!container.current) return;

      tl.current = gsap
        .timeline()
        .to(
          container.current,
          {
            scale: 1.1,
            duration: 0.5,
            ease: "back.inOut",
          },
          0
        )
        .to(
          ".bg-circle",
          {
            clipPath: "circle(50% at 50% 50%)",
            duration: 0.5,
            ease: "back.inOut",
          },
          0
        )
        .reverse();
    },
    {
      scope: container,
      dependencies: [start],
    }
  );

  const handleMouse = contextSafe(() => {
    tl.current?.reversed(!tl.current.reversed());
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (!lenisRef) return;

    lenisRef.scrollTo(href, {
      duration: 1.0, // duración de 1 segundo
      easing: (t) => 1 - Math.pow(1 - t, 3), // easing suave
    });
  };

  return (
    <Link
      href={href}
      ref={container}
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      onClick={handleClick}
      className={
        " cursor-pointer p-1 text-lg lg:text-xl xl:text-2xl z-50 relative  flex items-end justify-center w-auto   " +
        " " +
        className +
        " " +
        monoton.className
      }
    >
      <span className="z-50"> {children}</span>
      <MdOutlineArrowOutward className=" rotate-90 text-2xl text-orange-900" />
    </Link>
  );
};
