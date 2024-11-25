"use client";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";

interface Work {
  title: string;
  logo: string;
  href: string;
  coverImage: string;
  video: string;
  stack: string;
  description: string;
}

const works = [
  {
    title: "Hornos Tatacuá",
    logo: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1725293779/logo_xmpe5b.png",
    coverImage: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1732555601/hornos-tatacua-min_cryuyu.jpg",
    href: "https://hornostatacua.com.ar",
    video: "https://res.cloudinary.com/dqbpjov4y/video/upload/v1732555482/Hornos-Tatacua_2_udckaz.mp4",
    stack: "Next.js, Tailwind CSS, Node.js, Prisma ORM, GSAP.",
    description:
      "Desarrollé una página web para una empresa de fabricación de hornos en Bahía Blanca, con un CRUD para la gestión de productos y un panel de administración que permite actualizar la información de los productos de forma sencilla. Aunque no incluye ventas en línea, permite la visualización detallada de productos. ",
  },
  {
    title: "Federación Bonaerense de Básquet",
    coverImage: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1732555600/federacion-min_gcbziv.jpg",
    logo: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1724106743/logofbb_sjebqe.png",

    href: "https://federacionbonaerense.com.ar",
    video: "https://res.cloudinary.com/dqbpjov4y/video/upload/v1732555667/Federacion-Bonaerense_2_z1r5u6.mp4",
    stack: "Next.js, React, Prisma ORM, Tailwind CSS, CKEditor, Cloudinary.",
    description:
      "Creé una página web de noticias deportivas para la federación de básquet de Buenos Aires, con un sistema de CRUD para la gestión de noticias. Incluí un panel de administración completo que permite crear, actualizar, eliminar y gestionar publicaciones.",
  },
  {
    title: "Gimnasio EFI",
    logo: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1730754526/efi-logo_n57d8x.png",
    href: "https://gimnasioefi.com.ar",
    coverImage: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1732555600/efi-gym-min_mdlfl5.jpg",
    video: "https://res.cloudinary.com/dqbpjov4y/video/upload/v1732555240/Efi-Gym_2_gbcyui.mp4",
    stack: "Next.js, Tailwind CSS, Framer Motion, Node.js, TypeScript.",
    description:
      "Desarrollé una página web informativa para un gimnasio en Bahía Blanca que muestra información sobre las clases, instructores y el gimnasio en general. El proyecto incluye la posibilidad de expandir la funcionalidad para vender entrenamientos online.",
  },
  {
    title: "Squadra Construcciones",
    logo: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1730756919/logo--completo_m0hapf.png",
    href: "https://squadra.com.ar",
    coverImage: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1732555601/squadra-min_nuwwdr.jpg",
    video: "https://res.cloudinary.com/dqbpjov4y/video/upload/v1732555484/Squadra_2_qorjwb.mp4",
    stack: "Next.js, Tailwind CSS, GSAP, Node.js, TypeScript.",
    description:
      "Página web informativa para una empresa de construcción en Bahía Blanca que muestra básicamente muestra información de la misma, lo que ofrece y algunos proyectos que han hecho. ",
  },
];

