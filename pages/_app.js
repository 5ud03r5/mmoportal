import "@/styles/globals.css";
import "@/styles/nprogress.css";
import Layout from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import NProgress from "nprogress";
export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());
  }, []);
  return (
    <Layout>
      <Head>
        <title>mmoportal</title>
        <meta name="viewport" content="width=device-width initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
