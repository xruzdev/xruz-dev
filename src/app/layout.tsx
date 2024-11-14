import type { Metadata } from "next";

import { Lenis } from "@/components";
import { hankenGrotesk } from "@/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juan Cruz Elias | Desarrollador fullstack creativo",
  description:
    "Bienvenidos a mi sitio web personal, soy Juan Cruz Elias, un desarrollador fullstack creativo. Aquí encontrarás información sobre mi trabajo, proyectos y contacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${hankenGrotesk.className} antialiased overflow-hidden bg-black text-white `}
      >
        <Lenis>
   
          {children}
        </Lenis>
      </body>
    </html>
  );
}
