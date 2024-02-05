import type { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "@/theme/theme";
import { I18nextProvider } from "react-i18next";
import i18n from '@/i18lang/i18n'

export default function App({
  Component,
  pageProps: { pageProps },
}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
      </I18nextProvider>
    </ChakraProvider>
  );
}
