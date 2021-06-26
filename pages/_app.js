import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { auth } from "../firebase/client";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Navbar from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../context/Context";
import { ToastContainer } from "react-toastify";
function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [toast, setToast] = useState(false);
  const { setTheme } = useTheme();
  const router = useRouter();
  useEffect(() => {
    setIsOpen(false);
    setTheme("dark");
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(null);
    });
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
          <div className="border-green-400 border-t-8 w-full"></div>
          <ResponsiveNavbar isOpen={isOpen} setIsOpen={setIsOpen} user={user}/>
          <Navbar setIsOpen={setIsOpen} isOpen={isOpen} user={user} />
          <Layout>
            <Context.Provider value={{ user, setToast }}>
              <Component {...pageProps} />
            </Context.Provider>
          </Layout>
          <Footer />
        </ThemeProvider>
      </motion.div>

      {toast && (
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
    </>
  );
}

export default MyApp;
