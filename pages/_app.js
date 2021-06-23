import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <motion.div
        className="xl:h-screen xl:scrollbar-thin xl:scrollbar-thumb-custom xl:scrollbar-track-custom-light xl:overflow-y-scroll "
        id="scrollBar"
        initial={{ y: "-100vw" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <ThemeProvider enableSystem={true} attribute="class">
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
