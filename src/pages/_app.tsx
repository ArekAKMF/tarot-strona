// import "@/styles/globals.css";
'use client';
import type { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "@/theme/theme";

export default function App({
  Component,
  pageProps: { pageProps },
}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
