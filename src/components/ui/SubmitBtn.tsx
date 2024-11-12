"use client";
import { mailState } from "@/mail";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  error?: mailState;
  setError: React.Dispatch<React.SetStateAction<mailState | undefined>>;
}

export const SubmitBtn = ({ children, className, error, setError }: ButtonProps) => {
  const container = useRef<HTMLButtonElement>(null);

  const { pending } = useFormStatus();

  const tl = useRef<gsap.core.Timeline>(),
    tl2 = useRef<gsap.core.Timeline>();

  useGSAP(() => {

    if(!error) return

    if (error.error) {
      gsap.to(container.current, {
        background: "red",
      });
    } else {
      gsap.to(container.current, {
        background: "green",
      });
    }

    const time = setTimeout(() => {
      gsap.to(container.current, {
        background: "#7c2d12",
      });
    }, 2000);

    return () => clearTimeout(time);
  }, [error]);

  const { contextSafe } = useGSAP(
    () => {
      if (!container.current || pending) return;

      /*  gsap.from(container.current, {
        y: -10, // Mover hacia arriba 10px
        duration: 2, // Duración de la animación
        repeat: -1, // Repetir indefinidamente
        yoyo: true, // Hacer que vuelva a la posición original

        ease: "power1.inOut",
      }); */

      //Click effect

      tl2.current = gsap
        .timeline({
          paused: true,
        })
        .to(container.current, {
          scale: 0.95,
        })
        .to(container.current, {
          scale: 1,
        });

      //Hover effect

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
      dependencies: [pending],
    }
  );

  useEffect(() => {

    const time = setTimeout(() => {
      setError(undefined)
    }, 2000);

    return () => clearTimeout(time);

    

  }, [error, setError]);


  const handleMouseEnter = contextSafe(() => {
    gsap.to(container.current, {
      scale: 1.1,
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(container.current, {
      scale: 1,
    });
  });

  const handleClick = contextSafe(() => {
    if (!tl2.current) return;
    tl2.current.restart();
  });

  return (
    <button
      disabled={pending}
      style={{
        clipPath: "circle(50% at 50% 50%)",
      }}
      title="Enviar"
      ref={container}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={
        "-top-10 lg:-top-16 left-3/4 -translate-x-1/2 hero-link cursor-pointer p-1 text-sm lg:text-2xl z-50 relative  size-20 lg:size-32 flex items-center justify-center  bg-orange-900 " +
        " " +
        className
      }
    >
      {pending ? (
        <AnimatedDots />
      ) : error ? (
        error.error ? (
          <AnimatedError />
        ) : (
          <AnimatedCheck />
        )
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

const AnimatedDots = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(container.current!.children, {
      opacity: 1,
      y: -5,
      duration: 1,
      stagger: 0.1,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
      ref={container}
      className="size-full rounded-full flex items-center justify-center gap-2"
    >
      <div className="opacity-0 w-2 h-2 bg-white rounded-full"></div>
      <div className="opacity-0 w-2 h-2 bg-white rounded-full"></div>
      <div className="opacity-0 w-2 h-2 bg-white rounded-full"></div>
    </div>
  );
};

const AnimatedError = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const svg = container.current!.querySelector("svg");

    if (!svg) return;

    const paths = Array.from(svg.querySelectorAll("path"));

    paths.forEach((path) => {
      const totalLength = path.getTotalLength();
      path.style.strokeDasharray = totalLength.toString();
      path.style.strokeDashoffset = totalLength.toString();
    });

    gsap.to(paths, {
      strokeDashoffset: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div
      ref={container}
      className="size-full rounded-full flex items-center justify-center gap-2"
    >
      <svg
        stroke="white"
        fill="none"
        strokeWidth={1}
        width="50"
        height="50"
        viewBox="0 0 10 10"
      >
        <path d="M 0 0 L 10 10" />
        <path d="M 10 0 L 0 10" />
      </svg>
    </div>
  );
};

const AnimatedCheck = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const svg = container.current!.querySelector("svg");

    if (!svg) return;

    const paths = Array.from(svg.querySelectorAll("path"));

    paths.forEach((path) => {
      const totalLength = path.getTotalLength();
      path.style.strokeDasharray = totalLength.toString();
      path.style.strokeDashoffset = totalLength.toString();
    });

    gsap.to(paths, {
      strokeDashoffset: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div
      ref={container}
      className="size-full rounded-full flex items-center justify-center gap-2"
    >
      <svg
        stroke="white"
        fill="none"
        strokeWidth={1}
        width="50"
        height="50"
        viewBox="0 0 10 10"
      >
        <path d="M 0 5 L 4 10 L 10 0" />
      </svg>
    </div>
  );
};
