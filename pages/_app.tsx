import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="description" content="My awesome application" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
