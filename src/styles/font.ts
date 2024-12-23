import { Roboto, Roboto_Condensed } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin-ext"],
  display: "swap",
});

export const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin-ext"],
});
