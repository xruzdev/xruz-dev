"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export const NoisedBg = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = Math.floor(window.innerWidth / 2);
    const height = Math.floor(window.innerHeight / 2);

    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    function generateNoise() {
      const imageData = ctx!.createImageData(canvas!.width, canvas!.height);
      const buffer = imageData.data;

      if(window.innerWidth > 1000 )
        for (let i = 0; i < buffer.length; i += 4) {
          const randomValue = Math.random() * 255;
          buffer[i] = buffer[i + 1] = buffer[i + 2] = randomValue;
          buffer[i + 3] = 12;
        }else
          for (let i = 0; i < buffer.length; i += 4) {
            const randomValue = Math.random() * 255;
            buffer[i] = buffer[i + 1] = buffer[i + 2] = randomValue;
            buffer[i + 3] = 5;

        }
        
    
      ctx!.putImageData(imageData, 0, 0);
    }

    const noiseAnimation = gsap.timeline({ repeat: -1, repeatDelay: 0.01 });
    noiseAnimation.add(() => generateNoise());
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-screen h-screen fixed top-0 left-0 -z-10"
    ></canvas>
  );
};
