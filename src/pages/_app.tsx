import { NextPage } from "next";
import { AppProps } from "next/app";
import { ComponentType, Fragment } from "react";
import GlobalStyle from "../../styles/global";

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
      <GlobalStyle />
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </>
  );
}

export default MyApp;
