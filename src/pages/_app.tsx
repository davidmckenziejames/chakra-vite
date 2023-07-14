import { AppProps } from "next/app";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@layout/index";
import Head from "next/head";
import "layout/styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DJfan</title>
      </Head>

      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;
