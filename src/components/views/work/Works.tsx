"use client";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface Work {
  title: string;
  logo: string;
  href: string;
  video: string;
  description: string;
}

const works = [
  {
    title: "Hornos Tatacuá",
    logo: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1725293779/logo_xmpe5b.png",
    href: "https://hornostatacua.com.ar",
    video: "https://res.cloudinary.com/dqbpjov4y/video/upload/v1731443160/hornos_qb9xme.mp4",

    description:
      "Desarrollé una página web para una empresa de fabricación de hornos en Bahía Blanca, con un CRUD para la gestión de productos y un panel de administración que permite actualizar la información de los productos de forma sencilla. Aunque no incluye ventas en línea, permite la visualización detallada de productos. Tecnologías: Next.js, Tailwind CSS, Node.js, Prisma ORM, GSAP.",
  },
  {
    title: "Federación Bonaerense de Básquet",
    logo: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1724106743/logofbb_sjebqe.png",
    href: "https://federacionbonaerense.com.ar",
    video: "https://res.cloudinary.com/dqbpjov4y/video/upload/v1731443159/fbb_nbwkti.mp4",

    description:
      "Creé una página web de noticias deportivas para la federación de básquet de Buenos Aires, con un sistema de CRUD para la gestión de noticias. Incluí un panel de administración completo que permite crear, actualizar, eliminar y gestionar publicaciones.Tecnologías: Next.js, React, Prisma ORM, Tailwind CSS, CKEditor, Cloudinary.",
  },
  {
    title: "Gimnasio EFI",
    logo: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1730754526/efi-logo_n57d8x.png",
    href: "https://gimnasioefi.com.ar",
    video: "https://res.cloudinary.com/dqbpjov4y/video/upload/v1731443161/efi_z6asja.mp4",

    description:
      "Desarrollé una página web informativa para un gimnasio en Bahía Blanca que muestra información sobre las clases, instructores y el gimnasio en general. El proyecto incluye la posibilidad de expandir la funcionalidad para vender entrenamientos online.Tecnologías: Next.js, Tailwind CSS, Framer Motion, Node.js, TypeScript.",
  },
  {
    title: "Squadra Construcciones",
    logo: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1730756919/logo--completo_m0hapf.png",
    href: "https://squadra.com.ar",
    video: "https://res.cloudinary.com/dqbpjov4y/video/upload/v1731443161/squadra_jm2lcg.mp4",

    description:
      "Página web informativa para una empresa de construcción en Bahía Blanca que muestra básicamente muestra información de la misma, lo que ofrece y algunos proyectos que han hecho. Tecnologías: Next.js, Tailwind CSS, GSAP, Node.js, TypeScript.",
  },
];

