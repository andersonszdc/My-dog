import { NextPage } from "next";
import { AppProps } from "next/app";
import { ComponentType, Fragment } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

type PageProps = NextPage & {
  layout?: ComponentType;
};

type MyAppProps = AppProps & {
  Component: PageProps;
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const CustomLayout = Component.layout ? Component.layout : Fragment;
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CustomLayout>
          <Component {...pageProps} />
        </CustomLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
