import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const { setTheme } = useTheme();
  const router = useRouter();
  useEffect(() => {
    setTheme("dark");
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, setTheme]);
  return (
    <>
      <motion.div
        className="xl:h-screen xl:scrollbar-thin xl:scrollbar-thumb-custom xl:scrollbar-track-custom-light xl:overflow-y-scroll "
        id="scrollBar"
        initial={{ y: "-100vw" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <ThemeProvider defaultTheme="dark" attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </ThemeProvider>
      </motion.div>
    </>
  );
}

export default MyApp;