export const Works = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from("svg>path", {
        autoAlpha: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: "-50% top", //Nota para el futuro, el segundo top si pones asi te lo va a pinear desde arriba si lo pones center desde abajo y asi siguiente
          end: "top top", // el top de aca tambien > |
          scrub: 1.2,
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="works"
      className="w-screen h-auto px-4  md:px-10 lg:px-14"
    >
      <div className=" w-full  h-[25vh] lg:h-[50vh] mx-auto hidden md:flex items-center justify-center">
        <svg
          className="w-full "
          fill="white"
          style={{
            transformOrigin: "bottom",
          }}
          viewBox="0 0 1844.39 93.46"
        >
          <path d="M51.35,59.25c.63,0,1.18.22,1.66.67.47.45.71,1.01.71,1.7,0,.63-.26,1.21-.79,1.74-2.53,2.58-5.81,4.6-9.84,6.04-4.03,1.45-8.1,2.17-12.21,2.17-5.85,0-11.11-1.36-15.8-4.07-4.69-2.71-8.37-6.49-11.06-11.34C1.34,51.32,0,45.82,0,39.66s1.34-11.73,4.03-16.71c2.69-4.98,6.37-8.87,11.06-11.69,4.69-2.82,9.95-4.23,15.8-4.23,9.11,0,16.22,2.9,21.33,8.69.53.58.79,1.18.79,1.82s-.24,1.19-.71,1.66c-.47.47-1.05.71-1.74.71s-1.24-.24-1.66-.71c-2.21-2.58-4.82-4.44-7.82-5.57-3-1.13-6.4-1.7-10.19-1.7-4.9,0-9.34,1.18-13.31,3.55-3.98,2.37-7.08,5.66-9.32,9.88-2.24,4.21-3.36,8.98-3.36,14.3s1.12,9.95,3.36,14.06c2.24,4.11,5.33,7.29,9.28,9.56,3.95,2.26,8.4,3.4,13.35,3.4,4.16,0,7.9-.55,11.22-1.66,3.32-1.11,5.85-2.79,7.58-5.06.42-.47.97-.71,1.66-.71Z" />
          <path d="M70.62,69.01c-2.95-1.82-5.24-4.32-6.87-7.5-1.63-3.19-2.45-6.75-2.45-10.71s.82-7.5,2.45-10.67c1.63-3.16,3.92-5.65,6.87-7.46,2.95-1.82,6.32-2.73,10.11-2.73s7.07.91,9.99,2.73c2.92,1.82,5.2,4.31,6.83,7.46,1.63,3.16,2.45,6.72,2.45,10.67s-.82,7.52-2.45,10.71c-1.63,3.19-3.91,5.69-6.83,7.5-2.92,1.82-6.25,2.73-9.99,2.73s-7.16-.91-10.11-2.73ZM88.32,64.9c2.21-1.39,3.92-3.32,5.13-5.77,1.21-2.45,1.82-5.23,1.82-8.33s-.61-5.81-1.82-8.25c-1.21-2.45-2.92-4.37-5.13-5.77-2.21-1.39-4.74-2.09-7.58-2.09s-5.46.7-7.7,2.09c-2.24,1.4-3.96,3.32-5.17,5.77-1.21,2.45-1.82,5.2-1.82,8.25s.6,5.89,1.82,8.33c1.21,2.45,2.93,4.37,5.17,5.77,2.24,1.4,4.81,2.09,7.7,2.09s5.37-.7,7.58-2.09ZM78.41,23.11c-.24-.24-.36-.49-.36-.75,0-.63.21-1.29.63-1.98l5.85-7.82c.74-.95,1.61-1.42,2.61-1.42.53,0,.99.2,1.38.59.39.4.59.88.59,1.46,0,.37-.08.74-.24,1.11s-.34.63-.55.79l-7.5,7.66c-.47.47-1,.71-1.58.71-.32,0-.59-.12-.83-.36Z" />
          <path d="M150.93,68.53c.34.34.51.75.51,1.22,0,.69-.26,1.21-.79,1.58-.53.37-1.16.55-1.9.55-1.69,0-3.12-.72-4.31-2.17-1.18-1.45-1.88-3.44-2.09-5.96-1.69,2.42-3.79,4.32-6.32,5.69-2.53,1.37-5.29,2.05-8.29,2.05-3.85,0-7.3-.91-10.35-2.73-3.05-1.82-5.45-4.36-7.19-7.62s-2.61-6.92-2.61-10.98.88-7.43,2.65-10.59,4.17-5.65,7.23-7.46c3.05-1.82,6.48-2.73,10.27-2.73,3.05,0,5.86.7,8.41,2.09,2.55,1.4,4.67,3.33,6.36,5.81.21-19.06.37-30.6.47-34.6,0-.68.22-1.25.67-1.7.45-.45.99-.67,1.62-.67.68,0,1.26.22,1.74.67.47.45.71,1.01.71,1.7-.16,5.64-.37,22.09-.63,49.38l-.08,10.11c0,.95.25,1.98.75,3.08.5,1.11,1.04,1.82,1.62,2.13.68.42,1.2.8,1.54,1.15ZM135.21,64.62c2.24-1.42,3.99-3.38,5.25-5.89,1.26-2.5,1.9-5.36,1.9-8.57s-.63-5.79-1.9-8.22c-1.26-2.42-3.02-4.33-5.25-5.73-2.24-1.39-4.73-2.09-7.46-2.09-2.9,0-5.52.7-7.86,2.09-2.34,1.4-4.19,3.32-5.53,5.77-1.34,2.45-2.01,5.17-2.01,8.18,0,3.21.67,6.07,2.01,8.57,1.34,2.5,3.19,4.46,5.53,5.89,2.34,1.42,4.96,2.13,7.86,2.13,2.74,0,5.23-.71,7.46-2.13Z" />
          <path d="M165.03,70.98c-.47-.45-.71-.99-.71-1.62l.24-16.27.24-13.35c.05-1-.16-2.04-.63-3.12-.47-1.08-1-1.78-1.58-2.09-.63-.42-1.12-.79-1.46-1.11-.34-.32-.51-.71-.51-1.18,0-.68.26-1.22.79-1.62.53-.4,1.13-.59,1.82-.59,1.84,0,3.36.83,4.54,2.49,1.18,1.66,1.78,3.88,1.78,6.68s-.04,6.71-.12,11.61c-.08,4.9-.15,8.64-.2,11.22l-.16,7.35c0,.68-.24,1.24-.71,1.66-.47.42-1.03.63-1.66.63s-1.19-.22-1.66-.67ZM164.08,17.14c-.68-.68-1.03-1.53-1.03-2.53,0-.95.36-1.76,1.07-2.45.71-.68,1.57-1.03,2.57-1.03.95,0,1.75.33,2.41.99.66.66.99,1.49.99,2.49s-.33,1.84-.99,2.53c-.66.68-1.46,1.03-2.41,1.03-1.05,0-1.92-.34-2.61-1.03Z" />
          <path d="M221.28,32.11c.37.45.55.99.55,1.62s-.19,1.15-.55,1.54c-.37.4-.87.59-1.5.59-.32,0-.58-.05-.79-.16-.11-.05-.55-.08-1.34-.08-1.63.05-3.05.69-4.27,1.9,1.63,2.53,2.45,5.37,2.45,8.53,0,2.9-.7,5.53-2.09,7.9-1.4,2.37-3.32,4.27-5.77,5.69-2.45,1.42-5.2,2.19-8.25,2.29-1.42,0-2.67.41-3.75,1.22-1.08.82-1.62,1.67-1.62,2.57,0,.84.51,1.58,1.54,2.21,1.03.63,2.54,1.08,4.54,1.34,4.16.53,7.43,1.2,9.8,2.01,2.37.82,4.09,1.94,5.17,3.36,1.08,1.42,1.62,3.29,1.62,5.61,0,2.63-.8,4.95-2.41,6.95-1.61,2-3.79,3.54-6.56,4.62-2.76,1.08-5.86,1.62-9.28,1.62-3.84,0-7.37-.83-10.59-2.49-3.21-1.66-5.71-3.99-7.5-6.99-.21-.26-.32-.69-.32-1.26,0-.63.22-1.16.67-1.58.45-.42,1.01-.63,1.7-.63.37,0,.72.11,1.07.32.34.21.59.45.75.71,1.26,2.11,3.21,3.84,5.85,5.21,2.63,1.37,5.48,2.05,8.53,2.05,3.84,0,7.07-.76,9.68-2.29,2.61-1.53,3.91-3.58,3.91-6.16,0-1.42-.41-2.54-1.22-3.36s-2.05-1.46-3.71-1.94c-1.66-.47-4.04-.95-7.15-1.42-3.84-.63-6.68-1.57-8.49-2.8-1.82-1.24-2.73-2.83-2.73-4.78,0-2.16,1.18-3.87,3.55-5.13-3.32-1.05-5.96-2.92-7.94-5.61-1.97-2.69-2.96-5.77-2.96-9.24,0-3,.74-5.74,2.21-8.22s3.52-4.41,6.12-5.81c2.61-1.4,5.52-2.09,8.73-2.09,2.26,0,4.38.37,6.36,1.11,1.97.74,3.73,1.77,5.25,3.08,1-1,2.16-1.78,3.48-2.33,1.32-.55,2.63-.83,3.95-.83.47,0,1.13.11,1.97.32.53.11.97.38,1.34.83ZM205.12,55.81c1.87-.97,3.33-2.32,4.38-4.03,1.05-1.71,1.58-3.62,1.58-5.73s-.53-4.04-1.58-5.81c-1.05-1.76-2.52-3.15-4.38-4.15-1.87-1-3.94-1.5-6.2-1.5s-4.42.5-6.32,1.5c-1.9,1-3.37,2.37-4.42,4.11-1.05,1.74-1.58,3.69-1.58,5.85s.53,4.02,1.58,5.73c1.05,1.71,2.53,3.05,4.42,4.03,1.9.98,4,1.46,6.32,1.46s4.33-.49,6.2-1.46Z" />
          <path d="M236.52,69.01c-2.95-1.82-5.24-4.32-6.87-7.5-1.63-3.19-2.45-6.75-2.45-10.71s.82-7.5,2.45-10.67c1.63-3.16,3.92-5.65,6.87-7.46,2.95-1.82,6.32-2.73,10.11-2.73s7.07.91,9.99,2.73c2.92,1.82,5.2,4.31,6.83,7.46,1.63,3.16,2.45,6.72,2.45,10.67s-.82,7.52-2.45,10.71c-1.63,3.19-3.91,5.69-6.83,7.5-2.92,1.82-6.25,2.73-9.99,2.73s-7.16-.91-10.11-2.73ZM254.22,64.9c2.21-1.39,3.92-3.32,5.13-5.77,1.21-2.45,1.82-5.23,1.82-8.33s-.61-5.81-1.82-8.25c-1.21-2.45-2.92-4.37-5.13-5.77-2.21-1.39-4.74-2.09-7.58-2.09s-5.46.7-7.7,2.09c-2.24,1.4-3.96,3.32-5.17,5.77-1.21,2.45-1.82,5.2-1.82,8.25s.6,5.89,1.82,8.33c1.21,2.45,2.94,4.37,5.17,5.77,2.24,1.4,4.81,2.09,7.7,2.09s5.37-.7,7.58-2.09Z" />
          <path d="M336.58,62.57c.39.42.59.95.59,1.58,0,.58-.21,1.16-.63,1.74-1.53,1.84-3.81,3.31-6.83,4.38-3.03,1.08-6.31,1.62-9.84,1.62-3.79,0-7.22-.86-10.27-2.57-3.06-1.71-5.45-4.09-7.19-7.15-1.74-3.05-2.61-6.5-2.61-10.35,0-4.05.91-7.73,2.73-11.02,1.82-3.29,4.29-5.89,7.43-7.78,3.13-1.9,6.62-2.84,10.47-2.84,3,0,5.67.51,8.02,1.54,2.34,1.03,4.17,2.45,5.49,4.27,1.32,1.82,1.97,3.83,1.97,6.04,0,3.11-1.41,5.62-4.23,7.54-2.82,1.92-6.54,2.88-11.18,2.88-3.06,0-5.99-.41-8.81-1.22-2.82-.82-5.07-1.88-6.75-3.2-.26,1.48-.39,2.84-.39,4.11,0,2.9.66,5.49,1.97,7.78,1.32,2.29,3.13,4.07,5.45,5.33,2.32,1.26,4.95,1.9,7.9,1.9,3.11,0,5.79-.38,8.06-1.15,2.26-.76,3.98-1.88,5.13-3.36.47-.47,1.11-.71,1.9-.71.68,0,1.22.21,1.62.63ZM312.05,37.21c-2.48,1.53-4.37,3.66-5.69,6.4,1.47,1.21,3.46,2.24,5.96,3.08,2.5.84,5.23,1.26,8.18,1.26,3.26,0,5.86-.53,7.78-1.58,1.92-1.05,2.88-2.45,2.88-4.19,0-2.05-1-3.78-3-5.17-2-1.39-4.58-2.09-7.74-2.09s-5.9.76-8.37,2.29Z" />
          <path d="M384.92,68.53c.34.34.51.75.51,1.22,0,.69-.26,1.21-.79,1.58-.53.37-1.13.55-1.82.55-1.84,0-3.37-.86-4.58-2.57-1.21-1.71-1.82-4.01-1.82-6.91l.08-10.35c.05-1.63.08-3.69.08-6.16,0-3.42-.96-6.12-2.88-8.1-1.92-1.97-4.52-2.96-7.78-2.96s-5.9,1.13-7.9,3.4c-2,2.26-3.13,5.13-3.4,8.61v-.08c-.26,10.27-.39,17.56-.39,21.88,0,.74-.24,1.32-.71,1.74-.47.42-1,.63-1.58.63-.63,0-1.2-.21-1.7-.63-.5-.42-.75-1-.75-1.74l.24-15.96.24-12.96c.05-1-.16-2.04-.63-3.12-.47-1.08-1-1.78-1.58-2.09-.63-.42-1.12-.8-1.46-1.15-.34-.34-.51-.75-.51-1.22,0-.68.26-1.21.79-1.58.53-.37,1.13-.55,1.82-.55,1.53,0,2.84.58,3.95,1.74,1.11,1.16,1.82,2.79,2.13,4.9,1.42-2.05,3.13-3.63,5.14-4.74,2-1.11,4.11-1.66,6.32-1.66,4.63,0,8.36,1.37,11.18,4.11,2.82,2.74,4.23,6.35,4.23,10.82l-.16,16.98c0,1,.24,2.04.71,3.12.47,1.08,1,1.78,1.58,2.09.63.42,1.12.8,1.46,1.15Z" />
          <path d="M455.75,69.84c0,.63-.25,1.19-.75,1.66-.5.47-1.09.71-1.78.71-1.84,0-3.49-.54-4.94-1.62-1.45-1.08-2.36-2.62-2.73-4.62-.37-1.84-.55-4.53-.55-8.06,0-1.84.1-4.71.32-8.61-2.26,1.58-5.19,2.98-8.77,4.19-4,1.26-7.02,2.57-9.05,3.91s-3.04,3.07-3.04,5.17c0,1.53.57,2.78,1.7,3.75,1.13.98,2.59,1.46,4.38,1.46,1.26,0,2.55-.4,3.87-1.19,1.32-.79,2.5-1.92,3.55-3.4.37-.47.95-.71,1.74-.71.68,0,1.24.22,1.66.67.42.45.63.99.63,1.62,0,.58-.19,1.11-.55,1.58-3.16,4.06-6.79,6.08-10.9,6.08-3.11,0-5.68-.9-7.7-2.69s-3.04-4.11-3.04-6.95c0-3.26,1.41-5.94,4.23-8.02,2.82-2.08,6.6-3.91,11.34-5.49,3.21-1,5.7-2.01,7.47-3.04,1.76-1.03,2.75-2.33,2.96-3.91.05-.11.08-.29.08-.55v-.79c0-2-.75-3.59-2.25-4.78-1.5-1.18-3.7-1.78-6.6-1.78-2.53,0-4.69.45-6.48,1.34-1.79.9-3.11,2.21-3.95,3.95-.21.37-.5.69-.87.95-.37.26-.76.39-1.18.39-.69,0-1.26-.24-1.74-.71-.47-.47-.71-1.03-.71-1.66,0-1.53.78-2.97,2.33-4.34,1.55-1.37,3.5-2.46,5.85-3.28,2.34-.82,4.59-1.22,6.75-1.22,4.16,0,7.45,1.01,9.88,3.04,2.42,2.03,3.63,4.75,3.63,8.18v1.19c-.53,7.64-.79,12.98-.79,16.04,0,2.27.16,4.4.47,6.4.21.84.62,1.53,1.22,2.05.6.53,1.25.82,1.94.87,1.58.26,2.37,1,2.37,2.21Z" />
          <path d="M471.66,69.52c-2.98-1.84-5.35-4.35-7.11-7.51-1.77-3.16-2.65-6.64-2.65-10.43,0-4.05.84-7.71,2.53-10.98,1.69-3.26,4-5.81,6.95-7.62,2.95-1.82,6.27-2.73,9.95-2.73,4.16,0,7.64,1.09,10.43,3.28,2.79,2.19,4.35,5.02,4.66,8.49v.39c0,.9-.21,1.57-.63,2.01-.42.45-1,.67-1.74.67-.58,0-1.08-.21-1.5-.63-.42-.42-.66-1.08-.71-1.98-.21-2.05-1.3-3.82-3.28-5.29-1.97-1.47-4.38-2.21-7.23-2.21s-5.23.71-7.46,2.13c-2.24,1.42-4,3.41-5.29,5.96-1.29,2.56-1.93,5.49-1.93,8.81,0,2.9.66,5.53,1.97,7.9,1.32,2.37,3.12,4.25,5.41,5.65,2.29,1.4,4.78,2.09,7.47,2.09s5.06-.42,7.27-1.26c2.21-.84,3.84-1.92,4.9-3.24.21-.21.49-.39.83-.55.34-.16.67-.24.99-.24.68,0,1.25.22,1.7.67.45.45.67,1.01.67,1.7,0,.42-.21.95-.63,1.58-1.37,1.79-3.52,3.25-6.44,4.38s-6.02,1.7-9.28,1.7c-3.58,0-6.86-.92-9.84-2.76Z" />
          <path d="M515.19,69.52c-2.98-1.84-5.35-4.35-7.11-7.51-1.77-3.16-2.65-6.64-2.65-10.43,0-4.05.84-7.71,2.53-10.98,1.69-3.26,4-5.81,6.95-7.62,2.95-1.82,6.27-2.73,9.95-2.73,4.16,0,7.64,1.09,10.43,3.28,2.79,2.19,4.35,5.02,4.66,8.49v.39c0,.9-.21,1.57-.63,2.01-.42.45-1,.67-1.74.67-.58,0-1.08-.21-1.5-.63-.42-.42-.66-1.08-.71-1.98-.21-2.05-1.3-3.82-3.28-5.29-1.97-1.47-4.38-2.21-7.23-2.21s-5.23.71-7.46,2.13c-2.24,1.42-4,3.41-5.29,5.96-1.29,2.56-1.93,5.49-1.93,8.81,0,2.9.66,5.53,1.97,7.9,1.32,2.37,3.12,4.25,5.41,5.65,2.29,1.4,4.78,2.09,7.47,2.09s5.06-.42,7.27-1.26c2.21-.84,3.84-1.92,4.9-3.24.21-.21.49-.39.83-.55.34-.16.67-.24.99-.24.68,0,1.25.22,1.7.67.45.45.67,1.01.67,1.7,0,.42-.21.95-.63,1.58-1.37,1.79-3.52,3.25-6.44,4.38s-6.02,1.7-9.28,1.7c-3.58,0-6.86-.92-9.84-2.76Z" />
          <path d="M555.6,70.98c-.47-.45-.71-.99-.71-1.62l.24-16.27.24-13.35c.05-1-.16-2.04-.63-3.12-.47-1.08-1-1.78-1.58-2.09-.63-.42-1.12-.79-1.46-1.11-.34-.32-.51-.71-.51-1.18,0-.68.26-1.22.79-1.62.53-.4,1.13-.59,1.82-.59,1.84,0,3.36.83,4.54,2.49,1.19,1.66,1.78,3.88,1.78,6.68s-.04,6.71-.12,11.61c-.08,4.9-.15,8.64-.2,11.22l-.16,7.35c0,.68-.24,1.24-.71,1.66-.47.42-1.03.63-1.66.63s-1.18-.22-1.66-.67ZM554.65,17.14c-.69-.68-1.03-1.53-1.03-2.53,0-.95.36-1.76,1.07-2.45.71-.68,1.57-1.03,2.57-1.03.95,0,1.75.33,2.41.99.66.66.99,1.49.99,2.49s-.33,1.84-.99,2.53c-.66.68-1.46,1.03-2.41,1.03-1.05,0-1.92-.34-2.61-1.03Z" />
          <path d="M581.04,69.01c-2.95-1.82-5.24-4.32-6.87-7.5-1.63-3.19-2.45-6.75-2.45-10.71s.82-7.5,2.45-10.67c1.63-3.16,3.92-5.65,6.87-7.46,2.95-1.82,6.32-2.73,10.11-2.73s7.07.91,9.99,2.73c2.92,1.82,5.2,4.31,6.83,7.46,1.63,3.16,2.45,6.72,2.45,10.67s-.82,7.52-2.45,10.71c-1.63,3.19-3.91,5.69-6.83,7.5-2.92,1.82-6.25,2.73-9.99,2.73s-7.16-.91-10.11-2.73ZM598.73,64.9c2.21-1.39,3.92-3.32,5.13-5.77,1.21-2.45,1.82-5.23,1.82-8.33s-.61-5.81-1.82-8.25c-1.21-2.45-2.92-4.37-5.13-5.77-2.21-1.39-4.74-2.09-7.58-2.09s-5.46.7-7.7,2.09c-2.24,1.4-3.96,3.32-5.17,5.77-1.21,2.45-1.82,5.2-1.82,8.25s.6,5.89,1.82,8.33c1.21,2.45,2.94,4.37,5.17,5.77,2.24,1.4,4.81,2.09,7.7,2.09s5.37-.7,7.58-2.09ZM588.82,23.11c-.24-.24-.36-.49-.36-.75,0-.63.21-1.29.63-1.98l5.85-7.82c.74-.95,1.61-1.42,2.61-1.42.53,0,.99.2,1.38.59s.59.88.59,1.46c0,.37-.08.74-.24,1.11-.16.37-.34.63-.55.79l-7.5,7.66c-.47.47-1,.71-1.58.71-.32,0-.59-.12-.83-.36Z" />
          <path d="M658.18,68.53c.34.34.51.75.51,1.22,0,.69-.26,1.21-.79,1.58-.53.37-1.13.55-1.82.55-1.84,0-3.37-.86-4.58-2.57-1.21-1.71-1.82-4.01-1.82-6.91l.08-10.35c.05-1.63.08-3.69.08-6.16,0-3.42-.96-6.12-2.88-8.1-1.92-1.97-4.52-2.96-7.78-2.96s-5.9,1.13-7.9,3.4c-2,2.26-3.13,5.13-3.4,8.61v-.08c-.26,10.27-.4,17.56-.4,21.88,0,.74-.24,1.32-.71,1.74-.47.42-1,.63-1.58.63-.63,0-1.2-.21-1.7-.63-.5-.42-.75-1-.75-1.74l.24-15.96.24-12.96c.05-1-.16-2.04-.63-3.12-.47-1.08-1-1.78-1.58-2.09-.63-.42-1.12-.8-1.46-1.15-.34-.34-.51-.75-.51-1.22,0-.68.26-1.21.79-1.58.53-.37,1.13-.55,1.82-.55,1.53,0,2.84.58,3.95,1.74,1.11,1.16,1.82,2.79,2.13,4.9,1.42-2.05,3.13-3.63,5.13-4.74,2-1.11,4.11-1.66,6.32-1.66,4.63,0,8.36,1.37,11.18,4.11,2.82,2.74,4.23,6.35,4.23,10.82l-.16,16.98c0,1,.24,2.04.71,3.12.47,1.08,1,1.78,1.58,2.09.63.42,1.12.8,1.46,1.15Z" />
          <path d="M670.82,42.03c-.76-.79-1.15-1.71-1.15-2.76s.38-1.96,1.15-2.73,1.67-1.15,2.73-1.15,1.97.38,2.76,1.15c.79.76,1.19,1.67,1.19,2.73s-.4,1.97-1.19,2.76-1.71,1.18-2.76,1.18-1.96-.39-2.73-1.18ZM670.82,69.92c-.76-.79-1.15-1.71-1.15-2.76s.38-1.96,1.15-2.73,1.67-1.15,2.73-1.15,1.97.38,2.76,1.15c.79.76,1.19,1.67,1.19,2.73s-.4,1.97-1.19,2.76-1.71,1.18-2.76,1.18-1.96-.39-2.73-1.18Z" />
          <path d="M791.33,68.57c0,.68-.24,1.28-.71,1.78-.47.5-1.05.75-1.74.75-.53,0-1.03-.17-1.5-.51-.47-.34-.76-.78-.87-1.3-.47-2.05-2.58-10.67-6.32-25.83l-6.56-26.78-.24-1.18-.24,1.18-14.62,51.35c-.42,1.32-1.29,1.97-2.61,1.97-.58,0-1.12-.18-1.62-.55-.5-.37-.83-.82-.99-1.34l-16.12-51.11-.32-1.26-.24,1.26c-2.05,9.22-4.19,18.89-6.4,29.03-2.21,10.14-3.9,17.84-5.06,23.11-.11.47-.39.88-.87,1.22-.47.34-.97.51-1.5.51-.68,0-1.25-.22-1.7-.67-.45-.45-.67-1.01-.67-1.7l.08-.55,13.59-59.25c.1-.58.41-1.05.91-1.42.5-.37,1.07-.55,1.7-.55.58,0,1.11.17,1.58.51.47.34.79.8.95,1.38l16.19,51.82c.16.58.26,1.13.32,1.66l.4-1.66,14.85-52.3c.16-.58.49-1.05.99-1.42.5-.37,1.04-.55,1.62-.55.63,0,1.2.17,1.7.51.5.34.83.8.99,1.38l6.16,24.65,8.77,35.31c.05.16.08.34.08.55Z" />
          <path d="M806.5,70.98c-.47-.45-.71-.99-.71-1.62l.24-16.27.24-13.35c.05-1-.16-2.04-.63-3.12-.47-1.08-1-1.78-1.58-2.09-.63-.42-1.12-.79-1.46-1.11-.34-.32-.51-.71-.51-1.18,0-.68.26-1.22.79-1.62.53-.4,1.13-.59,1.82-.59,1.84,0,3.36.83,4.54,2.49,1.19,1.66,1.78,3.88,1.78,6.68s-.04,6.71-.12,11.61c-.08,4.9-.15,8.64-.2,11.22l-.16,7.35c0,.68-.24,1.24-.71,1.66-.47.42-1.03.63-1.66.63s-1.18-.22-1.66-.67ZM805.55,17.14c-.69-.68-1.03-1.53-1.03-2.53,0-.95.36-1.76,1.07-2.45.71-.68,1.57-1.03,2.57-1.03.95,0,1.75.33,2.41.99.66.66.99,1.49.99,2.49s-.33,1.84-.99,2.53c-.66.68-1.46,1.03-2.41,1.03-1.05,0-1.92-.34-2.61-1.03Z" />
          <path d="M829.92,69.17c-3.13-1.61-5.46-3.62-6.99-6.04-.21-.37-.32-.76-.32-1.18,0-.68.22-1.25.67-1.7.45-.45,1.01-.67,1.7-.67.89,0,1.55.37,1.97,1.11,1,1.84,2.67,3.36,5.02,4.54,2.34,1.18,4.7,1.78,7.07,1.78,3.26,0,5.86-.51,7.78-1.54,1.92-1.03,2.88-2.46,2.88-4.3,0-1.74-.82-3.24-2.45-4.5-1.63-1.26-4.48-2.63-8.53-4.11-4.06-1.47-7.36-3.09-9.92-4.86-2.55-1.76-3.83-4.17-3.83-7.23,0-2,.64-3.8,1.94-5.41,1.29-1.61,3.03-2.87,5.21-3.79,2.18-.92,4.59-1.38,7.23-1.38,3.48,0,6.57.78,9.28,2.33,2.71,1.55,4.59,3.59,5.65,6.12.1.21.16.55.16,1.03,0,.74-.21,1.32-.63,1.74s-.98.63-1.66.63c-.42,0-.83-.12-1.22-.36-.4-.24-.72-.57-.99-.99-.79-1.74-2.16-3.16-4.11-4.27-1.95-1.11-4.16-1.66-6.64-1.66-2.74,0-5,.57-6.79,1.7-1.79,1.13-2.69,2.57-2.69,4.31s.99,3.23,2.96,4.46,4.65,2.38,8.02,3.44c4.9,1.58,8.41,3.32,10.55,5.21,2.13,1.9,3.2,4.42,3.2,7.58s-1.37,5.82-4.11,7.66c-2.74,1.84-6.5,2.77-11.3,2.77-2.95,0-5.99-.8-9.12-2.41Z" />
          <path d="M923.42,32.11c3.05,1.82,5.45,4.3,7.19,7.46,1.74,3.16,2.61,6.69,2.61,10.59s-.87,7.73-2.61,11.02c-1.74,3.29-4.13,5.87-7.19,7.74-3.06,1.87-6.48,2.8-10.27,2.8-3.05,0-5.86-.78-8.41-2.33-2.56-1.55-4.67-3.67-6.36-6.36-.21,16.7-.34,25.83-.4,27.41,0,.63-.22,1.18-.67,1.66-.45.47-1.04.71-1.78.71-.63,0-1.17-.24-1.62-.71-.45-.47-.67-1.03-.67-1.66l.63-50.72c0-1-.25-2.04-.75-3.12-.5-1.08-1.04-1.78-1.62-2.09-.63-.42-1.12-.8-1.46-1.15-.34-.34-.51-.75-.51-1.22,0-.68.26-1.21.79-1.58.53-.37,1.13-.55,1.82-.55,1.63,0,3.04.67,4.23,2.01,1.18,1.34,1.91,3.2,2.17,5.57,1.68-2.53,3.8-4.53,6.36-6,2.55-1.47,5.33-2.21,8.33-2.21,3.74,0,7.14.91,10.19,2.73ZM920.97,64.78c2.32-1.47,4.15-3.49,5.49-6.04,1.34-2.55,2.01-5.41,2.01-8.57s-.67-5.79-2.01-8.22c-1.34-2.42-3.17-4.33-5.49-5.73-2.32-1.39-4.92-2.09-7.82-2.09s-5.29.7-7.5,2.09c-2.21,1.4-3.95,3.31-5.21,5.73-1.26,2.42-1.9,5.16-1.9,8.22,0,3.21.63,6.1,1.9,8.65,1.26,2.56,3,4.56,5.21,6,2.21,1.45,4.71,2.17,7.5,2.17s5.5-.74,7.82-2.21Z" />
          <path d="M967.82,33.18c1.9,1.63,2.84,3.71,2.84,6.24,0,1.84-.61,3.54-1.82,5.1-1.21,1.55-2.74,2.73-4.58,3.52-.42.11-.74.16-.95.16-.63,0-1.18-.22-1.66-.67-.47-.45-.71-.99-.71-1.62,0-.53.14-.99.43-1.38.29-.39.64-.7,1.07-.91.9-.32,1.7-.88,2.41-1.7s1.07-1.65,1.07-2.49c0-1.26-.49-2.28-1.46-3.04-.97-.76-2.15-1.15-3.52-1.15h-10.98c.68,1.53,1.03,3.13,1.03,4.82l-.24,10.27c-.26,12.48-.4,18.85-.4,19.12-.05.63-.3,1.18-.75,1.66-.45.47-.99.71-1.62.71-.68,0-1.25-.24-1.7-.71-.45-.47-.67-1.03-.67-1.66,0-.32.13-6.66.4-19.04l.24-10.27c0-1.11-.25-2.13-.75-3.08-.5-.95-1.09-1.58-1.78-1.9-1.26-.84-1.9-1.66-1.9-2.45,0-.58.21-1.05.63-1.42.42-.37.95-.55,1.58-.55h16.91c2.69,0,4.98.82,6.87,2.45Z" />
          <path d="M986.93,69.01c-2.95-1.82-5.24-4.32-6.87-7.5-1.63-3.19-2.45-6.75-2.45-10.71s.82-7.5,2.45-10.67c1.63-3.16,3.92-5.65,6.87-7.46,2.95-1.82,6.32-2.73,10.11-2.73s7.07.91,9.99,2.73c2.92,1.82,5.2,4.31,6.83,7.46,1.63,3.16,2.45,6.72,2.45,10.67s-.82,7.52-2.45,10.71c-1.63,3.19-3.91,5.69-6.83,7.5-2.92,1.82-6.25,2.73-9.99,2.73s-7.16-.91-10.11-2.73ZM1004.63,64.9c2.21-1.39,3.92-3.32,5.13-5.77,1.21-2.45,1.82-5.23,1.82-8.33s-.61-5.81-1.82-8.25c-1.21-2.45-2.92-4.37-5.13-5.77-2.21-1.39-4.74-2.09-7.58-2.09s-5.46.7-7.7,2.09c-2.24,1.4-3.96,3.32-5.17,5.77-1.21,2.45-1.82,5.2-1.82,8.25s.6,5.89,1.82,8.33c1.21,2.45,2.93,4.37,5.17,5.77,2.24,1.4,4.81,2.09,7.7,2.09s5.37-.7,7.58-2.09Z" />
          <path d="M1060.4,30.89c.47.47.74,1.03.79,1.66,0,.47-.05.82-.16,1.03l-20.14,43.45c-2.37,5.21-4.57,9.04-6.6,11.49-2.03,2.45-4.52,4.04-7.47,4.78-.16.05-.37.08-.63.08-.63,0-1.17-.24-1.62-.71-.45-.47-.67-1.05-.67-1.74,0-.53.17-1.01.51-1.46.34-.45.78-.72,1.3-.83,2.16-.53,4.02-1.79,5.57-3.79,1.55-2,3.3-5.16,5.25-9.48l1.97-4.34-14.54-37.37c-.11-.42-.16-.76-.16-1.03,0-.58.24-1.09.71-1.54.47-.45,1.03-.67,1.66-.67.47,0,.91.15,1.3.43.4.29.7.67.91,1.15l12.8,33.18,15.33-33.5c.21-.42.51-.78.91-1.07.39-.29.83-.43,1.3-.43.63,0,1.19.24,1.66.71Z" />
          <path d="M1103.26,62.57c.4.42.59.95.59,1.58,0,.58-.21,1.16-.63,1.74-1.53,1.84-3.81,3.31-6.83,4.38s-6.31,1.62-9.83,1.62c-3.79,0-7.22-.86-10.27-2.57-3.05-1.71-5.45-4.09-7.19-7.15-1.74-3.05-2.61-6.5-2.61-10.35,0-4.05.91-7.73,2.73-11.02,1.82-3.29,4.29-5.89,7.43-7.78,3.13-1.9,6.62-2.84,10.47-2.84,3,0,5.67.51,8.02,1.54,2.34,1.03,4.17,2.45,5.49,4.27,1.32,1.82,1.98,3.83,1.98,6.04,0,3.11-1.41,5.62-4.23,7.54-2.82,1.92-6.54,2.88-11.18,2.88-3.05,0-5.99-.41-8.81-1.22-2.82-.82-5.07-1.88-6.75-3.2-.26,1.48-.39,2.84-.39,4.11,0,2.9.66,5.49,1.97,7.78s3.13,4.07,5.45,5.33c2.32,1.26,4.95,1.9,7.9,1.9,3.11,0,5.79-.38,8.06-1.15,2.26-.76,3.98-1.88,5.13-3.36.47-.47,1.11-.71,1.9-.71.68,0,1.22.21,1.62.63ZM1078.73,37.21c-2.48,1.53-4.37,3.66-5.69,6.4,1.47,1.21,3.46,2.24,5.96,3.08,2.5.84,5.23,1.26,8.18,1.26,3.26,0,5.86-.53,7.78-1.58,1.92-1.05,2.88-2.45,2.88-4.19,0-2.05-1-3.78-3-5.17-2-1.39-4.58-2.09-7.74-2.09s-5.9.76-8.37,2.29Z" />
          <path d="M1121.19,69.52c-2.98-1.84-5.35-4.35-7.11-7.51-1.77-3.16-2.65-6.64-2.65-10.43,0-4.05.84-7.71,2.53-10.98,1.69-3.26,4-5.81,6.95-7.62,2.95-1.82,6.27-2.73,9.95-2.73,4.16,0,7.64,1.09,10.43,3.28,2.79,2.19,4.35,5.02,4.66,8.49v.39c0,.9-.21,1.57-.63,2.01-.42.45-1,.67-1.74.67-.58,0-1.08-.21-1.5-.63-.42-.42-.66-1.08-.71-1.98-.21-2.05-1.3-3.82-3.28-5.29-1.97-1.47-4.38-2.21-7.23-2.21s-5.23.71-7.46,2.13c-2.24,1.42-4,3.41-5.29,5.96-1.29,2.56-1.93,5.49-1.93,8.81,0,2.9.66,5.53,1.97,7.9,1.32,2.37,3.12,4.25,5.41,5.65,2.29,1.4,4.78,2.09,7.47,2.09s5.06-.42,7.27-1.26c2.21-.84,3.84-1.92,4.9-3.24.21-.21.49-.39.83-.55.34-.16.67-.24.99-.24.68,0,1.25.22,1.7.67.45.45.67,1.01.67,1.7,0,.42-.21.95-.63,1.58-1.37,1.79-3.52,3.25-6.44,4.38s-6.02,1.7-9.28,1.7c-3.58,0-6.86-.92-9.84-2.76Z" />
          <path d="M1174.63,31.13c.68,0,1.25.22,1.7.67.45.45.67,1.01.67,1.7,0,.63-.22,1.19-.67,1.66-.45.47-1.01.71-1.7.71h-8.53c0,14.27.03,22.33.08,24.17.05,2,.54,3.42,1.46,4.27.92.84,2.12,1.45,3.59,1.82.68.16,1.24.49,1.66.99.42.5.63,1.09.63,1.78s-.25,1.24-.75,1.66c-.5.42-1.09.63-1.78.63-1.63,0-3.19-.41-4.66-1.22-1.47-.82-2.66-1.99-3.55-3.51-.9-1.53-1.34-3.29-1.34-5.29,0-9.85-.03-18.28-.08-25.28h-4.34c-.63,0-1.19-.24-1.66-.71-.47-.47-.71-1.03-.71-1.66,0-.68.24-1.25.71-1.7.47-.45,1.03-.67,1.66-.67h4.34v-13.98c0-.63.22-1.19.67-1.66s1.01-.71,1.7-.71c.63,0,1.18.24,1.66.71.47.47.71,1.03.71,1.66v13.98h8.53Z" />
          <path d="M1193.04,69.01c-2.95-1.82-5.24-4.32-6.87-7.5-1.63-3.19-2.45-6.75-2.45-10.71s.82-7.5,2.45-10.67c1.63-3.16,3.92-5.65,6.87-7.46,2.95-1.82,6.32-2.73,10.11-2.73s7.07.91,9.99,2.73c2.92,1.82,5.2,4.31,6.83,7.46,1.63,3.16,2.45,6.72,2.45,10.67s-.82,7.52-2.45,10.71c-1.63,3.19-3.91,5.69-6.83,7.5-2.92,1.82-6.25,2.73-9.99,2.73s-7.16-.91-10.11-2.73ZM1210.74,64.9c2.21-1.39,3.92-3.32,5.13-5.77,1.21-2.45,1.82-5.23,1.82-8.33s-.61-5.81-1.82-8.25c-1.21-2.45-2.92-4.37-5.13-5.77-2.21-1.39-4.74-2.09-7.58-2.09s-5.46.7-7.7,2.09c-2.24,1.4-3.96,3.32-5.17,5.77-1.21,2.45-1.82,5.2-1.82,8.25s.6,5.89,1.82,8.33c1.21,2.45,2.93,4.37,5.17,5.77,2.24,1.4,4.81,2.09,7.7,2.09s5.37-.7,7.58-2.09Z" />
          <path d="M1237.32,69.17c-3.13-1.61-5.46-3.62-6.99-6.04-.21-.37-.32-.76-.32-1.18,0-.68.22-1.25.67-1.7s1.01-.67,1.7-.67c.9,0,1.55.37,1.98,1.11,1,1.84,2.67,3.36,5.02,4.54,2.34,1.18,4.7,1.78,7.07,1.78,3.26,0,5.86-.51,7.78-1.54,1.92-1.03,2.88-2.46,2.88-4.3,0-1.74-.82-3.24-2.45-4.5-1.63-1.26-4.48-2.63-8.53-4.11-4.06-1.47-7.36-3.09-9.91-4.86-2.56-1.76-3.83-4.17-3.83-7.23,0-2,.64-3.8,1.94-5.41,1.29-1.61,3.03-2.87,5.21-3.79,2.19-.92,4.59-1.38,7.23-1.38,3.48,0,6.57.78,9.28,2.33,2.71,1.55,4.59,3.59,5.65,6.12.1.21.16.55.16,1.03,0,.74-.21,1.32-.63,1.74-.42.42-.97.63-1.66.63-.42,0-.83-.12-1.22-.36-.39-.24-.72-.57-.99-.99-.79-1.74-2.16-3.16-4.11-4.27-1.95-1.11-4.16-1.66-6.64-1.66-2.74,0-5,.57-6.79,1.7-1.79,1.13-2.69,2.57-2.69,4.31s.99,3.23,2.96,4.46c1.98,1.24,4.65,2.38,8.02,3.44,4.9,1.58,8.41,3.32,10.55,5.21,2.13,1.9,3.2,4.42,3.2,7.58s-1.37,5.82-4.11,7.66c-2.74,1.84-6.51,2.77-11.3,2.77-2.95,0-5.99-.8-9.12-2.41Z" />
          <path d="M1335.83,68.53c.34.34.51.75.51,1.22,0,.69-.26,1.21-.79,1.58-.53.37-1.16.55-1.9.55-1.84,0-3.36-.83-4.54-2.49s-1.78-3.91-1.78-6.75l.08-16.75c0-3.42-.95-6.12-2.84-8.1-1.9-1.97-4.48-2.96-7.74-2.96s-5.72,1.04-7.66,3.12c-1.95,2.08-3.16,4.81-3.63,8.18l-.32,22.83c0,.63-.24,1.19-.71,1.66s-1.03.71-1.66.71c-.68,0-1.25-.24-1.7-.71-.45-.47-.67-1.03-.67-1.66l.79-59.25c0-1-.25-2.04-.75-3.12-.5-1.08-1.04-1.78-1.62-2.09-.63-.42-1.12-.8-1.46-1.15-.34-.34-.51-.75-.51-1.22,0-.68.26-1.21.79-1.58.53-.37,1.13-.55,1.82-.55,1.84,0,3.38.86,4.62,2.57,1.24,1.71,1.86,4.02,1.86,6.91,0,2.21-.05,6.74-.16,13.59-.11,5.58-.16,9.95-.16,13.11,1.37-1.9,3.03-3.36,4.98-4.38,1.95-1.03,4-1.54,6.16-1.54,4.63,0,8.35,1.37,11.14,4.11,2.79,2.74,4.19,6.35,4.19,10.82l-.08,17.14c0,1,.24,2.01.71,3.04.47,1.03,1,1.7,1.58,2.01.63.42,1.12.8,1.46,1.15Z" />
          <path d="M1380.27,69.84c0,.63-.25,1.19-.75,1.66-.5.47-1.09.71-1.78.71-1.84,0-3.49-.54-4.94-1.62-1.45-1.08-2.36-2.62-2.73-4.62-.37-1.84-.55-4.53-.55-8.06,0-1.84.1-4.71.32-8.61-2.26,1.58-5.19,2.98-8.77,4.19-4,1.26-7.02,2.57-9.05,3.91s-3.04,3.07-3.04,5.17c0,1.53.57,2.78,1.7,3.75,1.13.98,2.59,1.46,4.38,1.46,1.26,0,2.55-.4,3.87-1.19,1.32-.79,2.5-1.92,3.55-3.4.37-.47.95-.71,1.74-.71.68,0,1.24.22,1.66.67.42.45.63.99.63,1.62,0,.58-.19,1.11-.55,1.58-3.16,4.06-6.79,6.08-10.9,6.08-3.11,0-5.68-.9-7.7-2.69s-3.04-4.11-3.04-6.95c0-3.26,1.41-5.94,4.23-8.02,2.82-2.08,6.6-3.91,11.34-5.49,3.21-1,5.7-2.01,7.47-3.04,1.76-1.03,2.75-2.33,2.96-3.91.05-.11.08-.29.08-.55v-.79c0-2-.75-3.59-2.25-4.78-1.5-1.18-3.7-1.78-6.6-1.78-2.53,0-4.69.45-6.48,1.34-1.79.9-3.11,2.21-3.95,3.95-.21.37-.5.69-.87.95-.37.26-.76.39-1.18.39-.69,0-1.26-.24-1.74-.71-.47-.47-.71-1.03-.71-1.66,0-1.53.78-2.97,2.33-4.34,1.55-1.37,3.5-2.46,5.85-3.28,2.34-.82,4.59-1.22,6.75-1.22,4.16,0,7.45,1.01,9.88,3.04,2.42,2.03,3.63,4.75,3.63,8.18v1.19c-.53,7.64-.79,12.98-.79,16.04,0,2.27.16,4.4.47,6.4.21.84.62,1.53,1.22,2.05.6.53,1.25.82,1.94.87,1.58.26,2.37,1,2.37,2.21Z" />
          <path d="M1418.39,32.63c3.08,1.79,5.54,4.28,7.39,7.47,1.84,3.19,2.76,6.75,2.76,10.7s-.91,7.65-2.73,10.94c-1.82,3.29-4.28,5.87-7.39,7.74-3.11,1.87-6.45,2.8-10.03,2.8-5.48,0-9.82-1.55-13.04-4.66-2.16-1.79-3.91-4.17-5.25-7.15-1.34-2.97-2.01-6.15-2.01-9.52,0-14.85.13-28.6.4-41.24.05-1-.16-2.04-.63-3.12-.47-1.08-1-1.78-1.58-2.09-.63-.42-1.12-.8-1.46-1.15-.34-.34-.51-.75-.51-1.22,0-.68.26-1.21.79-1.58.53-.37,1.13-.55,1.82-.55,1.84,0,3.36.84,4.54,2.53,1.18,1.69,1.78,3.92,1.78,6.71,0,3.69-.03,7.31-.08,10.86-.05,3.56-.11,6.81-.16,9.76l-.16,9.01c1.69-2.79,3.88-4.98,6.6-6.56,2.71-1.58,5.7-2.37,8.97-2.37,3.58,0,6.91.9,9.99,2.69ZM1415.98,65.37c2.37-1.45,4.27-3.46,5.69-6.04,1.42-2.58,2.13-5.42,2.13-8.53s-.71-5.88-2.13-8.33-3.31-4.36-5.65-5.73c-2.34-1.37-4.89-2.05-7.62-2.05s-5.08.68-7.35,2.05c-2.26,1.37-4.07,3.28-5.41,5.73s-2.01,5.23-2.01,8.33.67,6.02,2.01,8.57c1.34,2.56,3.13,4.56,5.37,6,2.24,1.45,4.7,2.17,7.39,2.17s5.21-.72,7.58-2.17Z" />
          <path d="M1443.71,62.17c0,1,.25,2.04.75,3.12.5,1.08,1.04,1.78,1.62,2.09.63.42,1.12.8,1.46,1.15.34.34.51.75.51,1.22,0,.69-.26,1.21-.79,1.58-.53.37-1.13.55-1.82.55-1.84,0-3.38-.84-4.62-2.53-1.24-1.69-1.86-3.98-1.86-6.87,0-8.43.08-20.07.24-34.92.16-14.85.29-23.04.39-24.57.05-.79.28-1.42.67-1.9.39-.47.93-.71,1.62-.71.79,0,1.39.26,1.82.79.42.53.63,1.13.63,1.82-.11,3.42-.32,23.15-.63,59.17Z" />
          <path d="M1492.76,69.84c0,.63-.25,1.19-.75,1.66-.5.47-1.09.71-1.78.71-1.84,0-3.49-.54-4.94-1.62-1.45-1.08-2.36-2.62-2.73-4.62-.37-1.84-.55-4.53-.55-8.06,0-1.84.11-4.71.32-8.61-2.26,1.58-5.19,2.98-8.77,4.19-4,1.26-7.02,2.57-9.05,3.91s-3.04,3.07-3.04,5.17c0,1.53.57,2.78,1.7,3.75,1.13.98,2.59,1.46,4.38,1.46,1.26,0,2.55-.4,3.87-1.19s2.5-1.92,3.56-3.4c.37-.47.95-.71,1.74-.71.68,0,1.24.22,1.66.67.42.45.63.99.63,1.62,0,.58-.18,1.11-.55,1.58-3.16,4.06-6.79,6.08-10.9,6.08-3.11,0-5.68-.9-7.7-2.69-2.03-1.79-3.04-4.11-3.04-6.95,0-3.26,1.41-5.94,4.23-8.02,2.82-2.08,6.6-3.91,11.34-5.49,3.21-1,5.7-2.01,7.47-3.04,1.76-1.03,2.75-2.33,2.96-3.91.05-.11.08-.29.08-.55v-.79c0-2-.75-3.59-2.25-4.78-1.5-1.18-3.7-1.78-6.6-1.78-2.53,0-4.69.45-6.48,1.34-1.79.9-3.11,2.21-3.95,3.95-.21.37-.5.69-.87.95-.37.26-.76.39-1.19.39-.68,0-1.26-.24-1.74-.71s-.71-1.03-.71-1.66c0-1.53.78-2.97,2.33-4.34,1.55-1.37,3.5-2.46,5.85-3.28,2.34-.82,4.59-1.22,6.75-1.22,4.16,0,7.45,1.01,9.88,3.04,2.42,2.03,3.63,4.75,3.63,8.18v1.19c-.53,7.64-.79,12.98-.79,16.04,0,2.27.16,4.4.47,6.4.21.84.62,1.53,1.22,2.05.6.53,1.25.82,1.93.87,1.58.26,2.37,1,2.37,2.21Z" />
          <path d="M1539.1,68.53c.34.34.51.75.51,1.22,0,.69-.26,1.21-.79,1.58-.53.37-1.13.55-1.82.55-1.84,0-3.37-.86-4.58-2.57-1.21-1.71-1.82-4.01-1.82-6.91l.08-10.35c.05-1.63.08-3.69.08-6.16,0-3.42-.96-6.12-2.88-8.1-1.92-1.97-4.52-2.96-7.78-2.96s-5.9,1.13-7.9,3.4c-2,2.26-3.13,5.13-3.4,8.61v-.08c-.26,10.27-.39,17.56-.39,21.88,0,.74-.24,1.32-.71,1.74-.47.42-1,.63-1.58.63-.63,0-1.2-.21-1.7-.63-.5-.42-.75-1-.75-1.74l.24-15.96.24-12.96c.05-1-.16-2.04-.63-3.12-.47-1.08-1-1.78-1.58-2.09-.63-.42-1.12-.8-1.46-1.15-.34-.34-.51-.75-.51-1.22,0-.68.26-1.21.79-1.58.53-.37,1.13-.55,1.82-.55,1.53,0,2.84.58,3.95,1.74s1.82,2.79,2.13,4.9c1.42-2.05,3.13-3.63,5.13-4.74,2-1.11,4.11-1.66,6.32-1.66,4.63,0,8.36,1.37,11.18,4.11,2.82,2.74,4.23,6.35,4.23,10.82l-.16,16.98c0,1,.24,2.04.71,3.12.47,1.08,1,1.78,1.58,2.09.63.42,1.12.8,1.46,1.15Z" />
          <path d="M1607.87,32.11c3.05,1.82,5.45,4.3,7.19,7.46,1.74,3.16,2.61,6.69,2.61,10.59s-.87,7.73-2.61,11.02c-1.74,3.29-4.14,5.87-7.19,7.74-3.05,1.87-6.48,2.8-10.27,2.8-3.06,0-5.86-.78-8.41-2.33-2.55-1.55-4.67-3.67-6.36-6.36-.21,16.7-.34,25.83-.39,27.41,0,.63-.23,1.18-.67,1.66-.45.47-1.04.71-1.78.71-.63,0-1.17-.24-1.62-.71-.45-.47-.67-1.03-.67-1.66l.63-50.72c0-1-.25-2.04-.75-3.12-.5-1.08-1.04-1.78-1.62-2.09-.63-.42-1.12-.8-1.46-1.15-.34-.34-.51-.75-.51-1.22,0-.68.26-1.21.79-1.58.53-.37,1.13-.55,1.82-.55,1.63,0,3.04.67,4.23,2.01,1.19,1.34,1.91,3.2,2.17,5.57,1.68-2.53,3.8-4.53,6.36-6,2.55-1.47,5.33-2.21,8.33-2.21,3.74,0,7.14.91,10.19,2.73ZM1605.42,64.78c2.32-1.47,4.15-3.49,5.49-6.04,1.34-2.55,2.01-5.41,2.01-8.57s-.67-5.79-2.01-8.22c-1.34-2.42-3.17-4.33-5.49-5.73-2.32-1.39-4.92-2.09-7.82-2.09s-5.29.7-7.51,2.09c-2.21,1.4-3.95,3.31-5.21,5.73-1.26,2.42-1.9,5.16-1.9,8.22,0,3.21.63,6.1,1.9,8.65,1.26,2.56,3,4.56,5.21,6,2.21,1.45,4.71,2.17,7.51,2.17s5.5-.74,7.82-2.21Z" />
          <path d="M1634.57,69.01c-2.95-1.82-5.24-4.32-6.87-7.5-1.63-3.19-2.45-6.75-2.45-10.71s.82-7.5,2.45-10.67c1.63-3.16,3.92-5.65,6.87-7.46,2.95-1.82,6.32-2.73,10.11-2.73s7.07.91,9.99,2.73c2.92,1.82,5.2,4.31,6.83,7.46,1.63,3.16,2.45,6.72,2.45,10.67s-.82,7.52-2.45,10.71c-1.63,3.19-3.91,5.69-6.83,7.5-2.92,1.82-6.25,2.73-9.99,2.73s-7.16-.91-10.11-2.73ZM1652.26,64.9c2.21-1.39,3.92-3.32,5.14-5.77,1.21-2.45,1.82-5.23,1.82-8.33s-.61-5.81-1.82-8.25c-1.21-2.45-2.92-4.37-5.14-5.77-2.21-1.39-4.74-2.09-7.58-2.09s-5.46.7-7.7,2.09c-2.24,1.4-3.96,3.32-5.17,5.77-1.21,2.45-1.82,5.2-1.82,8.25s.6,5.89,1.82,8.33c1.21,2.45,2.94,4.37,5.17,5.77,2.24,1.4,4.81,2.09,7.7,2.09s5.37-.7,7.58-2.09Z" />
          <path d="M1698.56,33.18c1.9,1.63,2.84,3.71,2.84,6.24,0,1.84-.61,3.54-1.82,5.1-1.21,1.55-2.74,2.73-4.58,3.52-.42.11-.74.16-.95.16-.63,0-1.18-.22-1.66-.67-.47-.45-.71-.99-.71-1.62,0-.53.14-.99.43-1.38.29-.39.64-.7,1.07-.91.89-.32,1.7-.88,2.41-1.7s1.07-1.65,1.07-2.49c0-1.26-.49-2.28-1.46-3.04-.97-.76-2.15-1.15-3.52-1.15h-10.98c.68,1.53,1.03,3.13,1.03,4.82l-.24,10.27c-.26,12.48-.4,18.85-.4,19.12-.05.63-.3,1.18-.75,1.66-.45.47-.99.71-1.62.71-.69,0-1.25-.24-1.7-.71-.45-.47-.67-1.03-.67-1.66,0-.32.13-6.66.39-19.04l.24-10.27c0-1.11-.25-2.13-.75-3.08-.5-.95-1.09-1.58-1.78-1.9-1.26-.84-1.9-1.66-1.9-2.45,0-.58.21-1.05.63-1.42.42-.37.95-.55,1.58-.55h16.91c2.69,0,4.98.82,6.87,2.45Z" />
          <path d="M1800.31,68.69c.37.34.55.75.55,1.22,0,.69-.26,1.21-.79,1.58-.53.37-1.16.55-1.9.55-1.9,0-3.45-.87-4.66-2.61-1.21-1.74-1.79-4.08-1.74-7.03l.16-15.96c0-3.74-.83-6.61-2.49-8.61-1.66-2-4.12-3-7.39-3s-5.98,1.05-7.98,3.16c-2,2.11-3.16,4.79-3.48,8.06,0,2.79-.03,7.02-.08,12.68-.05,5.66-.11,8.99-.16,9.99-.05.63-.32,1.15-.79,1.54-.47.4-1.03.59-1.66.59-.68,0-1.24-.21-1.66-.63-.42-.42-.63-.92-.63-1.5.05-1.63.11-5.27.16-10.9.05-5.63.08-9.74.08-12.32,0-3.21-.86-5.81-2.57-7.78-1.71-1.97-3.96-2.96-6.75-2.96-3.21,0-5.9,1-8.06,3-2.16,2-3.45,4.53-3.87,7.58l-.47,23.38c0,.68-.24,1.24-.71,1.66-.47.42-1.05.63-1.74.63-.63,0-1.17-.22-1.62-.67s-.67-.99-.67-1.62l.55-28.99c0-1-.24-2.04-.71-3.12-.47-1.08-1-1.78-1.58-2.09-.63-.42-1.12-.8-1.46-1.15-.34-.34-.51-.75-.51-1.22,0-.68.26-1.21.79-1.58.53-.37,1.13-.55,1.82-.55,1.53,0,2.84.59,3.95,1.78s1.84,2.83,2.21,4.94c1.47-2.11,3.3-3.71,5.49-4.82,2.19-1.11,4.46-1.66,6.83-1.66,2.79,0,5.29.76,7.5,2.29,2.21,1.53,3.84,3.61,4.9,6.24,1.37-2.74,3.21-4.84,5.53-6.32,2.32-1.47,4.84-2.21,7.58-2.21,4.58,0,8.12,1.41,10.63,4.23,2.5,2.82,3.75,6.75,3.75,11.81l-.16,16.04c0,1,.24,2.05.71,3.16.47,1.11,1,1.82,1.58,2.13.63.37,1.13.72,1.5,1.07Z" />
          <path d="M1815,70.98c-.47-.45-.71-.99-.71-1.62l.24-16.27.24-13.35c0-1-.24-2.04-.71-3.12-.47-1.08-.98-1.78-1.5-2.09-.69-.42-1.2-.79-1.54-1.11-.34-.32-.51-.71-.51-1.18,0-.68.26-1.22.79-1.62.53-.4,1.13-.59,1.82-.59,1.9,0,3.45.87,4.66,2.61,1.21,1.74,1.79,4.08,1.74,7.03-.32,13.9-.47,23.81-.47,29.7,0,.68-.25,1.24-.75,1.66-.5.42-1.07.63-1.7.63-.58,0-1.11-.22-1.58-.67ZM1811.01,23.11c-.24-.24-.36-.49-.36-.75,0-.63.21-1.29.63-1.98l5.85-7.82c.74-.95,1.61-1.42,2.61-1.42.53,0,.99.2,1.38.59.39.4.59.88.59,1.46,0,.37-.08.74-.24,1.11s-.34.63-.55.79l-7.5,7.66c-.47.47-1,.71-1.58.71-.32,0-.59-.12-.83-.36Z" />
          <path d="M1837.71,69.92c-.76-.79-1.15-1.71-1.15-2.76s.38-1.96,1.15-2.73c.76-.76,1.67-1.15,2.73-1.15s1.97.38,2.76,1.15c.79.76,1.19,1.67,1.19,2.73s-.4,1.97-1.19,2.76-1.71,1.18-2.76,1.18-1.96-.39-2.73-1.18Z" />
        </svg>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h2 className=" text-lg text-neutral-50 2xl:text-4xl  font-bold border-b-orange-900 border-b-2  w-full uppercase ">
          Trabajos profesionales
        </h2>

        {works.map((work, i) => (
          <ItemWork key={i} {...work} />
        ))}
      </div>
    </section>
  );
};

