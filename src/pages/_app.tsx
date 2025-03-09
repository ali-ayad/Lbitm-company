import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import "../styles/main.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="icon" type="image/x-icon" href="/favicon.png" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
