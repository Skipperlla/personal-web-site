import "@assets/styles/globals.css";
import Layout from "@layout/Layout";
import ExportIcons from "../../scripts/Icons";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  ExportIcons();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