const ItemWork = ({ title, href, video }: Work) => {
  const words = title.split(" ");

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <Link
      href={href}
      target="_blank"
      onMouseEnter={() => {
        if (videoRef.current) videoRef.current.play();
      }}
      onMouseLeave={() => {
        if (videoRef.current) videoRef.current.pause();
      }}
      className=" w-full group py-4 2xl:py-10 border-b-2  lg:h-44 border-b-orange-900 flex flex-col items-center justify-center transition-all duration-300"
    >
      <div className="text-2xl lg:text-4xl 2xl:text-5xl  flex items-center justify-center flex-wrap text-center">
        <span className="mr-2 lg:mr-0">{words[0]}</span>

        <video
          src={video}
          loop
          muted
          ref={videoRef}
          className="hidden lg:block w-0  group-hover:w-72 aspect-video rounded-xl transition-all duration-300  mx-2"
        />

        {words.slice(1).map((word, i) => (
          <span className={i > 0 ? "mr-2 lg:mr-0 lg:ml-5" : ""} key={i}>
            {word}
          </span>
        ))}
        <svg className="size-4 lg:size-8 ml-6" fill="white" viewBox="0 0 20 20">
          <g xmlns="http://www.w3.org/2000/svg" id="link">
            <path d="m0.04213,3.19559c0,-1.72494 1.40636,-3.12776 3.13345,-3.12776l1.21915,0l-0.62536,1.95799l-0.5938,0c-0.64663,0 -1.17261,0.5257 -1.17261,1.16977l0,13.60883c0,0.64405 0.52599,1.16974 1.17261,1.16974l13.63582,0c0.64666,0 1.17264,-0.52569 1.17264,-1.16974l0,-0.75998l1.96084,-0.62136l0,1.38135c0,1.72499 -1.40636,3.12776 -3.13348,3.12776l-13.63582,0c-1.72709,0 -3.13345,-1.40277 -3.13345,-3.12776l0,-13.60883zm10.34479,-3.05926l7.50513,0c1.13852,0 2.06582,0.92472 2.06582,2.06233l0,7.68613l-1.96084,0.62136l0,-7.02766l-11.33851,11.31604l-1.38745,-1.38474l11.33802,-11.31548l-6.84751,0l0.62534,-1.95799z" />
          </g>
        </svg>
      </div>
    </Link>
  );
};
