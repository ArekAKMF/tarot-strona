import { extendTheme } from "@chakra-ui/react";
import colorsTheme from "./colorsTheme";
import buttonTheme from "./buttonTheme";
import headingTheme from "./headingTheme";
import linkTheme from "./linkTheme";

import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
const monserat = Montserrat({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-opensans",
  display: "swap",
});

const fontMonserat = `${monserat?.style?.fontFamily}, sans-serif`;
const fontOpenSans = `${openSans?.style?.fontFamily}, sans-serif`;

const theme = extendTheme({
  fonts: {
    heading: fontMonserat,
    body: fontOpenSans,
  },
  ...colorsTheme,
  components: {
    Button: buttonTheme,
    Heading: headingTheme,
    Link: linkTheme,
  },
});

export default theme;