export const Works = () => {
  const container = useRef<HTMLDivElement>(null),
    carousel = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!carousel.current) return;

      gsap.registerPlugin(ScrollTrigger);

      if (window.innerWidth > 767) {
        const carouselChildren = carousel.current.children,
          carouselLength = carouselChildren.length;

        gsap.to(carouselChildren, {
          xPercent: -125 * (carouselLength - 1),
          ease: "none",
          scrollTrigger: {
            trigger: carousel.current,
            pin: true,
            scrub: 1,

            start: "center center",
            end: "+=300%",
          },
        });
      }

      gsap.to(".header-text-work , .text-link", {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "5% bottom",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="works"
      className="w-screen  h-auto   md:h-[375vh] px-4 text-black  md:px-10 lg:px-14 mb-10"
    >
      <div className="flex flex-col  gap-8   overflow-hidden">
        <div className="border-b-orange-600 border-b-2 w-full overflow-hidden">
          <h2 className="header-text-work text-lg h-16  2xl:text-4xl  translate-y-20 ">
            Trabajo en acción, mis proyectos hablan por sí mismos.
          </h2>
        </div>

        <div
          ref={carousel}
          className="w-screen  md:w-[200vw] h-auto min-h-[70vh]  flex flex-wrap md:flex-nowrap gap-4 md:gap-8"
        >
          {works.map((work, i) => (
            <ItemWork {...work} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ItemWork = ({ href, video, description, coverImage, stack }: Work) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      onMouseEnter={() => {
        if (videoRef.current) videoRef.current.play();
      }}
      onMouseLeave={() => {
        if (videoRef.current) videoRef.current.pause();
      }}
      className="w-full md:aspect-video flex flex-col md:flex-row gap-2 md:gap-4 justify-evenly items-start "
    >
      <div className="relative  w-full aspect-square  md:w-1/2 md:h-full cursor-pointer">
        <Image
          src={coverImage}
          fill
          alt="Hornos Tatacuá"
          className="object-cover"
        />
      </div>

      <div className=" md:aspect-square h-3/4 w-full md:w-auto md:h-full flex flex-col justify-evenly items-start gap-4 ">
        <video
          src={video}
          loop
          muted
          ref={videoRef}
          className=" hidden md:block w-full aspect-video "
        />

        <p className="text-xs md:text-xl lg:text-sm  xl:text-xl">
          {description}
        </p>

        <p className="text-xs md:text-xl lg:text-sm  xl:text-xl">
          <span className="font-bold">Stack: </span> {stack}
        </p>

        <Link
          className=" flex items-center justify-center gap-4 text-xl  xl:text-2xl w-full"
          href={href}
        >
          Ver sitio{" "}
          <svg className=" size-6" fill="black" viewBox="0 0 20 20">
            <g xmlns="http://www.w3.org/2000/svg" id="link">
              <path d="m0.04213,3.19559c0,-1.72494 1.40636,-3.12776 3.13345,-3.12776l1.21915,0l-0.62536,1.95799l-0.5938,0c-0.64663,0 -1.17261,0.5257 -1.17261,1.16977l0,13.60883c0,0.64405 0.52599,1.16974 1.17261,1.16974l13.63582,0c0.64666,0 1.17264,-0.52569 1.17264,-1.16974l0,-0.75998l1.96084,-0.62136l0,1.38135c0,1.72499 -1.40636,3.12776 -3.13348,3.12776l-13.63582,0c-1.72709,0 -3.13345,-1.40277 -3.13345,-3.12776l0,-13.60883zm10.34479,-3.05926l7.50513,0c1.13852,0 2.06582,0.92472 2.06582,2.06233l0,7.68613l-1.96084,0.62136l0,-7.02766l-11.33851,11.31604l-1.38745,-1.38474l11.33802,-11.31548l-6.84751,0l0.62534,-1.95799z" />
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
};

/**
 * 
 * 
 *   <Link
      href={href}
      target="_blank"
      onMouseEnter={() => {
        if (videoRef.current) videoRef.current.play();
      }}
      onMouseLeave={() => {
        if (videoRef.current) videoRef.current.pause();
      }}
      className={`w-full group py-4 2xl:py-10 ${!last && "border-b-2"}  lg:h-44 border-b-orange-600 flex flex-col items-center justify-center transition-all duration-300`}
    >
      <div className="text-2xl lg:text-4xl 2xl:text-5xl  flex items-center justify-center flex-wrap text-center">
        <span className="text-link mr-2 lg:mr-0 translate-y-20 opacity-0">{words[0]}</span>

        <video
          src={video}
          loop
          muted
          ref={videoRef}
          className="hidden lg:block w-0  group-hover:w-72 aspect-video rounded-xl transition-all duration-300  mx-2"
        />

        {words.slice(1).map((word, i) => (
          <span  className={` text-link translate-y-20 opacity-0 ${i > 0 ? "mr-2 lg:mr-0 lg:ml-5" : ""}`} key={i}>
            {word}
          </span>
        ))}
        <svg className="size-4 lg:size-8 ml-6 text-link translate-y-20 opacity-0" fill="black" viewBox="0 0 20 20">
          <g xmlns="http://www.w3.org/2000/svg" id="link">
            <path d="m0.04213,3.19559c0,-1.72494 1.40636,-3.12776 3.13345,-3.12776l1.21915,0l-0.62536,1.95799l-0.5938,0c-0.64663,0 -1.17261,0.5257 -1.17261,1.16977l0,13.60883c0,0.64405 0.52599,1.16974 1.17261,1.16974l13.63582,0c0.64666,0 1.17264,-0.52569 1.17264,-1.16974l0,-0.75998l1.96084,-0.62136l0,1.38135c0,1.72499 -1.40636,3.12776 -3.13348,3.12776l-13.63582,0c-1.72709,0 -3.13345,-1.40277 -3.13345,-3.12776l0,-13.60883zm10.34479,-3.05926l7.50513,0c1.13852,0 2.06582,0.92472 2.06582,2.06233l0,7.68613l-1.96084,0.62136l0,-7.02766l-11.33851,11.31604l-1.38745,-1.38474l11.33802,-11.31548l-6.84751,0l0.62534,-1.95799z" />
          </g>
        </svg>
      </div>
    </Link>
 */
