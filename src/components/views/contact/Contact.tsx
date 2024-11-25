"use client";

import { useGSAP } from "@gsap/react";

import { SubmitBtn } from "@/components/ui/SubmitBtn";
import { mailState, sendMail } from "@/mail";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSend } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";

export const Contact = () => {
  const container = React.useRef<HTMLDivElement>(null);

  
  const [error, setError] = React.useState<mailState>();

  const action = async (form: FormData) => {
    setError(await sendMail(form));
  };

  
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
    {
      scope: container,
    }
  );
  //
  return (
    <>
      <section
        id="contact"
        ref={container}
        className="w-screen  h-auto text-white  flex flex-col  items-start justify-start md:justify-center md:items-cesnter bg-black   gap-4  px-4 md:px-10 lg:px-14 xl:px-32 pt-10 lg:pt-20 border-t-2 border-t-orange-600"
      >
      

        <h1 className=" flex flex-col   gap-2 text-4xl md:text-5xl font-bold ">
          <span className="inline-flex items-center gap-2">
           
            Encantado de que iniciemos
          </span>
          <span>
            {" "}
            un proyecto juntos{" "}
            <MdOutlineArrowOutward className="inline rotate-90" />
          </span>
        </h1>

        <div className="flex flex-col gap-4 xl:flex-row-reverse w-full xl:justify-between xl:items-start">
          <div className="border-b-2 border-b-orange-600 xl:border-0 w-full pb-10  xl:w-2/5">
            <h2 className="mb-2 uppercase text-sm font-bold text-neutral-500">
              Detalles de contacto
            </h2>
            <div className="w-full flex items-center justify-start gap-4">
             
              <Link href="mailto:xruzdev@gmail.com">xruzdev@gmail.com</Link>
            </div>
            <span>Bahía Blanca, Buenos Aires, Argentina.</span>

            <h2 className="mb-2 uppercase text-sm font-bold text-neutral-500 mt-4 ">
              Redes Sociales
            </h2>

            <div className=" items-center justify-start gap-4  flex">
              <Link href="https://www.linkedin.com/in/xruzdev">Linkedin</Link>
              <Link href="https://github.com/xruzdev/">Github</Link>
            </div>

            <h2 className="mb-2 uppercase text-sm font-bold text-neutral-500 mt-4">
              Tecnologías que manejo
            </h2>

            <div className="w-full flex flex-wrap justify-center lg:justify-start gap-5 mt-4">
              {[
                "js",
                "ts",
                "react",
                "nextjs",
                "nodejs",
                "express",
                "mongodb",
                "tailwindcss",
                "prisma",
                "postgres",
                "gsap-greensock",
                "github",
              ].map((skill, i) => (
                <div
                  key={i}
                  className="relative aspect-square h-8  lg:h-9 rounded-[50%]"
                >
                  <Image
                    alt={skill}
                    src={`/skills/${skill}.png`}
                    fill
                    className=" object-contain  object-center "
                  />
                </div>
              ))}
            </div>

            <div className="w-full hidden xl:block aspect-square bg-white mt-10 relative">

              <Image src="https://res.cloudinary.com/dqbpjov4y/image/upload/v1731443113/retrato_akppqf.jpg" fill alt="Juan Cruz Elias Paolella" className="object-cover" />

            </div>
          
          </div>

          <form action={action} className="form relative xl:w-1/2">
            <div className="form-col  ">
              <h3>01</h3>
              <label className="label" htmlFor="name">
                Cual es tu nombre ?
              </label>
              <input
                className="field"
                type="text"
                id="name"
                name="name"
                required
                placeholder="Tu nombre *"
              />
            </div>

            <div className="form-col">
              <h3>02</h3>
              <label className="label" htmlFor="email">
                Cual es tu email ?
              </label>
              <input
                className="field"
                type="email"
                id="email"
                name="email"
                required
                placeholder="example@email.com *"
              />
            </div>
            <div className="form-col">
              <h3>03</h3>
              <label className="label" htmlFor="company">
                Cual es el nombre de tu empresa ?
              </label>
              <input
                className="field"
                type="text"
                id="company"
                name="company"
                required
                placeholder="Tu Compañía ®"
              />
            </div>

            <div className="form-col">
              <h3>04</h3>
              <label className="label" htmlFor="message">
                Tu mensaje
              </label>
              <textarea
                className="field"
                id="message"
                name="message"
                rows={8}
                required
                placeholder="Hola Juan! Me gustaría que me ayudes a desarrollar una web para mi empresa... *"
              ></textarea>
            </div>

            <SubmitBtn error={error} setError={setError}>
              <IoSend  className="text-white"/>
            </SubmitBtn>
          </form>
        </div>

        <div className="w-full lg:w-1/2 mx-auto xl:hidden aspect-square bg-white mt-10 relative">

              <Image src="https://res.cloudinary.com/dqbpjov4y/image/upload/v1731443113/retrato_akppqf.jpg" fill alt="Juan Cruz Elias Paolella" className="object-cover" />

            </div>
      </section>

      <footer className="pt-16 pb-4 bg-black flex flex-col w-full gap-1 px-4 md:px-10 xl:pt-10">
        <div className="w-full  text-white flex items-center justify-center">
          <span className="text-center">Xruz Dev © por Juan Cruz Elias Paolella - {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
};

{
  /*  */
}
