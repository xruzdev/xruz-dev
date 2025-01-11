"use client";
import { LenisLink } from "@/components/ui/LenisLink";
import { XruzLogo } from "@/components/XruzLogo";
import { audiowide } from "@/config";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { CustomEase } from "gsap/CustomEase";

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null),
    text = useRef<HTMLDivElement>(null),
    video = useRef<HTMLVideoElement>(null),
    welcomeScreen = useRef<HTMLDivElement>(null),
    menuTl = useRef<gsap.core.Timeline>(),
    menuContainer = useRef<HTMLDivElement>(null);

  const [isReady, setIsReady] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  gsap.registerPlugin(CustomEase);

  const handleClickMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };
  const lenis = useLenis(
    (lenis) => {
      if (isReady) {
        lenis.start();
      } else {
        lenis.stop();
      }
    },
    [isReady]
  );

  useEffect(() => {
    if (!menuTl.current) return;

    if (openSubMenu) {
      menuTl.current.play();
      lenis?.stop();
    } else {
      menuTl.current.reverse();
      lenis?.start();
    }
  }, [openSubMenu, lenis]);

  useGSAP(
    () => {
      //polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)

      if (!menuContainer.current) return;

      const svgLogo = menuContainer.current.querySelector("#logo-menu");

      if (!svgLogo) return;

      const logoChilds = Array.from(
        svgLogo.querySelectorAll("path")
      ) as SVGPathElement[];

      logoChilds.forEach((child) => {
        const totalLength = child.getTotalLength();

        if (totalLength) {
          child.style.strokeDasharray = `${totalLength}`;
          child.style.strokeDashoffset = `${totalLength}`; // Ocultar inicialmente
        }
      });

      menuTl.current = gsap
        .timeline({ paused: true })
        .to(
          menuContainer.current,
          {
            display: "flex",
          },
          0
        )
        .to(
          ".layer-back",
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.5,
            ease: "power4.out",
          },
          0
        )
        .to(
          ".letter-link",
          {
            y: 0,
            duration: 0.5,
            ease: "power4.out",
            delay: -0.7,
          },
          1
        )
        .to(
          ".social-link",
          {
            y: 0,
            duration: 0.5,
            opacity: 1,
            ease: "power4.out",
            delay: -0.1,
          },
          1
        )
        .to(
          ".line",
          {
            width: "100%",
            duration: 0.5,
            ease: "power4.out",
            delay: -0.3,
          },
          1
        )
        .to(
          ".xruz-logo",
          {
            opacity: 1,
            duration: 1,
            delay: -0.8,
            ease: "power4.out",
          },
          1
        )
        .to(
          logoChilds,
          {
            strokeDashoffset: 0,
            duration: 1,
            ease: "power2.out",
            delay: -0.8,
          },
          1
        );
    },
    {
      scope: menuContainer,
    }
  );

  useGSAP(() => {
    if (!container.current || !text.current || !welcomeScreen.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsReady(true);
        gsap.set(welcomeScreen.current, {
          display: "none",
        });
      },
      defaults: {
        ease: CustomEase.create("custom", "M0,0 C1.034,0 0.492,1 1,1 "),
      },
    });

    const textChildren = text.current.children;

    tl.to(
      [".layer-1"],
      {
        height: 0,
        duration: 3,

        transformOrigin: "center",
       // ease: "elastic.in(1, 0.3)",
      },
      0
    )
      .to(
        welcomeScreen.current,
        {
          backgroundColor: "transparent",
          duration: 1,
        },
        2
      )
      .from(
        "video",
        {
           scale: 0,
          duration: 1,
          transformOrigin: "center",
        },
        2
      )
      .to(
        ".layer-3",
        {
          clipPath: "polygon(50% 0%, 2% 0, 98% 0)",
          duration: 1,
        
        },
        2
      )
      .to(
        ".layer-4",
        {
          clipPath: "polygon(100% 50%, 100% 2%, 100% 98%)",
          duration: 1,
        
        },
        2
      )
      .to(
        ".layer-5",
        {
          clipPath: "polygon(50% 100%, 98% 100%, 2% 100%)",
          duration: 1,
        
        },
        2
      )
      .to(
        ".layer-6",
        {
          clipPath: "polygon(0% 50%, 0 98%, 0 2%)",
          duration: 1,
        
        },
        2
      )
      .to(textChildren, {
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
        delay: -0.2,
      },3); 

    /*     tl.to(".text, .xruz-logo", {
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
      stagger: 0.01,
    },0)
      .to(".text, .xruz-logo", {
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
        stagger: 0.01,
      },1)
      .to(welcomeScreen.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.5,
        ease: "power4.out",
        delay: -0.8,
      },2)
      .to(textChildren, {
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
        delay: -0.8,
      },2); */
  });

  return (
    <>
      {/*Welcome Screen */}
      <div
        ref={welcomeScreen}
        // style={{ clipPath: "polygon(50% 50%, 0 0, 100% 0)" }}
        className="fixed top-0 left-0 w-screen h-[100dvh] lg:h-screen  bg-white z-[500] flex flex-col md:flex-row gap-5 items-center justify-center text-6xl text-white"
      >
        {/*  <XruzLogo className="xruz-logo  opacity-50 size-20  md:size-32 stroke-white fill-white" />
        <h1 className="text-center text-xs md:text-2xl">
          {`Apasionado por el Código, impulsado por la inovación.`
            .split("")
            .map((c, i) => (
              <span key={i} className="text opacity-50">
                {c}
              </span>
            ))}
        </h1> */}

        <div
          style={{ clipPath: "polygon(50% 48%, 2% 0, 98% 0)" }}
          className="layer-3 absolute left-0 top-0 size-full bg-neutral-800"
        ></div>

        <div
          style={{ clipPath: "polygon(52% 50%, 100% 2%, 100% 98%)" }}
          className="layer-4 absolute left-0 top-0 size-full bg-neutral-800"
        ></div>
        <div
          style={{ clipPath: "polygon(50% 52%, 98% 100%, 2% 100%)" }}
          className="layer-5 absolute left-0 top-0 size-full bg-neutral-800"
        ></div>

        <div
          style={{ clipPath: "polygon(48% 50%, 0 98%, 0 2%)" }}
          className="layer-6 absolute left-0 top-0 size-full bg-neutral-800"
        ></div>

        <div className="layer-1  absolute left-0 top-0 w-full h-1/2 bg-neutral-800 -z-10"></div>

        <div className="layer-1 absolute left-0 bottom-0 w-full h-1/2 bg-neutral-800 -z-10"></div>
      </div>
      {/*Menu Btn */}
      <button
        onClick={handleClickMenu}
        className="z-50 absolute text-3xl md:text-5xl lg:text-4xl right-4 md:right-20 top-5  md:top-10 text-white  "
      >
        Menu
      </button>

      {/*Menu */}
      <div
        ref={menuContainer}
        className="hidden absolute top-0 left-0 w-screen h-[100dvh] lg:h-[50vh] z-[100] px-10  justify-evenly flex-col text-black"
      >
        <div
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          className="layer-back absolute w-screen  h-[100dvh] lg:h-[50vh] bg-white left-0 top-0"
        />

        <button
          onClick={handleClickMenu}
          className="absolute text-3xl md:text-5xl lg:text-4xl right-4 md:right-20 top-5  md:top-10 text-black z-[100] "
        >
          Cerrar
        </button>

        <div className="w-full h-3/4 flex flex-col lg:flex-row justify-between">
          <div className=" h-full w-full lg:w-1/4 flex flex-col justify-center items-center">
            <XruzLogo
              id="logo-menu"
              className=" xruz-logo opacity-0 size-64 stroke-orange-600 fill-orange-600 z-50"
            />
          </div>

          <div className="h-full w-full  lg:w-3/4  flex items-center justify-center z-50 ">
            <div className={` ${audiowide.className}  w-full h-full flex flex-col items-center md:flex-row justify-evenly text-3xl xl:text-5xl 2xl:text-6xl text-neutral-800 uppercase`}>
              <LenisLink
                onClick={() => setOpenSubMenu(false)}
                className="flex items-end overflow-hidden group "
                href="#about"
              >
                <span className="letter-link block translate-y-full group-hover:text-orange-600 transition-colors duration-300">
                  Sobre mi
                </span>
                <MdOutlineArrowOutward className="letter-link text-2xl inline rotate-90 translate-y-full group-hover:text-orange-600 transition-colors duration-300" />
              </LenisLink>
              <LenisLink
                onClick={() => setOpenSubMenu(false)}
                className="flex items-end overflow-hidden group "
                href="#works"
              >
                <span className="letter-link block translate-y-full group-hover:text-orange-600 transition-colors duration-300">
                  Trabajo
                </span>
                <MdOutlineArrowOutward className="letter-link text-2xl inline rotate-90 translate-y-full group-hover:text-orange-600 transition-colors duration-300  " />
              </LenisLink>
              <LenisLink
                onClick={() => setOpenSubMenu(false)}
                className="flex items-end overflow-hidden group "
                href="#contact"
              >
                <span className="letter-link block translate-y-full group-hover:text-orange-600 transition-colors duration-300">
                  Contacto
                </span>

                <MdOutlineArrowOutward className="letter-link text-2xl inline rotate-90 translate-y-full group-hover:text-orange-600 transition-colors duration-300" />
              </LenisLink>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-4 flex-col items-center  md:flex-row justify-between z-50 overflow-hidden">
          <span className="text-center opacity-0 md:opacity-1 social-link block translate-y-full">
            Juan Cruz Elias Paollela | Desarrollador FullStack Creativo.
          </span>
          <div className="flex gap-4">
            <Link
              className="overflow-hidden"
              href="https://www.linkedin.com/in/xruzdev"
            >
              <span className="social-link block translate-y-full opacity-0 md:opacity-1">
                Linkedin
                <MdOutlineArrowOutward className="inline " />
              </span>
            </Link>
            <Link
              className="overflow-hidden"
              href="http://www.github.com/xruzdev"
            >
              <span className=" social-link block translate-y-full opacity-0 md:opacity-1">
                Github
                <MdOutlineArrowOutward className="inline" />
              </span>
            </Link>
          </div>
        </div>

        <div className="line w-0 h-0.5 bg-red-400 self-end relative text-xl font-b" />
      </div>

      <section
        id="hero"
        ref={container}
        className=" w-full h-[100dvh] lg:h-screen flex flex-col lg:flex-row relative"
      >
        <video
          src="https://res.cloudinary.com/dqbpjov4y/video/upload/v1732555181/Video_dyh9b3.mp4"
          ref={video}
          className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
          autoPlay
          muted
          loop
        />

        <XruzLogo className="absolute top-0 lg:top-0 left-4 md:left-20 size-20 md:size-32 lg:size-28 stroke-orange-600 fill-orange-600" />

        <h1
          ref={text}
          className={
            "pointer-events-none text-5xl md:text-8xl lg:text-9xl  xl:text-[11rem]  2xl:text-[17rem] tracking-widest font-bold absolute flex bottom-0 left-6 md:left-20 pb-4  md:leading-[250px] overflow-hidden " +
            " " +
            audiowide.className
          }
        >
          <span className="block translate-y-32 md:translate-y-full">XRUZ</span>{" "}
          <span className="text-orange-600 block translate-y-full ">.</span>{" "}
          <span className="block translate-y-32 md:translate-y-full">DEV</span>
        </h1>
      </section>
    </>
  );
};
