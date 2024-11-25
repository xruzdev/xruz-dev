"use client";

import Link from "next/link";
import React from "react";
import { useLenis } from "lenis/react";

interface LenisLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  title?: string;
  onClick? : () => void;
}

export const LenisLink = ({ children, href, className,onClick = () =>{} ,title }: LenisLinkProps) => {
  const lenisRef = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    
    if (!lenisRef) return;
    
    lenisRef.start();
    lenisRef.scrollTo(`${href}`, {
      duration: 1.0, // duración de 1 segundo
      easing: (t) => 1 - Math.pow(1 - t, 3), // easing suave
    });
 
    onClick();
  };

  return (
    <Link title={title} onClick={handleClick} className={className} href={href}>
      {children}
    </Link>
  );
};
