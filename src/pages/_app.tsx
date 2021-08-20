import "@assets/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@layout/Layout";
import ExportIcons from "../../scripts/Icons";
function MyApp({ Component, pageProps }: AppProps) {
  ExportIcons();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
