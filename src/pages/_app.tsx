import "@assets/styles/globals.css";
import Layout from "@layout/Layout";
import ExportIcons from "../../scripts/Icons";
import { AppProps, NextWebVitalsMetric } from "next/app";
import { useEffect, FC } from "react";
import { useRouter } from "next/router";
import * as gtag from "@lib/gtag";

const Noop: FC = ({ children }) => <>{children}</>;
function MyApp({ Component, pageProps }: AppProps) {
  ExportIcons();
  const LayoutNoop = (Component as any).LayoutNoop || Noop;
  // remove chrome-bug.css loading class on FCP
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <LayoutNoop pageProps={pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LayoutNoop>
  );
}

export default MyApp;
