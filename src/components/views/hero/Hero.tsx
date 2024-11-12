"use client";
import { SvgBackground } from "@/components/SvgBackground";
import { XruzLogo } from "@/components/XruzLogo";
import { monoton } from "@/config";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { ButtonLink } from "../../ui/ButtonLink";

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null),
    text = useRef<HTMLDivElement>(null),
    buttons = useRef<HTMLDivElement>(null),
    video = useRef<HTMLVideoElement>(null);

  const [videoLoaded, setVideoLoaded] = useState(false);



  useEffect(()=>{

    if (video.current) {

      const videoEl = video.current as HTMLVideoElement;

      if(videoEl.buffered.length > 0){
        setVideoLoaded(true);

        gsap.set("#scroll",{
          opacity: 1
        })

      }

      
     
    }

  },[video])

  useLenis(
    (lenis) => {
      if (videoLoaded) {
        lenis.start();
      } else {
        lenis.stop();
      }
    },
    [videoLoaded]
  );

  useGSAP(
    () => {
      if (
        !container.current ||
        !text.current ||
        !buttons.current ||
        !video.current ||
        window.innerWidth < 1000 ||
        !videoLoaded
      )
        return;

      gsap.registerPlugin(ScrollTrigger);

      const textChilds = Array.from(text.current.children),
        btnChilds = Array.from(buttons.current.children),
        videoDuration = video.current.duration;

        if(!videoDuration) return;

        

      gsap.to(video.current, {
        currentTime: videoDuration, // El progreso total del video
        ease: "none", // Sin easing para un scroll lineal
        scrollTrigger: {
          trigger: "body", // El contenedor que activa el scroll
          start: "top top", // Comienza cuando el contenedor está en la parte superior
          end: "bottom top", // Termina cuando el contenedor está fuera de vista
          scrub: 1, // Sincroniza el scroll con el tiempo del video
        },
      });

      gsap.matchMedia().add(
        {
          lg: "(min-width: 1023px) and (max-width: 1279px)",
          xl: "(min-width: 1280px) and (max-width: 1535px)",
          xxl: "(min-width: 1536px)",
        },
        (context) => {
          const { lg, xl } = context.conditions as { lg: boolean; xl: boolean };

          gsap.to("#scroll, #initial-logo", {
            scale: 5,
            opacity: 0,
            duration: 2,
            scrollTrigger: {
              trigger: "#scroll",
              start: lg ? "-500px top" : xl ? "-500px top" : "-800px top",
              end: "500px top",
              scrub: 1,
              pin: true,
            },
          });
        }
      );

      gsap.set([textChilds, btnChilds, "#svg-background", "#logo"], {
        transformOrigin: "center center",
      });
      gsap.to([textChilds, btnChilds, "#svg-background", "#logo"], {
        scale: 1,
        y: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#text-container", // El contenedor que activa el scroll
          start: "center center", // Comienza cuando el contenedor está en la parte superior
          end: "85% center", // Termina cuando el contenedor está fuera de vista
          scrub: 1, // Sincroniza el scroll con el tiempo del video

          pin: true,
        },
      });
    },
    {
      scope: container,
      dependencies: [videoLoaded],
    }
  );

  return (
    <>
      <section
        id="hero"
        ref={container}
        className=" w-full h-[100dvh] lg:h-[300vh] flex flex-col lg:flex-row relative"
      >
        <div
          id="scroll"
          className="text-gray-300 opacity-0  absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-32 gap-5"
        >
          <span className={monoton.className + " text-2xl"}>Scroll.</span>
          <div className=" bordesr  rounded-full h-20 w-10 flex justify-center items-center">
            <MdKeyboardDoubleArrowDown className="text-3xl animate-bounce" />
          </div>
        </div>

        <div
          id="initial-logo"
          className="hidden absolute top-[15%] left-1/2 -translate-x-1/2 lg:flex flex-col items-center gap-4 opacity-50 w-96 "
        >
          <div className="lg:flex items-center gap-4 size-full">
            <svg
              id="Capa_1"
              data-name="Capa 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 204 130"
              className="size-32 stroke-white fill-white"
            >
              <polyline
                points="15 15 115 115 165 65"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="30"
              />
              <line
                x1="15"
                y1="115"
                x2="115"
                y2="15"
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="30"
              />
              <circle cx="189.5" cy="40.5" r="14.5" />
            </svg>

            <h1 className={monoton.className + " text-5xl"}>Bienvenidos.</h1>
          </div>
        </div>

        <SvgBackground />
        <video
          ref={video}
          muted
          
          onLoadedMetadata={() => setVideoLoaded(true)}
          onCanPlayThrough={() => setVideoLoaded(true)}
          className="hidden lg:block fixed top-0 left-0 w-screen h-screen object-cover -z-50 brightness-[.3] sepia "
        >
          <source src="https://res.cloudinary.com/dqbpjov4y/video/upload/v1731443124/output_cjbckd.mp4" />
        </video>
        <div
          id="text-container"
          className="flex flex-col items-center justify-end lg:justify-start size-full"
        >
          <XruzLogo className="stroke-orange-900 fill-orange-900 size-24 absolute lg:sticky top-0 left-1/2 -translate-x-1/2 z-50 lg:scale-0 " />
          <div
            ref={text}
            className=" text gap-4 lg:gap-14 2xl:gap-20  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col items-center justify-center text-center px-4 lg:w-3/5 "
          >
            <span className="lg:scale-0 lg:translate-y-56  2xl:translate-y-80  text-xl md:text-4xl  italic block">
              Juan Cruz Elias Paolella
            </span>
            <span
              className={
                "lg:scale-0  text-4xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl uppercase lg:translate-y-20  2xl:translate-y-32 font-bold block italic " +
                monoton.className
              }
            >
              {/* Creative FullStack Developer  */}
              Transformo ideas en soluciones digitales
            </span>
            <span className="lg:scale-0 lg:-translate-y-16 2xl:-translate-y-1  text-lg 2xl:text-3xl   block ">
              Desarrollador Fullstack. De Bahía Blanca, Argentina.
            </span>
            <div
              ref={buttons}
              className="buttons hidden lg:flex w-full mb-4 items-center justify-evenly text-center text-xs -z-20   lg:static "
            >
              <ButtonLink
                className="lg:scale-0 lg:-translate-y-40 2xl:-translate-y-64 "
                href="#about"
              >
                Sobre Mi
              </ButtonLink>
              <ButtonLink
                className="lg:scale-0 lg:-translate-y-40 2xl:-translate-y-64 !text-4xl mt-5   "
                href="#works"
              >
                Mi Trabajo
              </ButtonLink>
              <ButtonLink
                className="lg:scale-0 lg:-translate-y-40 2xl:-translate-y-64    "
                href="#contact"
              >
                Contacto
              </ButtonLink>
            </div>
          </div>
          <div className="buttons flex lg:hidden w-full mb-4 items-center justify-evenly text-center text-xs -z-20   lg:static ">
            <ButtonLink className="" href="#about">
              Sobre Mi
            </ButtonLink>
            <ButtonLink className=" " href="#works">
              Mi Trabajo
            </ButtonLink>
            <ButtonLink className="  " href="#contact">
              Contacto
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
};
