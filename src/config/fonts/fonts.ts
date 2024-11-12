import localFont from "next/font/local";
import {Tsukimi_Rounded} from "next/font/google";

export const monoton = Tsukimi_Rounded({weight: "400", subsets: ["latin"]});


export const hankenGrotesk = localFont({
  src: [
    {
      path: "./src/HankenGrotesk-Light.ttf",

      weight: "200",
      style: "light",
    },
    {
      path: "./src/HankenGrotesk-Regular.ttf",

      weight: "400",
      style: "normal",
    },
    {
      path: "./src/HankenGrotesk-Medium.ttf",

      weight: "500",
      style: "medium",
    },
    {
      path: "./src/HankenGrotesk-SemiBold.ttf",

      weight: "600",
      style: "semibold",
    },
    {
      path: "./src/HankenGrotesk-Bold.ttf",

      weight: "700",
      style: "bold",
    },
  ],
});
