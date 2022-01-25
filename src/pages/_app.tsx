import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ComponentType, Fragment } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import { SessionProvider } from "next-auth/react";

type PageProps = NextPage & {
  layout?: ComponentType;
};

type MyAppProps = AppProps & {
  Component: PageProps;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: MyAppProps) {
  const url = `https://wallis.dev${router.route}`;

  const CustomLayout = Component.layout ? Component.layout : Fragment;

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CustomLayout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={url} />
          </AnimatePresence>
        </CustomLayout>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
