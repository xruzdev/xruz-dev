"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { JSX, useRef } from "react";

const text = "Tengo una fuerte pasión por crear sitios que combinan funcionalidad y diseño atractivo. Desde que comencé mi carrera, he trabajado en varios proyectos freelance en los que he tenido la oportunidad de colaborar con empresas de diversos sectores. Me especialicé en construir soluciones a medida, diseños personalizados y aplicaciones web interactivas. Mi objetivo es seguir creciendo como desarrollador y seguir aprendiendo nuevas tecnologías para poder ofrecer a mis clientes las mejores soluciones posibles. ";

export const Text = () => {
    const refs = useRef<HTMLSpanElement[]>([]);
    const body = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null);

    useGSAP(()=>{

        gsap.registerPlugin(ScrollTrigger);


        gsap.to(refs.current, {
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                start: `-400px center`,
                end: `500px center`,
                toggleActions: "play none none restart"
            },
            opacity: 1,
            ease: "none",
            stagger: 0.1
        })
    },{
        scope: container
    })
    


    const splitWords = (phrase:string) => {
        const body: JSX.Element[] = [];
        phrase.split(" ").forEach( (word, i) => {
          const letters = splitLetters(word);
          body.push(<p className=" m-0 " key={word + "_" + i}>{letters}</p>)
        })
        return body
      }

      const splitLetters = (word:string) => {
        const letters: JSX.Element[] = []
        word.split("").forEach( (letter, i) => {
           letters.push(<span className="opacity-[0.1]" key={letter + "_" + i} ref={el => {refs.current.push(el as HTMLSpanElement)}}>{letter}</span>)
        })
        return letters;
      }



  return <div ref={container} className=" w-full    text-black mt-10">
    <div ref={body} className="flex flex-wrap gap-2  items-center justify-center w-full  text-xl leading-8 2xl:leading-[3.9rem] xl:text-4xl 2xl:text-6xl font-bosld tracking-wide  ">
        {splitWords(text)}
    </div>
    
  </div>;
};
