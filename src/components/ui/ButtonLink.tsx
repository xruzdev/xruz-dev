"use client";
import { monoton } from "@/config";
import { useLenis } from "lenis/react";
import Link from "next/link";
import React, { useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const ButtonLink = ({
  children,
  className,
  href,
}: ButtonProps) => {
  const container = useRef<HTMLAnchorElement>(null);

  const lenisRef = useLenis();


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
      onClick={handleClick}
      className={
        " cursor-pointer p-1 text-lg lg:text-xl xl:text-2xl z-50 relative  flex items-end justify-center w-auto  group    " +
        " " +
        className +
        " " +
        monoton.className
      }
    >
      <span className="z-50 group-hover:text-orange-700 group-hover:scale-105 group-active:scale-95 transition-all duration-300"> {children}</span>
      <MdOutlineArrowOutward className=" rotate-90 text-2xl text-orange-900 group-hover:text-orange-700 group-hover:scale-105 active:scale-95 transition-all duration-300  " />
    </Link>
  );
};
